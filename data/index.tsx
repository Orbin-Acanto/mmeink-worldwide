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
  ClipboardCheck,
  Orbit,
  Theater,
  PersonStanding,
  Flame,
  Wand2,
  Music,
  Palette,
  Star,
} from "lucide-react";

export const navItems = [
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "About Us", href: "/about" },
      { name: "Sizzle Reel", href: "/about/sizzle-reel" },
      { name: "Digital Brochure", href: "/about/brochure" },
    ],
  },
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
      {
        name: "Specialty Entertainment",
        href: "/services/specialty-entertainment",
      },
      { name: "Logistics", href: "/services/logistics" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    submenu: [
      { name: "Brand Activations", href: "/events/brand-activations" },
      { name: "Product Launches", href: "/events/product-launches" },
      { name: "Exhibitions & Trade Shows", href: "/events/exhibits-trade-shows" },
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
    image: "/home/featured-work/work-01.png",
    href: "/work/work-details",
  },
  {
    id: 2,
    title: "Holiday Celebration",
    category: "Festive Experience",
    image: "/home/featured-work/work-02.png",
    href: "/work/work-details",
  },
  {
    id: 3,
    title: "Winter Wonderland",
    category: "Seasonal Installation",
    image: "/home/featured-work/work-03.png",
    href: "/work/work-details",
  },
  {
    id: 4,
    title: "Michelob Ultra",
    category: "Brand Activation",
    image: "/home/featured-work/work-04.png",
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
    image: "/home/services-grid/card-01.jpg",
    href: "/events/brand-activations",
  },
  {
    id: "exhibits-trade-shows",
    name: "Exhibitions & Trade Shows",
    image: "/home/services-grid/card-02.jpg",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image: "/home/services-grid/card-03.jpg",
    href: "/events/conferences-meetings",
  },
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image: "/home/services-grid/card-04.jpeg",
    href: "/services/custom-fabrication",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image: "/home/services-grid/card-05.jpg",
    href: "/services/audio-visual",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image: "/home/services-grid/card-06.jpg",
    href: "/services/design-decor",
  },
];

export const events = [
  {
    id: "brand-activations",
    name: "Brand Activations",
    image: "/events/index/cards/card-01.jpg",
    href: "/events/brand-activations",
  },
  {
    id: "product-launches",
    name: "Product Launches",
    image: "/events/index/cards/card-02.jpg",
    href: "/events/product-launches",
  },
  {
    id: "exhibitions",
    name: "Exhibitions & Trade Shows",
    image: "/events/index/cards/card-03.jpg",
    href: "/events/exhibits-trade-shows",
  },
  {
    id: "conferences-meetings",
    name: "Conferences & Meetings",
    image: "/events/index/cards/card-04.jpg",
    href: "/events/conferences-meetings",
  },
  {
    id: "award-dinners",
    name: "Award Dinners",
    image: "/events/index/cards/card-05.png",
    href: "/events/award-dinners",
  },
  {
    id: "galas",
    name: "Galas",
    image: "/events/index/cards/card-06.jpg",
    href: "/events/galas",
  },
  {
    id: "corporate-events",
    name: "Corporate Events",
    image: "/events/index/cards/card-07.png",
    href: "/events/corporate-events",
  },
  {
    id: "themed-events",
    name: "Themed Events",
    image: "/events/index/cards/card-08.png",
    href: "/events/themed-events",
  },
  {
    id: "seasonal-events",
    name: "Seasonal Events",
    image: "/events/index/cards/card-09.png",
    href: "/events/seasonal-events",
  },
  {
    id: "virtual-hybrid-events",
    name: "Virtual & Hybrid Events",
    image: "/events/index/cards/card-10.jpg",
    href: "/events/virtual-hybrid-events",
  },
];
export const services = [
  {
    id: "custom-fabrication",
    name: "Custom Fabrication",
    image: "/services/index/cards/card-01.jpeg",
    href: "/services/custom-fabrication",
  },
  {
    id: "printing",
    name: "Printing",
    image: "/services/index/cards/card-02.png",
    href: "/services/printing",
  },
  {
    id: "audio-visual",
    name: "Audio Visual",
    image: "/services/index/cards/card-03.jpg",
    href: "/services/audio-visual",
  },
  {
    id: "lighting",
    name: "Lighting",
    image: "/services/index/cards/card-04.png",
    href: "/services/lighting",
  },
  {
    id: "staging",
    name: "Staging",
    image: "/services/index/cards/card-05.png",
    href: "/services/staging",
  },
  {
    id: "design-decor",
    name: "Design & Decor",
    image: "/services/index/cards/card-06.jpg",
    href: "/services/design-decor",
  },
  {
    id: "themes",
    name: "Themes",
    image: "/services/index/cards/card-07.png",
    href: "/services/themes",
  },
  {
    id: "props",
    name: "Props",
    image: "/services/index/cards/card-08.png",
    href: "/services/props",
  },
  {
    id: "rentals",
    name: "Rentals",
    image: "/services/index/cards/card-09.jpg",
    href: "/services/rentals",
  },
  {
    id: "musical-entertainment",
    name: "Musical Entertainment",
    image: "/services/index/cards/card-10.png",
    href: "/services/musical-entertainment",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    image: "/services/index/cards/card-11.png",
    href: "/services/entertainment",
  },
  {
    id: "specialty-entertainment",
    name: "Specialty Entertainment",
    image: "/services/index/cards/card-12.png",
    href: "/services/specialty-entertainment",
  },
  {
    id: "logistics",
    name: "Logistics",
    image: "/services/index/cards/card-13.jpg",
    href: "/services/logistics",
  },
];

export const clientLogos: ClientLogo[] = [
  {
    id: "50-50-women-on-boards",
    name: "50/50 Women on Boards",
    alt: "50/50 Women on Boards logo, nonprofit advocacy organization and MME Worldwide client",
    src: "/home/client-logos/logo-01.webp",
  },
  {
    id: "asics",
    name: "ASICS",
    alt: "ASICS logo, athletic footwear and apparel brand and MME Worldwide client",
    src: "/home/client-logos/logo-02.png",
  },
  {
    id: "atandt",
    name: "AT&T",
    alt: "AT&T logo, telecommunications company and MME Worldwide client",
    src: "/home/client-logos/logo-03.png",
  },
  {
    id: "aande",
    name: "A&E",
    alt: "A&E logo, television network and MME Worldwide client",
    src: "/home/client-logos/logo-04.png",
  },
  {
    id: "the-webby-awards",
    name: "The Webby Awards",
    alt: "The Webby Awards logo, internet awards program and MME Worldwide client",
    src: "/home/client-logos/logo-05.png",
  },
  {
    id: "samsung",
    name: "Samsung",
    alt: "Samsung logo, consumer electronics company and MME Worldwide client",
    src: "/home/client-logos/logo-06.png",
  },
  {
    id: "antwerp-world-diamond-centre",
    name: "Antwerp World Diamond Centre",
    alt: "Antwerp World Diamond Centre logo, diamond industry organization and MME Worldwide client",
    src: "/home/client-logos/logo-07.png",
  },
  {
    id: "emarketer",
    name: "EMARKETER",
    alt: "EMARKETER logo, market research and business intelligence firm and MME Worldwide client",
    src: "/home/client-logos/logo-08.png",
  },
  {
    id: "adidas",
    name: "adidas",
    alt: "adidas logo, sportswear brand and MME Worldwide client",
    src: "/home/client-logos/logo-09.png",
  },
  {
    id: "gazprom",
    name: "Gazprom",
    alt: "Gazprom logo, energy company and MME Worldwide client",
    src: "/home/client-logos/logo-10.png",
  },
  {
    id: "northwell-huntington-hospital",
    name: "Northwell Huntington Hospital",
    alt: "Northwell Huntington Hospital logo, healthcare provider and MME Worldwide client",
    src: "/home/client-logos/logo-11.png",
  },
  {
    id: "james-beard-foundation",
    name: "James Beard Foundation",
    alt: "James Beard Foundation logo, culinary nonprofit organization and MME Worldwide client",
    src: "/home/client-logos/logo-12.png",
  },
  {
    id: "standard-chartered",
    name: "Standard Chartered",
    alt: "Standard Chartered logo, international bank and MME Worldwide client",
    src: "/home/client-logos/logo-13.png",
  },
  {
    id: "ibm",
    name: "IBM",
    alt: "IBM logo, technology company and MME Worldwide client",
    src: "/home/client-logos/logo-14.png",
  },
  {
    id: "ocean-drive",
    name: "Ocean Drive",
    alt: "Ocean Drive logo, lifestyle magazine and MME Worldwide client",
    src: "/home/client-logos/logo-15.png",
  },
  {
    id: "cond-nast",
    name: "Condé Nast",
    alt: "Condé Nast logo, media and publishing company and MME Worldwide client",
    src: "/home/client-logos/logo-16.png",
  },
  {
    id: "google",
    name: "Google",
    alt: "Google logo, technology company and MME Worldwide client",
    src: "/home/client-logos/logo-17.png",
  },
  {
    id: "visit-m-xico",
    name: "Visit México",
    alt: "Visit México logo, national tourism board and MME Worldwide client",
    src: "/home/client-logos/logo-18.png",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    alt: "Salesforce logo, enterprise software company and MME Worldwide client",
    src: "/home/client-logos/logo-19.png",
  },
  {
    id: "ropes-and-gray",
    name: "Ropes & Gray",
    alt: "Ropes & Gray logo, international law firm and MME Worldwide client",
    src: "/home/client-logos/logo-20.png",
  },
  {
    id: "clase-azul-m-xico",
    name: "Clase Azul México",
    alt: "Clase Azul México logo, luxury tequila brand and MME Worldwide client",
    src: "/home/client-logos/logo-21.png",
  },
  {
    id: "simpson-thacher",
    name: "Simpson Thacher",
    alt: "Simpson Thacher logo, international law firm and MME Worldwide client",
    src: "/home/client-logos/logo-22.png",
  },
  {
    id: "the-est-e-lauder-companies",
    name: "The Estée Lauder Companies",
    alt: "The Estée Lauder Companies logo, beauty and cosmetics company and MME Worldwide client",
    src: "/home/client-logos/logo-23.png",
  },
  {
    id: "michelob-ultra",
    name: "Michelob Ultra",
    alt: "Michelob Ultra logo, beer brand and MME Worldwide client",
    src: "/home/client-logos/logo-24.png",
  },
  {
    id: "rolling-rock",
    name: "Rolling Rock",
    alt: "Rolling Rock logo, beer brand and MME Worldwide client",
    src: "/home/client-logos/logo-25.png",
  },
  {
    id: "us-foods",
    name: "US Foods",
    alt: "US Foods logo, foodservice distributor and MME Worldwide client",
    src: "/home/client-logos/logo-26.png",
  },
  {
    id: "sweet-n-low",
    name: "Sweet'N Low",
    alt: "Sweet'N Low logo, consumer food brand and MME Worldwide client",
    src: "/home/client-logos/logo-27.png",
  },
  {
    id: "opentext",
    name: "OpenText",
    alt: "OpenText logo, enterprise software company and MME Worldwide client",
    src: "/home/client-logos/logo-28.png",
  },
  {
    id: "skullcandy",
    name: "Skullcandy",
    alt: "Skullcandy logo, audio products brand and MME Worldwide client",
    src: "/home/client-logos/logo-29.png",
  },
  {
    id: "tommy-hilfiger",
    name: "Tommy Hilfiger",
    alt: "Tommy Hilfiger logo, fashion brand and MME Worldwide client",
    src: "/home/client-logos/logo-30.png",
  },
  {
    id: "swiss-re",
    name: "Swiss Re",
    alt: "Swiss Re logo, reinsurance company and MME Worldwide client",
    src: "/home/client-logos/logo-31.png",
  },
  {
    id: "havas-media",
    name: "Havas Media",
    alt: "Havas Media logo, global media agency and MME Worldwide client",
    src: "/home/client-logos/logo-32.png",
  },
];

export const team = [
  {
    id: 1,
    name: "Michael Tardi",
    role: "Owner",
    bio: "Visionary leader with 30 years of experience transforming events into unforgettable experiences.",
    avatar: "/about/team/michael-tardi.jpg",
    linkedin: "https://www.linkedin.com/in/michael-tardi-1788672a/",
    email: "mtardi@mmeink.com",
  },
  {
    id: 2,
    name: "Lauren Leuci",
    role: "Director of Events",
    bio: "Award winning designer specializing in immersive event experiences and brand activations.",
    avatar: "/about/team/lauren-leuci.png",
    linkedin: "https://www.linkedin.com/in/lauren-leuci-a47075242/",
    email: "lleuci@mmeink.com",
  },
  {
    id: 3,
    name: "Andrew Heaton",
    role: "Director of Operations",
    bio: "Technical expert ensuring flawless execution of complex events with precision and care.",
    avatar: "/about/team/andrew-heaton.png",
    linkedin: "#",
    email: "aheaton@mmeink.com",
  },
  {
    id: 4,
    name: "Juan Fuentes",
    role: "Director of Events & Production",
    bio: "Dedicated to building lasting partnerships and exceeding client expectations every time.",
    avatar: "/about/team/juan-fuentes.png",
    linkedin: "#",
    email: "apalacio@mmeink.com",
  },
  {
    id: 5,
    name: "Andrea Palacio",
    role: "Manager of Events & Production",
    bio: "Audio visual specialist with expertise in cutting edge technology and innovative solutions.",
    avatar: null,
    linkedin: "#",
    email: "dhyatt@mmeink.com",
  },
  {
    id: 6,
    name: "Herberto Deleon",
    role: "Director of Creative Fabrication",
    bio: "Audio visual specialist with expertise in cutting edge technology and innovative solutions.",
    avatar: "/about/team/herberto-deleon.png",
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
      "Opened Miami location, establishing MMEink as a tri state powerhouse in event production.",
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
      "/about/locations/new-york.png",
  },
  {
    city: "Long Island",
    address: "Premium Event Venue",
    image: "/about/locations/long-island.jpg",
  },
  {
    city: "Miami",
    address: "Coastal Event Center",
    image:
      "/about/locations/miami.png",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "5050 Women on Boards Global Summit",
    venue: "48 Wall St, NYC",
    eventType: "Conference",
    category: "conference",
    image: "/work/projects/5050-women-on-boards/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Buckley School Nonprofit Events",
    venue: "The Artistry Museum",
    eventType: "Nonprofit Events",
    category: "non-profit-events",
    image: "/work/projects/buckley-school/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Builders Risk & Construction",
    venue: "48 Wall St, NYC",
    eventType: "Corporate",
    category: "Corporate Event",
    image: "/work/projects/builders-risk-and-constrution/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "4",
    title: "Carnegie Melon 30th Anniversary Celebration",
    venue: "48 Wall St, NYC",
    eventType: "conference",
    category: "conference",
    image: "/work/projects/carnegie-melon/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "5",
    title: "DTA Annual Holiday Dinner",
    venue: "60 Pine",
    eventType: "Corporate",
    category: "corporate",
    image: "/work/projects/dta/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "6",
    title: "F Suite CFO Strategy Summit",
    venue: "Hybrid Platform",
    eventType: "conference",
    category: "conference",
    image: "/work/projects/f-suite/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "7",
    title: "Friedman & Kaplan Holiday Party 2025",
    venue: "Friedman and Kaplan Office",
    eventType: "Holiday Event",
    category: "holiday-event",
    image: "/work/projects/friedman-and-kaplan/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "8",
    title: "Ikebana",
    venue: "60 Pine",
    eventType: "Conference",
    category: "conference",
    image: "/work/projects/ikebana/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "9",
    title: "International College Reunion 2025",
    venue: "60 Pine",
    eventType: "Reunion Party",
    category: "reunion-party",
    image: "/work/projects/international-college-reunion/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "10",
    title: "Maxim Growth Summit 2025",
    venue: "The Venue",
    eventType: "Corporate",
    category: "corporate",
    image: "/work/projects/maxim-group/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "11",
    title: "Morgan Stanley Gala",
    venue: "The Artistry Museum",
    eventType: "Galas",
    category: "galas",
    image: "/work/projects/morgan-stanley/cover.jpg",
    href: "/work/work-details",
  },
  {
    id: "12",
    title: "Nest+m Masquerade Gala",
    venue: "Fidi Banking Hall",
    eventType: "Galas",
    category: "galas",
    image: "/work/projects/nest-m/cover.jpg",
    href: "/work/work-details",
  },
];

/* ------------------------------------------------------------------ */
/* Per page views of the twelve client projects                        */
/* ------------------------------------------------------------------ */

/**
 * The Our Work page shows each client project at its cover crop. The three
 * showcases below show the same twelve projects at different crops, so each
 * one holds its own copy of the artwork under its own folder, and each takes a
 * different frame from the same client shoot so no two pages repeat a picture.
 *
 * Titles, venues and links stay shared, so renaming a project is still one
 * edit. The paths are written out in full rather than generated, so the link
 * and orphan checkers can verify every one of them.
 */
const withArtwork = (images: string[]) =>
  projects.map((project, index) => ({ ...project, image: images[index] }));

/** Scrolling band on the home page, headed Our Event Productions. */
export const homeMarqueeProjects = withArtwork([
    "/home/work-marquee/marquee-01.jpg",
    "/home/work-marquee/marquee-02.jpg",
    "/home/work-marquee/marquee-03.jpg",
    "/home/work-marquee/marquee-04.jpg",
    "/home/work-marquee/marquee-05.jpg",
    "/home/work-marquee/marquee-06.jpg",
    "/home/work-marquee/marquee-07.jpg",
    "/home/work-marquee/marquee-08.jpg",
    "/home/work-marquee/marquee-09.jpg",
    "/home/work-marquee/marquee-10.jpg",
    "/home/work-marquee/marquee-11.jpg",
    "/home/work-marquee/marquee-12.jpg",
]);

/** Scrolling band on the events overview page. */
export const eventsMarqueeProjects = withArtwork([
    "/events/work-marquee/marquee-01.jpg",
    "/events/work-marquee/marquee-02.jpg",
    "/events/work-marquee/marquee-03.jpg",
    "/events/work-marquee/marquee-04.jpg",
    "/events/work-marquee/marquee-05.jpg",
    "/events/work-marquee/marquee-06.jpg",
    "/events/work-marquee/marquee-07.jpg",
    "/events/work-marquee/marquee-08.jpg",
    "/events/work-marquee/marquee-09.jpg",
    "/events/work-marquee/marquee-10.jpg",
    "/events/work-marquee/marquee-11.jpg",
    "/events/work-marquee/marquee-12.jpg",
]);

/** Rotating showcase at the foot of the services overview page. */
export const servicesFeaturedProjects = withArtwork([
    "/services/featured-projects/project-01.jpg",
    "/services/featured-projects/project-02.jpg",
    "/services/featured-projects/project-03.jpg",
    "/services/featured-projects/project-04.jpg",
    "/services/featured-projects/project-05.jpg",
    "/services/featured-projects/project-06.jpg",
    "/services/featured-projects/project-07.jpg",
    "/services/featured-projects/project-08.jpg",
    "/services/featured-projects/project-09.jpg",
    "/services/featured-projects/project-10.jpg",
    "/services/featured-projects/project-11.jpg",
    "/services/featured-projects/project-12.jpg",
]);

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
      "MMEink offers comprehensive event production services including audio visual solutions, lighting design, stage production, event management, and technical support. We handle everything from corporate conferences to large scale galas.",
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
      "With 30 years of expertise, in house capabilities, and 24/7 support, we offer unmatched reliability and quality. Our team handles every detail from concept to completion, ensuring seamless execution for your event.",
  },
  {
    question: "Do you work with events outside of New York?",
    answer:
      "Yes! While we're based in New York, we provide event production services nationwide. Our experienced team travels to deliver the same high quality service regardless of location.",
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
      "An outstanding end of year celebration hosted at 48 Wall Street, marked by exceptional service, professionalism, and attention to detail from start to finish. The venue is stunning, the staff attentive and gracious, and the experience created a memorable and meaningful evening that made employees feel truly appreciated. Highly recommended, with hopes to work together again.",
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
      "/work/project-details/slides/slide-01.png",
    alt: "Conference Setup",
  },
  {
    id: "2",
    image:
      "/work/project-details/slides/slide-02.png",
    alt: "Event Production",
  },
  {
    id: "3",
    image:
      "/work/project-details/slides/slide-03.png",
    alt: "Stage Design",
  },
  {
    id: "4",
    image:
      "/work/project-details/slides/slide-04.png",
    alt: "Event Decor",
  },
  {
    id: "5",
    image:
      "/work/project-details/slides/slide-05.png",
    alt: "Gala Setup",
  },
];

