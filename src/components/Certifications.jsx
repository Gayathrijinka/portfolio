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
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
