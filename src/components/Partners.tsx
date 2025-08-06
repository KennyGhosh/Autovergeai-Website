import React from 'react';
import './Partners.css'; // Import the CSS file below

export const Partners: React.FC = () => {
  const partners = [
    { name: 'HighLevel', logo: '/highlevel.png' },
    { name: 'Calendly', logo: '/calendly.svg' },
    { name: 'Retell AI', logo: '/retellai-logo-dark.svg' },
    { name: 'n8n', logo: '/n8n.svg' },
    { name: 'Twilio', logo: '/twillo.svg' },
    { name: 'Vapi', logo: '/vapi-logo.png' },
    { name: 'ElevenLabs', logo: '/11-labs.png' },
    { name: 'OpenAI', logo: '/open-ai.png' },
    { name: 'Make', logo: '/make-logo.webp' },
  ];

  const duplicated = [...partners, ...partners];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            OUR PARTNERS
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            Partners we work with
          </h2>
        </div>

        {/* Scrolling container */}
        <div className="partner-scroll-container">
          <div className="partner-scroll-track">
            {duplicated.map((partner, index) => (
              <div key={index} className="partner-card">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
