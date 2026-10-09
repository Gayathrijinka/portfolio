<<<<<<< HEAD
import React from 'react'
import { Brain, Code2, Layers, Cpu, Award, Users } from 'lucide-react'

export default function About() {
  const pillars = [
    {
      icon: <Brain size={24} className="pillar-icon" />,
      title: "Machine Learning & AI",
      desc: "Developing end-to-end intelligent models using Scikit-learn, TensorFlow, and Pandas, covering data preprocessing, feature engineering, and evaluation."
    },
    {
      icon: <Code2 size={24} className="pillar-icon" />,
      title: "Full-Stack Development",
      desc: "Architecting interactive user interfaces in React.js and HTML/CSS/JS integrated with robust REST APIs built with Python Flask."
    },
    {
      icon: <Layers size={24} className="pillar-icon" />,
      title: "Core CS & Problem Solving",
      desc: "Rigorous foundation in Data Structures, Algorithms, Object-Oriented Programming (OOP) in Java, and Database Management Systems."
    },
    {
      icon: <Cpu size={24} className="pillar-icon" />,
      title: "GenAI & Recommendation",
      desc: "Integrating Large Language Model APIs (Google Gemini) and implementing hybrid recommendation engines using TF-IDF, Cosine Similarity, and SVD."
    }
  ]

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Engineering Solutions at the Intersection of <span className="text-gradient">AI &amp; Web</span>
          </h2>
          <p className="section-subtitle">
            A disciplined Computer Science undergraduate combining rigorous computational theory with practical engineering.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Card */}
          <div className="card-glass about-narrative-card">
            <h3 className="narrative-heading">Professional Background</h3>
            <p className="narrative-p">
              I am a Computer Science and Engineering undergraduate at <strong>Vellore Institute of Technology (VIT-AP University)</strong> with an academic CGPA of <strong>8.96</strong>. My primary technical passions lie in Artificial Intelligence, Machine Learning, and Full-Stack Web Development.
            </p>
            <p className="narrative-p">
              Through my coursework and project-based engineering, I have focused on solving real-world challenges—ranging from clinical diagnostic support with machine learning models like Random Forest, to personalized discovery platforms integrating Google Gemini AI and matrix decomposition techniques.
            </p>
            <p className="narrative-p">
              Beyond individual development, I stay actively engaged in the tech community as a member of the <strong>Computer Society of India (CSI) — VIT-AP Student Chapter</strong> (2024), continuously expanding my algorithmic problem-solving abilities and collaborative development skills.
            </p>

            <div className="about-highlights-row">
              <div className="about-highlight-box">
                <span className="highlight-number">8.96</span>
                <span className="highlight-label">VIT-AP CGPA</span>
              </div>
              <div className="about-highlight-box">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Verified Certifications</span>
              </div>
              <div className="about-highlight-box">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Full-Stack AI Projects</span>
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Core Focus Pillars */}
          <div className="about-pillars-grid">
            {pillars.map((item, idx) => (
              <div key={idx} className="card-glass pillar-card">
                <div className="pillar-icon-box">
                  {item.icon}
                </div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-narrative-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .narrative-heading {
          font-size: 1.35rem;
          margin-bottom: 1.15rem;
          color: var(--text-primary);
        }

        .narrative-p {
          font-size: 0.975rem;
          line-height: 1.75;
          margin-bottom: 1.1rem;
          color: var(--text-secondary);
        }

        .narrative-p strong {
          color: #e2e8f0;
          font-weight: 600;
        }

        .about-highlights-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 540px) {
          .about-highlights-row {
            grid-template-columns: 1fr;
          }
        }

        .about-highlight-box {
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 0.75rem;
          text-align: center;
        }

        .highlight-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--accent-cyan);
          line-height: 1.2;
        }

        .highlight-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.25rem;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 580px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          padding: 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
        }

        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }

        .pillar-icon {
          color: var(--accent-cyan);
        }

        .pillar-title {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
        }

        .pillar-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
=======
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
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
