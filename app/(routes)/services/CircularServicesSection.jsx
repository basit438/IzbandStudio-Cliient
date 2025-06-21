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
  <section
    ref={containerRef}
    className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900"
  >
    {getBackgroundImage()}
    <div
      ref={cardsContainerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`absolute top-1/2 left-1/2 w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] max-w-md transform shadow-xl rounded-2xl p-6 text-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
            currentIndex === index ? 'scale-105 bg-opacity-90 ring-4 ring-white/10' : ''
          } ${service.bgColor}`}
          style={getCardStyle(index)}
        >
          <div className="w-full h-40 mb-4 overflow-hidden rounded-xl shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">{service.title}</h2>
          <p className="text-sm text-center text-white/90">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

};

export default CircularServicesSection;