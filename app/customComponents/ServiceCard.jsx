'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaMagic, FaPlane, FaCrop } from 'react-icons/fa';

const serviceIcons = [FaMagic, FaPlane, FaCrop];

export default function ServiceCard({ imageSrc, title, services, bgColor, number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-[20px] overflow-hidden shadow-xl bg-white min-w-[320px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] h-[85vh] flex flex-col transition-transform duration-500 hover:scale-[1.03]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div
        className={`relative w-full transition-all duration-500 ease-in-out`}
        style={{ height: isHovered ? '45%' : '60%' }}
      >
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Content Section */}
      <div
        className={`flex-1 ${bgColor} text-white px-6 py-5 transition-all duration-500 ease-in-out flex flex-col gap-4`}
        style={{ height: isHovered ? '55%' : '40%' }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-serif">{title}</h2>
          {number && <span className="text-xl font-semibold opacity-60">{number}</span>}
        </div>

        <ul className="space-y-3 text-sm sm:text-base">
          {services.map((item, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <li
                key={idx}
                className="flex justify-between items-center border-b border-white/30 pb-1"
              >
                <span>{item}</span>
                <Icon className="text-xl opacity-70" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
