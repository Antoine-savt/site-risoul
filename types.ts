import { LucideIcon } from 'lucide-react';

export interface Amenity {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingSeason {
  name: string;
  period: string;
  price: string;
  features: string[];
}