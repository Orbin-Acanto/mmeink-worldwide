# MME Website Content Audit

**Prepared for:** Management and Design team
**Date:** 7 August 2026
**Purpose:** A page by page record of what text and imagery the website currently uses, what has been written but not yet approved, and exactly what still needs to be produced.

---

> ## Superseded in part
>
> This report was written before the asset restructure. The findings about
> **text** still stand: copy awaiting approval, the placeholder case studies,
> the team biographies, the statistics, and the questions in section 11 are all
> still open, and section 9 remains the photography brief.
>
> The findings about **where files live** no longer apply. Every borrowed and
> stock image has been replaced by a placeholder that states the size it needs
> to be delivered at, `public/` is now organised one folder per page, and
> nothing is shared between two pages. Read
> [ASSET_SPEC.md](ASSET_SPEC.md) for the current map, which is generated from
> disk rather than written by hand.
>
> Also since this report: the two spelling errors on the Our Work page are
> fixed, every gallery image has its own alt text, the 101 unused files have
> moved to `asset-archive/` outside `public/`, and three pages have been added
> (Specialty Entertainment, and the sizzle reel and brochure pages under About).
> Exhibits and Trade Shows is now labelled Exhibitions and Trade Shows.

---

## How to read this document

The site has 31 live pages. This report walks through every one of them, section by section. For each section you will find what is on screen right now, where the pictures come from, and what we still need from you.

Three labels are used throughout:

**Ready.** The text or image is real, it is correct, and it can ship as it is.

**Needs approval.** Copy that was written during the rebuild. It reads well and it is on brand, but nobody at MME has signed it off yet. Please read it and either approve it or send corrections.

**Needs content.** Something is genuinely missing. There is either filler text on the page or a photograph is standing in for one we do not have. These items should be resolved before launch.

A quick note on the numbers in this report. There are 570 image and video files in the site. Of those, 469 are actually used on a page and 101 are sitting in folders unused. Every figure quoted below was counted from the code rather than estimated.

---

## The single biggest issue

Eleven pages were created during this rebuild. None of them have photographs of their own. Every one of them borrows pictures from an older page.

Here is what that means in practice. The Printing page, the Staging page and the Custom Fabrication page all draw from the same folder of 34 workshop photographs. A visitor who clicks from Printing to Staging sees largely the same pictures twice. The same thing happens with Themes, Props and Design and Decor, which share one folder. It happens again with Award Dinners, Seasonal Events, Musical Entertainment and Galas, which all pull from the gala photographs.

To be specific, twelve images are each being used on six or seven different pages. One hundred and sixty six images appear on more than one page.

This is not a bug and the site works perfectly well. It was the only option available, because no photography exists for printing work, lighting rigs, staging builds, props or entertainment as separate subjects. But it is very visible to anyone browsing the site, and it is the main thing a photographer needs to fix.

**The ask for the design team:** a dedicated photo shoot covering seven subjects. Roughly twenty usable images each would be ideal. Details are in section 9.

---

## 1. Home page

Route: `/`

| Section | What is there now | Status |
| --- | --- | --- |
| Hero video | Headline reads "Creating Unforgettable Experiences" with the line "Premium event planning and production" underneath. Plays `MME_Worldwide_Our_Work.mp4`. | Needs approval on the wording. Video is ready. |
| About introduction | Opens with "Crafting unforgettable" and carries the 30 year milestone graphic. | Ready |
| Work marquee | Scrolling band of the 12 named client projects. | Ready |
| Services overview | Grid of all 12 services in the new running order. | Ready |
| Call to action | "Ready to Create Magic?" over a stock photograph. | Needs content. See section 8. |
| Client logos | Thirty two logos scrolling across. | Needs content. The logos are real but every one is labelled "Brand One" through to "Brand Thirty Two". |
| Statistics | Three counters: 113 projects, 30 years, 12 design awards. | Needs approval. Please confirm the numbers. |
| Featured work | Larger project cards. | Ready |

