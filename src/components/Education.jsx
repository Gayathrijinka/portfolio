import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate timeline and core computer science academic foundation.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto text-left">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 pb-8 border-l-2 border-emerald-500/40 last:border-0 last:pb-0">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/30 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-extrabold text-white">
                    {edu.institution}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Academic Highlights & Foundations</span>
                  </h4>
                  {edu.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
