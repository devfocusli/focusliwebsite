import React, { useState } from 'react';
import { Sparkles, Shield, QrCode } from 'lucide-react';
import { GooglePlayBadge /*, AppStoreBadge */ } from './StoreBadges';

export default function DownloadBox() {
  const [showQr, setShowQr] = useState(false);

  return (
    <section id="download" className="py-16 sm-py-24 scroll-mt-24 bg-main relative">
      <div className="site-container">
        
        {/* Glow Container Box */}
        <div 
          className="relative rounded-28 sm-rounded-40 p-6 py-12 sm-p-14 md-p-16 text-center border border-brand-20 overflow-hidden shadow-2xl"
          style={{
            background: 'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(0, 229, 153, 0.15) 0%, rgba(0, 90, 56, 0.08) 50%, #080C0A 100%)'
          }}
        >
          {/* Subtle Star twinkle overlay */}
          <div className="absolute inset-0 stars-overlay opacity-30 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3-5 py-1-5 rounded-full bg-brand-20 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3-5 h-3-5" />
              <span>Get Started Today</span>
            </div>

            <h2 className="cta-title text-white">
              Ready to focus, and <br />
              <span className="text-brand-gradient">take back your time?</span>
            </h2>

            <p className="mt-5 text-base sm-text-xl text-muted max-w-lg mx-auto">
              Join 500,000+ ambitious students crushing their exam goals. Free to download on Android.{/* &amp; iOS */}
            </p>

            {/* Badges */}
            <div className="mt-10 flex flex-col sm-flex-row items-center justify-center gap-4">
              <GooglePlayBadge className="w-full sm-w-auto justify-center" />
              {/* iOS app currently in development */}
              {/* <AppStoreBadge className="w-full sm-w-auto justify-center" /> */}

              {/* QR Toggle button (visible on desktop/tablet only) */}
              <button
                onClick={() => setShowQr(!showQr)}
                aria-expanded={showQr}
                className="btn-outline text-sm py-3 px-5 w-full sm-w-auto justify-center hidden sm-inline-flex"
              >
                <QrCode className="w-4 h-4 text-brand" />
                <span>{showQr ? 'Hide QR Code' : 'Scan Phone QR'}</span>
              </button>
            </div>

            {/* Expandable QR Code Box */}
            {showQr && (
              <div 
                className="mt-8 p-6 rounded-2xl bg-black-80 border border-brand-40 max-w-xs mx-auto fade-in"
                aria-label="Scan QR Code to download Focusli"
              >
                <div className="w-40 h-40 mx-auto bg-white p-3 rounded-xl flex items-center justify-center shadow-lg">
                  {/* Clean SVG QR code graphic */}
                  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                    {/* Corner squares */}
                    <rect x="5" y="5" width="28" height="28" fill="#000" rx="3" />
                    <rect x="9" y="9" width="20" height="20" fill="#fff" />
                    <rect x="13" y="13" width="12" height="12" fill="#000" />

                    <rect x="67" y="5" width="28" height="28" fill="#000" rx="3" />
                    <rect x="71" y="9" width="20" height="20" fill="#fff" />
                    <rect x="75" y="13" width="12" height="12" fill="#000" />

                    <rect x="5" y="67" width="28" height="28" fill="#000" rx="3" />
                    <rect x="9" y="71" width="20" height="20" fill="#fff" />
                    <rect x="13" y="75" width="12" height="12" fill="#000" />

                    {/* QR Code Dots */}
                    <rect x="38" y="10" width="8" height="8" fill="#000" />
                    <rect x="50" y="10" width="8" height="8" fill="#000" />
                    <rect x="38" y="24" width="8" height="8" fill="#000" />
                    <rect x="50" y="24" width="8" height="8" fill="#000" />
                    <rect x="10" y="38" width="8" height="8" fill="#000" />
                    <rect x="24" y="38" width="8" height="8" fill="#000" />
                    <rect x="38" y="38" width="8" height="8" fill="#000" />
                    <rect x="54" y="38" width="8" height="8" fill="#000" />
                    <rect x="68" y="38" width="8" height="8" fill="#000" />
                    <rect x="82" y="38" width="8" height="8" fill="#000" />

                    <rect x="38" y="52" width="8" height="8" fill="#000" />
                    <rect x="50" y="52" width="8" height="8" fill="#000" />
                    <rect x="68" y="52" width="8" height="8" fill="#000" />
                    <rect x="38" y="66" width="8" height="8" fill="#000" />
                    <rect x="50" y="66" width="8" height="8" fill="#000" />
                    <rect x="68" y="66" width="8" height="8" fill="#000" />
                    <rect x="82" y="66" width="8" height="8" fill="#000" />
                    <rect x="38" y="80" width="8" height="8" fill="#000" />
                    <rect x="54" y="80" width="8" height="8" fill="#000" />
                    <rect x="68" y="80" width="8" height="8" fill="#000" />
                    <rect x="82" y="80" width="8" height="8" fill="#000" />
                  </svg>
                </div>
                <p className="text-xs text-white-80 font-medium mt-3">
                  Point your camera to download Focusli directly to your phone.
                </p>
              </div>
            )}

            {/* Micro reassurance info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm-gap-6 text-xs text-white-60">
              <span className="flex items-center gap-1-5">
                <Shield className="w-3-5 h-3-5 text-brand" />
                End-to-end encrypted
              </span>
              <span>•</span>
              <span>No credit card needed</span>
              <span>•</span>
              <span>Real-Time Cloud Sync</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
