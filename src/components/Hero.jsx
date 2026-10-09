import React from 'react'
import { ArrowRight, FileDown, Mail, Github, Linkedin, Code, Sparkles, MapPin, GraduationCap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-status-pill">
              <span className="status-dot"></span>
              Available for Internships & Software Roles
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Gayathri J</span>
          </h1>

          <p className="hero-headline">
            Computer Science Engineering Student <span className="divider">|</span> AI/ML <span className="divider">|</span> Full-Stack Development
          </p>

          <p className="hero-intro">
            I am a Computer Science and Engineering student at <strong>VIT-AP University</strong> interested in Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy building practical applications that combine intelligent systems, data-driven recommendations, and user-friendly web interfaces.
          </p>

          <div className="hero-meta-strip">
            <div className="meta-item">
              <GraduationCap size={16} className="meta-icon" />
              <span>B.Tech CSE &bull; VIT-AP (CGPA: 8.96)</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} className="meta-icon" />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={17} />
              <span>Contact Me</span>
            </a>

            <a
              href="./assets/resume.pdf"
              download="Gayathri_J_Resume.pdf"
              className="btn btn-outline"
              title="Download Gayathri J's Official Resume"
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Connect Links */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/gayathri-j-08604032a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Gayathri J on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Gayathrijinka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Gayathri J on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://leetcode.com/u/Gayathri_jinka/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Gayathri J on LeetCode"
              >
                <Code size={18} />
              </a>
              <a
                href="mailto:gayathrijinka2005@gmail.com"
                className="social-icon-btn"
                aria-label="Email Gayathri J"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Card */}
        <div className="hero-visual">
          <div className="photo-card-wrapper">
            <div className="photo-ambient-glow"></div>
            <div className="photo-card">
              <div className="photo-frame">
                <img
                  src="./assets/profile-photo.jpg"
                  alt="Gayathri J - Computer Science Student and Developer"
                  className="profile-img"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to photo.jpeg if profile-photo.jpg path has issue
                    if (!e.target.src.includes('photo.jpeg')) {
                      e.target.src = './assets/photo.jpeg'
                    }
                  }}
                />
              </div>

              {/* Floating Badge on Card */}
              <div className="floating-badge top-right">
                <Sparkles size={16} className="badge-sparkle-icon" />
                <div>
                  <span className="badge-subtitle">Specialization</span>
                  <strong className="badge-title">AI &amp; Full-Stack</strong>
                </div>
              </div>

              <div className="floating-badge bottom-left">
                <div className="badge-indicator"></div>
                <div>
                  <span className="badge-subtitle">Education</span>
                  <strong className="badge-title">VIT-AP &bull; 8.96 CGPA</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          position: relative;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 3.5rem;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
        }

        .hero-badge-wrapper {
          margin-bottom: 1.25rem;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .hero-title {
          font-size: clamp(2.35rem, 5vw, 3.65rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          font-weight: 600;
          color: #93c5fd;
          margin-bottom: 1.35rem;
          line-height: 1.45;
        }

        .hero-headline .divider {
          color: var(--text-muted);
          margin: 0 0.35rem;
          opacity: 0.6;
        }

        .hero-intro {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 580px;
        }

        @media (max-width: 992px) {
          .hero-intro {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .hero-meta-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          .hero-meta-strip {
            justify-content: center;
          }
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .meta-icon {
          color: var(--accent-cyan);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }

        @media (max-width: 992px) {
          .hero-actions {
            justify-content: center;
          }
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .hero-socials {
            justify-content: center;
          }
        }

        .social-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.18);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }

        /* Profile Visual Column */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .photo-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .photo-ambient-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%);
          filter: blur(25px);
          border-radius: var(--radius-xl);
          z-index: 0;
          pointer-events: none;
        }

        .photo-card {
          position: relative;
          z-index: 1;
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: var(--radius-xl);
          padding: 1.15rem;
          box-shadow: var(--shadow-lg), 0 0 30px rgba(37, 99, 235, 0.2);
        }

        .photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform var(--transition-slow);
        }

        .photo-card:hover .profile-img {
          transform: scale(1.025);
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.95rem;
          background: rgba(9, 13, 22, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-md);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          z-index: 2;
          pointer-events: none;
        }

        .floating-badge.top-right {
          top: -15px;
          right: -15px;
        }

        .floating-badge.bottom-left {
          bottom: -15px;
          left: -15px;
        }

        @media (max-width: 480px) {
          .floating-badge.top-right {
            top: -10px;
            right: 0;
          }
          .floating-badge.bottom-left {
            bottom: -10px;
            left: 0;
          }
        }

        .badge-sparkle-icon {
          color: #38bdf8;
        }

        .badge-subtitle {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .badge-title {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .badge-indicator {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }
      `}</style>
    </section>
  )
}
