import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AvatarPresence } from './components/AvatarPresence';
import { EmotionalValue } from './components/EmotionalValue';
import { Features } from './components/Features';
import { Personalization } from './components/Personalization';
// import { PricingPreview } from './components/PricingPreview'; // Hiding for later phase
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';
import { DemoChat } from './components/DemoChat';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Smooth scroll behavior for anchor links (if any)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-joi-dark selection:bg-joi-magenta selection:text-white overflow-hidden relative">
      {/* Global Ambient Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-joi-magenta/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-joi-cyan/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-joi-violet/5 blur-[150px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenDemo={openDemo} />
        <main>
          <Hero onOpenDemo={openDemo} />
          <AvatarPresence onOpenDemo={openDemo} />
          <EmotionalValue />
          <Features />
          <Personalization />
          {/* <PricingPreview />  -- Hiding Market/Gifts for now */}
          <Trust />
        </main>
        <Footer />
      </div>

      <DemoChat isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default App;