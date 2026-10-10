import React from 'react';
import { 
  BrainCircuit, 
  BarChart3, 
  Cpu, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Database, 
  Code2, 
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';
import { CORE_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  theme: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-[#43E8FF]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#43E8FF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#8B5CF6]" />;
      default:
        return <BrainCircuit className="w-6 h-6 text-[#43E8FF]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
            <span>01 / ABOUT SHIVA</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Bridging Business Reality & Analytical Precision
          </h2>
          <p className={`mt-3 text-base sm:text-lg max-w-3xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
            A data analyst and Data Science graduate with a strong quantitative foundation, operational discipline, and an obsession with actionable decision-making.
          </p>
        </div>

        {/* Narrative & Profile Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-[#F5F7FF]/90' : 'text-slate-800'}`}>
              Hello! I'm <strong className="text-[#43E8FF] font-semibold">Shiva Kumar Chai</strong>, a dedicated Data Analyst and Data Science graduate based in Mayadevi, Rupandehi, Nepal. My work focuses on synthesizing messy, disparate datasets into clear, interactive business intelligence narratives and high-impact predictive models.
            </p>

            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              My journey combines rigorous computational foundations—ranging from procedural programming in C/C++ to distributed big data with Apache Spark and statistical computing in Python and R—with grounded real-world operational experience. Having worked directly in commercial ledger accounting and hands-on IT infrastructure support, I approach data not merely as numbers on a screen, but as the pulse of an organization.
            </p>

            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              Whether designing star-schema data models with custom DAX in Power BI, authoring complex multi-table SQL queries, or engineering multimodal neural networks in Python, my guiding principle remains constant: <em>technology and statistics are only as valuable as the strategic decisions they empower.</em>
            </p>

            {/* Practical competencies checklist */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#43E8FF] shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Data Cleaning & Exploratory Data Analysis (EDA)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#43E8FF] shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Relational SQL & Database Schema Design
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Interactive Power BI & Tableau Dashboards
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Statistical Hypothesis & Machine Learning Models
                </span>
              </div>
            </div>
          </div>

          {/* Quick Info & Provenance Card */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl glass-panel space-y-6 ${theme === 'dark' ? 'bg-[#11182D]/80 border-[#43E8FF]/20' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/40">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#43E8FF] font-bold">
                  BIOGRAPHICAL SNAPSHOT
                </h3>
                <span className="text-xs font-mono text-[#9BA7C4]">NEP / UTC+5:45</span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-mono text-[#9BA7C4] uppercase">Location</div>
                  <div className={`font-semibold flex items-center gap-1.5 mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    <MapPin className="w-4 h-4 text-[#43E8FF]" />
                    {PERSONAL_INFO.location}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#9BA7C4] uppercase">Academic Qualification</div>
                  <div className={`font-semibold flex items-center gap-1.5 mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
                    Data Science Graduate
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#9BA7C4] uppercase">Specialization Focus</div>
                  <div className={`font-semibold mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Business Intelligence, Statistical Analysis, & Data Pipelines
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#9BA7C4] uppercase">Primary Toolset</div>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs font-mono text-[#9BA7C4]">
                    <span className="text-white font-medium">Python</span>
                    <span>·</span>
                    <span className="text-white font-medium">SQL</span>
                    <span>·</span>
                    <span className="text-white font-medium">Power BI</span>
                    <span>·</span>
                    <span className="text-white font-medium">Excel</span>
                    <span>·</span>
                    <span className="text-white font-medium">MySQL</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between">
                <span className="text-xs text-[#9BA7C4]">Collaboration Status:</span>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  Open for Full-Time & Contract Roles
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards */}
        <div>
          <div className="mb-6">
            <h3 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Foundational Problem-Solving Pillars
            </h3>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              How I approach technical challenges and extract durable value from data systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <div 
                key={pillar.title}
                className={`p-6 rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' 
                    ? 'bg-[#11182D]/70 hover:border-[#43E8FF]/40 border-slate-800' 
                    : 'bg-white hover:border-[#0284C7]/40 border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#080B16] border border-slate-800 flex items-center justify-center mb-5">
                  {getIcon(pillar.icon)}
                </div>

                <div className="text-xs font-mono text-slate-500 mb-1">
                  0{idx + 1}
                </div>

                <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {pillar.title}
                </h4>

                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
