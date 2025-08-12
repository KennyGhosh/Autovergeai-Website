import React from 'react';
import { Linkedin, Target, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            MEET THE FOUNDER 
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6" 
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
          Kenny Ghosh
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-black rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8 h-full">
              <div className="w-40 h-52 rounded-full overflow-hidden mx-auto mb-6 border-4 border-black">
  <img
    src="/kenny.jpg"
    alt="Kenny Ghosh"
    className="w-full h-full object-cover"
  />
</div>







                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">Kenny Ghosh</h3>
                  <p className="text-gray-600 font-semibold mb-4">Founder & CEO</p>
                  <a
                    href="https://www.linkedin.com/in/kenny-ghosh-873753330/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm Kenny Ghosh, Founder of AutoVerge AI — where we supercharge businesses through custom AI automation. I am on a mission to eliminate repetitive tasks and empower businesses with high-impact voice automation and AI systems. With a deep belief in efficient scaling, I help brands save manpower, cut costs, and grow faster with tech.
              </p>
            </div>

            
            <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-black mb-3">Vision for the Future</h4>
              <p className="text-gray-600">
                "I envision a world where businesses can focus on what truly matters – innovation, creativity, and human connection – while AI handles the routine tasks that slow us down."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};