**What we need for this page**

The thirty two client names, matched to the logo files in `public/work/client-logos/`. At the moment the site tells a screen reader "Brand Seventeen" instead of the company name, which is both an accessibility problem and a wasted opportunity, since these are recognisable companies.

Confirmation of the three statistics. One hundred and thirteen projects across thirty years works out at under four events a year, which seems low for a company of this size. The twelve design awards could not be verified anywhere. Published numbers get quoted back at you, so these are worth getting right.

---

## 2. About page

Route: `/about`

This is the strongest page on the site for written content. The main company description matches what is published on mmeink.com almost word for word.

| Section | What is there now | Status |
| --- | --- | --- |
| Hero | Header image with "Get in Touch" prompt. | Ready |
| Company description | The full paragraph describing MMEink as a full service Event Management and Hospitality agency, naming Michael Tardi as CEO and listing the New York City, Long Island and Miami offices. | Ready. Verified against the live site. |
| Our Story timeline | Four milestones: 1995 founding, 2005 Long Island, 2015 Miami, 2025 thirtieth anniversary. | Needs approval on the dates. |
| Our Team | Six people. | Needs content. See below. |
| Process | Four steps: Discover, Design, Produce, Deliver. Each has its own illustration. | Ready |
| Call to action | "Contact Us Today to Get Started". | Ready |

**The team section needs the most attention**

All six job titles are now correct following the brief. Michael Tardi is Owner, Lauren Leuci is Director of Events, Andrew Heaton is Director of Operations, Juan Fuentes is Director of Events and Production, Desmond Hyatt is Director of Events and Production, and Herberto Deleon is Director of Creative Fabrication.

The biographies are the problem. All six read like stock descriptions rather than anything about the actual person. Worse, Desmond Hyatt and Herberto Deleon currently share the exact same sentence, word for word: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions." Since Herberto is now Director of Creative Fabrication, that sentence is also no longer accurate for him.

**What we need:** six real biographies, two or three sentences each.

Desmond Hyatt has no photograph. His picture was removed as the brief requested, and his card now shows his initials in a styled circle so the layout stays intact. If a replacement headshot is coming, we will drop it in. If the initials are meant to stay, just confirm and we will leave it.

Four of the six have no LinkedIn address. Andrew, Juan, Desmond and Herberto all have a placeholder link that goes nowhere when clicked. Either send the addresses or we will hide the icon for those four.

The background image behind the team section is a stock photograph from Unsplash. MME has hundreds of its own photographs and one of them would serve better here.

---

## 3. Our Work page

Route: `/work`

| Section | What is there now | Status |
| --- | --- | --- |
| Hero video | "Our Work" with the line "Three decades of unforgettable events, exceptional experiences, and lasting impressions". | Ready |
| Filter bar | Filters projects by category. | Ready |
| Project grid | Twelve genuine client projects. | Ready |
| Call to action | "Ready to Create Magic?" over stock photography. | Needs content |

The twelve projects are real, named and properly attributed. They are: 5050 Women on Boards Global Summit, Buckley School Non-profit Events, Builders Risk and Construction, Carnegie Melon 30th Anniversary Celebration, DTA Annual Holiday Dinner, F Suite CFO Strategy Summit, Friedman and Kaplan Holiday Party 2025, Ikebana, International College Reunion 2025, Maxim Growth Summit 2025, Morgan Stanley Gala, and Nest+m Masquerade Gala.

**Two small corrections worth making**

There are two spelling errors visible on the page. "Builders Risk and Constrution" is missing a c in Construction, and "Nest+m MASOUERADE Gala" should read Masquerade, where an O has been typed instead of a Q. Both appear on screen.

**A much larger opportunity**

Each of those twelve projects has a photo folder, and only one photograph from each is being used. There are 93 photographs in these folders and only 12 are on screen, which leaves 81 sitting unused. Nest+m alone has 24 photographs of which one is displayed. Buckley School has 12 and shows one. Carnegie Melon has 11 and shows one.

