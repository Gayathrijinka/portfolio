<<<<<<< HEAD
import React, { useState } from 'react'
import {
  Code,
  Layout,
  Server,
  Brain,
  Sparkles,
  BookMarked,
  Wrench,
  CheckCircle2
} from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Brain size={20} className="cat-icon" />,
      color: 'blue',
      description: 'End-to-end data modeling, feature selection, predictive algorithms, and statistical analysis.',
      skills: [
        'Machine Learning',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'TensorFlow',
        'Deep Learning',
        'Random Forest',
        'TF-IDF & Cosine Similarity',
        'Truncated SVD',
        'Recommendation Systems'
      ]
    },
    {
      id: 'genai',
      title: 'Generative AI & LLMs',
      icon: <Sparkles size={20} className="cat-icon" />,
      color: 'cyan',
      description: 'Language model prompting, API orchestrations, and intelligent retrieval workflows.',
      skills: [
        'Google Gemini API',
        'Generative AI',
        'Large Language Models (LLMs)',
        'Prompt Engineering',
        'Retrieval-Augmented Generation (RAG)'
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code size={20} className="cat-icon" />,
      color: 'blue',
      description: 'Core languages for systems, algorithms, backend logic, and scientific computing.',
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'R']
    },
    {
      id: 'web',
      title: 'Full-Stack & Web Dev',
      icon: <Layout size={20} className="cat-icon" />,
      color: 'cyan',
      description: 'Modern front-to-back application development, user interfaces, and server endpoints.',
      skills: [
        'React.js',
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'Flask',
        'REST APIs',
        'Node.js'
      ]
    },
    {
      id: 'core-cs',
      title: 'Core Computer Science',
      icon: <BookMarked size={20} className="cat-icon" />,
      color: 'emerald',
      description: 'Foundational theory and rigorous software design paradigms.',
      skills: [
        'Data Structures & Algorithms (DSA)',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'Operating Systems (OS)',
        'Computer Networks (CN)'
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Wrench size={20} className="cat-icon" />,
      color: 'purple',
      description: 'Development environments, version control, and cloud application deployment.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Render',
        'Jupyter Notebook',
        'Anaconda'
      ]
    }
  ]

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory)

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Competencies</span>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical stack backed by coursework at VIT-AP, personal projects, and verified certifications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.title}
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* Category Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map(cat => (
            <div key={cat.id} className="card-glass skill-category-card">
              <div className="cat-header">
                <div className={`cat-icon-wrap cat-icon-${cat.color}`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-tags-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    <CheckCircle2 size={13} className="pill-check" />
                    <span>{skill}</span>
                  </span>
                ))}
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </div>

      <style>{`
        .skills-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.75rem;
        }

        .filter-btn {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-light);
          background: rgba(30, 41, 59, 0.7);
        }

        .filter-btn.active {
          color: #ffffff;
          background: var(--gradient-blue);
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skill-category-card {
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
        }

        .cat-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .cat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-icon-blue {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #60a5fa;
        }

        .cat-icon-cyan {
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          color: #38bdf8;
        }

        .cat-icon-emerald {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
        }

        .cat-icon-purple {
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #c084fc;
        }

        .cat-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .cat-desc {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-muted);
        }

        .skills-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.85rem;
          background: rgba(30, 41, 59, 0.55);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.84rem;
          color: #e2e8f0;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .pill-check {
          color: var(--accent-cyan);
          opacity: 0.85;
        }
      `}</style>
    </section>
  )
=======

      </div>
    </section>
  );
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
