export type Field = {
  name: string; label: string;
  type: 'text' | 'textarea' | 'html' | 'number' | 'boolean' | 'select' | 'date' | 'tags' | 'image' | 'url' | 'ref';
  options?: { value: string; label: string }[]; help?: string; required?: boolean; ref?: string; wide?: boolean;
};
export type Resource = {
  key: string; table: string; label: string; singular: string; titleField: string; subtitle?: (r: any) => string;
  thumb?: string; fields: Field[]; slugFrom?: string; order: string;
};

const genres = ['Poésie', 'Roman', 'Essai', 'Nouvelles', 'Anthologie', 'Théâtre', 'Jeunesse', 'Autre'].map((v) => ({ value: v, label: v }));

export const RESOURCES: Record<string, Resource> = {
  livres: {
    key: 'livres', table: 'books', label: 'Livres', singular: 'livre', titleField: 'title', slugFrom: 'title', thumb: 'cover_url',
    subtitle: (r) => [r.author_name, r.year, r.status === 'a_paraitre' ? 'À paraître' : r.status === 'archive' ? 'Archivé' : 'Catalogue'].filter(Boolean).join(' · '),
    order: 'created_at DESC',
    fields: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'author_name', label: 'Auteur(s)', type: 'text', help: 'Tel qu’affiché sur le site.' },
      { name: 'author_id', label: 'Fiche auteur liée', type: 'ref', ref: 'authors' },
      { name: 'status', label: 'Statut', type: 'select', options: [{ value: 'catalogue', label: 'Catalogue (publié)' }, { value: 'a_paraitre', label: 'À paraître' }, { value: 'archive', label: 'Archivé (masqué)' }] },
      { name: 'genre', label: 'Genre', type: 'select', options: genres },
      { name: 'year', label: 'Année', type: 'number' },
      { name: 'release_label', label: 'Date de parution (texte)', type: 'text', help: 'Ex. « Avril 2026 ». Pour les livres à paraître.' },
      { name: 'price_label', label: 'Prix', type: 'text', help: 'Ex. « 1 500 G · 20 € · 20 $ »' },
      { name: 'preorder', label: 'Précommande ouverte', type: 'boolean' },
      { name: 'cover_url', label: 'Couverture', type: 'image', wide: true },
      { name: 'lead', label: 'Accroche', type: 'textarea', help: 'Une ou deux phrases pour l’accueil et À paraître.' },
      { name: 'summary', label: 'Présentation', type: 'textarea', wide: true, help: 'Séparez les paragraphes par une ligne vide.' },
      { name: 'whatsapp_url', label: 'Lien de commande WhatsApp', type: 'url', help: 'Laissez vide pour un lien automatique.' },
      { name: 'published', label: 'Visible sur le site', type: 'boolean' },
    ],
  },
  auteurs: {
    key: 'auteurs', table: 'authors', label: 'Auteurs', singular: 'auteur', titleField: 'name', slugFrom: 'name', thumb: 'photo_url',
    subtitle: (r) => r.role ?? '', order: 'sort_order, name',
    fields: [
      { name: 'name', label: 'Nom', type: 'text', required: true },
      { name: 'role', label: 'Qualité', type: 'text', help: 'Ex. « Poète · Romancier »' },
      { name: 'photo_url', label: 'Portrait', type: 'image' },
      { name: 'bio', label: 'Biographie', type: 'textarea', wide: true },
      { name: 'sort_order', label: 'Ordre d’affichage', type: 'number' },
      { name: 'published', label: 'Visible sur le site', type: 'boolean' },
    ],
  },
  articles: {
    key: 'articles', table: 'articles', label: 'Articles', singular: 'article', titleField: 'title', slugFrom: 'title', thumb: 'image_url',
    subtitle: (r) => [r.category, r.published_at ? new Date(r.published_at).toLocaleDateString('fr-FR') : '', r.published ? 'Publié' : 'Brouillon'].filter(Boolean).join(' · '),
    order: 'published_at DESC NULLS LAST, id DESC',
    fields: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'category', label: 'Catégorie', type: 'select', options: ['Chronique', 'Entretien', 'Annonce'].map((v) => ({ value: v, label: v })) },
      { name: 'published_at', label: 'Date de publication', type: 'date' },
      { name: 'author_name', label: 'Auteur de l’article', type: 'text' },
      { name: 'author_role', label: 'Qualité de l’auteur', type: 'text' },
      { name: 'author_bio', label: 'Bio de l’auteur', type: 'textarea' },
      { name: 'read_time', label: 'Temps de lecture', type: 'text', help: 'Ex. « 5 min »' },
      { name: 'tags', label: 'Mots-clés', type: 'tags', help: 'Séparés par des virgules.' },
      { name: 'image_url', label: 'Image principale', type: 'image', wide: true },
      { name: 'lead', label: 'Chapeau', type: 'html', help: 'Introduction en gras sous le titre (HTML simple autorisé).' },
      { name: 'body_html', label: 'Texte', type: 'html', wide: true, help: 'HTML : <p>, <blockquote>, <em>, <strong>, <a>, <h2>.' },
      { name: 'published', label: 'Publié', type: 'boolean' },
    ],
  },
  presse: {
    key: 'presse', table: 'press_items', label: 'Presse', singular: 'article de presse', titleField: 'title', thumb: 'image_url',
    subtitle: (r) => r.outlet ?? '', order: 'published_at DESC NULLS LAST, id DESC',
    fields: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'outlet', label: 'Média', type: 'text' },
      { name: 'url', label: 'Lien', type: 'url' },
      { name: 'published_at', label: 'Date', type: 'date' },
      { name: 'excerpt', label: 'Extrait', type: 'textarea' },
      { name: 'published', label: 'Visible sur le site', type: 'boolean' },
    ],
  },
  evenements: {
    key: 'evenements', table: 'gallery_events', label: 'Événements', singular: 'événement', titleField: 'title',
    subtitle: (r) => [r.event_date ? new Date(r.event_date).toLocaleDateString('fr-FR') : '', r.location].filter(Boolean).join(' · '), order: 'event_date DESC NULLS LAST, id DESC',
    fields: [
      { name: 'title', label: 'Titre', type: 'text', required: true },
      { name: 'event_date', label: 'Date', type: 'date' },
      { name: 'location', label: 'Lieu', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'published', label: 'Visible sur le site', type: 'boolean' },
    ],
  },
  photos: {
    key: 'photos', table: 'gallery_photos', label: 'Photos', singular: 'photo', titleField: 'caption', thumb: 'url',
    subtitle: () => '', order: 'id DESC',
    fields: [
      { name: 'event_id', label: 'Événement', type: 'ref', ref: 'evenements', required: true },
      { name: 'url', label: 'Photo', type: 'image', required: true },
      { name: 'caption', label: 'Légende', type: 'text' },
      { name: 'sort_order', label: 'Ordre', type: 'number' },
    ],
  },
};
export const REF_LABEL: Record<string, { table: string; col: string }> = {
  authors: { table: 'authors', col: 'name' }, evenements: { table: 'gallery_events', col: 'title' },
};
