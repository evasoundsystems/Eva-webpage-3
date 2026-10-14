import { Volume2, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { translations, Language } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onRequestQuote: () => void;
  onOpenPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onRequestQuote, onOpenPortal }) => {
  const isEs = currentLang === 'es';
  const t = translations[currentLang];

  return (
    <footer className="bg-[#080c14] border-t border-slate-800 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand info (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight block">
                  E.V.A Worship Engineer
                </span>
                <span className="text-[11px] text-slate-400 font-mono-nums uppercase tracking-widest">
                  Elevation Voice Audio · Luis Martinez
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {isEs
                ? 'Ingeniería de audio profesional para iglesias, conferencias y eventos en vivo. Instalaciones de sonido, afinación acústica y soporte de emergencia.'
                : 'Turnkey live sound engineering, church sanctuary installations, pro audio sales, and predictable $50/week on-call maintenance support.'}
            </p>

            {/* Scripture quote from card */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs italic text-slate-300">
              <span>“Let everything that has breath praise the Lord.”</span>
              <span className="block not-italic font-semibold text-amber-300 mt-1 font-mono-nums">
                — Psalm 150:6
              </span>
            </div>
          </div>

          {/* Direct Contact (col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-nums">
              {isEs ? 'Contacto Directo con Luis' : 'Direct Contact with Luis'}
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href="tel:4145544388"
                className="flex items-center gap-2 text-white hover:text-sky-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono-nums font-semibold">(414) 554-4388</span>
                <span className="text-[11px] text-slate-400">· Call or Text</span>
              </a>

              <a
                href="mailto:eva.sound.systems@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>eva.sound.systems@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-Site Service & Installations · Hablamos Español</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 rounded-lg hover:from-sky-300 hover:to-amber-200 transition-colors"
              >
                {t.nav.requestQuote}
              </button>
            </div>
          </div>

          {/* Quick Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-2 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-nums mb-3">
              {isEs ? 'Navegación Rápida' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#subscriptions" className="hover:text-white transition-colors">
                  {t.nav.subscriptions} ($50/wk Care Plan)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#gear-sales" className="hover:text-white transition-colors">
                  {t.nav.gearSales}
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  {t.nav.training}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="hover:text-white transition-colors">
                  {t.nav.diagnostic}
                </a>
              </li>
              {onOpenPortal && (
                <li className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenPortal}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium transition-colors"
                  >
                    <Lock className="w-3 h-3 text-amber-400" />
                    <span>Sound Engineer Portal (Lead Tracker)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} E.V.A Elevation Voice Audio · Luis Martinez. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Hablamos Español</span>
            <span aria-hidden="true">·</span>
            <span>Church & Corporate Audio Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