This is finished work that has already been shot and paid for. Building proper individual case study pages for these twelve clients would fill most of the gaps identified elsewhere in this report without commissioning anything new.

**The project detail page needs a decision**

There is a page at `/work/work-details` which is a single hardcoded template. Its heading is literally the words "Client Name" and its body text describes two completely unrelated projects in one paragraph, one for Core Water and one for monday.com. Nothing links to this page from the main navigation.

Please decide whether to build real detail pages for the twelve clients, using the photography that already exists, or to remove this page until we are ready.

---

## 4. Services overview page

Route: `/services`

| Section | What is there now | Status |
| --- | --- | --- |
| Hero video | "Exceptional Services" with "Crafted with precision, delivered with passion". | Ready |
| Why Choose Us | Four points covering three decades of experience, in house capabilities, end to end management and round the clock support. | Needs approval |
| Services grid | All 12 services in the order set out in the brief. | Ready |
| Call to action | "Ready to Create Magic?" over stock photography. | Needs content |
| Featured projects | Rotating showcase. | Ready |
| Questions | Six general questions shared with the Events page. | Needs approval |

The twelve services now run in the order requested: Custom Fabrication, Printing, Audio Visual, Lighting, Staging, Design and Decor, Themes, Props, Rentals, Musical Entertainment, Entertainment, Logistics.

---

## 5. The twelve service pages

Every service page follows the same layout. There is a hero image with a headline, a "What We Offer" grid of twelve tiles, a process section, a case study, a photo gallery and four questions.

### 5a. The five established services

These pages existed before the rebuild and have proper written content and real case studies.

| Page | Photo source | Photos available | Status |
| --- | --- | --- | --- |
| Custom Fabrication | Its own folder | 34 photos plus 6 animations | Ready |
| Audio Visual | Its own folder | 20 photos | Ready, though 20 is thin |
| Design and Decor | Its own folder | 34 photos | Ready |
| Rentals | Its own folder | 34 photos | Ready |
| Logistics | Borrows from Rentals | 1 photo of its own | Needs content |

Logistics is worth flagging. The page is fully written and has a real case study about a six city conference tour, but it owns exactly one photograph. Everything else on that page is borrowed from the Rentals folder. Trucks, crews, load in and freight are all things MME does every week, so this should be an easy gap to close.

Audio Visual has only 20 photographs, and Lighting is now drawing from that same set, so it is being stretched across two pages.

### 5b. The seven new services

These pages were created during this rebuild. All of the writing on them is new and unapproved, and none of them have their own photography.

| Page | Headline written for it | Borrowing photos from |
| --- | --- | --- |
| Printing | "Large-format graphics and branded print, produced in-house" | Custom Fabrication |
| Lighting | "Lighting design that shapes mood, focus, and atmosphere" | Audio Visual |
| Staging | "Stages, risers, and scenic structures built to spec" | Custom Fabrication |
| Themes | "Fully realised concepts, from mood board to load-out" | Design and Decor |
| Props | "Custom-built and curated props from our own inventory" | Design and Decor |
| Musical Entertainment | "Live music matched to the room and the moment" | Galas |
| Entertainment | "Performers, hosts, and interactive experiences" | Brand Activations |

Each of these seven pages carries roughly 20 pieces of written copy, which comes to about 140 separate pieces of text in total. That covers the headline, the twelve service tile labels, the gallery introduction, the closing call to action and four questions and answers.

**Please read these pages before launch, because some of them make specific promises.**

The Printing page states that graphics are "printed and finished in our own facility" and quotes a turnaround of three to five business days. It also offers on site installation.

The Staging page says MME provides "load calculations and engineering documentation to satisfy venue and municipal requirements".

The Props page says props can be stored in the MME warehouse between events so clients can build up a reusable library.

The Musical Entertainment page says MME handles artist booking and contracting directly, and that acts will learn a specific requested song.

