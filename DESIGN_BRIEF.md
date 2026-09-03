# Photography and Video Request

**Prepared for:** the design and photography team
**Site:** https://mmeink-worldwide-production.up.railway.app

The website is built and live. Every page works, every route is in place,
and all of the writing is done. What is missing is photography and film.

Rather than leave gaps or borrow pictures from other pages, every slot
that still needs an asset shows a placeholder card with the aspect ratio
and the pixel size printed on it. Open any page listed below and you can
see exactly what is wanted and where it goes.

## The one rule that matters

**Keep the file name and the file extension exactly as listed.** Every path
below is already wired into the site. Drop your file in at the same name
and it appears on the page with no code change at all.

```
Slot:      public/services/printing/gallery/gallery-03.png
Deliver:   gallery-03.png          <- correct
Not:       printer_running.jpg     <- will not appear
```

If a name genuinely has to change, that is fine, it just needs a developer
to update one line, so flag it rather than renaming silently.

## Delivery notes

| | |
| --- | --- |
| Sizes | Use the pixel size given for each slot. It is the size the page actually displays at, so anything larger is wasted weight and anything smaller goes soft. |
| Format | Stills as JPG or PNG, matching the extension in the list. Animated loops as GIF. Film as MP4, H.264. |
| Colour | sRGB. |
| Weight | Aim under 400kB per still. Please do not send camera originals straight from the card. |
| Cropping | Crop to the exact ratio given. The site crops to fill, so anything outside the ratio is cut off and you will not choose where. |
| Faces and logos | Only send frames you have permission to publish, including client logos and recognisable guests. |
| Naming | Lower case, exactly as listed. No spaces, no brackets, no capitals. |

## What is outstanding, in one number

| | Count |
| --- | --- |
| Still photographs required | 408 |
| Animated loops required | 23 |
| Films required | 2 |
| Pages affected | 24 |
| Photographs already supplied and in use | 585 |

## Priority one, film

There are 2 films outstanding, and they carry real weight because
each one is the first thing a visitor sees on its page.

