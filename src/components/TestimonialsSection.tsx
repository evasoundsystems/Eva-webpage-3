import React, { useState } from 'react';
import {
  Quote,
  CheckCircle2,
  Building2,
  Church,
  HeartHandshake,
  ArrowRight,
  Sliders,
  ShieldCheck,
  Star
} from 'lucide-react';
import { testimonialsList, Testimonial } from '../data/testimonialsData';
import { translations, Language } from '../data/translations';

interface TestimonialsSectionProps {
  currentLang: Language;
  onRequestQuote: (prefillService?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  currentLang,
  onRequestQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isEs = currentLang === 'es';
  const t = translations[currentLang];

  const filterOptions = [
    { id: 'all', label: t.testimonials.filterAll },
    { id: 'church', label: t.testimonials.filterChurch },
    { id: 'corporate', label: t.testimonials.filterCorporate },
    { id: 'ministry', label: t.testimonials.filterMinistry },
  ];

  const filteredList = activeCategory === 'all'
    ? testimonialsList
    : testimonialsList.filter((item) => item.category === activeCategory);

  return (
    <section id="testimonials" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0a0e17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {t.testimonials.heading}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              {t.testimonials.subheading}
            </p>
          </div>

          {/* Aggregate Trust Marker */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0 text-left sm:text-right">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-mono-nums">
              {isEs ? 'Satisfacción Comprobada' : 'Proven Track Record'}
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono-nums mt-0.5">
              100% {isEs ? 'Re-EQ y Calibración Garantizada' : 'Recall-Safe Guaranteed'}
            </div>
            <div className="text-xs text-emerald-400 font-medium flex items-center sm:justify-end gap-1 mt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isEs ? 'Respaldo dominical de Luis Martinez' : 'Direct Sound Engineer Accountability'}</span>
            </div>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none min-w-0 max-w-full">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveCategory(opt.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeCategory === opt.id
                  ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {opt.id === 'church' && <Church className="w-3.5 h-3.5" />}
              {opt.id === 'corporate' && <Building2 className="w-3.5 h-3.5" />}
              {opt.id === 'ministry' && <HeartHandshake className="w-3.5 h-3.5" />}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-14">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1422] border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                {/* Top Metatags: Category, Setup, Verified */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="uppercase tracking-wider font-semibold text-sky-400 font-mono-nums">
                    {item.categoryLabel[currentLang]}
                  </span>
                  <div className="inline-flex items-center gap-1 text-emerald-400 font-semibold font-mono-nums">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t.testimonials.verifiedBadge}</span>
                  </div>
                </div>

                {/* Quantitative Metric Highlight Banner */}
                <div className="mb-4 px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-800/40 text-xs font-bold text-sky-300 font-mono-nums flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item.highlightMetric[currentLang]}</span>
                </div>

                {/* Before vs After Context Hook */}
                <div className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                  <strong className="text-slate-300">{isEs ? 'Reto Inicial:' : 'Challenge:'}</strong>{' '}
                  <span>{item.beforeSituation[currentLang]}</span>
                </div>

                {/* Main Quote */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-slate-700/60 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{item.quote[currentLang]}"
                  </p>
                </div>
              </div>

              {/* Author & Attribution Footer */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-sky-400 font-medium">
                      {item.role} · {item.organization}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Gear & Service Detail */}
                <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono-nums flex flex-col gap-0.5">
                  <span className="text-slate-300 font-medium">{item.serviceProvided[currentLang]}</span>
                  <span className="truncate text-slate-500">{item.gearContext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#101726] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {t.testimonials.ctaPrompt}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {isEs
                ? 'Comunícate directamente con Luis Martinez al 414-554-4388 para una estimación presencial sin costo.'
                : 'Speak directly with Luis Martinez at (414) 554-4388 for a free on-site consultation and sound check.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onRequestQuote('Live Sound Mixing / Re-EQing Consultation')}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{t.testimonials.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:4145544388"
              className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center whitespace-nowrap"
            >
              (414) 554-4388
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
