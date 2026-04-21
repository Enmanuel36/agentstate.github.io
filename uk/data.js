/**
 * Patricia Real Estate – UK Property Listings
 * Managed via Admin Portal
 */
const propertyListings = [
  {
    "id": 1776456907071,
    "title": "Luxury 1-Bed City Centre Apartment",
    "type": "let-agreed",
    "category": "flat",
    "price": "£1,650 pcm",
    "address": "Meridian Tower, Apt 18",
    "town": "Southampton",
    "postcode": "SO14 3JA",
    "bedrooms": 1,
    "bathrooms": 1,
    "reception": 1,
    "sqft": "620 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80"
    ],
    "features": [
      "City views",
      "Concierge",
      "Gym access",
      "Underground parking",
      "Balcony",
      "EPC: B"
    ],
    "description": "A stunning high-specification apartment on the 18th floor of the prestigious Meridian Tower. Floor-to-ceiling windows flood the space with natural light and offer breathtaking city views. Fitted kitchen with integrated appliances, luxury bathroom, and a private balcony.",
    "agent": "James Carter",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-17",
    "hidden": true
  },
  {
    "id": 4,
    "title": "Spacious 3-Bed Semi-Detached",
    "type": "to-let",
    "category": "house",
    "price": "£395,000",
    "address": "29 Birchwood Avenue",
    "town": "Basingstoke",
    "postcode": "RG21 4TK",
    "bedrooms": 3,
    "bathrooms": 2,
    "reception": 2,
    "sqft": "1,350 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=900&q=80"
    ],
    "features": [
      "Extended kitchen",
      "Landscaped garden",
      "Two bathrooms",
      "Off-street parking",
      "Good school catchment"
    ],
    "description": "An extended and superbly presented three-bedroom semi-detached home in a popular residential area. The ground floor features a large open-plan kitchen-diner extension, a separate sitting room, and a utility room.",
    "agent": "Patricia Reynolds",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-08",
    "emoji": "🏡"
  },
  {
    "id": 5,
    "title": "Modern 2-Bed Garden Flat",
    "type": "to-let",
    "category": "flat",
    "price": "£1,300 pcm",
    "address": "Elmgrove Road, Ground Floor",
    "town": "Portsmouth",
    "postcode": "PO5 2ER",
    "bedrooms": 2,
    "bathrooms": 1,
    "reception": 1,
    "sqft": "780 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80"
    ],
    "features": [
      "Private garden",
      "Off-street parking",
      "Modern kitchen",
      "Near station",
      "Pets considered"
    ],
    "description": "A beautifully presented ground-floor garden flat forming part of a converted Edwardian house. The flat benefits from its own private garden to the rear — a rare find at this price.",
    "agent": "Patricia Reynolds",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-07",
    "emoji": "🌿"
  },
  {
    "id": 6,
    "title": "Executive 5-Bed New Build Detached",
    "type": "to-let",
    "category": "house",
    "price": "£895,000",
    "address": "3 The Grange",
    "town": "Alresford",
    "postcode": "SO24 9QP",
    "bedrooms": 5,
    "bathrooms": 4,
    "reception": 3,
    "sqft": "3,200 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80"
    ],
    "features": [
      "Triple garage",
      "Smart home system",
      "Underfloor heating",
      "Wine cellar",
      "Half-acre plot",
      "EPC: A"
    ],
    "description": "A truly exceptional new-build executive home set within half an acre in the picturesque market town of Alresford. Five bedrooms, four bathrooms, and three reception rooms across three floors.",
    "agent": "Patricia Reynolds",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-06",
    "emoji": "🏰"
  },
  {
    "id": 7,
    "title": "Cosy 1-Bed Apartment — Let Agreed",
    "type": "let-agreed",
    "category": "flat",
    "price": "£950 pcm",
    "address": "Harbour View House, Apt 4",
    "town": "Fareham",
    "postcode": "PO16 7GH",
    "bedrooms": 1,
    "bathrooms": 1,
    "reception": 1,
    "sqft": "480 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80",
      "https://images.unsplash.com/photo-1460533893735-45cea2212645?w=900&q=80"
    ],
    "features": [
      "Harbour views",
      "Allocated parking",
      "On-site laundry",
      "Near shops"
    ],
    "description": "A well-proportioned one-bedroom apartment with wonderful harbour views from the sitting room. Fully furnished. This property has now been let agreed — contact us to join our waiting list.",
    "agent": "James Carter",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-05",
    "emoji": "⚓"
  },
  {
    "id": 8,
    "title": "Detached 3-Bed Bungalow with Large Garden",
    "type": "to-let",
    "category": "bungalow",
    "price": "£475,000",
    "address": "12 Heathfield Road",
    "town": "Eastleigh",
    "postcode": "SO50 4NA",
    "bedrooms": 3,
    "bathrooms": 2,
    "reception": 2,
    "sqft": "1,400 sq ft",
    "photos": [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80"
    ],
    "features": [
      "100ft rear garden",
      "Driveway for 4 cars",
      "Loft conversion potential",
      "Quiet cul-de-sac",
      "Solar panels"
    ],
    "description": "A spacious and versatile detached bungalow situated in a quiet cul-de-sac. Features three well-proportioned bedrooms, two bathrooms, and a magnificent 100-foot rear garden.",
    "agent": "Patricia Reynolds",
    "email": "hello@patriciarealestate.com",
    "added": "2026-04-04",
    "emoji": "🌻"
  }
];
