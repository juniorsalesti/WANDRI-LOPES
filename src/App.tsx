import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Transformations from './components/Transformations';
import Programs from './components/Programs';
import WhyChooseMe from './components/WhyChooseMe';
import HowItWorks from './components/HowItWorks';
import AboutCoach from './components/AboutCoach';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import InteractiveAssessment from './components/InteractiveAssessment';

export default function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentGoal, setAssessmentGoal] = useState<'fat-loss' | 'muscle-building' | 'recomp' | ''>('');

  const handleOpenAssessment = (goalVal: 'fat-loss' | 'muscle-building' | 'recomp' | '' = '') => {
    setAssessmentGoal(goalVal);
    setIsAssessmentOpen(true);
  };

  const handleCloseAssessment = () => {
    setIsAssessmentOpen(false);
    setAssessmentGoal('');
  };

  const handleScrollToSuccess = () => {
    const el = document.getElementById('results_section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#080808] text-white selection:bg-neon-green selection:text-black">
      
      {/* Actionable Top Banner & Sticky Nav */}
      <Header onOpenAssessment={() => handleOpenAssessment()} />
      
      {/* Section 1 - full screen hero */}
      <Hero 
        onOpenAssessment={() => handleOpenAssessment()} 
        onScrollToStories={handleScrollToSuccess} 
      />
      
      {/* Section 2 - benefits cards */}
      <Benefits />
      
      {/* Section 3 - client transformation before/after */}
      <Transformations />
      
      {/* Section 4 - program selectors (Men/Women) */}
      <Programs onOpenAssessment={(goal) => handleOpenAssessment(goal)} />
      
      {/* Section 5 - why choose me pillars */}
      <WhyChooseMe />
      
      {/* Section 6 - how it works timeline */}
      <HowItWorks />
      
      {/* Section 7 - about coach bio */}
      <AboutCoach />
      
      {/* Section 8 - pricing package rates */}
      <Pricing onOpenAssessment={() => handleOpenAssessment()} />
      
      {/* Section 9 - final converting cta call to action */}
      <FinalCTA onOpenAssessment={() => handleOpenAssessment()} />
      
      {/* Section 10 - sitemaps, credits & policies */}
      <Footer />

      {/* Full-screen high-converting custom assessment modal */}
      <InteractiveAssessment 
        isOpen={isAssessmentOpen} 
        onClose={handleCloseAssessment} 
        initialGoal={assessmentGoal}
      />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 group flex items-center justify-center bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Falar no WhatsApp"
        id="whatsapp_floating_btn"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10"></span>
        
        {/* Tooltip on left (visible on hover) */}
        <span className="absolute right-full mr-3 bg-neutral-900/95 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:inline-block">
          Suporte WhatsApp
        </span>

        {/* Custom official SVG Icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}
