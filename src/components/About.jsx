import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Brain, Layers, Cpu, Code2, GraduationCap, MapPin, Sparkles, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>Passionate Computer Science Student & Builder</span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {personalInfo.aboutText}
              </p>

              {/* Fast Facts Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Institution</span>
                    <span className="font-medium text-slate-200">VIT-AP University</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Degree</span>
                    <span className="font-medium text-slate-200">B.Tech in CSE (2023–2027)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="font-medium text-slate-200">Vijayawada, AP, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Current Objective</span>
                    <span className="font-medium text-emerald-400">Seeking Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights / Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-white mt-2">
                    {metric.label}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
