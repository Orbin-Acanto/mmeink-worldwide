"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/types";

interface ImageGallerySectionProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

export default function ImageGallerySection({
  images,
  title = "Event Gallery",
  subtitle = "A collection of memorable moments",
}: ImageGallerySectionProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const imagesWithSpans = useMemo(() => {
    return images.map((image, index) => {
      let span = "col-span-1";

      if ((index + 1) % 5 === 0) {
        span = "col-span-2";
      }

      return {
        ...image,
        computedSpan: span,
      };
    });
  }, [images]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <>
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-neutral-900 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
            style={{ gridAutoRows: "400px" }}
          >
            {imagesWithSpans.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden cursor-pointer group ${image.computedSpan}`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-300 z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium z-50">
              {selectedImageIndex + 1} / {images.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-300 z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-300 z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base max-w-2xl text-center">
              {images[selectedImageIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
