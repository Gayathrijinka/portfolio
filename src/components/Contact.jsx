import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  FileDown
} from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
}
