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
    image: "/gallery/brand-activation/51.jpg",
    href: "/events/brand-activations",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibits & Trade Shows",
    image: "/gallery/trade-shows/3.jpg",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image: "/gallery/conferences/30.jpg",
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
    image: "/services/av/4.jpg",
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
    role: "Owner",
    bio: "Visionary leader with 30 years of experience transforming events into unforgettable experiences.",
    avatar: "/avatar/michael.jpg",
    linkedin: "https://www.linkedin.com/in/michael-tardi-1788672a/",
    email: "mtardi@mmeink.com",
  },
  {
    id: 2,
    name: "Lauren Leuci",
    role: "Director of Sales",
    bio: "Award-winning designer specializing in immersive event experiences and brand activations.",
    avatar: "/avatar/Lauren.png",
    linkedin: "https://www.linkedin.com/in/lauren-leuci-a47075242/",
    email: "lleuci@mmeink.com",
  },
  {
    id: 3,
    name: "Andrew Heaton",
    role: "Director of Operations",
    bio: "Technical expert ensuring flawless execution of complex events with precision and care.",
    avatar: "/avatar/Andy.png",
    linkedin: "#",
    email: "aheaton@mmeink.com",
  },
  {
    id: 4,
    name: "Juan Fuentes",
    role: "Warehouse Manager",
    bio: "Dedicated to building lasting partnerships and exceeding client expectations every time.",
    avatar: "/avatar/2.png",
    linkedin: "#",
    email: "jfuentes@mmeink.com",
  },
  {
    id: 5,
    name: "Desmond Hyatt",
    role: "Director of Events & Production",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: "/avatar/3.png",
    linkedin: "#",
    email: "dhyatt@mmeink.com",
  },
  {
    id: 6,
    name: "Herberto Deleon",
    role: "AV Technician",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: "/avatar/1.png",
    linkedin: "#",
    email: "herberto@mmeink.com",
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
    city: "New York",
    address: "140 Florida St, Farmingdale, NY",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Long Island",
    address: "Premium Event Venue",
    image: "/montauk-point.jpg",
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
    title: "5050 Women on Boards Global Summit",
    venue: "48 Wall St, NYC",
    eventType: "Conference",
    category: "conference",
    image: "/client/5050 Women on Boards/2.jpg",
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Buckley School Non-profit Events",
    venue: "The Artistry Museum",
    eventType: "Non-profit Events",
    category: "non-profit-events",
    image: "/client/Buckley School/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Builders Risk & Constrution",
    venue: "48 Wall St, NYC",
    eventType: "Corporate",
    category: "Corporate Event",
    image: "/client/Builders Risk and Constrution/8.jpg",
    href: "/work/work-details",
  },
  {
    id: "4",
    title: "Carnegie Melon 30th Anniversary Celebration",
    venue: "48 Wall St, NYC",
    eventType: "conference",
    category: "conference",
    image: "/client/Carnegie Melon/1.JPG",
    href: "/work/work-details",
  },
  {
    id: "5",
    title: "DTA Annual Holiday Dinner",
    venue: "60 Pine",
    eventType: "Corporate",
    category: "corporate",
    image: "/client/DTA/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "6",
    title: "F Suite CFO Strategy Summit",
    venue: "Hybrid Platform",
    eventType: "conference",
    category: "conference",
    image: "/client/F Suite/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "7",
    title: "Friedman & Kaplan Holiday Party 2025",
    venue: "Friedman and Kaplan Office",
    eventType: "Holiday Event",
    category: "holiday-event",
    image: "/client/Friedman and Kaplan/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "8",
    title: "Ikebana",
    venue: "60 Pine",
    eventType: "Conference",
    category: "conference",
    image: "/client/Ikebana/2.jpg",
    href: "/work/work-details",
  },
  {
    id: "9",
    title: "International College Reunion 2025",
    venue: "60 Pine",
    eventType: "Reunion Party",
    category: "reunion-party",
    image: "/client/International College Reunion/8.jpg",
    href: "/work/work-details",
  },
  {
    id: "10",
    title: "Maxim Growth Summit 2025",
    venue: "The Venue",
    eventType: "Corporate",
    category: "corporate",
    image: "/client/Maxim Group/5.jpg",
    href: "/work/work-details",
  },
  {
    id: "11",
    title: "Morgan Stanley Gala",
    venue: "The Artistry Museum",
    eventType: "Galas",
    category: "galas",
    image: "/client/Morgan Stanley/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "12",
    title: "Nest+m MASOUERADE Gala",
    venue: "Fidi Banking Hall",
    eventType: "Galas",
    category: "galas",
    image: "/client/Nest_m/9.jpg",
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
    image: "/services/cf/process_1.jpg",
  },
  {
    id: "produce",
    title: "Produce",
    subtitle: "Flawless execution",
    image: "/services/dd/1.jpg",
  },
  {
    id: "deliver",
    title: "Deliver",
    subtitle: "Memorable experiences",
    image: "/services/cf/8.jpeg",
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

// Product Launches Event Data Start
export const ProductLaunchesEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Product Reveal Events",
    description:
      "Create anticipation and excitement with impactful product reveal experiences. We design immersive environments, stage moments, and visual storytelling that highlight your product’s features and value.",
    image: "/gallery/product-launches/4.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Media & Influencer Launches",
    description:
      "Engage media and influencers with visually compelling launch events designed for coverage, content creation, and social sharing. Every detail is crafted to maximize exposure and brand reach.",
    image: "/gallery/product-launches/8.jpg",
  },
  {
    id: "3",
    icon: Presentation,
    headline: "Corporate Product Announcements",
    description:
      "Deliver polished, professional product announcements for internal teams, partners, or clients. We manage staging, AV, and production to ensure your message is clear, confident, and impactful.",
    image: "/gallery/product-launches/17.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Experiential Launch Activations",
    description:
      "Transform your launch into an interactive experience. From hands-on demos to immersive brand environments, we create activations that drive engagement and lasting impressions.",
    image: "/gallery/product-launches/10.jpg",
  },
];

