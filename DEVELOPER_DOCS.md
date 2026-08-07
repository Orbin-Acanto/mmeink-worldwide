# MME Ink Worldwide - Developer Documentation

## Project Overview

MME Ink Worldwide is a marketing website for a full-service event management and hospitality company. It showcases their 30+ years of experience, portfolio of projects (galas, corporate events, conferences, trade shows), and service offerings across three locations: NYC, Long Island, and Miami.

Built with Next.js App Router, React 19, TypeScript 5, and TailwindCSS 4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 with App Router |
| UI Library | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | TailwindCSS 4 (PostCSS plugin) |
| Animation | Framer Motion (`motion`), GSAP |
| Icons | Lucide React |
| UI Primitives | shadcn/ui (New York style) |
| Build Tooling | Turbopack |
| Image Processing | Sharp |
| Rate Limiting | Upstash Redis + `@upstash/ratelimit` |
| Spam Protection | Google reCAPTCHA v2 |
| Lead Capture | N8N webhook automation |
| Font | Montserrat, Bebas Neue (Google Fonts) |

---

## Project Structure

```
mmeink-worldwide/
├── app/                        # Next.js App Router pages and API routes
│   ├── layout.tsx              # Root layout: wraps all pages with Navbar + Footer
│   ├── page.tsx                # Home page (client component)
│   ├── globals.css             # Global styles, CSS variables, custom animations
│   ├── api/
│   │   └── contact-form/
│   │       └── route.ts        # POST handler for the contact form
│   ├── about/
│   ├── contact/
│   ├── events/
│   │   ├── page.tsx
│   │   ├── brand-activations/
│   │   ├── conferences-meetings/
│   │   ├── exhibits-trade-shows/
│   │   ├── galas/
│   │   ├── product-launches/
│   │   └── virtual-hybrid-events/
│   ├── services/
│   │   ├── page.tsx
│   │   ├── audio-visual/
│   │   ├── custom-fabrication/
│   │   ├── design-decor/
│   │   ├── logistics/
│   │   └── rentals/
│   └── work/
│       ├── page.tsx
│       └── work-details/
├── components/                 # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── CTASection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQ.tsx
│   ├── about/
│   ├── events/
│   ├── services/
│   ├── work/
│   ├── project-details/
│   ├── stats/
│   └── ui/                     # shadcn/ui primitives and custom animations
├── sections/                   # Home page section components
│   ├── LandingHero.tsx
│   ├── AboutSection.tsx
│   ├── HomeCTA.tsx
│   ├── OurWorkMarqueSection.tsx
│   ├── OurWorkSection.tsx
│   ├── ClientLogosSection.tsx
│   └── ProcessSection.tsx
├── data/
│   └── index.tsx               # All static content: nav, projects, team, FAQs, etc.
├── types/
│   └── index.ts                # TypeScript interfaces
├── lib/
│   ├── utils.ts                # cn() class merge utility
│   └── rate-limit.ts           # Upstash rate limiter config
├── public/                     # Static assets (images, logos, icons)
├── next.config.ts
├── tailwind.config.*           # TailwindCSS config (v4 uses CSS-first config)
├── tsconfig.json
└── .env.local                  # Environment variables (never commit this)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Google reCAPTCHA v2
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# N8N Automation Webhook
N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/...
N8N_BASIC_AUTH_USERNAME=your_username
N8N_BASIC_AUTH_PASSWORD=your_password

# Upstash Redis (for rate limiting)
UPSTASH_REDIS_REST_URL=https://your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your_token
```

### Running Locally

```bash
npm run dev       # starts dev server with Turbopack at localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # run ESLint
```

---

## Routing

All routing follows Next.js App Router conventions. Each route directory contains a `page.tsx` and optionally a `layout.tsx` for route-specific metadata or wrappers.

