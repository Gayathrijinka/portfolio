import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'web-dev':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'programming':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBorderAccent = (accent) => {
    switch (accent) {
      case 'emerald':
        return 'hover:border-emerald-500/40 group-hover:text-emerald-400';
      case 'cyan':
        return 'hover:border-cyan-500/40 group-hover:text-cyan-400';
      case 'indigo':
        return 'hover:border-indigo-500/40 group-hover:text-indigo-400';
      case 'amber':
        return 'hover:border-amber-500/40 group-hover:text-amber-400';
      case 'violet':
        return 'hover:border-violet-500/40 group-hover:text-violet-400';
      default:
        return 'hover:border-emerald-500/40 group-hover:text-emerald-400';
    }
  };

  const displayedCategories = filter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === filter);

  return (
    <section id="skills" className="py-24 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Practical competencies focused on AI/ML workflows, scalable web services, and robust algorithmic fundamentals.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-2xl bg-slate-900/70 border border-slate-800 transition-all duration-200 group flex flex-col justify-between text-left ${getBorderAccent(category.accent)}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/70">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {category.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                        skill.highlight
                          ? 'bg-slate-800/90 text-slate-100 border border-slate-700 hover:border-emerald-500/40 hover:bg-slate-800'
                          : 'bg-slate-800/50 text-slate-300 border border-slate-800/80 hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{category.skills.length} core items</span>
                <span className="text-emerald-400/80">Proficient</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
