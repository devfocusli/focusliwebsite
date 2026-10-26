import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handlePageSwitch = (page, sectionId = '') => {
    setActivePage(page, sectionId);
  };

  return (
    <footer className="relative bg-deep border-t border-white-5 py-12 sm-py-16 overflow-hidden">
      
      {/* Background Star Raster Fade */}
      <div className="absolute inset-0 stars-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="site-container relative z-10 flex flex-col md-flex-row items-center justify-between gap-8 md-gap-10">
        
        {/* Rotating Circular Brand Stamp */}
        <div className="flex items-center gap-4 sm-gap-6 text-center sm-text-left">
          <div 
            className="relative w-24 h-24 sm-w-28 sm-h-28 flex items-center justify-center shrink-0 mx-auto"
            aria-label="Focusli Labs - Real-Time Sync - Live Squads"
          >
            {/* Circular text SVG spinning slowly */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full rotating-stamp select-none"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="footerTextPath"
                  d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
                  fill="none"
                />
              </defs>
              <text className="text-11 font-mono tracking-stamp fill-white-60 uppercase">
                <textPath href="#footerTextPath" startOffset="50%" textAnchor="middle">
                  • FOCUSLI LABS • REAL-TIME SYNC • LIVE SQUADS •
                </textPath>
              </text>
            </svg>

            {/* Emblem center */}
            <div className="absolute inset-0 m-auto w-11 h-11 sm-w-12 sm-h-12 rounded-2xl footer-emblem flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 sm-w-6 sm-h-6 text-brand" />
            </div>
          </div>

          <div className="text-left hidden sm-block max-w-xs">
            <h4 className="font-display font-bold text-lg text-white">Focusli</h4>
            <p className="text-xs text-muted mt-0-5 leading-relaxed">
              Empowering students to build unbreakable focus and reclaim their future.
            </p>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted max-w-md">
          <button 
            onClick={() => handlePageSwitch('home')}
            className="hover-text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => handlePageSwitch('home', 'features')}
            className="hover-text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => handlePageSwitch('home', 'creators')}
            className="hover-text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            Student Wall
          </button>
          <button 
            onClick={() => handlePageSwitch('privacy')}
            className="hover-text-brand transition-colors bg-transparent border-none cursor-pointer font-semibold"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => handlePageSwitch('terms')}
            className="hover-text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            Terms of Use
          </button>
          <a 
            href="mailto:dev.focusli@gmail.com" 
            className="hover-text-white transition-colors text-inherit no-underline"
          >
            Support
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted text-center md-text-right">
          <p>© {new Date().getFullYear()} Focusli Labs. All rights reserved.</p>
          <p className="text-11 text-white-40 mt-1">
            Engineered with privacy in mind.
          </p>
        </div>

      </div>
    </footer>
  );
}
