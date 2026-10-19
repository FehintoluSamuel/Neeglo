/* ============================================================
   Content layer.
   Copy lives here so the pages stay presentational. Names,
   roles, dates and project details are the source of truth;
   reword freely, but keep the facts straight.
   ============================================================ */

export const brand = {
  name: "Neeglo",
  legalName: "Neeglo", // registration details still to add
  tagline: "Build for the long run.",
  descriptor: "An independent software company",
  founded: 2026,
  companyNumber: "",
  address: {
    line1: "An independent software company",
    line2: "Lagos · Abakaliki · Enugu, Nigeria",
    country: "Nigeria",
  },
  email: "hello@glenur.tech", // to move to the neeglo domain
  emailGeneral: "hello@glenur.tech",
  responseTime: "within 48 hours",
};

export const companyIntro = {
  title: "The Tech Team behind Neeglo",
  paras: [
    "Neeglo is an independent tech team that builds practical technology for real problems. We are engineers, designers, and product builders across Lagos, Abakaliki and Enugu, Nigeria, working together to turn ideas into reliable, usable products.",
    "We build tech products across fashion tech, edtech, fintech, teletech and more. Beyond our own products, we offer tech consultancy, help clients develop their ideas into projects - from market research and analysis to design, engineering, deployment, and maintenance - and we also teach tech to help people grow and build confidently.",
    "Our first product, TrendySize, takes the guesswork out of fashion measurement. It reaches its first pilot vendors in October 2026.",
  ],
};

export const teamOrg = [
  { k: "Company", v: "Independent · founded 2026" },
  { k: "Team", v: "Six co-founders · three disciplines" },
  { k: "Based", v: "Lagos · Abakaliki · Enugu" },
  { k: "First product", v: "TrendySize · pilot late Oct 2026" },
];


export const images = {
  heroLab: "/images/hero-lab.webp",
  teamWhiteboard: "/images/team-whiteboard.webp",
  dataCenter: "/images/data-center.webp",
};

export const nav = [
  { id: "home", label: "Home", href: "/index.html" },
  { id: "products", label: "Products", href: "/products.html" },
  { id: "team", label: "Team", href: "/team.html" },
  { id: "work", label: "Work", href: "/work.html" },
  { id: "company", label: "Company", href: "/company.html" },
  { id: "contact", label: "Contact", href: "/contact.html" },
];

export const homeProblem = {
  eyebrow: "The problem",
  title: "What I ordered vs. what I got",
  paras: [
    "Made-to-measure clothing usually fails at one point: the measurements. They are taken by hand, sent over chat as a few numbers, and re-checked before anything is cut. When one of those numbers is wrong the garment comes back for alterations, and the vendor pays for the extra time and fabric.",
    "We spoke to 15 customers and six vendors in May and June 2026. Almost all of them had a story about a garment that did not fit, and the cost usually fell on the person making the clothes.",
  ],
};

export const homeFor = {
  eyebrow: "Who it's for",
  title: "Fashion vendors who sell made-to-measure",
  paras: [
    "TrendySize is for the people who take the orders and the measurements: online clothing vendors and small workshops, usually working from a phone.",
    "Every order gets its own link, so a vendor can collect what they need before anything is cut. The record stays on file for that customer's next order.",
  ],
};

export const howItWorks = [
  {
    t: "Send the link",
    d: "Add the customer and share their link over WhatsApp, SMS or email. The customer installs nothing.",
  },
  {
    t: "They fill it in",
    d: "The link opens in any phone browser. The customer enters their details and takes the photos the form asks for. No account needed.",
  },
  {
    t: "The record appears",
    d: "TrendySize estimates the measurements from the photos and saves them to the vendor's dashboard for the next order.",
  },
];

export const productFeatures = [
  {
    t: "A link per order",
    d: "Each order gets its own link, shareable wherever the vendor already talks to customers.",
  },
  {
    t: "A form with no sign-up",
    d: "Customers submit from a phone browser. There is nothing to install.",
  },
  {
    t: "A record you can search",
    d: "Every customer's measurements and notes in one place, saved for next time.",
  },
  {
    t: "Photo-based estimates",
    d: "A Python service estimates measurements from the photos the customer sends. Treat it as a first pass, and confirm with a tape measure when it matters.",
  },
];

export const productNote =
  "TrendySize estimates measurements from photographs. It is there to save time, but a tape measure is still more exact.";

