import {
  EventDetailsImageSlider,
  GalleryImage,
  ProcessStep,
  Project,
  Step,
  WorkItem,
} from "@/types";
import {
  MapPin,
  Award,
  TrendingUp,
  Users,
  Presentation,
  Sparkles,
} from "lucide-react";

export const navItems = [
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Brand Activations", href: "/events/brand-activations" },
      { name: "Product Launches", href: "/events/product-launches" },
      { name: "Exhibits & Trade Shows", href: "/events/exhibits-trade-shows" },
      { name: "Conferences & Meetings", href: "/events/conferences-meetings" },
      {
        name: "Virtual & Hybrid Events",
        href: "/events/virtual-hybrid-events",
      },
      { name: "Galas", href: "/events/galas" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Custom Fabrication", href: "/services/custom-fabrication" },
      { name: "Audio Visual", href: "/services/audio-visual" },
      { name: "Design & Decor", href: "/services/dd" },
      { name: "Logistics", href: "/services/logistics" },
      { name: "Rentals", href: "/services/rentals" },
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

export const servicesEventsHome = [
  {
    id: "brand-activations",
    name: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/events/brand-activations",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibits & Trade Shows",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    href: "/events/conferences-meetings",
  },
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image: "/services/cf/26.jpeg",
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
    image: "/services/dd/18.jpg",
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
    href: "/events/brand-activations",
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
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Luxury Brand Launch",
    venue: "SoHo House",
    eventType: "Product Launch",
    category: "product-launch",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Annual Charity Gala",
    venue: "Plaza Hotel",
    eventType: "Gala",
    category: "gala",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "4",
    title: "Fortune 500 Meeting",
    venue: "Waldorf Astoria",
    eventType: "Corporate Event",
    category: "corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "5",
    title: "Innovation Expo",
    venue: "Brooklyn Expo Center",
    eventType: "Trade Show",
    category: "trade-show",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "6",
    title: "Virtual Summit Series",
    venue: "Hybrid Platform",
    eventType: "Hybrid Event",
    category: "hybrid",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "7",
    title: "Fashion Week After Party",
    venue: "The Standard Hotel",
    eventType: "Gala",
    category: "gala",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "8",
    title: "Global Tech Conference",
    venue: "Manhattan Convention Center",
    eventType: "Conference",
    category: "conference",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "9",
    title: "Startup Product Demo",
    venue: "WeWork Space",
    eventType: "Product Launch",
    category: "product-launch",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "10",
    title: "Healthcare Industry Expo",
    venue: "Pier 94",
    eventType: "Trade Show",
    category: "trade-show",
    image:
      "https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "11",
    title: "Corporate Retreat",
    venue: "Hudson Valley Resort",
    eventType: "Corporate Event",
    category: "corporate",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    href: "/work/work-details",
  },
  {
    id: "12",
    title: "International Webinar",
    venue: "Virtual + NYC Studio",
    eventType: "Hybrid Event",
    category: "hybrid",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    href: "/work/work-details",
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

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Tech Innovations Inc",
    role: "VP of Marketing",
    quote:
      "MMEink transformed our annual conference into an unforgettable experience. Their attention to detail and creative vision exceeded all expectations.",
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Global Finance Corp",
    role: "Event Director",
    quote:
      "Professional, reliable, and incredibly creative. They handled every aspect of our product launch flawlessly from start to finish.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "Fashion Forward",
    role: "Brand Manager",
    quote:
      "Working with MMEink was seamless. They understood our vision and brought it to life with precision and style.",
  },
  {
    id: "4",
    name: "David Thompson",
    company: "Horizon Ventures",
    role: "CEO",
    quote:
      "Their expertise and dedication made our corporate gala a tremendous success. Highly recommend for any high-profile event.",
  },
  {
    id: "5",
    name: "Lisa Park",
    company: "Creative Studios",
    role: "Operations Manager",
    quote:
      "From planning to execution, MMEink delivered excellence at every stage. Our clients were thoroughly impressed.",
  },
  {
    id: "6",
    name: "James Wilson",
    company: "Summit Group",
    role: "Director of Events",
    quote:
      "Outstanding service and impeccable execution. They made our trade show booth the highlight of the entire conference.",
  },
];

export const featuredSlides: EventDetailsImageSlider[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
    alt: "Conference Setup",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80",
    alt: "Event Production",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1600&q=80",
    alt: "Stage Design",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80",
    alt: "Event Decor",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1600&q=80",
    alt: "Gala Setup",
  },
];

