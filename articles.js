/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           FLÈCHE ROSE ÉDITIONS — GESTION DES ARTICLES           ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  Fichier central : toute modification ici se répercute          ║
 * ║  automatiquement sur index.html ET articles.html.               ║
 * ║                                                                  ║
 * ║  Pour ajouter un article :                                       ║
 * ║    1. Copiez un objet existant dans le tableau `articles`        ║
 * ║    2. Modifiez chaque champ (voir la légende ci-dessous)         ║
 * ║    3. Enregistrez — les deux pages se mettent à jour             ║
 * ║                                                                  ║
 * ║  CHAMPS DISPONIBLES                                              ║
 * ║  ─────────────────                                               ║
 * ║  titre       : titre complet de l'article                        ║
 * ║  date        : ex. "Décembre 2025"                               ║
 * ║  auteur      : ex. "Par Mardochée Gay" ou "Par la rédaction"     ║
 * ║  auteurRole  : rôle affiché dans la sidebar de la modale         ║
 * ║  auteurBio   : courte biographie pour la sidebar                 ║
 * ║  readTime    : ex. "5 min"                                       ║
 * ║  categorie   : "Chronique" | "Entretien" | "Annonce"            ║
 * ║  tags        : tableau de chaînes  ["Tag1", "Tag2", ...]         ║
 * ║  gradient    : dégradé CSS pour la vignette                      ║
 * ║  coverAccent : couleur d'accent de la couverture miniature       ║
 * ║  coverTitle  : titre du livre sur la couverture miniature        ║
 * ║  coverAuthor : auteur sur la couverture miniature                ║
 * ║  lead        : chapeau (peut contenir <em>)                      ║
 * ║  corps       : contenu HTML complet de l'article                 ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const articles = [

  {
    titre:      "Melyneda Civil Vilton : « écrire aujourd'hui, c'est résister à l'effacement »",
    date:       "Mars 2026",
    auteur:     "Par Mardochée Gay",
    auteurRole: "Chroniqueuse — Flèche Rose Éditions",
    auteurBio:  "Mardochée Gay est auteure et membre de l'équipe éditoriale de Flèche Rose Éditions. Elle signe des portraits d'auteures engagées dans la littérature haïtienne contemporaine.",
    readTime:   "5 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Poésie", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0a12 0%, #5c1030 60%, #8a1535 100%)",
    coverAccent:"#d4607a",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/143a2469-e946-49d4-9096-357f9521c00b.jpg",
    lead:       "Sous les décombres d'un monde qui saigne, certaines voix cherchent leurs voies dans les ruelles de l'alphabet du quotidien. D'autres ont su frayer un chemin même dans les fractures de l'existence. Melyneda Civil Vilton, connue sous le nom de <em>Manman Simbi</em>, est de celles-là.",
    corps:      `<p>Même au-delà des frontières, l'acte d'écrire demeure ce cordon ombilical qui nous rattache à la sainte patrie. En effet, Melyneda vit actuellement en France pour continuer ses études universitaires. À travers des textes poétiques, narratifs et des chansons, son écriture est traversée par des questions de mémoire, de filiation et de condition féminine, en lien étroit avec des réalités sociales haïtiennes.</p>

<p>Manman Simbi rejoint le cercle de ceux et celles qui croient qu'il existe à présent une réelle urgence d'écrire, notamment pour les femmes. D'ailleurs, elle déclare :</p>

<blockquote><p>Écrire aujourd'hui, c'est résister à l'effacement, refuser l'oubli, refuser que l'histoire se raconte sans nous. C'est aussi une manière de survivre, de reprendre souffle dans un monde qui vacille. Pour beaucoup de femmes, la plume est devenue un espace de réparation autant qu'un lieu de combat.</p></blockquote>

<p>Interrogée sur son processus de création, Manman Simbi répond en ces termes : <em>« Mon processus de création s'appuie principalement sur l'expérience vécue, la mémoire individuelle et collective, ainsi que sur l'observation du monde social. Les images qui m'habitent viennent souvent de l'intime, soit d'une femme qui tient debout malgré tout, soit d'une voix qui tremble mais ne cède pas. »</em></p>

<p>Quant à la source de son inspiration : « Je m'inspire de situations concrètes, notamment de récits familiaux, de blessures intimes, mais également de moments de joie, de solidarité et de spiritualité », poursuit-elle.</p>

<p>Sans l'ombre d'un doute, la littérature offre cette opportunité de cueillir des roses de l'émancipation. Participante au projet <strong>« Femme-mille-lieux »</strong> — anthologie de nouvelles des éditions Flèche Rose — Manman Simbi fait de l'acte d'écrire un acte de transmission et de responsabilité.</p>

<p>Néanmoins, que ce soit pour offrir sa musique au monde ou faire don de soi, l'écriture permet bien le recousage de nos dentelles et de celles des autres. Bien sûr, il y a toujours un élan vers la catharsis en écrivant. Manman Simbi comprend cela. Peut-être bien que si l'on arrive à prendre soin de soi en écrivant, l'autre pourra trouver refuge et confort dans le royaume de nos mots.</p>

<p>Au fait, au-delà des déchirures et des fêlures d'un pays en crise, il faut créer. Il faut écrire. Il faut se permettre de rêver. D'espérer. De dire non. De peindre une vie bonne et heureuse. Il faut essayer de faire ce que Boris Cyrulnik appelle la métamorphose du chaos.</p>

<blockquote><p>Car créer chez nous, c'est marcher sur une ligne fine entre douleur et espérance, et choisir malgré tout de laisser une trace.</p></blockquote>`
  },

  // ➕  AJOUTER UN ARTICLE ICI
  //
  // Exemple :
  // {
  //   titre:       "Titre complet de l'article",
  //   date:        "Janvier 2026",
  //   auteur:      "Par Prénom Nom",
  //   auteurRole:  "Rôle affiché dans la sidebar",
  //   auteurBio:   "Courte biographie.",
  //   readTime:    "4 min",
  //   categorie:   "Chronique",          // Chronique | Entretien | Annonce
  //   tags:        ["Chronique", "Roman"],
  //   gradient:    "linear-gradient(135deg,#2c1a2e 0%,#8a1535 100%)",
  //   coverAccent: "#d45f7a",
  //   coverTitle:  "Titre du livre",
  //   coverAuthor: "Auteur livre",
  //   lead:        "Chapeau de l'article (peut contenir <em>).",
  //   corps:       `<p>Contenu HTML de l'article...</p>`
  // },

];


