"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { EventDetailsImageSlider } from "@/types";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

interface EventDetailsProps {
  images: EventDetailsImageSlider[];
  title?: string;
  subtitle?: string;
}

export default function EventDetailsSection({
  images,
  title = "The Event Highlights",
  subtitle = "Unforgettable moments captured in stunning detail",
}: EventDetailsProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const [active, setActive] = useState(0);

  const [layout, setLayout] = useState({
    viewportW: 0,
    slideW: 0,
    gap: 24,
    centerOffset: 0,
    step: 0,
    minX: 0,
    maxX: 0,
  });

  const computeAndSetLayout = () => {
    const el = viewportRef.current;
    if (!el) return;

    const viewportW = el.clientWidth;
    const isMobile = viewportW < 640;

    const gap = isMobile ? 14 : 24;
    const factor = isMobile ? 0.92 : 0.68;

    const slideW = clamp(
      viewportW * factor,
      isMobile ? 260 : 520,
      isMobile ? 640 : 1200
    );
    const centerOffset = (viewportW - slideW) / 2;
    const step = slideW + gap;

    const maxX = centerOffset;
    const minX = centerOffset - (images.length - 1) * step;

    setLayout({ viewportW, slideW, gap, centerOffset, step, minX, maxX });
  };

  const snapTo = (index: number) => {
    const i = clamp(index, 0, images.length - 1);
    const target = layout.centerOffset - i * layout.step;
    animate(x, target, {
      type: "spring",
      stiffness: 420,
      damping: 42,
      mass: 0.9,
    });
    setActive(i);
  };

  useEffect(() => {
    computeAndSetLayout();
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => computeAndSetLayout());
    ro.observe(el);

    return () => ro.disconnect();
  }, [images.length]);

  useEffect(() => {
    if (!layout.viewportW) return;
    snapTo(active);
  }, [layout.viewportW, layout.slideW, layout.gap]);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mb-6 px-4 text-center sm:mb-10 sm:px-6 md:mb-14">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:mb-3 sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg lg:text-xl">
          {subtitle}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-[64px_1fr] md:grid-cols-[80px_1fr]">
        <div className="relative hidden sm:block">
          <div className="sticky top-10 flex h-[60vh] items-center justify-center sm:h-[25vh] md:h-[40vh] lg:h-[55vh] xl:h-[65vh]">
            <div
              className="select-none text-sm tracking-[0.2em] text-neutral-500 dark:text-neutral-400"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              The Event Highlights
            </div>
          </div>
        </div>

        <div className="relative flex items-center">
          <div
            ref={viewportRef}
            className="relative h-[26vh] w-full overflow-hidden sm:h-[25vh] md:h-[40vh] lg:h-[55vh] xl:h-[65vh]"
          >
            <motion.div
              className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center"
              style={{ x, gap: layout.gap }}
              drag="x"
              dragConstraints={{ left: layout.minX, right: layout.maxX }}
              dragElastic={0.12}
              whileHover={{ cursor: "grab" }}
              whileTap={{ cursor: "grabbing" }}
              onDragEnd={(_, info) => {
                const currentX = x.get();
                const base = Math.round(
                  (layout.centerOffset - currentX) / layout.step
                );

                let next = base;
                if (info.velocity.x < -600) next = base + 1;
                if (info.velocity.x > 600) next = base - 1;

                snapTo(clamp(next, 0, images.length - 1));
              }}
            >
              {images.map((img, i) => (
                <div
                  key={img.id}
                  className="relative shrink-0 overflow-hidden"
                  style={{
                    width: layout.slideW || "78%",
                    aspectRatio: "16 / 9",
                    boxShadow:
                      i === active
                        ? "0 18px 50px rgba(0,0,0,0.18)"
                        : "0 10px 30px rgba(0,0,0,0.10)",
                  }}
                  aria-hidden={i !== active}
                >
                  <img
                    src={img.image}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    draggable={false}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
