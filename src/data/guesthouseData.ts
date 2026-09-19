import { Room, Facility, GalleryItem } from '../types';

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'A spacious and tastefully designed deluxe room with comfortable bedding, ambient lighting, and modern room amenities for a restful experience.',
    image: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg',
    bedInfo: '1 King Size Bed or Extra Bed on Request',
    capacity: 'Ideal for 2 - 3 Guests',
    facilities: ['Air Conditioning', 'Free Wi-Fi', 'En-suite Bathroom', 'Flat Screen TV', 'Clean Linens', 'Work Desk'],
    featured: true,
  },
  {
    id: 'double-room',
    name: 'Double Room',
    description: 'An elegant room tailored for couples or solo travelers featuring premium mattresses, spotless interiors, and peaceful room surroundings.',
    image: 'https://i.pinimg.com/736x/d6/f9/04/d6f904acfa10741f29c9c47a7544a856.jpg',
    bedInfo: '1 Comfort Queen Bed',
    capacity: 'Ideal for 2 Guests',
    facilities: ['Air Conditioning', 'Free Wi-Fi', 'Attached Washroom', 'In-Room Seating', 'Daily Housekeeping'],
    featured: true,
  },
  {
    id: 'family-room',
    name: 'Family Room',
    description: 'Expansive guest room created specifically for families or group travelers seeking shared comfort, security, and home-like ease.',
    image: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg',
    bedInfo: '2 Double Beds or Multiple Bed Setup',
    capacity: 'Suitable for Families',
    facilities: ['Air Conditioning', 'Free Wi-Fi', 'Spacious Seating Area', 'Attached Bathroom', 'Family Friendly Setup'],
    featured: true,
  },
  {
    id: 'guest-room',
    name: 'Comfortable Guest Room',
    description: 'A quiet, well-maintained standard room offering core essentials for short or extended stays in Islamabad at great quality.',
    image: 'https://i.pinimg.com/736x/d6/f9/04/d6f904acfa10741f29c9c47a7544a856.jpg',
    bedInfo: 'Single or Twin Bedding Options',
    facilities: ['Air Conditioning', 'Free Wi-Fi', 'Clean Bathroom', 'Peaceful Atmosphere', '24/7 Guest Assistance'],
    featured: true,
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'beds',
    title: 'Comfortable Beds',
    description: 'Plush, high-density mattresses with fresh, sanitized linens designed for deep, uninterrupted sleep.',
    iconName: 'Bed',
    imageUrl: 'https://i.pinimg.com/1200x/b1/0b/f2/b10bf2a5b01f708c7df8bfc75336d3f1.jpg'
  },
  {
    id: 'cleanliness',
    title: 'Clean Rooms',
    description: 'Rigorous daily housekeeping and sanitation standards to maintain a pristine guest environment.',
    iconName: 'Sparkles',
    imageUrl: 'https://i.pinimg.com/736x/e3/af/20/e3af20f9c640272a3542bced39d57abf.jpg'
  },
  {
    id: 'wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Complimentary wireless internet access across all rooms and common areas for work and entertainment.',
    iconName: 'Wifi',
    imageUrl: 'https://i.pinimg.com/1200x/f5/06/e2/f506e258f6299a118d72f699200a7395.jpg'
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Individual climate control heating and cooling in rooms for year-round indoor comfort.',
    iconName: 'Wind',
    imageUrl: 'https://i.pinimg.com/736x/87/28/92/87289252d92e45f357b35d6f4fe97e53.jpg'
  },
  {
    id: 'parking',
    title: 'Secure Parking',
    description: 'Safe on-site and front parking spaces reserved for guests traveling with private vehicles.',
    iconName: 'Car',
    imageUrl: 'https://i.pinimg.com/1200x/5c/d5/58/5cd5581fb72fe6c4a080368da742faa5.jpg'
  },
  {
    id: 'support',
    title: '24/7 Guest Support',
    description: 'Dedicated guesthouse staff available around the clock to assist with check-ins and guest requests.',
    iconName: 'Clock',
    imageUrl: 'https://i.pinimg.com/1200x/af/15/b6/af15b6f048ecaa6201b320276d310ab9.jpg'
  },
  {
    id: 'family',
    title: 'Family-Friendly Environment',
    description: 'A quiet, respectful, and safe setting suitable for families, business professionals, and tourists.',
    iconName: 'Users',
    imageUrl: 'https://i.pinimg.com/1200x/af/a1/0b/afa10bd4bce31e54c295592a483a9a78.jpg'
  },
  {
    id: 'location',
    title: 'Convenient Location',
    description: 'Situated on Main Double Road in G-13/1, Islamabad, with easy access to major avenues, markets, and highways.',
    iconName: 'MapPin',
    imageUrl: 'https://i.pinimg.com/1200x/e9/35/b0/e935b0a3b8398edbf60079f4692b6326.jpg'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Comfortable Bed Setup & Linens',
    category: 'Bedrooms',
    imageUrl: 'https://i.pinimg.com/1200x/b1/0b/f2/b10bf2a5b01f708c7df8bfc75336d3f1.jpg',
    altText: 'Plush bedding and comfortable mattresses'
  },
  {
    id: 'g2',
    title: 'Clean Room Interior & Sanitation',
    category: 'Guesthouse Interior',
    imageUrl: 'https://i.pinimg.com/736x/e3/af/20/e3af20f9c640272a3542bced39d57abf.jpg',
    altText: 'Spotless clean guest room environment'
  },
  {
    id: 'g3',
    title: 'Free High-Speed Wi-Fi & Work Desk',
    category: 'Guesthouse Interior',
    imageUrl: 'https://i.pinimg.com/1200x/f5/06/e2/f506e258f6299a118d72f699200a7395.jpg',
    altText: 'High speed wireless internet setup for guests'
  },
  {
    id: 'g4',
    title: 'In-Room Air Conditioning & Climate Control',
    category: 'Guesthouse Interior',
    imageUrl: 'https://i.pinimg.com/736x/87/28/92/87289252d92e45f357b35d6f4fe97e53.jpg',
    altText: 'Climate control air conditioning unit'
  },
  {
    id: 'g4_parking',
    title: 'Secure Reserved Guest Parking',
    category: 'Exterior',
    imageUrl: 'https://i.pinimg.com/1200x/5c/d5/58/5cd5581fb72fe6c4a080368da742faa5.jpg',
    altText: 'On-site safe parking area for guest vehicles'
  },
  {
    id: 'g4_support',
    title: '24/7 Guest Desk & Front Support',
    category: 'Common Areas',
    imageUrl: 'https://i.pinimg.com/1200x/af/15/b6/af15b6f048ecaa6201b320276d310ab9.jpg',
    altText: '24/7 attentive guest support service desk'
  },
  {
    id: 'g4_family',
    title: 'Family-Friendly Environment',
    category: 'Common Areas',
    imageUrl: 'https://i.pinimg.com/1200x/af/a1/0b/afa10bd4bce31e54c295592a483a9a78.jpg',
    altText: 'Safe, quiet and family-friendly guesthouse environment'
  },
  {
    id: 'g4_location',
    title: 'Convenient Sector G-13/1 Location',
    category: 'Exterior',
    imageUrl: 'https://i.pinimg.com/1200x/e9/35/b0/e935b0a3b8398edbf60079f4692b6326.jpg',
    altText: 'Convenient guesthouse location on Main Double Road Islamabad'
  },
  {
    id: 'g5',
    title: 'Deluxe Guest Bedroom Suite',
    category: 'Rooms',
    imageUrl: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg',
    altText: 'Deluxe guest bedroom suite with comfortable bed'
  },
  {
    id: 'g6',
    title: 'Double Room Interior & Bedding',
    category: 'Bedrooms',
    imageUrl: 'https://i.pinimg.com/736x/d6/f9/04/d6f904acfa10741f29c9c47a7544a856.jpg',
    altText: 'Comfortable double room with pristine bedding'
  },
  {
    id: 'g7',
    title: 'Guesthouse Front Facade & Exterior',
    category: 'Exterior',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1000',
    altText: 'Redbury Guesthouse exterior facade on Main Double Road'
  },
  {
    id: 'g8',
    title: 'Welcoming Guest Reception Lounge',
    category: 'Guesthouse Interior',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    altText: 'Warm lobby and reception sitting area'
  },
  {
    id: 'g9',
    title: 'Spacious Family Guest Bedroom',
    category: 'Bedrooms',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000',
    altText: 'Family room setup with ample spacing and modern design'
  },
  {
    id: 'g10',
    title: 'Common Dining & Breakfast Space',
    category: 'Common Areas',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    altText: 'Elegant guest dining corner for tea and meals'
  },
  {
    id: 'g11',
    title: 'Scenic Margalla Hills View, Islamabad',
    category: 'Islamabad / Nearby Views',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
    altText: 'Lush green Margalla Hills surrounding Islamabad'
  },
  {
    id: 'g12',
    title: 'Faisal Mosque Icon, Islamabad',
    category: 'Islamabad / Nearby Views',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1000',
    altText: 'Iconic landmark Faisal Mosque Islamabad near G-13'
  },
  {
    id: 'g13',
    title: 'Clean En-Suite Washroom',
    category: 'Guesthouse Interior',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
    altText: 'Sanitized modern bathroom fixture'
  },
  {
    id: 'g14',
    title: 'Cozy Executive Guest Suite',
    category: 'Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000',
    altText: 'Cozy guest room with ambient lighting'
  },
  {
    id: 'g15',
    title: 'Outdoor Balcony & Garden Corner',
    category: 'Exterior',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    altText: 'Guesthouse outdoor balcony sitting area'
  },
  {
    id: 'g16',
    title: 'Relaxing Sitting Lounge for Guests',
    category: 'Common Areas',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000',
    altText: 'Common sitting lounge area inside Redbury Guesthouse'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Comfortable Accommodation',
    description: 'Generously proportioned bedrooms equipped with cozy beds, soft pillows, and quiet climate control.'
  },
  {
    title: 'Peaceful Environment',
    description: 'Located in a serene residential sector (G-13/1), giving you a quiet retreat away from traffic noise.'
  },
  {
    title: 'Convenient Islamabad Location',
    description: 'Quick connectivity to Islamabad Expressway, Kashmir Highway, Srinagar Highway, NUST, and the airport.'
  },
  {
    title: 'Clean & Welcoming Atmosphere',
    description: 'Spotless surroundings paired with warm Pakistani hospitality that makes you feel right at home.'
  }
];
