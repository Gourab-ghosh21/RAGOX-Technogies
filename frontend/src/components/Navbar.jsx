import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RegoxLogo } from './RegoxBrandmark';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['work', 'services', 'process', 'about', 'casestudy', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#07080a]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Wordmark (Left) */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] rounded no-underline"
            aria-label="REGOX Homepage"
          >
            <RegoxLogo />
          </a>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.16em] no-underline transition-colors py-1 relative ${
                    isActive ? 'text-[#f4f5f8] font-bold' : 'text-[#8c94a4] hover:text-[#f4f5f8]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066ff] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button (Right) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.12em] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,102,255,0.12)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(0,102,255,0.45)] text-[#f4f5f8] no-underline transition-all duration-200"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={14} className="text-[#0066ff]" />
            </a>
          </div>

          {/* Mobile Menu Trigger (Mobile only) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="px-3.5 py-2 rounded-[6px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] text-[#f4f5f8] font-mono text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay — ONLY rendered when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#07080a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28 md:hidden"
        >
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6e7686] pb-2 border-b border-[rgba(255,255,255,0.08)]">
              // REGOX NAVIGATION
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-extrabold uppercase tracking-tight text-[#f4f5f8] hover:text-[#0066ff] flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)] no-underline"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#0066ff]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-[8px] bg-[#0066ff] text-white font-bold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 no-underline"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="font-mono text-[11px] text-[#6d7585] text-center">
              REGOX TECHNOLOGY AGENCY • 2026 EDITION
            </div>
          </div>
        </div>
      )}
    </>
  );
};
