import React from 'react';
import { Sparkles, Star, Award, Lock, Flame } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import { GooglePlayBadge, AppStoreBadge } from './StoreBadges';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '130px',
        paddingBottom: '80px',
        background: '#0B0B0D'
      }}
    >
      {/* Starfield overlay */}
      <div
        className="stars-overlay"
        style={{ position: 'absolute', inset: 0, opacity: 0.55, pointerEvents: 'none' }}
        aria-hidden="true"
      />

      {/* Ambient emerald glow */}
      <div
        className="glow-blob glow-emerald"
        style={{
          width: '600px',
          height: '600px',
          top: '20%',
          right: '5%',
          opacity: 0.2,
          pointerEvents: 'none'
        }}
      />

      {/* Hero Grid Container */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Copy & Actions */}
          <div style={{ textAlign: 'left', maxWidth: '620px' }}>
            {/* Tagline badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                marginBottom: '20px'
              }}
            >
              <Sparkles style={{ width: '14px', height: '14px', color: '#00E599' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                Trusted by 500,000+ ambitious students
              </span>
            </div>

            {/* Main headline */}
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: '#fff',
                marginBottom: '20px'
              }}
            >
              No.1 Focus App <br />
              <span className="text-brand-gradient">for Students</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: '#8F95A5',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '540px'
              }}
            >
              The offline-first study timer that kills distractions. Block Reels &amp; Shorts, lock down your study time with Strict Mode, and make every hour count.
            </p>

            {/* Download buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '32px'
              }}
            >
              <GooglePlayBadge />
              <AppStoreBadge />
            </div>

            {/* Trust laurels */}
            <div
              className="flex flex-wrap items-center gap-3 sm-gap-4-5 pt-1"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '2px' }} aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{ width: '15px', height: '15px', fill: '#fbbf24', color: '#fbbf24' }} />
                  ))}
                </div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>4.8★ on Play Store</span>
              </div>

              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award style={{ width: '15px', height: '15px', color: '#00E599' }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Zero Telemetry • 100% Offline</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Showcase with Floating Glass Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px 0'
            }}
          >
            {/* Ambient radiant glow behind phone */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '360px',
                height: '360px',
                background: 'radial-gradient(circle, rgba(0,229,153,0.25) 0%, rgba(0,143,93,0.08) 60%, transparent 80%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Direct Phone Wrapper for badges positioning */}
            <div className="relative inline-block" style={{ zIndex: 2 }}>
              {/* Floating Badge 1: Top-Right */}
              <div
                className="hero-floating-badge"
                style={{
                  position: 'absolute',
                  top: '12%',
                  right: '-36px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(18, 18, 23, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
                  whiteSpace: 'nowrap'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f87171' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Shorts &amp; Reels Blocked</span>
              </div>

              {/* Floating Badge 2: Mid-Left */}
              <div
                className="hero-floating-badge"
                style={{
                  position: 'absolute',
                  top: '46%',
                  left: '-40px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(18, 18, 23, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(0, 229, 153, 0.4)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Lock style={{ width: '13px', height: '13px', color: '#00E599' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#00E599' }}>Anti-Quit Shield</span>
              </div>

              {/* Floating Badge 3: Bottom-Right */}
              <div
                className="hero-floating-badge"
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  right: '-32px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(18, 18, 23, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(251, 191, 36, 0.4)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Flame style={{ width: '13px', height: '13px', color: '#fb923c' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#fbbf24' }}>14-Day Streak</span>
              </div>

              {/* Phone Mockup */}
              <PhoneMockup variant="timer" tilt={0} scale={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient transition into next section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, #0B0B0D)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </section>
  );
}
