import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';

import { BookDemo } from './components/BookDemo';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);
  
  const openTermsOfService = () => setIsTermsOfServiceOpen(true);
  const closeTermsOfService = () => setIsTermsOfServiceOpen(false);

  return (
    <div className="min-h-screen">
      <Header onGetInTouchClick={openContactModal} />
      <Hero onGetInTouchClick={openContactModal} />
      <Services />
      <HowItWorks />
     
      <BookDemo onGetInTouchClick={openContactModal} />
      <Partners />
      <About />
      <Footer 
        onPrivacyPolicyClick={openPrivacyPolicy}
        onTermsOfServiceClick={openTermsOfService}
        onGetInTouchClick={openContactModal}
      />
      <Navigation onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <PrivacyPolicy isOpen={isPrivacyPolicyOpen} onClose={closePrivacyPolicy} />
      <TermsOfService isOpen={isTermsOfServiceOpen} onClose={closeTermsOfService} />
    </div>
  );
}

export default App;