"use client";

import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export default function StatItem({
  value,
  label,
  prefix = "",
  suffix = "",
  animate = false,
  delay = 0,
  className = "",
}: StatItemProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [animate, delay]);

  return (
    <div
      className={`
        text-center 
        transition-all duration-500
        ${
          shouldAnimate
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }
        ${className}
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-center mb-3 sm:mb-4">
        {prefix && (
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mr-1 sm:mr-2">
            {prefix}
          </span>
        )}

        {shouldAnimate ? (
          <NumberTicker
            value={value}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tighter"
          />
        ) : (
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tighter">
            0
          </span>
        )}

        {suffix && (
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black ml-1 sm:mr-2">
            {suffix}
          </span>
        )}
      </div>

      <p className="text-sm sm:text-base lg:text-lg text-purple font-medium ml-12">
        {label}
      </p>
    </div>
  );
}
