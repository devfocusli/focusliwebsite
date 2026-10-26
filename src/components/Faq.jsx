import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is Focusli free to download and use?",
      a: "Yes. Focusli's core productivity features — including the Pomodoro timer, app and website blocking, screen time analytics, and YouTube Study Mode — are completely free. Focusli Pro unlocks advanced features like custom soundscapes, unlimited daily schedules, and extended squad statistics."
    },
    {
      q: "What makes Strict Mode unbreakable compared to other blockers?",
      a: "Most blockers can easily be closed via recent apps or uninstalled when you feel an impulse to scroll. With Focusli's Strict Mode enabled, device administrator and system shield protections activate. You cannot exit early, kill the background service, or uninstall the app until your timer reaches zero. There are genuinely no loopholes."
    },
    {
      q: "Can I block just Reels and Shorts without blocking the whole app?",
      a: "Yes! That is one of Focusli's signature features. You can keep YouTube open for educational video lectures or Instagram for essential DMs while the infinite-scroll feeds (Reels, Shorts, Explore tabs) remain strictly locked."
    },
    {
      q: "Does Focusli sync my study progress across devices?",
      a: "Yes. Focusli is fully connected with real-time cloud sync. Your focus hours, unbroken streaks, squad rankings, and customized app blocklists stay seamlessly backed up and updated live across all your study sessions."
    },
    {
      q: "Why does Focusli require Android Accessibility and Usage permissions?",
      a: "Focusli uses Android's Accessibility Service solely to detect when a blacklisted app or YouTube Shorts URL opens in the foreground so it can display the Focus Shield overlay. Focusli does NOT log keystrokes, messages, passwords, or personal data. All processing occurs locally on-device."
    },
    {
      q: "Is my personal screen time or browsing data sent to the cloud?",
      a: "No. Your privacy is paramount. Unlike other apps that upload your app usage to remote analytics databases, Focusli stores your screen time data 100% locally in an encrypted on-device database. Only your public display name and completed study minutes are synced if you participate in Focus Squads."
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 sm-py-24 scroll-mt-24 bg-main relative">
      <div className="site-container max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm-mb-14">
          <h2 className="section-title text-white">
            Questions, <span className="text-brand-gradient">answered</span>
          </h2>
          <p className="mt-3 text-base text-muted">
            Everything you need to know about Focusli and how it protects your study time.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3-5">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={f.q}
                className={`rounded-2xl border ${isOpen ? 'border-brand-35 bg-card-alt' : 'border-white-10 bg-card'} overflow-hidden transition-all duration-200 hover-border-white-20`}
              >
                <button
                  id={`faq-question-${i}`}
                  onClick={() => toggle(i)}
                  className="w-full text-left p-5 sm-p-6 flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className={`text-base sm-text-lg font-semibold transition-colors ${isOpen ? 'text-brand' : 'text-white'}`}>
                    {f.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white-5 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-20 text-brand' : 'text-white-60'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="px-5 sm-px-6 pb-6 text-sm sm-text-base text-muted leading-relaxed border-t border-white-5 pt-3 fade-in"
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
