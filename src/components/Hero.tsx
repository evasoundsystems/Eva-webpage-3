import React from 'react';
import { Phone, Mail, ShieldCheck, Sliders, ArrowRight } from 'lucide-react';
import { translations, Language } from '../data/translations';
import heroAudioConsoleImg from '../assets/images/hero_audio_console_1791939184456.jpg';

interface HeroProps {
  currentLang: Language;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onRequestQuote }) => {
  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80 audio-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker & Credential Line */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 mb-6">
          <span className="font-semibold text-sky-400 tracking-wide uppercase">
            {t.hero.kicker}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-300 font-medium">
            {t.hero.spanishSpoken}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>E.V.A Elevation Voice Audio</span>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Scripture Anchor from Business Card */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 py-1 px-3 rounded-md bg-slate-900/90 border border-slate-700/60 text-xs sm:text-sm text-slate-300 italic max-w-full">
              <span className="text-amber-400 font-bold not-italic">✝</span>
              <span>{t.hero.scripture}</span>
              <span className="text-slate-400 not-italic font-semibold">— {t.hero.scriptureRef}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {t.hero.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Quick Contact & Value Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <a
                href="tel:4145544388"
                className="inline-flex items-center gap-2 text-white hover:text-sky-300 transition-colors font-medium"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono-nums font-semibold tracking-wide">(414) 554-4388</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="mailto:eva.sound.systems@gmail.com"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">eva.sound.systems@gmail.com</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all transform active:scale-95 whitespace-nowrap"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:4145544388"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Free On-Site Estimates & Consultations</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>Recall-Safe Scene Protection</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
              <img
                src={heroAudioConsoleImg}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80';
                }}
                alt="Professional worship live mixing console with digital faders and parametric EQ curves"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-85" />
              
              {/* Overlay card for quick confidence */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/70">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sky-400 font-semibold font-mono-nums">
                      E.V.A Worship Systems
                    </p>
                    <p className="text-sm font-bold text-white">
                      Church & Live Audio Master Tuning
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded">
                      $50/wk Care Plan
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
                  <span>Re-EQ included every 3 months</span>
                  <span className="font-mono-nums text-slate-300">On-Call Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI/Proof Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-nums">
              {t.stats.yearsExp}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.stats.yearsExpLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono-nums">
              {t.stats.subscriptionPrice}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.stats.subscriptionLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono-nums">
              {t.stats.recallSafe}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.stats.recallSafeLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-nums">
              {t.stats.bilingual}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.stats.bilingualLabel}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
