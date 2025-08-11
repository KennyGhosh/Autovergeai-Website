
import React from 'react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onGetInTouchClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetInTouchClick }) => {
  const words = ["Development", "Consultancy", "Education"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      {/* Fixed Get in Touch Button */}
      <button
        onClick={onGetInTouchClick}
        className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300 shadow-lg"
      >
        Get in Touch
      </button>

      {/* Centered Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main Animated Text */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >

              We are not a{' '}
              <span className="inline-block min-w-[280px] md:min-w-[400px] lg:min-w-[500px] text-left">
                <span 
  className={text-gray-600 italic transition-opacity duration-300 ${
    isVisible ? 'opacity-100' : 'opacity-0'
                }}
              >
                  {words[currentWordIndex]}
                </span>
              </span>{' '}
              Company.
            </h1>
          </div>
          
          {/* Static Bottom Text */}
          <div className="pt-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
              "We are all of the above"
            </p>
          </div>
          
          {/* Subtle Tagline */}
          <div className="pt-8">
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Custom AI solutions to automate your business — smarter, faster, better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