export const ProductLaunchesCaseStudiesData = [
  {
    id: "1",
    clientName: "Adidas",
    projectTitle: "Adidas Experiential Product Launch",
    challenge:
      "Adidas needed a high-impact product launch that could showcase new footwear in an immersive, on-brand environment while engaging guests through interaction, movement, and visual storytelling within a temporary event space.",
    solution:
      "We transformed the venue into a fully branded experiential environment featuring custom fabrication, illuminated product displays, branded courts, interactive stations, and dynamic lighting to reinforce Adidas’ performance-driven identity.",
    impact:
      "The activation delivered strong guest engagement, increased product interaction, and elevated brand visibility. Attendees spent extended time exploring the space, creating social content and leaving with a memorable hands-on brand experience.",
    gallery: [
      "/gallery/product-launches/case-study/1.jpg",
      "/gallery/product-launches/case-study/2.jpg",
      "/gallery/product-launches/case-study/3.jpg",
      "/gallery/product-launches/case-study/4.jpg",
      "/gallery/product-launches/case-study/5.jpg",
      "/gallery/product-launches/case-study/6.jpg",
    ],
  },
];

export const ProductLaunchesImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/product-launches/1.jpg",
    alt: "Immersive product launch event experience",
  },
  {
    id: "2",
    src: "/gallery/product-launches/2.jpg",
    alt: "Branded product reveal with stage lighting",
  },
  {
    id: "3",
    src: "/gallery/product-launches/3.jpg",
    alt: "Corporate product launch presentation stage",
  },
  {
    id: "4",
    src: "/gallery/product-launches/4.jpg",
    alt: "Luxury product unveiling event setup",
  },
  {
    id: "5",
    src: "/gallery/product-launches/5.jpg",
    alt: "Interactive product demonstration area",
  },
  {
    id: "6",
    src: "/gallery/product-launches/6.jpg",
    alt: "Large-scale product launch with LED screens",
  },
  {
    id: "7",
    src: "/gallery/product-launches/7.jpg",
    alt: "Modern product launch stage design",
  },
  {
    id: "8",
    src: "/gallery/product-launches/8.jpg",
    alt: "Product launch event with audience engagement",
  },
  {
    id: "9",
    src: "/gallery/product-launches/9.jpg",
    alt: "High-impact brand reveal at product launch",
  },
  {
    id: "10",
    src: "/gallery/product-launches/10.jpg",
    alt: "Product launch lighting and scenic design",
  },
  {
    id: "11",
    src: "/gallery/product-launches/11.jpg",
    alt: "Executive product announcement event",
  },
  {
    id: "12",
    src: "/gallery/product-launches/12.jpg",
    alt: "Product launch event with custom branding",
  },
  {
    id: "13",
    src: "/gallery/product-launches/13.jpg",
    alt: "Immersive brand storytelling at product launch",
  },
  {
    id: "14",
    src: "/gallery/product-launches/14.jpg",
    alt: "Product launch experience with multimedia displays",
  },
  {
    id: "15",
    src: "/gallery/product-launches/15.jpg",
    alt: "Premium product launch environment design",
  },
  {
    id: "16",
    src: "/gallery/product-launches/16.jpg",
    alt: "Technology-focused product launch presentation",
  },
  {
    id: "17",
    src: "/gallery/product-launches/17.jpg",
    alt: "Product launch event with keynote speaker",
  },
  {
    id: "18",
    src: "/gallery/product-launches/18.jpg",
    alt: "Branded product showcase installation",
  },
  {
    id: "19",
    src: "/gallery/product-launches/19.jpg",
    alt: "Product launch stage with dramatic lighting",
  },
  {
    id: "20",
    src: "/gallery/product-launches/20.jpg",
    alt: "Corporate product launch audience experience",
  },
  {
    id: "21",
    src: "/gallery/product-launches/21.jpg",
    alt: "Product launch activation with custom visuals",
  },
  {
    id: "22",
    src: "/gallery/product-launches/22.jpg",
    alt: "High-end product reveal event production",
  },
  {
    id: "23",
    src: "/gallery/product-launches/23.jpg",
    alt: "Product launch environment with branded elements",
  },
  {
    id: "24",
    src: "/gallery/product-launches/24.jpg",
    alt: "Immersive launch event with experiential design",
  },
  {
    id: "25",
    src: "/gallery/product-launches/25.jpg",
    alt: "Product launch experience with lighting and staging",
  },
  {
    id: "26",
    src: "/gallery/product-launches/26.jpg",
    alt: "Corporate brand product launch event setup",
  },
  {
    id: "27",
    src: "/gallery/product-launches/27.jpg",
    alt: "Large-scale product launch production and staging",
  },
];

