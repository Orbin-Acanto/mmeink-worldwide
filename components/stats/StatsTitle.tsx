"use client";
import { TextAnimate } from "@/components/ui/text-animate";

interface StatsTitleProps {
  title: string;
  highlightedText?: string;
  className?: string;
}

export default function StatsTitle({
  title,
  highlightedText,
  className = "",
}: StatsTitleProps) {
  const renderTitle = () => {
    if (!highlightedText) {
      return (
        <TextAnimate animation="blurIn" as="span" once={false} duration={0.8}>
          {title}
        </TextAnimate>
      );
    }

    const parts = title.split(highlightedText);

    return (
      <>
        <TextAnimate
          animation="blurIn"
          as="span"
          className="inline"
          once={false}
          duration={0.8}
        >
          {parts[0]}
        </TextAnimate>
        <TextAnimate
          animation="blurIn"
          as="span"
          duration={0.8}
          delay={0.5}
          once={false}
          className="inline text-gray-300"
        >
          {highlightedText}
        </TextAnimate>
        {parts[1] && (
          <TextAnimate
            animation="blurIn"
            as="span"
            duration={0.8}
            delay={0.5}
            once={false}
            className="inline text-gray-300"
          >
            {parts[1]}
          </TextAnimate>
        )}
      </>
    );
  };

  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal mb-8 sm:mb-10 lg:mb-12 leading-tight px-4 ${className}`}
    >
      {renderTitle()}
    </h2>
  );
}
