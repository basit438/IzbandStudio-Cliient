'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-blended-white shadow-md transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">izband</div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center space-x-10 text-[16px] font-medium text-white">
          <li className="hover:text-pink-600 cursor-pointer">Services +</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Work</li>
        </ul>

        {/* CTA Button - Desktop Only */}
        <button className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Free Booking
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900 text-2xl">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 pt-2 space-y-4 border-t border-gray-200">
          <div className="text-pink-600 font-semibold">Services</div>
          <div className="space-y-2 text-gray-700 text-sm">
            {[
              "AI Integration Services",
              "Software Audit",
              "Application Modernization Services",
              "Data Migration",
              "Enterprise Software Development",
              "Software Re-Engineering",
              "Software Architecture",
              "Offshore Development Services",
              "Product Discovery Phase",
              "Dedicated Development Team",
              "CTO as a Service for Startups",
              "API Integration Services",
              "High-Load System Development",
              "Software Product Development",
              "Custom Mapping Solutions",
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-pink-500">💬</span>
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-2 text-gray-700 font-medium">
            <div className="hover:text-pink-600 cursor-pointer">Technologies</div>
            <div className="hover:text-pink-600 cursor-pointer">About</div>
            <div className="hover:text-pink-600 cursor-pointer">Work</div>
          </div>

          <button className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Free Booking
          </button>
        </div>
      )}
    </nav>
  );
}
