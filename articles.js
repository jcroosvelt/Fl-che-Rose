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
    slug:       "melyneda-civil-vilton-ecrire-resister-effacement",
    titre:      "Melyneda Civil Vilton : « écrire aujourd'hui, c'est résister à l'effacement »",
    date:       "13 mars 2026",
    auteur:     "Par Mardochée Gay",
    auteurRole: "Écrivain-poète — Flèche Rose Éditions",
    auteurBio:  "Cofondateur de Flèche Rose Éditions, Mardochée Gay est écrivain-poète, étudiant finissant en psychologie à l'Université d'État d'Haïti. Il consacre sa plume aux voix et aux récits qui façonnent la littérature haïtienne contemporaine.",
    readTime:   "5 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Poésie", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0a12 0%, #5c1030 60%, #8a1535 100%)",
    coverAccent:"#d4607a",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
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

  {
    slug:       "dorothee-polynice-plume-graver-eternite",
    titre:      "Dorothée Polynice : Une plume pour graver l'éternité",
    date:       "19 mars 2026",
    auteur:     "Par Mardochée Gay",
    auteurRole: "Écrivain-poète — Flèche Rose Éditions",
    auteurBio:  "Cofondateur de Flèche Rose Éditions, Mardochée Gay est écrivain-poète, étudiant finissant en psychologie à l'Université d'État d'Haïti. Il consacre sa plume aux voix et aux récits qui façonnent la littérature haïtienne contemporaine.",
    readTime:   "5 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Poésie", "Haïti"],
    gradient:   "linear-gradient(135deg, #0d1a2e 0%, #1a3a5c 60%, #2a5080 100%)",
    coverAccent:"#5b8fc2",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/09ac30d3-2269-4236-813e-fbda18c1e71c.jpg",
    lead:       "L'écriture permet à l'homme d'habiter l'infini tout en étant conscient de sa finitude. Dorothée Polynice, plume discrète et déterminée, a fait de ce geste une voie de reconstruction — et une main tendue vers l'éternité.",
    corps:      `<p><em>L'écriture permet à l'homme d'habiter l'infini tout en étant conscient de sa finitude. La part de divin qui sommeille en lui le conduit à la création, et cette création devient une main tendue vers l'intemporalité. L'écrivain, plus que tout autre être, est celui qui s'approche le plus de l'intelligence infinie : il sait manier le verbe. Or, le Verbe était, est et sera. D'ailleurs, Dorothée Polynice le déclare elle-même : « Tout ce que l'on couche sur le papier a plus de chances de perdurer que nous-mêmes. » Cette révélation accroche au mur de l'existence l'un des rôles les plus cruciaux de l'écrivain : inscrire, dans la durée, ce qui nous rend vivants.</em></p>

<p>Férue de littérature, Dorothée Polynice a d'abord puisé à l'eau du savoir académique à l'école Saint François de Sales de Rivière Froide, avant de poursuivre des études universitaires en Administration des Affaires à l'Université Notre Dame d'Haïti. En 2022, elle a entamé sa carrière professionnelle à la Banque de l'Union Haïtienne (BUH). Entre une solide formation académique et un parcours universitaire brillant, Dorothée se laisse traverser par la pulsation de la vie en étant une pièce maîtresse du groupe socio-culturel Le Classique Haïti, du Flèche Rose Club, ainsi que des Éditions Flèche Rose.</p>

<p>Pour beaucoup d'écrivains, l'écriture est un moyen d'extérioriser les traumatismes vécus. Dorothée, quant à elle, a fait de sa plume un outil pour tracer un chemin vers la reconstruction de soi. L'acte d'écrire lui a permis de recoudre ses fractures. Dorothée a pu transformer ses cassures en matrice de créations capables de vivre à travers les âges et de se faire semence dans la vie des autres. Elle a expérimenté cette force de l'écriture face à la perte de sa mère. Originaire de Carrefour, Dorothée témoigne en ces termes :</p>

<blockquote><p>Je me souviens que la première véritable source d'inspiration pour mon écriture a été la perte de ma mère. C'est ce drame qui m'a poussée à commencer mon journal intime, le seul moyen pour moi d'exprimer pleinement mes émotions tout en affinant mon style.</p></blockquote>

<p>En août 2022, Dorothée a participé à la rédaction de l'anthologie poétique <strong>« Zenglen Boutèy »</strong> du Club Littéraire Flèche Rose. Son écriture porte le stigmate de son quotidien, le flux de ses aspirations et l'empreinte de ses lectures. Vénus se baigne dans la sève de ses expériences, qui continuent de nourrir et de faire évoluer son inspiration. Elle travaille ainsi sur divers projets littéraires, qu'elle laisse mûrir avec le temps et la discrétion.</p>

<p>N'est-il pas temps de donner la parole au silence ? De laisser émerger davantage les voix féminines ? Dorothée y croit fermement. Elle déclare :</p>

<blockquote><p>Pour nous, les femmes, il existe une véritable urgence à écrire. Nous portons en nous des idées précieuses à partager, des histoires riches à raconter, capables d'inspirer et d'impacter de nombreuses personnes, qu'il s'agisse de questions sociales, de développement personnel ou de relations humaines.</p></blockquote>

<p>Un avis que beaucoup partageront, au vu des prestigieux prix littéraires remportés par des femmes haïtiennes ces dernières années.</p>

<p>Aujourd'hui, Dorothée vit à New York. Loin de sa terre natale, elle participe à l'anthologie de nouvelles <strong>« Femme-mille-lieux »</strong>, dirigée par les Éditions Flèche Rose. Ce projet ambitieux réunit exclusivement des plumes féminines, des voix qui ont leurs mots à dire, qui portent leur vision du monde et possèdent un imaginaire riche et poétique.</p>

<p>Il y a, au-delà de la créativité, ce désir d'être entendue et de se faire entendre. La plume de Dorothée se vêt de ce désir de créer, d'apporter une contribution positive à la société et de participer au changement auquel aspirent les Haïtiens.</p>

<p>Au-delà du rapport intime qu'elle entretient avec l'écriture, Dorothée se veut responsable et utile. Par le pouvoir conscientisant de ses écrits, elle répond, à travers sa nouvelle dans l'anthologie, à un appel lancé aux écrivains de l'âge classique (1650‑1700) : former l'esprit du public. Une mission brillamment accomplie.</p>`
  },

  {
    slug:       "alande-caelle-caceus-mots-traduisent-silence",
    titre:      "Alande Caelle Cacéus : Quand les mots traduisent le silence !",
    date:       "21 mars 2026",
    auteur:     "Par Christopher Pierre",
    auteurRole: "Poète, journaliste-rédacteur",
    auteurBio:  "Christopher Pierre est poète et journaliste-rédacteur. Sa plume s'attache à mettre en lumière les voix émergentes de la littérature haïtienne contemporaine.",
    readTime:   "4 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Poésie", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0a12 0%, #6b2040 60%, #8a1535 100%)",
    coverAccent:"#c0506a",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/65227904-08cd-41ad-8d46-5e7fa7089f19.jpg",
    lead:       "Dans les fêlures d'un quotidien qui saigne, il est des voix qui refusent de s'éteindre. Alande Caelle Cacéus appartient à cette génération de jeunes femmes pour qui l'écriture n'est pas un simple exercice de style, mais une nécessité intérieure : celle de dire, de témoigner et de transformer les silences en mots.",
    corps:      `<p>Née le 16 octobre dans une famille chrétienne, Caëlle est originaire de Carrefour et y habite toujours. Actuellement, elle est en première année de médecine à la Faculté de médecine de Port-au-Prince de l'Université d'État d'Haïti (UEH). Au carrefour d'une ville qui pleure, comme l'a écrit Lefranc Dorélus dans son recueil de poésie <em>« Encre Rose »</em>, écrire devient pour les femmes une urgence pour conjurer la menace du silence et se donner la peine de briser le cycle de la vie pasticheuse.</p>

<p>Ainsi déclare Caelle :</p>

<blockquote><p>Je pense qu'il y a une urgence d'écrire aujourd'hui, surtout pour les femmes. Le silence est lourd et dangereux. Écrire permet de s'exprimer, surtout pour les autres qui ne peuvent pas.</p></blockquote>

<p>Alande Caëlle Cacéus ne fuit pas la réalité de sa communauté ; elle garde sa plume consciente. Car elle n'écrit pas pour écrire, mais se fait la porte-parole des autres tout en extériorisant sa peur, ses rages et ses désirs. Aussi nous dévoile-t-elle :</p>

<p><em>« Mon inspiration vient de la vie quotidienne et c'est ce qui m'inspire le plus. Elle se nourrit de mes expériences, des histoires que j'ai lues ou que l'on m'a racontées, ainsi que des films que j'ai regardés »</em>, conclut l'étudiante en médecine.</p>

<p>Elle pense aussi, comme Fernand Hibbert en a fait l'assomption de l'écriture comme une arme de défense pour son pays dans son livre <em>Les Simulacres</em>, que créer est un acte profondément engagé. D'où sa réponse à la question : que signifie écrire pour elle aujourd'hui en Haïti ?</p>

<blockquote><p>Écrire et créer en Haïti aujourd'hui, en tant que femme, est un acte de courage. C'est affirmer son existence dans un contexte difficile. C'est aussi une manière de résister, de se libérer et de revendiquer sa place.</p></blockquote>

<p>Si elle prend part à l'anthologie <strong>Femmes-mille-lieux</strong> des éditions Flèche Rose, ce n'est pas pour occuper une place, mais pour affirmer une voix. Celle d'une jeune femme de Carrefour qui porte en elle des histoires capables d'inspirer, de transcender et parfois même de guérir.</p>

<blockquote><p>J'écris pour laisser mon imagination s'exprimer librement, pour donner une forme aux pensées qui m'habitent et transformer mes émotions en mots. L'écriture est pour moi un espace de liberté où chaque phrase devient un moyen de comprendre ce que je ressens. À travers les mots, je traduis mes silences, mes rêves et mes émotions les plus profondes.</p></blockquote>

<p>S'adressant aux jeunes de sa génération, elle les invite à croire, à oser et à résister au vertige de l'abandon. Car, comme le suggérait déjà Jacques Stephen Alexis dans sa lettre à sa fille Florence, lorsqu'un être renonce à ses rêves au bord du chemin, faisant fi de son intelligence, il finit par devenir méchant sans même le savoir.</p>`
  },

  {
    slug:       "judicaelle-israel-ecriture-acte-transformation",
    titre:      "Judicaëlle Israël : quand l'écriture devient un acte de transformation",
    date:       "22 mars 2026",
    auteur:     "Par Jean Michelot Polynice",
    auteurRole: "Écrivain-Poète, Travailleur social",
    auteurBio:  "Jean Michelot Polynice est écrivain-poète et travailleur social. Sa plume s'engage au croisement du social et du littéraire, mettant en lumière les voix qui transforment le réel par l'écriture.",
    readTime:   "5 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Poésie", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0a12 0%, #5c1a38 60%, #8a1535 100%)",
    coverAccent:"#b84d6e",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/3adab7db-a49c-4538-b0db-8f817bc5935c.jpg",
    lead:       "Rien en ce monde n'est plus important que l'acte de se transformer sans se perdre. Avec une plume qui se veut transformatrice de la réalité sociale du quotidien, Judicaëlle Israël nous invite à devenir les principaux maîtres à penser de notre histoire.",
    corps:      `<p>Judicaëlle Israël a vu le jour un 8 juin. Elle poursuit actuellement des études en sciences de l'éducation et est enseignante au 1<sup>er</sup> cycle fondamental. Elle a également étudié l'informatique de bureau et l'entrepreneuriat. Passionnée de littérature, elle a participé à l'anthologie de poésie <em>Zenglen Boutèy</em> en août 2022, sous la direction du club littéraire Flèche Rose.</p>

<p>À la question de savoir s'il y a une urgence d'écrire pour les femmes, Judicaëlle répond :</p>

<blockquote><p>L'urgence d'écrire aujourd'hui semble absolue, surtout au regard de la situation chaotique que nous traversons en Haïti. Dans un monde saturé de bruits mais souvent vide de sens, l'écriture est un acte de résistance. Pour les femmes, c'est le moyen de passer de l'état d'objet — celle dont on parle — à celui de sujet — celle qui parle. Écrire permet de nommer le réel et de transformer nos traumatismes ou nos aspirations en récits souverains.</p></blockquote>

<p>S'il est vrai que l'inspiration est divine pour certains, le divin n'a jamais été extérieur à l'Homme. C'est bien pour cela que la vie demeure cet espace intemporel de création où la créature devient l'être qui crée à son tour, dans un processus de recréation. Ainsi, l'étudiante en sciences de l'éducation nous dit :</p>

<blockquote><p>C'est ma vie qui m'inspire. J'aime dire que mon quotidien n'est pas chiant, mais il n'est pas non plus conforme à mes rêves. Il y a moi, le réel, ce à quoi la société a accès ; et il y a mon imagination, qui me retire de cette société pour m'envoyer au-delà. Je crée dans ma tête cette vie parfaite que d'autres cherchent, pour ensuite la coucher sur papier. Mon imaginaire se nourrit de la vibration du langage et de la manière dont un mot peut soudainement éclairer une idée complexe. Chaque point de douleur ou de beauté finit par résonner en moi comme un écho indispensable.</p></blockquote>

<p>Pour certains, la douleur reste une source d'inspiration parmi tant d'autres. Pour d'autres, c'est également le cas, dans la mesure où l'on cherche à dépasser cette douleur pour mettre un peu d'ordre dans son intérieur désordonné.</p>

<p><em>« J'écris pour ordonner le chaos de mes idées. L'écriture est une quête de clarté, mon refuge lorsque tout va mal. C'est un outil pour explorer les possibles et l'invisible […] »</em>, conclut l'institutrice.</p>

<p>Puisque nos histoires individuelles sont traversées par l'altérité et ne sont pas extérieures à la réalité, visible et invisible, Judicaëlle poursuit en affirmant qu'elle écrit pour se sentir vivante, mais aussi pour tendre un miroir à l'autre. Ainsi, elle reste convaincue qu'elle n'est pas seule à vivre ces expériences. Car souvent, l'autre vit la même chose dans un profond silence.</p>

<p>Il faut dire que l'acte d'écrire est également un acte de résistance et de résilience. L'espace joue un rôle important dans ce processus. En effet, Judicaëlle nous a confié :</p>

<blockquote><p>Créer en Haïti aujourd'hui est un acte de foi. C'est choisir la lumière et la structure face à l'instabilité chronique. Pour une femme haïtienne, c'est écrire entre les lignes du quotidien pour y insuffler une dignité que les circonstances tentent d'effacer. C'est une manière de sauver sa propre dignité et de se frayer une issue pour être enfin entendue.</p></blockquote>

<p>En dépit de sa passion pour la littérature, Judicaëlle n'a pas encore de projet d'édition immédiat. Elle se concentre principalement sur ses études afin de nourrir et de faire mûrir ses réflexions. Ainsi, elle invite chaque femme à faire valoir sa voix dans une société qui tente de les étouffer.</p>`
  },

  {
    slug:       "dano-love-victor-ecriture-renouer-resonance",
    titre:      "Dano-love Victor : une écriture pour renouer avec la résonance",
    date:       "24 mars 2026",
    auteur:     "Par Christopher Pierre",
    auteurRole: "Poète, journaliste-rédacteur",
    auteurBio:  "Christopher Pierre est poète et journaliste-rédacteur. Sa plume s'attache à mettre en lumière les voix émergentes de la littérature haïtienne contemporaine.",
    readTime:   "5 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Écriture", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0a18 0%, #5c1a50 60%, #8a1570 100%)",
    coverAccent:"#c050a0",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/2ef95621-ca6c-4545-b363-0e99c752b177.jpg",
    lead:       "Dans un quotidien marqué par une lutte constante, où de nombreux jeunes vivent comme sur une roulette russe, Dano-love Victor a choisi l'écriture — pas n'importe laquelle, mais une écriture qui reconnecte, qui fait vibrer, qui redonne sensation et pulsation. En un mot, une écriture pour renouer avec la résonance.",
    corps:      `<p>Dans un quotidien marqué par une lutte constante, où de nombreux jeunes vivent comme sur une roulette russe, chacun tente de préserver le goût de l'existence. Certains dansent, chantent, font de la musique ou poursuivent leurs études. D'autres s'abandonnent à des habitudes qui apaisent, un temps, l'ennui, la peur et la désolation. Parmi ces jeunes se distingue Dano-love Victor, une jeune femme qui a choisi l'écriture — pas n'importe laquelle, mais une écriture qui reconnecte, qui fait vibrer, qui redonne sensation et pulsation. En un mot, une écriture pour renouer avec la résonance.</p>

<p>Jeune étudiante en sciences de l'éducation et originaire de Carrefour, Dano-love a toujours rêvé d'embrasser l'écriture comme échappatoire. Pourtant, elle ne savait pas comment s'y prendre jusqu'à sa première rencontre avec le club littéraire Flèche Rose, en 2021. Cette rencontre marquera un tournant décisif : elle participe à des ateliers d'écriture et figure dans une anthologie poétique intitulée <em>Zenglen Boutèy</em>, publiée en 2022 par le club.</p>

<p>Cette expérience a donné des ailes à sa passion et lui a fait percevoir l'écriture comme une nécessité. « Je crois qu'il y a une véritable urgence d'écrire », déclare-t-elle. « Trop de réalités restent trop longtemps dans le silence. » Pour elle, écrire, c'est aussi pointer du doigt, dénoncer et faire preuve de courage.</p>

<p>Sensible à tout ce qui se trame dans son environnement, sa plume s'est faite empathique. Elle y puise son inspiration comme dans une source jaillissante et intarissable. « J'écris pour comprendre les autres et me comprendre moi-même. J'essaie de mettre des mots sur ce que je ressens et sur ce qui se passe autour de moi », confie-t-elle. Mais cela ne s'arrête pas là.</p>

<p>Porte-voix de celles qui ne peuvent s'exprimer, Dano-love porte en elle des blessures et des fractures que seule l'écriture semble pouvoir apaiser.</p>

<blockquote><p>J'écris pour me libérer.</p></blockquote>

<p>Déterminée à ne pas se séparer de l'écriture, elle avance avec patience, passion et constance. « Pour l'instant, l'écriture fait surtout partie de mon cheminement personnel. J'avance à mon rythme, en explorant les formes, les thèmes et les voix qui me ressemblent », explique-t-elle. Avant d'ajouter : « Ce qui compte pour moi aujourd'hui, c'est de continuer à écrire, à affirmer ma voix et, peut-être, à me préparer à des projets plus aboutis à l'avenir. »</p>

<p><strong>Femme-mille-lieux</strong> est un projet qui rassemble des femmes issues de divers horizons autour de la création d'histoires célébrant leur émancipation et affirmant leurs talents. Pour Dano-love Victor, y participer revêt une importance particulière.</p>

<blockquote><p>C'est une expérience enrichissante et encourageante. Elle me permet de me sentir écoutée, reconnue et légitime dans mon désir d'écrire. J'y ai trouvé un espace de partage et de réflexion qui m'a donné encore plus envie de continuer à écrire et à m'affirmer.</p></blockquote>

<p>Quant à son histoire, elle en défend la portée avec conviction :</p>

<blockquote><p>Je pense qu'elle mérite d'être lue parce qu'elle n'est pas isolée. Elle ressemble à celle de nombreuses jeunes femmes en quête de leur place, de leur voix et de leur liberté. Écrire mon histoire, c'est affirmer que nos vies ordinaires portent aussi une force, une vérité et une mémoire qui méritent d'être partagées.</p></blockquote>

<p><strong>Femme-mille-lieux</strong> est un projet qui donne vie à des histoires inspirantes. Ses participantes sont de véritables artisanes d'espoir, dont les plumes éclairent la littérature féminine haïtienne. Dano-love Victor sera sans doute l'une des voix appelées à porter ce flambeau.</p>`
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

  {
    slug:       "medjn-laika-manace-oser-ecrire-defier-diable",
    titre:      "Médj'N Laïka Manacé : « Oser écrire, c'est défier le Diable lui-même »",
    date:       "25 mars 2026",
    auteur:     "Par J. Roosvelt Jean Charles",
    auteurRole: "Journaliste-rédacteur — Flèche Rose Éditions",
    auteurBio:  "J. Roosvelt Jean Charles est journaliste-rédacteur aux Éditions Flèche Rose. Sa plume s'engage à mettre en lumière les voix littéraires émergentes de la jeunesse haïtienne.",
    readTime:   "6 min",
    categorie:  "Entretien",
    tags:       ["Entretien", "Portrait", "Femme", "Roman", "Haïti"],
    gradient:   "linear-gradient(135deg, #1a0812 0%, #5c1028 60%, #8a1535 100%)",
    coverAccent:"#c8405a",
    coverTitle: "Femme Mille Lieux",
    coverAuthor:"Anthologie · 2026",
    coverImage: "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/b17d6f13-7a31-4746-b1d9-981282873763.jpg",
    image:      "https://i.supaimg.com/d6681b17-ef16-4c99-b257-024f332fa013/417ca3d0-7045-42c5-8cba-3c92f9939a73.jpg",
    lead:       "En Haïti, le silence des femmes n'est pas une absence. C'est une blessure organisée, entretenue, parfois même célébrée. Dans un pays où la parole des femmes se heurte encore à des murs dressés par la tradition et l'indifférence, certaines choisissent malgré tout de prendre leurs plumes par une nécessité profonde de nommer ce qui blesse et de laisser une trace là où l'on voudrait qu'il n'en reste aucune. Médj'N Laïka Manacé est de ces femmes. Jeune, déterminée, déjà prolifique, elle écrit comme on respire : parce qu'il n'est tout simplement pas possible de faire autrement.",
    corps:      `<p>Née le 27 mars 2002 dans une famille chrétienne de six enfants dont elle est l'aînée, Médj'N Laïka Manacé grandit à Santo, commune de Croix-des-Bouquets. Mémorante en Administration publique à l'INAGHEI, elle occupe parallèlement le poste d'Assistante des Ressources Humaines à la Klean-X S.A, jonglant avec aisance entre exigences académiques et responsabilités professionnelles.</p>

<p>Mais elle ne se limite pas à ces seuls rôles. Secrétaire Générale et Relationniste publique de la JEBHACS (Association des Jeunes de l'Église Baptiste du Calvaire d'Haïti de Santo), Secrétaire Générale de l'EBCHS, et membre de l'Association des Cadres du Monde (ACM), au sein de laquelle elle avait assuré en 2023 la Responsabilité de Communication pour un concours de Génie Interscolaire, Médj'N incarne cette génération de femmes haïtiennes qui refusent de n'occuper qu'un seul espace à la fois.</p>

<p>Mais c'est dans l'écriture que se révèle peut-être le mieux la profondeur de son caractère. « Déterminée, disciplinée, intelligente et dynamique », dit-elle d'elle-même avec une franchise désarmante, avant d'ajouter avec humour qu'elle est aussi « impulsive et trop sage ». Une dualité qui, loin de la freiner, nourrit une créativité débordante.</p>

<p>C'est dès l'âge de douze ans que Médj'N Laïka Manacé commence à écrire, bravant le découragement de ses parents. Elle ne baisse pas la garde. Elle poursuit. De ce premier élan obstiné naissent plusieurs romans : Fleur de l'amitié, Try Again, Encore toi, Tout est fini, écrits dans sa prime jeunesse, auxquels s'ajoutent Tohu Bohu, un recueil de poèmes, et L'inévitable, un recueil de nouvelles. Deux projets sont en cours de préparation : Le Chacal et À distance, qui témoignent d'une plume en constante maturation. Ce sont les Éditions Flèche Rose qui lui ouvrent leurs bras en première, reconnaissant en elle une autrice juvénile de talent.</p>

<p>Son engagement à travers l'écriture est clair et assumé :</p>

<blockquote><p>« Je m'engage à travers l'écriture afin de parler à la place de ceux et celles qui n'osent pas. »</p></blockquote>

<p>Une mission qu'elle s'est donnée très tôt et qu'elle poursuit avec la même ardeur aujourd'hui.</p>

<p>Aujourd'hui, beaucoup de femmes prennent la plume pour conjurer la menace du silence. Laïka en est pleinement convaincue. « L'urgence est claire pour les femmes de se prononcer en leur faveur », affirme-t-elle. Elle observe avec une lucidité douloureuse que, malgré de nombreux efforts pour améliorer la place des femmes dans la société, beaucoup d'hommes continuent de mépriser ces efforts et, plus grave encore, que certaines femmes elles-mêmes encouragent cette injustice avec joie. Face à ce paradoxe, sa réponse est sans ambiguïté :</p>

<blockquote><p>« Il faut dire non à ce silence qui nous est forcé. Il faut oser faire l'interdit. »</p></blockquote>

<p>Ce n'est pas un slogan. C'est une posture existentielle que Laïka porte chaque jour, dans ses écrits comme dans ses engagements communautaires.</p>

<p>Interrogée sur ce qui inspire son processus de création, Médj'N Laïka Manacé répond avec une simplicité qui touche juste : ce sont ses vécus quotidiens et ses objectifs à court et long termes. Son imaginaire se construit dans le concret, dans le frottement de la vie ordinaire contre les aspirations les plus profondes. C'est peut-être là que réside la force particulière de son écriture : elle ne plane pas au-dessus du monde, elle en est profondément pétrie.</p>

<p>Quant à la question du pourquoi écrire, cette question que Yanick Lahens formule ainsi : les écrivain·es peuvent « amplifier, élargir, donner la saveur du monde », Médj'N offre une réponse à la fois intime et universelle :</p>

<blockquote><p>« J'écris pour briser la glace en moi et pour aider les autres à briser les leurs. »</p></blockquote>

<p>Écrire, pour elle, est un acte de libération doublement orienté : vers soi et vers l'autre.</p>

<p>Ce que signifie créer en Haïti aujourd'hui, en tant que femme, Médj'N Laïka le dit avec franchise :</p>

<blockquote><p>« Écrire et créer en Haïti, surtout dans les situations quotidiennes, signifie pour une femme comme moi oser défier le Diable. »</p></blockquote>

<p>Parler au nom des femmes, évoquer les abus dans le contexte actuel, c'est, selon ses propres mots, « causer avec le Diable et ses Démons ». Créer en sortant des sentiers battus fait des femmes comme elle des héroïnes, car beaucoup préfèrent se taire pour ne pas subir d'injustice sous ses multiples formes. Dans un pays où le silence est parfois la condition de survie, choisir la parole devient un acte de bravoure extraordinaire.</p>

<p>Les projets ne manquent pas pour cette jeune autrice qui refuse de se cantonner à un seul espace. Au-delà de sa participation au projet Femmes Mille Lieux, Laïka souhaite faire éditer et publier ses nombreux ouvrages, et être connue bien au-delà des frontières haïtiennes, « mondialement connue », dit-elle, sans fausse modestie. Une ambition qui n'a rien d'arrogant : elle est le prolongement naturel d'une vocation assumée depuis l'enfance, portée par une discipline de fer et une foi profonde en la puissance des mots. Car Médj'N Laïka Manacé ne doute pas. Elle écrit. Et elle fonce.</p>`
  },

];

