import React from 'react';
import { ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function ScreenTimeVisual() {
  return (
    <section
      id="impact"
      style={{
        padding: '80px 0',
        background: '#07070A',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '96px'
      }}
    >
      {/* Background glow */}
      <div
        className="glow-blob glow-emerald"
        style={{ width: '550px', height: '550px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }}
        aria-hidden="true"
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Badge */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(0,229,153,0.1)',
              border: '1px solid rgba(0,229,153,0.25)',
              color: '#00E599',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <ShieldCheck style={{ width: '14px', height: '14px' }} />
            Proven Digital Detox
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem,5vw,3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '16px'
            }}
          >
            Block distracting apps.{' '}
            <span className="text-brand-gradient">Students save 3+ hours a day</span>
          </h2>
          <p style={{ color: '#8F95A5', fontSize: '1.05rem', lineHeight: 1.65 }}>
            See your daily screen time crash and your test scores surge. Focusli locks out algorithmic feeds before temptation strikes.
          </p>
        </div>

        {/* Big showcase card */}
        <div
          className="p-6 sm-p-10 md-p-12 rounded-32 sm-rounded-40 border border-white-10 relative overflow-hidden shadow-2xl"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        >
          {/* Radial background glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,153,0.1) 0%, transparent 65%)',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />

          {/* Stat row on desktop */}
          <div
            className="flex flex-col sm-flex-row items-center justify-between gap-3 sm-gap-4 mb-8 sm-mb-10 relative z-10"
          >
            {/* Before */}
            <div
              className="w-full sm-flex-1 p-4 sm-p-5 rounded-2xl bg-black-50 backdrop-blur-md border border-white-10"
            >
              <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '6px' }}>
                WITHOUT FOCUSLI
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp style={{ width: '18px', height: '18px', color: '#f87171' }} />
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f87171', fontFamily: 'monospace' }}>5h 18m</span>
              </div>
              <div 
                className="w-full bg-red-950-50 h-2 rounded-full mt-2 overflow-hidden border border-red-500-30"
                role="progressbar"
                aria-valuenow={88}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Screen time without Focusli: 5 hours 18 minutes"
              >
                <div className="bg-gradient-red-progress h-full progress-bar-88 rounded-full"></div>
              </div>
              <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>per day scrolling</span>
            </div>

            {/* Center arrow/vs */}
            <div
              className="py-1 px-3 sm-px-4 rounded-full bg-white-5 border border-white-10 text-white-40 text-xs font-bold tracking-widest shrink-0 my-2 sm-my-0 select-none"
            >
              VS
            </div>

            {/* After */}
            <div
              className="w-full sm-flex-1 p-4 sm-p-5 rounded-2xl bg-brand-10 backdrop-blur-md border border-brand-30"
            >
              <span style={{ display: 'block', fontSize: '10px', color: '#00E599', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '6px' }}>
                WITH FOCUSLI SHIELD
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingDown style={{ width: '18px', height: '18px', color: '#00E599' }} />
                <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#00E599', fontFamily: 'monospace' }}>1h 15m</span>
              </div>
              <div 
                className="w-full bg-emerald-950-50 h-2 rounded-full mt-2 overflow-hidden border border-emerald-500-30"
                role="progressbar"
                aria-valuenow={24}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Screen time with Focusli: 1 hour 15 minutes"
              >
                <div className="bg-gradient-emerald-progress h-full progress-bar-24 rounded-full"></div>
              </div>
              <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', color: 'rgba(0,229,153,0.85)', fontWeight: 600 }}>−3h 43m saved daily</span>
            </div>
          </div>

          {/* Phone Mockup */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', paddingTop: '16px', paddingBottom: '8px' }}>
            <PhoneMockup variant="reels" tilt={0} scale={1} />
          </div>

        </div>

      </div>
    </section>
  );
}