export const ProductLaunchesFaqs = [
  {
    question: "What types of product launches do you produce?",
    answer:
      "We produce product launches across technology, consumer goods, beauty, lifestyle, and corporate sectors, delivering experiences tailored to each brand and audience.",
  },
  {
    question: "Do you handle both design and production for launches?",
    answer:
      "Yes. We manage the full product launch process including creative concepting, event design, production, audio visual, staging, and on-site execution.",
  },
  {
    question: "Can product launches be customized to our brand?",
    answer:
      "Absolutely. Every launch is custom-designed to align with your brand identity, messaging, and campaign goals.",
  },
  {
    question: "Do you support media and influencer-focused launches?",
    answer:
      "Yes. We design launches that attract media and influencers, creating visually compelling moments that encourage coverage and social sharing.",
  },
  {
    question: "Can you manage short timelines or last-minute launches?",
    answer:
      "Yes. Our in-house production capabilities allow us to support accelerated timelines based on scope, availability, and technical requirements.",
  },
  {
    question: "Do you produce product launches outside of New York?",
    answer:
      "Yes. We produce product launches nationwide, delivering the same level of quality and execution regardless of location.",
  },
];
// Product Launches Event Data End

// Exhibits & Trade Shows Event Data Start
export const ExhibitsTradeShowsEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Custom Exhibit Design",
    description:
      "We design and build custom trade show exhibits that reflect your brand and attract attention on the show floor. From modular booths to large-scale custom builds, our designs balance visual impact with functionality.",
    image: "/gallery/trade-shows/3.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Trade Show Engagement",
    description:
      "Our exhibits are designed to drive interaction and conversation. We create layouts and experiences that encourage attendee flow, product demonstrations, and meaningful brand engagement.",
    image: "/gallery/trade-shows/5.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product & Brand Showcases",
    description:
      "We help brands showcase products effectively through lighting, displays, and integrated AV. Our team ensures your products remain the focal point while reinforcing your brand identity.",
    image: "/gallery/trade-shows/10.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "End-to-End Show Execution",
    description:
      "From logistics and installation to on-site support and breakdown, we manage every aspect of your trade show presence. Our experienced team ensures a smooth, stress-free execution from load-in to load-out.",
    image: "/gallery/trade-shows/18.jpg",
  },
];

export const ExhibitsTradeShowsCaseStudiesData = [
  {
    id: "1",
    clientName: "Formula E",
    projectTitle: "Brooklyn E-Prix Experience",
    challenge:
      "Formula E required a high-impact event environment that could support racing operations, sponsor visibility, and large crowds in a waterfront urban setting. The experience needed to balance safety, branding, and guest engagement while maintaining seamless flow across multiple activation zones.",
    solution:
      "We delivered a fully integrated event build featuring branded installations, modular structures, lighting, and experiential zones designed for both spectators and partners. Our team managed layout planning, on-site coordination, and technical execution to ensure a cohesive and polished experience throughout the venue.",
    impact:
      "The event successfully engaged thousands of attendees while providing strong brand exposure for sponsors and partners. The environment enhanced the overall race experience, supported smooth event operations, and reinforced Formula E’s presence as a premier global motorsport brand in New York City.",
    gallery: [
      "/gallery/trade-shows/case-study/1.jpg",
      "/gallery/trade-shows/case-study/2.jpg",
      "/gallery/trade-shows/case-study/3.jpg",
      "/gallery/trade-shows/case-study/4.jpg",
      "/gallery/trade-shows/case-study/5.jpg",
      "/gallery/trade-shows/case-study/6.jpg",
      "/gallery/trade-shows/case-study/7.jpg",
      "/gallery/trade-shows/case-study/8.jpg",
    ],
  },
];

