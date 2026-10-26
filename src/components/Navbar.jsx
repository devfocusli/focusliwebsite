import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track window scroll for background glassmorphism intensity and scroll-spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll-spy active section detection on home page
      if (activePage === 'home') {
        const sections = ['faq', 'reviews', 'creators', 'features', 'impact'];
        const scrollPosition = window.scrollY + 130;
        let current = '';

        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            current = id;
            break;
          }
        }
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activePage]);

  // Handle escape key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNav = (sectionId = '', page = 'home') => {
    setActivePage(page, sectionId);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'Why Focusli', id: 'impact' },
    { label: 'Student Wall', id: 'creators' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="fixed top-3 left-4 right-4 z-50 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          height: '56px',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px',
          paddingLeft: '20px',
          paddingRight: '8px',
          background: scrolled
            ? 'rgba(11, 11, 13, 0.94)'
            : 'rgba(18, 18, 24, 0.82)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 12px 40px rgba(0,0,0,0.55)'
        }}
      >
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNav('', 'home')}
          className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none text-left select-none p-0"
          aria-label="Focusli Home"
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00E599, #008F5D)',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#0B0B0D',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Shield style={{ width: '16px', height: '16px', color: '#00E599' }} />
            </div>
          </div>
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.5px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Focusli
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00E599',
                marginLeft: '4px',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }}
            />
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '26px' }}
        >
          {navLinks.map((link) => {
            const isSectionActive = activePage === 'home' && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id, 'home')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  fontWeight: isSectionActive ? 700 : 500,
                  color: isSectionActive ? '#00E599' : 'rgba(255,255,255,0.65)',
                  transition: 'color 0.2s, transform 0.2s',
                  padding: '4px 0'
                }}
                className="hover-text-white"
              >
                {link.label}
              </button>
            );
          })}

          {/* Privacy Page Link */}
          <button
            onClick={() => handleNav('', 'privacy')}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: activePage === 'privacy' ? 700 : 500,
              color: activePage === 'privacy' ? '#00E599' : 'rgba(255,255,255,0.65)',
              transition: 'color 0.2s',
              padding: '4px 0'
            }}
            className="hover-text-white"
          >
            Privacy
          </button>
        </div>

        {/* Right CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => handleNav('download', 'home')}
            className="btn-emerald"
            style={{ fontSize: '13px', padding: '9px 18px', gap: '6px' }}
          >
            <span>Get the app</span>
            <ArrowUpRight style={{ width: '15px', height: '15px' }} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'rgba(255,255,255,0.85)'
            }}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '20px', height: '20px' }} />
            ) : (
              <Menu style={{ width: '20px', height: '20px' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            maxWidth: '420px',
            margin: '8px auto 0',
            borderRadius: '20px',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(22,22,28,0.96), rgba(12,12,16,0.98))',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            textAlign: 'center'
          }}
          className="modal-content"
        >
          {navLinks.map((link) => {
            const isSectionActive = activePage === 'home' && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id, 'home')}
                className={`py-2-5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer border-none text-left ${
                  isSectionActive
                    ? 'bg-brand-15 text-brand'
                    : 'bg-transparent text-white-80 hover-text-white hover-bg-white-5'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '6px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button
              onClick={() => handleNav('', 'privacy')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer border-none ${
                activePage === 'privacy'
                  ? 'bg-brand-15 text-brand'
                  : 'bg-white-5 text-white-70 hover-text-white'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('', 'terms')}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer border-none ${
                activePage === 'terms'
                  ? 'bg-brand-15 text-brand'
                  : 'bg-white-5 text-white-70 hover-text-white'
              }`}
            >
              Terms of Use
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
