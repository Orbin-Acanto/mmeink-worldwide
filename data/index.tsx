import {
  EventDetailsImageSlider,
  GalleryImage,
  ProcessStep,
  Project,
  Step,
  WorkItem,
  ClientLogo,
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
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Custom Fabrication", href: "/services/custom-fabrication" },
      { name: "Printing", href: "/services/printing" },
      { name: "Audio Visual", href: "/services/audio-visual" },
      { name: "Lighting", href: "/services/lighting" },
      { name: "Staging", href: "/services/staging" },
      { name: "Design & Decor", href: "/services/design-decor" },
      { name: "Themes", href: "/services/themes" },
      { name: "Props", href: "/services/props" },
      { name: "Rentals", href: "/services/rentals" },
      {
        name: "Musical Entertainment",
        href: "/services/musical-entertainment",
      },
      { name: "Entertainment", href: "/services/entertainment" },
      { name: "Logistics", href: "/services/logistics" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Brand Activations", href: "/events/brand-activations" },
      { name: "Product Launches", href: "/events/product-launches" },
      { name: "Exhibitions", href: "/events/exhibits-trade-shows" },
      { name: "Conferences & Meetings", href: "/events/conferences-meetings" },
      { name: "Award Dinners", href: "/events/award-dinners" },
      { name: "Galas", href: "/events/galas" },
      { name: "Corporate Events", href: "/events/corporate-events" },
      { name: "Themed Events", href: "/events/themed-events" },
      { name: "Seasonal Events", href: "/events/seasonal-events" },
      {
        name: "Virtual & Hybrid Events",
        href: "/events/virtual-hybrid-events",
      },
    ],
  },
  { name: "Our Work", href: "/work" },
];

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Newspaper & Magazines",
    category: "Corporate Event",
    image: "/work/projects/Untitled-1.png",
    href: "/work/work-details",
  },
  {
    id: 2,
    title: "Holiday Celebration",
    category: "Festive Experience",
    image: "/work/projects/Untitled-2.png",
    href: "/work/work-details",
  },
  {
    id: 3,
    title: "Winter Wonderland",
    category: "Seasonal Installation",
    image: "/work/projects/Untitled-3.png",
    href: "/work/work-details",
  },
  {
    id: 4,
    title: "Michelob Ultra",
    category: "Brand Activation",
    image: "/work/projects/Untitled-4.png",
    href: "/work/work-details",
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
    image: "/events/brand-activations/gallery/51.jpg",
    href: "/events/brand-activations",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibits & Trade Shows",
    image: "/events/exhibitions/gallery/3.jpg",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image: "/events/conferences-meetings/gallery/30.jpg",
    href: "/events/conferences-meetings",
  },
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image: "/services/custom-fabrication/gallery/26.jpeg",
    href: "/services/custom-fabrication",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image: "/services/audio-visual/gallery/4.jpg",
    href: "/services/audio-visual",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image: "/services/design-decor/gallery/18.jpg",
    href: "/services/design-decor",
  },
];

export const events = [
  {
    id: "brand-activations",
    name: "Brand Activations",
    image: "/events/brand-activations/gallery/51.jpg",
    href: "/events/brand-activations",
  },
  {
    id: "product-launches",
    name: "Product Launches",
    image: "/events/product-launches/gallery/23.jpg",
    href: "/events/product-launches",
  },
  {
    id: "exhibitions",
    name: "Exhibitions",
    image: "/events/exhibitions/gallery/3.jpg",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image: "/events/conferences-meetings/gallery/30.jpg",
    href: "/events/conferences-meetings",
  },
  {
    id: "award-dinners",
    name: "Award Dinners",
    image: "/events/galas/gallery/21.jpg",
    href: "/events/award-dinners",
  },
  {
    id: "galas",
    name: "Galas",
    image: "/events/galas/gallery/13.jpg",
    href: "/events/galas",
  },
  {
    id: "corporate-events",
    name: "Corporate Events",
    image: "/events/conferences-meetings/gallery/12.jpg",
    href: "/events/corporate-events",
  },
  {
    id: "themed-events",
    name: "Themed Events",
    image: "/events/brand-activations/gallery/22.jpg",
    href: "/events/themed-events",
  },
  {
    id: "seasonal-events",
    name: "Seasonal Events",
    image: "/events/galas/gallery/27.jpg",
    href: "/events/seasonal-events",
  },
  {
    id: "virtual-hybrid-events",
    name: "Virtual & Hybrid Events",
    image: "/events/virtual-hybrid-events/gallery/13.jpg",
    href: "/events/virtual-hybrid-events",
  },
];

export const services = [
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image: "/services/custom-fabrication/gallery/26.jpeg",
    href: "/services/custom-fabrication",
  },
  {
    id: "printing",
    name: "Printing",
    image: "/services/custom-fabrication/gallery/12.jpg",
    href: "/services/printing",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image: "/services/audio-visual/gallery/4.jpg",
    href: "/services/audio-visual",
  },
  {
    id: "lighting",
    name: "Lighting",
    image: "/services/audio-visual/gallery/9.jpg",
    href: "/services/lighting",
  },
  {
    id: "staging",
    name: "Staging",
    image: "/services/audio-visual/gallery/13.jpg",
    href: "/services/staging",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image: "/services/design-decor/gallery/18.jpg",
    href: "/services/design-decor",
  },
  {
    id: "themes",
    name: "Themes",
    image: "/services/design-decor/gallery/7.jpg",
    href: "/services/themes",
  },
  {
    id: "props",
    name: "Props",
    image: "/services/design-decor/gallery/14.jpg",
    href: "/services/props",
  },
  {
    id: "rentals",
    name: "Rentals",
    image: "/services/rentals/case-study/2.jpg",
    href: "/services/rentals",
  },
  {
    id: "musical-entertainment",
    name: "Musical Entertainment",
    image: "/events/galas/gallery/9.jpg",
    href: "/services/musical-entertainment",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    image: "/events/brand-activations/gallery/17.jpg",
    href: "/services/entertainment",
  },
  {
    id: "logistics",
    name: "Logistics",
    image: "/services/logistics/gallery/1.jpg",
    href: "/services/logistics",
  },
];

export const clientLogos: ClientLogo[] = [
  {
    id: "50-50-women-on-boards",
    name: "50/50 Women on Boards",
    alt: "50/50 Women on Boards logo, nonprofit advocacy organization and MME Worldwide client",
    src: "/work/client-logos/ (1).webp",
  },
  {
    id: "asics",
    name: "ASICS",
    alt: "ASICS logo, athletic footwear and apparel brand and MME Worldwide client",
    src: "/work/client-logos/ (2).png",
  },
  {
    id: "atandt",
    name: "AT&T",
    alt: "AT&T logo, telecommunications company and MME Worldwide client",
    src: "/work/client-logos/ (3).png",
  },
  {
    id: "aande",
    name: "A&E",
    alt: "A&E logo, television network and MME Worldwide client",
    src: "/work/client-logos/ (4).png",
  },
  {
    id: "the-webby-awards",
    name: "The Webby Awards",
    alt: "The Webby Awards logo, internet awards program and MME Worldwide client",
    src: "/work/client-logos/ (5).png",
  },
  {
    id: "samsung",
    name: "Samsung",
    alt: "Samsung logo, consumer electronics company and MME Worldwide client",
    src: "/work/client-logos/ (6).png",
  },
  {
    id: "antwerp-world-diamond-centre",
    name: "Antwerp World Diamond Centre",
    alt: "Antwerp World Diamond Centre logo, diamond industry organization and MME Worldwide client",
    src: "/work/client-logos/ (7).png",
  },
  {
    id: "emarketer",
    name: "EMARKETER",
    alt: "EMARKETER logo, market research and business intelligence firm and MME Worldwide client",
    src: "/work/client-logos/ (8).png",
  },
  {
    id: "adidas",
    name: "adidas",
    alt: "adidas logo, sportswear brand and MME Worldwide client",
    src: "/work/client-logos/ (9).png",
  },
  {
    id: "gazprom",
    name: "Gazprom",
    alt: "Gazprom logo, energy company and MME Worldwide client",
    src: "/work/client-logos/ (10).png",
  },
  {
    id: "northwell-huntington-hospital",
    name: "Northwell Huntington Hospital",
    alt: "Northwell Huntington Hospital logo, healthcare provider and MME Worldwide client",
    src: "/work/client-logos/ (11).png",
  },
  {
    id: "james-beard-foundation",
    name: "James Beard Foundation",
    alt: "James Beard Foundation logo, culinary nonprofit organization and MME Worldwide client",
    src: "/work/client-logos/ (12).png",
  },
  {
    id: "standard-chartered",
    name: "Standard Chartered",
    alt: "Standard Chartered logo, international bank and MME Worldwide client",
    src: "/work/client-logos/ (13).png",
  },
  {
    id: "ibm",
    name: "IBM",
    alt: "IBM logo, technology company and MME Worldwide client",
    src: "/work/client-logos/ (14).png",
  },
  {
    id: "ocean-drive",
    name: "Ocean Drive",
    alt: "Ocean Drive logo, lifestyle magazine and MME Worldwide client",
    src: "/work/client-logos/ (15).png",
  },
  {
    id: "cond-nast",
    name: "Condé Nast",
    alt: "Condé Nast logo, media and publishing company and MME Worldwide client",
    src: "/work/client-logos/ (16).png",
  },
  {
    id: "google",
    name: "Google",
    alt: "Google logo, technology company and MME Worldwide client",
    src: "/work/client-logos/ (17).png",
  },
  {
    id: "visit-m-xico",
    name: "Visit México",
    alt: "Visit México logo, national tourism board and MME Worldwide client",
    src: "/work/client-logos/ (18).png",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    alt: "Salesforce logo, enterprise software company and MME Worldwide client",
    src: "/work/client-logos/ (19).png",
  },
  {
    id: "ropes-and-gray",
    name: "Ropes & Gray",
    alt: "Ropes & Gray logo, international law firm and MME Worldwide client",
    src: "/work/client-logos/ (20).png",
  },
  {
    id: "clase-azul-m-xico",
    name: "Clase Azul México",
    alt: "Clase Azul México logo, luxury tequila brand and MME Worldwide client",
    src: "/work/client-logos/ (21).png",
  },
  {
    id: "simpson-thacher",
    name: "Simpson Thacher",
    alt: "Simpson Thacher logo, international law firm and MME Worldwide client",
    src: "/work/client-logos/ (22).png",
  },
  {
    id: "the-est-e-lauder-companies",
    name: "The Estée Lauder Companies",
    alt: "The Estée Lauder Companies logo, beauty and cosmetics company and MME Worldwide client",
    src: "/work/client-logos/ (23).png",
  },
  {
    id: "michelob-ultra",
    name: "Michelob Ultra",
    alt: "Michelob Ultra logo, beer brand and MME Worldwide client",
    src: "/work/client-logos/ (24).png",
  },
  {
    id: "rolling-rock",
    name: "Rolling Rock",
    alt: "Rolling Rock logo, beer brand and MME Worldwide client",
    src: "/work/client-logos/ (25).png",
  },
  {
    id: "us-foods",
    name: "US Foods",
    alt: "US Foods logo, foodservice distributor and MME Worldwide client",
    src: "/work/client-logos/ (26).png",
  },
  {
    id: "sweet-n-low",
    name: "Sweet'N Low",
    alt: "Sweet'N Low logo, consumer food brand and MME Worldwide client",
    src: "/work/client-logos/ (27).png",
  },
  {
    id: "opentext",
    name: "OpenText",
    alt: "OpenText logo, enterprise software company and MME Worldwide client",
    src: "/work/client-logos/ (28).png",
  },
  {
    id: "skullcandy",
    name: "Skullcandy",
    alt: "Skullcandy logo, audio products brand and MME Worldwide client",
    src: "/work/client-logos/ (29).png",
  },
  {
    id: "tommy-hilfiger",
    name: "Tommy Hilfiger",
    alt: "Tommy Hilfiger logo, fashion brand and MME Worldwide client",
    src: "/work/client-logos/ (30).png",
  },
  {
    id: "swiss-re",
    name: "Swiss Re",
    alt: "Swiss Re logo, reinsurance company and MME Worldwide client",
    src: "/work/client-logos/ (31).png",
  },
  {
    id: "havas-media",
    name: "Havas Media",
    alt: "Havas Media logo, global media agency and MME Worldwide client",
    src: "/work/client-logos/ (1).png",
  },
];

export const team = [
  {
    id: 1,
    name: "Michael Tardi",
    role: "Owner",
    bio: "Visionary leader with 30 years of experience transforming events into unforgettable experiences.",
    avatar: "/about/team/michael.jpg",
    linkedin: "https://www.linkedin.com/in/michael-tardi-1788672a/",
    email: "mtardi@mmeink.com",
  },
  {
    id: 2,
    name: "Lauren Leuci",
    role: "Director of Events",
    bio: "Award-winning designer specializing in immersive event experiences and brand activations.",
    avatar: "/about/team/Lauren.png",
    linkedin: "https://www.linkedin.com/in/lauren-leuci-a47075242/",
    email: "lleuci@mmeink.com",
  },
  {
    id: 3,
    name: "Andrew Heaton",
    role: "Director of Operations",
    bio: "Technical expert ensuring flawless execution of complex events with precision and care.",
    avatar: "/about/team/Andy.png",
    linkedin: "#",
    email: "aheaton@mmeink.com",
  },
  {
    id: 4,
    name: "Juan Fuentes",
    role: "Director of Events & Production",
    bio: "Dedicated to building lasting partnerships and exceeding client expectations every time.",
    avatar: "/about/team/2.png",
    linkedin: "#",
    email: "apalacio@mmeink.com",
  },
  {
    id: 5,
    name: "Andrea Palacio",
    role: "Manager of Events & Production",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: null,
    linkedin: "#",
    email: "dhyatt@mmeink.com",
  },
  {
    id: 6,
    name: "Herberto Deleon",
    role: "Director of Creative Fabrication",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: "/about/team/1.png",
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
    image: "/about/process/montauk-point.jpg",
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
    image: "/work/clients/5050 Women on Boards/2.jpg",
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Buckley School Non-profit Events",
    venue: "The Artistry Museum",
    eventType: "Non-profit Events",
    category: "non-profit-events",
    image: "/work/clients/Buckley School/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Builders Risk & Constrution",
    venue: "48 Wall St, NYC",
    eventType: "Corporate",
    category: "Corporate Event",
    image: "/work/clients/Builders Risk and Constrution/8.jpg",
    href: "/work/work-details",
  },
  {
    id: "4",
    title: "Carnegie Melon 30th Anniversary Celebration",
    venue: "48 Wall St, NYC",
    eventType: "conference",
    category: "conference",
    image: "/work/clients/Carnegie Melon/1.JPG",
    href: "/work/work-details",
  },
  {
    id: "5",
    title: "DTA Annual Holiday Dinner",
    venue: "60 Pine",
    eventType: "Corporate",
    category: "corporate",
    image: "/work/clients/DTA/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "6",
    title: "F Suite CFO Strategy Summit",
    venue: "Hybrid Platform",
    eventType: "conference",
    category: "conference",
    image: "/work/clients/F Suite/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "7",
    title: "Friedman & Kaplan Holiday Party 2025",
    venue: "Friedman and Kaplan Office",
    eventType: "Holiday Event",
    category: "holiday-event",
    image: "/work/clients/Friedman and Kaplan/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "8",
    title: "Ikebana",
    venue: "60 Pine",
    eventType: "Conference",
    category: "conference",
    image: "/work/clients/Ikebana/2.jpg",
    href: "/work/work-details",
  },
  {
    id: "9",
    title: "International College Reunion 2025",
    venue: "60 Pine",
    eventType: "Reunion Party",
    category: "reunion-party",
    image: "/work/clients/International College Reunion/8.jpg",
    href: "/work/work-details",
  },
  {
    id: "10",
    title: "Maxim Growth Summit 2025",
    venue: "The Venue",
    eventType: "Corporate",
    category: "corporate",
    image: "/work/clients/Maxim Group/5.jpg",
    href: "/work/work-details",
  },
  {
    id: "11",
    title: "Morgan Stanley Gala",
    venue: "The Artistry Museum",
    eventType: "Galas",
    category: "galas",
    image: "/work/clients/Morgan Stanley/1.jpg",
    href: "/work/work-details",
  },
  {
    id: "12",
    title: "Nest+m MASOUERADE Gala",
    venue: "Fidi Banking Hall",
    eventType: "Galas",
    category: "galas",
    image: "/work/clients/Nest_m/9.jpg",
    href: "/work/work-details",
  },
];

