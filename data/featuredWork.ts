/**
 * Featured Work copy and imagery for the service pages.
 *
 * This section replaces the Case Studies section on every service page. The
 * case study markup is commented out in each page rather than deleted, so it
 * can be restored once new case study content is ready.
 *
 * Only the "custom-fabrication" entry is client approved. Every other entry is
 * a placeholder built from the same template with the service name swapped in,
 * and all services currently share one image set from /shared/featured. As real
 * copy and imagery arrive per service, replace that entry’s lead, paragraphs and
 * images, moving assets to /services/<slug>/featured/ to match the house layout.
 *
 * House style: no en dashes or em dashes anywhere in client-facing text.
 */

export interface FeaturedWorkImage {
  src: string;
  alt: string;
  /** Eyebrow shown over the image. */
  client: string;
  /** Headline shown over the image. */
  title: string;
}

export interface FeaturedWorkContent {
  /** First half of the H2. */
  title: string;
  /** Second half of the H2, rendered in the brand purple. */
  titleAccent: string;
  /** Line directly under the H2. */
  subtitle: string;
  /** Opening body copy, centered under the subtitle. */
  lead: string;
  /** Body copy rendered as the numbered columns under the carousel. */
  paragraphs: string[];
  /** Closing line, styled as a statement rather than body copy. */
  closing: string;
  images: FeaturedWorkImage[];
}

export const featuredWork: Record<string, FeaturedWorkContent> = {
  "audio-visual": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s audio visual work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/audio-visual/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/audio-visual/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/audio-visual/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/audio-visual/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/audio-visual/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/audio-visual/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "custom-fabrication": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s custom fabrication work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/custom-fabrication/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/custom-fabrication/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/custom-fabrication/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/custom-fabrication/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/custom-fabrication/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/custom-fabrication/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "design-decor": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s design and decor work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/design-decor/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/design-decor/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/design-decor/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/design-decor/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/design-decor/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/design-decor/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "entertainment": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s entertainment work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/entertainment/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/entertainment/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/entertainment/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/entertainment/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/entertainment/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/entertainment/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "lighting": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s lighting work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/lighting/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/lighting/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/lighting/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/lighting/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/lighting/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/lighting/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "logistics": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s logistics work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/logistics/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/logistics/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/logistics/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/logistics/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/logistics/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/logistics/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "musical-entertainment": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s musical entertainment work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/musical-entertainment/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/musical-entertainment/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/musical-entertainment/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/musical-entertainment/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/musical-entertainment/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/musical-entertainment/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "printing": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s printing work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
      {
        src: "/services/printing/featured/camus.jpg",
        alt: "Camus branded bar front with printed black and gold panel graphics",
        client: "Camus",
        title: "Branded Bar Graphics",
      },
      {
        src: "/services/printing/featured/estee-lauder.jpg",
        alt: "The Estée Edit curved wall with printed collage graphics and brand lettering",
        client: "Estée Lauder",
        title: "The Estée Edit Wall Graphics",
      },
      {
        src: "/services/printing/featured/freedom-chess.jpg",
        alt: "FIDE World Rapid and Blitz Championships printed sponsor backdrop with chess artwork",
        client: "FIDE World Championships",
        title: "Printed Sponsor Backdrop",
      },
      {
        src: "/services/printing/featured/lebron-james.jpg",
        alt: "Retail display installation with printed silhouette wall graphics and lit product niches",
        client: "LeBron James",
        title: "Retail Display Graphics",
      },
      {
        src: "/services/printing/featured/michael-jordan.jpg",
        alt: "Hotel lobby hedge wall with the Jumpman logo applied over printed brand graphics",
        client: "Jordan Brand",
        title: "Lobby Hedge Wall Logo",
      },
      {
        src: "/services/printing/featured/money-channel.jpg",
        alt: "Printed pull up banners and table graphics for an investor summit exhibit floor",
        client: "Money Channel",
        title: "Event Banner Printing",
      },
      {
        src: "/services/printing/featured/swiss.jpg",
        alt: "Swiss Re printed welcome wall with large format lettering above a reception counter",
        client: "Swiss Re",
        title: "Printed Welcome Wall",
      },
      {
        src: "/services/printing/featured/ymca.jpg",
        alt: "YMCA retractable banner series with printed portraits lining an event corridor",
        client: "YMCA",
        title: "Retractable Banner Series",
      },
    ],
  },
  "props": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s props work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/props/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/props/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/props/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/props/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/props/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/props/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "rentals": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s rentals work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/rentals/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/rentals/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/rentals/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/rentals/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/rentals/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/rentals/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "specialty-entertainment": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s specialty entertainment work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/specialty-entertainment/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/specialty-entertainment/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/specialty-entertainment/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/specialty-entertainment/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/specialty-entertainment/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/specialty-entertainment/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "staging": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s staging work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/staging/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/staging/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/staging/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/staging/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/staging/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/staging/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
  "themes": {
    title: "Featured",
    titleAccent: "Work",
    subtitle: "From Vision to Reality",
    lead: "Explore a selection of MME Worldwide’s themes work, where bold ideas are transformed into exceptional physical experiences.",
    paragraphs: [
      "From initial concept and creative development through design, engineering, fabrication, finishing, installation, and final execution, every project reflects our commitment to craftsmanship, innovation, and detail.",
      "Working alongside leading brands, agencies, designers, and creative teams, MME brings complex visions to life through custom-built environments, experiential activations, scenic installations, branded spaces, and one-of-a-kind experiences.",
    ],
    closing: "One vision. One creative partner. From concept to completion.",
    images: [
    {
      src: "/services/themes/featured/persol.jpg",
      alt: "Persol pop up kiosk with custom signpost and display shelving on the Brooklyn waterfront",
      client: "Persol",
      title: "Brooklyn Waterfront Pop Up",
    },
    {
      src: "/services/themes/featured/clase-azul.jpg",
      alt: "Clase Azul fluted navy and gold bar with glass display shelving at an outdoor activation",
      client: "Clase Azul",
      title: "Outdoor Tasting Bar",
    },
    {
      src: "/services/themes/featured/buzzworthy.jpg",
      alt: "Buzzworthy branded kiosk with illuminated hexagonal backdrop and custom counter",
      client: "Buzzworthy",
      title: "Hexagonal Activation Kiosk",
    },
    {
      src: "/services/themes/featured/skullcandy.jpg",
      alt: "Skullcandy arch installation with radiating linear lighting and a custom display plinth",
      client: "Skullcandy",
      title: "Illuminated Arch Installation",
    },
    {
      src: "/services/themes/featured/amc.jpg",
      alt: "Acne Studios pink Acne Paper kiosk with custom shelving displaying publications outdoors",
      client: "Acne Studios",
      title: "Acne Paper Autoportrait Kiosk",
    },
    {
      src: "/services/themes/featured/maelys.jpg",
      alt: "Maelys retail launch display with custom branded counter and oversized product graphic",
      client: "Maelys",
      title: "Retail Product Launch Display",
    },
    ],
  },
};
