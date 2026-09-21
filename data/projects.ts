// This is the list a viewer sees under "Selected work". To add a project:
// 1. Drop its screenshots into public/projects/<slug>/ (any number of images)
// 2. Add an entry below pointing at those files in the order you want them shown
// 3. Set `featured: true` on at most one project — it gets the large hero slot
//
// Each project can hold as many images as you like: one is shown as the
// cover, and clicking it opens a gallery with every image in the array.

export interface Project {
  slug: string;
  title: string;
  tag: string;
  addressBar: string; // shown in the fake browser chrome above the screenshot
  description: string;
  stack: string[];
  images: string[]; // paths under /public, e.g. "/projects/xims/1.jpg"
  featured?: boolean;
  size?: "large" | "medium" | "small"; // controls the grid slot; ignored when featured
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "xims",
    title: "XIMS — Enterprise Information Management System",
    tag: "Hoztox",
    addressBar: "xims.internal/dashboard",
    description:
      "A large-scale IMS with QMS, EMS, OHS and EnMS modules for enterprise clients: documentation control, training, audits and inspections, risk and opportunity tracking, supplier management and corrective actions, with role-based access across 100+ permissions. My work sat mostly in the backend, modeling the permission structure and the workflows built on top of it.",
    stack: ["Django", "React", "Celery", "EC2", "Railway"],
    images: ["/projects/xims/1.png", "/projects/xims/2.png"],
    featured: true
  },
  {
    slug: "rentbiz",
    title: "RentBiz",
    tag: "Hoztox",
    addressBar: "rentbiz.app",
    description:
      "A property rental management platform covering buildings, units, tenants and the full tenancy cycle (create, confirm, renew, terminate), with rent collection, invoicing and revenue reports. Background jobs run on Celery, and it is deployed and backed up on AWS EC2 and S3.",
    stack: ["Django", "React", "Celery", "AWS S3"],
    images: ["/projects/rentbiz/1.png"],
    size: "medium"
  },
  {
    slug: "kiraj",
    title: "Kiraj — Agri-Commerce Marketplace",
    tag: "Kiraj Agromart",
    addressBar: "kiraj.app/dashboard",
    description:
      "A marketplace connecting farmers, retailers and suppliers, with four roles: Admin, Vendor, Retailer and Distributor. Covers the catalogue, inventory, orders, shipments, PDF invoicing and purchase orders, with real-time updates over websockets and background jobs on Celery.",
    stack: ["Django", "DRF", "Celery", "MySQL", "Next.js"],
    images: ["/projects/kiraj/1.png"],
    size: "medium"
  },
  {
    slug: "sssmartonline",
    title: "SSSmartOnline",
    tag: "Freelance",
    addressBar: "sssmartonline.com/admin",
    description:
      "A poultry and meat business with an online storefront (cutting sizes, cart, WhatsApp orders) and a lightweight back office with a point-of-sale counter, invoice printing and sales reporting.",
    stack: ["Django", "React"],
    images: ["/projects/sssmartonline/1.png", "/projects/sssmartonline/2.png"],
    size: "medium"
  },
  {
    slug: "raw-arch-film",
    title: "The Raw Arch Film — Quote Platform",
    tag: "Freelance",
    addressBar: "rawarch.studio",
    description:
      "A quote-request site for a Bengaluru film studio. Clients pick a service and package in a public quote wizard, and the studio manages enquiries, services, packages, add-ons and portfolio from an admin panel.",
    stack: ["Next.js", "React", "TypeScript"],
    images: ["/projects/rawarch/1.png", "/projects/rawarch/2.png"]
  },
  {
    slug: "algo-trading",
    title: "Algo Trading Platform",
    tag: "Personal",
    addressBar: "localhost:8000/trades",
    description: "A self-built trading platform with a live dashboard for open positions and P&L, plus backtest results. It runs MA crossover and RSI mean-reversion strategies through Zerodha, for personal use.",
    stack: ["Python"],
    images: ["/projects/algo-trading/1.png"],
    size: "small"
  },
  {
    slug: "appdrop",
    title: "AppDrop",
    tag: "Personal",
    addressBar: "appdrop.app/applications",
    description:
      "A Vercel-style deployment platform. Upload a project as a ZIP (node_modules stripped out) and AppDrop detects the framework, Node version and package manager, validates the structure, then builds and serves it live.",
    stack: ["React", "Vite", "Node"],
    images: ["/projects/appdrop/1.png"],
    size: "small"
  },
  {
    slug: "hls-streaming",
    title: "HLS Streaming Service",
    tag: "Personal",
    addressBar: "stream.local/live",
    description:
      "VidStream, a video streaming app with a recommended feed, grid and list views, uploads and notifications. Django handles the core app, with a FastAPI microservice for the HLS streaming path.",
    stack: ["Django", "FastAPI"],
    images: ["/projects/hls-streaming/1.png"],
    size: "small"
  },
  {
    slug: "farmer-marketplace",
    title: "FarmAid — Farm Direct Marketplace",
    tag: "Personal",
    addressBar: "farmaid.app/market",
    description:
      "A direct-selling platform connecting farmers to customers, with three roles: customers browse and order, farmers list crops and run quick sales, and admins manage users, farmers, orders and categories. Real-time order updates run over Channels and Redis.",
    stack: ["Django", "Channels", "Redis"],
    images: [
      "/projects/farmer-marketplace/1.png",
      "/projects/farmer-marketplace/2.png",
      "/projects/farmer-marketplace/3.png"
    ],
    size: "small"
  }
];
