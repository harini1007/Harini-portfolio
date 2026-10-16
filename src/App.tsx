/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InteractiveLab } from './components/InteractiveLab';
import { SkillsSection } from './components/SkillsSection';
import { AreasOfInterest } from './components/AreasOfInterest';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-orange-500/30 selection:text-orange-200">
      {/* Top Bar Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />
        <AboutSection />
        <ExperienceSection />
        <InteractiveLab />
        <SkillsSection />
        <AreasOfInterest />
        <EducationSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Formatted CV & Resume Viewer Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
