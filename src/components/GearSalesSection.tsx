import React, { useState } from 'react';
import {
  ShoppingBag,
  Check,
  ShieldCheck,
  Tag,
  ArrowRight,
  Sliders,
  Sparkles,
  Zap,
  Flame,
  Search,
  ExternalLink
} from 'lucide-react';
import { proGearList, ProGearItem } from '../data/gearCatalog';
import { translations, Language } from '../data/translations';

interface GearSalesSectionProps {
  currentLang: Language;
  onSelectGearForQuote: (gearName: string) => void;
}

export const GearSalesSection: React.FC<GearSalesSectionProps> = ({
  currentLang,
  onSelectGearForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [skuInput, setSkuInput] = useState<string>('');
  const isEs = currentLang === 'es';
  const t = translations[currentLang];

  const categories = [
    { id: 'all', label: isEs ? 'Todo el Catálogo' : 'All Pro Gear' },
    { id: 'consoles', label: isEs ? 'Consolas (X32, WING, M32)' : 'Consoles (X32, WING, M32)' },
    { id: 'iem', label: isEs ? 'Monitores In-Ear (IEM)' : 'In-Ear Monitors (IEM)' },
    { id: 'combiners', label: isEs ? 'Combinadores RF y Antenas' : 'RF Combiners & Antenna Distro' },
    { id: 'lighting-haze', label: isEs ? 'Luces, Humo y Haze' : 'Lighting, Smoke & Haze' },
    { id: 'wireless', label: isEs ? 'Micrófonos Inalámbricos' : 'Wireless Microphones' },
    { id: 'speakers', label: isEs ? 'Line Arrays y Altavoces' : 'Line Arrays & Speakers' },
    { id: 'accessories', label: isEs ? 'Cajas y Snakes Digitales' : 'Stage Boxes & Snakes' },
  ];

  const filteredGear = proGearList.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCustomSkuSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skuInput.trim()) return;
    onSelectGearForQuote(`Price Match Request: ${skuInput.trim()}`);
    setSkuInput('');
  };

  return (
    <section id="gear-sales" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d121e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-semibold text-amber-300 mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>02. Authorized Pro AV Dealer & Distribution</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.gear.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.gear.subheading}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Tag className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-white">{t.gear.bestPriceGuarantee}</span>
            </div>
          </div>
        </div>

        {/* Sweetwater & Guitar Center Price-Beat Guarantee Hero Banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-amber-950/30 border border-sky-800/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 font-mono-nums">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.gear.sweetwaterBeatTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isEs
                  ? 'Vendemos Todo lo que Venden las Grandes Tiendas a Mejores Precios'
                  : 'We Sell Everything Sweetwater & Guitar Center Sell — Better Prices Guaranteed'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.gear.sweetwaterBeatDesc}
              </p>
            </div>

            {/* Price-Match Submission Box */}
            <div className="lg:col-span-5">
              <form onSubmit={handleCustomSkuSubmit} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {isEs ? 'Pega un enlace de Sweetwater, Guitar Center o Modelo:' : 'Paste a Sweetwater / Guitar Center link or Gear Model:'}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={skuInput}
                    onChange={(e) => setSkuInput(e.target.value)}
                    placeholder="e.g. Behringer WING, Shure PSM900, Chauvet Haze..."
                    className="flex-1 px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg whitespace-nowrap shadow-sm transition-all"
                  >
                    {isEs ? 'Mejorar Precio' : 'Beat My Price'}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isEs
                    ? 'Luis cotiza directamente con distribuidores oficiales con garantía de fábrica.'
                    : 'Luis sources directly through authorized manufacturer dealer reps with full factory warranty.'}
                </p>
              </form>
            </div>

          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Functional Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none flex-1 min-w-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-white font-bold shadow-sm shadow-sky-500/20'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEs ? 'Buscar consola, IEM, luces...' : 'Search X32, WING, haze, IEM...'}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGear.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-slate-900/80 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-colors group shadow-md"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="uppercase font-mono-nums tracking-wider text-sky-400 font-semibold">
                    {item.categoryLabel}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] text-amber-300 font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  {item.name}
                </h3>

                {/* Retailer Comparison Callout */}
                {item.retailerComparison && (
                  <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono-nums">
                    <Check className="w-3 h-3" />
                    <span>{item.retailerComparison}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Spec List */}
                <div className="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
                  {item.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onSelectGearForQuote(item.name)}
                  className="w-full py-2.5 px-3 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
                  <span>{isEs ? 'Cotizar Mejor Precio con Luis' : 'Request Best Dealer Price Quote'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredGear.length === 0 && (
          <div className="p-12 text-center rounded-xl bg-slate-900 border border-slate-800">
            <p className="text-sm text-slate-300">
              {isEs ? 'No encontramos coincidencias para esa búsqueda, pero Luis lo consigue.' : 'No catalog items matched that keyword, but Luis can source any model.'}
            </p>
            <button
              type="button"
              onClick={() => onSelectGearForQuote(`Custom Sourcing Request: ${searchQuery}`)}
              className="mt-3 px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg"
            >
              {isEs ? 'Solicitar Cotización de este Producto' : 'Request Custom Quote for This Gear'}
            </button>
          </div>
        )}

        {/* Custom Gear Request Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {isEs ? '¿Necesitas un Paquete Completo de Audio, Luces o DMX?' : 'Need a Turnkey Package of Audio, Mics, IEMs or Stage Lighting?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {isEs
                  ? 'Luis Martinez arma el paquete completo con cables, antenas, combinadores e instalación llave en mano.'
                  : 'Luis Martinez packages complete stage ecosystems: consoles, wireless, RF combiners, IEMs, and DMX lighting with direct sound engineer setup.'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectGearForQuote('Complete Audio / Lighting Package (Sweetwater Price Match)')}
            className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5"
          >
            <span>{isEs ? 'Cotizar Todo mi Escenario' : 'Inquire Complete Stage Package'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
