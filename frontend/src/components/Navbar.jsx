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
      setIsScrolled(window.scrollY > 20);
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
            ? 'py-4 bg-[#07080a]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Wordmark (Left) -> / */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] rounded no-underline"
            aria-label="REGOX Homepage"
          >
            <RegoxLogo />
          </Link>

          {/* Desktop Navigation Links (Center): HOME, WORK, SERVICES, PROCESS, ABOUT, CONTACT */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-[0.16em] no-underline transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#f4f5f8] font-bold'
                      : 'text-[#8c94a4] hover:text-[#f4f5f8]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066ff] rounded-full shadow-[0_0_8px_#0066ff]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button (Right) -> /contact */}
          <div className="hidden md:flex items-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.12em] no-underline transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0066ff] text-white border-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                    : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,102,255,0.12)] border-[rgba(255,255,255,0.12)] hover:border-[rgba(0,102,255,0.45)] text-[#f4f5f8]'
                }`
              }
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={14} className="text-[#0066ff]" />
            </NavLink>
          </div>

          {/* Mobile Menu Trigger (Mobile only) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="px-3.5 py-2 rounded-[6px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] text-[#f4f5f8] font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
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
          className="fixed inset-0 z-40 bg-[#07080a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 md:hidden"
        >
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6e7686] pb-2 border-b border-[rgba(255,255,255,0.08)]">
              // REGOX NAVIGATION
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl sm:text-2xl font-extrabold uppercase tracking-tight flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)] no-underline transition-colors ${
                      isActive ? 'text-[#0066ff]' : 'text-[#f4f5f8] hover:text-[#0066ff]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#0066ff]">0{idx + 1}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] space-y-4">
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-[8px] bg-[#0066ff] text-white font-bold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 no-underline"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </NavLink>
            <div className="font-mono text-[11px] text-[#6d7585] text-center">
              REGOX TECHNOLOGY AGENCY • 2026 EDITION
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
