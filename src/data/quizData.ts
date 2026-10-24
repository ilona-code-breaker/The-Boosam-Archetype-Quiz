export type ArchetypeKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface ArchetypeProfile {
  id: string;
  key: ArchetypeKey;
  title: string;
  subtitle: string;
  vibe: string;
  theme: {
    badgeBg: string;
    badgeText: string;
    accent: string;
    glow: string;
    gradient: string;
    cardBorder: string;
    cardBg: string;
  };
  quote: string;
  overview: string;
  superpower: string;
  kryptonite: string;
  braPhilosophy: string;
  idealBraMatch: string;
  signatureOutfit: string;
  groupChatEnergy: string;
  signatureDrink: string;
  compatibility: {
    partnerInCrime: string;
    polarOpposite: string;
  };
  metrics: {
    structure: number;
    chill: number;
    ambition: number;
    drama: number;
    warmth: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    key: ArchetypeKey;
    text: string;
    archetypeHint?: string;
  }[];
}

export const ARCHETYPES: Record<ArchetypeKey, ArchetypeProfile> = {
  A: {
    id: 'architectural_masterpiece',
    key: 'A',
    title: 'The Architectural Masterpiece',
    subtitle: 'Structured, high-end, and refuses to sag under pressure. High-maintenance elegance.',
    vibe: 'Couture Precision & High-End Structural Integrity',
    theme: {
      badgeBg: 'bg-stone-900',
      badgeText: 'text-amber-100',
      accent: '#292524',
      glow: 'rgba(41, 37, 36, 0.15)',
      gradient: 'from-stone-900 via-neutral-800 to-stone-950',
      cardBorder: 'border-stone-800',
      cardBg: 'bg-stone-50',
    },
    quote: '“Structure is not an option; it is a moral imperative.”',
    overview:
      'You are the cantilevered museum of human form. Precision-engineered, pristine, and entirely unbothered by gravity. You command the room with tailored lines, razor-sharp posture, and zero room for flimsy fabrications.',
    superpower: 'Maintaining absolute composure and immaculate posture even in four-alarm organizational crises.',
    kryptonite: 'Fast fashion with raw hems, shapeless polyester sacks, and people who "just wing" dinner plans.',
    braPhilosophy: 'Only precision-cut boning, Italian silk demi-cups, and cantilevered construction deserve entry.',
    idealBraMatch: 'Architectural Balconette with reinforced structural boning and micro-satin binding.',
    signatureOutfit: 'Razor-tailored charcoal blazer, crisp poplin shirt, structural wide-leg trousers, and architectural gold hoops.',
    groupChatEnergy: 'The project manager who locks down the Michelin reservation and distributes the Google Calendar invite 3 weeks in advance.',
    signatureDrink: 'Ice-cold ceremonial matcha latte with organic oat milk or a bone-dry Gibson martini.',
    compatibility: {
      partnerInCrime: 'The Overachiever (together you could colonize Mars in matching power suits)',
      polarOpposite: 'The Free Spirit (her braless chaos will test your cardiac tolerance)',
    },
    metrics: {
      structure: 98,
      chill: 25,
      ambition: 85,
      drama: 45,
      warmth: 60,
    },
  },
  B: {
    id: 'free_spirit',
    key: 'B',
    title: 'The Free Spirit',
    subtitle: 'Bralette-for-life, zero fucks given, happiest when bouncing down a hiking trail or drinking wine in sweatpants.',
    vibe: 'Barefoot Luxury & Zero Gravity Resistance',
    theme: {
      badgeBg: 'bg-emerald-800',
      badgeText: 'text-emerald-100',
      accent: '#065f46',
      glow: 'rgba(6, 95, 70, 0.15)',
      gradient: 'from-emerald-900 via-teal-900 to-stone-900',
      cardBorder: 'border-emerald-200',
      cardBg: 'bg-emerald-50/50',
    },
    quote: '“If it has a wire, a stiff hook, or expectations, it is violating my peace.”',
    overview:
      'You are untamed, breezy, and completely immune to societal compression. You refuse to let anyone cage your movement. Whether summiting a ridge or lounging with biodynamic wine, your silhouette moves with the tides.',
    superpower: 'The ability to make any situation instantly comfortable and 80% more relaxing.',
    kryptonite: 'Underwires that dig, stiff cocktail gowns, and any invitation requiring "hard pants".',
    braPhilosophy: 'Wireless whisper-thin modal or honestly just a light sea breeze.',
    idealBraMatch: 'Organic ribbed cotton triangle bralette (or sheer freedom).',
    signatureOutfit: 'Draped vintage linen duster, buttery soft cashmere knit, and beat-up Birkenstocks.',
    groupChatEnergy: 'Sends 4-minute voice notes while picking figs or walking in the rain, hasn\'t read the last 300 texts but shows up with orange wine.',
    signatureDrink: 'Orange natural pet-nat wine or loose-leaf herbal infusion with honey.',
    compatibility: {
      partnerInCrime: 'The Loyal Bestie (endless sofa debriefs and warm hugs)',
      polarOpposite: 'The Architectural Masterpiece (your loose layers make her twitch)',
    },
    metrics: {
      structure: 15,
      chill: 98,
      ambition: 40,
      drama: 20,
      warmth: 90,
    },
  },
  C: {
    id: 'overachiever',
    key: 'C',
    title: 'The Overachiever',
    subtitle: 'Ambitious, pushes boundaries, stands tall, and refuses to be sidelined. Always extra.',
    vibe: 'Peak Elevation, High Performance & Relentless Drive',
    theme: {
      badgeBg: 'bg-blue-900',
      badgeText: 'text-sky-100',
      accent: '#1e3a8a',
      glow: 'rgba(30, 58, 138, 0.15)',
      gradient: 'from-slate-900 via-blue-950 to-indigo-950',
      cardBorder: 'border-blue-200',
      cardBg: 'bg-sky-50/50',
    },
    quote: '“Why settle for baseline support when you can conquer the stratosphere?”',
    overview:
      'You don’t just show up; you set the benchmark. Gravity is merely a KPI you decided to outperform. You lift, elevate, and project peak executive capability before you’ve even had your first sip of cold brew.',
    superpower: 'Turning any mundane Tuesday project into an industry-shaking demonstration of competence.',
    kryptonite: 'Slouching, low ceilings, underdelivering, and "it\'s good enough" attitudes.',
    braPhilosophy: 'Maximum lift, aerospace compression technology, and precision ergonomics.',
    idealBraMatch: 'High-impact molded plunge with ergonomic lift cushions and titanium underwire.',
    signatureOutfit: 'Cobalt-blue power trench, sharp Italian leather heels, and an Apple Watch tracking resting heart rate during meetings.',
    groupChatEnergy: 'Shares inspirational articles, celebrates every friend\'s career milestone, and organizes 6 AM group spin classes.',
    signatureDrink: 'Double espresso pulled over a single block of clear ice.',
    compatibility: {
      partnerInCrime: 'The Architectural Masterpiece (unstoppable corporate duo)',
      polarOpposite: 'The Drama Queen (too much theatrical gossip, not enough ROI)',
    },
    metrics: {
      structure: 90,
      chill: 20,
      ambition: 99,
      drama: 60,
      warmth: 65,
    },
  },
  D: {
    id: 'drama_queen',
    key: 'D',
    title: 'The Drama Queen',
    subtitle: 'Loves the spotlight, dramatic entrance, impossible to ignore, prone to making an impression across the entire room.',
    vibe: 'High Glamour, Main-Character Magnetic Field',
    theme: {
      badgeBg: 'bg-rose-900',
      badgeText: 'text-rose-100',
      accent: '#881337',
      glow: 'rgba(136, 19, 55, 0.18)',
      gradient: 'from-rose-950 via-pink-950 to-stone-900',
      cardBorder: 'border-rose-200',
      cardBg: 'bg-rose-50/50',
    },
    quote: '“I didn’t arrive to fit into the room. The room rearranges itself for me.”',
    overview:
      'Subtlety was never an option. You bring Hollywood premier energy to the dry cleaner. High-contrast, scintillating, and unapologetically front-and-center, you leave an unforgettable impression in every doorway you cross.',
    superpower: 'Instantly transforming any boring Tuesday into a cinematic, gossip-worthy spectacle.',
    kryptonite: 'Muted beige crewnecks that hide the collarbone and people who don’t clap when you walk in.',
    braPhilosophy: 'Push it to the chin, encrust it in sequins, and make sure it photographs at 4K resolution.',
    idealBraMatch: 'Strappy plunge corsetry with push-up satin padding and crystal hardware.',
    signatureOutfit: 'Deep-V silk slip dress, faux-fur stole, and oversized vintage sunglasses worn indoors.',
    groupChatEnergy: 'Sends 14 selfies to pick one caption, drops unhinged voice memos with breaking gossip, types in ALL CAPS.',
    signatureDrink: 'Vintage Champagne served in a crystal coupe with a maraschino cherry.',
    compatibility: {
      partnerInCrime: 'The Drama Queen herself (or Loyal Bestie who holds her purse while she dances)',
      polarOpposite: 'The Overachiever (who tries to assign action items to your dramatic soliloquies)',
    },
    metrics: {
      structure: 70,
      chill: 30,
      ambition: 80,
      drama: 100,
      warmth: 75,
    },
  },
  E: {
    id: 'loyal_bestie',
    key: 'E',
    title: 'The Loyal Bestie',
    subtitle: 'Soft, supportive, comfortable, and always there when you need a good hug.',
    vibe: 'Warm Emotional Security & Cloud-Soft Support',
    theme: {
      badgeBg: 'bg-amber-800',
      badgeText: 'text-amber-100',
      accent: '#92400e',
      glow: 'rgba(146, 64, 14, 0.15)',
      gradient: 'from-amber-950 via-warm-stone-900 to-stone-950',
      cardBorder: 'border-amber-200',
      cardBg: 'bg-amber-50/60',
    },
    quote: '“Take a breath, take off your shoes, and let me make you a cup of tea.”',
    overview:
      'You are the living embodiment of emotional safety, fresh bakery warmth, and the world\'s most reassuring hug. You hold everyone together with quiet grace, endless patience, and dependable softness.',
    superpower: 'Healing broken hearts, absorbing chaotic vibes, and always having spare hair ties & snacks.',
    kryptonite: 'Passive-aggressive people, stiff scratchy synthetic lace, and leaving gatherings without saying goodbye.',
    braPhilosophy: 'Soft, buttery, wire-free embrace that cradles without suffocating.',
    idealBraMatch: 'Ultra-plush memory foam contour bra with velvety seamless micro-wings.',
    signatureOutfit: 'Heavy gauge fisherman knit sweater, buttery-soft leggings, and warm wool socks.',
    groupChatEnergy: 'Checks in if someone went quiet, shares cute animal videos, reminds everyone to hydrate and eat dinner.',
    signatureDrink: 'Cinnamon spiced chai latte or a warm, comforting cocoa with homemade marshmallows.',
    compatibility: {
      partnerInCrime: 'The Free Spirit (pure gentle cozy energy together)',
      polarOpposite: 'Nobody, because even the Drama Queen needs a hug after her third meltdown.',
    },
    metrics: {
      structure: 50,
      chill: 85,
      ambition: 50,
      drama: 15,
      warmth: 100,
    },
  },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Your ideal Saturday morning starts with:',
    subtitle: 'The weekend has arrived. How do you rise and set the day’s tone?',
    options: [
      {
        key: 'A',
        text: 'A meticulously planned itinerary, a matcha latte, and checking off three personal goals before 10 AM.',
      },
      {
        key: 'B',
        text: 'Waking up whenever my body decides, throwing on oversized layers, and going on a 15 km walk with no destination.',
      },
      {
        key: 'C',
        text: 'Writing down five new KPIs for the week and figuring out how to optimize my personal workflow.',
      },
      {
        key: 'D',
        text: 'Hitting snooze four times, because rushing is for amateurs and my entrance needs to be anticipated.',
      },
      {
        key: 'E',
        text: 'Making coffee in bed, texting the group chat, and planning a cozy dinner party for my favorite people.',
      },
    ],
  },
  {
    id: 2,
    question: 'How do you handle an unexpected crisis at work or in life?',
    subtitle: 'The plan caught fire. Chaos is knocking. What is your immediate reaction?',
    options: [
      {
        key: 'A',
        text: 'Create a bulleted action plan with full contingency routing and execute it with cold, unbothered precision.',
      },
      {
        key: 'B',
        text: 'Wing it. Honestly, it usually works out or it becomes a funny story for later.',
      },
      {
        key: 'C',
        text: 'Double down, work twice as hard, and turn the crisis into a personal showcase of excellence.',
      },
      {
        key: 'D',
        text: 'Make it everyone else’s problem with high-volume theatrical flair until someone fixes it for me.',
      },
      {
        key: 'E',
        text: 'Take a deep breath, comfort everyone else involved, and quietly fix it behind the scenes.',
      },
    ],
  },
  {
    id: 3,
    question: 'Choose your signature fashion philosophy:',
    subtitle: 'When you open your wardrobe, what rules the aesthetic empire?',
    options: [
      {
        key: 'A',
        text: 'Structured lines, sharp tailoring, leather accents, and absolute control over the silhouette.',
      },
      {
        key: 'B',
        text: 'Comfort is queen. If I can\'t walk 25 kilometers in it, I am not wearing it.',
      },
      {
        key: 'C',
        text: 'Sharp, ambitious power-dressing that commands the room the second I step in.',
      },
      {
        key: 'D',
        text: 'Statement pieces only. If people aren\'t staring, what is even the point?',
      },
      {
        key: 'E',
        text: 'Soft textures, warm rich tones, cozy knits, and a touch of effortless class.',
      },
    ],
  },
  {
    id: 4,
    question: 'What is your role in a group chat?',
    subtitle: 'Notifications are blowing up. Who are you in the digital circle?',
    options: [
      {
        key: 'A',
        text: 'The coordinator who locks down the restaurant reservation, books the tickets, and manages the calendar.',
      },
      {
        key: 'B',
        text: 'The chaotic voice-note sender who hasn\'t read the last 400 messages but is down for whatever plan.',
      },
      {
        key: 'C',
        text: 'The one setting high standards, sharing career wins, and pushing everyone to level up.',
      },
      {
        key: 'D',
        text: 'The one dropping the tea, the gossip, and the best selfies.',
      },
      {
        key: 'E',
        text: 'The mom friend making sure everyone got home safe and ate enough protein.',
      },
    ],
  },
  {
    id: 5,
    question: 'How do you feel about underwire?',
    subtitle: 'The ultimate intimate apparel philosophical debate. Where do you stand?',
    options: [
      {
        key: 'A',
        text: 'Necessary for structural integrity and high-stakes environments.',
      },
      {
        key: 'B',
        text: 'An instrument of medieval torture. Abolished.',
      },
      {
        key: 'C',
        text: 'A tool for peak performance and maximum elevation. We rise to the occasion.',
      },
      {
        key: 'D',
        text: 'Only if it sparkles, pushes things up to my collarbone, and causes minor breathing difficulties.',
      },
      {
        key: 'E',
        text: 'A polite suggestion, but freedom is better.',
      },
    ],
  },
];
