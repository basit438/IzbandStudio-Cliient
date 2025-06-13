'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesEnter = () => setIsServicesOpen(true);
  const handleServicesLeave = () => setIsServicesOpen(false);

  return (
    <nav className="relative bg-blend shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">izband</div>

        {/* Nav Items */}
        <ul className="flex items-center space-x-10 text-[16px] font-medium text-white">
          {/* Services */}
          <li
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            className="relative"
          >
            <span className="cursor-pointer text-pink-600">Services ▾</span>

            {isServicesOpen && (
              <div
                className="fixed left-1/2 top-[80px] transform -translate-x-1/2 w-[1100px] bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-6"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {/* Tabs */}
                <div className="flex gap-8 border-b border-gray-200 mb-6 font-medium text-sm text-gray-500">
                  <button className="text-pink-600 border-b-2 border-pink-600 pb-2">By Purpose</button>
                  <button className="hover:text-black">By Work Type</button>
                  <button className="hover:text-black">By Technology</button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-sm text-gray-800">
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
              </div>
            )}
          </li>

          {/* Other Nav Links */}
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Work</li>
        </ul>

        {/* CTA Button */}
        <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Free Booking
        </button>
      </div>
    </nav>
  );
}