// Tri automatique : article le plus récent en premier
articles.sort((a, b) => {
  const parse = d => new Date(d.replace(/(\d+)\s+(\w+)\s+(\d{4})/, (_, j, m, y) => {
    const mois = {janvier:0,février:1,mars:2,avril:3,mai:4,juin:5,
                  juillet:6,août:7,septembre:8,octobre:9,novembre:10,décembre:11};
    return new Date(y, mois[m.toLowerCase()], j);
  }));
  return parse(b.date) - parse(a.date);
});


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
  container.innerHTML = preview.map((a) => {
    const authorName = cleanAuthor(a.auteur);
    const link       = 'article.html?id=' + (a.slug || articles.indexOf(a));
    return `
    <article
      onclick="window.location.href='${link}'"
      style="background:var(--white);border:1px solid var(--border);border-radius:2px;overflow:hidden;display:flex;flex-direction:column;height:100%;transition:box-shadow 0.2s,transform 0.2s;cursor:pointer;"
      onmouseover="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.10)';this.style.transform='translateY(-3px)'"
      onmouseout="this.style.boxShadow='none';this.style.transform='translateY(0)'">
      <div style="background:${a.gradient};height:200px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
        ${a.image ? `<img src="${a.image}" alt="${escapeHtml(a.titre)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 20%;opacity:0.9;">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%);"></div>` : ''}
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

/* Depuis index.html, redirige vers la page de l'article */
function openArticle(idx) {
  const a = articles[idx];
  window.location.href = 'article.html?id=' + (a.slug || idx);
}

/* Résoudre un slug ou un index numérique vers l'index réel dans le tableau */
function resolveArticleIndex(param) {
  const bySlug = articles.findIndex(a => a.slug === param);
  if (bySlug !== -1) return bySlug;
  // Fallback : index numérique (anciens liens)
  const n = parseInt(param, 10);
  return isNaN(n) ? 0 : Math.max(0, Math.min(n, articles.length - 1));
}

/* Initialise article.html : lit ?id= (slug ou index) et ouvre le bon article */
function initArticlePage() {
  const param = new URLSearchParams(window.location.search).get('id') || '0';
  openModal(resolveArticleIndex(param));
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
    featuredEl.onclick = () => { window.location.href = 'article.html?id=' + (vedette.slug || vedetteGlobalIdx); };
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
        afImg.style.cssText = 'position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.88;';
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
    gridEl.innerHTML = grille.map((a, gi) => {
      const idx        = articles.indexOf(a);
      const link       = 'article.html?id=' + (a.slug || idx);
      const authorName = cleanAuthor(a.auteur);
      const lbl        = readLabel(a.categorie);
      const accentCSS  = `style="background:${a.coverAccent};"`;
      const isNewest   = (gi === 0); // 1er de la grille = 2e plus récent global
      const visualInner = a.image
        ? `<img src="${a.image}" alt="${escapeHtml(a.titre)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0.85;">
           <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(0,0,0,0.35) 100%);"></div>`
        : `<div class="ac-cover">
             <div class="ac-cover-line" ${accentCSS}></div>
             <div class="ac-cover-title">${escapeHtml(a.coverTitle)}</div>
             <div class="ac-cover-author">${escapeHtml(a.coverAuthor)}</div>
           </div>`;
      return `
      <article class="article-card reveal" data-category="${a.categorie.toLowerCase()}" onclick="window.location.href='${link}'">
        <div class="ac-visual" style="background:${a.gradient};position:relative;">
          ${isNewest ? `<span style="position:absolute;top:0.75rem;left:0.75rem;z-index:2;font-size:0.46rem;letter-spacing:0.2em;text-transform:uppercase;background:var(--rose);color:#fff;padding:0.18rem 0.55rem;">Nouveau</span>` : ''}
          ${visualInner}
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

function openModal(param) {
  currentIndex = (typeof param === 'string') ? resolveArticleIndex(param) : param;
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
  if (spineEl) {
    if (a.coverImage) {
      spineEl.style.background = 'none';
      spineEl.style.padding = '0';
      spineEl.style.overflow = 'hidden';
      spineEl.innerHTML = '<img src="' + a.coverImage + '" alt="' + escapeHtml(a.coverTitle) + '" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:2px;">';
    } else {
      spineEl.style.background = a.gradient;
      spineEl.innerHTML = '';
      set('modalSbSpineBar',   a.coverAccent, 'bg');
      set('modalSbSpineTitle', a.coverTitle);
      set('modalSbSpineAuth',  a.coverAuthor);
    }
  }
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