export const stats = [
  {
    k: "Customers who had received clothes that did not fit",
    v: "12 of 15",
    sub: "surveyed May and June 2026",
  },
  {
    k: "Vendors who wanted a digital way to measure",
    v: "4 of 6",
    sub: "surveyed in 2026",
  },
  {
    k: "Vendors who had lost time or money to a wrong size",
    v: "6 of 6",
    sub: "surveyed in 2026",
  },
];

export const partners = [
  "TrendySize pilot · late October 2026",
  "NDPR-aligned data handling",
];

export const team = [
  {
    id: 1,
    name: "Gloria Ibeneme",
    role: "Technical Product Manager",
    location: "Lagos, Nigeria",
    since: "2026",
    img: "/images/founders_images/Gloria_Ibeneme.webp",
    bio: "Technical Product Manager with a BSc in Entrepreneurship & Business Management and a PM certificate from Ensign College. Coordinates product planning, timelines and delivery at TrendySize, and hosts ICT CareerTalks on AI and technology careers - covered by the News Agency of Nigeria.",
    focus: "Product planning, project execution, community & events",
    links: {
      github: "",
      linkedin: "www.linkedin.com/in/gloria-ibeneme",
    },
  },
  {
    id: 2,
    name: "Uchenna Oji Okoro",
    role: "Product Designer",
    location: "Abakaliki, Nigeria",
    since: "2026",
    img: "/images/founders_images/Uchenna_Oji_2.webp",
    bio: "Product Designer focused on clean, user-centred product design. Experienced in Figma, user research and prototyping for web and mobile products.",
    focus: "Product design, Figma, design systems",
    links: {
      github: "",
      linkedin: "www.linkedin.com/in/uchenna-oji-okoro-61052a3b7",
    },
  },
  {
    id: 3,
    name: "Okpube Nnaemeka",
    role: "Frontend Engineer",
    location: "Enugu, Nigeria",
    since: "2026",
    img: "/images/founders_images/Okpube_Nnaemeka.webp",
    bio: "Frontend engineer building the TrendySize web experience.",
    focus: "React, front-end, interfaces",
    links: {
      github: "",
      linkedin: "ng.linkedin.com/in/nnaemeka-okpube-363a14279",
    },
  },
  {
    id: 4,
    name: "Fehintolu Samuel",
    role: "Team Lead - Engineer",
    location: "Lagos, Nigeria",
    since: "2026",
    img: "/images/founders_images/Fehintolu_Samuel.webp",
    bio: "Software and machine-learning engineer leading the TrendySize engineering build. At DM Holdings he engineered WiKeep, an automated macOS network-recovery tool, and he applies AI to biomedical problems.",
    profile:
      "Abdulraheem Fehintolu Samuel is a software developer and machine-learning engineer with a background in Metallurgical and Materials Engineering. He leads the TrendySize engineering team - owning sprint planning, code review and technical delivery - and personally built the Python computer-vision microservice that extracts body measurements from customer images. At DM Holdings he supports enterprise C# and SQL Server systems, where he engineered an automated macOS network-recovery solution that removed three manual IT interventions per week. He has research experience in computational neuroscience through the ThinkNeuro programme at the University of California, Berkeley, and contributes to disease-detection solutions as part of The Metalysix team.",
    credentials: [
      "B.Eng. Metallurgical & Materials Engineering - Second Class Upper",
      "Data Science - WorldQuant University",
      "Python for AI - Harvard Extension School",
      "Python Programming (Distinction) - Development Centre (UK)",
    ],
    experience: [
      "Neeglo · TrendySize - Team Lead & Engineer (2026–present)",
      "DM Holdings - IT Support Graduate Trainee (2026–present)",
      "CyArt Tech - ML Engineer intern: CNN defect-detection and ensemble models (2025–2026)",
      "TheSkillsForge - Data Analyst (2025)",
      "Parity Digital Academy - Software Development Tutor (2026)",
    ],
    achievements: [
      "Built WiKeep, a macOS self-recovery app validated on 3 production Macs - recovering automatically since deployment",
      "Architected Northbound Sessions on Azure with a zero-manual GitHub Actions pipeline",
      "CNN defect-detection pipeline cut inspection time by ~30%",
      "Published technical articles on machine learning",
    ],
    articles: [
      {
        title:
          "The Sigmoid Function: a humble equation that changed machine learning forever",
        url: "https://medium.com/@fehintolusamuel/the-sigmoid-function-a-humble-equation-that-changed-machine-learning-forever-f0c0a6ceabfb",
      },
      {
        title: "Linear Regression: the simple math behind smart decisions",
        url: "https://medium.com/@fehintolusamuel/linear-regression-the-simple-math-behind-smart-decisions-709019ed9d3f",
      },
    ],
    focus: "Architecture, delivery, technical mentoring",
    links: {
      github: "github.com/FehintoluSamuel",
      linkedin: "www.linkedin.com/in/fehintolu-samuel",
    },
  },
  {
    id: 5,
    name: "Esther Ibitoye",
    role: "Backend Engineer",
    location: "Lagos, Nigeria",
    since: "2026",
    img: "/images/founders_images/Ibitoye_Esther.webp",
    bio: "Backend engineer on TrendySize - Laravel APIs, PostgreSQL schema and auth. A COREN-registered Electrical & Electronic engineer who previously built notification systems and a digital co-operative app at Bytelabs.",
    profile:
      "Esther Ibitoye is a backend developer with an academic background in Electrical and Electronic Engineering (Telecommunications option) and COREN registration. On TrendySize she designs and maintains the Laravel/PHP REST APIs, business logic, authentication and PostgreSQL data layer, and containerised the backend with Docker for a Kubernetes deployment path. She brings a systems-level foundation - API testing, CI/CD and server-side performance - from her previous backend roles.",
    credentials: [
      "Electrical & Electronic Engineering (Telecommunications option)",
      "COREN - registered engineer",
      "Docker, CI/CD (GitHub Actions, Jenkins), AWS, DigitalOcean",
    ],
    experience: [
      "Neeglo · TrendySize - Backend Developer (2026–present)",
      "Bytelabs Technology - Backend Developer, NYSC (2025)",
      "Mango Entertainment - Backend Developer / Intern (2024–2025)",
    ],
    achievements: [
      "Containerised the TrendySize Laravel backend with Docker and prepared it for Kubernetes",
      "Built and deployed a notification module for reliable system alerts and transactional messages",
      "Implemented SQL models and secure data handling for a digital co-operative application",
    ],
    focus: "APIs, databases, integrations",
    links: {
      github: "github.com/OyinladeIbitoye",
      linkedin: "www.linkedin.com/in/ibitoye-esther-795394216",
    },
  },
  {
    id: 6,
    name: "Eunice Akpa",
    role: "Product Designer",
    location: "Abakaliki, Nigeria",
    since: "2026",
    img: "/images/founders_images/Akpa_Eunice.webp",
    bio: "First-class Crop Science graduate and Best Graduating Student (CGPA 4.74/5.00). Works across the TrendySize product with a background in operations, records and customer experience.",
    profile:
      "Eunice Akpa is a first-class graduate of Crop Science (CGPA 4.74/5.00) and a Best Graduating Student in both her faculty and department. She works across the TrendySize product, bringing hands-on experience in operations, records management and customer-facing roles from her work in agro-allied, HR and client-service positions, and is an ALX-trained professional.",
    credentials: [
      "B.Agric, Crop Science - First Class (CGPA 4.74/5.00), Alex Ekwueme Federal University",
      "Best Graduating Student - Faculty of Agriculture & Department of Crop Science (2022)",
      "ALX Backend Development Programme (2025)",
      "ALX Virtual Assistant Programme (2024)",
    ],
    experience: [
      "Gilis Agro and More - Administrative & Produce Officer (2025–2026)",
      "PEM Security Guard Network - Assistant HR Manager (2024–2025)",
      "AirMoves Travel and Tours - Front Desk Officer (2023–2024)",
      "Joseph Sarwuan Tarka University - Graduate Research Assistant, NYSC (2022–2023)",
    ],
    achievements: [
      "Best Graduating Student, Faculty of Agriculture & Department of Crop Science (2022)",
      "First-class degree with a CGPA of 4.74/5.00",
      "Maintained HR records for a workforce of several thousand people",
    ],
    focus: "Product design, research, product",
    links: {
      github: "",
      linkedin: "www.linkedin.com/in/eunice-akpa",
    },
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "WiKeep",
    category: "Developer Tools",
    client: "DM Holdings",
    region: "macOS · production fleet",
    year: "2026",
    duration: "6 weeks",
    teamSize: "1 engineer",
    desc: "macOS network diagnostics and self-recovery desktop app (Rust, Tauri, React). A four-tier recovery mechanism with 60-second health checks restores Wi-Fi and DHCP automatically, with launchd-managed background execution.",
    impact: "3 manual IT interventions per week eliminated",
    stack: "Rust · Tauri · React",
    metric: "Auto-recovered on 3 production Macs",
    quote:
      "Each installed Mac has recovered its network automatically since deployment.",
    attrib: "Fehintolu Samuel · personal project",
    reviewedBy: "Fehintolu Samuel",
    reviewedOn: "Oct 2026",
  },
  {
    id: 2,
    title: "Northbound Sessions",
    category: "Platforms",
    client: "Independent build",
    region: "Azure Container Apps",
    year: "2026",
    duration: "6 weeks",
    teamSize: "1 engineer",
    desc: "Full-stack Blazor Server trading-education platform on Azure - templated lessons, quiz generation and auto-grading that replaced a manual instructor workflow, with Code-First EF Core migrations.",
    impact: "Lesson + grading workflow fully automated",
    stack: "C# · .NET · Blazor · Azure",
    metric: "Zero-manual pipeline deployment",
    quote: "The lesson and grading workflow now runs without an instructor.",
    attrib: "Fehintolu Samuel · personal project",
    reviewedBy: "Fehintolu Samuel",
    reviewedOn: "Oct 2026",
  },
  {
    id: 3,
    title: "TradeIQ",
    category: "AI & Analytics",
    client: "Independent build",
    region: "NGX market data",
    year: "2026",
    duration: "5 weeks",
    teamSize: "1 engineer",
    desc: "NGX market-analysis platform that ingests daily stock data, computes technical indicators, and adds a Groq-powered plain-language explanation layer for non-technical traders.",
    impact: "Signal dashboard + AI explanations",
    stack: "FastAPI · React · PostgreSQL",
    metric: "Full test coverage (pytest + Postman)",
    quote:
      "Plain-language explanations, so traders who do not read charts can still follow the signals.",
    attrib: "Fehintolu Samuel · personal project",
    reviewedBy: "Fehintolu Samuel",
    reviewedOn: "2026",
  },
  {
    id: 4,
    title: "CorperNest",
    category: "Platforms",
    client: "Independent build",
    region: "Web · Nigeria",
    year: "2026",
    duration: "5 weeks",
    teamSize: "1 engineer",
    desc: "Housing platform connecting NYSC corps members with verified landlords - JWT auth, role-based access, real-time messaging, and an automated call-up-number lifecycle system.",
    impact: "Verified landlord network + lifecycle automation",
    stack: "FastAPI · React · PostgreSQL",
    metric: "PCM → Incoming → Outgoing → Alumni automation",
    quote: "Verified landlords and a call-up lifecycle that updates itself.",
    attrib: "Fehintolu Samuel · personal project",
    reviewedBy: "Fehintolu Samuel",
    reviewedOn: "2026",
  },
  {
    id: 5,
    title: "Digital Co-operative Backend",
    category: "Platforms",
    client: "Bytelabs (NYSC)",
    region: "Ibadan, Nigeria",
    year: "2025",
    duration: "12 months",
    teamSize: "Backend team",
    desc: "Backend for a digital-cooperative application - SQL data models, secure member and payment handling, and a notifications module for reliable system alerts and transactional messages.",
    impact: "Reliable alert + transactional messaging",
    stack: "PHP · SQL · Postman",
    metric: "Notification module shipped to spec",
    quote:
      "A notifications module for reliable system alerts and transactional messages.",
    attrib: "Esther Ibitoye · Bytelabs (NYSC)",
    reviewedBy: "Esther Ibitoye",
    reviewedOn: "2025",
  },
  {
    id: 6,
    title: "TrendySize AI Measurement Service",
    category: "Fashion Tech",
    client: "Neeglo product",
    region: "FastAPI · Python",
    year: "2026",
    duration: "In development",
    teamSize: "3 engineers",
    desc: "Python/FastAPI computer-vision service that analyses customer body photos and returns structured measurements - chest, waist, hip, shoulder, sleeve, neck, height - straight into the vendor's record.",
    impact: "Photo → 7 structured measurements",
    stack: "Python · FastAPI · PostgreSQL",
    metric: "7 measurement points per record",
    quote:
      "Core TrendySize service, in development. Meaningful portions ship with the October 2026 pilot.",
    attrib: "TrendySize · Neeglo",
    reviewedBy: "Esther Ibitoye",
    reviewedOn: "Oct 2026",
  },
];

