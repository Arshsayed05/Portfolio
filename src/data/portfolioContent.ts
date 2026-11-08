export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'CREATIVE TECH' | 'SOFTWARE SYSTEMS';
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholderVisual: boolean;
  visualType: 'esports-hud' | 'terminal-matrix' | 'socket-network';
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
    availabilityStatus: "active",
    bioIntro: "I'm a Computer Science Engineering student exploring the intersection of technology, competitive gaming, creativity and community building.",
    aboutParagraphs: [
      "I'm Arsh Kasim Sayed, a Computer Science Engineering student at NMAM Institute of Technology, Nitte.",
      "I'm interested in more than just writing code. I enjoy understanding how things work, building projects, exploring technology, competing in esports and bringing people together around shared ideas.",
      "From engineering web architectures and network socket systems to managing competitive gaming teams and founding a collegiate esports community, I enjoy turning ideas into something tangible.",
      "I believe the best experiences happen when technology, creativity and execution come together."
    ],
    editorialPullQuote: "The best experiences happen when technology, creativity and execution come together.",
  },

  socials: {
    github: "https://github.com/Arshsayed05",
    githubUsername: "Arshsayed05",
    linkedin: "https://www.linkedin.com/in/arshsayed/", // Clearly labeled editable placeholder
    instagram: "https://www.instagram.com/arshsayed/", // Clearly labeled editable placeholder
    email: "arshkasimsayed@gmail.com", // Contact email & mailto fallback
    portfolioRepo: "https://github.com/Arshsayed05/Portfolio",
    portfolioLive: "https://arshsayeddev.vercel.app",
    afterHoursLive: "https://afterhoursnmamit.vercel.app",
  },

  dimensions: [
    {
      id: "engineer",
      code: "DIMENSION 01",
      title: "THE ENGINEER",
      subtitle: "THINK. BUILD. EXPERIMENT.",
      description: "My technical journey revolves around computer science, software development, web engineering, and networking. I enjoy learning new technologies and turning concepts into working projects.",
      quote: "Turning conceptual logic, network protocols, and frontend architectures into reliable, functional digital systems.",
      coreFocus: [
        "Computer Science Foundations",
        "Frontend & Creative Web Engineering",
        "Low-Level Socket Programming & TCP/IP",
        "Object-Oriented Software Architecture",
        "Full-Stack Web Development",
      ],
      technologies: [
        "Python", "Java", "JavaScript", "TypeScript", 
        "React", "Node.js", "Socket Programming", "SQL", "Tailwind CSS"
      ],
      meta: {
        specLabel: "SYS // COMPUTATION",
        activeFocus: "Full-Stack Development & Interactive Systems",
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
        "Built Official Web Platform (afterhoursnmamit.vercel.app)",
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
      id: "after-hours",
      number: "001",
      title: "AFTER HOURS — COLLEGIATE ESPORTS PLATFORM",
      subtitle: "Scroll-Driven Video Experience & Collegiate Esports Operations",
      category: "CREATIVE TECH",
      description: "The official web platform and digital headquarters for AFTER HOURS, the premier collegiate esports club at NMAMIT Nitte, featuring scroll-driven video scrubbing and roster management.",
      longDescription: "Architected and engineered the official digital headquarters for AFTER HOURS Collegiate Esports Club at NMAMIT Nitte. Built with a production-grade cinematic scroll experience utilizing frame-accurate video scrubbing, dynamic stage HUD overlays, real-time tournament scheduling, and collegiate player roster management.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Video Scrubbing", "Vercel"],
      metrics: [
        "Smooth 60fps Keyframe-Optimized Video Scrubbing",
        "Collegiate Roster & Tournament Bracket Architecture",
        "Live Stage Progression HUD (Corridor → Arena Reveal)"
      ],
      githubUrl: "https://github.com/Arshsayed05/AFTER-HOURS",
      liveUrl: "https://afterhoursnmamit.vercel.app",
      isPlaceholderVisual: false,
      visualType: "esports-hud",
      keyHighlights: [
        "Engineered scroll-scrubbed intra-frame video playback synchronized with scroll distance",
        "Dynamic roster showcase covering PC and mobile competitive squads",
        "Production-deployed on Vercel at afterhoursnmamit.vercel.app"
      ]
    },
    {
      id: "arsh-portfolio",
      number: "002",
      title: "ARSH. — SWISS BRUTALIST DIGITAL IDENTITY",
      subtitle: "Experimental Typographic Portfolio with Interactive CLI & Web Audio",
      category: "CREATIVE TECH",
      description: "An experimental personal portfolio combining Swiss International Typographic Style, modern brutalist design, interactive 3D kinetic geometry, and an operational CLI shell.",
      longDescription: "Conceptualized and engineered a non-template personal portfolio for Arsh Kasim Sayed. Features mathematical 12-column Swiss modular grids, synthesized Web Audio tactile feedback, an interactive real-time terminal shell with custom commands, dynamic coordinate tracking cursor, and live Indian Standard Time synchronization.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API", "Canvas 2D", "Vercel"],
      metrics: [
        "100% Client-Synthesized Mechanical Click Audio",
        "Interactive Terminal Shell with Command Parser",
        "Kinetic 3D Geometric Vector Projection Canvas"
      ],
      githubUrl: "https://github.com/Arshsayed05/Portfolio",
      liveUrl: "https://arshsayeddev.vercel.app",
      isPlaceholderVisual: false,
      visualType: "terminal-matrix",
      keyHighlights: [
        "Lightweight Canvas 2D isometric wireframe engine with zero heavy 3D library overhead",
        "Interactive easter egg terminal accessible via hotkey (~) or navigation bar",
        "Disciplined typographic hierarchy based on Swiss graphic design principles"
      ]
    },
    {
      id: "python-socket-chat",
      number: "003",
      title: "PYTHON MULTI-CLIENT SOCKET CHAT SYSTEM",
      subtitle: "Low-Level TCP/IP Network Communication & Concurrency",
      category: "SOFTWARE SYSTEMS",
      description: "A concurrent multi-client messaging system engineered with Python socket programming and low-level TCP/IP network protocols.",
      longDescription: "Engineered a low-level socket communication suite in Python enabling real-time bidirectional message distribution between multiple concurrent clients and a centralized server. Implemented multi-threading for handling asynchronous socket connections, packet serialization, connection handshakes, and graceful disconnect fallbacks.",
      technologies: ["Python", "Socket Programming", "TCP/IP", "Multi-threading", "Network Protocols"],
      metrics: [
        "Multi-Threaded Concurrent Client Handlers",
        "Full-Duplex TCP Socket Streams",
        "Custom Protocol Packet Framing & Broadcast"
      ],
      githubUrl: "https://github.com/Arshsayed05/Arsh-s-website",
      liveUrl: undefined,
      isPlaceholderVisual: false,
      visualType: "socket-network",
      keyHighlights: [
        "Utilized Python socket library for raw TCP transport layer management",
        "Threaded server listener to distribute messages across active client sessions without latency",
        "Robust exception handling for abrupt socket termination and connection pooling"
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
      title: "Founded AFTER HOURS & Built Web Platform",
      organization: "NMAMIT Nitte",
      description: "Founded the premier collegiate esports club at NMAM Institute of Technology and engineered its official web platform.",
      details: [
        "Built team structure covering PC and mobile competitive titles",
        "Engineered the official scroll-driven website (afterhoursnmamit.vercel.app)",
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
      description: "Continuing to develop technical depth in Computer Science, deploy full-stack and creative web projects, and foster thriving digital ecosystems.",
      details: [
        "Deepening computer science knowledge in algorithms, software systems, and web architectures",
        "Building innovative creative-technology and full-stack projects",
        "Open for impactful software engineering internships and collaborative ventures"
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
        { name: "Python", level: "Core", focus: "Socket Programming, Scripting, Automation, Backend Logic" },
        { name: "Java", level: "Proficient", focus: "Object-Oriented Programming, Data Structures, Systems" },
        { name: "JavaScript / TypeScript", level: "Proficient", focus: "Modern ES6+, React, Async Architectures, Typing" },
        { name: "SQL", level: "Competent", focus: "Relational Queries, Schema Design, Data Manipulation" },
      ]
    },
    {
      category: "TECHNOLOGY",
      categoryCode: "02 // TECH",
      description: "Modern frameworks, networking protocols, development tooling, and cloud deployment platforms.",
      skills: [
        { name: "React & Vite", level: "Applied", focus: "Component Architecture, Hooks, State Management, Fast Builds" },
        { name: "Tailwind CSS", level: "Applied", focus: "Design Systems, Swiss Brutalist Layouts, Responsive UI" },
        { name: "Socket Programming", level: "Applied", focus: "TCP/IP, Network Handshakes, Multi-Threaded Streaming" },
        { name: "Web Audio API", level: "Applied", focus: "Synthesized UI Soundscapes, Real-Time Audio Feedback" },
        { name: "Git & Vercel", level: "Applied", focus: "Version Control, Continuous Deployment, Edge Hosting" },
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
      id: "after-hours-platform",
      index: "05",
      title: "Architect of AFTER HOURS Web Platform",
      entity: "afterhoursnmamit.vercel.app",
      type: "Web Engineering",
      year: "2026",
      verified: true,
      notes: "Engineered and deployed the official scroll-driven video platform and digital headquarters for AFTER HOURS."
    }
  ] as AchievementItem[],
};
