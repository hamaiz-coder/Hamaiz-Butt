
import React from 'react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Nature', slug: 'nature', imageUrl: 'https://picsum.photos/seed/nature/400/300' },
  { id: '2', name: 'Business', slug: 'business', imageUrl: 'https://picsum.photos/seed/business/400/300' },
  { id: '3', name: 'Technology', slug: 'technology', imageUrl: 'https://picsum.photos/seed/tech/400/300' },
  { id: '4', name: 'People', slug: 'people', imageUrl: 'https://picsum.photos/seed/people/400/300' },
  { id: '5', name: 'Lifestyle', slug: 'lifestyle', imageUrl: 'https://picsum.photos/seed/life/400/300' },
  { id: '6', name: 'Travel', slug: 'travel', imageUrl: 'https://picsum.photos/seed/travel/400/300' },
  { id: '7', name: 'Food & Drink', slug: 'food-drink', imageUrl: 'https://picsum.photos/seed/food/400/300' },
  { id: '8', name: 'Warehouse & Logistics', slug: 'warehouse-logistics', imageUrl: 'https://picsum.photos/seed/warehouse/400/300' },
  { id: '9', name: 'Industrial & Factory', slug: 'industrial-factory', imageUrl: 'https://picsum.photos/seed/factory/400/300' },
  { id: '10', name: 'Office & Workplace', slug: 'office-workplace', imageUrl: 'https://picsum.photos/seed/office/400/300' },
  { id: '11', name: 'Jobs & Careers', slug: 'jobs-careers', imageUrl: 'https://picsum.photos/seed/jobs/400/300' },
  { id: '12', name: 'Architecture', slug: 'architecture', imageUrl: 'https://picsum.photos/seed/arch/400/300' },
  { id: '13', name: 'Education', slug: 'education', imageUrl: 'https://picsum.photos/seed/edu/400/300' },
  { id: '14', name: 'Health & Fitness', slug: 'health-fitness', imageUrl: 'https://picsum.photos/seed/health/400/300' },
  { id: '15', name: 'Real Estate', slug: 'real-estate', imageUrl: 'https://picsum.photos/seed/estate/400/300' },
  { id: '16', name: 'Transportation', slug: 'transportation', imageUrl: 'https://picsum.photos/seed/transport/400/300' },
  { id: '17', name: 'Backgrounds', slug: 'backgrounds', imageUrl: 'https://picsum.photos/seed/bg/400/300' },
  { id: '18', name: 'Abstract', slug: 'abstract', imageUrl: 'https://picsum.photos/seed/abstract/400/300' },
  { id: '19', name: 'Science', slug: 'science', imageUrl: 'https://picsum.photos/seed/science/400/300' },
  { id: '20', name: 'Minimal', slug: 'minimal', imageUrl: 'https://picsum.photos/seed/minimal/400/300' },
];

export const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M12 20C12 15.5817 15.5817 12 20 12V28C15.5817 28 12 24.4183 12 20Z" fill="currentColor" />
    <rect x="18" y="12" width="10" height="16" rx="2" fill="currentColor" />
  </svg>
);

export const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

export const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);
