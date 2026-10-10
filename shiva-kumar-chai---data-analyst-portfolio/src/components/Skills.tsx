import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Database, 
  FileCode, 
  Terminal, 
  Binary, 
  Layers, 
  PieChart, 
  Activity, 
  Table, 
  HardDrive, 
  FolderGit2, 
  Server, 
  Boxes, 
  Zap, 
  Globe, 
  Palette, 
  Layout, 
  GraduationCap, 
  Cloud, 
  CloudRain, 
  Wrench, 
  Network,
  Search,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { TECHNICAL_SKILLS, SkillItem } from '../data/portfolioData';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Programming',
    'Data Visualization',
    'Databases',
    'Big Data',
    'Web Technologies',
    'Cloud & Infrastructure'
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-[#43E8FF]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#43E8FF]" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#43E8FF]" />;
      case 'Binary': return <Binary className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#43E8FF]" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#43E8FF]" />;
      case 'Table': return <Table className="w-5 h-5 text-[#8B5CF6]" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-[#43E8FF]" />;
      case 'FolderGit2': return <FolderGit2 className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#43E8FF]" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#43E8FF]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#43E8FF]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#8B5CF6]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#43E8FF]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#8B5CF6]" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-[#43E8FF]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#43E8FF]" />;
      default: return <Code className="w-5 h-5 text-[#43E8FF]" />;
    }
  };

  const filteredSkills = useMemo(() => {
    return TECHNICAL_SKILLS.filter(skill => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.levelDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
              <span>02 / TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Organized Technical Stack
            </h2>
            <p className={`mt-3 text-base max-w-2xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              Practical capabilities across analytical programming, enterprise business intelligence, database architecture, big data processing, and cloud systems.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or tools..."
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#43E8FF] transition-all ${
                theme === 'dark'
                  ? 'bg-[#11182D] border-slate-700 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Category Filter Tabs (Segmented controls) */}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark'
                  ? 'bg-[#11182D]/75 border-slate-800 hover:border-[#43E8FF]/40'
                  : 'bg-white border-slate-200 hover:border-[#0284C7]/40 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080B16] border border-slate-800 flex items-center justify-center">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </h3>
                    {/* Quiet inline category text metadata (zero-pill discipline) */}
                    <div className="text-[11px] font-mono text-[#43E8FF]">
                      {skill.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
                {skill.levelDescription}
              </p>

              {/* Clean unboxed tags with subtle separators */}
              <div className="pt-3 border-t border-slate-800/40 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#9BA7C4]">
                {skill.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                      {tag}
                    </span>
                    {i < skill.tags.length - 1 && (
                      <span className="text-slate-600" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-mono text-[#43E8FF] underline"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Stack Discipline Banner */}
        <div className="mt-12 p-4 rounded-xl border border-[#43E8FF]/20 bg-gradient-to-r from-[#43E8FF]/5 to-[#8B5CF6]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9BA7C4]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#43E8FF]" />
            <span>Honest Technical Proficiency: Evaluated on real projects, coursework, and production workflows.</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">22 Technologies Modeled</span>
        </div>

      </div>
    </section>
  );
};
