// ─────────────────────────────────────────────
//  EMCENT PORTFOLIO — DATA FILE
//  Edit this file to update all portfolio content.
//  No component code needs to change.
// ─────────────────────────────────────────────

export const personal = {
  name:       'Emekwue Innocent Chukwuemeka',
  brand:      'Emcent',
  handle:     'CodeEmcent',
  tagline:    'MSc Management of Business IT (Pass with Distinction) — bridging strategy, systems, and software.',
  location:   'London, United Kingdom',
  origin:     'Anambra State, Nigeria',
  available:  'Open to IT consulting & graduate roles',
  linkedin:   'https://www.linkedin.com/in/chukwuemeka-innocent-emekwue/',
  github:     'https://github.com/CodeEmcent',
  email:      'innocent@emcent.dev',
  formspree:  'https://formspree.io/f/meenwdey',
}

export const heroStack = [
  { label: 'Python',          hi: true },
  { label: 'Django',          hi: true },
  { label: 'React',           hi: true },
  { label: 'PostgreSQL',      hi: false },
  { label: 'REST APIs',       hi: false },
  { label: 'Systems Analysis',hi: false },
  { label: 'UX Design',       hi: false },
  { label: 'IT Strategy',     hi: false },
]

export const about = {
  paragraphs: [
    `I am <strong>Emekwue Innocent Chukwuemeka</strong> — known professionally as <strong>Emcent</strong> — a management of business IT graduate with an unusual background: I began with Philosophy, earning degrees (First Class Honours and Summa Cum Laude) from Imo State University, Owerri and the Pontifical Urbaniana University in Rome, before pivoting fully into information systems and software development.`,
    `That grounding in rigorous thinking shapes how I approach technology. I don't just build systems — I interrogate why they should exist, how they serve people, and where they might fail. It's what drew me to the intersection of <strong>business strategy, systems design, and full-stack development</strong>.`,
    `Before IT, I spent seven years at Our Lady of Apostles Secondary School in Lagos — progressing from Teacher to Examinations Officer & Analyst to <strong>Facility Manager</strong>. That final role, managing assets, maintenance, and inventory for a large institution, directly shaped my MSc dissertation: Emcent FMS is not a theoretical exercise — it was built to solve problems I experienced first-hand in a real facility.`,
    `At Greenwich, I designed and built Emcent FMS end-to-end — now a production-deployed, multi-tenant platform that I continue to develop — led UX research (VeriLens), produced systems analysis work (BUBO), and delivered a strategic IS implementation report, graduating with a Pass with Distinction. I've also served on five magazine editorial boards and one academic journal board, including as <strong>Editor-in-Chief</strong>, and authored a published book (The Question of Social Conscience: A Personal Reflection) — a background that shapes how I communicate complex systems clearly to non-technical stakeholders.`,
    `I'm based in London, targeting roles in consulting, business analysis, systems development, and IT strategy — anywhere rigorous thinking and precise communication go hand in hand.`,
  ],
  details: [
    { icon: '🎓', label: 'Education',    value: 'MSc Management of Business IT (MBIT)',  sub: 'University of Greenwich · Pass with Distinction · 2026' },
    { icon: '📍', label: 'Location',     value: 'London, United Kingdom' },
    { icon: '🌍', label: 'From',         value: 'Anambra State, Nigeria' },
    { icon: '💼', label: 'Experience - In Nigeria',   value: 'Facilities Manager · Examinations Officer · Teacher',   sub: 'OLASS, Yaba, Lagos · 2018–2025' },
    { icon: '🏙️', label: 'Experience - In London',    value: 'Retail Security Officer · Customer Service',   sub: 'Mitie Security · Tenpin Ltd · 2025–present' },
    { icon: '📅', label: 'Availability', value: 'Open to IT consulting & graduate roles' },
    { icon: '🔗', label: 'GitHub',       value: 'github.com/CodeEmcent', link: 'https://github.com/CodeEmcent' },
  ],
}