export const RelatedProject = [
  {
    id: "1",
    title: "Spotify Brand Experience",
    category: "Brand Activation",
    image:
      "/work/project-details/related/project-01.png",
    href: "/work/work-details",
  },
  {
    id: "2",
    title: "Tech Innovation Summit",
    category: "Corporate | Conferences",
    image:
      "/work/project-details/related/project-02.png",
    href: "/work/work-details",
  },
  {
    id: "3",
    title: "Fashion Week Gala",
    category: "Private Events",
    image:
      "/work/project-details/related/project-03.png",
    href: "/work/work-details",
  },
];

export const ProductLaunchesEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Product Reveal Events",
    description:
      "Create anticipation and excitement with impactful product reveal experiences. We design immersive environments, stage moments, and visual storytelling that highlight your product’s features and value.",
    image: "/events/product-launches/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Media & Influencer Launches",
    description:
      "Engage media and influencers with visually compelling launch events designed for coverage, content creation, and social sharing. Every detail is crafted to maximize exposure and brand reach.",
    image: "/events/product-launches/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Presentation,
    headline: "Corporate Product Announcements",
    description:
      "Deliver polished, professional product announcements for internal teams, partners, or clients. We manage staging, AV, and production to ensure your message is clear, confident, and impactful.",
    image: "/events/product-launches/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Experiential Launch Activations",
    description:
      "Transform your launch into an interactive experience. From hands on demos to immersive brand environments, we create activations that drive engagement and lasting impressions.",
    image: "/events/product-launches/what-we-do/offering-04.jpg",
  },
];

export const ProductLaunchesCaseStudiesData = [
  {
    id: "1",
    clientName: "Adidas",
    projectTitle: "Adidas Experiential Product Launch",
    challenge:
      "Adidas needed a high impact product launch that could showcase new footwear in an immersive, on brand environment while engaging guests through interaction, movement, and visual storytelling within a temporary event space.",
    solution:
      "We transformed the venue into a fully branded experiential environment featuring custom fabrication, illuminated product displays, branded courts, interactive stations, and dynamic lighting to reinforce Adidas’ performance driven identity.",
    impact:
      "The activation delivered strong guest engagement, increased product interaction, and elevated brand visibility. Attendees spent extended time exploring the space, creating social content and leaving with a memorable hands on brand experience.",
    gallery: [
      "/events/product-launches/case-study/case-study-01.jpg",
      "/events/product-launches/case-study/case-study-02.jpg",
      "/events/product-launches/case-study/case-study-03.jpg",
      "/events/product-launches/case-study/case-study-04.jpg",
      "/events/product-launches/case-study/case-study-05.jpg",
      "/events/product-launches/case-study/case-study-06.jpg",
    ],
  },
];

export const ProductLaunchesImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/product-launches/gallery/gallery-01.jpg",
    alt: "Immersive product launch event experience",
  },
  {
    id: "2",
    src: "/events/product-launches/gallery/gallery-02.jpg",
    alt: "Branded product reveal with stage lighting",
  },
  {
    id: "3",
    src: "/events/product-launches/gallery/gallery-03.jpg",
    alt: "Corporate product launch presentation stage",
  },
  {
    id: "4",
    src: "/events/product-launches/gallery/gallery-04.jpg",
    alt: "Luxury product unveiling event setup",
  },
  {
    id: "5",
    src: "/events/product-launches/gallery/gallery-05.jpg",
    alt: "Interactive product demonstration area",
  },
  {
    id: "6",
    src: "/events/product-launches/gallery/gallery-06.jpg",
    alt: "Large scale product launch with LED screens",
  },
  {
    id: "7",
    src: "/events/product-launches/gallery/gallery-07.jpg",
    alt: "Modern product launch stage design",
  },
  {
    id: "8",
    src: "/events/product-launches/gallery/gallery-08.jpg",
    alt: "Product launch event with audience engagement",
  },
  {
    id: "9",
    src: "/events/product-launches/gallery/gallery-09.jpg",
    alt: "High impact brand reveal at product launch",
  },
  {
    id: "10",
    src: "/events/product-launches/gallery/gallery-10.jpg",
    alt: "Product launch lighting and scenic design",
  },
  {
    id: "11",
    src: "/events/product-launches/gallery/gallery-11.jpg",
    alt: "Executive product announcement event",
  },
  {
    id: "12",
    src: "/events/product-launches/gallery/gallery-12.jpg",
    alt: "Product launch event with custom branding",
  },
  {
    id: "13",
    src: "/events/product-launches/gallery/gallery-13.jpg",
    alt: "Immersive brand storytelling at product launch",
  },
  {
    id: "14",
    src: "/events/product-launches/gallery/gallery-14.jpg",
    alt: "Product launch experience with multimedia displays",
  },
  {
    id: "15",
    src: "/events/product-launches/gallery/gallery-15.jpg",
    alt: "Premium product launch environment design",
  },
  {
    id: "16",
    src: "/events/product-launches/gallery/gallery-16.jpg",
    alt: "Technology focused product launch presentation",
  },
  {
    id: "17",
    src: "/events/product-launches/gallery/gallery-17.jpg",
    alt: "Product launch event with keynote speaker",
  },
  {
    id: "18",
    src: "/events/product-launches/gallery/gallery-18.jpg",
    alt: "Branded product showcase installation",
  },
  {
    id: "19",
    src: "/events/product-launches/gallery/gallery-19.jpg",
    alt: "Product launch stage with dramatic lighting",
  },
  {
    id: "20",
    src: "/events/product-launches/gallery/gallery-20.jpg",
    alt: "Corporate product launch audience experience",
  },
  {
    id: "21",
    src: "/events/product-launches/gallery/gallery-21.jpg",
    alt: "Product launch activation with custom visuals",
  },
  {
    id: "22",
    src: "/events/product-launches/gallery/gallery-22.jpg",
    alt: "High end product reveal event production",
  },
  {
    id: "23",
    src: "/events/product-launches/gallery/gallery-23.jpg",
    alt: "Product launch environment with branded elements",
  },
  {
    id: "24",
    src: "/events/product-launches/gallery/gallery-24.jpg",
    alt: "Immersive launch event with experiential design",
  },
  {
    id: "25",
    src: "/events/product-launches/gallery/gallery-25.jpg",
    alt: "Product launch experience with lighting and staging",
  },
  {
    id: "26",
    src: "/events/product-launches/gallery/gallery-26.jpg",
    alt: "Corporate brand product launch event setup",
  },
  {
    id: "27",
    src: "/events/product-launches/gallery/gallery-27.jpg",
    alt: "Large scale product launch production and staging",
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
      "Yes. We manage the full product launch process including creative concepting, event design, production, audio visual, staging, and on site execution.",
  },
  {
    question: "Can product launches be customized to our brand?",
    answer:
      "Absolutely. Every launch is custom designed to align with your brand identity, messaging, and campaign goals.",
  },
  {
    question: "Do you support media and influencer focused launches?",
    answer:
      "Yes. We design launches that attract media and influencers, creating visually compelling moments that encourage coverage and social sharing.",
  },
  {
    question: "Can you manage short timelines or last minute launches?",
    answer:
      "Yes. Our in house production capabilities allow us to support accelerated timelines based on scope, availability, and technical requirements.",
  },
  {
    question: "Do you produce product launches outside of New York?",
    answer:
      "Yes. We produce product launches nationwide, delivering the same level of quality and execution regardless of location.",
  },
];
// Product Launches Event Data End

// Exhibitions & Trade Shows Event Data Start
export const ExhibitsTradeShowsEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Exhibit & Exhibition Design",
    description:
      "Island, peninsula, and inline trade show booths, plus brand exhibitions and showrooms people walk through rather than past. Concept, engineering, scenic build, graphics, and lighting are developed together in our own shop.",
    image: "/events/exhibits-trade-shows/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: ClipboardCheck,
    headline: "Show Services & Compliance",
    description:
      "Booth drawings, exhibitor kits, electrical and rigging orders, drayage, and union labour coordination, all handled against the organiser's deadlines rather than yours.",
    image: "/events/exhibits-trade-shows/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Users,
    headline: "Visitor Flow & Engagement",
    description:
      "We plan the route before we build the walls. Entrance moments, demo stations, hospitality bars, and presentation theatres are laid out so visitors move at the pace the story needs and stay long enough to start a conversation.",
    image: "/events/exhibits-trade-shows/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Touring & Long Run Exhibitions",
    description:
      "Exhibitions engineered to travel and to survive months of public traffic. Reusable crating, hard wearing finishes, refreshable graphics, warehousing between cities, and the same install plan in every venue.",
    image: "/events/exhibits-trade-shows/what-we-do/offering-04.jpg",
  },
];

export const ExhibitsTradeShowsCaseStudiesData = [
  {
    id: "1",
    clientName: "Formula E",
    projectTitle: "Formula E Brooklyn Experience",
    challenge:
      "Formula E required a high impact event environment that could support racing operations, sponsor visibility, and large crowds in a waterfront urban setting. The experience needed to balance safety, branding, and guest engagement while maintaining seamless flow across multiple activation zones.",
    solution:
      "We delivered a fully integrated event build featuring branded installations, modular structures, lighting, and experiential zones designed for both spectators and partners. Our team managed layout planning, on site coordination, and technical execution to ensure a cohesive and polished experience throughout the venue.",
    impact:
      "The event successfully engaged thousands of attendees while providing strong brand exposure for sponsors and partners. The environment enhanced the overall race experience, supported smooth event operations, and reinforced Formula E’s presence as a premier global motorsport brand in New York City.",
    gallery: [
      "/events/exhibits-trade-shows/case-study/case-study-01.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-02.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-03.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-04.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-05.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-06.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-07.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-08.jpg",
      "/events/exhibits-trade-shows/case-study/case-study-09.jpg",
    ],
  },
];

export const ExhibitsTradeShowsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/exhibits-trade-shows/gallery/gallery-01.jpg",
    alt: "Custom trade show exhibit with branded booth design",
  },
  {
    id: "2",
    src: "/events/exhibits-trade-shows/gallery/gallery-02.jpg",
    alt: "Modern exhibition booth with integrated lighting and graphics",
  },
  {
    id: "3",
    src: "/events/exhibits-trade-shows/gallery/gallery-03.jpg",
    alt: "Trade show floor with large scale branded exhibits",
  },
  {
    id: "4",
    src: "/events/exhibits-trade-shows/gallery/gallery-04.jpg",
    alt: "Custom exhibit fabrication for corporate trade show",
  },
  {
    id: "5",
    src: "/events/exhibits-trade-shows/gallery/gallery-05.jpg",
    alt: "Interactive trade show booth attracting attendees",
  },
  {
    id: "7",
    src: "/events/exhibits-trade-shows/gallery/gallery-06.jpg",
    alt: "Branded trade show display with clean architectural design",
  },
  {
    id: "8",
    src: "/events/exhibits-trade-shows/gallery/gallery-07.jpg",
    alt: "Trade show exhibit showcasing product demonstrations",
  },
  {
    id: "9",
    src: "/events/exhibits-trade-shows/gallery/gallery-08.jpg",
    alt: "Exhibition hall with multiple custom built booths",
  },
  {
    id: "10",
    src: "/events/exhibits-trade-shows/gallery/gallery-09.jpg",
    alt: "High impact trade show booth with bold brand graphics",
  },
  {
    id: "11",
    src: "/events/exhibits-trade-shows/gallery/gallery-10.jpg",
    alt: "Corporate exhibit featuring interactive brand elements",
  },
  {
    id: "12",
    src: "/events/exhibits-trade-shows/gallery/gallery-11.jpg",
    alt: "Trade show booth with custom counters and signage",
  },
  {
    id: "13",
    src: "/events/exhibits-trade-shows/gallery/gallery-12.jpg",
    alt: "Exhibit space designed for attendee engagement",
  },
  {
    id: "14",
    src: "/events/exhibits-trade-shows/gallery/gallery-13.jpg",
    alt: "Large scale trade show installation with lighting design",
  },
  {
    id: "15",
    src: "/events/exhibits-trade-shows/gallery/gallery-14.jpg",
    alt: "Minimalist exhibition booth with premium finishes",
  },
  {
    id: "16",
    src: "/events/exhibits-trade-shows/gallery/gallery-15.jpg",
    alt: "Trade show display highlighting product branding",
  },
  {
    id: "17",
    src: "/events/exhibits-trade-shows/gallery/gallery-16.jpg",
    alt: "Custom trade show booth designed for networking",
  },
  {
    id: "18",
    src: "/events/exhibits-trade-shows/gallery/gallery-17.jpg",
    alt: "Exhibit booth with immersive brand experience elements",
  },
  {
    id: "19",
    src: "/events/exhibits-trade-shows/gallery/gallery-18.jpg",
    alt: "Trade show environment with coordinated booth layout",
  },
  {
    id: "20",
    src: "/events/exhibits-trade-shows/gallery/gallery-19.jpg",
    alt: "Exhibition booth featuring branded lighting and displays",
  },
  {
    id: "21",
    src: "/events/exhibits-trade-shows/gallery/gallery-20.jpg",
    alt: "Corporate trade show exhibit with custom fabrication",
  },
  {
    id: "22",
    src: "/events/exhibits-trade-shows/gallery/gallery-21.jpg",
    alt: "Trade show booth setup prior to event opening",
  },
  {
    id: "23",
    src: "/events/exhibits-trade-shows/gallery/gallery-22.jpg",
    alt: "Exhibit hall showcasing premium brand activations",
  },
  {
    id: "25",
    src: "/events/exhibits-trade-shows/gallery/gallery-23.jpg",
    alt: "Custom built exhibition booth with strong brand presence",
  },
  {
    id: "26",
    src: "/events/exhibits-trade-shows/gallery/gallery-24.jpg",
    alt: "Exhibition backwall combining scenic build, graphics, and integrated lighting",
  },

  {
    id: "27",
    src: "/events/exhibits-trade-shows/gallery/gallery-25.jpg",
    alt: "Showroom environment with custom casework and product plinths",
  },
  {
    id: "28",
    src: "/events/exhibits-trade-shows/gallery/gallery-26.jpg",
    alt: "Immersive exhibition room built around a single brand story",
  },
  {
    id: "29",
    src: "/events/exhibits-trade-shows/gallery/gallery-27.jpg",
    alt: "Visitor route laid out through a branded exhibition space",
  },
  {
    id: "30",
    src: "/events/exhibits-trade-shows/gallery/gallery-28.jpg",
    alt: "Interactive station built into an exhibition wall",
  },
  {
    id: "31",
    src: "/events/exhibits-trade-shows/gallery/gallery-29.jpg",
    alt: "Exhibition graphics printed and installed by the MME print floor",
  },
  {
    id: "32",
    src: "/events/exhibits-trade-shows/gallery/gallery-30.jpg",
    alt: "Touring exhibition components crated for the next city",
  },
  {
    id: "33",
    src: "/events/exhibits-trade-shows/gallery/gallery-31.jpg",
    alt: "Exhibition lighting picking out product displays after dark",
  },
  {
    id: "34",
    src: "/events/exhibits-trade-shows/gallery/gallery-32.jpg",
    alt: "Public brand installation built for a long run in a busy venue",
  },
  {
    id: "35",
    src: "/events/exhibits-trade-shows/gallery/gallery-33.jpg",
    alt: "Finished exhibition space photographed before opening",
  },
];

export const ExhibitsTradeShowsFaqs = [
  {
    question: "What does MME Worldwide handle on an exhibit or an exhibition?",
    answer:
      "We take it from concept and storyline through design, engineering, scenic fabrication, graphics, lighting, audio visual, show services paperwork, install, and strike. Because the shop and the print floor are ours, the thing that gets built is the thing that was drawn.",
  },
  {
    question: "Do you handle union labour and drayage on the show floor?",
    answer:
      "We do. Our team coordinates general contractor orders, union labour calls, material handling, and drayage, and our supervisors stay on the floor through set up and tear down.",
  },
  {
    question: "Do you handle installation and strike?",
    answer:
      "We do. Our crews deliver, install, stay on site through opening, and strike at the end of the run, then store or dispose of the build as agreed.",
  },
  {
    question: "Can you work within a venue's rules and safety requirements?",
    answer:
      "Yes. We work to venue regulations, fire ratings, load limits, accessibility requirements, and union rules, and we supply the drawings and documentation a venue or municipality asks for before install.",
  },
  {
    question: "Can the same build travel to more than one show or city?",
    answer:
      "Yes, and it is usually the cheaper path. We engineer travelling exhibits to pack into reusable crates, warehouse them between shows, refresh graphics as the messaging changes, and follow the same install plan at every stop.",
  },
  {
    question: "How far in advance should we start?",
    answer:
      "Ten to sixteen weeks suits a custom island booth, because booth drawings, rigging approvals, and electrical orders carry show deadlines weeks before the doors open. A full exhibition is closer to three to six months. Inline and modular builds move considerably faster, so tell us the date and we will tell you honestly what fits.",
  },
];
// Exhibitions & Trade Shows Event Data End

// Brand Activation Event Data Start
export const BrandActivationEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Experiential Brand Activations",
    description:
      "We design immersive brand activations that transform messaging into real world experiences. From pop ups to interactive installations, our team brings your brand story to life through thoughtful design, strategic production, and flawless execution.",
    image: "/events/brand-activations/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Consumer Engagement Experiences",
    description:
      "Create meaningful connections with your audience through interactive, share worthy experiences. We craft activations that invite participation, encourage social engagement, and leave a lasting impression long after the event ends.",
    image: "/events/brand-activations/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Product Launch Activations",
    description:
      "Launch your product with impact. We produce visually compelling activations that generate buzz, attract media attention, and showcase your product through immersive environments and curated brand moments.",
    image: "/events/brand-activations/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Corporate Brand Experiences",
    description:
      "Elevate your brand presence with polished, high impact experiences designed for corporate audiences. From internal brand moments to large scale activations, we deliver experiences that align with your brand values and business goals.",
    image: "/events/brand-activations/what-we-do/offering-04.jpg",
  },
];

export const BrandActivationCaseStudiesData = [
  {
    id: "1",
    clientName: "OpenText",
    projectTitle: "OpenText Summit 2024",
    challenge:
      "OpenText needed a large scale brand activation that would engage a senior audience while clearly presenting key messages, maintaining strong brand visibility, and supporting multiple presentations within a refined conference environment.",
    solution:
      "We produced a fully branded summit experience featuring custom stage design, large format LED displays, integrated lighting, and cohesive brand elements that supported keynote sessions, panels, and seamless audience engagement.",
    impact:
      "The activation delivered a polished, immersive experience that elevated brand presence, enhanced audience engagement, and reinforced OpenText’s leadership position through consistent messaging and high quality production.",
    gallery: [
      "/events/brand-activations/case-study/case-study-01.jpg",
      "/events/brand-activations/case-study/case-study-02.jpg",
      "/events/brand-activations/case-study/case-study-03.jpg",
      "/events/brand-activations/case-study/case-study-04.jpg",
      "/events/brand-activations/case-study/case-study-05.jpg",
      "/events/brand-activations/case-study/case-study-06.jpg",
      "/events/brand-activations/case-study/case-study-07.jpg",
      "/events/brand-activations/case-study/case-study-08.jpg",
      "/events/brand-activations/case-study/case-study-09.jpg",
    ],
  },
];

