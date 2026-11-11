'use server';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { createSession, destroySession, requireAdmin } from '@/lib/auth';
import { RESOURCES, type Field } from '@/lib/resources';

const slugify = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80) || 'sans-titre';
const refresh = () => revalidatePath('/', 'layout');

export async function login(_: unknown, fd: FormData) {
  const email = String(fd.get('email') ?? '').trim().toLowerCase();
  const password = String(fd.get('password') ?? '');
  const rows = await sql`SELECT id, email, password_hash FROM admin_users WHERE email = ${email} AND active`;
  const u = rows[0];
  // Même délai que l'utilisateur existe ou non
  const ok = u ? await bcrypt.compare(password, u.password_hash) : await bcrypt.compare(password, '$2a$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidinvali');
  if (!u || !ok) return { error: 'E-mail ou mot de passe incorrect.', email };
  await sql`UPDATE admin_users SET last_login = now() WHERE id = ${u.id}`;
  await createSession(u.id, u.email);
  redirect('/admin');
}
export async function logout() { await destroySession(); redirect('/admin/login'); }

function coerce(f: Field, v: FormDataEntryValue | null): unknown {
  if (f.type === 'boolean') return v === 'on';
  const s = typeof v === 'string' ? v.trim() : '';
  if (f.type === 'number' || f.type === 'ref') return s === '' ? null : Number(s);
  if (f.type === 'tags') return s ? s.split(',').map((t) => t.trim()).filter(Boolean) : [];
  if (f.type === 'date') return s || null;
  return s === '' ? null : s;
}

export async function saveResource(key: string, id: string, _: unknown, fd: FormData) {
  const admin = await requireAdmin();
  const res = RESOURCES[key];
  if (!res) throw new Error('Ressource inconnue');
  const data: Record<string, unknown> = {};
  for (const f of res.fields) data[f.name] = coerce(f, fd.get(f.name));
  for (const f of res.fields) if (f.required && (data[f.name] === null || data[f.name] === '')) return { error: `« ${f.label} » est obligatoire.` };

  const cols = Object.keys(data);
  let rowId = id;
  const hasSlug = ['books', 'authors', 'articles'].includes(res.table);
  if (id === 'new') {
    if (hasSlug) {
      const base = slugify(String(data[res.slugFrom!] ?? ''));
      let slug = base, n = 2;
      while ((await sql.query(`SELECT 1 FROM ${res.table} WHERE slug = $1`, [slug])).length) slug = `${base}-${n++}`;
      data.slug = slug; cols.push('slug');
    }
    const r = await sql.query(`INSERT INTO ${res.table} (${cols.join(',')}) VALUES (${cols.map((_, i) => `$${i + 1}`).join(',')}) RETURNING id`, cols.map((c) => data[c]));
    rowId = String(r[0].id);
  } else {
    const touch = ['books', 'authors', 'articles'].includes(res.table) ? ', updated_at = now()' : '';
    await sql.query(`UPDATE ${res.table} SET ${cols.map((c, i) => `${c} = $${i + 1}`).join(', ')}${touch} WHERE id = $${cols.length + 1}`, [...cols.map((c) => data[c]), Number(id)]);
  }
  await sql`INSERT INTO audit_log (admin_id, action, entity, entity_id) VALUES (${admin.id}, ${id === 'new' ? 'create' : 'update'}, ${res.table}, ${rowId})`;
  refresh();
  redirect(`/admin/${key}?saved=1`);
}

export async function deleteResource(key: string, id: string) {
  const admin = await requireAdmin();
  const res = RESOURCES[key];
  if (!res) throw new Error('Ressource inconnue');
  await sql.query(`DELETE FROM ${res.table} WHERE id = $1`, [Number(id)]);
  await sql`INSERT INTO audit_log (admin_id, action, entity, entity_id) VALUES (${admin.id}, 'delete', ${res.table}, ${id})`;
  refresh();
  redirect(`/admin/${key}?deleted=1`);
}

const INBOX = {
  manuscrits: { table: 'manuscript_submissions', col: 'status', allowed: ['nouveau', 'en_lecture', 'accepte', 'refuse', 'archive'] },
  commentaires: { table: 'comments', col: 'status', allowed: ['en_attente', 'approuve', 'spam'] },
  messages: { table: 'contact_messages', col: 'handled', allowed: ['true', 'false'] },
} as const;

export async function updateInbox(kind: keyof typeof INBOX, id: number, value: string, notes?: string) {
  await requireAdmin();
  const cfg = INBOX[kind];
  if (!cfg || !(cfg.allowed as readonly string[]).includes(value)) throw new Error('Valeur invalide');
  const v = cfg.col === 'handled' ? value === 'true' : value;
  await sql.query(`UPDATE ${cfg.table} SET ${cfg.col} = $1 WHERE id = $2`, [v, id]);
  if (kind === 'manuscrits' && notes !== undefined) await sql`UPDATE manuscript_submissions SET internal_notes = ${notes}, updated_at = now() WHERE id = ${id}`;
  revalidatePath('/admin', 'layout');
}
export async function deleteInbox(kind: 'manuscrits' | 'commentaires' | 'messages' | 'abonnes', id: number) {
  await requireAdmin();
  const t = { manuscrits: 'manuscript_submissions', commentaires: 'comments', messages: 'contact_messages', abonnes: 'subscribers' }[kind];
  await sql.query(`DELETE FROM ${t} WHERE id = $1`, [id]);
  revalidatePath('/admin', 'layout');
}

export async function changePassword(_: unknown, fd: FormData) {
  const admin = await requireAdmin();
  const cur = String(fd.get('current') ?? ''), next = String(fd.get('next') ?? '');
  if (next.length < 12) return { error: 'Le nouveau mot de passe doit contenir au moins 12 caractères.' };
  const u = (await sql`SELECT password_hash FROM admin_users WHERE id = ${admin.id}`)[0];
  if (!u || !(await bcrypt.compare(cur, u.password_hash))) return { error: 'Mot de passe actuel incorrect.' };
  await sql`UPDATE admin_users SET password_hash = ${await bcrypt.hash(next, 12)} WHERE id = ${admin.id}`;
  return { ok: 'Mot de passe modifié.' };
}