export const competencies = [
  {
    icon: '⚙️',
    title: 'Software Development',
    subtitle: 'Languages, Frameworks & Infrastructure',
    tags: [
      { label: 'Python', hi: true },
      { label: 'Django REST Framework', hi: true },
      { label: 'React', hi: true },
      { label: 'JavaScript' },
      { label: 'PostgreSQL' },
      { label: 'REST APIs' },
      { label: 'JWT Authentication' },
      { label: 'HTML & CSS' },
      { label: 'Vite' },
      { label: 'Tailwind CSS' },
      { label: 'Vercel' },
      { label: 'Git & GitHub' },
    ],
  },
  {
    icon: '📐',
    title: 'Systems Analysis & Design',
    subtitle: 'Modelling, Architecture & Methodology',
    tags: [
      { label: 'Systems Analysis & Design', hi: true },
      { label: 'UML & Use Case Modelling', hi: true },
      { label: 'BPMN & Process Modelling' },
      { label: 'Object-Oriented Analysis' },
      { label: 'Three-Tier Architecture' },
      { label: 'DSRM' },
      { label: 'Rich Pictures & CATWOE' },
      { label: 'State Chart & Sequence Diagrams' },
      { label: 'Requirements Engineering' },
      { label: 'Software Quality Management' },
    ],
  },
  {
    icon: '🎨',
    title: 'UX & Product Design',
    subtitle: 'Research, Prototyping & Evaluation',
    tags: [
      { label: 'UX Research', hi: true },
      { label: 'Figma Prototyping', hi: true },
      { label: 'PACT Analysis' },
      { label: 'Persona Development' },
      { label: 'Information Architecture' },
      { label: 'Heuristic Evaluation' },
      { label: 'Usability Testing' },
      { label: "Norman's Design Principles" },
      { label: 'Wireframing' },
      { label: 'Accessibility' },
    ],
  },
  {
    icon: '📊',
    title: 'IT Management & Strategy',
    subtitle: 'Governance, Risk & Business Alignment',
    tags: [
      { label: 'IT Strategy & IS Planning', hi: true },
      { label: 'Project Management', hi: true },
      { label: 'IT Security & Risk Management' },
      { label: 'Business Process Analysis' },
      { label: 'DeLone & McLean IS Model' },
      { label: 'Stakeholder Management' },
      { label: 'Web & Intranet Content Management' },
      { label: 'Data Management' },
      { label: 'IS Implementation' },
      { label: 'Change Management' },
    ],
  },
]

export const tools = [
  'Figma','VS Code','GitHub','Postman','pgAdmin','Vercel',
  'PythonAnywhere','Microsoft Office Suite','Power BI','Tableau',
  'Google Analytics','Notion',
]

export const projects = [
  {
    id: 'fms',
    featured: true,
    tags: ['Live SaaS', 'In Active Development'],
    year: '2025 – Present',
    title: 'Emcent Facilities Management System',
    description: 'A production-deployed, multi-tenant facility management platform — originally my MSc dissertation artefact, now in active development. Organisations configure their own location hierarchy and vocabulary, track assets and inventory with bulk Excel upload, and run corrective maintenance through a full vendor lifecycle — quotation, authorisation, work, and sign-off. Seven-role access control, audit logging, and real-time WebSocket notifications keep operations accountable. Designed using the Design Science Research Methodology and evaluated using the FEDS framework.',
    stack: ['Python','Django REST','React','PostgreSQL','WebSockets','Azure','DSRM'],
    link: 'https://emcentfms.com',
    linkLabel: 'Visit live platform →',
  },
  {
    id: 'betachow',
    tags: ['Full-Stack', 'Django · React'],
    year: 'Dec 2025 – Feb 2026',
    title: 'Beta Chow Foods',
    description: 'A full-stack food ordering platform built for a Lagos-based restaurant, demonstrating SME digital transformation. Supports customer ordering, real-time order tracking, cart and checkout workflows, and a secure admin dashboard for managing orders, menu items, and customers.',
    stack: ['React','Django REST','PostgreSQL','JWT Auth','Vercel','PythonAnywhere'],
    linkLabel: 'Assoc. with Personal Works →',
  },
  {
    id: 'verilens',
    tags: ['UX Design', 'Research · Figma'],
    year: '2026',
    title: 'Emcent VeriLens',
    description: 'A misinformation verification platform designed for investigative journalists. The project encompassed the full UX process: PACT analysis, persona development, information architecture, prototype design across 14 screens in Figma, and a multi-method evaluation strategy covering heuristic, cognitive walkthrough, and A/B testing approaches.',
    stack: ['Figma','UX Research','Prototyping','PACT','HCI'],
    linkLabel: 'COMP1436 UX Design — Greenwich →',
  },
  {
    id: 'book',
    tags: ['Published Work', 'Non-Fiction'],
    year: 'Apr 2021',
    title: 'The Question of Social Conscience',
    description: 'A personal reflection on social conscience, moral responsibility, and ethical engagement in contemporary society. Published by Gazub Press in April 2021 — evidence of sustained rigorous long-form thinking and the ability to synthesise complex ideas into clear, accessible writing for a broad audience.',
    stack: ['Philosophy','Ethics','Published','Gazub Press'],
    linkLabel: 'A Personal Reflection · Gazub Press →',
  },
  {
    id: 'eexcel',
    wide: true,
    tags: ['Web Development', 'Client Project'],
    year: '2026 — In Progress',
    title: 'E. Excel Standard Concepts',
    description: 'A professional business website for an established Lagos Island-based importer and supplier of electrical accessories and fittings. The project transitions the business from informal WhatsApp catalogue sharing to a credible digital presence, with a full product catalogue, WhatsApp-integrated customer enquiry system, and professional brand positioning in the Nigerian electrical supply market.',
    stack: ['Web Design','UX','Full-Stack','Client Delivery','SME Digital Transformation'],
    linkLabel: 'Independent client engagement →',
  },
]