export const steps: Step[] = [
  {
    id: "discover",
    title: "Discover",
    subtitle: "We listen and strategize",
    image: "/about/process/discover.png",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Creative concepts that wow",
    image: "/about/process/design.png",
  },
  {
    id: "produce",
    title: "Produce",
    subtitle: "Flawless execution",
    image: "/about/process/produce.png",
  },
  {
    id: "deliver",
    title: "Deliver",
    subtitle: "Memorable experiences",
    image: "/about/process/deliver.png",
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
    name: "Hannah Young",
    quote:
      "An unforgettable wedding experience with a stunning, elegant venue, an exceptionally professional and caring team, and outstanding food and service. Every detail was handled flawlessly, bringing the couple’s vision to life and creating a truly magical day.",
  },
  {
    id: "2",
    name: "Kathleen Agaton",
    quote:
      "An outstanding end-of-year celebration hosted at 48 Wall Street, marked by exceptional service, professionalism, and attention to detail from start to finish. The venue is stunning, the staff attentive and gracious, and the experience created a memorable and meaningful evening that made employees feel truly appreciated. Highly recommended, with hopes to work together again.",
  },
  {
    id: "3",
    name: "Beth Gilchrist",
    quote:
      "A fantastic experience working with Michael, Lauren, and the MMEink team over the past two years. They are highly professional, responsive, creative, and a joy to collaborate with, consistently delivering outstanding events of any size. Strongly recommended, with great enthusiasm for continuing the partnership in the years ahead.",
  },
  {
    id: "4",
    name: "Robert Iodice",
    quote:
      "Michael and team are a godsend. After venue cancelled on me 2 weeks before an event for 160+ people, Michael went out of his way to make it work for us on short notice and at an extremely reasonable price. Not only that but day of he and his team were on top of EVERYTHING. Truly, they are magic. I couldn’t recommend them enough.",
  },
  {
    id: "5",
    name: "Valerie Goldstein",
    quote:
      "A truly magical Bar Mitzvah celebration at the Nassau County Museum of Art, flawlessly executed by the MMEink team. From décor and food to entertainment, every detail was perfectly planned, creating a beautiful and unforgettable event that guests described as one of the best and most fun they’ve attended.",
  },
  {
    id: "6",
    name: "Alex Price",
    quote:
      "A beautifully executed celebration of life held at the Nassau County Museum of Art, made seamless by the MMEink team’s professionalism, flexibility, and thoughtful guidance. From planning the layout, menu, and AV to flawless execution on the day of the event, every detail was handled with care, allowing the family to focus on honoring their loved one and supporting their guests. Feedback on the venue, service, food, and program was overwhelmingly positive.",
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
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Tech Innovation Summit",
    category: "Corporate | Conferences",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Fashion Week Gala",
    category: "Private Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    href: "/work/work-details",
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
    image: "/events/product-launches/gallery/4.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Media & Influencer Launches",
    description:
      "Engage media and influencers with visually compelling launch events designed for coverage, content creation, and social sharing. Every detail is crafted to maximize exposure and brand reach.",
    image: "/events/product-launches/gallery/8.jpg",
  },
  {
    id: "3",
    icon: Presentation,
    headline: "Corporate Product Announcements",
    description:
      "Deliver polished, professional product announcements for internal teams, partners, or clients. We manage staging, AV, and production to ensure your message is clear, confident, and impactful.",
    image: "/events/product-launches/gallery/17.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Experiential Launch Activations",
    description:
      "Transform your launch into an interactive experience. From hands-on demos to immersive brand environments, we create activations that drive engagement and lasting impressions.",
    image: "/events/product-launches/gallery/10.jpg",
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
      "/events/product-launches/case-study/1.jpg",
      "/events/product-launches/case-study/2.jpg",
      "/events/product-launches/case-study/3.jpg",
      "/events/product-launches/case-study/4.jpg",
      "/events/product-launches/case-study/5.jpg",
      "/events/product-launches/case-study/6.jpg",
    ],
  },
];

export const ProductLaunchesImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/product-launches/gallery/1.jpg",
    alt: "Immersive product launch event experience",
  },
  {
    id: "2",
    src: "/events/product-launches/gallery/2.jpg",
    alt: "Branded product reveal with stage lighting",
  },
  {
    id: "3",
    src: "/events/product-launches/gallery/3.jpg",
    alt: "Corporate product launch presentation stage",
  },
  {
    id: "4",
    src: "/events/product-launches/gallery/4.jpg",
    alt: "Luxury product unveiling event setup",
  },
  {
    id: "5",
    src: "/events/product-launches/gallery/5.jpg",
    alt: "Interactive product demonstration area",
  },
  {
    id: "6",
    src: "/events/product-launches/gallery/6.jpg",
    alt: "Large-scale product launch with LED screens",
  },
  {
    id: "7",
    src: "/events/product-launches/gallery/7.jpg",
    alt: "Modern product launch stage design",
  },
  {
    id: "8",
    src: "/events/product-launches/gallery/8.jpg",
    alt: "Product launch event with audience engagement",
  },
  {
    id: "9",
    src: "/events/product-launches/gallery/9.jpg",
    alt: "High-impact brand reveal at product launch",
  },
  {
    id: "10",
    src: "/events/product-launches/gallery/10.jpg",
    alt: "Product launch lighting and scenic design",
  },
  {
    id: "11",
    src: "/events/product-launches/gallery/11.jpg",
    alt: "Executive product announcement event",
  },
  {
    id: "12",
    src: "/events/product-launches/gallery/12.jpg",
    alt: "Product launch event with custom branding",
  },
  {
    id: "13",
    src: "/events/product-launches/gallery/13.jpg",
    alt: "Immersive brand storytelling at product launch",
  },
  {
    id: "14",
    src: "/events/product-launches/gallery/14.jpg",
    alt: "Product launch experience with multimedia displays",
  },
  {
    id: "15",
    src: "/events/product-launches/gallery/15.jpg",
    alt: "Premium product launch environment design",
  },
  {
    id: "16",
    src: "/events/product-launches/gallery/16.jpg",
    alt: "Technology-focused product launch presentation",
  },
  {
    id: "17",
    src: "/events/product-launches/gallery/17.jpg",
    alt: "Product launch event with keynote speaker",
  },
  {
    id: "18",
    src: "/events/product-launches/gallery/18.jpg",
    alt: "Branded product showcase installation",
  },
  {
    id: "19",
    src: "/events/product-launches/gallery/19.jpg",
    alt: "Product launch stage with dramatic lighting",
  },
  {
    id: "20",
    src: "/events/product-launches/gallery/20.jpg",
    alt: "Corporate product launch audience experience",
  },
  {
    id: "21",
    src: "/events/product-launches/gallery/21.jpg",
    alt: "Product launch activation with custom visuals",
  },
  {
    id: "22",
    src: "/events/product-launches/gallery/22.jpg",
    alt: "High-end product reveal event production",
  },
  {
    id: "23",
    src: "/events/product-launches/gallery/23.jpg",
    alt: "Product launch environment with branded elements",
  },
  {
    id: "24",
    src: "/events/product-launches/gallery/24.jpg",
    alt: "Immersive launch event with experiential design",
  },
  {
    id: "25",
    src: "/events/product-launches/gallery/25.jpg",
    alt: "Product launch experience with lighting and staging",
  },
  {
    id: "26",
    src: "/events/product-launches/gallery/26.jpg",
    alt: "Corporate brand product launch event setup",
  },
  {
    id: "27",
    src: "/events/product-launches/gallery/27.jpg",
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
    image: "/events/exhibitions/gallery/3.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Trade Show Engagement",
    description:
      "Our exhibits are designed to drive interaction and conversation. We create layouts and experiences that encourage attendee flow, product demonstrations, and meaningful brand engagement.",
    image: "/events/exhibitions/gallery/5.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product & Brand Showcases",
    description:
      "We help brands showcase products effectively through lighting, displays, and integrated AV. Our team ensures your products remain the focal point while reinforcing your brand identity.",
    image: "/events/exhibitions/gallery/10.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "End-to-End Show Execution",
    description:
      "From logistics and installation to on-site support and breakdown, we manage every aspect of your trade show presence. Our experienced team ensures a smooth, stress-free execution from load-in to load-out.",
    image: "/events/exhibitions/gallery/18.jpg",
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
      "/events/exhibitions/case-study/1.jpg",
      "/events/exhibitions/case-study/2.jpg",
      "/events/exhibitions/case-study/3.jpg",
      "/events/exhibitions/case-study/4.jpg",
      "/events/exhibitions/case-study/5.jpg",
      "/events/exhibitions/case-study/6.jpg",
      "/events/exhibitions/case-study/7.jpg",
      "/events/exhibitions/case-study/8.jpg",
      "/events/exhibitions/case-study/9.jpg",
    ],
  },
];

export const ExhibitsTradeShowsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/exhibitions/gallery/1.jpg",
    alt: "Custom trade show exhibit with branded booth design",
  },
  {
    id: "2",
    src: "/events/exhibitions/gallery/2.jpg",
    alt: "Modern exhibition booth with integrated lighting and graphics",
  },
  {
    id: "3",
    src: "/events/exhibitions/gallery/3.jpg",
    alt: "Trade show floor with large-scale branded exhibits",
  },
  {
    id: "4",
    src: "/events/exhibitions/gallery/4.jpg",
    alt: "Custom exhibit fabrication for corporate trade show",
  },
  {
    id: "5",
    src: "/events/exhibitions/gallery/5.jpg",
    alt: "Interactive trade show booth attracting attendees",
  },
  {
    id: "7",
    src: "/events/exhibitions/gallery/7.jpg",
    alt: "Branded trade show display with clean architectural design",
  },
  {
    id: "8",
    src: "/events/exhibitions/gallery/8.jpg",
    alt: "Trade show exhibit showcasing product demonstrations",
  },
  {
    id: "9",
    src: "/events/exhibitions/gallery/9.jpg",
    alt: "Exhibition hall with multiple custom-built booths",
  },
  {
    id: "10",
    src: "/events/exhibitions/gallery/10.jpg",
    alt: "High-impact trade show booth with bold brand graphics",
  },
  {
    id: "11",
    src: "/events/exhibitions/gallery/11.jpg",
    alt: "Corporate exhibit featuring interactive brand elements",
  },
  {
    id: "12",
    src: "/events/exhibitions/gallery/12.jpg",
    alt: "Trade show booth with custom counters and signage",
  },
  {
    id: "13",
    src: "/events/exhibitions/gallery/13.jpg",
    alt: "Exhibit space designed for attendee engagement",
  },
  {
    id: "14",
    src: "/events/exhibitions/gallery/14.jpg",
    alt: "Large-scale trade show installation with lighting design",
  },
  {
    id: "15",
    src: "/events/exhibitions/gallery/15.jpg",
    alt: "Minimalist exhibition booth with premium finishes",
  },
  {
    id: "16",
    src: "/events/exhibitions/gallery/16.jpg",
    alt: "Trade show display highlighting product branding",
  },
  {
    id: "17",
    src: "/events/exhibitions/gallery/17.jpg",
    alt: "Custom trade show booth designed for networking",
  },
  {
    id: "18",
    src: "/events/exhibitions/gallery/18.jpg",
    alt: "Exhibit booth with immersive brand experience elements",
  },
  {
    id: "19",
    src: "/events/exhibitions/gallery/19.jpg",
    alt: "Trade show environment with coordinated booth layout",
  },
  {
    id: "20",
    src: "/events/exhibitions/gallery/20.jpg",
    alt: "Exhibition booth featuring branded lighting and displays",
  },
  {
    id: "21",
    src: "/events/exhibitions/gallery/21.jpg",
    alt: "Corporate trade show exhibit with custom fabrication",
  },
  {
    id: "22",
    src: "/events/exhibitions/gallery/22.jpg",
    alt: "Trade show booth setup prior to event opening",
  },
  {
    id: "23",
    src: "/events/exhibitions/gallery/23.jpg",
    alt: "Exhibit hall showcasing premium brand activations",
  },
  {
    id: "25",
    src: "/events/exhibitions/gallery/25.jpg",
    alt: "Custom-built exhibition booth with strong brand presence",
  },
  {
    id: "26",
    src: "/events/exhibitions/gallery/26.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },

  {
    id: "27",
    src: "/events/exhibitions/gallery/28.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "28",
    src: "/events/exhibitions/gallery/29.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "29",
    src: "/events/exhibitions/gallery/27.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "30",
    src: "/events/exhibitions/gallery/30.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "31",
    src: "/events/exhibitions/gallery/31.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "32",
    src: "/events/exhibitions/gallery/32.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "33",
    src: "/events/exhibitions/gallery/33.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "34",
    src: "/events/exhibitions/gallery/34.jpg",
    alt: "Trade show exhibit combining design, lighting, and AV",
  },
  {
    id: "35",
    src: "/events/exhibitions/gallery/35.jpg",
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
      "We recommend starting 3 to 6 months in advance, but we can accommodate shorter timelines based on scope and availability.",
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
    image: "/events/brand-activations/gallery/7.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Consumer Engagement Experiences",
    description:
      "Create meaningful connections with your audience through interactive, share-worthy experiences. We craft activations that invite participation, encourage social engagement, and leave a lasting impression long after the event ends.",
    image: "/events/brand-activations/gallery/12.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product Launch Activations",
    description:
      "Launch your product with impact. We produce visually compelling activations that generate buzz, attract media attention, and showcase your product through immersive environments and curated brand moments.",
    image: "/events/brand-activations/gallery/44.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Corporate Brand Experiences",
    description:
      "Elevate your brand presence with polished, high-impact experiences designed for corporate audiences. From internal brand moments to large-scale activations, we deliver experiences that align with your brand values and business goals.",
    image: "/events/brand-activations/gallery/36.jpg",
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
      "/events/brand-activations/case-study/1.jpg",
      "/events/brand-activations/case-study/2.jpg",
      "/events/brand-activations/case-study/3.jpg",
      "/events/brand-activations/case-study/4.jpg",
      "/events/brand-activations/case-study/5.jpg",
      "/events/brand-activations/case-study/6.jpg",
      "/events/brand-activations/case-study/7.jpg",
      "/events/brand-activations/case-study/8.jpg",
      "/events/brand-activations/case-study/9.jpg",
    ],
  },
];

