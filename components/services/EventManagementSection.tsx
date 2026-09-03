"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  ClipboardList,
  MapPinned,
  Radio,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface Pillar {
  id: string;
  title: string;
  description: string;
  points: string[];
}

interface Metric {
  value: string;
  suffix: string;
  label: string;
}

interface EventManagementSectionProps {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: Pillar[];
  metrics: Metric[];
  image: string;
  supportImage: string;
  ctaHref?: string;
  ctaText?: string;
}

/** One icon per pillar, keyed by the pillar id the data layer supplies. */
const PILLAR_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  planning: ClipboardList,
  venue: MapPinned,
  "run-of-show": Radio,
  onsite: CalendarCheck,
};

/**
 * Event Management band on the Logistics page.
 *
 * Logistics answers how the event gets there. This answers who runs it once it
 * arrives, which is the question most enquiries actually open with, so the
 * copy is deliberately plain and the pillar lists are visible rather than
 * hidden behind tabs.
 */
export default function EventManagementSection({
  eyebrow,
  title,
  intro,
  pillars,
  metrics,
  image,
  supportImage,
  ctaHref = "/contact",
  ctaText = "Talk to an Event Manager",
}: EventManagementSectionProps) {
  return (
    <section
      id="event-management"
      className="relative w-full overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative brand geometry. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-20 h-[30rem] w-[30rem] rounded-full bg-purple/8 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-cyan/8 blur-3xl" />
        <div className="absolute right-1/4 top-16 hidden h-24 w-24 border-2 border-purple/10 lg:block" />
        <div className="absolute left-1/4 bottom-24 hidden h-16 w-16 rounded-full border-2 border-cyan/15 lg:block" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#54565a 1px, transparent 1px), linear-gradient(90deg, #54565a 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-8">
        {/* Header + imagery */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="inline-block bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
              {eyebrow}
            </span>

            <h2 className="mt-6 text-3xl font-bold uppercase leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
              {intro}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {metrics.map((metric) => {
                const numeric = Number(metric.value);

                return (
                  <div key={metric.label}>
                    <dt className="sr-only">{metric.label}</dt>
                    <dd>
                      <span className="block text-3xl font-bold text-purple sm:text-4xl lg:text-5xl">
                        {Number.isFinite(numeric) ? (
                          <NumberTicker value={numeric} />
                        ) : (
                          metric.value
                        )}
                        <span className="text-cyan">{metric.suffix}</span>
                      </span>
                      <span className="mt-2 block text-xs leading-snug text-gray-600 sm:text-sm">
                        {metric.label}
                      </span>
                    </dd>
                  </div>
                );
              })}
            </dl>

            <Link
              href={ctaHref}
              className="group mt-10 inline-flex items-center gap-3 bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-purple sm:text-sm"
            >
              {ctaText}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={image}
                  alt="MME Worldwide event manager coordinating a live event load in"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Offset support image, hidden on small screens where it would crowd. */}
              <div className="absolute -bottom-10 -left-6 hidden aspect-square w-40 overflow-hidden border-4 border-gray-50 shadow-2xl sm:block lg:w-52">
                <Image
                  src={supportImage}
                  alt="Production crew working through an MME Worldwide run of show"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 14vw"
                />
              </div>

              <div className="absolute -right-3 -top-3 h-20 w-20 border-r-4 border-t-4 border-cyan lg:h-28 lg:w-28" />
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-6 sm:mt-24 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.id] ?? ClipboardList;

            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group relative flex h-full flex-col border-t-4 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-purple hover:shadow-2xl sm:p-7"
              >
                <span className="absolute right-5 top-5 text-4xl font-bold leading-none text-gray-100 transition-colors duration-300 group-hover:text-purple/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-12 w-12 items-center justify-center bg-purple/10 transition-colors duration-300 group-hover:bg-purple">
                  <Icon className="h-6 w-6 text-purple transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="relative z-10 mt-6 text-base font-bold uppercase leading-snug tracking-tight text-black sm:text-lg">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-700 sm:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-cyan"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