export const BrandActivationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/brand-activations/gallery/gallery-01.jpg",
    alt: "Immersive brand activation event experience",
  },
  {
    id: "2",
    src: "/events/brand-activations/gallery/gallery-02.jpg",
    alt: "Custom branded event environment",
  },
  {
    id: "3",
    src: "/events/brand-activations/gallery/gallery-03.jpg",
    alt: "Interactive brand showcase installation",
  },
  {
    id: "4",
    src: "/events/brand-activations/gallery/gallery-04.jpg",
    alt: "Live brand engagement experience",
  },
  {
    id: "5",
    src: "/events/brand-activations/gallery/gallery-05.jpg",
    alt: "Experiential marketing event setup",
  },
  {
    id: "6",
    src: "/events/brand-activations/gallery/gallery-06.jpg",
    alt: "Audience interaction at brand activation",
  },
  {
    id: "7",
    src: "/events/brand-activations/gallery/gallery-07.jpg",
    alt: "Creative branded pop up environment",
  },
  {
    id: "8",
    src: "/events/brand-activations/gallery/gallery-08.jpg",
    alt: "Product focused brand activation design",
  },
  {
    id: "9",
    src: "/events/brand-activations/gallery/gallery-09.jpg",
    alt: "High impact experiential brand moment",
  },
  {
    id: "10",
    src: "/events/brand-activations/gallery/gallery-10.jpg",
    alt: "Custom event branding and lighting",
  },

  {
    id: "11",
    src: "/events/brand-activations/gallery/gallery-11.jpg",
    alt: "Interactive brand storytelling experience",
  },
  {
    id: "12",
    src: "/events/brand-activations/gallery/gallery-12.jpg",
    alt: "Corporate brand activation setup",
  },
  {
    id: "13",
    src: "/events/brand-activations/gallery/gallery-13.jpg",
    alt: "Branded experiential marketing space",
  },
  {
    id: "14",
    src: "/events/brand-activations/gallery/gallery-14.jpg",
    alt: "Modern brand engagement event",
  },
  {
    id: "15",
    src: "/events/brand-activations/gallery/gallery-15.jpg",
    alt: "Immersive product launch activation",
  },
  {
    id: "16",
    src: "/events/brand-activations/gallery/gallery-16.jpg",
    alt: "Branded installation with custom decor",
  },
  {
    id: "17",
    src: "/events/brand-activations/gallery/gallery-17.jpg",
    alt: "Consumer focused brand experience",
  },
  {
    id: "18",
    src: "/events/brand-activations/gallery/gallery-18.jpg",
    alt: "Creative brand activation environment",
  },
  {
    id: "19",
    src: "/events/brand-activations/gallery/gallery-19.jpg",
    alt: "Engaging brand pop up activation",
  },
  {
    id: "20",
    src: "/events/brand-activations/gallery/gallery-20.jpg",
    alt: "Experiential brand marketing display",
  },

  {
    id: "21",
    src: "/events/brand-activations/gallery/gallery-21.jpg",
    alt: "Branded event space design",
  },
  {
    id: "22",
    src: "/events/brand-activations/gallery/gallery-22.jpg",
    alt: "Interactive brand activation booth",
  },
  {
    id: "23",
    src: "/events/brand-activations/gallery/gallery-23.jpg",
    alt: "Live audience engagement experience",
  },
  {
    id: "24",
    src: "/events/brand-activations/gallery/gallery-24.jpg",
    alt: "Custom experiential brand setup",
  },
  {
    id: "25",
    src: "/events/brand-activations/gallery/gallery-25.jpg",
    alt: "Brand driven event activation moment",
  },
  {
    id: "26",
    src: "/events/brand-activations/gallery/gallery-26.jpg",
    alt: "Immersive branded event environment",
  },
  {
    id: "27",
    src: "/events/brand-activations/gallery/gallery-27.jpg",
    alt: "High energy brand activation experience",
  },
  {
    id: "28",
    src: "/events/brand-activations/gallery/gallery-28.jpg",
    alt: "Creative experiential marketing design",
  },
  {
    id: "29",
    src: "/events/brand-activations/gallery/gallery-29.jpg",
    alt: "Custom brand engagement installation",
  },
  {
    id: "30",
    src: "/events/brand-activations/gallery/gallery-30.jpg",
    alt: "Branded interactive event experience",
  },
  {
    id: "32",
    src: "/events/brand-activations/gallery/gallery-31.jpg",
    alt: "Audience centered brand experience",
  },
  {
    id: "33",
    src: "/events/brand-activations/gallery/gallery-32.jpg",
    alt: "Branded environment with custom lighting",
  },
  {
    id: "34",
    src: "/events/brand-activations/gallery/gallery-33.jpg",
    alt: "Engaging experiential brand moment",
  },
  {
    id: "35",
    src: "/events/brand-activations/gallery/gallery-34.jpg",
    alt: "Brand activation with immersive design",
  },
  {
    id: "36",
    src: "/events/brand-activations/gallery/gallery-35.jpg",
    alt: "Creative branded pop up experience",
  },
  {
    id: "37",
    src: "/events/brand-activations/gallery/gallery-36.jpg",
    alt: "Experiential event branding execution",
  },
  {
    id: "38",
    src: "/events/brand-activations/gallery/gallery-37.jpg",
    alt: "Live brand engagement activation",
  },
  {
    id: "40",
    src: "/events/brand-activations/gallery/gallery-38.jpg",
    alt: "Branded marketing activation space",
  },

  {
    id: "41",
    src: "/events/brand-activations/gallery/gallery-39.jpg",
    alt: "Immersive brand storytelling environment",
  },
  {
    id: "42",
    src: "/events/brand-activations/gallery/gallery-40.jpg",
    alt: "Creative brand activation concept",
  },
  {
    id: "44",
    src: "/events/brand-activations/gallery/gallery-41.jpg",
    alt: "High impact brand engagement design",
  },
  {
    id: "45",
    src: "/events/brand-activations/gallery/gallery-42.jpg",
    alt: "Branded experiential event moment",
  },
  {
    id: "46",
    src: "/events/brand-activations/gallery/gallery-43.jpg",
    alt: "Interactive consumer brand activation",
  },
  {
    id: "48",
    src: "/events/brand-activations/gallery/gallery-44.jpg",
    alt: "Creative branded environment design",
  },
  {
    id: "49",
    src: "/events/brand-activations/gallery/gallery-45.jpg",
    alt: "Live experiential brand interaction",
  },
  {
    id: "50",
    src: "/events/brand-activations/gallery/gallery-46.jpg",
    alt: "Custom brand activation experience",
  },

  {
    id: "51",
    src: "/events/brand-activations/gallery/gallery-47.jpg",
    alt: "Immersive experiential brand display",
  },
  {
    id: "52",
    src: "/events/brand-activations/gallery/gallery-48.jpg",
    alt: "Branded event activation execution",
  },
  {
    id: "53",
    src: "/events/brand-activations/gallery/gallery-49.jpg",
    alt: "Audience driven brand engagement experience",
  },
  {
    id: "54",
    src: "/events/brand-activations/gallery/gallery-50.jpg",
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
      "We produce pop ups, product launches, experiential installations, trade show activations, corporate brand experiences, and custom interactive environments.",
  },
  {
    question: "Can you customize the activation to match our brand?",
    answer:
      "Yes. Every activation is fully customized to align with your brand identity, messaging, color palette, and campaign objectives while maintaining brand consistency.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Absolutely. We manage the entire process from concept and design through fabrication, installation, on site management, and breakdown.",
  },
  {
    question: "Can you support short timelines or last minute activations?",
    answer:
      "Yes. While advanced planning is ideal, our in house capabilities allow us to support accelerated timelines based on scope and availability.",
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
    headline: "Black Tie Galas",
    description:
      "We produce sophisticated black tie galas with thoughtful design, elevated décor, and seamless production. From lighting and staging to guest flow and ambiance, every detail is crafted to reflect elegance and prestige.",
    image: "/events/galas/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Fundraising & Benefit Events",
    description:
      "Our team designs and executes fundraising galas that inspire generosity while maintaining a refined guest experience. We balance storytelling, donor engagement, and production excellence to support your cause.",
    image: "/events/galas/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Presentation,
    headline: "Awards & Recognition Nights",
    description:
      "Celebrate achievements with polished award ceremonies and recognition events. We manage staging, lighting, audio visuals, and run of show to ensure a smooth, memorable evening.",
    image: "/events/galas/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Private Celebrations",
    description:
      "From milestone celebrations to invitation only evenings, we create intimate yet impactful gala experiences. Our approach blends custom design with flawless execution for truly unforgettable events.",
    image: "/events/galas/what-we-do/offering-04.jpg",
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
      "/events/galas/case-study/case-study-01.jpg",
      "/events/galas/case-study/case-study-02.jpg",
      "/events/galas/case-study/case-study-03.jpg",
      "/events/galas/case-study/case-study-04.jpg",
      "/events/galas/case-study/case-study-05.jpg",
      "/events/galas/case-study/case-study-06.jpg",
      "/events/galas/case-study/case-study-07.jpg",
      "/events/galas/case-study/case-study-08.jpg",
      "/events/galas/case-study/case-study-09.jpg",
      "/events/galas/case-study/case-study-10.jpg",
      "/events/galas/case-study/case-study-11.jpg",
    ],
  },
];

export const GalasImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/galas/gallery/gallery-01.jpg",
    alt: "Elegant private gala with formal table settings and ambient lighting",
  },
  {
    id: "2",
    src: "/events/galas/gallery/gallery-02.jpg",
    alt: "Black tie gala event with dramatic lighting and décor",
  },
  {
    id: "3",
    src: "/events/galas/gallery/gallery-03.jpg",
    alt: "Luxury gala dinner setup with candlelit tables",
  },
  {
    id: "4",
    src: "/events/galas/gallery/gallery-04.jpg",
    alt: "Formal gala reception with sophisticated floral arrangements",
  },
  {
    id: "5",
    src: "/events/galas/gallery/gallery-05.jpg",
    alt: "Upscale gala event featuring elegant stage and lighting design",
  },
  {
    id: "6",
    src: "/events/galas/gallery/gallery-06.jpg",
    alt: "Grand ballroom gala with chandeliers and refined décor",
  },
  {
    id: "7",
    src: "/events/galas/gallery/gallery-07.jpg",
    alt: "Private gala celebration with immersive lighting ambiance",
  },
  {
    id: "8",
    src: "/events/galas/gallery/gallery-08.jpg",
    alt: "Luxury gala event with custom tablescapes and linens",
  },
  {
    id: "9",
    src: "/events/galas/gallery/gallery-09.jpg",
    alt: "Formal gala dinner with stage presentation and seating",
  },
  {
    id: "10",
    src: "/events/galas/gallery/gallery-10.jpg",
    alt: "Evening gala event with elegant uplighting and décor accents",
  },
  {
    id: "11",
    src: "/events/galas/gallery/gallery-11.jpg",
    alt: "High end gala reception with refined event styling",
  },
  {
    id: "12",
    src: "/events/galas/gallery/gallery-12.jpg",
    alt: "Black tie gala featuring luxurious event design",
  },
  {
    id: "13",
    src: "/events/galas/gallery/gallery-13.jpg",
    alt: "Formal gala environment with dramatic lighting effects",
  },
  {
    id: "14",
    src: "/events/galas/gallery/gallery-14.jpg",
    alt: "Elegant gala dinner showcasing premium event décor",
  },
  {
    id: "15",
    src: "/events/galas/gallery/gallery-15.jpg",
    alt: "Private gala event with polished table décor and lighting",
  },
  {
    id: "16",
    src: "/events/galas/gallery/gallery-16.jpg",
    alt: "Sophisticated gala setting designed for formal celebrations",
  },
  {
    id: "17",
    src: "/events/galas/gallery/gallery-17.jpg",
    alt: "Luxury gala night with ambient lighting and elegant finishes",
  },
  {
    id: "18",
    src: "/events/galas/gallery/gallery-18.jpg",
    alt: "Grand gala event featuring elevated décor and staging",
  },
  {
    id: "19",
    src: "/events/galas/gallery/gallery-19.jpg",
    alt: "Formal gala reception with refined lighting design",
  },
  {
    id: "20",
    src: "/events/galas/gallery/gallery-20.jpg",
    alt: "Elegant gala celebration with custom event styling",
  },
  {
    id: "21",
    src: "/events/galas/gallery/gallery-21.jpg",
    alt: "Black tie gala environment with immersive atmosphere",
  },
  {
    id: "22",
    src: "/events/galas/gallery/gallery-22.jpg",
    alt: "Luxury gala event featuring premium décor elements",
  },
  {
    id: "23",
    src: "/events/galas/gallery/gallery-23.jpg",
    alt: "Sophisticated gala setup with coordinated lighting and décor",
  },
  {
    id: "24",
    src: "/events/galas/gallery/gallery-24.jpg",
    alt: "Formal gala evening with elegant event production",
  },
  {
    id: "25",
    src: "/events/galas/gallery/gallery-25.jpg",
    alt: "Private gala celebration showcasing refined design details",
  },
  {
    id: "26",
    src: "/events/galas/gallery/gallery-26.jpg",
    alt: "Upscale gala event with dramatic ambiance lighting",
  },
  {
    id: "27",
    src: "/events/galas/gallery/gallery-27.jpg",
    alt: "Luxury gala dinner experience with polished presentation",
  },
  {
    id: "28",
    src: "/events/galas/gallery/gallery-28.jpg",
    alt: "Formal gala environment designed for high profile guests",
  },
  {
    id: "29",
    src: "/events/galas/gallery/gallery-29.jpg",
    alt: "Elegant gala reception highlighting premium décor and lighting",
  },
  {
    id: "30",
    src: "/events/galas/gallery/gallery-30.jpg",
    alt: "Sophisticated private gala with refined event styling",
  },
];

export const Galasfaqs = [
  {
    question: "What types of galas do you produce?",
    answer:
      "We produce private, corporate, and nonprofit galas including black tie dinners, fundraising events, award ceremonies, and formal celebrations.",
  },
  {
    question: "Can you customize the design and theme of a gala?",
    answer:
      "Yes. Every gala is custom designed to reflect your vision, brand, and event objectives while maintaining a refined and elegant atmosphere.",
  },
  {
    question: "Do you provide full service gala production?",
    answer:
      "Absolutely. We manage all aspects of gala production including design, décor, lighting, audio visual, staging, entertainment coordination, and on site execution.",
  },
  {
    question: "Can you handle high profile or VIP guest events?",
    answer:
      "Yes. Our team is experienced in producing events for VIP guests, executives, and high profile attendees, ensuring discretion, professionalism, and seamless service.",
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
    image: "/events/virtual-hybrid-events/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Hybrid Events",
    description:
      "Connect in person and remote audiences through thoughtfully designed hybrid events. We integrate live production, streaming technology, and audience engagement tools to ensure a cohesive experience for all attendees.",
    image: "/events/virtual-hybrid-events/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Live Streaming & Broadcasts",
    description:
      "Deliver professional live streams with broadcast quality video, sound, and lighting. We support product announcements, panels, town halls, and special events with reliable streaming solutions.",
    image: "/events/virtual-hybrid-events/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Digital Engagement Experiences",
    description:
      "Enhance virtual participation with interactive features such as live Q&A, polls, moderated chat, and branded digital environments designed to keep audiences engaged throughout the event.",
    image: "/events/virtual-hybrid-events/what-we-do/offering-04.jpg",
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
      "We delivered an integrated hybrid production combining live stage design, multi camera broadcasting, LED displays, and a synchronized virtual platform. In room presentations were seamlessly aligned with live streaming and interactive virtual tools.",
    impact:
      "The event successfully engaged both in person and remote audiences with consistent messaging and high production quality. Smooth session transitions and reliable streaming reinforced OpenText’s leadership and delivered a polished global experience.",
    gallery: [
      "/events/virtual-hybrid-events/case-study/case-study-01.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-02.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-03.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-04.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-05.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-06.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-07.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-08.jpg",
      "/events/virtual-hybrid-events/case-study/case-study-09.jpg",
    ],
  },
];

export const VirtualHyrbidImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/virtual-hybrid-events/gallery/gallery-01.jpg",
    alt: "Broadcast studio built for a virtual conference",
  },
  {
    id: "2",
    src: "/events/virtual-hybrid-events/gallery/gallery-02.jpg",
    alt: "Control room monitoring a live streamed corporate event",
  },
  {
    id: "3",
    src: "/events/virtual-hybrid-events/gallery/gallery-03.jpg",
    alt: "LED wall backdrop set for a hybrid keynote",
  },
  {
    id: "4",
    src: "/events/virtual-hybrid-events/gallery/gallery-04.jpg",
    alt: "Camera operator covering a panel for a remote audience",
  },
  {
    id: "5",
    src: "/events/virtual-hybrid-events/gallery/gallery-05.jpg",
    alt: "Presenter delivering to camera on a studio set",
  },
  {
    id: "6",
    src: "/events/virtual-hybrid-events/gallery/gallery-06.jpg",
    alt: "Remote speaker joining a hybrid panel on screen",
  },
  {
    id: "7",
    src: "/events/virtual-hybrid-events/gallery/gallery-07.jpg",
    alt: "Vision mixer and switcher running a live stream",
  },
  {
    id: "8",
    src: "/events/virtual-hybrid-events/gallery/gallery-08.jpg",
    alt: "Audio engineer mixing a broadcast feed",
  },
  {
    id: "9",
    src: "/events/virtual-hybrid-events/gallery/gallery-09.jpg",
    alt: "Teleprompter set up for a virtual presentation",
  },
  {
    id: "10",
    src: "/events/virtual-hybrid-events/gallery/gallery-10.jpg",
    alt: "Lighting rig built for a broadcast studio set",
  },
  {
    id: "11",
    src: "/events/virtual-hybrid-events/gallery/gallery-11.jpg",
    alt: "Hybrid event audience with remote attendees shown on screen",
  },
  {
    id: "12",
    src: "/events/virtual-hybrid-events/gallery/gallery-12.jpg",
    alt: "Green screen studio set for a virtual product launch",
  },
  {
    id: "13",
    src: "/events/virtual-hybrid-events/gallery/gallery-13.jpg",
    alt: "Multi camera position covering a hybrid conference stage",
  },
  {
    id: "14",
    src: "/events/virtual-hybrid-events/gallery/gallery-14.jpg",
    alt: "Streaming encoder and network rack at an event",
  },
  {
    id: "15",
    src: "/events/virtual-hybrid-events/gallery/gallery-15.jpg",
    alt: "Confidence monitors placed for a virtual presenter",
  },
  {
    id: "16",
    src: "/events/virtual-hybrid-events/gallery/gallery-16.jpg",
    alt: "Studio set dressing for a corporate broadcast",
  },
  {
    id: "17",
    src: "/events/virtual-hybrid-events/gallery/gallery-17.jpg",
    alt: "Rehearsal running against a hybrid event run of show",
  },
  {
    id: "18",
    src: "/events/virtual-hybrid-events/gallery/gallery-18.jpg",
    alt: "Registration and stream access desk at a hybrid event",
  },
  {
    id: "19",
    src: "/events/virtual-hybrid-events/gallery/gallery-19.jpg",
    alt: "Live chat and question moderation station",
  },
  {
    id: "20",
    src: "/events/virtual-hybrid-events/gallery/gallery-20.jpg",
    alt: "Branded graphics overlaid on a broadcast feed",
  },
  {
    id: "21",
    src: "/events/virtual-hybrid-events/gallery/gallery-21.jpg",
    alt: "Break out session streamed from a smaller studio",
  },
  {
    id: "22",
    src: "/events/virtual-hybrid-events/gallery/gallery-22.jpg",
    alt: "Remote panel of speakers displayed on a stage screen",
  },
  {
    id: "23",
    src: "/events/virtual-hybrid-events/gallery/gallery-23.jpg",
    alt: "Hybrid event floor with cameras and in person delegates",
  },
  {
    id: "24",
    src: "/events/virtual-hybrid-events/gallery/gallery-24.jpg",
    alt: "Playback operator cueing video content into a stream",
  },
  {
    id: "25",
    src: "/events/virtual-hybrid-events/gallery/gallery-25.jpg",
    alt: "Presenter briefing before a virtual session",
  },
  {
    id: "26",
    src: "/events/virtual-hybrid-events/gallery/gallery-26.jpg",
    alt: "Studio floor manager cueing a live broadcast",
  },
  {
    id: "27",
    src: "/events/virtual-hybrid-events/gallery/gallery-27.jpg",
    alt: "Redundant internet and power provisioned for a live stream",
  },
  {
    id: "28",
    src: "/events/virtual-hybrid-events/gallery/gallery-28.jpg",
    alt: "Virtual event platform open on a laptop",
  },
  {
    id: "29",
    src: "/events/virtual-hybrid-events/gallery/gallery-29.jpg",
    alt: "Hybrid stage set to read both in the room and on camera",
  },
  {
    id: "30",
    src: "/events/virtual-hybrid-events/gallery/gallery-30.jpg",
    alt: "Interpreter position supporting a multilingual broadcast",
  },
  {
    id: "31",
    src: "/events/virtual-hybrid-events/gallery/gallery-31.jpg",
    alt: "Recorded conference sessions being edited after the event",
  },
  {
    id: "32",
    src: "/events/virtual-hybrid-events/gallery/gallery-32.jpg",
    alt: "Audience reaction wall shown to a presenter on stage",
  },
  {
    id: "33",
    src: "/events/virtual-hybrid-events/gallery/gallery-33.jpg",
    alt: "Sponsor branding integrated into a virtual event set",
  },
  {
    id: "34",
    src: "/events/virtual-hybrid-events/gallery/gallery-34.jpg",
    alt: "Wide view of a hybrid event studio in production",
  },
];

