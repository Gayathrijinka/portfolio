import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const isImage = certificate.fileType === 'image';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {certificate.name}
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Issued by: {certificate.issuer}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-950/50 flex flex-col items-center justify-center min-h-[350px]">
          {isImage ? (
            <div className="rounded-xl overflow-hidden border border-slate-700/60 shadow-lg max-h-[500px]">
              <img
                src={certificate.fileUrl}
                alt={certificate.name}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          ) : (
            <div className="w-full h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <iframe
                src={`${certificate.fileUrl}#view=FitH`}
                title={certificate.name}
                className="w-full h-full border-0"
              />
            </div>
          )}

          {/* Description & Skills */}
          <div className="w-full mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              {certificate.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skillsGained.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={certificate.fileUrl}
              download
              className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
