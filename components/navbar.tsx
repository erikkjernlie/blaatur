"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4">
      {/* Hamburger menu button for mobile */}
      <button
        className="md:hidden absolute top-4 right-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile menu */}
      <ul
        className={`md:hidden fixed inset-0 bg-blue-500 bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li>
          <Link
            href="/"
            className="hover:text-blue-200 transition-colors text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Hjem
          </Link>
        </li>
        <li>
          <Link
            href="/players"
            className="hover:text-blue-200 transition-colors text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Deltagere
          </Link>
        </li>
        <li>
          <Link
            href="/lgbtq"
            className="hover:text-blue-200 transition-colors text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            LGBTQ+
          </Link>
        </li>
      </ul>

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center space-x-8">
        <li>
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Hjem
          </Link>
        </li>
        <li>
          <Link
            href="/players"
            className="hover:text-blue-200 transition-colors"
          >
            Deltagere
          </Link>
        </li>
        <li>
          <Link href="/lgbtq" className="hover:text-blue-200 transition-colors">
            LGBTQ+
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
