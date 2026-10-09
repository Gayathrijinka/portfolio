import React, { useEffect } from 'react';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  Layers, 
  AlertCircle, 
  CheckCircle, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  GitBranch, 
  Rocket 
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { modalDetails, technologies, githubUrl, liveDemoUrl } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {project.badgeText || project.category}
            </span>
            {project.date && (
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                {project.date}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-left">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              {project.tagline}
            </p>
          </div>

          {/* 1. Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>1. Overview</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              {modalDetails.overview}
            </p>
          </div>

          {/* 2. Problem Statement */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>2. Problem Statement</span>
            </h3>
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
              {modalDetails.problemStatement}
            </div>
          </div>

          {/* 3. Approach */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>3. Approach & Methodology</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              {modalDetails.approach}
            </p>
          </div>

          {/* 4. Technologies */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>4. Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono font-medium border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Architecture Pipeline */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>5. System Architecture</span>
            </h3>
            <div className="space-y-2.5">
              {modalDetails.architecture.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300 font-mono"
                >
                  <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>6. Key Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {modalDetails.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-sm text-slate-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Challenges & 8. Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenges */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">
                7. Technical Challenges
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {modalDetails.challenges.map((c, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex items-start gap-2">
                    <span className="text-amber-400 font-mono shrink-0">›</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                8. Future Improvements
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {modalDetails.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="p-3 rounded-lg bg-slate-950/40 border border-slate-800 flex items-start gap-2">
                    <span className="text-cyan-400 font-mono shrink-0">›</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 9 & 10. Links and Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 border border-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {liveDemoUrl ? (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition-colors"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="px-4 py-2.5 rounded-xl bg-slate-800/40 text-slate-400 text-xs font-mono border border-slate-800">
                  Demo: Research / Academic Evaluation
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
