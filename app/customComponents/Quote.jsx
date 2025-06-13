'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeQuoteSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, quoteRef.current, buttonRef.current],
        {
          x: '-100vw',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full px-4 md:px-12 py-20 flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-tight text-black"
          >
            We create strategies and solutions
            <br className="hidden sm:block" />
            <span className="text-neutral-800 block mt-2">
              to help brands evolve and thrive.
            </span>
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-start md:items-end space-y-6">
          <p
            ref={quoteRef}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left md:text-right"
          >
            “Creativity is intelligence having fun.”
            <br />
            <span className="text-sm italic text-gray-500">
              — Albert Einstein
            </span>
          </p>
          <a
            ref={buttonRef}
            href="#consultation"
            className="inline-block border-b-2 border-black text-sm sm:text-base md:text-lg font-medium text-black hover:text-gray-600 transition"
          >
            Get free consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
