/**
 * Patricia Real Estate – i18n Language System v2
 *
 * Strategy:
 * - ALL static text uses data-i18n / data-i18n-html / data-i18n-placeholder attributes
 * - applyTranslations() scans ALL tagged elements on every call
 * - toggleLang() stores preference in localStorage and re-applies
 * - detectLang() defaults to EN unless user has manually toggled before
 * - Pages are always authored in English; this script translates to ES on demand
 */

const i18nStrings = {
  en: {
    // ── Nav ──
    'nav.about':      'Who We Are',
    'nav.contact':    'Contact',
    'nav.properties': 'Properties',
    'nav.projects':   'Projects',
    'nav.countries':  'All Countries',

    // ── Landing ──
    'landing.eyebrow':  'Exclusive Properties Worldwide',
    'landing.h1':       'Find Your <em>Next Property,</em><br/>Anywhere',
    'landing.sub':      'Choose your country to explore exclusive listings',
    'landing.uk.name':  'United Kingdom',
    'landing.uk.sub':   'Browse properties across Hampshire &amp; Surrey',
    'landing.ec.name':  'Ecuador',
    'landing.ec.sub':   'Invest in land and property projects in Ecuador',
    'landing.es.name':  'Spain',
    'landing.es.sub':   'Explore luxury properties across Spain',

    // ── Shared hero / index ──
    'hero.eyebrow':         'Patricia Real Estate',
    'uk.hero.h1':           'Find Your <em>Perfect</em><br />Home',
    'uk.hero.sub':          'Trusted, personal, and professional property services across Hampshire and Surrey. Properties for sale and to let.',
    'uk.footer.tagline':    'Trusted property specialists serving Hampshire and Surrey. Selling or letting — we\'re here to help.',
    'es.hero.h1':           'Find Your <em>Dream</em><br />Spanish Home',
    'es.hero.sub':          'Exclusive properties for sale and to let across Barcelona, Madrid, Marbella and the Costa del Sol.',

    // ── Stats ──
    'stat.listings':     'Listings',
    'stat.years':        'Years Experience',
    'stat.satisfaction': 'Client Satisfaction',

    // ── Search ──
    'search.h3':                  'Search Properties',
    'index.search.placeholder':   'Search by location, postcode, or property type\u2026',
    'index.search.btn':           'Search',

    // ── Filters ──
    'index.filter.all':    'All Properties',
    'index.filter.let':    'To Let',
    'index.filter.agreed': 'Let Agreed',

    // ── Sort ──
    'index.sort.newest':    'Newest First',
    'index.sort.priceasc':  'Price: Low to High',
    'index.sort.pricedesc': 'Price: High to Low',
    'index.sort.beds':      'Most Bedrooms',

    // ── Listings section ──
    'listings.eyebrow': 'Available Properties',
    'listings.h2':      'Featured Listings',
    'listings.sub':     'Carefully selected properties, personally managed by our team.',
    'listings.count.label': 'properties found',
    'index.browse':     'Browse Properties',

    // ── Features section ──
    'features.eyebrow': 'Why Choose Us',
    'features.h2':      'A Personal Touch in Property',
    'features.sub':     'We combine local expertise with exceptional service to make your property journey seamless.',

    // ── UK Feature cards ──
    'uk.feat1.h': 'Local Market Expertise',
    'uk.feat1.p': '10+ years of deep knowledge across Hampshire and Surrey means we know exactly how to position your property and find the right match.',
    'uk.feat2.h': 'Professional Marketing',
    'uk.feat2.p': 'HD photography, floor plans, and premium portal listings ensure your property stands out to the right buyers.',
    'uk.feat3.h': 'Dedicated Support',
    'uk.feat3.p': 'Your personal agent handles everything from the first viewing to the day you collect your keys — always available.',
    'uk.feat4.h': 'End-to-End Guidance',
    'uk.feat4.p': 'From your first enquiry to the completion of contracts, we manage every step — keeping you informed and in control throughout.',

    // ── Spain Feature cards ──
    'es.feat1.h': 'International Reach',
    'es.feat1.p': 'We connect international buyers with Spain\'s finest properties — with multilingual support and deep local knowledge across all major Spanish markets.',
    'es.feat2.h': 'Professional Marketing',
    'es.feat2.p': 'HD photography, floor plans, and premium portal listings ensure your property stands out to the right buyers.',
    'es.feat3.h': 'Dedicated Support',
    'es.feat3.p': 'Your personal agent handles everything from the first viewing to the day you collect your keys — always available.',
    'es.feat4.h': 'Legal & Conveyancing',
    'es.feat4.p': 'We work with trusted Spanish notaries and solicitors to ensure every transaction is legally secure — giving you complete peace of mind.',

    // ── Footer ──
    'footer.tagline':  'Trusted property specialists in the UK, Spain and Ecuador.',
    'footer.explore':  'Explore',
    'footer.props':    'Properties',
    'footer.company':  'Company',
    'footer.legal':    'Legal',
    'footer.uk':       'United Kingdom',
    'footer.es':       'Spain',
    'footer.ec':       'Ecuador',
    'footer.tolet':    'To Let',
    'footer.contact':  'Contact',
    'footer.privacy':  'Privacy Policy',
    'footer.terms':    'Terms & Conditions',
    'footer.copy':     '\u00a9 2026 Patricia Real Estate. All rights reserved.',

    // ── Empty / no results ──
    'empty.h3': 'No properties found',
    'empty.p':  'Try adjusting your search or contact us to discuss your requirements.',

    // ── About page ──
    'about.title':            'Who We Are \u2013 Patricia Real Estate',
    'about.eyebrow':          'Patricia Real Estate',
    'about.hero.h1':          'Who <em>We Are</em>',
    'about.hero.p':           'A trusted, personal and professional property group operating across three countries \u2014 connecting people with exceptional homes and investments.',
    'about.mission.h2':       'Our <em>Mission</em>',
    'about.mission.p1':       'At Patricia Real Estate, our mission is simple: to make property ownership accessible, transparent and rewarding \u2014 whether you\'re searching for a family home in the UK, a luxury villa in Spain, or investing in land in Ecuador.',
    'about.mission.p2':       'We believe that finding or selling a property should be a positive, empowering experience. That means honest advice, clear communication, and a team that genuinely cares about your outcome \u2014 not just the transaction.',
    'about.mission.p3':       'With operations across three countries and a multilingual team, we bring local expertise and global perspective to every client relationship.',
    'about.stats.years':      'Years of experience',
    'about.stats.clients':    'Happy clients worldwide',
    'about.stats.countries':  'Countries of operation',
    'about.stats.satisfaction':'Client satisfaction rate',
    'about.values.eyebrow':   'Our Values',
    'about.values.h2':        'What We <em>Stand For</em>',
    'about.values.sub':       'The principles that guide every decision we make and every relationship we build.',
    'about.values.trust.h':   'Trust & Transparency',
    'about.values.trust.p':   'We say what we mean and mean what we say. Every client receives honest, clear advice \u2014 even when it\'s not what they hoped to hear.',
    'about.values.excellence.h': 'Excellence',
    'about.values.excellence.p': 'We set high standards for ourselves and never stop improving. From the quality of our listings to the speed of our response, excellence is our baseline.',
    'about.values.personal.h':   'Personal Service',
    'about.values.personal.p':   'You\'re not a number to us. Every client has a dedicated contact who knows their situation, their goals, and their timeline.',
    'about.values.global.h':     'Global Thinking',
    'about.values.global.p':     'Our reach spans the UK, Spain and Ecuador. We bring global perspective with deep local knowledge.',
    'about.values.legal.h':      'Legal Integrity',
    'about.values.legal.p':      'Every property we handle is backed by proper legal due diligence. We work with trusted solicitors and notaries in each country.',
    'about.values.community.h':  'Community & Legacy',
    'about.values.community.p':  'We invest in the communities we serve \u2014 helping families build generational wealth and meaningful lives.',
    'about.story.h2':    'Our <em>Story</em>',
    'about.story.p1':    'Patricia Real Estate was founded on a simple belief: that property \u2014 wherever in the world \u2014 should be accessible to everyone, handled with care and backed by expertise.',
    'about.story.t1.h':  'Founded in Hampshire, UK',
    'about.story.t1.p':  'Patricia Reynolds opens the first office, focusing on residential sales and lettings across Hampshire and Surrey.',
    'about.story.t2.h':  'Expansion to Spain',
    'about.story.t2.p':  'Growing demand from international buyers leads to a dedicated Spain portfolio, with listings across Marbella, Barcelona and Madrid.',
    'about.story.t3.h':  'Ecuador Land & Investment Division',
    'about.story.t3.p':  'Partnering with local developers, we launch our Ecuador division \u2014 helping overseas Ecuadorians and international investors access high-growth land projects.',
    'about.story.t4.h':  'A Global Property Group',
    'about.story.t4.p':  'Today, Patricia Real Estate serves clients across three continents with a multilingual team and hundreds of successful transactions.',
    'about.team.eyebrow': 'Our Team',
    'about.team.h2':      'The People <em>Behind the Properties</em>',
    'about.team.sub':     'A dedicated founder supported by trusted local partners across every market we serve.',
    'about.team.r1.role': 'Founder & Director',
    'about.team.r1.bio':  'With 10+ years in residential property across Hampshire and Surrey, Patricia founded the agency on the belief that personal service always wins. Fluent in English and Spanish, she oversees all three markets and every client relationship personally.',
    'about.team.contact': 'Contact Patricia \u2192',
    'about.partners.h':   'Our Local Partners',
    'about.partners.sub': 'We work with carefully selected local specialists in Spain and Ecuador to ensure every client receives expert, on-the-ground guidance \u2014 whatever the market.',
    'about.partners.es.market': 'Spain',
    'about.partners.es.desc':   'Licensed Spanish agents and legal specialists covering Marbella, Barcelona, Madrid and the Costa Brava. Full conveyancing, mortgage referrals and after-sale support.',
    'about.partners.ec.market': 'Ecuador',
    'about.partners.ec.desc':   'Trusted land developers and legal notaries on Ecuador\'s Pacific coast. Fully verified projects, secure title deeds and flexible financing \u2014 with support for overseas buyers from start to finish.',
    'about.partners.note':      'Every partner is personally vetted by Patricia and held to the same standards of transparency and client care that define our business.',
    'about.countries.eyebrow':  'Where We Operate',
    'about.countries.h2':       'Explore Properties <em>by Country</em>',
    'about.countries.uk.h':     'United Kingdom',
    'about.countries.uk.p':     'Sales and lettings across Hampshire, Surrey and surrounding counties.',
    'about.countries.uk.link':  'Browse UK properties \u2192',
    'about.countries.es.h':     'Spain',
    'about.countries.es.p':     'From Barcelona apartments to Marbella villas \u2014 Spain\'s most desirable property markets.',
    'about.countries.es.link':  'Explore Spain listings \u2192',
    'about.countries.ec.h':     'Ecuador',
    'about.countries.ec.p':     'Land investment and residential projects on Ecuador\'s Pacific coast.',
    'about.countries.ec.link':  'View Ecuador projects \u2192',
    'about.cta.h2':     'Ready to find your <em>perfect property?</em>',
    'about.cta.p':      'Whether you\'re searching, selling, renting or investing \u2014 our team is here to guide you every step of the way.',
    'about.cta.browse': 'Browse Properties \u2192',
    'about.cta.contact':'Get in Touch',
    // ── Ecuador page ──
    'ec.nav.enquire':   'Enquire Now',
    'ec.hero.h1':       'Invest in Ecuador today.<br/><em>Secure your family\'s</em><br/>future.',
    'ec.hero.p':        'We help Ecuadorians at home and abroad invest with legal security, vision and high returns in Ecuador\'s finest real estate projects.',
    'ec.hero.btn':      'View Projects ↓',
    'ec.stat1':         'Years of proven track record',
    'ec.stat2':         'Families and investors served',
    'ec.stat3':         'Active projects in Ecuador',
    'ec.stat4':         'Legal security guaranteed',
    'ec.about.h2':      'Secure investment<br/><em>with future vision</em>',
    'ec.about.p1':      'At Patricia Real Estate Ecuador, we have guided hundreds of families and investors — both locally and abroad — to build wealth through strategic planning and long-term growth vision.',
    'ec.about.p2':      'Each of our projects comes with full legal security, legalised title deeds and strategic high-value locations. We work transparently and personally, guiding you through every step.',
    'ec.about.btn':     'Free Consultation →',
    'ec.visual.title':  'Ecuador — Coast, Sierra & Oriente',
    'ec.visual.sub':    'Planned developments with growth vision, legal security and strategic location.',
    'ec.proj.eyebrow':  'Our Projects',
    'ec.proj.h2':       'Projects in Ecuador',
    'ec.proj.sub':      'Planned developments with growth vision, legal security and strategic location.',
    'ec.why.eyebrow':   'Why Invest?',
    'ec.why.h2':        'Reasons to Invest in Ecuador',
    'ec.why.sub':       'Ecuador offers unique real estate investment opportunities with high return potential.',
    'ec.why1.h':        'Legal Security',
    'ec.why1.p':        'All our projects have properly legalised title deeds, municipal permits and full legal guarantee for the investor.',
    'ec.why2.h':        'High Returns',
    'ec.why2.p':        'Strategic locations with proven growth. Our projects on the Ecuadorian coast have significantly increased in value year after year.',
    'ec.why3.h':        'For Overseas Ecuadorians',
    'ec.why3.p':        'We facilitate the entire purchase process remotely. Contract signing, title deed management and personalised follow-up from anywhere in the world.',
    'ec.why4.h':        'Accessible Prices',
    'ec.why4.p':        'Flexible payment plans, low entry cost and in-house financing. Investing in Ecuador is more accessible than you think.',
    'ec.why5.h':        'Personal Support',
    'ec.why5.p':        'A dedicated advisor will accompany you throughout the entire process — from the first consultation to the delivery of title deeds — at no extra cost.',
    'ec.why6.h':        'Coastal Projects',
    'ec.why6.p':        'Privileged access to land and developments on the Ecuadorian coast, one of the country\'s fastest-growing tourism and real estate zones.',
    'ec.cta.h2':        'Ready to invest<br/><em>in your future?</em>',
    'ec.cta.p':         'Speak with our team today. We advise you without obligation and present the project that best suits your budget and goals.',
    'ec.cta.btn':       'Enquire Now →',
    'ec.footer.tagline':'Real estate investment specialists in Ecuador. Legal security, vision and high returns.',
    'ec.footer.projects':'Projects',
    'ec.footer.viewall':'View all',
    'proj.nav.back':            '← Ecuador',
    'proj.nav.projects':        'Projects',
    'proj.nav.enquire':         'Enquire Now',
    'proj.hl.price':            'Price from',
    'proj.hl.sep':              'Reservation from',
    'proj.hl.size':             'Plot size',
    'proj.hl.dist':             'Distance to sea',
    'proj.hero.back':           '← View all projects',
    'proj.amenities.eyebrow':   'Amenities',
    'proj.amenities.h2':        'Project Amenities & Works',
    'proj.amenities.sub':       'Everything you need to live or invest with comfort and value.',
    'proj.civil.eyebrow':       'Infrastructure',
    'proj.civil.h2':            'Civil Works Included',
    'proj.gallery.eyebrow':     'Gallery',
    'proj.gallery.h2':          'Project Gallery',
    'proj.gallery.sub':         'Illustrative images of the project and surrounding area.',
    'proj.gallery.note':        'Want to see more photos or take a virtual tour? Contact us.',
    'proj.cta.p':               'Speak with our team today. We will send you all the information, updated prices and payment plans with no obligation.',
    'proj.cta.btn':             'Enquire Now →',
    'proj.desc.benefits':       'Key Benefits',
    'proj.quintas-rancho-spondylus.type':    'Rural Estate',
    'proj.quintas-rancho-spondylus.tagline': 'Live where tranquility becomes investment.',
    'proj.quintas-rancho-spondylus.desc_h2': 'About the <em>Spondylus</em> Project',
    'proj.quintas-rancho-spondylus.cta_h2':  'Interested in<br/><em>Spondylus?</em>',
    'proj.ciudad-mangle.type':    'Residential Development',
    'proj.ciudad-mangle.tagline': 'Your home on the Ecuadorian Pacific coast.',
    'proj.ciudad-mangle.desc_h2': 'About <em>Ciudad Mangle</em>',
    'proj.ciudad-mangle.cta_h2':  'Interested in<br/><em>Mangle?</em>',
    'proj.vista-al-mar.type':    'Residential Development',
    'proj.vista-al-mar.tagline': 'Privileged views of the Pacific Ocean.',
    'proj.vista-al-mar.desc_h2': 'About <em>Vista al Mar</em>',
    'proj.vista-al-mar.cta_h2':  'Interested in<br/><em>Vista al Mar?</em>',
    'proj.olinas-del-mar.type':    'Seafront Development',
    'proj.olinas-del-mar.tagline': 'Direct beach access and complete infrastructure.',
    'proj.olinas-del-mar.desc_h2': 'About <em>Olinas del Mar</em>',
    'proj.olinas-del-mar.cta_h2':  'Interested in<br/><em>Olinas del Mar?</em>',
    'proj.lotizacion-san-jose-beach.type':    'Beach Plot Development',
    'proj.lotizacion-san-jose-beach.tagline': 'Beach plots with individual title deeds.',
    'proj.lotizacion-san-jose-beach.desc_h2': 'About <em>San José Beach</em>',
    'proj.lotizacion-san-jose-beach.cta_h2':  'Interested in<br/><em>San José Beach?</em>',
  },

  es: {
    // ── Nav ──
    'nav.about':      'Qui\u00e9nes Somos',
    'nav.contact':    'Contacto',
    'nav.properties': 'Propiedades',
    'nav.projects':   'Proyectos',
    'nav.countries':  'Pa\u00edses',

    // ── Landing ──
    'landing.eyebrow':  'Propiedades Exclusivas en Todo el Mundo',
    'landing.h1':       'Encuentra tu <em>Pr\u00f3xima Propiedad,</em><br/>Donde Quieras',
    'landing.sub':      'Elige tu pa\u00eds para explorar listados exclusivos',
    'landing.uk.name':  'Reino Unido',
    'landing.uk.sub':   'Propiedades en Hampshire y Surrey',
    'landing.ec.name':  'Ecuador',
    'landing.ec.sub':   'Invierte en terrenos y proyectos en Ecuador',
    'landing.es.name':  'Espa\u00f1a',
    'landing.es.sub':   'Explora propiedades de lujo en Espa\u00f1a',

    // ── Shared hero / index ──
    'hero.eyebrow':         'Patricia Real Estate',
    'uk.hero.h1':           'Encuentra tu <em>Hogar Perfecto</em>',
    'uk.hero.sub':          'Servicios inmobiliarios de confianza en Hampshire y Surrey. Propiedades en venta y alquiler.',
    'uk.footer.tagline':    'Especialistas en propiedades en Hampshire y Surrey. Venta y alquiler.',
    'es.hero.h1':           'Encuentra tu <em>Hogar en Espa\u00f1a</em>',
    'es.hero.sub':          'Propiedades exclusivas en venta y alquiler en Barcelona, Madrid, Marbella y la Costa del Sol.',

    // ── Stats ──
    'stat.listings':     'Listados',
    'stat.years':        'A\u00f1os de Experiencia',
    'stat.satisfaction': 'Satisfacci\u00f3n del Cliente',

    // ── Search ──
    'search.h3':                 'Buscar Propiedades',
    'index.search.placeholder':  'Buscar por ubicaci\u00f3n, c\u00f3digo postal o tipo de propiedad\u2026',
    'index.search.btn':          'Buscar',

    // ── Filters ──
    'index.filter.all':    'Todas',
    'index.filter.let':    'En Alquiler',
    'index.filter.agreed': 'Alquiler Acordado',

    // ── Sort ──
    'index.sort.newest':    'M\u00e1s Recientes',
    'index.sort.priceasc':  'Precio: Menor a Mayor',
    'index.sort.pricedesc': 'Precio: Mayor a Menor',
    'index.sort.beds':      'M\u00e1s Habitaciones',

    // ── Listings section ──
    'listings.eyebrow': 'Propiedades Disponibles',
    'listings.h2':      'Listados Destacados',
    'listings.sub':     'Propiedades cuidadosamente seleccionadas y gestionadas personalmente por nuestro equipo.',
    'listings.count.label': 'propiedades encontradas',
    'index.browse':     'Ver Propiedades',

    // ── Features section ──
    'features.eyebrow': 'Por Qu\u00e9 Elegirnos',
    'features.h2':      'Un Trato Personal en Inmobiliaria',
    'features.sub':     'Combinamos experiencia local con un servicio excepcional para hacer tu experiencia inmobiliaria perfecta.',

    // ── UK Feature cards ──
    'uk.feat1.h': 'Experiencia Local',
    'uk.feat1.p': 'M\u00e1s de 10 a\u00f1os de conocimiento profundo en Hampshire y Surrey nos permiten posicionar tu propiedad y encontrar el comprador adecuado.',
    'uk.feat2.h': 'Marketing Profesional',
    'uk.feat2.p': 'Fotograf\u00eda HD, planos y listados en portales premium aseguran que tu propiedad destaque ante los compradores adecuados.',
    'uk.feat3.h': 'Apoyo Dedicado',
    'uk.feat3.p': 'Tu agente personal gestiona todo, desde la primera visita hasta el d\u00eda en que recoges las llaves \u2014 siempre disponible.',
    'uk.feat4.h': 'Gu\u00eda Integral',
    'uk.feat4.p': 'Desde tu primera consulta hasta la firma del contrato, gestionamos cada paso \u2014 manten\u00e9ndote informado y en control.',

    // ── Spain Feature cards ──
    'es.feat1.h': 'Alcance Internacional',
    'es.feat1.p': 'Conectamos compradores internacionales con las mejores propiedades de Espa\u00f1a, con atenci\u00f3n multiling\u00fce y conocimiento local profundo.',
    'es.feat2.h': 'Marketing Profesional',
    'es.feat2.p': 'Fotograf\u00eda HD, planos y listados en portales premium aseguran que tu propiedad destaque ante los compradores adecuados.',
    'es.feat3.h': 'Apoyo Dedicado',
    'es.feat3.p': 'Tu agente personal gestiona todo, desde la primera visita hasta el d\u00eda en que recoges las llaves \u2014 siempre disponible.',
    'es.feat4.h': 'Legal y Notariado',
    'es.feat4.p': 'Trabajamos con notarios y abogados espa\u00f1oles de confianza para garantizar que cada transacci\u00f3n sea legalmente segura.',

    // ── Footer ──
    'footer.tagline':  'Especialistas en propiedades en el Reino Unido, Espa\u00f1a y Ecuador.',
    'footer.explore':  'Explorar',
    'footer.props':    'Propiedades',
    'footer.company':  'Empresa',
    'footer.legal':    'Legal',
    'footer.uk':       'Reino Unido',
    'footer.es':       'Espa\u00f1a',
    'footer.ec':       'Ecuador',
    'footer.tolet':    'En Alquiler',
    'footer.contact':  'Contacto',
    'footer.privacy':  'Pol\u00edtica de Privacidad',
    'footer.terms':    'T\u00e9rminos y Condiciones',
    'footer.copy':     '\u00a9 2026 Patricia Real Estate. Todos los derechos reservados.',

    // ── Empty / no results ──
    'empty.h3': 'No se encontraron propiedades',
    'empty.p':  'Intenta ajustar tu b\u00fasqueda o cont\u00e1ctanos para hablar de tus necesidades.',

    // ── About page ──
    'about.title':            'Qui\u00e9nes Somos \u2013 Patricia Real Estate',
    'about.eyebrow':          'Patricia Real Estate',
    'about.hero.h1':          'Qui\u00e9nes <em>Somos</em>',
    'about.hero.p':           'Un grupo inmobiliario de confianza que opera en tres pa\u00edses \u2014 conectando a personas con hogares e inversiones excepcionales.',
    'about.mission.h2':       'Nuestra <em>Misi\u00f3n</em>',
    'about.mission.p1':       'En Patricia Real Estate, nuestra misi\u00f3n es clara: hacer que la propiedad inmobiliaria sea accesible, transparente y gratificante \u2014 ya sea que busques una casa familiar en el Reino Unido, una villa de lujo en Espa\u00f1a, o inviertas en terrenos en Ecuador.',
    'about.mission.p2':       'Creemos que encontrar o vender una propiedad debe ser una experiencia positiva y enriquecedora. Eso significa asesoramiento honesto, comunicaci\u00f3n clara y un equipo que genuinamente se preocupa por tu resultado.',
    'about.mission.p3':       'Con operaciones en tres pa\u00edses y un equipo multiling\u00fce, aportamos experiencia local y perspectiva global a cada relaci\u00f3n con nuestros clientes.',
    'about.stats.years':      'A\u00f1os de experiencia',
    'about.stats.clients':    'Clientes satisfechos en todo el mundo',
    'about.stats.countries':  'Pa\u00edses de operaci\u00f3n',
    'about.stats.satisfaction':'Tasa de satisfacci\u00f3n del cliente',
    'about.values.eyebrow':   'Nuestros Valores',
    'about.values.h2':        'En Qu\u00e9 <em>Creemos</em>',
    'about.values.sub':       'Los principios que gu\u00edan cada decisi\u00f3n que tomamos y cada relaci\u00f3n que construimos.',
    'about.values.trust.h':   'Confianza y Transparencia',
    'about.values.trust.p':   'Decimos lo que pensamos y hacemos lo que decimos. Cada cliente recibe un asesoramiento honesto y claro, incluso cuando no es lo que esperaba escuchar.',
    'about.values.excellence.h': 'Excelencia',
    'about.values.excellence.p': 'Nos fijamos altos est\u00e1ndares y nunca dejamos de mejorar. La excelencia es nuestro punto de partida, no nuestro techo.',
    'about.values.personal.h':   'Servicio Personal',
    'about.values.personal.p':   'No eres un n\u00famero para nosotros. Cada cliente tiene un contacto dedicado que conoce su situaci\u00f3n, sus objetivos y sus plazos.',
    'about.values.global.h':     'Visi\u00f3n Global',
    'about.values.global.p':     'Operamos en el Reino Unido, Espa\u00f1a y Ecuador. Aportamos perspectiva global con profundo conocimiento local.',
    'about.values.legal.h':      'Integridad Legal',
    'about.values.legal.p':      'Cada propiedad que gestionamos est\u00e1 respaldada por la debida diligencia legal. Trabajamos con abogados y notarios de confianza en cada pa\u00eds.',
    'about.values.community.h':  'Comunidad y Legado',
    'about.values.community.p':  'Invertimos en las comunidades que servimos \u2014 ayudando a las familias a construir patrimonio generacional y vidas con prop\u00f3sito.',
    'about.story.h2':    'Nuestra <em>Historia</em>',
    'about.story.p1':    'Patricia Real Estate naci\u00f3 con una convicci\u00f3n simple: que la propiedad inmobiliaria, en cualquier lugar del mundo, debe ser accesible para todos, gestionada con cuidado y respaldada por experiencia.',
    'about.story.t1.h':  'Fundada en Hampshire, Reino Unido',
    'about.story.t1.p':  'Patricia Reynolds abre la primera oficina, enfocada en ventas y alquileres residenciales en Hampshire y Surrey.',
    'about.story.t2.h':  'Expansi\u00f3n a Espa\u00f1a',
    'about.story.t2.p':  'La creciente demanda de compradores internacionales lleva a crear una cartera dedicada a Espa\u00f1a, con propiedades en Marbella, Barcelona y Madrid.',
    'about.story.t3.h':  'Divisi\u00f3n de Inversi\u00f3n en Ecuador',
    'about.story.t3.p':  'En alianza con promotores locales, lanzamos nuestra divisi\u00f3n de Ecuador \u2014 ayudando a ecuatorianos en el exterior e inversores internacionales a acceder a proyectos de alta plusval\u00eda.',
    'about.story.t4.h':  'Un Grupo Inmobiliario Global',
    'about.story.t4.p':  'Hoy, Patricia Real Estate atiende a clientes en tres continentes con un equipo multiling\u00fce y cientos de transacciones exitosas.',
    'about.team.eyebrow': 'Nuestro Equipo',
    'about.team.h2':      'Las Personas <em>Detr\u00e1s de las Propiedades</em>',
    'about.team.sub':     'Una fundadora dedicada respaldada por socios locales de confianza en cada mercado que servimos.',
    'about.team.r1.role': 'Fundadora y Directora',
    'about.team.r1.bio':  'Con m\u00e1s de 10 a\u00f1os en el sector inmobiliario residencial en Hampshire y Surrey, Patricia fund\u00f3 la agencia con la convicci\u00f3n de que el servicio personal siempre marca la diferencia. Habla ingl\u00e9s y espa\u00f1ol, y supervisa los tres mercados personalmente.',
    'about.team.contact': 'Contactar a Patricia \u2192',
    'about.partners.h':   'Nuestros Socios Locales',
    'about.partners.sub': 'Trabajamos con especialistas locales de confianza en Espa\u00f1a y Ecuador para garantizar que cada cliente reciba orientaci\u00f3n experta y directa en cada mercado.',
    'about.partners.es.market': 'Espa\u00f1a',
    'about.partners.es.desc':   'Agentes espa\u00f1oles licenciados y especialistas legales en Marbella, Barcelona, Madrid y la Costa Brava. Tramitaci\u00f3n completa, referencias hipotecarias y soporte post-venta.',
    'about.partners.ec.market': 'Ecuador',
    'about.partners.ec.desc':   'Promotores de terrenos y notarios legales de confianza en la costa del Pac\u00edfico ecuatoriano. Proyectos verificados, escrituras seguras y financiamiento flexible.',
    'about.partners.note':      'Cada socio es evaluado personalmente por Patricia y debe cumplir los mismos est\u00e1ndares de transparencia y atenci\u00f3n al cliente que definen nuestro negocio.',
    'about.countries.eyebrow':  'D\u00f3nde Operamos',
    'about.countries.h2':       'Explora Propiedades <em>por Pa\u00eds</em>',
    'about.countries.uk.h':     'Reino Unido',
    'about.countries.uk.p':     'Ventas y alquileres en Hampshire, Surrey y condados aledaños.',
    'about.countries.uk.link':  'Ver propiedades en el RU \u2192',
    'about.countries.es.h':     'Espa\u00f1a',
    'about.countries.es.p':     'Desde apartamentos en Barcelona hasta villas en Marbella.',
    'about.countries.es.link':  'Explorar propiedades en Espa\u00f1a \u2192',
    'about.countries.ec.h':     'Ecuador',
    'about.countries.ec.p':     'Inversi\u00f3n en terrenos y proyectos residenciales en la costa del Pac\u00edfico ecuatoriano.',
    'about.countries.ec.link':  'Ver proyectos en Ecuador \u2192',
    'about.cta.h2':     '\u00bfListo para encontrar tu <em>propiedad ideal?</em>',
    'about.cta.p':      'Ya sea que busques, vendas, alquiles o inviertas \u2014 nuestro equipo est\u00e1 aqu\u00ed para guiarte en cada paso.',
    'about.cta.browse': 'Explorar Propiedades \u2192',
    'about.cta.contact':'Cont\u00e1ctanos',
    // ── Ecuador page ──
    'ec.nav.enquire':   'Consultar',
    'ec.hero.h1':       'Invierte en Ecuador hoy.<br/><em>Asegura el patrimonio</em><br/>de tu familia.',
    'ec.hero.p':        'Ayudamos a ecuatorianos en el país y en el extranjero a invertir con seguridad jurídica, visión y alta plusvalía en los mejores proyectos inmobiliarios del Ecuador.',
    'ec.hero.btn':      'Ver Proyectos ↓',
    'ec.stat1':         'Años de trayectoria comprobada',
    'ec.stat2':         'Familias e inversionistas atendidos',
    'ec.stat3':         'Proyectos activos en Ecuador',
    'ec.stat4':         'Seguridad jurídica garantizada',
    'ec.about.h2':      'Inversión segura<br/><em>con visión de futuro</em>',
    'ec.about.p1':      'En Patricia Real Estate Ecuador, hemos acompañado a cientos de familias e inversionistas — tanto en el país como en el exterior — a construir patrimonio con planificación estratégica y visión de crecimiento a largo plazo.',
    'ec.about.p2':      'Cada uno de nuestros proyectos cuenta con plena seguridad jurídica, escrituras legalizadas y ubicaciones estratégicas de alta plusvalía. Trabajamos de manera transparente y personalizada, guiándote en cada paso del proceso.',
    'ec.about.btn':     'Consulta gratuita →',
    'ec.visual.title':  'Ecuador — Costa, Sierra y Oriente',
    'ec.visual.sub':    'Desarrollos planificados con visión de crecimiento, seguridad jurídica y ubicación estratégica.',
    'ec.proj.eyebrow':  'Nuestros Proyectos',
    'ec.proj.h2':       'Proyectos en Ecuador',
    'ec.proj.sub':      'Desarrollos planificados con visión de crecimiento, seguridad jurídica y ubicación estratégica.',
    'ec.why.eyebrow':   '¿Por qué invertir?',
    'ec.why.h2':        'Razones para invertir en Ecuador',
    'ec.why.sub':       'Ecuador ofrece oportunidades únicas de inversión inmobiliaria con alto potencial de retorno.',
    'ec.why1.h':        'Seguridad Jurídica',
    'ec.why1.p':        'Todos nuestros proyectos cuentan con escrituras debidamente legalizadas, permisos municipales y garantía legal completa para el inversionista.',
    'ec.why2.h':        'Alta Plusvalía',
    'ec.why2.p':        'Ubicaciones estratégicas con crecimiento comprobado. Nuestros proyectos en la costa ecuatoriana han incrementado su valor significativamente año tras año.',
    'ec.why3.h':        'Para Ecuatorianos en el Exterior',
    'ec.why3.p':        'Facilitamos todo el proceso de compra de manera remota. Firma de contratos, gestión de escrituras y seguimiento personalizado desde cualquier parte del mundo.',
    'ec.why4.h':        'Precios Accesibles',
    'ec.why4.p':        'Planes de pago flexibles, entrada inicial baja y financiamiento propio. Invertir en Ecuador es más accesible de lo que imaginas.',
    'ec.why5.h':        'Acompañamiento Personal',
    'ec.why5.p':        'Un asesor dedicado te acompañará durante todo el proceso — desde la primera consulta hasta la entrega de escrituras — sin costo adicional.',
    'ec.why6.h':        'Proyectos en la Costa',
    'ec.why6.p':        'Acceso privilegiado a terrenos y urbanizaciones en la costa ecuatoriana, una de las zonas de mayor crecimiento turístico e inmobiliario del país.',
    'ec.cta.h2':        '¿Listo para invertir<br/><em>en tu futuro?</em>',
    'ec.cta.p':         'Habla con nuestro equipo hoy mismo. Te asesoramos sin compromiso y te presentamos el proyecto que mejor se adapte a tu presupuesto y objetivos.',
    'ec.cta.btn':       'Consultar →',
    'ec.footer.tagline':'Especialistas en inversión inmobiliaria en Ecuador. Seguridad jurídica, visión y alta plusvalía.',
    'ec.footer.projects':'Proyectos',
    'ec.footer.viewall':'Ver todos',
    'proj.nav.back':            '← Ecuador',
    'proj.nav.projects':        'Proyectos',
    'proj.nav.enquire':         'Consultar',
    'proj.hl.price':            'Precio desde',
    'proj.hl.sep':              'Separación desde',
    'proj.hl.size':             'Tamaño de lote',
    'proj.hl.dist':             'Distancia al mar',
    'proj.hero.back':           '← Ver todos los proyectos',
    'proj.amenities.eyebrow':   'Equipamiento',
    'proj.amenities.h2':        'Amenidades y Obras del Proyecto',
    'proj.amenities.sub':       'Todo lo que necesitas para vivir o invertir con comodidad y plusvalía.',
    'proj.civil.eyebrow':       'Infraestructura',
    'proj.civil.h2':            'Obras Civiles Incluidas',
    'proj.gallery.eyebrow':     'Galería',
    'proj.gallery.h2':          'Galería del Proyecto',
    'proj.gallery.sub':         'Imágenes ilustrativas del proyecto y la zona.',
    'proj.gallery.note':        '¿Quieres ver más fotos o hacer un recorrido virtual? Escríbenos.',
    'proj.cta.p':               'Habla con nuestro equipo hoy mismo. Te enviamos toda la información, precios actualizados y planes de pago sin compromiso.',
    'proj.cta.btn':             'Consultar →',
    'proj.desc.benefits':       'Beneficios clave',
    'proj.quintas-rancho-spondylus.type':    'Quintas Campestres',
    'proj.quintas-rancho-spondylus.tagline': 'Vive donde la tranquilidad se convierte en inversión.',
    'proj.quintas-rancho-spondylus.desc_h2': 'Sobre el proyecto <em>Spondylus</em>',
    'proj.quintas-rancho-spondylus.cta_h2':  '¿Te interesa<br/><em>Spondylus?</em>',
    'proj.ciudad-mangle.type':    'Urbanización',
    'proj.ciudad-mangle.tagline': 'Tu hogar en la costa del Pacífico ecuatoriano.',
    'proj.ciudad-mangle.desc_h2': 'Sobre <em>Ciudad Mangle</em>',
    'proj.ciudad-mangle.cta_h2':  '¿Te interesa<br/><em>Mangle?</em>',
    'proj.vista-al-mar.type':    'Urbanización',
    'proj.vista-al-mar.tagline': 'Vistas privilegiadas del océano Pacífico.',
    'proj.vista-al-mar.desc_h2': 'Sobre <em>Vista al Mar</em>',
    'proj.vista-al-mar.cta_h2':  '¿Te interesa<br/><em>Vista al Mar?</em>',
    'proj.olinas-del-mar.type':    'Urbanización Frente al Mar',
    'proj.olinas-del-mar.tagline': 'Acceso directo a la playa e infraestructura completa.',
    'proj.olinas-del-mar.desc_h2': 'Sobre <em>Olinas del Mar</em>',
    'proj.olinas-del-mar.cta_h2':  '¿Te interesa<br/><em>Olinas del Mar?</em>',
    'proj.lotizacion-san-jose-beach.type':    'Lotización',
    'proj.lotizacion-san-jose-beach.tagline': 'Lotes de playa con escrituras individuales.',
    'proj.lotizacion-san-jose-beach.desc_h2': 'Sobre <em>San José Beach</em>',
    'proj.lotizacion-san-jose-beach.cta_h2':  '¿Te interesa<br/><em>San José Beach?</em>',
  }
};

/* ── Core engine ── */
let currentLang = 'en';

function detectLang() {
  // Pages are English by default.
  // Only switch to Spanish if the user has MANUALLY clicked the toggle.
  const saved = localStorage.getItem('pre_lang');
  if (saved === 'es') return 'es';
  return 'en';
}

function applyTranslations(lang) {
  const strings = i18nStrings[lang] || i18nStrings.en;

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  // HTML (allows <em>, <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });

  // Input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (strings[key] !== undefined) el.placeholder = strings[key];
  });

  // Select <option> text
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) el.textContent = strings[key];
  });

  // Page <title>
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (strings[key]) document.title = strings[key];
  }

  // Toggle button label — shows the OTHER language (what you'll switch TO)
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'ES' : 'EN';

  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  currentLang = lang;
}

function toggleLang() {
  const next = currentLang === 'en' ? 'es' : 'en';
  // If switching back to English, clear the saved preference so
  // the page defaults to English on next visit naturally
  if (next === 'en') {
    localStorage.removeItem('pre_lang');
  } else {
    localStorage.setItem('pre_lang', next);
  }
  applyTranslations(next);
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLang();
  applyTranslations(currentLang);
});
