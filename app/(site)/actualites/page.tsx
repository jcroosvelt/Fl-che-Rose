import { getSettings } from '@/lib/settings';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getArticles, fmtDate } from '@/lib/db';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Actualités', description: 'Chroniques, entretiens et annonces de Flèche Rose Éditions.' };

export default async function News() {
  const [articles, t] = await Promise.all([getArticles(), getSettings()]);
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Actualités</h1><p>{t['actualites.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap posts">
          {articles.map((a) => (
            <Link key={a.id} href={`/actualites/${a.slug}`}>
              <img src={a.image_url ?? a.cover_image_url ?? ''} alt="" loading="lazy" />
              <div>
                <p className="meta">{a.category} · {fmtDate(a.published_at)} · {a.read_time}</p>
                <h3>{a.title}</h3>
                <p className="muted">{a.lead?.replace(/<[^>]+>/g, '').slice(0, 240)}…</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