export const certifications = {
  professional: [
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft · Official Certification',
      date: 'May 2026',
      icon: '☁️',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/ChukwuemekaInnocentEmekwue-4687/408F7A7A28550C21?sharingId',
      courses: 'Cloud concepts, Azure architecture and services, Azure management and governance',
    },
    {
      name: 'Backend with Python Django',
      issuer: 'Univelcity · 120 Hours',
      date: 'Dec 2024',
      icon: '🎓',
      link: null,
      courses: 'Django backend engineering, 120 hours of instruction + final project',
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta · Coursera · 9 Courses',
      date: 'Aug 2023',
      icon: '🟦',
      link: 'https://coursera.org/verify/professional-cert/WM88TLCU6FHV',
      courses: 'React, Advanced React, HTML & CSS, JavaScript, UX/UI Design, Version Control',
    },
    {
      name: 'Google Data Analytics',
      issuer: 'Google · Coursera · 8 Courses',
      date: 'Jan 2023',
      icon: '🔵',
      link: 'https://coursera.org/verify/professional-cert/9X4A9UNF46G6',
      courses: 'SQL, Tableau, R Programming, Data Preparation, Analysis & Visualisation',
    },
    {
      name: 'Google Project Management',
      issuer: 'Google · Coursera · 6 Courses',
      date: 'Apr 2023',
      icon: '🔵',
      link: 'https://coursera.org/verify/professional-cert/46UW9RGZ424N',
      courses: 'Project Initiation, Planning, Execution, Agile Project Management, Capstone',
    },
  ],
  linkedin: [
    {
      name: 'Microsoft Azure Fundamentals (AZ900) Cert Prep by Microsoft Press',
      issuer: 'LinkedIn Learning  · Microsoft Azure · Data Governance',
      date: 'May 2026',
      link: 'https://www.linkedin.com/learning/certificates/71a98ba2e9c296e50f2aeb0d8933517a8bc606bde18cd68db836fa7307b85d79',
    },
    {
      name: 'The Role of Business Analysis in Data Analytics',
      issuer: 'LinkedIn Learning · Data Analytics & BA',
      date: 'May 2026',
      link: 'https://www.linkedin.com/learning/certificates/943af2539ea7927a2194d49f866ecdf250b2d6e95569df4ba49c2fa7f238aec5',
    },
    {
      name: 'Introduction to Business Analysis',
      issuer: 'LinkedIn Learning · IIBA® Endorsed · 3 CDUs',
      date: 'Apr 2026',
      link: 'https://www.linkedin.com/learning/certificates/9fb2a03b4b3d865554a08d2dd4424ed91ecdfc721ea0dad4a502fb71472c309f',
    },
    {
      name: 'Software Design: Modeling with UML',
      issuer: 'LinkedIn Learning · Software Design & UML',
      date: 'May 2026',
      link: 'https://www.linkedin.com/learning/certificates/5e9bb661780aeea121a2dc69affccb11ed8545aea4f4be1e0372052c17f06b63',
    },
    {
      name: 'Basics of Data Visualization Analysis',
      issuer: 'LinkedIn Learning · Data Analysis & Visualisation',
      date: 'Apr 2026',
      link: 'https://www.linkedin.com/learning/certificates/ad7fedb4ef2e3b0187dacd731c9c44902505ff8ceb709605aa2ff474dd08ced6',
    },
  ],
}