| Route | Page File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/events` | `app/events/page.tsx` |
| `/events/[type]` | `app/events/[type]/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/services/[type]` | `app/services/[type]/page.tsx` |
| `/work` | `app/work/page.tsx` |
| `/work/work-details` | `app/work/work-details/page.tsx` |

Each route layout sets its own metadata (title, description) via the Next.js `metadata` export.

---

## Data Layer

All static site content lives in a single file: [data/index.tsx](data/index.tsx).

This is a deliberate architectural choice to keep content edits in one place rather than scattered across page files.

### Available Exports

| Export | Description |
|---|---|
| `navItems` | Navigation links and submenus for Navbar |
| `workItems` | Portfolio items for the home marquee |
| `stats` | Company statistics (projects, years, awards) |
| `servicesEventsHome` | 6-item service grid shown on the home page |
| `events` | 6 event type categories (galas, conferences, etc.) |
| `services` | 5 service types (AV, fabrication, decor, etc.) |
| `clientLogos` | 32 client brand logos |
| `team` | 6 team members with bios, roles, and contacts |
| `timeline` | 4 company milestones (1995 to 2025) |
| `locations` | 3 office locations (NYC, Long Island, Miami) |
| `projects` | 12 major projects with full detail data |
| `steps` | 4-step process: Discover, Design, Produce, Deliver |
| `faqs` | FAQ entries |

To add or edit content (team members, projects, services, etc.), edit this file. No database is involved; everything is hardcoded.

---

## TypeScript Types

Defined in [types/index.ts](types/index.ts):

```ts
WorkItem          // id, title, category, image, href
Project           // id, title, venue, eventType, category, image, href
Step              // id, title, subtitle, image
EventDetailsImageSlider  // id, image, alt
GalleryImage      // id, src, alt, optional span classes
ProcessStep       // number, title, description
```

---

## Components

### Layout Components

**[components/Navbar.tsx](components/Navbar.tsx)** - Client component. Fixed top position. Tracks scroll state to apply a blurred background. Desktop shows dropdown menus on hover for Events and Services. Mobile shows a hamburger menu with collapsible submenus. Navigation items come from `navItems` in the data file.

**[components/Footer.tsx](components/Footer.tsx)** - Includes newsletter signup with email validation, links to event types and services, contact info, and social links (Instagram, Facebook).

### Shared UI Components

**[components/Button.tsx](components/Button.tsx)** - Three variants: `primary` (purple fill), `secondary` (white border), `outline` (purple border). Accepts either `href` (renders a `Link`) or `onClick` (renders a `button`). Supports an icon prop.

```tsx
<Button variant="primary" href="/contact">Get in Touch</Button>
<Button variant="secondary" onClick={handler} icon={<ArrowRight />}>Learn More</Button>
```

**[components/FAQ.tsx](components/FAQ.tsx)** - Animated accordion. Receives an array of FAQ objects.

**[components/CTASection.tsx](components/CTASection.tsx)** - Reusable call-to-action banner used across multiple pages.

**[components/TestimonialsSection.tsx](components/TestimonialsSection.tsx)** - Client testimonials display.

### Stats Components

Located in [components/stats/](components/stats/):

- `StatsSection.tsx` - Container with title and grid of stat items
- `StatItem.tsx` - Animated number counter using the `number-ticker` UI primitive
- `StatsTitle.tsx` - Styled heading for the section

### Home Page Sections

Located in [sections/](sections/). These are page-level layout blocks used only in the home page (`app/page.tsx`):

- `LandingHero.tsx` - Full-screen Vimeo video background (video ID: `1041819066`), gradient overlay, hero text, social icons, scroll indicator
- `AboutSection.tsx` - Two-column layout with image and text
- `HomeCTA.tsx` - Call-to-action strip
- `OurWorkMarqueSection.tsx` - Horizontally scrolling marquee of project images
- `OurWorkSection.tsx` - Full portfolio grid
- `ClientLogosSection.tsx` - Scrolling logo carousel
- `ProcessSection.tsx` - 4-step process display

### Events Components

Located in [components/events/](components/events/):

- `EventTypeHero.tsx` - Hero banner for each event type page
- `EventIntroSection.tsx` - Introductory text for the event
- `WhatWeDoSection.tsx` - Feature list for the event type
- `CaseStudiesSection.tsx` - Project case studies related to the event
- `ImageGallerySection.tsx` - Masonry-style image gallery

### Services Components

Located in [components/services/](components/services/):

- `ServiceCard.tsx` - Card for individual services
- `ServicesOverviewSection.tsx` - Motion-animated overview grid
- `WhatWeOffer.tsx` - Feature list for a service
- `WhyChooseUs.tsx` - Differentiator section
- `ProcessApproach.tsx` - Service-specific process breakdown
- `AdditionalExperiences.tsx` - Related offerings

### Work/Portfolio Components

Located in [components/work/](components/work/):

- `WorkHero.tsx` - Portfolio page header
- `WorkFilter.tsx` - Category filter tabs
- `ProjectsGrid.tsx` - Responsive masonry grid with hover effects

### Project Detail Components

Located in [components/project-details/](components/project-details/):

- `ProjectAboutSection.tsx` - Summary of the project
- `EventDetailsSection.tsx` - Event specifics and image slider
- `RelatedProjectsSection.tsx` - Linked similar projects
- `CTASection.tsx` - End-of-page CTA

### UI Primitives

Located in [components/ui/](components/ui/):

- `number-ticker.tsx` - Animated number counter, used in stats
- `text-animate.tsx` - Text reveal animation utilities
- `shadcn-io/highlight-text/` - Highlighted/underlined text component
- `shadcn-io/typing-text/` - Typewriter animation component

---

## API Routes

### POST /api/contact-form

Located at [app/api/contact-form/route.ts](app/api/contact-form/route.ts).

This is the only backend endpoint in the project. It handles the contact page form submission.

**Request format:** `multipart/form-data`

| Field | Type | Description |
|---|---|---|
| name | string | Sender name |
| email | string | Sender email |
| phone | string | Sender phone number |
| company | string | Company name |
| message | string | Message body |
| eventType | string | Selected event category |
| budget | string | Budget range |
| honeypot | string | Must be empty (bot trap) |
| formStartTime | string | Unix ms timestamp when form loaded |
| g-recaptcha-response | string | reCAPTCHA v2 token |
| files | File[] | Attachments (max 20MB each) |

**Pipeline:**
1. Parse multipart form data
2. Reject if honeypot field is non-empty (spam bot)
3. Reject if form was submitted in under 5 seconds (too fast = bot)
4. Check rate limit via Upstash Redis (2 submissions per day per IP)
5. Verify reCAPTCHA token with Google
6. POST form data + attachments to the configured N8N webhook using Basic Auth
7. Return success or error JSON

**Rate limiting config** is in [lib/rate-limit.ts](lib/rate-limit.ts): 2 requests per 24 hours per IP address.

---

## Styling System

### TailwindCSS v4

The project uses TailwindCSS 4 which moves configuration into CSS rather than `tailwind.config.js`. Theme variables are defined at the top of [app/globals.css](app/globals.css) using `@theme`.

### Custom Theme Colors

| Variable | Value |
|---|---|
| `--color-purple` | `#6b4c9a` |
| `--color-cyan` | `#00b5e2` |
| `--color-sky` | sky-family |
| `--color-charcoal` | dark neutral |

