export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  venue: string;
  eventType: string;
  category: string;
  image: string;
}
