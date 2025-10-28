export interface Player {
  id: string;
  name: string;
  position: string;
  club: string;
  nationality: string;
  imageUrl: string;
  profileUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  club?: string;
}

export interface ValueProposition {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
