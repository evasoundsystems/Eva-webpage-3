import React from 'react';
import { Users, GraduationCap, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { translations, Language } from '../data/translations';
import soundEngineerTuningImg from '../assets/images/sound_engineer_tuning_1791939184827.jpg';

interface VolunteerTrainingSectionProps {
  currentLang: Language;
  onRequestQuote: (service?: string) => void;
}

export const VolunteerTrainingSection: React.FC<VolunteerTrainingSectionProps> = ({
  currentLang,
  onRequestQuote,
}) => {
  const isEs = currentLang === 'es';

  return (
    <section id="training" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0c101a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image of Luis tuning & training */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={soundEngineerTuningImg}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80';
                }}
                alt="Luis Martinez sound engineer conducting acoustic diagnostic check and mixer training at church sound booth"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-sky-400 font-bold mb-1 font-mono-nums">
                  <GraduationCap className="w-4 h-4" />
                  <span>{isEs ? 'Capacitación en Vivo' : 'Hands-on Ministry Training'}</span>
                </div>
                <p className="text-slate-300">
                  {isEs
                    ? 'Entrenando equipos de alabanza y voluntarios con paciencia y excelencia técnica en español e inglés.'
                    : 'Training church worship volunteers with patience and practical engineering rigor in English and Spanish.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Training Curriculum & Value */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono-nums">
              03. Worship Audio Staff & Volunteer Coaching
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {isEs
                ? 'Capacitación Bilingüe para Voluntarios de Audio'
                : 'Turn Volunteers Into Confident Sound Engineers'}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {isEs
                ? 'El 90% de los problemas de sonido en iglesias ocurren porque los voluntarios temen mover la consola o no comprenden la estructura de ganancia y ecualización. Luis Martinez ofrece talleres presenciales y acompañamiento durante ensayos y servicios.'
                : 'Most sanctuary audio frustrations happen because well-meaning volunteers never received structured sound coaching. Luis Martinez works side-by-side with your media team during rehearsals and Sunday services to build lasting confidence.'}
            </p>

            {/* Curriculum Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isEs ? 'Estructura de Ganancia y Preamps' : 'Proper Gain Staging'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isEs
                    ? 'Cómo fijar niveles limpios sin saturación ni ruido de fondo.'
                    : 'Dialing pristine preamps without clipping, hiss, or distortion.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{isEs ? 'Ecualización y Eliminación de Feedback' : 'EQ & Feedback Elimination'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isEs
                    ? 'Identificación auditiva de frecuencias para limpiar voces y guitarras.'
                    : 'Ear training to carve clarity and kill screeching before it starts.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{isEs ? 'Gestión de Escenas Digitales' : 'Recall-Safe Digital Scenes'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isEs
                    ? 'Cómo guardar, proteger y restaurar mezclas en Behringer X32, Midas y Allen & Heath.'
                    : 'Locking safe presets so guest bands or kids programs never erase Sunday settings.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{isEs ? 'Materiales y Guías Bilingües' : 'Bilingual Reference Guides'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isEs
                    ? 'Hojas de referencia plastificadas junto a la consola en español e inglés.'
                    : 'Laminated, step-by-step console cheat sheets for quick Sunday recall.'}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('Bilingual Volunteer Audio Training Workshop')}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 rounded-lg shadow-sm hover:from-sky-300 hover:to-amber-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>{isEs ? 'Agendar Taller de Capacitación' : 'Schedule Training Workshop'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:4145544388"
                className="w-full sm:w-auto text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 py-2 px-3 border border-slate-800 rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                <span>{isEs ? 'Preguntar a Luis por fechas: 414-554-4388' : 'Ask Luis about dates: 414-554-4388'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
