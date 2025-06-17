'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeQuoteSections() {
  const firstSectionRef = useRef(null);
  const firstHeadingRef = useRef(null);
  const firstQuoteRef = useRef(null);
  const firstButtonRef = useRef(null);

  const secondSectionRef = useRef(null);
  const secondHeadingRef = useRef(null);
  const secondQuoteRef = useRef(null);
  const secondButtonRef = useRef(null);

  useEffect(() => {
    // First section animation (left to right)
    const firstCtx = gsap.context(() => {
      gsap.fromTo(
        [firstHeadingRef.current, firstQuoteRef.current, firstButtonRef.current],
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
            trigger: firstSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }, firstSectionRef);

    // Second section animation (right to left)
    const secondCtx = gsap.context(() => {
      gsap.fromTo(
        [secondHeadingRef.current, secondQuoteRef.current, secondButtonRef.current],
        {
          x: '100vw',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }, secondSectionRef);

    return () => {
      firstCtx.revert();
      secondCtx.revert();
    };
  }, []);

  return (
    <>
      {/* First Section */}
      <section
        ref={firstSectionRef}
        className="min-h-screen w-full px-4 md:px-12 py-20 flex items-center justify-center bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1
              ref={firstHeadingRef}
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
              ref={firstQuoteRef}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left md:text-right"
            >
              "Creativity is intelligence having fun."
              <br />
              <span className="text-sm italic text-gray-500">
                — Albert Einstein
              </span>
            </p>
            <a
              ref={firstButtonRef}
              href="#consultation"
              className="inline-block border-b-2 border-black text-sm sm:text-base md:text-lg font-medium text-black hover:text-gray-600 transition"
            >
              Get free consultation →
            </a>
          </div>
        </div>
      </section>

      {/* Second Section - Opposite Layout and Animation */}
      <section
        ref={secondSectionRef}
        className="min-h-screen w-full px-4 md:px-12 py-20 flex items-center justify-center bg-gray-50 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full">
          {/* Left Content - Quote first in this section */}
          <div className="flex flex-col justify-center items-start space-y-6 md:order-1">
            <p
              ref={secondQuoteRef}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left"
            >
              "Have an idea? Great!! Leave the rest to us."
              <br />
              <span className="text-sm italic text-gray-500">
                — Your Creative Partners
              </span>
            </p>
            <a
              ref={secondButtonRef}
              href="#portfolio"
              className="inline-block border-b-2 border-black text-sm sm:text-base md:text-lg font-medium text-black hover:text-gray-600 transition"
            >
              View our work →
            </a>
          </div>

          {/* Right Content - Heading */}
          <div className="flex flex-col justify-center md:order-2">
            <h2
              ref={secondHeadingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-tight text-black text-left md:text-right"
            >
              From concept
              <br className="hidden sm:block" />
              <span className="text-neutral-800 block mt-2">
                to completion, we've got you covered.
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}