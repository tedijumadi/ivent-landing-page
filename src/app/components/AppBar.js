"use client";

import { useState } from "react";

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3 min-w-0">
          <img
            src="/images/icon-512.png"
            alt="DocuQuote Logo"
            className="h-8 w-8 object-contain flex-shrink-0"
          />
          {/* Mobile Title */}
          <h1 className="text-white font-bold text-lg block sm:hidden truncate min-w-0">
            DocuQuote
          </h1>
          {/* Desktop Title */}
          <h1 className="text-white font-bold text-lg hidden sm:block truncate min-w-0">
            Ivent: Easy Manage Event
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 flex-shrink-0">
          <a href="#home" className="text-white hover:text-blue-200 transition">
            Home
          </a>
           <a href="#appgallery" className="text-white hover:text-blue-200 transition">
            App Gallery
          </a>
          <a href="#about" className="text-white hover:text-blue-200 transition">
            About Us
          </a>
          <a href="#download" className="text-white hover:text-blue-200 transition">
            Download
          </a>
          <a href="#contact" className="text-white hover:text-blue-200 transition">
            Contact
          </a>
        </nav>

        {/* Hamburger Button - Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Icon close (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Icon hamburger
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden bg-black px-4 pb-4">
          <a
            href="#home"
            className="block py-2 text-white hover:text-blue-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-white hover:text-blue-200 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a
            href="#download"
            className="block py-2 text-white hover:text-blue-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Download
          </a>
          <a
            href="#contact"
            className="block py-2 text-white hover:text-blue-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </section>
  );
}