export const BrandActivationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/brand-activations/gallery/1.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "2",
    src: "/events/brand-activations/gallery/2.jpg",
    alt: "Custom branded event environment",
  },
  {
    id: "3",
    src: "/events/brand-activations/gallery/3.jpg",
    alt: "Interactive brand showcase installation",
  },
  {
    id: "4",
    src: "/events/brand-activations/gallery/4.jpg",
    alt: "Live brand engagement experience",
  },
  {
    id: "5",
    src: "/events/brand-activations/gallery/5.jpg",
    alt: "Experiential marketing event setup",
  },
  {
    id: "6",
    src: "/events/brand-activations/gallery/6.jpg",
    alt: "Audience interaction at brand activation",
  },
  {
    id: "7",
    src: "/events/brand-activations/gallery/7.jpg",
    alt: "Creative branded pop-up environment",
  },
  {
    id: "8",
    src: "/events/brand-activations/gallery/8.jpg",
    alt: "Product-focused brand activation design",
  },
  {
    id: "9",
    src: "/events/brand-activations/gallery/9.jpg",
    alt: "High-impact experiential brand moment",
  },
  {
    id: "10",
    src: "/events/brand-activations/gallery/10.jpg",
    alt: "Custom event branding and lighting",
  },

  {
    id: "11",
    src: "/events/brand-activations/gallery/11.jpg",
    alt: "Interactive brand storytelling experience",
  },
  {
    id: "12",
    src: "/events/brand-activations/gallery/12.jpg",
    alt: "Corporate brand activation setup",
  },
  {
    id: "13",
    src: "/events/brand-activations/gallery/13.jpg",
    alt: "Branded experiential marketing space",
  },
  {
    id: "14",
    src: "/events/brand-activations/gallery/14.jpg",
    alt: "Modern brand engagement event",
  },
  {
    id: "15",
    src: "/events/brand-activations/gallery/15.jpg",
    alt: "Immersive product launch activation",
  },
  {
    id: "16",
    src: "/events/brand-activations/gallery/16.jpg",
    alt: "Branded installation with custom decor",
  },
  {
    id: "17",
    src: "/events/brand-activations/gallery/17.jpg",
    alt: "Consumer-focused brand experience",
  },
  {
    id: "18",
    src: "/events/brand-activations/gallery/18.jpg",
    alt: "Creative brand activation environment",
  },
  {
    id: "19",
    src: "/events/brand-activations/gallery/19.jpg",
    alt: "Engaging brand pop-up activation",
  },
  {
    id: "20",
    src: "/events/brand-activations/gallery/20.jpg",
    alt: "Experiential brand marketing display",
  },

  {
    id: "21",
    src: "/events/brand-activations/gallery/21.jpg",
    alt: "Branded event space design",
  },
  {
    id: "22",
    src: "/events/brand-activations/gallery/22.jpg",
    alt: "Interactive brand activation booth",
  },
  {
    id: "23",
    src: "/events/brand-activations/gallery/23.jpg",
    alt: "Live audience engagement experience",
  },
  {
    id: "24",
    src: "/events/brand-activations/gallery/24.jpg",
    alt: "Custom experiential brand setup",
  },
  {
    id: "25",
    src: "/events/brand-activations/gallery/25.jpg",
    alt: "Brand-driven event activation moment",
  },
  {
    id: "26",
    src: "/events/brand-activations/gallery/26.jpg",
    alt: "Immersive branded event environment",
  },
  {
    id: "27",
    src: "/events/brand-activations/gallery/27.jpg",
    alt: "High-energy brand activation experience",
  },
  {
    id: "28",
    src: "/events/brand-activations/gallery/28.jpg",
    alt: "Creative experiential marketing design",
  },
  {
    id: "29",
    src: "/events/brand-activations/gallery/29.jpg",
    alt: "Custom brand engagement installation",
  },
  {
    id: "30",
    src: "/events/brand-activations/gallery/30.jpg",
    alt: "Branded interactive event experience",
  },
  {
    id: "32",
    src: "/events/brand-activations/gallery/32.jpg",
    alt: "Audience-centered brand experience",
  },
  {
    id: "33",
    src: "/events/brand-activations/gallery/33.jpg",
    alt: "Branded environment with custom lighting",
  },
  {
    id: "34",
    src: "/events/brand-activations/gallery/34.jpg",
    alt: "Engaging experiential brand moment",
  },
  {
    id: "35",
    src: "/events/brand-activations/gallery/35.jpg",
    alt: "Brand activation with immersive design",
  },
  {
    id: "36",
    src: "/events/brand-activations/gallery/36.jpg",
    alt: "Creative branded pop-up experience",
  },
  {
    id: "37",
    src: "/events/brand-activations/gallery/37.jpg",
    alt: "Experiential event branding execution",
  },
  {
    id: "38",
    src: "/events/brand-activations/gallery/38.jpg",
    alt: "Live brand engagement activation",
  },
  {
    id: "40",
    src: "/events/brand-activations/gallery/40.jpg",
    alt: "Branded marketing activation space",
  },

  {
    id: "41",
    src: "/events/brand-activations/gallery/41.jpg",
    alt: "Immersive brand storytelling environment",
  },
  {
    id: "42",
    src: "/events/brand-activations/gallery/42.jpg",
    alt: "Creative brand activation concept",
  },
  {
    id: "44",
    src: "/events/brand-activations/gallery/44.jpg",
    alt: "High-impact brand engagement design",
  },
  {
    id: "45",
    src: "/events/brand-activations/gallery/45.jpg",
    alt: "Branded experiential event moment",
  },
  {
    id: "46",
    src: "/events/brand-activations/gallery/46.jpg",
    alt: "Interactive consumer brand activation",
  },
  {
    id: "48",
    src: "/events/brand-activations/gallery/48.jpg",
    alt: "Creative branded environment design",
  },
  {
    id: "49",
    src: "/events/brand-activations/gallery/49.jpg",
    alt: "Live experiential brand interaction",
  },
  {
    id: "50",
    src: "/events/brand-activations/gallery/50.jpg",
    alt: "Custom brand activation experience",
  },

  {
    id: "51",
    src: "/events/brand-activations/gallery/51.jpg",
    alt: "Immersive experiential brand display",
  },
  {
    id: "52",
    src: "/events/brand-activations/gallery/52.jpg",
    alt: "Branded event activation execution",
  },
  {
    id: "53",
    src: "/events/brand-activations/gallery/53.jpg",
    alt: "Audience-driven brand engagement experience",
  },
  {
    id: "54",
    src: "/events/brand-activations/gallery/54.jpg",
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

// Gala Event Data Start
export const GalasEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Black-Tie Galas",
    description:
      "We produce sophisticated black-tie galas with thoughtful design, elevated décor, and seamless production. From lighting and staging to guest flow and ambiance, every detail is crafted to reflect elegance and prestige.",
    image: "/events/galas/gallery/22.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Fundraising & Benefit Events",
    description:
      "Our team designs and executes fundraising galas that inspire generosity while maintaining a refined guest experience. We balance storytelling, donor engagement, and production excellence to support your cause.",
    image: "/events/galas/gallery/21.jpg",
  },
  {
    id: "3",
    icon: Presentation,
    headline: "Awards & Recognition Nights",
    description:
      "Celebrate achievements with polished award ceremonies and recognition events. We manage staging, lighting, audio-visuals, and run-of-show to ensure a smooth, memorable evening.",
    image: "/events/galas/gallery/8.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Private Celebrations",
    description:
      "From milestone celebrations to invitation-only evenings, we create intimate yet impactful gala experiences. Our approach blends custom design with flawless execution for truly unforgettable events.",
    image: "/events/galas/gallery/17.jpg",
  },
];

export const GalasCaseStudiesData = [
  {
    id: "1",
    clientName: "FPM (Fellows of Politecnico di Milano)",
    projectTitle: "FPM Annual Corporate Gala",
    challenge:
      "FPM required an elegant corporate gala that reflected its global academic prestige while accommodating a large guest list, formal programming, sponsor visibility, and a refined guest experience within a historic New York City venue.",
    solution:
      "We delivered a fully produced gala experience featuring custom stage design, branded LED screens, architectural lighting, elegant table layouts, and seamless AV integration to support speeches, dining, and sponsor recognition throughout the evening.",
    impact:
      "The gala achieved a polished, immersive atmosphere that elevated brand presence, enhanced guest engagement, and reinforced FPM’s institutional identity, resulting in a memorable evening that balanced sophistication, storytelling, and flawless execution.",
    gallery: [
      "/events/galas/case-study/1.jpg",
      "/events/galas/case-study/2.jpg",
      "/events/galas/case-study/3.jpg",
      "/events/galas/case-study/4.jpg",
      "/events/galas/case-study/5.jpg",
      "/events/galas/case-study/6.jpg",
      "/events/galas/case-study/7.jpg",
      "/events/galas/case-study/8.jpg",
      "/events/galas/case-study/9.jpg",
      "/events/galas/case-study/10.jpg",
      "/events/galas/case-study/11.jpg",
    ],
  },
];

export const GalasImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/galas/gallery/1.jpg",
    alt: "Elegant private gala with formal table settings and ambient lighting",
  },
  {
    id: "2",
    src: "/events/galas/gallery/2.jpg",
    alt: "Black-tie gala event with dramatic lighting and décor",
  },
  {
    id: "3",
    src: "/events/galas/gallery/3.jpg",
    alt: "Luxury gala dinner setup with candlelit tables",
  },
  {
    id: "4",
    src: "/events/galas/gallery/4.jpg",
    alt: "Formal gala reception with sophisticated floral arrangements",
  },
  {
    id: "5",
    src: "/events/galas/gallery/5.jpg",
    alt: "Upscale gala event featuring elegant stage and lighting design",
  },
  {
    id: "6",
    src: "/events/galas/gallery/6.jpg",
    alt: "Grand ballroom gala with chandeliers and refined décor",
  },
  {
    id: "7",
    src: "/events/galas/gallery/7.jpg",
    alt: "Private gala celebration with immersive lighting ambiance",
  },
  {
    id: "8",
    src: "/events/galas/gallery/8.jpg",
    alt: "Luxury gala event with custom tablescapes and linens",
  },
  {
    id: "9",
    src: "/events/galas/gallery/9.jpg",
    alt: "Formal gala dinner with stage presentation and seating",
  },
  {
    id: "10",
    src: "/events/galas/gallery/10.jpg",
    alt: "Evening gala event with elegant uplighting and décor accents",
  },
  {
    id: "11",
    src: "/events/galas/gallery/11.jpg",
    alt: "High-end gala reception with refined event styling",
  },
  {
    id: "12",
    src: "/events/galas/gallery/12.jpg",
    alt: "Black-tie gala featuring luxurious event design",
  },
  {
    id: "13",
    src: "/events/galas/gallery/13.jpg",
    alt: "Formal gala environment with dramatic lighting effects",
  },
  {
    id: "14",
    src: "/events/galas/gallery/14.jpg",
    alt: "Elegant gala dinner showcasing premium event décor",
  },
  {
    id: "15",
    src: "/events/galas/gallery/15.jpg",
    alt: "Private gala event with polished table décor and lighting",
  },
  {
    id: "16",
    src: "/events/galas/gallery/16.jpg",
    alt: "Sophisticated gala setting designed for formal celebrations",
  },
  {
    id: "17",
    src: "/events/galas/gallery/17.jpg",
    alt: "Luxury gala night with ambient lighting and elegant finishes",
  },
  {
    id: "18",
    src: "/events/galas/gallery/18.jpg",
    alt: "Grand gala event featuring elevated décor and staging",
  },
  {
    id: "19",
    src: "/events/galas/gallery/19.jpg",
    alt: "Formal gala reception with refined lighting design",
  },
  {
    id: "20",
    src: "/events/galas/gallery/20.jpg",
    alt: "Elegant gala celebration with custom event styling",
  },
  {
    id: "21",
    src: "/events/galas/gallery/21.jpg",
    alt: "Black-tie gala environment with immersive atmosphere",
  },
  {
    id: "22",
    src: "/events/galas/gallery/22.jpg",
    alt: "Luxury gala event featuring premium décor elements",
  },
  {
    id: "23",
    src: "/events/galas/gallery/23.jpg",
    alt: "Sophisticated gala setup with coordinated lighting and décor",
  },
  {
    id: "24",
    src: "/events/galas/gallery/24.jpg",
    alt: "Formal gala evening with elegant event production",
  },
  {
    id: "25",
    src: "/events/galas/gallery/25.jpg",
    alt: "Private gala celebration showcasing refined design details",
  },
  {
    id: "26",
    src: "/events/galas/gallery/26.jpg",
    alt: "Upscale gala event with dramatic ambiance lighting",
  },
  {
    id: "27",
    src: "/events/galas/gallery/27.jpg",
    alt: "Luxury gala dinner experience with polished presentation",
  },
  {
    id: "28",
    src: "/events/galas/gallery/28.jpg",
    alt: "Formal gala environment designed for high-profile guests",
  },
  {
    id: "29",
    src: "/events/galas/gallery/29.jpg",
    alt: "Elegant gala reception highlighting premium décor and lighting",
  },
  {
    id: "30",
    src: "/events/galas/gallery/30.jpg",
    alt: "Sophisticated private gala with refined event styling",
  },
];

export const Galasfaqs = [
  {
    question: "What types of galas do you produce?",
    answer:
      "We produce private, corporate, and nonprofit galas including black-tie dinners, fundraising events, award ceremonies, and formal celebrations.",
  },
  {
    question: "Can you customize the design and theme of a gala?",
    answer:
      "Yes. Every gala is custom-designed to reflect your vision, brand, and event objectives while maintaining a refined and elegant atmosphere.",
  },
  {
    question: "Do you provide full-service gala production?",
    answer:
      "Absolutely. We manage all aspects of gala production including design, décor, lighting, audio-visual, staging, entertainment coordination, and on-site execution.",
  },
  {
    question: "Can you handle high-profile or VIP guest events?",
    answer:
      "Yes. Our team is experienced in producing events for VIP guests, executives, and high-profile attendees, ensuring discretion, professionalism, and seamless service.",
  },
  {
    question: "How far in advance should a gala be planned?",
    answer:
      "We recommend beginning planning 3 to 6 months in advance to allow time for creative development, vendor coordination, and flawless execution.",
  },
  {
    question: "Do you produce galas outside of New York City?",
    answer:
      "Yes. While we are based in New York City, we produce gala events nationwide and deliver the same level of quality and attention to detail at every location.",
  },
];
// Gala Event Data End