export const VirtualHyrbidfaqs = [
  {
    question: "What is the difference between virtual and hybrid events?",
    answer:
      "Virtual events are hosted entirely online, while hybrid events combine an in person experience with a live virtual component. Hybrid events allow you to engage both on site and remote audiences simultaneously.",
  },
  {
    question: "What platforms do you support for virtual and hybrid events?",
    answer:
      "We support a wide range of platforms including Zoom, Microsoft Teams, Webex, Vimeo, and custom streaming solutions. Our team helps select and configure the best platform based on your event goals.",
  },
  {
    question: "Can you manage both the technical setup and live production?",
    answer:
      "Yes. We handle full production including live streaming, audio visual setup, lighting, camera operation, content playback, and real time technical support for a seamless experience.",
  },
  {
    question: "How do you ensure audience engagement for virtual attendees?",
    answer:
      "We incorporate interactive features such as live Q&A, polls, chat moderation, breakout rooms, and branded digital experiences to keep remote audiences actively engaged.",
  },
  {
    question: "Do you provide recording and post event content?",
    answer:
      "Absolutely. We offer high quality event recordings, edited highlight reels, and on demand playback options so your content continues to deliver value after the event ends.",
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
      "As New York City’s number one choice for event production, our full service event and production team is able to assist you with all of your event needs. Our capabilities are extensive; we offer the very best in: lighting, AV & staging, musical entertainment, custom fabrication, design, and event planning services. Our in house resources make us your most valued partner when planning your next company holiday party, gala, marketing event, or milestone celebration.",
    image: "/events/conferences-meetings/what-we-do/offering-01.jpg",
  },
  {
    id: "2",
    icon: Users,
    headline: "Meetings & Conferences",
    description:
      "When planning your next company meeting, summit, fundraiser, or trade show, partner with a team you can trust. With over 20 years of experience, MMEink specializes in corporate meetings and events across New York City, bringing your vision to life while staying mindful of your budget. From venue selection to event design and on site management, we create programs tailored to your needs. We look forward to collaborating on your next event.",
    image: "/events/conferences-meetings/what-we-do/offering-02.jpg",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Event Planning",
    description:
      "The MMEink event production and management team is a group of experienced and dedicated individuals who dedicate themselves to making the planning and execution of your special event an exciting process. Our team will seamlessly orchestrate your corporate event or meeting from start to finish, allowing you to be involved in the exciting aspects while remaining isolated from the stresses associated with putting on an elaborate affair. From event design to development and on site coordination, we are devoted to producing an event that will exceed your every expectation.",
    image: "/events/conferences-meetings/what-we-do/offering-03.jpg",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Event Management",
    description:
      "MMEink provides event management services that are delivered with seamless integration and precision. With a full time team of experienced planners and on site coordinators, we ensure that your event runs smoothly from start to finish. Our team will be with you every step of the way, from the initial event design and planning, to on site registration, our team will provide you with the right choice in management to effectively plan and execute your next meeting or event.",
    image: "/events/conferences-meetings/what-we-do/offering-04.jpg",
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
      "We designed and delivered a fully integrated conference setup, including large format screens, optimized sound reinforcement, and dynamic stage lighting. Custom staging, scenic draping, and branded registration areas ensured clarity, cohesion, and seamless transitions throughout the program.",
    impact:
      "The conference was executed flawlessly, delivering a focused and engaging experience for speakers and attendees alike. Clear visuals, consistent audio, and smooth pacing elevated the event’s professionalism and reinforced NYCOMS’ reputation for high quality programming.",
    gallery: [
      "/events/conferences-meetings/case-study/case-study-01.jpg",
      "/events/conferences-meetings/case-study/case-study-02.jpg",
      "/events/conferences-meetings/case-study/case-study-03.jpg",
      "/events/conferences-meetings/case-study/case-study-04.jpg",
      "/events/conferences-meetings/case-study/case-study-05.jpg",
    ],
  },
];

export const ConferenceImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/conferences-meetings/gallery/gallery-01.jpg",
    alt: "Elegant table setup with floral centerpieces at a conference event",
  },
  {
    id: "2",
    src: "/events/conferences-meetings/gallery/gallery-02.jpg",
    alt: "Large conference crowd seated at round tables in an ornate ballroom",
  },
  {
    id: "3",
    src: "/events/conferences-meetings/gallery/gallery-03.jpg",
    alt: "Conference stage setup with a giant 'C' logo display and rows of chairs",
  },
  {
    id: "4",
    src: "/events/conferences-meetings/gallery/gallery-04.jpg",
    alt: "Conference stage with 'eMarketer attention' display screen and chairs",
  },
  {
    id: "5",
    src: "/events/conferences-meetings/gallery/gallery-05.jpg",
    alt: "Drive banner displays in an arched conference venue space",
  },
  {
    id: "6",
    src: "/events/conferences-meetings/gallery/gallery-06.jpg",
    alt: "Conference hall with bright lighting and rows of chairs facing a stage",
  },
  {
    id: "7",
    src: "/events/conferences-meetings/gallery/gallery-07.jpg",
    alt: "Large conference crowd watching presentations on stage with a heart logo display",
  },
  {
    id: "8",
    src: "/events/conferences-meetings/gallery/gallery-08.jpg",
    alt: "Elegant banquet table setup for a conference event dinner",
  },
  {
    id: "9",
    src: "/events/conferences-meetings/gallery/gallery-09.jpg",
    alt: "Conference stage with red carpet and 'engagement' logo display",
  },
  {
    id: "10",
    src: "/events/conferences-meetings/gallery/gallery-10.jpg",
    alt: "Conference setup with tables, chairs, and colorful lighting under arched ceilings",
  },
  {
    id: "11",
    src: "/events/conferences-meetings/gallery/gallery-11.jpg",
    alt: "Welcome sign and tables at a conference check in area",
  },
  {
    id: "12",
    src: "/events/conferences-meetings/gallery/gallery-12.jpg",
    alt: "Overhead view of a conference hall with round tables and a lit up stage",
  },
  {
    id: "13",
    src: "/events/conferences-meetings/gallery/gallery-13.jpg",
    alt: "Conference hall with arched ceilings lit up in purple and a large chandelier",
  },
  {
    id: "14",
    src: "/events/conferences-meetings/gallery/gallery-14.jpg",
    alt: "Close up of a 'We Are VML' display at a conference",
  },
  {
    id: "15",
    src: "/events/conferences-meetings/gallery/gallery-15.jpg",
    alt: "Banquet tables with candles and a stage with a ParentChild+ logo display",
  },
  {
    id: "16",
    src: "/events/conferences-meetings/gallery/gallery-16.jpg",
    alt: "Conference hall setup with round tables and colorful ParentChild+ branding",
  },
  {
    id: "17",
    src: "/events/conferences-meetings/gallery/gallery-17.jpg",
    alt: "Conference hall entryway with Success Academy branding",
  },
  {
    id: "18",
    src: "/events/conferences-meetings/gallery/gallery-18.jpg",
    alt: "Close up of a Success Academy logo display on stage at a conference",
  },
  {
    id: "19",
    src: "/events/conferences-meetings/gallery/gallery-19.jpg",
    alt: "Wide view of a large conference crowd and stage in an ornate hall",
  },
  {
    id: "20",
    src: "/events/conferences-meetings/gallery/gallery-20.jpg",
    alt: "Close up of an elegant table setting at a conference event",
  },
  {
    id: "21",
    src: "/events/conferences-meetings/gallery/gallery-21.jpg",
    alt: "Conference audience seated at round tables in a modern event space",
  },
  {
    id: "22",
    src: "/events/conferences-meetings/gallery/gallery-22.jpg",
    alt: "Speaker panel on stage with a giant '50' logo display in the background",
  },
  {
    id: "23",
    src: "/events/conferences-meetings/gallery/gallery-23.jpg",
    alt: "Conference stage setup with 'Empowering the Financial World' branding",
  },
  {
    id: "24",
    src: "/events/conferences-meetings/gallery/gallery-24.jpg",
    alt: "Wide view of a grand ballroom set up for a conference with rows of chairs",
  },
  {
    id: "25",
    src: "/events/conferences-meetings/gallery/gallery-25.jpg",
    alt: "Close up of a 'nest' branded display on stage at a conference",
  },
  {
    id: "26",
    src: "/events/conferences-meetings/gallery/gallery-26.jpg",
    alt: "Conference stage setup with 'Digital Disruption' text and city graphics",
  },
  {
    id: "27",
    src: "/events/conferences-meetings/gallery/gallery-27.jpg",
    alt: "Rows of chairs set up facing a stage in a dimly lit conference hall",
  },
  {
    id: "28",
    src: "/events/conferences-meetings/gallery/gallery-28.jpg",
    alt: "Conference hall with purple lighting and a stage setup for a panel discussion",
  },
  {
    id: "29",
    src: "/events/conferences-meetings/gallery/gallery-29.jpg",
    alt: "Crowded conference audience watching presentations on multiple screens",
  },
  {
    id: "30",
    src: "/events/conferences-meetings/gallery/gallery-30.jpg",
    alt: "Rows of black chairs set up in a conference space with a podium on stage",
  },
];

export const ConferenceEventFAQ = [
  {
    question: "What types of conferences do you support?",
    answer:
      "We support corporate conferences, executive meetings, annual summits, panel discussions, and multi day events across a wide range of industries.",
  },
  {
    question: "Do you manage conferences from planning to execution?",
    answer:
      "Yes. Our team provides end to end conference support including planning, logistics, production, audio visual coordination, and on site management.",
  },
  {
    question: "Can you handle large scale or multi day conferences?",
    answer:
      "Absolutely. We manage conferences of all sizes, from single day meetings to large, multi day events with complex schedules and multiple sessions.",
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
      image: "/services/audio-visual/what-we-offer/offer-01.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/audio-visual/what-we-offer/offer-02.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/audio-visual/what-we-offer/offer-03.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/audio-visual/what-we-offer/offer-04.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/audio-visual/what-we-offer/offer-05.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/audio-visual/what-we-offer/offer-06.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/audio-visual/what-we-offer/offer-07.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/audio-visual/what-we-offer/offer-08.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/audio-visual/what-we-offer/offer-09.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/audio-visual/what-we-offer/offer-10.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/audio-visual/what-we-offer/offer-11.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/audio-visual/what-we-offer/offer-12.jpg",
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
      "MMEink delivered a fully integrated AV solution including professional sound reinforcement, stage lighting, projection, and on site technical management to ensure seamless execution.",
    impact:
      "The event ran smoothly with clear audio, strong visuals, and consistent production quality, allowing speakers to present confidently and attendees to stay fully engaged.",
    gallery: [
      "/services/audio-visual/case-study/case-study-01.jpg",
      "/services/audio-visual/case-study/case-study-02.jpg",
      "/services/audio-visual/case-study/case-study-03.jpg",
      "/services/audio-visual/case-study/case-study-04.jpg",
      "/services/audio-visual/case-study/case-study-05.jpg",
    ],
  },
];

export const AudioVisualImageGallery = [
  {
    id: "1",
    src: "/services/audio-visual/gallery/gallery-01.jpg",
    alt: "Professional audio visual setup with stage lighting and sound system for corporate event",
  },
  {
    id: "2",
    src: "/services/audio-visual/gallery/gallery-02.jpg",
    alt: "Live event production featuring LED screens, stage lighting, and AV control systems",
  },
  {
    id: "3",
    src: "/services/audio-visual/gallery/gallery-03.jpg",
    alt: "Conference audio visual setup with large projection screens and professional sound",
  },
  {
    id: "4",
    src: "/services/audio-visual/gallery/gallery-04.jpg",
    alt: "Stage lighting design with truss structures and color changing LED fixtures",
  },
  {
    id: "5",
    src: "/services/audio-visual/gallery/gallery-05.jpg",
    alt: "Audio visual control booth managing sound, lighting, and video for live event",
  },
  {
    id: "6",
    src: "/services/audio-visual/gallery/gallery-06.jpg",
    alt: "Corporate presentation setup with microphones, screens, and professional lighting",
  },
  {
    id: "7",
    src: "/services/audio-visual/gallery/gallery-07.jpg",
    alt: "Event stage with dynamic lighting effects and integrated video displays",
  },
  {
    id: "8",
    src: "/services/audio-visual/gallery/gallery-08.jpg",
    alt: "Live panel discussion supported by professional audio and video equipment",
  },
  {
    id: "9",
    src: "/services/audio-visual/gallery/gallery-09.jpg",
    alt: "Hybrid event production with cameras, lighting, and live streaming setup",
  },
  {
    id: "10",
    src: "/services/audio-visual/gallery/gallery-10.jpg",
    alt: "LED wall installation with synchronized lighting for branded event experience",
  },
  {
    id: "11",
    src: "/services/audio-visual/gallery/gallery-11.jpg",
    alt: "Sound system setup with speakers and mixing console for indoor event",
  },
  {
    id: "12",
    src: "/services/audio-visual/gallery/gallery-12.jpg",
    alt: "Event lighting design highlighting stage and audience areas",
  },
  {
    id: "13",
    src: "/services/audio-visual/gallery/gallery-13.jpg",
    alt: "Professional camera setup for live event recording and streaming",
  },
  {
    id: "14",
    src: "/services/audio-visual/gallery/gallery-14.jpg",
    alt: "Corporate keynote stage with projection screens and theatrical lighting",
  },
  {
    id: "15",
    src: "/services/audio-visual/gallery/gallery-15.jpg",
    alt: "Audio visual equipment setup during event rehearsal and sound check",
  },
  {
    id: "16",
    src: "/services/audio-visual/gallery/gallery-16.jpg",
    alt: "Lighting truss and rigging installation for large scale event production",
  },
  {
    id: "17",
    src: "/services/audio-visual/gallery/gallery-17.jpg",
    alt: "Event production team managing live audio and video during presentation",
  },
  {
    id: "18",
    src: "/services/audio-visual/gallery/gallery-18.jpg",
    alt: "Stage wash lighting and accent lights creating immersive event atmosphere",
  },
  {
    id: "19",
    src: "/services/audio-visual/gallery/gallery-19.jpg",
    alt: "Multi camera setup capturing speakers and audience at corporate event",
  },
  {
    id: "20",
    src: "/services/audio-visual/gallery/gallery-20.jpg",
    alt: "Complete audio visual production with lighting, sound, and video integration",
  },
];

export const AudioVisualFAQ = [
  {
    question: "What audio visual services do you provide?",
    answer:
      "We provide full service audio visual support including sound systems, lighting, video displays, staging, and technical production for corporate and social events.",
  },
  {
    question: "Do you support corporate meetings and conferences?",
    answer:
      "Yes. Our AV team supports meetings, conferences, panels, and presentations with reliable equipment and experienced technical staff.",
  },
  {
    question: "Can you handle hybrid or live streamed events?",
    answer:
      "Absolutely. We offer live streaming and hybrid event solutions, including cameras, switching, audio mixing, and virtual audience integration.",
  },
  {
    question: "Do you provide on site technical support during events?",
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
      "We recommend booking audio visual services 3 to 6 weeks in advance, especially for complex or large scale events.",
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
      image: "/services/custom-fabrication/what-we-offer/offer-01.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/custom-fabrication/what-we-offer/offer-02.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/custom-fabrication/what-we-offer/offer-03.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/custom-fabrication/what-we-offer/offer-04.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/custom-fabrication/what-we-offer/offer-05.jpeg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/custom-fabrication/what-we-offer/offer-06.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/custom-fabrication/what-we-offer/offer-07.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/custom-fabrication/what-we-offer/offer-08.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/custom-fabrication/what-we-offer/offer-09.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/custom-fabrication/what-we-offer/offer-10.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/custom-fabrication/what-we-offer/offer-11.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/custom-fabrication/what-we-offer/offer-12.jpg",
      width: "lg" as const,
    },
  ],
};

export const CustomFabricationCaseStudiesData = [
  {
    id: "1",
    clientName: "Estée Lauder",
    projectTitle: "The Estée Edit Experiential Pop Up",
    challenge:
      "Estée Lauder needed a fully branded pop up environment to present The Estée Edit collection while engaging guests in a high traffic setting with limited space and strict brand standards.",
    solution:
      "MMEink designed and fabricated a custom modular pop up with illuminated branding, integrated screens, and bespoke product displays optimized for guest flow and hands on interaction.",
    impact:
      "The activation increased guest engagement, encouraged product interaction, and delivered a premium brand experience that supported live demos and strong social sharing.",
    gallery: [
      "/services/custom-fabrication/case-study/case-study-01.jpg",
      "/services/custom-fabrication/case-study/case-study-02.jpg",
      "/services/custom-fabrication/case-study/case-study-03.jpg",
      "/services/custom-fabrication/case-study/case-study-04.jpg",
      "/services/custom-fabrication/case-study/case-study-05.jpg",
      "/services/custom-fabrication/case-study/case-study-06.jpg",
    ],
  },
];

