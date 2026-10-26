import React, { useState, useEffect } from 'react';
import { Shield, Lock, Flame, EyeOff, Award, CheckCircle2 } from 'lucide-react';

const YoutubeIcon = ({ className = "w-7 h-7 text-red-500" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function PhoneMockup({ variant = 'timer', tilt = 0, scale = 1 }) {
  const [secondsLeft, setSecondsLeft] = useState(1479); // 24:39
  const [selectedSound, setSelectedSound] = useState('rain');

  useEffect(() => {
    if (variant !== 'timer') return;
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev > 1 ? prev - 1 : 1500));
    }, 1000);
    return () => clearInterval(interval);
  }, [variant]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const totalDuration = 1500;
  const progressPercent = (totalDuration - secondsLeft) / totalDuration;
  const dashOffset = 276 * (1 - progressPercent);

  const tiltStyle = {
    transform: `rotate(${tilt}deg) scale(${scale})`,
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  return (
    <div
      className="relative mx-auto select-none phone-shadow rounded-44 p-bezel"
      style={{
        ...tiltStyle,
        width: '280px',
        background: 'linear-gradient(145deg, #3a3a4a, #1a1a22, #0f0f14)',
        boxShadow: '0 40px 80px -15px rgba(0,0,0,0.9), 0 0 50px rgba(0,229,153,0.1), inset 0 1px 0 rgba(255,255,255,0.15)'
      }}
    >
      {/* Inner phone bezel */}
      <div
        className="relative rounded-42 overflow-hidden flex flex-col justify-between"
        style={{
          background: 'linear-gradient(180deg, #1a1b2e 0%, #0d0e1a 40%, #080912 100%)',
          height: '520px'
        }}
      >
        {/* Screen glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(0,229,153,0.06) 0%, transparent 60%)'
          }}
        />

        {/* Status Bar with integrated Dynamic Island */}
        <div
          className="flex items-center justify-between text-11 pt-3-5 pb-1-5 z-20 relative select-none"
          style={{
            paddingLeft: '32px',
            paddingRight: '32px',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: "'JetBrains Mono', monospace"
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: '0.02em', minWidth: '42px', textAlign: 'left' }}>
            09:41
          </span>

          {/* Dynamic Island */}
          <div
            className="h-island px-2 rounded-full flex items-center justify-between gap-1-5 shadow-inner"
            style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="w-1-5 h-1-5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div className="w-1 h-1 rounded-full bg-emerald-400-80 mx-auto mt-half" />
            </div>
            <div className="w-1-5 h-1-5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Right Status (Live Sync + Signal) */}
          <div className="flex items-center gap-1-5" style={{ minWidth: '42px', justifyContent: 'flex-end' }}>
            <span style={{ color: '#00E599', fontWeight: 800, fontSize: '9px', letterSpacing: '0.04em' }}>SYNCED</span>
            <div className="flex items-center gap-0-5">
              <div className="indicator-3 h-2 rounded-sm" style={{ background: '#00E599' }} />
              <div className="indicator-3 h-2-5 rounded-sm" style={{ background: '#00E599' }} />
              <div className="indicator-3 h-3 rounded-sm" style={{ background: '#00E599' }} />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col px-4 pb-2 relative z-10 justify-center">

          {/* TIMER VARIANT */}
          {variant === 'timer' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-1">
              {/* Strict Mode Badge */}
              <div
                className="inline-flex items-center gap-1-5 px-3 py-1 rounded-full text-10 font-bold mb-3"
                style={{
                  background: 'rgba(0,229,153,0.12)',
                  border: '1px solid rgba(0,229,153,0.4)',
                  color: '#00E599'
                }}
              >
                <Lock style={{ width: '10px', height: '10px' }} />
                <span>STRICT MODE ACTIVE</span>
              </div>

              {/* Circular timer */}
              <div className="relative w-36 h-36 rounded-full flex items-center justify-center mb-3">
                <svg className="w-full h-full rotate-neg-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.07)" strokeWidth="5" fill="transparent" />
                  <circle
                    cx="50" cy="50" r="44"
                    stroke="#00E599"
                    strokeWidth="5"
                    strokeDasharray="276"
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    fill="transparent"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(0,229,153,0.7))', transition: 'stroke-dashoffset 1s linear' }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-28 font-extrabold leading-none text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {formattedTime}
                  </span>
                  <span className="text-10 mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>JEE Mains · Physics</span>
                </div>
              </div>

              {/* Info row */}
              <div
                className="w-full rounded-xl p-2-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center justify-between text-10">
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Anti-Quit Protection</span>
                  <span style={{ color: '#00E599', fontWeight: 700 }}>Locked 🔒</span>
                </div>
                <div className="flex items-center justify-between text-9 mt-1-5 pt-1-5 border-t border-white-5">
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>Distractions Blocked</span>
                  <span style={{ color: '#00E599', fontWeight: 700 }}>34 Attempts</span>
                </div>
              </div>

              {/* Whitelisted Study Apps Bar */}
              <div
                className="w-full rounded-xl p-2 mt-2 flex items-center justify-between text-9"
                style={{ background: 'rgba(0,229,153,0.06)', border: '1px solid rgba(0,229,153,0.2)' }}
              >
                <div className="flex items-center gap-1-5">
                  <div className="w-1-5 h-1-5 rounded-full bg-brand animate-pulse" />
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>Study Whitelist</span>
                </div>
                <span style={{ color: '#00E599', fontWeight: 600 }}>NCERT Reader &amp; Calc</span>
              </div>
            </div>
          )}

          {/* YOUTUBE VARIANT */}
          {variant === 'youtube' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-1">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2"
                style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)' }}
              >
                <YoutubeIcon className="w-6 h-6 text-red-500" />
              </div>

              <span
                className="inline-block px-2-5 py-0-5 rounded-full text-9 font-bold tracking-wider mb-1-5"
                style={{ background: 'rgba(239,68,68,0.18)', color: '#f87171' }}
              >
                SHORTS SHIELDED
              </span>

              <h4 className="text-sm font-bold text-white leading-tight mb-1">Shorts Feed Blocked</h4>
              <p className="text-9 leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Focusli filtered the algorithmic feed. Only whitelisted study lectures can play.
              </p>

              <div
                className="w-full rounded-xl p-2 text-left space-y-1-5 mb-2"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 style={{ width: '12px', height: '12px', color: '#00E599' }} />
                  <span className="text-9 font-medium text-white-80">Lectures Whitelisted</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeOff style={{ width: '12px', height: '12px', color: '#f87171' }} />
                  <span className="text-9 font-medium text-white-80">Infinite Reels / Shorts Off</span>
                </div>
              </div>

              {/* Active Lecture Box */}
              <div className="w-full p-2 rounded-xl bg-white-3 border border-white-5 text-left flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-red-500-20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 border-t-2 border-r-2 border-red-400 rotate-45 ml-neg-1"></div>
                </div>
                <div className="truncate">
                  <p className="text-9 font-bold text-white truncate">Physics Wallah - Mechanics</p>
                  <p className="text-8 text-white-40">Allowed • Study Channel</p>
                </div>
              </div>
            </div>
          )}

          {/* REELS VARIANT */}
          {variant === 'reels' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-1">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,229,153,0.2), rgba(0,179,119,0.1))',
                  border: '1px solid rgba(0,229,153,0.4)'
                }}
              >
                <Shield style={{ width: '24px', height: '24px', color: '#00E599' }} />
                <div
                  className="absolute top-neg-1 right-neg-1 w-4 h-4 rounded-full text-black font-bold text-9 flex items-center justify-center"
                  style={{ background: '#00E599' }}
                >
                  ✓
                </div>
              </div>

              <h4 className="text-sm font-bold text-white mb-0-5">Focus Shield On</h4>
              <p className="text-10 font-semibold mb-2" style={{ color: '#00E599' }}>Instagram is blocked</p>

              <div
                className="w-full py-2 px-3 rounded-xl mb-2"
                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="text-8 block mb-0-5" style={{ color: 'rgba(255,255,255,0.4)' }}>TODAY'S SCREEN TIME REDUCTION</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg font-bold text-white" style={{ fontFamily: 'monospace' }}>1h 15m</span>
                  <span className="text-9 font-bold" style={{ color: '#00E599' }}>(-3h 43m)</span>
                </div>
              </div>

              {/* Blocked App Log */}
              <div className="w-full space-y-1 text-left">
                <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white-5 text-8">
                  <span className="text-white-70">Instagram Reels</span>
                  <span className="text-red-400 font-semibold">Blocked 14:15</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white-5 text-8">
                  <span className="text-white-70">Snapchat Spotlight</span>
                  <span className="text-red-400 font-semibold">Blocked 13:40</span>
                </div>
              </div>
            </div>
          )}

          {/* SQUAD VARIANT */}
          {variant === 'squad' && (
            <div className="flex-1 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-11 font-bold text-white flex items-center gap-1">
                    <Award style={{ width: '13px', height: '13px', color: '#fbbf24' }} />
                    NEET 2026 Toppers
                  </span>
                  <span
                    className="text-9 px-2 py-0-5 rounded-full font-bold"
                    style={{ background: 'rgba(0,229,153,0.2)', color: '#00E599' }}
                  >
                    LIVE
                  </span>
                </div>

                <div className="space-y-1-5">
                  {[
                    { rank: 1, name: 'Arjun K. (You)', time: '7h 45m', rankBg: '#fbbf24', rankColor: '#000', highlight: true },
                    { rank: 2, name: 'Sneha Patel', time: '7h 12m', rankBg: '#cbd5e1', rankColor: '#000', highlight: false },
                    { rank: 3, name: 'Dev Sharma', time: '6h 30m', rankBg: '#92400e', rankColor: '#fff', highlight: false },
                  ].map(entry => (
                    <div
                      key={entry.rank}
                      className="flex items-center justify-between p-2 rounded-xl"
                      style={{
                        background: entry.highlight ? 'rgba(0,229,153,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${entry.highlight ? 'rgba(0,229,153,0.35)' : 'rgba(255,255,255,0.06)'}`,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-full text-9 font-bold flex items-center justify-center"
                          style={{ background: entry.rankBg, color: entry.rankColor }}
                        >
                          {entry.rank}
                        </span>
                        <span className="text-10 font-semibold text-white">{entry.name}</span>
                      </div>
                      <span className="text-10 font-bold" style={{ color: entry.highlight ? '#00E599' : 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl p-2 text-center"
                style={{ background: 'rgba(0,229,153,0.08)', border: '1px solid rgba(0,229,153,0.2)' }}
              >
                <span className="text-10 font-semibold flex items-center justify-center gap-1" style={{ color: '#00E599' }}>
                  <Flame style={{ width: '11px', height: '11px', color: '#fb923c' }} />
                  14-Day Streak Unbroken!
                </span>
              </div>
            </div>
          )}

          {/* AUDIO VARIANT */}
          {variant === 'audio' && (() => {
            const soundPresets = {
              rain: { title: 'Deep Rain Ambience', subtitle: 'Calming natural rainfall' },
              cafe: { title: 'Ambient Coffeehouse', subtitle: 'Cozy background murmur' },
              lofi: { title: 'Lo-Fi Study Beats', subtitle: 'Chill focus rhythm' },
              waves: { title: 'Binaural Alpha Wave', subtitle: '14Hz science-backed waves' }
            };
            const activePreset = soundPresets[selectedSound] || soundPresets.rain;

            return (
              <div className="flex-1 flex flex-col justify-between py-2 text-center">
                <div className="mt-2">
                  <span
                    className="text-9 font-bold uppercase tracking-wider px-2 py-0-5 rounded-full"
                    style={{ background: 'rgba(0,229,153,0.12)', color: '#00E599', border: '1px solid rgba(0,229,153,0.25)' }}
                  >
                    Soundscape Active
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2 mb-1 transition-all">{activePreset.title}</h4>
                  <p className="text-10 transition-all" style={{ color: 'rgba(255,255,255,0.45)' }}>{activePreset.subtitle}</p>
                </div>

                {/* Animated equalizer bars */}
                <div className="flex items-end justify-center gap-1-5 h-14 py-2" aria-hidden="true">
                  {[6, 12, 8, 14, 10, 4, 11, 7].map((h, i) => (
                    <div
                      key={i}
                      className="w-1-5 rounded-full"
                      style={{
                        height: `${h * 4}px`,
                        background: 'linear-gradient(to top, #00E599, #5FF5C2)',
                        opacity: 0.85,
                        animation: `pulse ${0.8 + i * 0.15}s ease-in-out infinite alternate`,
                        boxShadow: '0 0 6px rgba(0,229,153,0.5)'
                      }}
                    />
                  ))}
                </div>

                {/* Interactive sound choices */}
                <div className="grid grid-cols-2 gap-1-5 text-10">
                  {[
                    { id: 'rain', label: '🌧️ Heavy Rain' },
                    { id: 'cafe', label: '☕ Cozy Cafe' },
                    { id: 'lofi', label: '🎧 Lo-Fi Beats' },
                    { id: 'waves', label: '🌊 Alpha Wave' }
                  ].map(snd => {
                    const isCur = selectedSound === snd.id;
                    return (
                      <button
                        key={snd.id}
                        onClick={() => setSelectedSound(snd.id)}
                        className="p-1-5 rounded-lg font-medium text-left transition-all cursor-pointer"
                        style={{
                          background: isCur ? 'rgba(0,229,153,0.12)' : 'rgba(255,255,255,0.04)',
                          border: isCur ? '1px solid rgba(0,229,153,0.45)' : '1px solid rgba(255,255,255,0.07)',
                          color: isCur ? '#00E599' : 'rgba(255,255,255,0.65)'
                        }}
                      >
                        {snd.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Home Bar */}
        <div
          className="w-28 h-1 rounded-full mx-auto mb-3 mt-1"
          style={{ background: 'rgba(255,255,255,0.25)' }}
        />
      </div>
    </div>
  );
}
