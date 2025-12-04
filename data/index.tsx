import { WorkItem } from "@/types";
import { Sparkles, Lightbulb, Target } from "lucide-react";

export const navItems = [
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Brand Activations", href: "/events/corporate" },
      { name: "Product Launches", href: "/events/corporate" },
      { name: "Exhibits & Trade Shows", href: "/events/corporate" },
      { name: "Conferences & Meetings", href: "/events/corporate" },
      { name: "Virtual & Hybrid Events", href: "/events/corporate" },
      { name: "Galas", href: "/events/corporate" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Custom Fabrication", href: "/services/production" },
      { name: "Audio Visual", href: "/services/production" },
      { name: "Design & Decor", href: "/services/production" },
      { name: "Logistics", href: "/services/production" },
      { name: "Rentals", href: "/services/production" },
    ],
  },
  { name: "Our Work", href: "/work" },
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

export const stats = [
  {
    id: "projects",
    value: 113,
    label: "Total Projects Completed",
    prefix: "+",
  },
  {
    id: "experience",
    value: 30,
    label: "Years of Experience",
    prefix: "+",
  },
  {
    id: "awards",
    value: 12,
    label: "Design Awards",
    prefix: "+",
  },
];
