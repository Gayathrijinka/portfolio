<<<<<<< HEAD
import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  FileDown,
  MessageSquare,
  Sparkles
} from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
=======
import React, { useState } from 'react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  MessageSquare, 
  AlertCircle 
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
<<<<<<< HEAD
    message: ''
  })
  const [formSent, setFormSent] = useState(false)

  const emailAddress = 'gayathrijinka2005@gmail.com'
  const phoneNumber = '+91 8121086697'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      // Fallback
      setCopied(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Trigger user's mail client with prefilled details
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Gayathri,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    setFormSent(true)
    setTimeout(() => setFormSent(false), 5000)
  }

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact Section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Open to software engineering internships, AI/ML roles, collaborative student research, and technical inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="card-glass contact-info-card">
            <h3 className="contact-info-title">Direct Contact Information</h3>
            <p className="contact-info-intro">
              Feel free to reach out directly via email, phone, or connect with me through my professional channels.
            </p>

            <div className="contact-methods">
              {/* Email Block */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Email Address</span>
                  <a href={`mailto:${emailAddress}`} className="method-value">
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald" />
                        <span className="text-emerald">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Phone size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Phone Number</span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="method-value">
                    {phoneNumber}
                  </a>
                  <span className="method-subtext">Available Mon–Sat during work hours</span>
                </div>
              </div>

              {/* Location Block */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">Current Location</span>
                  <span className="method-value">VIT-AP University, Andhra Pradesh, India</span>
                  <span className="method-subtext">Open to remote &amp; on-site opportunities</span>
                </div>
              </div>
            </div>

            {/* Resume Callout in Contact Box */}
            <div className="contact-resume-cta">
              <div>
                <strong className="resume-cta-title">Looking for a PDF Resume?</strong>
                <p className="resume-cta-desc">Download my updated academic &amp; technical resume.</p>
              </div>
              <a
                href="./assets/resume.pdf"
                download="Gayathri_J_Resume.pdf"
                className="btn btn-sm btn-outline"
              >
                <FileDown size={14} />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Interactive Email Formulation Form */}
          <div className="card-glass contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-desc">
              Fill out the form below to immediately draft and send an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={16} />
                <span>Open Mail Client &amp; Send</span>
              </button>

              {formSent && (
                <div className="form-success-banner">
                  <Check size={16} />
                  <span>Your email client is opening with your formatted message!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-info-card,
        .contact-form-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .contact-info-card,
          .contact-form-card {
            padding: 1.5rem 1.25rem;
          }
        }

        .contact-info-title,
        .form-card-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .contact-info-intro,
        .form-card-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-method-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .method-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-icon {
          color: var(--accent-cyan);
        }

        .method-details {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .method-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          word-break: break-all;
        }

        .method-value:hover {
          color: var(--accent-cyan);
        }

        .method-subtext {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .copy-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          color: var(--accent-cyan);
          font-size: 0.775rem;
          cursor: pointer;
          margin-top: 0.35rem;
          padding: 0;
          font-family: inherit;
        }

        .copy-email-btn:hover {
          text-decoration: underline;
        }

        .text-emerald {
          color: #34d399 !important;
        }

        .contact-resume-cta {
          margin-top: auto;
          padding: 1.25rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        @media (max-width: 500px) {
          .contact-resume-cta {
            flex-direction: column;
            text-align: center;
          }
        }

        .resume-cta-title {
          display: block;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .resume-cta-desc {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Form Controls */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .required {
          color: #f43f5e;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-muted);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.85rem;
        }

        .form-success-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
          font-size: 0.825rem;
        }
      `}</style>
    </section>
  )
=======
    message: '',
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Launch mailto with user's inputted fields
    const subject = encodeURIComponent(
      formData.subject || `Inquiry for Gayathri J from ${formData.name || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hi Gayathri,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's Build Something Together 🚀
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            I am currently looking for internship opportunities in AI/ML and Full Stack Development. If you're working on an interesting problem or opportunity, I'd love to connect.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-lg font-bold text-white mb-2">
              Direct Contact & Channels
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.socials.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors break-all"
                    >
                      {personalInfo.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-700/80 transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors border border-slate-700">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                    github.com/Gayathrijinka
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/gayathri-jinka
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400 border border-slate-700/60">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Current Location</span>
                <span className="text-sm font-medium text-slate-300">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Customization Note for Gayathri */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold block mb-1">💡 Quick Customization Note:</span>
              <span>
                You can easily update your LinkedIn URL & primary Email address anytime in <code className="text-slate-200">src/data/personalInfo.js</code>.
              </span>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl text-left">
              <div className="flex items-center gap-2 mb-6 text-white font-bold text-lg">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Send a Message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI/ML Internship Opportunity / Full Stack Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Gayathri, I came across your portfolio and projects..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>

                {sentNotice && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Opening your mail client with prefilled details. Thank you!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
