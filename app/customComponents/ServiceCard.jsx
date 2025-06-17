'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMagic, FaPlane, FaCrop } from 'react-icons/fa';

const serviceIcons = [FaMagic, FaPlane, FaCrop];

export default function ServiceCard({ imageSrc, title, services, bgColor, number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return (
    <div
      className="rounded-[20px] overflow-hidden shadow-xl bg-white
        min-w-[280px] max-w-[300px] h-[400px]
        sm:min-w-[320px] sm:max-w-[340px] sm:h-[450px]
        md:min-w-[340px] md:max-w-[360px] md:h-[85vh]
        flex flex-col transition-transform duration-500 hover:scale-[1.03]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div
        className="relative w-full transition-all duration-500 ease-in-out"
        style={{ 
          height: isDesktop ? (isHovered ? '45%' : '60%') : '45%'
        }}
      >
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Content Section */}
      <div
        className={`flex-1 ${bgColor} text-white px-4 py-4 transition-all duration-500 ease-in-out flex flex-col gap-3
          sm:px-5 sm:py-5 sm:gap-4 md:px-6`}
        style={{ 
          height: isDesktop ? (isHovered ? '55%' : '40%') : '55%'
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-serif sm:text-xl md:text-2xl leading-tight">{title}</h2>
          {number && <span className="text-lg sm:text-xl font-semibold opacity-60">{number}</span>}
        </div>

        <ul className="space-y-2 text-sm sm:space-y-3 sm:text-base flex-1">
          {services.map((item, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <li
                key={idx}
                className="flex justify-between items-center border-b border-white/30 pb-1 last:border-b-0"
              >
                <span className="flex-1 pr-2 leading-snug">{item}</span>
                <Icon className="text-lg sm:text-xl opacity-70 flex-shrink-0" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}