import React, { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'profiles', 'contact']
      const scrollPos = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Profiles', href: '#profiles', id: 'profiles' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand" aria-label="Gayathri J Home">
          <span className="brand-badge">GJ</span>
          <span className="brand-name">
            Gayathri <span className="brand-accent">J</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button: Download Resume */}
        <div className="navbar-actions">
          <a
            href="./assets/resume.pdf"
            download="Gayathri_J_Resume.pdf"
            className="btn btn-sm btn-outline nav-resume-btn"
            title="Download Official Resume PDF"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-drawer-cta">
              <a
                href="./assets/resume.pdf"
                download="Gayathri_J_Resume.pdf"
                className="btn btn-primary"
                onClick={handleLinkClick}
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all var(--transition-normal);
          background: rgba(9, 13, 22, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          padding: 0.65rem 0;
          background: rgba(9, 13, 22, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-md);
          background: var(--gradient-blue);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
        }

        .brand-accent {
          color: var(--accent-cyan);
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
        }

        .nav-link {
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.12);
          font-weight: 600;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-resume-btn {
          display: none;
        }

        @media (min-width: 640px) {
          .nav-resume-btn {
            display: inline-flex;
          }
        }

        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer {
          display: block;
          position: fixed;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(9, 13, 22, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal);
        }

        .mobile-drawer.open {
          max-height: 480px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .mobile-drawer-inner {
          padding: 1.25rem 1.5rem 2rem 1.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--accent-cyan);
          background: rgba(37, 99, 235, 0.15);
        }

        .mobile-drawer-cta {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-drawer-cta .btn {
          width: 100%;
        }
      `}</style>
    </header>
  )
}
