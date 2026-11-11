import { getSettings } from '@/lib/settings';
import type { Metadata } from 'next';
import { sql } from '@/lib/db';
import { fmtDate } from '@/lib/db';
export const revalidate = 60;
export const metadata: Metadata = { title: 'Galerie', description: 'Photos des lancements, rencontres et événements de Flèche Rose Éditions.' };

export default async function Gallery() {
  const t = await getSettings();
  const events = (await sql`SELECT * FROM gallery_events WHERE published ORDER BY event_date DESC NULLS LAST, id DESC`) as { id: number; title: string; event_date: string | null; location: string | null }[];
  const photos = (await sql`SELECT * FROM gallery_photos ORDER BY sort_order, id`) as { id: number; event_id: number; url: string; caption: string | null }[];
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Galerie</h1><p>{t['galerie.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap" style={{ display: 'grid', gap: '3.5rem' }}>
          {events.length === 0 && <p className="notice">Les photos des événements arrivent bientôt.</p>}
          {events.map((e) => (
            <div key={e.id}>
              <h2 style={{ fontSize: '1.5rem' }}>{e.title}</h2>
              <p className="meta">{fmtDate(e.event_date)}{e.location ? ` · ${e.location}` : ''}</p>
              <div style={{ columns: '3 240px', gap: '1rem', marginTop: '1.2rem' }}>
                {photos.filter((p) => p.event_id === e.id).map((p) => <img key={p.id} src={p.url} alt={p.caption ?? e.title} loading="lazy" style={{ marginBottom: '1rem', width: '100%' }} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
