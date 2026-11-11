import { getSettings } from '@/lib/settings';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBooks } from '@/lib/db';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Catalogue', description: 'Tous les livres publiés par Flèche Rose Éditions : poésie, romans, essais, nouvelles.' };

export default async function Catalogue({ searchParams }: { searchParams: Promise<{ genre?: string }> }) {
  const { genre } = await searchParams;
  const [all, t] = await Promise.all([getBooks('catalogue'), getSettings()]);
  const genres = [...new Set(all.map((b) => b.genre).filter(Boolean))] as string[];
  const books = genre ? all.filter((b) => b.genre === genre) : all;
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Catalogue</h1><p>{all.length} livres publiés. {t['catalogue.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap">
          <nav className="filters" aria-label="Filtrer par genre">
            <Link href="/catalogue" aria-current={!genre}>Tous</Link>
            {genres.map((g) => <Link key={g} href={`/catalogue?genre=${encodeURIComponent(g)}`} aria-current={genre === g}>{g}</Link>)}
          </nav>
          <div className="index">
            {books.map((b) => (
              <Link key={b.id} href={`/catalogue/${b.slug}`}>
                <img src={b.cover_url ?? ''} alt="" loading="lazy" />
                <span className="t">{b.title}</span>
                <span className="m a">{b.author_name}</span>
                <span className="m g">{b.genre}</span>
                <span className="m y">{b.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
