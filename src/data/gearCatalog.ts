export interface ProGearItem {
  id: string;
  name: string;
  category: 'consoles' | 'iem' | 'combiners' | 'lighting-haze' | 'wireless' | 'speakers' | 'accessories';
  description: string;
  categoryLabel: string;
  specs: string[];
  badge?: string;
  retailerComparison?: string;
}

export const proGearList: ProGearItem[] = [
  // 1. Digital Mixing Consoles (Behringer X32, WING, Midas M32, Allen & Heath)
  {
    id: 'console-behringer-wing',
    name: 'Behringer WING 48-Channel Digital Mixing Console',
    category: 'consoles',
    categoryLabel: 'Digital Consoles',
    description: 'The revolutionary 48-channel, 28-bus digital console with 24 motorized faders, large capacitive touchscreen, custom controls, and vintage modeled channel strips.',
    specs: [
      '48 stereo channels (switchable mono/stereo on every channel)',
      '24 motorized 100mm faders in 3 separate sections',
      'Large tiltable 10" multi-touch display',
      'Dante, SoundGrid, MADI & AES50 multi-protocol card support',
      'Pre-configured recall-safe church worship profiles',
    ],
    badge: 'Trending Console 2026',
    retailerComparison: 'Better than Sweetwater & Guitar Center retail pricing',
  },
  {
    id: 'console-behringer-x32-series',
    name: 'Behringer X32 Series (Standard, Compact, Producer, Rack)',
    category: 'consoles',
    categoryLabel: 'Digital Consoles',
    description: 'The most popular worship console in the world. 40 inputs, 25 motorized faders, 32 programmable Midas preamps, and 16 balanced XLR outputs.',
    specs: [
      '40-input channel, 25-bus digital mixing console',
      '32 Midas-designed programmable mic preamps',
      'Virtual FX rack featuring 8 true-stereo FX slots',
      'AES50 networking for up to 96 inputs and outputs',
      'Full recall scene protection tailored for church services',
    ],
    badge: 'Church Worship Standard',
    retailerComparison: 'Wholesale dealer direct pricing',
  },
  {
    id: 'console-midas-m32-live',
    name: 'Midas M32 LIVE 40-Input Digital Console',
    category: 'consoles',
    categoryLabel: 'Digital Consoles',
    description: 'Touring-grade digital console featuring genuine Midas PRO microphone preamplifiers and 25 Midas PRO motorized faders tested to 1 million cycles.',
    specs: [
      '32 genuine Midas PRO mic preamps',
      '25 Midas PRO motorized faders',
      '192 kHz ADC/DAC converters for pristine audiophile clarity',
      'Dual AES50 ports & Klark Teknik DN32-LIVE recording card',
    ],
    badge: 'Pro Grade Preamps',
    retailerComparison: 'Beat Sweetwater guaranteed',
  },
  {
    id: 'console-allen-heath-sq',
    name: 'Allen & Heath SQ-5 / SQ-6 / SQ-7 Consoles',
    category: 'consoles',
    categoryLabel: 'Digital Consoles',
    description: 'Powered by 96kHz XCVI FPGA engine delivering class-leading high-resolution audio, <0.7ms latency, and DEEP processing emulations.',
    specs: [
      '96kHz FPGA core with 48 input channels',
      '12 stereo mixes + LR and 3 stereo matrices',
      'Automatic Mic Mixing (AMM) ideal for pastoral speech',
      'Custom fader layers and dedicated volunteer keys',
    ],
    badge: '96kHz High Definition',
    retailerComparison: 'Dealer discount applied',
  },

  // 2. In-Ear Monitor (IEM) Systems
  {
    id: 'iem-shure-psm900',
    name: 'Shure PSM 900 / PSM 1000 Wireless In-Ear Monitor Systems',
    category: 'iem',
    categoryLabel: 'In-Ear Monitors (IEM)',
    description: 'The industry-standard personal monitoring system for professional worship vocalists, drummers, and musicians. Exceptional audio clarity and robust RF stability.',
    specs: [
      'Patented Audio Reference Companding for natural wired-like sound',
      'Precision front-end RF filtering reduces dropouts',
      'CueMode allows auditioning of different stage mixes',
      'Rugged ultra-thin metal bodypack receivers',
    ],
    badge: 'Industry Benchmark',
    retailerComparison: 'Lowest price anywhere online',
  },
  {
    id: 'iem-sennheiser-g4',
    name: 'Sennheiser EW IEM G4 Wireless Monitoring Ecosystem',
    category: 'iem',
    categoryLabel: 'In-Ear Monitors (IEM)',
    description: 'Rugged all-in-one wireless monitoring system with up to 16 compatible channels and enhanced frequency bank system for worship bands.',
    specs: [
      'Up to 42 MHz bandwidth with 1680 selectable frequencies',
      'High RF output power (up to 50 mW) for large auditoriums',
      'Easy and flexible wireless synchronization between transmitter and receiver',
      'Compatible with Sennheiser WSM control software',
    ],
    badge: 'Bulletproof RF',
    retailerComparison: 'Beats Guitar Center pricing',
  },
  {
    id: 'iem-personal-mixers-p16',
    name: 'Behringer Powerplay P16-M & Midas DP48 Personal Mixers',
    category: 'iem',
    categoryLabel: 'In-Ear Monitors (IEM)',
    description: 'Give every worship musician control of their own monitor mix. Eliminate stage volume battles and let singers hear themselves clearly.',
    specs: [
      '16-channel / 48-channel personal stereo monitor mixing',
      'Direct Ultranet digital connection over simple Cat5e cabling',
      '3-band EQ per channel with sweepable mid-frequency',
      'Stores 16 custom presets for fast Sunday morning recall',
    ],
    badge: 'Stage Volume Killer',
    retailerComparison: 'Save up to 25% vs big box stores',
  },

  // 3. Microphone & IEM Antenna Combiners / RF Distribution
  {
    id: 'combiner-iem-pa421b',
    name: 'Shure PA421B / Sennheiser AC 41 Active IEM Combiners',
    category: 'combiners',
    categoryLabel: 'RF Combiners & Antenna Distro',
    description: 'Combine up to 4 wireless IEM transmitters into a single directional antenna. Eliminates antenna clutter behind your rack and prevents intermodulation distortion.',
    specs: [
      '4-to-1 active RF transmitter combining',
      'Wideband operation (470–865 MHz)',
      'Front-panel LED signals for RF overload and power',
      'Powers connected transmitters directly, eliminating wall warts',
    ],
    badge: 'Clean Rack Solution',
    retailerComparison: 'Beats online retailer prices',
  },
  {
    id: 'combiner-mic-distro-ua844',
    name: 'Shure UA844+SWB / RF Venue DISTRO4 Antenna Distribution',
    category: 'combiners',
    categoryLabel: 'RF Combiners & Antenna Distro',
    description: 'Distributes RF signal from a single pair of antennas to up to 4 or 5 wireless microphone receivers. Guarantees rock-solid reception with zero dropouts.',
    specs: [
      'Expands wireless mic systems by splitting one antenna pair to 5 receivers',
      'Cascade ports allow connection to a second distribution unit',
      'Internal DC power distribution for up to 4 receivers',
      'Significantly cleans up sanctuary AV rack wiring',
    ],
    badge: 'Zero Dropouts',
    retailerComparison: 'Direct pro audio dealer pricing',
  },
  {
    id: 'combiner-directional-paddles',
    name: 'RF Venue Diversity Fin & Shure UA874 Active Paddle Antennas',
    category: 'combiners',
    categoryLabel: 'RF Combiners & Antenna Distro',
    description: 'High-gain directional antennas with integrated low-noise amplifiers. Captures RF signals from across large sanctuaries and auditoriums with zero multi-path interference.',
    specs: [
      'Directional cardioid polar pattern for maximum rejection of unwanted RF',
      'Switchable gain settings (3dB, 6dB, 10dB compensation)',
      'Integrated BNC output connector with wall/stand mounting brackets',
      'Eliminates mic cutouts when pastors walk throughout the congregation',
    ],
    badge: 'Maximum Wireless Range',
    retailerComparison: 'Best price guarantee',
  },

  // 4. Stage Lighting, Smoke & Haze Machines
  {
    id: 'lighting-water-based-hazer',
    name: 'Professional Water-Based Church Haze Machines (DMX)',
    category: 'lighting-haze',
    categoryLabel: 'Stage Lighting & Haze',
    description: 'Tour-grade, water-based continuous atmospheric hazer engineered specifically for churches and live events. Creates a fine, long-lasting mist that accentuates lighting beams without smoke odors or triggering fire sensors.',
    specs: [
      '100% Water-based fluid, non-toxic, odorless, and safe for vocalists',
      'Continuous output with ultra-fine haze dispersion (zero oil residue)',
      'Precision DMX-512 control for silent operation during sermons',
      'Quiet whisper fan mechanism perfect for quiet sanctuary moments',
    ],
    badge: 'Church Fire-Safe Haze',
    retailerComparison: 'Better price than Sweetwater & GC',
  },
  {
    id: 'lighting-low-fog-machine',
    name: 'Low-Lying Fog / Dry Ice Effect Stage Machines',
    category: 'lighting-haze',
    categoryLabel: 'Stage Lighting & Haze',
    description: 'Produces a thick cloud of dramatic low-lying fog that hugs the stage floor without rising. Spectacular for weddings, Christmas/Easter productions, and special services.',
    specs: [
      'Ultrasonic or water/ice cooling creates thick ground-level fog blanket',
      'Continuous output capacity with variable volume control',
      'DMX onboard control and wireless remote included',
      'Leaves zero wet residue or slippery stage film',
    ],
    badge: 'Special Event Showstopper',
    retailerComparison: 'Wholesale church discounts',
  },
  {
    id: 'lighting-dmx-wash-bars',
    name: 'Church Sanctuary DMX LED Wash Bars & Moving Heads',
    category: 'lighting-haze',
    categoryLabel: 'Stage Lighting & Haze',
    description: 'Broadcast-quality flicker-free stage lighting fixtures. RGBAW+UV color mixing for modern worship stages and warm white front wash for pastors and speakers.',
    specs: [
      'High CRI (>95) warm white chips for camera and streaming clarity',
      'Flicker-free pulse width modulation for 4K video broadcasts',
      'Silent convection cooling (no noisy fans in worship sanctuaries)',
      'Full DMX512 and wireless DMX control compatibility',
    ],
    badge: 'Camera-Ready Broadcast',
    retailerComparison: 'Beat any online competitor quote',
  },

  // 5. Wireless Microphones
  {
    id: 'wireless-shure-qlxd-bundle',
    name: 'Shure QLX-D & SLX-D Digital Wireless Handhelds & Lavs',
    category: 'wireless',
    categoryLabel: 'Wireless Microphones',
    description: 'Transparent 24-bit digital audio quality with robust RF performance for worship leaders, pastors, and vocalists.',
    specs: [
      '24-bit digital audio resolution with 120 dB dynamic range',
      'Networked Ethernet channel scanning & Shure Wireless Workbench control',
      'Rechargeable lithium-ion battery packs with minute-accurate readouts',
      'AES-256 encryption for secure board meetings and keynotes',
    ],
    badge: 'Crystal Clear Speech',
    retailerComparison: 'Beat Sweetwater guaranteed',
  },
  {
    id: 'wireless-sennheiser-ewdx',
    name: 'Sennheiser EW-D / EW-DX Dual Wireless Receivers',
    category: 'wireless',
    categoryLabel: 'Wireless Microphones',
    description: 'Equidistant tuning grid eliminates intermodulation. Effortless setup via iOS / Android Smart Assist app.',
    specs: [
      '134 dB input dynamic range (no sensitivity adjustments needed)',
      'Equidistant channel grid allows packing more mics without interference',
      'Automated pairing via Bluetooth Low Energy',
      'Rugged metal handheld & bodypack transmitters',
    ],
    badge: 'Next-Gen RF Tech',
    retailerComparison: 'Guaranteed lower than Guitar Center',
  },

  // 6. Loudspeakers & Line Arrays
  {
    id: 'speakers-line-array-custom',
    name: 'Custom Sanctuary Line Array Systems & Flown Subs',
    category: 'speakers',
    categoryLabel: 'Line Arrays & Speakers',
    description: 'Acoustically modeled speaker arrays engineered to deliver even sound pressure across all sanctuary pews.',
    specs: [
      'Constant curvature & line array modules for uniform coverage',
      'Flown cardioid subwoofers to keep bass off the stage and altar',
      'Laser-aligned acoustic rigging hardware certified for safety',
      'Time-aligned DSP presets loaded directly by Luis Martinez',
    ],
    badge: 'Turnkey Installation',
    retailerComparison: 'Direct wholesale dealer pricing',
  },
  {
    id: 'speakers-stage-coaxial-wedges',
    name: 'Active Coaxial Stage Wedge Monitors',
    category: 'speakers',
    categoryLabel: 'Line Arrays & Speakers',
    description: 'Low-profile coaxial stage wedges delivering feedback-resistant sound directly to worship vocalists and musicians.',
    specs: [
      'Coaxial high-definition drivers for unified point-source sound',
      'Ultra-low stage footprint and minimal line of sight obstruction',
      'Integrated DSP with feedback reduction curves',
      'Heavy-duty polyurea coating for life on the stage',
    ],
    badge: 'Low-Profile Stage',
    retailerComparison: 'Package discounts available',
  },

  // 7. Digital Snakes & Stage Boxes
  {
    id: 'stagebox-midas-dl32',
    name: 'Midas DL32 & Behringer S32 / S16 Digital Stage Boxes',
    category: 'accessories',
    categoryLabel: 'Digital Snakes & Stage Boxes',
    description: 'Eliminate heavy analog snakes with a single shielded Cat5/6 cable connecting 32 stage mic inputs directly to your X32 or M32 FOH console.',
    specs: [
      '32 remote-controllable genuine Midas PRO mic preamplifiers',
      '16 balanced analog outputs for monitors and mains',
      'Dual AES50 network ports for cascading multiple stage boxes',
      'Ultranet personal monitor network port for P16-M mixers',
    ],
    badge: 'Plug-and-Play Snake',
    retailerComparison: 'Best price on all install gear',
  },
];
