import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Database,
  ExternalLink,
  Lock
} from 'lucide-react';
import { translations, Language } from '../data/translations';
import { submitQuoteRequest } from '../services/quotesApi';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialService?: string;
  onOpenPortal?: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialService,
  onOpenPortal,
}) => {
  const isEs = currentLang === 'es';
  const t = translations[currentLang];

  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || '$50/week On-Call Tech Maintenance Plan');
  const [soundboard, setSoundboard] = useState('');
  const [roomCapacity, setRoomCapacity] = useState('100-300');
  const [dateTimeline, setDateTimeline] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!orgName.trim()) errs.orgName = isEs ? 'El nombre de la iglesia u organización es requerido' : 'Church or organization name is required';
    if (!contactName.trim()) errs.contactName = isEs ? 'El nombre de contacto es requerido' : 'Contact name is required';
    if (!phone.trim() || phone.trim().length < 7) errs.phone = isEs ? 'Por favor ingrese un número telefónico válido' : 'Please provide a valid phone number';
    if (!email.trim() || !email.includes('@')) errs.email = isEs ? 'Por favor ingrese un correo válido' : 'Please provide a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const randomId = 'EVA-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(randomId);

    // Persist to backend and localStorage lead database
    await submitQuoteRequest({
      refNumber: randomId,
      orgName: orgName.trim(),
      contactName: contactName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      soundboard: soundboard.trim() || undefined,
      roomCapacity,
      dateTimeline: dateTimeline.trim() || undefined,
      notes: notes.trim() || undefined,
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOrgName('');
    setContactName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  const buildSummaryMessage = () => {
    return encodeURIComponent(
      `Hello Luis Martinez (E.V.A Worship Engineer)!\n\nI just submitted a quote request on your website:\n- Ref ID: ${refNumber}\n- Church/Org: ${orgName}\n- Contact: ${contactName}\n- Phone: ${phone}\n- Email: ${email}\n- Service Needed: ${service}\n- Soundboard Model: ${soundboard || 'Not specified'}\n- Room Capacity: ${roomCapacity}\n- Preferred Date/Timeline: ${dateTimeline || 'ASAP'}\n- Audio Issues / Notes: ${notes || 'None'}\n\nPlease review and reach out to me regarding pricing and scheduling.`
    );
  };

  const mailtoUrl = `mailto:eva.sound.systems@gmail.com?subject=${encodeURIComponent(
    `[New Lead ${refNumber}] Quote Request from ${orgName} (${contactName})`
  )}&body=${buildSummaryMessage()}`;

  const smsUrl = `sms:4145544388?&body=${buildSummaryMessage()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto overflow-x-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0e1422] border border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-8 my-auto sm:my-8 max-h-[92vh] overflow-y-auto overflow-x-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono-nums">
                Direct to Luis Martinez · 414-554-4388 · eva.sound.systems@gmail.com
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {t.quoteModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.quoteModal.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Church / Org Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.quoteModal.orgLabel} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder={t.quoteModal.orgPlaceholder}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                    errors.orgName ? 'border-red-500' : 'border-slate-700'
                  }`}
                />
                {errors.orgName && <p className="text-[11px] text-red-400 mt-1">{errors.orgName}</p>}
              </div>

              {/* Contact Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.nameLabel} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Pastor David or John Smith"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                      errors.contactName ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.contactName && <p className="text-[11px] text-red-400 mt-1">{errors.contactName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.phoneLabel} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(414) 555-0199"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                      errors.phone ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.quoteModal.emailLabel} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@church.org"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              {/* Service Requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.serviceLabel}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  >
                    <option value="$50/week On-Call Tech Maintenance Plan">
                      $50/week On-Call Maintenance Plan (Best Value)
                    </option>
                    <option value="Live Sound Mixing (Church, Corporate, Event)">
                      Live Sound Mixing (Sunday Service or Event)
                    </option>
                    <option value="Speaker & Monitor Installation / Rigging">
                      Speaker & Monitor Installation / Rigging
                    </option>
                    <option value="Pro AV Equipment Purchase">
                      Pro AV Equipment Purchase (Sweetwater/GC Price Match)
                    </option>
                    <option value="In-Ear Monitor (IEM) Systems & Personal Mixers">
                      In-Ear Monitor (IEM) Systems & Personal Mixers
                    </option>
                    <option value="Stage Lighting, Smoke & Haze Machines">
                      Stage Lighting, Smoke & Haze Machines
                    </option>
                    <option value="Microphone & IEM Antenna Combiners / RF Distro">
                      Microphone & IEM Antenna Combiners / RF Distro
                    </option>
                    <option value="Behringer X32 / WING / Midas Consoles">
                      Behringer X32 / WING / Midas Consoles
                    </option>
                    <option value="Recall-Safe AV Design & Mixer Preset Locking">
                      Recall-Safe Mixer Tuning & Scene Locking
                    </option>
                    <option value="Bilingual Volunteer Audio Training Workshop">
                      Bilingual Volunteer Audio Training
                    </option>
                    <option value="Couples Ministry & Special Event Audio Support">
                      Couples Ministry / Special Event Audio
                    </option>
                    <option value="One-Off Hourly Service Call ($120/hr, 4-hr min)">
                      One-Off Emergency Call ($120/hr, 4-hr min = $480 min)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.consoleLabel}
                  </label>
                  <input
                    type="text"
                    value={soundboard}
                    onChange={(e) => setSoundboard(e.target.value)}
                    placeholder="e.g. Behringer X32, Midas M32, WING, SQ, Analog"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
              </div>

              {/* Room Capacity & Date Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.roomSizeLabel}
                  </label>
                  <select
                    value={roomCapacity}
                    onChange={(e) => setRoomCapacity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                  >
                    <option value="Under 100 seats">Under 100 seats (Intimate / Chapel)</option>
                    <option value="100-300 seats">100 - 300 seats (Mid-size Sanctuary)</option>
                    <option value="300-800 seats">300 - 800 seats (Large Auditorium)</option>
                    <option value="800+ seats">800+ seats (Mega Church / Arena)</option>
                    <option value="Outdoor / Mobile Venue">Outdoor / Mobile Retreat Venue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    {t.quoteModal.urgencyLabel}
                  </label>
                  <input
                    type="text"
                    value={dateTimeline}
                    onChange={(e) => setDateTimeline(e.target.value)}
                    placeholder="e.g. Next Sunday, within 2 weeks, or Specific Date"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.quoteModal.notesLabel}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your current issues (e.g., feedback on pastor's mic, need new speakers installed, training for volunteers, gear model link)..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? (isEs ? 'Enviando y Registrando...' : 'Submitting & Saving Request...')
                      : t.quoteModal.submitBtn}
                  </span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State with Verified Recording */
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono-nums mb-2">
                <Database className="w-3.5 h-3.5" />
                <span>SAVED & LOGGED TO LUIS'S LEAD SYSTEM · REF #{refNumber}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {t.quoteModal.successTitle}
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                Your request details are safely stored in Luis Martinez's database and customer tracker. To ensure instant delivery, click below to send directly to his email or mobile phone:
              </p>
            </div>

            {/* Direct Communication & Dispatch Options */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-3 max-w-lg mx-auto">
              <div className="text-xs font-semibold uppercase text-slate-400 font-mono-nums flex items-center justify-between">
                <span>Direct Dispatch Channels:</span>
                <span className="text-emerald-400">Ready to Send</span>
              </div>

              {/* Send Email Directly */}
              <a
                href={mailtoUrl}
                className="flex items-center justify-between p-3.5 rounded-lg bg-gradient-to-r from-sky-950/60 to-slate-800 border border-sky-800/60 hover:border-sky-600 text-xs text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Send Direct Email to Luis</span>
                    <span className="text-[11px] text-slate-400">To: eva.sound.systems@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Send Text / SMS */}
              <a
                href={smsUrl}
                className="flex items-center justify-between p-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Send Text / SMS with Specs</span>
                    <span className="text-[11px] text-slate-400">Direct to Luis's cell: (414) 554-4388</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Call */}
              <a
                href="tel:4145544388"
                className="flex items-center justify-between p-3.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Call Luis Immediately</span>
                    <span className="text-[11px] text-slate-400">(414) 554-4388 · Hablamos Español</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Bottom Controls + Portal Link for Luis */}
            <div className="pt-2 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                Done / Close Window
              </button>

              {onOpenPortal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPortal();
                  }}
                  className="text-[11px] text-slate-500 hover:text-sky-400 flex items-center gap-1 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Are you Luis? Open Sound Engineer Portal & Google Sheets Tracker</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
