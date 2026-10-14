import React from 'react';
import { Volume2, Speaker, ShoppingCart, Sliders, Users, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { translations, Language } from '../data/translations';
import proAvInstallationImg from '../assets/images/pro_av_installation_1791939184046.jpg';

interface ServicesSectionProps {
  currentLang: Language;
  onRequestQuote: (prefillService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang, onRequestQuote }) => {
  const t = translations[currentLang];

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0c101a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono-nums mb-2">
            01. Professional AV Engineering & Turnkey Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.services.subheading}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: Live Sound Mixing (col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {t.services.liveMixing.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {t.services.liveMixing.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {t.services.liveMixing.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Church Services · Corporate Galas · Conferences</span>
              <button
                type="button"
                onClick={() => onRequestQuote('Live Sound Mixing (Church, Corporate, Event)')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Book Live Mixing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Speaker & Monitor Installation with Real Visual Asset (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-colors">
            <div className="h-48 sm:h-56 relative overflow-hidden">
              <img
                src={proAvInstallationImg}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80';
                }}
                alt="Flown line array and sanctuary acoustic speaker installation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="w-9 h-9 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-300 flex items-center justify-center">
                  <Speaker className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t.services.speakerInstalls.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {t.services.speakerInstalls.desc}
                </p>
                <div className="space-y-2 mb-4">
                  {t.services.speakerInstalls.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRequestQuote('Speaker & Monitor Installation / Rigging')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center"
              >
                Schedule Installation Assessment
              </button>
            </div>
          </div>

          {/* Card 3: Pro AV Equipment Sales (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.services.gearSales.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                {t.services.gearSales.desc}
              </p>
              <div className="space-y-2 mb-5">
                {t.services.gearSales.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('gear-sales');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors text-center"
            >
              Browse Gear Catalog
            </button>
          </div>

          {/* Card 4: Recall-Safe AV Design (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.services.recallSafe.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                {t.services.recallSafe.desc}
              </p>
              <div className="space-y-2 mb-5">
                {t.services.recallSafe.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote('Recall-Safe AV Design & Mixer Preset Locking')}
              className="w-full py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors text-center"
            >
              Protect My Console Scenes
            </button>
          </div>

          {/* Card 5: Bilingual Volunteer Training (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.services.bilingualTraining.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                {t.services.bilingualTraining.desc}
              </p>
              <div className="space-y-2 mb-5">
                {t.services.bilingualTraining.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote('Bilingual Volunteer & Staff Audio Training')}
              className="w-full py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors text-center"
            >
              Book Team Training Workshop
            </button>
          </div>

          {/* Card 6: Couples Ministry & Special Ministry AV (col-span-12) */}
          <div className="lg:col-span-12 rounded-2xl bg-gradient-to-r from-slate-900 via-[#111827] to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {t.services.ministrySupport.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                  {t.services.ministrySupport.desc}
                </p>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
                  {t.services.ministrySupport.features.map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRequestQuote('Couples Ministry & Special Event Audio Support')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Request Retreat / Event Audio
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
