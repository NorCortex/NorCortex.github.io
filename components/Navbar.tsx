"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/paranor.png"
                alt="Logo"
                width={200}
                height={200}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-6 font-montserrat text-sm">
            <Link href="/about" className="hover:text-gray-600 font-semibold">About</Link>
            <Link href="/member" className="hover:text-gray-600 font-semibold">Member</Link>
            <Link href="/alumni" className="hover:text-gray-600 font-semibold">Alumni</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none px-4"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Overlay Click to Close */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50" onClick={closeMenu}>
            <div 
              className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg py-6"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="flex flex-col items-center space-y-4 text-md font-montserrat">
                <Link href="/about" className="hover:text-gray-600 font-semibold" onClick={closeMenu}>About</Link>
                <Link href="/member" className="hover:text-gray-600 font-semibold" onClick={closeMenu}>Member</Link>
                <Link href="/alumni" className="hover:text-gray-600 font-semibold" onClick={closeMenu}>Alumni</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
