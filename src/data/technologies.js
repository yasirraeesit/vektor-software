export const techCategories = [
  "All",
  "Frontend",
  "Backend & APIs",
  "Databases",
  "Cloud & DevOps",
  "Architecture"
];

export const technologiesData = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    tag: "UI Library",
    level: "Core Production Stack",
    description: "Component-driven user interfaces with concurrent rendering, custom hooks, and state hydration.",
    useCase: "Complex web applications, interactive dashboards, and design systems.",
    highlight: "React 19 & Next.js App Router expert implementation"
  },
  {
    name: "Next.js",
    category: "Frontend",
    tag: "React Framework",
    level: "Core Production Stack",
    description: "Server-side rendering, static site generation, API edge routes, and automated image/font optimizations.",
    useCase: "SEO-vital portals, enterprise SaaS frontends, and dynamic web apps.",
    highlight: "Sub-second server response times & edge caching"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    tag: "Language",
    level: "Standard Across All Projects",
    description: "Strict static typing across client and server layers to catch bugs at compile-time and enforce data contracts.",
    useCase: "End-to-end type safety from database models to frontend components.",
    highlight: "Zero runtime type mismatches across microservices"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tag: "CSS Engine",
    level: "Design Standard",
    description: "Utility-first design token orchestration with arbitrary value precision, modern dark-mode, and responsive grids.",
    useCase: "Ultra-lean CSS output, custom design systems, and rapid aesthetic iteration.",
    highlight: "Zero unused CSS bundled in production"
  },
  {
    name: "Vite",
    category: "Frontend",
    tag: "Build Tooling",
    level: "Build Standard",
    description: "Instant Hot Module Replacement (HMR) powered by native ES modules and lightning-fast Rollup builds.",
    useCase: "High-velocity frontend engineering and optimized production bundling.",
    highlight: "Instant dev server startup in under 300ms"
  },

  // Backend
  {
    name: "C# / .NET",
    category: "Backend & APIs",
    tag: "Enterprise Core",
    level: "Enterprise Core",
    description: "High-throughput asynchronous runtimes, memory-efficient garbage collection, and robust enterprise patterns.",
    useCase: "Financial transaction engines, healthcare compliance, and enterprise ERP backends.",
    highlight: "Millions of requests per second with minimal memory footprint"
  },
  {
    name: "ASP.NET Core",
    category: "Backend & APIs",
    tag: "Web Framework",
    level: "Enterprise Web API",
    description: "Clean architecture Web APIs, dependency injection, middleware pipelines, and integrated security protocols.",
    useCase: "Mission-critical REST APIs, gRPC streaming, and microservice meshes.",
    highlight: "Top tier TechEmpower benchmark throughput"
  },
  {
    name: "Node.js",
    category: "Backend & APIs",
    tag: "Runtime",
    level: "Core Production Stack",
    description: "Non-blocking event-driven I/O engine ideal for real-time WebSocket communication and lightweight microservices.",
    useCase: "Real-time streaming, event processing, and microservice coordination.",
    highlight: "Handling thousands of concurrent WebSocket connections"
  },
  {
    name: "Express.js",
    category: "Backend & APIs",
    tag: "Backend Framework",
    level: "Core Production Stack",
    description: "Minimalist, unopinionated routing layer powering lightweight API gateways and microservice endpoints.",
    useCase: "REST endpoints, auth middleware, and proxy routing.",
    highlight: "Clean middleware composition and predictable performance"
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    tag: "Relational DB",
    level: "Primary Database",
    description: "ACID-compliant relational database engine with JSONB support, advanced indexing, and connection pooling.",
    useCase: "Primary transactional data store for enterprise SaaS and complex schemas.",
    highlight: "Partitioning, vector search (pgvector), and high-availability replicas"
  },
  {
    name: "SQL Server",
    category: "Databases",
    tag: "Enterprise RDBMS",
    level: "Enterprise Storage",
    description: "Microsoft's enterprise data platform featuring In-Memory OLTP, temporal tables, and transparent data encryption.",
    useCase: "Corporate reporting, enterprise ERPs, and compliance-mandated audit storage.",
    highlight: "Columnstore indexing for sub-second analytical aggregations"
  },
  {
    name: "MongoDB",
    category: "Databases",
    tag: "Document NoSQL",
    level: "NoSQL Standard",
    description: "Flexible JSON-like document model for high write velocity, dynamic schemas, and horizontal sharding.",
    useCase: "Content management, event catalogues, and IoT timeseries telemetry.",
    highlight: "Schema validation and automated replica set failover"
  },
  {
    name: "Redis",
    category: "Databases",
    tag: "In-Memory Cache",
    level: "Performance Tier",
    description: "Sub-millisecond in-memory data store for caching, distributed locking, session state, and pub/sub queues.",
    useCase: "API rate limiting, real-time leaderboards, and session invalidation.",
    highlight: "Sub-2ms cache hits reducing DB load by up to 85%"
  },

  // Cloud & DevOps
  {
    name: "Microsoft Azure",
    category: "Cloud & DevOps",
    tag: "Cloud Provider",
    level: "Enterprise Cloud",
    description: "Azure App Services, AKS Kubernetes, Azure SQL, Key Vault, and Azure DevOps integration.",
    useCase: "Enterprise deployments, hybrid-cloud setups, and .NET cloud hosting.",
    highlight: "SOC2, HIPAA, and ISO 27001 compliant cloud architectures"
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    tag: "Cloud Provider",
    level: "Global Cloud",
    description: "Amazon ECS/EKS, Lambda serverless, S3, RDS, CloudFront CDN, and IAM least-privilege security.",
    useCase: "Global multi-region SaaS distribution, high scalability, and serverless compute.",
    highlight: "Auto-scaling infrastructure with automated health self-healing"
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    tag: "Containerization",
    level: "Deployment Standard",
    description: "Reproducible container builds eliminating 'it works on my machine' issues across dev, staging, and prod.",
    useCase: "Standardized microservice runtime packaging and local sandbox isolation.",
    highlight: "Multi-stage minimal distroless production container images"
  },
  {
    name: "CI/CD & Git",
    category: "Cloud & DevOps",
    tag: "Automation",
    level: "Workflow Standard",
    description: "GitHub Actions & automated testing pipelines executing linting, unit tests, security scans, and auto-deployments.",
    useCase: "Continuous integration, automated pull request validation, and zero-downtime releases.",
    highlight: "Deployment cycles reduced from weeks to minutes with zero rollback incidents"
  },

  // Architecture
  {
    name: "Microservices & Clean Arch",
    category: "Architecture",
    tag: "System Design",
    level: "Architectural Pattern",
    description: "Domain-Driven Design (DDD), CQRS, and loose coupling ensuring codebases remain maintainable for 5+ years.",
    useCase: "Large-scale systems with multiple autonomous engineering teams.",
    highlight: "Isolated failure domains preventing system-wide outages"
  }
];
