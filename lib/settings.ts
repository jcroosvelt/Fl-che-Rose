import { sql } from '@/lib/db';
import { SITE } from '@/lib/site';

export type SettingField = { key: string; label: string; type?: 'text' | 'textarea'; help?: string; default: string };
export const SETTINGS: { title: string; fields: SettingField[] }[] = [
  { title: 'Accueil', fields: [
    { key: 'home.hero_title', label: 'Titre principal', default: 'Des livres haïtiens, écrits et édités ici.' },
    { key: 'home.hero_text', label: 'Texte sous le titre', type: 'textarea', default: `${SITE.name} publie de la poésie, des romans, des essais et des récits d’auteurs d’Haïti et de la diaspora, depuis 2023.` },
    { key: 'home.about_title', label: 'Titre « Notre histoire »', default: 'Une maison née d’une communauté de lecteurs.' },
    { key: 'home.about_text', label: 'Texte « Notre histoire »', type: 'textarea', help: 'Séparez les paragraphes par une ligne vide.', default: 'Flèche Rose est d’abord un club littéraire, fondé en 2021 par Mardochée Gay et ses amis. En 2023, il devient une maison d’édition indépendante pour donner des livres à celles et ceux qui écrivent Haïti aujourd’hui.' },
  ] },
  { title: 'Coordonnées et identité', fields: [
    { key: 'site.tagline', label: 'Slogan', default: SITE.tagline },
    { key: 'site.email', label: 'E-mail de contact', default: SITE.email },
    { key: 'site.phone', label: 'Téléphone affiché', default: SITE.phone },
    { key: 'site.whatsapp', label: 'Lien WhatsApp', default: SITE.whatsapp, help: 'Format : https://wa.me/50932477739' },
    { key: 'site.footer_text', label: 'Texte du pied de page', type: 'textarea', default: 'Poésie, romans, essais et récits publiés depuis 2023.' },
  ] },
  { title: 'En-têtes des pages', fields: [
    { key: 'catalogue.intro', label: 'Catalogue : introduction', default: 'Du plus récent au plus ancien.' },
    { key: 'paraitre.intro', label: 'À paraître : introduction', default: 'Les prochains livres de la maison. Certains sont déjà en précommande.' },
    { key: 'auteurs.intro', label: 'Auteurs : introduction', default: 'Celles et ceux qui écrivent le catalogue.' },
    { key: 'actualites.intro', label: 'Actualités : introduction', default: 'Chroniques, entretiens et annonces de la maison.' },
    { key: 'galerie.intro', label: 'Galerie : introduction', default: 'Lancements, rencontres et dédicaces.' },
    { key: 'presse.intro', label: 'Presse : introduction', type: 'textarea', default: 'Journalistes, blogueurs, libraires : contactez-nous pour un service de presse, une interview ou un visuel.' },
    { key: 'contact.intro', label: 'Contact : introduction', type: 'textarea', default: 'Une question, une commande, une proposition ? Écrivez-nous, nous répondons sous quelques jours.' },
    { key: 'manuscrit.intro', label: 'Soumettre un manuscrit : introduction', type: 'textarea', default: 'Nous lisons chaque proposition. Décrivez votre projet et ajoutez un lien vers votre texte complet (Google Drive, Dropbox…). Réponse sous quelques semaines.' },
  ] },
];
const DEFAULTS: Record<string, string> = Object.fromEntries(SETTINGS.flatMap((g) => g.fields.map((f) => [f.key, f.default])));

export async function getSettings(): Promise<Record<string, string>> {
  try {
    const rows = await sql`SELECT key, value FROM site_settings`;
    const out = { ...DEFAULTS };
    for (const r of rows) if (typeof r.value === 'string' && r.value.trim()) out[r.key] = r.value;
    return out;
  } catch { return { ...DEFAULTS }; }
}
