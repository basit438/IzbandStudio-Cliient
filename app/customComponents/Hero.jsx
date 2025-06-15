'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const SLIDE_DURATION = 5000;
const TEXT_DELAY = 500;

const slides = [
    {
    heading: (
      <>
        <span className="text-white text-5xl font-semibold font-serif">
          Future-ready solutions
        </span>
        <br />
        <span className="text-white/60 text-xl tracking-wider">
          led by innovation
        </span>
      </>
    ),
    sub: 'We blend design, tech and storytelling to fuel your growth.',
    bg: '/216761_small.mp4',
    isVideo: true,
  },
   {
    heading: (
      <>
        <span className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Build digital excellence
        </span>
        <br />
        <span className="text-white/70 italic text-xl tracking-wide">
          crafted with precision
        </span>
      </>
    ),
    sub: 'Turning your offline brand into a powerful online force.',
    bg: '/3130284-uhd_3840_2160_30fps.mp4',
    isVideo: true,
  },

  {
    heading: (
      <>
        <span className="bg-gradient-to-r from-white via-white/70 to-white/40 bg-clip-text text-transparent">
          Crafted for your brand
        </span>
        <br />
        <span className="text-white/80 italic text-xl tracking-wide">
          strategy‑led, data‑powered
        </span>
      </>
    ),
    sub: 'We shape brands and digital experiences — made today, built for tomorrow.',
    bg: '/3024112-hd_1920_1080_25fps.mp4', // make sure to place this in your public folder
    isVideo: true,
  }
  
  
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    const showTextTimeout = setTimeout(() => {
      setShowText(true);
      setStartProgress(true);
    }, TEXT_DELAY);

    const slideTimer = setInterval(() => {
      setShowText(false);
      setStartProgress(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 100);

      setTimeout(() => {
        setShowText(true);
        setStartProgress(true);
      }, TEXT_DELAY + 200);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(slideTimer);
      clearTimeout(showTextTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Slides */}
      <div
        className="flex h-screen transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen relative"
          >
            {slide.isVideo ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={slide.bg}
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
            )}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div
              className={`relative z-20 h-full flex flex-col items-start justify-center px-6 md:px-20 text-white transition-all duration-700 ease-in-out ${
                showText && currentSlide === index
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6 max-w-5xl">
                {slide.heading}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8">{slide.sub}</p>
              <a href="#booking">
                <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-full shadow-lg transition">
                  Get a Free Consultation
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 w-2/3 max-w-xl z-30">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-1 bg-white/20 overflow-hidden rounded">
            <div
              className="h-full bg-green-400"
              style={{
                transition:
                  currentSlide === i && startProgress
                    ? `width ${SLIDE_DURATION}ms linear`
                    : 'none',
                width: currentSlide === i && startProgress ? '100%' : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
