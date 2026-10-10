import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  Info,
  ExternalLink,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, TECHNICAL_SKILLS, FEATURED_PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className={`relative w-full max-w-4xl rounded-2xl glass-panel max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border ${
          theme === 'dark' 
            ? 'bg-[#0E1528] border-[#43E8FF]/30 text-white' 
            : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Actions bar (no-print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-slate-700/60 bg-inherit no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#43E8FF]" />
            <span className="font-bold text-sm tracking-wide">
              Curriculum Vitae — Shiva Kumar Chai
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save to PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#43E8FF] text-black hover:bg-cyan-300 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-700/40 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clear Instructions Banner for Adding Real PDF (per prompt requirement) */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#43E8FF]/10 to-[#8B5CF6]/10 border border-[#43E8FF]/20 text-xs text-[#9BA7C4] no-print space-y-1.5">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Info className="w-4 h-4 text-[#43E8FF]" />
            <span>Adding Your Physical PDF Resume:</span>
          </div>
          <p>
            To link an external PDF file directly: place your compiled PDF document into the <code className="text-[#43E8FF] font-mono">/public</code> folder named <code className="text-[#43E8FF] font-mono">resume.pdf</code>. Users can also click <strong>"Print / Save PDF"</strong> above to instantly generate an ATS-friendly PDF copy of this verified layout!
          </p>
        </div>

        {/* Printable Resume Document Container */}
        <div className="resume-printable space-y-8 text-sm">
          
          {/* Header Block */}
          <div className="border-b-2 border-slate-700 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-[#43E8FF] mb-3">
              Data Analyst | Data Science Graduate | Analytics & Business Intelligence
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#9BA7C4]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#43E8FF]" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#43E8FF] font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Data Analyst and Data Science graduate with expertise in transforming raw transaction records into actionable strategic business decisions. Proficient in Python (Pandas, NumPy, Scikit-learn), relational SQL querying, and Power BI interactive dashboard design. Combines quantitative modeling with hands-on enterprise IT systems support and administrative workforce accounting.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#43E8FF] font-bold mb-3">
              EDUCATION & CREDENTIALS
            </h2>
            <div className="p-4 rounded-xl bg-[#080B16] border border-slate-800">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-base">Bachelor in Data Science / Computing</h3>
                  <div className="text-slate-400 text-xs">University Degree Program · Nepal</div>
                </div>
                <span className="text-xs font-mono text-[#8B5CF6] font-semibold">Data Science Graduate</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Core Coursework: Statistical Computing, Relational Databases, Big Data Analytics, Machine Learning, Data Structures & Algorithms.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#43E8FF] font-bold mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#080B16] border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <div className="text-[#43E8FF] text-xs font-semibold">
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Organized */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#43E8FF] font-bold mb-3">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#080B16] border border-slate-800">
                <span className="text-[#43E8FF] font-bold">Programming:</span>
                <p className="text-slate-300 mt-1">Python, SQL, R, C, C++, Scala</p>
              </div>
              <div className="p-3 rounded-lg bg-[#080B16] border border-slate-800">
                <span className="text-[#8B5CF6] font-bold">Data Visualization:</span>
                <p className="text-slate-300 mt-1">Power BI, Tableau, Excel (PivotTables, DAX)</p>
              </div>
              <div className="p-3 rounded-lg bg-[#080B16] border border-slate-800">
                <span className="text-emerald-400 font-bold">Databases & Big Data:</span>
                <p className="text-slate-300 mt-1">MySQL, MongoDB, Hadoop, Hive, Apache Spark</p>
              </div>
              <div className="p-3 rounded-lg bg-[#080B16] border border-slate-800">
                <span className="text-amber-400 font-bold">Cloud, Web & Systems:</span>
                <p className="text-slate-300 mt-1">Microsoft Azure, AWS, HTML, CSS, WordPress, Moodle, Networking</p>
              </div>
            </div>
          </div>

          {/* Highlighted Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#43E8FF] font-bold mb-3">
              KEY ANALYTICS & ENGINEERING PROJECTS
            </h2>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-[#080B16] border border-slate-800 text-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[#43E8FF] font-mono">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-400">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer (no-print) */}
        <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-center justify-between no-print">
          <span className="text-xs font-mono text-[#9BA7C4]">
            Shiva Kumar Chai · Mayadevi RM-03, Nepal
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#43E8FF] text-black hover:bg-cyan-300 transition-colors"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
