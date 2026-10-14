import React, { useState } from 'react';
import { Activity, Check, RefreshCw, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Language } from '../data/translations';

interface AudioHealthCheckToolProps {
  currentLang: Language;
  onBookFix: (summary: string) => void;
}

export const AudioHealthCheckTool: React.FC<AudioHealthCheckToolProps> = ({ currentLang, onBookFix }) => {
  const isEs = currentLang === 'es';

  const [issue, setIssue] = useState<string>('feedback');
  const [boardType, setBoardType] = useState<string>('x32');
  const [lastTuned, setLastTuned] = useState<string>('never');
  const [hasReport, setHasReport] = useState<boolean>(false);

  const handleGenerate = () => {
    setHasReport(true);
  };

  const getRecommendations = () => {
    let issueLabel = 'Feedback & Ringing';
    let fixText = 'Parametric notch filtering and mic polar pattern realignment.';
    if (issue === 'muddy') {
      issueLabel = isEs ? 'Voces y sermón ininteligible' : 'Muddy vocals & speech unintelligibility';
      fixText = isEs
        ? 'Alineación temporal de sala y ecualización sustractiva en frecuencias 250Hz-500Hz.'
        : 'Subtractive EQ carve in 250Hz-500Hz mud zones and speaker delay-time compensation.';
    } else if (issue === 'stage_volume') {
      issueLabel = isEs ? 'Volumen en tarima excesivo' : 'Stage volume overpowering sanctuary';
      fixText = isEs
        ? 'Transición a monitores In-Ear (IEM) y reubicación de monitores de cuña.'
        : 'In-Ear Monitor (IEM) migration plan and directional drum acoustic shielding.';
    } else if (issue === 'lost_presets') {
      issueLabel = isEs ? 'Pérdida frecuente de ajustes del mixer' : 'Volunteers overwriting console mixes';
      fixText = isEs
        ? 'Diseño Recall-Safe: Bloqueo de permisos de administración y escenas maestras.'
        : 'Recall-Safe protocol: Admin permission locks and golden Sunday master scene backups.';
    } else if (issue === 'feedback') {
      issueLabel = isEs ? 'Retroalimentación y chillidos agudos' : 'Microphone feedback & high-frequency squeals';
      fixText = isEs
        ? 'Alineación de ganancia, ecualización quirúrgica de sala y corrección de monitores.'
        : 'Rigorous gain-staging, surgical 31-band room tuning, and stage monitor phase alignment.';
    }

    return {
      issueLabel,
      fixText,
      serviceRecommendation: `${issueLabel} Fix + On-Site Acoustic Diagnostic Checkup`,
    };
  };

  const report = getRecommendations();

  return (
    <section id="diagnostic" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>{isEs ? 'Evaluación Acústica Interactiva' : 'Sanctuary Audio Health Check'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isEs
              ? 'Diagnóstico Rápido de tu Sistema de Sonido'
              : 'Interactive Soundboard & Acoustic Diagnostic'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {isEs
              ? 'Selecciona los síntomas de tu sala para recibir una recomendación técnica directa de Luis Martinez.'
              : 'Pinpoint your audio bottlenecks in 30 seconds and see the recommended fix from Luis Martinez.'}
          </p>
        </div>

        {/* Wizard Form */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Step 1: Frustration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. {isEs ? 'Problema Principal' : 'Primary Audio Issue'}
              </label>
              <div className="space-y-2">
                {[
                  { id: 'feedback', label: isEs ? 'Chillidos / Feedback frecuente' : 'Feedback / Squealing mics' },
                  { id: 'muddy', label: isEs ? 'Voz del pastor ininteligible' : 'Speech is muddy / unclear' },
                  { id: 'stage_volume', label: isEs ? 'Tarima demasiado ruidosa' : 'Stage volume overpowering room' },
                  { id: 'lost_presets', label: isEs ? 'Voluntarios pierden la mezcla' : 'Mixer presets get erased' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setIssue(item.id);
                      setHasReport(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-colors ${
                      issue === item.id
                        ? 'bg-sky-500/15 border-sky-400 text-white font-semibold'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Console Model */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. {isEs ? 'Consola de Audio' : 'Soundboard Model'}
              </label>
              <div className="space-y-2">
                {[
                  { id: 'x32', label: 'Behringer X32 / Midas M32' },
                  { id: 'ah', label: 'Allen & Heath (SQ, Qu, dLive)' },
                  { id: 'yamaha', label: 'Yamaha / PreSonus / Soundcraft' },
                  { id: 'analog', label: isEs ? 'Consola Análoga Tradicional' : 'Traditional Analog Board' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setBoardType(item.id);
                      setHasReport(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-colors ${
                      boardType === item.id
                        ? 'bg-sky-500/15 border-sky-400 text-white font-semibold'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Last Tuned */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. {isEs ? 'Última Afinación / EQ' : 'Last Professional Tuning'}
              </label>
              <div className="space-y-2">
                {[
                  { id: 'never', label: isEs ? 'Nunca o hace más de 2 años' : 'Never or >2 years ago' },
                  { id: 'year', label: isEs ? 'En el último año' : 'Within the past year' },
                  { id: 'emergency_only', label: isEs ? 'Solo cuando algo falla' : 'Only when equipment fails' },
                  { id: 'new_build', label: isEs ? 'Nueva instalación / remodelación' : 'New venue / sanctuary upgrade' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setLastTuned(item.id);
                      setHasReport(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-colors ${
                      lastTuned === item.id
                        ? 'bg-sky-500/15 border-sky-400 text-white font-semibold'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Action to calculate */}
          {!hasReport && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleGenerate}
                className="px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md transition-all"
              >
                {isEs ? 'Analizar Diagnóstico y Solución' : 'Generate Diagnostic Solution'}
              </button>
            </div>
          )}

          {/* Report Display */}
          {hasReport && (
            <div className="pt-6 border-t border-slate-800 space-y-5 animate-fadeIn">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono-nums">
                      {isEs ? 'Resultado del Análisis Acústico' : 'Diagnostic Assessment Result'}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      {report.issueLabel}
                    </h4>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isEs ? 'Solución 100% Corregible' : 'Fully Fixable On-Site'}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <p>
                    <strong className="text-white">{isEs ? 'Diagnóstico Técnico:' : 'Engineering Diagnosis:'}</strong>{' '}
                    {report.fixText}
                  </p>
                  <p>
                    <strong className="text-white">{isEs ? 'Recomendación Óptima:' : 'Recommended Path:'}</strong>{' '}
                    {isEs
                      ? 'Una Re-Ecualización completa del sistema y afiliarse al plan de $50/semana para mantenimiento continuo, chequeos periódicos y soporte de guardia en servicios dominicales.'
                      : 'Schedule a full Soundboard Re-EQing & room alignment, then lock in the $50/week maintenance plan for ongoing quarterly checkups and priority Sunday morning emergency tech support.'}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onBookFix(report.serviceRecommendation)}
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 rounded-lg shadow-sm hover:from-sky-300 hover:to-amber-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isEs ? 'Solicitar Visita para Esta Corrección' : 'Book Diagnostic Checkup with Luis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setHasReport(false)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Reajustar parámetros' : 'Re-adjust parameters'}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
