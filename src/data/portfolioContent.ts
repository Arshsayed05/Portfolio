export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'DATA ANALYSIS' | 'CREATIVE TECH';
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholderVisual: boolean;
  visualType: 'cnn-diagram' | 'nlp-matrix' | 'data-distribution';
  keyHighlights: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  badge?: string;
  title: string;
  organization?: string;
  description: string;
  details: string[];
  category: 'esports' | 'academic' | 'community' | 'technical';
}

export interface SkillCategory {
  category: string;
  categoryCode: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface AchievementItem {
  id: string;
  index: string;
  title: string;
  entity: string;
  type: string;
  year: string;
  verified: boolean;
  notes: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Arsh Kasim Sayed",
    brandName: "ARSH.",
    headline: "ENGINEERED TO THINK. BUILT TO CREATE.",
    heroStatement: "NOT JUST ONE THING.",
    supportingStatement: "Technology, competition and creativity. Different worlds. One mind.",
    role: "Computer Science Engineering Student & Creative Builder",
    institution: "NMAM Institute of Technology, Nitte",
    location: "India",
    countryCode: "IN",
    timezone: "Asia/Kolkata",
    availability: "AVAILABLE FOR INTERESTING OPPORTUNITIES",
    availabilityStatus: "active", // 'active' | 'limited' | 'busy'
    bioIntro: "I'm a Computer Science Engineering student exploring the intersection of technology, competitive gaming, creativity and community building.",
    aboutParagraphs: [
      "I'm Arsh Kasim Sayed, a Computer Science Engineering student at NMAM Institute of Technology, Nitte.",
      "I'm interested in more than just writing code. I enjoy understanding how things work, building projects, exploring technology, competing in esports and bringing people together around shared ideas.",
      "From experimenting with AI-based projects to managing competitive gaming teams and building a collegiate esports community, I enjoy turning ideas into something tangible.",
      "I believe the best experiences happen when technology, creativity and execution come together."
    ],
    editorialPullQuote: "The best experiences happen when technology, creativity and execution come together.",
  },

  socials: {
    github: "https://github.com/Simsayed",
    linkedin: "https://www.linkedin.com/in/arshsayed/", // Clearly labeled editable placeholder
    instagram: "https://www.instagram.com/arshsayed/", // Clearly labeled editable placeholder
    email: "arshkasimsayed@gmail.com", // Contact email & mailto fallback
    portfolioRepo: "https://github.com/Simsayed",
  },

  dimensions: [
    {
      id: "engineer",
      code: "DIMENSION 01",
      title: "THE ENGINEER",
      subtitle: "THINK. BUILD. EXPERIMENT.",
      description: "My technical journey revolves around computer science, software development, AI and machine learning. I enjoy learning new technologies and turning concepts into working projects.",
      quote: "Turning conceptual logic and machine learning models into reliable, functional digital systems.",
      coreFocus: [
        "Computer Science Foundations",
        "Machine Learning & Deep Learning (CNN)",
        "Software Engineering & Architecture",
        "Data Analysis & Pattern Discovery",
        "Full-Stack Web Development",
      ],
      technologies: [
        "Python", "Java", "JavaScript", "Machine Learning", 
        "CNN (Convolutional Neural Networks)", "MongoDB", "SQL", "Data Analysis", "Web Development"
      ],
      meta: {
        specLabel: "SYS // COMPUTATION",
        activeFocus: "Neural Architectures & Application Engineering",
        academicBase: "Dept. of CSE, NMAMIT Nitte"
      }
    },
    {
      id: "competitor",
      code: "DIMENSION 02",
      title: "THE COMPETITOR",
      subtitle: "BUILT FOR THE GAME.",
      description: "Competitive gaming has taught me discipline, teamwork, strategic thinking and the importance of execution under pressure.",
      quote: "Split-second decision making, resource allocation, and maintaining composure when every millisecond counts.",
      coreFocus: [
        "BGMI Competitive Circuit Player & Captain",
        "Team Ownership & Tactical Leadership (XTREME PHOENIX)",
        "High-Pressure LAN Tournament Play",
        "Roster Scouting & Macro Strategy Formulations",
        "Tournament Operations & Competitive Analysis",
      ],
      technologies: [
        "BGMI Competitive", "LAN Tournaments", "Team Leadership", 
        "Strategic Shotcalling", "Esports Analytics", "High-Stress Composure"
      ],
      verifiedAchievements: [
        "LAN Tournament Runner-up",
        "Champions League Runner-up",
        "Owner & Leader — XTREME PHOENIX",
      ],
      meta: {
        specLabel: "OPS // COMPETITIVE",
        inGameTitle: "XTREME PHOENIX Owner",
        esportsSince: "2018 (Competitive 2020)"
      }
    },
    {
      id: "builder",
      code: "DIMENSION 03",
      title: "THE BUILDER",
      subtitle: "IDEAS NEED PEOPLE.",
      description: "I believe communities grow when people with shared interests get the opportunity to collaborate, compete and create something meaningful.",
      quote: "Collegiate esports is more than just tournaments; it's creating an institutional platform where talent finds its arena.",
      coreFocus: [
        "Founder of AFTER HOURS — Collegiate Esports Club, NMAMIT Nitte",
        "Building Institutional Esports Infrastructure",
        "Recruitment, Selection & Cross-Functional Team Leadership",
        "End-to-End Campus Tournament Planning & Live Operations",
        "PC and Mobile Gaming Community Incubation",
      ],
      technologies: [
        "Community Architecture", "Collegiate Esports", "Event Operations", 
        "Talent Scouting", "Campus Tournaments", "Brand Direction"
      ],
      meta: {
        specLabel: "ORG // FOUNDATION",
        initiative: "AFTER HOURS Collegiate Club",
        campus: "NMAM Institute of Technology, Nitte"
      }
    }
  ],

