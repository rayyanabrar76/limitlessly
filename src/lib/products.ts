/**
 * The catalog.
 *
 * Every sellable engagement is a "product" here. No prices anywhere by design —
 * the store runs on Add to Quote, and scope is priced after a conversation.
 *
 * `icon` is a string key, not a component, so this module stays safe to import
 * from both server and client components. Resolve it via <ProductIcon />.
 */

export type CategoryId = "ai" | "web" | "mobile" | "growth";

export type Category = {
  id: CategoryId;
  label: string;
  blurb: string;
  icon: string;
  accent: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: CategoryId;
  badge?: string;
  delivery: string;
  bestFor: string;
  deliverables: string[];
  stack: string[];
  icon: string;
  accent: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    id: "ai",
    label: "AI Solutions",
    blurb: "Platforms, agents, and intelligence wired into your product.",
    icon: "Sparkles",
    accent: "#6366f1",
  },
  {
    id: "web",
    label: "Web & Commerce",
    blurb: "Sites, web apps, and stores built to convert and scale.",
    icon: "Globe",
    accent: "#8b5cf6",
  },
  {
    id: "mobile",
    label: "Mobile & Software",
    blurb: "Apps, internal tools, and the systems that connect them.",
    icon: "Smartphone",
    accent: "#0ea5e9",
  },
  {
    id: "growth",
    label: "Growth & Care",
    blurb: "Speed, search, payments, and keeping it all running.",
    icon: "TrendingUp",
    accent: "#34d399",
  },
];

