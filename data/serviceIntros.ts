/**
 * Long-form service copy, client approved.
 *
 * Each entry drives the ServiceIntro section on a service page and also feeds
 * the page metadata, so the wording a visitor reads is the same wording that
 * search engines and AI assistants index. Blocks are optional sub-sections for
 * services whose copy covers more than one offering.
 *
 * House style: no en dashes or em dashes anywhere in client-facing text.
 */

export interface ServiceIntroBlock {
  /** Optional kicker above the block heading. */
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
}

export interface ServiceIntroContent {
  /** Eyebrow above the headline. Doubles as the primary keyword phrase. */
  eyebrow: string;
  /** The H2 for the section. */
  headline: string;
  /** Opening body copy. */
  paragraphs: string[];
  /** Optional named sub-sections rendered as H3 blocks. */
  blocks?: ServiceIntroBlock[];
  /** Closing line, styled as a statement rather than body copy. */
  closing: string;
  /** Optional sign off under the closing line, set smaller. */
  closingNote?: string;
  /** Plain-language capability list. Rendered as a visible, crawlable list. */
  capabilitiesHeading: string;
  /** Optional line under the capabilities heading, above the list. */
  capabilitiesIntro?: string;
  capabilities: string[];
  /** Optional line under the capabilities list. */
  capabilitiesNote?: string;
}

