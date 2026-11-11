// Importe les contenus du site historique (HTML/JS) dans Neon. Idempotent : peut être relancé.
import fs from 'node:fs';
import { neon } from '@neondatabase/serverless';

const env = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
const url = process.env.DATABASE_URL || env.match(/DATABASE_URL="([^"]+)"/)?.[1];
if (!url) throw new Error('DATABASE_URL manquant');
const sql = neon(url);

const legacy = (f) => fs.readFileSync(f, 'utf8');
function grab(file, name) {
  const t = legacy(file);
  const i = t.indexOf(`const ${name} = [`);
  let d = 0, j = t.indexOf('[', i), k = j;
  for (; k < t.length; k++) { if (t[k] === '[') d++; if (t[k] === ']') { d--; if (!d) break; } }
  return (0, eval)('(' + t.slice(j, k + 1) + ')');
}
const slugify = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const MOIS = { janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12 };
const parseDate = (s) => {
  const m = /(\d+)\s+(\p{L}+)\s+(\d{4})/u.exec(s || '');
  return m && MOIS[m[2].toLowerCase()] ? `${m[3]}-${String(MOIS[m[2].toLowerCase()]).padStart(2, '0')}-${m[1].padStart(2, '0')}` : null;
};

// ── Auteurs
const auteurs = grab('auteur.html', 'auteurs');
for (const [i, a] of auteurs.entries()) {
  await sql`INSERT INTO authors (slug, name, role, bio, photo_url, categories, sort_order)
    VALUES (${slugify(a.nom)}, ${a.nom}, ${a.genre}, ${a.tagline}, ${a.photo || null}, ${a.categories || []}, ${i})
    ON CONFLICT (slug) DO NOTHING`;
}
const authorRows = await sql`SELECT id, name FROM authors`;
const authorId = (name) => authorRows.find((r) => r.name === name)?.id ?? null;

// ── Livres du catalogue
const books = grab('catalogue.html', 'books');
for (const [i, b] of books.entries()) {
  await sql`INSERT INTO books (slug, title, author_id, author_name, genre, year, status, cover_url, summary, sort_order)
    VALUES (${slugify(b.titre)}, ${b.titre}, ${authorId(b.auteur)}, ${b.auteur}, ${b.genre}, ${parseInt(b.annee) || null}, 'catalogue', ${b.img}, ${b.desc}, ${i})
    ON CONFLICT (slug) DO NOTHING`;
}
// ── À paraître
const next = grab('aparaitre.html', 'livres');
for (const [i, b] of next.entries()) {
  const strip = (h) => (h || '').replace(/<\/p>\s*<p>/g, '\n\n').replace(/<[^>]+>/g, '');
  await sql`INSERT INTO books (slug, title, author_id, author_name, genre, year, status, release_label, price_label, preorder, cover_url, lead, summary, whatsapp_url, sort_order)
    VALUES (${slugify(b.titre)}, ${b.titre}, ${authorId(b.auteur)}, ${b.auteur}, ${b.genre}, ${parseInt((b.date || '').match(/\d{4}/)?.[0]) || null}, 'a_paraitre', ${b.date}, ${b.prix ? b.prix.join(' · ') : null}, ${!!b.preorder}, ${b.img}, ${b.lead}, ${strip(b.desc)}, ${b.wa || null}, ${i})
    ON CONFLICT (slug) DO NOTHING`;
}

// ── Articles
const src = legacy('articles.js');
const articles = new Function("document", "window", `${src}; return articles;`)({ getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener() {}, readyState: "loading" }, { addEventListener() {}, location: { search: "" } });
for (const a of articles) {
  await sql`INSERT INTO articles (slug, title, category, author_name, author_role, author_bio, published_at, read_time, tags, lead, body_html, image_url, cover_image_url, cover_title, cover_author, cover_accent, gradient, published)
    VALUES (${a.slug}, ${a.titre}, ${a.categorie}, ${(a.auteur || '').replace(/^Par /, '')}, ${a.auteurRole}, ${a.auteurBio}, ${parseDate(a.date)}, ${a.readTime}, ${a.tags || []}, ${a.lead}, ${a.corps}, ${a.image || null}, ${a.coverImage || null}, ${a.coverTitle}, ${a.coverAuthor}, ${a.coverAccent}, ${a.gradient}, true)
    ON CONFLICT (slug) DO NOTHING`;
}

const c = await sql`SELECT (SELECT count(*) FROM authors) a, (SELECT count(*) FROM books) b, (SELECT count(*) FROM articles) r`;
console.log(c[0]);
