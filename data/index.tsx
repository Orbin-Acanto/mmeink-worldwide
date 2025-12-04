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

export const services = [
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/services/custom-fabrication",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    href: "/services/audio-visual",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/design-decor",
  },
  {
    id: "logistics",
    name: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/services/logistics",
  },
  {
    id: "rentals",
    name: "Rentals",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/services/rentals",
  },
  {
    id: "event-types",
    name: "Event Types",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    href: "/events",
  },
];

export const MarqueWorkItems = [
  {
    id: "nyc-corporate-gala",
    title: "Corporate Leadership Gala & Awards Night",
    location: "New York City",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    href: "/work/nyc-corporate-gala",
  },
  {
    id: "miami-product-launch",
    title: "Luxury Product Launch Experience",
    location: "Miami",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    href: "/work/miami-product-launch",
  },
  {
    id: "la-fashion-show",
    title: "Immersive Fashion Runway Production",
    location: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    href: "/work/la-fashion-show",
  },
  {
    id: "chicago-conference",
    title: "Annual Corporate Innovation Conference",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=80",
    href: "/work/chicago-corporate-conference",
  },
  {
    id: "vegas-tradeshow",
    title: "Experiential Brand Activation at Expo",
    location: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
    href: "/work/vegas-brand-activation",
  },
  {
    id: "paris-gala-dinner",
    title: "Luxury Gala Dinner & Live Performance",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    href: "/work/paris-gala-dinner",
  },
  {
    id: "tokyo-tech-showcase",
    title: "Interactive Technology Showcase Experience",
    location: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
    href: "/work/tokyo-tech-showcase",
  },
  {
    id: "sydney-brand-experience",
    title: "Creative Brand Experience Pop-Up",
    location: "Sydney",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
    href: "/work/sydney-brand-experience",
  },
  {
    id: "london-corporate-gathering",
    title: "Executive Networking & Cocktail Evening",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80",
    href: "/work/london-networking-event",
  },
  {
    id: "dubai-luxury-wedding",
    title: "Luxury Destination Wedding Experience",
    location: "Dubai",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1600&q=80",
    href: "/work/dubai-luxury-wedding",
  },
];

export const clientLogos = [
  { id: "brand-1", name: "Brand One", src: "/client_logo/ (1).webp" },
  { id: "brand-2", name: "Brand Two", src: "/client_logo/ (2).png" },
  { id: "brand-3", name: "Brand Three", src: "/client_logo/ (3).png" },
  { id: "brand-4", name: "Brand Four", src: "/client_logo/ (4).png" },
  { id: "brand-5", name: "Brand Five", src: "/client_logo/ (5).png" },
  { id: "brand-6", name: "Brand Six", src: "/client_logo/ (6).png" },
  { id: "brand-7", name: "Brand Seven", src: "/client_logo/ (7).png" },
  { id: "brand-8", name: "Brand Eight", src: "/client_logo/ (8).png" },
  { id: "brand-9", name: "Brand Nine", src: "/client_logo/ (9).png" },
  { id: "brand-10", name: "Brand Ten", src: "/client_logo/ (10).png" },
  { id: "brand-11", name: "Brand Eleven", src: "/client_logo/ (11).png" },
  { id: "brand-12", name: "Brand Twelve", src: "/client_logo/ (12).png" },
  { id: "brand-13", name: "Brand Thirteen", src: "/client_logo/ (13).png" },
  { id: "brand-14", name: "Brand Fourteen", src: "/client_logo/ (14).png" },
  { id: "brand-15", name: "Brand Fifteen", src: "/client_logo/ (15).png" },
  { id: "brand-16", name: "Brand Sixteen", src: "/client_logo/ (16).png" },
  { id: "brand-17", name: "Brand Seventeen", src: "/client_logo/ (17).png" },
  { id: "brand-18", name: "Brand Eighteen", src: "/client_logo/ (18).png" },
  { id: "brand-19", name: "Brand Nineteen", src: "/client_logo/ (19).png" },
  { id: "brand-20", name: "Brand Twenty", src: "/client_logo/ (20).png" },
  { id: "brand-21", name: "Brand Twenty-One", src: "/client_logo/ (21).png" },
  { id: "brand-22", name: "Brand Twenty-Two", src: "/client_logo/ (22).png" },
  { id: "brand-23", name: "Brand Twenty-Three", src: "/client_logo/ (23).png" },
  { id: "brand-24", name: "Brand Twenty-Four", src: "/client_logo/ (24).png" },
  { id: "brand-25", name: "Brand Twenty-Five", src: "/client_logo/ (25).png" },
  { id: "brand-26", name: "Brand Twenty-Six", src: "/client_logo/ (26).png" },
  { id: "brand-27", name: "Brand Twenty-Seven", src: "/client_logo/ (27).png" },
  { id: "brand-28", name: "Brand Twenty-Eight", src: "/client_logo/ (28).png" },
  { id: "brand-29", name: "Brand Twenty-Nine", src: "/client_logo/ (29).png" },
  { id: "brand-30", name: "Brand Thirty", src: "/client_logo/ (30).png" },
  { id: "brand-31", name: "Brand Thirty-One", src: "/client_logo/ (31).png" },
  { id: "brand-32", name: "Brand Thirty-Two", src: "/client_logo/ (1).png" },
];
