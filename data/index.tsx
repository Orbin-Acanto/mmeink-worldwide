import { Project, Step, WorkItem } from "@/types";
import { MapPin, Award, TrendingUp, Users } from "lucide-react";

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

export const servicesHome = [
  {
    id: "brand-activations",
    name: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/services/brand-activations",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibits & Trade Shows",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    href: "/services/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/conferences-meetings",
  },
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/services/custom-fabrication",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/services/audio-visual",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/design-decor",
  },
];

export const events = [
  {
    id: "brand-activations",
    name: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/services/brand-activations",
  },
  {
    id: "product-launches",
    name: "Product Launches",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    href: "/services/product-launches",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/conferences-meetings",
  },
  {
    id: "Virtual & Hybrid Events",
    name: "virtual-hybrid-events",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/services/custom-fabrication",
  },
  {
    id: "galas",
    name: "Galas",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/services/galas",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibits & Trade Shows",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/exhibits-trade-shows",
  },
];

export const services = [
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/services/custom-fabrication",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
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
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/logistics",
  },
  {
    id: "rentals",
    name: "Rentals",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/services/rentals",
  },
  {
    id: "brand-activations",
    name: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/services/brand-activations",
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

export const team = [
  {
    id: 1,
    name: "Michael Tardi",
    role: "Founder & CEO",
    bio: "Visionary leader with 30 years of experience transforming events into unforgettable experiences.",
    avatar: "https://avatar.iran.liara.run/public/1",
    linkedin: "#",
    email: "michael@mmeink.com",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Creative Director",
    bio: "Award-winning designer specializing in immersive event experiences and brand activations.",
    avatar: "https://avatar.iran.liara.run/public/2",
    linkedin: "#",
    email: "sarah@mmeink.com",
  },
  {
    id: 3,
    name: "James Chen",
    role: "Production Manager",
    bio: "Technical expert ensuring flawless execution of complex events with precision and care.",
    avatar: "https://avatar.iran.liara.run/public/3",
    linkedin: "#",
    email: "james@mmeink.com",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Client Relations",
    bio: "Dedicated to building lasting partnerships and exceeding client expectations every time.",
    avatar: "https://avatar.iran.liara.run/public/4",
    linkedin: "#",
    email: "emily@mmeink.com",
  },
  {
    id: 5,
    name: "David Park",
    role: "Technical Lead",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: "https://avatar.iran.liara.run/public/5",
    linkedin: "#",
    email: "david@mmeink.com",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Operations Director",
    bio: "Logistics mastermind coordinating seamless events from concept to completion.",
    avatar: "https://avatar.iran.liara.run/public/6",
    linkedin: "#",
    email: "lisa@mmeink.com",
  },
];

export const timeline = [
  {
    year: "1995",
    title: "The Beginning",
    description:
      "Founded by Michael Tardi with a vision to revolutionize event production in New York City.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2005",
    title: "Expansion",
    description:
      "Extended operations to Long Island, bringing unforgettable experiences to a wider audience.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    year: "2015",
    title: "Going South",
    description:
      "Opened Miami location, establishing MMEink as a tri-state powerhouse in event production.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "30 Years Strong",
    description:
      "Celebrating three decades of creating unforgettable moments and pushing creative boundaries.",
    icon: <Users className="w-6 h-6" />,
  },
];

export const locations = [
  {
    city: "New York City",
    address: "234 West 39th Street, 10th Floor",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Long Island",
    address: "Premium Event Venue",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Miami",
    address: "Coastal Event Center",
    image:
      "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=2071&auto=format&fit=crop",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Tech Summit 2024",
    venue: "Javits Center, NYC",
    eventType: "Conference",
    category: "conference",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "2",
    title: "Luxury Brand Launch",
    venue: "SoHo House",
    eventType: "Product Launch",
    category: "product-launch",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "3",
    title: "Annual Charity Gala",
    venue: "Plaza Hotel",
    eventType: "Gala",
    category: "gala",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "4",
    title: "Fortune 500 Meeting",
    venue: "Waldorf Astoria",
    eventType: "Corporate Event",
    category: "corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "5",
    title: "Innovation Expo",
    venue: "Brooklyn Expo Center",
    eventType: "Trade Show",
    category: "trade-show",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "6",
    title: "Virtual Summit Series",
    venue: "Hybrid Platform",
    eventType: "Hybrid Event",
    category: "hybrid",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "7",
    title: "Fashion Week After Party",
    venue: "The Standard Hotel",
    eventType: "Gala",
    category: "gala",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "8",
    title: "Global Tech Conference",
    venue: "Manhattan Convention Center",
    eventType: "Conference",
    category: "conference",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "9",
    title: "Startup Product Demo",
    venue: "WeWork Space",
    eventType: "Product Launch",
    category: "product-launch",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "10",
    title: "Healthcare Industry Expo",
    venue: "Pier 94",
    eventType: "Trade Show",
    category: "trade-show",
    image:
      "https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "11",
    title: "Corporate Retreat",
    venue: "Hudson Valley Resort",
    eventType: "Corporate Event",
    category: "corporate",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    href: "/project-details/test",
  },
  {
    id: "12",
    title: "International Webinar",
    venue: "Virtual + NYC Studio",
    eventType: "Hybrid Event",
    category: "hybrid",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    href: "/project-details/test",
  },
];

export const steps: Step[] = [
  {
    id: "discover",
    title: "Discover",
    subtitle: "We listen and strategize",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Creative concepts that wow",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: "produce",
    title: "Produce",
    subtitle: "Flawless execution",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "deliver",
    title: "Deliver",
    subtitle: "Memorable experiences",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
];

export const faqs = [
  {
    question: "What services does MMEink provide?",
    answer:
      "MMEink offers comprehensive event production services including audio-visual solutions, lighting design, stage production, event management, and technical support. We handle everything from corporate conferences to large-scale galas.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 3-6 months in advance for major events. However, we understand that some events come up quickly, and we'll do our best to accommodate shorter timelines based on availability.",
  },
  {
    question:
      "Do you provide equipment rentals only, or full event production?",
    answer:
      "We offer both! You can rent individual equipment pieces, or we can provide complete turnkey event production services including planning, setup, execution, and breakdown. Our team works with you to create a customized solution.",
  },
  {
    question:
      "What makes MMEink different from other event production companies?",
    answer:
      "With 30 years of expertise, in-house capabilities, and 24/7 support, we offer unmatched reliability and quality. Our team handles every detail from concept to completion, ensuring seamless execution for your event.",
  },
  {
    question: "Do you work with events outside of New York?",
    answer:
      "Yes! While we're based in New York, we provide event production services nationwide. Our experienced team travels to deliver the same high-quality service regardless of location.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Our cancellation policy varies depending on the scope and timing of your event. We work with clients to find fair solutions. Contact us directly to discuss specific terms for your event.",
  },
];
