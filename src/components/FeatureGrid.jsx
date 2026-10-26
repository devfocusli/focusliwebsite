import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Lock, Shield, Award, Headphones, ShieldCheck, Zap, CloudLightning } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const YoutubeIcon = ({ style, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={style} className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const tabFeatures = [
  {
    id: 'strict-mode',
    tabLabel: 'Strict Mode',
    tabIcon: Lock,
    tag: 'Unbreakable Commitment',
    title: "No way out until you're done",
    desc: "Start a study session and Focusli holds the line. You can't quit early, bypass with task managers, or uninstall the app until your timer completes. No loopholes, no excuses.",
    variant: 'timer',
    highlights: [
      'Anti-uninstall device administrator enforcement',
      'Instant screen-lock overlay if blocked apps open',
      'Zero bypass cheats or task-killer loopholes'
    ],
    badgeText: 'Device Admin Shield Active'
  },
  {
    id: 'youtube-study',
    tabLabel: 'YouTube Study Mode',
    tabIcon: YoutubeIcon,
    tag: 'Surgical Content Blocker',
    title: 'Keep YouTube for learning, kill the doomscroll',
    desc: 'Whitelist only the study lectures and channels you need (e.g. Physics Wallah, Khan Academy). Shorts, recommendation rabbit holes, and comments remain completely locked.',
    variant: 'youtube',
    highlights: [
      'Shorts algorithmic feed instantly blocked',
      'Whitelist educational creators & channels',
      'Zero rabbit-hole distraction recommendations'
    ],
    badgeText: 'Lectures Allowed • Shorts Blocked'
  },
  {
    id: 'reels-block',
    tabLabel: 'Reels & App Blocker',
    tabIcon: Shield,
    tag: 'Instant Digital Detox',
    title: 'Browse with laser purpose, not mindless dopamine',
    desc: 'Distracting sites, Instagram Reels, and TikTok stay blocked during your study rounds. Customize your personal blacklist or use our instant one-tap high-yield exam profiles.',
    variant: 'reels',
    highlights: [
      'Instant block overlay on Instagram, TikTok & X',
      'Adult & gambling site shield',
      'One-tap exam presets (JEE, NEET, UPSC, Boards)'
    ],
    badgeText: 'Reels Shield Active'
  },
  {
    id: 'squads',
    tabLabel: 'Focus Squads',
    tabIcon: Award,
    tag: 'Peer Accountability',
    title: 'Focus with friends & climb the national ranks',
    desc: 'Turn solitary study sessions into friendly daily competition. Join an exam squad (JEE 2026, NEET Toppers, UPSC Daily), climb the leaderboard, and send real-time cheers.',
    variant: 'squad',
    highlights: [
      'Live peer study leaderboard and daily ranks',
      'Streak accountability with teammates',
      'Send & receive instant cheer emoji reactions'
    ],
    badgeText: 'Real-Time Squad Sync'
  },
  {
    id: 'soundscapes',
    tabLabel: 'Pomodoro & Audio',
    tabIcon: Headphones,
    tag: 'Science-Backed Flow',
    title: 'Focus in deep rounds, rest on time',
    desc: 'Work in science-backed 25-minute or 50-minute flow rounds with built-in rest periods. Play ambient rain, lo-fi beats, or binaural waves right inside your focus session.',
    variant: 'audio',
    highlights: [
      'Customizable flow & rest intervals',
      'Built-in ambient sound player (Rain, Lo-Fi, Cafe)',
      'Audio-haptic completion chimes'
    ],
    badgeText: 'Integrated Audio Engine'
  }
];

export default function FeatureGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabFeatures[activeTab];

  return (
    <section
      id="features"
      style={{
        padding: '80px 0 100px',
        scrollMarginTop: '96px',
        background: '#0B0B0D',
        position: 'relative'
      }}
    >
      <div className="site-container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Sparkles style={{ width: '14px', height: '14px', color: '#00E599' }} />
            Engineered for Serious Aspirants
          </div>

          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '16px'
            }}
          >
            Here's how Focusli helps you{' '}
            <span className="text-brand-gradient">get your focus back</span>
          </h2>
          <p style={{ color: '#8F95A5', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Designed to eliminate the mental friction of studying alone and lock away algorithmic distractions.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div
          role="tablist"
          aria-label="Focusli Key Features"
          className="flex items-center justify-start sm-justify-center overflow-x-auto gap-2 mb-8 sm-mb-10 pb-2 px-4 sm-px-1 max-w-full no-scrollbar"
        >
          {tabFeatures.map((feat, idx) => {
            const Icon = feat.tabIcon;
            const isActive = activeTab === idx;
            return (
              <button
                key={feat.id}
                role="tab"
                id={`tab-${feat.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${feat.id}`}
                onClick={() => setActiveTab(idx)}
                className="shrink-0"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: isActive ? '#00E599' : 'rgba(255,255,255,0.04)',
                  color: isActive ? '#0B0B0D' : 'rgba(255,255,255,0.7)',
                  border: isActive ? '1px solid #00E599' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isActive ? '0 4px 20px rgba(0,229,153,0.35)' : 'none'
                }}
              >
                <Icon style={{ width: '15px', height: '15px', color: isActive ? '#0B0B0D' : '#00E599' }} />
                <span>{feat.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Big Interactive Showcase Glass Container */}
        <div
          role="tabpanel"
          id={`tabpanel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="p-6 sm-p-10 md-p-12 rounded-28 sm-rounded-36 border border-white-10 relative overflow-hidden shadow-2xl mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(18,18,22,0.95) 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '15%',
              transform: 'translate(50%, -50%)',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(0,229,153,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '36px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Left: Feature Details */}
            <div style={{ textAlign: 'left' }}>
              <span
                style={{
                  display: 'inline-block',
                  borderRadius: '999px',
                  border: '1px solid rgba(0,229,153,0.3)',
                  padding: '4px 14px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#00E599',
                  background: 'rgba(0,229,153,0.1)',
                  marginBottom: '20px'
                }}
              >
                {current.tag}
              </span>

              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#fff',
                  marginBottom: '16px'
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  color: '#8F95A5',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '28px'
                }}
              >
                {current.desc}
              </p>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {current.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 500
                    }}
                  >
                    <CheckCircle2 style={{ width: '18px', height: '18px', color: '#00E599', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Reassurance Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.7)'
                }}
              >
                <ShieldCheck style={{ width: '14px', height: '14px', color: '#00E599' }} />
                <span>{current.badgeText}</span>
              </div>
            </div>

            {/* Right: Clean Mockup Display */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <PhoneMockup variant={current.variant} tilt={0} scale={1} />
            </div>
          </div>
        </div>

        {/* 3 Bento Feature Highlights Below */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Bento 1: Cloud Sync */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#121217',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(0,229,153,0.12)',
                border: '1px solid rgba(0,229,153,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <CloudLightning style={{ width: '20px', height: '20px', color: '#00E599' }} />
            </div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              Real-Time Cloud Sync
            </h4>
            <p style={{ color: '#8F95A5', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Instant cloud synchronization across all your study sessions. Your daily study minutes, unbroken streaks, and squad leaderboard ranks stay live and up-to-date.
            </p>
          </div>

          {/* Bento 2: Anti-Quit Device Admin */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#121217',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(239,68,68,0.12)',
                border: '1px solid rgba(239,68,68,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Lock style={{ width: '20px', height: '20px', color: '#f87171' }} />
            </div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              Anti-Quit Device Protection
            </h4>
            <p style={{ color: '#8F95A5', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Strict Mode locks out task killer loopholes, clearing app data, or uninstallation until your session finishes. Built for high-stakes exam discipline.
            </p>
          </div>

          {/* Bento 3: Surgical Filter */}
          <div
            className="glass-card"
            style={{
              padding: '32px 28px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#121217',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'rgba(251,191,36,0.12)',
                border: '1px solid rgba(251,191,36,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <Zap style={{ width: '20px', height: '20px', color: '#fbbf24' }} />
            </div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              Surgical Distraction Shield
            </h4>
            <p style={{ color: '#8F95A5', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Differentiate study content from algorithmic poison. Watch Khan Academy &amp; Physics Wallah uninterrupted while YouTube Shorts and Reels are dead-stopped.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
