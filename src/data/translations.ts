export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    services: string;
    subscriptions: string;
    pricing: string;
    gearSales: string;
    training: string;
    diagnostic: string;
    testimonials: string;
    requestQuote: string;
    callNow: string;
  };
  hero: {
    kicker: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    scripture: string;
    scriptureRef: string;
    primaryCta: string;
    secondaryCta: string;
    engineerTitle: string;
    spanishSpoken: string;
    phone: string;
    email: string;
  };
  stats: {
    yearsExp: string;
    yearsExpLabel: string;
    subscriptionPrice: string;
    subscriptionLabel: string;
    recallSafe: string;
    recallSafeLabel: string;
    bilingual: string;
    bilingualLabel: string;
  };
  services: {
    heading: string;
    subheading: string;
    liveMixing: {
      title: string;
      desc: string;
      features: string[];
    };
    speakerInstalls: {
      title: string;
      desc: string;
      features: string[];
    };
    gearSales: {
      title: string;
      desc: string;
      features: string[];
    };
    recallSafe: {
      title: string;
      desc: string;
      features: string[];
    };
    bilingualTraining: {
      title: string;
      desc: string;
      features: string[];
    };
    ministrySupport: {
      title: string;
      desc: string;
      features: string[];
    };
  };
  subscriptions: {
    badge: string;
    heading: string;
    subheading: string;
    planTitle: string;
    planPrice: string;
    planPeriod: string;
    planDesc: string;
    featuresTitle: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    oneOffTitle: string;
    oneOffPrice: string;
    oneOffPeriod: string;
    oneOffDesc: string;
    oneOffFeature1: string;
    oneOffFeature2: string;
    oneOffFeature3: string;
    oneOffFeature4: string;
    eqTermsNote: string;
    calculatorTitle: string;
    calculatorDesc: string;
  };
  gear: {
    heading: string;
    subheading: string;
    bestPriceGuarantee: string;
    sweetwaterBeatTitle: string;
    sweetwaterBeatDesc: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterChurch: string;
    filterCorporate: string;
    filterMinistry: string;
    verifiedBadge: string;
    ctaPrompt: string;
    ctaButton: string;
  };
  quoteModal: {
    title: string;
    subtitle: string;
    orgLabel: string;
    orgPlaceholder: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceLabel: string;
    consoleLabel: string;
    roomSizeLabel: string;
    urgencyLabel: string;
    notesLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      subscriptions: "Subscription Care",
      pricing: "Rates & Comparison",
      gearSales: "Pro AV Sales",
      training: "Volunteer Training",
      diagnostic: "System Check",
      testimonials: "Reviews",
      requestQuote: "Request a Quote",
      callNow: "Call 414-554-4388",
    },
    hero: {
      kicker: "Luis Martinez · Sound Engineer",
      titleStart: "Elevate Your Sound with ",
      titleHighlight: "Master Pro Audio & Live Engineering",
      titleEnd: ".",
      description: "From pristine Sunday worship services and corporate galas to full church acoustic installations, equipment sales, and on-call tech maintenance. We bring clarity, power, and recall safety to every channel.",
      scripture: "“Let everything that has breath praise the Lord.”",
      scriptureRef: "Psalm 150:6",
      primaryCta: "Request Service Quote",
      secondaryCta: "Call (414) 554-4388",
      engineerTitle: "Lead Audio Engineer & System Designer",
      spanishSpoken: "Hablamos Español · Bilingual Support",
      phone: "414-554-4388",
      email: "eva.sound.systems@gmail.com",
    },
    stats: {
      yearsExp: "15+ Yrs",
      yearsExpLabel: "Sanctuary & Live Audio Mastery",
      subscriptionPrice: "$50/wk",
      subscriptionLabel: "On-Call Emergency & Care Plan",
      recallSafe: "100%",
      recallSafeLabel: "Recall-Safe Scene & DSP Protection",
      bilingual: "EN / ES",
      bilingualLabel: "Bilingual Training & Support",
    },
    services: {
      heading: "Comprehensive Audio & AV Solutions",
      subheading: "Designed specifically for houses of worship, corporate conference halls, and private production environments.",
      liveMixing: {
        title: "Live Sound Mixing & Production",
        desc: "Front-of-house (FOH) and monitor mixing for church worship, private concerts, and high-stakes corporate events.",
        features: ["Gain-staging & feedback elimination", "Dynamic EQ & vocal compression", "Multi-track recording integration"],
      },
      speakerInstalls: {
        title: "Speaker & Monitor Installations",
        desc: "Turnkey rigging, acoustic alignment, and stage monitor tuning tailored to your room architecture.",
        features: ["Flown line arrays & point-source systems", "Subwoofer time-alignment", "Zero sightline intrusion rigging"],
      },
      gearSales: {
        title: "Pro AV Equipment Sales & Best Prices",
        desc: "We supply all major pro audio brands at competitive dealer rates with direct sound engineer guidance.",
        features: ["Digital consoles (X32, M32, Wing, SQ, Yamaha)", "Wireless microphone & In-Ear monitor systems", "Digital snakes, cabling, and power conditioners"],
      },
      recallSafe: {
        title: "Recall-Safe AV Design & System Tuning",
        desc: "Lock in your perfect mix. We create bulletproof digital console scenes, permissions, and DSP routing so presets are never lost.",
        features: ["User permission locking for guest bands", "Scene libraries for services & conferences", "Automated system backup & restoration"],
      },
      bilingualTraining: {
        title: "Bilingual Volunteer & Staff Training",
        desc: "Empowering church audio volunteers with hands-on, practical sound engineering coaching in English and Spanish.",
        features: ["Hands-on console tutorials & cheat sheets", "Ears training: EQ frequencies & balance", "Microphone etiquette & wireless management"],
      },
      ministrySupport: {
        title: "Couples Ministry & Special Event Audio",
        desc: "Specialized mobile audio packages and engineering for church retreats, marriage ministries, outdoor services, and galas.",
        features: ["Mobile high-intelligibility audio rigs", "Lapel & wireless speech optimization", "Rapid on-location setup & teardown"],
      },
    },
    subscriptions: {
      badge: "Signature Care Plan",
      heading: "On-Call Tech Support & Preventative Maintenance",
      subheading: "Never let audio failures interrupt your Sunday worship or corporate event. Transparent pricing built to protect your investment.",
      planTitle: "Worship & Venue Tech Care Plan",
      planPrice: "$50",
      planPeriod: "per week ($200/mo)",
      planDesc: "Complete peace of mind. Your dedicated sound engineer is on standby for emergency troubleshooting, tuning, and ongoing system health.",
      featuresTitle: "Included in the $50/week Plan:",
      feature1: "Dedicated priority on-call for emergency technical support",
      feature2: "One full Re-EQing of mixer/soundboard every 3 months included",
      feature3: "Free follow-up Re-EQ within the year if needed outside 3-month cycle",
      feature4: "Recurring on-site diagnostic checkups to ensure peak acoustic performance",
      feature5: "Remote console diagnostic assistance & scene backup verification",
      feature6: "VIP discounted rates on equipment purchases and add-on install hours",
      oneOffTitle: "Standard One-Off Service Call",
      oneOffPrice: "$120",
      oneOffPeriod: "per hour (4-hr minimum = $480 min)",
      oneOffDesc: "For venues needing standalone emergency troubleshooting, one-time repair, or single event mixing without a retainer.",
      oneOffFeature1: "$120/hour with strict 4-hour minimum billing ($480 min per visit)",
      oneOffFeature2: "Standard scheduling queue (non-retainer availability)",
      oneOffFeature3: "Console re-EQ charged at standard $120/hr rate (4-hr min)",
      oneOffFeature4: "Travel & diagnostic fees applied outside local zone",
      eqTermsNote: "Re-EQ Policy: Subscription includes 1 full soundboard re-EQing every 3 months, or 1 follow-up free EQ within the year if outside the 3-month intervals. Outside of this agreement or for non-subscribers, standard hourly rates apply ($120/hr with a 4-hour minimum = $480 min).",
      calculatorTitle: "Subscription Savings Calculator",
      calculatorDesc: "Compare the predictable $50/week plan against standard emergency hourly callouts ($120/hr with 4-hr minimum).",
    },
    gear: {
      heading: "Pro AV Equipment Sales & Distribution",
      subheading: "We sell everything Sweetwater & Guitar Center carry — In-Ear Monitors, Behringer X32 & WING consoles, RF Combiners, DMX stage lighting, and haze machines at better prices than you can find online.",
      bestPriceGuarantee: "Better Prices Than the Internet, Sweetwater & Guitar Center",
      sweetwaterBeatTitle: "Have a Quote or Shopping Cart from Sweetwater, Guitar Center, or B&H?",
      sweetwaterBeatDesc: "Send us the item link, model, or SKU. Luis Martinez will beat the retail price, provide full manufacturer warranty, and offer expert sound engineer commissioning.",
    },
    testimonials: {
      badge: "Verified Client Reviews & Case Stories",
      heading: "Trusted by Church Pastors & Event Leaders",
      subheading: "Real results from Wisconsin congregations, ministry retreats, and corporate conferences engineered by Luis Martinez.",
      filterAll: "All Stories",
      filterChurch: "Churches & Sanctuaries",
      filterCorporate: "Corporate Conferences",
      filterMinistry: "Special Ministries",
      verifiedBadge: "Verified Client",
      ctaPrompt: "Ready to eliminate feedback, protect your scenes, and achieve broadcast-grade audio clarity?",
      ctaButton: "Schedule Service with Luis",
    },
    quoteModal: {
      title: "Request a Service Estimate or Quote",
      subtitle: "Tell Luis Martinez about your venue, upcoming event, or system requirements.",
      orgLabel: "Church / Organization / Business Name",
      orgPlaceholder: "e.g. Grace Fellowship Church or Horizon Events",
      nameLabel: "Your Contact Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      serviceLabel: "Service Needed",
      consoleLabel: "Current Soundboard / Mixer Model (if known)",
      roomSizeLabel: "Estimated Room Capacity / Attendance",
      urgencyLabel: "Timeline / Event Date",
      notesLabel: "Specific Needs / Audio Issues",
      submitBtn: "Submit Quote Request to Luis Martinez",
      successTitle: "Estimate Request Received!",
      successDesc: "Thank you! Luis Martinez has received your request and will reach out promptly via phone or email.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      subscriptions: "Membresía Técnica",
      pricing: "Tarifas y Comparativa",
      gearSales: "Venta de Equipos",
      training: "Capacitación Voluntarios",
      diagnostic: "Chequeo de Sistema",
      testimonials: "Testimonios",
      requestQuote: "Solicitar Cotización",
      callNow: "Llamar 414-554-4388",
    },
    hero: {
      kicker: "Luis Martinez · Ingeniero de Sonido",
      titleStart: "Eleva Tu Sonido con ",
      titleHighlight: "Ingeniería de Audio Profesional en Vivo",
      titleEnd: ".",
      description: "Desde servicios dominicales impecables y galas corporativas hasta instalaciones acústicas completas para iglesias, venta de equipos profesionales y soporte técnico de emergencia. Brindamos claridad y potencia a cada canal.",
      scripture: "“Todo lo que respira alabe a Jehová.”",
      scriptureRef: "Salmo 150:6",
      primaryCta: "Solicitar Cotización",
      secondaryCta: "Llamar a Luis: (414) 554-4388",
      engineerTitle: "Ingeniero Principal de Audio y Diseñador de Sistemas",
      spanishSpoken: "Hablamos Español · Soporte y Capacitación Bilingüe",
      phone: "414-554-4388",
      email: "eva.sound.systems@gmail.com",
    },
    stats: {
      yearsExp: "15+ Años",
      yearsExpLabel: "Experiencia en Audio para Iglesias y Eventos",
      subscriptionPrice: "$50/sem",
      subscriptionLabel: "Soporte Técnico de Emergencia y Mantenimiento",
      recallSafe: "100%",
      recallSafeLabel: "Protección y Guardado Seguro de Escenas Digitales",
      bilingual: "Bilingüe",
      bilingualLabel: "Capacitación en Inglés y Español",
    },
    services: {
      heading: "Soluciones Integrales de Audio y AV",
      subheading: "Diseñado para iglesias, auditorios, salones de conferencias corporativas y eventos privados.",
      liveMixing: {
        title: "Mezcla de Sonido en Vivo",
        desc: "Operación de sala (FOH) y monitores para cultos de adoración, conciertos y eventos corporativos de alto nivel.",
        features: ["Ganancia óptima y eliminación de retroalimentación", "Ecualización dinámica y compresión vocal", "Grabación multipista lista para streaming"],
      },
      speakerInstalls: {
        title: "Instalación de Altavoces y Monitores",
        desc: "Montaje profesional, calibración acústica y alineación de sistemas line array y monitores de piso.",
        features: ["Arreglos lineales (Line Arrays) y fuentes puntuales", "Alineación de tiempo en subwoofers", "Instalación y cableado seguro y estético"],
      },
      gearSales: {
        title: "Venta de Equipos Profesionales y Mejores Precios",
        desc: "Distribuimos las mejores marcas de audio profesional a precios competitivos con asesoría técnica directa.",
        features: ["Consolas digitales (X32, M32, Wing, SQ, Yamaha)", "Micrófonos inalámbricos y sistemas In-Ear", "Mangueras digitales, cajas de escenario y acondicionadores"],
      },
      recallSafe: {
        title: "Diseño Seguro 'Recall-Safe' y Calibración",
        desc: "Asegura la mezcla perfecta. Diseñamos escenas digitales con bloqueo de permisos para que los voluntarios nunca pierdan los ajustes.",
        features: ["Bloqueo de permisos para músicos invitados", "Librería de escenas para servicios y eventos", "Respaldos automatizados y restauración"],
      },
      bilingualTraining: {
        title: "Capacitación Bilingüe de Voluntarios",
        desc: "Entrenamos a los voluntarios y equipos de sonido de iglesias con metodología práctica en español e inglés.",
        features: ["Talleres prácticos frente a la consola", "Entrenamiento auditivo: frecuencias y ecualización", "Técnicas de microfonía y radiofrecuencia"],
      },
      ministrySupport: {
        title: "Soporte para Ministerio de Parejas y Eventos",
        desc: "Equipos móviles y operación especializada para retiros espirituales, bodas, conferencias y eventos en exteriores.",
        features: ["Sistemas portátiles de alta inteligibilidad", "Micrófonos de solapa e inalámbricos optimizados", "Montaje rápido y puntual"],
      },
    },
    subscriptions: {
      badge: "Plan Estrella de Cobertura",
      heading: "Mantenimiento Preventivo y Soporte en Guardia",
      subheading: "No permitas que fallas de audio arruinen tu servicio dominical o evento. Precios claros para proteger tu ministerio.",
      planTitle: "Plan de Cuidado Técnico para Iglesias y Salones",
      planPrice: "$50",
      planPeriod: "por semana ($200/mes)",
      planDesc: "Tranquilidad total. Tu ingeniero de sonido dedicado en guardia para emergencias, afinación acústica y salud de tu sistema.",
      featuresTitle: "Incluido en el Plan de $50/semana:",
      feature1: "Prioridad en guardia para soporte técnico de emergencia y llamadas",
      feature2: "Una re-ecualización completa de consola o mixer cada 3 meses incluida",
      feature3: "Una re-ecualización de seguimiento gratis en el año fuera del intervalo de 3 meses",
      feature4: "Chequeos diagnósticos presenciales recurrentes para asegurar óptimo rendimiento",
      feature5: "Diagnóstico remoto y verificación de respaldos de escenas digitales",
      feature6: "Precios preferenciales en compras de equipos y horas adicionales de instalación",
      oneOffTitle: "Llamada de Servicio Individual",
      oneOffPrice: "$120",
      oneOffPeriod: "por hora (Mínimo 4 horas = $480 mín)",
      oneOffDesc: "Para recintos que requieren asistencia puntual o solución de emergencias sin plan de retención.",
      oneOffFeature1: "$120 por hora con facturación mínima estricta de 4 horas ($480 mín por visita)",
      oneOffFeature2: "Sujeto a disponibilidad en cola estándar sin prioridad",
      oneOffFeature3: "Re-ecualización de consola cobrada a tarifa estándar de $120/hr (mín. 4 hrs)",
      oneOffFeature4: "Gastos de viáticos aplican fuera de la zona local",
      eqTermsNote: "Términos de Re-EQ: El plan de suscripción incluye 1 re-ecualización completa de consola cada 3 meses, o 1 re-EQ gratis de seguimiento en el año si ocurre fuera del intervalo de 3 meses. Fuera de este acuerdo o para no suscriptores, se cobra a precio regular ($120/hr con un mínimo de 4 horas = $480 mín).",
      calculatorTitle: "Calculadora de Ahorro",
      calculatorDesc: "Compara el costo predecible de $50/semana frente a visitas de emergencia individuales ($120/hr con mín. 4 horas).",
    },
    gear: {
      heading: "Venta y Distribución de Audio Profesional y Escenario",
      subheading: "Vendemos todo lo que venden Sweetwater y Guitar Center: Monitores In-Ear, consolas Behringer X32 y WING, combinadores de antena, iluminación DMX y máquinas de humo y hazers a mejores precios que en internet.",
      bestPriceGuarantee: "Mejores Precios que Internet, Sweetwater y Guitar Center",
      sweetwaterBeatTitle: "¿Tienes una Cotización o Carrito de Sweetwater, Guitar Center o B&H?",
      sweetwaterBeatDesc: "Envíanos el enlace o modelo del equipo. Luis Martinez mejorará el precio con garantía de fábrica y asesoría técnica de ingeniería de sonido.",
    },
    testimonials: {
      badge: "Testimonios y Casos de Éxito Verificados",
      heading: "La Confianza de Pastores y Líderes de Eventos",
      subheading: "Resultados reales en santuarios, retiros de parejas y cumbres corporativas operadas por Luis Martinez en Wisconsin y alrededores.",
      filterAll: "Todas las Historias",
      filterChurch: "Iglesias y Santuarios",
      filterCorporate: "Eventos Corporativos",
      filterMinistry: "Ministerios Especiales",
      verifiedBadge: "Cliente Verificado",
      ctaPrompt: "¿Listo para erradicar el feedback, proteger tus escenas y lograr claridad de audio en cada culto?",
      ctaButton: "Agendar Servicio con Luis",
    },
    quoteModal: {
      title: "Solicitar Presupuesto o Cotización",
      subtitle: "Comunícate directamente con Luis Martinez sobre las necesidades de tu iglesia o evento.",
      orgLabel: "Nombre de la Iglesia / Empresa / Organización",
      orgPlaceholder: "ej. Iglesia Gracia o Eventos Horizon",
      nameLabel: "Tu Nombre de Contacto",
      phoneLabel: "Número Telefónico",
      emailLabel: "Correo Electrónico",
      serviceLabel: "Servicio Requerido",
      consoleLabel: "Modelo de Consola / Mixer Actual (si lo conoce)",
      roomSizeLabel: "Capacidad del Salón / Asistentes Estimados",
      urgencyLabel: "Fecha del Evento o Plazo",
      notesLabel: "Detalles Específicos o Problemas de Audio",
      submitBtn: "Enviar Solicitud a Luis Martinez",
      successTitle: "¡Solicitud Recibida con Éxito!",
      successDesc: "¡Muchas gracias! Luis Martinez ha recibido tu información y se pondrá en contacto contigo a la brevedad.",
    },
  },
};