Use these in Tailwind as `bg-purple`, `text-cyan`, etc.

### Custom Animations

Defined in `globals.css`:

| Animation | Usage |
|---|---|
| `marquee` | Horizontal scrolling logo carousel |
| `scroll-left` / `scroll-right` | Marquee variants |
| `pulse-ring` | Pulsing ring effect |
| `shimmer` | Loading skeleton shimmer |

Apply via `animate-marquee`, etc.

### Utility Function

```ts
// lib/utils.ts
import { cn } from "@/lib/utils"

cn("base-class", condition && "conditional-class", "another-class")
```

Uses `clsx` + `tailwind-merge` to safely merge class names without conflicts.

---

## Image Handling

Images are served via the Next.js `<Image>` component with optimization enabled.

**Allowed remote domains** (configured in [next.config.ts](next.config.ts)):
- `images.unsplash.com` - placeholder/demo images
- `avatar.iran.liara.run` - team member avatars

**Supported formats:** AVIF, WebP (auto-negotiated)

**Local assets** live in the `public/` directory. Client logos are in `public/client_logo/`.

To add a new remote image domain, update the `remotePatterns` array in `next.config.ts`.

---

## Animations

The project uses two animation libraries. Choose based on the use case:

**Motion (Framer Motion)** - Used for component-level enter/exit animations, scroll-triggered reveals, and layout transitions. Most section components use this.

