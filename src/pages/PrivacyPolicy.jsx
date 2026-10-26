import React from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Lock, 
  Smartphone, 
  Database, 
  CheckCircle, 
  AlertTriangle, 
  Mail, 
  EyeOff, 
  Layers, 
  Zap, 
  Clock, 
  Bell, 
  RefreshCw,
  Server,
  FileCheck,
  UserCheck
} from 'lucide-react';

export default function PrivacyPolicy({ setActivePage }) {
  const lastUpdated = "October 26, 2026";

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
            <span>Google Play &amp; Global Privacy Compliance</span>
          </div>

          <h1 className="font-display text-3xl sm-text-5xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm-text-base text-muted">
            Last updated: <strong>{lastUpdated}</strong> • Focusli ("we", "us", or "our") • Package: <code>com.focusli</code>
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
                Our Privacy Promise: Zero Ads, No Logins, Complete Data Integrity
              </h3>
              <p className="mt-2 text-sm text-white-80 leading-relaxed">
                Focusli is designed to protect your focus, not harvest your data. We operate an <strong>authentication-free, hardware-backed identity model</strong> — no email or password is required to use the app. All app blocking, screen time analytics, and Strict Mode protections run directly on your phone's hardware. <strong>We do not sell, rent, monetize, or profile your private browsing activity or app usage.</strong>
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
            <li><a href="#section-1" className="hover-underline">1. Anonymous Hardware Identity Model</a></li>
            <li><a href="#section-2" className="hover-underline">2. Information We Collect &amp; Process</a></li>
            <li><a href="#section-3" className="hover-underline">3. Android Permissions &amp; System Disclosure</a></li>
            <li><a href="#section-4" className="hover-underline">4. Accessibility Service Policy Declaration</a></li>
            <li><a href="#section-5" className="hover-underline">5. Device Admin &amp; Anti-Uninstall Shield</a></li>
            <li><a href="#section-6" className="hover-underline">6. Cloud Synchronization &amp; Focus Squads</a></li>
            <li><a href="#section-7" className="hover-underline">7. Data Storage, Security &amp; Encryption</a></li>
            <li><a href="#section-8" className="hover-underline">8. Data Retention &amp; User Deletion Rights</a></li>
            <li><a href="#section-9" className="hover-underline">9. Children &amp; Student Privacy</a></li>
            <li><a href="#section-10" className="hover-underline">10. Global Rights (GDPR, CCPA &amp; DPDP)</a></li>
            <li><a href="#section-11" className="hover-underline">11. Contact &amp; Data Protection Officer</a></li>
          </ol>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-muted leading-relaxed text-sm sm-text-base">
          
          {/* SECTION 1 */}
          <section id="section-1" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">1.</span> Anonymous Hardware Identity Model
            </h2>
            <p className="mb-4">
              Unlike traditional applications that mandate personal identifiers, social logins, or phone numbers, Focusli is built on an <strong>Authentication-Free Architecture</strong>:
            </p>
            <div className="p-4 rounded-xl bg-card border border-white-10 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Smartphone className="w-4 h-4 text-brand" />
                <span>Zero Account Barrier</span>
              </div>
              <p className="text-sm text-white-70">
                You never need to submit your email, phone number, Google account, or social media credentials to use Focusli. The application establishes identity through a pseudonymous, hardware-derived device identifier (Android ID, formatted as <code>dev-xxxxxx</code>).
              </p>
              <p className="text-sm text-white-70">
                This identifier is used strictly to maintain your session statistics, custom schedules, and Focus Squad leaderboard scores without ever attaching them to your real-world identity.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="section-2" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">2.</span> Information We Collect &amp; Process
            </h2>
            <p className="mb-4">
              We handle user data transparently, categorizing what remains solely on your physical device versus what is synchronized with our secure cloud servers:
            </p>
            
            <div className="space-y-4">
              {/* Local Data */}
              <div className="p-4 rounded-xl bg-white-5 border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand" />
                  A. Stored Locally On Your Device (MMKV &amp; Encrypted SQLite)
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white-70 mt-2">
                  <li><strong>Custom App Blocklists &amp; Whitelists:</strong> The specific applications you choose to restrict or allow during focus sessions.</li>
                  <li><strong>Hardware Screen Time Metrics:</strong> Aggregated daily screen time and distraction attempt counters queried directly from Android's <code>UsageStatsManager</code>.</li>
                  <li><strong>Active Countdown State:</strong> High-frequency timer milliseconds, flow rounds, and ambient sound preset choices.</li>
                  <li><strong>Theme &amp; Display Preferences:</strong> Light/dark theme configuration and UI settings.</li>
                </ul>
              </div>

              {/* Synchronized Data */}
              <div className="p-4 rounded-xl bg-white-5 border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                  <Server className="w-4 h-4 text-brand" />
                  B. Synchronized With Our Secure Cloud Service
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white-70 mt-2">
                  <li><strong>Anonymous Device Token:</strong> Passed securely via <code>X-Device-Id</code> headers to link your session backups.</li>
                  <li><strong>Focus Session Logs:</strong> Duration in minutes, session title (e.g., "JEE Physics Mock"), completion status, and timestamp.</li>
                  <li><strong>Daily Streaks &amp; Milestones:</strong> Total completed focus hours and consecutive daily streak counts.</li>
                  <li><strong>Focus Squads (Community):</strong> Your chosen display nickname (e.g., "Arjun K."), squad membership, and cheer emoji reactions sent to teammates.</li>
                  <li><strong>Custom Scheduled Routines:</strong> Day-of-week and time intervals for automated focus alarms.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="section-3" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">3.</span> Android Permissions &amp; System Disclosures
            </h2>
            <p className="mb-4">
              To enforce digital well-being boundaries on the Android operating system, Focusli requests specific system permissions. In accordance with Google Play Developer policies, each permission serves an explicit, user-facing function:
            </p>

            <ul className="space-y-4">
              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Layers className="w-4 h-4 text-brand" />
                  <span>Display Over Other Apps (SYSTEM_ALERT_WINDOW)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Allows Focusli to display the full-screen Focus Shield overlay (<code>BlockOverlayService</code>) when you launch a restricted distraction application during an active session, as well as the optional floating countdown timer pill (<code>FloatingTimerOverlayManager</code>).
                </p>
              </li>

              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Clock className="w-4 h-4 text-brand" />
                  <span>Usage Access (PACKAGE_USAGE_STATS)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Allows the app's Insights engine to read hardware usage statistics from Android's <code>UsageStatsManager</code> to generate your daily screen time charts, app launch attempts, and distraction reduction metrics. This raw data is never uploaded to remote analytics platforms.
                </p>
              </li>

              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Zap className="w-4 h-4 text-brand" />
                  <span>Query All Packages (QUERY_ALL_PACKAGES)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Focusli is an application blocker. It requires package visibility to display a list of installed apps so you can select which social media, gaming, or browser apps to place on your personal study blocklist or whitelist.
                </p>
              </li>

              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <RefreshCw className="w-4 h-4 text-brand" />
                  <span>Foreground Service with Special Use (FOREGROUND_SERVICE)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Focusli registers a foreground service declared under the <code>specialUse</code> subtype (<code>PROPERTY_SPECIAL_USE_FGS_SUBTYPE = "Focus timer countdown and application blocker service"</code>). This keeps the timer countdown alive in your status bar and prevents Android from killing your active session while the screen is locked.
                </p>
              </li>

              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Bell className="w-4 h-4 text-brand" />
                  <span>Exact Alarms (SCHEDULE_EXACT_ALARM)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Used by <code>SchedulerAlarmReceiver</code> to trigger your recurring study routines with millisecond precision at the exact start and end times you configure. Restored automatically after phone reboots via <code>RECEIVE_BOOT_COMPLETED</code>.
                </p>
              </li>

              <li className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <BatteryChargingIcon className="w-4 h-4 text-brand" />
                  <span>Ignore Battery Optimizations (REQUEST_IGNORE_BATTERY_OPTIMIZATIONS)</span>
                </div>
                <p className="text-sm text-white-70">
                  <strong>Purpose:</strong> Prompts the user to exclude Focusli from aggressive OEM battery savers (e.g., Xiaomi MIUI/HyperOS, Samsung OneUI, Vivo, OPPO) so active countdown timers and scheduled routines are not killed in the background.
                </p>
              </li>
            </ul>
          </section>

          {/* SECTION 4 - ACCESSIBILITY */}
          <section id="section-4" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">4.</span> Accessibility Service Policy Declaration
            </h2>
            
            <div className="p-5 rounded-2xl bg-amber-500-10 border border-amber-500-30 text-amber-200 mb-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0-5" />
              <div className="text-sm leading-relaxed">
                <strong>Prominent Google Play Accessibility Declaration:</strong>
                Focusli utilizes Android's <code>AccessibilityService</code> API (implemented via <code>BlockerAccessibilityService</code>) strictly to assist users with digital addiction recovery, focus management, and exam concentration.
              </div>
            </div>

            <div className="space-y-4 text-white-80">
              <div className="p-4 rounded-xl bg-card border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-2">How Accessibility is Used:</h4>
                <ul className="list-disc pl-5 space-y-1-5 text-sm text-white-70">
                  <li>
                    <strong>Foreground Package Detection:</strong> In real time, the service checks the package name of the active window. If it matches a user-blocked app during an active focus session countdown, the service triggers the Focus Shield overlay.
                  </li>
                  <li>
                    <strong>Surgical YouTube Shorts Filtering:</strong> The service inspects the active window URL in YouTube to selectively block algorithmic Shorts feeds while allowing educational video lectures to play uninterrupted.
                  </li>
                  <li>
                    <strong>Strictly Session-Bound:</strong> When no timer is running (<code>isSessionActive = false</code>), blocking logic is completely inactive and overlays are immediately dismissed.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white-10">
                <h4 className="text-white font-semibold text-sm mb-2">What Focusli NEVER Does with Accessibility:</h4>
                <div className="grid sm-grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO keystroke or password logging</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO reading private messages or SMS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO screen, audio, or video recording</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO financial or banking data access</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO alteration of Android security settings</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black-40 border border-red-500-20 text-xs text-red-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>NO transmission of private app content</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section id="section-5" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">5.</span> Device Administrator &amp; Anti-Uninstall Shield
            </h2>
            <p className="mb-4">
              Focusli includes an optional <strong>"Strict Mode"</strong> feature powered by Android's Device Administration API (<code>StrictModeDeviceAdminReceiver</code>):
            </p>
            <div className="p-4 rounded-xl bg-card border border-white-10 space-y-2">
              <p className="text-sm text-white-70">
                <strong>Purpose:</strong> Students facing severe digital addiction frequently uninstall productivity timers during weak moments of impulse. With Strict Mode activated, device administrator privileges prevent uninstallation or clearing app storage while a session timer is counting down.
              </p>
              <p className="text-sm text-white-70">
                <strong>User Control:</strong> Device Administrator permissions are 100% voluntary. You can deactivate them at any time in the app's Settings menu as soon as your active timer concludes. Focusli never uses Device Administrator privileges for remote wipes or device lockouts.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="section-6" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">6.</span> Cloud Synchronization &amp; Focus Squads
            </h2>
            <p className="mb-4">
              When using Focusli's connected features:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Focus Squads:</strong> When you create or join a public or private study squad, your self-chosen nickname and total completed study minutes are displayed on the group leaderboard.
              </li>
              <li>
                <strong>Live Cheers &amp; Reactions:</strong> When you send a motivational cheer emoji (🔥, 👏, 🎯) to a fellow aspirant, only the emoji and your display nickname are transmitted.
              </li>
              <li>
                <strong>Zero Social Profiling:</strong> We do not track your friend graphs, contacts, or location. You can leave any squad at any time with a single tap, which immediately disassociates your statistics from the leaderboard.
              </li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section id="section-7" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">7.</span> Data Storage, Security &amp; Encryption
            </h2>
            <p className="mb-4">
              We employ strict industry-standard measures to safeguard your information:
            </p>
            <div className="grid sm-grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Shield className="w-4 h-4 text-brand" />
                  <span>On-Device Storage</span>
                </div>
                <p className="text-xs text-white-70">
                  Local cache and preferences are secured using MMKV binary storage and encrypted SQLite sandboxes, protected by Android's native Linux application sandbox isolation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white-10">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Lock className="w-4 h-4 text-brand" />
                  <span>Transit Encryption</span>
                </div>
                <p className="text-xs text-white-70">
                  All communication between the Focusli app and our cloud endpoints occurs exclusively over Transport Layer Security (TLS 1.3 / HTTPS), preventing interception or man-in-the-middle attacks.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="section-8" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">8.</span> Data Retention &amp; User Deletion Rights
            </h2>
            <p className="mb-4">
              You maintain total autonomy over your data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>One-Tap Local Wipe:</strong> In the Focusli app under <code>Settings &gt; Data &amp; Storage</code>, you can wipe all local session logs, schedules, and cached statistics instantly.
              </li>
              <li>
                <strong>Cloud Data Deletion:</strong> You can request complete deletion of any synchronized session records associated with your anonymous Device ID by emailing <code>dev.focusli@gmail.com</code> or submitting a request via our in-app support channel. We process all deletion requests within 30 days.
              </li>
              <li>
                <strong>App Uninstallation:</strong> Uninstalling the application completely erases all local app data and encryption keys from your device hardware.
              </li>
            </ul>
          </section>

          {/* SECTION 9 */}
          <section id="section-9" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">9.</span> Children &amp; Student Privacy
            </h2>
            <p>
              Focusli is specifically tailored to assist high school, college, and competitive exam students (such as JEE, NEET, UPSC, CA, and Board exams). We do not knowingly collect personal identifiable information from children under 13 without verified parental consent. If a parent or guardian becomes aware that their child has provided unauthorized data, please contact us immediately at <code>dev.focusli@gmail.com</code> for expedited removal.
            </p>
          </section>

          {/* SECTION 10 */}
          <section id="section-10" className="scroll-mt-36">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">10.</span> Global Rights (GDPR, CCPA &amp; Indian DPDP Act)
            </h2>
            <p className="mb-3">
              Depending on your location, you enjoy comprehensive statutory privacy rights under the European Union GDPR, California Consumer Privacy Act (CCPA), and the Indian Digital Personal Data Protection (DPDP) Act 2023:
            </p>
            <ul className="list-disc pl-5 space-y-1-5 text-sm text-white-70">
              <li><strong>Right to Access &amp; Portability:</strong> The right to obtain a copy of all focus data associated with your device.</li>
              <li><strong>Right to Rectification:</strong> The right to correct your profile nickname or target hours.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> The right to have your cloud sync logs permanently purged.</li>
              <li><strong>Non-Discrimination:</strong> We will never degrade service quality or charge different prices for exercising your privacy rights.</li>
            </ul>
          </section>

          {/* SECTION 11 */}
          <section id="section-11" className="scroll-mt-36 pt-6 border-t border-white-10">
            <h2 className="text-xl sm-text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-brand">11.</span> Contact &amp; Data Protection Officer
            </h2>
            <p className="mb-4">
              If you have any questions, compliance requests, or concerns regarding this Privacy Policy or our Android accessibility service implementation, please contact our Data Protection Team:
            </p>
            <div className="p-5 rounded-2xl bg-card border border-white-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-20 text-brand flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-semibold">Focusli Legal &amp; Privacy Operations</p>
                <a href="mailto:dev.focusli@gmail.com" className="text-brand hover-underline text-sm font-medium">
                  dev.focusli@gmail.com
                </a>
                <p className="text-xs text-muted mt-0-5">
                  Focusli Labs • Bengaluru, Karnataka, India
                </p>
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

// Helper icon component for battery
function BatteryChargingIcon({ className = '' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
      <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
      <line x1="11" y1="7" x2="13" y2="17"></line>
      <line x1="22" y1="11" x2="22" y2="13"></line>
    </svg>
  );
}
