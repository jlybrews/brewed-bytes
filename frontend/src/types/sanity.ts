import { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: SanityImage;
  publishedAt: string;
  author: string;
  categories: string[];
  excerpt?: string;
  body: PortableTextBlock[];
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}