'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-blended-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-shadow-green-200 text-green-500"><Link href="/">izband</Link></div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center space-x-10 text-[16px] font-medium text-shadow-green-200 text-green-500">
          <li className="hover:text-pink-600 cursor-pointer"><Link href="/services">Services</Link></li>
          <li className="hover:text-pink-600 cursor-pointer"><Link href="/technologies">Technologies</Link></li>
         
          <li className="hover:text-pink-600 cursor-pointer"> <Link href="/about">About</Link></li>
          <li className="hover:text-pink-600 cursor-pointer">Work</li>
        </ul>

        {/* CTA Button - Desktop Only */}
        <button className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Free Booking
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blend px-6 pb-6 pt-2 space-y-4 border-t border-gray-200 text-amber-400">
          <div className="space-y-2 text-white font-medium">
            <div className="hover:text-pink-600 cursor-pointer"><Link href="/services">Services</Link></div>
            <div className="hover:text-pink-600 cursor-pointer"><Link href="/technologies">Technologies</Link></div>
            <div className="hover:text-pink-600 cursor-pointer"> <Link href="/about">About</Link></div>
            <div className="hover:text-pink-600 cursor-pointer">Work</div>
          </div>
        </div>
      )}
    </nav>
  );
}
