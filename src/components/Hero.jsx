<<<<<<< HEAD
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
=======
import { ArrowDown, Mail, Download, Sparkles, Terminal, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

import HeroVisual from './HeroVisual';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Titles, Action Buttons */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI/ML & Full Stack Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{personalInfo.name}</span> <span className="inline-block animate-wiggle">👋</span>
              </h1>
              
              {/* Dual Roles */}
              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl font-semibold text-slate-200">
                <span className="text-emerald-400">AI/ML Engineer</span>
                <span className="text-slate-600 font-normal">|</span>
                <span className="text-cyan-400">Full Stack Developer</span>
              </div>
            </div>

            {/* Quick Context Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>VIT-AP University (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              "{personalInfo.heroDescription}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Gayathri_J_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-slate-600 transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
              >
                Preview in Browser
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono">
                Connect:
              </span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
                title="GitHub Profile"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors group"
                title="LinkedIn Profile"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-cyan-500/40 transition-colors">
                  <LinkedinIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors group"
                title="Send Email"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-emerald-400" />
                </div>
                <span className="font-mono text-xs hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI / Developer Interactive Visual Element */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
>>>>>>> b72595f837fac1e93958dcddb823daed8d5c55ae
}
