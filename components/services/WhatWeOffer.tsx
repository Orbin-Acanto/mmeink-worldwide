import React from "react";

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  width: "sm" | "md" | "lg" | "xl";
}

interface WhatWeOfferProps {
  title: string;
  subtitle?: string;
  topRow: ServiceCard[];
  bottomRow: ServiceCard[];
}

const widthClasses = {
  sm: "w-[280px] sm:w-[320px]",
  md: "w-[340px] sm:w-[400px]",
  lg: "w-[380px] sm:w-[460px]",
  xl: "w-[420px] sm:w-[520px]",
};

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({
  title,
  subtitle,
  topRow,
  bottomRow,
}) => {
  return (
    <>
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
          <div className="flex animate-scroll-left">
            {[...topRow, ...topRow, ...topRow].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={`${
                  widthClasses[card.width]
                } h-60 sm:h-[280px] lg:h-80 shrink-0 mx-2 sm:mx-3 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...bottomRow, ...bottomRow, ...bottomRow].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={`${
                  widthClasses[card.width]
                } h-60 sm:h-[280px] lg:h-80 shrink-0 mx-2 sm:mx-3 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
