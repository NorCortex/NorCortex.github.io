"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
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

          <div className="hidden md:flex flex-grow justify-center space-x-4 font-montserrat text-sm">
            <Link href="/about" className="hover:text-gray-600 font-semibold px-4">About</Link>
            <Link href="/member" className="hover:text-gray-600 font-semibold px-4">Member</Link>
            {/* <Link href="/publication" className="hover:text-gray-600 font-semibold px-4">PUBLICATIONS</Link> */}
            <Link href="/alumni" className="hover:text-gray-600 font-semibold px-4">Alumni</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none px-4"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 mb-6">
            <div className="flex flex-col space-y-2 font-montserrat text-center">
              <Link href="/about" className="hover:text-gray-600 font-semibold text-xs">About</Link>
              <Link href="/member" className="hover:text-gray-600 font-semibold text-xs">Member</Link>
              {/* <Link href="/publication" className="hover:text-gray-600 font-semibold text-sm">PUBLICATIONS</Link> */}
              <Link href="/alumni" className="hover:text-gray-600 font-semibold uppercase text-xs">Alumni</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;