export const RelatedProject = [
  {
    id: "1",
    title: "Spotify Brand Experience",
    category: "Brand Activation",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    href: "/work/spotify-experience",
  },
  {
    id: "2",
    title: "Tech Innovation Summit",
    category: "Corporate | Conferences",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/work/tech-summit",
  },
  {
    id: "3",
    title: "Fashion Week Gala",
    category: "Private Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    href: "/work/fashion-gala",
  },
];

export const EventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Conference Production",
    description:
      "From intimate boardroom meetings to large-scale conferences, we handle every detail of your corporate event. Our team manages staging, AV production, speaker coordination, and attendee experience to ensure your message resonates.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: "2",
    icon: Users,
    headline: "Team Building Experiences",
    description:
      "Strengthen your team dynamics with customized activities and workshops. We design engaging experiences that foster collaboration, boost morale, and create lasting connections among your employees.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product Launches",
    description:
      "Make a memorable first impression with a stunning product launch event. We create buzz-worthy experiences that showcase your innovation and generate excitement among media, influencers, and customers.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Executive Summits",
    description:
      "Facilitate high-level discussions with sophisticated summit experiences. We provide white-glove service for C-suite gatherings, ensuring privacy, professionalism, and impeccable execution.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
];

export const CaseStudiesData = [
  {
    id: "1",
    clientName: "Tech Corp",
    projectTitle: "Annual Innovation Summit 2024",
    challenge:
      "Tech Corp needed to create an immersive experience for 2,000+ attendees at their annual summit, showcasing cutting-edge innovations while maintaining seamless networking opportunities across multiple venues.",
    solution:
      "We designed a multi-stage environment with interactive demo zones, implemented advanced AV systems for hybrid attendance, and created custom networking lounges with smart badge technology for targeted connections.",
    impact:
      "The event achieved 95% attendee satisfaction, generated 40% more qualified leads than previous years, and secured $5M in new partnerships. Post-event engagement increased by 300% through our custom digital platform.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=80",
    ],
  },
];

export const CustomFabricationCaseStudiesData = [
  {
    id: "1",
    clientName: "Estée Lauder",
    projectTitle: "The Estée Edit Experiential Pop-Up",
    challenge:
      "Estée Lauder needed a fully branded pop-up environment to present The Estée Edit collection while engaging guests in a high-traffic setting with limited space and strict brand standards.",
    solution:
      "MMEink designed and fabricated a custom modular pop-up with illuminated branding, integrated screens, and bespoke product displays optimized for guest flow and hands-on interaction.",
    impact:
      "The activation increased guest engagement, encouraged product interaction, and delivered a premium brand experience that supported live demos and strong social sharing.",
    gallery: [
      "/services/cf/case-study/1.JPG",
      "/services/cf/case-study/2.JPG",
      "/services/cf/case-study/3.JPG",
      "/services/cf/case-study/4.JPG",
      "/services/cf/case-study/5.JPG",
      "/services/cf/case-study/6.JPG",
    ],
  },
];

export const BrandActivationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Brand activation event with confetti and crowd",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Conference audience engaged in presentation",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Team building workshop activity",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    alt: "Product launch showcase with lighting",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    alt: "Corporate event networking session",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    alt: "Conference stage with speaker",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Event space setup with tables",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80",
    alt: "Elegant gala dinner setting",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80",
    alt: "Brand booth at trade show",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    alt: "Outdoor brand activation tent",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    alt: "Interactive brand experience booth",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    alt: "Corporate presentation with screens",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    alt: "Event attendees mingling",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80",
    alt: "Stage lighting at corporate event",
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
    alt: "Conference breakout session",
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    alt: "Brand pop-up installation",
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    alt: "Team collaboration at event",
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    alt: "Evening gala with chandelier",
  },
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    alt: "Modern conference venue",
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    alt: "Live music at brand event",
  },
];

