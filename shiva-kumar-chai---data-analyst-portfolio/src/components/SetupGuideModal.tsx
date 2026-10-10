import React from 'react';
import { 
  X, 
  Terminal, 
  Edit3, 
  Mail, 
  Download, 
  Globe, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface SetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const SetupGuideModal: React.FC<SetupGuideModalProps> = ({ isOpen, onClose, theme }) => {
  const [copiedSnippet, setCopiedSnippet] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className={`relative w-full max-w-4xl rounded-2xl glass-panel max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border ${
          theme === 'dark' 
            ? 'bg-[#0E1528] border-[#43E8FF]/30 text-white' 
            : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#43E8FF]" />
            <h2 className="text-xl font-bold tracking-tight">
              Developer & Deployment Handbook
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-700/40 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5 Guide Sections */}
        <div className="space-y-8 text-sm">
          
          {/* 1. How to run the website */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#43E8FF]">
              <Terminal className="w-4 h-4" />
              <h3>1. How to Run the Website Locally</h3>
            </div>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              The application is configured using Vite, React 19, and Tailwind CSS. To install dependencies and launch the dev server:
            </p>
            <div className="p-3.5 rounded-xl bg-[#080B16] border border-slate-800 font-mono text-xs text-slate-300 relative">
              <pre className="overflow-x-auto">
{`# 1. Install packages
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build`}
              </pre>
              <button
                onClick={() => handleCopy("npm install && npm run dev", "run")}
                className="absolute top-3 right-3 p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white"
              >
                {copiedSnippet === 'run' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* 2. How to edit text, images, and projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#8B5CF6]">
              <Edit3 className="w-4 h-4" />
              <h3>2. How to Edit Text, Projects, and Skills</h3>
            </div>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              All core data is centralized in a clean, typed configuration file:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Modify Personal Info & Bio:</strong> Open <code className="text-[#43E8FF] font-mono">src/data/portfolioData.ts</code> and update the <code className="text-[#43E8FF] font-mono">PERSONAL_INFO</code> object (email, phone, location, headlines).
              </li>
              <li>
                <strong className="text-white">Add or Update Projects:</strong> Edit the <code className="text-[#43E8FF] font-mono">FEATURED_PROJECTS</code> array with your own descriptions, technologies, metrics, and methodology.
              </li>
              <li>
                <strong className="text-white">Add or Update Skills:</strong> Edit the <code className="text-[#43E8FF] font-mono">TECHNICAL_SKILLS</code> array to add tools or categorize them.
              </li>
              <li>
                <strong className="text-white">Change Interactive Dashboard Data:</strong> Modify records in <code className="text-[#43E8FF] font-mono">RAW_DASHBOARD_DATA</code> to reflect your custom business intelligence metrics.
              </li>
            </ul>
          </div>

          {/* 3. How to configure the contact form */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-emerald-400">
              <Mail className="w-4 h-4" />
              <h3>3. How to Configure Free Contact Form Services</h3>
            </div>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              The portfolio currently includes a zero-config fallback that drafts directly in the sender's mail client addressed to <code className="text-[#43E8FF] font-mono">shivakumarchai4886@gmail.com</code>.
            </p>
            <div className="p-3.5 rounded-xl bg-[#080B16] border border-slate-800 space-y-2 text-xs">
              <div className="font-semibold text-white">To receive direct silent inbox submissions via Web3Forms (100% Free):</div>
              <ol className="list-decimal pl-5 space-y-1 text-slate-300">
                <li>Visit <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#43E8FF] underline">web3forms.com</a> and enter your email (<code className="text-white">shivakumarchai4886@gmail.com</code>) to receive an Access Key.</li>
                <li>Add your Access Key to an environment variable in <code className="text-[#43E8FF] font-mono">.env</code>: <code className="text-amber-300">VITE_WEB3FORMS_KEY=your_key_here</code>.</li>
                <li>In <code className="text-[#43E8FF] font-mono">src/components/Contact.tsx</code>, replace the submit handler with a <code className="text-white">fetch('https://api.web3forms.com/submit', ...)</code> POST request.</li>
              </ol>
            </div>
          </div>

          {/* 4. How to export or download source code */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-amber-400">
              <Download className="w-4 h-4" />
              <h3>4. Exporting / Downloading Source Code</h3>
            </div>
            <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
              All files in this workspace form a standard Vite + React project. You can copy or clone this directory directly, push it to GitHub via git, or archive the project folder as a ZIP file.
            </p>
            <div className="p-3.5 rounded-xl bg-[#080B16] border border-slate-800 font-mono text-xs text-slate-300">
              <pre>
{`git init
git add .
git commit -m "feat: Shiva Kumar Chai portfolio release"
git branch -M main
git remote add origin https://github.com/shivakumarchai/portfolio.git
git push -u origin main`}
              </pre>
            </div>
          </div>

          {/* 5. Deploy on Vercel or Netlify */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#43E8FF]">
              <Globe className="w-4 h-4" />
              <h3>5. Free Deployment with Vercel or Netlify</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#080B16] border border-slate-800 space-y-2">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Deploy to Vercel</span>
                  <span className="text-[10px] font-mono text-emerald-400">Recommended</span>
                </div>
                <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-300">
                  <li>Push your code to GitHub.</li>
                  <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#43E8FF] underline">vercel.com</a> and sign in with GitHub.</li>
                  <li>Click <strong>"New Project"</strong> and import your repository.</li>
                  <li>Framework Preset: <strong>Vite</strong>.</li>
                  <li>Click <strong>"Deploy"</strong>. Done in 30 seconds!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-[#080B16] border border-slate-800 space-y-2">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>Deploy to Netlify</span>
                  <span className="text-[10px] font-mono text-cyan-400">Fast & Free</span>
                </div>
                <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-300">
                  <li>Log in to <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-[#43E8FF] underline">netlify.com</a>.</li>
                  <li>Select <strong>"Add new site"</strong> &gt; <strong>"Import an existing project"</strong>.</li>
                  <li>Connect to GitHub and select the repo.</li>
                  <li>Build command: <code className="text-[#43E8FF]">npm run build</code>.</li>
                  <li>Publish directory: <code className="text-[#43E8FF]">dist</code>.</li>
                </ol>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#43E8FF] text-black hover:bg-cyan-300 transition-colors"
          >
            Close Handbook
          </button>
        </div>

      </div>
    </div>
  );
};
