"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const SLIDE_DURATION = 5000;

const slides = [
  {
    heading: (
      <>
        Crafted for your brand <br />
        <span className="text-white/80">strategy-led, data-powered</span>
      </>
    ),
    subtext: 'We shape brands and digital experiences — made today, built for tomorrow.',
    bgImage:
      'https://cdn.prod.website-files.com/63f5d378a903c2a12583ce2f/68396ae189a8187a28026e97_mockdsd.avif',
  },
  {
    heading: (
      <>
        Build digital excellence <br />
        <span className="text-white/80">crafted with precision</span>
      </>
    ),
    subtext: 'Turning your offline brand into a powerful online force.',
    bgImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80',
  },
  {
    heading: (
      <>
        Future-ready solutions <br />
        <span className="text-white/80">led by innovation</span>
      </>
    ),
    subtext: 'We blend design, tech and storytelling to fuel your growth.',
    bgImage:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1470&q=80',
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => setStartProgress(true), 100); // small delay to ensure hydration
    const slideInterval = setInterval(() => {
      setStartProgress(false); // reset progress bar fill
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setStartProgress(true), 50); // restart bar fill after slide change
    }, SLIDE_DURATION);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Slide Container */}
        <div
          className="relative w-full h-screen flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="relative z-20 h-full flex flex-col items-start justify-center px-6 md:px-20 text-white">
                <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6 max-w-5xl">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8">{slide.subtext}</p>
                <a href="#booking">
                  <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-full transition-all shadow-lg">
                    Get a Free Consultation
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 w-2/3 max-w-xl z-30">
          {slides.map((_, idx) => (
            <div key={idx} className="flex-1 h-1 bg-white/20 overflow-hidden rounded">
              <div
                className="h-full bg-green-400"
                style={{
                  transition: startProgress && currentSlide === idx ? `width ${SLIDE_DURATION}ms linear` : 'none',
                  width: currentSlide === idx && startProgress ? '100%' : '0%',
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
