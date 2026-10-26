import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExamMarquee from './components/ExamMarquee';
import ScreenTimeVisual from './components/ScreenTimeVisual';
import FeatureGrid from './components/FeatureGrid';
import CreatorWall from './components/CreatorWall';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import DownloadBox from './components/DownloadBox';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Handle URL hash changes for direct linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#/privacy') {
        setActivePage('privacy');
      } else if (hash === '#terms' || hash === '#/terms') {
        setActivePage('terms');
      } else {
        setActivePage('home');
        if (hash && hash !== '#' && hash !== '#/') {
          const sectionId = hash.replace(/^#\/?/, '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              const navOffset = 85;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 120);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const changePage = (page, sectionId = '') => {
    setActivePage(page);
    if (page === 'privacy') {
      window.history.pushState(null, '', '#privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms') {
      window.history.pushState(null, '', '#terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.history.pushState(null, '', `#${sectionId}`);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, activePage !== 'home' ? 80 : 0);
      } else {
        window.history.pushState(null, '', window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0B0B0D', color: '#fff', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Floating Glassmorphic Top Navbar */}
      <Navbar activePage={activePage} setActivePage={changePage} />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            <Hero />
            <ExamMarquee />
            <ScreenTimeVisual />
            <FeatureGrid />
            <CreatorWall />
            <Reviews />
            <Faq />
            <DownloadBox />
          </>
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicy setActivePage={changePage} />
        )}

        {activePage === 'terms' && (
          <TermsOfUse setActivePage={changePage} />
        )}
      </main>

      {/* Footer with Rotating Emblem */}
      <Footer setActivePage={changePage} />
    </div>
  );
}
