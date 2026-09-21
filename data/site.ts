// Edit anything in this file to update the hero, stats, about section and
// contact links. Nothing here needs a code change beyond editing values.

export const site = {
  name: "Mohammed Shan",
  role: "Full-stack Developer",
  location: "",
  tagline:
    "Full-stack developer who leans backend. I build Django and React systems that hold up in production.",
  availability: "Available for full-stack & backend work",
  profileImage: "/me.jpeg",

  heroStats: [
    { value: "2 yrs", label: "Shipping production software" },
    { value: "AWS", label: "EC2 · S3 · Aurora · Amplify", mono: true }
  ],

  about: [
    "I'm a full-stack developer with two years of experience building backend-heavy web platforms with Django and React. I care about systems that stay reliable after launch: clean APIs, sensible data models, background jobs that don't fall over, and deployments that are easy to reason about.",
    "At Hoztox Technology I work on XIMS, an enterprise information management suite with role-based access control across 100+ permissions, and RentBiz, a property rental platform. Before that, at Kiraj Agromart, I built a multi-role e-commerce backend with Celery, Django Channels and a Pytest suite. I also own production deployments on AWS: EC2, S3, Aurora and Amplify.",
    "Outside of client work, I build things for myself: FarmAid, a three-role marketplace for selling farm produce directly, an algorithmic trading platform, an HLS video streaming service and a fine-tuned speech recognition model. Lately I've been working with agentic AI and AI-assisted development, using these tools as a real part of how I design and ship software."
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
