import { getSettings } from '@/lib/settings';
import Link from 'next/link';
import { getBooks, getArticles, getAuthors, fmtDate } from '@/lib/db';
import { SITE } from '@/lib/site';

export const revalidate = 60;

export default async function Home() {
  const [books, upcoming, articles, authors, t] = await Promise.all([getBooks('catalogue'), getBooks('a_paraitre'), getArticles(3), getAuthors(), getSettings()]);
  const shelf = [...upcoming.slice(0, 1), ...books.filter((b) => b.cover_url)].slice(0, 4);
  const next = upcoming[0];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <h1>{t['home.hero_title']}</h1>
            <p>{t['home.hero_text']}</p>
            <div className="actions">
              <Link className="btn onrose" href="/catalogue">Parcourir le catalogue</Link>
              <Link className="btn ghost" href="/soumettre-manuscrit">Soumettre un manuscrit</Link>
            </div>
          </div>
          <div className="shelf" aria-label="Quelques couvertures">
            {shelf.map((b) => (
              <Link key={b.id} href={`/catalogue/${b.slug}`} title={`${b.title} — ${b.author_name}`}>
                <img src={b.cover_url!} alt={`Couverture de ${b.title}`} width={190} height={285} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {next && (
        <section className="section band">
          <div className="wrap split">
            <img className="cover" src={next.cover_url ?? ''} alt={`Couverture de ${next.title}`} style={{ maxWidth: 320 }} />
            <div>
              <p className="meta">À paraître · {next.release_label}</p>
              <h2 style={{ margin: '.4rem 0 .4rem' }}>{next.title}</h2>
              <p className="meta">{next.author_name}</p>
              <p style={{ marginTop: '1.4rem' }}>{next.lead || next.summary?.slice(0, 280)}</p>
              {next.price_label && <p className="meta">Prix de lancement : {next.price_label}</p>}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
                {next.whatsapp_url && <a className="btn" href={next.whatsapp_url}>Précommander sur WhatsApp</a>}
                <Link className="btn ghost" href="/a-paraitre">Toutes les parutions à venir</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Dernières publications</h2><Link className="link" href="/catalogue">Voir tout le catalogue</Link></div>
          <div className="covers">
            {books.slice(0, 6).map((b) => (
              <Link key={b.id} href={`/catalogue/${b.slug}`}>
                <img className="cover" src={b.cover_url ?? ''} alt={`Couverture de ${b.title}`} loading="lazy" />
                <strong>{b.title}</strong>
                <span>{b.author_name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section deep">
        <div className="wrap split">
          <h2>{t['home.about_title']}</h2>
          <div>
            {t['home.about_text'].split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}
            <p>{authors.length} auteurs et {books.length} titres publiés à ce jour, en français et en créole.</p>
            <Link className="btn onrose" href="/auteurs">Rencontrer les auteurs</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Actualités</h2><Link className="link" href="/actualites">Tous les articles</Link></div>
          <div className="posts">
            {articles.map((a) => (
              <Link key={a.id} href={`/actualites/${a.slug}`}>
                <img src={a.image_url ?? a.cover_image_url ?? ''} alt="" loading="lazy" />
                <div>
                  <p className="meta">{a.category} · {fmtDate(a.published_at)}</p>
                  <h3>{a.title}</h3>
                  <p className="muted">{a.lead?.replace(/<[^>]+>/g, '').slice(0, 200)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
