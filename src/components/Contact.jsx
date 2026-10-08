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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
}
