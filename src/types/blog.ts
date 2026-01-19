export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTimeMinutes?: number;
  author?: string;
  tags?: string[];
  content?: string[];
}