export const AudioVisualData = {
  title: "What We Offer",
  subtitle: "Comprehensive Audio Visual Solutions",
  topRow: [
    {
      id: "1",
      title: "Professional Sound Systems",
      image: "/services/cf/gif/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/av/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/av/7.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/cf/gif/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/av/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/cf/gif/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/cf/gif/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/av/2.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/cf/gif/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/av/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/cf/gif/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/av/12.jpg",
      width: "lg" as const,
    },
  ],
};

export const AudioVisualImageGallery = [
  {
    id: "1",
    src: "/services/av/1.jpg",
    alt: "Professional audio visual setup with stage lighting and sound system for corporate event",
  },
  {
    id: "2",
    src: "/services/av/2.jpg",
    alt: "Live event production featuring LED screens, stage lighting, and AV control systems",
  },
  {
    id: "3",
    src: "/services/av/3.jpg",
    alt: "Conference audio visual setup with large projection screens and professional sound",
  },
  {
    id: "4",
    src: "/services/av/4.jpg",
    alt: "Stage lighting design with truss structures and color-changing LED fixtures",
  },
  {
    id: "5",
    src: "/services/av/5.jpg",
    alt: "Audio visual control booth managing sound, lighting, and video for live event",
  },
  {
    id: "6",
    src: "/services/av/6.jpg",
    alt: "Corporate presentation setup with microphones, screens, and professional lighting",
  },
  {
    id: "7",
    src: "/services/av/7.jpg",
    alt: "Event stage with dynamic lighting effects and integrated video displays",
  },
  {
    id: "8",
    src: "/services/av/8.jpg",
    alt: "Live panel discussion supported by professional audio and video equipment",
  },
  {
    id: "9",
    src: "/services/av/9.jpg",
    alt: "Hybrid event production with cameras, lighting, and live streaming setup",
  },
  {
    id: "10",
    src: "/services/av/10.jpg",
    alt: "LED wall installation with synchronized lighting for branded event experience",
  },
  {
    id: "11",
    src: "/services/av/11.jpg",
    alt: "Sound system setup with speakers and mixing console for indoor event",
  },
  {
    id: "12",
    src: "/services/av/12.jpg",
    alt: "Event lighting design highlighting stage and audience areas",
  },
  {
    id: "13",
    src: "/services/av/13.jpg",
    alt: "Professional camera setup for live event recording and streaming",
  },
  {
    id: "14",
    src: "/services/av/14.jpg",
    alt: "Corporate keynote stage with projection screens and theatrical lighting",
  },
  {
    id: "15",
    src: "/services/av/15.jpg",
    alt: "Audio visual equipment setup during event rehearsal and sound check",
  },
  {
    id: "16",
    src: "/services/av/16.jpg",
    alt: "Lighting truss and rigging installation for large-scale event production",
  },
  {
    id: "17",
    src: "/services/av/17.jpg",
    alt: "Event production team managing live audio and video during presentation",
  },
  {
    id: "18",
    src: "/services/av/18.jpg",
    alt: "Stage wash lighting and accent lights creating immersive event atmosphere",
  },
  {
    id: "19",
    src: "/services/av/19.jpg",
    alt: "Multi-camera setup capturing speakers and audience at corporate event",
  },
  {
    id: "20",
    src: "/services/av/20.jpg",
    alt: "Complete audio visual production with lighting, sound, and video integration",
  },
];

export const AudioVisualFAQ = [
  {
    question: "What audio visual services do you provide?",
    answer:
      "We provide full-service audio visual support including sound systems, lighting, video displays, staging, and technical production for corporate and social events.",
  },
  {
    question: "Do you support corporate meetings and conferences?",
    answer:
      "Yes. Our AV team supports meetings, conferences, panels, and presentations with reliable equipment and experienced technical staff.",
  },
  {
    question: "Can you handle hybrid or live-streamed events?",
    answer:
      "Absolutely. We offer live streaming and hybrid event solutions, including cameras, switching, audio mixing, and virtual audience integration.",
  },
  {
    question: "Do you provide on-site technical support during events?",
    answer:
      "Yes. Our technicians manage setup, rehearsals, live operation, and breakdown to ensure smooth and uninterrupted event execution.",
  },
  {
    question: "Can AV solutions be customized to the venue?",
    answer:
      "Yes. We design AV systems tailored to your venue layout, audience size, and event goals for optimal sound, visuals, and lighting.",
  },
  {
    question: "How far in advance should AV services be booked?",
    answer:
      "We recommend booking audio visual services 3–6 weeks in advance, especially for complex or large-scale events.",
  },
];