export const ExhibitsTradeShowsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/trade-shows/1.jpg",
    alt: "Custom trade show exhibit with branded booth design",
  },
  {
    id: "2",
    src: "/gallery/trade-shows/2.jpg",
    alt: "Modern exhibition booth with integrated lighting and graphics",
  },
  {
    id: "3",
    src: "/gallery/trade-shows/3.jpg",
    alt: "Trade show floor with large-scale branded exhibits",
  },
  {
    id: "4",
    src: "/gallery/trade-shows/4.jpg",
    alt: "Custom exhibit fabrication for corporate trade show",
  },
  {
    id: "5",
    src: "/gallery/trade-shows/5.jpg",
    alt: "Interactive trade show booth attracting attendees",
  },
  {
    id: "7",
    src: "/gallery/trade-shows/7.jpg",
    alt: "Branded trade show display with clean architectural design",
  },
  {
    id: "8",
    src: "/gallery/trade-shows/8.jpg",
    alt: "Trade show exhibit showcasing product demonstrations",
  },
  {
    id: "9",
    src: "/gallery/trade-shows/9.jpg",
    alt: "Exhibition hall with multiple custom-built booths",
  },
  {
    id: "10",
    src: "/gallery/trade-shows/10.jpg",
    alt: "High-impact trade show booth with bold brand graphics",
  },
  {
    id: "11",
    src: "/gallery/trade-shows/11.jpg",
    alt: "Corporate exhibit featuring interactive brand elements",
  },
  {
    id: "12",
    src: "/gallery/trade-shows/12.jpg",
    alt: "Trade show booth with custom counters and signage",
  },
  {
    id: "13",
    src: "/gallery/trade-shows/13.jpg",
    alt: "Exhibit space designed for attendee engagement",
  },
  {
    id: "14",
    src: "/gallery/trade-shows/14.jpg",
    alt: "Large-scale trade show installation with lighting design",
  },
  {
    id: "15",
    src: "/gallery/trade-shows/15.jpg",
    alt: "Minimalist exhibition booth with premium finishes",
  },
  {
    id: "16",
    src: "/gallery/trade-shows/16.jpg",
    alt: "Trade show display highlighting product branding",
  },
  {
    id: "17",
    src: "/gallery/trade-shows/17.jpg",
    alt: "Custom trade show booth designed for networking",
  },
  {
    id: "18",
    src: "/gallery/trade-shows/18.jpg",
    alt: "Exhibit booth with immersive brand experience elements",
  },
  {
    id: "19",
    src: "/gallery/trade-shows/19.jpg",
    alt: "Trade show environment with coordinated booth layout",
  },
  {
    id: "20",
    src: "/gallery/trade-shows/20.jpg",
    alt: "Exhibition booth featuring branded lighting and displays",
  },
  {
    id: "21",
    src: "/gallery/trade-shows/21.jpg",
    alt: "Corporate trade show exhibit with custom fabrication",
  },
  {
    id: "22",
    src: "/gallery/trade-shows/22.jpg",
    alt: "Trade show booth setup prior to event opening",
  },
  {
    id: "23",
    src: "/gallery/trade-shows/23.jpg",
    alt: "Exhibit hall showcasing premium brand activations",
  },
  {
    id: "25",
    src: "/gallery/trade-shows/25.jpg",
    alt: "Custom-built exhibition booth with strong brand presence",
  },
  {
    id: "26",
    src: "/gallery/trade-shows/26.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
];

export const ExhibitsTradeShowsFaqs = [
  {
    question: "What trade show services do you provide?",
    answer:
      "We offer full-service trade show support including booth design, custom fabrication, lighting, AV, branding, logistics, and on-site management.",
  },
  {
    question: "Can you create custom exhibit booths?",
    answer:
      "Yes. We design and fabricate custom booths tailored to your brand, goals, and show requirements, ensuring maximum visual impact and functionality.",
  },
  {
    question: "Do you handle installation and breakdown?",
    answer:
      "Absolutely. Our team manages delivery, installation, on-site support, and post-show dismantling for a seamless experience.",
  },
  {
    question: "Can you work within our trade show guidelines?",
    answer:
      "Yes. We are experienced with venue regulations, union rules, and exhibitor guidelines to ensure full compliance.",
  },
  {
    question: "Do you support multi-city or touring trade shows?",
    answer:
      "We do. Our team can manage exhibits across multiple cities, maintaining consistency and quality at every stop.",
  },
  {
    question: "How far in advance should we start planning?",
    answer:
      "We recommend starting 3–6 months in advance, but we can accommodate shorter timelines based on scope and availability.",
  },
];
// Exhibits & Trade Shows Event Data End

