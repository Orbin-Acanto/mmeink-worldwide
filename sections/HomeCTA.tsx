"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

interface CTASectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function HomeCTA({
  backgroundImage,
  title,
  subtitle,
  description,
  primaryButton,
  className = "",
}: CTASectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const windowMiddle = window.innerHeight / 2;

        const offset = (windowMiddle - sectionMiddle) * 0.8;
        setOffsetY(offset);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-[50vh] min-h-[400px] overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 w-full h-[200%] -top-[25%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offsetY}px) translateZ(0)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          {subtitle && (
            <p className="cta-label animate-fadeIn">
              {subtitle}
            </p>
          )}

          <h1 className="cta-heading">
            {title}
          </h1>

          <p className="cta-body animate-fadeIn animation-delay-200">
            {description}
          </p>

          <div className="flex justify-center animate-fadeIn animation-delay-300">
            <Button href={primaryButton.href}>{primaryButton.text}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