// Virtual and Hybrid Event Data Start
export const VirtualHyrbidEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Virtual Conferences",
    description:
      "We produce fully virtual conferences that deliver clear messaging, seamless streaming, and engaging digital experiences. From keynote sessions to breakout rooms, our team manages production, platforms, and live execution.",
    image: "/events/virtual-hybrid-events/gallery/13.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Hybrid Events",
    description:
      "Connect in-person and remote audiences through thoughtfully designed hybrid events. We integrate live production, streaming technology, and audience engagement tools to ensure a cohesive experience for all attendees.",
    image: "/events/virtual-hybrid-events/gallery/4.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Live Streaming & Broadcasts",
    description:
      "Deliver professional live streams with broadcast-quality video, sound, and lighting. We support product announcements, panels, town halls, and special events with reliable streaming solutions.",
    image: "/events/virtual-hybrid-events/gallery/15.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Digital Engagement Experiences",
    description:
      "Enhance virtual participation with interactive features such as live Q&A, polls, moderated chat, and branded digital environments designed to keep audiences engaged throughout the event.",
    image: "/events/virtual-hybrid-events/gallery/24.jpg",
  },
];

export const VirtualHyrbidCaseStudiesData = [
  {
    id: "1",
    clientName: "OpenText",
    projectTitle: "OpenText Summit 2024",
    challenge:
      "OpenText required a hybrid event that could connect a live executive audience with a global virtual audience while maintaining consistent branding, clear communication, and reliable technical delivery across multiple sessions and formats.",
    solution:
      "We delivered an integrated hybrid production combining live stage design, multi-camera broadcasting, LED displays, and a synchronized virtual platform. In-room presentations were seamlessly aligned with live streaming and interactive virtual tools.",
    impact:
      "The event successfully engaged both in-person and remote audiences with consistent messaging and high production quality. Smooth session transitions and reliable streaming reinforced OpenText’s leadership and delivered a polished global experience.",
    gallery: [
      "/events/virtual-hybrid-events/case-study/1.jpg",
      "/events/virtual-hybrid-events/case-study/2.jpg",
      "/events/virtual-hybrid-events/case-study/3.jpg",
      "/events/virtual-hybrid-events/case-study/4.jpg",
      "/events/virtual-hybrid-events/case-study/5.jpg",
      "/events/virtual-hybrid-events/case-study/6.jpg",
      "/events/virtual-hybrid-events/case-study/7.jpg",
      "/events/virtual-hybrid-events/case-study/8.jpg",
      "/events/virtual-hybrid-events/case-study/9.jpg",
    ],
  },
];

export const VirtualHyrbidImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/virtual-hybrid-events/gallery/1.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "2",
    src: "/events/virtual-hybrid-events/gallery/2.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "3",
    src: "/events/virtual-hybrid-events/gallery/3.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "4",
    src: "/events/virtual-hybrid-events/gallery/4.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "5",
    src: "/events/virtual-hybrid-events/gallery/5.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "6",
    src: "/events/virtual-hybrid-events/gallery/6.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "7",
    src: "/events/virtual-hybrid-events/gallery/7.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "8",
    src: "/events/virtual-hybrid-events/gallery/8.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "9",
    src: "/events/virtual-hybrid-events/gallery/9.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "10",
    src: "/events/virtual-hybrid-events/gallery/10.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "11",
    src: "/events/virtual-hybrid-events/gallery/11.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "12",
    src: "/events/virtual-hybrid-events/gallery/12.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "13",
    src: "/events/virtual-hybrid-events/gallery/13.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "14",
    src: "/events/virtual-hybrid-events/gallery/14.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "15",
    src: "/events/virtual-hybrid-events/gallery/15.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "16",
    src: "/events/virtual-hybrid-events/gallery/16.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "17",
    src: "/events/virtual-hybrid-events/gallery/17.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "18",
    src: "/events/virtual-hybrid-events/gallery/18.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "19",
    src: "/events/virtual-hybrid-events/gallery/19.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "20",
    src: "/events/virtual-hybrid-events/gallery/20.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "21",
    src: "/events/virtual-hybrid-events/gallery/21.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "22",
    src: "/events/virtual-hybrid-events/gallery/22.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "23",
    src: "/events/virtual-hybrid-events/gallery/23.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "24",
    src: "/events/virtual-hybrid-events/gallery/24.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "25",
    src: "/events/virtual-hybrid-events/gallery/25.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "26",
    src: "/events/virtual-hybrid-events/gallery/26.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "27",
    src: "/events/virtual-hybrid-events/gallery/27.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "28",
    src: "/events/virtual-hybrid-events/gallery/28.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "29",
    src: "/events/virtual-hybrid-events/gallery/29.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "30",
    src: "/events/virtual-hybrid-events/gallery/30.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "31",
    src: "/events/virtual-hybrid-events/gallery/31.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "32",
    src: "/events/virtual-hybrid-events/gallery/32.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "33",
    src: "/events/virtual-hybrid-events/gallery/33.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "34",
    src: "/events/virtual-hybrid-events/gallery/34.jpg",
    alt: "Immersive brand activation event experience",
  },
];

export const VirtualHyrbidfaqs = [
  {
    question: "What is the difference between virtual and hybrid events?",
    answer:
      "Virtual events are hosted entirely online, while hybrid events combine an in-person experience with a live virtual component. Hybrid events allow you to engage both on-site and remote audiences simultaneously.",
  },
  {
    question: "What platforms do you support for virtual and hybrid events?",
    answer:
      "We support a wide range of platforms including Zoom, Microsoft Teams, Webex, Vimeo, and custom streaming solutions. Our team helps select and configure the best platform based on your event goals.",
  },
  {
    question: "Can you manage both the technical setup and live production?",
    answer:
      "Yes. We handle full production including live streaming, audio-visual setup, lighting, camera operation, content playback, and real-time technical support for a seamless experience.",
  },
  {
    question: "How do you ensure audience engagement for virtual attendees?",
    answer:
      "We incorporate interactive features such as live Q&A, polls, chat moderation, breakout rooms, and branded digital experiences to keep remote audiences actively engaged.",
  },
  {
    question: "Do you provide recording and post-event content?",
    answer:
      "Absolutely. We offer high-quality event recordings, edited highlight reels, and on-demand playback options so your content continues to deliver value after the event ends.",
  },
  {
    question: "How far in advance should we plan a virtual or hybrid event?",
    answer:
      "We recommend planning at least 4 to 6 weeks in advance for complex events. However, we can accommodate shorter timelines depending on scope and technical requirements.",
  },
];
// Virtual and Hybrid Data End

// Conference Event Data Start
export const ConferenceEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Conference Production",
    description:
      "As New York City’s number one choice for event production, our full-service event and production team is able to assist you with all of your event needs. Our capabilities are extensive; we offer the very best in: lighting, AV & staging, musical entertainment, custom fabrication, design, and event planning services. Our in-house resources make us your most valued partner when planning your next company holiday party, gala, marketing event, or milestone celebration.",
    image: "/events/conferences-meetings/gallery/6.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Meetings & Conferences",
    description:
      "When planning your next company meeting, summit, fundraiser, or trade show, partner with a team you can trust. With over 20 years of experience, MMEink specializes in corporate meetings and events across New York City, bringing your vision to life while staying mindful of your budget. From venue selection to event design and on-site management, we create programs tailored to your needs. We look forward to collaborating on your next event.",
    image: "/events/conferences-meetings/gallery/18.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Event Planning",
    description:
      "The MMEink event production and management team is a group of experienced and dedicated individuals who dedicate themselves to making the planning and execution of your special event an exciting process. Our team will seamlessly orchestrate your corporate event or meeting from start to finish, allowing you to be involved in the exciting aspects while remaining isolated from the stresses associated with putting on an elaborate affair. From event design to development and on-site coordination, we are devoted to producing an event that will exceed your every expectation.",
    image: "/events/conferences-meetings/gallery/30.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Event Management",
    description:
      "MMEink provides event management services that are delivered with seamless integration and precision. With a full time team of experienced planners and on-site coordinators, we ensure that your event runs smoothly from start to finish. Our team will be with you every step of the way, from the initial event design and planning, to on-site registration, our team will provide you with the right choice in management to effectively plan and execute your next meeting or event.",
    image: "/events/conferences-meetings/gallery/22.jpg",
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
      "/events/conferences-meetings/case-study/1.jpg",
      "/events/conferences-meetings/case-study/2.jpg",
      "/events/conferences-meetings/case-study/3.jpg",
      "/events/conferences-meetings/case-study/4.jpg",
      "/events/conferences-meetings/case-study/5.jpg",
    ],
  },
];

export const ConferenceImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/conferences-meetings/gallery/1.jpg",
    alt: "Elegant table setup with floral centerpieces at a conference event",
  },
  {
    id: "2",
    src: "/events/conferences-meetings/gallery/2.jpg",
    alt: "Large conference crowd seated at round tables in an ornate ballroom",
  },
  {
    id: "3",
    src: "/events/conferences-meetings/gallery/3.jpg",
    alt: "Conference stage setup with a giant 'C' logo display and rows of chairs",
  },
  {
    id: "4",
    src: "/events/conferences-meetings/gallery/4.jpg",
    alt: "Conference stage with 'eMarketer attention' display screen and chairs",
  },
  {
    id: "5",
    src: "/events/conferences-meetings/gallery/5.jpg",
    alt: "Drive banner displays in an arched conference venue space",
  },
  {
    id: "6",
    src: "/events/conferences-meetings/gallery/6.jpg",
    alt: "Conference hall with bright lighting and rows of chairs facing a stage",
  },
  {
    id: "7",
    src: "/events/conferences-meetings/gallery/7.jpg",
    alt: "Large conference crowd watching presentations on stage with a heart logo display",
  },
  {
    id: "8",
    src: "/events/conferences-meetings/gallery/8.jpg",
    alt: "Elegant banquet table setup for a conference event dinner",
  },
  {
    id: "9",
    src: "/events/conferences-meetings/gallery/9.jpg",
    alt: "Conference stage with red carpet and 'engagement' logo display",
  },
  {
    id: "10",
    src: "/events/conferences-meetings/gallery/10.jpg",
    alt: "Conference setup with tables, chairs, and colorful lighting under arched ceilings",
  },
  {
    id: "11",
    src: "/events/conferences-meetings/gallery/11.jpg",
    alt: "Welcome sign and tables at a conference check-in area",
  },
  {
    id: "12",
    src: "/events/conferences-meetings/gallery/12.jpg",
    alt: "Overhead view of a conference hall with round tables and a lit up stage",
  },
  {
    id: "13",
    src: "/events/conferences-meetings/gallery/13.jpg",
    alt: "Conference hall with arched ceilings lit up in purple and a large chandelier",
  },
  {
    id: "14",
    src: "/events/conferences-meetings/gallery/14.jpg",
    alt: "Close-up of a 'We Are VML' display at a conference",
  },
  {
    id: "15",
    src: "/events/conferences-meetings/gallery/15.jpg",
    alt: "Banquet tables with candles and a stage with a ParentChild+ logo display",
  },
  {
    id: "16",
    src: "/events/conferences-meetings/gallery/16.jpg",
    alt: "Conference hall setup with round tables and colorful ParentChild+ branding",
  },
  {
    id: "17",
    src: "/events/conferences-meetings/gallery/17.jpg",
    alt: "Conference hall entryway with Success Academy branding",
  },
  {
    id: "18",
    src: "/events/conferences-meetings/gallery/18.jpg",
    alt: "Close-up of a Success Academy logo display on stage at a conference",
  },
  {
    id: "19",
    src: "/events/conferences-meetings/gallery/19.jpg",
    alt: "Wide view of a large conference crowd and stage in an ornate hall",
  },
  {
    id: "20",
    src: "/events/conferences-meetings/gallery/20.jpg",
    alt: "Close-up of an elegant table setting at a conference event",
  },
  {
    id: "21",
    src: "/events/conferences-meetings/gallery/21.jpg",
    alt: "Conference audience seated at round tables in a modern event space",
  },
  {
    id: "22",
    src: "/events/conferences-meetings/gallery/22.jpg",
    alt: "Speaker panel on stage with a giant '50' logo display in the background",
  },
  {
    id: "23",
    src: "/events/conferences-meetings/gallery/23.jpg",
    alt: "Conference stage setup with 'Empowering the Financial World' branding",
  },
  {
    id: "24",
    src: "/events/conferences-meetings/gallery/24.jpg",
    alt: "Wide view of a grand ballroom set up for a conference with rows of chairs",
  },
  {
    id: "25",
    src: "/events/conferences-meetings/gallery/25.jpg",
    alt: "Close-up of a 'nest' branded display on stage at a conference",
  },
  {
    id: "26",
    src: "/events/conferences-meetings/gallery/26.jpg",
    alt: "Conference stage setup with 'Digital Disruption' text and city graphics",
  },
  {
    id: "27",
    src: "/events/conferences-meetings/gallery/27.jpg",
    alt: "Rows of chairs set up facing a stage in a dimly lit conference hall",
  },
  {
    id: "28",
    src: "/events/conferences-meetings/gallery/28.jpg",
    alt: "Conference hall with purple lighting and a stage setup for a panel discussion",
  },
  {
    id: "29",
    src: "/events/conferences-meetings/gallery/29.jpg",
    alt: "Crowded conference audience watching presentations on multiple screens",
  },
  {
    id: "30",
    src: "/events/conferences-meetings/gallery/30.jpg",
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
      image: "/services/custom-fabrication/motion/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/audio-visual/gallery/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/audio-visual/gallery/7.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/custom-fabrication/motion/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/audio-visual/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/custom-fabrication/motion/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/custom-fabrication/motion/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/audio-visual/gallery/2.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/custom-fabrication/motion/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/audio-visual/gallery/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/custom-fabrication/motion/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/audio-visual/gallery/12.jpg",
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
      "/services/audio-visual/gallery/1.jpg",
      "/services/audio-visual/gallery/5.jpg",
      "/services/audio-visual/gallery/9.jpg",
      "/services/audio-visual/gallery/14.jpg",
      "/services/audio-visual/gallery/20.jpg",
    ],
  },
];

