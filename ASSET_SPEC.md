# Asset specification

This is the brief for the design team, and it is generated from what is
actually on disk. Run `npm run assets:spec` to refresh it after adding or
replacing anything in `public/`.

## How `public/` is organised

One folder per page. Nothing is shared between two pages.

```
public/
  home/       # Home page
  about/      # About, sizzle reel and brochure
  work/       # Our Work and the project detail template
  services/   # Services overview and the thirteen service pages
  events/     # Events overview and the eleven event type pages
  contact/    # Let us connect
  shared/     # Brand furniture used in the navigation and footer
```

Inside a page folder the subfolder names match the section of the page
they feed:

| Subfolder | Section it feeds |
| --- | --- |
| `hero/` | The hero at the top of the page, image or video |
| `what-we-offer/` | The scrolling capability cards on a service page |
| `what-we-do/` | The offering tiles on an event type page |
| `case-study/` | The case study carousel |
| `gallery/` | The masonry photo gallery |
| `cta/` | The background of the closing call to action |
| `divisions/` | The talent bands on Specialty Entertainment |
| `event-management/` | The Event Management band on Logistics |
| `index/cards/` | The square cards on an overview page |
| `work-marquee/` | The scrolling band of client projects |
| `featured-work/`, `featured-projects/` | Project showcases |
| `team/`, `locations/`, `process/`, `intro/` | About page sections |
| `pages/` | Brochure page spreads |

## Replacing a placeholder

Every placeholder states its own requirement. The artwork carries the
aspect ratio, the pixel size, the page it belongs to and the slot it fills,
so the file in `public/` is the spec for the file that replaces it.

Drop the real asset in at the same path and the same filename and nothing
in the code changes. Keep the extension, because the path is referenced
literally:

```bash
# wrong: the code is looking for gallery-03.png
cp ~/shoot/printer-running.jpg public/services/printing/gallery/

# right
cp ~/shoot/printer-running.jpg public/services/printing/gallery/gallery-03.png
```

A real file larger than 400kB is left alone by `npm run assets:placeholders`,
so regenerating placeholders never overwrites artwork that has been delivered.

### Video slots

A hero that still needs a film shows a still labelled VIDEO PLACEHOLDER.
Two components read these:

- `WorkHero` and `LandingHero` take `posterSrc` while the film is missing
  and `videoSrc` once it exists. Pass both and the poster becomes the video's
  poster frame.
- `VideoFrame` on the sizzle reel page takes a Vimeo or YouTube link, or a
  path to an MP4, in `sizzleReel.videoSrc` in `data/index.tsx`.

## Where the real photography lives

585 files in `public/` are real assets (638.2 MB).
433 are placeholders (10.6 MB) waiting on the design team.

Real photography and video that no page displays is preserved outside
`public/` in `asset-archive/`, at the path it used to occupy. See the README
in that folder.

## Every folder, and what it still needs

### public root

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `//` | 1 | n/a | real, 1 file(s) |

### public/about

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/about/brochure/` | 1 | n/a | real, 1 file(s) |
| `/about/brochure/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/about/brochure/pages/` | 16 | 1700 x 2200 (17:22) | **16 placeholder(s) needed** |
| `/about/hero/` | 1 | n/a | real, 1 file(s) |
| `/about/intro/` | 1 | n/a | real, 1 file(s) |
| `/about/locations/` | 3 | 1200 x 800 (3:2) | 1 real, **2 needed** |
| `/about/process/` | 4 | n/a | real, 4 file(s) |
| `/about/sizzle-reel/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/about/sizzle-reel/reel/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/about/team/` | 6 | 1920 x 1080 (16:9) | 5 real, **1 needed** |

### public/contact

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/contact/testimonial/` | 1 | 1200 x 900 (4:3) | **1 placeholder(s) needed** |

### public/events

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/events/award-dinners/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/events/award-dinners/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/events/award-dinners/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/events/award-dinners/what-we-do/` | 4 | 1200 x 900 (4:3) | **4 placeholder(s) needed** |
| `/events/brand-activations/case-study/` | 9 | n/a | real, 9 file(s) |
| `/events/brand-activations/gallery/` | 50 | n/a | real, 50 file(s) |
| `/events/brand-activations/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/brand-activations/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/conferences-meetings/case-study/` | 5 | n/a | real, 5 file(s) |
| `/events/conferences-meetings/gallery/` | 30 | n/a | real, 30 file(s) |
| `/events/conferences-meetings/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/conferences-meetings/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/corporate-events/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/events/corporate-events/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/events/corporate-events/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/events/corporate-events/what-we-do/` | 4 | 1200 x 900 (4:3) | **4 placeholder(s) needed** |
| `/events/exhibits-trade-shows/case-study/` | 9 | n/a | real, 9 file(s) |
| `/events/exhibits-trade-shows/gallery/` | 33 | n/a | real, 33 file(s) |
| `/events/exhibits-trade-shows/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/exhibits-trade-shows/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/galas/case-study/` | 11 | n/a | real, 11 file(s) |
| `/events/galas/gallery/` | 30 | n/a | real, 30 file(s) |
| `/events/galas/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/galas/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/index/cards/` | 10 | 1200 x 1200 (1:1) | 6 real, **4 needed** |
| `/events/intro/` | 3 | n/a | real, 3 file(s) |
| `/events/product-launches/case-study/` | 6 | n/a | real, 6 file(s) |
| `/events/product-launches/gallery/` | 27 | n/a | real, 27 file(s) |
| `/events/product-launches/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/product-launches/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/seasonal-events/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/events/seasonal-events/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/events/seasonal-events/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/events/seasonal-events/what-we-do/` | 4 | 1200 x 900 (4:3) | **4 placeholder(s) needed** |
| `/events/themed-events/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/events/themed-events/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/events/themed-events/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/events/themed-events/what-we-do/` | 4 | 1200 x 900 (4:3) | **4 placeholder(s) needed** |
| `/events/virtual-hybrid-events/case-study/` | 9 | n/a | real, 9 file(s) |
| `/events/virtual-hybrid-events/gallery/` | 34 | n/a | real, 34 file(s) |
| `/events/virtual-hybrid-events/hero/` | 1 | n/a | real, 1 file(s) |
| `/events/virtual-hybrid-events/what-we-do/` | 4 | n/a | real, 4 file(s) |
| `/events/work-marquee/` | 12 | n/a | real, 12 file(s) |

### public/home

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/home/about/` | 1 | n/a | real, 1 file(s) |
| `/home/client-logos/` | 32 | n/a | real, 32 file(s) |
| `/home/featured-work/` | 4 | 900 x 1200 (3:4) | **4 placeholder(s) needed** |
| `/home/hero/` | 1 | n/a | real, 1 file(s) |
| `/home/services-grid/` | 6 | n/a | real, 6 file(s) |
| `/home/work-marquee/` | 12 | n/a | real, 12 file(s) |

