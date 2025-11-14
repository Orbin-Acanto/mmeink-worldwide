import { WorkItem } from "@/types";

export const navItems = [
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Conferences & Meetings", href: "/events/corporate" },
      { name: "Custom Fabrication", href: "/events/corporate" },
      { name: "Brand Activations", href: "/events/corporate" },
      { name: "Trade Shows", href: "/events/corporate" },
      { name: "Product Launches", href: "/events/corporate" },
      { name: "Virtual & Hybrid Events", href: "/events/corporate" },
      { name: "Galas", href: "/events/corporate" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Logistics", href: "/services/production" },
      { name: "Design & Decor", href: "/services/production" },
      { name: "Audio Visual", href: "/services/production" },
      { name: "Rentals", href: "/services/production" },
    ],
  },
  { name: "About", href: "/about" },
];

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Newspaper & Magazines",
    category: "Corporate Event",
    image: "/work/Untitled-1.png",
    href: "/work/newspaper-event",
  },
  {
    id: 2,
    title: "Holiday Celebration",
    category: "Festive Experience",
    image: "/work/Untitled-2.png",
    href: "/work/holiday-celebration",
  },
  {
    id: 3,
    title: "Winter Wonderland",
    category: "Seasonal Installation",
    image: "/work/Untitled-3.png",
    href: "/work/winter-wonderland",
  },
  {
    id: 4,
    title: "Michelob Ultra",
    category: "Brand Activation",
    image: "/work/Untitled-4.png",
    href: "/work/michelob-ultra",
  },
];
