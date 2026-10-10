import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Wrench, 
  Calculator,
  Building,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
            <span>03 / CAREER PATH & INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Professional Experience Timeline
          </h2>
          <p className={`mt-3 text-base sm:text-lg max-w-3xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
            Direct industry background spanning enterprise IT systems support, network infrastructure, client troubleshooting, commercial accounting, and workforce payroll administration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-700/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-14">
          
          {EXPERIENCES.map((exp, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  isFirst
                    ? 'bg-[#080B16] border-[#43E8FF] shadow-lg shadow-[#43E8FF]/30'
                    : 'bg-[#080B16] border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/30'
                }`}>
                  {isFirst ? (
                    <Wrench className="w-3.5 h-3.5 text-[#43E8FF]" />
                  ) : (
                    <Calculator className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  )}
                </div>

                {/* Card Container */}
                <div className={`p-6 sm:p-8 rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-[#11182D]/80 border-slate-800 hover:border-[#43E8FF]/40'
                    : 'bg-white border-slate-200 hover:border-[#0284C7]/40 shadow-sm'
                }`}>
                  
                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800/40">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-[#43E8FF] mt-1">
                        <span className="flex items-center gap-1.5 text-inherit">
                          <Building className="w-4 h-4 text-[#8B5CF6]" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600 hidden sm:inline">·</span>
                        <span className="flex items-center gap-1 text-[#9BA7C4] text-xs font-mono font-normal">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period & Type unboxed metadata */}
                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono">
                      <span className="flex items-center gap-1.5 text-[#F5F7FF] font-semibold bg-[#080B16] px-3 py-1 rounded-lg border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-[#43E8FF]" />
                        {exp.period}
                      </span>
                      <span className="text-slate-500 text-[11px] uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary context */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold">
                      Core Responsibilities & Technical Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#43E8FF] shrink-0 mt-0.5" />
                          <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills / competencies unboxed list */}
                  <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#9BA7C4]">
                    <span className="text-[#F5F7FF] font-medium mr-1">Competencies Demonstrated:</span>
                    {exp.skillsGained.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                          {skill}
                        </span>
                        {sIdx < exp.skillsGained.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
