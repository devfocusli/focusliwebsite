import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'JEE', 'NEET', 'UPSC', 'College / CA'];

  const allReviews = [
    {
      id: 'aditya',
      category: 'JEE',
      quote: "BRO whoever built Strict Mode in Focusli deserves an award. There is literally no way to cheat or open Instagram once the timer starts. Helped me study 9 hours daily for JEE!",
      author: "Aditya Verma",
      role: "JEE 2026 Aspirant (Kota)",
      score: "AIR 240 JEE Adv",
      avatarBg: "#8B5CF6",
      initial: "A"
    },
    {
      id: 'sneha',
      category: 'NEET',
      quote: "This is the best study app I have ever used. YouTube Study Mode is a game changer: I can watch biology lectures on 1.5x without ever getting sucked into brain-rot Shorts.",
      author: "Sneha Nair",
      role: "NEET Top Scorer",
      score: "685/720 Score",
      avatarBg: "#00E599",
      initial: "S"
    },
    {
      id: 'rahul',
      category: 'UPSC',
      quote: "The 100% offline feature is why I chose Focusli. I study in airplane mode at the library without internet distractions, and my screen time dropped from 6 hours to 45 minutes.",
      author: "Rahul Mehrotra",
      role: "UPSC CSE Aspirant",
      score: "Prelims 118 Marks",
      avatarBg: "#F59E0B",
      initial: "R"
    },
    {
      id: 'kavya',
      category: 'JEE',
      quote: "Focus Squads made Kota hostel life bearable. Seeing my roommates finish 8-hour daily timers forced me out of bed every morning at 6 AM.",
      author: "Kavya Singhania",
      role: "JEE Mains Topper",
      score: "99.4 Percentile",
      avatarBg: "#38BDF8",
      initial: "K"
    },
    {
      id: 'vikram',
      category: 'College / CA',
      quote: "Studying for CA Finals while managing articleship is brutal. Focusli locked out my phone so I could finish 400 pages of Tax law without checking WhatsApp.",
      author: "Vikram Rathi",
      role: "CA Finalist",
      score: "Rank 18 CA Inter",
      avatarBg: "#EC4899",
      initial: "V"
    },
    {
      id: 'pooja',
      category: 'NEET',
      quote: "Anti-quit device admin mode is unbreakable. I used to uninstall other timers when I got bored. Focusli literally wouldn't let me delete it until my 3-hour mock test ended.",
      author: "Pooja Deshmukh",
      role: "NEET Repeat Year",
      score: "AIIMS Delhi Bound",
      avatarBg: "#10B981",
      initial: "P"
    }
  ];

  const filteredReviews = activeFilter === 'All' 
    ? allReviews 
    : allReviews.filter(r => r.category === activeFilter);

  return (
    <section id="reviews" className="py-16 sm-py-24 scroll-mt-24 bg-main relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm-mb-14">
          <h2 className="section-title text-white">
            Loved by <span className="text-brand-gradient">500K+</span> students
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm sm-text-base text-muted">
            <div className="flex items-center gap-0-5 text-amber-400" aria-label="5 stars rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong>4.8★</strong> rating across <span className="whitespace-nowrap">48,000+ Play Store reviews</span></span>
          </div>

          {/* Exam Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter reviews by exam category">
            {categories.map(cat => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={isActive}
                  className={`px-4 py-1-5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-brand text-black shadow-brand font-bold' 
                      : 'bg-white-5 text-white-70 hover-text-white hover-bg-white-10 border border-white-10'
                  }`}
                >
                  {cat === 'All' ? '🌟 All Exams' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 sm-grid-cols-2 lg-grid-cols-3 items-stretch">
          {filteredReviews.map((r) => (
            <div 
              key={r.id}
              className="glass-card p-7 sm-p-8 flex flex-col justify-between border border-white-10 bg-card shadow-xl transition-all"
            >
              
              {/* Star Rating, Score Tag & Quote */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0-5 text-amber-400" aria-label="5 stars rating">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-2-5 py-0-5 rounded-full bg-brand-15 border border-brand-30 text-brand text-11 font-bold">
                    {r.score}
                  </span>
                </div>

                <p className="text-sm sm-text-base leading-relaxed text-white-90 italic">
                  "{r.quote}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-8 flex items-center gap-3-5 pt-4 border-t border-white-10">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black text-sm shrink-0"
                  style={{ backgroundColor: r.avatarBg }}
                  aria-hidden="true"
                >
                  {r.initial}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1-5">
                    {r.author}
                    <CheckCircle className="w-3-5 h-3-5 text-brand fill-brand-20" aria-hidden="true" />
                  </h4>
                  <p className="text-xs text-muted">{r.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
