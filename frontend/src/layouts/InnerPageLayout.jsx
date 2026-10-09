import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { LiquidFilm } from '../components/LiquidFilm';

export const InnerPageLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f4f5f8] flex flex-col font-sans selection:bg-[#0066ff] selection:text-white relative overflow-x-hidden">
      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* GPU WebGL2 LiquidFilm Animated Background for all inner pages */}
      <LiquidFilm opacity={0.95} />

      {/* Subtle editorial contrast veil ensuring text readability without dimming fluid motion */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-[#07080a]/40 via-transparent to-[#07080a]/65 pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Shared Navigation */}
      <Navbar />

      {/* Page Content Viewport */}
      <main className="relative z-10 flex-1 pt-24 sm:pt-28 md:pt-32 pb-20">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default InnerPageLayout;
