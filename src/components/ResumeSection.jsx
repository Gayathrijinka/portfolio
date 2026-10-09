import React from 'react';
import { FileText, Download, Eye, CheckCircle2, Sparkles, FolderCheck, Info } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumeSection({ onOpenResumeModal }) {
  return (
    <section id="resume-section" className="py-20 relative bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
          {/* Subtle Ambient Lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Download My Resume
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Looking for a comprehensive summary of my technical competencies, AI/ML coursework, full-stack projects, and verified credentials? Download a copy formatted for recruiters and hiring managers.
              </p>

              {/* Verified Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI/ML & Python Projects</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Stack & REST APIs</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>VIT-AP University (2023–2027)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Industry Certifications</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col gap-3.5 sm:w-72 shrink-0">
              <a
                href={personalInfo.resumePath}
                download="Gayathri_J_Resume.pdf"
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full py-3 px-6 rounded-2xl font-semibold text-xs sm:text-sm bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Preview in Browser</span>
              </button>

              {/* Path info tooltip/badge */}
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Configured at: <code className="text-slate-300">{personalInfo.resumePath}</code>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
