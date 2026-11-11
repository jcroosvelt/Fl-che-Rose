import { getSettings } from '@/lib/settings';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBooks } from '@/lib/db';
import { SITE } from '@/lib/site';

export const revalidate = 60;
export const metadata: Metadata = { title: 'À paraître', description: 'Les prochains livres de Flèche Rose Éditions, avec précommande.' };

export default async function Upcoming() {
  const [books, t] = await Promise.all([getBooks('a_paraitre'), getSettings()]);
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>À paraître</h1><p>{t['paraitre.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap" style={{ display: 'grid', gap: '4rem' }}>
          {books.length === 0 && <p className="notice">Aucune parution annoncée pour le moment. Revenez bientôt.</p>}
          {books.map((b) => (
            <article key={b.id} className="split" style={{ gridTemplateColumns: '240px 1fr' }}>
              <img className="cover" src={b.cover_url ?? ''} alt={`Couverture de ${b.title}`} loading="lazy" />
              <div>
                <p className="meta">{b.genre} · {b.release_label}</p>
                <h2 style={{ margin: '.3rem 0' }}>{b.title}</h2>
                <p className="meta">{b.author_name}</p>
                {b.lead && <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{b.lead}</p>}
                <p>{(b.summary ?? '').split(/\n\n+/)[0]}</p>
                {b.price_label && <p className="meta">Prix : {b.price_label}</p>}
                <a className="btn" href={b.whatsapp_url ?? `${SITE.whatsapp}?text=${encodeURIComponent(`Bonjour, je voudrais précommander « ${b.title} ».`)}`}>{b.preorder ? 'Précommander' : 'Être prévenu·e'}</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
