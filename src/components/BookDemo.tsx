import React, { useEffect, useRef } from 'react';

interface BookDemoProps {
  onGetInTouchClick: () => void;
}

export const BookDemo: React.FC<BookDemoProps> = ({ onGetInTouchClick }) => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/kennyghosh/ai-agent-discovery-call',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    document.head.appendChild(script);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            LET'S CONNECT
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Book a Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See AutoVerge AI in action. Schedule a personalized demo to discover how our solutions can transform your business.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
          <div
            ref={calendlyRef}
            style={{ minWidth: '320px', height: '700px' }}
          />

          <div className="mt-6 space-y-3 text-center">
            <div>
              <a
                href="https://calendly.com/kennyghosh/ai-agent-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm transition-colors"
              >
                Can't see the booking form? Click here
              </a>
            </div>

            <div>
              <button
                onClick={onGetInTouchClick}
                className="text-blue-600 hover:text-blue-800 underline text-sm transition-colors bg-transparent border-none cursor-pointer"
              >
                Can't find a time that works?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
