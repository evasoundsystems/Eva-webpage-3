/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SubscriptionPricing } from './components/SubscriptionPricing';
import { GearSalesSection } from './components/GearSalesSection';
import { VolunteerTrainingSection } from './components/VolunteerTrainingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AudioHealthCheckTool } from './components/AudioHealthCheckTool';
import { QuoteModal } from './components/QuoteModal';
import { SoundEngineerPortal } from './components/SoundEngineerPortal';
import { Footer } from './components/Footer';
import { Language } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* 3-Zone Compliant Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onRequestQuote={() => handleOpenQuote()}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* 01. Services & Bento Grid */}
        <ServicesSection
          currentLang={currentLang}
          onRequestQuote={handleOpenQuote}
        />

        {/* Highlight: $50/week Subscriptions, Terms & Savings Calculator */}
        <SubscriptionPricing
          currentLang={currentLang}
          onRequestQuote={handleOpenQuote}
        />

        {/* 02. Pro AV Equipment Sales Catalog */}
        <GearSalesSection
          currentLang={currentLang}
          onSelectGearForQuote={(gear) => handleOpenQuote(`Pro AV Gear Inquiry: ${gear}`)}
        />

        {/* 03. Bilingual Volunteer & Tech Support Training */}
        <VolunteerTrainingSection
          currentLang={currentLang}
          onRequestQuote={handleOpenQuote}
        />

        {/* 04. Client Reviews & Social Proof */}
        <TestimonialsSection
          currentLang={currentLang}
          onRequestQuote={handleOpenQuote}
        />

        {/* 05. Interactive Sanctuary Audio Health Check Assessment */}
        <AudioHealthCheckTool
          currentLang={currentLang}
          onBookFix={(recommendation) => handleOpenQuote(recommendation)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onRequestQuote={() => handleOpenQuote()}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Interactive Quote & Service Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        currentLang={currentLang}
        initialService={selectedService}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Sound Engineer Portal & Google Sheets Lead Tracker */}
      <SoundEngineerPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