export const AudioVisualImageGallery = [
  {
    id: "1",
    src: "/services/audio-visual/gallery/1.jpg",
    alt: "Professional audio visual setup with stage lighting and sound system for corporate event",
  },
  {
    id: "2",
    src: "/services/audio-visual/gallery/2.jpg",
    alt: "Live event production featuring LED screens, stage lighting, and AV control systems",
  },
  {
    id: "3",
    src: "/services/audio-visual/gallery/3.jpg",
    alt: "Conference audio visual setup with large projection screens and professional sound",
  },
  {
    id: "4",
    src: "/services/audio-visual/gallery/4.jpg",
    alt: "Stage lighting design with truss structures and color-changing LED fixtures",
  },
  {
    id: "5",
    src: "/services/audio-visual/gallery/5.jpg",
    alt: "Audio visual control booth managing sound, lighting, and video for live event",
  },
  {
    id: "6",
    src: "/services/audio-visual/gallery/6.jpg",
    alt: "Corporate presentation setup with microphones, screens, and professional lighting",
  },
  {
    id: "7",
    src: "/services/audio-visual/gallery/7.jpg",
    alt: "Event stage with dynamic lighting effects and integrated video displays",
  },
  {
    id: "8",
    src: "/services/audio-visual/gallery/8.jpg",
    alt: "Live panel discussion supported by professional audio and video equipment",
  },
  {
    id: "9",
    src: "/services/audio-visual/gallery/9.jpg",
    alt: "Hybrid event production with cameras, lighting, and live streaming setup",
  },
  {
    id: "10",
    src: "/services/audio-visual/gallery/10.jpg",
    alt: "LED wall installation with synchronized lighting for branded event experience",
  },
  {
    id: "11",
    src: "/services/audio-visual/gallery/11.jpg",
    alt: "Sound system setup with speakers and mixing console for indoor event",
  },
  {
    id: "12",
    src: "/services/audio-visual/gallery/12.jpg",
    alt: "Event lighting design highlighting stage and audience areas",
  },
  {
    id: "13",
    src: "/services/audio-visual/gallery/13.jpg",
    alt: "Professional camera setup for live event recording and streaming",
  },
  {
    id: "14",
    src: "/services/audio-visual/gallery/14.jpg",
    alt: "Corporate keynote stage with projection screens and theatrical lighting",
  },
  {
    id: "15",
    src: "/services/audio-visual/gallery/15.jpg",
    alt: "Audio visual equipment setup during event rehearsal and sound check",
  },
  {
    id: "16",
    src: "/services/audio-visual/gallery/16.jpg",
    alt: "Lighting truss and rigging installation for large-scale event production",
  },
  {
    id: "17",
    src: "/services/audio-visual/gallery/17.jpg",
    alt: "Event production team managing live audio and video during presentation",
  },
  {
    id: "18",
    src: "/services/audio-visual/gallery/18.jpg",
    alt: "Stage wash lighting and accent lights creating immersive event atmosphere",
  },
  {
    id: "19",
    src: "/services/audio-visual/gallery/19.jpg",
    alt: "Multi-camera setup capturing speakers and audience at corporate event",
  },
  {
    id: "20",
    src: "/services/audio-visual/gallery/20.jpg",
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
      "We recommend booking audio visual services 3 to 6 weeks in advance, especially for complex or large-scale events.",
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
      image: "/services/custom-fabrication/motion/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/custom-fabrication/gallery/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/custom-fabrication/gallery/27.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/custom-fabrication/motion/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/custom-fabrication/gallery/26.jpeg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/custom-fabrication/motion/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/custom-fabrication/motion/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/custom-fabrication/gallery/2.JPG",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/custom-fabrication/motion/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/custom-fabrication/gallery/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/custom-fabrication/motion/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/custom-fabrication/gallery/12.jpg",
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
      "/services/custom-fabrication/case-study/1.JPG",
      "/services/custom-fabrication/case-study/2.JPG",
      "/services/custom-fabrication/case-study/3.JPG",
      "/services/custom-fabrication/case-study/4.JPG",
      "/services/custom-fabrication/case-study/5.JPG",
      "/services/custom-fabrication/case-study/6.JPG",
    ],
  },
];

