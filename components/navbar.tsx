"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav>
      {/* Hamburger menu button for mobile */}
      <button
        className="md:hidden absolute top-4 right-4 z-50 p-4 rounded-lg border border-border bg-blue/50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
          ></span>
        </div>
      </button>

      {/* Mobile menu */}
      <ul
        className={`md:hidden fixed inset-0 bg-blue-500 bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 z-40 bg-blue/90 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <li>
          <Link
            href="#home"
            className="hover:text-blue-200 transition-colors text-xl tracking-wider uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Hjem
          </Link>
        </li>
        <li>
          <Link
            href="/bluebet"
            className="hover:text-blue-200 transition-colors text-xl tracking-wider uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Blåbet
          </Link>
        </li>
        <li>
          <Link
            href="#player-section"
            className="hover:text-blue-200 transition-colors text-xl tracking-wider uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Spillere
          </Link>
        </li>
        <li>
          <Link
            href="#lgbtq-section"
            className="hover:text-blue-200 transition-colors text-xl tracking-wider uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            LGBTQ+
          </Link>
        </li>
      </ul>

      {/* Desktop menu */}
      {/* <ul className="hidden md:flex justify-center space-x-8"> */}
        <ul
      className={`hidden md:flex justify-center p-4 space-x-8 transition-colors duration-300 ${
        hasBackground ? "bg-blue shadow-md" : ""
      }`}
    >
        <li className="p-2 rounded-lg border border-transparent hover:border-border hover:bg-white/20 hover:backdrop-blur-md">
          <Link href="#home" className="hover:text-blue-200 transition-colors tracking-wider uppercase">
            Hjem
          </Link>
        </li>
        <li className="p-2 rounded-lg border border-transparent hover:border-border hover:bg-white/20 hover:backdrop-blur-md">
          <Link href="#bluebet-section" className="hover:text-blue-200 transition-colors tracking-wider uppercase">
            Blåbet
          </Link>
        </li>
        <li className="p-2 rounded-lg border border-transparent hover:border-border hover:bg-white/20 hover:backdrop-blur-md">
          <Link
            href="#player-section"
            className="hover:text-blue-200 transition-colors tracking-wider uppercase"
          >
            Spillere
          </Link>
        </li>
        <li className="p-2 rounded-lg border border-transparent hover:border-border hover:bg-white/20 hover:backdrop-blur-md">
          <Link href="#lgbtq-section" className="hover:text-blue-200 transition-colors tracking-wider uppercase">
            LGBTQ+
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
