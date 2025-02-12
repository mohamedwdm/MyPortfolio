export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: 'work' | 'education';
}

export interface ProjectItem {
  title: string;
  breif: string;
  image: string;
  tech: string[];
  github: string;
  //live: string;
   details?: {
     descreption?: string;
  //   solution?: string;
  //   features?: string[];
  //   impact?: string;
   };
}