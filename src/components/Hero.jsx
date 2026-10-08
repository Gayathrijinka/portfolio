import { ArrowDown, Mail, Download, Sparkles, Terminal, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

import HeroVisual from './HeroVisual';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Titles, Action Buttons */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI/ML & Full Stack Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{personalInfo.name}</span> <span className="inline-block animate-wiggle">👋</span>
              </h1>
              
              {/* Dual Roles */}
              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl font-semibold text-slate-200">
                <span className="text-emerald-400">AI/ML Engineer</span>
                <span className="text-slate-600 font-normal">|</span>
                <span className="text-cyan-400">Full Stack Developer</span>
              </div>
            </div>

            {/* Quick Context Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>VIT-AP University (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              "{personalInfo.heroDescription}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Gayathri_J_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-slate-600 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
              >
                Preview in Browser
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">
                Connect:
              </span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
                title="GitHub Profile"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors group"
                title="LinkedIn Profile"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-cyan-500/40 transition-colors">
                  <LinkedinIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
                title="Send Email"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI / Developer Interactive Visual Element */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
