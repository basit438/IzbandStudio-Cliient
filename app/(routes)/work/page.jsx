 "use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '../../customComponents/Navbar';

function Page() {
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on page load
      gsap.fromTo(
        [headingRef.current, quoteRef.current, buttonRef.current],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.3,
          delay: 0.2,
        }
      );

      // Subtle floating animation for the quote
      gsap.to(quoteRef.current, {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    
    <div className="min-h-screen w-full px-4 md:px-12 py-20 flex items-center justify-center bg-white overflow-hidden">
        <Navbar />
      <div className="text-center max-w-4xl w-full space-y-8">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium leading-tight text-black"
        >
          This work is
          <br className="hidden sm:block" />
          <span className="text-neutral-800 block mt-2">
            under construction.
          </span>
        </h1>

        {/* Creative Quote */}
        <div className="py-8">
          <p
            ref={quoteRef}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            "Great things are coming. We're crafting something extraordinary."
            <br />
            <span className="text-sm italic text-gray-500 mt-2 block">
              — Stay tuned
            </span>
          </p>
        </div>

        {/* Call to Action */}
        <div ref={buttonRef} className="space-y-4">
          <a
            href="#contact"
            className="inline-block border-b-2 border-black text-sm sm:text-base md:text-lg font-medium text-black hover:text-gray-600 transition mr-8"
          >
            Get notified when ready →
          </a>
          <a
            href="#about"
            className="inline-block border-b-2 border-gray-400 text-sm sm:text-base md:text-lg font-medium text-gray-600 hover:text-black transition"
          >
            Learn more about us →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;