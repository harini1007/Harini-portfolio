import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  School,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>Academic Background</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-orange-400">Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Consistent academic performance across foundational schooling and university engineering curriculum.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => {
            const isCollege = idx === 0;
            return (
              <div
                key={edu.degree}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isCollege
                    ? 'bg-slate-900/70 border-blue-500/40 shadow-xl shadow-blue-950/20'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{edu.period}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-300 font-semibold">{edu.status}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <School className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Score Callout */}
                  <div className="shrink-0">
                    <div className={`inline-flex flex-col items-start md:items-end p-3 rounded-xl border ${
                      isCollege 
                        ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' 
                        : 'bg-slate-800/50 border-slate-700 text-blue-400'
                    }`}>
                      <span className="text-xs font-mono uppercase text-slate-400">Performance</span>
                      <span className="text-xl font-bold font-mono tracking-tight text-white tabular-nums">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
