import React from 'react';
import { ArrowUp, Heart, Cpu, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#04060d] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center font-mono font-bold text-xs text-white">
              H
            </div>
            <div>
              <div className="font-bold text-slate-200">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-[11px] text-slate-500">
                Electronics & Communication Engineering · Coimbatore
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-5 text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#lab" className="hover:text-white transition-colors">Virtual Lab</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <button 
              onClick={onOpenResume} 
              className="hover:text-orange-400 transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Harini M. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
