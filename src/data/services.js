export const servicesData = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Scalable, bespoke software systems tailored precisely to your complex business workflows and enterprise needs.",
    category: "Core Engineering",
    icon: "Cpu",
    tagline: "Tailored Architecture for Complex Domains",
    deliverables: [
      "Domain-driven software architecture",
      "Modular microservices or modular monoliths",
      "Automated CI/CD pipelines & containerization",
      "Full IP ownership & comprehensive documentation"
    ],
    techStack: [".NET Core", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
    highlight: "Zero legacy baggage with high-scalability guarantees"
  },
  {
    id: "web-app",
    title: "Web Application Development",
    shortDesc: "High-performance, responsive single-page and server-rendered web applications built with modern frameworks.",
    category: "Frontend & Web",
    icon: "Globe",
    tagline: "Blazing Fast, Responsive Web Experiences",
    deliverables: [
      "Next.js / React enterprise web applications",
      "State management & optimized bundle sizes",
      "Sub-second First Contentful Paint (FCP)",
      "Strict WCAG 2.1 AA accessibility compliance"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    highlight: "Lighthouse scores consistently exceeding 95+"
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android delivering fluid user experiences and offline resilience.",
    category: "Mobile",
    icon: "Smartphone",
    tagline: "Intuitive, High-Performance Mobile Apps",
    deliverables: [
      "Cross-platform React Native / Flutter apps",
      "Biometric auth, offline caching & sync",
      "App Store & Google Play compliance & publishing",
      "Real-time push notifications & analytics"
    ],
    techStack: ["React Native", "TypeScript", "iOS", "Android", "Firebase"],
    highlight: "Smooth 60fps animations with 99.9% crash-free sessions"
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    shortDesc: "Secure, highly available RESTful and GraphQL APIs engineered to handle millions of transactions reliably.",
    category: "Cloud & Backend",
    icon: "Server",
    tagline: "Resilient Microservices & API Gateways",
    deliverables: [
      "High-throughput REST & GraphQL endpoints",
      "Rate-limiting, OAuth2/JWT security & audit logs",
      "Database connection pooling & Redis caching",
      "OpenAPI/Swagger auto-generated documentation"
    ],
    techStack: ["ASP.NET Core", "Node.js", "Go", "PostgreSQL", "Redis"],
    highlight: "Sub-50ms p95 latency under high concurrency"
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    shortDesc: "Full-cycle JavaScript/TypeScript software delivery utilizing MongoDB, Express.js, React, and Node.js.",
    category: "Core Engineering",
    icon: "Layers",
    tagline: "Unified Full-Stack JavaScript Delivery",
    deliverables: [
      "Type-safe end-to-end fullstack architecture",
      "MongoDB replica set optimization & sharding",
      "Micro-frontend and component library creation",
      "Automated testing with Jest & Playwright"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript"],
    highlight: "Rapid feature velocity with isomorphic data contracts"
  },
  {
    id: "dotnet-development",
    title: ".NET / ASP.NET Core Development",
    shortDesc: "Enterprise-grade C# backends, Web APIs, and distributed event-driven systems built for high-security sectors.",
    category: "Enterprise & Integration",
    icon: "ShieldCheck",
    tagline: "Enterprise Reliability, Throughput & Security",
    deliverables: [
      "ASP.NET Core Web API with clean architecture",
      "Entity Framework Core & Dapper high-speed queries",
      "IdentityServer / OAuth / Active Directory auth",
      "Docker containerized multi-platform runtimes"
    ],
    techStack: ["C#", ".NET 8/9", "ASP.NET Core", "SQL Server", "Azure"],
    highlight: "Engineered for banking, healthcare, and enterprise ERP"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Design Systems",
    shortDesc: "Design systems, clickable prototypes, and user journeys engineered with developer handoff in mind.",
    category: "Frontend & Web",
    icon: "Palette",
    tagline: "Precision Design Systems That Scale",
    deliverables: [
      "Figma design system with reusable atomic components",
      "Interactive high-fidelity prototypes",
      "User research, persona mapping & usability testing",
      "Detailed token specs & developer handoff guidelines"
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook"],
    highlight: "Seamless alignment between visual design and code"
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    shortDesc: "Modern cloud architecture on AWS and Azure with automated CI/CD pipelines, Docker, and Kubernetes.",
    category: "Cloud & Backend",
    icon: "Cloud",
    tagline: "Automated, Zero-Downtime Infrastructure",
    deliverables: [
      "Terraform / Bicep Infrastructure as Code (IaC)",
      "GitHub Actions & GitLab CI/CD automation",
      "Kubernetes cluster setup & autoscaling",
      "Centralized logging, Prometheus & Grafana alerting"
    ],
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    highlight: "Multi-region failover and 99.99% uptime SLAs"
  },
  {
    id: "database-design",
    title: "Database Design & Optimization",
    shortDesc: "Relational and NoSQL schemas optimized for write-heavy workloads, indexing, and high availability.",
    category: "Cloud & Backend",
    icon: "Database",
    tagline: "High-Throughput Schemas & Query Tuning",
    deliverables: [
      "Normalized relational schemas & NoSQL document modeling",
      "Query profiling, index optimization & slow query tuning",
      "Data migration scripts with zero data downtime",
      "Point-in-time recovery & automated backups"
    ],
    techStack: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
    highlight: "Dramatic 10x query speedups on legacy datasets"
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    shortDesc: "Custom headless storefronts, checkout microservices, and inventory sync systems built for high conversion.",
    category: "Frontend & Web",
    icon: "ShoppingBag",
    tagline: "Headless, High-Conversion Commerce",
    deliverables: [
      "Headless commerce frontends with Next.js & Shopify/Stripe",
      "Real-time inventory sync & order management",
      "Multi-currency, localization, and tax compliance",
      "Instant checkout flows with sub-300ms response"
    ],
    techStack: ["Next.js", "Stripe API", "Node.js", "PostgreSQL", "Redis"],
    highlight: "Proven handling of peak flash-sale concurrency"
  },
  {
    id: "erp-business-solutions",
    title: "ERP & Business Solutions",
    shortDesc: "Custom ERP platforms, warehouse logistics software, and workflow automation unifying disparate business tools.",
    category: "Enterprise & Integration",
    icon: "Briefcase",
    tagline: "Unified Operations for Modern Enterprises",
    deliverables: [
      "Custom ERP modules (Inventory, Payroll, Billing, CRM)",
      "Role-based access control (RBAC) & audit logging",
      "Third-party accounting & CRM integrations",
      "Executive real-time business intelligence dashboards"
    ],
    techStack: [".NET", "React", "SQL Server", "Power BI", "Azure"],
    highlight: "Eliminates departmental silos and manual data re-entry"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    shortDesc: "Strategic guidance on migrating legacy monoliths to modern cloud systems, microservices, and automated workflows.",
    category: "Enterprise & Integration",
    icon: "TrendingUp",
    tagline: "De-Risked Modernization Roadmaps",
    deliverables: [
      "Technical debt audit & architecture assessments",
      "Cloud migration strategy & phase-by-phase rollout",
      "Engineering culture & code review guidelines",
      "Executive TCO and scalability cost projections"
    ],
    techStack: ["System Architecture", "Cloud Audits", "Microservices"],
    highlight: "Accelerates time-to-market while reducing operational costs"
  }
];

export const serviceCategories = [
  "All Services",
  "Core Engineering",
  "Cloud & Backend",
  "Frontend & Web",
  "Enterprise & Integration",
  "Mobile"
];
