import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Eye,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewOriginalImage, setViewOriginalImage] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Harini M
TITLE:Electronics & Communication Engineering Student
TEL;TYPE=CELL:+917538886086
EMAIL;TYPE=INTERNET:harinins2715@gmail.com
ADR;TYPE=HOME:;;Coimbatore;Tamil Nadu;;India
NOTE:ECE 2nd Year, VSB Engineering College. Specializing in Embedded Systems & IoT.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Harini_M_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="no-print px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Harini M — Official Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">Electronics & Communication Engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewOriginalImage(!viewOriginalImage)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>{viewOriginalImage ? 'View Digital Format' : 'View Original Sheet'}</span>
            </button>

            <button
              onClick={handleDownloadVCard}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Save Contact to Phone"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Save Contact (.vcf)</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#090e1a]">
          
          {viewOriginalImage ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-xs text-slate-400 font-mono">
                Original Uploaded CV Document (Reference Scan)
              </div>
              <img
                src="/Harini CV.png"
                alt="Harini M Original CV Document"
                className="max-w-full rounded-xl shadow-2xl border border-slate-700 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            /* Digital Formatted CV Sheet */
            <div className="bg-[#0c1222] text-slate-200 border border-slate-800 rounded-xl p-8 sm:p-12 shadow-inner space-y-8 font-sans">
              
              {/* Header */}
              <div className="text-center pb-6 border-b border-slate-800">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider text-white">
                  HARINI M
                </h1>
                <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mt-1">
                  Electronics & Communication Engineering Student
                </p>

                {/* Contact strip */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>75388 86086</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">|</span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>harinins2715@gmail.com</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">|</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>Coimbatore, Tamil Nadu</span>
                  </span>
                </div>
              </div>

              {/* About Me */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 pb-1 border-b border-slate-800">
                  About Me
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.about}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 pb-1 border-b border-slate-800">
                  Education
                </h2>
                <div className="space-y-4 text-xs sm:text-sm">
                  {PORTFOLIO_DATA.education.map((edu) => (
                    <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pb-3 border-b border-slate-850">
                      <div>
                        <div className="font-bold text-white">{edu.degree}</div>
                        <div className="text-slate-300">{edu.institution}</div>
                        <div className="text-[11px] text-slate-400">{edu.status}</div>
                      </div>
                      <div className="sm:text-right font-mono font-semibold text-orange-400">
                        <div>{edu.period}</div>
                        <div className="text-white">{edu.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience / Internship */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 pb-1 border-b border-slate-800">
                  Experience / Internship
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <div className="font-bold text-white">{PORTFOLIO_DATA.experience[0].role}</div>
                      <div className="text-blue-400 font-semibold">{PORTFOLIO_DATA.experience[0].organization}, Coimbatore</div>
                    </div>
                    <div className="sm:text-right font-mono text-slate-400 text-xs">
                      {PORTFOLIO_DATA.experience[0].period} (Completed)
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {PORTFOLIO_DATA.experience[0].description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 pb-1 border-b border-slate-800">
                  Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  {PORTFOLIO_DATA.skillCategories.map((cat) => (
                    <div key={cat.id} className="space-y-1.5">
                      <div className="font-bold text-white text-xs uppercase tracking-wider text-slate-300">
                        {cat.category}
                      </div>
                      <ul className="space-y-1 text-slate-400">
                        {cat.items.map((it) => (
                          <li key={it.name}>• {it.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400 pb-1 border-b border-slate-800">
                  Areas of Interest
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
                  {PORTFOLIO_DATA.areasOfInterest.map((ar, i) => (
                    <span key={ar.name}>
                      {ar.name}
                      {i < PORTFOLIO_DATA.areasOfInterest.length - 1 && <span className="text-slate-600 ml-4">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 pb-1 border-b border-slate-800">
                  Core Strengths
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
                  {PORTFOLIO_DATA.coreStrengths.map((st) => (
                    <div key={st.title} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{st.title}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
