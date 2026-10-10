import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  BarChart, 
  TrendingUp, 
  Database, 
  Cpu, 
  ShoppingBag, 
  Activity,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Business Intelligence', 'Python & Analytics', 'Machine Learning', 'Web & Databases'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  // Render a project-specific visual preview
  const renderVisualPreview = (project: ProjectItem) => {
    switch (project.visualType) {
      case 'chart': // Uber Data Analysis
        return (
          <div className="h-44 w-full bg-[#080B16] p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
              <span>RIDE DENSITY TELEMETRY</span>
              <span className="text-[#43E8FF]">PEAK: 18:00 - 20:00</span>
            </div>
            {/* SVG Wave */}
            <svg viewBox="0 0 300 80" className="w-full h-24 overflow-visible">
              <path
                d="M 0,60 Q 50,70 100,20 T 200,45 T 300,10 L 300,80 L 0,80 Z"
                fill="rgba(67, 232, 255, 0.15)"
              />
              <path
                d="M 0,60 Q 50,70 100,20 T 200,45 T 300,10"
                fill="none"
                stroke="#43E8FF"
                strokeWidth="2.5"
              />
              <circle cx="100" cy="20" r="4" fill="#43E8FF" />
              <circle cx="200" cy="45" r="4" fill="#8B5CF6" />
              <circle cx="300" cy="10" r="4.5" fill="#43E8FF" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
          </div>
        );

      case 'dashboard': // Global Superstore
        return (
          <div className="h-44 w-full bg-[#080B16] p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
              <span>EXECUTIVE BI SCORECARD</span>
              <span className="text-emerald-400">+18.4% YoY</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">GLOBAL SALES</div>
                <div className="text-xs font-bold text-white font-mono">$2.3M</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">NET PROFIT</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">14.6%</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">RETURNS</div>
                <div className="text-xs font-bold text-amber-400 font-mono">2.1%</div>
              </div>
            </div>
            {/* Mini bar indicators */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>Americas: 42%</span>
                <span>EMEA: 34%</span>
                <span>APAC: 24%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 flex overflow-hidden">
                <div className="h-full bg-[#43E8FF] w-[42%]" />
                <div className="h-full bg-[#8B5CF6] w-[34%]" />
                <div className="h-full bg-emerald-400 w-[24%]" />
              </div>
            </div>
          </div>
        );

      case 'pipeline': // E-commerce Sales Analysis
        return (
          <div className="h-44 w-full bg-[#080B16] p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
              <span>RFM COHORT MATRIX</span>
              <span className="text-[#8B5CF6]">5 SEGMENTS</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[10px]">
              <div className="p-2 rounded bg-[#43E8FF]/20 text-[#43E8FF] border border-[#43E8FF]/30">
                Champions<br/><span className="text-xs font-bold">53% Rev</span>
              </div>
              <div className="p-2 rounded bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
                Loyal<br/><span className="text-xs font-bold">22% Rev</span>
              </div>
              <div className="p-2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                At Risk<br/><span className="text-xs font-bold">14% Rev</span>
              </div>
              <div className="p-2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Hibernating<br/><span className="text-xs font-bold">11% Rev</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>SQL Queries: CTE Partitioned</span>
              <span className="text-emerald-400">Churn Velocity Isolated</span>
            </div>
          </div>
        );

      case 'ecommerce': // DP Store
        return (
          <div className="h-44 w-full bg-[#080B16] p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
              <span>RELATIONAL MYSQL ARCHITECTURE</span>
              <span className="text-emerald-400">3NF NORMALIZED</span>
            </div>
            <div className="flex items-center justify-around py-2">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-center">
                <span className="text-[#43E8FF] font-bold">users</span><br/>
                <span className="text-slate-500">PK: user_id</span>
              </div>
              <span className="text-slate-600 font-mono">──&gt;</span>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-center">
                <span className="text-[#8B5CF6] font-bold">orders</span><br/>
                <span className="text-slate-500">FK: user_id</span>
              </div>
              <span className="text-slate-600 font-mono">──&gt;</span>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-center">
                <span className="text-emerald-400 font-bold">items</span><br/>
                <span className="text-slate-500">FK: order_id</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>PHP / MySQL Server Engine</span>
              <span>Transactional Locking</span>
            </div>
          </div>
        );

      case 'network': // Persona Sense
        return (
          <div className="h-44 w-full bg-[#080B16] p-4 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
              <span>MULTIMODAL DEEP LEARNING</span>
              <span className="text-[#43E8FF]">CNN + MFCC</span>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="text-center font-mono text-[10px]">
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#43E8FF]/20 border border-[#43E8FF]/40 flex items-center justify-center text-[#43E8FF] font-bold">
                  CNN
                </div>
                <span className="text-slate-400 mt-1 block">Face Frame</span>
              </div>
              <span className="text-slate-600 font-mono text-sm">+</span>
              <div className="text-center font-mono text-[10px]">
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] font-bold">
                  MFCC
                </div>
                <span className="text-slate-400 mt-1 block">Voice Pitch</span>
              </div>
              <span className="text-slate-600 font-mono text-sm">=</span>
              <div className="text-center font-mono text-[10px]">
                <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">
                  SVM
                </div>
                <span className="text-slate-400 mt-1 block">Personality</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 flex justify-between">
              <span>Flask REST API Inference</span>
              <span>Test Acc: 94.6%</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
              <span>04 / CURATED PROJECT PORTFOLIO</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Featured Analytics & Engineering Projects
            </h2>
            <p className={`mt-3 text-base max-w-2xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              End-to-end data analytics, Power BI business intelligence dashboards, Python exploratory pipelines, relational SQL platforms, and multimodal machine learning models.
            </p>
          </div>

          {/* Transparent Repository Status Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 p-2.5 rounded-xl border border-slate-800 bg-[#080B16]">
            <Info className="w-4 h-4 text-[#43E8FF]" />
            <span>Click any card for full methodology & metrics</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black font-bold border-transparent shadow-md shadow-[#43E8FF]/15'
                    : theme === 'dark'
                      ? 'border-slate-800 bg-[#11182D]/70 text-[#9BA7C4] hover:text-white hover:border-slate-700'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl glass-panel overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                theme === 'dark'
                  ? 'bg-[#11182D]/80 border-slate-800 hover:border-[#43E8FF]/40 shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200 hover:border-[#0284C7]/40 shadow-md'
              }`}
            >
              {/* Top: Visual preview */}
              <div>
                {renderVisualPreview(project)}

                <div className="p-6">
                  {/* Category unboxed text metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#43E8FF] mb-2">
                    <span>{project.category}</span>
                    <span className="text-slate-500 font-mono text-[11px]">CASE STUDY</span>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Clean unboxed technology stack */}
                  <div className="pt-3 border-t border-slate-800/40 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#9BA7C4]">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{tech}</span>
                        {i < Math.min(project.technologies.length, 4) - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[#43E8FF]">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-[#43E8FF]/30 bg-[#080B16] text-[#43E8FF] hover:bg-[#43E8FF] hover:text-black transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        theme={theme}
      />
    </section>
  );
};