export const CustomFabricationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/custom-fabrication/gallery/1.jpg",
    alt: "Custom fabricated vinyl record wall with dimensional logo for branded event installation",
  },
  {
    id: "2",
    src: "/services/custom-fabrication/gallery/2.JPG",
    alt: "Immersive music-themed brand booth with custom guitars and experiential display design",
  },
  {
    id: "3",
    src: "/services/custom-fabrication/gallery/3.jpg",
    alt: "Custom branded cocktail bar installation with signage and premium mixology setup",
  },
  {
    id: "4",
    src: "/services/custom-fabrication/gallery/4.jpg",
    alt: "Luxury outdoor brand activation featuring sculptural mannequin display and greenery",
  },
  {
    id: "5",
    src: "/services/custom-fabrication/gallery/5.jpg",
    alt: "Custom stage backdrop panels with LED uplighting for corporate conference seating",
  },
  {
    id: "6",
    src: "/services/custom-fabrication/gallery/6.jpg",
    alt: "Champagne service wall with custom shelving and greenery for upscale event experience",
  },
  {
    id: "7",
    src: "/services/custom-fabrication/gallery/7.jpg",
    alt: "Custom fabricated bar facade with illuminated marquee lettering for themed event bar",
  },
  {
    id: "8",
    src: "/services/custom-fabrication/gallery/8.jpeg",
    alt: "Branded retail fitting room activation with illuminated mirrors and custom structures",
  },
  {
    id: "9",
    src: "/services/custom-fabrication/gallery/9.jpg",
    alt: "Large-scale custom art wall installation with graphic panels for brand storytelling",
  },
  {
    id: "10",
    src: "/services/custom-fabrication/gallery/10.jpg",
    alt: "Custom event stage design with LED sculptures, banquet seating, and immersive lighting",
  },
  {
    id: "11",
    src: "/services/custom-fabrication/gallery/11.jpg",
    alt: "Luxury tented anniversary event with custom cocktail tables, lighting, and floral backdrop",
  },
  {
    id: "12",
    src: "/services/custom-fabrication/gallery/12.jpg",
    alt: "Banana Republic custom pop-up dessert kiosk with branded signage and display shelving",
  },
  {
    id: "13",
    src: "/services/custom-fabrication/gallery/13.jpg",
    alt: "Tropical Havana Nights themed backdrop with custom lettering and oversized foliage",
  },
  {
    id: "14",
    src: "/services/custom-fabrication/gallery/14.JPG",
    alt: "Custom sports-themed photo backdrop with large-scale graphics and event lighting",
  },
  {
    id: "15",
    src: "/services/custom-fabrication/gallery/15.jpeg",
    alt: "Outdoor immersive brand installation with palm trees, lighting, and ribbon art structure",
  },
  {
    id: "16",
    src: "/services/custom-fabrication/gallery/16.jpg",
    alt: "The Estée Edit beauty brand activation booth with product displays and illuminated signage",
  },
  {
    id: "17",
    src: "/services/custom-fabrication/gallery/17.jpg",
    alt: "Trade show booth fabrication with shelving, seating, and branded wall graphics",
  },
  {
    id: "18",
    src: "/services/custom-fabrication/gallery/18.jpg",
    alt: "Custom branded ice cream cart activation for outdoor corporate event experience",
  },
  {
    id: "19",
    src: "/services/custom-fabrication/gallery/19.jpg",
    alt: "Street-level automotive brand activation with custom kiosk and display platform",
  },
  {
    id: "20",
    src: "/services/custom-fabrication/gallery/20.jpg",
    alt: "Rustic custom wood sign installation for outdoor brand event and experiential marketing",
  },
  {
    id: "21",
    src: "/services/custom-fabrication/gallery/21.jpg",
    alt: "Whimsical indoor set design with custom cabin facades, greenery, and campfire installation",
  },
  {
    id: "22",
    src: "/services/custom-fabrication/gallery/22.jpg",
    alt: "Premium Camus cognac bar setup with custom signage and luxury barware display",
  },
  {
    id: "23",
    src: "/services/custom-fabrication/gallery/23.jpg",
    alt: "Marie Claire MC30 custom kiosk fabrication in workshop prior to brand activation",
  },
  {
    id: "24",
    src: "/services/custom-fabrication/gallery/24.jpg",
    alt: "Womenterprise Summit stage design with custom arches, seating, and branded lighting",
  },
  {
    id: "25",
    src: "/services/custom-fabrication/gallery/25.jpg",
    alt: "Elegant wedding table signage with custom street sign centerpiece and ambient lighting",
  },
  {
    id: "26",
    src: "/services/custom-fabrication/gallery/26.jpeg",
    alt: "Colorful custom candy wall installation with cylindrical containers for guest interaction",
  },
  {
    id: "27",
    src: "/services/custom-fabrication/gallery/27.jpg",
    alt: "Suspended sneaker display installation for immersive retail brand experience",
  },
  {
    id: "28",
    src: "/services/custom-fabrication/gallery/28.jpg",
    alt: "Custom stage platform and truss structure for ASICS brand product launch event",
  },
  {
    id: "29",
    src: "/services/custom-fabrication/gallery/29.JPG",
    alt: "Retail pop-up fitting room installations for Macy’s Tommy Girl brand activation",
  },
  {
    id: "30",
    src: "/services/custom-fabrication/gallery/30.jpg",
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

// Rentals Data Start
export const RentalData = {
  title: "What We Offer",
  subtitle: "Professional Event Equipment & AV Rentals",
  topRow: [
    {
      id: "1",
      title: "Professional Sound Systems",
      image: "/services/custom-fabrication/motion/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/rentals/gallery/7.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/rentals/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/custom-fabrication/motion/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/rentals/gallery/16.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/custom-fabrication/motion/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/custom-fabrication/motion/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/rentals/gallery/21.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/custom-fabrication/motion/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/rentals/gallery/22.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/custom-fabrication/motion/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/rentals/gallery/33.jpg",
      width: "lg" as const,
    },
  ],
};

export const RentalCaseStudiesData = [
  {
    id: "1",
    clientName: "Joan Creative Carnival",
    projectTitle: "Halloween Celebration",
    challenge:
      "Joan Creative Carnival needed a Halloween event that felt immersive and playful while remaining polished and well-executed within a professional event venue in Lower Manhattan.",
    solution:
      "We provided a curated rental package including lighting, staging elements, atmospheric effects, and themed production support to transform the space while maintaining seamless setup and flow.",
    impact:
      "The event delivered a high-energy Halloween experience that encouraged guest interaction and visual impact, showcasing how strategic rentals can elevate themed events within a corporate venue.",
    gallery: [
      "/services/rentals/case-study/2.jpg",
      "/services/rentals/case-study/3.jpg",
      "/services/rentals/case-study/5.jpg",
      "/services/rentals/case-study/6.jpg",
      "/services/rentals/case-study/9.jpg",
      "/services/rentals/case-study/8.jpg",
      "/services/rentals/case-study/10.jpg",
    ],
  },
];

export const RentalImageGallery = [
  {
    id: "1",
    src: "/services/rentals/gallery/1.jpg",
    alt: "Professional event audio equipment rental setup",
  },
  {
    id: "2",
    src: "/services/rentals/gallery/2.jpg",
    alt: "Stage lighting rental with truss and uplighting",
  },
  {
    id: "3",
    src: "/services/rentals/gallery/3.jpg",
    alt: "LED video wall rental for corporate events",
  },
  {
    id: "4",
    src: "/services/rentals/gallery/4.jpg",
    alt: "Projection equipment rental for live presentations",
  },
  {
    id: "5",
    src: "/services/rentals/gallery/5.jpg",
    alt: "Live event production equipment rental setup",
  },
  {
    id: "6",
    src: "/services/rentals/gallery/6.jpg",
    alt: "Concert sound system rental with speakers and mixing console",
  },
  {
    id: "7",
    src: "/services/rentals/gallery/7.jpg",
    alt: "Live streaming equipment rental for hybrid events",
  },
  {
    id: "8",
    src: "/services/rentals/gallery/8.jpg",
    alt: "Wireless microphone rental for conferences and panels",
  },
  {
    id: "9",
    src: "/services/rentals/gallery/9.jpg",
    alt: "DJ equipment rental including mixers and turntables",
  },
  {
    id: "10",
    src: "/services/rentals/gallery/10.jpg",
    alt: "Professional video production equipment rental",
  },
  {
    id: "11",
    src: "/services/rentals/gallery/11.jpg",
    alt: "Moving head light rental for dynamic stage lighting",
  },
  {
    id: "12",
    src: "/services/rentals/gallery/12.jpg",
    alt: "Truss and rigging rental for event production",
  },
  {
    id: "13",
    src: "/services/rentals/gallery/13.jpg",
    alt: "Event lighting rental with color-changing LED fixtures",
  },
  {
    id: "14",
    src: "/services/rentals/gallery/14.jpg",
    alt: "Audio speaker rental for indoor and outdoor events",
  },
  {
    id: "15",
    src: "/services/rentals/gallery/15.jpg",
    alt: "Stage platform rental for live performances",
  },
  {
    id: "16",
    src: "/services/rentals/gallery/16.jpg",
    alt: "Large-scale LED screen rental for event backdrops",
  },
  {
    id: "17",
    src: "/services/rentals/gallery/17.jpg",
    alt: "Lighting control console rental for event production",
  },
  {
    id: "18",
    src: "/services/rentals/gallery/18.jpg",
    alt: "Camera and broadcast equipment rental for live events",
  },
  {
    id: "19",
    src: "/services/rentals/gallery/19.jpg",
    alt: "Event power distribution and cabling rental",
  },
  {
    id: "20",
    src: "/services/rentals/gallery/20.jpg",
    alt: "Professional microphone and audio accessory rental",
  },
  {
    id: "21",
    src: "/services/rentals/gallery/21.jpg",
    alt: "Event staging and riser rental setup",
  },
  {
    id: "22",
    src: "/services/rentals/gallery/22.jpg",
    alt: "Lighting truss rental with suspended fixtures",
  },
  {
    id: "23",
    src: "/services/rentals/gallery/23.jpg",
    alt: "Portable sound system rental for small events",
  },
  {
    id: "24",
    src: "/services/rentals/gallery/24.jpg",
    alt: "Video switcher and control equipment rental",
  },
  {
    id: "25",
    src: "/services/rentals/gallery/25.jpg",
    alt: "Event lighting package rental for corporate functions",
  },
  {
    id: "26",
    src: "/services/rentals/gallery/26.jpg",
    alt: "Professional speaker stack rental for concerts",
  },
  {
    id: "27",
    src: "/services/rentals/gallery/27.jpg",
    alt: "Stage backdrop and scenic rental for events",
  },
  {
    id: "28",
    src: "/services/rentals/gallery/28.jpg",
    alt: "AV equipment rental for conferences and meetings",
  },
  {
    id: "29",
    src: "/services/rentals/gallery/29.jpg",
    alt: "Lighting and audio rental setup during event load-in",
  },
  {
    id: "30",
    src: "/services/rentals/gallery/30.jpg",
    alt: "Event production rental equipment in use on-site",
  },
  {
    id: "31",
    src: "/services/rentals/gallery/31.jpg",
    alt: "High-quality event rental equipment prepared for setup",
  },
  {
    id: "32",
    src: "/services/rentals/gallery/32.jpg",
    alt: "Complete AV rental solution for large-scale events",
  },
  {
    id: "33",
    src: "/services/rentals/gallery/33.jpg",
    alt: "Professional lighting and staging rental configuration",
  },
  {
    id: "34",
    src: "/services/rentals/gallery/34.jpg",
    alt: "Reliable event rental equipment supporting live production",
  },
];

export const RentalFAQ = [
  {
    question: "What types of equipment do you offer for rent?",
    answer:
      "We offer a wide range of professional event rentals including audio systems, lighting, LED video walls, staging, truss and rigging, DJ equipment, and live streaming solutions.",
  },
  {
    question: "Do your rentals include delivery and setup?",
    answer:
      "Yes. Our rental services can include delivery, setup, on-site support, and breakdown depending on your event needs and rental package.",
  },
  {
    question: "Can I rent equipment only, without full event production?",
    answer:
      "Absolutely. We offer both equipment-only rentals and full-service rental packages with technical support to match your event requirements.",
  },
  {
    question: "Do you provide technical support during the event?",
    answer:
      "Yes. Our experienced technicians are available to manage setup, operation, and troubleshooting to ensure reliable performance throughout your event.",
  },
  {
    question: "How far in advance should rental equipment be booked?",
    answer:
      "We recommend booking rental equipment 2 to 4 weeks in advance, especially for larger events or high-demand items.",
  },
  {
    question: "Do you offer rentals for events outside of New York?",
    answer:
      "Yes. We provide rental services both locally and nationwide, depending on equipment availability and event logistics.",
  },
];

// Rentals Data End

// Design & Decor Service Data Start
export const DesignDecorData = {
  title: "What We Offer",
  subtitle: "Comprehensive Design & Decor Solutions",
  topRow: [
    {
      id: "1",
      title: "Professional Sound Systems",
      image: "/services/custom-fabrication/motion/1.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/design-decor/gallery/20.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/design-decor/gallery/27.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/custom-fabrication/motion/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/design-decor/gallery/26.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/custom-fabrication/motion/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/custom-fabrication/motion/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/design-decor/gallery/2.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/custom-fabrication/motion/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/design-decor/gallery/18.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/custom-fabrication/motion/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/design-decor/gallery/12.jpg",
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
      "/services/design-decor/case-study/1.jpg",
      "/services/design-decor/case-study/2.jpg",
      "/services/design-decor/case-study/3.jpg",
      "/services/design-decor/case-study/4.jpg",
      "/services/design-decor/case-study/5.jpg",
      "/services/design-decor/case-study/6.jpg",
    ],
  },
];

export const DesignDecorImageGallery = [
  {
    id: "1",
    src: "/services/design-decor/gallery/1.jpg",
    alt: "Elegant crystal candle centerpieces on modern event dining tables",
  },
  {
    id: "2",
    src: "/services/design-decor/gallery/2.jpg",
    alt: "Modern lounge furniture setup with illuminated cocktail tables",
  },
  {
    id: "3",
    src: "/services/design-decor/gallery/3.jpg",
    alt: "Themed event tablescape with custom signage and warm ambient lighting",
  },
  {
    id: "4",
    src: "/services/design-decor/gallery/4.jpg",
    alt: "Cathedral-style event space with dramatic blue uplighting and banquet seating",
  },
  {
    id: "5",
    src: "/services/design-decor/gallery/5.jpg",
    alt: "Romantic wedding reception decor with floral centerpieces and soft draping",
  },
  {
    id: "6",
    src: "/services/design-decor/gallery/6.jpg",
    alt: "Winter-themed lounge decor with illuminated tables and seasonal accents",
  },
  {
    id: "7",
    src: "/services/design-decor/gallery/7.jpg",
    alt: "Green hedge wall backdrop with event branding and styled seating",
  },
  {
    id: "8",
    src: "/services/design-decor/gallery/8.jpg",
    alt: "Indoor garden-inspired event decor with floral installations and lighting",
  },
  {
    id: "9",
    src: "/services/design-decor/gallery/9.jpg",
    alt: "Upscale indoor café-style seating with umbrellas and bistro tables",
  },
  {
    id: "10",
    src: "/services/design-decor/gallery/10.jpg",
    alt: "Luxury banquet setup with tall floral arrangements and chandeliers",
  },
  {
    id: "11",
    src: "/services/design-decor/gallery/11.jpg",
    alt: "Modern lounge vignette with white seating and ambient accent lighting",
  },
  {
    id: "12",
    src: "/services/design-decor/gallery/12.jpg",
    alt: "Contemporary event space with magenta lighting and modular lounge seating",
  },
  {
    id: "13",
    src: "/services/design-decor/gallery/13.jpg",
    alt: "Floral garden entrance installation with greenery and decorative archways",
  },
  {
    id: "14",
    src: "/services/design-decor/gallery/14.jpg",
    alt: "Grand ballroom reception with warm uplighting and elegant table settings",
  },
  {
    id: "15",
    src: "/services/design-decor/gallery/15.jpg",
    alt: "Modern mirrored wall installation with ambient purple event lighting",
  },
  {
    id: "16",
    src: "/services/design-decor/gallery/16.jpg",
    alt: "Stylish bar and lounge setup with hanging decor and mood lighting",
  },
  {
    id: "17",
    src: "/services/design-decor/gallery/17.jpg",
    alt: "Branded dessert display with floral accents and curated table styling",
  },
  {
    id: "18",
    src: "/services/design-decor/gallery/18.jpg",
    alt: "Tent-style event decor with chandeliers, cocktail tables, and greenery",
  },
  {
    id: "19",
    src: "/services/design-decor/gallery/19.jpg",
    alt: "Long banquet table with floral runner and gold-accented place settings",
  },
  {
    id: "20",
    src: "/services/design-decor/gallery/20.jpg",
    alt: "Colorful candy wall display as part of playful event decor installation",
  },
  {
    id: "21",
    src: "/services/design-decor/gallery/21.jpg",
    alt: "Custom-designed event lounge with soft seating and accent lighting",
  },
  {
    id: "22",
    src: "/services/design-decor/gallery/22.jpg",
    alt: "Luxury event decor featuring layered lighting and modern furniture",
  },
  {
    id: "23",
    src: "/services/design-decor/gallery/23.jpg",
    alt: "Elegant corporate event setup with neutral tones and floral accents",
  },
  {
    id: "24",
    src: "/services/design-decor/gallery/24.jpg",
    alt: "Chic cocktail reception decor with illuminated furniture and bar styling",
  },
  {
    id: "25",
    src: "/services/design-decor/gallery/25.jpg",
    alt: "Romantic event tablescape with candles, florals, and refined linens",
  },
  {
    id: "26",
    src: "/services/design-decor/gallery/26.jpg",
    alt: "Modern event design with clean lines, ambient lighting, and lounge seating",
  },
  {
    id: "27",
    src: "/services/design-decor/gallery/27.jpg",
    alt: "Upscale indoor event decor with custom lighting and contemporary furnishings",
  },
  {
    id: "28",
    src: "/services/design-decor/gallery/28.jpg",
    alt: "Stylish social event environment with coordinated decor and lighting design",
  },
  {
    id: "29",
    src: "/services/design-decor/gallery/29.jpg",
    alt: "Premium event space styling with dramatic lighting and curated furniture",
  },
  {
    id: "30",
    src: "/services/design-decor/gallery/30.jpg",
    alt: "Sophisticated event lounge area designed for guest comfort and flow",
  },
  {
    id: "31",
    src: "/services/design-decor/gallery/31.jpg",
    alt: "Elegant evening event decor with warm lighting and refined finishes",
  },
  {
    id: "32",
    src: "/services/design-decor/gallery/32.jpg",
    alt: "Contemporary event atmosphere created through lighting and decor styling",
  },
  {
    id: "33",
    src: "/services/design-decor/gallery/33.jpg",
    alt: "High-end event design featuring layered textures and ambient illumination",
  },
  {
    id: "34",
    src: "/services/design-decor/gallery/34.jpg",
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
      "We recommend beginning décor planning 4 to 6 weeks in advance to allow time for concept development, customization, and seamless execution.",
  },
  {
    question: "Can your team work within an existing venue or theme?",
    answer:
      "Yes. We collaborate closely with clients and venues to enhance existing spaces or themes while ensuring a cohesive and elevated final design.",
  },
];
// Design & Decor Service Data End

// Logistics Service Data Start
export const LogisticsData = {
  title: "What We Offer",
  subtitle: "End-to-End Event Logistics & Operations",
  topRow: [
    {
      id: "1",
      title: "Venue Sourcing & Coordination",
      image: "/services/rentals/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Load-In & Load-Out Management",
      image: "/services/rentals/gallery/29.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Event Staffing & Crew",
      image: "/services/rentals/gallery/16.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Transportation & Freight",
      image: "/services/custom-fabrication/motion/2.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Permitting & Compliance",
      image: "/services/rentals/gallery/28.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Vendor Management",
      image: "/services/custom-fabrication/motion/3.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "On-Site Production Management",
      image: "/services/custom-fabrication/motion/4.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Timeline & Run-of-Show",
      image: "/services/rentals/gallery/30.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "Warehouse & Storage",
      image: "/services/custom-fabrication/motion/5.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Budget & Cost Management",
      image: "/services/rentals/gallery/31.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Safety & Risk Planning",
      image: "/services/custom-fabrication/motion/6.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Post-Event Reporting",
      image: "/services/rentals/gallery/32.jpg",
      width: "lg" as const,
    },
  ],
};

export const LogisticsCaseStudiesData = [
  {
    id: "1",
    clientName: "Fortune 500 Corporation",
    projectTitle: "Multi-City National Conference Tour",
    challenge:
      "A Fortune 500 client needed seamless coordination of a six-city national conference tour, managing freight logistics, crew deployment, venue coordination, and production timelines across multiple states within a compressed 10-day window.",
    solution:
      "MMEink deployed a dedicated logistics team to manage all production freight, local vendor sourcing, permitting, and on-site crew across all six markets. A centralized run-of-show and real-time coordination protocol kept every city on schedule.",
    impact:
      "All six events executed on time and within budget. The client received a unified brand experience across every market, with zero production delays and full post-event reporting delivered within 48 hours.",
    gallery: [
      "/services/rentals/case-study/1.jpg",
      "/services/rentals/case-study/2.jpg",
      "/services/rentals/case-study/3.jpg",
      "/services/rentals/case-study/4.jpg",
      "/services/rentals/case-study/5.jpg",
    ],
  },
];

export const LogisticsImageGallery = [
  {
    id: "1",
    src: "/services/rentals/gallery/1.jpg",
    alt: "Event logistics setup with equipment staging and crew coordination",
  },
  {
    id: "2",
    src: "/services/rentals/gallery/2.jpg",
    alt: "Production load-in with freight and staging equipment",
  },
  {
    id: "3",
    src: "/services/rentals/gallery/3.jpg",
    alt: "On-site logistics management at large-scale event venue",
  },
  {
    id: "4",
    src: "/services/rentals/gallery/4.jpg",
    alt: "Venue coordination and floor plan logistics for corporate event",
  },
  {
    id: "5",
    src: "/services/rentals/gallery/5.jpg",
    alt: "Event staffing and crew management during production setup",
  },
  {
    id: "6",
    src: "/services/rentals/gallery/6.jpg",
    alt: "Transportation and freight logistics for event equipment",
  },
  {
    id: "7",
    src: "/services/rentals/gallery/7.jpg",
    alt: "Production timeline coordination during event load-in",
  },
  {
    id: "8",
    src: "/services/rentals/gallery/8.jpg",
    alt: "Vendor management and logistics coordination on-site",
  },
  {
    id: "9",
    src: "/services/rentals/gallery/9.jpg",
    alt: "Warehouse staging and inventory management for event production",
  },
  {
    id: "10",
    src: "/services/rentals/gallery/10.jpg",
    alt: "Event safety briefing and risk planning before production",
  },
  {
    id: "11",
    src: "/services/rentals/gallery/11.jpg",
    alt: "Run-of-show coordination with event production team",
  },
  {
    id: "12",
    src: "/services/rentals/gallery/12.jpg",
    alt: "Budget management and logistics reporting post-event",
  },
];

export const LogisticsFAQ = [
  {
    question: "What does your logistics service include?",
    answer:
      "Our logistics services cover venue sourcing, freight and transportation, load-in/load-out management, crew staffing, vendor coordination, permitting, on-site production management, and post-event reporting.",
  },
  {
    question: "Do you manage multi-city or touring events?",
    answer:
      "Yes. We specialize in coordinating multi-city tours and national events, managing production logistics, crew deployment, and vendor relationships across multiple markets simultaneously.",
  },
  {
    question: "Can you handle permitting and compliance for events?",
    answer:
      "Absolutely. Our team manages all necessary permits, insurance requirements, and local compliance regulations to ensure your event runs without any administrative issues.",
  },
  {
    question: "Do you provide on-site production management?",
    answer:
      "Yes. Our logistics managers are on-site throughout your event, overseeing crew, managing timelines, coordinating vendors, and resolving any production challenges in real time.",
  },
  {
    question: "How do you manage event budgets and costs?",
    answer:
      "We provide transparent budget planning, vendor cost negotiation, and ongoing cost tracking throughout the production cycle, with full post-event financial reporting.",
  },
  {
    question: "How far in advance should logistics be planned?",
    answer:
      "For large-scale or multi-city events, we recommend engaging our logistics team 6 to 8 weeks in advance. Smaller events can typically be coordinated with 2 to 4 weeks of lead time.",
  },
];
// Logistics Service Data End

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

// ─────────────────────────────────────────────────────────────
// NEW SERVICE PAGES: see COPY_AUDIT.md (copy pending client review)
// ─────────────────────────────────────────────────────────────

export const PrintingData = {
  title: "What We Offer",
  subtitle: "Large-Format & Custom Event Printing",
  topRow: [
    {
      id: "1",
      title: "Large-Format Graphics",
      image: "/services/custom-fabrication/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Vinyl & Wall Wraps",
      image: "/services/custom-fabrication/gallery/2.JPG",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Step & Repeat Backdrops",
      image: "/services/custom-fabrication/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Banners & Signage",
      image: "/services/custom-fabrication/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Floor & Window Graphics",
      image: "/services/custom-fabrication/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Fabric & Tension Prints",
      image: "/services/custom-fabrication/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Foam Board & Rigid Signage",
      image: "/services/custom-fabrication/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Directional & Wayfinding",
      image: "/services/custom-fabrication/gallery/8.jpeg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Branded Environments",
      image: "/services/custom-fabrication/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Trade Show Graphics",
      image: "/services/custom-fabrication/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Menu & Table Print",
      image: "/services/custom-fabrication/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On-Demand Reprints",
      image: "/services/custom-fabrication/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const PrintingCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Printing Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/services/custom-fabrication/gallery/13.jpg",
      "/services/custom-fabrication/gallery/14.JPG",
      "/services/custom-fabrication/gallery/15.jpeg",
      "/services/custom-fabrication/gallery/16.jpg",
      "/services/custom-fabrication/gallery/17.jpg",
    ],
  },
];

export const PrintingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/custom-fabrication/gallery/1.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "2",
    src: "/services/custom-fabrication/gallery/2.JPG",
    alt: "Printing work by MMEink",
  },
  {
    id: "3",
    src: "/services/custom-fabrication/gallery/3.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "4",
    src: "/services/custom-fabrication/gallery/4.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "5",
    src: "/services/custom-fabrication/gallery/5.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "6",
    src: "/services/custom-fabrication/gallery/6.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "7",
    src: "/services/custom-fabrication/gallery/7.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "8",
    src: "/services/custom-fabrication/gallery/8.jpeg",
    alt: "Printing work by MMEink",
  },
  {
    id: "9",
    src: "/services/custom-fabrication/gallery/9.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "10",
    src: "/services/custom-fabrication/gallery/10.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "11",
    src: "/services/custom-fabrication/gallery/11.jpg",
    alt: "Printing work by MMEink",
  },
  {
    id: "12",
    src: "/services/custom-fabrication/gallery/12.jpg",
    alt: "Printing work by MMEink",
  },
];

