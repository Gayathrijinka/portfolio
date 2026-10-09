import React from 'react'
import { Linkedin, Github, Code, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function CodingProfiles() {
  const profiles = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'gayathri-j-08604032a',
      url: 'https://www.linkedin.com/in/gayathri-j-08604032a',
      icon: <Linkedin size={26} className="profile-brand-icon text-linkedin" />,
      color: '#0a66c2',
      role: 'Professional Network',
      description: 'Connect with me for engineering opportunities, updates on my academic journey at VIT-AP, and project collaborations.'
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'Gayathrijinka',
      url: 'https://github.com/Gayathrijinka',
      icon: <Github size={26} className="profile-brand-icon text-github" />,
      color: '#f8fafc',
      role: 'Code Repositories',
      description: 'Explore my open-source repositories, machine learning models, Flask backend architectures, and web application source code.'
    },
    {
      id: 'leetcode',
      name: 'LeetCode',
      handle: 'Gayathri_jinka',
      url: 'https://leetcode.com/u/Gayathri_jinka/',
      icon: <Code size={26} className="profile-brand-icon text-leetcode" />,
      color: '#f59e0b',
      role: 'Algorithmic Problem Solving',
      description: 'View my active practice on Data Structures and Algorithms in Java and Python, focusing on arrays, dynamic programming, and trees.'
    }
  ]

  return (
    <section id="profiles" className="section-wrapper profiles-section" aria-label="Coding & Professional Profiles">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Online Presence</span>
          <h2 className="section-title">
            Coding &amp; <span className="text-gradient">Professional Profiles</span>
          </h2>
          <p className="section-subtitle">
            Explore my code contributions, professional networking, and continuous problem-solving practice.
          </p>
        </div>

        <div className="profiles-grid">
          {profiles.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass profile-card"
            >
              <div className="profile-card-top">
                <div className="profile-icon-box">
                  {p.icon}
                </div>
                <div className="profile-external-badge">
                  <span>Visit Profile</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>

              <div className="profile-card-body">
                <div className="profile-identity">
                  <h3 className="profile-name">{p.name}</h3>
                  <span className="profile-role">{p.role}</span>
                </div>
                <p className="profile-handle">@{p.handle}</p>
                <p className="profile-desc">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 1.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .profile-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .profile-card:hover .profile-external-badge {
          color: var(--accent-cyan);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateX(3px);
        }

        .profile-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .profile-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-linkedin {
          color: #38bdf8;
        }

        .text-github {
          color: #f8fafc;
        }

        .text-leetcode {
          color: #fbbf24;
        }

        .profile-external-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .profile-name {
          font-size: 1.35rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .profile-role {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-cyan);
          margin-bottom: 0.25rem;
        }

        .profile-handle {
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: #93c5fd;
          margin-bottom: 0.85rem;
        }

        .profile-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
}
