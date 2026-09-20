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
      "A large-scale IMS covering QMS, EMS, OHS and ENMS modules for enterprise clients, with role-based access control spanning over 100 distinct permissions. My work sat mostly in the backend — modeling the permission structure and the workflows built on top of it.",
    stack: ["Django", "React", "Celery", "EC2", "Railway"],
    images: ["/projects/xims/1.jpg", "/projects/xims/2.jpg", "/projects/xims/3.jpg"],
    featured: true
  },
  {
    slug: "rentbiz",
    title: "RentBiz",
    tag: "Hoztox",
    addressBar: "rentbiz.app",
    description:
      "A property rental management platform — listings, tenancy workflows and background jobs, deployed and backed up on AWS EC2 and S3.",
    stack: ["Django", "React", "Celery", "AWS S3"],
    images: ["/projects/rentbiz/1.jpg", "/projects/rentbiz/2.jpg"],
    size: "medium"
  },
  {
    slug: "sssmartonline",
    title: "SSSmartOnline",
    tag: "Freelance",
    addressBar: "sssmartonline.com/admin",
    description:
      "A small e-commerce storefront paired with a lightweight backend ERP — WhatsApp order flow, invoice printing and sales reporting.",
    stack: ["Django", "React"],
    images: ["/projects/sssmartonline/1.jpg", "/projects/sssmartonline/2.jpg"],
    size: "medium"
  },
  {
    slug: "algo-trading",
    title: "Algo Trading Platform",
    tag: "Personal",
    addressBar: "localhost:8000/trades",
    description: "A self-built platform for running my own trading strategies, for personal use.",
    stack: ["Python"],
    images: ["/projects/algo-trading/1.jpg"],
    size: "small"
  },
  {
    slug: "hls-streaming",
    title: "HLS Streaming Service",
    tag: "Personal",
    addressBar: "stream.local/live",
    description:
      "A small live-streaming platform — Django for the core app, FastAPI microservice for the streaming path.",
    stack: ["Django", "FastAPI"],
    images: ["/projects/hls-streaming/1.jpg"],
    size: "small"
  },
  {
    slug: "farmer-marketplace",
    title: "Farmer Marketplace",
    tag: "Personal",
    addressBar: "marketplace.local/feed",
    description:
      "A direct-selling marketplace connecting farmers to customers, with real-time order updates over Channels and Redis.",
    stack: ["Django", "Channels", "Redis"],
    images: ["/projects/farmer-marketplace/1.jpg"],
    size: "small"
  }
];
