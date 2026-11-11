import Link from 'next/link';
import { sql } from '@/lib/db';

export default async function Dashboard() {
  const [c] = await sql`SELECT
    (SELECT count(*) FROM books WHERE status='catalogue' AND published)::int livres,
    (SELECT count(*) FROM books WHERE status='a_paraitre' AND published)::int paraitre,
    (SELECT count(*) FROM authors)::int auteurs,
    (SELECT count(*) FROM articles WHERE published)::int articles,
    (SELECT count(*) FROM articles WHERE NOT published)::int brouillons,
    (SELECT count(*) FROM manuscript_submissions WHERE status='nouveau')::int manus,
    (SELECT count(*) FROM contact_messages WHERE NOT handled)::int msg,
    (SELECT count(*) FROM comments WHERE status='en_attente')::int comm,
    (SELECT count(*) FROM subscribers WHERE subscribed)::int abonnes`;
  const recent = await sql`SELECT a.action, a.entity, a.created_at FROM audit_log a ORDER BY a.id DESC LIMIT 8`;
  const stats: [string, number, string][] = [
    ['Livres au catalogue', c.livres, '/admin/livres'], ['Livres à paraître', c.paraitre, '/admin/livres'], ['Auteurs', c.auteurs, '/admin/auteurs'],
    ['Articles publiés', c.articles, '/admin/articles'], ['Brouillons', c.brouillons, '/admin/articles'],
    ['Manuscrits à lire', c.manus, '/admin/inbox/manuscrits'], ['Messages non traités', c.msg, '/admin/inbox/messages'],
    ['Commentaires à modérer', c.comm, '/admin/inbox/commentaires'], ['Abonnés', c.abonnes, '/admin/inbox/abonnes'],
  ];
  const verbs: Record<string, string> = { create: 'Création', update: 'Modification', delete: 'Suppression' };
  return (
    <>
      <div className="adm-top"><h1>Tableau de bord</h1></div>
      <div className="adm-stats">{stats.map(([l, n, h]) => <Link key={l} href={h} className="adm-card"><strong>{n}</strong><span>{l}</span></Link>)}</div>
      <h2 style={{ marginBottom: '.8rem' }}>Activité récente</h2>
      <div className="adm-card">
        {recent.length === 0 ? <p className="empty">Aucune modification pour l’instant.</p> : (
          <ul className="adm-list">{recent.map((r, i) => <li key={i}><span className="grow">{verbs[r.action] ?? r.action} · {r.entity}</span><span className="sub">{new Date(r.created_at).toLocaleString('fr-FR')}</span></li>)}</ul>
        )}
      </div>
    </>
  );
}