/* ═══════════════════════════════════════════════════════════════════
   FONCTIONS UTILITAIRES
   ═══════════════════════════════════════════════════════════════════ */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function cleanAuthor(auteur) {
  return auteur.replace(/^Par\s+/i, '');
}

function readLabel(categorie) {
  if (categorie === 'Chronique') return "Lire la chronique";
  if (categorie === 'Entretien') return "Lire l'entretien";
  return "Lire l'annonce";
}


/* ═══════════════════════════════════════════════════════════════════
   RENDU — INDEX.HTML
   Injecte les 3 premières cartes dans #indexArticlesGrid et
   intercepte openArticle() pour rediriger vers articles.html
   ═══════════════════════════════════════════════════════════════════ */

function renderIndexArticles() {
  const container = document.getElementById('indexArticlesGrid');
  if (!container) return;

  const preview = articles.slice(0, 3);
  container.innerHTML = preview.map((a, i) => {
    const authorName = cleanAuthor(a.auteur);
    return `
    <article
      onclick="openArticle(${i})"
      style="background:var(--white);border:1px solid var(--border);border-radius:2px;overflow:hidden;display:flex;flex-direction:column;height:100%;transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;"
      onmouseover="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.10)';this.style.transform='translateY(-3px)'"
      onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
      <div style="background:${a.gradient};height:180px;display:flex;align-items:center;justify-content:center;padding:1.5rem;position:relative;overflow:hidden;">
        ${a.image ? `<img src="${a.image}" alt="${escapeHtml(a.titre)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.85;">` : ''}
        ${!a.image ? `<div style="width:90px;aspect-ratio:5/8;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;justify-content:flex-end;padding:0.8rem;">
          <div style="width:16px;height:2px;background:${a.coverAccent};margin-bottom:0.4rem;"></div>
          <div style="font-family:'DM Serif Display',serif;font-size:0.55rem;font-style:italic;color:#fff;line-height:1.3;">${escapeHtml(a.coverTitle)}</div>
          <div style="font-size:0.38rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-top:3px;">${escapeHtml(a.coverAuthor)}</div>
        </div>` : ''}
      </div>
      <div style="padding:1.5rem;display:flex;flex-direction:column;flex:1;gap:0.75rem;">
        <div style="font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--rose);font-family:'DM Sans',sans-serif;">${escapeHtml(a.date)}</div>
        <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;line-height:1.4;color:var(--text);margin:0;">${escapeHtml(a.titre)}</h3>
        <p style="font-family:'Epilogue',sans-serif;font-size:0.83rem;color:var(--muted);line-height:1.65;margin:0;flex:1;">${(a.lead||'').replace(/<[^>]+>/g,'').slice(0,120)}…</p>
        <div style="display:flex;align-items:center;gap:0.4rem;color:var(--rose);font-family:'DM Sans',sans-serif;font-size:0.82rem;margin-top:0.5rem;">
          ${escapeHtml(authorName)} <span style="margin-left:auto;">${readLabel(a.categorie)} →</span>
        </div>
      </div>
    </article>`;
  }).join('');
}

