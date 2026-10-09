<<<<<<< HEAD
import React, { useState } from 'react'
import {
  ExternalLink,
  Github,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  HeartPulse,
  Film,
  Users
} from 'lucide-react'

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const projects = [
    {
      id: 'anemiasense',
      featured: true,
      title: 'AnemiaSense',
      subtitle: 'AI-Powered Anemia Prediction System',
      date: 'May 2025',
      icon: <HeartPulse size={22} className="proj-icon text-rose" />,
      accentColor: 'rose',
      summary:
        'Developed an AI-powered anemia prediction system utilizing the Kaggle Anemia.csv clinical dataset. The model evaluates patient features such as Hemoglobin, MCH, MCHC, MCV, and Gender to assess likelihood indicators.',
      detailedWorkflow: [
        'Curated and preprocessed clinical hematology features from the Kaggle Anemia dataset.',
        'Engineered feature pipelines and conducted cross-model evaluation, selecting Random Forest based on empirical validation results.',
        'Constructed lightweight Python Flask REST endpoints for programmatic inference.',
        'Designed a responsive, accessible client-side interface using HTML5, CSS3, and JavaScript.',
        'Deployed the application for online public access on GitHub Pages.'
      ],
      technologies: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'Random Forest',
        'Flask',
        'REST APIs',
        'HTML5',
        'CSS3',
        'JavaScript'
      ],
      liveDemo: 'https://gayathrijinka.github.io/anemia-sense/',
      githubRepo: 'https://github.com/Gayathrijinka',
      repoLabel: 'GitHub Profile',
      noticeType: 'info',
      notice:
        'Educational & Academic Study Project: Built for machine learning and clinical dataset evaluation. Not intended as a replacement for clinical medical diagnosis or healthcare professional evaluation.'
    },
    {
      id: 'cinebook',
      featured: true,
      title: 'CineBook',
      subtitle: 'AI-Based Movie & Book Recommendation System',
      date: 'June 2026',
      icon: <Film size={22} className="proj-icon text-sky" />,
      accentColor: 'sky',
      summary:
        'Developed an AI-based recommendation platform that helps users discover movies and books using dataset attributes including genres, narrative descriptions, cast, directors, ratings, and user preferences.',
      detailedWorkflow: [
        'Engineered content-based vectorization workflows using TF-IDF and Cosine Similarity matrices.',
        'Implemented Truncated SVD (Singular Value Decomposition) to reduce dimensionality and discover latent topic clusters.',
        'Engineered a hybrid recommendation engine merging content features and collaborative patterns.',
        'Integrated Google Gemini AI to interpret natural-language semantic prompts from users.',
        'Constructed Flask REST APIs to bridge the client-side experience with server-side AI computation.'
      ],
      technologies: [
        'Python',
        'Flask',
        'TF-IDF',
        'Cosine Similarity',
        'Truncated SVD',
        'Google Gemini API',
        'REST APIs',
        'Recommendation Systems'
      ],
      liveDemo: 'https://cinebuk.onrender.com/',
      githubRepo: 'https://github.com/Gayathrijinka/CineBuk',
      repoLabel: 'GitHub Repository',
      noticeType: 'render',
      notice:
        'Render Free Tier Hosting: The backend server automatically enters sleep mode when idle. If the application has not been visited recently, the initial cold-start may take approximately 30–50 seconds to spin up.'
    },
    {
      id: 'empowerher',
      featured: false,
      title: 'EmpowerHer',
      subtitle: 'Multilingual Women Empowerment Platform',
      date: 'Dec 2025',
      icon: <Users size={22} className="proj-icon text-teal" />,
      accentColor: 'teal',
      summary:
        'Developed a multilingual web platform connecting rural women with vocational skill training, educational guidance, and localized employment opportunities.',
      detailedWorkflow: [
        'Built an intuitive, high-accessibility multilingual interface in HTML, CSS, and modern JavaScript.',
        'Structured modular resource categories for skill development workshops, mentorship, and local listings.',
        'Ensured mobile-friendly responsiveness for low-bandwidth mobile environments in rural communities.'
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Multilingual UI',
        'Responsive Design'
      ],
      liveDemo: 'https://gayathrijinka.github.io/EmpowerHer/',
      githubRepo: 'https://github.com/Gayathrijinka',
      repoLabel: 'GitHub Profile',
      noticeType: null,
      notice: null
    }
  ]

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Project Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Engineering Work</span>
          </h2>
          <p className="section-subtitle">
            End-to-end applications demonstrating machine learning pipelines, recommendation algorithms, generative AI integrations, and full-stack delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => {
            const isExpanded = expandedId === proj.id

            return (
              <article
                key={proj.id}
                className={`card-glass project-card ${proj.featured ? 'project-featured' : ''}`}
              >
                {/* Card Header Strip */}
                <div className="project-card-header">
                  <div className="header-meta">
                    <div className="proj-icon-wrapper">
                      {proj.icon}
                    </div>
                    <div>
                      <div className="title-row">
                        <h3 className="project-title">{proj.title}</h3>
                        {proj.featured && (
                          <span className="featured-pill">Featured Project</span>
                        )}
                      </div>
                      <p className="project-subtitle">{proj.subtitle}</p>
                    </div>
                  </div>

                  <span className="project-date">
                    <Calendar size={13} />
                    {proj.date}
                  </span>
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <p className="project-summary">{proj.summary}</p>

                  {/* Expandable Workflow Section */}
                  <div className="expandable-wrapper">
                    <button
                      type="button"
                      className="expand-toggle-btn"
                      onClick={() => toggleExpand(proj.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Technical Highlights' : 'View Technical Highlights'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isExpanded && (
                      <div className="expanded-content">
                        <h4 className="expanded-heading">Implementation Highlights</h4>
                        <ul className="workflow-list">
                          {proj.detailedWorkflow.map((step, sIdx) => (
                            <li key={sIdx}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Operational / Disclaimer Notice */}
                  {proj.notice && (
                    <div className={`project-notice notice-${proj.noticeType}`}>
                      {proj.noticeType === 'render' ? (
                        <Clock size={16} className="notice-icon text-amber" />
                      ) : (
                        <AlertCircle size={16} className="notice-icon text-blue" />
                      )}
                      <p className="notice-text">{proj.notice}</p>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="tech-badge-container">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="project-card-footer">
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary proj-cta-btn"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={proj.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary proj-cta-btn"
                  >
                    <Github size={14} />
                    <span>{proj.repoLabel}</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
        }

        @media (max-width: 640px) {
          .project-card {
            padding: 1.5rem 1.25rem;
          }
        }

        .project-featured {
          border-color: rgba(59, 130, 246, 0.35);
          background: linear-gradient(180deg, rgba(22, 32, 54, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%);
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 640px) {
          .project-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .proj-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-rose {
          color: #f43f5e;
        }

        .text-sky {
          color: #38bdf8;
        }

        .text-teal {
          color: #14b8a6;
        }

        .title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .project-title {
          font-size: 1.4rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .featured-pill {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(37, 99, 235, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .project-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-top: 0.2rem;
          font-weight: 500;
        }

        .project-date {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(30, 41, 59, 0.5);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }

        .project-body {
          margin-bottom: 1.75rem;
        }

        .project-summary {
          font-size: 1rem;
          line-height: 1.75;
          color: #cbd5e1;
          margin-bottom: 1.25rem;
        }

        /* Expandable Workflow Section */
        .expandable-wrapper {
          margin-bottom: 1.25rem;
        }

        .expand-toggle-btn {
          background: transparent;
          border: none;
          color: var(--accent-cyan);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          padding: 0.35rem 0;
          transition: color var(--transition-fast);
        }

        .expand-toggle-btn:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }

        .expanded-content {
          margin-top: 0.85rem;
          padding: 1.25rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .expanded-heading {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .workflow-list {
          list-style-type: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .workflow-list li {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #e2e8f0;
        }

        /* Project Operational Notices */
        .project-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          font-size: 0.825rem;
          line-height: 1.55;
        }

        .notice-info {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #94a3b8;
        }

        .notice-render {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #fbbf24;
        }

        .notice-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .text-amber {
          color: #f59e0b;
        }

        .text-blue {
          color: #60a5fa;
        }

        .notice-text {
          color: inherit;
        }

        /* Tech Badges */
        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .badge-tech {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-subtle);
          color: #93c5fd;
          font-family: var(--font-mono);
          font-size: 0.775rem;
        }

        /* Footer Buttons */
        .project-card-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .proj-cta-btn {
          min-width: 140px;
        }
      `}</style>
    </section>
  )
=======
import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  ArrowDown, 
  Mic, 
  Search, 
  HeartHandshake, 
  Atom, 
  Activity, 
  Eye,
  Calendar,
  Database
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'capstone'
      ? projects.filter(p => p.isCapstone)
      : activeFilter === 'ml'
        ? projects.filter(p => p.technologies.some(t => t.includes('Machine Learning') || t.includes('Scikit') || t.includes('Embeddings')))
        : projects;

  return (
    <section id="projects" className="py-24 relative bg-[#080C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Projects & Research
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected applications demonstrating practical machine learning pipelines, semantic search engines, speech translation systems, and full-stack solutions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter('capstone')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'capstone'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            Capstone Spotlight
          </button>
          <button
            onClick={() => setActiveFilter('ml')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'ml'
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            AI / Machine Learning
          </button>
        </div>

        {/* Projects Listing */}
        <div className="space-y-10">
          {filteredProjects.map((project) => {
            const isCapstone = project.isCapstone;

            return (
              <div
                key={project.id}
                className={`rounded-2xl transition-all duration-300 p-6 sm:p-8 text-left relative overflow-hidden ${
                  isCapstone
                    ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 shadow-xl'
                }`}
              >
                {/* Glow for Capstone */}
                {isCapstone && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Column: Title, Badges, Descriptions, Problem/Solution */}
                  <div className="space-y-5 flex-1">
                    
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {isCapstone && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500 text-slate-950 flex items-center gap-1.5 shadow-sm">
                          <Atom className="w-3.5 h-3.5" />
                          Academic Capstone Spotlight
                        </span>
                      )}

                      {project.isFeatured && !isCapstone && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                          {project.badgeText}
                        </span>
                      )}

                      {!project.isFeatured && !isCapstone && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30">
                          {project.badgeText}
                        </span>
                      )}

                      {project.date && (
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {project.date}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base font-medium mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Problem & Solution Callouts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-500/20 text-left">
                        <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                          Problem
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-left">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                          Solution
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Dataset notice if available */}
                    {project.dataset && (
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        <span><strong className="text-slate-300">Dataset:</strong> {project.dataset}</span>
                      </div>
                    )}

                    {/* Specific Project Visual Diagram / Flow */}
                    {project.id === 'speech-translator' && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                        <div className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5" />
                          <span>Translation Pipeline Flow</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Telugu Speech</span>
                          <span className="text-cyan-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">Speech Recognition</span>
                          <span className="text-cyan-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">Telugu Text</span>
                          <span className="text-cyan-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">Translation</span>
                          <span className="text-cyan-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">English Text</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'semantic-search-system' && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                        <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5" />
                          <span>Semantic Architecture Visualization</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">User Query</span>
                          <span className="text-emerald-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">Embedding Model</span>
                          <span className="text-emerald-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">Vector Search</span>
                          <span className="text-emerald-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">Semantic Cache</span>
                          <span className="text-emerald-400">➔</span>
                          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">Relevant Results</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'empowerher' && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30">
                        <div className="text-xs font-mono uppercase text-indigo-400 font-semibold mb-3 flex items-center gap-1.5">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          <span>Core Platform Capabilities</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                          {project.modalDetails.keyFeatures.map((feat, fIdx) => (
                            <span key={fIdx} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-medium">
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.id === 'quantum-crop-prediction' && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                        <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-3 flex items-center gap-1.5">
                          <Atom className="w-3.5 h-3.5" />
                          <span>Research Workflow Stages</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          {project.architectureSteps.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-200 border border-slate-700/80">
                                {step}
                              </span>
                              {sIdx < project.architectureSteps.length - 1 && (
                                <span className="text-emerald-400 font-bold">➔</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Actions */}
                  <div className="lg:w-48 flex flex-col gap-3 shrink-0 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
