/**
 * Patricia Real Estate – UK Property Listings
 * Photos: add real image URLs to the photos[] array for each listing.
 * Placeholder photos use Unsplash free images as examples.
 */
var _ukData = [
  {
    id: 1, title: "Stunning 4-Bed Detached Family Home", type: "to-let", category: "house",
    price: "£625,000", address: "14 Oakwood Drive", town: "Guildford", postcode: "GU2 7RN",
    bedrooms: 4, bathrooms: 3, reception: 2, sqft: "2,100 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
    ],
    features: ["South-facing garden","Double garage","En-suite master","Open-plan kitchen","New build 2021"],
    description: "A magnificent detached family home set in a sought-after residential area of Guildford. Boasting four generous bedrooms, an open-plan kitchen-dining-living space, and a beautifully landscaped south-facing garden. The master bedroom benefits from a luxurious en-suite. Double garage and driveway parking for four vehicles.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-10", emoji: "🏡"
  },
  {
    id: 2, title: "Charming 2-Bed Period Cottage", type: "to-let", category: "house",
    price: "£320,000", address: "7 Mill Lane", town: "Winchester", postcode: "SO23 8PT",
    bedrooms: 2, bathrooms: 1, reception: 1, sqft: "820 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=900&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=80"
    ],
    features: ["Original beams","Inglenook fireplace","Private courtyard","Period features","Quiet lane"],
    description: "A wonderfully characterful Grade II listed cottage dating back to the 18th century. Beautifully maintained with exposed beams, an inglenook fireplace, and a private walled courtyard garden. Situated in a quiet lane just a short walk from Winchester Cathedral.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-09", emoji: "🏠"
  },
  {
    id: 3, title: "Luxury 1-Bed City Centre Apartment", type: "to-let", category: "flat",
    price: "£1,650 pcm", address: "Meridian Tower, Apt 18", town: "Southampton", postcode: "SO14 3JA",
    bedrooms: 1, bathrooms: 1, reception: 1, sqft: "620 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80"
    ],
    features: ["City views","Concierge","Gym access","Underground parking","Balcony","EPC: B"],
    description: "A stunning high-specification apartment on the 18th floor of the prestigious Meridian Tower. Floor-to-ceiling windows flood the space with natural light and offer breathtaking city views. Fitted kitchen with integrated appliances, luxury bathroom, and a private balcony.",
    agent: "James Carter", email: "hello@patriciarealestate.com", added: "2026-04-09", emoji: "🏢"
  },
  {
    id: 4, title: "Spacious 3-Bed Semi-Detached", type: "to-let", category: "house",
    price: "£395,000", address: "29 Birchwood Avenue", town: "Basingstoke", postcode: "RG21 4TK",
    bedrooms: 3, bathrooms: 2, reception: 2, sqft: "1,350 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=900&q=80"
    ],
    features: ["Extended kitchen","Landscaped garden","Two bathrooms","Off-street parking","Good school catchment"],
    description: "An extended and superbly presented three-bedroom semi-detached home in a popular residential area. The ground floor features a large open-plan kitchen-diner extension, a separate sitting room, and a utility room.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-08", emoji: "🏡"
  },
  {
    id: 5, title: "Modern 2-Bed Garden Flat", type: "to-let", category: "flat",
    price: "£1,300 pcm", address: "Elmgrove Road, Ground Floor", town: "Portsmouth", postcode: "PO5 2ER",
    bedrooms: 2, bathrooms: 1, reception: 1, sqft: "780 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80"
    ],
    features: ["Private garden","Off-street parking","Modern kitchen","Near station","Pets considered"],
    description: "A beautifully presented ground-floor garden flat forming part of a converted Edwardian house. The flat benefits from its own private garden to the rear — a rare find at this price.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-07", emoji: "🌿"
  },
  {
    id: 6, title: "Executive 5-Bed New Build Detached", type: "to-let", category: "house",
    price: "£895,000", address: "3 The Grange", town: "Alresford", postcode: "SO24 9QP",
    bedrooms: 5, bathrooms: 4, reception: 3, sqft: "3,200 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80"
    ],
    features: ["Triple garage","Smart home system","Underfloor heating","Wine cellar","Half-acre plot","EPC: A"],
    description: "A truly exceptional new-build executive home set within half an acre in the picturesque market town of Alresford. Five bedrooms, four bathrooms, and three reception rooms across three floors.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-06", emoji: "🏰"
  },
  {
    id: 7, title: "Cosy 1-Bed Apartment — Let Agreed", type: "let-agreed", category: "flat",
    price: "£950 pcm", address: "Harbour View House, Apt 4", town: "Fareham", postcode: "PO16 7GH",
    bedrooms: 1, bathrooms: 1, reception: 1, sqft: "480 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80",
      "https://images.unsplash.com/photo-1460533893735-45cea2212645?w=900&q=80"
    ],
    features: ["Harbour views","Allocated parking","On-site laundry","Near shops"],
    description: "A well-proportioned one-bedroom apartment with wonderful harbour views from the sitting room. Fully furnished. This property has now been let agreed — contact us to join our waiting list.",
    agent: "James Carter", email: "hello@patriciarealestate.com", added: "2026-04-05", emoji: "⚓"
  },
  {
    id: 8, title: "Detached 3-Bed Bungalow with Large Garden", type: "to-let", category: "bungalow",
    price: "£475,000", address: "12 Heathfield Road", town: "Eastleigh", postcode: "SO50 4NA",
    bedrooms: 3, bathrooms: 2, reception: 2, sqft: "1,400 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80"
    ],
    features: ["100ft rear garden","Driveway for 4 cars","Loft conversion potential","Quiet cul-de-sac","Solar panels"],
    description: "A spacious and versatile detached bungalow situated in a quiet cul-de-sac. Features three well-proportioned bedrooms, two bathrooms, and a magnificent 100-foot rear garden.",
    agent: "Patricia Reynolds", email: "hello@patriciarealestate.com", added: "2026-04-04", emoji: "🌻"
  }
];

var _esData = [
  {
    id: 1, title: "Luxury Villa with Sea Views", type: "to-let", category: "house",
    price: "€1,250,000", address: "Calle del Mar 12", town: "Marbella", postcode: "29602",
    bedrooms: 5, bathrooms: 4, reception: 3, sqft: "3,800 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=900&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80"
    ],
    features: ["Private pool","Sea views","Gated community","Roof terrace","Double garage","EPC: A"],
    description: "A magnificent five-bedroom villa perched above Marbella's golden mile. Floor-to-ceiling windows frame panoramic sea views. Infinity pool, landscaped gardens, and a double garage complete this exceptional home.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-10", emoji: "🏖"
  },
  {
    id: 2, title: "Stylish Barcelona City Apartment", type: "to-let", category: "flat",
    price: "€480,000", address: "Carrer de Provença 88", town: "Barcelona", postcode: "08029",
    bedrooms: 3, bathrooms: 2, reception: 1, sqft: "1,400 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80"
    ],
    features: ["Modernista building","Rooftop pool","Concierge","Central location","Restored features","EPC: C"],
    description: "A stunning apartment in a beautifully restored Modernista building in the heart of the Eixample district. High ceilings, original mosaic tiles, and a modern kitchen.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-09", emoji: "🏢"
  },
  {
    id: 3, title: "Beachfront Penthouse", type: "to-let", category: "flat",
    price: "€4,500 pcm", address: "Paseo Marítimo 5, Ático", town: "Valencia", postcode: "46011",
    bedrooms: 3, bathrooms: 3, reception: 2, sqft: "2,100 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=80",
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=900&q=80"
    ],
    features: ["Beachfront","Private terrace","Jacuzzi","Gym access","Parking x2","Concierge"],
    description: "An extraordinary beachfront penthouse with breathtaking Mediterranean views from a vast private terrace. Fully furnished to the highest specification with direct beach access.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-08", emoji: "🌊"
  },
  {
    id: 4, title: "Traditional Finca with Olive Groves", type: "to-let", category: "house",
    price: "€695,000", address: "Carretera de Ronda Km 4", town: "Ronda", postcode: "29400",
    bedrooms: 4, bathrooms: 3, reception: 2, sqft: "2,600 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=900&q=80"
    ],
    features: ["5-hectare plot","Olive groves","Heated pool","Mountain views","Stables","Restored"],
    description: "A beautifully restored 18th-century Andalusian finca set within 5 hectares of olive groves with spectacular mountain views. Original stone features, heated pool, and separate guest cottage.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-07", emoji: "🫒"
  },
  {
    id: 5, title: "Modern Madrid Centro Flat", type: "to-let", category: "flat",
    price: "€2,200 pcm", address: "Calle Gran Vía 45, 3º", town: "Madrid", postcode: "28013",
    bedrooms: 2, bathrooms: 2, reception: 1, sqft: "950 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80"
    ],
    features: ["Gran Vía location","Recently renovated","Air conditioning","Lift","Near metro","Furnished"],
    description: "A sleek, fully renovated apartment right on the iconic Gran Vía. Open-plan living, two double bedrooms, and a private balcony. Walking distance to Retiro Park.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-06", emoji: "🏙"
  },
  {
    id: 6, title: "Costa Brava Seafront Townhouse", type: "to-let", category: "house",
    price: "€875,000", address: "Carrer de la Mar 3", town: "Begur", postcode: "17255",
    bedrooms: 4, bathrooms: 3, reception: 2, sqft: "2,200 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80"
    ],
    features: ["Seafront location","Private mooring","Sun terrace","Recently renovated","Character features","EPC: B"],
    description: "A rare seafront townhouse in the charming Costa Brava village of Begur. Four bedrooms, a sun terrace with direct sea views, and the option of a private mooring.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-05", emoji: "⛵"
  },
  {
    id: 7, title: "New Build Golf Resort Apartment", type: "to-let", category: "flat",
    price: "€320,000", address: "La Cala Golf Resort, Bloque 4", town: "Mijas", postcode: "29649",
    bedrooms: 2, bathrooms: 2, reception: 1, sqft: "1,050 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&q=80"
    ],
    features: ["Golf resort","Community pool","Gym & spa","Underground parking","Holiday let potential","EPC: A"],
    description: "Brand new two-bedroom apartment within the prestigious La Cala Golf Resort. Contemporary finishes, private terrace overlooking the fairway, and access to resort amenities.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-04-04", emoji: "⛳"
  },
  {
    id: 8, title: "Seville Historic Quarter Apartment", type: "let-agreed", category: "flat",
    price: "€390,000", address: "Calle Sierpes 18, 2º", town: "Seville", postcode: "41004",
    bedrooms: 3, bathrooms: 2, reception: 1, sqft: "1,200 sq ft",
    photos: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=900&q=80",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=900&q=80"
    ],
    features: ["Santa Cruz barrio","Exposed brick","Private patio","Period features","Tourist licence","Recently sold"],
    description: "A characterful apartment in Seville's famous Santa Cruz quarter. Exposed brick walls, a traditional Andalusian patio. This property is now sold — contact us for similar opportunities.",
    agent: "Patricia Morales", email: "hello@patriciarealestate.com", added: "2026-03-20", emoji: "🌹"
  }
];

