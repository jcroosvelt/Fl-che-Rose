import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import { StatusSelect, DeleteBtn } from '@/components/admin/InboxControls';

const fmt = (d: string) => new Date(d).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' });
const MS: [string, string][] = [['nouveau', 'Nouveau'], ['en_lecture', 'En lecture'], ['accepte', 'Accepté'], ['refuse', 'Refusé'], ['archive', 'Archivé']];
const CS: [string, string][] = [['en_attente', 'En attente'], ['approuve', 'Approuvé'], ['spam', 'Spam']];
const HS: [string, string][] = [['false', 'À traiter'], ['true', 'Traité']];

export default async function Inbox({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (kind === 'manuscrits') {
    const rows = await sql`SELECT * FROM manuscript_submissions ORDER BY created_at DESC`;
    return <Wrap title="Manuscrits reçus" empty={!rows.length}>{rows.map((r: any) => (
      <div className="adm-item" key={r.id}>
        <div className="row"><strong>{r.title}</strong><span className={`pill ${r.status}`}>{MS.find((m) => m[0] === r.status)?.[1]}</span></div>
        <div className="sub">{r.first_name} {r.last_name} · <a href={`mailto:${r.email}`}>{r.email}</a>{r.phone ? ` · ${r.phone}` : ''} · {r.genre} · {r.language} · {fmt(r.created_at)}</div>
        <div className="body">{r.synopsis}</div>
        {r.file_url && <a href={r.file_url} target="_blank" rel="noreferrer">Ouvrir le manuscrit ↗</a>}
        <div className="row"><StatusSelect kind="manuscrits" id={r.id} value={r.status} options={MS} notes={r.internal_notes} /><DeleteBtn kind="manuscrits" id={r.id} /></div>
      </div>))}</Wrap>;
  }
  if (kind === 'messages') {
    const rows = await sql`SELECT * FROM contact_messages ORDER BY created_at DESC`;
    return <Wrap title="Messages de contact" empty={!rows.length}>{rows.map((r: any) => (
      <div className="adm-item" key={r.id}>
        <div className="row"><strong>{r.name}</strong><span className="sub">{fmt(r.created_at)}</span></div>
        <a href={`mailto:${r.email}?subject=Re: votre message`}>{r.email}</a>
        <div className="body">{r.message}</div>
        <div className="row"><StatusSelect kind="messages" id={r.id} value={String(r.handled)} options={HS} /><DeleteBtn kind="messages" id={r.id} /></div>
      </div>))}</Wrap>;
  }
  if (kind === 'commentaires') {
    const rows = await sql`SELECT c.*, a.title AS article FROM comments c LEFT JOIN articles a ON a.id = c.article_id ORDER BY c.created_at DESC`;
    return <Wrap title="Commentaires" empty={!rows.length}>{rows.map((r: any) => (
      <div className="adm-item" key={r.id}>
        <div className="row"><strong>{r.name}</strong><span className="sub">sur « {r.article} » · {fmt(r.created_at)}</span></div>
        <div className="body">{r.body}</div>
        <div className="row"><StatusSelect kind="commentaires" id={r.id} value={r.status} options={CS} /><DeleteBtn kind="commentaires" id={r.id} /></div>
      </div>))}</Wrap>;
  }
  if (kind === 'abonnes') {
    const rows = await sql`SELECT * FROM subscribers ORDER BY created_at DESC`;
    return <Wrap title={`Abonnés à la lettre (${rows.filter((r: any) => r.subscribed).length})`} empty={!rows.length} action={<a className="btn ghost sm" href="/admin/export/abonnes">Exporter en CSV</a>}>{rows.map((r: any) => (
      <div className="adm-item" key={r.id}><div className="row"><span>{r.email} {!r.subscribed && <span className="pill">Désinscrit</span>}</span><span className="sub">{fmt(r.created_at)} <DeleteBtn kind="abonnes" id={r.id} /></span></div></div>))}</Wrap>;
  }
  notFound();
}

function Wrap({ title, empty, children, action }: { title: string; empty: boolean; children: React.ReactNode; action?: React.ReactNode }) {
  return (<><div className="adm-top"><h1>{title}</h1>{action}</div><div className="adm-card">{empty ? <p className="empty">Rien à afficher pour le moment.</p> : children}</div></>);
}
