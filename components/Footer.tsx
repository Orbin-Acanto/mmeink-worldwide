"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const eventTypes = [
    { name: "Brand Activations", href: "/events/corporate" },
    { name: "Product Launches", href: "/events/corporate" },
    { name: "Exhibits & Trade Shows", href: "/events/corporate" },
    { name: "Conferences & Meetings", href: "/events/corporate" },
    { name: "Virtual & Hybrid Events", href: "/events/corporate" },
    { name: "Galas", href: "/events/corporate" },
  ];

  const services = [
    { name: "Custom Fabrication", href: "/services/production" },
    { name: "Audio Visual", href: "/services/production" },
    { name: "Design & Decor", href: "/services/production" },
    { name: "Logistics", href: "/services/production" },
    { name: "Rentals", href: "/services/production" },
  ];

  const company = [
    { name: "Our Work", href: "/work" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="h-1 bg-linear-to-r from-purple via-cyan to-purple-light" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Left - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Stay in the <span className="text-purple">Loop</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Get the latest updates on events, trends, and exclusive insights
              delivered straight to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                required
                className="flex-1 px-6 py-3 bg-transparent border-2 border-white/20 text-white placeholder:text-gray-500 focus:border-purple focus:outline-none transition-colors uppercase text-sm tracking-wider"
              />
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="px-8 py-3 bg-purple text-white font-semibold uppercase tracking-wider hover:bg-purple-dark transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted
                  ? "✓ SUBSCRIBED"
                  : isSubmitting
                  ? "..."
                  : "SUBSCRIBE"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-4">
              Experience is
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple via-cyan to-purple-light">
                Everything
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple mb-4">
              Events
            </h4>
            <ul className="space-y-3">
              {eventTypes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12126161655"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 group-hover:text-purple transition-colors" />
                  <span className="text-sm">1 (212) 616-1655</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mmeink.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 group-hover:text-purple transition-colors" />
                  <span className="text-sm">info@mmeink.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-purple" />
                  <span className="text-sm">
                    234 West 39th Street
                    <br />
                    10th Floor
                    <br />
                    New York, NY 10018
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-18">
                <Image
                  src="/logo_4.png"
                  alt="MMEink"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/mmeink"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-purple group-hover:bg-purple/10 transition-all duration-300">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/mmeink"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Facebook"
              >
                <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-purple group-hover:bg-purple/10 transition-all duration-300">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>
                © {new Date().getFullYear()} MME Worldwide.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
