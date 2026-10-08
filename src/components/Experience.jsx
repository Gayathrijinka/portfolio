import React from 'react';
import { learningFocusAreas } from '../data/education';
import { 
  Brain, 
  Network, 
  Layers, 
  Binary, 
  Sparkles, 
  Server, 
  Code2, 
  Rocket, 
  Terminal, 
  Lightbulb, 
  Workflow 
} from 'lucide-react';

export default function Experience() {
  const getIcon = (id) => {
    switch (id) {
      case 'ai':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'ml':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'fullstack':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'dsa':
        return <Binary className="w-5 h-5 text-amber-400" />;
      case 'genai':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'apis':
        return <Server className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const engineeringWorkflow = [
    {
      step: "01",
      title: "Problem Formulation",
      desc: "Identifying practical, real-world domain challenges across healthcare, agriculture, and communication.",
    },
    {
      step: "02",
      title: "Data & Model Engineering",
      desc: "Preprocessing tabular/text data, feature engineering, and selecting supervised/vector ML algorithms.",
    },
    {
      step: "03",
      title: "Full-Stack Integration",
      desc: "Encapsulating inference models into Flask/FastAPI backends and connecting reactive, responsive interfaces.",
    },
    {
      step: "04",
      title: "Deployment & Verification",
      desc: "Hosting services on cloud platforms like Render, verifying endpoints, and evaluating user experience.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Student Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Learning & Building
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            As a student at VIT-AP University, I prioritize building practical software over theoretical passive learning. Here are my primary technical focus areas.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
        </div>

        {/* Student Note Banner */}
        <div className="mb-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between flex-wrap gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div>
              <span className="text-sm font-semibold text-slate-200">
                Academic Undergraduate Track (2023–2027)
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Actively seeking summer and semester internship roles in AI/ML Engineering and Full Stack Web Development.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Open for Placement & Internships
          </span>
        </div>

        {/* 6 Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {learningFocusAreas.map((area) => (
            <div
              key={area.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-4 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getIcon(area.id)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Active Track</span>
                <span className="text-emerald-400">VIT-AP University</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Methodology Workflow */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 text-left">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <span>How I Approach Engineering Problems</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringWorkflow.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 text-left relative overflow-hidden"
              >
                <span className="text-2xl font-black font-mono text-slate-800 block mb-2">
                  {item.step}
                </span>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
