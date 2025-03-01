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

          <div className="hidden md:flex flex-grow justify-center space-x-6 font-montserrat text-sm">
            <Link href="/about" className="hover:text-gray-600 font-semibold">About</Link>
            <Link href="/member" className="hover:text-gray-600 font-semibold">Member</Link>
            <Link href="/alumni" className="hover:text-gray-600 font-semibold">Alumni</Link>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-md`}
        >
          <div className="flex flex-col items-center py-4 space-y-4 text-sm font-montserrat">
            <Link href="/about" className="hover:text-gray-600 font-semibold">About</Link>
            <Link href="/member" className="hover:text-gray-600 font-semibold">Member</Link>
            <Link href="/alumni" className="hover:text-gray-600 font-semibold">Alumni</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
