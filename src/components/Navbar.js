"use client";
import Link from "next/link";
import { useState, useCallback, useMemo } from "react";

const NAVIGATION_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "Q&A", href: "/qa" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const SHARED_LINK_CLASSES =
  "text-sm lg:text-base font-medium text-white hover:text-primary transition-colors duration-200 ease-in-out drop-shadow-md whitespace-nowrap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const desktopNavigation = useMemo(
    () => (
      <ul className="hidden md:flex justify-center gap-6 lg:gap-8 flex-wrap">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={SHARED_LINK_CLASSES}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <nav className="absolute top-20 sm:top-24 left-0 w-full px-4 py-2 z-50 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        {desktopNavigation}

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="w-full relative z-50 text-center text-white bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-3 px-4 font-medium hover:bg-opacity-30 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            style={{ 
              minHeight: '44px', // Ensures minimum touch target size
              touchAction: 'manipulation' // Prevents double-tap zoom on iOS
            }}
          >
            {isMenuOpen ? "✕ Close Menu" : "☰ Menu"}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 z-40 mt-2">
              <ul className="bg-black bg-opacity-60 backdrop-blur-md rounded-lg p-4 space-y-1 border border-white border-opacity-10 shadow-xl">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block w-full text-center text-white hover:text-primary hover:bg-white hover:bg-opacity-10 transition-all duration-200 py-3 px-4 font-medium rounded-md"
                      onClick={closeMenu}
                      style={{
                        minHeight: '44px', // Minimum touch target
                        touchAction: 'manipulation'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}