import React, { useState } from 'react'
import {
  Code,
  Layout,
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
            </button>
          ))}
        </div>

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
              </div>
            </div>
          ))}
        </div>
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
}