/**
 * Patricia Real Estate – Ecuador Projects
 * Managed via Admin Portal
 */
var _ecData = [
  { id:1, slug:"quintas-rancho-spondylus", photos:["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80","https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80","https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=900&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80"], type:"Quintas Campestres", name:"Quintas Rancho Spondylus", location:"Sur de Manta, Manabí", desc:"Quintas con amplia vegetación, acceso pavimentado y seguridad las 24h. Ideal para residencia o inversión vacacional.", price:"Desde $12,000", emoji:"🌿" },
  { id:2, slug:"ciudad-mangle", photos:["https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=900&q=80","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80"], type:"Urbanización", name:"Ciudad Mangle", location:"Sur de Manta, Manabí", desc:"Urbanización planificada con calles pavimentadas, áreas verdes y lotes residenciales con alta plusvalía costera.", price:"Desde $8,500", emoji:"🏙" },
  { id:3, slug:"vista-al-mar", photos:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80","https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=80","https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&q=80","https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80"], type:"Urbanización", name:"Vista al Mar", location:"Sur de Manta, Manabí", desc:"Privilegiada ubicación con vista al océano Pacífico. Lotes amplios con servicios básicos y escrituras al día.", price:"Desde $15,000", emoji:"🌊" },
  { id:4, slug:"olinas-del-mar", photos:["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80","https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=900&q=80","https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900&q=80","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80"], type:"Urbanización", name:"Olinas del Mar", location:"Sur de Manta, Manabí", desc:"Proyecto residencial frente al mar. Urbanización consolidada con infraestructura completa y acceso directo a la playa.", price:"Desde $18,000", emoji:"🏖" },
  { id:5, slug:"lotizacion-san-jose-beach", photos:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80","https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80","https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&q=80","https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=80","https://images.unsplash.com/photo-1540202403-b7abd6747a18?w=900&q=80","https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900&q=80","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80"], type:"Lotización", name:"Lotización San José Beach", location:"Sur de Manta, Manabí", desc:"Lotes de playa con escrituras individuales, ideal para construir o especular. Zona de alto crecimiento turístico.", price:"Desde $9,800", emoji:"🌴" }
];

/* == CONFIG ======================================================= */
// Replace this hash with your own before launching the admin portal.
/* == AUTH == */
// To change: generate a new SHA-256 hash at https://emn178.github.io/online-tools/sha256.html
const ADMIN_HASH      = '1089811edb129a65fff6c7016af842d3dc0128892cc3ac000be6ab19a090f91d';
const MAX_ATTEMPTS    = 3;
const LOCKOUT_MS      = 15 * 60 * 1000;
const SESSION_KEY     = 'patricia_admin_auth';
const ATTEMPTS_KEY    = 'patricia_admin_attempts';
const LOCKOUT_KEY     = 'patricia_admin_lockout';
const GITHUB_TOKEN_KEY = 'ghToken';

function getGitHubToken() {
  var token = sessionStorage.getItem(GITHUB_TOKEN_KEY);
  if (token) return token;

  // Migrate legacy tokens out of persistent storage.
  token = localStorage.getItem(GITHUB_TOKEN_KEY);
  if (token) {
    sessionStorage.setItem(GITHUB_TOKEN_KEY, token);
    localStorage.removeItem(GITHUB_TOKEN_KEY);
    return token;
  }

  return '';
}

function setGitHubToken(token) {
  if (token) sessionStorage.setItem(GITHUB_TOKEN_KEY, token);
  else sessionStorage.removeItem(GITHUB_TOKEN_KEY);
  localStorage.removeItem(GITHUB_TOKEN_KEY);
}

// Auto-unlock if already authenticated this session
document.getElementById('unlockBtn').addEventListener('click', attemptUnlock);
document.getElementById('pwInput').addEventListener('keydown', function(e) { if(e.key === 'Enter') attemptUnlock(); });
document.getElementById('togglePw').addEventListener('click', function() {
  var i = document.getElementById('pwInput');
  i.type = i.type === 'password' ? 'text' : 'password';
  this.innerHTML = i.type === 'password' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
});
document.getElementById('pwInput').addEventListener('input', function() {
  document.getElementById('lockErr').textContent = '';
  this.classList.remove('err');
});

async function sha256(msg) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function isLockedOut() {
  return parseInt(localStorage.getItem(LOCKOUT_KEY) || '0') > Date.now();
}

function updateAttemptsDisplay() {
  var used = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0');
  var remaining = MAX_ATTEMPTS - used;
  var el = document.getElementById('lockAttempts');
  el.textContent = remaining < MAX_ATTEMPTS ? remaining + ' attempt' + (remaining !== 1 ? 's' : '') + ' remaining before lockout.' : '';
}

async function attemptUnlock() {
  var errEl = document.getElementById('lockAttempts');
  if (isLockedOut()) {
    var mins = Math.ceil((parseInt(localStorage.getItem(LOCKOUT_KEY)) - Date.now()) / 60000);
    document.getElementById('lockErr').textContent = 'Locked out. Try again in ' + mins + ' minute' + (mins !== 1 ? 's' : '') + '.';
    return;
  }
  var pw = document.getElementById('pwInput').value;
  if (!pw) { document.getElementById('lockErr').textContent = 'Please enter a password.'; return; }

  var btn = document.getElementById('unlockBtn');
  btn.disabled = true; btn.textContent = 'Checking...';

  var hash = await sha256(pw);

  if (hash === ADMIN_HASH) {
    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(LOCKOUT_KEY);
    // Store session for 4 hours
    sessionStorage.setItem(SESSION_KEY, Date.now().toString());
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('adminApp').style.display = 'flex';
    await initAdmin();
  } else {
    var attempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0') + 1;
    localStorage.setItem(ATTEMPTS_KEY, attempts);
    document.getElementById('pwInput').value = '';
    document.getElementById('pwInput').classList.add('err');
    var remaining = MAX_ATTEMPTS - attempts;
    if (remaining <= 0) {
      localStorage.setItem(LOCKOUT_KEY, (Date.now() + LOCKOUT_MS).toString());
      document.getElementById('lockErr').textContent = 'Too many attempts. Locked for 15 minutes.';
      document.getElementById('pwInput').disabled = true;
      btn.disabled = true;
    } else {
      document.getElementById('lockErr').textContent = 'Incorrect password.';
      document.getElementById('lockAttempts').textContent = remaining + ' attempt' + (remaining !== 1 ? 's' : '') + ' remaining.';
    }
  }
  btn.disabled = false; btn.textContent = 'Unlock →';
}

document.getElementById('lockAgainBtn').addEventListener('click', function() {
  sessionStorage.removeItem(SESSION_KEY);
  document.getElementById('adminApp').style.display = 'none';
  document.getElementById('lockScreen').style.display = 'flex';
  document.getElementById('pwInput').value = '';
  document.getElementById('lockErr').textContent = '';
  document.getElementById('lockAttempts').textContent = '';
  updateAttemptsDisplay();
});

/* == NAVIGATION =================================================== */
const sections = ['dashboard','uk','spain','ecuador','add-ecuador','add','github'];

document.querySelectorAll('.nav-link[data-section]').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

function showSection(id) {
  sections.forEach(s => {
    document.getElementById('section-'+s).classList.toggle('section-hidden', s !== id);
  });
  document.querySelectorAll('.nav-link[data-section]').forEach(b => {
    b.classList.toggle('active', b.dataset.section === id);
  });
  const titles = {dashboard:'Dashboard', uk:'UK Listings', spain:'Spain Listings', ecuador:'Ecuador Projects', 'add-ecuador':'Add Ecuador Project', add:'Add Property', github:'GitHub Setup'};
  document.getElementById('pageTitle').textContent = titles[id] || id;
  document.getElementById('topSaveBtn').style.display = id === 'add' ? 'flex' : 'none';
}

function bindButton(id, handler) {
  var button = document.getElementById(id);
  if (!button || button.dataset.bound === 'true') return;
  button.addEventListener('click', handler);
  button.dataset.bound = 'true';
}

function openAddSection(market) {
  showSection('add');
  var marketSelect = document.getElementById('propMarket');
  if (marketSelect && market) {
    marketSelect.value = market;
  }
}

function bindListingActionDelegates() {
  ['ukTableBody', 'esTableBody', 'ecTableBody'].forEach(function(id) {
    var tbody = document.getElementById(id);
    if (!tbody || tbody.dataset.actionsBound === 'true') return;
    tbody.addEventListener('click', handleListingActionClick);
    tbody.dataset.actionsBound = 'true';
  });
}

function handleListingActionClick(event) {
  var button = event.target.closest('button[data-action]');
  if (!button) return;

  var action = button.dataset.action;
  var idx = parseInt(button.dataset.idx, 10);
  var market = button.dataset.market;

  if (action === 'edit-listing') {
    editListing(market, idx);
    return;
  }
  if (action === 'delete-listing') {
    deleteListing(market, idx);
    return;
  }
  if (action === 'toggle-listing') {
    hideListing(market, idx);
    return;
  }
  if (action === 'edit-ecuador') {
    editEcListing(idx);
    return;
  }
  if (action === 'delete-ecuador') {
    deleteEcListing(idx);
    return;
  }
  if (action === 'toggle-ecuador') {
    hideEcListing(idx);
  }
}

function handleAdminImageError(event) {
  if (event.target && event.target.matches && event.target.matches('.prop-thumb[data-hide-on-error]')) {
    event.target.style.display = 'none';
  }
}

function bindAdminEventHandlers() {
  if (document.body.dataset.adminHandlersBound === 'true') return;

  bindButton('topSaveBtn', saveToGitHub);
  bindButton('refreshLiveBtn', refreshLiveWebsiteData);
  bindButton('quickAddPropertyBtn', function() { showSection('add'); });
  bindButton('quickUkBtn', function() { showSection('uk'); });
  bindButton('quickSpainBtn', function() { showSection('spain'); });
  bindButton('quickEcuadorBtn', function() { showSection('ecuador'); });
  bindButton('quickGithubBtn', function() { showSection('github'); });
  bindButton('addUkListingBtn', function() { openAddSection('uk'); });
  bindButton('addSpainListingBtn', function() { openAddSection('spain'); });
  bindButton('savePropertyBtn', addProperty);
  bindButton('clearPropertyBtn', clearForm);
  bindButton('bulkHideBtn_uk', function() { bulkHide('uk'); });
  bindButton('bulkDeleteBtn_uk', function() { bulkDelete('uk'); });
  bindButton('bulkHideBtn_spain', function() { bulkHide('spain'); });
  bindButton('bulkDeleteBtn_spain', function() { bulkDelete('spain'); });
  bindButton('addEcuadorProjectBtn', function() { showSection('add-ecuador'); });
  bindButton('saveEcProjectBtn', saveEcProject);
  bindButton('clearEcFormBtn', clearEcForm);
  bindButton('bulkHideBtn_ecuador', function() { bulkHide('ecuador'); });
  bindButton('bulkDeleteBtn_ecuador', function() { bulkDelete('ecuador'); });
  bindButton('toggleTokenBtn', toggleToken);
  bindButton('connectBtn', connectGitHub);
  bindButton('disconnectBtn', disconnectGitHub);

  bindListingActionDelegates();
  document.addEventListener('error', handleAdminImageError, true);
  document.body.dataset.adminHandlersBound = 'true';
}

/* == DATA ========================================================= */
// uk/data.js defines propertyListings — we rename to avoid conflict
let ukListings   = [];
let esListings   = [];
let ecListings   = [];
const LIVE_SITE_ORIGIN = 'https://patriciaestateagent.com';

function getLiveSiteOrigin() {
  return location.protocol === 'https:' && /(^|\.)patriciaestateagent\.com$/i.test(location.hostname)
    ? location.origin
    : LIVE_SITE_ORIGIN;
}

function setLiveRefreshMessage(message, tone) {
  var el = document.getElementById('liveRefreshMsg');
  if (!el) return;
  el.textContent = message || '';
  el.style.color = tone === 'success'
    ? 'var(--green)'
    : tone === 'warn'
      ? 'var(--gold)'
      : tone === 'error'
        ? 'var(--red)'
        : 'var(--text2)';
}

function setLiveRefreshPending(isPending) {
  var btn = document.getElementById('refreshLiveBtn');
  if (!btn) return;
  btn.disabled = !!isPending;
  btn.innerHTML = isPending ? '<span class="upload-spin"></span> Refreshing live data…' : '↻ Refresh live data';
}

function formatRefreshTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function loadLiveDataScript(path, globalName) {
  return new Promise(function(resolve, reject) {
    var iframe = document.createElement('iframe');
    var timeoutId = null;
    iframe.style.display = 'none';
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);

    function cleanup() {
      clearTimeout(timeoutId);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    }

    try {
      var doc = iframe.contentWindow.document;
      doc.open();
      doc.write('<!DOCTYPE html><html><head></head><body></body></html>');
      doc.close();

      var script = doc.createElement('script');
      script.src = getLiveSiteOrigin() + '/' + path + '?t=' + Date.now();
      script.onload = function() {
        try {
          var payload = iframe.contentWindow[globalName];
          if (!Array.isArray(payload)) throw new Error('Unexpected live data format in ' + path);
          cleanup();
          resolve(JSON.parse(JSON.stringify(payload)));
        } catch (e) {
          cleanup();
          reject(e);
        }
      };
      script.onerror = function() {
        cleanup();
        reject(new Error('Unable to load ' + path + ' from the live website'));
      };
      doc.body.appendChild(script);

      timeoutId = setTimeout(function() {
        cleanup();
        reject(new Error('Timed out while loading ' + path + ' from the live website'));
      }, 15000);
    } catch (e) {
      cleanup();
      reject(e);
    }
  });
}

async function refreshLiveWebsiteData() {
  if (refreshLiveWebsiteData.pending) return;
  refreshLiveWebsiteData.pending = true;
  setLiveRefreshPending(true);
  setLiveRefreshMessage('Refreshing published data from ' + getLiveSiteOrigin().replace(/^https?:\/\//, '') + '…');

  try {
    var results = await Promise.allSettled([
      loadLiveDataScript('uk/data.js', 'propertyListings'),
      loadLiveDataScript('spain/data.js', 'propertyListings'),
      loadLiveDataScript('ecuador/data.js', 'ecuadorProjects')
    ]);

    var synced = [];
    var failed = [];

    if (results[0].status === 'fulfilled') { ukListings = results[0].value; synced.push('UK'); }
    else failed.push('UK');

    if (results[1].status === 'fulfilled') { esListings = results[1].value; synced.push('Spain'); }
    else failed.push('Spain');

    if (results[2].status === 'fulfilled') { ecListings = results[2].value; synced.push('Ecuador'); }
    else failed.push('Ecuador');

    if (!synced.length) throw new Error('Unable to load any published data from the live website right now.');

    renderTables();
    updateMetrics();

    var refreshedAt = formatRefreshTime(new Date());
    if (failed.length) {
      setLiveRefreshMessage('Partially refreshed at ' + refreshedAt + '. Missing: ' + failed.join(', ') + '.', 'warn');
      showToast('Live refresh completed with warnings: ' + failed.join(', '));
    } else {
      setLiveRefreshMessage('Live website data refreshed at ' + refreshedAt + '.', 'success');
      showToast('Dashboard refreshed from live website ✓', 'success');
    }
  } catch (e) {
    setLiveRefreshMessage(e.message, 'error');
    showToast('Live refresh failed — ' + e.message, 'error');
  } finally {
    refreshLiveWebsiteData.pending = false;
    setLiveRefreshPending(false);
  }
}
refreshLiveWebsiteData.pending = false;

async function initAdmin() {
  try { ukListings = JSON.parse(JSON.stringify(_ukData)); } catch(e) { ukListings = []; }
  try { esListings = JSON.parse(JSON.stringify(_esData)); } catch(e) { esListings = []; }
  try { ecListings = JSON.parse(JSON.stringify(_ecData)); } catch(e) { ecListings = []; }
  renderTables();
  loadGitHubSettings();
  updateMetrics();
  // Fetch latest data from GitHub if connected
  var user = localStorage.getItem('ghUser'), repo = localStorage.getItem('ghRepo'),
      branch = localStorage.getItem('ghBranch') || 'main', token = getGitHubToken();
  if (user && repo && token) {
    // Show syncing indicator
    var syncIndicator = document.createElement('div');
    syncIndicator.id = 'syncIndicator';
    syncIndicator.style.cssText = 'position:fixed;top:16px;right:16px;background:var(--navy);color:#fff;padding:10px 16px;border-radius:8px;font-size:.82rem;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2);border:1px solid rgba(200,167,90,.3);';
    syncIndicator.innerHTML = '<span class="upload-spin"></span> Syncing with GitHub…';
    document.body.appendChild(syncIndicator);
    try {
      await fetchLatestDataFromGitHub(user, repo, branch, token);
      syncIndicator.innerHTML = '<span style="color:#27AE60">&#10003;</span> Synced';
      setTimeout(function() { if (syncIndicator.parentNode) syncIndicator.parentNode.removeChild(syncIndicator); }, 1500);
    } catch(e) {
      if (syncIndicator.parentNode) syncIndicator.parentNode.removeChild(syncIndicator);
    }
  }
}

async function fetchLatestDataFromGitHub(user, repo, branch, token) {
  var headers = { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json' };
  async function fetchData(path) {
    try {
      var res = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path + '?ref=' + branch, { headers: headers });
      if (!res.ok) return null;
      var d = await res.json();
      var code = decodeURIComponent(escape(atob(d.content.replace(/\n/g, ''))));
      // Match both populated arrays [{...}] and empty arrays []
      var match = code.match(/=\s*(\[[\s\S]*?\]);/);
      if (!match) return null;
      try { return JSON.parse(match[1]); } catch(e) { return null; }
    } catch(e) { return null; }
  }
  var results = await Promise.all([
    fetchData('uk/data.js'),
    fetchData('spain/data.js'),
    fetchData('ecuador/data.js')
  ]);
  // Update even if array is empty (results[x] could be [])
  if (results[0] !== null) ukListings = results[0];
  if (results[1] !== null) esListings = results[1];
  if (results[2] !== null) ecListings = results[2];
  renderTables();
  updateMetrics();
}

function updateMetrics() {
  document.getElementById('metricUK').textContent = ukListings.length;
  document.getElementById('metricES').textContent = esListings.length;
  document.getElementById('metricEC').textContent = ecListings.length;
  const ghUser = localStorage.getItem('ghUser');
  const ghToken = getGitHubToken();
  if (ghUser && ghToken) {
    document.getElementById('metricGH').textContent = ghUser;
    document.getElementById('metricGH').style.color = 'var(--green)';
    document.getElementById('ghStatusDot').classList.add('connected');
    document.getElementById('ghStatusText').textContent = ghUser;
  }
}

function renderTables() {
  renderTable('ukTableBody', ukListings, 'uk');
  renderTable('esTableBody', esListings, 'spain');
  renderEcTable();
}

function renderEcTable() {
  const tbody = document.getElementById('ecTableBody');
  if (!ecListings.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text2)">No projects yet — add your first project</td></tr>';
    return;
  }
  tbody.innerHTML = ecListings.map((p, i) => `
    <tr style="${p.hidden ? 'opacity:0.45;' : ''}">
      <td><input type="checkbox" class="row-cb" data-market="ecuador" data-idx="${i}" /></td>
      <td>${p.photos && p.photos[0] ? `<img class="prop-thumb" data-hide-on-error="true" src="${escapeHtml(p.photos[0])}" />` : `<div class="prop-thumb-placeholder">&#127804;</div>`}</td>
      <td style="max-width:200px"><strong style="display:block;font-size:.82rem">${escapeHtml(p.name)}</strong>${p.hidden ? '<span style="font-size:.7rem;color:var(--gold);margin-left:6px;">Hidden</span>' : ''}</td>
      <td style="color:var(--text2)">${escapeHtml(p.location)}</td>
      <td><strong>${escapeHtml(p.price)}</strong></td>
      <td><span class="badge badge-let">${escapeHtml(p.type)}</span></td>
      <td><div class="actions-cell">
        <button class="btn btn-outline btn-sm" type="button" data-action="toggle-ecuador" data-idx="${i}" title="${p.hidden ? 'Unhide' : 'Hide'}">${p.hidden ? 'Unhide' : 'Hide'}</button>
        <button class="btn btn-outline btn-sm" type="button" data-action="edit-ecuador" data-idx="${i}">Edit</button>
        <button class="btn btn-danger btn-sm" type="button" data-action="delete-ecuador" data-idx="${i}">Delete</button>
      </div></td>
    </tr>
  `).join('');
  bindTableCheckboxes('ecTableBody', ecListings, 'ecuador');
}

function renderTable(tbodyId, listings, market) {
  const tbody = document.getElementById(tbodyId);
  if (!listings.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--text2)">No listings yet — add your first property</td></tr>';
    return;
  }
  tbody.innerHTML = listings.map((p, i) => `
    <tr style="${p.hidden ? 'opacity:0.45;' : ''}">
      <td><input type="checkbox" class="row-cb" data-market="${market}" data-idx="${i}" /></td>
      <td>${p.photos && p.photos[0]
        ? `<img class="prop-thumb" data-hide-on-error="true" src="${escapeHtml(p.photos[0])}" />`
        : `<div class="prop-thumb-placeholder">🏠</div>`}</td>
      <td style="max-width:200px"><strong style="display:block;font-size:.82rem">${escapeHtml(p.title)}</strong>${p.hidden ? '<span style="font-size:.7rem;color:var(--gold);margin-left:6px;">Hidden</span>' : ''}</td>
      <td style="color:var(--text2)">${escapeHtml(p.town)}, ${escapeHtml(p.postcode)}</td>
      <td><strong>${escapeHtml(p.price)}</strong></td>
      <td><span class="badge ${p.type==='let-agreed'?'badge-agreed':'badge-let'}">${p.type==='let-agreed'?'Let Agreed':'To Let'}</span></td>
      <td><div class="actions-cell">
        <button class="btn btn-outline btn-sm" type="button" data-action="toggle-listing" data-market="${market}" data-idx="${i}" title="${p.hidden ? 'Unhide' : 'Hide'}">${p.hidden ? 'Unhide' : 'Hide'}</button>
        <button class="btn btn-outline btn-sm" type="button" data-action="edit-listing" data-market="${market}" data-idx="${i}">Edit</button>
        <button class="btn btn-danger btn-sm" type="button" data-action="delete-listing" data-market="${market}" data-idx="${i}">Delete</button>
      </div></td>
    </tr>
  `).join('');
  bindTableCheckboxes(tbodyId, listings, market);
}

function editListing(market, idx) {
  const p = market === 'uk' ? ukListings[idx] : esListings[idx];
  document.getElementById('propMarket').value = market;
  document.getElementById('propType').value = p.type || 'to-let';
  document.getElementById('propTitle').value = p.title || '';
  document.getElementById('propPrice').value = p.price || '';
  document.getElementById('propCategory').value = p.category || 'house';
  document.getElementById('propAddress').value = p.address || '';
  document.getElementById('propTown').value = p.town || '';
  document.getElementById('propPostcode').value = p.postcode || '';
  document.getElementById('propBeds').value = p.bedrooms || '3';
  document.getElementById('propBaths').value = p.bathrooms || '1';
  document.getElementById('propReception').value = p.reception || '1';
  document.getElementById('propSqft').value = p.sqft || '';
  document.getElementById('propFeatures').value = (p.features || []).join(', ');
  document.getElementById('propPhotos').value = (p.photos || []).join('\n');
  if (window.populatePhotoThumbs) populatePhotoThumbs(p.photos || []);
  document.getElementById('propDesc').value = p.description || '';
  document.getElementById('propAgent').value = p.agent || 'Patricia Reynolds';
  document.getElementById('propEmail').value = p.email || 'hello@patriciarealestate.com';
  // Store editing index
  document.getElementById('savePropertyBtn').dataset.editMarket = market;
  document.getElementById('savePropertyBtn').dataset.editIdx = idx;
  showSection('add');
  document.getElementById('saveMsg').textContent = 'Editing existing listing — save to update';
}

async function deleteListing(market, idx) {
  if (!confirm('Delete this listing? This cannot be undone.')) return;
  var previousListings = market === 'uk' ? ukListings.slice() : esListings.slice();
  var deleted = market === 'uk' ? ukListings.splice(idx, 1)[0] : esListings.splice(idx, 1)[0];
  renderTables();
  updateMetrics();
  var result = await pushToGitHub(market);
  if (!result) {
    if (market === 'uk') ukListings = previousListings;
    else esListings = previousListings;
    renderTables();
    updateMetrics();
    return;
  }
  if (deleted && deleted.photos && deleted.photos.length > 0) {
    deleteProjectPhotos(deleted.photos);
  }
}

/* == ADD / EDIT PROPERTY ========================================== */
async function addProperty() {
  const market  = document.getElementById('propMarket').value;
  const title   = document.getElementById('propTitle').value.trim();
  const price   = document.getElementById('propPrice').value.trim();
  const address = document.getElementById('propAddress').value.trim();
  const town    = document.getElementById('propTown').value.trim();
  const post    = document.getElementById('propPostcode').value.trim();
  const beds    = document.getElementById('propBeds').value;

  if (!title || !price || !address || !town || !post || beds === '') {
    showToast('Please fill in all required fields', 'error');
    return;
  }

  const photos = document.getElementById('propPhotos').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const features = document.getElementById('propFeatures').value.split(',').map(s=>s.trim()).filter(Boolean);

  const listing = {
    id: Date.now(),
    title,
    type: document.getElementById('propType').value,
    category: document.getElementById('propCategory').value,
    price,
    address,
    town,
    postcode: post,
    bedrooms: parseInt(beds),
    bathrooms: parseInt(document.getElementById('propBaths').value),
    reception: parseInt(document.getElementById('propReception').value),
    sqft: document.getElementById('propSqft').value.trim(),
    photos,
    features,
    description: document.getElementById('propDesc').value.trim(),
    agent: document.getElementById('propAgent').value.trim(),
    email: document.getElementById('propEmail').value.trim(),
    added: new Date().toISOString().split('T')[0]
  };

  const btn = document.getElementById('savePropertyBtn');
  const editIdx = btn.dataset.editIdx;
  const currentList = market === 'uk' ? ukListings : esListings;
  const previousListings = currentList.slice();
  const existingListing = editIdx !== undefined ? currentList[parseInt(editIdx)] : null;
  const originalButtonHtml = btn.innerHTML;

  listing.id = existingListing && existingListing.id ? existingListing.id : listing.id;
  listing.added = existingListing && existingListing.added ? existingListing.added : listing.added;
  if (existingListing && typeof existingListing.hidden !== 'undefined') {
    listing.hidden = existingListing.hidden;
  }

  if (editIdx !== undefined) {
    if (market === 'uk') ukListings[parseInt(editIdx)] = listing;
    else esListings[parseInt(editIdx)] = listing;
  } else {
    if (market === 'uk') ukListings.push(listing);
    else esListings.push(listing);
  }

  renderTables();
  updateMetrics();
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Saving…';
  document.getElementById('saveMsg').textContent = 'Saving to GitHub…';

  try {
    const result = await pushToGitHub(market);
    if (!result) {
      throw new Error('GitHub save failed. Your changes were not published.');
    }
    clearForm();
  } catch (error) {
    if (market === 'uk') ukListings = previousListings;
    else esListings = previousListings;
    renderTables();
    updateMetrics();
    document.getElementById('saveMsg').textContent = error.message;
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalButtonHtml;
  }
}

function clearForm() {
  document.getElementById('photoThumbs').innerHTML = '';
  document.getElementById('photoStatus').textContent = '';
  ['propTitle','propPrice','propAddress','propTown','propPostcode','propSqft','propFeatures','propPhotos','propDesc'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('propAgent').value = 'Patricia Reynolds';
  document.getElementById('propEmail').value = 'hello@patriciarealestate.com';
  document.getElementById('saveMsg').textContent = '';
  const btn = document.getElementById('savePropertyBtn');
  delete btn.dataset.editIdx;
  delete btn.dataset.editMarket;
}

/* == GITHUB API =================================================== */
function loadGitHubSettings() {
  const user  = localStorage.getItem('ghUser')  || '';
  const repo  = localStorage.getItem('ghRepo')  || '';
  const branch= localStorage.getItem('ghBranch')|| 'main';
  const token = getGitHubToken();
  document.getElementById('ghUser').value   = user;
  document.getElementById('ghRepo').value   = repo;
  document.getElementById('ghBranch').value = branch;
  document.getElementById('ghToken').value  = token;
  if (user && token) {
    document.getElementById('ghConnectedBanner').classList.remove('section-hidden');
    document.getElementById('disconnectBtn').style.display = 'inline-flex';
    document.getElementById('ghStatusDot').classList.add('connected');
    document.getElementById('ghStatusText').textContent = user;
  }
}

async function connectGitHub() {
  const user   = document.getElementById('ghUser').value.trim();
  const repo   = document.getElementById('ghRepo').value.trim();
  const branch = document.getElementById('ghBranch').value.trim() || 'main';
  const token  = document.getElementById('ghToken').value.trim();
  const msg    = document.getElementById('ghMsg');

  if (!user || !repo || !token) { msg.textContent = 'Please fill in all fields.'; return; }

  const btn = document.getElementById('connectBtn');
  btn.innerHTML = '<span class="spinner"></span> Testing…';
  btn.disabled = true;
  msg.textContent = '';

  try {
    const res = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
      headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
    });
    if (!res.ok) throw new Error(`GitHub returned ${res.status} — check your username, repo name and token.`);
    const data = await res.json();
    localStorage.setItem('ghUser',   user);
    localStorage.setItem('ghRepo',   repo);
    localStorage.setItem('ghBranch', branch);
    setGitHubToken(token);
    document.getElementById('ghConnectedBanner').classList.remove('section-hidden');
    document.getElementById('disconnectBtn').style.display = 'inline-flex';
    document.getElementById('ghStatusDot').classList.add('connected');
    document.getElementById('ghStatusText').textContent = user;
    document.getElementById('metricGH').textContent = user;
    document.getElementById('metricGH').style.color = 'var(--green)';
    showToast(`Connected to ${data.full_name}`, 'success');
  } catch(e) {
    msg.textContent = e.message;
    showToast('Connection failed — ' + e.message, 'error');
  }
  btn.innerHTML = 'Connect & Test';
  btn.disabled = false;
}

function disconnectGitHub() {
  if (!confirm('Disconnect from GitHub? You can reconnect at any time.')) return;
  ['ghUser','ghRepo','ghBranch'].forEach(k => localStorage.removeItem(k));
  setGitHubToken('');
  document.getElementById('ghConnectedBanner').classList.add('section-hidden');
  document.getElementById('disconnectBtn').style.display = 'none';
  document.getElementById('ghStatusDot').classList.remove('connected');
  document.getElementById('ghStatusText').textContent = 'Not connected';
  document.getElementById('metricGH').textContent = 'Not set up';
  document.getElementById('metricGH').style.color = '';
  showToast('Disconnected from GitHub');
}

function toggleToken() {
  const t = document.getElementById('ghToken');
  t.type = t.type === 'password' ? 'text' : 'password';
}

async function pushToGitHub(market) {
  const user   = localStorage.getItem('ghUser');
  const repo   = localStorage.getItem('ghRepo');
  const branch = localStorage.getItem('ghBranch') || 'main';
  const token  = getGitHubToken();

  if (!user || !repo || !token) {
    showToast('GitHub not connected — changes saved locally only', 'error');
    return null;
  }

  const listings = market === 'uk' ? ukListings : esListings;
  const path     = market === 'uk' ? 'uk/data.js' : 'spain/data.js';
  const comment  = market === 'uk'
    ? '/**\n * Patricia Real Estate – UK Property Listings\n * Managed via Admin Portal\n */\n'
    : '/**\n * Patricia Real Estate – Spain Property Listings\n * Managed via Admin Portal\n */\n';

  const content = comment + 'const propertyListings = ' + JSON.stringify(listings, null, 2) + ';\n';

  showToast('Saving to GitHub…');

  try {
    // Get current file SHA (required for update)
    const getRes = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}?ref=${branch}`, {
      headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' }
    });
    let sha = '';
    if (getRes.ok) { const d = await getRes.json(); sha = d.sha; }

    // Push updated file
    const putRes = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `Admin: update ${market} listings`,
        content: btoa(unescape(encodeURIComponent(content))),
        branch,
        ...(sha ? { sha } : {})
      })
    });

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(err.message || `GitHub error ${putRes.status}`);
    }
    showToast('Saved to GitHub ✓ — site will update in ~30 seconds', 'success');
    showSaveBanner({
      title: 'Changes published to GitHub',
      text: market === 'uk' ? 'The UK listings file was saved successfully.' : 'The Spain listings file was saved successfully.',
      branch: branch,
      paths: [path]
    });
    return { branch: branch, path: path };
  } catch(e) {
    showToast('GitHub error: ' + e.message, 'error');
    return null;
  }
}

