import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3">
        <div className="flex items-center space-x-8">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4 text-black" />
            <span className="text-black font-medium">Home</span>
          </button>
          
          <button
            onClick={scrollToServices}
            className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-black" />
            <span className="text-black font-medium">Services</span>
          </button>
          
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-4 h-4 text-black" />
            <span className="text-black font-medium">Contact Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
};