/* Depuis index.html, redirige vers articles.html en ouvrant la modale */
function openArticle(idx) {
  window.location.href = 'articles.html#article-' + idx;
}


/* ═══════════════════════════════════════════════════════════════════
   RENDU — ARTICLES.HTML
   ═══════════════════════════════════════════════════════════════════ */

const commentsStore = {};
let currentIndex  = 0;
let currentFilter = 'all';
let currentPage   = 1;
const ARTICLES_PAR_PAGE = 10;

function getFilteredArticles() {
  if (currentFilter === 'all') return articles;
  return articles.filter(a => a.categorie.toLowerCase() === currentFilter);
}

function initArticlesPage() {
  const container = document.getElementById('articlesGrid');
  if (!container) return;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      renderPage();
    });
  });

  renderPage();

  // Ouvre la modale si hash #article-N présent (venant d'index.html)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#article-')) {
    const idx = parseInt(hash.replace('#article-', ''), 10);
    if (!isNaN(idx) && idx >= 0 && idx < articles.length) {
      openModal(idx);
      history.replaceState(null, '', window.location.pathname);
    }
  }
}

function renderPage() {
  const filtered    = getFilteredArticles();
  const totalPages  = Math.ceil(filtered.length / ARTICLES_PAR_PAGE);
  currentPage       = Math.min(currentPage, Math.max(1, totalPages));
  const start       = (currentPage - 1) * ARTICLES_PAR_PAGE;
  const pageArticles= filtered.slice(start, start + ARTICLES_PAR_PAGE);

  const featuredEl  = document.getElementById('articleFeatured');
  const gridEl      = document.getElementById('articlesGrid');
  const secLabel    = document.getElementById('secLabel');
  const noResults   = document.getElementById('noResults');
  const paginationEl= document.getElementById('pagination');
  const countEl     = document.getElementById('articlesCount');

  if (pageArticles.length === 0) {
    if (featuredEl)   featuredEl.style.display = 'none';
    if (gridEl)       gridEl.innerHTML = '';
    if (secLabel)     secLabel.style.display = 'none';
    if (noResults)    noResults.style.display = 'block';
    if (paginationEl) paginationEl.innerHTML = '';
    if (countEl)      countEl.textContent = '0 article';
    return;
  }

  if (noResults)  noResults.style.display = 'none';
  if (secLabel)   secLabel.style.display  = 'flex';

  // ── Article vedette ──
  const vedette          = pageArticles[0];
  const vedetteGlobalIdx = articles.indexOf(vedette);

  if (featuredEl) {
    featuredEl.style.display = 'grid';
    featuredEl.onclick = () => openModal(vedetteGlobalIdx);
    featuredEl.dataset.category = vedette.categorie.toLowerCase();

    const afVisual = featuredEl.querySelector('.af-visual');
    if (afVisual) {
      afVisual.style.background = vedette.gradient;
      // Image de couverture si disponible
      let afImg = afVisual.querySelector('.af-photo');
      if (vedette.image) {
        if (!afImg) {
          afImg = document.createElement('img');
          afImg.className = 'af-photo';
          afImg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.75;';
          afVisual.prepend(afImg);
        }
        afImg.src = vedette.image;
        afImg.alt = vedette.titre.replace(/<[^>]+>/g,'');
        const afCover = afVisual.querySelector('.af-cover');
        if (afCover) afCover.style.display = 'none';
      } else {
        if (afImg) afImg.remove();
        const afCover = afVisual.querySelector('.af-cover');
        if (afCover) afCover.style.display = '';
      }
    }
    const afLine   = featuredEl.querySelector('.af-cover-line');
    if (afLine) afLine.style.background = vedette.coverAccent;
    const afTitle  = featuredEl.querySelector('.af-cover-title');
    if (afTitle) afTitle.textContent = vedette.coverTitle;
    const afAuth   = featuredEl.querySelector('.af-cover-author');
    if (afAuth) afAuth.textContent = vedette.coverAuthor;

    const metaVals   = featuredEl.querySelectorAll('.af-meta-val');
    const authorName = cleanAuthor(vedette.auteur);
    if (metaVals[0]) metaVals[0].textContent = authorName;
    if (metaVals[1]) metaVals[1].textContent = vedette.date;
    if (metaVals[2]) metaVals[2].textContent = vedette.readTime || '5 min';

    const crumb = featuredEl.querySelector('.af-crumb strong');
    if (crumb) crumb.textContent = vedette.categorie;

    const titleEl = featuredEl.querySelector('.af-title');
    if (titleEl) titleEl.innerHTML = vedette.titre;

    const leadEl = featuredEl.querySelector('.af-lead');
    if (leadEl) leadEl.innerHTML = vedette.lead || '';
  }

  // ── Grille ──
  if (gridEl) {
    const grille = pageArticles.slice(1);
    gridEl.innerHTML = grille.map(a => {
      const idx        = articles.indexOf(a);
      const authorName = cleanAuthor(a.auteur);
      const lbl        = readLabel(a.categorie);
      const accentCSS  = `style="background:${a.coverAccent};"`;
      return `
      <article class="article-card reveal" data-category="${a.categorie.toLowerCase()}" onclick="openModal(${idx})">
        <div class="ac-visual" style="background:${a.gradient};">
          <div class="ac-cover">
            <div class="ac-cover-line" ${accentCSS}></div>
            <div class="ac-cover-title">${escapeHtml(a.coverTitle)}</div>
            <div class="ac-cover-author">${escapeHtml(a.coverAuthor)}</div>
          </div>
        </div>
        <div class="ac-body">
          <div class="ac-meta">
            <span class="ac-date">${escapeHtml(a.date)}</span>
            <span class="ac-meta-sep">—</span>
            <span class="ac-author-name">${escapeHtml(authorName)}</span>
          </div>
          <span class="ac-badge" ${accentCSS}>${escapeHtml(a.categorie)}</span>
          <h3 class="ac-title">${escapeHtml(a.titre)}</h3>
          <p class="ac-lead">${(a.lead||'').replace(/<[^>]+>/g,'')}</p>
          <div class="ac-ornament">
            <div class="ac-orn-bar"></div><div class="ac-orn-dot"></div><div class="ac-orn-long"></div>
          </div>
          <div class="ac-footer">
            <span class="ac-read">${lbl}</span>
            <span class="ac-arrow">→</span>
          </div>
        </div>
      </article>`;
    }).join('');

    if (typeof observer !== 'undefined') {
      gridEl.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
      });
    }
  }

  if (countEl) {
    const total = filtered.length;
    countEl.textContent = total + ' article' + (total > 1 ? 's' : '');
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const paginationEl = document.getElementById('pagination');
  if (!paginationEl) return;
  paginationEl.innerHTML = '';
  if (totalPages <= 1) return;

  const makeBtn = (label, page, isActive, isDisabled, isNav) => {
    const btn = document.createElement('button');
    btn.className = 'pagination-btn' + (isActive ? ' active' : '') + (isNav ? ' pagination-nav' : '');
    btn.textContent = label;
    btn.disabled = isDisabled;
    if (!isDisabled) btn.addEventListener('click', () => {
      currentPage = page;
      renderPage();
      document.querySelector('.articles-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return btn;
  };

  paginationEl.appendChild(makeBtn('←', currentPage - 1, false, currentPage === 1, true));

  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      range.push(i);
    } else if (range[range.length - 1] !== '…') {
      range.push('…');
    }
  }
  range.forEach(item => {
    if (item === '…') {
      const ell = document.createElement('span');
      ell.className = 'pagination-ellipsis';
      ell.textContent = '…';
      paginationEl.appendChild(ell);
    } else {
      paginationEl.appendChild(makeBtn(item, item, item === currentPage, false, false));
    }
  });

  paginationEl.appendChild(makeBtn('→', currentPage + 1, false, currentPage === totalPages, true));
}

function openModal(idx) {
  currentIndex = idx;
  renderModal();
  document.getElementById('articleModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  const scroll = document.getElementById('modalScroll');
  if (scroll) {
    scroll.scrollTop = 0;
    scroll.addEventListener('scroll', _updateReadProgress);
    _updateReadProgress();
  }
}

function _updateReadProgress() {
  const scroll = document.getElementById('modalScroll');
  const bar    = document.getElementById('modalReadBar');
  if (!scroll || !bar) return;
  const total = scroll.scrollHeight - scroll.clientHeight;
  bar.style.width = total > 0 ? (scroll.scrollTop / total * 100) + '%' : '0%';
}

function renderModal() {
  const a = articles[currentIndex];
  if (!a) return;
  const authorRaw = cleanAuthor(a.auteur);
  const initials  = authorRaw.split(' ').map(w => w[0]).slice(0, 2).join('');

  const set = (id, val, prop) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (prop === 'html')  el.innerHTML = val;
    else if (prop === 'bg') el.style.background = val;
    else el.textContent = val;
  };

  set('modalBadgeTop',     a.categorie);
  set('modalTopbarTitle',  a.titre.replace(/<[^>]+>/g, ''));
  // Hero : image si disponible, sinon gradient
  const heroBgEl = document.getElementById('modalHeroBg');
  if (heroBgEl) {
    heroBgEl.style.background = a.gradient;
    let heroImg = heroBgEl.querySelector('.modal-hero-photo');
    if (a.image) {
      if (!heroImg) {
        heroImg = document.createElement('img');
        heroImg.className = 'modal-hero-photo';
        heroImg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.65;';
        heroBgEl.prepend(heroImg);
      }
      heroImg.src = a.image;
      heroImg.alt = a.titre.replace(/<[^>]+>/g,'');
      const heroBook = heroBgEl.querySelector('.modal-hero-book');
      if (heroBook) heroBook.style.display = 'none';
    } else {
      if (heroImg) heroImg.remove();
      const heroBook = heroBgEl.querySelector('.modal-hero-book');
      if (heroBook) heroBook.style.display = '';
    }
  }
  set('modalHeroBar',      a.coverAccent, 'bg');
  set('modalHeroTitle',    a.coverTitle);
  set('modalHeroAuthor',   a.coverAuthor);
  set('modalHeroAuthorChip', authorRaw);
  set('modalHeroDate',     a.date);
  set('modalHeroRead',     (a.readTime || '4 min') + ' de lecture');
  set('modalCatBadge',     a.categorie);
  set('modalArticleTitle', a.titre, 'html');
  set('modalAuthorAv',     initials);
  set('modalAuthorName',   authorRaw);
  set('modalAuthorRole',   a.auteurRole || a.categorie);
  set('modalLead',  a.lead || '', 'html');
  set('modalBody',  a.corps,      'html');

  const tagsEl = document.getElementById('modalTags');
  if (tagsEl) {
    tagsEl.innerHTML = '<span class="modal-tags-lbl">Tags</span>';
    (a.tags || [a.categorie]).forEach(tag => {
      const t = document.createElement('span');
      t.className = 'modal-tag';
      t.textContent = tag;
      tagsEl.appendChild(t);
    });
  }

  set('modalSbAv',         initials);
  set('modalSbAuthorName', authorRaw);
  set('modalSbAuthorRole', a.auteurRole || a.categorie);
  set('modalSbBio',        a.auteurBio  || '');
  const spineEl = document.getElementById('modalSbSpine');
  if (spineEl) spineEl.style.background = a.gradient;
  set('modalSbSpineBar',   a.coverAccent, 'bg');
  set('modalSbSpineTitle', a.coverTitle);
  set('modalSbSpineAuth',  a.coverAuthor);
  set('modalSbBookTitle',  a.coverTitle);
  set('modalSbBookAuth',   a.coverAuthor);

  const isFirst = currentIndex === 0;
  const isLast  = currentIndex === articles.length - 1;
  ['modalPrev','modalFooterPrev'].forEach(id => {
    const el = document.getElementById(id); if (el) el.disabled = isFirst;
  });
  ['modalNext','modalFooterNext'].forEach(id => {
    const el = document.getElementById(id); if (el) el.disabled = isLast;
  });
  set('modalFooterCount', (currentIndex + 1) + ' / ' + articles.length);

  const scroll = document.getElementById('modalScroll');
  if (scroll) scroll.scrollTop = 0;

  ['commentName','commentEmail','commentText'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const errEl = document.getElementById('commentError');
  if (errEl) errEl.style.display = 'none';

  renderComments(currentIndex);
}

function navigateModal(dir) {
  const next = currentIndex + dir;
  if (next >= 0 && next < articles.length) { currentIndex = next; renderModal(); }
}

function closeModal() {
  document.getElementById('articleModal')?.classList.remove('open');
  document.body.style.overflow = '';
  // Nettoyer le listener de progression
  const scroll = document.getElementById('modalScroll');
  if (scroll) scroll.removeEventListener('scroll', _updateReadProgress);
}

function closeOnBackdrop(e) {
  // géré par onclick sur .modal-backdrop dans le HTML
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft')  navigateModal(-1);
  if (e.key === 'ArrowRight') navigateModal(1);
});

/* ── Commentaires ── */

function getComments(idx) { return commentsStore[idx] || []; }

function renderComments(idx) {
  const list   = getComments(idx);
  const listEl = document.getElementById('commentsList');
  const badge  = document.getElementById('commentsCountBadge');
  if (!listEl) return;
  if (badge) badge.textContent = list.length;
  if (list.length === 0) {
    listEl.innerHTML = '<p class="comments-empty">Aucun commentaire pour l\'instant. Soyez le premier !</p>';
    return;
  }
  listEl.innerHTML = list.map(c => {
    const initials = c.name.trim().split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
    return `<div class="comment-item">
      <div class="comment-avatar">${initials}</div>
      <div class="comment-bubble">
        <div class="comment-meta">
          <span class="comment-author-name">${escapeHtml(c.name)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <p class="comment-text">${escapeHtml(c.text)}</p>
      </div>
    </div>`;
  }).join('');
}

function submitComment() {
  const name  = document.getElementById('commentName')?.value.trim();
  const text  = document.getElementById('commentText')?.value.trim();
  const errEl = document.getElementById('commentError');
  if (!name || !text) { if (errEl) errEl.style.display = 'block'; return; }
  if (errEl) errEl.style.display = 'none';
  if (!commentsStore[currentIndex]) commentsStore[currentIndex] = [];
  commentsStore[currentIndex].push({
    name, text,
    date: new Date().toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'})
  });
  ['commentName','commentEmail','commentText'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  renderComments(currentIndex);
  document.getElementById('commentsList')?.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ── Partage ── */

function shareOn(platform) {
  const a    = articles[currentIndex];
  const title= (a.titre||'').replace(/<[^>]+>/g,'');
  const url  = window.location.href;
  const text = title + ' — Flèche Rose Éditions';
  if (platform === 'facebook') {
    window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url),'_blank','width=600,height=400');
  } else if (platform === 'twitter') {
    window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url),'_blank','width=600,height=400');
  } else if (platform === 'whatsapp') {
    window.open('https://wa.me/?text='+encodeURIComponent(text+'\n'+url),'_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('shareCopyBtn');
      const lbl = document.getElementById('shareCopyLabel');
      if (btn) btn.classList.add('copied');
      if (lbl) lbl.textContent = 'Lien copié !';
      setTimeout(() => {
        if (btn) btn.classList.remove('copied');
        if (lbl) lbl.textContent = 'Copier le lien';
      }, 2500);
    });
  }
}

/* ── Newsletter ── */

function handleNewsletter() {
  const input = document.getElementById('nlEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor = '#e05'; input.focus();
    setTimeout(() => (input.style.borderColor = ''), 1500);
    return;
  }
  const btn = input.nextElementSibling;
  if (btn) { btn.textContent = 'Merci !'; btn.style.background = '#2a6b3a'; }
  input.value = ''; input.disabled = true;
  setTimeout(() => {
    if (btn) { btn.textContent = "S'inscrire"; btn.style.background = ''; }
    input.disabled = false;
  }, 3000);
}
