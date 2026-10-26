import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsOfUse({ setActivePage }) {
  const lastUpdated = "October 25, 2026";

  return (
    <div className="min-h-screen bg-main text-white header-clearance pb-24 relative">
      <div className="absolute inset-0 stars-overlay opacity-30 pointer-events-none"></div>

      <div className="site-container max-w-4xl relative z-10">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2-5 px-5 py-2-5 rounded-full bg-white-5 border border-white-15 text-white-90 hover-text-white hover-border-brand hover-bg-brand-10 text-sm font-semibold transition-all shadow-sm cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-brand group-hover-translate-left transition-transform" />
            <span>← Back to Home</span>
          </button>
        </div>

        {/* Header Title */}
        <div className="border-b border-white-10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3-5 py-1-5 rounded-full bg-white-10 border border-white-20 text-white text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3-5 h-3-5 text-brand" />
            <span>User Terms & Agreement</span>
          </div>

          <h1 className="font-display text-3xl sm-text-5xl font-extrabold tracking-tight text-white">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm sm-text-base text-muted">
            Last updated: <strong>{lastUpdated}</strong> • Focusli Labs
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-muted leading-relaxed text-sm sm-text-base">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Focusli mobile application and website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use Focusli.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service & Strict Mode Notice</h2>
            <p>
              Focusli provides digital well-being, app blocking, Pomodoro focus timers, and peer accountability tools. You explicitly acknowledge that activating <strong>"Strict Mode"</strong> intentionally enforces device locks and prevents early session cancellation. Focusli is not liable for missed notifications or restricted access during active sessions that you voluntarily initialized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. License & Intellectual Property</h2>
            <p>
              Focusli Labs grants you a personal, non-exclusive, non-transferable, revocable license to use the application for your personal, non-commercial educational productivity. All brand marks, UI assets, and algorithms are proprietary to Focusli Labs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Community Guidelines (Focus Squads)</h2>
            <p>
              When participating in Focus Squads, you agree to maintain appropriate usernames and conduct. Harassment, abuse, or spamming within community leaderboards will result in immediate termination of squad access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Focusli is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. While Focusli strives to deliver zero-friction cloud synchronization and execution, we do not guarantee uninterrupted or error-free operation across every Android hardware variant.
            </p>
          </section>

          <section className="pt-6 border-t border-white-10">
            <h2 className="text-xl font-bold text-white mb-3">6. Questions</h2>
            <p>
              For legal inquiries regarding our terms, email us at <a href="mailto:terms@focusli.app" className="text-brand hover-underline">terms@focusli.app</a>.
            </p>
          </section>

          {/* Bottom Navigation Buttons */}
          <div className="pt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white-10">
            <button
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2-5 rounded-full bg-brand text-black font-bold text-sm hover-brightness-110 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white-5 border border-white-10 text-white-80 hover-text-white text-sm font-semibold transition-all cursor-pointer"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