// Brand Activation Event Data Start
export const BrandActivationEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Experiential Brand Activations",
    description:
      "We design immersive brand activations that transform messaging into real-world experiences. From pop-ups to interactive installations, our team brings your brand story to life through thoughtful design, strategic production, and flawless execution.",
    image: "/gallery/brand-activation/7.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Consumer Engagement Experiences",
    description:
      "Create meaningful connections with your audience through interactive, share-worthy experiences. We craft activations that invite participation, encourage social engagement, and leave a lasting impression long after the event ends.",
    image: "/gallery/brand-activation/12.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product Launch Activations",
    description:
      "Launch your product with impact. We produce visually compelling activations that generate buzz, attract media attention, and showcase your product through immersive environments and curated brand moments.",
    image: "/gallery/brand-activation/44.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Corporate Brand Experiences",
    description:
      "Elevate your brand presence with polished, high-impact experiences designed for corporate audiences. From internal brand moments to large-scale activations, we deliver experiences that align with your brand values and business goals.",
    image: "/gallery/brand-activation/36.jpg",
  },
];

export const BrandActivationCaseStudiesData = [
  {
    id: "1",
    clientName: "OpenText",
    projectTitle: "OpenText Summit 2024",
    challenge:
      "OpenText needed a large-scale brand activation that would engage a senior audience while clearly presenting key messages, maintaining strong brand visibility, and supporting multiple presentations within a refined conference environment.",
    solution:
      "We produced a fully branded summit experience featuring custom stage design, large-format LED displays, integrated lighting, and cohesive brand elements that supported keynote sessions, panels, and seamless audience engagement.",
    impact:
      "The activation delivered a polished, immersive experience that elevated brand presence, enhanced audience engagement, and reinforced OpenText’s leadership position through consistent messaging and high-quality production.",
    gallery: [
      "/gallery/brand-activation/case-study/1.jpg",
      "/gallery/brand-activation/case-study/2.jpg",
      "/gallery/brand-activation/case-study/3.jpg",
      "/gallery/brand-activation/case-study/4.jpg",
      "/gallery/brand-activation/case-study/5.jpg",
      "/gallery/brand-activation/case-study/6.jpg",
      "/gallery/brand-activation/case-study/7.jpg",
      "/gallery/brand-activation/case-study/8.jpg",
      "/gallery/brand-activation/case-study/9.jpg",
    ],
  },
];