export const workFilters = [
  "All",
  "Fashion Tech",
  "Developer Tools",
  "Platforms",
  "AI & Analytics",
];

export const products = [
  {
    id: "trendysize",
    name: "TrendySize",
    tagline: "Digital measurement for fashion businesses.",
    status: "Pilot · late October 2026",
    category: "Fashion tech",
    summary:
      "TrendySize removes the 'what I ordered vs. what I got' problem. Vendors create a profile and share one link; customers submit their measurements without an account, and the result is a searchable record the vendor owns.",
    features: [
      "Unique, shareable measurement link per vendor",
      "Customer form - measurements, fabric preferences, photo upload",
      "Searchable vendor dashboard with measurement records",
      "AI body-measurement estimator (Python/FastAPI)",
    ],
    steps: [
      {
        title: "Share a link",
        text: "The vendor shares one measurement link - no customer account required.",
      },
      {
        title: "Capture measurements",
        text: "The customer submits measurements, or uploads a photo for the AI service to estimate.",
      },
      {
        title: "Keep the record",
        text: "Every submission lands in the vendor's searchable dashboard, owned by the vendor.",
      },
    ],
    tech: ["React", "TypeScript", "Laravel", "Postgres", "FastAPI", "C#"],
    underTheHood: [
      {
        title: "Product engineering",
        body: "A brief before the code, tests beside it, and a deploy path the whole team can read.",
        points: [
          "React + TypeScript front-ends",
          "Laravel/PHP REST APIs and PostgreSQL",
          "C# payment services",
          "GitHub CI/CD, API testing, dashboards",
        ],
      },
      {
        title: "AI measurement service",
        body: "A Python and FastAPI computer-vision service that estimates body measurements from customer photos.",
        points: [
          "Computer-vision body measurement estimation",
          "7 structured measurements per record",
          "Measured against tape measurements before launch",
          "Plays inside a Laravel + Postgres system",
        ],
      },
    ],
    deliverables: [
      "React web app · Laravel API · Postgres",
      "FastAPI AI measurement service",
      "Pilot begins late October 2026",
    ],
    facts: [
      { label: "Status", value: "Pilot · late October 2026" },
      { label: "Platform", value: "Web + API" },
      { label: "Data", value: "NDPR-aligned" },
    ],
    docs: [
      { name: "Project documentation", meta: "PDF · 14 pages", href: "/contact.html" },
      { name: "MVP backend briefing", meta: "PDF · 15 pages", href: "/contact.html" },
      { name: "Market survey summary", meta: "PDF · in prep", href: "/contact.html" },
    ],
    gallery: {
      title: "How TrendySize works",
      aspect: "2778 / 1614",
      caption:
        "Vendor link → customer form → measurement estimates → searchable record. NDPR-aligned from day one.",
    },
    cta: { label: "Join the pilot", href: "/contact.html" },
  },
];

