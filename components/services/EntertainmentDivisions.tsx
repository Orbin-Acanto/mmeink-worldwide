"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  Plus,
  X,
  ZoomIn,
} from "lucide-react";

interface DivisionPhoto {
  src: string;
  alt: string;
}

interface Division {
  id: string;
  icon: LucideIcon;
  blurb: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  featuring: string[];
  footnote?: string;
  image: string;
  gallery: DivisionPhoto[];
}

interface EntertainmentDivisionsProps {
  /** Static, white half of the heading. */
  headingPrefix: string;
  /** Typed half, cycled in the brand gradient. */
  headingPhrases: string[];
  divisions: Division[];
}

/**
 * The eight talent divisions, as a grid of cards that each open a modal.
 *
 * The card carries only the photograph, the division name, and the way in, so
 * the eight read as one set at a glance. Everything a visitor searching for
 * "aerial champagne service" or "LED dancers" needs sits in the modal, along
 * with that division's photographs.
 *
 * Every panel stays mounted so its copy is in the markup for crawlers and is
 * readable without JavaScript, but a panel's photographs are only mounted once
 * it has been opened. Without that, all seventy six images would be requested
 * on first paint for a section where most visitors open one division at most.
 */
export default function EntertainmentDivisions({
  headingPrefix,
  headingPhrases,
  divisions,
}: EntertainmentDivisionsProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  /** Divisions opened at least once, so their photographs stay in the DOM. */
  const [loadedIds, setLoadedIds] = useState<string[]>([]);
  /** Index into the open division's gallery, or null when the viewer is shut. */
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const openDivision = useCallback((id: string) => {
    setOpenId(id);
    setViewerIndex(null);
    setLoadedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const closeDivision = useCallback(() => {
    setViewerIndex(null);
    setOpenId((current) => {
      // Hand focus back to the card that opened the panel, so keyboard and
      // screen reader users resume where they left the grid.
      if (current) cardRefs.current[current]?.focus();
      return null;
    });
  }, []);

  const openDivisionData = divisions.find((d) => d.id === openId) ?? null;
  const galleryLength = openDivisionData?.gallery.length ?? 0;

  const stepViewer = useCallback(
    (delta: number) => {
      setViewerIndex((current) => {
        if (current === null || galleryLength === 0) return current;
        return (current + delta + galleryLength) % galleryLength;
      });
    },
    [galleryLength]
  );

  /* Lock the page behind the panel, and restore whatever was there before. */
  useEffect(() => {
    if (!openId) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [openId]);

  /* Move focus into the panel when it opens. */
  useEffect(() => {
    if (!openId) return;
    closeRefs.current[openId]?.focus();
  }, [openId]);

  /* Escape steps back one layer at a time: viewer first, then the panel. */
  useEffect(() => {
    if (!openId) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (viewerIndex !== null) {
        if (event.key === "Escape") setViewerIndex(null);
        if (event.key === "ArrowLeft") stepViewer(-1);
        if (event.key === "ArrowRight") stepViewer(1);
        return;
      }
      if (event.key === "Escape") closeDivision();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openId, viewerIndex, stepViewer, closeDivision]);

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Ambient brand wash. Purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-purple/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-8">
        {/* Heading, centred. Same treatment as the home page band: a static
            word in white, then the subject typed in the brand gradient. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-center sm:mb-16"
        >
          {/* The visible text is mid-keystroke most of the time, so the
              accessible name is the finished heading instead. */}
          <h2
            className="cta-heading mb-0 text-center"
            aria-label={`${headingPrefix} ${headingPhrases[0]}`}
          >
            <span className="text-white">{headingPrefix} </span>
            {/* On a phone the longest phrase wraps, so the heading would grow
                from one line to two and back as it types, shunting the grid up
                and down. Below sm the typed word gets its own line and the
                height stays put. */}
            <span className="block min-w-5 text-center sm:inline-block">
              <TypingText
                text={headingPhrases}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="gradient-text"
                variableSpeed={{ min: 50, max: 120 }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={division.id}
                id={division.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 4) * 0.08, duration: 0.55 }}
                className="h-full"
              >
                {/* The whole card is the control, so there is one focus stop
                    per division rather than an image and a button that do the
                    same thing. */}
                <button
                  type="button"
                  ref={(node) => {
                    cardRefs.current[division.id] = node;
                  }}
                  onClick={() => openDivision(division.id)}
                  aria-haspopup="dialog"
                  aria-expanded={openId === division.id}
                  className="group flex h-full w-full cursor-pointer flex-col border border-white/10 bg-white/[0.03] text-left backdrop-blur-sm transition-colors duration-300 hover:border-purple-light/60 focus-visible:border-cyan focus-visible:outline-hidden"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={division.image}
                      alt={`${division.eyebrow} produced by MME Worldwide`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
                  </div>

                  {/* The icon straddles the seam between the image and the copy.
                      It lives here rather than inside the image, because that
                      wrapper clips to the crop. */}
                  <span className="relative z-10 -mt-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-purple-light/70 bg-black transition-colors duration-300 group-hover:border-cyan">
                    <Icon
                      className="h-5 w-5 text-purple-light transition-colors duration-300 group-hover:text-cyan"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-5 text-center">
                    <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base">
                      {division.eyebrow}
                    </h3>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-purple-light transition-colors duration-300 group-hover:text-cyan">
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      Learn more
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {divisions.map((division) => {
        const isOpen = openId === division.id;
        const showPhotos = loadedIds.includes(division.id);
        const viewerPhoto =
          isOpen && viewerIndex !== null ? division.gallery[viewerIndex] : null;

        return (
          <Fragment key={`${division.id}-panel`}>
            <div
              role="dialog"
              aria-modal={isOpen}
              aria-labelledby={`${division.id}-panel-title`}
              aria-hidden={!isOpen}
              className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-md transition-opacity duration-300 sm:p-6 lg:p-10 ${
                isOpen
                  ? "visible opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }`}
              onClick={closeDivision}
            >
              <div
                className={`relative my-auto w-full max-w-5xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60 transition-transform duration-300 ${
                  isOpen ? "translate-y-0" : "translate-y-4"
                }`}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  ref={(node) => {
                    closeRefs.current[division.id] = node;
                  }}
                  onClick={closeDivision}
                  aria-label={`Close ${division.eyebrow}`}
                  className="absolute right-3 top-3 z-20 flex h-10 w-10 cursor-pointer items-center justify-center border border-white/15 bg-black/60 text-white transition-colors duration-300 hover:border-cyan hover:text-cyan focus-visible:border-cyan focus-visible:outline-hidden sm:right-4 sm:top-4"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>

                <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-h-[calc(100dvh-3rem)] lg:max-h-[calc(100dvh-5rem)]">
                  <div className="px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8 lg:px-10">
                    <p
                      id={`${division.id}-panel-title`}
                      className="pr-12 text-base font-bold uppercase leading-snug tracking-wide text-white sm:text-lg"
                    >
                      {division.eyebrow}
                    </p>

                    <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-cyan">
                      {division.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                      {division.blurb}
                    </p>

                    {division.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className="mt-3 text-sm leading-relaxed text-gray-300"
                      >
                        {paragraph}
                      </p>
                    ))}

                    <h4 className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Featuring
                    </h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {division.featuring.map((item) => (
                        <li
                          key={item}
                          className="border border-white/15 px-2.5 py-1 text-xs text-gray-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {division.footnote && (
                      <p className="mt-4 text-xs italic leading-relaxed text-gray-500">
                        {division.footnote}
                      </p>
                    )}

                    <h4 className="mt-8 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Gallery
                    </h4>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
                      {division.gallery.map((photo, photoIndex) => (
                        <button
                          key={photo.src}
                          type="button"
                          onClick={() => setViewerIndex(photoIndex)}
                          aria-label={`View full size: ${photo.alt}`}
                          className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden border border-white/10 transition-colors duration-300 hover:border-purple-light/60 focus-visible:border-cyan focus-visible:outline-hidden"
                        >
                          {showPhotos && (
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                            />
                          )}
                          {/* Wash on hover, for pointers. */}
                          <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 group-focus-visible:bg-black/40" />
                          {/* The badge stays put rather than appearing on
                              hover, because a touch device never hovers and
                              would otherwise get no hint that a thumbnail
                              opens the viewer. */}
                          <span className="pointer-events-none absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center bg-black/60 text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                            <ZoomIn
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The viewer is a sibling of the panel rather than a child of it.
              Nested, every click inside it would bubble to the panel backdrop
              and close the division as well as the photograph. */}
            {viewerPhoto && (
              <div
                className="fixed inset-0 z-60 flex items-center justify-center bg-black/95"
                onClick={() => setViewerIndex(null)}
              >
                <button
                  type="button"
                  onClick={() => setViewerIndex(null)}
                  aria-label="Close image viewer"
                  className="absolute right-4 top-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:right-6 sm:top-6"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>

                <p className="absolute left-4 top-4 z-10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm sm:left-6 sm:top-6">
                  {(viewerIndex ?? 0) + 1} of {division.gallery.length}
                </p>

                {division.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        stepViewer(-1);
                      }}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14"
                    >
                      <ChevronLeft
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        stepViewer(1);
                      }}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:h-14 sm:w-14"
                    >
                      <ChevronRight
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </button>
                  </>
                )}

                <div
                  className="relative h-[62dvh] w-[92vw] max-w-6xl sm:h-[72dvh] sm:w-[90vw] lg:h-[80dvh]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    src={viewerPhoto.src}
                    alt={viewerPhoto.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>

                <p className="absolute bottom-4 left-1/2 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 bg-white/10 px-4 py-2.5 text-center text-xs text-white backdrop-blur-sm sm:w-auto sm:px-6 sm:py-3 sm:text-base">
                  {viewerPhoto.alt}
                </p>
              </div>
            )}
          </Fragment>
        );
      })}
    </section>
  );
}
