import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;
export const sql = neon(url ?? 'postgresql://invalid');

export type Book = {
  id: number; slug: string; title: string; author_id: number | null; author_name: string | null;
  genre: string | null; year: number | null; status: 'catalogue' | 'a_paraitre' | 'archive';
  release_label: string | null; price_label: string | null; lead: string | null; summary: string | null;
  cover_url: string | null; whatsapp_url: string | null; preorder: boolean; featured: boolean; published: boolean;
};
export type Author = {
  id: number; slug: string; name: string; role: string | null; bio: string | null; photo_url: string | null;
  categories: string[]; published: boolean;
};
export type Article = {
  id: number; slug: string; title: string; category: string | null; author_name: string | null;
  author_role: string | null; author_bio: string | null; published_at: string | null; read_time: string | null;
  tags: string[]; lead: string | null; body_html: string | null; image_url: string | null;
  cover_image_url: string | null; published: boolean;
};

export const getBooks = async (status?: string) =>
  (status
    ? await sql`SELECT * FROM books WHERE published AND status = ${status} ORDER BY year DESC NULLS LAST, sort_order`
    : await sql`SELECT * FROM books WHERE published AND status <> 'archive' ORDER BY year DESC NULLS LAST, sort_order`) as Book[];
export const getBook = async (slug: string) =>
  ((await sql`SELECT * FROM books WHERE published AND slug = ${slug}`)[0] as Book | undefined);
export const getAuthors = async () =>
  (await sql`SELECT * FROM authors WHERE published ORDER BY sort_order, name`) as Author[];
export const getAuthor = async (slug: string) =>
  ((await sql`SELECT * FROM authors WHERE published AND slug = ${slug}`)[0] as Author | undefined);
export const getBooksByAuthor = async (a: Author) =>
  (await sql`SELECT * FROM books WHERE published AND status <> 'archive' AND (author_id = ${a.id} OR author_name ILIKE ${'%' + a.name + '%'}) ORDER BY year DESC NULLS LAST`) as Book[];
export const getArticles = async (limit = 100) =>
  (await sql`SELECT * FROM articles WHERE published ORDER BY published_at DESC NULLS LAST, id DESC LIMIT ${limit}`) as Article[];
export const getArticle = async (slug: string) =>
  ((await sql`SELECT * FROM articles WHERE published AND slug = ${slug}`)[0] as Article | undefined);

export const fmtDate = (d: string | Date | null) =>
  d ? new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }) : '';
