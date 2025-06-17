"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../customComponents/Navbar';

export default function AboutUsPage() {
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'mission-section') {
            setIsFirstVisible(entry.isIntersecting);
          } else if (entry.target.id === 'solutions-section') {
            setIsSecondVisible(entry.isIntersecting);
          } else if (entry.target.id === 'values-section') {
            setIsThirdVisible(entry.isIntersecting);
          } else if (entry.target.id === 'services-section') {
            setIsFourthVisible(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Separate observer for background transition
    const transitionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.id === 'services-section') {
          // Calculate progress based on intersection ratio
          const progress = Math.max(0, Math.min(1, entry.intersectionRatio * 2));
          setTransitionProgress(progress);
        }
      },
      { 
        threshold: Array.from(Array(101), (_, i) => i / 100), // Multiple thresholds for smooth transition
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }
    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }
    if (thirdSectionRef.current) {
      observer.observe(thirdSectionRef.current);
    }
    if (fourthSectionRef.current) {
      observer.observe(fourthSectionRef.current);
      transitionObserver.observe(fourthSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) {
        observer.unobserve(firstSectionRef.current);
      }
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
      if (thirdSectionRef.current) {
        observer.unobserve(thirdSectionRef.current);
      }
      if (fourthSectionRef.current) {
        observer.unobserve(fourthSectionRef.current);
        transitionObserver.unobserve(fourthSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      {/* First Section - Mission Statement */}
      <section 
        id="mission-section"
        ref={firstSectionRef}
        className="relative bg-black h-screen flex items-center overflow-hidden"
      >
        {/* Background with blurred image effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Simulated blurred background - replace with your actual image */}
          <div className="w-full h-full bg-gray-800 opacity-60"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-500 rounded-full blur-2xl opacity-20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Main Content */}
              <div className="lg:col-span-8">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight">
                  <span className={`text-emerald-400 block transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '0ms' }}>
                    Our mission lies in
                  </span>
                  <span className={`text-emerald-400 block transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    creating never-ending
                  </span>
                  <span className={`text-emerald-400 block transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '400ms' }}>
                    awe-inspiring
                  </span>
                  <span className={`text-emerald-400 block transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '600ms' }}>
                    sanctuaries
                  </span>
                </h1>

                {/* Subtitle and CTA Row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-16 lg:mt-20 gap-6">
                  {/* Subtitle */}
                  <div className={`transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '800ms' }}>
                    <p className="text-emerald-400 text-lg lg:text-xl font-light leading-relaxed">
                      Using design and technology to inspire and<br />
                      empower people we work with since 2023
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className={`lg:ml-auto transform transition-all duration-1000 ease-out ${
                    isFirstVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '1000ms' }}>
                    <button className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                      Get free consultation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Empty space for background visibility */}
              <div className="lg:col-span-4">
                {/* This space intentionally left for background visibility */}
              </div>
            </div>
          </div>
        </div>

     
      </section>

      {/* Second Section - Solutions */}
      <section 
        id="solutions-section"
        ref={secondSectionRef}
        className="relative bg-emerald-400 h-screen flex items-center overflow-hidden"
      >
        {/* Logo/Brand */}
        <div className="absolute top-8 left-8 z-30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 transform rotate-45"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column - Sidebar */}
              <div className="lg:col-span-3">
                <div className={`transform transition-all duration-1000 ease-out ${
                  isSecondVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`} style={{ transitionDelay: '0ms' }}>
                  <h3 className="text-black text-lg font-medium mb-2">Our approach</h3>
                  <p className="text-black/60 text-base">
                    Fourmeta® Agency<br />
                    since 2023
                  </p>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="lg:col-span-9">
                {/* Main Heading */}
                <div className="mb-16">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight text-black">
                    <span className={`block transform transition-all duration-1000 ease-out ${
                      isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                      Our solutions are based on research
                    </span>
                    <span className={`block transform transition-all duration-1000 ease-out ${
                      isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '400ms' }}>
                      and a deep understanding of trends,
                    </span>
                    <span className={`block transform transition-all duration-1000 ease-out ${
                      isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '600ms' }}>
                      aimed at driving change, innovation in
                    </span>
                    <span className={`block transform transition-all duration-1000 ease-out ${
                      isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '800ms' }}>
                      business, and improving people's lives.
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <div className={`max-w-3xl transform transition-all duration-1000 ease-out ${
                  isSecondVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{ transitionDelay: '1000ms' }}>
                  <p className="text-black text-lg lg:text-xl font-light leading-relaxed">
                    We act as a strategic partner, looking into the future and<br />
                    creating a foundation for growth and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Third Section - Values */}
      <section 
        id="values-section"
        ref={thirdSectionRef}
        className="relative bg-emerald-400 min-h-screen flex items-center overflow-hidden py-16"
      >
        {/* Liquid Paint Transition Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Multiple paint blobs for organic liquid effect */}
          <div 
            className="absolute inset-0 bg-black transition-all duration-1000 ease-out"
            style={{
              clipPath: `circle(${transitionProgress * 150}% at 50% 100%)`,
              opacity: transitionProgress > 0 ? 1 : 0
            }}
          />
          <div 
            className="absolute inset-0 bg-black transition-all duration-1200 ease-out"
            style={{
              clipPath: `circle(${transitionProgress * 120}% at 30% 80%)`,
              opacity: transitionProgress > 0.1 ? 1 : 0,
              transitionDelay: '100ms'
            }}
          />
          <div 
            className="absolute inset-0 bg-black transition-all duration-1100 ease-out"
            style={{
              clipPath: `circle(${transitionProgress * 130}% at 70% 90%)`,
              opacity: transitionProgress > 0.05 ? 1 : 0,
              transitionDelay: '50ms'
            }}
          />
          <div 
            className="absolute inset-0 bg-black transition-all duration-1300 ease-out"
            style={{
              clipPath: `circle(${transitionProgress * 140}% at 20% 70%)`,
              opacity: transitionProgress > 0.15 ? 1 : 0,
              transitionDelay: '150ms'
            }}
          />
          <div 
            className="absolute inset-0 bg-black transition-all duration-1250 ease-out"
            style={{
              clipPath: `circle(${transitionProgress * 110}% at 80% 85%)`,
              opacity: transitionProgress > 0.08 ? 1 : 0,
              transitionDelay: '80ms'
            }}
          />
        </div>
        {/* Content Container */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className={`text-black text-lg font-medium mb-8 transform transition-all duration-1000 ease-out ${
                isThirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '0ms' }}>
                Our main values
              </h2>
            </div>

            {/* Values Grid */}
            <div className="space-y-12 lg:space-y-16">
              
              {/* Integrity */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <h3 className={`text-black text-4xl lg:text-5xl xl:text-6xl font-light leading-tight transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    Integrity
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className={`text-black text-lg font-light leading-relaxed transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '300ms' }}>
                    Operate with honesty, transparency, and ethical practices, building trust with clients, partners, and employees.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <h3 className={`text-black text-4xl lg:text-5xl xl:text-6xl font-light leading-tight transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '400ms' }}>
                    Innovation
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className={`text-black text-lg font-light leading-relaxed transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '500ms' }}>
                    Embrace a culture of continuous improvement and stay ahead of industry trends by fostering creativity, exploring new technologies, and adapting to change.
                  </p>
                </div>
              </div>

              {/* Excellence */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <h3 className={`text-black text-4xl lg:text-5xl xl:text-6xl font-light leading-tight transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '600ms' }}>
                    Excellence
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className={`text-black text-lg font-light leading-relaxed transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '700ms' }}>
                    Strive for excellence in every aspect of work, setting high standards and continuously seeking ways to surpass them.
                  </p>
                </div>
              </div>

              {/* Partnership */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <h3 className={`text-black text-4xl lg:text-5xl xl:text-6xl font-light leading-tight transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '800ms' }}>
                    Partnership
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className={`text-black text-lg font-light leading-relaxed transform transition-all duration-1000 ease-out ${
                    isThirdVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`} style={{ transitionDelay: '900ms' }}>
                    Aim to create value that extends far beyond the immediate horizon, ensuring a partnership that grows stronger with each passing year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       ``
      </section>

      {/* Fourth Section - Services */}
      <section 
        id="services-section"
        ref={fourthSectionRef}
        className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden py-16"
      >
        {/* Services Badge */}
        <div className="absolute top-8 left-8 z-30">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white transform rotate-45"></div>
            <span className="text-white text-sm font-medium">Services</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight">
            <span className={`block transform transition-all duration-1000 ease-out ${
              isFourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '0ms' }}>
              We create strategies to launch
            </span>
            <span className={`block transform transition-all duration-1000 ease-out ${
              isFourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              products and promote brands,
            </span>
            <span className={`block transform transition-all duration-1000 ease-out ${
              isFourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              develop visual identity systems
            </span>
            <span className={`block transform transition-all duration-1000 ease-out ${
              isFourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              and help companies completely
            </span>
            <span className={`block transform transition-all duration-1000 ease-out ${
              isFourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              realize their digital potential.
            </span>
          </h1>
        </div>

     
      </section>

        {/* Footer Section */}
  


      {/* Minimalist Footer Section */}
      <footer className="relative bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="w-8 h-8 bg-emerald-400 transform rotate-45"></div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Creating awe-inspiring digital sanctuaries through innovative design and technology .
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-white text-sm font-medium mb-6">Navigate</h3>
              <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">Home</a>
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">Services</a>
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">Works</a>
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">About</a>
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">Insights</a>
                <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">Contact</a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-sm font-medium mb-4">Get in touch</h3>
                <div className="space-y-2">
                  <a href="mailto:hello@fourmeta.com" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300 block">
                    izband@gmail.com
                  </a>
                  <a href="tel:+442074823128" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300 block">
                    +8492 95 1234
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-sm font-medium mb-4">Follow</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-300">
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="text-gray-500 text-xs">
                © 2025 izband studio. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 text-xs hover:text-gray-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-xs hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
  