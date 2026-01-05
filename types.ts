
export interface ImageItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  author: string;
  width: number;
  height: number;
  category: string;
  tags: string[];
  orientation: 'horizontal' | 'vertical' | 'square';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
}

export type Orientation = 'all' | 'horizontal' | 'vertical' | 'square';
