import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Database, 
  FileText,
  HelpCircle,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  theme: 'dark' | 'light';
  openResumeModal: () => void;
  openGuideModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  theme, 
  openResumeModal, 
  openGuideModal 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`border-t transition-colors relative no-print ${
      theme === 'dark'
        ? 'bg-[#05070E] border-slate-800 text-[#9BA7C4]'
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Monogram column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#43E8FF] to-[#8B5CF6] p-[1.5px] shadow-md shadow-[#43E8FF]/20">
                <div className="w-full h-full bg-[#080B16] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-wider text-white">
                    {PERSONAL_INFO.initials}
                  </span>
                </div>
              </div>
              <div>
                <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-[#43E8FF]">
                  Data Analyst & Data Science Graduate
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              "Turning Data Into Meaningful Decisions." Empowering organizations with robust statistical modeling, scalable SQL pipelines, and executive business intelligence dashboards.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                title="WhatsApp Message"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.emailMailto}
                className="p-2 rounded-lg border border-slate-800 hover:border-[#43E8FF]/40 hover:text-[#43E8FF] transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={openResumeModal}
                className="p-2 rounded-lg border border-slate-800 hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] transition-colors"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={openGuideModal}
                className="p-2 rounded-lg border border-slate-800 hover:border-[#43E8FF]/40 hover:text-[#43E8FF] transition-colors"
                title="Setup Handbook"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Navigation Index
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#43E8FF] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Handbook */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Location & Coordinates
            </h4>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#43E8FF] shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openGuideModal}
                className="text-xs font-mono text-[#43E8FF] hover:underline flex items-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>View Full Setup & Deployment Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-top */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2026 Shiva Kumar Chai. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript & Recharts</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#43E8FF] transition-colors group p-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
