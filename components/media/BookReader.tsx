"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Expand,
  Printer,
  Share2,
  X,
} from "lucide-react";

export interface BookPage {
  id: number;
  image: string;
  alt?: string;
}

interface BookReaderProps {
  pages: BookPage[];
  title: string;
  subtitle?: string;
  /** Path to the print ready PDF. Omit and the download button disappears. */
  downloadUrl?: string;
  /** When set, a share button copies `{origin}{shareUrl}` to the clipboard. */
  shareUrl?: string;
  className?: string;
}

interface FlipBookHandle {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    turnToPage: (page: number) => void;
  };
}

/* react-pageflip needs each child to accept a forwarded ref. */
const Page = React.forwardRef<
  HTMLDivElement,
  { image: string; alt: string; pageNumber: number; isCover: boolean }
>(({ image, alt, pageNumber, isCover }, ref) => (
  <div ref={ref} className="relative h-full w-full bg-white shadow-xl">
    {/* Plain img rather than next/image: the flip library measures its own
        page boxes on mount and a fill layout fights it. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={image}
      alt={alt}
      className="h-full w-full object-cover"
      draggable={false}
    />
    {!isCover && (
      <span className="absolute bottom-2 right-4 bg-black/45 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
        {pageNumber}
      </span>
    )}
  </div>
));
Page.displayName = "BookReaderPage";

/**
 * Page turning brochure reader.
 *
 * Two independent flip books are rendered, one inline and one for the
 * fullscreen overlay, because the library sizes itself once on mount and
 * cannot be resized in place. `currentPage` is kept in sync between them so
 * opening or closing fullscreen keeps the reader on the same spread.
 */
export default function BookReader({
  pages,
  title,
  subtitle,
  downloadUrl,
  shareUrl,
  className = "",
}: BookReaderProps) {
  const inlineRef = useRef<FlipBookHandle | null>(null);
  const fullscreenRef = useRef<FlipBookHandle | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  /** Fullscreen sizes off the real window, so the controls never fall off. */
  const [viewportHeight, setViewportHeight] = useState(900);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const totalPages = pages.length;

  const nextPage = useCallback(() => {
    const active = isFullscreen ? fullscreenRef : inlineRef;
    active.current?.pageFlip()?.flipNext();
  }, [isFullscreen]);

  const prevPage = useCallback(() => {
    const active = isFullscreen ? fullscreenRef : inlineRef;
    active.current?.pageFlip()?.flipPrev();
  }, [isFullscreen]);

  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  const handleShare = useCallback(async () => {
    if (!shareUrl) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const link = `${origin}${shareUrl}`;

    try {
      if (navigator.share && isMobile) {
        await navigator.share({ title, url: link });
        return;
      }
      await navigator.clipboard.writeText(link);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Clipboard is blocked on insecure origins, so surface the link rather
      // than failing silently.
      window.prompt("Copy this brochure link:", link);
    }
  }, [shareUrl, title, isMobile]);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1024);
      setViewportHeight(window.innerHeight);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextPage();
      if (event.key === "ArrowLeft") prevPage();
      if (event.key === "Escape" && isFullscreen) closeFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextPage, prevPage, isFullscreen, closeFullscreen]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // Hand the newly mounted book the page the other one was showing.
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = isFullscreen ? fullscreenRef : inlineRef;
      try {
        target.current?.pageFlip()?.turnToPage(currentPage);
      } catch {
        // The book has not finished mounting. The next flip syncs it anyway.
      }
    }, 120);
    return () => clearTimeout(timer);
  }, [isFullscreen, currentPage]);

  /**
   * Page geometry. Portrait pages at roughly 17:22, which is the shape of a
   * US Letter brochure page, and the ratio the placeholder artwork is cut at.
   */
  const PAGE_RATIO = 17 / 22;

  /** Width the frame must be capped at for the derived height to fit. */
  const frameWidth = (fullscreen: boolean) => {
    const height = pageHeight(fullscreen);
    const pages = isMobile ? 1 : 2;
    return Math.round(height * PAGE_RATIO * pages);
  };

  const pageHeight = (fullscreen: boolean) =>
    fullscreen
      ? Math.max(360, Math.min(viewportHeight - 190, 1100))
      : isMobile
        ? 460
        : 712;

  const flipBookProps = (fullscreen: boolean) => {
    // Fullscreen leaves room for the close button and the pager beneath the
    // book. Inline uses a fixed comfortable height.
    const height = pageHeight(fullscreen);
    const width = Math.round(height * PAGE_RATIO);

    return {
      size: "stretch" as const,
      width,
      height,
      minWidth: Math.round(width * 0.5),
      maxWidth: width,
      minHeight: Math.round(height * 0.5),
      maxHeight: height,
      drawShadow: true,
      flippingTime: 900,
      usePortrait: isMobile,
      startZIndex: 0,
      autoSize: true,
      maxShadowOpacity: 0.5,
      showCover: true,
      mobileScrollSupport: true,
      clickEventForward: true,
      useMouseEvents: true,
      swipeDistance: 30,
      showPageCorners: true,
      disableFlipByClick: false,
      onFlip: (event: { data: number }) => setCurrentPage(event.data),
      className: "mme-flip-book",
      style: {},
      startPage: 0,
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    } as any;
  };

  const renderPages = (keyPrefix: string) =>
    pages.map((page, index) => (
      <Page
        key={`${keyPrefix}-${page.id}`}
        image={page.image}
        alt={page.alt || `${title}, page ${index + 1}`}
        pageNumber={index + 1}
        isCover={index === 0 || index === pages.length - 1}
      />
    ));

  const toolButton =
    "flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-300 bg-white text-black shadow-lg transition-colors duration-300 hover:border-purple hover:bg-purple hover:text-white";

  const navButton =
    "flex h-12 w-12 items-center justify-center bg-purple text-white shadow-lg transition-colors duration-300 hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <div className={`w-full bg-gray-50 ${className}`}>
      <div className="mx-auto max-w-[1800px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-purple sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="relative">
          {/* Toolbar */}
          <div className="mb-6 flex justify-center gap-2 sm:absolute sm:right-0 sm:top-0 sm:z-30 sm:mb-0 sm:justify-end">
            {shareUrl && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleShare}
                className={`relative ${toolButton}`}
                title="Copy a link to this brochure"
                aria-label="Copy a link to this brochure"
              >
                <Share2 className="h-5 w-5" />
                {shareCopied && (
                  <span className="pointer-events-none absolute right-0 top-12 z-40 whitespace-nowrap bg-black px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                    Link copied
                  </span>
                )}
              </motion.button>
            )}

            {downloadUrl && (
              <>
                <motion.a
                  href={downloadUrl}
                  download
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-10 w-10 items-center justify-center border border-purple bg-purple text-white shadow-lg transition-colors duration-300 hover:bg-cyan hover:border-cyan"
                  title="Download the PDF"
                  aria-label="Download the PDF"
                >
                  <Download className="h-5 w-5" />
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => window.open(downloadUrl, "_blank")}
                  className={toolButton}
                  title="Open a print ready version"
                  aria-label="Open a print ready version"
                >
                  <Printer className="h-5 w-5" />
                </motion.button>
              </>
            )}

            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsFullscreen(true)}
              className={toolButton}
              title="View fullscreen"
              aria-label="View fullscreen"
            >
              <Expand className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Inline book.
              The library measures its own page boxes on mount, so the wrapper
              is a plain, always visible flex box: an entrance animation that
              starts at opacity zero would let it measure against a hidden
              element and the spread would never appear. */}
          <div
            className="mme-flip-book-frame flex justify-center sm:pt-14"
            style={{ maxWidth: frameWidth(false) }}
          >
            <HTMLFlipBook ref={inlineRef} {...flipBookProps(false)}>
              {renderPages("inline")}
            </HTMLFlipBook>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6 sm:gap-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={prevPage}
              disabled={currentPage === 0}
              className={navButton}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <p className="flex items-baseline gap-2 text-sm text-gray-600">
              <span className="text-lg font-bold text-black">
                {currentPage + 1}
                {currentPage !== 0 &&
                  currentPage !== totalPages - 1 &&
                  ` to ${currentPage + 2}`}
              </span>
              <span className="uppercase tracking-[0.2em]">of</span>
              <span className="text-lg font-bold text-black">{totalPages}</span>
            </p>

            <motion.button
              type="button"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={nextPage}
              disabled={currentPage >= totalPages - 1}
              className={navButton}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-gray-500">
            Drag a page corner, or use the arrow keys
          </p>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeFullscreen();
          }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center p-4 md:p-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.94 }}
              onClick={closeFullscreen}
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center bg-white text-black shadow-2xl transition-colors duration-300 hover:bg-purple hover:text-white"
              title="Close fullscreen"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div
              className="mme-flip-book-frame mb-6 flex justify-center"
              style={{ maxWidth: frameWidth(true) }}
            >
              <HTMLFlipBook ref={fullscreenRef} {...flipBookProps(true)}>
                {renderPages("fullscreen")}
              </HTMLFlipBook>
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <motion.button
                type="button"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={prevPage}
                disabled={currentPage === 0}
                className={navButton}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <p className="flex items-baseline gap-2 bg-white/10 px-4 py-2 text-sm text-white">
                <span className="text-base font-bold">{currentPage + 1}</span>
                <span className="uppercase tracking-[0.2em]">of</span>
                <span className="text-base font-bold">{totalPages}</span>
              </p>

              <motion.button
                type="button"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.94 }}
                onClick={nextPage}
                disabled={currentPage >= totalPages - 1}
                className={navButton}
                aria-label="Next page"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
