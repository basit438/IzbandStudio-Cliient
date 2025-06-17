"use client";
import React, { useState, useEffect, useRef } from 'react';

const CircularServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Digital Product\nDevelopment',
      number: '03',
      bgColor: 'bg-blue-600',
      accentColor: 'bg-green-500',
      image: 'geometric'
    },
    {
      id: 2,
      title: 'Branding\nServices',
      number: '04',
      bgColor: 'bg-blue-500',
      accentColor: 'bg-orange-500',
      image: 'grid'
    },
    {
      id: 3,
      title: 'Design &\nAnimation',
      number: '05',
      bgColor: 'bg-purple-300',
      accentColor: 'bg-purple-400',
      image: 'product'
    },
    {
      id: 4,
      title: 'Digital\nMarketing',
      number: '06',
      bgColor: 'bg-blue-200',
      accentColor: 'bg-blue-400',
      image: 'collage'
    },
    {
      id: 5,
      title: 'Web\nDevelopment',
      number: '01',
      bgColor: 'bg-indigo-600',
      accentColor: 'bg-purple-500',
      image: 'interface'
    },
    {
      id: 6,
      title: 'Mobile App\nDevelopment',
      number: '02',
      bgColor: 'bg-green-500',
      accentColor: 'bg-teal-400',
      image: 'mobile'
    },
    {
      id: 7,
      title: 'E-commerce\nSolutions',
      number: '07',
      bgColor: 'bg-red-500',
      accentColor: 'bg-pink-400',
      image: 'ecommerce'
    },
    {
      id: 8,
      title: 'UI/UX\nDesign',
      number: '08',
      bgColor: 'bg-yellow-500',
      accentColor: 'bg-orange-400',
      image: 'design'
    }
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  const getCardStyle = (index) => {
    const relativeIndex = (index - currentIndex + services.length) % services.length;
    
    if (relativeIndex === 0) {
      // Center card - straight
      return {
        transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)',
        opacity: 1,
        zIndex: 30
      };
    } else if (relativeIndex === 1 || relativeIndex === services.length - 1) {
      // Adjacent cards
      const isLeft = relativeIndex === services.length - 1;
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${isLeft ? '-320px' : '320px'}) rotate(${isLeft ? '-12deg' : '12deg'}) scale(0.9)`,
        opacity: 0.8,
        zIndex: 20
      };
    } else if (relativeIndex === 2 || relativeIndex === services.length - 2) {
      // Outer cards - partially visible
      const isLeft = relativeIndex === services.length - 2;
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${isLeft ? '-600px' : '600px'}) rotate(${isLeft ? '-20deg' : '20deg'}) scale(0.7)`,
        opacity: 0.4,
        zIndex: 10
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(-50%) translateY(-50%) scale(0.3)',
        opacity: 0,
        zIndex: 0
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
    <div className="min-h-screen relative overflow-hidden">
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
            Scroll to see all
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span>Keep scrolling</span>
            <div className="w-1 h-4 bg-gray-600 rounded-full opacity-60" />
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative h-[500px] w-full max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="absolute left-1/2 top-1/2 w-80 h-96 transition-all duration-500 ease-out"
              style={getCardStyle(index)}
            >
              <div className={`w-full h-full rounded-3xl ${service.bgColor} p-8 shadow-2xl relative overflow-hidden`}>
                {/* Image Content */}
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  {service.image === 'geometric' && (
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-800">
                      <div className="absolute inset-0 bg-blue-500/30">
                        <div className="absolute top-8 left-8 w-20 h-20 bg-blue-300/50 rounded-lg transform rotate-12" />
                        <div className="absolute bottom-12 right-8 w-16 h-32 bg-blue-700/40 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-blue-200/60 rounded-full" />
                      </div>
                    </div>
                  )}
                  
                  {service.image === 'grid' && (
                    <div className="w-full h-full bg-blue-400 p-4">
                      <div className="grid grid-cols-3 gap-2 h-full">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className={`rounded ${i === 4 ? 'bg-orange-400' : 'bg-blue-600'}`} />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {service.image === 'product' && (
                    <div className="relative w-full h-full bg-gradient-to-t from-purple-200 to-purple-100 flex items-center justify-center">
                      <div className="w-16 h-24 bg-white rounded-full shadow-lg relative">
                        <div className="absolute top-2 w-full h-4 bg-purple-300 rounded-full" />
                      </div>
                      <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full" />
                      <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-500 rounded-full" />
                    </div>
                  )}
                  
                  {service.image === 'collage' && (
                    <div className="relative w-full h-full bg-blue-100">
                      <div className="absolute top-4 left-4 w-20 h-12 bg-orange-400 rounded" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full" />
                      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-black rounded">
                        <div className="w-full h-8 bg-orange-300 mt-2" />
                      </div>
                      <div className="absolute bottom-4 right-4 text-xs text-gray-600">Marketing</div>
                    </div>
                  )}
                  
                  {service.image === 'interface' && (
                    <div className="relative w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-700">
                      <div className="absolute inset-2 bg-indigo-600/30 rounded-lg">
                        <div className="p-3">
                          <div className="w-full h-2 bg-indigo-300/50 rounded mb-2" />
                          <div className="w-3/4 h-2 bg-indigo-300/50 rounded mb-4" />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-indigo-400/50 rounded" />
                            <div className="h-12 bg-indigo-400/50 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {service.image === 'mobile' && (
                    <div className="relative w-full h-full bg-green-400 flex items-center justify-center">
                      <div className="w-20 h-32 bg-white rounded-lg shadow-lg relative">
                        <div className="absolute top-2 left-2 right-2 h-6 bg-green-300 rounded" />
                        <div className="absolute bottom-4 left-2 right-2 h-4 bg-gray-200 rounded" />
                      </div>
                    </div>
                  )}
                  
                  {(service.image === 'ecommerce' || service.image === 'design') && (
                    <div className="relative w-full h-full bg-gradient-to-br from-current to-transparent opacity-20">
                      <div className="absolute inset-4 bg-white/30 rounded-lg" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/50 rounded-full" />
                    </div>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Number Badge */}
                  <div className="flex justify-end">
                    <div className={`w-12 h-12 ${service.accentColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {service.number}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-white">
                    <h3 className="text-3xl font-bold leading-tight drop-shadow-lg">
                      {service.title.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-800 w-6' 
                    : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularServicesSection;