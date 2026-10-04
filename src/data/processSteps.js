export const processStepsData = [
  {
    step: "01",
    phase: "Discover",
    title: "Requirements & Domain Discovery",
    duration: "Week 1 - 2",
    summary: "Understand the business model, user personas, technical constraints, and long-term scalability goals.",
    details: "We conduct deep-dive technical workshops with your stakeholders to outline business requirements, security obligations, compliance mandates, and integration touchpoints.",
    deliverables: [
      "Technical discovery document",
      "Scope of Work (SOW) & feature breakdown",
      "User persona mapping & user journey flows",
      "Risk assessment & mitigation plan"
    ],
    tools: ["Miro", "Confluence", "Jira", "Figma", "Slack"]
  },
  {
    step: "02",
    phase: "Plan",
    title: "Architecture & Systems Blueprint",
    duration: "Week 2 - 3",
    summary: "Define architecture, technology stack, database schemas, API contracts, and milestone roadmaps.",
    details: "We design the foundational blueprints: choosing between monolith or microservices, planning database normalization or document models, drafting API contracts, and defining CI/CD pipelines.",
    deliverables: [
      "Software architecture diagram",
      "OpenAPI / Swagger specifications",
      "Entity relationship diagram (ERD)",
      "Sprint roadmap & milestone deliverables"
    ],
    tools: ["Lucidchart", "Swagger", "Docker", "Draw.io", "Git"]
  },
  {
    step: "03",
    phase: "Design",
    title: "UI/UX & Design Systems",
    duration: "Week 3 - 5",
    summary: "Create intuitive user experiences, design systems, interactive prototypes, and developer token specs.",
    details: "Our design team translates complex workflows into clean, accessible interfaces. We construct atomic design systems with reusable components that translate 1:1 into frontend code.",
    deliverables: [
      "High-fidelity clickable Figma prototype",
      "Comprehensive design system with tokens",
      "Responsive mobile and desktop screen states",
      "Micro-interaction and motion guidelines"
    ],
    tools: ["Figma", "Storybook", "Tailwind CSS", "Lottie"]
  },
  {
    step: "04",
    phase: "Develop",
    title: "Agile Sprints & Test-Driven Build",
    duration: "Weeks 5+",
    summary: "Build, test, integrate, and continuously deliver working software with bi-weekly sprint demos.",
    details: "Engineering proceeds in two-week agile sprints. Every commit undergoes automated linting, unit tests, and integration tests before deployment to staging environments for your review.",
    deliverables: [
      "Production-ready, type-safe clean code",
      "Bi-weekly live staging demonstrations",
      "Automated unit & end-to-end test suites (>85% coverage)",
      "Daily CI/CD continuous deployment builds"
    ],
    tools: ["VS Code", "GitHub Actions", "Jest", "Playwright", "Docker"]
  },
  {
    step: "05",
    phase: "Launch & Support",
    title: "Zero-Downtime Launch & 24/7 SLA",
    duration: "Post-Launch",
    summary: "Deploy the product to production, verify telemetry, and provide continuous maintenance and support.",
    details: "We execute zero-downtime blue/green or canary deployments, configure real-time monitoring and alerting, and stand by with dedicated SLA support and ongoing feature evolution.",
    deliverables: [
      "Zero-downtime production deployment",
      "Cloud monitoring with Grafana & Sentry alerts",
      "Technical handover & team documentation",
      "24/7 SLA maintenance & security patching"
    ],
    tools: ["AWS", "Azure", "Sentry", "Grafana", "Datadog"]
  }
];
