/**
 * ============================================================
 *  Patricia Real Estate – Property Listings Data
 *  ============================================================
 *  HOW TO ADD A NEW PROPERTY LISTING:
 *
 *  1. Copy one of the objects below (between the { } braces)
 *  2. Paste it at the TOP of the propertyListings array
 *  3. Fill in your details (see field descriptions below)
 *  4. Save and commit to GitHub – your listing is live!
 *
 *  Or use the "List a Property" page to generate the entry
 *  automatically and just paste it here.
 *
 *  FIELD REFERENCE:
 *  ─────────────────────────────────────────────────────────
 *  id          – Unique number (increment from last entry)
 *  title       – Property headline e.g. "3-Bed Victorian Terrace"
 *  type        – "for-sale" | "to-let" | "sold" | "let-agreed"
 *  category    – "house" | "flat" | "bungalow" | "land" | "commercial"
 *  price       – e.g. "£450,000" or "£1,800 pcm"
 *  address     – Street address
 *  town        – Town / City
 *  postcode    – Postcode
 *  bedrooms    – Number (0 for studios)
 *  bathrooms   – Number
 *  reception   – Number of reception rooms
 *  sqft        – Floor area as string e.g. "1,200 sq ft"
 *  features    – Array of feature strings
 *  description – Full property description
 *  agent       – Listing agent name
 *  email       – Agent email for enquiries
 *  added       – ISO date string "2026-04-11"
 *  emoji       – Display emoji for card image placeholder
 *  ─────────────────────────────────────────────────────────
 * ============================================================
 */