export const AudioVisualCaseStudiesData = [
  {
    id: "1",
    clientName: "Corporate Client",
    projectTitle: "Executive Conference & Live Presentation",
    challenge:
      "The client required a reliable audio visual setup to support keynote presentations, panel discussions, and video content in a large venue with complex technical requirements.",
    solution:
      "MMEink delivered a fully integrated AV solution including professional sound reinforcement, stage lighting, projection, and on-site technical management to ensure seamless execution.",
    impact:
      "The event ran smoothly with clear audio, strong visuals, and consistent production quality, allowing speakers to present confidently and attendees to stay fully engaged.",
    gallery: [
      "/services/av/1.jpg",
      "/services/av/5.jpg",
      "/services/av/9.jpg",
      "/services/av/14.jpg",
      "/services/av/20.jpg",
    ],
  },
];

export const CustomFabricationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/cf/1.jpg",
    alt: "Custom fabricated vinyl record wall with dimensional logo for branded event installation",
  },
  {
    id: "2",
    src: "/services/cf/2.jpg",
    alt: "Immersive music-themed brand booth with custom guitars and experiential display design",
  },
  {
    id: "3",
    src: "/services/cf/3.jpg",
    alt: "Custom branded cocktail bar installation with signage and premium mixology setup",
  },
  {
    id: "4",
    src: "/services/cf/4.jpg",
    alt: "Luxury outdoor brand activation featuring sculptural mannequin display and greenery",
  },
  {
    id: "5",
    src: "/services/cf/5.jpg",
    alt: "Custom stage backdrop panels with LED uplighting for corporate conference seating",
  },
  {
    id: "6",
    src: "/services/cf/6.jpg",
    alt: "Champagne service wall with custom shelving and greenery for upscale event experience",
  },
  {
    id: "7",
    src: "/services/cf/7.jpg",
    alt: "Custom fabricated bar facade with illuminated marquee lettering for themed event bar",
  },
  {
    id: "8",
    src: "/services/cf/8.jpeg",
    alt: "Branded retail fitting room activation with illuminated mirrors and custom structures",
  },
  {
    id: "9",
    src: "/services/cf/9.jpg",
    alt: "Large-scale custom art wall installation with graphic panels for brand storytelling",
  },
  {
    id: "10",
    src: "/services/cf/10.jpg",
    alt: "Custom event stage design with LED sculptures, banquet seating, and immersive lighting",
  },
  {
    id: "11",
    src: "/services/cf/11.jpg",
    alt: "Luxury tented anniversary event with custom cocktail tables, lighting, and floral backdrop",
  },
  {
    id: "12",
    src: "/services/cf/12.jpg",
    alt: "Banana Republic custom pop-up dessert kiosk with branded signage and display shelving",
  },
  {
    id: "13",
    src: "/services/cf/13.jpg",
    alt: "Tropical Havana Nights themed backdrop with custom lettering and oversized foliage",
  },
  {
    id: "14",
    src: "/services/cf/14.jpg",
    alt: "Custom sports-themed photo backdrop with large-scale graphics and event lighting",
  },
  {
    id: "15",
    src: "/services/cf/15.jpeg",
    alt: "Outdoor immersive brand installation with palm trees, lighting, and ribbon art structure",
  },
  {
    id: "16",
    src: "/services/cf/16.jpg",
    alt: "The Estée Edit beauty brand activation booth with product displays and illuminated signage",
  },
  {
    id: "17",
    src: "/services/cf/17.jpg",
    alt: "Trade show booth fabrication with shelving, seating, and branded wall graphics",
  },
  {
    id: "18",
    src: "/services/cf/18.jpg",
    alt: "Custom branded ice cream cart activation for outdoor corporate event experience",
  },
  {
    id: "19",
    src: "/services/cf/19.jpg",
    alt: "Street-level automotive brand activation with custom kiosk and display platform",
  },
  {
    id: "20",
    src: "/services/cf/20.jpg",
    alt: "Rustic custom wood sign installation for outdoor brand event and experiential marketing",
  },
  {
    id: "21",
    src: "/services/cf/21.jpg",
    alt: "Whimsical indoor set design with custom cabin facades, greenery, and campfire installation",
  },
  {
    id: "22",
    src: "/services/cf/22.jpg",
    alt: "Premium Camus cognac bar setup with custom signage and luxury barware display",
  },
  {
    id: "23",
    src: "/services/cf/23.jpg",
    alt: "Marie Claire MC30 custom kiosk fabrication in workshop prior to brand activation",
  },
  {
    id: "24",
    src: "/services/cf/24.jpg",
    alt: "Womenterprise Summit stage design with custom arches, seating, and branded lighting",
  },
  {
    id: "25",
    src: "/services/cf/25.jpg",
    alt: "Elegant wedding table signage with custom street sign centerpiece and ambient lighting",
  },
  {
    id: "26",
    src: "/services/cf/26.jpeg",
    alt: "Colorful custom candy wall installation with cylindrical containers for guest interaction",
  },
  {
    id: "27",
    src: "/services/cf/27.jpg",
    alt: "Suspended sneaker display installation for immersive retail brand experience",
  },
  {
    id: "28",
    src: "/services/cf/28.jpg",
    alt: "Custom stage platform and truss structure for ASICS brand product launch event",
  },
  {
    id: "29",
    src: "/services/cf/29.JPG",
    alt: "Retail pop-up fitting room installations for Macy’s Tommy Girl brand activation",
  },
  {
    id: "30",
    src: "/services/cf/30.jpg",
    alt: "Interactive tech-driven brand installation with illuminated tunnel and digital interface",
  },
];

