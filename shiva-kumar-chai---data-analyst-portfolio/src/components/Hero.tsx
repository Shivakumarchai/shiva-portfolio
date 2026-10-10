import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Database, 
  TrendingUp, 
  Activity, 
  PieChart, 
  CheckCircle2, 
  Layers,
  Sparkles,
  BarChart2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  theme: 'dark' | 'light';
  openResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, openResumeModal }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'metrics' | 'query' | 'insights'>('metrics');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#43E8FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Meta (No pills, clean unboxed typography) */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#9BA7C4] uppercase font-mono">
              <span className="flex items-center gap-1.5 text-[#43E8FF] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43E8FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#43E8FF]"></span>
                </span>
                AVAILABLE FOR DATA ROLES
              </span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Candidate Title & Name */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#43E8FF] font-bold mb-2">
                DATA ANALYST · DATA SCIENCE · BUSINESS INTELLIGENCE
              </p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'} leading-[1.1]`}>
                SHIVA KUMAR CHAI
              </h1>
            </div>

            {/* Main Headline */}
            <div className="border-l-2 border-[#43E8FF] pl-4 sm:pl-5 py-1">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-[#F5F7FF] to-[#9BA7C4] bg-clip-text text-transparent">
                "{PERSONAL_INFO.headline}"
              </h2>
            </div>

            {/* Value Proposition Description */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Core Competencies Quick Summary (Clean unboxed text metadata) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#9BA7C4]">
              <span className="text-[#F5F7FF] font-medium">Core Stack:</span>
              <span>Python</span>
              <span className="text-slate-600">·</span>
              <span>SQL Queries & CTEs</span>
              <span className="text-slate-600">·</span>
              <span>Power BI DAX</span>
              <span className="text-slate-600">·</span>
              <span>Excel Modeling</span>
              <span className="text-slate-600">·</span>
              <span>Machine Learning Basics</span>
            </div>

            {/* Action Buttons: Exact 3 buttons requested by prompt */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#43E8FF]/20 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-[#43E8FF]/30 text-white hover:bg-[#43E8FF]/10 hover:border-[#43E8FF]'
                    : 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                }`}
              >
                <Mail className="w-4 h-4 text-[#43E8FF]" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={openResumeModal}
                className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-[#8B5CF6]/40 bg-[#11182D]/70 text-white hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]'
                    : 'border-purple-200 bg-purple-50 text-purple-900 hover:bg-purple-100'
                }`}
              >
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D / Analytics-Inspired Visualization */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glassmorphic Frame */}
            <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-2xl border border-[#43E8FF]/20 bg-[#11182D]/80">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[#9BA7C4]">analytics_engine.py</span>
                </div>
                
                {/* Segmented Control for visual tabs */}
                <div className="flex items-center bg-[#080B16] p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveMetricTab('metrics')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeMetricTab === 'metrics' ? 'bg-[#43E8FF] text-black font-semibold' : 'text-[#9BA7C4] hover:text-white'
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('query')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeMetricTab === 'query' ? 'bg-[#43E8FF] text-black font-semibold' : 'text-[#9BA7C4] hover:text-white'
                    }`}
                  >
                    SQL Query
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('insights')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeMetricTab === 'insights' ? 'bg-[#43E8FF] text-black font-semibold' : 'text-[#9BA7C4] hover:text-white'
                    }`}
                  >
                    Model
                  </button>
                </div>
              </div>

              {/* Dynamic Tab Body */}
              {activeMetricTab === 'metrics' && (
                <div className="space-y-4">
                  {/* Top KPI pair */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#080B16]/80 border border-[#43E8FF]/15">
                      <div className="flex items-center justify-between text-xs text-[#9BA7C4] font-mono mb-1">
                        <span>DATA RECORDS</span>
                        <Database className="w-3.5 h-3.5 text-[#43E8FF]" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">100K+</div>
                      <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                        <TrendingUp className="w-3 h-3" />
                        <span>Cleaned & Modeled</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#080B16]/80 border border-[#8B5CF6]/20">
                      <div className="flex items-center justify-between text-xs text-[#9BA7C4] font-mono mb-1">
                        <span>DAX MEASURES</span>
                        <BarChart2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white">24+</div>
                      <div className="text-[11px] text-[#43E8FF] mt-1 flex items-center gap-1 font-mono">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Star Schemas</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Sparkline Curve */}
                  <div className="p-4 rounded-xl bg-[#080B16]/90 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono text-[#9BA7C4] mb-3">
                      <span>EXPLORATORY PATTERN DENSITY</span>
                      <span className="text-[#43E8FF]">R² = 0.942</span>
                    </div>

                    {/* SVG Graphic with gradient waves */}
                    <svg viewBox="0 0 320 90" className="w-full h-20 overflow-visible">
                      <defs>
                        <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#43E8FF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,70 Q40,30 80,50 T160,20 T240,45 T320,15 L320,90 L0,90 Z"
                        fill="url(#heroGradient)"
                      />
                      <path
                        d="M0,70 Q40,30 80,50 T160,20 T240,45 T320,15"
                        fill="none"
                        stroke="#43E8FF"
                        strokeWidth="2.5"
                      />
                      {/* Interactive Data Points */}
                      <circle cx="80" cy="50" r="4" fill="#43E8FF" />
                      <circle cx="160" cy="20" r="4.5" fill="#8B5CF6" />
                      <circle cx="240" cy="45" r="4" fill="#43E8FF" />
                      <circle cx="320" cy="15" r="5" fill="#43E8FF" className="animate-pulse" />
                    </svg>

                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                      <span>INGESTION</span>
                      <span>TRANSFORMATION</span>
                      <span>ANALYSIS</span>
                      <span>DECISION</span>
                    </div>
                  </div>

                  {/* Floating Analytics Metric Card */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#43E8FF]/10 to-[#8B5CF6]/10 border border-[#43E8FF]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#080B16] text-[#43E8FF]">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Insight Extraction</div>
                        <div className="text-[11px] text-[#9BA7C4]">Pattern correlation: 0.89</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      OPTIMAL
                    </span>
                  </div>
                </div>
              )}

              {activeMetricTab === 'query' && (
                <div className="p-3.5 rounded-xl bg-[#080B16] font-mono text-xs border border-slate-800 space-y-2 text-slate-300">
                  <div className="text-slate-500">// SQL Optimization & CTE Analysis</div>
                  <div>
                    <span className="text-[#8B5CF6]">WITH</span> <span className="text-white">MonthlyCohort</span> <span className="text-[#8B5CF6]">AS</span> (
                  </div>
                  <div className="pl-4 text-[#9BA7C4]">
                    <span className="text-[#43E8FF]">SELECT</span> customer_id,<br />
                    &nbsp;&nbsp;DATE_TRUNC(<span className="text-amber-300">'month'</span>, order_date) <span className="text-[#8B5CF6]">AS</span> cohort_month,<br />
                    &nbsp;&nbsp;SUM(revenue) <span className="text-[#8B5CF6]">AS</span> net_revenue<br />
                    <span className="text-[#43E8FF]">FROM</span> sales_fact_table<br />
                    <span className="text-[#43E8FF]">GROUP BY</span> 1, 2
                  </div>
                  <div>)</div>
                  <div>
                    <span className="text-[#43E8FF]">SELECT</span> cohort_month, COUNT(*)<br />
                    <span className="text-[#43E8FF]">FROM</span> MonthlyCohort<br />
                    <span className="text-[#43E8FF]">WHERE</span> net_revenue &gt; 500;
                  </div>
                  <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Query execution: 42ms (Indexed)</span>
                  </div>
                </div>
              )}

              {activeMetricTab === 'insights' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#080B16] border border-slate-800">
                    <div className="text-[#9BA7C4] text-[11px] mb-1">MULTIMODAL MODEL EVALUATION</div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800">
                      <span className="text-white">CNN Feature Maps (Face):</span>
                      <span className="text-[#43E8FF]">92.4% AUC</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800">
                      <span className="text-white">MFCC Acoustic Vector (Voice):</span>
                      <span className="text-[#8B5CF6]">88.1% F1</span>
                    </div>
                    <div className="flex justify-between items-center pt-1 text-emerald-400 font-bold">
                      <span>Ensemble Hybrid Pipeline:</span>
                      <span>94.6% Test Accuracy</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#9BA7C4] bg-[#080B16]/50 p-2.5 rounded-lg border border-slate-800">
                    Trained across facial landmark geometries and acoustic frequency spectrograms.
                  </div>
                </div>
              )}

              {/* Bottom decorative stats bar */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-[#9BA7C4]">
                <span className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#43E8FF]" />
                  Pipeline: Ready
                </span>
                <span className="text-slate-500">·</span>
                <span>Python & SQL Grounded</span>
                <span className="text-slate-500">·</span>
                <span className="text-white">Nepal Timezone</span>
              </div>
            </div>

            {/* Subtle background decoration card */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-[#43E8FF]/20 to-transparent rounded-2xl -z-10 blur-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};
