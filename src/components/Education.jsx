<<<<<<< HEAD
import React from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const educationHistory = [
    {
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 – Present",
      location: "Amaravati, Andhra Pradesh",
      metricType: "CGPA",
      metricValue: "8.96",
      status: "In Progress",
      description: "Rigorous curriculum encompassing Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Operating Systems, and Computer Networks.",
      highlights: ["Core AI/ML Coursework", "Dean's List / Academic Excellence", "Active CSI Member"]
    },
    {
      institution: "Narayana Junior College, Anantapur",
      degree: "Intermediate Education (Class XII - MPC)",
      duration: "2021 – 2023",
      location: "Anantapur, Andhra Pradesh",
      metricType: "Score",
      metricValue: "95%",
      status: "Completed",
      description: "Focused on Mathematics, Physics, and Chemistry (MPC), building analytical thinking and quantitative foundation.",
      highlights: ["Top Academic Standing", "Mathematics & Physics Distinction"]
    },
    {
      institution: "AP Model School, Vidapanakal",
      degree: "Secondary Education (Class X - SSC)",
      duration: "2020 – 2021",
      location: "Vidapanakal, Andhra Pradesh",
      metricType: "Score",
      metricValue: "92%",
      status: "Completed",
      description: "Comprehensive foundational secondary education with consistent academic honors across all standard disciplines.",
      highlights: ["High Distinction in Science & Mathematics"]
    }
  ]

  return (
    <section id="education" className="section-wrapper education-section" aria-label="Education History">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Journey</span>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Strong academic credentials demonstrating consistent analytical discipline and computational curiosity.
          </p>
        </div>

        <div className="education-timeline">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot">
                  <GraduationCap size={16} />
                </div>
                {idx !== educationHistory.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="card-glass timeline-content">
                <div className="timeline-header">
                  <div>
                    <span className="edu-status-badge">{edu.status}</span>
                    <h3 className="institution-name">{edu.institution}</h3>
                    <h4 className="degree-name">{edu.degree}</h4>
                  </div>

                  <div className="score-badge">
                    <span className="score-type">{edu.metricType}</span>
                    <span className="score-val">{edu.metricValue}</span>
                  </div>
                </div>

                <div className="timeline-meta">
                  <span className="meta-tag">
                    <Calendar size={14} />
                    {edu.duration}
                  </span>
                  <span className="meta-tag">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                </div>

                <p className="edu-desc">{edu.description}</p>

                <div className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="badge badge-blue">
                      <Award size={12} />
                      {h}
                    </span>
=======
import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Undergraduate timeline and core computer science academic foundation.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto text-left">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 pb-8 border-l-2 border-emerald-500/40 last:border-0 last:pb-0">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/30 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-extrabold text-white">
                    {edu.institution}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </span>
                </div>

                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Academic Highlights & Foundations</span>
                  </h4>
                  {edu.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </div>

      <style>{`
        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 1.5rem;
          position: relative;
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 36px 1fr;
            gap: 1rem;
          }
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .marker-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.15);
          border: 2px solid var(--accent-blue);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 640px) {
          .marker-dot {
            width: 34px;
            height: 34px;
          }
        }

        .marker-line {
          position: absolute;
          top: 48px;
          bottom: -2.5rem;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-blue) 0%, rgba(51, 65, 85, 0.3) 100%);
          z-index: 1;
        }

        .timeline-content {
          padding: 1.75rem 2rem;
        }

        @media (max-width: 640px) {
          .timeline-content {
            padding: 1.25rem 1.25rem;
          }
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 0.85rem;
        }

        @media (max-width: 640px) {
          .timeline-header {
            flex-direction: column-reverse;
            gap: 0.75rem;
          }
        }

        .edu-status-badge {
          display: inline-block;
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
        }

        .institution-name {
          font-size: 1.2rem;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .degree-name {
          font-size: 0.975rem;
          font-weight: 500;
          color: #93c5fd;
          margin-top: 0.25rem;
        }

        .score-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.95rem;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          border-radius: var(--radius-md);
          min-width: 90px;
        }

        .score-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .score-val {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #38bdf8;
        }

        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1rem;
        }

        .meta-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .edu-desc {
          font-size: 0.925rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
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