The Entertainment page says MME manages performer contracts, technical riders and hospitality requirements.

Every one of these is plausible for a company of this size, and each was written to match the tone of the existing pages. But if any of this work is subcontracted rather than done in house, the wording needs to change before it goes live. These are the kind of claims a client will hold you to.

**All seven case studies are placeholder text.** Each page has a case study block that currently displays the words "PLACEHOLDER, awaiting client-approved case study copy for this service." This is visible to anyone who visits the page. There are 33 of these placeholder strings in total across all eleven new pages, three on each page covering the challenge, the solution and the result.

---

## 6. Events overview and the ten event pages

Route: `/events` plus ten individual pages

The overview page carries a hero video, an introduction, the grid of event types, a work marquee, testimonials, a call to action and the shared set of six questions.

The events now run in the order the brief set out: Brand Activations, Product Launches, Exhibitions, Conferences and Meetings, Award Dinners, Galas, Corporate Events, Themed Events, Seasonal Events. Virtual and Hybrid Events sits at the end, kept in place because it has a complete page and 34 photographs behind it.

Exhibitions was previously called Exhibits and Trade Shows. The name has been changed everywhere it appears on screen. The web address stays the same so no existing links break.

### 6a. The six established event pages

| Page | Photos | Case study | Status |
| --- | --- | --- | --- |
| Brand Activations | 51 | Real | Ready |
| Product Launches | 27 | Real | Ready |
| Exhibitions | 35 | Real | Ready |
| Conferences and Meetings | 31 | Real | Ready |
| Galas | 30 | Real | Ready |
| Virtual and Hybrid Events | 34 | Real | Ready |

These six are in good shape. Brand Activations is the best resourced page on the entire site.

### 6b. The four new event pages

| Page | Headline written for it | Borrowing photos from |
| --- | --- | --- |
| Award Dinners | "Recognition evenings produced with precision and polish" | Galas |
| Corporate Events | "Company-wide moments, produced end to end" | Conferences and Meetings |
| Themed Events | "One concept, carried through every detail" | Brand Activations |
| Seasonal Events | "Holiday and seasonal experiences, designed to return" | Galas |

As with the new service pages, all the writing here is new and the case studies are placeholder text.

**Two claims to verify.** The Award Dinners page says MME produces honouree videos and presentation graphics in house. The Corporate Events page says MME handles all hands meetings for "several thousand attendees".

---

## 7. Let's Connect page

Route: `/contact`

This page has changed the most in this rebuild.

| Section | What is there now | Status |
| --- | --- | --- |
| Hero | "Let's Create Something Amazing" with two buttons, one to build an RFP and one to send a message. | Ready |
| Contact details | Phone, email and headquarters address. | Ready. Verified against mmeink.com. |
| Testimonial | Valerie Goldstein on a Bar Mitzvah at Nassau County Museum of Art. | Ready, but see the note below. |
| Message form | Name, email, phone, company, event type, date, guest numbers and message. | Ready |
| File upload | New. Accepts floor plans, CAD drawings, renderings and design concepts. | Ready |
| RFP builder | New. Five step form. | Needs approval on the wording. |

**About the RFP builder**

This was copied across from the 48 Wall Street site as the brief asked. It runs over five steps: Services, Event Info, Venue and Catering, Production, and Finalize. It collects service preferences, contact and schedule details, guest numbers, venue requirements, catering, audio visual and production needs, decor, entertainment, branding, logistics, staffing, budget, and file attachments.

Two deliberate changes were made to the original.

The introduction on the 48 Wall Street version describes it as an "AI-powered Request for Proposal Builder". That phrase was removed because this version has no artificial intelligence in it and the claim would not be true.

The list of event types was rewritten. The original offered venue specific options that suited 48 Wall Street. This version offers MME's nine event types plus the common formats clients ask for.

**A technical note for management**

