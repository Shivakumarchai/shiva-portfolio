import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  ExternalLink, 
  Compass,
  HelpCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  openResumeModal: () => void;
  openGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  theme, 
  toggleTheme, 
  openResumeModal,
  openGuideModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'dashboard', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-[#080B16]/90 backdrop-blur-md border-b border-[#43E8FF]/10 shadow-lg shadow-black/30 py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43E8FF] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#43E8FF] to-[#8B5CF6] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#43E8FF]/20">
              <div className="w-full h-full bg-[#080B16] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-[#43E8FF] to-white bg-clip-text text-transparent">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-bold tracking-tight ${theme === 'dark' ? 'text-[#F5F7FF]' : 'text-slate-900'} group-hover:text-[#43E8FF] transition-colors`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-[#43E8FF] font-medium hidden sm:block">
                DATA ANALYTICS & BI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all relative ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-[#43E8FF]'
                        : 'text-[#0284C7]'
                      : theme === 'dark'
                        ? 'text-[#9BA7C4] hover:text-[#F5F7FF]'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Resume Modal, Guide, Contact */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Guide modal button */}
            <button
              onClick={openGuideModal}
              title="Deployment & Editing Guide"
              className={`p-2 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                theme === 'dark' 
                  ? 'border-[#43E8FF]/20 text-[#9BA7C4] hover:text-[#43E8FF] hover:border-[#43E8FF]/40 bg-[#11182D]/60' 
                  : 'border-slate-300 text-slate-700 hover:text-[#0284C7] hover:border-slate-400 bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#43E8FF]" />
              <span className="hidden md:inline">Docs & Setup</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light theme"
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-[#43E8FF]/20 text-[#43E8FF] bg-[#11182D]/60 hover:bg-[#11182D]'
                  : 'border-slate-300 text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={openResumeModal}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all ${
                theme === 'dark'
                  ? 'border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-white hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]'
                  : 'border-purple-300 bg-purple-50 text-purple-900 hover:bg-purple-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Resume</span>
            </button>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black font-semibold hover:opacity-95 transition-opacity shadow-sm shadow-[#43E8FF]/20"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'border-[#43E8FF]/20 text-[#43E8FF] bg-[#11182D]'
                  : 'border-slate-300 text-slate-700 bg-slate-100'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'border-[#43E8FF]/20 text-white bg-[#11182D]'
                  : 'border-slate-300 text-slate-800 bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-fadeIn ${
          theme === 'dark'
            ? 'bg-[#080B16] border-[#43E8FF]/20 text-[#F5F7FF]'
            : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-[#43E8FF] bg-[#43E8FF]/10 font-semibold'
                    : 'text-inherit hover:bg-slate-500/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-700/30 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 text-white"
            >
              <FileText className="w-4 h-4 text-[#8B5CF6]" />
              View & Print Resume
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openGuideModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-mono border border-[#43E8FF]/20 text-[#43E8FF]"
            >
              <HelpCircle className="w-4 h-4" />
              Setup & Deployment Guide
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full text-center py-2 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black"
            >
              Contact Shiva
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