| Deliver as | Size | Length | Where it plays |
| --- | --- | --- | --- |
| `public/work/project-details/hero/hero-video.mp4` | 1920 x 1080, 16:9 | 20 to 40 seconds, seamless loop | Full screen behind the headline on [Project Detail Template](https://mmeink-worldwide-production.up.railway.app/work/work-details) |
| `public/about/sizzle-reel/reel/sizzle-reel.mp4` | 1920 x 1080, 16:9 | 2 to 3 minutes | The whole point of the [Sizzle Reel page](https://mmeink-worldwide-production.up.railway.app/about/sizzle-reel). A Vimeo or YouTube link works here too |

Notes on all of them:

- Silent. They play muted and looping with no controls.
- No burnt in text, titles or lower thirds. Headlines are typeset over the top by the site.
- Keep the centre of frame reasonably calm, because the headline sits there.
- Please also send one still frame from each film at 1920 x 1080, used as the poster while the film loads.
- Under 30MB each if you can. A hero film is the heaviest thing on a page.

**A developer needs one line for each film**, to point the page at the
video instead of the still. Send the file and mention it, it is a two
minute job:

```tsx
// app/work/work-details/page.tsx
<WorkHero posterSrc="/work/project-details/hero/hero-video-poster.png"
          videoSrc="/work/project-details/hero/hero-video.mp4" />
```

## Priority two, animated loops

23 short animated loops sit inside the What We Offer strips on four
service pages. They are the same idea as an animated GIF on a product card:
two to four seconds, seamless, silent, no text.

| Page | Files | Size |
| --- | --- | --- |
| [Audio Visual](https://mmeink-worldwide-production.up.railway.app/services/audio-visual) | `offer-01.gif`, `offer-04.gif`, `offer-06.gif`, `offer-07.gif`, `offer-09.gif`, `offer-11.gif` in `public/services/audio-visual/what-we-offer/` | 1200 x 800, 3:2 |
| [Rentals](https://mmeink-worldwide-production.up.railway.app/services/rentals) | `offer-01.gif`, `offer-04.gif`, `offer-06.gif`, `offer-07.gif`, `offer-09.gif`, `offer-11.gif` in `public/services/rentals/what-we-offer/` | 1200 x 800, 3:2 |
| [Design and Decor](https://mmeink-worldwide-production.up.railway.app/services/design-decor) | `offer-01.gif`, `offer-04.gif`, `offer-06.gif`, `offer-07.gif`, `offer-09.gif`, `offer-11.gif` in `public/services/design-decor/what-we-offer/` | 1200 x 800, 3:2 |
| [Logistics](https://mmeink-worldwide-production.up.railway.app/services/logistics) | `offer-04.gif`, `offer-06.gif`, `offer-07.gif`, `offer-09.gif`, `offer-11.gif` in `public/services/logistics/what-we-offer/` | 1200 x 800, 3:2 |

The Custom Fabrication page already has six of these and they are the
reference for tone and length:
[Custom Fabrication](https://mmeink-worldwide-production.up.railway.app/services/custom-fabrication).

## Priority three, the pages with no photography of their own

These pages are written, built and live, and every photograph on them is
still a placeholder. They are the most visible gap on the site, so they are
worth shooting first.

| Page | Photographs needed |
| --- | --- |
| [Sizzle Reel](https://mmeink-worldwide-production.up.railway.app/about/sizzle-reel) | 1 |
| [Digital Brochure](https://mmeink-worldwide-production.up.railway.app/about/brochure) | 17 |
| [Project Detail Template](https://mmeink-worldwide-production.up.railway.app/work/work-details) | 8 |
| [Let Us Connect](https://mmeink-worldwide-production.up.railway.app/contact) | 1 |
| [Printing](https://mmeink-worldwide-production.up.railway.app/services/printing) | 30 |
| [Lighting](https://mmeink-worldwide-production.up.railway.app/services/lighting) | 30 |
| [Staging](https://mmeink-worldwide-production.up.railway.app/services/staging) | 30 |
| [Themes](https://mmeink-worldwide-production.up.railway.app/services/themes) | 30 |
| [Props](https://mmeink-worldwide-production.up.railway.app/services/props) | 30 |
| [Musical Entertainment](https://mmeink-worldwide-production.up.railway.app/services/musical-entertainment) | 30 |
| [Entertainment](https://mmeink-worldwide-production.up.railway.app/services/entertainment) | 29 |
| [Specialty Entertainment](https://mmeink-worldwide-production.up.railway.app/services/specialty-entertainment) | 38 |
| [Logistics](https://mmeink-worldwide-production.up.railway.app/services/logistics) | 27 |
| [Award Dinners](https://mmeink-worldwide-production.up.railway.app/events/award-dinners) | 22 |
| [Corporate Events](https://mmeink-worldwide-production.up.railway.app/events/corporate-events) | 22 |
| [Themed Events](https://mmeink-worldwide-production.up.railway.app/events/themed-events) | 22 |
| [Seasonal Events](https://mmeink-worldwide-production.up.railway.app/events/seasonal-events) | 22 |

## What is already done

These pages already carry real MME photography. Where a count appears in
the second column, that many pictures are in place and stay as they are.

| Page | Photographs in use | Still needed |
| --- | --- | --- |
| [Home](https://mmeink-worldwide-production.up.railway.app/) | 52 | 4 |
| [About Us](https://mmeink-worldwide-production.up.railway.app/about) | 12 | 3 |
| [Our Work](https://mmeink-worldwide-production.up.railway.app/work) | 12 | nothing |
| [Services Overview](https://mmeink-worldwide-production.up.railway.app/services) | 17 | 8 |
| [Custom Fabrication](https://mmeink-worldwide-production.up.railway.app/services/custom-fabrication) | 49 | nothing |
| [Audio Visual](https://mmeink-worldwide-production.up.railway.app/services/audio-visual) | 32 | 6 |
| [Design and Decor](https://mmeink-worldwide-production.up.railway.app/services/design-decor) | 47 | 6 |
| [Rentals](https://mmeink-worldwide-production.up.railway.app/services/rentals) | 48 | 6 |
| [Events Overview](https://mmeink-worldwide-production.up.railway.app/events) | 21 | 4 |
| [Brand Activations](https://mmeink-worldwide-production.up.railway.app/events/brand-activations) | 64 | nothing |
| [Product Launches](https://mmeink-worldwide-production.up.railway.app/events/product-launches) | 38 | nothing |
| [Exhibitions & Trade Shows](https://mmeink-worldwide-production.up.railway.app/events/exhibits-trade-shows) | 47 | nothing |
| [Conferences and Meetings](https://mmeink-worldwide-production.up.railway.app/events/conferences-meetings) | 40 | nothing |
| [Galas](https://mmeink-worldwide-production.up.railway.app/events/galas) | 46 | nothing |
| [Virtual and Hybrid Events](https://mmeink-worldwide-production.up.railway.app/events/virtual-hybrid-events) | 48 | nothing |

Also complete and needing nothing:

- The logo and the two social icons.
- All 32 client logos on the home page.
- Five of the six team portraits on the About page.
- The four process illustrations on the About page.
- The cover photograph for all twelve client projects on the Our Work page.
- The scrolling Our Event Productions band on the home page, the same band
  on the events page, and the rotating showcase on the services page. All
  three now use real client photography, and each takes a different frame
  from the same shoot so no two pages repeat a picture.
- The hero films on the Services, Events, Our Work and Entertainment pages.
- The background film on the home page hero, which streams from Vimeo.
- The hero film on the Specialty Entertainment page, supplied and in place.

## Everything required, page by page

Each table is one page. The first column is the file to deliver, relative
to `public/`. The last column is the frame we are asking for, taken from
the words already on that page.

### Home

Live page: https://mmeink-worldwide-production.up.railway.app/

Already supplied: 52 photographs. Still needed: 4.

**`public/home/featured-work/`**  Tall card in the featured work stack.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `work-01.png` | 900 x 1200 | 3:4 | Newspaper & Magazines |
| `work-02.png` | 900 x 1200 | 3:4 | Holiday Celebration |
| `work-03.png` | 900 x 1200 | 3:4 | Winter Wonderland |
| `work-04.png` | 900 x 1200 | 3:4 | Michelob Ultra |

### About Us

Live page: https://mmeink-worldwide-production.up.railway.app/about

Already supplied: 12 photographs. Still needed: 3.

**`public/about/locations/`**  Photograph of the actual premises, exterior or reception.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `new-york.png` | 1200 x 800 | 3:2 | New York |
| `miami.png` | 1200 x 800 | 3:2 | Miami |

**`public/about/team/`**  Wide background behind a section of text. Needs to sit quietly under white type.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `team-background.png` | 1920 x 1080 | 16:9 | Team section background |

### Sizzle Reel

Live page: https://mmeink-worldwide-production.up.railway.app/about/sizzle-reel

Already supplied: 0 photographs. Still needed: 2.

**`public/about/sizzle-reel/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Full screen hero |

**`public/about/sizzle-reel/reel/`**  Background film for the hero at the top of the page. Silent, no captions, no burnt in text.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `sizzle-reel-poster.png` | 1920 x 1080 | 16:9 | Sizzle reel |

### Digital Brochure

Live page: https://mmeink-worldwide-production.up.railway.app/about/brochure

Already supplied: 1 photograph. Still needed: 17.

**`public/about/brochure/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

**`public/about/brochure/pages/`**  Finished brochure page as flat artwork, one file per page, in reading order.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `page-01.png` | 1700 x 2200 | 17:22 | Front cover |
| `page-02.png` | 1700 x 2200 | 17:22 | Brochure page number 02 |
| `page-03.png` | 1700 x 2200 | 17:22 | Brochure page number 03 |
| `page-04.png` | 1700 x 2200 | 17:22 | Brochure page number 04 |
| `page-05.png` | 1700 x 2200 | 17:22 | Brochure page number 05 |
| `page-06.png` | 1700 x 2200 | 17:22 | Brochure page number 06 |
| `page-07.png` | 1700 x 2200 | 17:22 | Brochure page number 07 |
| `page-08.png` | 1700 x 2200 | 17:22 | Brochure page number 08 |
| `page-09.png` | 1700 x 2200 | 17:22 | Brochure page number 09 |
| `page-10.png` | 1700 x 2200 | 17:22 | Brochure page number 10 |
| `page-11.png` | 1700 x 2200 | 17:22 | Brochure page number 11 |
| `page-12.png` | 1700 x 2200 | 17:22 | Brochure page number 12 |
| `page-13.png` | 1700 x 2200 | 17:22 | Brochure page number 13 |
| `page-14.png` | 1700 x 2200 | 17:22 | Brochure page number 14 |
| `page-15.png` | 1700 x 2200 | 17:22 | Brochure page number 15 |
| `page-16.png` | 1700 x 2200 | 17:22 | Back cover |

### Project Detail Template

Live page: https://mmeink-worldwide-production.up.railway.app/work/work-details

Already supplied: 0 photographs. Still needed: 9.

**`public/work/project-details/slides/`**  Tall slide in the rotating project showcase.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `slide-01.png` | 1200 x 1500 | 4:5 | Conference Setup |
| `slide-02.png` | 1200 x 1500 | 4:5 | Event Production |
| `slide-03.png` | 1200 x 1500 | 4:5 | Stage Design |
| `slide-04.png` | 1200 x 1500 | 4:5 | Event Decor |
| `slide-05.png` | 1200 x 1500 | 4:5 | Gala Setup |

**`public/work/project-details/related/`**  Card in the related projects row.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `project-01.png` | 1200 x 900 | 4:3 | Spotify Brand Experience |
| `project-02.png` | 1200 x 900 | 4:3 | Tech Innovation Summit |
| `project-03.png` | 1200 x 900 | 4:3 | Fashion Week Gala |

**`public/work/project-details/hero/`**  Background film for the hero at the top of the page. Silent, no captions, no burnt in text.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero-video-poster.png` | 1920 x 1080 | 16:9 | Page hero video |

### Let Us Connect

Live page: https://mmeink-worldwide-production.up.railway.app/contact

Already supplied: 0 photographs. Still needed: 1.

**`public/contact/testimonial/`**  Photograph beside a client testimonial.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `testimonial.png` | 1200 x 900 | 4:3 | Testimonial |

### Services Overview

Live page: https://mmeink-worldwide-production.up.railway.app/services

Already supplied: 18 photographs. Still needed: 8.

**`public/services/index/cards/`**  Square card on the overview grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `card-02.png` | 1200 x 1200 | 1:1 | Printing |
| `card-04.png` | 1200 x 1200 | 1:1 | Lighting |
| `card-05.png` | 1200 x 1200 | 1:1 | Staging |
| `card-07.png` | 1200 x 1200 | 1:1 | Themes |
| `card-08.png` | 1200 x 1200 | 1:1 | Props |
| `card-10.png` | 1200 x 1200 | 1:1 | Musical Entertainment |
| `card-11.png` | 1200 x 1200 | 1:1 | Entertainment |
| `card-12.png` | 1200 x 1200 | 1:1 | Specialty Entertainment |

### Printing

Live page: https://mmeink-worldwide-production.up.railway.app/services/printing

Already supplied: 0 photographs. Still needed: 30.

**`public/services/printing/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Large Format Graphics |
| `offer-02.png` | 1200 x 800 | 3:2 | Vinyl & Wall Wraps |
| `offer-03.png` | 1200 x 800 | 3:2 | Step & Repeat Backdrops |
| `offer-04.png` | 1200 x 800 | 3:2 | Banners & Signage |
| `offer-05.png` | 1200 x 800 | 3:2 | Floor & Window Graphics |
| `offer-06.png` | 1200 x 800 | 3:2 | Fabric & Tension Prints |
| `offer-07.png` | 1200 x 800 | 3:2 | Foam Board & Rigid Signage |
| `offer-08.png` | 1200 x 800 | 3:2 | Directional & Wayfinding |
| `offer-09.png` | 1200 x 800 | 3:2 | Branded Environments |
| `offer-10.png` | 1200 x 800 | 3:2 | Trade Show Graphics |
| `offer-11.png` | 1200 x 800 | 3:2 | Menu & Table Print |
| `offer-12.png` | 1200 x 800 | 3:2 | On Demand Reprints |

**`public/services/printing/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/printing/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Large format printer running a full colour vinyl banner in the MME print shop |
| `gallery-02.png` | 1200 x 900 | 4:3 | Wall wrap being applied to a venue column during an event install |
| `gallery-03.png` | 1200 x 900 | 4:3 | Step and repeat backdrop set up for arrivals at a brand launch |
| `gallery-04.png` | 1200 x 900 | 4:3 | Fabric tension banner hung above a conference registration desk |
| `gallery-05.png` | 1200 x 900 | 4:3 | Rigid foam board signage cut and finished for a corporate event |
| `gallery-06.png` | 1200 x 900 | 4:3 | Floor graphic applied across a ballroom entrance walkway |
| `gallery-07.png` | 1200 x 900 | 4:3 | Window graphics installed along a retail activation frontage |
| `gallery-08.png` | 1200 x 900 | 4:3 | Directional and wayfinding signage placed through a conference venue |
| `gallery-09.png` | 1200 x 900 | 4:3 | Large format brand graphics wrapping an exhibition backwall |
| `gallery-10.png` | 1200 x 900 | 4:3 | Menu cards and printed table stationery produced for a gala dinner |
| `gallery-11.png` | 1200 x 900 | 4:3 | Print operator checking colour against a brand guideline proof |
| `gallery-12.png` | 1200 x 900 | 4:3 | Finished branded environment with printed walls, floor, and signage |

**`public/services/printing/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Audio Visual

Live page: https://mmeink-worldwide-production.up.railway.app/services/audio-visual

Already supplied: 32 photographs. Still needed: 6.

**`public/services/audio-visual/what-we-offer/`**  Short animated loop for a capability card. Two to four seconds, seamless, no audio.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.gif` | 1200 x 800 | 3:2 | Professional Sound Systems |
| `offer-04.gif` | 1200 x 800 | 3:2 | Projection Mapping |
| `offer-06.gif` | 1200 x 800 | 3:2 | Concert Sound |
| `offer-07.gif` | 1200 x 800 | 3:2 | Live Streaming |
| `offer-09.gif` | 1200 x 800 | 3:2 | DJ Equipment |
| `offer-11.gif` | 1200 x 800 | 3:2 | Moving Head Lights |

### Lighting

Live page: https://mmeink-worldwide-production.up.railway.app/services/lighting

Already supplied: 0 photographs. Still needed: 30.

**`public/services/lighting/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Stage & Key Lighting |
| `offer-02.png` | 1200 x 800 | 3:2 | Intelligent & Moving Head |
| `offer-03.png` | 1200 x 800 | 3:2 | Architectural Uplighting |
| `offer-04.png` | 1200 x 800 | 3:2 | Custom Gobo Projection |
| `offer-05.png` | 1200 x 800 | 3:2 | Pin Spotting |
| `offer-06.png` | 1200 x 800 | 3:2 | Ambient & Mood Washes |
| `offer-07.png` | 1200 x 800 | 3:2 | Dance Floor Lighting |
| `offer-08.png` | 1200 x 800 | 3:2 | LED Colour Systems |
| `offer-09.png` | 1200 x 800 | 3:2 | Truss & Rigging |
| `offer-10.png` | 1200 x 800 | 3:2 | Lighting Console Programming |
| `offer-11.png` | 1200 x 800 | 3:2 | Power Distribution |
| `offer-12.png` | 1200 x 800 | 3:2 | On Site Lighting Crew |

**`public/services/lighting/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/lighting/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Moving head fixtures rigged over a ballroom before a gala |
| `gallery-02.png` | 1200 x 900 | 4:3 | Uplighting washing the walls of a historic event venue in brand colour |
| `gallery-03.png` | 1200 x 900 | 4:3 | Gobo projection placing a client logo across a dance floor |
| `gallery-04.png` | 1200 x 900 | 4:3 | Lighting console and operator running cues during a live show |
| `gallery-05.png` | 1200 x 900 | 4:3 | Stage wash and key lighting on a keynote speaker |
| `gallery-06.png` | 1200 x 900 | 4:3 | Pin spotting picking out centrepieces along a dinner table |
| `gallery-07.png` | 1200 x 900 | 4:3 | LED battens colouring a scenic backdrop behind a stage |
| `gallery-08.png` | 1200 x 900 | 4:3 | Truss and rigging plot being loaded in ahead of a conference |
| `gallery-09.png` | 1200 x 900 | 4:3 | Atmospheric haze catching beam lighting across a crowd |
| `gallery-10.png` | 1200 x 900 | 4:3 | Architectural lighting picking out the features of a venue frontage |
| `gallery-11.png` | 1200 x 900 | 4:3 | Colour changing lighting shifting a room from dinner to after party |
| `gallery-12.png` | 1200 x 900 | 4:3 | Finished lighting design seen from the back of a full ballroom |

**`public/services/lighting/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Staging

Live page: https://mmeink-worldwide-production.up.railway.app/services/staging

Already supplied: 0 photographs. Still needed: 30.

**`public/services/staging/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Custom Stage Builds |
| `offer-02.png` | 1200 x 800 | 3:2 | Modular Decking & Risers |
| `offer-03.png` | 1200 x 800 | 3:2 | Runways & Catwalks |
| `offer-04.png` | 1200 x 800 | 3:2 | ADA Ramps & Access |
| `offer-05.png` | 1200 x 800 | 3:2 | Pipe & Drape |
| `offer-06.png` | 1200 x 800 | 3:2 | Scenic Backdrops |
| `offer-07.png` | 1200 x 800 | 3:2 | Truss Structures |
| `offer-08.png` | 1200 x 800 | 3:2 | Stage Skirting & Finishes |
| `offer-09.png` | 1200 x 800 | 3:2 | Podiums & Lecterns |
| `offer-10.png` | 1200 x 800 | 3:2 | Backline Platforms |
| `offer-11.png` | 1200 x 800 | 3:2 | Load Bearing Engineering |
| `offer-12.png` | 1200 x 800 | 3:2 | On Site Build Crew |

**`public/services/staging/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/staging/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Custom stage deck being built and levelled in an event venue |
| `gallery-02.png` | 1200 x 900 | 4:3 | Risers and platforms assembled for a panel discussion set |
| `gallery-03.png` | 1200 x 900 | 4:3 | Runway built and carpeted for a fashion presentation |
| `gallery-04.png` | 1200 x 900 | 4:3 | Accessible ramp installed alongside a main stage |
| `gallery-05.png` | 1200 x 900 | 4:3 | Pipe and drape masking the back of house behind a stage |
| `gallery-06.png` | 1200 x 900 | 4:3 | Scenic backdrop panels lifted into position on a stage build |
| `gallery-07.png` | 1200 x 900 | 4:3 | LED wall integrated into a custom stage surround |
| `gallery-08.png` | 1200 x 900 | 4:3 | Stage steps and handrails finished ahead of rehearsal |
| `gallery-09.png` | 1200 x 900 | 4:3 | Crew working through a staging plot during load in |
| `gallery-10.png` | 1200 x 900 | 4:3 | Presentation platform set for an awards ceremony |
| `gallery-11.png` | 1200 x 900 | 4:3 | Stage engineering drawings checked against the finished build |
| `gallery-12.png` | 1200 x 900 | 4:3 | Finished stage seen from the audience before doors open |

**`public/services/staging/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Design and Decor

Live page: https://mmeink-worldwide-production.up.railway.app/services/design-decor

Already supplied: 47 photographs. Still needed: 6.

**`public/services/design-decor/what-we-offer/`**  Short animated loop for a capability card. Two to four seconds, seamless, no audio.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.gif` | 1200 x 800 | 3:2 | Professional Sound Systems |
| `offer-04.gif` | 1200 x 800 | 3:2 | Projection Mapping |
| `offer-06.gif` | 1200 x 800 | 3:2 | Concert Sound |
| `offer-07.gif` | 1200 x 800 | 3:2 | Live Streaming |
| `offer-09.gif` | 1200 x 800 | 3:2 | DJ Equipment |
| `offer-11.gif` | 1200 x 800 | 3:2 | Moving Head Lights |

### Themes

Live page: https://mmeink-worldwide-production.up.railway.app/services/themes

Already supplied: 0 photographs. Still needed: 30.

**`public/services/themes/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Concept Development |
| `offer-02.png` | 1200 x 800 | 3:2 | Mood Boards & Renderings |
| `offer-03.png` | 1200 x 800 | 3:2 | Themed Environments |
| `offer-04.png` | 1200 x 800 | 3:2 | Immersive Installations |
| `offer-05.png` | 1200 x 800 | 3:2 | Custom Scenic Design |
| `offer-06.png` | 1200 x 800 | 3:2 | Colour & Material Palettes |
| `offer-07.png` | 1200 x 800 | 3:2 | Themed Entrances |
| `offer-08.png` | 1200 x 800 | 3:2 | Photo Moments |
| `offer-09.png` | 1200 x 800 | 3:2 | Seasonal Concepts |
| `offer-10.png` | 1200 x 800 | 3:2 | Cultural & Heritage Themes |
| `offer-11.png` | 1200 x 800 | 3:2 | Brand Led Concepts |
| `offer-12.png` | 1200 x 800 | 3:2 | Full Theme Execution |

**`public/services/themes/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/themes/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Themed entrance feature welcoming guests into an event concept |
| `gallery-02.png` | 1200 x 900 | 4:3 | Mood board and renderings set beside the finished themed room |
| `gallery-03.png` | 1200 x 900 | 4:3 | Fully themed dining room carrying one concept through every detail |
| `gallery-04.png` | 1200 x 900 | 4:3 | Custom scenic elements built for a themed corporate celebration |
| `gallery-05.png` | 1200 x 900 | 4:3 | Themed lounge environment with bespoke furniture and decor |
| `gallery-06.png` | 1200 x 900 | 4:3 | Ceiling installation completing a themed ballroom transformation |
| `gallery-07.png` | 1200 x 900 | 4:3 | Themed bar build with custom graphics and lighting |
| `gallery-08.png` | 1200 x 900 | 4:3 | Costumed hosts matched to the event theme greeting guests |
| `gallery-09.png` | 1200 x 900 | 4:3 | Detail of themed table styling, linen, and centrepiece |
| `gallery-10.png` | 1200 x 900 | 4:3 | Themed photo moment built for guest interaction |
| `gallery-11.png` | 1200 x 900 | 4:3 | Concept sketch shown alongside the fabricated themed element |
| `gallery-12.png` | 1200 x 900 | 4:3 | Wide view of a completely themed event space at doors open |

**`public/services/themes/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Props

Live page: https://mmeink-worldwide-production.up.railway.app/services/props

Already supplied: 0 photographs. Still needed: 30.

**`public/services/props/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Custom Prop Fabrication |
| `offer-02.png` | 1200 x 800 | 3:2 | Oversized Statement Pieces |
| `offer-03.png` | 1200 x 800 | 3:2 | Themed Prop Packages |
| `offer-04.png` | 1200 x 800 | 3:2 | Photo Moment Props |
| `offer-05.png` | 1200 x 800 | 3:2 | Branded Prop Builds |
| `offer-06.png` | 1200 x 800 | 3:2 | Sculptural Elements |
| `offer-07.png` | 1200 x 800 | 3:2 | Period & Era Props |
| `offer-08.png` | 1200 x 800 | 3:2 | Seasonal Prop Inventory |
| `offer-09.png` | 1200 x 800 | 3:2 | Prop Refinishing |
| `offer-10.png` | 1200 x 800 | 3:2 | Prop Sourcing |
| `offer-11.png` | 1200 x 800 | 3:2 | Storage & Warehousing |
| `offer-12.png` | 1200 x 800 | 3:2 | Delivery & Placement |

**`public/services/props/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/props/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Oversized statement prop built in the MME fabrication shop |
| `gallery-02.png` | 1200 x 900 | 4:3 | Custom prop finished and photographed on white before delivery |
| `gallery-03.png` | 1200 x 900 | 4:3 | Themed props placed through an event space |
| `gallery-04.png` | 1200 x 900 | 4:3 | Prop warehouse inventory ready for selection |
| `gallery-05.png` | 1200 x 900 | 4:3 | Interactive prop installation built for guest participation |
| `gallery-06.png` | 1200 x 900 | 4:3 | Sculptural prop lit as a centrepiece in a ballroom |
| `gallery-07.png` | 1200 x 900 | 4:3 | Prop detail showing paint finish and surface treatment |
| `gallery-08.png` | 1200 x 900 | 4:3 | Props being crated for transport to a venue |
| `gallery-09.png` | 1200 x 900 | 4:3 | Custom built photo moment prop carrying brand graphics |
| `gallery-10.png` | 1200 x 900 | 4:3 | Seasonal props styled into an event entrance |
| `gallery-11.png` | 1200 x 900 | 4:3 | Prop being assembled on site during load in |
| `gallery-12.png` | 1200 x 900 | 4:3 | Finished prop installation in place at a live event |

**`public/services/props/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Rentals

Live page: https://mmeink-worldwide-production.up.railway.app/services/rentals

Already supplied: 48 photographs. Still needed: 6.

**`public/services/rentals/what-we-offer/`**  Short animated loop for a capability card. Two to four seconds, seamless, no audio.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.gif` | 1200 x 800 | 3:2 | Professional Sound Systems |
| `offer-04.gif` | 1200 x 800 | 3:2 | Projection Mapping |
| `offer-06.gif` | 1200 x 800 | 3:2 | Concert Sound |
| `offer-07.gif` | 1200 x 800 | 3:2 | Live Streaming |
| `offer-09.gif` | 1200 x 800 | 3:2 | DJ Equipment |
| `offer-11.gif` | 1200 x 800 | 3:2 | Moving Head Lights |

### Musical Entertainment

Live page: https://mmeink-worldwide-production.up.railway.app/services/musical-entertainment

Already supplied: 0 photographs. Still needed: 30.

**`public/services/musical-entertainment/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Live Bands |
| `offer-02.png` | 1200 x 800 | 3:2 | DJs & Open Format Sets |
| `offer-03.png` | 1200 x 800 | 3:2 | Jazz Ensembles |
| `offer-04.png` | 1200 x 800 | 3:2 | String Quartets |
| `offer-05.png` | 1200 x 800 | 3:2 | Solo Vocalists |
| `offer-06.png` | 1200 x 800 | 3:2 | Pianists & Keyboardists |
| `offer-07.png` | 1200 x 800 | 3:2 | Cultural & World Music |
| `offer-08.png` | 1200 x 800 | 3:2 | Ceremony Musicians |
| `offer-09.png` | 1200 x 800 | 3:2 | Cocktail Hour Sets |
| `offer-10.png` | 1200 x 800 | 3:2 | Headline Acts |
| `offer-11.png` | 1200 x 800 | 3:2 | Backline & Sound Support |
| `offer-12.png` | 1200 x 800 | 3:2 | Musical Direction |

**`public/services/musical-entertainment/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/musical-entertainment/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Live band performing at a corporate gala reception |
| `gallery-02.png` | 1200 x 900 | 4:3 | DJ booth built into a custom stage surround |
| `gallery-03.png` | 1200 x 900 | 4:3 | String quartet playing through a cocktail hour |
| `gallery-04.png` | 1200 x 900 | 4:3 | Jazz ensemble set up in a hotel ballroom |
| `gallery-05.png` | 1200 x 900 | 4:3 | Vocalist performing with a full band behind a branded stage |
| `gallery-06.png` | 1200 x 900 | 4:3 | Electric violinist performing under moving lights |
| `gallery-07.png` | 1200 x 900 | 4:3 | Pianist playing through a seated dinner service |
| `gallery-08.png` | 1200 x 900 | 4:3 | Percussion act opening an awards ceremony |
| `gallery-09.png` | 1200 x 900 | 4:3 | Sound check and monitor mix before doors open |
| `gallery-10.png` | 1200 x 900 | 4:3 | Roaming musicians moving through a reception |
| `gallery-11.png` | 1200 x 900 | 4:3 | Band backline and staging set for a private celebration |
| `gallery-12.png` | 1200 x 900 | 4:3 | Dance floor filled during a live music set |

**`public/services/musical-entertainment/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Entertainment

Live page: https://mmeink-worldwide-production.up.railway.app/services/entertainment

Already supplied: 1 photograph. Still needed: 29.

**`public/services/entertainment/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Emcees & Hosts |
| `offer-02.png` | 1200 x 800 | 3:2 | Interactive Performers |
| `offer-03.png` | 1200 x 800 | 3:2 | Aerialists & Circus Acts |
| `offer-04.png` | 1200 x 800 | 3:2 | Dancers & Choreography |
| `offer-05.png` | 1200 x 800 | 3:2 | Magicians & Close Up |
| `offer-06.png` | 1200 x 800 | 3:2 | Comedians |
| `offer-07.png` | 1200 x 800 | 3:2 | Celebrity Talent |
| `offer-08.png` | 1200 x 800 | 3:2 | Photo & 360 Booths |
| `offer-09.png` | 1200 x 800 | 3:2 | Casino & Game Tables |
| `offer-10.png` | 1200 x 800 | 3:2 | Brand Ambassadors |
| `offer-11.png` | 1200 x 800 | 3:2 | Character Performers |
| `offer-12.png` | 1200 x 800 | 3:2 | Guest Experience Design |

**`public/services/entertainment/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/entertainment/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Emcee hosting from a branded stage at a corporate event |
| `gallery-02.png` | 1200 x 900 | 4:3 | Aerial performer suspended above a gala reception |
| `gallery-03.png` | 1200 x 900 | 4:3 | Guests taking part in an interactive photo experience at an activation |
| `gallery-04.png` | 1200 x 900 | 4:3 | Casino tables and professional dealers set for a private event |
| `gallery-05.png` | 1200 x 900 | 4:3 | Carnival games built into a company celebration |
| `gallery-06.png` | 1200 x 900 | 4:3 | Dancers performing a choreographed opening number |
| `gallery-07.png` | 1200 x 900 | 4:3 | Strolling magician working a cocktail reception |
| `gallery-08.png` | 1200 x 900 | 4:3 | Guests using a 360 degree video booth at a launch party |
| `gallery-09.png` | 1200 x 900 | 4:3 | Caricature artist drawing guests through dinner |
| `gallery-10.png` | 1200 x 900 | 4:3 | Virtual reality station set up in an activation space |
| `gallery-11.png` | 1200 x 900 | 4:3 | Team building activity running in a conference break out |
| `gallery-12.png` | 1200 x 900 | 4:3 | Performers and guests filling the floor at an after party |

### Specialty Entertainment

Live page: https://mmeink-worldwide-production.up.railway.app/services/specialty-entertainment

Already supplied: 1 photograph. Still needed: 38.

**`public/services/specialty-entertainment/difference/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `difference.png` | 1200 x 900 | 4:3 | Mirror suit violinist performing among guests at an MME Worldwide event |

**`public/services/specialty-entertainment/divisions/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `division-01.png` | 1200 x 900 | 4:3 | Entertainment Above Expectations |
| `division-02.png` | 1200 x 900 | 4:3 | Where Entertainment Becomes Part of the Environment |
| `division-03.png` | 1200 x 900 | 4:3 | Movement. Energy. Spectacle. |
| `division-04.png` | 1200 x 900 | 4:3 | Turn Down the Lights. Turn Up the Experience. |
| `division-05.png` | 1200 x 900 | 4:3 | Entertainment Without a Stage |
| `division-06.png` | 1200 x 900 | 4:3 | Give Your Event Its Own Sound |
| `division-07.png` | 1200 x 900 | 4:3 | Make Your Guests Part of the Show |
| `division-08.png` | 1200 x 900 | 4:3 | If You Can Imagine It, We Can Create It |

**`public/services/specialty-entertainment/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Aerial & Acrobatic Performers |
| `offer-02.png` | 1200 x 800 | 3:2 | Living Art & Human Installations |
| `offer-03.png` | 1200 x 800 | 3:2 | Specialty Dancers |
| `offer-04.png` | 1200 x 800 | 3:2 | Fire, LED & Glow Artists |
| `offer-05.png` | 1200 x 800 | 3:2 | Strolling & Immersive Performers |
| `offer-06.png` | 1200 x 800 | 3:2 | Musicians & Specialty Live Acts |
| `offer-07.png` | 1200 x 800 | 3:2 | Interactive Guest Experiences |
| `offer-08.png` | 1200 x 800 | 3:2 | Themed & Custom Productions |
| `offer-09.png` | 1200 x 800 | 3:2 | Creative Development & Casting |
| `offer-10.png` | 1200 x 800 | 3:2 | Costume & Choreography Direction |
| `offer-11.png` | 1200 x 800 | 3:2 | Show Calling & Music Direction |
| `offer-12.png` | 1200 x 800 | 3:2 | On Site Talent Management |

**`public/services/specialty-entertainment/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/specialty-entertainment/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Aerialist performing above guests at a gala produced by MME Worldwide |
| `gallery-02.png` | 1200 x 900 | 4:3 | Living champagne wall greeting guests at a corporate reception |
| `gallery-03.png` | 1200 x 900 | 4:3 | LED dancers opening a product launch produced by MME Worldwide |
| `gallery-04.png` | 1200 x 900 | 4:3 | Body painted performer working as part of the event decor |
| `gallery-05.png` | 1200 x 900 | 4:3 | Strolling magician entertaining guests during cocktail hour |
| `gallery-06.png` | 1200 x 900 | 4:3 | Electric violinist performing at a luxury private celebration |
| `gallery-07.png` | 1200 x 900 | 4:3 | Contortionist featured in a themed entertainment production |
| `gallery-08.png` | 1200 x 900 | 4:3 | Caricature artist creating live artwork for event guests |
| `gallery-09.png` | 1200 x 900 | 4:3 | Choreographed dance production on a custom MME stage build |
| `gallery-10.png` | 1200 x 900 | 4:3 | Glow performers during an after dark brand activation |
| `gallery-11.png` | 1200 x 900 | 4:3 | Themed hosts welcoming guests at an immersive event entrance |
| `gallery-12.png` | 1200 x 900 | 4:3 | Full theatrical entertainment production staged by MME Worldwide |

### Logistics

Live page: https://mmeink-worldwide-production.up.railway.app/services/logistics

Already supplied: 0 photographs. Still needed: 32.

**`public/services/logistics/what-we-offer/`**  Capability card in the What We Offer strip.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offer-01.png` | 1200 x 800 | 3:2 | Venue Sourcing & Coordination |
| `offer-02.png` | 1200 x 800 | 3:2 | Load In & Load Out Management |
| `offer-03.png` | 1200 x 800 | 3:2 | Event Staffing & Crew |
| `offer-04.gif` | 1200 x 800 | 3:2 | Transportation & Freight |
| `offer-05.png` | 1200 x 800 | 3:2 | Permitting & Compliance |
| `offer-06.gif` | 1200 x 800 | 3:2 | Vendor Management |
| `offer-07.gif` | 1200 x 800 | 3:2 | On Site Production Management |
| `offer-08.png` | 1200 x 800 | 3:2 | Timeline & Run of Show |
| `offer-09.gif` | 1200 x 800 | 3:2 | Warehouse & Storage |
| `offer-10.png` | 1200 x 800 | 3:2 | Budget & Cost Management |
| `offer-11.gif` | 1200 x 800 | 3:2 | Safety & Risk Planning |
| `offer-12.png` | 1200 x 800 | 3:2 | Post Event Reporting |

**`public/services/logistics/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/services/logistics/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Event logistics setup with equipment staging and crew coordination |
| `gallery-02.png` | 1200 x 900 | 4:3 | Production load in with freight and staging equipment |
| `gallery-03.png` | 1200 x 900 | 4:3 | On site logistics management at large scale event venue |
| `gallery-04.png` | 1200 x 900 | 4:3 | Venue coordination and floor plan logistics for corporate event |
| `gallery-05.png` | 1200 x 900 | 4:3 | Event staffing and crew management during production setup |
| `gallery-06.png` | 1200 x 900 | 4:3 | Transportation and freight logistics for event equipment |
| `gallery-07.png` | 1200 x 900 | 4:3 | Production timeline coordination during event load in |
| `gallery-08.png` | 1200 x 900 | 4:3 | Vendor management and logistics coordination on site |
| `gallery-09.png` | 1200 x 900 | 4:3 | Warehouse staging and inventory management for event production |
| `gallery-10.png` | 1200 x 900 | 4:3 | Event safety briefing and risk planning before production |
| `gallery-11.png` | 1200 x 900 | 4:3 | Run of show coordination with event production team |
| `gallery-12.png` | 1200 x 900 | 4:3 | Budget management and logistics reporting post event |

**`public/services/logistics/event-management/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `event-management.png` | 1200 x 900 | 4:3 | What we do |
| `event-management-detail.png` | 1000 x 1000 | 1:1 | Intro collage |

**`public/services/logistics/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Events Overview

Live page: https://mmeink-worldwide-production.up.railway.app/events

Already supplied: 22 photographs. Still needed: 4.

**`public/events/index/cards/`**  Square card on the overview grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `card-05.png` | 1200 x 1200 | 1:1 | Award Dinners |
| `card-07.png` | 1200 x 1200 | 1:1 | Corporate Events |
| `card-08.png` | 1200 x 1200 | 1:1 | Themed Events |
| `card-09.png` | 1200 x 1200 | 1:1 | Seasonal Events |

### Award Dinners

Live page: https://mmeink-worldwide-production.up.railway.app/events/award-dinners

Already supplied: 0 photographs. Still needed: 22.

**`public/events/award-dinners/what-we-do/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offering-01.png` | 1200 x 900 | 4:3 | Awards Ceremonies |
| `offering-02.png` | 1200 x 900 | 4:3 | Show Production & Run of Show |
| `offering-03.png` | 1200 x 900 | 4:3 | Honouree & VIP Experience |
| `offering-04.png` | 1200 x 900 | 4:3 | Sponsor & Brand Visibility |

**`public/events/award-dinners/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/events/award-dinners/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Awards ceremony stage set with lectern and presentation screen |
| `gallery-02.png` | 1200 x 900 | 4:3 | Honoree receiving an award under stage lighting |
| `gallery-03.png` | 1200 x 900 | 4:3 | Presentation graphics running on screen behind an awards stage |
| `gallery-04.png` | 1200 x 900 | 4:3 | Round tables set for an awards dinner in a ballroom |
| `gallery-05.png` | 1200 x 900 | 4:3 | Trophy table styled at an awards reception |
| `gallery-06.png` | 1200 x 900 | 4:3 | Show caller running the awards programme from front of house |
| `gallery-07.png` | 1200 x 900 | 4:3 | Guests applauding during an award presentation |
| `gallery-08.png` | 1200 x 900 | 4:3 | Step and repeat backdrop set for awards arrivals |
| `gallery-09.png` | 1200 x 900 | 4:3 | Honoree video playing to a seated audience |
| `gallery-10.png` | 1200 x 900 | 4:3 | Seating plan and place cards at an awards dinner |
| `gallery-11.png` | 1200 x 900 | 4:3 | Awards stage seen from the back of a full room |
| `gallery-12.png` | 1200 x 900 | 4:3 | Reception drinks before an awards ceremony |

**`public/events/award-dinners/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Corporate Events

Live page: https://mmeink-worldwide-production.up.railway.app/events/corporate-events

Already supplied: 0 photographs. Still needed: 22.

**`public/events/corporate-events/what-we-do/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offering-01.png` | 1200 x 900 | 4:3 | Town Halls & All Hands |
| `offering-02.png` | 1200 x 900 | 4:3 | Client & Partner Events |
| `offering-03.png` | 1200 x 900 | 4:3 | Holiday & Milestone Celebrations |
| `offering-04.png` | 1200 x 900 | 4:3 | Sales Kickoffs & Incentives |

**`public/events/corporate-events/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/events/corporate-events/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | All hands meeting staged for a company wide audience |
| `gallery-02.png` | 1200 x 900 | 4:3 | Registration desk and branded signage at a corporate event |
| `gallery-03.png` | 1200 x 900 | 4:3 | Executive presenting from a branded main stage |
| `gallery-04.png` | 1200 x 900 | 4:3 | Break out room set for a workshop session |
| `gallery-05.png` | 1200 x 900 | 4:3 | Networking reception in a corporate event space |
| `gallery-06.png` | 1200 x 900 | 4:3 | Panel discussion staged with lounge seating |
| `gallery-07.png` | 1200 x 900 | 4:3 | Branded coffee and catering station at a corporate meeting |
| `gallery-08.png` | 1200 x 900 | 4:3 | Town hall staging with live camera and screen relay |
| `gallery-09.png` | 1200 x 900 | 4:3 | Company celebration dinner set in a ballroom |
| `gallery-10.png` | 1200 x 900 | 4:3 | Delegates moving between sessions at a corporate conference |
| `gallery-11.png` | 1200 x 900 | 4:3 | Corporate awards moment on a main stage |
| `gallery-12.png` | 1200 x 900 | 4:3 | Wide view of a corporate event space at capacity |

**`public/events/corporate-events/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Themed Events

Live page: https://mmeink-worldwide-production.up.railway.app/events/themed-events

Already supplied: 0 photographs. Still needed: 22.

**`public/events/themed-events/what-we-do/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offering-01.png` | 1200 x 900 | 4:3 | Concept Development |
| `offering-02.png` | 1200 x 900 | 4:3 | Immersive Environments |
| `offering-03.png` | 1200 x 900 | 4:3 | Guest Journey Design |
| `offering-04.png` | 1200 x 900 | 4:3 | Brand Led Theming |

**`public/events/themed-events/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/events/themed-events/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Themed event entrance carrying the concept from the first step |
| `gallery-02.png` | 1200 x 900 | 4:3 | Immersive themed room built for a private celebration |
| `gallery-03.png` | 1200 x 900 | 4:3 | Themed decor detail on a dinner table |
| `gallery-04.png` | 1200 x 900 | 4:3 | Custom scenic build supporting a single event concept |
| `gallery-05.png` | 1200 x 900 | 4:3 | Themed lighting shifting the mood of a ballroom |
| `gallery-06.png` | 1200 x 900 | 4:3 | Costumed performers matched to the event theme |
| `gallery-07.png` | 1200 x 900 | 4:3 | Themed bar and lounge environment |
| `gallery-08.png` | 1200 x 900 | 4:3 | Themed photo moment built for guests |
| `gallery-09.png` | 1200 x 900 | 4:3 | Concept rendering shown beside the finished themed space |
| `gallery-10.png` | 1200 x 900 | 4:3 | Themed ceiling and drape installation |
| `gallery-11.png` | 1200 x 900 | 4:3 | Guests arriving into a fully themed environment |
| `gallery-12.png` | 1200 x 900 | 4:3 | Wide view of a themed event at doors open |

**`public/events/themed-events/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

### Seasonal Events

Live page: https://mmeink-worldwide-production.up.railway.app/events/seasonal-events

Already supplied: 0 photographs. Still needed: 22.

**`public/events/seasonal-events/what-we-do/`**  Tile in the What We Do grid.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `offering-01.png` | 1200 x 900 | 4:3 | Holiday Parties |
| `offering-02.png` | 1200 x 900 | 4:3 | Winter Installations |
| `offering-03.png` | 1200 x 900 | 4:3 | Seasonal Brand Activations |
| `offering-04.png` | 1200 x 900 | 4:3 | Recurring Annual Programmes |

**`public/events/seasonal-events/case-study/`**  Frame in the case study carousel. All frames in this folder should come from the same event.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `case-study-01.png` | 1600 x 900 | 16:9 | Case study number 01 |
| `case-study-02.png` | 1600 x 900 | 16:9 | Case study number 02 |
| `case-study-03.png` | 1600 x 900 | 16:9 | Case study number 03 |
| `case-study-04.png` | 1600 x 900 | 16:9 | Case study number 04 |
| `case-study-05.png` | 1600 x 900 | 16:9 | Case study number 05 |

**`public/events/seasonal-events/gallery/`**  Gallery frame.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `gallery-01.png` | 1200 x 900 | 4:3 | Winter themed event space with illuminated decor |
| `gallery-02.png` | 1200 x 900 | 4:3 | Holiday party ballroom set for a company celebration |
| `gallery-03.png` | 1200 x 900 | 4:3 | Seasonal entrance installation welcoming guests |
| `gallery-04.png` | 1200 x 900 | 4:3 | Christmas tree and seasonal decor built for a corporate venue |
| `gallery-05.png` | 1200 x 900 | 4:3 | Seasonal table styling with linen and centrepieces |
| `gallery-06.png` | 1200 x 900 | 4:3 | Spring garden inspired event environment |
| `gallery-07.png` | 1200 x 900 | 4:3 | Summer outdoor event under a tent structure |
| `gallery-08.png` | 1200 x 900 | 4:3 | Autumn themed lounge with warm lighting |
| `gallery-09.png` | 1200 x 900 | 4:3 | Seasonal photo moment built for guests |
| `gallery-10.png` | 1200 x 900 | 4:3 | Holiday decor installation in a building lobby |
| `gallery-11.png` | 1200 x 900 | 4:3 | End of year celebration dance floor |
| `gallery-12.png` | 1200 x 900 | 4:3 | Seasonal event space seen at doors open |

**`public/events/seasonal-events/hero/`**  Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.

| File | Size | Ratio | The frame |
| --- | --- | --- | --- |
| `hero.png` | 1920 x 1080 | 16:9 | Page hero |

## Aspect ratio reference

| Size | Ratio | Files at this size | Used for |
| --- | --- | --- | --- |
| 1200 x 900 | 4:3 | 186 | related project card, photo gallery, What We Do tile, testimonial photograph |
| 1200 x 800 | 3:2 | 128 | office photograph, animated loop, What We Offer card |
| 1600 x 900 | 16:9 | 65 | case study carousel |
| 1920 x 1080 | 16:9 | 16 | page hero film, page hero, section background |
| 1700 x 2200 | 17:22 | 16 | brochure page |
| 1200 x 1200 | 1:1 | 12 | overview grid card |
| 1200 x 1500 | 4:5 | 5 | project showcase slide |
| 900 x 1200 | 3:4 | 4 | featured work card |
| 1000 x 1000 | 1:1 | 1 | collage, square frame |

## Optional extras

Not wired into a slot, so nothing breaks without them, but wanted:

- A portrait of Andrea Palacio for the team row on the About page, 600 x 600, 1:1. Her card currently shows her initials in a styled circle, which is a deliberate fallback and looks fine if you would rather leave it.
- A photograph of the Long Island premises. There is one in use already, so this is only if a better frame exists.
- One strong wide frame of a genuinely impressive MME event. It would do a lot of work across the site, because thirty closing banners are still placeholders and a single great picture could serve several of them.

## Questions

Send anything unclear back with the page link and the file name and we will
answer against the live page.

This document is generated from the site itself, so it stays accurate as
assets arrive. Regenerate it any time with `npm run assets:brief`.