export const BrandActivationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/brand-activation/1.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "2",
    src: "/gallery/brand-activation/2.jpg",
    alt: "Custom branded event environment",
  },
  {
    id: "3",
    src: "/gallery/brand-activation/3.jpg",
    alt: "Interactive brand showcase installation",
  },
  {
    id: "4",
    src: "/gallery/brand-activation/4.jpg",
    alt: "Live brand engagement experience",
  },
  {
    id: "5",
    src: "/gallery/brand-activation/5.jpg",
    alt: "Experiential marketing event setup",
  },
  {
    id: "6",
    src: "/gallery/brand-activation/6.jpg",
    alt: "Audience interaction at brand activation",
  },
  {
    id: "7",
    src: "/gallery/brand-activation/7.jpg",
    alt: "Creative branded pop-up environment",
  },
  {
    id: "8",
    src: "/gallery/brand-activation/8.jpg",
    alt: "Product-focused brand activation design",
  },
  {
    id: "9",
    src: "/gallery/brand-activation/9.jpg",
    alt: "High-impact experiential brand moment",
  },
  {
    id: "10",
    src: "/gallery/brand-activation/10.jpg",
    alt: "Custom event branding and lighting",
  },

  {
    id: "11",
    src: "/gallery/brand-activation/11.jpg",
    alt: "Interactive brand storytelling experience",
  },
  {
    id: "12",
    src: "/gallery/brand-activation/12.jpg",
    alt: "Corporate brand activation setup",
  },
  {
    id: "13",
    src: "/gallery/brand-activation/13.jpg",
    alt: "Branded experiential marketing space",
  },
  {
    id: "14",
    src: "/gallery/brand-activation/14.jpg",
    alt: "Modern brand engagement event",
  },
  {
    id: "15",
    src: "/gallery/brand-activation/15.jpg",
    alt: "Immersive product launch activation",
  },
  {
    id: "16",
    src: "/gallery/brand-activation/16.jpg",
    alt: "Branded installation with custom decor",
  },
  {
    id: "17",
    src: "/gallery/brand-activation/17.jpg",
    alt: "Consumer-focused brand experience",
  },
  {
    id: "18",
    src: "/gallery/brand-activation/18.jpg",
    alt: "Creative brand activation environment",
  },
  {
    id: "19",
    src: "/gallery/brand-activation/19.jpg",
    alt: "Engaging brand pop-up activation",
  },
  {
    id: "20",
    src: "/gallery/brand-activation/20.jpg",
    alt: "Experiential brand marketing display",
  },

  {
    id: "21",
    src: "/gallery/brand-activation/21.jpg",
    alt: "Branded event space design",
  },
  {
    id: "22",
    src: "/gallery/brand-activation/22.jpg",
    alt: "Interactive brand activation booth",
  },
  {
    id: "23",
    src: "/gallery/brand-activation/23.jpg",
    alt: "Live audience engagement experience",
  },
  {
    id: "24",
    src: "/gallery/brand-activation/24.jpg",
    alt: "Custom experiential brand setup",
  },
  {
    id: "25",
    src: "/gallery/brand-activation/25.jpg",
    alt: "Brand-driven event activation moment",
  },
  {
    id: "26",
    src: "/gallery/brand-activation/26.jpg",
    alt: "Immersive branded event environment",
  },
  {
    id: "27",
    src: "/gallery/brand-activation/27.jpg",
    alt: "High-energy brand activation experience",
  },
  {
    id: "28",
    src: "/gallery/brand-activation/28.jpg",
    alt: "Creative experiential marketing design",
  },
  {
    id: "29",
    src: "/gallery/brand-activation/29.jpg",
    alt: "Custom brand engagement installation",
  },
  {
    id: "30",
    src: "/gallery/brand-activation/30.jpg",
    alt: "Branded interactive event experience",
  },
  {
    id: "32",
    src: "/gallery/brand-activation/32.jpg",
    alt: "Audience-centered brand experience",
  },
  {
    id: "33",
    src: "/gallery/brand-activation/33.jpg",
    alt: "Branded environment with custom lighting",
  },
  {
    id: "34",
    src: "/gallery/brand-activation/34.jpg",
    alt: "Engaging experiential brand moment",
  },
  {
    id: "35",
    src: "/gallery/brand-activation/35.jpg",
    alt: "Brand activation with immersive design",
  },
  {
    id: "36",
    src: "/gallery/brand-activation/36.jpg",
    alt: "Creative branded pop-up experience",
  },
  {
    id: "37",
    src: "/gallery/brand-activation/37.jpg",
    alt: "Experiential event branding execution",
  },
  {
    id: "38",
    src: "/gallery/brand-activation/38.jpg",
    alt: "Live brand engagement activation",
  },
  {
    id: "40",
    src: "/gallery/brand-activation/40.jpg",
    alt: "Branded marketing activation space",
  },

  {
    id: "41",
    src: "/gallery/brand-activation/41.jpg",
    alt: "Immersive brand storytelling environment",
  },
  {
    id: "42",
    src: "/gallery/brand-activation/42.jpg",
    alt: "Creative brand activation concept",
  },
  {
    id: "44",
    src: "/gallery/brand-activation/44.jpg",
    alt: "High-impact brand engagement design",
  },
  {
    id: "45",
    src: "/gallery/brand-activation/45.jpg",
    alt: "Branded experiential event moment",
  },
  {
    id: "46",
    src: "/gallery/brand-activation/46.jpg",
    alt: "Interactive consumer brand activation",
  },
  {
    id: "48",
    src: "/gallery/brand-activation/48.jpg",
    alt: "Creative branded environment design",
  },
  {
    id: "49",
    src: "/gallery/brand-activation/49.jpg",
    alt: "Live experiential brand interaction",
  },
  {
    id: "50",
    src: "/gallery/brand-activation/50.jpg",
    alt: "Custom brand activation experience",
  },

  {
    id: "51",
    src: "/gallery/brand-activation/51.jpg",
    alt: "Immersive experiential brand display",
  },
  {
    id: "52",
    src: "/gallery/brand-activation/52.jpg",
    alt: "Branded event activation execution",
  },
  {
    id: "53",
    src: "/gallery/brand-activation/53.jpg",
    alt: "Audience-driven brand engagement experience",
  },
  {
    id: "54",
    src: "/gallery/brand-activation/54.jpg",
    alt: "Signature experiential brand activation",
  },
];

export const BrandActivationfaqs = [
  {
    question: "What is a brand activation?",
    answer:
      "A brand activation is an experiential marketing initiative designed to engage audiences, build emotional connections, and bring your brand to life through immersive, interactive experiences.",
  },
  {
    question: "What types of brand activations do you produce?",
    answer:
      "We produce pop-ups, product launches, experiential installations, trade show activations, corporate brand experiences, and custom interactive environments.",
  },
  {
    question: "Can you customize the activation to match our brand?",
    answer:
      "Yes. Every activation is fully customized to align with your brand identity, messaging, color palette, and campaign objectives while maintaining brand consistency.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Absolutely. We manage the entire process from concept and design through fabrication, installation, on-site management, and breakdown.",
  },
  {
    question: "Can you support short timelines or last-minute activations?",
    answer:
      "Yes. While advanced planning is ideal, our in-house capabilities allow us to support accelerated timelines based on scope and availability.",
  },
  {
    question: "Do you manage activations outside of New York?",
    answer:
      "Yes. We produce brand activations nationwide, delivering the same level of quality, execution, and attention to detail across all locations.",
  },
];
// Brand Activation Event Data End