function saveToGitHub() {
  addProperty();
}

/* == TOAST ======================================================== */
let toastTimer;

async function pushEcuadorToGitHub(options) {
  options = options || {};
  const user = localStorage.getItem('ghUser'), repo = localStorage.getItem('ghRepo'),
        branch = localStorage.getItem('ghBranch') || 'main', token = getGitHubToken();
  if (!user || !repo || !token) throw new Error('GitHub is not connected. Reconnect it in GitHub Setup first.');
  const content = '/**\n * Patricia Real Estate - Ecuador Projects\n */\nconst ecuadorProjects = ' + JSON.stringify(ecListings, null, 2) + ';\n';
  if (!options.quiet) showToast('Saving Ecuador to GitHub...');
  const getRes = await fetch('https://api.github.com/repos/'+user+'/'+repo+'/contents/ecuador/data.js?ref='+branch, { headers: { Authorization: 'token '+token, Accept: 'application/vnd.github.v3+json' } });
  if (!getRes.ok && getRes.status !== 404) {
    const err = await getRes.json().catch(function(){ return {}; });
    throw new Error(err.message || 'Unable to read ecuador/data.js from GitHub');
  }
  let sha = '';
  if (getRes.ok) {
    const d = await getRes.json();
    sha = d.sha;
  }
  const putRes = await fetch('https://api.github.com/repos/'+user+'/'+repo+'/contents/ecuador/data.js', {
    method: 'PUT', headers: { Authorization: 'token '+token, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Admin: update Ecuador projects', content: btoa(unescape(encodeURIComponent(content))), branch, ...(sha ? { sha } : {}) })
  });
  if (!putRes.ok) {
    const err = await putRes.json().catch(function(){ return {}; });
    throw new Error(err.message || ('GitHub error ' + putRes.status));
  }
  if (!options.quiet) showToast('Ecuador saved to GitHub ✓', 'success');
  if (options.showBanner !== false) {
    showSaveBanner({
      title: 'Changes published to GitHub',
      text: 'The Ecuador project data file was saved successfully.',
      branch: branch,
      paths: ['ecuador/data.js']
    });
  }
  return { branch: branch, path: 'ecuador/data.js' };
}

function hasGitHubConnection() {
  return !!(localStorage.getItem('ghUser') && localStorage.getItem('ghRepo') && getGitHubToken());
}

function setEcSaveMessage(message, tone) {
  var msg = document.getElementById('ecSaveMsg');
  if (!msg) return;
  msg.textContent = message || '';
  msg.style.color = tone === 'success'
    ? 'var(--green)'
    : tone === 'error'
      ? 'var(--red)'
      : 'var(--text2)';
}

function setEcSavePending(isPending) {
  var btn = document.getElementById('saveEcProjectBtn');
  if (!btn) return;
  btn.disabled = !!isPending;
  btn.innerHTML = isPending ? '<span class="spinner"></span> Saving…' : 'Save to GitHub →';
}

function sanitizeEcSlug(value) {
  return (value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function getEcEditIndex() {
  var editIdx = document.getElementById('section-add-ecuador').dataset.editIdx;
  if (editIdx === undefined || editIdx === '') return -1;
  var parsed = parseInt(editIdx, 10);
  return Number.isNaN(parsed) ? -1 : parsed;
}


function editEcListing(idx) {
  var p = ecListings[idx];
  document.getElementById('ecName').value      = p.name || '';
  document.getElementById('ecType').value      = p.type || 'Urbanizacion';
  document.getElementById('ecPrice').value     = p.price || '';
  document.getElementById('ecLoc').value       = p.location || '';
  document.getElementById('ecSlug').value      = p.slug || '';
  document.getElementById('ecDescShort').value = p.desc || '';
  document.getElementById('ecHlPrice').value   = p.hlPrice || p.price || '';
  document.getElementById('ecHlSep').value     = p.hlSep || '';
  document.getElementById('ecHlSize').value    = p.hlSize || '';
  document.getElementById('ecHlDist').value    = p.hlDist || '';
  document.getElementById('ecDesc1').value     = p.descFull1 || p.desc || '';
  document.getElementById('ecDesc2').value     = p.descFull2 || '';
  document.getElementById('ecBenefits').value  = p.benefits || '';
  document.getElementById('ecAm1T').value      = p.am1Title || '';
  document.getElementById('ecAm1I').value      = p.am1Items || '';
  document.getElementById('ecAm2T').value      = p.am2Title || '';
  document.getElementById('ecAm2I').value      = p.am2Items || '';
  document.getElementById('ecAm3T').value      = p.am3Title || '';
  document.getElementById('ecAm3I').value      = p.am3Items || '';
  document.getElementById('ecCivil').value     = p.civilWorks || '';
  document.getElementById('ecPhotos').value    = (p.photos || []).join('\n');
  if (window.populateEcPhotoThumbs) populateEcPhotoThumbs(p.photos || []);
  document.getElementById('section-add-ecuador').dataset.editIdx = idx;
  setEcSavePending(false);
  setEcSaveMessage('Editing existing project — save to update');
  showSection('add-ecuador');
}

async function deleteEcListing(idx) {
  if (!confirm('Delete this project? This cannot be undone.')) return;
  var previousListings = ecListings.slice();
  var deleted = ecListings.splice(idx, 1)[0];
  renderEcTable();
  updateMetrics();
  try {
    await pushEcuadorToGitHub({ quiet: true, showBanner: false });
  } catch (error) {
    ecListings = previousListings;
    renderEcTable();
    updateMetrics();
    showToast('GitHub error: ' + error.message, 'error');
    return;
  }
  if (deleted && deleted.slug) {
    deleteProjectPage(deleted.slug);
  }
  if (deleted && deleted.photos && deleted.photos.length > 0) {
    deleteProjectPhotos(deleted.photos);
  }
  showToast('Project deleted and published to GitHub ✓', 'success');
  showSaveBanner({
    title: 'Project removed from GitHub',
    text: deleted && deleted.name ? deleted.name + ' was removed successfully.' : 'The Ecuador project was removed successfully.',
    branch: localStorage.getItem('ghBranch') || 'main',
    paths: ['ecuador/data.js']
  });
}

async function deleteProjectPhotos(photos) {
  var user = localStorage.getItem('ghUser'), repo = localStorage.getItem('ghRepo'),
      branch = localStorage.getItem('ghBranch') || 'main', token = getGitHubToken();
  if (!user || !repo || !token) return;
  var deleted = 0;
  for (var i = 0; i < photos.length; i++) {
    var url = photos[i];
    // Only delete photos hosted on this GitHub repo
    if (url.indexOf('raw.githubusercontent.com/' + user + '/' + repo) === -1 &&
        url.indexOf('github.io') === -1) continue;
    // Extract path from URL
    var match = url.match(/\/images\/properties\/([^?#]+)/);
    if (!match) continue;
    var path = 'images/properties/' + match[1];
    try {
      var getRes = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path + '?ref=' + branch, {
        headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json' }
      });
      if (!getRes.ok) continue;
      var d = await getRes.json();
      await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path, {
        method: 'DELETE',
        headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Admin: delete photo ' + match[1], sha: d.sha, branch: branch })
      });
      deleted++;
    } catch(e) { /* skip if can't delete */ }
  }
  if (deleted > 0) showToast(deleted + ' photo' + (deleted > 1 ? 's' : '') + ' deleted from GitHub', 'success');
}

async function deleteProjectPage(slug) {
  var user = localStorage.getItem('ghUser'), repo = localStorage.getItem('ghRepo'),
      branch = localStorage.getItem('ghBranch') || 'main', token = getGitHubToken();
  if (!user || !repo || !token) return;
  var path = 'ecuador/projects/' + slug + '.html';
  try {
    var getRes = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path + '?ref=' + branch, {
      headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json' }
    });
    if (!getRes.ok) return; // file doesn't exist, nothing to delete
    var d = await getRes.json();
    var delRes = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path, {
      method: 'DELETE',
      headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Admin: delete project page ' + slug, sha: d.sha, branch: branch })
    });
    if (delRes.ok) {
      showToast('Project page deleted from GitHub', 'success');
    } else {
      var err = await delRes.json();
      showToast('Error deleting page: ' + err.message, 'error');
    }
  } catch(e) {
    showToast('Error: ' + e.message, 'error');
  }
}

async function saveEcProject() {
  if (saveEcProject.pending) return;
  var name  = document.getElementById('ecName').value.trim();
  var price = document.getElementById('ecPrice').value.trim();
  var loc   = document.getElementById('ecLoc').value.trim();
  var slug  = sanitizeEcSlug(document.getElementById('ecSlug').value);
  var editIdx = getEcEditIndex();
  document.getElementById('ecSlug').value = slug;

  if (!name || !price || !loc || !slug) {
    setEcSaveMessage('Project name, price, location and slug are required.', 'error');
    showToast('Please fill in all required fields', 'error');
    return;
  }
  var duplicateIdx = ecListings.findIndex(function(item, idx) {
    return item.slug === slug && idx !== editIdx;
  });
  if (duplicateIdx !== -1) {
    setEcSaveMessage('That slug is already in use by "' + ecListings[duplicateIdx].name + '". Choose a unique slug.', 'error');
    showToast('Slug already in use', 'error');
    return;
  }
  if (!hasGitHubConnection()) {
    setEcSaveMessage('Connect GitHub first so this project can publish to the live Ecuador page.', 'error');
    showToast('GitHub not connected', 'error');
    return;
  }

  var current = editIdx >= 0 ? ecListings[editIdx] : null;
  var project = {
    id: current && current.id ? current.id : Date.now(), slug: slug, name: name, price: price, location: loc,
    type:       document.getElementById('ecType').value,
    desc:       document.getElementById('ecDescShort').value.trim(),
    hlPrice:    document.getElementById('ecHlPrice').value.trim(),
    hlSep:      document.getElementById('ecHlSep').value.trim(),
    hlSize:     document.getElementById('ecHlSize').value.trim(),
    hlDist:     document.getElementById('ecHlDist').value.trim(),
    descFull1:  document.getElementById('ecDesc1').value.trim(),
    descFull2:  document.getElementById('ecDesc2').value.trim(),
    benefits:   document.getElementById('ecBenefits').value.trim(),
    am1Title:   document.getElementById('ecAm1T').value.trim(),
    am1Items:   document.getElementById('ecAm1I').value.trim(),
    am2Title:   document.getElementById('ecAm2T').value.trim(),
    am2Items:   document.getElementById('ecAm2I').value.trim(),
    am3Title:   document.getElementById('ecAm3T').value.trim(),
    am3Items:   document.getElementById('ecAm3I').value.trim(),
    civilWorks: document.getElementById('ecCivil').value.trim(),
    photos:     document.getElementById('ecPhotos').value.split('\n').map(function(s){return s.trim();}).filter(Boolean),
    emoji:      '🌴'
  };
  var previousListings = ecListings.slice();
  var nextListings = previousListings.slice();
  if (editIdx >= 0) nextListings[editIdx] = project;
  else nextListings.push(project);

  try {
    saveEcProject.pending = true;
    setEcSavePending(true);
    setEcSaveMessage(editIdx >= 0 ? 'Updating project in GitHub…' : 'Publishing project to GitHub…');
    ecListings = nextListings;
    renderEcTable();
    updateMetrics();
    var dataSave = await pushEcuadorToGitHub({ quiet: true, showBanner: false });
    var pageSave = await pushProjectPage(project, { quiet: true, showBanner: false });
    clearEcForm();
    renderEcTable();
    updateMetrics();
    showSection('ecuador');
    showToast(editIdx >= 0 ? 'Project updated and published to GitHub ✓' : 'Project added and published to GitHub ✓', 'success');
    showSaveBanner({
      title: editIdx >= 0 ? 'Project updated in GitHub' : 'Project published to GitHub',
      text: project.name + ' was saved successfully and the public Ecuador pages will refresh shortly.',
      branch: pageSave ? pageSave.branch : (dataSave ? dataSave.branch : ''),
      paths: [dataSave && dataSave.path, pageSave && pageSave.path].filter(Boolean)
    });
  } catch(e) {
    ecListings = previousListings;
    renderEcTable();
    updateMetrics();
    setEcSaveMessage(e.message, 'error');
    showToast('GitHub error: ' + e.message, 'error');
  } finally {
    saveEcProject.pending = false;
    setEcSavePending(false);
  }
}
saveEcProject.pending = false;

function clearEcForm() {
  ['ecName','ecPrice','ecLoc','ecSlug','ecDescShort','ecHlPrice','ecHlSep','ecHlSize','ecHlDist',
   'ecDesc1','ecDesc2','ecBenefits','ecAm1T','ecAm1I','ecAm2T','ecAm2I','ecAm3T','ecAm3I','ecCivil','ecPhotos']
    .forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  var thumbs = document.getElementById('ecPhotoThumbs');
  var status = document.getElementById('ecPhotoStatus');
  if (thumbs) thumbs.innerHTML = '';
  if (status) status.textContent = '';
  setEcSaveMessage('');
  delete document.getElementById('section-add-ecuador').dataset.editIdx;
}

async function pushProjectPage(p, options) {
  options = options || {};
  var user = localStorage.getItem('ghUser'), repo = localStorage.getItem('ghRepo'),
      branch = localStorage.getItem('ghBranch') || 'main', token = getGitHubToken();
  if (!user || !repo || !token) throw new Error('GitHub is not connected. Reconnect it in GitHub Setup first.');
  var html = buildProjectPage(p);
  var path = 'ecuador/projects/' + p.slug + '.html';
  var getRes = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path + '?ref=' + branch, { headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json' } });
  if (!getRes.ok && getRes.status !== 404) {
    var getErr = await getRes.json().catch(function(){ return {}; });
    throw new Error(getErr.message || ('Unable to read project page ' + p.slug + '.html'));
  }
  var sha = '';
  if (getRes.ok) {
    var d = await getRes.json();
    sha = d.sha;
  }
  var body = { message: 'Admin: create project page ' + p.slug, content: btoa(unescape(encodeURIComponent(html))), branch: branch };
  if (sha) body.sha = sha;
  var putRes = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path, {
    method: 'PUT', headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!putRes.ok) {
    var err = await putRes.json().catch(function(){ return {}; });
    throw new Error(err.message || ('GitHub error ' + putRes.status));
  }
  if (!options.quiet) showToast('Project page ' + p.slug + '.html saved to GitHub', 'success');
  if (options.showBanner !== false) {
    showSaveBanner({
      title: 'Changes published to GitHub',
      text: p.name + ' page was saved successfully.',
      branch: branch,
      paths: [path]
    });
  }
  return { branch: branch, path: path };
}

function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeProjectJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function buildProjectPage(p) {
  var amenCards = [
    { t: p.am1Title, i: p.am1Items },
    { t: p.am2Title, i: p.am2Items },
    { t: p.am3Title, i: p.am3Items }
  ].filter(function(card) { return card.t && card.t.trim(); });
  var amenHTML = amenCards.map(function(card) {
    var items = String(card.i || '').split(',').map(function(item) { return item.trim(); }).filter(Boolean);
    return '<div class="proj-amenity-card"><h3>' + escapeHtml(card.t) + '</h3><ul>' +
      items.map(function(item) { return '<li>' + escapeHtml(item) + '</li>'; }).join('') +
      '</ul></div>';
  }).join('');
  var civilList = String(p.civilWorks || '').split(',').map(function(item) { return item.trim(); }).filter(Boolean);
  var civilHTML = civilList.map(function(work) {
    var icon = '<div class="civil-icon"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></div>';
    return '<div class="proj-civil-item">' + icon + '<p>' + escapeHtml(work) + '</p></div>';
  }).join('');
  var benefits = String(p.benefits || '').split('\n').map(function(item) { return item.trim(); }).filter(Boolean).map(function(item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join('');
  var photos = (p.photos || []).map(function(photo) { return String(photo || '').trim(); }).filter(Boolean);
  var galleryHTML = photos.map(function(photo, index) {
    return '<div class="proj-gallery-item"><img src="' + escapeHtml(photo) + '" alt="Gallery image ' + (index + 1) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/></div>';
  }).join('');
  var parts = String(p.name || '').trim().split(/\s+/).filter(Boolean);
  var firstWord = escapeHtml(parts.shift() || p.name || 'Project');
  var remainingWords = escapeHtml(parts.join(' '));
  var descriptionText = String(p.descFull1 || p.desc || ('Discover ' + (p.name || 'this Ecuador project') + ' with Patricia Real Estate.')).trim();
  var descriptionMeta = escapeHtml(descriptionText.slice(0, 160));
  var contactHref = '../../uk/contact.html?from=ecuador&property=' + encodeURIComponent(p.name || '');
  var safeContactHref = escapeHtml(contactHref);
  var safeSlug = encodeURIComponent(String(p.slug || '').trim());
  var lines = [
    '<!DOCTYPE html><html lang="en"><head>',
    '<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>',
    '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; base-uri \'self\'; object-src \'none\'; img-src \'self\' https: data: blob:; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com data:; script-src \'self\'; connect-src \'self\' https://api.github.com; frame-src \'self\'; form-action \'self\' mailto:;"/>',
    '<meta name="referrer" content="strict-origin-when-cross-origin"/>',
    '<meta name="description" content="' + descriptionMeta + '"/>',
    '<link rel="canonical" href="https://patriciaestateagent.com/ecuador/projects/' + safeSlug + '.html"/>',
    '<title>' + escapeHtml(p.name) + ' | Patricia Real Estate Ecuador</title>',
    '<link rel="preconnect" href="https://fonts.googleapis.com"/>',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>',
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>',
    '<link rel="stylesheet" href="../../style.css"/>',
    '<style>',
    '.proj-hero{background:#1a2e1a;min-height:80vh;display:flex;align-items:center;position:relative;overflow:hidden}',
    '.proj-hero-inner{position:relative;z-index:1;max-width:700px}',
    '.proj-hero h1{font-family:var(--f-display);font-size:clamp(2rem,5vw,3.6rem);color:#fff;line-height:1.15;margin-bottom:1.2rem}',
    '.proj-hero h1 em{color:var(--c-gold);font-style:italic}',
    '.proj-hero .location{font-size:.9rem;color:rgba(255,255,255,.6);margin-bottom:1rem;display:flex;align-items:center;gap:6px}',
    '.proj-hero .tagline{font-size:1.1rem;color:rgba(255,255,255,.8);line-height:1.7;margin-bottom:2rem}',
    '.proj-highlights{background:rgba(47,58,74,.6);border:1px solid rgba(200,167,90,.2);border-radius:10px;padding:1.5rem 2rem;display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:2rem}',
    '.proj-hl-item{text-align:center}.proj-hl-val{font-family:var(--f-display);font-size:1.5rem;color:var(--c-gold);font-weight:700}',
    '.proj-hl-label{font-size:.75rem;color:rgba(250,247,240,.55);margin-top:4px}',
    '.proj-desc-section{background:var(--c-navy);padding:5rem 0}',
    '.proj-desc-inner{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}',
    '.proj-desc-inner h2{font-family:var(--f-display);font-size:1.8rem;color:#fff;margin-bottom:1rem}',
    '.proj-desc-inner h2 em{color:var(--c-gold);font-style:italic}',
    '.proj-desc-inner p{color:rgba(250,247,240,.7);line-height:1.8;margin-bottom:1rem}',
    '.proj-perks{list-style:none;padding:0;margin:1.5rem 0}',
    '.proj-perks li{display:flex;align-items:flex-start;gap:10px;font-size:.9rem;color:rgba(250,247,240,.8);margin-bottom:.8rem;line-height:1.5}',
    '.proj-perks li::before{content:"✓";color:var(--c-gold);font-weight:700;flex-shrink:0;margin-top:1px}',
    '.proj-amenities{background:#17222C;padding:5rem 0}',
    '.proj-amenities-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}',
    '.proj-amenity-card{text-align:center;background:var(--c-navy);border:1px solid rgba(200,167,90,.15);border-radius:10px;padding:2rem 1.5rem}',
    '.proj-amenity-card h3{font-family:var(--f-display);font-size:1.1rem;color:#fff;margin-bottom:1rem}',
    '.proj-amenity-card li{font-size:.875rem;color:rgba(250,247,240,.65);padding:.35rem 0;border-bottom:1px solid rgba(255,255,255,.05);list-style:none;text-align:left}',
    '.proj-civil{background:var(--c-navy);padding:4rem 0}',
    '.proj-civil-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2rem}',
    '.proj-civil-item{background:rgba(47,58,74,.45);border:1px solid rgba(200,167,90,.12);border-radius:8px;padding:1.2rem;text-align:center}',
    '.proj-civil-item .civil-icon{width:44px;height:44px;background:rgba(200,167,90,.1);border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto .75rem}',
    '.proj-civil-item .civil-icon span{width:22px;height:22px;display:block;color:#C8A75A}',
    '.proj-civil-item .civil-icon span svg{width:100%;height:100%}',
    '.proj-civil-item p{font-size:.82rem;color:rgba(250,247,240,.65);line-height:1.5}',
    '.proj-gallery{background:#17222C;padding:5rem 0}',
    '.proj-gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin-top:2.5rem}',
    '.proj-gallery-item{aspect-ratio:1/1;border-radius:8px;overflow:hidden;cursor:pointer;position:relative;border:2px solid rgba(200,167,90,.12)}',
    '.proj-gallery-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}',
    '.proj-cta{background:linear-gradient(135deg,#1a2730,#253040);padding:5rem 0;text-align:center}',
    '.proj-cta h2{font-family:var(--f-display);font-size:2.2rem;color:#fff;margin-bottom:1rem}',
    '.proj-cta h2 em{color:var(--c-gold);font-style:italic}',
    '.proj-cta p{color:rgba(250,247,240,.7);max-width:520px;margin:0 auto 2.5rem;line-height:1.7}',
    '.proj-cta-actions{display:flex;justify-content:center;gap:1rem;flex-wrap:wrap}',
    '@media(max-width:900px){.proj-highlights{grid-template-columns:1fr 1fr}.proj-desc-inner{grid-template-columns:1fr}.proj-amenities-grid{grid-template-columns:1fr 1fr}.proj-civil-grid{grid-template-columns:repeat(2,1fr)}.proj-gallery-grid{grid-template-columns:repeat(2,1fr)}}',
    '</style></head><body>',
    '<header class="site-header"><div class="container header-inner">',
    '<a href="../../index.html"><img src="../../images/logo.png" alt="Patricia Real Estate" class="site-logo"/></a>',
    '<nav class="main-nav" id="mainNav">',
    '<a href="../index.html" class="nav-link" style="color:rgba(255,255,255,.5);font-size:.8rem;">&#8592; Ecuador</a>',
    '<a href="../index.html#proyectos" class="nav-link">Projects</a>',
    '<a href="../../about.html?from=ecuador" class="nav-link">Who We Are</a>',
    '<a href="' + safeContactHref + '" class="btn btn-primary btn-sm nav-cta">Enquire Now</a>',
    '</nav><button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>',
    '</div></header>',
    '<section class="proj-hero"><div class="container proj-hero-inner">',
    '<p style="font-size:.78rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--c-gold);margin-bottom:1rem;">' + escapeHtml(p.type) + '</p>',
    '<h1>' + firstWord + (remainingWords ? ' <em>' + remainingWords + '</em>' : '') + '</h1>',
    '<p class="location">&#128205; ' + escapeHtml(p.location) + '</p>',
    '<p class="tagline">' + escapeHtml(p.desc || '') + '</p>',
    '<div class="proj-highlights">',
    '<div class="proj-hl-item"><div class="proj-hl-val">' + escapeHtml(p.hlPrice || p.price || 'TBC') + '</div><div class="proj-hl-label">Price from</div></div>',
    '<div class="proj-hl-item"><div class="proj-hl-val">' + escapeHtml(p.hlSep || 'TBC') + '</div><div class="proj-hl-label">Reservation from</div></div>',
    '<div class="proj-hl-item"><div class="proj-hl-val">' + escapeHtml(p.hlSize || 'TBC') + '</div><div class="proj-hl-label">Plot size</div></div>',
    '<div class="proj-hl-item"><div class="proj-hl-val">' + escapeHtml(p.hlDist || 'TBC') + '</div><div class="proj-hl-label">Distance to sea</div></div>',
    '</div>',
    '<div style="display:flex;gap:1rem;flex-wrap:wrap;">',
    '<a href="' + safeContactHref + '" class="btn btn-primary btn-lg">Enquire Now &#8594;</a>',
    '<a href="../index.html#proyectos" class="btn btn-ghost-light btn-lg">&#8592; View all projects</a>',
    '</div></div></section>',
    '<section class="proj-desc-section"><div class="container proj-desc-inner">',
    '<div><h2>About <em>' + escapeHtml(p.name) + '</em></h2>',
    '<p>' + escapeHtml(p.descFull1 || p.desc || '') + '</p>' + (p.descFull2 ? '<p>' + escapeHtml(p.descFull2) + '</p>' : ''),
    '</div><div><h2 style="font-size:1.3rem;margin-bottom:1rem;">Key Benefits</h2>',
    '<ul class="proj-perks">' + benefits + '</ul></div></div></section>',
    amenCards.length ? '<section class="proj-amenities"><div class="container"><div class="section-heading"><span class="section-eyebrow">Amenities</span><h2 style="color:#fff;">Project Amenities</h2></div><div class="proj-amenities-grid">' + amenHTML + '</div></div></section>' : '',
    civilList.length ? '<section class="proj-civil"><div class="container"><div class="section-heading"><span class="section-eyebrow">Infrastructure</span><h2 style="color:#fff;">Civil Works Included</h2></div><div class="proj-civil-grid">' + civilHTML + '</div></div></section>' : '',
    photos.length ? '<section class="proj-gallery"><div class="container"><div class="section-heading"><span class="section-eyebrow">Gallery</span><h2 style="color:#fff;">Project Gallery</h2></div><div class="proj-gallery-grid" id="galleryGrid">' + galleryHTML + '</div></div></section>' : '',
    '<section class="proj-cta"><div class="container">',
    '<h2>Interested in<br/><em>' + escapeHtml(p.name) + '?</em></h2>',
    '<p>Speak with our team today for prices and payment plans.</p>',
    '<div class="proj-cta-actions"><a href="' + safeContactHref + '" class="btn btn-primary btn-lg">Enquire Now &#8594;</a></div>',
    '</div></section>',
    '<footer class="site-footer"><div class="container footer-inner"><div class="footer-brand"><a href="../../index.html"><img src="../../images/logo.png" alt="Patricia Real Estate" class="site-logo-footer"/></a><p>Real estate investment specialists in Ecuador. Legal security, vision and high returns.</p></div><div class="footer-links"><h4>Projects</h4><a href="../index.html#proyectos">View all</a></div><div class="footer-links"><h4>Company</h4><a href="../../index.html">Countries</a><a href="' + safeContactHref + '">Contact</a></div><div class="footer-links"><h4>Legal</h4><a href="../../uk/privacy.html">Privacy Policy</a><a href="../../uk/terms.html">Terms &amp; Conditions</a></div></div><div class="footer-bottom"><div class="container"><p>&#169; 2026 Patricia Real Estate Ecuador. All rights reserved.</p></div></div></footer>',
    '<div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;align-items:center;justify-content:center;flex-direction:column;">',
    '<button id="lbClose" type="button" style="position:absolute;top:16px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer;">&#10005;</button>',
    '<button id="lbPrev" type="button" style="position:absolute;left:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.15);border:none;color:#fff;font-size:2rem;width:48px;height:48px;border-radius:50%;cursor:pointer;">&#8249;</button>',
    '<img id="lbImg" src="" style="max-width:90vw;max-height:80vh;object-fit:contain;border-radius:4px;"/>',
    '<div id="lbCounter" style="color:rgba(255,255,255,.6);font-size:.85rem;margin-top:12px;"></div>',
    '<div id="lbThumbs" style="display:flex;gap:8px;margin-top:14px;overflow-x:auto;max-width:90vw;padding:4px 0;"></div>',
    '<button id="lbNext" type="button" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.15);border:none;color:#fff;font-size:2rem;width:48px;height:48px;border-radius:50%;cursor:pointer;">&#8250;</button>',
    '</div>',
    '<button class="back-to-top" id="backToTop" type="button" aria-label="Back to top">&#8593;</button>',
    '<script src="../../js/pages/project-page.js"><\/scr'+'ipt>',
    '</body></html>'
  ];
  return lines.join('\n');
}


async function hideListing(market, idx) {
  var previousListings = market === 'uk' ? ukListings.slice() : esListings.slice();
  var list = market === 'uk' ? ukListings : esListings;
  list[idx].hidden = !list[idx].hidden;
  renderTables();
  updateMetrics();
  var result = await pushToGitHub(market);
  if (!result) {
    if (market === 'uk') ukListings = previousListings;
    else esListings = previousListings;
    renderTables();
    updateMetrics();
  }
}

async function hideEcListing(idx) {
  var previousListings = ecListings.slice();
  ecListings[idx].hidden = !ecListings[idx].hidden;
  renderEcTable();
  updateMetrics();
  try {
    await pushEcuadorToGitHub();
  } catch (error) {
    ecListings = previousListings;
    renderEcTable();
    updateMetrics();
    showToast('GitHub error: ' + error.message, 'error');
  }
}

function bindTableCheckboxes(tbodyId, listings, market) {
  var tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  // Select-all checkbox in header
  var table = tbody.closest('table');
  var selectAll = table ? table.querySelector('.select-all-cb') : null;
  if (selectAll) {
    selectAll.onchange = function() {
      tbody.querySelectorAll('.row-cb').forEach(function(cb) {
        cb.checked = selectAll.checked;
      });
      updateBulkHideLabel(market);
    };
  }
  tbody.querySelectorAll('.row-cb').forEach(function(cb) {
    cb.addEventListener('change', function() { updateBulkHideLabel(market); });
  });
}

function getBulkSelected(market) {
  var tbodyId = market === 'uk' ? 'ukTableBody' : market === 'spain' ? 'esTableBody' : 'ecTableBody';
  var tbody = document.getElementById(tbodyId);
  var selected = [];
  if (!tbody) return selected;
  tbody.querySelectorAll('.row-cb:checked').forEach(function(cb) {
    selected.push(parseInt(cb.dataset.idx));
  });
  return [...new Set(selected)].sort(function(a,b){return b-a;}); // desc to splice safely
}

async function bulkDelete(market) {
  var selected = getBulkSelected(market);
  if (!selected.length) { showToast('No items selected', 'error'); return; }
  if (!confirm('Delete ' + selected.length + ' item(s)? This cannot be undone.')) return;
  var list = market === 'uk' ? ukListings : market === 'spain' ? esListings : ecListings;
  var previousListings = list.slice();
  var photos = [];
  selected.forEach(function(idx) { if (list[idx] && list[idx].photos) photos = photos.concat(list[idx].photos); });
  selected.forEach(function(idx) { list.splice(idx, 1); });
  renderTables(); updateMetrics();
  try {
    if (market === 'ecuador') await pushEcuadorToGitHub();
    else {
      var result = await pushToGitHub(market);
      if (!result) throw new Error('GitHub save failed. Your changes were not published.');
    }
  } catch (error) {
    if (market === 'uk') ukListings = previousListings;
    else if (market === 'spain') esListings = previousListings;
    else ecListings = previousListings;
    renderTables();
    updateMetrics();
    if (market === 'ecuador') showToast('GitHub error: ' + error.message, 'error');
    return;
  }
  if (photos.length) deleteProjectPhotos(photos);
}

async function bulkHide(market) {
  var selected = getBulkSelected(market);
  if (!selected.length) { showToast('No items selected', 'error'); return; }
  var list = market === 'uk' ? ukListings : market === 'spain' ? esListings : ecListings;
  var previousListings = list.slice();
  selected.forEach(function(idx) { if (list[idx]) list[idx].hidden = !list[idx].hidden; });
  renderTables(); updateMetrics();
  try {
    if (market === 'ecuador') await pushEcuadorToGitHub();
    else {
      var result = await pushToGitHub(market);
      if (!result) throw new Error('GitHub save failed. Your changes were not published.');
    }
  } catch (error) {
    if (market === 'uk') ukListings = previousListings;
    else if (market === 'spain') esListings = previousListings;
    else ecListings = previousListings;
    renderTables();
    updateMetrics();
    if (market === 'ecuador') showToast('GitHub error: ' + error.message, 'error');
  }
}

function updateBulkHideLabel(market) {
  var btn = document.getElementById('bulkHideBtn_' + market);
  if (!btn) return;
  var selected = getBulkSelected(market);
  if (!selected.length) { btn.textContent = 'Hide Selected'; return; }
  var list = market === 'uk' ? ukListings : market === 'spain' ? esListings : ecListings;
  var allHidden = selected.every(function(idx) { return list[idx] && list[idx].hidden; });
  var allVisible = selected.every(function(idx) { return list[idx] && !list[idx].hidden; });
  if (allHidden) btn.textContent = 'Show Selected';
  else if (allVisible) btn.textContent = 'Hide Selected';
  else btn.textContent = 'Toggle Hide';
}

function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' '+type : '');
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

function showSaveBanner(options) {
  options = options || {};
  var banner = document.getElementById('saveBanner');
  var title = document.getElementById('saveBannerTitle');
  var text = document.getElementById('saveBannerText');
  var meta = document.getElementById('saveBannerMeta');
  if (!banner || !title || !text || !meta) return;

  var metaParts = [];
  if (options.branch) metaParts.push('Branch: ' + options.branch);
  if (Array.isArray(options.paths) && options.paths.length) metaParts.push(options.paths.join(' • '));
  metaParts.push('Confirmed at ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

  title.textContent = options.title || 'Saved to GitHub';
  text.textContent = options.text || 'Your changes were published successfully.';
  meta.textContent = metaParts.join(' • ');
  banner.hidden = false;
  banner.focus();
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideSaveBanner() {
  var banner = document.getElementById('saveBanner');
  if (banner) banner.hidden = true;
}

document.getElementById('saveBannerClose').addEventListener('click', hideSaveBanner);


/* == PHOTO UPLOAD == */
(function() {
  var drop      = document.getElementById('photoDrop');
  var fileInput = document.getElementById('photoFileInput');
  var thumbs    = document.getElementById('photoThumbs');
  var status    = document.getElementById('photoStatus');
  var urlsField = document.getElementById('propPhotos');

  if (!drop) return;

  drop.addEventListener('click', function(e) {
    if (e.target !== fileInput) fileInput.click();
  });
  fileInput.addEventListener('change', function() {
    handleFiles(Array.from(this.files));
    this.value = '';
  });
  drop.addEventListener('dragover', function(e) {
    e.preventDefault();
    drop.classList.add('drag-over');
  });
  drop.addEventListener('dragleave', function() {
    drop.classList.remove('drag-over');
  });
  drop.addEventListener('drop', function(e) {
    e.preventDefault();
    drop.classList.remove('drag-over');
    var files = Array.from(e.dataTransfer.files).filter(function(f) { return f.type.startsWith('image/'); });
    if (files.length) handleFiles(files);
  });

  async function handleFiles(files) {
    var user   = localStorage.getItem('ghUser');
    var repo   = localStorage.getItem('ghRepo');
    var branch = localStorage.getItem('ghBranch') || 'main';
    var token  = getGitHubToken();

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (file.size > 5 * 1024 * 1024) { status.textContent = file.name + ' is too large (max 5MB).'; continue; }
      status.innerHTML = '<span class="upload-spin"></span> Uploading ' + escapeHtml(file.name) + ' (' + (i+1) + '/' + files.length + ')...';
      try {
        var compressed = await compressImage(file, 1400, 0.82);
        var b64 = await new Promise(function(res, rej) {
          var r = new FileReader(); r.onload = function() { res(r.result.split(',')[1]); }; r.onerror = rej; r.readAsDataURL(compressed);
        });
        var url;
        if (user && repo && token) {
          var filename = Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9.]/g, '-').toLowerCase();
          var path = 'images/properties/' + filename;
          var res = await fetch('https://api.github.com/repos/' + user + '/' + repo + '/contents/' + path, {
            method: 'PUT',
            headers: { Authorization: 'token ' + token, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Upload photo: ' + filename, content: b64, branch: branch })
          });
          if (!res.ok) { var err = await res.json(); throw new Error(err.message || 'GitHub error ' + res.status); }
          var data = await res.json();
          url = data.content.download_url;
          status.innerHTML = '<span style="color:#27AE60;font-weight:600;">&#10003; ' + escapeHtml(file.name) + ' uploaded successfully</span>';
        } else {
          url = URL.createObjectURL(file);
          status.innerHTML = '<span style="color:#6B7280;">GitHub not connected — preview only. Connect GitHub to save photos.</span>';
        }
        var existing = urlsField.value.trim();
        urlsField.value = existing ? existing + '\n' + url : url;
        addThumb(url);
      } catch(e) {
        status.innerHTML = '<span style="color:#C0392B;font-weight:600;">&#10007; ' + escapeHtml(file.name) + ' failed: ' + escapeHtml(e.message) + '</span>';
      }
    }
    if (files.length > 0 && user && repo && token) {
      status.textContent = files.length + ' photo' + (files.length > 1 ? 's' : '') + ' uploaded.';
    }
  }

  function addThumb(url) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var button = document.createElement('button');
    div.className = 'photo-thumb';
    img.src = url;
    img.alt = 'Property photo';
    button.className = 'photo-thumb-del';
    button.type = 'button';
    button.textContent = 'x';
    button.addEventListener('click', function() {
      div.remove();
      urlsField.value = urlsField.value.split('\n').filter(function(u) { return u.trim() !== url; }).join('\n');
    });
    div.appendChild(img);
    div.appendChild(button);
    thumbs.appendChild(div);
  }

  function compressImage(file, maxW, quality) {
    return new Promise(function(resolve) {
      var img = new Image();
      var objUrl = URL.createObjectURL(file);
      img.onload = function() {
        URL.revokeObjectURL(objUrl);
        var scale = Math.min(1, maxW / img.width);
        var w = Math.round(img.width * scale), h = Math.round(img.height * scale);
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(function(blob) { resolve(blob); }, 'image/jpeg', quality);
      };
      img.src = objUrl;
    });
  }

  window.populatePhotoThumbs = function(urls) {
    thumbs.innerHTML = '';
    urls.forEach(function(url) { addThumb(url); });
  };
})();

/* == ECUADOR PHOTO UPLOAD == */
(function() {
  var drop=document.getElementById('ecPhotoDrop'),fileInput=document.getElementById('ecPhotoFileInput'),
      thumbs=document.getElementById('ecPhotoThumbs'),status=document.getElementById('ecPhotoStatus'),
      urlsField=document.getElementById('ecPhotos');
  if(!drop) return;
  drop.addEventListener('click',function(e){if(e.target!==fileInput)fileInput.click();});
  fileInput.addEventListener('change',function(){handleEcFiles(Array.from(this.files));this.value='';});
  drop.addEventListener('dragover',function(e){e.preventDefault();drop.classList.add('drag-over');});
  drop.addEventListener('dragleave',function(){drop.classList.remove('drag-over');});
  drop.addEventListener('drop',function(e){e.preventDefault();drop.classList.remove('drag-over');var files=Array.from(e.dataTransfer.files).filter(function(f){return f.type.startsWith('image/');});if(files.length)handleEcFiles(files);});
  async function handleEcFiles(files){
    var user=localStorage.getItem('ghUser'),repo=localStorage.getItem('ghRepo'),branch=localStorage.getItem('ghBranch')||'main',token=getGitHubToken();
    for(var i=0;i<files.length;i++){
      var file=files[i];
      if(file.size>5*1024*1024){status.textContent=file.name+' is too large (max 5MB).';continue;}
      status.innerHTML='<span class="upload-spin"></span> Uploading '+escapeHtml(file.name)+' ('+(i+1)+'/'+files.length+')...';
      try{
        var compressed=await compressEc(file);
        var b64=await new Promise(function(res,rej){var r=new FileReader();r.onload=function(){res(r.result.split(',')[1]);};r.onerror=rej;r.readAsDataURL(compressed);});
        var url;
        if(user&&repo&&token){
          var fname=Date.now()+'-'+file.name.replace(/[^a-zA-Z0-9.]/g,'-').toLowerCase();
          var res=await fetch('https://api.github.com/repos/'+user+'/'+repo+'/contents/images/properties/'+fname,{method:'PUT',headers:{Authorization:'token '+token,Accept:'application/vnd.github.v3+json','Content-Type':'application/json'},body:JSON.stringify({message:'Upload: '+fname,content:b64,branch:branch})});
          if(!res.ok){var err=await res.json();throw new Error(err.message);}
          url=(await res.json()).content.download_url;
          status.innerHTML='<span style="color:#27AE60;font-weight:600;">&#10003; '+escapeHtml(file.name)+' uploaded</span>';
        }else{
          url=URL.createObjectURL(file);
          status.innerHTML='<span style="color:#6B7280;">GitHub not connected — preview only.</span>';
        }
        urlsField.value=urlsField.value.trim()?urlsField.value.trim()+'\n'+url:url;
        addEcThumb(url);
      }catch(e){status.innerHTML='<span style="color:#C0392B;font-weight:600;">&#10007; '+escapeHtml(file.name)+' failed: '+escapeHtml(e.message)+'</span>';}
    }
  }
  function addEcThumb(url){
    var div=document.createElement('div'),img=document.createElement('img'),button=document.createElement('button');
    div.className='photo-thumb';
    img.src=url;
    img.alt='Project photo';
    button.className='photo-thumb-del';
    button.type='button';
    button.textContent='x';
    button.addEventListener('click',function(){div.remove();urlsField.value=urlsField.value.split('\n').filter(function(u){return u.trim()!==url;}).join('\n');});
    div.appendChild(img);
    div.appendChild(button);
    thumbs.appendChild(div);
  }
  function compressEc(file){
    return new Promise(function(resolve){
      var img=new Image();var u=URL.createObjectURL(file);
      img.onload=function(){URL.revokeObjectURL(u);var scale=Math.min(1,1400/img.width);var cv=document.createElement('canvas');cv.width=Math.round(img.width*scale);cv.height=Math.round(img.height*scale);cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);cv.toBlob(function(b){resolve(b);},'image/jpeg',0.82);};
      img.src=u;
    });
  }
  window.populateEcPhotoThumbs=function(urls){thumbs.innerHTML='';urls.forEach(function(url){addEcThumb(url);});};
})();

bindAdminEventHandlers();

function checkSessionAndInit() {
  var unlocked = sessionStorage.getItem(SESSION_KEY);
  var fourHours = 4 * 60 * 60 * 1000;
  if (unlocked && (Date.now() - parseInt(unlocked)) < fourHours) {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('adminApp').style.display = 'flex';
    initAdmin();
  } else {
    sessionStorage.removeItem(SESSION_KEY);
    // Keep lock screen visible
    updateAttemptsDisplay();
  }
}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",checkSessionAndInit);}else{checkSessionAndInit();}