export const PrintingFAQ = [
  {
    question: "What printing services do you offer in-house?",
    answer:
      "We produce large-format graphics, vinyl wraps, step-and-repeat backdrops, banners, rigid signage, fabric prints, and floor and window graphics, all printed and finished in our own facility.",
  },
  {
    question: "What file formats do you need for print?",
    answer:
      "We prefer vector files (AI, EPS, PDF) or high-resolution raster files at 150 DPI at final output size. Our team reviews every file and will flag anything that needs adjusting before production.",
  },
  {
    question: "How quickly can you turn around a print job?",
    answer:
      "Standard jobs ship within 3 to 5 business days. Rush production is available for time-sensitive activations. Contact us with your deadline and we will confirm feasibility.",
  },
  {
    question: "Can you install the graphics on site?",
    answer:
      "Yes. Our installation crews handle on-site application for wraps, wall graphics, and rigging, coordinated with your overall production schedule.",
  },
];

export const LightingData = {
  title: "What We Offer",
  subtitle: "Architectural & Production Lighting Design",
  topRow: [
    {
      id: "1",
      title: "Stage & Key Lighting",
      image: "/services/audio-visual/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Intelligent & Moving Head",
      image: "/services/audio-visual/gallery/2.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Architectural Uplighting",
      image: "/services/audio-visual/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Custom Gobo Projection",
      image: "/services/audio-visual/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Pin Spotting",
      image: "/services/audio-visual/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Ambient & Mood Washes",
      image: "/services/audio-visual/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Dance Floor Lighting",
      image: "/services/audio-visual/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "LED Colour Systems",
      image: "/services/audio-visual/gallery/8.jpg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Truss & Rigging",
      image: "/services/audio-visual/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Lighting Console Programming",
      image: "/services/audio-visual/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Power Distribution",
      image: "/services/audio-visual/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On-Site Lighting Crew",
      image: "/services/audio-visual/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const LightingCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Lighting Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/services/audio-visual/gallery/13.jpg",
      "/services/audio-visual/gallery/14.jpg",
      "/services/audio-visual/gallery/15.jpg",
      "/services/audio-visual/gallery/16.jpg",
      "/services/audio-visual/gallery/17.jpg",
    ],
  },
];

export const LightingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/audio-visual/gallery/1.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "2",
    src: "/services/audio-visual/gallery/2.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "3",
    src: "/services/audio-visual/gallery/3.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "4",
    src: "/services/audio-visual/gallery/4.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "5",
    src: "/services/audio-visual/gallery/5.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "6",
    src: "/services/audio-visual/gallery/6.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "7",
    src: "/services/audio-visual/gallery/7.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "8",
    src: "/services/audio-visual/gallery/8.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "9",
    src: "/services/audio-visual/gallery/9.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "10",
    src: "/services/audio-visual/gallery/10.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "11",
    src: "/services/audio-visual/gallery/11.jpg",
    alt: "Lighting work by MMEink",
  },
  {
    id: "12",
    src: "/services/audio-visual/gallery/12.jpg",
    alt: "Lighting work by MMEink",
  },
];

export const LightingFAQ = [
  {
    question: "Do you provide lighting design or just equipment?",
    answer:
      "Both. Our designers develop a full lighting plot and cue list tailored to your venue and programme, then our crew installs, programmes, and operates it on site.",
  },
  {
    question: "Can you work with a venue’s existing lighting?",
    answer:
      "Yes. We routinely integrate with house rigs, supplementing them with our own fixtures where the design calls for more coverage, colour, or control.",
  },
  {
    question: "Do you offer custom gobos?",
    answer:
      "We do. Custom gobos are produced from your logo or artwork and are a cost-effective way to brand a space with light.",
  },
  {
    question: "Is a lighting technician included on event day?",
    answer:
      "For any programmed or dynamic design, yes. A technician remains on site to run cues and handle adjustments throughout the event.",
  },
];

export const StagingData = {
  title: "What We Offer",
  subtitle: "Custom Staging & Scenic Structures",
  topRow: [
    {
      id: "1",
      title: "Custom Stage Builds",
      image: "/services/custom-fabrication/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Modular Decking & Risers",
      image: "/services/custom-fabrication/gallery/2.JPG",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Runways & Catwalks",
      image: "/services/custom-fabrication/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "ADA Ramps & Access",
      image: "/services/custom-fabrication/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Pipe & Drape",
      image: "/services/custom-fabrication/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Scenic Backdrops",
      image: "/services/custom-fabrication/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Truss Structures",
      image: "/services/custom-fabrication/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Stage Skirting & Finishes",
      image: "/services/custom-fabrication/gallery/8.jpeg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Podiums & Lecterns",
      image: "/services/custom-fabrication/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Backline Platforms",
      image: "/services/custom-fabrication/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Load-Bearing Engineering",
      image: "/services/custom-fabrication/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On-Site Build Crew",
      image: "/services/custom-fabrication/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const StagingCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Staging Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/services/custom-fabrication/gallery/13.jpg",
      "/services/custom-fabrication/gallery/14.JPG",
      "/services/custom-fabrication/gallery/15.jpeg",
      "/services/custom-fabrication/gallery/16.jpg",
      "/services/custom-fabrication/gallery/17.jpg",
    ],
  },
];

export const StagingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/custom-fabrication/gallery/1.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "2",
    src: "/services/custom-fabrication/gallery/2.JPG",
    alt: "Staging work by MMEink",
  },
  {
    id: "3",
    src: "/services/custom-fabrication/gallery/3.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "4",
    src: "/services/custom-fabrication/gallery/4.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "5",
    src: "/services/custom-fabrication/gallery/5.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "6",
    src: "/services/custom-fabrication/gallery/6.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "7",
    src: "/services/custom-fabrication/gallery/7.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "8",
    src: "/services/custom-fabrication/gallery/8.jpeg",
    alt: "Staging work by MMEink",
  },
  {
    id: "9",
    src: "/services/custom-fabrication/gallery/9.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "10",
    src: "/services/custom-fabrication/gallery/10.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "11",
    src: "/services/custom-fabrication/gallery/11.jpg",
    alt: "Staging work by MMEink",
  },
  {
    id: "12",
    src: "/services/custom-fabrication/gallery/12.jpg",
    alt: "Staging work by MMEink",
  },
];

export const StagingFAQ = [
  {
    question: "What size stages can you build?",
    answer:
      "Anything from a single 8-foot riser to multi-level stages and runways spanning a full ballroom. Our team engineers each build for the specific room and load requirements.",
  },
  {
    question: "Are your stages ADA accessible?",
    answer:
      "Yes. We supply compliant ramps and handrails, and we plan accessible access routes into every stage design as standard.",
  },
  {
    question: "Do you handle the engineering sign-off?",
    answer:
      "For builds that require it, we provide load calculations and engineering documentation to satisfy venue and municipal requirements.",
  },
  {
    question: "How long does stage installation take?",
    answer:
      "Most standard builds install in a single load-in day. Complex multi-level or scenic builds may require additional time, which we confirm during planning.",
  },
];

export const ThemesData = {
  title: "What We Offer",
  subtitle: "Concept Development & Themed Environments",
  topRow: [
    {
      id: "1",
      title: "Concept Development",
      image: "/services/design-decor/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Mood Boards & Renderings",
      image: "/services/design-decor/gallery/2.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Themed Environments",
      image: "/services/design-decor/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Immersive Installations",
      image: "/services/design-decor/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Custom Scenic Design",
      image: "/services/design-decor/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Colour & Material Palettes",
      image: "/services/design-decor/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Themed Entrances",
      image: "/services/design-decor/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Photo Moments",
      image: "/services/design-decor/gallery/8.jpg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Seasonal Concepts",
      image: "/services/design-decor/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Cultural & Heritage Themes",
      image: "/services/design-decor/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Brand-Led Concepts",
      image: "/services/design-decor/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Full Theme Execution",
      image: "/services/design-decor/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const ThemesCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Themes Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/services/design-decor/gallery/13.jpg",
      "/services/design-decor/gallery/14.jpg",
      "/services/design-decor/gallery/15.jpg",
      "/services/design-decor/gallery/16.jpg",
      "/services/design-decor/gallery/17.jpg",
    ],
  },
];

export const ThemesImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/design-decor/gallery/1.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "2",
    src: "/services/design-decor/gallery/2.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "3",
    src: "/services/design-decor/gallery/3.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "4",
    src: "/services/design-decor/gallery/4.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "5",
    src: "/services/design-decor/gallery/5.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "6",
    src: "/services/design-decor/gallery/6.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "7",
    src: "/services/design-decor/gallery/7.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "8",
    src: "/services/design-decor/gallery/8.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "9",
    src: "/services/design-decor/gallery/9.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "10",
    src: "/services/design-decor/gallery/10.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "11",
    src: "/services/design-decor/gallery/11.jpg",
    alt: "Themes work by MMEink",
  },
  {
    id: "12",
    src: "/services/design-decor/gallery/12.jpg",
    alt: "Themes work by MMEink",
  },
];

export const ThemesFAQ = [
  {
    question: "Do you develop the theme or do we bring one?",
    answer:
      "Either works. Many clients arrive with a direction and we develop it into a full design; others hand us a brief and objectives, and our team originates the concept.",
  },
  {
    question: "What do you deliver before we commit?",
    answer:
      "We provide mood boards, renderings, and a material and colour palette so you can see the concept before anything is built.",
  },
  {
    question: "Can a theme carry across multiple rooms?",
    answer:
      "Yes. We design theming that scales across entrances, main rooms, breakouts, and photo moments so the experience stays consistent throughout the venue.",
  },
  {
    question: "How far in advance should theming be planned?",
    answer:
      "We recommend 6 to 8 weeks for fully custom themed builds, which allows time for design approval, fabrication, and installation.",
  },
];

export const PropsData = {
  title: "What We Offer",
  subtitle: "Custom Fabricated & Curated Event Props",
  topRow: [
    {
      id: "1",
      title: "Custom Prop Fabrication",
      image: "/services/design-decor/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Oversized Statement Pieces",
      image: "/services/design-decor/gallery/2.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Themed Prop Packages",
      image: "/services/design-decor/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Photo Moment Props",
      image: "/services/design-decor/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Branded Prop Builds",
      image: "/services/design-decor/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Sculptural Elements",
      image: "/services/design-decor/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Period & Era Props",
      image: "/services/design-decor/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Seasonal Prop Inventory",
      image: "/services/design-decor/gallery/8.jpg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Prop Refinishing",
      image: "/services/design-decor/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Prop Sourcing",
      image: "/services/design-decor/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Storage & Warehousing",
      image: "/services/design-decor/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Delivery & Placement",
      image: "/services/design-decor/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const PropsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Props Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/services/design-decor/gallery/13.jpg",
      "/services/design-decor/gallery/14.jpg",
      "/services/design-decor/gallery/15.jpg",
      "/services/design-decor/gallery/16.jpg",
      "/services/design-decor/gallery/17.jpg",
    ],
  },
];

export const PropsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/design-decor/gallery/1.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "2",
    src: "/services/design-decor/gallery/2.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "3",
    src: "/services/design-decor/gallery/3.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "4",
    src: "/services/design-decor/gallery/4.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "5",
    src: "/services/design-decor/gallery/5.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "6",
    src: "/services/design-decor/gallery/6.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "7",
    src: "/services/design-decor/gallery/7.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "8",
    src: "/services/design-decor/gallery/8.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "9",
    src: "/services/design-decor/gallery/9.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "10",
    src: "/services/design-decor/gallery/10.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "11",
    src: "/services/design-decor/gallery/11.jpg",
    alt: "Props work by MMEink",
  },
  {
    id: "12",
    src: "/services/design-decor/gallery/12.jpg",
    alt: "Props work by MMEink",
  },
];

export const PropsFAQ = [
  {
    question: "Do you build props or rent them?",
    answer:
      "Both. We maintain a large in-house prop inventory and fabricate custom pieces in our own shop when a concept calls for something specific.",
  },
  {
    question: "Can props be branded?",
    answer:
      "Yes. Our fabrication and print teams work together to produce props carrying your logo, colours, and artwork.",
  },
  {
    question: "What happens to custom props after the event?",
    answer:
      "You can purchase and keep them, or we can store them in our warehouse for reuse at future events, and many clients build a recurring prop library with us.",
  },
  {
    question: "Do you deliver and place the props on site?",
    answer:
      "Yes. Delivery, placement, and post-event strike are handled by our crew as part of the production schedule.",
  },
];

export const MusicalEntertainmentData = {
  title: "What We Offer",
  subtitle: "Live Music & Musical Programming",
  topRow: [
    {
      id: "1",
      title: "Live Bands",
      image: "/events/galas/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "DJs & Open-Format Sets",
      image: "/events/galas/gallery/2.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Jazz Ensembles",
      image: "/events/galas/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "String Quartets",
      image: "/events/galas/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Solo Vocalists",
      image: "/events/galas/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Pianists & Keyboardists",
      image: "/events/galas/gallery/6.jpg",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Cultural & World Music",
      image: "/events/galas/gallery/7.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Ceremony Musicians",
      image: "/events/galas/gallery/8.jpg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Cocktail Hour Sets",
      image: "/events/galas/gallery/9.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Headline Acts",
      image: "/events/galas/gallery/10.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Backline & Sound Support",
      image: "/events/galas/gallery/11.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Musical Direction",
      image: "/events/galas/gallery/12.jpg",
      width: "md" as const,
    },
  ],
};

export const MusicalEntertainmentCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Musical Entertainment Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/events/galas/gallery/13.jpg",
      "/events/galas/gallery/14.jpg",
      "/events/galas/gallery/15.jpg",
      "/events/galas/gallery/16.jpg",
      "/events/galas/gallery/17.jpg",
    ],
  },
];

export const MusicalEntertainmentImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/galas/gallery/1.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "2",
    src: "/events/galas/gallery/2.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "3",
    src: "/events/galas/gallery/3.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "4",
    src: "/events/galas/gallery/4.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "5",
    src: "/events/galas/gallery/5.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "6",
    src: "/events/galas/gallery/6.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "7",
    src: "/events/galas/gallery/7.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "8",
    src: "/events/galas/gallery/8.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "9",
    src: "/events/galas/gallery/9.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "10",
    src: "/events/galas/gallery/10.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "11",
    src: "/events/galas/gallery/11.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
  {
    id: "12",
    src: "/events/galas/gallery/12.jpg",
    alt: "Musical Entertainment work by MMEink",
  },
];

export const MusicalEntertainmentFAQ = [
  {
    question: "Do you book the talent or do we?",
    answer:
      "We handle booking end to end, sourcing, contracting, and coordinating the artists, though we are equally happy to produce around talent you have already engaged.",
  },
  {
    question: "Is sound equipment included?",
    answer:
      "Backline and sound reinforcement are quoted alongside the talent so the performance is fully supported. Our AV team handles setup and mixing.",
  },
  {
    question: "Can we hear the acts before booking?",
    answer:
      "Yes. We provide recordings and, where scheduling allows, arrange live showcases before you commit.",
  },
  {
    question: "Can musicians learn a specific song?",
    answer:
      "Most of our acts will learn a first-dance or milestone song with adequate notice. We confirm this with the artist during booking.",
  },
];