// Conference Event Data Start
export const ConferenceEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Conference Production",
    description:
      "As New York City’s number one choice for event production, our full-service event and production team is able to assist you with all of your event needs. Our capabilities are extensive; we offer the very best in: lighting, AV & staging, musical entertainment, custom fabrication, design, and event planning services. Our in-house resources make us your most valued partner when planning your next company holiday party, gala, marketing event, or milestone celebration.",
    image: "/gallery/conferences/6.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Meetings & Conferences",
    description:
      "When planning your next company meeting, summit, fundraiser, or trade show, partner with a team you can trust. With over 20 years of experience, MMEink specializes in corporate meetings and events across New York City, bringing your vision to life while staying mindful of your budget. From venue selection to event design and on-site management, we create programs tailored to your needs. We look forward to collaborating on your next event.",
    image: "/gallery/conferences/18.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Event Planning",
    description:
      "The MMEink event production and management team is a group of experienced and dedicated individuals who dedicate themselves to making the planning and execution of your special event an exciting process. Our team will seamlessly orchestrate your corporate event or meeting from start to finish, allowing you to be involved in the exciting aspects while remaining isolated from the stresses associated with putting on an elaborate affair. From event design to development and on-site coordination, we are devoted to producing an event that will exceed your every expectation.",
    image: "/gallery/conferences/30.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Event Management",
    description:
      "MMEink provides event management services that are delivered with seamless integration and precision. With a full time team of experienced planners and on-site coordinators, we ensure that your event runs smoothly from start to finish. Our team will be with you every step of the way, from the initial event design and planning, to on-site registration, our team will provide you with the right choice in management to effectively plan and execute your next meeting or event.",
    image: "/gallery/conferences/22.jpg",
  },
];

export const ConferenceCaseStudiesData = [
  {
    id: "1",
    clientName: "NYCOMS",
    projectTitle: "NYCOMS Annual Summit 2023",
    challenge:
      "NYCOMS needed a professional conference environment that supported a large audience while ensuring clear sightlines, strong audio, and smooth attendee flow within a historic venue. The event required precise technical execution without disrupting the venue’s architectural character.",
    solution:
      "We designed and delivered a fully integrated conference setup, including large-format screens, optimized sound reinforcement, and dynamic stage lighting. Custom staging, scenic draping, and branded registration areas ensured clarity, cohesion, and seamless transitions throughout the program.",
    impact:
      "The conference was executed flawlessly, delivering a focused and engaging experience for speakers and attendees alike. Clear visuals, consistent audio, and smooth pacing elevated the event’s professionalism and reinforced NYCOMS’ reputation for high-quality programming.",
    gallery: [
      "/gallery/conferences/case-study/1.jpg",
      "/gallery/conferences/case-study/2.jpg",
      "/gallery/conferences/case-study/3.jpg",
      "/gallery/conferences/case-study/4.jpg",
      "/gallery/conferences/case-study/5.jpg",
    ],
  },
];

