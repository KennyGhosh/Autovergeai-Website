import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onPrivacyPolicyClick: () => void;
  onTermsOfServiceClick: () => void;
  onGetInTouchClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onPrivacyPolicyClick,
  onTermsOfServiceClick,
  onGetInTouchClick,
}) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left - Logo & Icons */}
          <div className="space-y-4 md:w-1/3">
            <img
              src="/aglogo.png"
              alt="AutoVerge AI"
              className="h-20 w-auto object-contain"
            />

            {/* Social Icons */}
            <div className="flex items-center space-x-5 text-gray-200">
              <a
                href="https://www.youtube.com/@Kenny-Ghosh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-7 h-7 hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/kennyghosh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-7 h-7 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/kenny-ghosh-873753330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-7 h-7 hover:text-white" />
              </a>
            </div>

            {/* Email */}
            <p className="text-sm text-gray-200">✉︎ kennyghosh008@gmail.com</p>
          </div>

          {/* Right side container for Services and Legal */}
          <div className="flex md:ml-auto gap-20">
            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase">
                Services
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button
                    onClick={scrollToServices}
                    className="hover:text-white transition-colors text-left"
                  >
                    Inbound AI Calls
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToServices}
                    className="hover:text-white transition-colors text-left"
                  >
                    Outbound AI Calls
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToServices}
                    className="hover:text-white transition-colors text-left"
                  >
                    Custom AI Automations
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300 uppercase">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={onPrivacyPolicyClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={onTermsOfServiceClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex justify-start items-center">
            <p className="text-sm text-gray-400">
              © 2025 All Rights Reserved – Autoverge AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
