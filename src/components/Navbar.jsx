import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Navbar({ onOpenResumeModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Learning & Building', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-slate-100 hover:text-emerald-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for internships" />
              </span>
              <span className="text-[11px] text-slate-400 font-mono -mt-1 hidden sm:block">
                AI/ML & Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 focus:outline-none border border-slate-700/60"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800/80 bg-[#080c14]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-1.5 mt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm shadow-md shadow-emerald-500/20"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