```tsx
import { motion } from "motion/react"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

**GSAP** - Available for more complex timeline-based or scroll-scrub animations.

The `LandingHero` uses CSS animations directly. The `StatItem` uses the custom `number-ticker` primitive which counts up on scroll into view.

---

## Adding New Content

### Add a New Portfolio Project

1. Open [data/index.tsx](data/index.tsx)
2. Add a new entry to the `projects` array following the `Project` type:
   ```ts
   {
     id: 13,
     title: "Project Name",
     venue: "Venue Name",
     eventType: "Gala",
     category: "Corporate",
     image: "/project-images/your-image.jpg",
     href: "/work/work-details?id=13"
   }
   ```
3. Place the image in `/public/project-images/`

### Add a New Team Member

1. Open [data/index.tsx](data/index.tsx)
2. Add an entry to the `team` array:
   ```ts
   {
     id: 7,
     name: "Full Name",
     role: "Job Title",
     bio: "Short bio text.",
     avatar: "/team/avatar.jpg",
     linkedin: "https://linkedin.com/in/handle",
     email: "name@mmeink.com"
   }
   ```

### Add a New Page Section

1. Create the component in `sections/` or the relevant `components/` subfolder
2. Import and render it in the appropriate `page.tsx`
3. Pull any data it needs from `data/index.tsx`

### Add a New Event or Service Subpage

1. Create a new folder under `app/events/` or `app/services/`
2. Add `page.tsx` and optionally `layout.tsx` for metadata
3. Compose the page using existing components from `components/events/` or `components/services/`
4. Add the route to `navItems` in `data/index.tsx` so it appears in navigation

---

## Environment Notes

- The project has no database. All content is hardcoded in `data/index.tsx`.
- The only server-side integration is the contact form, which relies on three external services: Upstash Redis, Google reCAPTCHA, and N8N.
- If any of those services are unavailable during development, the contact form will fail but the rest of the site works fine.
- The Vimeo video in the hero requires an internet connection to load. On slow connections the fallback is the dark gradient overlay.

---

## Common Patterns

### Page Layout Pattern

Most pages follow this structure:

```tsx
// app/[route]/page.tsx
import HeroComponent from "@/components/[domain]/Hero"
import ContentSection from "@/components/[domain]/ContentSection"
import CTASection from "@/components/CTASection"

export default function Page() {
  return (
    <main>
      <HeroComponent />
      <ContentSection />
      <CTASection />
    </main>
  )
}
```

### Route Metadata Pattern

Each route's `layout.tsx` exports a `metadata` object:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title | MME Ink Worldwide",
  description: "Page description for SEO.",
}
```

### Client vs Server Components

- Pages that use animations, state, or browser APIs are marked `"use client"` at the top.
- Pure display pages that do not need interactivity should remain server components (no directive needed).
- The Navbar and Footer are client components because they track scroll state and handle user interactions.

---

## Known Limitations and Notes

- **No CMS integration.** All content changes require editing `data/index.tsx` and redeploying.
- **Work detail routing.** The work detail page at `/work/work-details` receives the project via query string (`?id=N`). This is not a dynamic route segment, so the URL is not SEO-friendly. If SEO for project pages matters, migrate to `/work/[id]/page.tsx`.
- **Newsletter signup** in the footer does not POST to any backend. If it needs to actually subscribe users, a backend endpoint or third-party integration (Mailchimp, ConvertKit, etc.) must be wired up.
- **Demo images.** Some sections use placeholder images from Unsplash. These should be replaced with actual client/project photography before going to production.
- **N8N dependency.** If the N8N instance goes down, contact form submissions are lost. Consider adding a fallback (direct email via SMTP) if reliability is a concern.