export const CustomFabricationImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/custom-fabrication/gallery/gallery-01.jpg",
    alt: "Custom fabricated vinyl record wall with dimensional logo for branded event installation",
  },
  {
    id: "2",
    src: "/services/custom-fabrication/gallery/gallery-02.jpg",
    alt: "Immersive music themed brand booth with custom guitars and experiential display design",
  },
  {
    id: "3",
    src: "/services/custom-fabrication/gallery/gallery-03.jpg",
    alt: "Custom branded cocktail bar installation with signage and premium mixology setup",
  },
  {
    id: "4",
    src: "/services/custom-fabrication/gallery/gallery-04.jpg",
    alt: "Luxury outdoor brand activation featuring sculptural mannequin display and greenery",
  },
  {
    id: "5",
    src: "/services/custom-fabrication/gallery/gallery-05.jpg",
    alt: "Custom stage backdrop panels with LED uplighting for corporate conference seating",
  },
  {
    id: "6",
    src: "/services/custom-fabrication/gallery/gallery-06.jpg",
    alt: "Champagne service wall with custom shelving and greenery for upscale event experience",
  },
  {
    id: "7",
    src: "/services/custom-fabrication/gallery/gallery-07.jpg",
    alt: "Custom fabricated bar facade with illuminated marquee lettering for themed event bar",
  },
  {
    id: "8",
    src: "/services/custom-fabrication/gallery/gallery-08.jpeg",
    alt: "Branded retail fitting room activation with illuminated mirrors and custom structures",
  },
  {
    id: "9",
    src: "/services/custom-fabrication/gallery/gallery-09.jpg",
    alt: "Large scale custom art wall installation with graphic panels for brand storytelling",
  },
  {
    id: "10",
    src: "/services/custom-fabrication/gallery/gallery-10.jpg",
    alt: "Custom event stage design with LED sculptures, banquet seating, and immersive lighting",
  },
  {
    id: "11",
    src: "/services/custom-fabrication/gallery/gallery-11.jpg",
    alt: "Luxury tented anniversary event with custom cocktail tables, lighting, and floral backdrop",
  },
  {
    id: "12",
    src: "/services/custom-fabrication/gallery/gallery-12.jpg",
    alt: "Banana Republic custom pop up dessert kiosk with branded signage and display shelving",
  },
  {
    id: "13",
    src: "/services/custom-fabrication/gallery/gallery-13.jpg",
    alt: "Tropical Havana Nights themed backdrop with custom lettering and oversized foliage",
  },
  {
    id: "14",
    src: "/services/custom-fabrication/gallery/gallery-14.jpg",
    alt: "Custom sports themed photo backdrop with large scale graphics and event lighting",
  },
  {
    id: "15",
    src: "/services/custom-fabrication/gallery/gallery-15.jpeg",
    alt: "Outdoor immersive brand installation with palm trees, lighting, and ribbon art structure",
  },
  {
    id: "16",
    src: "/services/custom-fabrication/gallery/gallery-16.jpg",
    alt: "The Estée Edit beauty brand activation booth with product displays and illuminated signage",
  },
  {
    id: "17",
    src: "/services/custom-fabrication/gallery/gallery-17.jpg",
    alt: "Trade show booth fabrication with shelving, seating, and branded wall graphics",
  },
  {
    id: "18",
    src: "/services/custom-fabrication/gallery/gallery-18.jpg",
    alt: "Custom branded ice cream cart activation for outdoor corporate event experience",
  },
  {
    id: "19",
    src: "/services/custom-fabrication/gallery/gallery-19.jpg",
    alt: "Street level automotive brand activation with custom kiosk and display platform",
  },
  {
    id: "20",
    src: "/services/custom-fabrication/gallery/gallery-20.jpg",
    alt: "Rustic custom wood sign installation for outdoor brand event and experiential marketing",
  },
  {
    id: "21",
    src: "/services/custom-fabrication/gallery/gallery-21.jpg",
    alt: "Whimsical indoor set design with custom cabin facades, greenery, and campfire installation",
  },
  {
    id: "22",
    src: "/services/custom-fabrication/gallery/gallery-22.jpg",
    alt: "Premium Camus cognac bar setup with custom signage and luxury barware display",
  },
  {
    id: "23",
    src: "/services/custom-fabrication/gallery/gallery-23.jpg",
    alt: "Marie Claire MC30 custom kiosk fabrication in workshop prior to brand activation",
  },
  {
    id: "24",
    src: "/services/custom-fabrication/gallery/gallery-24.jpg",
    alt: "Womenterprise Summit stage design with custom arches, seating, and branded lighting",
  },
  {
    id: "25",
    src: "/services/custom-fabrication/gallery/gallery-25.jpg",
    alt: "Elegant wedding table signage with custom street sign centerpiece and ambient lighting",
  },
  {
    id: "26",
    src: "/services/custom-fabrication/gallery/gallery-26.jpeg",
    alt: "Colorful custom candy wall installation with cylindrical containers for guest interaction",
  },
  {
    id: "27",
    src: "/services/custom-fabrication/gallery/gallery-27.jpg",
    alt: "Suspended sneaker display installation for immersive retail brand experience",
  },
  {
    id: "28",
    src: "/services/custom-fabrication/gallery/gallery-28.jpg",
    alt: "Custom stage platform and truss structure for ASICS brand product launch event",
  },
  {
    id: "29",
    src: "/services/custom-fabrication/gallery/gallery-29.jpg",
    alt: "Retail pop up fitting room installations for Macy’s Tommy Girl brand activation",
  },
  {
    id: "30",
    src: "/services/custom-fabrication/gallery/gallery-30.jpg",
    alt: "Interactive tech driven brand installation with illuminated tunnel and digital interface",
  },
];

export const CustomFabricationFAQ = [
  {
    question: "What does MMEink offer in custom fabrication?",
    answer:
      "MMEink designs and fabricates custom built environments including brand activations, pop ups, kiosks, stages, scenic backdrops, and experiential installations tailored to each client’s vision.",
  },
  {
    question: "Do you handle both design and fabrication?",
    answer:
      "Yes. We provide full service support from creative design and fabrication to logistics, installation, and on site execution.",
  },
  {
    question: "What types of events use MMEink custom fabrication?",
    answer:
      "Our custom fabrication supports corporate events, brand activations, retail pop ups, product launches, conferences, galas, and experiential marketing campaigns.",
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
      image: "/services/rentals/what-we-offer/offer-01.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/rentals/what-we-offer/offer-02.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/rentals/what-we-offer/offer-03.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/rentals/what-we-offer/offer-04.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/rentals/what-we-offer/offer-05.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/rentals/what-we-offer/offer-06.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/rentals/what-we-offer/offer-07.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/rentals/what-we-offer/offer-08.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/rentals/what-we-offer/offer-09.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/rentals/what-we-offer/offer-10.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/rentals/what-we-offer/offer-11.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/rentals/what-we-offer/offer-12.jpg",
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
      "Joan Creative Carnival needed a Halloween event that felt immersive and playful while remaining polished and well executed within a professional event venue in Lower Manhattan.",
    solution:
      "We provided a curated rental package including lighting, staging elements, atmospheric effects, and themed production support to transform the space while maintaining seamless setup and flow.",
    impact:
      "The event delivered a high energy Halloween experience that encouraged guest interaction and visual impact, showcasing how strategic rentals can elevate themed events within a corporate venue.",
    gallery: [
      "/services/rentals/case-study/case-study-01.jpg",
      "/services/rentals/case-study/case-study-02.jpg",
      "/services/rentals/case-study/case-study-03.jpg",
      "/services/rentals/case-study/case-study-04.jpg",
      "/services/rentals/case-study/case-study-05.jpg",
      "/services/rentals/case-study/case-study-06.jpg",
      "/services/rentals/case-study/case-study-07.jpg",
    ],
  },
];

export const RentalImageGallery = [
  {
    id: "1",
    src: "/services/rentals/gallery/gallery-01.jpg",
    alt: "Professional event audio equipment rental setup",
  },
  {
    id: "2",
    src: "/services/rentals/gallery/gallery-02.jpg",
    alt: "Stage lighting rental with truss and uplighting",
  },
  {
    id: "3",
    src: "/services/rentals/gallery/gallery-03.jpg",
    alt: "LED video wall rental for corporate events",
  },
  {
    id: "4",
    src: "/services/rentals/gallery/gallery-04.jpg",
    alt: "Projection equipment rental for live presentations",
  },
  {
    id: "5",
    src: "/services/rentals/gallery/gallery-05.jpg",
    alt: "Live event production equipment rental setup",
  },
  {
    id: "6",
    src: "/services/rentals/gallery/gallery-06.jpg",
    alt: "Concert sound system rental with speakers and mixing console",
  },
  {
    id: "7",
    src: "/services/rentals/gallery/gallery-07.jpg",
    alt: "Live streaming equipment rental for hybrid events",
  },
  {
    id: "8",
    src: "/services/rentals/gallery/gallery-08.jpg",
    alt: "Wireless microphone rental for conferences and panels",
  },
  {
    id: "9",
    src: "/services/rentals/gallery/gallery-09.jpg",
    alt: "DJ equipment rental including mixers and turntables",
  },
  {
    id: "10",
    src: "/services/rentals/gallery/gallery-10.jpg",
    alt: "Professional video production equipment rental",
  },
  {
    id: "11",
    src: "/services/rentals/gallery/gallery-11.jpg",
    alt: "Moving head light rental for dynamic stage lighting",
  },
  {
    id: "12",
    src: "/services/rentals/gallery/gallery-12.jpg",
    alt: "Truss and rigging rental for event production",
  },
  {
    id: "13",
    src: "/services/rentals/gallery/gallery-13.jpg",
    alt: "Event lighting rental with color changing LED fixtures",
  },
  {
    id: "14",
    src: "/services/rentals/gallery/gallery-14.jpg",
    alt: "Audio speaker rental for indoor and outdoor events",
  },
  {
    id: "15",
    src: "/services/rentals/gallery/gallery-15.jpg",
    alt: "Stage platform rental for live performances",
  },
  {
    id: "16",
    src: "/services/rentals/gallery/gallery-16.jpg",
    alt: "Large scale LED screen rental for event backdrops",
  },
  {
    id: "17",
    src: "/services/rentals/gallery/gallery-17.jpg",
    alt: "Lighting control console rental for event production",
  },
  {
    id: "18",
    src: "/services/rentals/gallery/gallery-18.jpg",
    alt: "Camera and broadcast equipment rental for live events",
  },
  {
    id: "19",
    src: "/services/rentals/gallery/gallery-19.jpg",
    alt: "Event power distribution and cabling rental",
  },
  {
    id: "20",
    src: "/services/rentals/gallery/gallery-20.jpg",
    alt: "Professional microphone and audio accessory rental",
  },
  {
    id: "21",
    src: "/services/rentals/gallery/gallery-21.jpg",
    alt: "Event staging and riser rental setup",
  },
  {
    id: "22",
    src: "/services/rentals/gallery/gallery-22.jpg",
    alt: "Lighting truss rental with suspended fixtures",
  },
  {
    id: "23",
    src: "/services/rentals/gallery/gallery-23.jpg",
    alt: "Portable sound system rental for small events",
  },
  {
    id: "24",
    src: "/services/rentals/gallery/gallery-24.jpg",
    alt: "Video switcher and control equipment rental",
  },
  {
    id: "25",
    src: "/services/rentals/gallery/gallery-25.jpg",
    alt: "Event lighting package rental for corporate functions",
  },
  {
    id: "26",
    src: "/services/rentals/gallery/gallery-26.jpg",
    alt: "Professional speaker stack rental for concerts",
  },
  {
    id: "27",
    src: "/services/rentals/gallery/gallery-27.jpg",
    alt: "Stage backdrop and scenic rental for events",
  },
  {
    id: "28",
    src: "/services/rentals/gallery/gallery-28.jpg",
    alt: "AV equipment rental for conferences and meetings",
  },
  {
    id: "29",
    src: "/services/rentals/gallery/gallery-29.jpg",
    alt: "Lighting and audio rental setup during event load in",
  },
  {
    id: "30",
    src: "/services/rentals/gallery/gallery-30.jpg",
    alt: "Event production rental equipment in use on site",
  },
  {
    id: "31",
    src: "/services/rentals/gallery/gallery-31.jpg",
    alt: "High quality event rental equipment prepared for setup",
  },
  {
    id: "32",
    src: "/services/rentals/gallery/gallery-32.jpg",
    alt: "Complete AV rental solution for large scale events",
  },
  {
    id: "33",
    src: "/services/rentals/gallery/gallery-33.jpg",
    alt: "Professional lighting and staging rental configuration",
  },
  {
    id: "34",
    src: "/services/rentals/gallery/gallery-34.jpg",
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
      "Yes. Our rental services can include delivery, setup, on site support, and breakdown depending on your event needs and rental package.",
  },
  {
    question: "Can I rent equipment only, without full event production?",
    answer:
      "Absolutely. We offer both equipment only rentals and full service rental packages with technical support to match your event requirements.",
  },
  {
    question: "Do you provide technical support during the event?",
    answer:
      "Yes. Our experienced technicians are available to manage setup, operation, and troubleshooting to ensure reliable performance throughout your event.",
  },
  {
    question: "How far in advance should rental equipment be booked?",
    answer:
      "We recommend booking rental equipment 2 to 4 weeks in advance, especially for larger events or high demand items.",
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
      image: "/services/design-decor/what-we-offer/offer-01.gif",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Stage Lighting",
      image: "/services/design-decor/what-we-offer/offer-02.jpg",
      width: "md" as const,
    },
    {
      id: "3",
      title: "LED Video Walls",
      image: "/services/design-decor/what-we-offer/offer-03.jpg",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Projection Mapping",
      image: "/services/design-decor/what-we-offer/offer-04.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Live Event Production",
      image: "/services/design-decor/what-we-offer/offer-05.jpg",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Concert Sound",
      image: "/services/design-decor/what-we-offer/offer-06.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Live Streaming",
      image: "/services/design-decor/what-we-offer/offer-07.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Wireless Microphones",
      image: "/services/design-decor/what-we-offer/offer-08.jpg",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "DJ Equipment",
      image: "/services/design-decor/what-we-offer/offer-09.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Video Production",
      image: "/services/design-decor/what-we-offer/offer-10.jpg",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Moving Head Lights",
      image: "/services/design-decor/what-we-offer/offer-11.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Truss & Rigging",
      image: "/services/design-decor/what-we-offer/offer-12.jpg",
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
      "/services/design-decor/case-study/case-study-01.jpg",
      "/services/design-decor/case-study/case-study-02.jpg",
      "/services/design-decor/case-study/case-study-03.jpg",
      "/services/design-decor/case-study/case-study-04.jpg",
      "/services/design-decor/case-study/case-study-05.jpg",
      "/services/design-decor/case-study/case-study-06.jpg",
    ],
  },
];

export const DesignDecorImageGallery = [
  {
    id: "1",
    src: "/services/design-decor/gallery/gallery-01.jpg",
    alt: "Elegant crystal candle centerpieces on modern event dining tables",
  },
  {
    id: "2",
    src: "/services/design-decor/gallery/gallery-02.jpg",
    alt: "Modern lounge furniture setup with illuminated cocktail tables",
  },
  {
    id: "3",
    src: "/services/design-decor/gallery/gallery-03.jpg",
    alt: "Themed event tablescape with custom signage and warm ambient lighting",
  },
  {
    id: "4",
    src: "/services/design-decor/gallery/gallery-04.jpg",
    alt: "Cathedral style event space with dramatic blue uplighting and banquet seating",
  },
  {
    id: "5",
    src: "/services/design-decor/gallery/gallery-05.jpg",
    alt: "Romantic wedding reception decor with floral centerpieces and soft draping",
  },
  {
    id: "6",
    src: "/services/design-decor/gallery/gallery-06.jpg",
    alt: "Winter themed lounge decor with illuminated tables and seasonal accents",
  },
  {
    id: "7",
    src: "/services/design-decor/gallery/gallery-07.jpg",
    alt: "Green hedge wall backdrop with event branding and styled seating",
  },
  {
    id: "8",
    src: "/services/design-decor/gallery/gallery-08.jpg",
    alt: "Indoor garden inspired event decor with floral installations and lighting",
  },
  {
    id: "9",
    src: "/services/design-decor/gallery/gallery-09.jpg",
    alt: "Upscale indoor cafe style seating with umbrellas and bistro tables",
  },
  {
    id: "10",
    src: "/services/design-decor/gallery/gallery-10.jpg",
    alt: "Luxury banquet setup with tall floral arrangements and chandeliers",
  },
  {
    id: "11",
    src: "/services/design-decor/gallery/gallery-11.jpg",
    alt: "Modern lounge vignette with white seating and ambient accent lighting",
  },
  {
    id: "12",
    src: "/services/design-decor/gallery/gallery-12.jpg",
    alt: "Contemporary event space with magenta lighting and modular lounge seating",
  },
  {
    id: "13",
    src: "/services/design-decor/gallery/gallery-13.jpg",
    alt: "Floral garden entrance installation with greenery and decorative archways",
  },
  {
    id: "14",
    src: "/services/design-decor/gallery/gallery-14.jpg",
    alt: "Grand ballroom reception with warm uplighting and elegant table settings",
  },
  {
    id: "15",
    src: "/services/design-decor/gallery/gallery-15.jpg",
    alt: "Modern mirrored wall installation with ambient purple event lighting",
  },
  {
    id: "16",
    src: "/services/design-decor/gallery/gallery-16.jpg",
    alt: "Stylish bar and lounge setup with hanging decor and mood lighting",
  },
  {
    id: "17",
    src: "/services/design-decor/gallery/gallery-17.jpg",
    alt: "Branded dessert display with floral accents and curated table styling",
  },
  {
    id: "18",
    src: "/services/design-decor/gallery/gallery-18.jpg",
    alt: "Tent style event decor with chandeliers, cocktail tables, and greenery",
  },
  {
    id: "19",
    src: "/services/design-decor/gallery/gallery-19.jpg",
    alt: "Long banquet table with floral runner and gold accented place settings",
  },
  {
    id: "20",
    src: "/services/design-decor/gallery/gallery-20.jpg",
    alt: "Colorful candy wall display as part of playful event decor installation",
  },
  {
    id: "21",
    src: "/services/design-decor/gallery/gallery-21.jpg",
    alt: "Custom designed event lounge with soft seating and accent lighting",
  },
  {
    id: "22",
    src: "/services/design-decor/gallery/gallery-22.jpg",
    alt: "Luxury event decor featuring layered lighting and modern furniture",
  },
  {
    id: "23",
    src: "/services/design-decor/gallery/gallery-23.jpg",
    alt: "Elegant corporate event setup with neutral tones and floral accents",
  },
  {
    id: "24",
    src: "/services/design-decor/gallery/gallery-24.jpg",
    alt: "Chic cocktail reception decor with illuminated furniture and bar styling",
  },
  {
    id: "25",
    src: "/services/design-decor/gallery/gallery-25.jpg",
    alt: "Romantic event tablescape with candles, florals, and refined linens",
  },
  {
    id: "26",
    src: "/services/design-decor/gallery/gallery-26.jpg",
    alt: "Modern event design with clean lines, ambient lighting, and lounge seating",
  },
  {
    id: "27",
    src: "/services/design-decor/gallery/gallery-27.jpg",
    alt: "Upscale indoor event decor with custom lighting and contemporary furnishings",
  },
  {
    id: "28",
    src: "/services/design-decor/gallery/gallery-28.jpg",
    alt: "Stylish social event environment with coordinated decor and lighting design",
  },
  {
    id: "29",
    src: "/services/design-decor/gallery/gallery-29.jpg",
    alt: "Premium event space styling with dramatic lighting and curated furniture",
  },
  {
    id: "30",
    src: "/services/design-decor/gallery/gallery-30.jpg",
    alt: "Sophisticated event lounge area designed for guest comfort and flow",
  },
  {
    id: "31",
    src: "/services/design-decor/gallery/gallery-31.jpg",
    alt: "Elegant evening event decor with warm lighting and refined finishes",
  },
  {
    id: "32",
    src: "/services/design-decor/gallery/gallery-32.jpg",
    alt: "Contemporary event atmosphere created through lighting and decor styling",
  },
  {
    id: "33",
    src: "/services/design-decor/gallery/gallery-33.jpg",
    alt: "High end event design featuring layered textures and ambient illumination",
  },
  {
    id: "34",
    src: "/services/design-decor/gallery/gallery-34.jpg",
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
    question: "Can you handle both small and large scale events?",
    answer:
      "Absolutely. We design and execute décor for events of all sizes, from intimate gatherings to large scale corporate celebrations and galas.",
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
  subtitle: "End to End Event Logistics & Operations",
  topRow: [
    {
      id: "1",
      title: "Venue Sourcing & Coordination",
      image: "/services/logistics/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Load In & Load Out Management",
      image: "/services/logistics/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Event Staffing & Crew",
      image: "/services/logistics/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Transportation & Freight",
      image: "/services/logistics/what-we-offer/offer-04.gif",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Permitting & Compliance",
      image: "/services/logistics/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Vendor Management",
      image: "/services/logistics/what-we-offer/offer-06.gif",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "On Site Production Management",
      image: "/services/logistics/what-we-offer/offer-07.gif",
      width: "md" as const,
    },
    {
      id: "8",
      title: "Timeline & Run of Show",
      image: "/services/logistics/what-we-offer/offer-08.png",
      width: "sm" as const,
    },
    {
      id: "9",
      title: "Warehouse & Storage",
      image: "/services/logistics/what-we-offer/offer-09.gif",
      width: "lg" as const,
    },
    {
      id: "10",
      title: "Budget & Cost Management",
      image: "/services/logistics/what-we-offer/offer-10.png",
      width: "xl" as const,
    },
    {
      id: "11",
      title: "Safety & Risk Planning",
      image: "/services/logistics/what-we-offer/offer-11.gif",
      width: "md" as const,
    },
    {
      id: "12",
      title: "Post Event Reporting",
      image: "/services/logistics/what-we-offer/offer-12.png",
      width: "lg" as const,
    },
  ],
};

export const LogisticsCaseStudiesData = [
  {
    id: "1",
    clientName: "Fortune 500 Corporation",
    projectTitle: "Multi City National Conference Tour",
    challenge:
      "A Fortune 500 client needed seamless coordination of a six city national conference tour, managing freight logistics, crew deployment, venue coordination, and production timelines across multiple states within a compressed 10-day window.",
    solution:
      "MMEink deployed a dedicated logistics team to manage all production freight, local vendor sourcing, permitting, and on site crew across all six markets. A centralized run of show and real time coordination protocol kept every city on schedule.",
    impact:
      "All six events executed on time and within budget. The client received a unified brand experience across every market, with zero production delays and full post event reporting delivered within 48 hours.",
    gallery: [
      "/services/logistics/case-study/case-study-01.png",
      "/services/logistics/case-study/case-study-02.png",
      "/services/logistics/case-study/case-study-03.png",
      "/services/logistics/case-study/case-study-04.png",
      "/services/logistics/case-study/case-study-05.png",
    ],
  },
];

export const LogisticsImageGallery = [
  {
    id: "1",
    src: "/services/logistics/gallery/gallery-01.png",
    alt: "Event logistics setup with equipment staging and crew coordination",
  },
  {
    id: "2",
    src: "/services/logistics/gallery/gallery-02.png",
    alt: "Production load in with freight and staging equipment",
  },
  {
    id: "3",
    src: "/services/logistics/gallery/gallery-03.png",
    alt: "On site logistics management at large scale event venue",
  },
  {
    id: "4",
    src: "/services/logistics/gallery/gallery-04.png",
    alt: "Venue coordination and floor plan logistics for corporate event",
  },
  {
    id: "5",
    src: "/services/logistics/gallery/gallery-05.png",
    alt: "Event staffing and crew management during production setup",
  },
  {
    id: "6",
    src: "/services/logistics/gallery/gallery-06.png",
    alt: "Transportation and freight logistics for event equipment",
  },
  {
    id: "7",
    src: "/services/logistics/gallery/gallery-07.png",
    alt: "Production timeline coordination during event load in",
  },
  {
    id: "8",
    src: "/services/logistics/gallery/gallery-08.png",
    alt: "Vendor management and logistics coordination on site",
  },
  {
    id: "9",
    src: "/services/logistics/gallery/gallery-09.png",
    alt: "Warehouse staging and inventory management for event production",
  },
  {
    id: "10",
    src: "/services/logistics/gallery/gallery-10.png",
    alt: "Event safety briefing and risk planning before production",
  },
  {
    id: "11",
    src: "/services/logistics/gallery/gallery-11.png",
    alt: "Run of show coordination with event production team",
  },
  {
    id: "12",
    src: "/services/logistics/gallery/gallery-12.png",
    alt: "Budget management and logistics reporting post event",
  },
];

export const LogisticsFAQ = [
  {
    question: "What does your logistics service include?",
    answer:
      "Our logistics services cover venue sourcing, freight and transportation, load in/load out management, crew staffing, vendor coordination, permitting, on site production management, and post event reporting.",
  },
  {
    question: "Do you manage multi city or touring events?",
    answer:
      "Yes. We specialize in coordinating multi city tours and national events, managing production logistics, crew deployment, and vendor relationships across multiple markets simultaneously.",
  },
  {
    question: "Can you handle permitting and compliance for events?",
    answer:
      "Absolutely. Our team manages all necessary permits, insurance requirements, and local compliance regulations to ensure your event runs without any administrative issues.",
  },
  {
    question: "Do you provide on site production management?",
    answer:
      "Yes. Our logistics managers are on site throughout your event, overseeing crew, managing timelines, coordinating vendors, and resolving any production challenges in real time.",
  },
  {
    question: "How do you manage event budgets and costs?",
    answer:
      "We provide transparent budget planning, vendor cost negotiation, and ongoing cost tracking throughout the production cycle, with full post event financial reporting.",
  },
  {
    question: "How far in advance should logistics be planned?",
    answer:
      "For large scale or multi city events, we recommend engaging our logistics team 6 to 8 weeks in advance. Smaller events can typically be coordinated with 2 to 4 weeks of lead time.",
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
  subtitle: "Large Format & Custom Event Printing",
  topRow: [
    {
      id: "1",
      title: "Large Format Graphics",
      image: "/services/printing/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Vinyl & Wall Wraps",
      image: "/services/printing/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Step & Repeat Backdrops",
      image: "/services/printing/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Banners & Signage",
      image: "/services/printing/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Floor & Window Graphics",
      image: "/services/printing/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Fabric & Tension Prints",
      image: "/services/printing/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Foam Board & Rigid Signage",
      image: "/services/printing/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Directional & Wayfinding",
      image: "/services/printing/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Branded Environments",
      image: "/services/printing/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Trade Show Graphics",
      image: "/services/printing/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Menu & Table Print",
      image: "/services/printing/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On Demand Reprints",
      image: "/services/printing/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/printing/case-study/case-study-01.png",
      "/services/printing/case-study/case-study-02.png",
      "/services/printing/case-study/case-study-03.png",
      "/services/printing/case-study/case-study-04.png",
      "/services/printing/case-study/case-study-05.png",
    ],
  },
];

export const PrintingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/printing/gallery/gallery-01.png",
    alt: "Large format printer running a full colour vinyl banner in the MME print shop",
  },
  {
    id: "2",
    src: "/services/printing/gallery/gallery-02.png",
    alt: "Wall wrap being applied to a venue column during an event install",
  },
  {
    id: "3",
    src: "/services/printing/gallery/gallery-03.png",
    alt: "Step and repeat backdrop set up for arrivals at a brand launch",
  },
  {
    id: "4",
    src: "/services/printing/gallery/gallery-04.png",
    alt: "Fabric tension banner hung above a conference registration desk",
  },
  {
    id: "5",
    src: "/services/printing/gallery/gallery-05.png",
    alt: "Rigid foam board signage cut and finished for a corporate event",
  },
  {
    id: "6",
    src: "/services/printing/gallery/gallery-06.png",
    alt: "Floor graphic applied across a ballroom entrance walkway",
  },
  {
    id: "7",
    src: "/services/printing/gallery/gallery-07.png",
    alt: "Window graphics installed along a retail activation frontage",
  },
  {
    id: "8",
    src: "/services/printing/gallery/gallery-08.png",
    alt: "Directional and wayfinding signage placed through a conference venue",
  },
  {
    id: "9",
    src: "/services/printing/gallery/gallery-09.png",
    alt: "Large format brand graphics wrapping an exhibition backwall",
  },
  {
    id: "10",
    src: "/services/printing/gallery/gallery-10.png",
    alt: "Menu cards and printed table stationery produced for a gala dinner",
  },
  {
    id: "11",
    src: "/services/printing/gallery/gallery-11.png",
    alt: "Print operator checking colour against a brand guideline proof",
  },
  {
    id: "12",
    src: "/services/printing/gallery/gallery-12.png",
    alt: "Finished branded environment with printed walls, floor, and signage",
  },
];