The original form on the 48 Wall Street site sends submissions directly from the visitor's browser to a fixed web address, with no spam protection and no security checks. It also shows the visitor a success message even when the submission fails, which means enquiries can be lost silently without anyone knowing.

The MME version was built differently. It routes through the site's own secure channel, so it inherits the rate limiting, the spam trap and the reCAPTCHA check that the existing contact form already uses. If a submission fails, the visitor is told.

**One item still to check.** A genuine end to end submission needs a real person to complete the reCAPTCHA in a browser. Everything else has been tested. Please submit the form once and confirm the enquiry arrives where it should.

**A question about the testimonial.** The Valerie Goldstein quotation on this page is about a Bar Mitzvah. That is a lovely testimonial, but the site never mentions Bar Mitzvahs anywhere else. See section 10.

---

## 8. Photography that is standing in for the real thing

There are fourteen stock photographs from Unsplash still on the site. Two of them matter a great deal.

**The closing call to action image appears on 27 pages.** It is the single most repeated image on the whole site, and it is a stock photograph rather than an MME event. Replacing this one file improves 27 pages at once. This is the highest value image request in this document.

**The About page team background** is also stock.

The remaining twelve stock images cover the locations section and various background panels. Notably, the New York and Miami location photographs are generic city stock rather than pictures of the actual MME offices.

Given that MME has 570 of its own photographs, and 101 of them are currently unused, most of these could be swapped out today without any new photography at all.

---

## 9. Photography request

This is the consolidated list for whoever is briefing the shoot.

**Priority one, because these pages have no photography of their own**

| Subject | Suggested count | What to capture |
| --- | --- | --- |
| Printing | 20 | Large format printer running, vinyl and wall wraps, step and repeat backdrops, banners, rigid signage, floor and window graphics, finished install |
| Lighting | 20 | Rigged fixtures, stage wash, uplighting, gobo projection, dance floor, console and operator |
| Staging | 20 | Stage build in progress, risers and decking, runway, ADA ramp, pipe and drape, scenic backdrop, finished stage with audience |
| Themes | 20 | Themed rooms end to end, entrance features, mood boards or renderings alongside the finished build |
| Props | 20 | Individual props on white, oversized statement pieces, props in situ, warehouse inventory |
| Musical Entertainment | 20 | Live band, DJ, string quartet, jazz ensemble, soloist, all in performance |
| Entertainment | 20 | Emcee, interactive performers, aerialists, dancers, photo booth, casino tables |
| Logistics | 20 | Trucks and freight, load in, crew at work, warehouse, run of show in progress |

**Priority two, replacing stock**

One strong closing image suitable for use across the site. This replaces the stock photograph currently on 27 pages, so it should be a wide shot of a genuinely impressive MME event.

One team or office photograph for the About page background.

Photographs of the actual New York, Long Island and Miami premises.

**Priority three, filling out thin pages**

Audio Visual currently has 20 photographs and is now shared with Lighting. Another 15 to 20 would take the pressure off both pages.

---

## 10. Services and events on mmeink.com that this site does not cover

The live mmeink.com site advertises a number of things the new site has no page for.

Services listed there but not here: Floral Design, Event Technology, Digital Engagement, Hospitality, Catering, Venue Management, Holiday Decor Services, and Experiential Marketing.

Event types listed there but not here: Weddings, Bar and Bat Mitzvahs, Sweet 16s, Milestone Celebrations, and Social Events.

This may well be deliberate, and the brief did not ask for these. But it is worth a conscious decision rather than an accidental omission, particularly because the testimonial on the Let's Connect page is about a Bar Mitzvah, an event type that appears nowhere else on the site. A visitor who reads that testimonial and then goes looking for social events will not find anything.

---

## 11. Other items that need a decision

**The newsletter signup does not work.** The subscribe box in the footer accepts an email address, shows a tick and the word "Subscribed", and then discards the address. Nothing is stored and nothing is sent. It needs connecting to a real mailing list or it should be taken off the site. As it stands it quietly loses subscribers.