export const CustomFabricationData = {
  title: "What We Offer",
  subtitle: "Comprehensive Audio Visual Solutions",
  topRow: [
    {
      id: "1",
      title: "Professional Sound Systems",
      image: "/services/cf/gif/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/cf/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/cf/27.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/cf/gif/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/cf/26.jpeg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/cf/gif/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/cf/gif/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/cf/2.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/cf/gif/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/cf/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/cf/gif/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/cf/12.jpg",
      width: "lg" as const,
    },
  ],
};

export const DesignDecorImageGallery = [
  {
    id: "1",
    src: "/services/dd/1.jpg",
    alt: "Elegant crystal candle centerpieces on modern event dining tables",
  },
  {
    id: "2",
    src: "/services/dd/2.jpg",
    alt: "Modern lounge furniture setup with illuminated cocktail tables",
  },
  {
    id: "3",
    src: "/services/dd/3.jpg",
    alt: "Themed event tablescape with custom signage and warm ambient lighting",
  },
  {
    id: "4",
    src: "/services/dd/4.jpg",
    alt: "Cathedral-style event space with dramatic blue uplighting and banquet seating",
  },
  {
    id: "5",
    src: "/services/dd/5.jpg",
    alt: "Romantic wedding reception decor with floral centerpieces and soft draping",
  },
  {
    id: "6",
    src: "/services/dd/6.jpg",
    alt: "Winter-themed lounge decor with illuminated tables and seasonal accents",
  },
  {
    id: "7",
    src: "/services/dd/7.jpg",
    alt: "Green hedge wall backdrop with event branding and styled seating",
  },
  {
    id: "8",
    src: "/services/dd/8.jpg",
    alt: "Indoor garden-inspired event decor with floral installations and lighting",
  },
  {
    id: "9",
    src: "/services/dd/9.jpg",
    alt: "Upscale indoor café-style seating with umbrellas and bistro tables",
  },
  {
    id: "10",
    src: "/services/dd/10.jpg",
    alt: "Luxury banquet setup with tall floral arrangements and chandeliers",
  },
  {
    id: "11",
    src: "/services/dd/11.jpg",
    alt: "Modern lounge vignette with white seating and ambient accent lighting",
  },
  {
    id: "12",
    src: "/services/dd/12.jpg",
    alt: "Contemporary event space with magenta lighting and modular lounge seating",
  },
  {
    id: "13",
    src: "/services/dd/13.jpg",
    alt: "Floral garden entrance installation with greenery and decorative archways",
  },
  {
    id: "14",
    src: "/services/dd/14.jpg",
    alt: "Grand ballroom reception with warm uplighting and elegant table settings",
  },
  {
    id: "15",
    src: "/services/dd/15.jpg",
    alt: "Modern mirrored wall installation with ambient purple event lighting",
  },
  {
    id: "16",
    src: "/services/dd/16.jpg",
    alt: "Stylish bar and lounge setup with hanging decor and mood lighting",
  },
  {
    id: "17",
    src: "/services/dd/17.jpg",
    alt: "Branded dessert display with floral accents and curated table styling",
  },
  {
    id: "18",
    src: "/services/dd/18.jpg",
    alt: "Tent-style event decor with chandeliers, cocktail tables, and greenery",
  },
  {
    id: "19",
    src: "/services/dd/19.jpg",
    alt: "Long banquet table with floral runner and gold-accented place settings",
  },
  {
    id: "20",
    src: "/services/dd/20.jpg",
    alt: "Colorful candy wall display as part of playful event decor installation",
  },
  {
    id: "21",
    src: "/services/dd/21.jpg",
    alt: "Custom-designed event lounge with soft seating and accent lighting",
  },
  {
    id: "22",
    src: "/services/dd/22.jpg",
    alt: "Luxury event decor featuring layered lighting and modern furniture",
  },
  {
    id: "23",
    src: "/services/dd/23.jpg",
    alt: "Elegant corporate event setup with neutral tones and floral accents",
  },
  {
    id: "24",
    src: "/services/dd/24.jpg",
    alt: "Chic cocktail reception decor with illuminated furniture and bar styling",
  },
  {
    id: "25",
    src: "/services/dd/25.jpg",
    alt: "Romantic event tablescape with candles, florals, and refined linens",
  },
  {
    id: "26",
    src: "/services/dd/26.jpg",
    alt: "Modern event design with clean lines, ambient lighting, and lounge seating",
  },
  {
    id: "27",
    src: "/services/dd/27.jpg",
    alt: "Upscale indoor event decor with custom lighting and contemporary furnishings",
  },
  {
    id: "28",
    src: "/services/dd/28.jpg",
    alt: "Stylish social event environment with coordinated decor and lighting design",
  },
  {
    id: "29",
    src: "/services/dd/29.jpg",
    alt: "Premium event space styling with dramatic lighting and curated furniture",
  },
  {
    id: "30",
    src: "/services/dd/30.jpg",
    alt: "Sophisticated event lounge area designed for guest comfort and flow",
  },
  {
    id: "31",
    src: "/services/dd/31.jpg",
    alt: "Elegant evening event decor with warm lighting and refined finishes",
  },
  {
    id: "32",
    src: "/services/dd/32.jpg",
    alt: "Contemporary event atmosphere created through lighting and decor styling",
  },
  {
    id: "33",
    src: "/services/dd/33.jpg",
    alt: "High-end event design featuring layered textures and ambient illumination",
  },
  {
    id: "34",
    src: "/services/dd/34.jpg",
    alt: "Timeless event decor setup blending modern elements with classic elegance",
  },
];

