import React, { useState, useEffect } from 'react';
import { Play, X, Heart, Volume2, CheckCircle2 } from 'lucide-react';

export default function CreatorWall() {
  const [activeReel, setActiveReel] = useState(null);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveReel(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeReel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeReel]);

  const creators = [
    {
      id: 'arjun',
      handle: '@studywith_arjun',
      platform: 'Instagram Reels',
      views: '4.2M views',
      title: 'How I cleared JEE AIR 240 without phone distractions',
      bgGradient: 'reel-bg-jee',
      tag: 'JEE Mains',
      quote: "I used to waste 4 hours daily watching shorts in bed. Strict Mode was the only thing that forced me to sit and solve 120 Irodov physics questions daily.",
      likes: '142K',
      stat: 'AIR 240 • 9.5h Daily Focus'
    },
    {
      id: 'doctor',
      handle: '@doctor_in_making',
      platform: 'Instagram Reels',
      views: '1.8M views',
      title: 'NEET 680+ study routine: Strict Mode saved my life',
      bgGradient: 'reel-bg-neet',
      tag: 'NEET 2026',
      quote: "My biology score jumped from 280 to 350. When you lock out WhatsApp and Instagram completely during session hours, NCERT lines stick immediately.",
      likes: '89K',
      stat: '685/720 Score • MBBS Aspirant'
    },
    {
      id: 'civil',
      handle: '@civilservice_prep',
      platform: 'Instagram Reels',
      views: '950K views',
      title: '12 hours uninterrupted study using Focus Squads',
      bgGradient: 'reel-bg-upsc',
      tag: 'UPSC CSE',
      quote: "Competing with other serious UPSC aspirants in the National Daily Squad kept me accountable through 12-hour daily study rounds for Prelims.",
      likes: '54K',
      stat: 'Prelims 118 Marks • 14h Streak'
    },
    {
      id: 'riya',
      handle: '@codewith_riya',
      platform: 'Instagram Reels',
      views: '640K views',
      title: 'Blocking YouTube shorts while coding lectures',
      bgGradient: 'reel-bg-dsa',
      tag: 'DSA / LeetCode',
      quote: "YouTube Study Mode is genius. I can watch Striver's A2Z DSA sheet lectures while the Shorts feed is dead-blocked so I don't lose hours scrolling.",
      likes: '41K',
      stat: '350+ LeetCode Solved • SDE-1'
    },
    {
      id: 'ca',
      handle: '@ca_aspirant_diaries',
      platform: 'Instagram Reels',
      views: '510K views',
      title: 'From 6 hrs screen time to 14 hrs daily deep work',
      bgGradient: 'reel-bg-ca',
      tag: 'CA Final',
      quote: "Strict Mode's anti-uninstall admin shield stopped me from bypassing the blocker during tax audit prep. My screen time plummeted from 6h to 45min.",
      likes: '32K',
      stat: 'CA Finalist • Screen time -5.2h'
    },
    {
      id: 'boards',
      handle: '@boardsexam_topper',
      platform: 'Instagram Reels',
      views: '380K views',
      title: '98% in Class 12th: No Instagram until session done',
      bgGradient: 'reel-bg-boards',
      tag: 'CBSE 12th',
      quote: "Focusli's scheduled study alarm activates strict lockdown automatically at 5 PM every evening. Replaced mindless reels with solid exam prep.",
      likes: '28K',
      stat: '98.4% CBSE Topper'
    }
  ];

  return (
    <section id="creators" className="py-16 sm-py-24 bg-deep relative">
      <div className="site-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm-mb-14">
          <h2 className="section-title text-white">
            You’ve probably <br className="hidden sm-block" />
            <span className="text-brand-gradient">heard of us already</span>
          </h2>
          <p className="mt-3 text-base sm-text-lg text-muted">
            Students and top exam rankers talk about Focusli across India.
          </p>
        </div>

        {/* 6-Card Reel Grid */}
        <div className="grid grid-cols-2 sm-grid-cols-3 lg-grid-cols-6 gap-3-5 sm-gap-4">
          {creators.map((c) => (
            <div 
              key={c.id}
              role="button"
              tabIndex={0}
              aria-label={`View story by ${c.handle}: ${c.title}`}
              onClick={() => setActiveReel(c)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveReel(c);
                }
              }}
              className="group cursor-pointer select-none flex flex-col justify-between focus-outline-none focus-ring-brand rounded-2xl"
            >
              <div 
                className={`relative rounded-2xl overflow-hidden ${c.bgGradient} border border-white-10 hover-border-brand-60 transition-all duration-300 shadow-lg flex flex-col justify-between p-3`}
                style={{ aspectRatio: '9/16' }}
              >
                {/* Top Badges */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2 py-0-5 rounded-full bg-black-60 backdrop-blur-md text-10 font-bold text-white border border-white-10">
                    {c.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand animate-ping" aria-hidden="true" />
                </div>

                {/* Play Button Center Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                  <div className="w-12 h-12 rounded-full bg-white-10 backdrop-blur-md border border-white-20 flex items-center justify-center group-hover-scale-110 group-hover-bg-brand transition-all duration-300">
                    <Play className="w-5 h-5 text-white group-hover-text-black fill-current ml-0-5" />
                  </div>
                </div>

                {/* Bottom Video Metadata */}
                <div className="z-10 bg-gradient-card-bottom mx-neg-3 mb-neg-3 p-3 pt-6">
                  <span className="inline-block px-2 py-0-5 rounded-md bg-black-70 text-10 font-mono font-bold text-brand border border-white-10 mb-1">
                    {c.views}
                  </span>
                  <p className="text-xs text-white-90 font-semibold line-clamp-2 leading-snug">
                    {c.title}
                  </p>
                </div>

              </div>

              {/* Creator Handle below card */}
              <div className="mt-2-5 px-1 min-h-38">
                <p className="text-xs font-bold text-white group-hover-text-brand transition-colors truncate">
                  {c.handle}
                </p>
                <p className="text-11 text-white-40">{c.platform}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Reel Playback Modal */}
      {activeReel && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black-85 backdrop-blur-md modal-backdrop"
          onClick={() => setActiveReel(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className={`relative w-full max-w-sm rounded-32 overflow-hidden border border-white-20 shadow-2xl ${activeReel.bgGradient} p-6 modal-content`}
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2-5 py-1 rounded-full bg-black-60 border border-white-20 text-xs font-bold text-brand">
                  {activeReel.tag}
                </span>
                <span className="text-xs text-white-60 font-mono">
                  {activeReel.views}
                </span>
              </div>
              <button
                onClick={() => setActiveReel(null)}
                className="w-9 h-9 rounded-full bg-white-10 hover-bg-white-20 border border-white-20 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Simulation */}
            <div className="relative rounded-2xl bg-black-60 border border-white-10 p-5 mb-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-20 border border-brand flex items-center justify-center mb-3 text-brand">
                <Volume2 className="w-6 h-6 animate-pulse" />
              </div>

              <h4 id="modal-title" className="text-base font-bold text-white mb-2 leading-snug">
                "{activeReel.title}"
              </h4>

              <div className="p-3-5 rounded-xl bg-white-5 border border-white-10 text-left mb-3">
                <p className="text-sm text-white-90 italic leading-relaxed">
                  "{activeReel.quote}"
                </p>
              </div>

              {/* Verified Result Banner */}
              <div className="inline-flex items-center gap-1-5 px-3 py-1 rounded-full bg-brand-15 border border-brand-30 text-brand text-xs font-bold">
                <CheckCircle2 className="w-3-5 h-3-5" />
                <span>{activeReel.stat}</span>
              </div>
            </div>

            {/* Creator Footer inside Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-white-10">
              <div>
                <p className="text-sm font-bold text-white">{activeReel.handle}</p>
                <p className="text-xs text-white-50">{activeReel.platform}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-white-70">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span>{activeReel.likes}</span>
                </div>
                <a
                  href="#download"
                  onClick={() => setActiveReel(null)}
                  className="btn-emerald text-xs py-2 px-3-5"
                >
                  Try Strict Mode
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
