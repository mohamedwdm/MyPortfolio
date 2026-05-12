export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: 'work' | 'education';
  location?: string;
  badge?: string;
  points?: { title: string; text: string }[];
}

export interface ProjectItem {
  title: string;
  breif: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
   details?: {
     descreption?: string;
  //   solution?: string;
  //   features?: string[];
  //   impact?: string;
   };
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}