  projects: [
    {
      id: "sign-language",
      number: "001",
      title: "AI-BASED SIGN LANGUAGE RECOGNITION SYSTEM",
      subtitle: "CNN Translation & Gesture Classification for Kannada",
      category: "AI & ML",
      description: "A Kannada-focused sign language recognition and translation project using Convolutional Neural Networks.",
      longDescription: "Developed an assistive deep learning model designed to bridge communication barriers by translating Kannada sign language gestures into textual and understandable format using Convolutional Neural Networks (CNNs). Explored custom feature extraction, preprocessing of spatial coordinate images, and multi-class classification.",
      technologies: ["Python", "CNN", "Machine Learning", "OpenCV", "TensorFlow / Keras"],
      metrics: [
        "Specialized Kannada Language Gesture Set",
        "Multi-layer CNN Feature Extraction",
        "Real-Time Image Preprocessing Pipeline"
      ],
      githubUrl: "https://github.com/Simsayed/Kannada-sign-language-translation.git",
      isPlaceholderVisual: true,
      visualType: "cnn-diagram",
      keyHighlights: [
        "Trained on region-specific regional sign datasets",
        "Optimized CNN architecture for fast spatial inference",
        "Designed to assist non-verbal regional communication"
      ]
    },
    {
      id: "fake-news",
      number: "002",
      title: "FAKE NEWS CLASSIFICATION",
      subtitle: "NLP & Supervised Machine Learning Verification",
      category: "AI & ML",
      description: "A machine learning project focused on classifying potentially misleading or fake news.",
      longDescription: "Engineered an intelligent text classification model utilizing natural language processing techniques and supervised machine learning algorithms to detect anomalies, factual inconsistency markers, and linguistic cues indicative of fake news reports across diverse media articles.",
      technologies: ["Machine Learning", "Python", "Data Analysis", "NLP", "Scikit-Learn"],
      metrics: [
        "Corpus Tokenization & Vectorization",
        "Supervised Binary & Multiclass Classification",
        "Confusion Matrix Precision-Recall Optimization"
      ],
      githubUrl: "https://github.com/Simsayed", // Profile fallback
      isPlaceholderVisual: true,
      visualType: "nlp-matrix",
      keyHighlights: [
        "Text preprocessing: TF-IDF vectorization, stopword removal, stemming",
        "Benchmarked multiple ML classifiers for accuracy and generalization",
        "Explored lexical feature importance for misleading claim detection"
      ]
    },
    {
      id: "student-performance",
      number: "003",
      title: "STUDENT PERFORMANCE ANALYSIS",
      subtitle: "Exploratory Data Analysis & Predictive Academic Modeling",
      category: "DATA ANALYSIS",
      description: "A data-oriented project focused on exploring student performance and identifying relevant patterns.",
      longDescription: "Conducted extensive exploratory data analysis (EDA) and predictive modeling on multi-dimensional academic datasets to discover correlation patterns between study habits, socio-demographic indicators, attendance rates, and examination outcomes.",
      technologies: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Seaborn"],
      metrics: [
        "Multi-variable Correlation Matrices",
        "Feature Importance Distribution",
        "Interactive Visual Data Insights"
      ],
      githubUrl: "https://github.com/Simsayed", // Profile fallback
      isPlaceholderVisual: true,
      visualType: "data-distribution",
      keyHighlights: [
        "Comprehensive statistical hypothesis testing and bivariate distributions",
        "Identified key lagging indicators impacting academic performance",
        "Rendered clear graphical insights for institutional interventions"
      ]
    }
  ] as Project[],

