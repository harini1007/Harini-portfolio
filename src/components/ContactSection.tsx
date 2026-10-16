import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Clock, 
  Download,
  FileText,
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
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
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-800/80 bg-[#060913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wider uppercase mb-2">
            <span>Direct Channels</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-blue-400">Collaborations & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with Harini
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Interested in discussing embedded systems projects, industrial internship opportunities, 
            or engineering collaborations? Reach out directly through the verified contact channels below.
          </p>
        </div>

        {/* Direct Contact Cards Grid (No message form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-orange-400 bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Direct Mobile & WhatsApp
              </div>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="text-xl font-bold text-white hover:text-blue-400 transition-colors font-mono tracking-tight block"
              >
                +91 {PORTFOLIO_DATA.personal.phone}
              </a>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Available for discussions on internships, lab demonstrations, and engineering teamwork.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-600/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-2 text-slate-400 hover:text-blue-400 bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Official Email
              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors font-mono tracking-tight block truncate"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Send inquiries, formal invitations, or project documentations directly to this address.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Portfolio%20Inquiry%20for%20Harini%20M`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Location & Institution Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                  Tamil Nadu
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Location & Campus
              </div>
              <div className="text-lg font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.location}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium">
                {PORTFOLIO_DATA.personal.college}
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Open to in-person roles in Coimbatore as well as remote opportunities across India.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Save Contact to Phone (.vcf)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quick Summary Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">
                Actively Open for Emerging Tech Opportunities
              </div>
              <div className="text-xs text-slate-400">
                Embedded Systems · IoT Microcontrollers · Robotics · Digital Electronics
              </div>
            </div>
          </div>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>View Full Printable Resume</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
