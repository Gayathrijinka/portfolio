import React, { useState } from 'react';
import { Terminal, Cpu, Database, Network, Sparkles, CheckCircle2, Play, Code2 } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('pipeline');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background glow effects */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Terminal / Architecture Card */}
      <div className="relative rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              gayathri_workspace ~ ai_ml_runtime
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'pipeline'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              pipeline.py
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'system'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              stack.json
            </button>
          </div>
        </div>

        {/* Tab 1: Python ML Pipeline Code */}
        {activeTab === 'pipeline' && (
          <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-2 select-none">
            <div className="text-slate-500 italic"># Gayathri J — Intelligent Systems Pipeline</div>
            <div>
              <span className="text-pink-400">from</span>{' '}
              <span className="text-cyan-300">sklearn.pipeline</span>{' '}
              <span className="text-pink-400">import</span> Pipeline
            </div>
            <div>
              <span className="text-pink-400">from</span>{' '}
              <span className="text-cyan-300">fastapi</span>{' '}
              <span className="text-pink-400">import</span> FastAPI, HTTPException
            </div>
            <div>
              <span className="text-pink-400">import</span>{' '}
              <span className="text-cyan-300">numpy</span>{' '}
              <span className="text-pink-400">as</span> np
            </div>
            <div className="pt-2 text-slate-500 italic"># End-to-end predictive and vector retrieval service</div>
            <div>
              <span className="text-blue-400">class</span>{' '}
              <span className="text-amber-300">EngineeringProfile</span>:
            </div>
            <div className="pl-4">
              <span className="text-slate-400">engineer</span> ={' '}
              <span className="text-emerald-300">"Gayathri J"</span>
            </div>
            <div className="pl-4">
              <span className="text-slate-400">target_role</span> ={' '}
              <span className="text-emerald-300">"AI/ML & Full Stack Intern"</span>
            </div>
            <div className="pl-4">
              <span className="text-slate-400">education</span> ={' '}
              <span className="text-emerald-300">"VIT-AP University (B.Tech CSE)"</span>
            </div>
            <div className="pl-4 pt-1">
              <span className="text-purple-400">def</span>{' '}
              <span className="text-blue-300">build_solution</span>(self, problem):
            </div>
            <div className="pl-8 text-slate-400">
              return {'{'}
              <div className="pl-4 text-emerald-300">"accuracy_focused": True,</div>
              <div className="pl-4 text-emerald-300">"clean_architecture": True,</div>
              <div className="pl-4 text-emerald-300">"real_world_impact": True,</div>
              {'}'}
            </div>
          </div>
        )}

        {/* Tab 2: System Stack JSON */}
        {activeTab === 'system' && (
          <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-1 select-none">
            <div className="text-slate-500">{'{'}</div>
            <div className="pl-4">
              <span className="text-pink-400">"candidate"</span>:{' '}
              <span className="text-emerald-300">"Gayathri J"</span>,
            </div>
            <div className="pl-4">
              <span className="text-pink-400">"specialization"</span>:{' '}
              <span className="text-emerald-300">"AI / Machine Learning & Full Stack"</span>,
            </div>
            <div className="pl-4">
              <span className="text-pink-400">"university"</span>:{' '}
              <span className="text-cyan-300">"VIT-AP University (2023-2027)"</span>,
            </div>
            <div className="pl-4">
              <span className="text-pink-400">"location"</span>:{' '}
              <span className="text-cyan-300">"Vijayawada, Andhra Pradesh, India"</span>,
            </div>
            <div className="pl-4">
              <span className="text-pink-400">"stack"</span>: [
                <div className="pl-4 text-amber-300">"Python", "Scikit-learn", "FastAPI", "Flask",</div>
                <div className="pl-4 text-amber-300">"React", "JavaScript", "Java", "MongoDB"</div>
              ],
            </div>
            <div className="pl-4">
              <span className="text-pink-400">"status"</span>:{' '}
              <span className="text-emerald-400 font-bold">"Seeking Internship Opportunities"</span>
            </div>
            <div className="text-slate-500">{'}'}</div>
          </div>
        )}

        {/* Interactive Engineering Metrics Footer */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-mono">ML Focus</div>
              <div className="text-xs font-semibold text-slate-200">Scikit & NLP</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-mono">Web Backend</div>
              <div className="text-xs font-semibold text-slate-200">Flask & FastAPI</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-mono">Frontends</div>
              <div className="text-xs font-semibold text-slate-200">React & Modern UI</div>
            </div>
          </div>
        </div>

        {/* Live Status Bar */}
        <div className="px-4 py-2 bg-emerald-950/30 border-t border-emerald-900/40 flex items-center justify-between text-xs font-mono text-emerald-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Ready for Internship • Summer / Fall</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">2023–2027 Batch</span>
        </div>
      </div>
    </div>
  );
}