export const ConferenceImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/conferences/1.jpg",
    alt: "Elegant table setup with floral centerpieces at a conference event",
  },
  {
    id: "2",
    src: "/gallery/conferences/2.jpg",
    alt: "Large conference crowd seated at round tables in an ornate ballroom",
  },
  {
    id: "3",
    src: "/gallery/conferences/3.jpg",
    alt: "Conference stage setup with a giant 'C' logo display and rows of chairs",
  },
  {
    id: "4",
    src: "/gallery/conferences/4.jpg",
    alt: "Conference stage with 'eMarketer attention' display screen and chairs",
  },
  {
    id: "5",
    src: "/gallery/conferences/5.jpg",
    alt: "Drive banner displays in an arched conference venue space",
  },
  {
    id: "6",
    src: "/gallery/conferences/6.jpg",
    alt: "Conference hall with bright lighting and rows of chairs facing a stage",
  },
  {
    id: "7",
    src: "/gallery/conferences/7.jpg",
    alt: "Large conference crowd watching presentations on stage with a heart logo display",
  },
  {
    id: "8",
    src: "/gallery/conferences/8.jpg",
    alt: "Elegant banquet table setup for a conference event dinner",
  },
  {
    id: "9",
    src: "/gallery/conferences/9.jpg",
    alt: "Conference stage with red carpet and 'engagement' logo display",
  },
  {
    id: "10",
    src: "/gallery/conferences/10.jpg",
    alt: "Conference setup with tables, chairs, and colorful lighting under arched ceilings",
  },
  {
    id: "11",
    src: "/gallery/conferences/11.jpg",
    alt: "Welcome sign and tables at a conference check-in area",
  },
  {
    id: "12",
    src: "/gallery/conferences/12.jpg",
    alt: "Overhead view of a conference hall with round tables and a lit up stage",
  },
  {
    id: "13",
    src: "/gallery/conferences/13.jpg",
    alt: "Conference hall with arched ceilings lit up in purple and a large chandelier",
  },
  {
    id: "14",
    src: "/gallery/conferences/14.jpg",
    alt: "Close-up of a 'We Are VML' display at a conference",
  },
  {
    id: "15",
    src: "/gallery/conferences/15.jpg",
    alt: "Banquet tables with candles and a stage with a ParentChild+ logo display",
  },
  {
    id: "16",
    src: "/gallery/conferences/16.jpg",
    alt: "Conference hall setup with round tables and colorful ParentChild+ branding",
  },
  {
    id: "17",
    src: "/gallery/conferences/17.jpg",
    alt: "Conference hall entryway with Success Academy branding",
  },
  {
    id: "18",
    src: "/gallery/conferences/18.jpg",
    alt: "Close-up of a Success Academy logo display on stage at a conference",
  },
  {
    id: "19",
    src: "/gallery/conferences/19.jpg",
    alt: "Wide view of a large conference crowd and stage in an ornate hall",
  },
  {
    id: "20",
    src: "/gallery/conferences/20.jpg",
    alt: "Close-up of an elegant table setting at a conference event",
  },
  {
    id: "21",
    src: "/gallery/conferences/21.jpg",
    alt: "Conference audience seated at round tables in a modern event space",
  },
  {
    id: "22",
    src: "/gallery/conferences/22.jpg",
    alt: "Speaker panel on stage with a giant '50' logo display in the background",
  },
  {
    id: "23",
    src: "/gallery/conferences/23.jpg",
    alt: "Conference stage setup with 'Empowering the Financial World' branding",
  },
  {
    id: "24",
    src: "/gallery/conferences/24.jpg",
    alt: "Wide view of a grand ballroom set up for a conference with rows of chairs",
  },
  {
    id: "25",
    src: "/gallery/conferences/25.jpg",
    alt: "Close-up of a 'nest' branded display on stage at a conference",
  },
  {
    id: "26",
    src: "/gallery/conferences/26.jpg",
    alt: "Conference stage setup with 'Digital Disruption' text and city graphics",
  },
  {
    id: "27",
    src: "/gallery/conferences/27.jpg",
    alt: "Rows of chairs set up facing a stage in a dimly lit conference hall",
  },
  {
    id: "28",
    src: "/gallery/conferences/28.jpg",
    alt: "Conference hall with purple lighting and a stage setup for a panel discussion",
  },
  {
    id: "29",
    src: "/gallery/conferences/29.jpg",
    alt: "Crowded conference audience watching presentations on multiple screens",
  },
  {
    id: "30",
    src: "/gallery/conferences/30.jpg",
    alt: "Rows of black chairs set up in a conference space with a podium on stage",
  },
];

export const ConferenceEventFAQ = [
  {
    question: "What types of conferences do you support?",
    answer:
      "We support corporate conferences, executive meetings, annual summits, panel discussions, and multi-day events across a wide range of industries.",
  },
  {
    question: "Do you manage conferences from planning to execution?",
    answer:
      "Yes. Our team provides end-to-end conference support including planning, logistics, production, audio visual coordination, and on-site management.",
  },
  {
    question: "Can you handle large-scale or multi-day conferences?",
    answer:
      "Absolutely. We manage conferences of all sizes, from single-day meetings to large, multi-day events with complex schedules and multiple sessions.",
  },
  {
    question: "Do you provide audio visual and technical production?",
    answer:
      "Yes. We deliver full audio visual production including sound, lighting, video, staging, and technical support to ensure seamless presentations.",
  },
  {
    question: "Can conferences be customized to match our brand?",
    answer:
      "Yes. We tailor conference design, staging, signage, and attendee experience to align with your brand identity and event objectives.",
  },
  {
    question: "How far in advance should we start planning a conference?",
    answer:
      "We recommend starting conference planning 8-12 weeks in advance to allow time for venue coordination, speaker scheduling, and production planning.",
  },
];
// Conference Event Data End

// Audio Visual Service Data Start
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
// Audio Visual Service Data End

// Custom Fabrication Service Data Start
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
// Custom Fabrication Service Data End

// Design & Decor Service Data Start
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
// Design & Decor Service Data End

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
