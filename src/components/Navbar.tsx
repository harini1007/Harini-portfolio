import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, PhoneCall, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Virtual Lab', href: '#lab' },
    { label: 'Skills', href: '#skills' },
    { label: 'Interests', href: '#interests' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center font-mono font-bold text-sm text-white shadow-md shadow-blue-900/30">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg text-slate-100 group-hover:text-blue-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Resume */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              type="button"
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900/80 border border-slate-700/80 rounded-lg hover:border-slate-600 transition-all shadow-sm"
              title="View & Download CV"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-orange-500 rounded-lg transition-all shadow-md shadow-blue-950/50 hover:shadow-orange-950/30 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-[#090e1a]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Full CV (PDF)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Contact Harini</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
