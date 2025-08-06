import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      emoji: '📞',
      description: 'We learn about your business and figure out what kind of agent you need.'
    },
    {
      number: '02',
      title: 'Scoping Call',
      emoji: '🔍',
      description: 'We plan from start to finish and provide insights for a high-impact voice agent.'
    },
    {
      number: '03',
      title: 'Development',
      emoji: '⌨️',
      description: 'Your agent & automations get built and connected to your systems.'
    },
    {
      number: '04',
      title: 'Testing & Launch',
      emoji: '🚀',
      description: 'Final testing, then your voice agent goes live and starts taking on calls.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
            Getting started is easy
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-1000 mb-4">
                  {step.number}
                </div>
                
                <div className="text-4xl mb-4">
                  {step.emoji}
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};