import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RegoxLogo } from './RegoxBrandmark';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'WORK', path: '/work' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PROCESS', path: '/process' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#05070e]/80 backdrop-blur-xl border-b border-white/[0.09] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.1)]'
            : 'py-5 bg-[#05070e]/40 backdrop-blur-md border-b border-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.25)]'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Wordmark (Left) -> / */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg no-underline transition-opacity hover:opacity-90"
            aria-label="REGOX Homepage"
          >
            <RegoxLogo />
          </Link>

          {/* Desktop Navigation Links (Center): Translucent Glass Capsule */}
          <nav
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-[0.15em] no-underline px-4 py-2 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-bold bg-white/[0.08] border border-sky-400/30 shadow-[0_0_18px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button (Right) -> /contact */}
          <div className="hidden md:flex items-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.12em] no-underline transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-sky-400/50 shadow-[0_0_24px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.25)]'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] border-white/[0.12] hover:border-sky-400/40 text-slate-100 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                }`
              }
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={14} className="text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NavLink>
          </div>

          {/* Mobile Menu Trigger (Mobile only) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="px-3.5 py-2 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] text-slate-100 font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] active:scale-95 transition-transform"
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay — Frosted Translucent Glass Sheet */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#05070e]/92 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 md:hidden border-b border-white/[0.08]"
        >
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 pb-2 border-b border-white/[0.08] flex items-center justify-between">
              <span>// REGOX NAVIGATION</span>
              <span className="text-sky-400 text-[10px]">VER 2026.1</span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl sm:text-2xl font-extrabold uppercase tracking-tight flex items-center justify-between p-3.5 rounded-xl border no-underline transition-all ${
                      isActive
                        ? 'text-white bg-white/[0.08] border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'text-slate-300 hover:text-white bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.06]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-sky-400">0{idx + 1}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 no-underline shadow-[0_4px_25px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </NavLink>
            <div className="font-mono text-[11px] text-slate-500 text-center">
              REGOX TECHNOLOGY AGENCY • GLASS ARCHITECTURE
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