export const PrintingFAQ = [
  {
    question: "What printing services do you offer in house?",
    answer:
      "We produce large format graphics, vinyl wraps, step and repeat backdrops, banners, rigid signage, fabric prints, and floor and window graphics, all printed and finished in our own facility.",
  },
  {
    question: "What file formats do you need for print?",
    answer:
      "We prefer vector files (AI, EPS, PDF) or high resolution raster files at 150 DPI at final output size. Our team reviews every file and will flag anything that needs adjusting before production.",
  },
  {
    question: "How quickly can you turn around a print job?",
    answer:
      "Standard jobs ship within 3 to 5 business days. Rush production is available for time sensitive activations. Contact us with your deadline and we will confirm feasibility.",
  },
  {
    question: "Can you install the graphics on site?",
    answer:
      "Yes. Our installation crews handle on site application for wraps, wall graphics, and rigging, coordinated with your overall production schedule.",
  },
];

export const LightingData = {
  title: "What We Offer",
  subtitle: "Architectural & Production Lighting Design",
  topRow: [
    {
      id: "1",
      title: "Stage & Key Lighting",
      image: "/services/lighting/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Intelligent & Moving Head",
      image: "/services/lighting/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Architectural Uplighting",
      image: "/services/lighting/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Custom Gobo Projection",
      image: "/services/lighting/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Pin Spotting",
      image: "/services/lighting/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Ambient & Mood Washes",
      image: "/services/lighting/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Dance Floor Lighting",
      image: "/services/lighting/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "LED Colour Systems",
      image: "/services/lighting/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Truss & Rigging",
      image: "/services/lighting/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Lighting Console Programming",
      image: "/services/lighting/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Power Distribution",
      image: "/services/lighting/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On Site Lighting Crew",
      image: "/services/lighting/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/lighting/case-study/case-study-01.png",
      "/services/lighting/case-study/case-study-02.png",
      "/services/lighting/case-study/case-study-03.png",
      "/services/lighting/case-study/case-study-04.png",
      "/services/lighting/case-study/case-study-05.png",
    ],
  },
];

export const LightingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/lighting/gallery/gallery-01.png",
    alt: "Moving head fixtures rigged over a ballroom before a gala",
  },
  {
    id: "2",
    src: "/services/lighting/gallery/gallery-02.png",
    alt: "Uplighting washing the walls of a historic event venue in brand colour",
  },
  {
    id: "3",
    src: "/services/lighting/gallery/gallery-03.png",
    alt: "Gobo projection placing a client logo across a dance floor",
  },
  {
    id: "4",
    src: "/services/lighting/gallery/gallery-04.png",
    alt: "Lighting console and operator running cues during a live show",
  },
  {
    id: "5",
    src: "/services/lighting/gallery/gallery-05.png",
    alt: "Stage wash and key lighting on a keynote speaker",
  },
  {
    id: "6",
    src: "/services/lighting/gallery/gallery-06.png",
    alt: "Pin spotting picking out centrepieces along a dinner table",
  },
  {
    id: "7",
    src: "/services/lighting/gallery/gallery-07.png",
    alt: "LED battens colouring a scenic backdrop behind a stage",
  },
  {
    id: "8",
    src: "/services/lighting/gallery/gallery-08.png",
    alt: "Truss and rigging plot being loaded in ahead of a conference",
  },
  {
    id: "9",
    src: "/services/lighting/gallery/gallery-09.png",
    alt: "Atmospheric haze catching beam lighting across a crowd",
  },
  {
    id: "10",
    src: "/services/lighting/gallery/gallery-10.png",
    alt: "Architectural lighting picking out the features of a venue frontage",
  },
  {
    id: "11",
    src: "/services/lighting/gallery/gallery-11.png",
    alt: "Colour changing lighting shifting a room from dinner to after party",
  },
  {
    id: "12",
    src: "/services/lighting/gallery/gallery-12.png",
    alt: "Finished lighting design seen from the back of a full ballroom",
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
      "We do. Custom gobos are produced from your logo or artwork and are a cost effective way to brand a space with light.",
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
      image: "/services/staging/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Modular Decking & Risers",
      image: "/services/staging/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Runways & Catwalks",
      image: "/services/staging/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "ADA Ramps & Access",
      image: "/services/staging/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Pipe & Drape",
      image: "/services/staging/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Scenic Backdrops",
      image: "/services/staging/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Truss Structures",
      image: "/services/staging/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Stage Skirting & Finishes",
      image: "/services/staging/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Podiums & Lecterns",
      image: "/services/staging/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Backline Platforms",
      image: "/services/staging/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Load Bearing Engineering",
      image: "/services/staging/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On Site Build Crew",
      image: "/services/staging/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/staging/case-study/case-study-01.png",
      "/services/staging/case-study/case-study-02.png",
      "/services/staging/case-study/case-study-03.png",
      "/services/staging/case-study/case-study-04.png",
      "/services/staging/case-study/case-study-05.png",
    ],
  },
];

export const StagingImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/staging/gallery/gallery-01.png",
    alt: "Custom stage deck being built and levelled in an event venue",
  },
  {
    id: "2",
    src: "/services/staging/gallery/gallery-02.png",
    alt: "Risers and platforms assembled for a panel discussion set",
  },
  {
    id: "3",
    src: "/services/staging/gallery/gallery-03.png",
    alt: "Runway built and carpeted for a fashion presentation",
  },
  {
    id: "4",
    src: "/services/staging/gallery/gallery-04.png",
    alt: "Accessible ramp installed alongside a main stage",
  },
  {
    id: "5",
    src: "/services/staging/gallery/gallery-05.png",
    alt: "Pipe and drape masking the back of house behind a stage",
  },
  {
    id: "6",
    src: "/services/staging/gallery/gallery-06.png",
    alt: "Scenic backdrop panels lifted into position on a stage build",
  },
  {
    id: "7",
    src: "/services/staging/gallery/gallery-07.png",
    alt: "LED wall integrated into a custom stage surround",
  },
  {
    id: "8",
    src: "/services/staging/gallery/gallery-08.png",
    alt: "Stage steps and handrails finished ahead of rehearsal",
  },
  {
    id: "9",
    src: "/services/staging/gallery/gallery-09.png",
    alt: "Crew working through a staging plot during load in",
  },
  {
    id: "10",
    src: "/services/staging/gallery/gallery-10.png",
    alt: "Presentation platform set for an awards ceremony",
  },
  {
    id: "11",
    src: "/services/staging/gallery/gallery-11.png",
    alt: "Stage engineering drawings checked against the finished build",
  },
  {
    id: "12",
    src: "/services/staging/gallery/gallery-12.png",
    alt: "Finished stage seen from the audience before doors open",
  },
];

export const StagingFAQ = [
  {
    question: "What size stages can you build?",
    answer:
      "Anything from a single 8-foot riser to multi level stages and runways spanning a full ballroom. Our team engineers each build for the specific room and load requirements.",
  },
  {
    question: "Are your stages ADA accessible?",
    answer:
      "Yes. We supply compliant ramps and handrails, and we plan accessible access routes into every stage design as standard.",
  },
  {
    question: "Do you handle the engineering sign off?",
    answer:
      "For builds that require it, we provide load calculations and engineering documentation to satisfy venue and municipal requirements.",
  },
  {
    question: "How long does stage installation take?",
    answer:
      "Most standard builds install in a single load in day. Complex multi level or scenic builds may require additional time, which we confirm during planning.",
  },
];

export const ThemesData = {
  title: "What We Offer",
  subtitle: "Concept Development & Themed Environments",
  topRow: [
    {
      id: "1",
      title: "Concept Development",
      image: "/services/themes/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Mood Boards & Renderings",
      image: "/services/themes/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Themed Environments",
      image: "/services/themes/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Immersive Installations",
      image: "/services/themes/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Custom Scenic Design",
      image: "/services/themes/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Colour & Material Palettes",
      image: "/services/themes/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Themed Entrances",
      image: "/services/themes/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Photo Moments",
      image: "/services/themes/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Seasonal Concepts",
      image: "/services/themes/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Cultural & Heritage Themes",
      image: "/services/themes/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Brand Led Concepts",
      image: "/services/themes/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Full Theme Execution",
      image: "/services/themes/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/themes/case-study/case-study-01.png",
      "/services/themes/case-study/case-study-02.png",
      "/services/themes/case-study/case-study-03.png",
      "/services/themes/case-study/case-study-04.png",
      "/services/themes/case-study/case-study-05.png",
    ],
  },
];

export const ThemesImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/themes/gallery/gallery-01.png",
    alt: "Themed entrance feature welcoming guests into an event concept",
  },
  {
    id: "2",
    src: "/services/themes/gallery/gallery-02.png",
    alt: "Mood board and renderings set beside the finished themed room",
  },
  {
    id: "3",
    src: "/services/themes/gallery/gallery-03.png",
    alt: "Fully themed dining room carrying one concept through every detail",
  },
  {
    id: "4",
    src: "/services/themes/gallery/gallery-04.png",
    alt: "Custom scenic elements built for a themed corporate celebration",
  },
  {
    id: "5",
    src: "/services/themes/gallery/gallery-05.png",
    alt: "Themed lounge environment with bespoke furniture and decor",
  },
  {
    id: "6",
    src: "/services/themes/gallery/gallery-06.png",
    alt: "Ceiling installation completing a themed ballroom transformation",
  },
  {
    id: "7",
    src: "/services/themes/gallery/gallery-07.png",
    alt: "Themed bar build with custom graphics and lighting",
  },
  {
    id: "8",
    src: "/services/themes/gallery/gallery-08.png",
    alt: "Costumed hosts matched to the event theme greeting guests",
  },
  {
    id: "9",
    src: "/services/themes/gallery/gallery-09.png",
    alt: "Detail of themed table styling, linen, and centrepiece",
  },
  {
    id: "10",
    src: "/services/themes/gallery/gallery-10.png",
    alt: "Themed photo moment built for guest interaction",
  },
  {
    id: "11",
    src: "/services/themes/gallery/gallery-11.png",
    alt: "Concept sketch shown alongside the fabricated themed element",
  },
  {
    id: "12",
    src: "/services/themes/gallery/gallery-12.png",
    alt: "Wide view of a completely themed event space at doors open",
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
      image: "/services/props/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Oversized Statement Pieces",
      image: "/services/props/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Themed Prop Packages",
      image: "/services/props/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Photo Moment Props",
      image: "/services/props/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Branded Prop Builds",
      image: "/services/props/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Sculptural Elements",
      image: "/services/props/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Period & Era Props",
      image: "/services/props/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Seasonal Prop Inventory",
      image: "/services/props/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Prop Refinishing",
      image: "/services/props/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Prop Sourcing",
      image: "/services/props/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Storage & Warehousing",
      image: "/services/props/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Delivery & Placement",
      image: "/services/props/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/props/case-study/case-study-01.png",
      "/services/props/case-study/case-study-02.png",
      "/services/props/case-study/case-study-03.png",
      "/services/props/case-study/case-study-04.png",
      "/services/props/case-study/case-study-05.png",
    ],
  },
];

export const PropsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/props/gallery/gallery-01.png",
    alt: "Oversized statement prop built in the MME fabrication shop",
  },
  {
    id: "2",
    src: "/services/props/gallery/gallery-02.png",
    alt: "Custom prop finished and photographed on white before delivery",
  },
  {
    id: "3",
    src: "/services/props/gallery/gallery-03.png",
    alt: "Themed props placed through an event space",
  },
  {
    id: "4",
    src: "/services/props/gallery/gallery-04.png",
    alt: "Prop warehouse inventory ready for selection",
  },
  {
    id: "5",
    src: "/services/props/gallery/gallery-05.png",
    alt: "Interactive prop installation built for guest participation",
  },
  {
    id: "6",
    src: "/services/props/gallery/gallery-06.png",
    alt: "Sculptural prop lit as a centrepiece in a ballroom",
  },
  {
    id: "7",
    src: "/services/props/gallery/gallery-07.png",
    alt: "Prop detail showing paint finish and surface treatment",
  },
  {
    id: "8",
    src: "/services/props/gallery/gallery-08.png",
    alt: "Props being crated for transport to a venue",
  },
  {
    id: "9",
    src: "/services/props/gallery/gallery-09.png",
    alt: "Custom built photo moment prop carrying brand graphics",
  },
  {
    id: "10",
    src: "/services/props/gallery/gallery-10.png",
    alt: "Seasonal props styled into an event entrance",
  },
  {
    id: "11",
    src: "/services/props/gallery/gallery-11.png",
    alt: "Prop being assembled on site during load in",
  },
  {
    id: "12",
    src: "/services/props/gallery/gallery-12.png",
    alt: "Finished prop installation in place at a live event",
  },
];

export const PropsFAQ = [
  {
    question: "Do you build props or rent them?",
    answer:
      "Both. We maintain a large in house prop inventory and fabricate custom pieces in our own shop when a concept calls for something specific.",
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
      "Yes. Delivery, placement, and post event strike are handled by our crew as part of the production schedule.",
  },
];

export const MusicalEntertainmentData = {
  title: "What We Offer",
  subtitle: "Live Music & Musical Programming",
  topRow: [
    {
      id: "1",
      title: "Live Bands",
      image: "/services/musical-entertainment/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "DJs & Open Format Sets",
      image: "/services/musical-entertainment/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Jazz Ensembles",
      image: "/services/musical-entertainment/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "String Quartets",
      image: "/services/musical-entertainment/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Solo Vocalists",
      image: "/services/musical-entertainment/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Pianists & Keyboardists",
      image: "/services/musical-entertainment/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Cultural & World Music",
      image: "/services/musical-entertainment/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Ceremony Musicians",
      image: "/services/musical-entertainment/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Cocktail Hour Sets",
      image: "/services/musical-entertainment/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Headline Acts",
      image: "/services/musical-entertainment/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Backline & Sound Support",
      image: "/services/musical-entertainment/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Musical Direction",
      image: "/services/musical-entertainment/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/musical-entertainment/case-study/case-study-01.png",
      "/services/musical-entertainment/case-study/case-study-02.png",
      "/services/musical-entertainment/case-study/case-study-03.png",
      "/services/musical-entertainment/case-study/case-study-04.png",
      "/services/musical-entertainment/case-study/case-study-05.png",
    ],
  },
];

