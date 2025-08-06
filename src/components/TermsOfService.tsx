import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-200 flex items-center">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-3xl font-bold text-black"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >Terms of Service</h1>
        </div>
        
        <div className="p-8 space-y-8">
         
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to AutoVerge AI. These Terms of Service govern your use of our AI automation services and related services operated by AutoVerge AI.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you 
              disagree with any part of these terms, then you may not access the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When using our Services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
              <li>Not interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Not attempt to gain unauthorized access to any portion of the Services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Service Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to maintain high availability of our Services, but we cannot guarantee 
              uninterrupted access. We may temporarily suspend or restrict access to some or all 
              of the Services for maintenance, updates, or other operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Services and their original content, features, and functionality are and will 
              remain the exclusive property of AutoVerge AI and its licensors. The Services are 
              protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may terminate or suspend your account and access to the Services immediately, 
              without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Upon termination, your right to use the Services will cease immediately. If you wish 
              to terminate your account, you may contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall AutoVerge AI, its directors, employees, partners, agents, suppliers, 
              or affiliates be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of India, without regard 
              to its conflict of law provisions. Any disputes arising from these Terms or the use 
              of our Services shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is 
              material, we will try to provide at least 30 days notice prior to any new terms taking 
              effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For any questions about these Terms, please contact us using the following information:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>Email address:</strong> kennyghosh008@gmail.com</p>
              <p className="text-gray-700"><strong>Phone Number:</strong> +91 7307179064</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};