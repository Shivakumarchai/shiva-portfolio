import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Database, 
  BarChart2, 
  Layers, 
  CheckCircle2, 
  Info, 
  Calendar,
  Sparkles,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, theme }) => {
  const [copied, setCopied] = React.useState(false);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className={`relative w-full max-w-4xl rounded-3xl glass-panel max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border ${
          theme === 'dark' 
            ? 'bg-[#0E1528] border-[#43E8FF]/30 text-white' 
            : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-700/50 hover:bg-slate-700/30 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold">
            <span>{project.category}</span>
            <span className="text-slate-600">·</span>
            <span>Case Study & Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-[#9BA7C4] font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Technologies List (Clean unboxed tags with dividers) */}
        <div className="py-3 px-4 rounded-xl bg-[#080B16] border border-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono mb-8">
          <span className="text-slate-400 font-semibold">Technologies:</span>
          {project.technologies.map((tech, i) => (
            <React.Fragment key={tech}>
              <span className="text-[#43E8FF]">{tech}</span>
              {i < project.technologies.length - 1 && (
                <span className="text-slate-700">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#080B16]/80 border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase">{m.label}</div>
              <div className="text-xl font-bold font-mono text-[#F5F7FF] mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-6 text-sm">
          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-bold mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Business Problem & Objective
            </h3>
            <p className={theme === 'dark' ? 'text-slate-300 leading-relaxed' : 'text-slate-700 leading-relaxed'}>
              {project.problemStatement}
            </p>
          </div>

          {/* Analytical Methodology */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-bold mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Technical Methodology & Execution
            </h3>
            <div className="space-y-2">
              {project.methodology.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#43E8FF] font-bold mt-0.5">0{idx + 1}.</span>
                  <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights & Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Analytical Insights & Findings
            </h3>
            <div className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#080B16] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clearly Labeled Repository / Link Notice */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-xs text-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Project Repository Notice:</strong> Detailed Jupyter notebooks, SQL scripts, and Power BI report files (.pbix) are available upon request.
            </span>
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-100 font-mono text-[11px] whitespace-nowrap transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Portfolio URL' : 'Copy Case Study Link'}</span>
          </button>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#9BA7C4]">
            ID: {project.id} · Shiva Kumar Chai Portfolio
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black hover:opacity-95 transition-opacity"
            >
              Discuss This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