export const MusicalEntertainmentImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/musical-entertainment/gallery/gallery-01.png",
    alt: "Live band performing at a corporate gala reception",
  },
  {
    id: "2",
    src: "/services/musical-entertainment/gallery/gallery-02.png",
    alt: "DJ booth built into a custom stage surround",
  },
  {
    id: "3",
    src: "/services/musical-entertainment/gallery/gallery-03.png",
    alt: "String quartet playing through a cocktail hour",
  },
  {
    id: "4",
    src: "/services/musical-entertainment/gallery/gallery-04.png",
    alt: "Jazz ensemble set up in a hotel ballroom",
  },
  {
    id: "5",
    src: "/services/musical-entertainment/gallery/gallery-05.png",
    alt: "Vocalist performing with a full band behind a branded stage",
  },
  {
    id: "6",
    src: "/services/musical-entertainment/gallery/gallery-06.png",
    alt: "Electric violinist performing under moving lights",
  },
  {
    id: "7",
    src: "/services/musical-entertainment/gallery/gallery-07.png",
    alt: "Pianist playing through a seated dinner service",
  },
  {
    id: "8",
    src: "/services/musical-entertainment/gallery/gallery-08.png",
    alt: "Percussion act opening an awards ceremony",
  },
  {
    id: "9",
    src: "/services/musical-entertainment/gallery/gallery-09.png",
    alt: "Sound check and monitor mix before doors open",
  },
  {
    id: "10",
    src: "/services/musical-entertainment/gallery/gallery-10.png",
    alt: "Roaming musicians moving through a reception",
  },
  {
    id: "11",
    src: "/services/musical-entertainment/gallery/gallery-11.png",
    alt: "Band backline and staging set for a private celebration",
  },
  {
    id: "12",
    src: "/services/musical-entertainment/gallery/gallery-12.png",
    alt: "Dance floor filled during a live music set",
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
      "Most of our acts will learn a first dance or milestone song with adequate notice. We confirm this with the artist during booking.",
  },
];

export const EntertainmentData = {
  title: "What We Offer",
  subtitle: "Performers, Hosts & Interactive Experiences",
  topRow: [
    {
      id: "1",
      title: "Emcees & Hosts",
      image: "/services/entertainment/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Interactive Performers",
      image: "/services/entertainment/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Aerialists & Circus Acts",
      image: "/services/entertainment/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Dancers & Choreography",
      image: "/services/entertainment/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Magicians & Close Up",
      image: "/services/entertainment/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Comedians",
      image: "/services/entertainment/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Celebrity Talent",
      image: "/services/entertainment/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Photo & 360 Booths",
      image: "/services/entertainment/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Casino & Game Tables",
      image: "/services/entertainment/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Brand Ambassadors",
      image: "/services/entertainment/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Character Performers",
      image: "/services/entertainment/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "Guest Experience Design",
      image: "/services/entertainment/what-we-offer/offer-12.png",
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
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/entertainment/case-study/case-study-01.png",
      "/services/entertainment/case-study/case-study-02.png",
      "/services/entertainment/case-study/case-study-03.png",
      "/services/entertainment/case-study/case-study-04.png",
      "/services/entertainment/case-study/case-study-05.png",
    ],
  },
];

export const EntertainmentImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/entertainment/gallery/gallery-01.png",
    alt: "Emcee hosting from a branded stage at a corporate event",
  },
  {
    id: "2",
    src: "/services/entertainment/gallery/gallery-02.png",
    alt: "Aerial performer suspended above a gala reception",
  },
  {
    id: "3",
    src: "/services/entertainment/gallery/gallery-03.png",
    alt: "Guests taking part in an interactive photo experience at an activation",
  },
  {
    id: "4",
    src: "/services/entertainment/gallery/gallery-04.png",
    alt: "Casino tables and professional dealers set for a private event",
  },
  {
    id: "5",
    src: "/services/entertainment/gallery/gallery-05.png",
    alt: "Carnival games built into a company celebration",
  },
  {
    id: "6",
    src: "/services/entertainment/gallery/gallery-06.png",
    alt: "Dancers performing a choreographed opening number",
  },
  {
    id: "7",
    src: "/services/entertainment/gallery/gallery-07.png",
    alt: "Strolling magician working a cocktail reception",
  },
  {
    id: "8",
    src: "/services/entertainment/gallery/gallery-08.png",
    alt: "Guests using a 360 degree video booth at a launch party",
  },
  {
    id: "9",
    src: "/services/entertainment/gallery/gallery-09.png",
    alt: "Caricature artist drawing guests through dinner",
  },
  {
    id: "10",
    src: "/services/entertainment/gallery/gallery-10.png",
    alt: "Virtual reality station set up in an activation space",
  },
  {
    id: "11",
    src: "/services/entertainment/gallery/gallery-11.png",
    alt: "Team building activity running in a conference break out",
  },
  {
    id: "12",
    src: "/services/entertainment/gallery/gallery-12.png",
    alt: "Performers and guests filling the floor at an after party",
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
      "Yes. We manage contracts, technical riders, hospitality requirements, and on site coordination for every performer we book.",
  },
  {
    question: "Can entertainment be branded?",
    answer:
      "Absolutely. Photo booths, brand ambassadors, and character performers can all be customised with your branding and messaging.",
  },
  {
    question: "How far in advance should we book talent?",
    answer:
      "Six to eight weeks is comfortable for most acts. High demand and celebrity talent should be secured considerably earlier.",
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
      "We produce award ceremonies where the programme runs to the second, with staging, lighting, cue to cue rehearsal, and presentation graphics all aligned so every honouree gets their moment.",
    image: "/events/award-dinners/what-we-do/offering-01.png",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Show Production & Run of Show",
    description:
      "Our team builds and manages the full run of show, coordinating presenters, video packages, music stings, and transitions into one seamless broadcast quality programme.",
    image: "/events/award-dinners/what-we-do/offering-02.png",
  },
  {
    id: "3",
    icon: Users,
    headline: "Honouree & VIP Experience",
    description:
      "From arrival and greenroom hospitality to seating and press, we manage the honouree journey so recipients and their guests are looked after throughout the evening.",
    image: "/events/award-dinners/what-we-do/offering-03.png",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Sponsor & Brand Visibility",
    description:
      "We integrate sponsor recognition across signage, stage graphics, printed programmes, and digital content in a way that feels considered rather than commercial.",
    image: "/events/award-dinners/what-we-do/offering-04.png",
  },
];

export const AwardDinnersCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Award Dinners Project",
    challenge:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    gallery: [
      "/events/award-dinners/case-study/case-study-01.png",
      "/events/award-dinners/case-study/case-study-02.png",
      "/events/award-dinners/case-study/case-study-03.png",
      "/events/award-dinners/case-study/case-study-04.png",
      "/events/award-dinners/case-study/case-study-05.png",
    ],
  },
];

export const AwardDinnersImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/award-dinners/gallery/gallery-01.png",
    alt: "Awards ceremony stage set with lectern and presentation screen",
  },
  {
    id: "2",
    src: "/events/award-dinners/gallery/gallery-02.png",
    alt: "Honoree receiving an award under stage lighting",
  },
  {
    id: "3",
    src: "/events/award-dinners/gallery/gallery-03.png",
    alt: "Presentation graphics running on screen behind an awards stage",
  },
  {
    id: "4",
    src: "/events/award-dinners/gallery/gallery-04.png",
    alt: "Round tables set for an awards dinner in a ballroom",
  },
  {
    id: "5",
    src: "/events/award-dinners/gallery/gallery-05.png",
    alt: "Trophy table styled at an awards reception",
  },
  {
    id: "6",
    src: "/events/award-dinners/gallery/gallery-06.png",
    alt: "Show caller running the awards programme from front of house",
  },
  {
    id: "7",
    src: "/events/award-dinners/gallery/gallery-07.png",
    alt: "Guests applauding during an award presentation",
  },
  {
    id: "8",
    src: "/events/award-dinners/gallery/gallery-08.png",
    alt: "Step and repeat backdrop set for awards arrivals",
  },
  {
    id: "9",
    src: "/events/award-dinners/gallery/gallery-09.png",
    alt: "Honoree video playing to a seated audience",
  },
  {
    id: "10",
    src: "/events/award-dinners/gallery/gallery-10.png",
    alt: "Seating plan and place cards at an awards dinner",
  },
  {
    id: "11",
    src: "/events/award-dinners/gallery/gallery-11.png",
    alt: "Awards stage seen from the back of a full room",
  },
  {
    id: "12",
    src: "/events/award-dinners/gallery/gallery-12.png",
    alt: "Reception drinks before an awards ceremony",
  },
];

export const AwardDinnersFAQ = [
  {
    question: "Do you manage the run of show?",
    answer:
      "Yes. We build the full run of show, rehearse presenters, and call the show live on event day so the programme stays on schedule.",
  },
  {
    question: "Can you produce award video packages?",
    answer:
      "We produce honouree videos, sizzle reels, and presentation graphics in house, and integrate them into the show playback system.",
  },
  {
    question: "How do you handle presenter rehearsals?",
    answer:
      "We schedule a cue to cue rehearsal ahead of doors, walking each presenter through their entrance, microphone, and timing.",
  },
  {
    question: "Can the ceremony be live streamed?",
    answer:
      "Yes. We offer multi camera capture and live streaming for remote honourees and wider audiences.",
  },
];

export const CorporateEventsEventTypeOfferings = [
  {
    id: "1",
    icon: Presentation,
    headline: "Town Halls & All Hands",
    description:
      "We produce all hands and town hall meetings with clean staging, reliable audio, and hybrid streaming so every employee, in the room or remote, sees and hears the same thing.",
    image: "/events/corporate-events/what-we-do/offering-01.png",
  },
  {
    id: "2",
    icon: Users,
    headline: "Client & Partner Events",
    description:
      "From hospitality evenings to partner summits, we design corporate events that strengthen relationships while reflecting your brand with the right level of polish.",
    image: "/events/corporate-events/what-we-do/offering-02.png",
  },
  {
    id: "3",
    icon: Sparkles,
    headline: "Holiday & Milestone Celebrations",
    description:
      "Company celebrations, anniversaries, and holiday parties designed around your culture, with décor, entertainment, and catering coordination handled throughout.",
    image: "/events/corporate-events/what-we-do/offering-03.png",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Sales Kickoffs & Incentives",
    description:
      "High energy kickoffs and incentive events built to motivate teams, with general sessions, breakouts, and awards produced under one production plan.",
    image: "/events/corporate-events/what-we-do/offering-04.png",
  },
];

export const CorporateEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Corporate Events Project",
    challenge:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    gallery: [
      "/events/corporate-events/case-study/case-study-01.png",
      "/events/corporate-events/case-study/case-study-02.png",
      "/events/corporate-events/case-study/case-study-03.png",
      "/events/corporate-events/case-study/case-study-04.png",
      "/events/corporate-events/case-study/case-study-05.png",
    ],
  },
];

export const CorporateEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/corporate-events/gallery/gallery-01.png",
    alt: "All hands meeting staged for a company wide audience",
  },
  {
    id: "2",
    src: "/events/corporate-events/gallery/gallery-02.png",
    alt: "Registration desk and branded signage at a corporate event",
  },
  {
    id: "3",
    src: "/events/corporate-events/gallery/gallery-03.png",
    alt: "Executive presenting from a branded main stage",
  },
  {
    id: "4",
    src: "/events/corporate-events/gallery/gallery-04.png",
    alt: "Break out room set for a workshop session",
  },
  {
    id: "5",
    src: "/events/corporate-events/gallery/gallery-05.png",
    alt: "Networking reception in a corporate event space",
  },
  {
    id: "6",
    src: "/events/corporate-events/gallery/gallery-06.png",
    alt: "Panel discussion staged with lounge seating",
  },
  {
    id: "7",
    src: "/events/corporate-events/gallery/gallery-07.png",
    alt: "Branded coffee and catering station at a corporate meeting",
  },
  {
    id: "8",
    src: "/events/corporate-events/gallery/gallery-08.png",
    alt: "Town hall staging with live camera and screen relay",
  },
  {
    id: "9",
    src: "/events/corporate-events/gallery/gallery-09.png",
    alt: "Company celebration dinner set in a ballroom",
  },
  {
    id: "10",
    src: "/events/corporate-events/gallery/gallery-10.png",
    alt: "Delegates moving between sessions at a corporate conference",
  },
  {
    id: "11",
    src: "/events/corporate-events/gallery/gallery-11.png",
    alt: "Corporate awards moment on a main stage",
  },
  {
    id: "12",
    src: "/events/corporate-events/gallery/gallery-12.png",
    alt: "Wide view of a corporate event space at capacity",
  },
];

export const CorporateEventsFAQ = [
  {
    question: "What size corporate events do you handle?",
    answer:
      "Everything from a 30-person executive dinner to all hands meetings and kickoffs for several thousand attendees.",
  },
  {
    question: "Can you support hybrid and remote attendees?",
    answer:
      "Yes. We produce hybrid events with multi camera capture, streaming, and moderated Q&A so remote employees participate fully.",
  },
  {
    question: "Do you handle catering and venue sourcing?",
    answer:
      "We source venues and coordinate catering as part of our full service production, managing vendors on your behalf.",
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
    image: "/events/themed-events/what-we-do/offering-01.png",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Immersive Environments",
    description:
      "Our fabrication and décor teams transform venues into fully realised environments, with custom scenic, props, and lighting working to a single concept.",
    image: "/events/themed-events/what-we-do/offering-02.png",
  },
  {
    id: "3",
    icon: Users,
    headline: "Guest Journey Design",
    description:
      "We choreograph the guest experience from arrival through departure. Entrances, reveal moments, photo opportunities, and transitions all designed as part of the theme.",
    image: "/events/themed-events/what-we-do/offering-03.png",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Brand Led Theming",
    description:
      "For brand driven events, we translate visual identity into a physical world that stays recognisably on brand while still feeling like an experience rather than an advert.",
    image: "/events/themed-events/what-we-do/offering-04.png",
  },
];

export const ThemedEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Themed Events Project",
    challenge:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    gallery: [
      "/events/themed-events/case-study/case-study-01.png",
      "/events/themed-events/case-study/case-study-02.png",
      "/events/themed-events/case-study/case-study-03.png",
      "/events/themed-events/case-study/case-study-04.png",
      "/events/themed-events/case-study/case-study-05.png",
    ],
  },
];

export const ThemedEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/themed-events/gallery/gallery-01.png",
    alt: "Themed event entrance carrying the concept from the first step",
  },
  {
    id: "2",
    src: "/events/themed-events/gallery/gallery-02.png",
    alt: "Immersive themed room built for a private celebration",
  },
  {
    id: "3",
    src: "/events/themed-events/gallery/gallery-03.png",
    alt: "Themed decor detail on a dinner table",
  },
  {
    id: "4",
    src: "/events/themed-events/gallery/gallery-04.png",
    alt: "Custom scenic build supporting a single event concept",
  },
  {
    id: "5",
    src: "/events/themed-events/gallery/gallery-05.png",
    alt: "Themed lighting shifting the mood of a ballroom",
  },
  {
    id: "6",
    src: "/events/themed-events/gallery/gallery-06.png",
    alt: "Costumed performers matched to the event theme",
  },
  {
    id: "7",
    src: "/events/themed-events/gallery/gallery-07.png",
    alt: "Themed bar and lounge environment",
  },
  {
    id: "8",
    src: "/events/themed-events/gallery/gallery-08.png",
    alt: "Themed photo moment built for guests",
  },
  {
    id: "9",
    src: "/events/themed-events/gallery/gallery-09.png",
    alt: "Concept rendering shown beside the finished themed space",
  },
  {
    id: "10",
    src: "/events/themed-events/gallery/gallery-10.png",
    alt: "Themed ceiling and drape installation",
  },
  {
    id: "11",
    src: "/events/themed-events/gallery/gallery-11.png",
    alt: "Guests arriving into a fully themed environment",
  },
  {
    id: "12",
    src: "/events/themed-events/gallery/gallery-12.png",
    alt: "Wide view of a themed event at doors open",
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
    question: "Is everything custom built?",
    answer:
      "It is a mix. We fabricate custom scenic and props where the concept requires it, and draw on our existing inventory where it fits, which keeps budgets sensible.",
  },
  {
    question: "Can a theme work in any venue?",
    answer:
      "Nearly always. We survey the venue first and design within its constraints, including rigging points, load in access, and any landmark restrictions.",
  },
];

export const SeasonalEventsEventTypeOfferings = [
  {
    id: "1",
    icon: Sparkles,
    headline: "Holiday Parties",
    description:
      "We design and produce holiday celebrations with seasonal décor, entertainment, and catering coordination, memorable enough that guests look forward to next year.",
    image: "/events/seasonal-events/what-we-do/offering-01.png",
  },
  {
    id: "2",
    icon: Presentation,
    headline: "Winter Installations",
    description:
      "Custom winter environments, from photo ready installations to full venue transformations, fabricated in our shop and installed on site.",
    image: "/events/seasonal-events/what-we-do/offering-02.png",
  },
  {
    id: "3",
    icon: Users,
    headline: "Seasonal Brand Activations",
    description:
      "Seasonal activations that put your brand into the moment, with themed builds, interactive elements, and content capture designed for the season.",
    image: "/events/seasonal-events/what-we-do/offering-03.png",
  },
  {
    id: "4",
    icon: TrendingUp,
    headline: "Recurring Annual Programmes",
    description:
      "For clients who run the same seasonal event each year, we build reusable assets and refine the concept annually, improving the experience while controlling cost.",
    image: "/events/seasonal-events/what-we-do/offering-04.png",
  },
];

export const SeasonalEventsCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Seasonal Events Project",
    challenge:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this event type.",
    gallery: [
      "/events/seasonal-events/case-study/case-study-01.png",
      "/events/seasonal-events/case-study/case-study-02.png",
      "/events/seasonal-events/case-study/case-study-03.png",
      "/events/seasonal-events/case-study/case-study-04.png",
      "/events/seasonal-events/case-study/case-study-05.png",
    ],
  },
];

