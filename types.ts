export type Theme = 'light' | 'dark';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Demo {
  title: string;
  description: string;
  imageUrl?: string;
  notebookUrl: string;
}
