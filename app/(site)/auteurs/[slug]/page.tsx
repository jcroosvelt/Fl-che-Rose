import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAuthor, getBooksByAuthor } from '@/lib/db';

export const revalidate = 60;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = await getAuthor((await params).slug);
  return a ? { title: a.name, description: (a.bio ?? '').slice(0, 160) } : {};
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = await getAuthor((await params).slug);
  if (!a) notFound();
  const books = await getBooksByAuthor(a);
  return (
    <section className="section">
      <div className="wrap split">
        <div>{a.photo_url ? <img className="portrait" src={a.photo_url} alt={`Portrait de ${a.name}`} /> : <div className="portrait" aria-hidden>{a.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>}</div>
        <div>
          <p className="meta"><Link className="link" href="/auteurs">Auteurs</Link></p>
          <h1 style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', margin: '.5rem 0' }}>{a.name}</h1>
          <p className="meta">{a.role}</p>
          <p style={{ marginTop: '1.5rem' }}>{a.bio}</p>
          {books.length > 0 && <>
            <h2 style={{ fontSize: '1.4rem', margin: '2.5rem 0 1.2rem' }}>Ses livres chez Flèche Rose</h2>
            <div className="covers">{books.map((b) => <Link key={b.id} href={`/catalogue/${b.slug}`}><img className="cover" src={b.cover_url ?? ''} alt="" loading="lazy" /><strong>{b.title}</strong><span>{b.year}</span></Link>)}</div>
          </>}
        </div>
      </div>
    </section>
  );
}
