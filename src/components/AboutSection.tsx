import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Lightbulb, 
  Cpu, 
  Compass, 
  Code2, 
  Target, 
  Zap, 
  BookOpen, 
  Users, 
  Clock, 
  Presentation,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeStrength, setActiveStrength] = useState<number>(0);

  const strengthIcons = [
    Target,         // Problem Solving
    Lightbulb,      // Logical Thinking
    Zap,            // Quick Learning
    Presentation,   // Communication Skills
    Users,          // Team Collaboration
    Clock,          // Time Management
    Compass,        // Adaptability
    BookOpen,       // Presentation Skills
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>Profile & Mindset</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-orange-400">Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curious by Nature, Engineered for Impact.
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            From exploring foundational electronic components to architecting real-time microcontroller 
            and IoT firmware, my journey centers on continuous practical curiosity.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span>The Electronics & Communication Foundation</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As a 2nd year student at VSB Engineering College in Coimbatore (maintaining an <strong className="text-orange-400 font-semibold">8.5 CGPA</strong>), 
                I delve deeply into both the physical reality of circuit theory and the logical abstraction of firmware code.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rather than treating hardware as an impenetrable black box, I enjoy analyzing analog signals, 
                wiring sensor arrays on breadboards, and writing concise C/C++ control loops that bring physical 
                machines to life.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-orange-400" />
                <span>Evolving Toward Modern IoT & Embedded Firmware</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                During my recent internship at <strong className="text-white">CloudMation</strong>, I bridged theory with real-world industry practice, 
                testing sensors, programming microcontrollers, and understanding how data travels from physical edge devices to actionable monitoring interfaces.
              </p>
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-2">
                <span>Core Target: Embedded Systems & Firmware</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Coimbatore & Global Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right: Core Strengths Interactive Matrix */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-bold text-white">
                    8 Core Professional Strengths
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Verified competencies extracted from practical lab work & team projects
                  </p>
                </div>
                <span className="text-xs font-mono text-orange-400">
                  {activeStrength + 1} of {PORTFOLIO_DATA.coreStrengths.length}
                </span>
              </div>

              {/* Grid of Strength Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {PORTFOLIO_DATA.coreStrengths.map((item, index) => {
                  const Icon = strengthIcons[index] || CheckCircle2;
                  const isActive = activeStrength === index;
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveStrength(index)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                        isActive
                          ? 'bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-900/20'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-1.5 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                      <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap truncate w-full">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Strength Detailed Spotlight */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {PORTFOLIO_DATA.coreStrengths[activeStrength].title}
                    </h4>
                    <span className="text-[11px] text-blue-400 font-mono">
                      Engineering Application
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-9">
                  {PORTFOLIO_DATA.coreStrengths[activeStrength].desc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
