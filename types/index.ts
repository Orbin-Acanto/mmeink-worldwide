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
  href: string;
}

export interface Step {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface EventDetailsImageSlider {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
