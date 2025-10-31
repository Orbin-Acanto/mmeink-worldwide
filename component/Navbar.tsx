"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".navbar-container") &&
        !target.closest(".mobile-menu-card")
      ) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-2xl" : "bg-black/50 backdrop-blur-md"
      }`}
    >
      <div className="navbar-container w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-28 lg:h-32">
          <div className="flex items-center justify-between w-full px-12">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo_4.png"
                  alt="MMEINK Logo"
                  width={180}
                  height={60}
                  className="h-12 md:h-18 lg:h-22 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center justify-end flex-1 px-6">
              <div className="flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <button
                          className="text-white hover:text-white/50 text-base font-light tracking-wide uppercase transition-colors duration-300"
                          onMouseEnter={() => setOpenDropdown(item.name)}
                        >
                          {item.name}
                        </button>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="bg-black/95 backdrop-blur-lg shadow-2xl overflow-hidden">
                            {item.submenu.map((subItem, index) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-6 py-4 text-sm text-white hover:bg-purple/60 hover:text-white transition-all duration-200 ${
                                  // index !== 0 ? "border-t border-gray/10" : ""
                                  index !== 0 ? "" : ""
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white hover:text-white/50 text-base font-light tracking-wide uppercase transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="lg:ml-12">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-purple text-white font-medium text-sm tracking-wider uppercase hover:bg-purple/70  transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-3 text-white hover:text-cyan focus:outline-none transition-colors duration-200"
                aria-expanded={isMobileMenuOpen}
              >
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-28 right-0 transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Card */}
        <div className="mobile-menu-card w-[85vw] max-w-md h-[calc(100vh-100px)] bg-charcoal-dark/95 backdrop-blur-lg shadow-2xl border-l border-gray-dark overflow-hidden flex flex-col">
          <div className="flex-1 px-6 py-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.name);
                      }}
                      className="w-full flex items-center justify-between px-4 py-4 text-base font-normal text-white hover:text-white/50 hover:bg-white/5 transition-all duration-200 uppercase tracking-wide"
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === item.name
                          ? "max-h-96 opacity-100 mb-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-dark/50 pl-4">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="relative flex items-center px-4 py-3 text-sm text-gray-light hover:text-white hover:bg-white/5 rounded-r-lg transition-all duration-200 group"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {/* Tree connector line */}
                            <span className="absolute -left-4 top-1/2 w-4 h-px bg-gray-dark/50 group-hover:bg-purple transition-colors" />

                            {/* Tree dot */}
                            <span className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-dark group-hover:bg-purple transition-colors" />

                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-base font-normal text-white hover:text-white/50 hover:bg-white/5 transition-all duration-200 uppercase tracking-wide"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="px-6 py-4 ">
            <Link
              href="/enquire"
              className="block w-full text-center px-6 py-4 bg-purple text-white font-semibold uppercase tracking-wider hover:bg-purple-light transition-all duration-300 shadow-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
              }}
            >
              Make an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
