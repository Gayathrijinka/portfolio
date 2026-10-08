import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mail, ArrowUp, Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Roles */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              AI/ML Engineer | Full Stack Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