  timeline: [
    {
      id: "t-2018",
      year: "2018",
      badge: "ORIGIN",
      title: "Inception of Gaming Journey",
      organization: "Personal Milestone",
      description: "Started playing mobile and competitive tactical titles. Developed keen reflexes, game sense, and deep fascination with competitive digital environments.",
      details: [
        "Explored mechanics of high-tier competitive mobile titles",
        "Fostered interest in digital strategy and system mastery",
        "Laid the initial groundwork for team play and communication"
      ],
      category: "esports"
    },
    {
      id: "t-2020",
      year: "2020",
      badge: "CIRCUIT",
      title: "Entered Competitive Gaming",
      organization: "Esports Circuit",
      description: "Stepped into competitive scrims and grassroots tournaments. Transitioned from casual play to structured tactical teamwork.",
      details: [
        "Began structured tournament scrims and roster coordination",
        "Analyzed competitive meta and positioning strategies",
        "Cultivated personal discipline under high-pressure scenarios"
      ],
      category: "esports"
    },
    {
      id: "t-2020-onward",
      year: "2020+",
      badge: "EXPANSION",
      title: "Esports Development & Tournament Play",
      organization: "Regional & Online Circuits",
      description: "Developed deep competitive esports experience, competing consistently across organized tournaments and leagues.",
      details: [
        "Regular participation in organized BGMI tournament brackets",
        "Mastered in-game communications and rotative tactical decision making",
        "Formed connections across the Indian competitive gaming community"
      ],
      category: "esports"
    },
    {
      id: "t-phoenix",
      year: "PHOENIX",
      badge: "OWNERSHIP",
      title: "Ownership & Leadership of XTREME PHOENIX",
      organization: "XTREME PHOENIX BGMI Team",
      description: "Assumed ownership and management leadership of XTREME PHOENIX, guiding the squad through rigorous tournament brackets.",
      details: [
        "Managed player rosters, practice schedules, and strategy debriefs",
        "Led team through high-stakes competitive matches",
        "Attained verified podium finishes including LAN & Champions League runner-ups"
      ],
      category: "esports"
    },
    {
      id: "t-after-hours",
      year: "COMMUNITY",
      badge: "FOUNDER",
      title: "Founded AFTER HOURS Collegiate Esports Club",
      organization: "NMAMIT Nitte",
      description: "Founded the premier collegiate esports club at NMAM Institute of Technology to give student gamers an institutional platform.",
      details: [
        "Built team structure covering PC and mobile competitive titles",
        "Established transparent talent recruitment and selection protocols",
        "Orchestrated campus-wide esports events, tournaments, and community gatherings"
      ],
      category: "community"
    },
    {
      id: "t-present",
      year: "PRESENT",
      badge: "HORIZON",
      title: "Engineering, Building & Scaling",
      organization: "Academic & Tech Pursuits",
      description: "Continuing to develop technical depth in Computer Science, deploy AI/ML projects, and foster thriving creative ecosystems.",
      details: [
        "Deepening computer science knowledge in algorithms, ML, and software architecture",
        "Building innovative creative-technology and full-stack projects",
        "Ready for impactful internships and collaborative engineering ventures"
      ],
      category: "technical"
    }
  ] as TimelineItem[],

