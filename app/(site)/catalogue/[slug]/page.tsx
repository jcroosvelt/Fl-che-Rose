import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBook, getBooks } from '@/lib/db';
import { SITE } from '@/lib/site';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const b = await getBook((await params).slug);
  if (!b) return {};
  return { title: b.title, description: (b.summary ?? '').slice(0, 160), openGraph: { images: b.cover_url ? [b.cover_url] : undefined }, alternates: { canonical: `/catalogue/${b.slug}` } };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const b = await getBook((await params).slug);
  if (!b) notFound();
  const others = (await getBooks()).filter((o) => o.id !== b.id && o.author_name === b.author_name).slice(0, 4);
  const ld = { '@context': 'https://schema.org', '@type': 'Book', name: b.title, author: { '@type': 'Person', name: b.author_name }, publisher: { '@type': 'Organization', name: SITE.name }, image: b.cover_url, datePublished: b.year ? String(b.year) : undefined, inLanguage: 'fr', genre: b.genre };
  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap split">
        <img className="cover" src={b.cover_url ?? ''} alt={`Couverture de ${b.title}`} style={{ maxWidth: 380 }} />
        <div>
          <p className="meta"><Link href="/catalogue" className="link">Catalogue</Link> / {b.genre}{b.year ? ` · ${b.year}` : ''}</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', margin: '.6rem 0' }}>{b.title}</h1>
          <p className="meta" style={{ fontSize: '1.05rem' }}>{b.author_name}</p>
          <div style={{ marginTop: '1.8rem' }}>{(b.summary ?? '').split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}</div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.6rem' }}>
            <a className="btn" href={b.whatsapp_url ?? `${SITE.whatsapp}?text=${encodeURIComponent(`Bonjour, je voudrais commander « ${b.title} ».`)}`}>Commander sur WhatsApp</a>
          </div>
          {others.length > 0 && (
            <div style={{ marginTop: '3.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Du même auteur</h2>
              <div className="covers">{others.map((o) => <Link key={o.id} href={`/catalogue/${o.slug}`}><img className="cover" src={o.cover_url ?? ''} alt="" loading="lazy" /><strong>{o.title}</strong></Link>)}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
