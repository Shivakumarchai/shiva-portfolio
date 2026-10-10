import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Info,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  theme: 'dark' | 'light';
  openGuideModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ theme, openGuideModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'email-dispatched'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please provide a subject line.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message (minimum 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the mailto link fallback with pre-filled content
    const subjectEncoded = encodeURIComponent(`Portfolio Inquiry: ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Shiva,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Website.`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open email client safely
    window.location.href = mailtoUrl;
    setSubmitStatus('email-dispatched');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
            <span>06 / DIRECT COMMUNICATION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Initiate Conversation
          </h2>
          <p className={`mt-3 text-base sm:text-lg max-w-3xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
            Have an open data analyst role, freelance business intelligence contract, or analytics problem you would like to explore? Reach out directly via WhatsApp, email, or send a structured message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels (WhatsApp & Email buttons) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Channels Card */}
            <div className={`p-6 rounded-2xl glass-panel space-y-6 border ${
              theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Verified Contact Channels
              </h3>

              {/* Functional WhatsApp Button with exact prefill prompt requirement */}
              <div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-emerald-400 font-mono uppercase">Direct Messaging</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-200">
                        Chat on WhatsApp
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="text-[11px] font-mono text-slate-500 mt-1.5 pl-1">
                  Prefilled message ready: "+977 9807404088"
                </p>
              </div>

              {/* Functional Email Button */}
              <div>
                <a
                  href={PERSONAL_INFO.emailMailto}
                  className="w-full p-4 rounded-xl border border-[#43E8FF]/30 bg-[#43E8FF]/10 hover:bg-[#43E8FF]/20 text-[#43E8FF] font-semibold flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#43E8FF]/20 flex items-center justify-center text-[#43E8FF]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[#43E8FF] font-mono uppercase">Default Mail Client</div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-200">
                        Email Shiva Directly
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#43E8FF] transition-transform group-hover:translate-x-0.5" />
                </a>
                
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-1.5 pl-1">
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1 text-[#43E8FF] hover:underline"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Location & Timezone Details */}
              <div className="pt-4 border-t border-slate-800/60 space-y-3 text-xs font-mono text-[#9BA7C4]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Mayadevi RM-03, Rupandehi, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#43E8FF]" />
                  <span>Timezone: GMT+5:45 (Nepal Standard Time)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Typical response time: Within 12 - 24 hours</span>
                </div>
              </div>

            </div>

            {/* Form Backend Integration Transparency Notice */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#080B16] text-xs text-[#9BA7C4] space-y-2">
              <div className="flex items-center gap-2 text-white font-mono font-semibold">
                <Info className="w-4 h-4 text-[#43E8FF]" />
                <span>Backend & API Transparency</span>
              </div>
              <p className="leading-relaxed">
                To guarantee zero message drop without relying on third-party tracking, submitting this form opens your native mail client with all fields formatted.
              </p>
              <button
                onClick={openGuideModal}
                className="text-[#43E8FF] hover:underline flex items-center gap-1 font-mono text-[11px]"
              >
                <span>Learn how to wire Web3Forms or FormSubmit</span>
                <HelpCircle className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl glass-panel border ${
              theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>

              {submitStatus === 'email-dispatched' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Email draft initiated!</div>
                    <div className="text-xs text-emerald-400/90 mt-0.5">
                      Your message has been pre-formatted in your email app addressed to {PERSONAL_INFO.email}. Hit "Send" in your client to deliver it.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA7C4] mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#43E8FF] ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : theme === 'dark'
                            ? 'bg-[#080B16] border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA7C4] mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#43E8FF] ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : theme === 'dark'
                            ? 'bg-[#080B16] border-slate-700 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA7C4] mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Role Inquiry / BI Consultation"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#43E8FF] ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/10'
                        : theme === 'dark'
                          ? 'bg-[#080B16] border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA7C4] mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, position details, or analytics requirements..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#43E8FF] ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : theme === 'dark'
                          ? 'bg-[#080B16] border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#43E8FF] to-[#8B5CF6] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#43E8FF]/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