  skills: [
    {
      category: "PROGRAMMING",
      categoryCode: "01 // CODE",
      description: "Core languages used for algorithmic problem solving, backend systems, and application architecture.",
      skills: [
        { name: "Python", level: "Core", focus: "Data Analysis, ML Pipelines, Automation, Scripting" },
        { name: "Java", level: "Proficient", focus: "Object-Oriented Programming, Data Structures, Systems" },
        { name: "JavaScript", level: "Proficient", focus: "Modern ES6+, Web Interfaces, Async Architectures" },
        { name: "SQL", level: "Competent", focus: "Relational Queries, Schema Design, Data Manipulation" },
      ]
    },
    {
      category: "TECHNOLOGY",
      categoryCode: "02 // TECH",
      description: "Frameworks, artificial intelligence architectures, databases, and development tooling.",
      skills: [
        { name: "Machine Learning", level: "Applied", focus: "Supervised Learning, Model Evaluation, Scikit-Learn" },
        { name: "CNN (Deep Learning)", level: "Applied", focus: "Convolutional Networks, Computer Vision, Image Classification" },
        { name: "MongoDB", level: "Familiar", focus: "Document Store, NoSQL Collections, CRUD Integration" },
        { name: "Data Analysis", level: "Applied", focus: "Pandas, NumPy, Statistical Distributions, Matplotlib" },
        { name: "Web Development", level: "Applied", focus: "React, TypeScript, Tailwind CSS, Responsive Design" },
      ]
    },
    {
      category: "CREATIVE",
      categoryCode: "03 // DESIGN",
      description: "Visual communication, digital aesthetics, editorial layout, and brand thinking.",
      skills: [
        { name: "Branding", level: "Practitioner", focus: "Identity Systems, Visual Cohesion, Typographic Voice" },
        { name: "UI/UX", level: "Practitioner", focus: "Grid Architecture, User Journeys, Brutalist Editorial Design" },
        { name: "Graphic Design", level: "Practitioner", focus: "Poster Layouts, Typographic Hierarchies, Contrast Systems" },
        { name: "Content Creation", level: "Practitioner", focus: "Esports Media, Community Announcements, Digital Assets" },
      ]
    },
    {
      category: "LEADERSHIP",
      categoryCode: "04 // OPERATIONS",
      description: "Execution, community governance, esports roster management, and event logistics.",
      skills: [
        { name: "Team Management", level: "Experienced", focus: "Roster Morale, Conflict Resolution, Strategy Alignment" },
        { name: "Event Management", level: "Experienced", focus: "Campus Tournaments, Live Brackets, Logistics Execution" },
        { name: "Community Building", level: "Founder", focus: "Collegiate Club Growth, Member Engagement, Retention" },
        { name: "Esports Operations", level: "Experienced", focus: "Tournament Scrims, Rulebooks, Stage Management" },
      ]
    }
  ] as SkillCategory[],

  achievements: [
    {
      id: "lan-runner-up",
      index: "01",
      title: "LAN Tournament Runner-up",
      entity: "BGMI Competitive LAN Event",
      type: "Esports Verified Podium",
      year: "Competitive Season",
      verified: true,
      notes: "Secured 2nd place in an intensive on-ground LAN competition under live crowd and pressure conditions."
    },
    {
      id: "champions-league",
      index: "02",
      title: "Champions League Runner-up",
      entity: "Competitive Esports League",
      type: "Esports Verified Podium",
      year: "Competitive Season",
      verified: true,
      notes: "Achieved runner-up status against top regional squads through multi-week point accumulation."
    },
    {
      id: "phoenix-owner",
      index: "03",
      title: "Owner & Team Leader",
      entity: "XTREME PHOENIX",
      type: "Organizational Leadership",
      year: "Ongoing",
      verified: true,
      notes: "Directing competitive strategy, roster cultivation, and tournament registrations for BGMI squad."
    },
    {
      id: "after-hours-founder",
      index: "04",
      title: "Founder & Community Lead",
      entity: "AFTER HOURS Collegiate Esports Club",
      type: "Institution Building",
      year: "NMAMIT Nitte",
      verified: true,
      notes: "Founded and established the institutional collegiate esports organization for campus gamers."
    },
    {
      id: "ai-academic",
      index: "05",
      title: "Developer of AI Academic Projects",
      entity: "Dept. of Computer Science & Engineering",
      type: "Technical Innovation",
      year: "NMAMIT",
      verified: true,
      notes: "Engineered deep learning solutions including Kannada Sign Language recognition using CNNs."
    }
  ] as AchievementItem[],
};