export const principles = [
  {
    t: "Measure first",
    d: "TrendySize started from research: most of the customers we surveyed had received clothes that did not fit, and most vendors wanted a digital way to measure. We prefer evidence to guesswork.",
  },
  {
    t: "Reliability comes before features",
    d: "We document our decisions and handle data in line with Nigeria's NDPR rules, because people will run their business on what we build.",
  },
  {
    t: "Decisions we can build on",
    d: "We write down the why and put our names on the work, so the next feature is an addition rather than a rewrite. Expansion, integrations and an API are already on the roadmap.",
  },
];

export const services = [
  {
    t: "Custom software development",
    d: "Software designed around your workflows, requirements and goals - not forced into a one-size-fits-all product.",
  },
  {
    t: "Website development",
    d: "Professional websites that help businesses establish their presence online and give their audiences a useful experience.",
  },
  {
    t: "Web and mobile applications",
    d: "Turning product ideas into digital experiences, from planning and interface design to development and ongoing improvement.",
  },
  {
    t: "Software maintenance and modernisation",
    d: "Maintaining existing applications, resolving issues and modernising systems that no longer meet changing needs.",
  },
  {
    t: "Business process automation",
    d: "Connecting processes and reducing repetitive work so teams can use their time more effectively.",
  },
  {
    t: "AI solutions",
    d: "Practical AI built for a specific need, with value in mind rather than technology for its own sake.",
  },
  {
    t: "UI/UX design",
    d: "Clear, considered experiences built through interface design, user-centred thinking and prototyping.",
  },
  {
    t: "Technology consulting and training",
    d: "Help thinking through technical decisions, and learning opportunities for people who want to build their tech skills.",
  },
];