export const DesignDecorData = {
  title: "What We Offer",
  subtitle: "Comprehensive Design & Decor Solutions",
  topRow: [
    {
      id: "1",
      title: "Professional Sound Systems",
      image: "/services/cf/gif/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/dd/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/dd/27.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/cf/gif/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/dd/26.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/cf/gif/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/cf/gif/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/dd/2.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/cf/gif/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/dd/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/cf/gif/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/dd/12.jpg",
      width: "lg" as const,
    },
  ],
};

export const DesignDecorCaseStudiesData = [
  {
    id: "1",
    clientName: "Friedman and Kaplan",
    projectTitle: "Corporate Halloween Celebration",
    challenge:
      "Friedman & Kaplan sought a Halloween celebration that felt festive and immersive while maintaining a refined, professional atmosphere appropriate for a corporate legal environment.",
    solution:
      "MME developed a custom Halloween design and décor concept using dramatic lighting, themed installations, and tailored styling elements that elevated the space without compromising sophistication.",
    impact:
      "The event delivered a memorable guest experience that encouraged engagement and interaction, reinforcing company culture while maintaining the firm’s polished brand identity.",
    gallery: [
      "/services/dd/case-study/1.jpg",
      "/services/dd/case-study/2.jpg",
      "/services/dd/case-study/3.jpg",
      "/services/dd/case-study/4.jpg",
      "/services/dd/case-study/5.jpg",
      "/services/dd/case-study/6.jpg",
    ],
  },
];