**Contact details were inconsistent and have been standardised.** The footer previously showed a different phone number and a Manhattan address to the one on the contact page.

| | Footer showed | Both now show |
| --- | --- | --- |
| Phone | 1 (212) 616-1655 | 1-877-885-0705 |
| Address | 234 West 39th Street, 10th Floor, New York, NY 10018 | 140 Florida St, Farmingdale, NY 11735 |

The contact page values were kept because they match mmeink.com. **Please confirm whether 234 West 39th Street is a genuine Manhattan office.** If it is, it should go back on the site as an additional location rather than being dropped. It was only removed because it contradicted the published headquarters address.

**Every page shares the same search engine description.** All 31 pages currently tell Google the same sentence, "One Stop Event Solution". Each page should have its own description of roughly 150 characters. Without this the new pages will struggle to rank, since search engines cannot tell them apart.

**Image descriptions on the new pages are generic.** Every photograph on the eleven new pages is described as, for example, "Printing work by MMEink". This is acceptable for accessibility but it does nothing for search. Proper descriptions would help.

**Two spelling errors are visible on the Our Work page.** "Constrution" should be "Construction" and "MASOUERADE" should be "MASQUERADE".

---

## 12. Where the 101 unused images are

These files are on the server but nothing displays them. They are listed here because most of them are useful.

| Location | Count | Comment |
| --- | --- | --- |
| Client project folders | 81 across 12 folders | Real finished work. See the note in section 3. |
| Custom Fabrication process shots | 3 | Named process_1 to process_3, appear to be workflow images |
| Custom Fabrication animations | 2 | Two unused animated files |
| Exhibitions gallery | 2 | Two unused photographs |
| Team folder | 1 | Desmond's removed portrait, kept in case it is wanted back |
| Rentals case study | 1 | One unused photograph |
| Entertainment video | 1 | `MME_Worldwide_Entertainment.mp4`, unused. Could go on the new Entertainment page. |
| Framework default icons | 5 | Left over from the site template, safe to delete |
| Old assets | 4 | Moved to a folder marked unused, safe to delete |

The Entertainment video is worth a second look. There is a finished MME video sitting unused, and a brand new Entertainment page with no media of its own.

---

## 13. Summary of what we need from you

**Text**

Thirty two client company names for the logo strip.

Eleven case studies, one for each new page, covering the client, the challenge, what MME did and the result. Failing that, tell us to hide the case study section on those pages until the content exists.

Six team biographies, two or three sentences each. Two of the current six are identical to one another.

Confirmation of the statistics, being 113 projects and 12 design awards.

Approval or corrections on roughly 140 pieces of new copy across the eleven new pages, paying particular attention to the capability claims listed in sections 5b and 6b.

An answer on the Manhattan address.

Thirty one search engine descriptions, one per page.

**Images**

Roughly 160 new photographs across the eight subjects in section 9.

One strong closing image to replace the stock photograph currently used on 27 pages.

A headshot for Desmond Hyatt, or confirmation that his initials should stay.

Photographs of the three offices.

**Decisions**

Whether to build individual case study pages for the twelve existing client projects, which would make use of 81 photographs already sitting unused.

Whether to keep or remove the placeholder project detail page.

Whether to connect the newsletter signup to a real mailing list or take it off the site.

Whether weddings, Bar and Bat Mitzvahs and other social events belong on this site, given that mmeink.com advertises them and one of the testimonials refers to one.

---

## Appendix: current state at a glance

| Measure | Count |
| --- | --- |
| Live pages | 31 |
| Pages with their own photography | 12 |
| Pages borrowing photography from another page | 11 |
| Images in the site | 570 |
| Images actually used | 469 |
| Images unused | 101 |
| Images appearing on more than one page | 166 |
| Most reused single image | 7 pages |
| Stock photographs still in use | 14 |
| Visible placeholder text strings | 33 |
| Client logos without a real name | 32 |
| Pieces of copy awaiting approval | approximately 140 |
