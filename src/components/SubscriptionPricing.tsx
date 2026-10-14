import React, { useState } from 'react';
import {
  Check,
  AlertCircle,
  Calculator,
  Zap,
  PhoneCall,
  Shield,
  Activity,
  HeartHandshake,
  CheckCircle2,
  DollarSign,
  Headphones,
  Sliders
} from 'lucide-react';
import { translations, Language } from '../data/translations';

interface SubscriptionPricingProps {
  currentLang: Language;
  onRequestQuote: (prefillService?: string) => void;
}

export const SubscriptionPricing: React.FC<SubscriptionPricingProps> = ({ currentLang, onRequestQuote }) => {
  const isEs = currentLang === 'es';
  const t = translations[currentLang];

  // Interactive Calculator State
  const [emergencyCallsPerYear, setEmergencyCallsPerYear] = useState<number>(3);
  const [quarterlyEqChecks, setQuarterlyEqChecks] = useState<number>(4);

  // Calculations based on $120/hr with 4-hr minimum ($480 per visit)
  const costPerOneOffVisit = 120 * 4; // $480 minimum
  const nonSubTotal = (emergencyCallsPerYear * costPerOneOffVisit) + (quarterlyEqChecks * costPerOneOffVisit);
  const subscriptionYearlyTotal = 50 * 52; // $2,600/year ($50/week)
  const savings = nonSubTotal - subscriptionYearlyTotal;

  return (
    <section id="subscriptions" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.subscriptions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.subscriptions.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            {t.subscriptions.subheading}
          </p>
        </div>

        {/* Pricing Comparison Grid */}
        <div id="pricing" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Card 1: $50/week Signature Subscription (Featured col-span-7) */}
          <div className="lg:col-span-7 relative rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1628] to-[#0b101c] border-2 border-sky-500/60 p-6 sm:p-9 shadow-xl shadow-sky-950/40 flex flex-col justify-between">
            
            {/* Top Badge & Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-sky-400 font-mono-nums mb-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Recomendado para Iglesias y Auditorios' : 'All-Inclusive Pro Audio Retainer'}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {t.subscriptions.planTitle}
                  </h3>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono-nums">
                      $50
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      / {isEs ? 'semana' : 'week'}
                    </span>
                  </div>
                  <div className="text-xs text-sky-400 font-mono-nums font-semibold mt-0.5">
                    $200 / {isEs ? 'mes (tarifa fija predecible)' : 'month (capped fixed rate)'}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {isEs
                  ? 'Tranquilidad técnica total para tu congregación y equipo de alabanza. Luis Martinez queda asignado como tu ingeniero de sonido de cabecera con atención prioritaria.'
                  : 'Total technical peace of mind for your congregation and leadership. Luis Martinez serves as your dedicated on-call sound engineer with priority weekend emergency response.'}
              </p>

              {/* Inclusions Checklist */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? 'Inclusiones Clave del Plan de $50/Semana:' : 'Guaranteed Plan Inclusions ($50/week):'}
                </div>

                {/* 1. On-call maintenance & emergency support */}
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">
                      {isEs ? 'Soporte Técnico de Emergencia en Guardia:' : 'On-Call Maintenance & Emergency Tech Support:'}
                    </strong>{' '}
                    <span>
                      {isEs
                        ? 'Prioridad inmediata en guardia para resolver fallas antes de los servicios dominicales o eventos.'
                        : 'Dedicated priority standby for critical troubleshooting and emergency calls before worship or events.'}
                    </span>
                  </div>
                </div>

                {/* 2. Re-EQing terms */}
                <div className="flex items-start gap-3 text-sm text-slate-200 bg-sky-950/40 p-3 rounded-xl border border-sky-800/50">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-amber-200 block sm:inline">
                      {isEs ? '1 Re-Ecualización Completa Cada 3 Meses Incluida:' : '1 Full Mixer Re-EQing Every 3 Months Included:'}
                    </strong>{' '}
                    <span className="text-slate-300 text-xs sm:text-sm">
                      {isEs
                        ? 'Afinación completa de consola, faders y ecualizador paramétrico cada trimestre. Además, incluye 1 re-EQ de seguimiento gratis en el año si lo necesitas fuera del intervalo de 3 meses.'
                        : 'Complete parametric EQ, fader balance, and gain-staging alignment every quarter. Plus 1 free follow-up EQ within the year if needed outside the 3-month cycle.'}
                    </span>
                  </div>
                </div>

                {/* 3. Recurring on-site diagnostic checkups */}
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">
                      {isEs ? 'Chequeos Diagnósticos Presenciales Recurrentes:' : 'Recurring On-Site Diagnostic Checkups:'}
                    </strong>{' '}
                    <span>
                      {isEs
                        ? 'Inspecciones periódicas en tu santuario para verificar salud de bocinas, antenas inalámbricas, preamps y monitores.'
                        : 'Scheduled in-person acoustic sweeps to ensure optimal room performance, transducer health, and wireless RF stability.'}
                    </span>
                  </div>
                </div>

                {/* 4. Remote Support & Scene backups */}
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">
                      {isEs ? 'Respaldo y Protección de Escenas Digitales:' : 'Digital Scene Protection & Remote Triage:'}
                    </strong>{' '}
                    <span>
                      {isEs
                        ? 'Verificación y resguardo seguro de ajustes de consola para que nunca se pierda la mezcla dominical.'
                        : 'Remote console diagnostics, scene restoration, and lock protection so presets are never erased.'}
                    </span>
                  </div>
                </div>

                {/* 5. VIP Gear & Install Perks */}
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white">
                      {isEs ? 'Descuentos Exclusivos en Equipos y Mano de Obra:' : 'VIP Equipment Discounts & Preferred Rates:'}
                    </strong>{' '}
                    <span>
                      {isEs
                        ? 'Precios de distribuidor en microfonía, consolas y cables, más descuentos en horas extras de instalación.'
                        : 'Dealer pricing on pro AV hardware and preferred pricing on major facility expansion projects.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestQuote('$50/week On-Call Tech Maintenance Plan')}
                className="w-full sm:flex-1 py-3.5 px-5 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md transition-all text-center"
              >
                {isEs ? 'Afiliarse al Plan de $50/Semana' : 'Enroll in $50/Wk Care Plan'}
              </button>
              <a
                href="tel:4145544388"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Luis: (414) 554-4388</span>
              </a>
            </div>
          </div>

          {/* Card 2: One-Off Standard Hourly (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 font-mono-nums">
                    {isEs ? 'Servicio Sin Suscripción' : 'Non-Subscription Callout'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {t.subscriptions.oneOffTitle}
                  </h3>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-200 font-mono-nums">
                      $120
                    </span>
                    <span className="text-xs text-slate-400">/ {isEs ? 'hora' : 'hour'}</span>
                  </div>
                  <div className="text-xs text-amber-400 font-mono-nums font-semibold mt-0.5">
                    {isEs ? 'Mínimo 4 horas ($480 mín por visita)' : 'Min. 4 hours ($480 min per visit)'}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {isEs
                  ? 'Para iglesias o salones que no cuentan con plan de retención y necesitan asistencia técnica de emergencia puntual.'
                  : 'For venues without an active retainer needing standalone emergency troubleshooting, repair, or single event engineering.'}
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Tarifa Estricta:' : 'Strict Minimum:'}</strong>{' '}
                    {isEs
                      ? '$120/hora con facturación mínima de 4 horas ($480 mínimo por cualquier visita presencial).'
                      : '$120/hour with a mandatory 4-hour minimum billing ($480 minimum per on-site visit).'}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Re-Ecualización Fuera de Plan:' : 'Re-EQ Outside of Plan:'}</strong>{' '}
                    {isEs
                      ? 'Cualquier re-ecualización de consola se factura a la tarifa estándar de $120/hr (mín. $480).'
                      : 'Any soundboard re-EQing is billed at the standard $120/hr rate ($480 minimum).'}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Sin Garantía de Prioridad:' : 'No Priority Standby:'}</strong>{' '}
                    {isEs
                      ? 'Sujeto a disponibilidad general; no garantiza respuesta inmediata en domingos o fines de semana.'
                      : 'Subject to schedule availability; no guaranteed emergency response on busy Sunday mornings.'}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isEs ? 'Sin Re-EQ de Seguimiento Gratis:' : 'No Free Follow-up EQs:'}</strong>{' '}
                    {isEs
                      ? 'Ajustes posteriores requieren una nueva llamada facturable a $120/hr.'
                      : 'Subsequent adjustments require a fresh billable service call.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => onRequestQuote('One-Off Hourly Service Call ($120/hr, 4-hr min = $480 min)')}
                className="w-full py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center"
              >
                {isEs ? 'Solicitar Visita Individual ($480 mín)' : 'Request Single Service Call ($480 min)'}
              </button>
            </div>
          </div>

        </div>

        {/* Clear Policy Footnote Banner */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-16 flex items-start gap-3.5">
          <Shield className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white uppercase tracking-wider text-xs block mb-1">
              {isEs ? 'Política Oficial de Re-EQ y Garantía de Servicio' : 'Official Re-EQ Terms & Policy Statement'}
            </span>
            <span className="leading-relaxed">
              {isEs
                ? 'El plan de suscripción incluye una (1) re-ecualización completa de consola o mixer cada tres (3) meses, o una (1) re-EQ gratis de seguimiento en el año si ocurre fuera del intervalo de 3 meses. Fuera de este acuerdo o para clientes no suscritos, toda re-ecualización o visita técnica se cobrará a tarifa regular de $120 por hora con un mínimo obligatorio de 4 horas ($480 mínimo).'
                : 'The subscription care plan includes one (1) full re-EQing of mixer or soundboard every three (3) months, or one (1) follow-up free EQ within the year if outside the 3-month interval. Outside of this agreement or for non-subscribers, service is charged at standard rates ($120/hour with a 4-hour minimum = $480 minimum).'}
            </span>
          </div>
        </div>

        {/* Dedicated Section: The Value Proposition of Consistent, Expert Support */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono-nums block mb-1">
              {isEs ? 'Por Qué Funciona el Soporte Continuo' : 'The Value Proposition of Consistent, Expert Support'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isEs
                ? 'Por Qué el Mantenimiento Preventivo Supera al Pánico de Emergencia'
                : 'Why Consistent Preventative Support Beats Sunday Morning Panic'}
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              {isEs
                ? 'El sonido de una iglesia no es un gasto opcional: es el vehículo por el cual la congregación escucha la Palabra y la alabanza.'
                : 'Sanctuary sound is not merely equipment; it is the channel through which your congregation receives the message and worships without distraction.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {isEs ? 'Cero Pánico Dominical' : 'Zero Sunday Morning Panic'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEs
                    ? 'Un fallo de audio en pleno culto no se puede borrar. Luis Martinez está disponible en guardia para resolver problemas antes de que la congregación entre por la puerta.'
                    : 'A public audio failure during worship or the sermon is irreversible. Having Luis on-call ensures issues are resolved before doors open, not frantically at 9:00 AM.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-sky-400">
                {isEs ? 'Respaldo dominical garantizado' : 'Guaranteed priority standby'}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-300 flex items-center justify-center mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {isEs ? 'Alineación Acústica Continua' : 'Acoustic Drift Correction'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEs
                    ? 'El clima, el aire acondicionado y los cambios en el grupo de alabanza modifican las frecuencias de la sala. El re-EQ trimestral mantiene las voces nítidas y libres de resonancias molestas.'
                    : 'Sanctuary acoustics shift with seasonal humidity, temperature, and changing vocalists. Quarterly re-EQings ensure speech remains articulate and feedback never returns.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-amber-300">
                {isEs ? '4 Re-EQings al año incluidos' : '4 Re-EQings/year included'}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {isEs ? 'Protección de Bocinas y Hardware' : 'Hardware Longevity Protection'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEs
                    ? 'Ganancias mal ajustadas y limitadores saturados queman bocinas y amplificadores ($1,500+ de reemplazo). Los chequeos recurrentes protegen tu inversión.'
                    : 'Bad gain-staging and clipping blow high-frequency drivers and subwoofers ($1,500+ in damages). Recurring diagnostic checkups protect your soundboard and speakers.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-emerald-400">
                {isEs ? 'Inspecciones periódicas de sala' : 'Preventative hardware sweeps'}
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {isEs ? 'Presupuesto Fijo y Ahorro Real' : 'Predictable Ministry Stewardship'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isEs
                    ? 'Una sola emergencia individual cuesta $480 mínimo ($120/hr x 4 hrs). Con $50/semana ($200/mes) tienes todo cubierto sin sorpresas financieras para la tesorería.'
                    : 'Single emergency visits cost $480 min. Just four tuning calls standalone cost $1,920. At $50/week, your budget is 100% predictable with unlimited peace of mind.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-indigo-300 font-mono-nums">
                {isEs ? 'Tarifa fija de $50/semana' : 'Fixed $50/week peace of mind'}
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Savings Calculator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1422] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider font-mono-nums mb-1">
                <Calculator className="w-4 h-4" />
                <span>{t.subscriptions.calculatorTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isEs ? '¿Cuánto Ahorra tu Iglesia con el Plan de Mantenimiento?' : 'Calculate Your Net Church Savings vs $120/hr Emergency Rates'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.subscriptions.calculatorDesc}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-400 uppercase font-mono-nums">
                {isEs ? 'Ahorro Anual Neto Estimado:' : 'Estimated Net Annual Savings:'}
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono-nums">
                {savings > 0 ? `+ $${savings.toLocaleString()} / yr` : 'Break-Even + Unlimited On-Call Peace of Mind'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            
            {/* Slider 1: Emergency calls */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>{isEs ? 'Llamadas de Emergencia / Fallas al Año' : 'Emergency Callouts Needed per Year'}</span>
                <span className="text-sky-400 font-mono-nums font-bold">{emergencyCallsPerYear} {isEs ? 'visitas' : 'visits'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={emergencyCallsPerYear}
                onChange={(e) => setEmergencyCallsPerYear(Number(e.target.value))}
                className="w-full accent-sky-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-400 block font-mono-nums">
                {isEs
                  ? `A $120/hr (mín. 4 hrs) = $${(emergencyCallsPerYear * costPerOneOffVisit).toLocaleString()} individual`
                  : `At $120/hr (4-hr min) = $${(emergencyCallsPerYear * costPerOneOffVisit).toLocaleString()} standalone`}
              </span>
            </div>

            {/* Slider 2: Re-EQings */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>{isEs ? 'Re-Ecualizaciones de Consola al Año' : 'Soundboard Re-EQings Needed'}</span>
                <span className="text-amber-300 font-mono-nums font-bold">{quarterlyEqChecks} {isEs ? 'al año' : 'per year'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value={quarterlyEqChecks}
                onChange={(e) => setQuarterlyEqChecks(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-400 block font-mono-nums">
                {isEs
                  ? `100% incluido en el plan de $50/sem (Ahorro de $${(quarterlyEqChecks * costPerOneOffVisit).toLocaleString()})`
                  : `100% covered in $50/wk plan (Saves $${(quarterlyEqChecks * costPerOneOffVisit).toLocaleString()} standalone)`}
              </span>
            </div>

            {/* Summary Block */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 font-mono-nums">
                  {isEs ? 'Costo Sin Plan ($120/hr, mín. 4 hrs):' : 'Cost Without Plan ($120/hr, 4-hr min):'}
                </div>
                <div className="text-lg font-bold text-red-400 font-mono-nums">
                  ${nonSubTotal.toLocaleString()} <span className="text-xs text-slate-400">/ yr</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono-nums">
                  {isEs ? 'Costo con Plan de $50/Semana:' : 'Cost With $50/Wk Care Plan:'}
                </div>
                <div className="text-lg font-bold text-sky-400 font-mono-nums">
                  ${subscriptionYearlyTotal.toLocaleString()} <span className="text-xs text-slate-400">/ yr (fixed)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRequestQuote('$50/week On-Call Tech Maintenance Plan')}
                className="mt-3 w-full py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors"
              >
                {isEs ? 'Bloquear Tarifa de $50/Semana' : 'Lock In $50/Wk Plan'}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
