import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { sql } from '@/lib/db';
import { logout } from '@/lib/actions';
import { RESOURCES } from '@/lib/resources';
import NavLink from '@/components/admin/NavLink';

export const dynamic = 'force-dynamic';

export default async function Panel({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  const [c] = await sql`SELECT
    (SELECT count(*) FROM manuscript_submissions WHERE status = 'nouveau')::int AS manus,
    (SELECT count(*) FROM comments WHERE status = 'en_attente')::int AS comm,
    (SELECT count(*) FROM contact_messages WHERE NOT handled)::int AS msg`;
  const groups: [string, { href: string; label: string; n?: number }[]][] = [
    ['Contenu', ['livres', 'auteurs', 'articles', 'presse'].map((k) => ({ href: `/admin/${k}`, label: RESOURCES[k].label }))],
    ['Galerie', ['evenements', 'photos'].map((k) => ({ href: `/admin/${k}`, label: RESOURCES[k].label }))],
    ['Boîte de réception', [
      { href: '/admin/inbox/manuscrits', label: 'Manuscrits', n: c.manus },
      { href: '/admin/inbox/messages', label: 'Messages', n: c.msg },
      { href: '/admin/inbox/commentaires', label: 'Commentaires', n: c.comm },
      { href: '/admin/inbox/abonnes', label: 'Abonnés' },
    ]],
  ];
  return (
    <div className="adm-shell">
      <aside className="adm-side">
        <Link href="/admin" className="logo"><b>Flèche Rose</b> admin</Link>
        <nav><NavLink href="/admin" exact>Tableau de bord</NavLink></nav>
        {groups.map(([t, items]) => (
          <div key={t}><h4>{t}</h4><nav>{items.map((i) => <NavLink key={i.href} href={i.href}>{i.label}{!!i.n && <span className="count">{i.n}</span>}</NavLink>)}</nav></div>
        ))}
        <div style={{ marginTop: 'auto' }}>
          <nav>
            <a href="/" target="_blank">Voir le site ↗</a>
            <NavLink href="/admin/compte">Mon compte</NavLink>
            <form action={logout}><button className="lnk">Se déconnecter</button></form>
          </nav>
        </div>
      </aside>
      <div className="adm-main">{children}</div>
    </div>
  );
}
