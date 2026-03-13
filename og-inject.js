/**
 * Edge Function — og-inject.js
 * Flèche Rose Éditions
 *
 * Cette fonction s'exécute côté serveur sur Netlify avant que la page
 * article.html ne soit envoyée au client (y compris aux crawlers Facebook,
 * WhatsApp, Twitter/X, iMessage, etc. qui ne font PAS tourner JavaScript).
 *
 * Elle lit le paramètre ?id= dans l'URL, charge articles.js pour trouver
 * l'article correspondant, puis injecte les bonnes balises <meta> OG.
 */

export default async (request, context) => {
  const url = new URL(request.url);
  const id  = parseInt(url.searchParams.get('id') ?? '-1', 10);

  // 1. Récupérer la page HTML originale
  const response = await context.next();
  const html     = await response.text();

  // 2. Si pas d'id valide → retourner la page telle quelle (OG par défaut)
  if (isNaN(id) || id < 0) {
    return new Response(html, response);
  }

  // 3. Charger articles.js depuis le même site
  let articles = [];
  try {
    const jsUrl  = new URL('/articles.js', url);
    const jsResp = await fetch(jsUrl.toString());
    if (jsResp.ok) {
      const jsText = await jsResp.text();
      // Évaluer le JS pour extraire le tableau `articles`
      // On utilise une sandbox minimale via Function()
      const fn = new Function(`
        const window = {}; const document = { querySelector: () => null };
        ${jsText}
        return typeof articles !== 'undefined' ? articles : [];
      `);
      articles = fn();
    }
  } catch (_) {
    // Si le chargement échoue, on renvoie la page avec les OG par défaut
    return new Response(html, response);
  }

  const article = articles[id];
  if (!article) {
    return new Response(html, response);
  }

  // 4. Préparer les valeurs OG
  const siteUrl    = `${url.protocol}//${url.host}`;
  const defaultImg = 'https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/170f5283-46f0-438d-9eee-7defcfbef546.png';

  const ogTitle = strip(article.titre || 'Article') + ' — Flèche Rose Éditions';
  const ogDesc  = strip(article.lead  || article.chapeau || 'Découvrez cet article de Flèche Rose Éditions.').slice(0, 200);
  const ogImage = article.image || defaultImg;
  const ogUrl   = `${siteUrl}/article.html?id=${id}`;

  // 5. Remplacer les balises <meta> existantes dans le HTML statique
  let patched = html;

  patched = replaceMeta(patched, 'og:title',        ogTitle);
  patched = replaceMeta(patched, 'og:description',  ogDesc);
  patched = replaceMeta(patched, 'og:image',        ogImage);
  patched = replaceMeta(patched, 'og:url',          ogUrl);
  patched = replaceMeta(patched, 'twitter:title',       ogTitle);
  patched = replaceMeta(patched, 'twitter:description', ogDesc);
  patched = replaceMeta(patched, 'twitter:image',       ogImage);

  // Mettre à jour le <title>
  patched = patched.replace(
    /<title[^>]*>.*?<\/title>/is,
    `<title>${escHtml(ogTitle)}</title>`
  );

  return new Response(patched, {
    status:  response.status,
    headers: response.headers,
  });
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Remplace content="…" d'une balise <meta property="X"> ou <meta name="X"> */
function replaceMeta(html, property, value) {
  // Cherche d'abord par property= puis par name=
  const escaped = escAttr(value);
  return html
    .replace(
      new RegExp(`(<meta\\s[^>]*property=["']${escapeRegex(property)}["'][^>]*content=)["'][^"']*["']`, 'i'),
      `$1"${escaped}"`
    )
    .replace(
      new RegExp(`(<meta\\s[^>]*content=)["'][^"']*["']([^>]*property=["']${escapeRegex(property)}["'])`, 'i'),
      `$1"${escaped}"$2`
    )
    .replace(
      new RegExp(`(<meta\\s[^>]*name=["']${escapeRegex(property)}["'][^>]*content=)["'][^"']*["']`, 'i'),
      `$1"${escaped}"`
    );
}

function strip(s)       { return String(s).replace(/<[^>]+>/g, '').trim(); }
function escHtml(s)     { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function escAttr(s)     { return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
