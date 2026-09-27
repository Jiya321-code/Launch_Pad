import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryConsole from './components/TelemetryConsole';
import TrustedPartners from './components/TrustedPartners';
import FeaturesGrid from './components/FeaturesGrid';
import PricingSection from './components/PricingSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import MissionControlModal from './components/MissionControlModal';
import DemoScheduleModal from './components/DemoScheduleModal';

export default function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [demoModalConfig, setDemoModalConfig] = useState({ open: false, context: '' });

  const handleOpenDemo = (context) => {
    setDemoModalConfig({ open: true, context });
  };

  const handleCloseDemo = () => {
    setDemoModalConfig({ open: false, context: '' });
  };

  const handleSelectTier = (tier) => {
    handleOpenDemo(`Order ${tier.name}`);
  };

  return (
    <div className="relative min-h-screen bg-[#051424] text-[#d4e4fa] selection:bg-[#A855F7] selection:text-white overflow-x-hidden">
      
      {/* Ambient Orbital Nebulae & Space Grid Matrix */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#b76dff]/15 via-[#b175ec]/10 to-transparent blur-[140px] rounded-full"></div>
        <div className="absolute top-[800px] -left-60 w-[700px] h-[700px] bg-[#00a6e0]/12 blur-[130px] rounded-full"></div>
        <div className="absolute top-[1600px] -right-40 w-[800px] h-[800px] bg-[#ddb7ff]/8 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-[900px] h-[600px] bg-[#842bd2]/12 blur-[140px] rounded-full"></div>
        {/* Fine HUD Coordinate Grid Matrix */}
        <div className="absolute inset-0 hud-grid opacity-60"></div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onOpenConsole={() => setConsoleOpen(true)}
          onOpenDemo={handleOpenDemo}
        />

        <main className="flex-1 pt-20">
          <Hero 
            onOpenConsole={() => setConsoleOpen(true)}
            onOpenDemo={handleOpenDemo}
          />
          
          <TelemetryConsole />

          <TrustedPartners />

          <FeaturesGrid />

          <PricingSection 
            onSelectTier={handleSelectTier}
          />

          <CtaBanner 
            onOpenDemo={handleOpenDemo}
          />
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <MissionControlModal 
        isOpen={consoleOpen}
        onClose={() => setConsoleOpen(false)}
      />

      <DemoScheduleModal
        isOpen={demoModalConfig.open}
        onClose={handleCloseDemo}
        context={demoModalConfig.context}
      />

    </div>
  );
}
