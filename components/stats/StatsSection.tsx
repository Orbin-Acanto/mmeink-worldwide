"use client";
import StatItem from "./StatItem";
import StatsTitle from "./StatsTitle";
import { useInView } from "react-intersection-observer";

interface Stat {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsSectionProps {
  title: string;
  highlightedText?: string;
  stats: Stat[];
  className?: string;
}

export default function StatsSection({
  title,
  highlightedText,

  stats,
  className = "",
}: StatsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className={`bg-gray-50 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <StatsTitle title={title} highlightedText={highlightedText} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.id}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                animate={inView}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
