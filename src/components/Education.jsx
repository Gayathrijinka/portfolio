import React from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

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
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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
}
