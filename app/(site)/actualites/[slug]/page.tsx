import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticle, fmtDate } from '@/lib/db';
import { SITE } from '@/lib/site';

export const revalidate = 60;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = await getArticle((await params).slug);
  if (!a) return {};
  const img = a.image_url ?? a.cover_image_url ?? undefined;
  return { title: a.title, description: (a.lead ?? '').replace(/<[^>]+>/g, '').slice(0, 160), openGraph: { type: 'article', images: img ? [img] : undefined }, alternates: { canonical: `/actualites/${a.slug}` } };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const a = await getArticle((await params).slug);
  if (!a) notFound();
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, datePublished: a.published_at, author: { '@type': 'Person', name: a.author_name }, publisher: { '@type': 'Organization', name: SITE.name }, image: a.image_url ?? a.cover_image_url };
  return (
    <article className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap" style={{ maxWidth: 820 }}>
        <p className="meta"><Link className="link" href="/actualites">Actualités</Link> / {a.category}</p>
        <h1 style={{ fontSize: 'clamp(2rem,4.2vw,3.2rem)', margin: '.8rem 0 1rem' }}>{a.title}</h1>
        <p className="meta">Par {a.author_name} · {fmtDate(a.published_at)} · {a.read_time} de lecture</p>
        {(a.image_url ?? a.cover_image_url) && <img src={(a.image_url ?? a.cover_image_url)!} alt="" style={{ width: '100%', margin: '2rem 0', maxHeight: 460, objectFit: 'cover' }} />}
        {a.lead && <p style={{ fontSize: '1.25rem', fontStyle: 'normal' }} dangerouslySetInnerHTML={{ __html: a.lead }} />}
        <div className="prose" dangerouslySetInnerHTML={{ __html: a.body_html ?? '' }} />
        <aside style={{ borderTop: '1px solid var(--rule)', marginTop: '3rem', paddingTop: '1.5rem' }}>
          <strong>{a.author_name}</strong><p className="meta" style={{ marginBottom: '.4rem' }}>{a.author_role}</p>
          <p className="muted" style={{ fontSize: '.95rem' }}>{a.author_bio}</p>
        </aside>
      </div>
    </article>
  );
}
