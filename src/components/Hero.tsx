import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Cpu, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden circuit-grid">
      {/* Background radial gradient halos for blue & orange pops */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 bg-orange-600/12 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wide uppercase mb-4">
              <span>Electronics & Communication Engineering</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-blue-400">2nd Year B.E.</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Batch 2025 – 2029</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Building the intelligent bridge between{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                silicon circuits
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                smart IoT software
              </span>
              .
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.about}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-orange-500 transition-all shadow-lg shadow-blue-950/60 hover:shadow-orange-950/40 whitespace-nowrap"
              >
                <span>Explore Experience & Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Quick Contact & Location Bar (Unboxed metadata with interactive copy action) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <a 
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-white truncate"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="font-mono">{PORTFOLIO_DATA.personal.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-1 hover:text-orange-400 text-slate-500 transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <a 
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-white truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate font-mono">{PORTFOLIO_DATA.personal.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-1 hover:text-orange-400 text-slate-500 transition-colors shrink-0"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Technical Engineering Dossier Card (No photo) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-600 rounded-2xl opacity-30 blur-lg transition duration-1000 group-hover:opacity-50"
              />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0f1d] border border-slate-700/60 shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center font-mono font-extrabold text-base text-white shadow-md shadow-blue-950/50">
                      HM
                    </div>
                    <div>
                      <div className="text-xs font-mono text-orange-400 font-semibold">ENGINEERING DOSSIER</div>
                      <div className="text-xs text-slate-400">Batch 2025 – 2029</div>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-white bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-md">
                    2nd Year ECE
                  </span>
                </div>

                {/* Name & Academic Institution */}
                <div className="space-y-1.5">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    {PORTFOLIO_DATA.personal.name}
                  </h2>
                  <p className="text-xs font-medium text-blue-400">
                    {PORTFOLIO_DATA.personal.title}
                  </p>
                  <p className="text-xs text-slate-300">
                    {PORTFOLIO_DATA.personal.college}
                  </p>
                </div>

                {/* Score & Experience Highlight Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-mono uppercase block mb-1">Academic Standing</span>
                    <span className="text-xl font-black font-mono text-orange-400 tabular-nums">8.5 CGPA</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Top Tier Performer</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-mono uppercase block mb-1">Industrial Intern</span>
                    <span className="text-sm font-bold text-white block truncate">CloudMation</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5 font-medium">IoT & Embedded</span>
                  </div>
                </div>

                {/* Technical Focus Points */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>Embedded Systems</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-orange-400" />
                      <span>IoT Sensors</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-300">Robotics</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-300">VLSI Design</span>
                  </div>
                </div>

                {/* Card Quick Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span>View Certified Resume & Academic History</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Metric Strip Below the Hero Split (Design Constitution Rule 2.B & 13) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PORTFOLIO_DATA.metrics.map((item) => (
              <div 
                key={item.label}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                    {item.value}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
