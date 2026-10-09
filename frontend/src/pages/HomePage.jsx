import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { CustomCursor } from '../components/CustomCursor';

/**
 * HomePage — True Multi-Page Architecture
 * Renders ONLY the hero screen on '/' with responsive viewport sizing.
 * All other sections live on their own dedicated routes:
 * /work, /services, /process, /about, /contact, and case study routes.
 */
export const HomePage = () => {
  return (
    <div className="min-h-[100svh] lg:h-[100svh] bg-[#05070e] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative overflow-x-hidden lg:overflow-hidden">
      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero screen only — fits viewport without scrolling into other sections */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;

