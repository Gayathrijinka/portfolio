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
}
