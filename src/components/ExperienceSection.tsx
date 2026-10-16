import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Cpu, 
  Wifi, 
  Activity, 
  Terminal,
  ExternalLink,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'hardware' | 'takeaways'>('overview');
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#090d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wider uppercase mb-2">
            <span>Industry Immersion</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-blue-400">Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internship
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Hands-on hardware interfacing, sensor diagnostics, and IoT architecture built in real laboratory environments.
          </p>
        </div>

        {/* Spotlight Card with Visual Workbench & Technical Breakdown */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column: Workbench Image */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-950 overflow-hidden">
              <img
                src={PORTFOLIO_DATA.personal.labImageUrl}
                alt="CloudMation Embedded Systems & IoT Laboratory Workbench"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/30 lg:to-slate-900" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 font-mono">
                  CloudMation · Coimbatore
                </span>
                <span className="bg-emerald-950/80 text-emerald-300 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-800/60 font-semibold">
                  Internship Completed
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                
                {/* Meta details with zero pills, clean typographic separators */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 font-semibold text-white">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    {exp.organization}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    {exp.location}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5 font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {exp.role}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Interactive Segmented Switcher for Deep Dive */}
                <div className="flex items-center gap-1 p-1 bg-slate-950/80 border border-slate-800 rounded-lg mb-6 max-w-md">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-all ${
                      activeTab === 'overview'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Key Outcomes
                  </button>
                  <button
                    onClick={() => setActiveTab('hardware')}
                    className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-all ${
                      activeTab === 'hardware'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Hardware Handled
                  </button>
                  <button
                    onClick={() => setActiveTab('takeaways')}
                    className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-all ${
                      activeTab === 'takeaways'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Skills Reinforced
                  </button>
                </div>

                {/* Tab 1: Key Outcomes */}
                {activeTab === 'overview' && (
                  <div className="space-y-3">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Hardware Handled */}
                {activeTab === 'hardware' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>Microcontrollers</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Arduino Uno & Nano boards, ATMega architecture, GPIO configuration, digital PWM pins.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Activity className="w-3.5 h-3.5 text-orange-400" />
                        <span>Sensors & Actuators</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        DHT11 (Temp/Humidity), HC-SR04 (Ultrasonic), LDR, IR transceivers, DC relays & servomotors.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Wifi className="w-3.5 h-3.5 text-blue-400" />
                        <span>IoT Data Communication</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        UART serial pipelines, baud rate calibration, and data transmission to remote web servers.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Layers className="w-3.5 h-3.5 text-orange-400" />
                        <span>Circuit Diagnostics</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Digital multimeter measurements, breadboard pull-up/pull-down resistor arrangements.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Skills Reinforced */}
                {activeTab === 'takeaways' && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <p>
                      • <strong className="text-white">Real-Time Debugging:</strong> Solving hardware timing errors and noise interference on analog inputs.
                    </p>
                    <p>
                      • <strong className="text-white">Firmware Optimization:</strong> Writing non-blocking code using timer tickers rather than CPU-stalling delays.
                    </p>
                    <p>
                      • <strong className="text-white">Team Collaboration:</strong> Delivering hardware prototypes in tandem with senior embedded supervisors.
                    </p>
                  </div>
                )}

              </div>

              {/* Tag footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                <span className="text-slate-500">Focus:</span>
                {exp.tags.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="text-slate-300 hover:text-blue-400 transition-colors">{t}</span>
                    {idx < exp.tags.length - 1 && <span className="text-slate-700">·</span>}
                  </React.Fragment>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
