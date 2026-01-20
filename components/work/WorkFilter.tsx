"use client";

import { motion } from "framer-motion";

const eventTypes = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "galas", label: "Galas" },
  { id: "conference", label: "Conferences" },
  { id: "product-launch", label: "Product Launches" },
  { id: "trade-show", label: "Trade Shows" },
  { id: "hybrid", label: "Hybrid" },
];

interface WorkFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function WorkFilter({
  activeFilter,
  onFilterChange,
}: WorkFilterProps) {
  return (
    <section className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {eventTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => onFilterChange(type.id)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                activeFilter === type.id
                  ? "bg-linear-to-r from-purple-600 to-purple-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type.label}
            </motion.button>
          ))}
        </div>

        {/* Desktop Pills */}
        <div className="hidden md:flex items-center justify-center">
          <div className="inline-flex p-1.5 bg-gray-100/80 backdrop-blur-sm gap-1 flex-wrap justify-center">
            {eventTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => onFilterChange(type.id)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 lg:px-5 py-2 lg:py-2.5 text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === type.id
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeFilter === type.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800 shadow-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{type.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
