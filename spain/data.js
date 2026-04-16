/**
 * Patricia Real Estate – Spain Property Listings
 * Managed via Admin Portal
 */
const propertyListings = [
  {
    "id": 1,
    "title": "Luxury Villa with Sea Views",
    "type": "to-let",
    "category": "house",
    "price": "€1,250,000",
    "address": "Calle del Mar 12",
    "town": "Marbella",
    "postcode": "29602",
    "bedrooms": 5,
    "bathrooms": 4,
    "reception": 3,
    "sqft": "3,800 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=900&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80"
    ],
    "features": [
      "Private pool",
      "Sea views",
      "Gated community",
      "Roof terrace",
      "Double garage",
      "EPC: A"
    ],
    "description": "A magnificent five-bedroom villa perched above Marbella's golden mile. Floor-to-ceiling windows frame panoramic sea views. Infinity pool, landscaped gardens, and a double garage complete this exceptional home.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-10",
    "emoji": "🏖"
  },
  {
    "id": 2,
    "title": "Stylish Barcelona City Apartment",
    "type": "to-let",
    "category": "flat",
    "price": "€480,000",
    "address": "Carrer de Provença 88",
    "town": "Barcelona",
    "postcode": "08029",
    "bedrooms": 3,
    "bathrooms": 2,
    "reception": 1,
    "sqft": "1,400 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80"
    ],
    "features": [
      "Modernista building",
      "Rooftop pool",
      "Concierge",
      "Central location",
      "Restored features",
      "EPC: C"
    ],
    "description": "A stunning apartment in a beautifully restored Modernista building in the heart of the Eixample district. High ceilings, original mosaic tiles, and a modern kitchen.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-09",
    "emoji": "🏢"
  },
  {
    "id": 3,
    "title": "Beachfront Penthouse",
    "type": "to-let",
    "category": "flat",
    "price": "€4,500 pcm",
    "address": "Paseo Marítimo 5, Ático",
    "town": "Valencia",
    "postcode": "46011",
    "bedrooms": 3,
    "bathrooms": 3,
    "reception": 2,
    "sqft": "2,100 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=80",
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=900&q=80"
    ],
    "features": [
      "Beachfront",
      "Private terrace",
      "Jacuzzi",
      "Gym access",
      "Parking x2",
      "Concierge"
    ],
    "description": "An extraordinary beachfront penthouse with breathtaking Mediterranean views from a vast private terrace. Fully furnished to the highest specification with direct beach access.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-08",
    "emoji": "🌊"
  },
  {
    "id": 4,
    "title": "Traditional Finca with Olive Groves",
    "type": "to-let",
    "category": "house",
    "price": "€695,000",
    "address": "Carretera de Ronda Km 4",
    "town": "Ronda",
    "postcode": "29400",
    "bedrooms": 4,
    "bathrooms": 3,
    "reception": 2,
    "sqft": "2,600 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=900&q=80"
    ],
    "features": [
      "5-hectare plot",
      "Olive groves",
      "Heated pool",
      "Mountain views",
      "Stables",
      "Restored"
    ],
    "description": "A beautifully restored 18th-century Andalusian finca set within 5 hectares of olive groves with spectacular mountain views. Original stone features, heated pool, and separate guest cottage.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-07",
    "emoji": "🫒"
  },
  {
    "id": 5,
    "title": "Modern Madrid Centro Flat",
    "type": "to-let",
    "category": "flat",
    "price": "€2,200 pcm",
    "address": "Calle Gran Vía 45, 3º",
    "town": "Madrid",
    "postcode": "28013",
    "bedrooms": 2,
    "bathrooms": 2,
    "reception": 1,
    "sqft": "950 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80"
    ],
    "features": [
      "Gran Vía location",
      "Recently renovated",
      "Air conditioning",
      "Lift",
      "Near metro",
      "Furnished"
    ],
    "description": "A sleek, fully renovated apartment right on the iconic Gran Vía. Open-plan living, two double bedrooms, and a private balcony. Walking distance to Retiro Park.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-06",
    "emoji": "🏙"
  },
  {
    "id": 6,
    "title": "Costa Brava Seafront Townhouse",
    "type": "to-let",
    "category": "house",
    "price": "€875,000",
    "address": "Carrer de la Mar 3",
    "town": "Begur",
    "postcode": "17255",
    "bedrooms": 4,
    "bathrooms": 3,
    "reception": 2,
    "sqft": "2,200 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80"
    ],
    "features": [
      "Seafront location",
      "Private mooring",
      "Sun terrace",
      "Recently renovated",
      "Character features",
      "EPC: B"
    ],
    "description": "A rare seafront townhouse in the charming Costa Brava village of Begur. Four bedrooms, a sun terrace with direct sea views, and the option of a private mooring.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-05",
    "emoji": "⛵"
  },
  {
    "id": 7,
    "title": "New Build Golf Resort Apartment",
    "type": "to-let",
    "category": "flat",
    "price": "€320,000",
    "address": "La Cala Golf Resort, Bloque 4",
    "town": "Mijas",
    "postcode": "29649",
    "bedrooms": 2,
    "bathrooms": 2,
    "reception": 1,
    "sqft": "1,050 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&q=80"
    ],
    "features": [
      "Golf resort",
      "Community pool",
      "Gym & spa",
      "Underground parking",
      "Holiday let potential",
      "EPC: A"
    ],
    "description": "Brand new two-bedroom apartment within the prestigious La Cala Golf Resort. Contemporary finishes, private terrace overlooking the fairway, and access to resort amenities.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-04",
    "emoji": "⛳"
  },
  {
    "id": 8,
    "title": "Seville Historic Quarter Apartment",
    "type": "let-agreed",
    "category": "flat",
    "price": "€390,000",
    "address": "Calle Sierpes 18, 2º",
    "town": "Seville",
    "postcode": "41004",
    "bedrooms": 3,
    "bathrooms": 2,
    "reception": 1,
    "sqft": "1,200 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=900&q=80",
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=900&q=80"
    ],
    "features": [
      "Santa Cruz barrio",
      "Exposed brick",
      "Private patio",
      "Period features",
      "Tourist licence",
      "Recently sold"
    ],
    "description": "A characterful apartment in Seville's famous Santa Cruz quarter. Exposed brick walls, a traditional Andalusian patio. This property is now sold — contact us for similar opportunities.",
    "agent": "Patricia Morales",
    "email": "hello@patriciarealestate.com",
    "added": "2026-03-20",
    "emoji": "🌹"
  },
  {
    "id": 1776339066205,
    "title": "tEST",
    "type": "to-let",
    "category": "house",
    "price": "1000",
    "address": "14 Oakwood Drive",
    "town": "London",
    "postcode": "GU2 7RN",
    "bedrooms": 3,
    "bathrooms": 1,
    "reception": 1,
    "sqft": "",
    "photos": [
      "https://raw.githubusercontent.com/Enmanuel36/agentstate.github.io/main/images/properties/1776339054935-a-stylized-3d-rhgothssvi.jpeg"
    ],
    "features": [],
    "description": "",
    "agent": "Patricia Reynolds",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-16"
  }
];
