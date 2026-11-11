import { getSettings } from '@/lib/settings';
import type { Metadata } from 'next';
import { sql } from '@/lib/db';
import { SITE } from '@/lib/site';
export const revalidate = 60;
export const metadata: Metadata = { title: 'Presse', description: 'Contact presse et revue de presse de Flèche Rose Éditions.' };

export default async function Press() {
  const t = await getSettings();
  const items = (await sql`SELECT * FROM press_items WHERE published ORDER BY published_at DESC NULLS LAST, sort_order`) as { id: number; title: string; outlet: string | null; url: string | null; published_at: string | null; excerpt: string | null }[];
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Presse</h1><p>{t['presse.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap split">
          <div className="ui">
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '1rem' }}>Contact presse</h2>
            <p><a href={`mailto:${t['site.email']}`}>{t['site.email']}</a><br /><a href={t['site.whatsapp']}>{t['site.phone']}</a></p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1.2rem' }}>Ils parlent de nous</h2>
            {items.length === 0 ? <p className="muted">La revue de presse sera bientôt publiée ici.</p> : (
              <div className="index">
                {items.map((p) => <a key={p.id} href={p.url ?? '#'} style={{ gridTemplateColumns: '1fr auto' }}><span className="t">{p.title}</span><span className="m">{p.outlet}</span></a>)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
