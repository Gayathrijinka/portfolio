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
              </div>
            </div>
          </div>

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
}