export const whyNeeglo = [
  {
    t: "Rigour and high standards",
    d: "We approach our work with discipline and attention to detail, and we hold ourselves to solutions that serve their purpose.",
  },
  {
    t: "Transparency throughout",
    d: "We are clear about progress, priorities and challenges, so you always know what is being built and why.",
  },
  {
    t: "Collaboration, not guesswork",
    d: "We involve you from defining the problem to reviewing the result, rather than disappearing and returning with something.",
  },
  {
    t: "Value beyond delivery",
    d: "We look past the task to the need behind it, and build solutions that provide meaningful value.",
  },
  {
    t: "Built to evolve",
    d: "Needs change. We build and maintain solutions that can be improved as requirements grow.",
  },
];

export const process = [
  {
    t: "Discover",
    d: "We start by understanding your goals, users, existing systems and the problem you need to solve.",
  },
  {
    t: "Define",
    d: "We agree the scope, priorities, expected outcomes and a practical direction for the project.",
  },
  {
    t: "Design and build",
    d: "We shape the experience and develop the solution through a focused, collaborative process.",
  },
  {
    t: "Review and refine",
    d: "We share progress, gather feedback, test the work and improve it against the agreed requirements.",
  },
  {
    t: "Support and improve",
    d: "Where required, we keep maintaining, troubleshooting and improving the solution as your needs evolve.",
  },
];