export const serviceIntros: Record<string, ServiceIntroContent> = {
  "custom-fabrication": {
    eyebrow: "Custom Fabrication",
    headline: "From Brand Vision to Real World Experience",
    paragraphs: [
      "At MME Worldwide, we partner with leading brands and agencies to transform ambitious ideas into powerful physical experiences. Our custom fabrication capabilities bring brand strategy to life through experiential activations, product launches, trade shows, immersive environments, pop ups, branded installations, and high profile corporate experiences designed to command attention and deepen audience engagement.",
      "From initial creative development through engineering, fabrication, logistics, installation, and execution, MME provides an integrated approach under one experienced production partner. Every environment is thoughtfully designed to reflect your brand identity, support your marketing objectives, and create meaningful moments between your brand and its audience.",
      "Whether launching a global product, creating an immersive consumer activation, or developing a one of a kind brand environment, MME Worldwide turns creative vision into experiences that engage, inspire, and leave a lasting brand impression.",
    ],
    closing: "Your Vision. Our Craft. One Extraordinary Brand Experience.",
    capabilitiesHeading: "Custom Fabrication Capabilities",
    capabilities: [
      "Experiential activations",
      "Product launches",
      "Trade show exhibits",
      "Immersive environments",
      "Pop ups and retail activations",
      "Branded installations",
      "Corporate brand experiences",
      "Creative development and design",
      "Engineering and scenic fabrication",
      "Logistics, installation, and execution",
    ],
  },

  printing: {
    eyebrow: "Large Format Printing & Branded Graphics",
    headline: "Make Your Brand Impossible to Miss",
    paragraphs: [
      "At MME Worldwide, our professional printing and graphic production services transform creative concepts into bold, high impact brand experiences. From corporate events and product launches to experiential activations, trade shows, pop ups, conferences, and retail environments, we produce premium visual solutions designed to command attention and reinforce your brand at every touchpoint.",
      "Our capabilities include large format printing, custom signage, dimensional graphics, step and repeats, branded backdrops, wall and window graphics, floor graphics, banners, custom decals, event branding, exhibition graphics, wayfinding, scenic graphics, and specialty printed installations.",
      "From artwork preparation and production through fabrication, delivery, installation, and removal, MME Worldwide provides a seamless, end to end solution, ensuring exceptional quality, brand consistency, and flawless execution.",
      "Whether creating a single statement piece or branding an entire environment, MME Worldwide turns every surface into an opportunity to tell your brand story.",
    ],
    closing: "Print. Brand. Transform. Make an Impact.",
    capabilitiesHeading: "Printing & Graphics Capabilities",
    capabilities: [
      "Large format printing",
      "Custom signage",
      "Dimensional graphics",
      "Step and repeats",
      "Branded backdrops",
      "Wall and window graphics",
      "Floor graphics",
      "Banners",
      "Custom decals",
      "Event branding",
      "Exhibition graphics",
      "Wayfinding",
      "Scenic graphics",
      "Specialty printed installations",
    ],
  },

  "audio-visual": {
    eyebrow: "Audio Visual & Event Technology",
    headline: "Technology That Elevates the Experience",
    paragraphs: [
      "At MME Worldwide, we deliver sophisticated audio visual and event technology solutions designed to transform how audiences see, hear, and experience your brand. From executive conferences and corporate meetings to product launches, experiential activations, galas, fashion events, and large scale productions, our AV specialists combine advanced technology with seamless execution.",
      "Our capabilities include professional sound systems, LED video walls, projection and displays, presentation technology, stage and scenic lighting, intelligent lighting, microphones, digital content integration, live streaming, video conferencing, recording, show calling, technical direction, and on site engineering support.",
      "From initial technical planning and system design through installation, programming, rehearsals, live production, and strike, MME Worldwide provides an integrated approach with one objective: flawless performance at every moment that matters.",
      "Whether connecting an executive team with a global audience, unveiling a new product, or producing an immersive brand experience, we design technology around your message, not the other way around.",
    ],
    closing:
      "Powerful Technology. Flawless Production. Exceptional Experiences.",
    capabilitiesHeading: "Audio Visual Capabilities",
    capabilities: [
      "Professional sound systems",
      "LED video walls",
      "Projection and displays",
      "Presentation technology",
      "Stage and scenic lighting",
      "Intelligent lighting",
      "Microphones",
      "Digital content integration",
      "Live streaming",
      "Video conferencing",
      "Recording",
      "Show calling and technical direction",
      "On site engineering support",
    ],
  },

  lighting: {
    eyebrow: "Lighting Design & Production",
    headline: "Illuminate the Space. Transform the Experience",
    paragraphs: [
      "At MME Worldwide, lighting is more than illumination. It is an essential part of the experience. Our creative lighting team combines design, technology, and production expertise to transform venues, environments, and architectural spaces into visually compelling experiences that reflect your brand and captivate your audience.",
      "From corporate events, product launches, experiential activations, conferences, galas, fashion shows, and private celebrations to large scale productions, we create customized lighting solutions that establish atmosphere, enhance architecture, highlight key moments, and bring every creative vision to life.",
      "Our capabilities include architectural lighting, intelligent and moving lighting, LED systems, uplighting, stage and scenic lighting, pin spotting, custom color programming, projection and logo treatments, atmospheric effects, specialty fixtures, lighting control, rigging coordination, and full technical production.",
      "From creative concept and lighting design through programming, installation, show operation, and strike, MME Worldwide provides a seamless end to end solution with meticulous attention to every detail.",
      "We do not simply light an event. We use light to create emotion, define atmosphere, and transform the way your audience experiences the moment.",
    ],
    closing: "Illuminate. Transform. Experience.",
    capabilitiesHeading: "Lighting Capabilities",
    capabilities: [
      "Architectural lighting",
      "Intelligent and moving lighting",
      "LED systems",
      "Uplighting",
      "Stage and scenic lighting",
      "Pin spotting",
      "Custom color programming",
      "Projection and logo treatments",
      "Atmospheric effects",
      "Specialty fixtures",
      "Lighting control",
      "Rigging coordination",
      "Full technical production",
    ],
  },

  staging: {
    eyebrow: "Staging & Scenic Production",
    headline: "Where Your Brand Takes Center Stage",
    paragraphs: [
      "At MME Worldwide, we design and produce staging environments that turn presentations, performances, and brand moments into powerful audience experiences. From executive conferences and product launches to experiential activations, fashion shows, galas, award ceremonies, and large scale corporate productions, every stage is thoughtfully designed around your brand, audience, and objectives.",
      "Our capabilities include custom stages, scenic environments, branded stage sets, presentation platforms, runways, risers, LED integrated staging, custom backdrops, lecterns, stairs and railings, stage decking, specialty finishes, scenic fabrication, and complete technical production.",
      "From initial creative concept and technical design through fabrication, installation, show execution, and strike, MME Worldwide provides a seamless end to end solution, integrating staging, lighting, audio visual, graphics, and scenic design into one cohesive environment.",
      "Whether it is an intimate executive presentation or a global product reveal, we create stages designed to command attention, elevate your message, and make every defining moment unforgettable.",
    ],
    closing: "Set the Stage. Elevate the Brand. Own the Moment.",
    capabilitiesHeading: "Staging & Scenic Capabilities",
    capabilities: [
      "Custom stages",
      "Scenic environments",
      "Branded stage sets",
      "Presentation platforms",
      "Runways",
      "Risers",
      "LED integrated staging",
      "Custom backdrops",
      "Lecterns",
      "Stairs and railings",
      "Stage decking",
      "Specialty finishes",
      "Scenic fabrication",
      "Complete technical production",
    ],
  },

  "design-decor": {
    eyebrow: "Creative Design & Décor",
    headline: "Vision. Design. Transformation",
    paragraphs: [
      "At MME Worldwide, we believe exceptional experiences begin with exceptional design. Our creative team transforms spaces into immersive environments that bring your brand, vision, and story to life.",
      "From corporate events and experiential activations to product launches, conferences, galas, fashion events, and private celebrations, we develop distinctive design concepts that create atmosphere, inspire engagement, and leave a lasting impression.",
      "Our creative capabilities include event design, creative direction, custom décor, scenic environments, branded installations, floral design, furniture and lounge environments, tablescapes, custom props, entrance experiences, ceiling treatments, specialty draping, dimensional branding, and immersive installations.",
      "From the first mood board and creative concept through design development, sourcing, fabrication, installation, styling, and final execution, MME Worldwide provides a seamless creative process with meticulous attention to every detail.",
      "Whether transforming an iconic venue, creating an immersive brand activation, or designing an environment from the ground up, we approach every project with one goal: to create a space that does not simply look extraordinary. It makes your audience feel something extraordinary.",
    ],
    closing: "Imagine the Vision. Transform the Space. Create the Experience.",
    capabilitiesHeading: "Design & Décor Capabilities",
    capabilities: [
      "Event design",
      "Creative direction",
      "Custom décor",
      "Scenic environments",
      "Branded installations",
      "Floral design",
      "Furniture and lounge environments",
      "Tablescapes",
      "Custom props",
      "Entrance experiences",
      "Ceiling treatments",
      "Specialty draping",
      "Dimensional branding",
      "Immersive installations",
    ],
  },

  props: {
    eyebrow: "Event Props & Immersive Environments",
    headline: "The Details That Transform a Space Into an Experience",
    paragraphs: [
      "At MME Worldwide, our curated collection of event props and custom designed scenic elements brings imagination to life. From sophisticated corporate events and product launches to experiential activations, themed celebrations, fashion events, galas, and holiday experiences, we provide distinctive props designed to create impact, atmosphere, and unforgettable guest moments.",
      "Our extensive capabilities include statement props, dimensional décor, themed installations, custom built scenic elements, branded displays, oversized objects, entrance features, photo moments, interactive installations, holiday décor, architectural elements, specialty furniture, and one of a kind custom creations.",
      "Looking for something that does not exist? Our creative and fabrication teams can design and build it exclusively for your brand or event, taking your vision from initial concept and rendering through fabrication, finishing, delivery, installation, and strike.",
      "Whether you need a single statement piece or an entire immersive environment, MME Worldwide combines creative design, an extensive rental inventory, custom fabrication, and full service production to deliver a seamless experience from beginning to end.",
    ],
    closing: "Imagine It. Create It. Experience It.",
    capabilitiesHeading: "Event Prop Capabilities",
    capabilities: [
      "Statement props",
      "Dimensional décor",
      "Themed installations",
      "Custom built scenic elements",
      "Branded displays",
      "Oversized objects",
      "Entrance features",
      "Photo moments",
      "Interactive installations",
      "Holiday décor",
      "Architectural elements",
      "Specialty furniture",
      "One of a kind custom creations",
    ],
  },

  rentals: {
    eyebrow: "Event Rental",
    headline: "Curated Rentals. Elevated Environments. Exceptional Experiences",
    paragraphs: [
      "At MME Worldwide, our event rental collection is designed to transform ordinary spaces into extraordinary environments. From corporate events and conferences to product launches, experiential activations, galas, fashion events, weddings, and private celebrations, we provide an extensive selection of premium event rentals to complement every vision and style.",
      "Our collection includes lounge furniture, sofas, chairs, tables, bars, bar stools, cocktail tables, dining furniture, specialty seating, staging, linens, décor, props, display elements, backdrops, red carpets, stanchions, lighting, and specialty event furnishings.",
      "Whether you are creating an intimate executive reception, a sophisticated branded environment, or a large scale production, our team can help curate the right pieces to create a cohesive and elevated guest experience.",
      "Need something completely unique? MME Worldwide can combine our rental inventory with custom fabrication, branded graphics, scenic design, lighting, and décor to create an environment designed exclusively for your event.",
      "From selection and logistics to delivery, installation, on site coordination, and strike, our team provides a seamless rental experience from beginning to end.",
    ],
    closing: "Curated for Your Vision. Delivered for Your Experience.",
    capabilitiesHeading: "Event Rental Inventory",
    capabilities: [
      "Lounge furniture",
      "Sofas and chairs",
      "Tables and dining furniture",
      "Bars and bar stools",
      "Cocktail tables",
      "Specialty seating",
      "Staging",
      "Linens",
      "Décor and props",
      "Display elements and backdrops",
      "Red carpets and stanchions",
      "Lighting",
      "Specialty event furnishings",
    ],
  },

  "musical-entertainment": {
    eyebrow: "Where It All Began",
    headline: "30 Years of Music. Entertainment. Extraordinary Experiences.",
    paragraphs: [
      "More than 30 years ago, MME Worldwide began with music and entertainment at its core. What started with a passion for bringing people together through music has grown into a full service global event, entertainment, and experiential production company. That same passion still defines who we are.",
    ],
    blocks: [
      {
        heading: "The Sound. The Energy. The Experience.",
        paragraphs: [
          "Music does more than entertain. It creates emotion, transforms an atmosphere, and defines the moment guests remember long after an event has ended.",
          "From corporate gatherings and international conferences to product launches, galas, fashion events, weddings, and private celebrations, we curate talent around each audience and brand, then match every artist to the setting, whether that is the understated elegance of a cocktail reception or the energy of a headline celebration.",
        ],
      },
      {
        heading: "Beyond the Performance",
        paragraphs: [
          "For corporate and branded events, our creative team develops custom entertainment concepts, branded performances, musical reveals, and product launch moments built around a campaign, brand, or audience.",
          "And we manage everything behind it, from talent selection and contracting to staging, audio, lighting, technical production, artist coordination, and show management. One team, one vision, from the first creative idea to the final performance.",
        ],
      },
    ],
    closing:
      "30 Years of Entertainment. Countless Unforgettable Moments. One Extraordinary Experience at a Time.",
    capabilitiesHeading: "The Art of Live Entertainment",
    capabilitiesIntro: "Curated Music & Bespoke Performances",
    capabilities: [
      "DJs & Music Curators",
      "Vocalists & Featured Singers",
      "Jazz Ensembles",
      "String Quartets & Classical Ensembles",
      "Pianists",
      "Acoustic Performers",
      "Live Bands & Orchestras",
      "Specialty & International Musicians",
      "Electric Violinists & Harpists",
      "Celebrity Artists & Headline Entertainment",
    ],
    capabilitiesNote:
      "From intimate musical moments to spectacular headline performances, MME curates exceptional talent and custom musical experiences designed around your event, audience, and vision.",
  },

  logistics: {
    eyebrow: "Event Management, Logistics & White Glove Storage",
    headline: "Seamless Logistics. Exceptional Care. Flawless Execution",
    paragraphs: [
      "MME Worldwide manages events as well as moving them. An MME event manager owns the plan from the first site visit to the final load out, holding the production schedule, the line item budget, the vendor contracts, the permits, the floor plan, the run of show, and the crew, so you brief one team and call one number.",
      "At MME Worldwide, exceptional events depend on what happens behind the scenes. Our comprehensive logistics and white glove services provide brands, agencies, exhibitors, and corporate clients with a seamless solution for the transportation, handling, storage, delivery, installation, and management of event assets.",
      "From high value décor and custom fabrication to trade show exhibits, branded installations, production equipment, furniture, and specialty materials, every item is handled with precision and care. Our capabilities include white glove delivery, dedicated trucking, freight coordination, receiving and inspection, inventory management, short and long term storage, warehousing, packing and crating, installation, on site handling, strike, and return logistics.",
      "For multi city activations, product launches, roadshows, and recurring corporate programs, MME Worldwide can manage your assets from one event to the next, providing secure storage, inventory tracking, scheduled deployment, and coordinated transportation to help streamline operations and protect your investment.",
      "From the warehouse to the event floor and back again, our experienced team manages every movement with one objective: your assets arrive at the right place, at the right time, in presentation ready condition.",
    ],
    closing:
      "Handled with Care. Delivered with Precision. Managed from Start to Finish.",
    capabilitiesHeading: "Event Management & Logistics Capabilities",
    capabilities: [
      "Production schedule and critical path",
      "Line item budget and change control",
      "Vendor sourcing and contracting",
      "Permits, licences, and certificates of insurance",
      "Site surveys and floor plans",
      "Run of show and live show calling",
      "On site management and load out supervision",
      "Reconciliation and post event reporting",
      "White glove delivery",
      "Dedicated trucking",
      "Freight coordination",
      "Receiving and inspection",
      "Inventory management",
      "Short and long term storage",
      "Warehousing",
      "Packing and crating",
      "Installation and on site handling",
      "Strike and return logistics",
    ],
  },

  themes: {
    eyebrow: "Corporate Event Themes & Immersive Experiences",
    headline: "Transform an Event Into an Experience",
    paragraphs: [
      "At MME Worldwide, we create distinctive event themes that turn corporate gatherings into memorable brand experiences. From sophisticated celebrations and executive receptions to product launches, conferences, awards galas, holiday events, and experiential activations, every concept is thoughtfully designed around your brand, audience, and vision.",
      "Our creative team brings each theme to life through custom scenic design, immersive décor, specialty props, branded environments, lighting, furniture, floral design, entertainment, interactive experiences, and custom fabrication, creating one cohesive experience from the moment your guests arrive.",
      "Whether your vision calls for timeless elegance, contemporary luxury, a destination inspired environment, an immersive branded world, or an entirely original concept, MME Worldwide manages every creative detail from concept and design through production, installation, and execution.",
    ],
    closing: "Your Brand. Your Theme. One Unforgettable Experience.",
    capabilitiesHeading: "Themed Event Capabilities",
    capabilities: [
      "Custom scenic design",
      "Immersive décor",
      "Specialty props",
      "Branded environments",
      "Lighting design",
      "Furniture and lounge environments",
      "Floral design",
      "Entertainment",
      "Interactive experiences",
      "Custom fabrication",
    ],
  },

  entertainment: {
    eyebrow: "Entertainment, Elevated",
    headline:
      "Extraordinary Talent. Immersive Experiences. Unforgettable Moments.",
    paragraphs: [
      "At MME Worldwide, entertainment is more than what your guests see. It is what they feel, experience, and remember.",
      "We curate extraordinary entertainment and immersive experiences designed to transform an event, captivate an audience, and create moments that live far beyond the occasion itself.",
      "From sophisticated corporate celebrations and global brand activations to product launches, conferences, galas, holiday experiences, and private events, every entertainment concept is thoughtfully curated around your brand, audience, environment, and vision.",
      "Our extensive entertainment portfolio brings together exceptional talent and next generation experiences, including specialty performers, dancers, aerialists, acrobats, cirque inspired acts, illusionists, mentalists, musicians, immersive characters, strolling entertainment, casino experiences, carnival and midway attractions, arcade gaming, sports challenges, simulators, virtual reality, interactive technology, team building experiences, and fully customized branded activations.",
      "Whether you are selecting one extraordinary performance or designing an entire entertainment environment, MME Worldwide creates experiences with purpose, energy, and impact.",
    ],
    blocks: [
      {
        eyebrow: "Capture the Moment",
        heading: "Photo, Social & Digital Experiences",
        paragraphs: [
          "Turn a moment into a memory, and a guest into part of the experience.",
          "MME Worldwide creates sophisticated photo, video, AI, and social activations designed to engage guests while generating memorable, shareable content.",
          "From 360 degree video experiences and editorial style glam booths to AI powered photography, GIF and Boomerang activations, green screen environments, roaming photography, digital installations, custom photo moments, and immersive scenic sets, every activation can become an extension of your event or brand.",
          "For corporate events and experiential campaigns, we can customize every detail, from scenic fabrication and branded environments to digital overlays, interactive technology, custom props, personalized content, and social integration.",
          "The result is more than a photograph. It is a branded experience your guests become part of.",
        ],
      },
      {
        eyebrow: "Play, Reimagined",
        heading: "Casino, Carnival & Interactive Experiences",
        paragraphs: [
          "From the timeless sophistication of a private casino to the unexpected energy of a modern carnival, MME Worldwide transforms traditional entertainment into beautifully produced interactive experiences.",
          "Our capabilities include premium casino tables and professional dealers, elevated carnival and midway games, contemporary arcade experiences, interactive challenges, sports activations, simulators, prize experiences, specialty performers, and custom designed attractions.",
          "Every environment can be tailored to complement your event aesthetic, or completely transformed around a brand, theme, destination, or creative concept.",
          "Whether you are looking for one signature attraction or an entire interactive entertainment destination, we manage the experience from beginning to end.",
        ],
      },
      {
        eyebrow: "Curated. Produced. Performed.",
        heading: "Behind Every Unforgettable Moment Is Exceptional Production",
        paragraphs: [
          "MME Worldwide provides a complete entertainment solution encompassing creative direction, talent curation, choreography, casting, custom fabrication, technical production, staging, lighting, audio, equipment, staffing, installation, onsite show management, and strike.",
          "One creative team. One production partner. One seamless experience.",
          "From the first concept to the final applause, every detail is thoughtfully considered and professionally executed.",
        ],
      },
    ],
    closing:
      "Experience Entertainment Differently. Perform. Engage. Play. Capture. Connect.",
    closingNote:
      "MME Worldwide, creating extraordinary experiences one unforgettable moment at a time.",
    capabilitiesHeading: "Curated Entertainment & Immersive Experiences",
    capabilitiesIntro:
      "Exceptional talent. Elevated experiences. Limitless possibilities.",
    capabilities: [
      "Specialty performers and choreographed dance experiences",
      "Aerial artistry, acrobatic performances, and cirque inspired acts",
      "Illusionists, magicians, and mentalists",
      "Strolling artists and immersive character experiences",
      "360 degree video experiences and editorial glam studios",
      "AI powered photo and digital experiences",
      "Interactive GIF, Boomerang, and green screen activations",
      "Luxury casino experiences and professional dealers",
      "Elevated carnival, midway, and contemporary arcade experiences",
      "Interactive sports challenges and immersive simulators",
      "Virtual and extended reality experiences",
      "Curated team building and guest engagement experiences",
      "Bespoke branded entertainment and custom activations",
    ],
    capabilitiesNote:
      "From extraordinary live talent to next generation interactive experiences, MME Worldwide curates every element to captivate, engage, and leave a lasting impression.",
  },

  "specialty-entertainment": {
    eyebrow: "Specialty Entertainment",
    headline: "Extraordinary Talent. Unexpected Moments.",
    paragraphs: [
      "At MME Worldwide, entertainment is more than a performance. It is part of the experience, and it is planned with the same care as the staging, the lighting, and the room itself.",
      "Our Specialty Entertainment Division brings together an extraordinary collection of unique performers, immersive characters, specialty artists, musicians, dancers, and theatrical talent, all selected to transform an event and hold a room.",
      "From the moment guests arrive to the final performance of the evening, our creative team curates entertainment around your brand, your theme, your audience, your venue, and your event vision.",
      "Whether you are producing an intimate private celebration, a luxury wedding, a corporate gala, a product launch, a conference, an experiential activation, or a large scale celebration, MME creates entertainment moments designed to be remembered.",
    ],
    closing:
      "Extraordinary Talent. Unexpected Moments. Unforgettable Experiences.",
    capabilitiesHeading: "Specialty Entertainment Capabilities",
    capabilities: [
      "Aerialists, lyra artists, and silks",
      "Acrobats, contortionists, and hand balancing",
      "Living statues, human tables, and champagne walls",
      "Body painted and mirror performers",
      "Contemporary, ballroom, Latin, and LED dancers",
      "Fire, pixel, glow, and laser performers",
      "Strolling magicians and mentalists",
      "Celebrity impersonators and themed characters",
      "Electric violinists, saxophonists, and string ensembles",
      "Live, digital, caricature, and fashion illustration artists",
      "Custom theatrical productions and original show concepts",
      "Casting, costume direction, and choreography",
      "Show calling and on site talent management",
    ],
  },
};