export const DesignAndDecorFAQ = [
  {
    question: "What does your design and décor service include?",
    answer:
      "Our design and décor services include concept development, space styling, furniture selection, lighting design, floral accents, and cohesive visual theming tailored to your event.",
  },
  {
    question: "Do you create custom décor concepts for corporate events?",
    answer:
      "Yes. We design custom décor concepts that align with corporate branding, event objectives, and venue requirements while maintaining a polished, professional aesthetic.",
  },
  {
    question: "Can you handle both small and large-scale events?",
    answer:
      "Absolutely. We design and execute décor for events of all sizes, from intimate gatherings to large-scale corporate celebrations and galas.",
  },
  {
    question: "Do you provide décor for different event types?",
    answer:
      "Yes. Our design and décor services support corporate events, social celebrations, weddings, brand activations, and seasonal or themed events.",
  },
  {
    question: "How early should we start planning event décor?",
    answer:
      "We recommend beginning décor planning 4–6 weeks in advance to allow time for concept development, customization, and seamless execution.",
  },
  {
    question: "Can your team work within an existing venue or theme?",
    answer:
      "Yes. We collaborate closely with clients and venues to enhance existing spaces or themes while ensuring a cohesive and elevated final design.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Consultation",
    description:
      "Understanding your vision to create the perfect event experience",
  },
  {
    number: 2,
    title: "Design & Planning",
    description:
      "Crafting detailed plans and designs tailored to your specific needs",
  },
  {
    number: 3,
    title: "Execution",
    description:
      "Bringing your event to life with precision and professional expertise",
  },
  {
    number: 4,
    title: "Breakdown & Support",
    description:
      "Ensuring seamless teardown and continued support after your event",
  },
];

export const VISIBILITY_CONFIG = {
  canvasOpacity: 0.8,

  particleSize: 3.5,
  particleOpacity: 1,
  particleCount: 80,

  lineOpacity: 0.6,
  lineWidth: 1.5,
  maxConnectionDistance: 140,

  mouseLineOpacity: 0.9,
  mouseLineWidth: 2,
  mouseCursorSize: 5,
  mouseCursorOpacity: 1,
  mouseConnectionDistance: 180,

  gradientOpacity: 0.2,
};

export const CustomFabricationFAQ = [
  {
    question: "What does MMEink offer in custom fabrication?",
    answer:
      "MMEink designs and fabricates custom-built environments including brand activations, pop-ups, kiosks, stages, scenic backdrops, and experiential installations tailored to each client’s vision.",
  },
  {
    question: "Do you handle both design and fabrication?",
    answer:
      "Yes. We provide full-service support from creative design and fabrication to logistics, installation, and on-site execution.",
  },
  {
    question: "What types of events use MMEink custom fabrication?",
    answer:
      "Our custom fabrication supports corporate events, brand activations, retail pop-ups, product launches, conferences, galas, and experiential marketing campaigns.",
  },
  {
    question: "Can MMEink build fully branded and immersive installations?",
    answer:
      "Absolutely. Every fabrication is customized to match your brand guidelines, including colors, materials, logos, lighting, and finishes.",
  },
  {
    question: "Do you fabricate for indoor and outdoor events?",
    answer:
      "Yes. We build custom structures for both indoor and outdoor environments using materials appropriate for durability, safety, and visual impact.",
  },
  {
    question: "How far in advance should I plan a custom fabrication project?",
    answer:
      "We recommend contacting MMEink 4-8 weeks in advance, depending on project scope and complexity.",
  },
];