export const EntertainmentData = {
  title: "What We Offer",
  subtitle: "Performers, Hosts & Interactive Experiences",
  topRow: [
    {
      id: "1",
      title: "Emcees & Hosts",
      image: "/events/brand-activations/gallery/1.jpg",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Interactive Performers",
      image: "/events/brand-activations/gallery/2.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Aerialists & Circus Acts",
      image: "/events/brand-activations/gallery/3.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Dancers & Choreography",
      image: "/events/brand-activations/gallery/4.jpg",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Magicians & Close-Up",
      image: "/events/brand-activations/gallery/5.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Comedians",
      image: "/events/brand-activations/gallery/5.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Celebrity Talent",
      image: "/events/brand-activations/gallery/6.jpg",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Photo & 360 Booths",
      image: "/events/brand-activations/gallery/7.jpg",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Casino & Game Tables",
      image: "/events/brand-activations/gallery/8.jpg",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Brand Ambassadors",
      image: "/events/brand-activations/gallery/9.jpg",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Character Performers",
      image: "/events/brand-activations/gallery/10.jpg",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Guest Experience Design",
      image: "/events/brand-activations/gallery/11.jpg",
      width: "md" as const,
    },
  ],
};

export const EntertainmentCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Entertainment Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this service.",
    gallery: [
      "/events/brand-activations/gallery/12.jpg",
      "/events/brand-activations/gallery/13.jpg",
      "/events/brand-activations/gallery/14.jpg",
      "/events/brand-activations/gallery/15.jpg",
      "/events/brand-activations/gallery/16.jpg",
    ],
  },
];

export const EntertainmentImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/brand-activations/gallery/1.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "2",
    src: "/events/brand-activations/gallery/2.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "3",
    src: "/events/brand-activations/gallery/3.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "4",
    src: "/events/brand-activations/gallery/4.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "5",
    src: "/events/brand-activations/gallery/5.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "6",
    src: "/events/brand-activations/gallery/5.png",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "7",
    src: "/events/brand-activations/gallery/6.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "8",
    src: "/events/brand-activations/gallery/7.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "9",
    src: "/events/brand-activations/gallery/8.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "10",
    src: "/events/brand-activations/gallery/9.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "11",
    src: "/events/brand-activations/gallery/10.jpg",
    alt: "Entertainment work by MMEink",
  },
  {
    id: "12",
    src: "/events/brand-activations/gallery/11.jpg",
    alt: "Entertainment work by MMEink",
  },
];

export const EntertainmentFAQ = [
  {
    question: "What kinds of entertainment do you provide?",
    answer:
      "Emcees, interactive performers, aerialists, dancers, magicians, comedians, celebrity talent, photo and 360 booths, and game tables, matched to your audience and format.",
  },
  {
    question: "Do you handle contracting and riders?",
    answer:
      "Yes. We manage contracts, technical riders, hospitality requirements, and on-site coordination for every performer we book.",
  },
  {
    question: "Can entertainment be branded?",
    answer:
      "Absolutely. Photo booths, brand ambassadors, and character performers can all be customised with your branding and messaging.",
  },
  {
    question: "How far in advance should we book talent?",
    answer:
      "Six to eight weeks is comfortable for most acts. High-demand and celebrity talent should be secured considerably earlier.",
  },
];

// ─────────────────────────────────────────────────────────────
// NEW EVENT TYPE PAGES: see COPY_AUDIT.md (copy pending client review)
// ─────────────────────────────────────────────────────────────

export const AwardDinnersEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Awards Ceremonies",
    description:
      "We produce award ceremonies where the programme runs to the second, with staging, lighting, cue-to-cue rehearsal, and presentation graphics all aligned so every honouree gets their moment.",
    image: "/events/galas/gallery/2.jpg",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Show Production & Run-of-Show",
    description:
      "Our team builds and manages the full run-of-show, coordinating presenters, video packages, music stings, and transitions into one seamless broadcast-quality programme.",
    image: "/events/galas/gallery/3.jpg",
  },
  {
    id: "3",
    icon: Users,
    headline: "Honouree & VIP Experience",
    description:
      "From arrival and greenroom hospitality to seating and press, we manage the honouree journey so recipients and their guests are looked after throughout the evening.",
    image: "/events/galas/gallery/4.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Sponsor & Brand Visibility",
    description:
      "We integrate sponsor recognition across signage, stage graphics, printed programmes, and digital content in a way that feels considered rather than commercial.",
    image: "/events/galas/gallery/5.jpg",
  },
];

export const AwardDinnersCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Award Dinners Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    gallery: [
      "/events/galas/gallery/13.jpg",
      "/events/galas/gallery/14.jpg",
      "/events/galas/gallery/15.jpg",
      "/events/galas/gallery/16.jpg",
      "/events/galas/gallery/17.jpg",
    ],
  },
];

export const AwardDinnersImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/galas/gallery/1.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "2",
    src: "/events/galas/gallery/2.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "3",
    src: "/events/galas/gallery/3.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "4",
    src: "/events/galas/gallery/4.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "5",
    src: "/events/galas/gallery/5.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "6",
    src: "/events/galas/gallery/6.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "7",
    src: "/events/galas/gallery/7.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "8",
    src: "/events/galas/gallery/8.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "9",
    src: "/events/galas/gallery/9.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "10",
    src: "/events/galas/gallery/10.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "11",
    src: "/events/galas/gallery/11.jpg",
    alt: "Award Dinners produced by MMEink",
  },
  {
    id: "12",
    src: "/events/galas/gallery/12.jpg",
    alt: "Award Dinners produced by MMEink",
  },
];

export const AwardDinnersFAQ = [
  {
    question: "Do you manage the run-of-show?",
    answer:
      "Yes. We build the full run-of-show, rehearse presenters, and call the show live on event day so the programme stays on schedule.",
  },
  {
    question: "Can you produce award video packages?",
    answer:
      "We produce honouree videos, sizzle reels, and presentation graphics in-house, and integrate them into the show playback system.",
  },
  {
    question: "How do you handle presenter rehearsals?",
    answer:
      "We schedule a cue-to-cue rehearsal ahead of doors, walking each presenter through their entrance, microphone, and timing.",
  },
  {
    question: "Can the ceremony be live streamed?",
    answer:
      "Yes. We offer multi-camera capture and live streaming for remote honourees and wider audiences.",
  },
];

export const CorporateEventsEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Town Halls & All-Hands",
    description:
      "We produce all-hands and town hall meetings with clean staging, reliable audio, and hybrid streaming so every employee, in the room or remote, sees and hears the same thing.",
    image: "/events/conferences-meetings/gallery/2.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Client & Partner Events",
    description:
      "From hospitality evenings to partner summits, we design corporate events that strengthen relationships while reflecting your brand with the right level of polish.",
    image: "/events/conferences-meetings/gallery/3.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Holiday & Milestone Celebrations",
    description:
      "Company celebrations, anniversaries, and holiday parties designed around your culture, with décor, entertainment, and catering coordination handled throughout.",
    image: "/events/conferences-meetings/gallery/4.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Sales Kickoffs & Incentives",
    description:
      "High-energy kickoffs and incentive events built to motivate teams, with general sessions, breakouts, and awards produced under one production plan.",
    image: "/events/conferences-meetings/gallery/5.jpg",
  },
];

export const CorporateEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Corporate Events Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    gallery: [
      "/events/conferences-meetings/gallery/13.jpg",
      "/events/conferences-meetings/gallery/14.jpg",
      "/events/conferences-meetings/gallery/15.jpg",
      "/events/conferences-meetings/gallery/16.jpg",
      "/events/conferences-meetings/gallery/17.jpg",
    ],
  },
];

export const CorporateEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/conferences-meetings/gallery/1.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "2",
    src: "/events/conferences-meetings/gallery/2.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "3",
    src: "/events/conferences-meetings/gallery/3.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "4",
    src: "/events/conferences-meetings/gallery/4.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "5",
    src: "/events/conferences-meetings/gallery/5.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "6",
    src: "/events/conferences-meetings/gallery/6.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "7",
    src: "/events/conferences-meetings/gallery/7.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "8",
    src: "/events/conferences-meetings/gallery/8.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "9",
    src: "/events/conferences-meetings/gallery/9.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "10",
    src: "/events/conferences-meetings/gallery/10.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "11",
    src: "/events/conferences-meetings/gallery/11.jpg",
    alt: "Corporate Events produced by MMEink",
  },
  {
    id: "12",
    src: "/events/conferences-meetings/gallery/12.jpg",
    alt: "Corporate Events produced by MMEink",
  },
];

export const CorporateEventsFAQ = [
  {
    question: "What size corporate events do you handle?",
    answer:
      "Everything from a 30-person executive dinner to all-hands meetings and kickoffs for several thousand attendees.",
  },
  {
    question: "Can you support hybrid and remote attendees?",
    answer:
      "Yes. We produce hybrid events with multi-camera capture, streaming, and moderated Q&A so remote employees participate fully.",
  },
  {
    question: "Do you handle catering and venue sourcing?",
    answer:
      "We source venues and coordinate catering as part of our full-service production, managing vendors on your behalf.",
  },
  {
    question: "Can you work within our brand guidelines?",
    answer:
      "Yes. We work directly from your brand standards across staging, graphics, print, and environmental design.",
  },
];

export const ThemedEventsEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Concept Development",
    description:
      "We originate and develop themes from a brief, delivering mood boards, renderings, and material palettes so you can see the world before we build it.",
    image: "/events/brand-activations/gallery/2.jpg",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Immersive Environments",
    description:
      "Our fabrication and décor teams transform venues into fully realised environments, with custom scenic, props, and lighting working to a single concept.",
    image: "/events/brand-activations/gallery/3.jpg",
  },
  {
    id: "3",
    icon: Users,
    headline: "Guest Journey Design",
    description:
      "We choreograph the guest experience from arrival through departure. Entrances, reveal moments, photo opportunities, and transitions all designed as part of the theme.",
    image: "/events/brand-activations/gallery/4.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Brand-Led Theming",
    description:
      "For brand-driven events, we translate visual identity into a physical world that stays recognisably on-brand while still feeling like an experience rather than an advert.",
    image: "/events/brand-activations/gallery/5.jpg",
  },
];

export const ThemedEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Themed Events Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    gallery: [
      "/events/brand-activations/gallery/12.jpg",
      "/events/brand-activations/gallery/13.jpg",
      "/events/brand-activations/gallery/14.jpg",
      "/events/brand-activations/gallery/15.jpg",
      "/events/brand-activations/gallery/16.jpg",
    ],
  },
];

export const ThemedEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/brand-activations/gallery/1.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "2",
    src: "/events/brand-activations/gallery/2.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "3",
    src: "/events/brand-activations/gallery/3.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "4",
    src: "/events/brand-activations/gallery/4.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "5",
    src: "/events/brand-activations/gallery/5.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "6",
    src: "/events/brand-activations/gallery/5.png",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "7",
    src: "/events/brand-activations/gallery/6.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "8",
    src: "/events/brand-activations/gallery/7.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "9",
    src: "/events/brand-activations/gallery/8.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "10",
    src: "/events/brand-activations/gallery/9.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "11",
    src: "/events/brand-activations/gallery/10.jpg",
    alt: "Themed Events produced by MMEink",
  },
  {
    id: "12",
    src: "/events/brand-activations/gallery/11.jpg",
    alt: "Themed Events produced by MMEink",
  },
];

export const ThemedEventsFAQ = [
  {
    question: "Do you design the theme from scratch?",
    answer:
      "We can. Many clients give us objectives and an audience, and our design team originates the concept and presents it through renderings.",
  },
  {
    question: "How much lead time do themed events need?",
    answer:
      "Six to eight weeks is typical for fully custom themed builds, allowing for design approval, fabrication, and installation.",
  },
  {
    question: "Is everything custom-built?",
    answer:
      "It is a mix. We fabricate custom scenic and props where the concept requires it, and draw on our existing inventory where it fits, which keeps budgets sensible.",
  },
  {
    question: "Can a theme work in any venue?",
    answer:
      "Nearly always. We survey the venue first and design within its constraints, including rigging points, load-in access, and any landmark restrictions.",
  },
];

export const SeasonalEventsEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Holiday Parties",
    description:
      "We design and produce holiday celebrations with seasonal décor, entertainment, and catering coordination, memorable enough that guests look forward to next year.",
    image: "/events/galas/gallery/2.jpg",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Winter Installations",
    description:
      "Custom winter environments, from photo-ready installations to full venue transformations, fabricated in our shop and installed on site.",
    image: "/events/galas/gallery/3.jpg",
  },
  {
    id: "3",
    icon: Users,
    headline: "Seasonal Brand Activations",
    description:
      "Seasonal activations that put your brand into the moment, with themed builds, interactive elements, and content capture designed for the season.",
    image: "/events/galas/gallery/4.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Recurring Annual Programmes",
    description:
      "For clients who run the same seasonal event each year, we build reusable assets and refine the concept annually, improving the experience while controlling cost.",
    image: "/events/galas/gallery/5.jpg",
  },
];

export const SeasonalEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Seasonal Events Project",
    challenge:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client-approved case study copy for this event type.",
    gallery: [
      "/events/galas/gallery/13.jpg",
      "/events/galas/gallery/14.jpg",
      "/events/galas/gallery/15.jpg",
      "/events/galas/gallery/16.jpg",
      "/events/galas/gallery/17.jpg",
    ],
  },
];

export const SeasonalEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/galas/gallery/1.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "2",
    src: "/events/galas/gallery/2.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "3",
    src: "/events/galas/gallery/3.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "4",
    src: "/events/galas/gallery/4.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "5",
    src: "/events/galas/gallery/5.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "6",
    src: "/events/galas/gallery/6.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "7",
    src: "/events/galas/gallery/7.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "8",
    src: "/events/galas/gallery/8.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "9",
    src: "/events/galas/gallery/9.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "10",
    src: "/events/galas/gallery/10.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "11",
    src: "/events/galas/gallery/11.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
  {
    id: "12",
    src: "/events/galas/gallery/12.jpg",
    alt: "Seasonal Events produced by MMEink",
  },
];

export const SeasonalEventsFAQ = [
  {
    question: "When should we start planning a holiday event?",
    answer:
      "We recommend starting in late summer for December events. Venues and talent book out early, and early planning secures better options and pricing.",
  },
  {
    question: "Can seasonal décor be reused next year?",
    answer:
      "Yes. Many clients store custom builds in our warehouse and reuse them annually, which materially reduces cost in later years.",
  },
  {
    question: "Do you handle seasonal installations for public spaces?",
    answer:
      "We do. We produce installations for lobbies, retail environments, and public spaces, including permitting and compliance where required.",
  },
  {
    question: "Can you refresh a concept we already run each year?",
    answer:
      "Yes. We frequently take an existing annual event and evolve it, keeping what works while introducing new elements each season.",
  },
];
