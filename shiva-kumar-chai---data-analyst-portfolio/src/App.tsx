/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { DashboardSection } from './components/DashboardSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SetupGuideModal } from './components/SetupGuideModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem('shiva_portfolio_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('shiva_portfolio_theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#080B16] text-[#F5F7FF]' : 'bg-[#F8FAFC] text-[#0B1120]'
    }`}>
      {/* Top Fixed Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeModalOpen(true)}
        openGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive Analytics Visual */}
        <Hero
          theme={theme}
          openResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* About Section & Problem-Solving Pillars */}
        <About theme={theme} />

        {/* Technical Skills Organized by Interactive Categories */}
        <Skills theme={theme} />

        {/* Professional Experience Timeline */}
        <Experience theme={theme} />

        {/* Featured Projects with Interactive Modals */}
        <Projects theme={theme} />

        {/* Interactive Analytics Dashboard ("Data in Motion") with Recharts */}
        <DashboardSection theme={theme} />

        {/* Contact Section with WhatsApp & Email Integration */}
        <Contact
          theme={theme}
          openGuideModal={() => setIsGuideModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        openResumeModal={() => setIsResumeModalOpen(true)}
        openGuideModal={() => setIsGuideModalOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        theme={theme}
      />

      <SetupGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