export const experience = {
  education: [
    {
      period: '2025 – 2026',
      title: 'MSc Management of Business Information Technology (MBIT) — Pass with Distinction',
      org: 'University of Greenwich, London',
      desc: 'Modules spanning Systems Analysis & Design, UX Design, Strategic IT, Software Quality Management, IT Security & Risk, Project Management, and Systems Modelling. Dissertation: Emcent FMS — a full-stack digital asset and inventory management system.',
    },
    {
      period: '2011 – 2015',
      title: 'Bachelor of Philosophy (B.Phil.) — Summa Cum Laude',
      org: 'Pontifical Urbaniana University, Rome · Seat of Wisdom Major Seminary, Owerri',
      desc: 'Awarded summa cum laude. Rigorous training in critical reasoning, formal argumentation, epistemology, and ethical theory — providing the analytical foundation that underpins all subsequent work in systems thinking and IT strategy.',
    },
    {
      period: '2011 – 2015',
      title: 'Bachelor of Arts in Philosophy — First Class Honours',
      org: 'Imo State University, Owerri · Seat of Wisdom Major Seminary',
      desc: 'Awarded First Class Honours. Explored the philosophy of mind, logic, and African philosophy — developing structured reasoning and written communication skills that now inform how I frame technical problems and communicate systems to non-technical stakeholders.',
    },
  ],
    work: [
    {
      period: '2025 – Present',
      title: 'Founder & Lead Developer',
      org: 'Emcent Facilities Management System — emcentfms.com',
      desc: 'Designed, built and deployed a production multi-tenant facility management platform (React, Django REST Framework, PostgreSQL, Django Channels) with seven-role access control, audit logging and real-time notifications. Began as my MSc dissertation artefact, built using Design Science Research Methodology, and is now in active development as a commercial product.',
    },
    {
      period: '2026 — In Progress',
      title: 'Web Developer & Systems Designer',
      org: 'E. Excel Standard Concepts — Client Project',
      desc: 'Scoped, designed, and leading development of a full business website for a Lagos-based electrical accessories supplier — covering UX, system design, and deployment.',
    },
    {
      period: 'Sep 2026 – Present',
      title: 'Retail Security Officer (SIA-licensed)',
      org: 'Mitie Security — London · Full-time',
      desc: 'SIA-licensed (Door Supervisor; CCTV Public Space Surveillance) security officer providing retail security services across London. Holds ACT Security, ACT Awareness, First Aid at Work and Enhanced DBS credentials.',
    },
    {
      period: 'Oct 2025 – Jul 2026',
      title: 'Customer Service Assistant',
      org: 'Tenpin Ltd (Ten Entertainment Group) — Greater London · Part-time',
      desc: 'Delivered consistent, high-standard customer service to 20+ customers per shift as part of a 10-person team in a fast-paced hospitality and entertainment environment, alongside full-time MSc study. Recognised as Employee of the Month (May 2026).',
    },
    {
      period: 'Sep 2022 – Aug 2025',
      title: 'Facilities Manager (Maintenance Officer)',
      org: 'Our Lady of Apostles Secondary School (OLASS), Yaba, Lagos',
      desc: 'Managed facilities operations — asset tracking, maintenance scheduling, inventory management, and vendor coordination — for a large secondary school institution. This hands-on experience directly informed the design and scope of Emcent FMS: a digital system built to solve the exact operational problems encountered in this role.',
    },
    {
      period: 'Mar 2020 – Sep 2022',
      title: 'Examinations Officer & Analyst',
      org: 'Our Lady of Apostles Secondary School (OLASS), Yaba, Lagos',
      desc: 'Led examination logistics and data analysis for student cohorts. Managed data integrity, reporting pipelines, and process coordination under strict regulatory timelines — developing skills in structured data management, analytical reporting, and institutional process design. Held alongside teaching duties.',
    },
    {
      period: 'Jan 2018 – Mar 2023',
      title: 'Teacher — Civic Education',
      org: 'Our Lady of Apostles Secondary School (OLASS), Yaba, Lagos',
      desc: 'Delivered civic education curriculum to secondary school students over five years, retaining the role through two internal promotions until a successor was found. Developed skills in structured communication, audience-appropriate explanation, and curriculum design — capabilities now applied to technical documentation, stakeholder reporting, and systems communication.',
    },
    {
      period: '2010 to 2025',
      title: 'Editor-in-Chief & Editorial Board Member',
      org: '5 Magazines · 1 Academic Journal',
      desc: 'Served on six editorial boards including as Editor-in-Chief. Developed advanced skills in structured communication and analytical writing — now applied directly to technical documentation, IS implementation reports, and stakeholder communication.',
    },
  ],
}
