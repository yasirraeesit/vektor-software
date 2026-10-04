export const caseStudiesData = [
  {
    id: "apex-core-saas",
    title: "ApexCore B2B Analytics SaaS",
    category: "SaaS Platform",
    clientIndustry: "Financial Intelligence & SaaS",
    tagline: "Real-time streaming analytics engine processing 40M+ daily events with sub-second latency.",
    overview: "ApexCore required a ground-up redesign of their legacy analytics platform that was suffering from slow query times and database locks during peak reporting hours.",
    challenge: "The existing monolithic backend took over 45 seconds to generate custom revenue reports for enterprise tenants, causing customer churn and escalating infrastructure bills.",
    solution: "We re-architected the system into an event-driven microservices model using ASP.NET Core, Kafka event streams, and PostgreSQL with TimescaleDB extensions for timeseries metrics, paired with a Next.js real-time reactive dashboard.",
    metrics: [
      { label: "Query Speedup", value: "8.4x" },
      { label: "Daily Event Throughput", value: "40M+" },
      { label: "Report Latency", value: "< 450ms" },
      { label: "AWS Cloud Cost Reduction", value: "-42%" }
    ],
    techStack: ["Next.js", "TypeScript", "ASP.NET Core", "PostgreSQL", "Redis", "Docker", "AWS"],
    architectureHighlights: [
      "CQRS pattern separating read and write workloads",
      "Redis cluster caching hot tenant dashboard stats",
      "Automated blue/green deployment pipeline via GitHub Actions"
    ]
  },
  {
    id: "omniscale-ecommerce",
    title: "OmniScale Headless Commerce",
    category: "E-commerce",
    clientIndustry: "Global Retail & Apparel",
    tagline: "Headless omnichannel commerce platform built for 15,000+ simultaneous checkout requests.",
    overview: "A rapid-growth apparel brand needed an infrastructure that wouldn't crash during international Black Friday and Cyber Monday flash sales.",
    challenge: "Their previous Shopify monolith experienced checkout throttling, sluggish page loads across international markets, and cumbersome localized checkout flows.",
    solution: "We engineered a headless frontend using React and Vite deployed to global edge CDNs, backed by an ASP.NET Core checkout microservice with Stripe Elements and real-time inventory locking in Redis.",
    metrics: [
      { label: "Peak Checkout Concurrency", value: "15k req/s" },
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Conversion Rate Lift", value: "+28.4%" },
      { label: "Global Edge TTFB", value: "48ms" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "C# / .NET", "Stripe API", "Redis", "Azure"],
    architectureHighlights: [
      "Distributed atomic lock in Redis preventing inventory overselling",
      "Edge-cached product catalog with instant instant search",
      "Automated tax calculation and multi-currency localized checkouts"
    ]
  },
  {
    id: "synapse-erp",
    title: "Synapse Enterprise ERP Suite",
    category: "Custom ERP",
    clientIndustry: "Manufacturing & Supply Chain",
    tagline: "Unified ERP ecosystem connecting automated manufacturing floors, warehouse inventory, and accounting.",
    overview: "A tier-one manufacturing company was relying on five disconnected legacy systems and spreadsheets, leading to inventory discrepancies and delayed shipments.",
    challenge: "Manual data reconciliations between production lines and finance caused an estimated 14 days of accounting close delays and frequent material stockouts.",
    solution: "We developed a centralized, modern web-based ERP system with modular plugins for inventory tracking, bill of materials (BOM), automated invoicing, and role-based operator portals.",
    metrics: [
      { label: "Month-End Close Time", value: "3 Days (from 14)" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Active Floor Operators", value: "1,200+" },
      { label: "Manual Data Entry Eradicated", value: "94%" }
    ],
    techStack: [".NET 8", "C#", "SQL Server", "React", "Tailwind CSS", "Docker", "Azure"],
    architectureHighlights: [
      "Role-Based Access Control (RBAC) with Active Directory SSO",
      "Automated barcode and QR scan processing on ruggedized tablets",
      "Full audit trail compliance for ISO 9001 certifications"
    ]
  },
  {
    id: "aura-health-mobile",
    title: "Aura Health Telemedicine App",
    category: "Mobile Application",
    clientIndustry: "Digital Healthcare & MedTech",
    tagline: "HIPAA-compliant cross-platform mobile app enabling encrypted video consults and vitals tracking.",
    overview: "A national healthcare network wanted to offer patients seamless remote consultations, instant prescription renewals, and synchronized Apple Health/Google Fit vitals.",
    challenge: "Video calls in their prior prototype suffered high packet drop rates, and security compliance required end-to-end encryption for all patient health info (PHI).",
    solution: "Built with React Native and WebRTC with end-to-end encrypted video streaming, backed by a Node.js/Express backend with HIPAA-compliant audit logging and automated appointment reminders.",
    metrics: [
      { label: "App Store & Play Rating", value: "4.9 ★" },
      { label: "Telehealth Consults Hosted", value: "250,000+" },
      { label: "Call Connection Stability", value: "99.95%" },
      { label: "Security Compliance", value: "HIPAA & SOC 2" }
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "WebRTC", "PostgreSQL", "AWS S3", "Docker"],
    architectureHighlights: [
      "End-to-end encrypted peer-to-peer WebRTC video channels",
      "Biometric FaceID / Fingerprint instant authentication",
      "Offline-first encrypted local SQLite cache for patient records"
    ]
  },
  {
    id: "voltpay-api",
    title: "VoltPay Enterprise API Gateway",
    category: "Enterprise API Platform",
    clientIndustry: "FinTech & Banking Infrastructure",
    tagline: "High-throughput financial API gateway processing over $200M in monthly transactional volume.",
    overview: "A modern FinTech fintech required an enterprise-grade gateway to unify 12 different regional banking rails and credit networks under one unified REST & GraphQL API.",
    challenge: "Strict p99 latency guarantees under 60ms were required by banking partners, alongside zero tolerance for double-spend or dropped transactions.",
    solution: "We designed a microsecond-optimized API gateway in C# / ASP.NET Core utilizing idempotency keys, distributed rate-limiting, and PostgreSQL row-level isolation guarantees.",
    metrics: [
      { label: "Monthly Volume Handled", value: "$200M+" },
      { label: "p99 API Response Time", value: "38ms" },
      { label: "Service Availability SLA", value: "99.999%" },
      { label: "Failed Transaction Rate", value: "< 0.0001%" }
    ],
    techStack: ["C#", "ASP.NET Core", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
    architectureHighlights: [
      "Cryptographic request signature validation and idempotency tokens",
      "Token bucket rate limiting preventing API abuse and DDoS attacks",
      "Real-time distributed tracing with OpenTelemetry and Grafana"
    ]
  },
  {
    id: "logiroute-ai",
    title: "LogiRoute Fleet Dispatch Engine",
    category: "Business Management System",
    clientIndustry: "Logistics & Freight Transportation",
    tagline: "Dynamic route planning and real-time fleet telematics system saving 2,400+ fuel hours weekly.",
    overview: "A freight carrier with 450+ cross-country trucks needed automated dispatching that accounted for live traffic, driver rest mandates, and fuel consumption.",
    challenge: "Dispatchers were manually plotting routes on spreadsheets, resulting in sub-optimal truck loads and missed customer delivery windows.",
    solution: "We developed a full-stack dispatch platform featuring a MERN stack interface with live OpenStreetMap/Leaflet integration, automated route clustering, and driver mobile web portals.",
    metrics: [
      { label: "Weekly Fuel Hours Saved", value: "2,400 hrs" },
      { label: "On-Time Delivery Rate", value: "98.7%" },
      { label: "Driver Route Satisfaction", value: "94%" },
      { label: "Fleet Capacity Utilization", value: "+31%" }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "Docker"],
    architectureHighlights: [
      "Live WebSocket updates streaming vehicle GPS telemetry to central dispatch",
      "Dynamic geofencing triggering automated arrival notifications",
      "Automated electronic logging device (ELD) hours-of-service compliance"
    ]
  }
];

export const portfolioCategories = [
  "All",
  "SaaS Platform",
  "E-commerce",
  "Custom ERP",
  "Mobile Application",
  "Enterprise API Platform",
  "Business Management System"
];