export const products: Product[] = [
  // ─────────────────────────── AI Solutions ───────────────────────────
  {
    slug: "ai-saas-platform",
    name: "AI SaaS Platform",
    tagline: "Your full product, engineered end-to-end with AI at the core.",
    description:
      "The complete build. We take your idea and ship a real, multi-tenant SaaS product on architecture that holds up — authentication, billing, dashboards, admin, and AI features that do genuine work rather than sit in a demo. Designed for your first user and structured for your millionth.",
    category: "ai",
    badge: "Flagship",
    delivery: "From 6 weeks",
    bestFor: "Founders building a product, not a prototype.",
    deliverables: [
      "Product design & full UX flow",
      "Multi-tenant architecture",
      "AI / LLM core features",
      "Auth, billing & role-based dashboards",
      "Scalable cloud infrastructure",
      "Launch, documentation & handover",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Stripe"],
    icon: "Boxes",
    accent: "#6366f1",
    featured: true,
  },
  {
    slug: "custom-ai-agent",
    name: "Custom AI Agent",
    tagline: "An agent that runs a real part of your operation, around the clock.",
    description:
      "We build an agent scoped to one job you actually need done — qualifying leads, triaging support, moving data between systems, drafting the work your team repeats every day. It plugs into your existing stack, and we instrument it so you can see exactly what it did and why.",
    category: "ai",
    badge: "Popular",
    delivery: "From 2 weeks",
    bestFor: "Teams drowning in repetitive, rules-based work.",
    deliverables: [
      "Agent design & scoping workshop",
      "Tool and API wiring into your stack",
      "Guardrails and fallback handling",
      "Monitoring dashboard & eval suite",
      "Prompt tuning against real cases",
      "Team walkthrough & handover",
    ],
    stack: ["Claude", "OpenAI", "Node.js", "Webhooks"],
    icon: "Bot",
    accent: "#8b5cf6",
    featured: true,
  },
  {
    slug: "rag-semantic-search",
    name: "RAG & Semantic Search",
    tagline: "Let people ask your documents questions and get real answers.",
    description:
      "Your knowledge base, contracts, product docs, or internal wiki turned into something you can query in plain language — with citations back to the source. We handle ingestion, chunking, embeddings, and the retrieval tuning that separates a search box people trust from one they abandon.",
    category: "ai",
    delivery: "From 3 weeks",
    bestFor: "Companies sitting on documents nobody can find anything in.",
    deliverables: [
      "Document ingestion pipeline",
      "Vector store setup & tuning",
      "Cited, source-linked answers",
      "Relevance evaluation harness",
      "Search UI or API endpoint",
      "Re-indexing automation",
    ],
    stack: ["Embeddings", "pgvector", "Next.js", "TypeScript"],
    icon: "Search",
    accent: "#a78bfa",
  },
  {
    slug: "ai-support-chatbot",
    name: "AI Support Chatbot",
    tagline: "A support agent trained on your product that deflects real tickets.",
    description:
      "Not a canned FAQ widget. We train it on your documentation, past tickets, and product behaviour, give it a clear escalation path to a human, and tune it until the answers are ones you would be comfortable sending yourself. Deployed on your site with full conversation logging.",
    category: "ai",
    delivery: "From 2 weeks",
    bestFor: "Support inboxes answering the same questions daily.",
    deliverables: [
      "Knowledge base training",
      "Branded chat widget",
      "Human escalation handoff",
      "Conversation logs & analytics",
      "Tone and accuracy tuning",
      "Ongoing retraining workflow",
    ],
    stack: ["Claude", "Next.js", "Streaming", "PostgreSQL"],
    icon: "MessagesSquare",
    accent: "#d946ef",
  },
  {
    slug: "ai-feature-integration",
    name: "AI Feature Integration",
    tagline: "You already have a product. We add the intelligence to it.",
    description:
      "Copilots, generation, recommendations, summarization, smart search — dropped into the product you have already built, in your existing codebase and conventions. We work inside your repo, match your patterns, and leave your team able to maintain what we shipped.",
    category: "ai",
    delivery: "From 3 weeks",
    bestFor: "Existing products that need to catch up on AI.",
    deliverables: [
      "Codebase audit & integration plan",
      "In-product copilot or generation",
      "Recommendation logic",
      "Cost and latency optimization",
      "Evaluation & tuning pass",
      "Developer documentation",
    ],
    stack: ["OpenAI", "Claude", "Your existing stack"],
    icon: "Blocks",
    accent: "#818cf8",
  },
  {
    slug: "mvp-sprint",
    name: "AI MVP Sprint",
    tagline: "Idea to a launched, fundable product — fast.",
    description:
      "A focused sprint that takes a founder's vision and ships something real and live. Not a clickable mockup — a working product with a genuine AI feature at its centre, deployed to production, polished enough to put in front of investors and honest users on the same day.",
    category: "ai",
    badge: "Best Value",
    delivery: "From 4 weeks",
    bestFor: "Founders who need something live before the next raise.",
    deliverables: [
      "Rapid product design",
      "Full-stack build",
      "One core AI feature, done properly",
      "Investor-ready polish",
      "Deployed to production",
      "Documented path to scale",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    icon: "Rocket",
    accent: "#0ea5e9",
    featured: true,
  },

  // ────────────────────────── Web & Commerce ──────────────────────────
  {
    slug: "landing-page",
    name: "High-Converting Landing Page",
    tagline: "One page, engineered to turn visitors into enquiries.",
    description:
      "A single page built around one action you want taken. Fast, responsive, properly structured for search, with copy and layout shaped around the decision your visitor is actually making. Analytics wired in from day one so you can see what is working.",
    category: "web",
    badge: "Quick Win",
    delivery: "From 1 week",
    bestFor: "Campaigns, launches, and validating an offer.",
    deliverables: [
      "Custom design, no template",
      "Conversion-focused copy structure",
      "Mobile-first responsive build",
      "Contact or booking integration",
      "Analytics & event tracking",
      "Deployed and live",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    icon: "MousePointerClick",
    accent: "#f59e0b",
  },
  {
    slug: "business-website",
    name: "Business Website",
    tagline: "The site your business should have had years ago.",
    description:
      "A complete multi-page site — home, services, about, contact, and whatever else your business needs — designed properly and built to load instantly. Structured for search from the ground up, with a content setup that lets you make edits without calling a developer every time.",
    category: "web",
    delivery: "From 2 weeks",
    bestFor: "Established businesses with a site that undersells them.",
    deliverables: [
      "Full multi-page design",
      "Responsive across every device",
      "On-page SEO structure",
      "Contact forms & integrations",
      "Editable content setup",
      "Launch & domain configuration",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    icon: "Globe",
    accent: "#8b5cf6",
    featured: true,
  },
  {
    slug: "custom-web-app",
    name: "Custom Web App",
    tagline: "A real application, not a website with forms bolted on.",
    description:
      "User accounts, permissions, data models, dashboards, and the workflows your business actually runs on. We design the system properly, build it to be maintained rather than rewritten, and hand it over with the documentation to prove it.",
    category: "web",
    delivery: "From 4 weeks",
    bestFor: "Businesses running on spreadsheets that outgrew them.",
    deliverables: [
      "System & data architecture",
      "Authentication and permissions",
      "Core workflow implementation",
      "Reporting dashboards",
      "Admin tooling",
      "Deployment & handover docs",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    icon: "LayoutDashboard",
    accent: "#6366f1",
  },
  {
    slug: "ecommerce-store",
    name: "Custom E-Commerce Store",
    tagline: "A store built to sell, with the admin panel to run it.",
    description:
      "Products, variants, cart, checkout, payments, orders, and a proper admin panel your team can operate without training. Built custom rather than themed, so the buying experience matches your business instead of the other way round.",
    category: "web",
    badge: "Popular",
    delivery: "From 4 weeks",
    bestFor: "Brands outgrowing off-the-shelf store platforms.",
    deliverables: [
      "Product catalog & variants",
      "Cart and secure checkout",
      "Payment gateway integration",
      "Order & inventory management",
      "Full admin panel",
      "Customer accounts",
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    icon: "ShoppingBag",
    accent: "#d946ef",
    featured: true,
  },
  {
    slug: "shopify-storefront",
    name: "Shopify Storefront",
    tagline: "Keep Shopify's backend. Replace the front end with something fast.",
    description:
      "A custom headless storefront on top of your existing Shopify setup. You keep the order management, inventory, and apps your team already knows, and your customers get a storefront that loads in a fraction of the time and looks nothing like a theme.",
    category: "web",
    delivery: "From 3 weeks",
    bestFor: "Shopify stores held back by a slow, generic theme.",
    deliverables: [
      "Headless storefront build",
      "Shopify Storefront API integration",
      "Custom product & collection pages",
      "Optimized checkout handoff",
      "Speed & Core Web Vitals tuning",
      "Migration with zero downtime",
    ],
    stack: ["Next.js", "Shopify API", "Tailwind CSS"],
    icon: "Store",
    accent: "#34d399",
  },
  {
    slug: "admin-dashboard",
    name: "Admin Dashboard",
    tagline: "One screen to run the whole operation.",
    description:
      "A control panel over your existing data — customers, orders, content, users, whatever you manage. Full create, read, update, delete, with role-based access so the right people see the right things, and reporting that answers the questions you keep asking manually.",
    category: "web",
    delivery: "From 2 weeks",
    bestFor: "Teams managing data through a database client.",
    deliverables: [
      "Full CRUD interface",
      "Role-based access control",
      "Search, filters & bulk actions",
      "Charts and reporting",
      "Audit log",
      "Export to CSV",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    icon: "Gauge",
    accent: "#818cf8",
  },

  // ───────────────────────── Mobile & Software ─────────────────────────
  {
    slug: "mobile-app",
    name: "Cross-Platform Mobile App",
    tagline: "One build, iOS and Android, all the way to the stores.",
    description:
      "A native-feeling app for both platforms from a single codebase — push notifications, offline handling, deep links, the details that separate an app people keep from one they delete. We take it through review and submission rather than handing you a build file.",
    category: "mobile",
    delivery: "From 6 weeks",
    bestFor: "Products that need to live on a home screen.",
    deliverables: [
      "iOS and Android from one codebase",
      "Native UI patterns per platform",
      "Push notifications",
      "Offline support & sync",
      "App Store & Play Store submission",
      "Crash reporting & analytics",
    ],
    stack: ["React Native", "Expo", "TypeScript"],
    icon: "Smartphone",
    accent: "#0ea5e9",
    featured: true,
  },
  {
    slug: "custom-software",
    name: "Custom Internal Software",
    tagline: "Software shaped around how your business already works.",
    description:
      "The tool that does not exist off the shelf because your process is specific to you. We map how the work actually happens, design a system around it rather than forcing you into someone else's workflow, and build it to be handed over cleanly.",
    category: "mobile",
    delivery: "From 4 weeks",
    bestFor: "Operations stitched together with manual workarounds.",
    deliverables: [
      "Process discovery & mapping",
      "System design",
      "Full application build",
      "Integration with existing tools",
      "Team training session",
      "Source code & documentation",
    ],
    stack: ["Next.js", "PostgreSQL", "TypeScript"],
    icon: "Code2",
    accent: "#94a3b8",
  },
  {
    slug: "api-integration",
    name: "API & Systems Integration",
    tagline: "Make the tools you already pay for talk to each other.",
    description:
      "CRM, accounting, inventory, email, payments — connected so data moves automatically instead of through someone's copy and paste. We build it with retries, error handling, and logging, because integrations that fail silently are worse than no integration at all.",
    category: "mobile",
    delivery: "From 1 week",
    bestFor: "Anyone re-entering the same data into two systems.",
    deliverables: [
      "Integration architecture",
      "Two-way data sync",
      "Webhook handling",
      "Retry & error recovery",
      "Failure alerting",
      "Monitoring dashboard",
    ],
    stack: ["Node.js", "REST", "Webhooks", "TypeScript"],
    icon: "Workflow",
    accent: "#f59e0b",
  },
  {
    slug: "database-architecture",
    name: "Database Architecture",
    tagline: "Get the data model right before it becomes expensive to change.",
    description:
      "Schema design, indexing, migrations, and query optimization — either for something new or for a database that has started buckling under load. The unglamorous foundation that decides whether your product is still fast at ten thousand users.",
    category: "mobile",
    delivery: "From 1 week",
    bestFor: "Products where queries have started timing out.",
    deliverables: [
      "Schema design or review",
      "Index & query optimization",
      "Migration strategy",
      "Backup & recovery plan",
      "Load testing",
      "Documented data model",
    ],
    stack: ["PostgreSQL", "Prisma", "SQL"],
    icon: "Database",
    accent: "#a78bfa",
  },

  // ─────────────────────────── Growth & Care ───────────────────────────
  {
    slug: "technical-seo-setup",
    name: "Technical SEO Setup",
    tagline: "Everything Google needs to find, read, and rank your site.",
    description:
      "Metadata, structured data, sitemaps, robots rules, canonical tags, Open Graph previews, and Search Console properly configured. The technical groundwork that does not make a site rank on its own but without which nothing else you do will.",
    category: "growth",
    badge: "Quick Win",
    delivery: "From 3 days",
    bestFor: "Good sites that are invisible in search.",
    deliverables: [
      "Full metadata pass",
      "JSON-LD structured data",
      "Sitemap & robots configuration",
      "Open Graph & social previews",
      "Search Console setup",
      "Indexing audit & fixes",
    ],
    stack: ["Next.js", "JSON-LD", "Search Console"],
    icon: "Search",
    accent: "#34d399",
  },
  {
    slug: "performance-audit",
    name: "Performance Audit",
    tagline: "Find out exactly what is making your site slow, then fix it.",
    description:
      "A full Core Web Vitals audit — LCP, INP, CLS — measured on real devices rather than a fast laptop. You get a prioritized list of what is costing you the most, and we implement the fixes rather than emailing you a PDF and wishing you luck.",
    category: "growth",
    delivery: "From 1 week",
    bestFor: "Sites losing visitors before the page finishes loading.",
    deliverables: [
      "Core Web Vitals measurement",
      "Bundle & asset analysis",
      "Prioritized fix list",
      "Implementation of the fixes",
      "Image & font optimization",
      "Before / after report",
    ],
    stack: ["Lighthouse", "Next.js", "Vercel Analytics"],
    icon: "Zap",
    accent: "#f59e0b",
  },
  {
    slug: "payments-billing",
    name: "Payments & Billing Setup",
    tagline: "Take money properly — subscriptions, invoices, and all.",
    description:
      "Stripe integrated the way it should be: subscriptions, one-off payments, trials, upgrades, downgrades, failed payment recovery, and a customer billing portal. Webhooks handled correctly so your database and Stripe never drift apart.",
    category: "growth",
    delivery: "From 1 week",
    bestFor: "Products ready to charge for the first time.",
    deliverables: [
      "Stripe integration",
      "Subscription & one-off plans",
      "Customer billing portal",
      "Webhook handling & reconciliation",
      "Failed payment recovery",
      "Invoices & receipts",
    ],
    stack: ["Stripe", "Next.js", "Webhooks"],
    icon: "CreditCard",
    accent: "#6366f1",
  },
  {
    slug: "maintenance-retainer",
    name: "Maintenance & Support",
    tagline: "Someone on call so it keeps working after launch.",
    description:
      "A monthly retainer covering updates, security patches, bug fixes, uptime monitoring, and a set block of hours for small changes. Launching is the start of a product's life, not the end — this is the part most agencies quietly walk away from.",
    category: "growth",
    delivery: "Monthly",
    bestFor: "Live products with nobody watching them.",
    deliverables: [
      "Dependency & security updates",
      "Uptime monitoring & alerts",
      "Bug fixes",
      "Monthly hours for changes",
      "Automated backups",
      "Priority response window",
    ],
    stack: ["Vercel", "Monitoring", "GitHub"],
    icon: "ShieldCheck",
    accent: "#34d399",
  },
];

// ───────────────────────────── helpers ─────────────────────────────

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function productsByCategory(id: CategoryId): Product[] {
  return products.filter((p) => p.category === id);
}

export const featuredProducts = products.filter((p) => p.featured);

export function relatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
