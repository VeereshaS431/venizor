export interface SubService {
  id: string;
  title: string;
  description: string;
  tags: string[];
  deliverables: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accent: string;
  metrics: { value: string; label: string };
  subServices: SubService[];
  technologies: string[];
}

export interface IndustryVertical {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  compliance: string[];
  metrics: { value: string; label: string };
  challenges: string[];
  solutions: string[];
  keyCapabilities: string[];
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  coordinates: string;
  phone: string;
  email: string;
  isPrimary?: boolean;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "software-development",
    title: "Software Development",
    tagline: "End-to-end engineering for web, mobile, cloud microservices, and enterprise platforms",
    description:
      "We architect, develop, and scale production-grade custom software systems designed for high concurrency, zero downtime, and strict security compliance.",
    iconName: "Code",
    accent: "#0072F5",
    metrics: { value: "200+", label: "Platforms Engineered" },
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Kubernetes", "PostgreSQL", "Kafka"],
    subServices: [
      {
        id: "web-development",
        title: "Website & Web App Development",
        description: "Enterprise web platforms and portals built with Next.js App Router, SSR, and partial prerendering for sub-second global load times.",
        tags: ["Next.js", "React 19", "Edge Runtimes", "Tailwind CSS"],
        deliverables: ["Responsive Enterprise Portal", "Headless CMS Integration", "Edge-Cached API Layer", "Core Web Vitals 95+ Guarantee"],
      },
      {
        id: "mobile-app-development",
        title: "Mobile App Development (iOS & Android)",
        description: "Native and cross-platform mobile apps engineered with 60fps animations, offline-first SQLite sync, and biometric authentication.",
        tags: ["React Native", "Swift", "Kotlin", "WatermelonDB"],
        deliverables: ["Cross-Platform App Store Build", "Offline Sync Engine", "Push Notification Pipelines", "Biometric Authentication Modules"],
      },
      {
        id: "custom-software",
        title: "Custom Enterprise Software",
        description: "Bespoke internal systems, ERPs, workflow orchestration engines, and high-throughput data processing microservices.",
        tags: ["Microservices", "Event-Driven", "Docker", "gRPC"],
        deliverables: ["Bespoke Architecture Blueprint", "Zero-Trust Authorization Tier", "Automated Billing & Reporting", "REST & GraphQL APIs"],
      },
      {
        id: "blockchain-development",
        title: "Blockchain & Web3 Systems",
        description: "Audited smart contracts, decentralized ledgers, treasury multi-sig vaults, and verifiable zero-knowledge proof protocols.",
        tags: ["Solidity", "EVM", "Zero-Knowledge", "Hardhat"],
        deliverables: ["Audited Smart Contracts", "Custodial & Non-Custodial Vaults", "Gas-Optimized Settlement", "Cryptographic Audit Trail"],
      },
      {
        id: "ecommerce-development",
        title: "E-Commerce & Digital Commerce",
        description: "Headless commerce architecture with automated multi-currency checkout, localized tax compliance, and omni-channel inventory sync.",
        tags: ["Shopify Plus", "Medusa", "Stripe API", "Algolia"],
        deliverables: ["Headless Storefront", "One-Click Checkout Funnel", "Real-Time Inventory Engine", "Multi-Currency Payment Gateway"],
      },
      {
        id: "qa-testing",
        title: "Quality Assurance & Automated Testing",
        description: "Comprehensive automated test suites, end-to-end regression pipelines, penetration testing, and load stress benchmarks.",
        tags: ["Playwright", "Jest", "k6 Load Testing", "Cypress"],
        deliverables: ["100% CI/CD Integrated Test Suite", "Automated Cross-Browser Regression", "Penetration Security Audit", "Performance Load Stress Report"],
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Intelligent systems powered by large language models, autonomous swarms, and predictive ML",
    description:
      "We design and deploy proprietary machine learning pipelines, multi-agent autonomous frameworks, and enterprise RAG networks embedded directly into business workflows.",
    iconName: "Cpu",
    accent: "#00D2FF",
    metrics: { value: "3.8x", label: "Throughput Surge" },
    technologies: ["PyTorch", "LangChain", "vLLM", "Pinecone", "Milvus", "OpenAI API", "Anthropic Claude", "Ollama"],
    subServices: [
      {
        id: "enterprise-ai",
        title: "Enterprise AI Development",
        description: "Custom AI systems trained on proprietary enterprise knowledge, equipped with strict guardrails and zero hallucination tolerances.",
        tags: ["Custom Agents", "Guardrails", "Data Cleansing", "Fine-Tuning"],
        deliverables: ["Proprietary Model Fine-Tuning", "Automated Data Ingestion ETL", "Evaluation Benchmark Framework", "Deterministic Guardrail Policies"],
      },
      {
        id: "rag-vector-search",
        title: "Enterprise RAG & Hybrid Vector Retrieval",
        description: "Multi-tenant vector memory architectures combining semantic vector search with dense BM25 keyword ranking for pinpoint accuracy.",
        tags: ["Pinecone", "Milvus", "Qdrant", "Hybrid Search"],
        deliverables: ["Hybrid Vector Retrieval Engine", "Document Chunking & Embedding Pipeline", "Sub-100ms Query Latency", "Metadata Filtering Engine"],
      },
      {
        id: "autonomous-agents",
        title: "Autonomous Agents & Multi-Agent Swarms",
        description: "Collaborative agent swarms that autonomously coordinate tasks, execute API tool calls, and resolve complex workflows with human-in-the-loop oversight.",
        tags: ["Agent Swarms", "Tool Calling", "LangGraph", "AutoGPT"],
        deliverables: ["Self-Directing Agent Workflows", "API Function Calling Suite", "Stateful Execution Memory", "Auditable Agent Reasoning Traces"],
      },
      {
        id: "chatgpt-custom-solutions",
        title: "Custom LLM & Conversational Assistants",
        description: "Domain-specific conversational interfaces capable of contextual comprehension, multilingual support, and CRM execution.",
        tags: ["GPT-4o", "Claude 3.5", "Llama 3", "Context Caching"],
        deliverables: ["Brand-Tuned Conversational Bot", "Live Omnichannel Integration", "Intent Classification Router", "Sentiment & Escalation Alerts"],
      },
      {
        id: "predictive-ml",
        title: "Predictive Analytics & Computer Vision",
        description: "Time-series forecasting models, churn prediction algorithms, and computer vision classification networks deployed at the edge.",
        tags: ["TensorFlow", "scikit-learn", "OpenCV", "Edge TPU"],
        deliverables: ["Predictive Forecasting API", "Edge Computer Vision Model", "Continuous Drift Monitoring", "Automated Model Retraining"],
      },
    ],
  },
  {
    id: "design-digital",
    title: "Design & Digital Experience",
    tagline: "Customer and developer experience design, 3D interactive interfaces, and pixel-perfect design systems",
    description:
      "We transform intricate business requirements into intuitive, breathtaking digital experiences backed by cognitive research, design tokens, and usability validation.",
    iconName: "Palette",
    accent: "#0072F5",
    metrics: { value: "+44%", label: "Conversion Lift" },
    technologies: ["Figma", "Design Tokens", "Spline 3D", "WCAG 2.1", "Protopie", "Storybook", "Framer Motion"],
    subServices: [
      {
        id: "ui-ux-design",
        title: "UI/UX Product Design",
        description: "Comprehensive product design from wireframing and user journey mapping to high-fidelity clickable interactive prototypes.",
        tags: ["User Journeys", "Wireframes", "High-Fidelity Prototypes"],
        deliverables: ["Interactive Clickable Prototype", "Component Design Library", "User Flow Diagrams", "Usability Testing Synthesis"],
      },
      {
        id: "design-systems",
        title: "Enterprise Design Systems & Tokens",
        description: "Unified cross-platform design token architectures synchronizing Figma variables directly with Tailwind CSS and mobile theme engines.",
        tags: ["Design Tokens", "Figma Variables", "Storybook", "Zero Code Drift"],
        deliverables: ["Tokenized Theme Architecture", "Living Storybook Catalog", "Accessibility Guidelines", "Developer Handoff Playbook"],
      },
      {
        id: "3d-interactive",
        title: "3D & Interactive Web Experiences",
        description: "Immersive WebGL, Three.js, and interactive 3D physics-based product showcases that leave unforgettable impressions.",
        tags: ["Three.js", "WebGL", "Spline", "Interactive Physics"],
        deliverables: ["Hardware-Accelerated 3D Models", "Interactive Camera Rhythms", "Mobile-Optimized Render Pipeline", "60fps Scroll Animations"],
      },
      {
        id: "cx-dx",
        title: "Customer & Developer Experience (CX & DX)",
        description: "Auditing friction in customer onboarding funnels and engineering developer portals with clean documentation and SDKs.",
        tags: ["CX Audits", "Developer Portals", "API Docs", "SDK Design"],
        deliverables: ["Onboarding Funnel Optimization", "Developer API Documentation", "Interactive Sandbox Playground", "WCAG 2.1 AA Compliance Audit"],
      },
    ],
  },
  {
    id: "digital-branding",
    title: "Digital Growth & Strategy",
    tagline: "Technical SEO, performance marketing, conversion optimization, and data-driven growth",
    description:
      "We engineer revenue engines for enterprise brands. Combining deep technical SEO architecture with performance marketing and high-converting funnel optimizations.",
    iconName: "TrendingUp",
    accent: "#00D2FF",
    metrics: { value: "3.2x", label: "Average 90-Day ROI" },
    technologies: ["Google Analytics 4", "Semrush", "Search Console", "HubSpot", "Segment", "Mixpanel", "Meta Ads"],
    subServices: [
      {
        id: "technical-seo",
        title: "Technical SEO & Search Dominance",
        description: "Programmatic SEO architectures, Core Web Vitals optimization, structured JSON-LD schemas, and international multi-language indexing.",
        tags: ["Programmatic SEO", "JSON-LD Schema", "Core Web Vitals", "International SEO"],
        deliverables: ["Full Technical Architecture Audit", "Structured Schema Markup Library", "Indexation & Crawl Budget Blueprint", "High-Intent Keyword Map"],
      },
      {
        id: "performance-ppc",
        title: "PPC & High-Intent Paid Media",
        description: "Precision B2B and enterprise search advertising on Google Ads, LinkedIn, and Meta engineered for low CAC and maximum pipeline value.",
        tags: ["Google Ads", "LinkedIn Ads", "Account-Based Marketing", "Retargeting"],
        deliverables: ["Targeted Campaign Setup", "A/B Tested High-Converting Copy", "Conversion Attribution Tracking", "Weekly ROI Dashboard"],
      },
      {
        id: "conversion-rate-optimization",
        title: "Conversion Rate Optimization (CRO)",
        description: "Behavioral analytics, heatmaps, multi-variant split testing, and landing page engineering designed to maximize conversion yields.",
        tags: ["A/B Testing", "Heatmap Synthesis", "Funnel Analysis", "Copy Optimization"],
        deliverables: ["Funnel Drop-off Analysis", "Multi-Variant Experiment Sprints", "Dynamic Personalization Rules", "Optimized Checkout Funnels"],
      },
      {
        id: "content-strategy",
        title: "Authoritative Technical Content & Strategy",
        description: "Engineering whitepapers, architectural teardowns, and thought leadership articles that establish market authority and organic backlinks.",
        tags: ["Technical Whitepapers", "Case Studies", "Ecosystem Guides", "Organic Backlinks"],
        deliverables: ["Quarterly Editorial Roadmap", "Deep Technical Whitepapers", "Distribution Syndication Pipeline", "SEO Content Audits"],
      },
    ],
  },
];

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: "healthcare",
    name: "Healthcare & HealthTech",
    tagline: "HIPAA-compliant telemedicine, clinical informatics, and patient-centric portals",
    description:
      "We engineer medical software platforms that adhere to the highest standards of privacy and clinical reliability. From remote patient monitoring to automated EHR integrations.",
    iconName: "Activity",
    image: "/images/ai-delivery.jpg",
    compliance: ["HIPAA Guidelines", "HL7 / FHIR Standards", "Data Encryption", "Secure API Gateway"],
    metrics: { value: "99.99%", label: "Clinical System Uptime" },
    challenges: [
      "Strict regulatory compliance penalties under HIPAA and HITECH.",
      "Fragmented electronic health record (EHR) data silos across hospital networks.",
      "Slow patient intake processes leading to administrative overhead and billing errors.",
    ],
    solutions: [
      "End-to-end encrypted telehealth pipelines with automated consent management.",
      "FHIR API microservices synchronizing clinical data across Epic, Cerner, and Meditech.",
      "AI-assisted diagnostic triage workflows reducing clinician charting time by 45%.",
    ],
    keyCapabilities: ["Telemedicine Video Feeds", "FHIR / HL7 Data Connectors", "Patient Health Portals", "Clinical AI Assistants"],
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "High-throughput treasury engines, payment gateways, and wealth management",
    description:
      "Enterprise financial systems built for low-latency transaction processing, sub-second settlement, and zero-trust cryptographic audit trails.",
    iconName: "ShieldCheck",
    image: "/images/ai-delivery.jpg",
    compliance: ["PCI-DSS Standards", "End-to-End Encryption", "Immutable Audit Trails", "Data Protection"],
    metrics: { value: "3.4x", label: "Faster Settlement Times" },
    challenges: [
      "Multi-currency reconciliation latency causing treasury cash drag.",
      "Sophisticated fraud vectors and identity spoofing attacks.",
      "Strict regulatory audits requiring immutable transaction logs.",
    ],
    solutions: [
      "Event-driven microservices processing high-volume financial transactions via Apache Kafka.",
      "Real-time AI anomaly detection flagging fraudulent payment attempts in <50ms.",
      "Cryptographically sealed ledger architectures with multi-sig authorization safeguards.",
    ],
    keyCapabilities: ["Multi-Currency Settlement", "Automated AML / KYC Checks", "Institutional Custody Vaults", "Open Banking APIs"],
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Next-gen learning management systems, student analytics, and adaptive learning",
    description:
      "Scalable digital education ecosystems serving millions of learners simultaneously with real-time progress tracking, live classrooms, and automated grading.",
    iconName: "BookOpen",
    image: "/images/remote-team.jpg",
    compliance: ["FERPA Compliant", "COPPA Verified", "WCAG 2.1 AA", "GDPR"],
    metrics: { value: "1.5M+", label: "Concurrent Learners Supported" },
    challenges: [
      "High platform drop-off rates due to unengaging, rigid curriculum interfaces.",
      "Server crashes during exam registration surges and concurrent testing windows.",
      "Lack of granular analytics for educators to identify struggling students early.",
    ],
    solutions: [
      "Gamified, adaptive learning pathways with micro-credentials and interactive assessments.",
      "Serverless auto-scaling backend sustaining 50,000+ concurrent live submissions without lag.",
      "Predictive student performance analytics dashboards highlighting retention risks.",
    ],
    keyCapabilities: ["Interactive LMS Engines", "Real-Time Proctoring & Testing", "Adaptive AI Learning Paths", "Student Information System (SIS) Sync"],
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "Property management portals, MLS/IDX synchronization, and virtual tours",
    description:
      "Modern PropTech solutions that streamline property search, automated lease execution, tenant maintenance requests, and institutional asset portfolios.",
    iconName: "Building",
    image: "/images/recruiterweb-mockup.jpg",
    compliance: ["RESO Standards", "ADA Compliant", "Role-Based Access", "Fair Housing Guardrails"],
    metrics: { value: "+38%", label: "Lead-to-Tour Conversion" },
    challenges: [
      "Stale MLS listing feeds causing mismatched pricing and missed buyer opportunities.",
      "Cumbersome paper-based lease signing and manual security deposit collection.",
      "Difficulty visualizing pre-construction developments remotely for high-net-worth buyers.",
    ],
    solutions: [
      "Real-time RETS and RESO Web API connectors synchronizing hundreds of thousands of listings instantly.",
      "Digital lease workflows with integrated DocuSign APIs and Stripe bank transfers.",
      "Photorealistic WebGL 3D floor plans and 360-degree interactive virtual walk-throughs.",
    ],
    keyCapabilities: ["RESO / MLS Real-Time Sync", "Automated Digital Leasing", "3D Interactive Property Tours", "Tenant Portal & Maintenance Ops"],
  },
  {
    id: "ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Headless omnichannel commerce, multi-vendor marketplaces, and inventory sync",
    description:
      "High-velocity digital storefronts engineered for maximum conversion, dynamic localized pricing, and sub-100ms catalog search.",
    iconName: "ShoppingCart",
    image: "/images/eset-mockup.jpg",
    compliance: ["PCI-DSS Standards", "GDPR Ready", "CCPA Standards", "Encrypted Checkout"],
    metrics: { value: "+35%", label: "Direct Checkout Surge" },
    challenges: [
      "Monolithic platforms with high cart abandonment and slow mobile page loads.",
      "Out-of-sync inventory across physical warehouses, retail stores, and online channels.",
      "Complex international sales requirements including multi-currency and cross-border duties.",
    ],
    solutions: [
      "Next.js headless storefronts delivering instant 100/100 Core Web Vitals speed.",
      "Centralized omnichannel inventory orchestration preventing over-selling in real time.",
      "One-click accelerated checkout with automated regional VAT/tax calculation.",
    ],
    keyCapabilities: ["Headless Commerce Architecture", "Instant AI-Powered Catalog Search", "Omnichannel Inventory Sync", "Dynamic Pricing & Loyalty Engine"],
  },
  {
    id: "logistics",
    name: "Supply Chain & Logistics",
    tagline: "Fleet management, automated route dispatch, and real-time IoT cargo tracking",
    description:
      "Mission-critical transportation platforms coordinating fleets, tracking cross-border freight, and optimizing warehouse picking operations in real time.",
    iconName: "Truck",
    image: "/images/tech-trends.jpg",
    compliance: ["DOT Standards", "ELD Compliant", "Real-Time Telematics", "Fleet Security Protocols"],
    metrics: { value: "-22%", label: "Fuel & Fleet Transit Cost" },
    challenges: [
      "Suboptimal routing leading to excessive fuel consumption and delivery delays.",
      "Lack of real-time visibility into refrigerated cargo temperature and shipment status.",
      "Manual driver dispatch and paper bill of lading (BOL) bottlenecks.",
    ],
    solutions: [
      "AI-driven route optimization algorithms calculating traffic, weather, and cargo weight.",
      "IoT sensor telemetry ingestion monitoring temperature, humidity, and location updates.",
      "Paperless driver mobile apps with automated digital proof of delivery (ePOD) capture.",
    ],
    keyCapabilities: ["Dynamic Route Optimization", "Live IoT Sensor Telemetry", "Automated Dispatch & ePOD", "Warehouse Management (WMS)"],
  },
  {
    id: "it-cloud",
    name: "Enterprise Information Technology",
    tagline: "Cloud infrastructure migration, DevOps CI/CD automation, and zero-trust security",
    description:
      "Resilient cloud platforms engineered on AWS, Azure, and Google Cloud, featuring automated infrastructure as code and microservice orchestration.",
    iconName: "Cloud",
    image: "/images/team-hands.jpg",
    compliance: ["Zero-Trust Security", "Automated CI/CD", "Infrastructure as Code", "Data Privacy Standards"],
    metrics: { value: "99.99%", label: "Guaranteed Production SLA" },
    challenges: [
      "Fragile legacy monoliths with high maintenance overhead and slow release cycles.",
      "Ballooning cloud infrastructure bills without visibility into idle resources.",
      "Elevated cyber attack surface and lack of centralized access governance.",
    ],
    solutions: [
      "Containerized microservice migration to multi-region Kubernetes clusters (EKS/GKE).",
      "FinOps automated cost optimization reducing cloud expenditures by 30–45%.",
      "Zero-trust security perimeter with automated identity access management and continuous vulnerability scans.",
    ],
    keyCapabilities: ["Multi-Cloud Kubernetes Migration", "Infrastructure as Code (Terraform)", "FinOps Cloud Cost Optimization", "Zero-Trust Security Perimeters"],
  },
  {
    id: "hospitality",
    name: "Food & Hospitality",
    tagline: "Point of sale ecosystems, multi-location kitchen displays, and guest loyalty",
    description:
      "Digital restaurant and hospitality systems connecting contactless dining, table reservation management, online delivery ordering, and multi-unit back office operations.",
    iconName: "Utensils",
    image: "/images/remote-team.jpg",
    compliance: ["PCI-DSS Standards", "ADA Accessible", "Encrypted Payments", "GDPR Ready"],
    metrics: { value: "+28%", label: "Average Order Value Lift" },
    challenges: [
      "Fragmented third-party delivery apps taking 30%+ commissions on every order.",
      "Kitchen order tickets getting delayed during peak meal times.",
      "Low guest repeat frequency and poor loyalty data visibility across locations.",
    ],
    solutions: [
      "Direct white-label online ordering portals with zero commission deductions.",
      "Real-time Kitchen Display Systems (KDS) synchronizing prep times and dispatchers.",
      "Automated guest loyalty CRM with personalized SMS re-engagement promotions.",
    ],
    keyCapabilities: ["White-Label Direct Ordering", "Real-Time Kitchen Display (KDS)", "Table Booking & Waitlist Engine", "Multi-Unit Inventory & Franchise Ops"],
  },
];

export const GLOBAL_OFFICES: OfficeLocation[] = [
  {
    city: "Hyderabad",
    country: "India",
    address: "1009, 10th Floor, Vasavi Sky City, Gachibowli, Hyderabad, Telangana 500032",
    coordinates: "17.4401° N, 78.3489° E",
    phone: "+91 738 237 3824",
    email: "connect@venizor.com",
    isPrimary: true,
  },
];
