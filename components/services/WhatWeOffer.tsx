import React from "react";

interface ServiceCard {
  id: string;
  title: string;
  /** Still image, or a silent clip when the tile is motion. */
  image: string;
  /** Only read for ungrouped rows, where each card is its own tile. */
  width?: "sm" | "md" | "lg" | "xl";
}

interface WhatWeOfferProps {
  title: string;
  subtitle?: string;
  topRow: ServiceCard[];
  bottomRow: ServiceCard[];
  /**
   * Slot sizes for each row, read left to right: 1 is a single card filling
   * the row height, 2 is a pair stacked inside one slot. The numbers must add
   * up to the length of their row. Omit them and every card is its own tile at
   * the width its data asks for, which is what the other service pages do.
   */
  topRowSlots?: number[];
  bottomRowSlots?: number[];
}

const widthClasses = {
  sm: "w-[280px] sm:w-[320px]",
  md: "w-[340px] sm:w-[400px]",
  lg: "w-[380px] sm:w-[460px]",
  xl: "w-[420px] sm:w-[520px]",
};

/** Height of a marquee row. A cluster fills it, same as a single tile. */
const ROW_HEIGHT = "h-60 sm:h-[280px] lg:h-80";

/**
 * The picture itself, filling whatever box it is handed.
 *
 * A card whose source is a clip renders a muted, looping video: the fire tile
 * started life as an animated GIF that weighed 7.8MB, and the same ten seconds
 * as H.264 is under 0.9MB.
 */
const OfferMedia: React.FC<{ card: ServiceCard }> = ({ card }) => {
  const isVideo = /\.(mp4|webm)$/i.test(card.image);
  const mediaClass =
    "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500";

  return (
    <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
      {isVideo ? (
        <video
          src={card.image}
          className={mediaClass}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={card.title}
        />
      ) : (
        <img src={card.image} alt={card.title} className={mediaClass} />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
          <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold drop-shadow-lg">
            {card.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/** One card on its own, at the width the data asked for. */
const SoloTile: React.FC<{ card: ServiceCard }> = ({ card }) => (
  <div
    className={`${widthClasses[card.width ?? "md"]} ${ROW_HEIGHT} shrink-0 mx-2 sm:mx-3`}
  >
    <OfferMedia card={card} />
  </div>
);

/**
 * One slot in a row: either a single card filling the row height, or a pair
 * stacked one above the other. A full height slot is wider than a stacked one,
 * so a clip reads as the main event and a paired still as supporting.
 */
const Slot: React.FC<{ cards: ServiceCard[] }> = ({ cards }) => {
  const stacked = cards.length > 1;

  return (
    <div
      className={`${ROW_HEIGHT} shrink-0 mx-2 sm:mx-3 ${
        stacked
          ? "flex flex-col gap-2 sm:gap-3 w-[180px] sm:w-[230px] lg:w-[270px]"
          : "w-[280px] sm:w-[360px] lg:w-[420px]"
      }`}
    >
      {cards.map((card) => (
        <div key={card.id} className={stacked ? "min-h-0 flex-1" : "h-full"}>
          <OfferMedia card={card} />
        </div>
      ))}
    </div>
  );
};

/** Cuts a row into slots of the given sizes. */
const toSlots = (cards: ServiceCard[], sizes: number[]) => {
  const slots: ServiceCard[][] = [];
  let i = 0;
  for (const size of sizes) {
    if (i >= cards.length) break;
    slots.push(cards.slice(i, i + size));
    i += size;
  }
  // Anything the sizes did not account for still gets shown, one per slot.
  while (i < cards.length) slots.push([cards[i++]]);
  return slots;
};

/**
 * One marquee row, laid out four times over.
 *
 * The row is cut into slots BEFORE it is repeated, so every copy is identical.
 * The animation travels exactly one copy per cycle, which means anything that
 * makes the copies differ shows up as a tick at the seam.
 */
const Row: React.FC<{
  cards: ServiceCard[];
  slots?: number[];
  direction: "left" | "right";
}> = ({ cards, slots, direction }) => {
  const animation =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
  const COPIES = [0, 1, 2, 3];

  if (!slots || slots.length === 0) {
    return (
      <div className={`flex w-max ${animation}`}>
        {COPIES.flatMap((copy) =>
          cards.map((card) => (
            <SoloTile key={`${copy}-${card.id}`} card={card} />
          ))
        )}
      </div>
    );
  }

  const laid = toSlots(cards, slots);

  return (
    <div className={`flex w-max ${animation}`}>
      {COPIES.flatMap((copy) =>
        laid.map((group) => (
          <Slot key={`${copy}-${group[0].id}`} cards={group} />
        ))
      )}
    </div>
  );
};

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({
  subtitle,
  topRow,
  bottomRow,
  topRowSlots,
  bottomRowSlots,
}) => {
  return (
    <section className="bg-gray-50 py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl">
          What <span className="text-purple">We Offer</span>
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>

      <div className="relative mb-6 sm:mb-8">
        <Row cards={topRow} slots={topRowSlots} direction="left" />
      </div>

      <div className="relative">
        <Row cards={bottomRow} slots={bottomRowSlots} direction="right" />
      </div>
    </section>
  );
};

export default WhatWeOffer;
