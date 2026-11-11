import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import { RESOURCES } from '@/lib/resources';

export default async function List({ params, searchParams }: { params: Promise<{ resource: string }>; searchParams: Promise<{ saved?: string; deleted?: string }> }) {
  const { resource } = await params;
  const { saved, deleted } = await searchParams;
  const res = RESOURCES[resource];
  if (!res) notFound();
  const rows = await sql.query(`SELECT * FROM ${res.table} ORDER BY ${res.order}`);
  return (
    <>
      <div className="adm-top"><h1>{res.label}</h1><Link className="btn" href={`/admin/${res.key}/new`}>Ajouter</Link></div>
      {saved && <p className="flash" role="status">Enregistré. Les changements sont visibles sur le site dans la minute.</p>}
      {deleted && <p className="flash" role="status">Supprimé.</p>}
      <div className="adm-card">
        {rows.length === 0 ? <p className="empty">Aucun élément. Ajoutez le premier avec le bouton ci-dessus.</p> : (
          <ul className="adm-list">
            {rows.map((r: any) => (
              <li key={r.id}>
                {res.thumb && (r[res.thumb] ? <img src={r[res.thumb]} alt="" loading="lazy" /> : <span className="ph" />)}
                <span className="grow"><Link href={`/admin/${res.key}/${r.id}`}>{r[res.titleField] || '(sans titre)'}</Link><br /><span className="sub">{res.subtitle?.(r)}</span></span>
                {'published' in r && !r.published && <span className="pill">Masqué</span>}
                <Link className="btn ghost sm" href={`/admin/${res.key}/${r.id}`}>Modifier</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