const propertyListings = [

  /* ── LISTING 1 ─────────────────────────────────────────── */
  {
    id: 1,
    title: "Stunning 4-Bed Detached Family Home",
    type: "for-sale",
    category: "house",
    price: "£625,000",
    address: "14 Oakwood Drive",
    town: "Guildford",
    postcode: "GU2 7RN",
    bedrooms: 4,
    bathrooms: 3,
    reception: 2,
    sqft: "2,100 sq ft",
    features: ["South-facing garden", "Double garage", "En-suite master", "Open-plan kitchen", "New build 2021"],
    description: "A magnificent detached family home set in a sought-after residential area of Guildford. Boasting four generous bedrooms, an open-plan kitchen-dining-living space, and a beautifully landscaped south-facing garden. The master bedroom benefits from a luxurious en-suite. Double garage and driveway parking for four vehicles.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-10",
    emoji: "🏡"
  },

  /* ── LISTING 2 ─────────────────────────────────────────── */
  {
    id: 2,
    title: "Charming 2-Bed Period Cottage",
    type: "for-sale",
    category: "house",
    price: "£320,000",
    address: "7 Mill Lane",
    town: "Winchester",
    postcode: "SO23 8PT",
    bedrooms: 2,
    bathrooms: 1,
    reception: 1,
    sqft: "820 sq ft",
    features: ["Original beams", "Inglenook fireplace", "Private courtyard", "Period features", "Quiet lane"],
    description: "A wonderfully characterful Grade II listed cottage dating back to the 18th century. Beautifully maintained with exposed beams, an inglenook fireplace, and a private walled courtyard garden. Situated in a quiet lane just a short walk from Winchester Cathedral and the high street.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-09",
    emoji: "🏠"
  },

  /* ── LISTING 3 ─────────────────────────────────────────── */
  {
    id: 3,
    title: "Luxury 1-Bed City Centre Apartment",
    type: "to-let",
    category: "flat",
    price: "£1,650 pcm",
    address: "Meridian Tower, Apt 18",
    town: "Southampton",
    postcode: "SO14 3JA",
    bedrooms: 1,
    bathrooms: 1,
    reception: 1,
    sqft: "620 sq ft",
    features: ["City views", "Concierge", "Gym access", "Underground parking", "Balcony", "EPC: B"],
    description: "A stunning high-specification apartment on the 18th floor of the prestigious Meridian Tower. Floor-to-ceiling windows flood the space with natural light and offer breathtaking city views. Fitted kitchen with integrated appliances, luxury bathroom, and a private balcony. Residents benefit from a 24-hour concierge, gym, and secure underground parking.",
    agent: "James Carter",
    email: "hello@patriciarealestate.com",
    added: "2026-04-09",
    emoji: "🏢"
  },

  /* ── LISTING 4 ─────────────────────────────────────────── */
  {
    id: 4,
    title: "Spacious 3-Bed Semi-Detached",
    type: "for-sale",
    category: "house",
    price: "£395,000",
    address: "29 Birchwood Avenue",
    town: "Basingstoke",
    postcode: "RG21 4TK",
    bedrooms: 3,
    bathrooms: 2,
    reception: 2,
    sqft: "1,350 sq ft",
    features: ["Extended kitchen", "Landscaped garden", "Two bathrooms", "Off-street parking", "Good school catchment"],
    description: "An extended and superbly presented three-bedroom semi-detached home in a popular residential area. The ground floor features a large open-plan kitchen-diner extension, a separate sitting room, and a utility room. Upstairs there are three bedrooms and two bathrooms. The generous rear garden is ideal for families.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-08",
    emoji: "🏡"
  },

  /* ── LISTING 5 ─────────────────────────────────────────── */
  {
    id: 5,
    title: "Modern 2-Bed Garden Flat",
    type: "to-let",
    category: "flat",
    price: "£1,300 pcm",
    address: "Elmgrove Road, Ground Floor",
    town: "Portsmouth",
    postcode: "PO5 2ER",
    bedrooms: 2,
    bathrooms: 1,
    reception: 1,
    sqft: "780 sq ft",
    features: ["Private garden", "Off-street parking", "Modern kitchen", "Near station", "Pets considered"],
    description: "A beautifully presented ground-floor garden flat forming part of a converted Edwardian house. The flat benefits from its own private garden to the rear — a rare find at this price. The modern interior features a fully equipped kitchen, open-plan reception, two double bedrooms, and a contemporary bathroom.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-07",
    emoji: "🌿"
  },

  /* ── LISTING 6 ─────────────────────────────────────────── */
  {
    id: 6,
    title: "Executive 5-Bed New Build Detached",
    type: "for-sale",
    category: "house",
    price: "£895,000",
    address: "3 The Grange",
    town: "Alresford",
    postcode: "SO24 9QP",
    bedrooms: 5,
    bathrooms: 4,
    reception: 3,
    sqft: "3,200 sq ft",
    features: ["Triple garage", "Smart home system", "Underfloor heating", "Wine cellar", "Half-acre plot", "EPC: A"],
    description: "A truly exceptional new-build executive home set within half an acre in the picturesque market town of Alresford. Five bedrooms, four bathrooms, and three reception rooms across three floors. Highlights include a bespoke kitchen by Smallbone, underfloor heating throughout, a smart home system, and an impressive wine cellar.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-06",
    emoji: "🏰"
  },

  /* ── LISTING 7 ─────────────────────────────────────────── */
  {
    id: 7,
    title: "Cosy 1-Bed Apartment — Let Agreed",
    type: "let-agreed",
    category: "flat",
    price: "£950 pcm",
    address: "Harbour View House, Apt 4",
    town: "Fareham",
    postcode: "PO16 7GH",
    bedrooms: 1,
    bathrooms: 1,
    reception: 1,
    sqft: "480 sq ft",
    features: ["Harbour views", "Allocated parking", "On-site laundry", "Near shops"],
    description: "A well-proportioned one-bedroom apartment with wonderful harbour views from the sitting room. Fully furnished and available for long-let. This property has now been let agreed — contact us to join our waiting list for similar properties.",
    agent: "James Carter",
    email: "hello@patriciarealestate.com",
    added: "2026-04-05",
    emoji: "⚓"
  },

  /* ── LISTING 8 ─────────────────────────────────────────── */
  {
    id: 8,
    title: "Detached 3-Bed Bungalow with Large Garden",
    type: "for-sale",
    category: "bungalow",
    price: "£475,000",
    address: "12 Heathfield Road",
    town: "Eastleigh",
    postcode: "SO50 4NA",
    bedrooms: 3,
    bathrooms: 2,
    reception: 2,
    sqft: "1,400 sq ft",
    features: ["100ft rear garden", "Driveway for 4 cars", "Loft conversion potential", "Quiet cul-de-sac", "Solar panels"],
    description: "A spacious and versatile detached bungalow situated in a quiet cul-de-sac. The property features three well-proportioned bedrooms, two bathrooms, and a magnificent 100-foot rear garden. The generous loft space has excellent conversion potential (STPP). Solar panels contribute to low running costs.",
    agent: "Patricia Reynolds",
    email: "hello@patriciarealestate.com",
    added: "2026-04-04",
    emoji: "🌻"
  }

  /*
   * ── ADD NEW LISTINGS ABOVE THIS LINE ────────────────────
   * Use the "List a Property" page to generate entries,
   * or copy the template above. Increment the id field.
   * ─────────────────────────────────────────────────────── */

]; // end propertyListings
