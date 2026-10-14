export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  category: 'church' | 'corporate' | 'ministry';
  categoryLabel: {
    en: string;
    es: string;
  };
  serviceProvided: {
    en: string;
    es: string;
  };
  gearContext: string;
  beforeSituation: {
    en: string;
    es: string;
  };
  quote: {
    en: string;
    es: string;
  };
  verifiedClient: boolean;
  highlightMetric: {
    en: string;
    es: string;
  };
}

export const testimonialsList: Testimonial[] = [
  {
    id: 'pastor-carlos-mendez',
    name: 'Pastor Carlos Méndez',
    role: 'Lead Pastor',
    organization: 'Iglesia Comunidad de Fe',
    location: 'Milwaukee, WI',
    category: 'church',
    categoryLabel: {
      en: 'Church Sanctuary',
      es: 'Santuario de Iglesia',
    },
    serviceProvided: {
      en: '$50/Wk Care Plan & Bilingual Volunteer Training',
      es: 'Plan de $50/Semana y Capacitación Bilingüe',
    },
    gearContext: 'Behringer X32 · Shure Wireless · 450-Seat Sanctuary',
    beforeSituation: {
      en: 'Pulpit feedback squeals every Sunday and volunteers afraid of the console.',
      es: 'Chillidos constantes en el púlpito cada domingo y voluntarios temerosos de la consola.',
    },
    quote: {
      en: 'Before Luis stepped in, feedback on our pastor’s lavalier had embarrassed us for over a year. Luis completely re-EQ’d our X32, aligned our room, and trained our Spanish-speaking volunteers with incredible patience. Now our Sunday worship is crystal clear, and having him on-call for $50/week is the best stewardship decision our board made.',
      es: 'Antes de que Luis interviniera, el chillido en el micrófono de solapa del pastor nos avergonzaba cada domingo. Luis re-ecualizó totalmente nuestra X32, alineó la sala y capacitó a nuestros voluntarios en español con enorme paciencia. El plan de $50/semana ha sido la mejor decisión que ha tomado nuestra junta.',
    },
    verifiedClient: true,
    highlightMetric: {
      en: 'Zero Feedback in 14 Months of Services',
      es: 'Cero Chillidos en 14 Meses de Cultos',
    },
  },
  {
    id: 'marcus-vance-worship',
    name: 'Marcus Vance',
    role: 'Worship & Creative Arts Director',
    organization: 'Hope City Church',
    location: 'Wauwatosa, WI',
    category: 'church',
    categoryLabel: {
      en: 'Worship Production',
      es: 'Producción de Alabanza',
    },
    serviceProvided: {
      en: 'Recall-Safe System Tuning & Line Array Calibration',
      es: 'Afinación Recall-Safe y Calibración de Line Array',
    },
    gearContext: 'Midas M32 Live · Flown Line Arrays · Sennheiser IEMs',
    beforeSituation: {
      en: 'Drum bleed drowning out choir, and guest youth bands overwriting master presets.',
      es: 'Batería ahogando al coro y grupos invitados borrando escenas dominicales.',
    },
    quote: {
      en: 'Luis implemented recall-safe scenes so our youth groups can play on Friday night without ever wiping our Sunday worship preset. His quarterly re-EQings account for room climate changes and our in-ear mixes have never sounded tighter. He understands both the spiritual heart of worship and the rigorous science of decibels.',
      es: 'Luis implementó escenas protegidas con recall-safe para que los jóvenes ensayen los viernes sin alterar nuestra mezcla del domingo. Sus re-ecualizaciones trimestrales compensan los cambios de temperatura y los monitores in-ear suenan impecables. Comprende el corazón ministerial y la ciencia del audio.',
    },
    verifiedClient: true,
    highlightMetric: {
      en: '100% Preset Protection · Zero Lost Mixes',
      es: '100% Protección de Ajustes · Cero Mezclas Perdidas',
    },
  },
  {
    id: 'elena-rodriguez-corporate',
    name: 'Elena Rodríguez-Cruz',
    role: 'Director of Corporate Events',
    organization: 'Great Lakes Executive Summit',
    location: 'Milwaukee / Brookfield, WI',
    category: 'corporate',
    categoryLabel: {
      en: 'Corporate Conference',
      es: 'Conferencia Corporativa',
    },
    serviceProvided: {
      en: 'Live Keynote Audio Mixing & Multi-Wireless Coordination',
      es: 'Mezcla en Vivo y Coordinación de RF Inalámbrico',
    },
    gearContext: '14 Shure QLX-D Channels · Digital FOH Console · 600 Attendees',
    beforeSituation: {
      en: 'Intermittent RF dropouts and muffled executive speech during annual summits.',
      es: 'Microcortes de señal y discursos apagados en cumbres anuales previas.',
    },
    quote: {
      en: 'Corporate keynotes leave zero margin for audio slip-ups. Luis engineered our 2-day summit with 14 wireless mics, multi-room speaker distribution, and a pristine broadcast feed for our remote board members. Flawless execution from morning sound check through the evening gala.',
      es: 'Las conferencias ejecutivas no admiten fallas. Luis operó nuestra cumbre de 2 días con 14 micrófonos inalámbricos, distribución a varias salas y señal de transmisión perfecta para nuestra junta directiva. Una ejecución impecable de principio a fin.',
    },
    verifiedClient: true,
    highlightMetric: {
      en: '600 Attendees · 14 Mics · 0 Dropouts',
      es: '600 Asistentes · 14 Micrófonos · 0 Microcortes',
    },
  },
  {
    id: 'pastor-ruben-saldana',
    name: 'Pastor Rubén Saldaña',
    role: 'Senior Pastor',
    organization: 'Centro Cristiano Emmanuel',
    location: 'Kenosha, WI',
    category: 'church',
    categoryLabel: {
      en: 'Church Sanctuary',
      es: 'Santuario de Iglesia',
    },
    serviceProvided: {
      en: 'Subwoofer Alignment, Speaker Install & $50/Wk Care Plan',
      es: 'Instalación de Altavoces, Subwoofers y Plan $50/Sem',
    },
    gearContext: 'Allen & Heath SQ-6 · Flown Array · 350-Seat Sanctuary',
    beforeSituation: {
      en: 'Muddy bass boom in the rear pews, making sermon speech unintelligible.',
      es: 'Graves retumbantes en las bancas traseras que impedían entender el mensaje.',
    },
    quote: {
      en: 'When our digital stage snake dropped sync 40 minutes before our Sunday morning service, I called Luis on our $50/week emergency care line. He immediately walked our tech team through an emergency patch route and arrived to diagnose the hardware before the main worship started. You cannot put a price tag on that level of dedication.',
      es: 'Cuando nuestra manguera digital perdió sincronización 40 minutos antes del servicio dominical, llamé a Luis a la línea de guardia del plan de $50/sem. Nos guió paso a paso y llegó al templo antes de iniciar la alabanza. Ese nivel de dedicación no tiene precio.',
    },
    verifiedClient: true,
    highlightMetric: {
      en: '35-Min Emergency Resolution on Sunday AM',
      es: 'Respuesta en 35 Minutos en Domingo por la Mañana',
    },
  },
  {
    id: 'david-sarah-lindquist',
    name: 'David & Sarah Lindquist',
    role: 'Ministry Coordinators',
    organization: 'Covenant Marriage Ministries',
    location: 'Lake Geneva, WI',
    category: 'ministry',
    categoryLabel: {
      en: 'Couples Retreat / Ministry',
      es: 'Retiro de Parejas / Ministerio',
    },
    serviceProvided: {
      en: 'Couples Ministry Mobile Audio Support & Lapel Tuning',
      es: 'Audio Móvil para Ministerio de Parejas y Solapas',
    },
    gearContext: 'Mobile Compact Line Array · Wireless Handhelds & Headsets',
    beforeSituation: {
      en: 'Poor acoustics in hotel ballrooms causing couple testimonies to be inaudible.',
      es: 'Mala acústica en salones de hotel que impedía escuchar testimonios de parejas.',
    },
    quote: {
      en: 'We run weekend retreats for 80+ couples where intimate testimonies and teaching require warm, sensitive sound reinforcement. Luis provided custom mobile audio that carried every whisper and prayer with warmth and intimacy, without harsh reflections or background buzz.',
      es: 'Realizamos retiros de fin de semana para más de 80 parejas donde testimonios íntimos requieren un sonido cálido y sin asperezas. Luis nos brindó un sistema móvil que captó cada oración y mensaje con calidez y nitidez total.',
    },
    verifiedClient: true,
    highlightMetric: {
      en: 'Warm, Intimate Speech for 80+ Couples',
      es: 'Voz Cálida e Íntima para 80+ Parejas',
    },
  },
];