### public/services

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/services/audio-visual/case-study/` | 5 | n/a | real, 5 file(s) |
| `/services/audio-visual/gallery/` | 20 | n/a | real, 20 file(s) |
| `/services/audio-visual/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/audio-visual/what-we-offer/` | 12 | 1200 x 800 (3:2) | 6 real, **6 needed** |
| `/services/custom-fabrication/case-study/` | 6 | n/a | real, 6 file(s) |
| `/services/custom-fabrication/gallery/` | 30 | n/a | real, 30 file(s) |
| `/services/custom-fabrication/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/custom-fabrication/what-we-offer/` | 12 | n/a | real, 12 file(s) |
| `/services/design-decor/case-study/` | 6 | n/a | real, 6 file(s) |
| `/services/design-decor/gallery/` | 34 | n/a | real, 34 file(s) |
| `/services/design-decor/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/design-decor/what-we-offer/` | 12 | 1200 x 800 (3:2) | 6 real, **6 needed** |
| `/services/entertainment/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/entertainment/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/entertainment/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/entertainment/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/featured-projects/` | 12 | n/a | real, 12 file(s) |
| `/services/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/index/cards/` | 13 | 1200 x 1200 (1:1) | 5 real, **8 needed** |
| `/services/lighting/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/lighting/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/lighting/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/lighting/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/logistics/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/logistics/event-management/` | 2 | 1000 x 1000 (1:1)<br>1200 x 900 (4:3) | **2 placeholder(s) needed** |
| `/services/logistics/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/logistics/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/logistics/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/musical-entertainment/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/musical-entertainment/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/musical-entertainment/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/musical-entertainment/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/printing/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/printing/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/printing/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/printing/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/props/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/props/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/props/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/props/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/rentals/case-study/` | 7 | n/a | real, 7 file(s) |
| `/services/rentals/gallery/` | 34 | n/a | real, 34 file(s) |
| `/services/rentals/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/rentals/what-we-offer/` | 12 | 1200 x 800 (3:2) | 6 real, **6 needed** |
| `/services/specialty-entertainment/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/specialty-entertainment/difference/` | 1 | 1200 x 900 (4:3) | **1 placeholder(s) needed** |
| `/services/specialty-entertainment/divisions/` | 8 | 1200 x 900 (4:3) | **8 placeholder(s) needed** |
| `/services/specialty-entertainment/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/specialty-entertainment/hero/` | 1 | n/a | real, 1 file(s) |
| `/services/specialty-entertainment/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/staging/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/staging/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/staging/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/staging/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |
| `/services/themes/case-study/` | 5 | 1600 x 900 (16:9) | **5 placeholder(s) needed** |
| `/services/themes/gallery/` | 12 | 1200 x 900 (4:3) | **12 placeholder(s) needed** |
| `/services/themes/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/services/themes/what-we-offer/` | 12 | 1200 x 800 (3:2) | **12 placeholder(s) needed** |

### public/shared

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/shared/backgrounds/` | 2 | n/a | real, 2 file(s) |
| `/shared/brand/` | 1 | n/a | real, 1 file(s) |
| `/shared/icons/` | 2 | n/a | real, 2 file(s) |

### public/work

| Folder | Files | Delivery size | Status |
| --- | --- | --- | --- |
| `/work/hero/` | 1 | n/a | real, 1 file(s) |
| `/work/project-details/hero/` | 1 | 1920 x 1080 (16:9) | **1 placeholder(s) needed** |
| `/work/project-details/related/` | 3 | 1200 x 900 (4:3) | **3 placeholder(s) needed** |
| `/work/project-details/slides/` | 5 | 1200 x 1500 (4:5) | **5 placeholder(s) needed** |
| `/work/projects/5050-women-on-boards/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/buckley-school/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/builders-risk-and-constrution/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/carnegie-melon/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/dta/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/f-suite/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/friedman-and-kaplan/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/ikebana/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/international-college-reunion/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/maxim-group/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/morgan-stanley/` | 1 | n/a | real, 1 file(s) |
| `/work/projects/nest-m/` | 1 | n/a | real, 1 file(s) |

## Placeholder artwork

Generated by `scripts/lib/placeholder.mjs` from `scripts/placeholder-manifest.json`.
Flat vector artwork in the brand palette, palettised to sixteen colours so a
1920px frame costs about 30kB rather than 200kB.

```bash
npm run assets:placeholders            # regenerate every placeholder
npm run assets:placeholders -- --check # report which slots are empty
npm run assets:placeholders -- printing
npm run assets:spec                    # regenerate this document
```

