"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CircularServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const services = [
    { 
      id: 1, 
      title: 'Web Development', 
      description: 'Create stunning, responsive websites with modern technologies and frameworks.',
      image: '/images/services/web-dev.jpg', 
      bgColor: 'bg-blue-500' 
    },
    { 
      id: 2, 
      title: 'Mobile App Development', 
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      image: '/images/services/mobile-dev.jpg', 
      bgColor: 'bg-green-500' 
    },
    { 
      id: 3, 
      title: 'UI/UX Design', 
      description: 'Design intuitive user interfaces and experiences that engage and delight users.',
      image: '/images/services/ui-ux.jpg', 
      bgColor: 'bg-purple-500' 
    },
    { 
      id: 4, 
      title: 'E-commerce Solutions', 
      description: 'Develop custom e-commerce platforms with secure payment processing and inventory management.',
      image: '/images/services/ecommerce.jpg', 
      bgColor: 'bg-orange-500' 
    },
    { 
      id: 5, 
      title: 'Digital Marketing', 
      description: 'Boost your online presence with SEO, social media marketing, and content strategies.',
      image: '/images/services/marketing.jpg', 
      bgColor: 'bg-red-500' 
    },
    { 
      id: 6, 
      title: 'Product Development', 
      description: 'Transform your ideas into market-ready products with our end-to-end development process.',
      image: '/images/services/product.jpg', 
      bgColor: 'bg-indigo-500' 
    },
    { 
      id: 7, 
      title: 'Custom Software', 
      description: 'Develop tailored software solutions to address your specific business challenges.',
      image: '/images/services/software.jpg', 
      bgColor: 'bg-teal-500' 
    },
    { 
      id: 8, 
      title: 'Interface Design', 
      description: 'Create beautiful, functional interfaces for web and mobile applications.',
      image: '/images/services/interface.jpg', 
      bgColor: 'bg-pink-500' 
    },
  ];

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isInView) return;

      if (!isScrolling) {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        if (Math.abs(scrollDelta) > 30) {
          if (scrollDelta > 0) {
            // Scrolling down - move to next card (infinite loop)
            setCurrentIndex(prev => (prev + 1) % services.length);
          } else {
            // Scrolling up - move to previous card (infinite loop)
            setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
          }
          
          lastScrollY.current = currentScrollY;
          isScrolling = true;
          
          // Reset scrolling flag after animation
          setTimeout(() => {
            isScrolling = false;
          }, 300);
        }
      }
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance required for a swipe
      const swipeDistance = touchEndX.current - touchStartX.current;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe right - go to previous card
          setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
        } else {
          // Swipe left - go to next card
          setCurrentIndex(prev => (prev + 1) % services.length);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add touch event listeners if cards container exists
    if (cardsContainerRef.current) {
      cardsContainerRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      cardsContainerRef.current.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Clean up touch event listeners
      if (cardsContainerRef.current) {
        cardsContainerRef.current.removeEventListener('touchstart', handleTouchStart);
        cardsContainerRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [services.length]);

  // Function to get responsive values based on screen width
  const getResponsiveValue = (mobileValue, tabletValue, desktopValue) => {
    if (typeof window === 'undefined') return desktopValue; // Default for SSR
    
    const width = window.innerWidth;
    if (width < 640) return mobileValue; // Mobile
    if (width < 1024) return tabletValue; // Tablet
    return desktopValue; // Desktop
  };

  const getCardStyle = (index) => {
    const relativeIndex = (index - currentIndex + services.length) % services.length;
    
    if (relativeIndex === 0) {
      // Center card - straight
      return {
        transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        transition: 'transform 0.5s ease, opacity 0.5s ease'
      };
    } else if (relativeIndex === 1 || relativeIndex === services.length - 1) {
      // Adjacent cards
      const isLeft = relativeIndex === services.length - 1;
      const translateX = getResponsiveValue(
        isLeft ? '-180px' : '180px', // Mobile
        isLeft ? '-250px' : '250px', // Tablet
        isLeft ? '-320px' : '320px'  // Desktop
      );
      const rotateValue = getResponsiveValue(
        isLeft ? '-8deg' : '8deg',   // Mobile
        isLeft ? '-10deg' : '10deg', // Tablet
        isLeft ? '-12deg' : '12deg'  // Desktop
      );
      const scaleValue = getResponsiveValue(0.7, 0.8, 0.9);
      
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${translateX}) rotate(${rotateValue}) scale(${scaleValue})`,
        opacity: 0.8,
        zIndex: 20,
        transition: 'transform 0.5s ease, opacity 0.5s ease'
      };
    } else if (relativeIndex === 2 || relativeIndex === services.length - 2) {
      // Outer cards - partially visible
      const isLeft = relativeIndex === services.length - 2;
      const translateX = getResponsiveValue(
        isLeft ? '-300px' : '300px', // Mobile
        isLeft ? '-450px' : '450px', // Tablet
        isLeft ? '-600px' : '600px'  // Desktop
      );
      const rotateValue = getResponsiveValue(
        isLeft ? '-15deg' : '15deg', // Mobile
        isLeft ? '-18deg' : '18deg', // Tablet
        isLeft ? '-20deg' : '20deg'  // Desktop
      );
      const scaleValue = getResponsiveValue(0.5, 0.6, 0.7);
      
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${translateX}) rotate(${rotateValue}) scale(${scaleValue})`,
        opacity: 0.4,
        zIndex: 10,
        transition: 'transform 0.5s ease, opacity 0.5s ease'
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(-50%) translateY(-50%) scale(0.3)',
        opacity: 0,
        zIndex: 0,
        transition: 'transform 0.5s ease, opacity 0.5s ease'
      };
    }
  };

  const getBackgroundImage = () => {
    // Create a blurred image-like background pattern
    return (
      <div className="absolute inset-0">
        {/* Main background with noise texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500" />
        
        {/* Blurred color patches to simulate image */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-gray-400/30 backdrop-blur-sm" />
        
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(0,0,0,0.3) 2px, transparent 0)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
    );
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Blurred Background Image Effect */}
      {getBackgroundImage()}

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 pt-32 pb-32">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-light text-gray-800 mb-6">
            Our expertise
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Explore our services
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="hidden md:inline">Keep scrolling</span>
            <span className="md:hidden">Swipe to navigate</span>
            <div className="w-1 h-4 bg-gray-600 rounded-full opacity-60 hidden md:block" />
            <div className="md:hidden animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          {/* Mobile swipe indicator */}
          <div className="flex justify-center mt-2 md:hidden">
            <div className="relative w-16 h-6 opacity-70">
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-gray-400 rounded-full transform -translate-y-1/2 animate-ping" style={{ animationDuration: '1.5s' }} />
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-gray-400 rounded-full transform -translate-y-1/2 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.75s' }} />
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] mx-auto mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8" ref={cardsContainerRef}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="absolute left-1/2 top-1/2 w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 transition-all duration-500 ease-out cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={`w-full h-full rounded-3xl ${service.bgColor} p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group transform hover:scale-105 transition-transform duration-300`}>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Number Badge */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg mt-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Learn More Button - Only visible on active card */}
                  <div className={`mt-4 transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-white/30 transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Mobile Navigation Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 md:hidden">
          <button 
            onClick={() => setCurrentIndex(prev => (prev - 1 + services.length) % services.length)}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => (prev + 1) % services.length)}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-4 sm:w-6' : 'bg-gray-300'}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CircularServicesSection;