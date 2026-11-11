import type { MetadataRoute } from 'next';
import { sql } from '@/lib/db';
import { SITE } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [b, a, r] = await Promise.all([
    sql`SELECT slug FROM books WHERE published`, sql`SELECT slug FROM authors WHERE published`, sql`SELECT slug FROM articles WHERE published`,
  ]);
  const u = (p: string) => ({ url: SITE.url + p, lastModified: new Date() });
  return [
    ...['', '/catalogue', '/a-paraitre', '/auteurs', '/actualites', '/galerie', '/presse', '/contact', '/soumettre-manuscrit'].map(u),
    ...b.map((x) => u(`/catalogue/${x.slug}`)), ...a.map((x) => u(`/auteurs/${x.slug}`)), ...r.map((x) => u(`/actualites/${x.slug}`)),
  ];
}
