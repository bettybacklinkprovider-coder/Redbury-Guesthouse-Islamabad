export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  bedInfo: string;
  capacity?: string;
  facilities: string[];
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export type GalleryCategory = 
  | 'All' 
  | 'Rooms' 
  | 'Bedrooms' 
  | 'Guesthouse Interior' 
  | 'Exterior' 
  | 'Common Areas' 
  | 'Islamabad / Nearby Views';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  altText: string;
}

export interface BookingInquiry {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomPreference: string;
  message: string;
}

export const REDBURY_INFO = {
  name: "Redbury Guesthouse",
  phone: "+92 333 7279994",
  tel: "tel:+923337279994",
  address: "House No. 13, Street 487, Main Double Road, G-13/1, G-13, Islamabad, 44220, Pakistan",
  shortAddress: "G-13/1, G-13, Islamabad",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=House+No.+13,+Street+487,+Main+Double+Road,+G-13/1,+G-13,+Islamabad,+44220,+Pakistan",
  mapEmbedUrl: "https://maps.google.com/maps?q=33.6421,72.9734&z=15&output=embed"
};