export const operatingModel = [
  { k: "Origin", v: "Independent company, founded 2026" },
  { k: "Distribution", v: "Remote-first · Lagos, Abakaliki, Enugu, Nigeria" },
  { k: "Launch", v: "TrendySize pilot · late October 2026" },
  { k: "Documented culture", v: "Product docs, API briefs and runbooks before code" },
];

export const timeline = [
  {
    year: "Apr 2026",
    title: "We begin",
    text: "Six founders come together as Neeglo - an independent company - to build products of our own.",
  },
  {
    year: "May–Jun 2026",
    title: "TrendySize validated",
    text: "A market survey of 15 customers and 6 vendors confirms the fitting problem: most had received clothes that did not fit after ordering.",
  },
  {
    year: "Aug 2026",
    title: "MVP specified",
    text: "The backend briefing locks the build - React, Laravel, FastAPI, and a C# payment service - and the measurement problem gets a product.",
  },
  {
    year: "Oct 2026",
    title: "Site + pilot",
    text: "The official team site goes live, and TrendySize pilot onboarding begins for the first vendors.",
  },
  {
    year: "Planned",
    title: "Grow",
    text: "Tailor directory, API integrations, and expansion beyond Nigeria - on the roadmap we wrote for ourselves.",
  },
];

export const labNotes = [
  {
    title: "TrendySize market research: the fitting problem",
    date: "Jun 2026",
    read: "Survey note",
    author: "Gloria Ibeneme",
  },
  {
    title: "Locking the stack for an MVP",
    date: "Aug 2026",
    read: "Decision note",
    author: "Fehintolu Samuel",
  },
  {
    title: "Designing a measurement form customers actually finish",
    date: "Sep 2026",
    read: "Design note",
    author: "Uchenna Oji Okoro",
  },
];

export const statusServices = [
  { name: "Neeglo website", state: "Operational", uptime: "100%" },
  { name: "TrendySize web app", state: "Scheduled", uptime: "-" },
  { name: "Measurement API", state: "Scheduled", uptime: "-" },
  { name: "AI measurement service", state: "In development", uptime: "-" },
  { name: "Payment service", state: "In development", uptime: "-" },
];

export const statusIncidents = [
  {
    date: "13 Oct 2026",
    title: "Team site launches",
    state: "Completed",
    duration: "Planned",
    text: "The Neeglo official team site goes live ahead of the TrendySize pilot.",
  },
  {
    date: "26 Oct 2026",
    title: "TrendySize pilot begins",
    state: "Scheduled",
    duration: "Planned",
    text: "Pilot onboarding begins for the first vendors. Uptime reporting starts here once services are live.",
  },
];