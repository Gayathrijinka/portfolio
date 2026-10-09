<<<<<<< HEAD
import React from 'react'
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: 'Machine Learning',
      provider: 'SmartBridge',
      collaboration: 'In collaboration with Google',
      category: 'AI & Data Science',
      credentialUrl: 'https://drive.google.com/file/d/1ROgeb7g_E52AM7NS-wZrZFQqVR4u9a9S/view?usp=drive_link',
      verified: true
    },
    {
      id: 2,
      title: 'Getting Started with Full Stack Java Development',
      provider: 'Simplilearn SkillUp',
      collaboration: null,
      category: 'Full-Stack Engineering',
      credentialUrl: 'https://drive.google.com/file/d/1eyzx1dAJifnMnMZgpR3AGgISG56P9Iae/view?usp=sharing',
      verified: true
    },
    {
      id: 3,
      title: 'OOPs in Java',
      provider: 'Simplilearn SkillUp',
      collaboration: null,
      category: 'Core Computer Science',
      credentialUrl: null,
      verified: false
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms using Java',
      provider: 'Great Learning',
      collaboration: null,
      category: 'Core Computer Science & DSA',
      credentialUrl: null,
      verified: false
    },
    {
      id: 5,
      title: 'Generative AI and ChatGPT',
      provider: 'GeeksforGeeks',
      collaboration: null,
      category: 'Generative AI & LLMs',
      credentialUrl: 'https://drive.google.com/file/d/1TYOMijUEkSgP7WMgzQYiFNYVzjjlnh_g/view',
      verified: true
    }
  ]

  return (
    <section id="certifications" className="section-wrapper certs-section" aria-label="Certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Credentials</span>
          <h2 className="section-title">
            Certifications &amp; <span className="text-gradient">Specializations</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and skill tracks across Machine Learning, Java Engineering, DSA, and Generative AI.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((c) => (
            <div key={c.id} className="card-glass cert-card">
              <div className="cert-top">
                <div className="cert-badge-wrap">
                  <Award size={20} className="cert-award-icon" />
                </div>
                <span className="cert-category">{c.category}</span>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-provider">
                  Issued by <strong>{c.provider}</strong>
                  {c.collaboration && (
                    <span className="cert-collab"> &bull; {c.collaboration}</span>
                  )}
                </p>
              </div>

              <div className="cert-footer">
                {c.credentialUrl ? (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline cert-link-btn"
                  >
                    <ShieldCheck size={14} className="shield-icon" />
                    <span>View Verified Document</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <div className="cert-status-badge">
                    <CheckCircle2 size={14} className="check-icon" />
                    <span>Coursework Completed</span>
                  </div>
                )}
=======
import React, { useState } from 'react';
import { certifications } from '../data/certifications';
import CertificateModal from './CertificateModal';
import { Award, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Formal learning credentials across Machine Learning, Data Structures, Generative AI, and Enterprise Cloud Data.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {cert.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5">
                  {cert.name}
                </h3>

                {/* Issuing organization */}
                <div className="flex items-center gap-2 text-sm text-cyan-400 font-mono mb-3">
                  <span>Issued by:</span>
                  <span className="font-semibold text-slate-200">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 transition-all duration-150 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </div>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border-subtle);
        }

        .cert-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .cert-badge-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-award-icon {
          color: var(--accent-cyan);
        }

        .cert-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .cert-body {
          margin-bottom: 1.5rem;
        }

        .cert-title {
          font-size: 1.15rem;
          line-height: 1.4;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .cert-provider {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .cert-provider strong {
          color: #93c5fd;
        }

        .cert-collab {
          color: #64748b;
          font-size: 0.825rem;
        }

        .cert-footer {
          padding-top: 1.1rem;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
        }

        .cert-link-btn {
          width: 100%;
          justify-content: center;
        }

        .shield-icon {
          color: #38bdf8;
        }

        .cert-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #94a3b8;
          font-size: 0.825rem;
          padding: 0.35rem 0.65rem;
          background: rgba(30, 41, 59, 0.45);
          border-radius: var(--radius-sm);
        }

        .check-icon {
          color: #10b981;
        }
      `}</style>
    </section>
  )
=======

      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
