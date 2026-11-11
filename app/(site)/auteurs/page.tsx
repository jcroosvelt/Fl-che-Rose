import { getSettings } from '@/lib/settings';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAuthors } from '@/lib/db';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Auteurs', description: 'Les poètes, romanciers et essayistes publiés par Flèche Rose Éditions.' };

export default async function Authors() {
  const [authors, t] = await Promise.all([getAuthors(), getSettings()]);
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Auteurs</h1><p>{t['auteurs.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap people">
          {authors.map((a) => (
            <Link key={a.id} href={`/auteurs/${a.slug}`}>
              {a.photo_url ? <img className="portrait" src={a.photo_url} alt={`Portrait de ${a.name}`} loading="lazy" /> : <div className="portrait" aria-hidden>{a.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>}
              <h3>{a.name}</h3>
              <p className="meta">{a.role}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
