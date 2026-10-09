import React from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { Linkedin, Github, LeetCode } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="portfolio-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Tier */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-badge">GJ</span>
            <div>
              <span className="footer-name">Gayathri J</span>
              <p className="footer-tagline">
                Computer Science &amp; Engineering &bull; VIT-AP University
              </p>
            </div>
          </div>

          <div className="footer-links-group">
            <a href="#about" className="footer-link">About</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#certifications" className="footer-link">Certifications</a>
            <a href="#profiles" className="footer-link">Profiles</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="./assets/resume.pdf" download="Gayathri_J_Resume.pdf" className="footer-link text-highlight">Resume</a>
          </div>

          <div className="footer-social-row">
            <a
              href="https://www.linkedin.com/in/gayathri-j-08604032a"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Gayathrijinka"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://leetcode.com/u/Gayathri_jinka/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LeetCode"
            >
              <LeetCode size={18} />
            </a>
            <a
              href="mailto:gayathrijinka2005@gmail.com"
              className="footer-social-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} Gayathri J. Crafted with React &bull; Hosted with pride.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      <style>{`
        .portfolio-footer {
          background: rgba(6, 9, 16, 0.95);
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2.5rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (max-width: 860px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        @media (max-width: 860px) {
          .footer-brand {
            flex-direction: column;
          }
        }

        .footer-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-tagline {
          font-size: 0.825rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .footer-links-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          justify-content: center;
        }

        .footer-link {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-cyan);
        }

        .text-highlight {
          color: #93c5fd;
          font-weight: 600;
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .footer-social-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-social-icon:hover {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        .footer-copy {
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-family: inherit;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-light);
          background: rgba(51, 65, 85, 0.6);
        }
      `}</style>
    </footer>
  )
}
