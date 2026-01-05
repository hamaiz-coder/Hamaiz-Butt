
import { ImageItem, Orientation } from '../types';

// Helper to generate a consistent set of tags based on category
const getTagsForCategory = (category: string): string[] => {
  const common = ['free', 'stock', 'hd', 'high quality'];
  const mapping: Record<string, string[]> = {
    'nature': ['outdoors', 'landscape', 'environment', 'scenic', 'green'],
    'business': ['office', 'work', 'corporate', 'meeting', 'professional'],
    'technology': ['digital', 'computer', 'future', 'coding', 'innovation'],
    'warehouse-logistics': ['forklift', 'storage', 'shipping', 'delivery', 'supply chain', 'warehouse'],
    'industrial-factory': ['manufacturing', 'machinery', 'production', 'automation', 'factory'],
  };
  return [...(mapping[category] || [category]), ...common];
};

export const fetchImages = async (
  query: string = '',
  category: string = '',
  orientation: Orientation = 'all',
  page: number = 1
): Promise<ImageItem[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const itemsPerPage = 20;
  const images: ImageItem[] = [];

  for (let i = 0; i < itemsPerPage; i++) {
    const seed = `${query}-${category}-${orientation}-${page}-${i}`;
    const id = Math.random().toString(36).substr(2, 9);
    
    // Randomize orientation if 'all' is selected
    const actualOrientation = orientation === 'all' 
      ? (['horizontal', 'vertical', 'square'][Math.floor(Math.random() * 3)] as Orientation)
      : orientation;

    let width = 1200;
    let height = 800;
    if (actualOrientation === 'vertical') { width = 800; height = 1200; }
    if (actualOrientation === 'square') { width = 1000; height = 1000; }

    const activeCategory = category || 'stock';
    
    images.push({
      id,
      title: `${query || activeCategory} Image ${page * itemsPerPage + i}`,
      url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
      thumbnail: `https://picsum.photos/seed/${seed}/400/${Math.floor(height / (width/400))}`,
      author: 'PeterPics Creator',
      width,
      height,
      category: activeCategory,
      tags: getTagsForCategory(activeCategory),
      orientation: actualOrientation as any
    });
  }

  return images;
};

export const getImageById = async (id: string): Promise<ImageItem> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    id,
    title: 'High Resolution Stock Photo',
    url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/2400/1600`,
    thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/400`,
    author: 'Professional Photographer',
    width: 2400,
    height: 1600,
    category: 'Featured',
    tags: ['stock', 'hd', 'quality', 'commercial'],
    orientation: 'horizontal'
  };
};
