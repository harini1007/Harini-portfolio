import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Radio, 
  Wrench, 
  CheckCircle2, 
  Search,
  Layers,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    programming: Code2,
    electronics: Cpu,
    embedded: Radio,
    tools: Wrench,
  };

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming', label: 'Programming' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'embedded', label: 'Embedded & IoT' },
    { id: 'tools', label: 'Tools & Software' },
  ];

  const filteredCategories = PORTFOLIO_DATA.skillCategories.filter((cat) => {
    if (selectedCategory === 'all') return true;
    return cat.id === selectedCategory;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              <span>Technical Repertoire</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-orange-400">Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Tooling
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Proficiencies across low-level electronic circuitry, embedded microcontrollers, firmware programming, and mathematical modeling tools.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            return (
              <div
                key={cat.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List - Clean unboxed text with subtle typographic separators */}
                  <div className="mt-6 space-y-4">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-white tracking-tight">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-blue-400">
                            {skill.level}
                          </span>
                        </div>
                        {skill.note && (
                          <div className="text-xs text-slate-400 leading-relaxed">
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{cat.items.length} Core Areas</span>
                  <span className="text-slate-400">Practiced in Labs & Projects</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
