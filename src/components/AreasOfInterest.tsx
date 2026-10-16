import React from 'react';
import { 
  Cpu, 
  Wifi, 
  Bot, 
  Layers, 
  Binary, 
  Radio, 
  Workflow, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AreasOfInterest: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    Wifi,
    Bot,
    Microchip: Layers,
    Binary,
    Radio,
    Workflow,
    Sparkles,
  };

  return (
    <section id="interests" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wider uppercase mb-2">
            <span>Specialization Scope</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-blue-400">Future Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Areas of Technical Interest
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            From silicon-level VLSI architecture to distributed edge IoT ecosystems and autonomous robotics, 
            these are the domains driving my academic research and future career aspirations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Featured Visual Anchor Bento Card (Spans 2 columns on lg) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden relative group min-h-[320px] flex flex-col justify-end p-6 sm:p-8">
            <img
              src={PORTFOLIO_DATA.personal.circuitImageUrl}
              alt="VLSI Silicon and Robotics Architecture"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/70 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 mb-2">
                <span>VLSI & Silicon Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Robotics Fusion</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Hardware Acceleration & Silicon Design
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Passionate about designing dedicated hardware engines for micro-controllers, embedded perception in robotics, 
                and low-power VLSI design for the next generation of smart sensors.
              </p>
            </div>
          </div>

          {/* Cards for each interest */}
          {PORTFOLIO_DATA.areasOfInterest.map((item) => {
            const Icon = iconMap[item.icon] || Cpu;
            const isBlue = item.accent === 'blue';
            return (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isBlue 
                        ? 'bg-blue-600/10 border-blue-500/30 text-blue-400 group-hover:bg-blue-600/20' 
                        : 'bg-orange-600/10 border-orange-500/30 text-orange-400 group-hover:bg-orange-600/20'
                    } transition-colors`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <span className={isBlue ? 'text-blue-400' : 'text-orange-400'}>ECE Domain</span>
                  <span aria-hidden="true">·</span>
                  <span>Active Study</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
