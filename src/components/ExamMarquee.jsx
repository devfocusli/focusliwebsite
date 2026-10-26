import React from 'react';
import { BookOpen, GraduationCap, Compass, Briefcase, Code, BrainCircuit, Landmark, Award } from 'lucide-react';

export default function ExamMarquee() {
  const exams = [
    { id: 'jee', name: 'JEE Mains & Adv', icon: BrainCircuit, color: '#38BDF8', desc: 'Engineering' },
    { id: 'neet', name: 'NEET', icon: GraduationCap, color: '#4ADE80', desc: 'Medical' },
    { id: 'boards', name: 'Boards', icon: BookOpen, color: '#FACC15', desc: 'Class 10 & 12' },
    { id: 'upsc', name: 'UPSC CSE', icon: Landmark, color: '#FB923C', desc: 'Civil Services' },
    { id: 'ca-cs', name: 'CA / CS', icon: Award, color: '#C084FC', desc: 'Finance' },
    { id: 'cat', name: 'CAT', icon: Briefcase, color: '#F472B6', desc: 'MBA' },
    { id: 'gate', name: 'GATE', icon: Compass, color: '#2DD4BF', desc: 'Grad Tech' },
    { id: 'coding', name: 'Coding & DSA', icon: Code, color: '#00E599', desc: 'Software' },
  ];

  const renderExamPills = (list, prefix = '') =>
    list.map((item) => {
      const Icon = item.icon;
      return (
        <div
          key={`${prefix}-${item.id}`}
          className="flex items-center gap-3 px-4 py-2 sm-px-5 sm-py-2-5 rounded-full bg-white-4 border border-white-10 hover-border-brand-50 hover-bg-white-10 transition-all duration-300 shrink-0 group cursor-default shadow-sm select-none"
        >
          {/* Circular Icon Pill Badge */}
          <div
            className="w-7 h-7 sm-w-8 sm-h-8 rounded-full flex items-center justify-center transition-transform group-hover-scale-105 shrink-0"
            style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}40` }}
          >
            <Icon className="w-3-5 h-3-5 sm-w-4 sm-h-4" style={{ color: item.color }} />
          </div>

          {/* Exam Details */}
          <div className="text-left pr-1">
            <span className="block text-xs sm-text-sm font-bold text-white group-hover-text-brand transition-colors leading-tight whitespace-nowrap">
              {item.name}
            </span>
            <span className="block text-10 sm-text-11 text-white-50 font-medium leading-none mt-0-5 whitespace-nowrap">
              {item.desc}
            </span>
          </div>
        </div>
      );
    });

  return (
    <section className="pt-0 pb-12 sm-pb-16 bg-main relative overflow-hidden">
      {/* Header Pill Label */}
      <div className="site-container text-center mb-4 sm-mb-6">
        <div className="inline-flex items-center gap-2 px-3-5 py-1-5 rounded-full bg-white-4 border border-white-10 text-white-60 text-11 sm-text-xs font-bold uppercase tracking-badge">
          <span>Loved by students preparing for</span>
        </div>
      </div>

      {/* Marquee with left & right gradient masks */}
      <div className="relative w-full overflow-hidden marquee-container py-2 sm-py-3">
        {/* Left Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm-w-48 z-20"
          style={{ background: 'linear-gradient(90deg, #0B0B0D 0%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Right Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm-w-48 z-20"
          style={{ background: 'linear-gradient(270deg, #0B0B0D 0%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* Infinite Seamless Scrolling Dual Tracks */}
        <div className="marquee-track items-center">
          {renderExamPills(exams, 'primary')}
        </div>
        <div className="marquee-track items-center" aria-hidden="true">
          {renderExamPills(exams, 'clone')}
        </div>
      </div>
    </section>
  );
}
