import React from 'react';
import { Shield, ArrowLeft, Lock, Smartphone, Database, CheckCircle, AlertTriangle, Mail } from 'lucide-react';

export default function PrivacyPolicy({ setActivePage }) {
  const lastUpdated = "October 25, 2026";

  return (
    <div className="min-h-screen bg-main text-white header-clearance pb-24 relative">
      
      {/* Background Star Raster Fade */}
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
          <div className="inline-flex items-center gap-2 px-3-5 py-1-5 rounded-full bg-brand-15 border border-brand-30 text-brand text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3-5 h-3-5" />
            <span>Legal Compliance & Privacy Center</span>
          </div>

          <h1 className="font-display text-3xl sm-text-5xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm-text-base text-muted">
            Last updated: <strong>{lastUpdated}</strong> • Focusli Labs ("we", "us", or "our")
          </p>
        </div>

        {/* Executive Summary Card */}
        <div 
          className="glass-card p-6 sm-p-8 rounded-3xl border border-brand-30 mb-12"
          style={{ background: 'linear-gradient(to bottom, rgba(0,229,153,0.1) 0%, transparent 100%)' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-brand text-black flex items-center justify-center shrink-0 font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Our Core Privacy Commitment: Privacy-First &amp; Encrypted Sync
              </h3>
              <p className="mt-2 text-sm text-white-80 leading-relaxed">
                Focusli is architected as a <strong>Privacy-First productivity platform with secure cloud synchronization</strong>. We firmly believe that your screen time, app usage habits, study timers, and personal focus routines belong exclusively to you. Your study stats are securely synchronized with end-to-end encryption. <strong>We do not profile, sell, or monetize your private app activity to any third parties.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-card rounded-2xl p-6 border border-white-10 mb-12">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white-60 mb-3">
            Table of Contents
          </h4>
          <ol className="grid sm-grid-cols-2 gap-2 text-sm text-brand">
            <li><a href="#section-1" className="hover-underline">1. Information We Collect & Process</a></li>
            <li><a href="#section-2" className="hover-underline">2. Android Special Permissions Disclosures</a></li>
            <li><a href="#section-3" className="hover-underline">3. Accessibility Service Specific Notice</a></li>
            <li><a href="#section-4" className="hover-underline">4. Focus Squads & Community Features</a></li>
            <li><a href="#section-5" className="hover-underline">5. How We Protect Your Data</a></li>
            <li><a href="#section-6" className="hover-underline">6. Data Retention & One-Tap Erasure</a></li>
            <li><a href="#section-7" className="hover-underline">7. Children & Student Privacy</a></li>
            <li><a href="#section-8" className="hover-underline">8. International Rights (GDPR & CCPA)</a></li>
            <li><a href="#section-9" className="hover-underline">9. Contact Us</a></li>
          </ol>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-muted leading-relaxed text-sm sm-text-base">
          
          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">1.</span> Information We Collect & Process
            </h2>
            <p className="mb-4">
              Depending on how you configure and use Focusli, information is handled in two strictly separated layers:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white-5 border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand" />
                  A. Local On-Device Information (Never Sent to Cloud)
                </h4>
                <p className="text-sm text-white-70">
                  Focus session timestamps, streak milestones, custom app blocklists, daily schedule alarm configurations, and historical screen time summaries are stored locally via high-performance MMKV and encrypted SQLite on your smartphone.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white-5 border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-brand" />
                  B. Voluntary Community Data (Focus Squads)
                </h4>
                <p className="text-sm text-white-70">
                  If you choose to participate in Focus Squads, only your self-selected display username, chosen avatar, and total completed focus minutes are synchronized to the squad leaderboard. No list of apps you used or websites you visited is ever transmitted.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">2.</span> Android Special Permissions Disclosures
            </h2>
            <p className="mb-4">
              To operate effectively as an anti-distraction system on the Android operating system, Focusli requests specific system permissions. Each permission is requested with prominent in-app disclosures:
            </p>

            <ul className="space-y-4">
              <li className="p-4 rounded-xl bg-card border border-white-10">
                <strong className="text-white block mb-1">Usage Access (`PACKAGE_USAGE_STATS`):</strong>
                Allows Focusli to compute your daily screen time, app launches, and distraction metrics locally. This data remains on your hardware.
              </li>
              <li className="p-4 rounded-xl bg-card border border-white-10">
                <strong className="text-white block mb-1">Display Over Other Apps (`SYSTEM_ALERT_WINDOW`):</strong>
                Required to render the full-screen Focus Shield overlay when you launch a restricted app during an active focus session.
              </li>
              <li className="p-4 rounded-xl bg-card border border-white-10">
                <strong className="text-white block mb-1">Foreground Service (`FOREGROUND_SERVICE`):</strong>
                Keeps the focus countdown timer uninterrupted while your phone screen is locked and maintains the persistent status notification.
              </li>
              <li className="p-4 rounded-xl bg-card border border-white-10">
                <strong className="text-white block mb-1">Device Administrator (Optional for Strict Mode):</strong>
                Protects active study sessions against impulsive uninstallation or task termination until your study timer ends.
              </li>
            </ul>
          </section>

          {/* SECTION 3 - ACCESSIBILITY */}
          <section id="section-3" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">3.</span> Accessibility Service Specific Notice
            </h2>
            
            <div className="p-5 rounded-2xl bg-amber-500-10 border border-amber-500-30 text-amber-200 mb-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0-5" />
              <div className="text-sm leading-relaxed">
                <strong>Google Play Accessibility Service Policy Compliance:</strong>
                Focusli uses the Android `AccessibilityService` API strictly to help users with attention management and digital addiction recovery.
              </div>
            </div>

            <div className="space-y-3 text-white-80">
              <p>
                <strong>How Focusli Uses Accessibility:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Detecting the package identifier of the active foreground application in real time to trigger the Focus Shield blocker screen.
                </li>
                <li>
                  Inspecting the active YouTube URL path to selectively block algorithmic Shorts feeds while preserving educational study lectures.
                </li>
              </ul>

              <p className="pt-3">
                <strong>What Focusli NEVER Does with Accessibility:</strong>
              </p>
              <div className="grid sm-grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                  NO keystroke logging or keylogger functionality
                </div>
                <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                  NO reading of private chats or SMS messages
                </div>
                <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                  NO screen recording or audio recording
                </div>
                <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                  NO financial or banking credential collection
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="section-4" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">4.</span> Focus Squads & Community Features
            </h2>
            <p>
              When joining Focus Squads to study with classmates or peer aspirants:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your squad profile consists only of your nickname and study minutes.</li>
              <li>You can leave any squad at any time with a single tap, which immediately disassociates your statistics from the public group board.</li>
              <li>Cheer reactions and high-fives contain no personal identifiers.</li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">5.</span> How We Protect Your Data
            </h2>
            <p>
              We implement industry-standard encryption protocols (AES-256 for local sensitive caches, TLS 1.3 for squad cloud requests). Our secure architecture ensures that your data is encrypted both in transit and at rest.
            </p>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">6.</span> Data Retention & One-Tap Local Erasure
            </h2>
            <p>
              You maintain total dominion over your data. In the Focusli app under <code>Settings &gt; Data &amp; Storage</code>, you can:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Export all focus history to a JSON file.</li>
              <li>Perform a <strong>"One-Tap Complete Local Wipe"</strong> which deletes all local SQLite databases, MMKV preferences, and cached statistics instantly.</li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">7.</span> Children & Student Privacy
            </h2>
            <p>
              Focusli is specifically tailored to assist high school, college, and competitive exam students. We do not knowingly collect personal information from children under 13 without verified parental consent. If you believe a child has provided unauthorized data, please contact us for immediate deletion.
            </p>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">8.</span> Your Rights (GDPR, CCPA & Indian DPDP Act)
            </h2>
            <p>
              Depending on your jurisdiction, you have the right to access, rectify, port, or erase any personal information held by Focusli. You can exercise these rights directly within the application settings or by contacting our team.
            </p>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-36 pt-6 border-t border-white-10">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">9.</span> Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, suggestions, or concerns regarding this Privacy Policy or our Android accessibility disclosures, please contact our Data Protection Officer:
            </p>
            <div className="p-5 rounded-2xl bg-card border border-white-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-20 text-brand flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-semibold">Focusli Legal & Privacy Team</p>
                <a href="mailto:privacy@focusli.app" className="text-brand hover-underline text-sm">
                  privacy@focusli.app
                </a>
              </div>
            </div>
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
