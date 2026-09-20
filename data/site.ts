// Edit anything in this file to update the hero, stats, about section and
// contact links. Nothing here needs a code change beyond editing values.

export const site = {
  name: "Mohammed Shan",
  role: "Full-stack Developer",
  location: "Bengaluru, IN",
  tagline:
    "Full-stack developer who leans backend. I build Django and React systems that hold up in production.",
  availability: "Available for full-stack & backend work",
  profileImage: "/profile.jpg",

  heroStats: [
    { value: "2 yrs", label: "Shipping production software" },
    { value: "10+", label: "Platforms shipped, ERPs to streaming infra" },
    { value: "AWS", label: "EC2 · S3 · Aurora · Amplify", mono: true }
  ],

  about: [
    "I'm self-taught — I learned Django and React by building things that had to actually work, not just tutorials. That habit stuck: I still learn best by shipping something real and fixing what breaks.",
    "Professionally, I've spent the last two years moving between backend-heavy platforms — a multi-role e-commerce system, an enterprise information management suite with over a hundred permission rules, a rental management platform — and the AWS infrastructure that keeps them running.",
    "Outside of client work, I build things for myself: a small algorithmic trading platform, an HLS video streaming service, a fine-tuned speech recognition model. Lately I've been deep in agentic AI and vibe-coding workflows — using AI tools as a genuine part of how I design and build software."
  ],

  workingWith: [
    "Django, DRF, Celery, Channels, FastAPI",
    "React, Redux, Next.js basics",
    "PostgreSQL, AWS Aurora, MongoDB",
    "Docker, AWS EC2 / S3 / Amplify, Railway",
    "Agentic AI tooling, n8n automation"
  ],

  experience: [
    {
      date: "Sep 2025 — Present",
      role: "Full-stack Developer",
      org: "Hoztox Technology",
      points: [
        "Built and maintained features for XIMS, an enterprise information management system spanning QMS, EMS, OHS and ENMS modules, with role-based access control across 100+ permissions.",
        "Worked on RentBiz, a property rental management platform, end to end — Django, React and Celery, deployed on EC2 and S3.",
        "Owned deployment and optimization for production systems on AWS EC2, S3, Aurora and Amplify."
      ],
      stack: ["Django", "React", "Celery", "AWS", "Railway"]
    },
    {
      date: "Jul 2024 — Aug 2025",
      role: "Backend Developer",
      org: "Kiraj Agromart",
      points: [
        "Built a multi-role e-commerce backend supporting Admin, Vendor, Retailer and Distributor roles.",
        "Implemented background jobs with Celery, real-time features with Django Channels, and a Pytest suite to keep it honest."
      ],
      stack: ["Django", "Celery", "Channels", "Docker", "Pytest"]
    },
    {
      date: "Ongoing",
      role: "Freelance",
      org: "Various clients",
      points: [
        "SSSmartOnline — e-commerce and admin ERP with WhatsApp order flow, invoicing and sales reports.",
        "DoctorUngcle — frontend integration and Supabase-backed patient data access.",
        "FSystems — Django deployment support and an AI-based glass recommendation feature using face-shape analysis."
      ],
      stack: ["Django", "React", "Supabase", "PythonAnywhere"]
    },
    {
      date: "Aug 2023 — Jun 2024",
      role: "Software Development Training",
      org: "Brototype",
      points: [
        "An intensive, self-led program building real projects with Python, JavaScript, React, Django, AWS EC2 and Firebase — where most of the fundamentals actually stuck."
      ],
      stack: []
    }
  ],

  skills: [
    {
      title: "Backend & APIs",
      items: ["Django & DRF", "Celery + Redis", "Django Channels", "FastAPI (basic)", "JWT & OAuth", "Stripe & PayPal"]
    },
    { title: "Frontend", items: ["React & Redux", "Next.js (basic)", "Figma"] },
    {
      title: "Data & Infra",
      items: ["PostgreSQL & Aurora", "MongoDB", "Docker", "AWS EC2, S3, Amplify", "Railway, PythonAnywhere"]
    },
    { title: "Fundamentals", items: ["Python, JavaScript, C", "Data Structures & Algorithms", "Database design"] },
    { title: "Tools", items: ["Git & GitHub", "Postman", "Pytest", "n8n automation"] },
    { title: "Currently exploring", items: ["Agentic AI workflows", "Vibe coding with AI tools", "ASR model fine-tuning"] }
  ],

  alsoBuilt:
    "A fine-tuned Automatic Speech Recognition model, n8n workflow automations for repetitive tasks, a PayPal-integrated e-commerce app on EC2, and Netflix / OLX clones in React to pressure-test frontend fundamentals.",

  contact: [
    { label: "Email", value: "mohammedshan464@gmail.com", href: "mailto:mohammedshan464@gmail.com" },
    { label: "GitHub", value: "github.com/shhaan", href: "https://github.com/shhaan" },
    { label: "LinkedIn", value: "in/mohammed-shan-", href: "https://www.linkedin.com/in/mohammed-shan-" }
  ]
};
