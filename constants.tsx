import { Wifi, Snowflake, Flame, ParkingSquare, Utensils, Mountain } from 'lucide-react';
import { Amenity, NavItem, PricingSeason, Review } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Le Chalet', href: '#about' },
  { label: 'Avis', href: '#testimonials' },
  { label: 'Réserver', href: '#contact' },
];

export const AMENITIES: Amenity[] = [
  {
    id: 1,
    title: 'Vue Panoramique',
    icon: Mountain,
    description: 'Une vue imprenable sur les sommets enneigés depuis toutes les pièces.',
  },
  {
    id: 2,
    title: 'Cheminée',
    icon: Flame,
    description: 'Grand foyer ouvert pour des soirées chaleureuses au coin du feu.',
  },
  {
    id: 3,
    title: 'Spa & Jacuzzi',
    icon: Snowflake,
    description: 'Espace détente extérieur chauffé, accessible toute l\'année.',
  },
  {
    id: 4,
    title: 'Cuisine Équipée',
    icon: Utensils,
    description: 'Cuisine de chef avec îlot central et équipements haut de gamme.',
  },
  {
    id: 5,
    title: 'Wi-Fi Haut Débit',
    icon: Wifi,
    description: 'Connexion fibre optique idéale pour le télétravail ou le streaming.',
  },
  {
    id: 6,
    title: 'Parking Privé',
    icon: ParkingSquare,
    description: 'Garage chauffé pour 2 véhicules et bornes de recharge électrique.',
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Beatrice N.',
    date: '19 janv. 2025',
    rating: '10/10 Excellent',
    title: 'Superbe week-end entre amis',
    comment: "La maison est très fonctionnelle et très bien équipée. Il ne manque rien !!! Super séjour, nous reviendrons certainement",
    stay: 'janvier 2025'
  },
  {
    id: 2,
    name: 'Gautier T.',
    date: '29 déc. 2024',
    rating: '10/10 Excellent',
    title: 'Agréable séjour cosy',
    comment: "Un magnifique chalet très bien équipé... nous étions 12 personnes et à aucun moment nous nous sommes sentis à l'étroit. La table à manger est pile poil pour 12. La navette gratuite à proximité est un vrai plus.",
    stay: 'décembre 2024'
  },
  {
    id: 3,
    name: 'Mélanie V.',
    date: '13 sept. 2024',
    rating: '10/10 Excellent',
    title: 'Très bon séjour',
    comment: "Ravie de ce séjour ! On s'y sent vite comme chez nous. Les échanges et l'accueil se sont très bien déroulés. La localisation est vraiment très bien. Je recommande !",
    stay: 'août 2024'
  }
];

export const SEASONS: PricingSeason[] = [
  {
    name: 'Basse Saison',
    period: 'Mai - Octobre',
    price: 'À partir de 1200€ / semaine',
    features: ['Accès randonnées', 'VTT & Nature', 'Calme absolu', 'Spa inclus'],
  },
  {
    name: 'Haute Saison Hiver',
    period: 'Décembre - Mars',
    price: 'À partir de 2800€ / semaine',
    features: ['Ski-in / Ski-out', 'Navette gratuite', 'Poêle à granulés', '6 chambres confort'],
  },
  {
    name: 'Vacances Scolaires',
    period: 'Noël / Février',
    price: 'À partir de 4200€ / semaine',
    features: ['Ambiance festive', 'Proximité pistes', 'Idéal 12 pers.', 'Local à ski'],
  },
];