export const SeasonalEventsImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/events/seasonal-events/gallery/gallery-01.png",
    alt: "Winter themed event space with illuminated decor",
  },
  {
    id: "2",
    src: "/events/seasonal-events/gallery/gallery-02.png",
    alt: "Holiday party ballroom set for a company celebration",
  },
  {
    id: "3",
    src: "/events/seasonal-events/gallery/gallery-03.png",
    alt: "Seasonal entrance installation welcoming guests",
  },
  {
    id: "4",
    src: "/events/seasonal-events/gallery/gallery-04.png",
    alt: "Christmas tree and seasonal decor built for a corporate venue",
  },
  {
    id: "5",
    src: "/events/seasonal-events/gallery/gallery-05.png",
    alt: "Seasonal table styling with linen and centrepieces",
  },
  {
    id: "6",
    src: "/events/seasonal-events/gallery/gallery-06.png",
    alt: "Spring garden inspired event environment",
  },
  {
    id: "7",
    src: "/events/seasonal-events/gallery/gallery-07.png",
    alt: "Summer outdoor event under a tent structure",
  },
  {
    id: "8",
    src: "/events/seasonal-events/gallery/gallery-08.png",
    alt: "Autumn themed lounge with warm lighting",
  },
  {
    id: "9",
    src: "/events/seasonal-events/gallery/gallery-09.png",
    alt: "Seasonal photo moment built for guests",
  },
  {
    id: "10",
    src: "/events/seasonal-events/gallery/gallery-10.png",
    alt: "Holiday decor installation in a building lobby",
  },
  {
    id: "11",
    src: "/events/seasonal-events/gallery/gallery-11.png",
    alt: "End of year celebration dance floor",
  },
  {
    id: "12",
    src: "/events/seasonal-events/gallery/gallery-12.png",
    alt: "Seasonal event space seen at doors open",
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

/* ------------------------------------------------------------------ */
/* Specialty Entertainment                                             */
/* ------------------------------------------------------------------ */

/**
 * The eight talent divisions that make up the Specialty Entertainment
 * offering. Each one renders as its own band on the service page with its own
 * call to action, so a visitor searching for "aerialists NYC" or "LED dancers
 * for corporate events" lands on crawlable copy rather than a generic list.
 */
export const SpecialtyEntertainmentDivisions = [
  {
    id: "aerial-acrobatic",
    icon: Orbit,
    blurb:
      "Breathtaking aerialists, acrobats and circus artists that create visual moments above and beyond.",
    eyebrow: "Aerial & Acrobatic Performers",
    title: "Entertainment Above Expectations",
    paragraphs: [
      "Create a dramatic visual experience with breathtaking aerialists and specialty acrobatic performers who turn the airspace above your guests into part of the show.",
      "From aerial champagne service and suspended performers to fully choreographed aerial productions, our artists create unforgettable moments above and around your guests.",
    ],
    featuring: [
      "Aerialists",
      "Lyra artists",
      "Silks",
      "Acrobats",
      "Contortionists",
      "Hand balancing",
      "Specialty circus performers",
    ],
    cta: "Explore Aerial Entertainment",
    image: "/services/specialty-entertainment/divisions/division-01.png",
  },
  {
    id: "living-art",
    icon: Theater,
    blurb:
      "Immersive characters and living art that engage guests and bring your event to life.",
    eyebrow: "Living Art & Interactive Performers",
    title: "Where Entertainment Becomes Part of the Environment",
    paragraphs: [
      "Turn your event into a living canvas. Our specialty artists interact with guests while becoming an extension of the room, the decor, and the creative direction.",
      "These performers work beautifully through arrival and cocktail hour, giving photographers a focal point and giving guests a reason to stop, look, and talk.",
    ],
    featuring: [
      "Living statues",
      "Human tables",
      "Living champagne walls",
      "Body painted performers",
      "Mirror characters",
      "Strolling characters",
      "Themed hosts and hostesses",
    ],
    cta: "Discover Living Art",
    image: "/services/specialty-entertainment/divisions/division-02.png",
  },
  {
    id: "specialty-dancers",
    icon: PersonStanding,
    blurb:
      "High energy, elegant and themed dance performances tailored to your event vision.",
    eyebrow: "Specialty Dancers",
    title: "Movement. Energy. Spectacle.",
    paragraphs: [
      "From elegant atmospheric performances to high energy productions, our dancers can welcome guests, activate a dance floor, support a headline performance, or carry a fully choreographed show.",
      "Casting is matched to your music direction, your theme, and the room, so the choreography reads as designed rather than booked.",
    ],
    featuring: [
      "Contemporary dancers",
      "Ballroom",
      "Latin",
      "Hip hop",
      "LED dancers",
      "Go go performers",
      "Cultural dance",
      "Themed dance productions",
    ],
    cta: "Explore Dance Experiences",
    image: "/services/specialty-entertainment/divisions/division-03.png",
  },
  {
    id: "fire-led-visual",
    icon: Flame,
    blurb:
      "Dazzling visual and fire acts that transform your event with light, movement and energy.",
    eyebrow: "Fire, LED & Visual Performers",
    title: "Turn Down the Lights. Turn Up the Experience.",
    paragraphs: [
      "Create a powerful after dark experience through light, movement, fire, and technology.",
      "Our specialty visual performers suit dramatic entrances, nightlife inspired celebrations, outdoor events, product launches, and immersive environments.",
    ],
    featuring: [
      "LED performers",
      "Fire artists",
      "Pixel performers",
      "Glow performers",
      "Laser performers",
      "Light shows",
      "Interactive visual acts",
    ],
    footnote:
      "Fire performance is subject to venue approval, permitting, and applicable safety requirements.",
    cta: "Create a Visual Experience",
    image: "/services/specialty-entertainment/divisions/division-04.png",
  },
  {
    id: "strolling-immersive",
    icon: Wand2,
    blurb:
      "Roaming performers and interactive talent that create unforgettable moments up close.",
    eyebrow: "Strolling & Immersive Entertainment",
    title: "Entertainment Without a Stage",
    paragraphs: [
      "Some of the most memorable performances happen directly among your guests rather than in front of them.",
      "Our immersive performers move throughout the event, creating unexpected interactions, photo moments, conversation, and energy that carries the room between programme beats.",
    ],
    featuring: [
      "Strolling magicians",
      "Mentalists",
      "Specialty characters",
      "Interactive performers",
      "Roaming musicians",
      "Celebrity impersonators",
      "Themed characters",
    ],
    cta: "Discover Immersive Entertainment",
    image: "/services/specialty-entertainment/divisions/division-05.png",
  },
  {
    id: "musicians-live-acts",
    icon: Music,
    blurb:
      "From elegant musicians to high energy live acts, we create the perfect soundtrack for every moment.",
    eyebrow: "Musicians & Specialty Live Acts",
    title: "Give Your Event Its Own Sound",
    paragraphs: [
      "From sophisticated cocktail hour musicians to unexpected roaming performances and high energy live acts, MME curates musical entertainment to complement every stage of the guest experience.",
      "We programme the sound of the evening as a single arc, so arrival, dinner, and after party each feel deliberate.",
    ],
    featuring: [
      "Electric violinists",
      "Saxophonists",
      "Percussionists",
      "Pianists",
      "Guitarists",
      "Vocalists",
      "String ensembles",
      "Roaming musicians",
      "Specialty bands",
    ],
    cta: "Explore Live Music",
    image: "/services/specialty-entertainment/divisions/division-06.png",
  },
  {
    id: "interactive-experiences",
    icon: Palette,
    blurb:
      "Engage guests with interactive art, magicians, digital experiences and custom activations.",
    eyebrow: "Interactive Experiences",
    title: "Make Your Guests Part of the Show",
    paragraphs: [
      "Audiences today want more than something to watch. They want something to take part in and something worth sharing.",
      "MME develops interactive entertainment that encourages guests to participate, engage, post, and become part of the event itself.",
    ],
    featuring: [
      "Live artists",
      "Digital artists",
      "Caricature artists",
      "Fashion illustrators",
      "Interactive photo experiences",
      "Magicians",
      "Mentalists",
      "Custom guest activations",
    ],
    cta: "Create an Interactive Moment",
    image: "/services/specialty-entertainment/divisions/division-07.png",
  },
  {
    id: "themed-custom",
    icon: Star,
    blurb:
      "If you can imagine it, we can create it. Custom concepts, costumes and productions built just for you.",
    eyebrow: "Themed & Custom Entertainment",
    title: "If You Can Imagine It, We Can Create It",
    paragraphs: [
      "Looking for something guests have not seen before? Our creative team develops custom entertainment concepts built specifically for your event.",
      "We combine performers, costumes, choreography, scenic design, lighting, music, special effects, and technology into one cohesive experience, from a single signature moment to a complete theatrical production.",
    ],
    featuring: [
      "Original show concepts",
      "Custom costume design",
      "Choreography and staging",
      "Scenic and lighting integration",
      "Special effects",
      "Full theatrical productions",
    ],
    cta: "Create Something Original",
    image: "/services/specialty-entertainment/divisions/division-08.png",
  },
];

/**
 * The two closing arguments on the Specialty Entertainment page: why curation
 * beats a talent list, and what "one creative partner" actually covers.
 */
export const SpecialtyEntertainmentApproach = {
  /** The two column band that argues curation beats a talent list. */
  difference: {
    eyebrow: "The MME Difference",
    title: "Not Just Entertainment.",
    titleHighlight: "An Experience.",
    paragraphs: [
      "What sets MME Worldwide apart is our ability to connect entertainment with the entire creative production rather than treating it as a booking.",
      "We consider the venue, the guest journey, the theme, the timing, the lighting, the music and the emotional impact you want before we recommend a single performer, so the entertainment feels like it belongs.",
    ],
    statement: "One Creative Partner. Endless Possibilities.",
    cta: { text: "Our Approach", href: "/contact" },
    image: "/services/specialty-entertainment/difference/difference.png",
    imageAlt:
      "Mirror suit violinist performing among guests at an MME Worldwide event",
  },

};

export const SpecialtyEntertainmentData = {
  title: "What We Offer",
  subtitle: "Specialty Performers, Immersive Talent & Custom Productions",
  topRow: [
    {
      id: "1",
      title: "Aerial & Acrobatic Performers",
      image: "/services/specialty-entertainment/what-we-offer/offer-01.png",
      width: "lg" as const,
    },
    {
      id: "2",
      title: "Living Art & Human Installations",
      image: "/services/specialty-entertainment/what-we-offer/offer-02.png",
      width: "md" as const,
    },
    {
      id: "3",
      title: "Specialty Dancers",
      image: "/services/specialty-entertainment/what-we-offer/offer-03.png",
      width: "xl" as const,
    },
    {
      id: "4",
      title: "Fire, LED & Glow Artists",
      image: "/services/specialty-entertainment/what-we-offer/offer-04.png",
      width: "sm" as const,
    },
    {
      id: "5",
      title: "Strolling & Immersive Performers",
      image: "/services/specialty-entertainment/what-we-offer/offer-05.png",
      width: "lg" as const,
    },
    {
      id: "6",
      title: "Musicians & Specialty Live Acts",
      image: "/services/specialty-entertainment/what-we-offer/offer-06.png",
      width: "md" as const,
    },
  ],
  bottomRow: [
    {
      id: "7",
      title: "Interactive Guest Experiences",
      image: "/services/specialty-entertainment/what-we-offer/offer-07.png",
      width: "lg" as const,
    },
    {
      id: "8",
      title: "Themed & Custom Productions",
      image: "/services/specialty-entertainment/what-we-offer/offer-08.png",
      width: "md" as const,
    },
    {
      id: "9",
      title: "Creative Development & Casting",
      image: "/services/specialty-entertainment/what-we-offer/offer-09.png",
      width: "xl" as const,
    },
    {
      id: "10",
      title: "Costume & Choreography Direction",
      image: "/services/specialty-entertainment/what-we-offer/offer-10.png",
      width: "sm" as const,
    },
    {
      id: "11",
      title: "Show Calling & Music Direction",
      image: "/services/specialty-entertainment/what-we-offer/offer-11.png",
      width: "lg" as const,
    },
    {
      id: "12",
      title: "On Site Talent Management",
      image: "/services/specialty-entertainment/what-we-offer/offer-12.png",
      width: "md" as const,
    },
  ],
};

export const SpecialtyEntertainmentCaseStudiesData = [
  {
    id: "1",
    clientName: "Client Name Pending",
    projectTitle: "Specialty Entertainment Production",
    challenge:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    solution:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    impact:
      "PLACEHOLDER: awaiting client approved case study copy for this service.",
    gallery: [
      "/services/specialty-entertainment/case-study/case-study-01.png",
      "/services/specialty-entertainment/case-study/case-study-02.png",
      "/services/specialty-entertainment/case-study/case-study-03.png",
      "/services/specialty-entertainment/case-study/case-study-04.png",
      "/services/specialty-entertainment/case-study/case-study-05.png",
    ],
  },
];

export const SpecialtyEntertainmentImageGallery: GalleryImage[] = [
  {
    id: "1",
    src: "/services/specialty-entertainment/gallery/gallery-01.png",
    alt: "Aerialist performing above guests at a gala produced by MME Worldwide",
  },
  {
    id: "2",
    src: "/services/specialty-entertainment/gallery/gallery-02.png",
    alt: "Living champagne wall greeting guests at a corporate reception",
  },
  {
    id: "3",
    src: "/services/specialty-entertainment/gallery/gallery-03.png",
    alt: "LED dancers opening a product launch produced by MME Worldwide",
  },
  {
    id: "4",
    src: "/services/specialty-entertainment/gallery/gallery-04.png",
    alt: "Body painted performer working as part of the event decor",
  },
  {
    id: "5",
    src: "/services/specialty-entertainment/gallery/gallery-05.png",
    alt: "Strolling magician entertaining guests during cocktail hour",
  },
  {
    id: "6",
    src: "/services/specialty-entertainment/gallery/gallery-06.png",
    alt: "Electric violinist performing at a luxury private celebration",
  },
  {
    id: "7",
    src: "/services/specialty-entertainment/gallery/gallery-07.png",
    alt: "Contortionist featured in a themed entertainment production",
  },
  {
    id: "8",
    src: "/services/specialty-entertainment/gallery/gallery-08.png",
    alt: "Caricature artist creating live artwork for event guests",
  },
  {
    id: "9",
    src: "/services/specialty-entertainment/gallery/gallery-09.png",
    alt: "Choreographed dance production on a custom MME stage build",
  },
  {
    id: "10",
    src: "/services/specialty-entertainment/gallery/gallery-10.png",
    alt: "Glow performers during an after dark brand activation",
  },
  {
    id: "11",
    src: "/services/specialty-entertainment/gallery/gallery-11.png",
    alt: "Themed hosts welcoming guests at an immersive event entrance",
  },
  {
    id: "12",
    src: "/services/specialty-entertainment/gallery/gallery-12.png",
    alt: "Full theatrical entertainment production staged by MME Worldwide",
  },
];

export const SpecialtyEntertainmentFAQ = [
  {
    question: "What counts as specialty entertainment?",
    answer:
      "Specialty entertainment covers performers who do more than play a set. Aerialists, living art, specialty dancers, fire and LED artists, strolling magicians, interactive artists, and custom theatrical productions all sit inside our Specialty Entertainment Division, and we cast them around your theme, your venue, and the moment in the evening they need to carry.",
  },
  {
    question: "Do you handle casting, contracting, and rehearsals?",
    answer:
      "Yes. We curate the talent, handle casting and contracting, direct costume and choreography, run rehearsals, and manage performers on site through the run of show, so you brief one team rather than coordinating several agencies.",
  },
  {
    question: "Can aerial and fire performances happen in any venue?",
    answer:
      "Aerial performance depends on rigging points, load capacity, and ceiling height, so we carry out a site survey before confirming an act. Fire performance is subject to venue approval, permitting, and applicable safety requirements. Where a venue cannot support either, we propose LED, pixel, or glow alternatives that deliver the same impact.",
  },
  {
    question: "How far in advance should specialty entertainment be booked?",
    answer:
      "Six to twelve weeks is comfortable for most acts. Custom productions that need original costume, choreography, and scenic work are best started three to four months out. We regularly deliver on shorter timelines, so ask us even when the date is close.",
  },
  {
    question: "Can you build an entertainment concept around our brand?",
    answer:
      "That is the part we enjoy most. Our creative team develops original concepts that combine performers, costume, choreography, scenic design, lighting, music, and special effects into one cohesive experience built for your brand and your audience.",
  },
];

/* ------------------------------------------------------------------ */
/* Event Management (Logistics service page)                           */
/* ------------------------------------------------------------------ */

/**
 * The Event Management band on the Logistics page. Logistics answers "how
 * does it get there". This answers "who runs it once it does", which is the
 * question most enquiries actually open with.
 */
export const EventManagementData = {
  eyebrow: "Event Management",
  title: "One Team Running the Whole Show",
  intro:
    "Trucks, crews, and freight only matter if someone is holding the whole event together. Our event managers own the plan from the first site visit to the final load out, so you have one number to call and one person who knows every answer.",
  pillars: [
    {
      id: "planning",
      title: "Planning & Budget Control",
      description:
        "Scope, timeline, and budget built together in week one, then tracked line by line so nothing surprises you on the final invoice.",
      points: [
        "Production schedule and critical path",
        "Line item budget and change control",
        "Vendor sourcing and contracting",
        "Permits, licences, and certificates of insurance",
      ],
    },
    {
      id: "venue",
      title: "Venue & Vendor Coordination",
      description:
        "Site surveys, floor plans, and a single point of contact who keeps every supplier working from the same document.",
      points: [
        "Site surveys and load in access checks",
        "Floor plans and seating layouts",
        "Catering, staffing, and rental coordination",
        "Venue rules, curfews, and union requirements",
      ],
    },
    {
      id: "run-of-show",
      title: "Run of Show & Show Calling",
      description:
        "A minute by minute script that lighting, audio, video, catering, and talent all work from, called live by our team.",
      points: [
        "Run of show and cue to cue script",
        "Rehearsals and speaker walkthroughs",
        "Live show calling and crew comms",
        "Contingency and weather plans",
      ],
    },
    {
      id: "onsite",
      title: "On Site Management & Load Out",
      description:
        "Supervisors on the floor from the first truck to the last case, with a post event report that makes the next one easier.",
      points: [
        "Install and dismantle supervision",
        "Guest registration and floor management",
        "Crew scheduling and welfare",
        "Reconciliation and post event report",
      ],
    },
  ],
  metrics: [
    { value: "30", suffix: "+", label: "Years running live events" },
    { value: "24", suffix: "/7", label: "On call through show week" },
    { value: "1", suffix: "", label: "Point of contact, start to finish" },
  ],
  image: "/services/logistics/event-management/event-management.png",
  supportImage: "/services/logistics/event-management/event-management-detail.png",
};

/* ------------------------------------------------------------------ */
/* Sizzle reel                                                         */
/* ------------------------------------------------------------------ */

/**
 * Content for /about/sizzle-reel.
 *
 * `videoSrc` is deliberately left undefined until the graded cut is
 * delivered. VideoFrame falls back to `poster`, which is a placeholder
 * carrying the aspect ratio and pixel size the edit should be exported at.
 * Drop in a Vimeo link or an MP4 path here and the player takes over with no
 * other change.
 */
export const sizzleReel = {
  eyebrow: "Sizzle Reel",
  title: "See It",
  titleHighlight: "In Motion",
  subtitle: "Event production by MME Worldwide.",
  heroImage: "/about/sizzle-reel/hero/hero.png",
  heroImageAlt:
    "Wide view of a gala produced by MME Worldwide, lit and set for arrivals",
  /**
   * Left undefined until the graded cut lands. VideoFrame falls back to the
   * poster, which carries the size the edit should be exported at. Drop a
   * Vimeo link or an MP4 path in here and the player takes over.
   */
  videoSrc: undefined as string | undefined,
  poster: "/about/sizzle-reel/reel/sizzle-reel-poster.png",
  videoLabel: "MME Worldwide Sizzle Reel",
  faqs: [
    {
      question: "Can we get the reel to share internally?",
      answer:
        "Yes. Send us a note and we will supply a downloadable file along with stills you can drop into a deck, cleared for internal and pitch use.",
    },
    {
      question: "Are the events in the reel all produced by MME Worldwide?",
      answer:
        "Every event featured was produced or fabricated by our own teams across custom fabrication, printing, audio visual, lighting, staging, design and decor, entertainment, and logistics.",
    },
    {
      question: "Do you produce event films and recap videos for clients?",
      answer:
        "We do. Multi camera capture, same day edits, recap films, and sizzle reels are all available as part of a production package, and we plan the shoot into the run of show so the camera team is never fighting the event.",
    },
    {
      question: "Can we see work in a specific category?",
      answer:
        "Our Our Work section filters by event type, and each service and event page carries its own gallery. Tell us the category you care about and we will send a focused selection.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Digital brochure                                                    */
/* ------------------------------------------------------------------ */

/** Page spreads for the flip book on /about/brochure. */
export const brochurePages = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  image: `/about/brochure/pages/page-${String(index + 1).padStart(2, "0")}.png`,
  alt: `MME Worldwide brochure, page ${index + 1}`,
}));

export const brochure = {
  eyebrow: "Digital Brochure",
  title: "The Whole Operation, One Document",
  description:
    "Turn through our capabilities the way you would a printed brochure.",
  heroImage: "/about/brochure/hero/hero.png",
  downloadUrl: "/about/brochure/mme-worldwide-brochure.pdf",
  readerTitle: "MME Worldwide Brochure",
  readerSubtitle: "Capabilities, Case Studies & Specifications",
  ctaTitle: "Ready to Put It to Work?",
  ctaBody:
    "Send us the date, the venue, and the brief. We will come back with an approach, a realistic budget, and the team who would run it.",
  faqs: [
    {
      question: "Can I download the brochure as a PDF?",
      answer:
        "Yes. The download button in the reader toolbar and at the top of this page both give you the print ready PDF, sized for both screen reading and A4 or US Letter printing.",
    },
    {
      question: "Is there a version tailored to my industry?",
      answer:
        "We keep focused capability decks for corporate, nonprofit, agency, and private client work. Tell us which fits and we will send the relevant one along with matching case studies.",
    },
    {
      question: "Does the brochure include pricing?",
      answer:
        "It does not, because scope drives cost far more than any rate card would suggest. Share your brief through the proposal builder and we will come back with a line item budget you can actually plan against.",
    },
    {
      question: "How current is the work shown?",
      answer:
        "The brochure is refreshed as new work clears client approval. If you would like to see something more recent than what is here, ask us and we will send it directly.",
    },
  ],
};
