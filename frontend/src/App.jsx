import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { SelectedWork } from './sections/SelectedWork';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { TechConvergence } from './sections/TechConvergence';
import { CaseStudyPreview } from './sections/CaseStudyPreview';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App = () => {
  return (
    <div className="min-h-screen bg-[#07080a] text-[#f4f5f8] flex flex-col font-sans selection:bg-[#0066ff] selection:text-white">
      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <TechConvergence />
        <CaseStudyPreview />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
