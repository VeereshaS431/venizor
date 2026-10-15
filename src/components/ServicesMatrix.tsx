"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Cloud, 
  Globe, 
  Smartphone, 
  Palette, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Terminal,
  Activity
} from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  metrics: { label: string; value: string };
  deliverables: string[];
  techStack: string[];
  terminalSnippet: {
    command: string;
    output: string;
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-systems",
    category: "AI & Intelligence",
    title: "AI & Autonomous Systems",
    tagline: "Custom RAG Pipelines, Multi-Agent Swarms & Model Fine-Tuning",
    description:
      "We architect production-grade AI applications that transcend basic chat interfaces. From deterministic agent tool-calling frameworks to hybrid vector search architectures and proprietary LLM distillation.",
    icon: Cpu,
    accentColor: "#00D2FF",
    metrics: { value: "3.8x", label: "Operational Throughput Surge" },
    deliverables: [
      "Enterprise RAG & Hybrid Vector Retrieval (Pinecone/Milvus)",
      "Multi-Agent Autonomous Orchestration & Tool Calling",
      "Low-Latency Model Distillation & On-Prem Deployment",
      "Guardrail Validation & Hallucination Mitigation Pipelines",
    ],
    techStack: ["PyTorch", "LangChain", "vLLM", "Pinecone", "OpenAI", "Anthropic API"],
    terminalSnippet: {
      command: "venizor agent:deploy --model llama-3-70b --rag hybrid-vector",
      output: "✓ Pipeline initialized: 42,000 embeddings indexed | p99 latency: 68ms",
    },
  },
  {
    id: "cloud-architecture",
    category: "Cloud Infrastructure",
    title: "Cloud & Distributed Systems",
    tagline: "Resilient Serverless Microservices & Multi-Region Kubernetes",
    description:
      "High-concurrency architectures built to sustain millions of requests without degrading. We engineer auto-scaling cloud foundations that minimize infrastructure spend while guaranteeing five-nines reliability.",
    icon: Cloud,
    accentColor: "#0072F5",
    metrics: { value: "99.99%", label: "Guaranteed Production SLA" },
    deliverables: [
      "Zero-Downtime Infrastructure as Code (Terraform / Pulumi)",
      "AWS / GCP Serverless & Event-Driven Microservices",
      "Multi-Cluster Kubernetes (EKS / GKE) Orchestration",
      "Edge-Cached CDN Architectures & DDoS Mitigation",
    ],
    techStack: ["AWS", "Kubernetes", "Terraform", "Docker", "Cloudflare Workers", "Kafka"],
    terminalSnippet: {
      command: "venizor infra:apply --region multi-cloud --high-availability",
      output: "✓ 3 Regions provisioned: us-east-1, eu-central-1, ap-northeast-1 | 0 downtime",
    },
  },
  {
    id: "web-apps",
    category: "Full-Stack Web",
    title: "Next-Gen Web Applications",
    tagline: "Sub-Second Latency, Modern Next.js & Edge Rendering",
    description:
      "Enterprise web applications engineered with strict TypeScript typing, modern App Router conventions, and partial prerendering for instant initial loads and fluid client-side transitions.",
    icon: Globe,
    accentColor: "#00D2FF",
    metrics: { value: "<120ms", label: "Time To Interactive Globally" },
    deliverables: [
      "Next.js 16 App Router & React 19 Enterprise Implementations",
      "Real-Time WebSocket & Server-Sent Event (SSE) Feeds",
      "Headless Multi-Region Commerce & Custom Portals",
      "Automated CI/CD End-to-End Playwright Testing",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "PostgreSQL", "Redis"],
    terminalSnippet: {
      command: "next build --experimental-turbopack --target production",
      output: "✓ 48 routes compiled in 2.1s | 100/100 Core Web Vitals across all viewports",
    },
  },
  {
    id: "mobile-engineering",
    category: "Mobile Systems",
    title: "Mobile & Cross-Platform",
    tagline: "Native Performance, 60fps Animations & Offline-First Sync",
    description:
      "We design fluid mobile applications for iOS and Android that users love. Utilizing React Native with native bridge modules or swift/kotlin native extensions for uncompromising performance.",
    icon: Smartphone,
    accentColor: "#0072F5",
    metrics: { value: "60 FPS", label: "Hardware Accelerated UI" },
    deliverables: [
      "Cross-Platform React Native with Native Performance Bridges",
      "Offline-First SQLite Synchronous Replication",
      "Biometric Authentication & Hardware Sensor Integration",
      "App Store & Google Play Automated Release Pipelines",
    ],
    techStack: ["React Native", "Swift", "Kotlin", "WatermelonDB", "Fastlane", "Expo"],
    terminalSnippet: {
      command: "venizor mobile:build --platform ios,android --optimize-hermes",
      output: "✓ Binary optimized: bundle size -38% | Launch time: 240ms",
    },
  },
  {
    id: "product-design",
    category: "Design Systems",
    title: "Product & UI/UX Design",
    tagline: "Design Systems, 3D Interactive Prototypes & Behavioral Flow",
    description:
      "We transform complex enterprise software requirements into clean, intuitive, and delightful user journeys. Backed by rigorous usability audits, design tokens, and pixel-perfect design systems.",
    icon: Palette,
    accentColor: "#00D2FF",
    metrics: { value: "+44%", label: "Conversion Funnel Lift" },
    deliverables: [
      "Enterprise Figma Design Systems & Token Architectures",
      "Interactive 3D Prototypes & User Journey Micro-Animations",
      "User Research, Usability Testing & Heatmap Synthesis",
      "WCAG 2.1 AA Accessibility & Responsive Multi-Device Audits",
    ],
    techStack: ["Figma", "Design Tokens", "Spline 3D", "WCAG 2.1", "Protopie", "Storybook"],
    terminalSnippet: {
      command: "venizor tokens:sync --figma-api --generate-tailwind",
      output: "✓ 180 tokens exported | Zero design-to-code mismatch across web & mobile",
    },
  },
];

interface ServicesMatrixProps {
  onOpenContact: () => void;
}

export default function ServicesMatrix({ onOpenContact }: ServicesMatrixProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>("ai-systems");

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <SectionReveal3D
      id="services-section"
      className="py-24 md:py-32 bg-white border-t border-blue-100/70 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00D2FF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FF] border border-blue-100 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-4">
            <Sparkles size={13} className="text-[#00D2FF]" />
            <span>Full-Cycle Engineering Capabilities</span>
          </div>

          <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold tracking-tight text-[#001A3F] leading-[1.12] mb-4">
            Specialized engineering squads tailored for{" "}
            <span className="bg-gradient-to-r from-[#0052FF] via-[#00A3FF] to-[#00D2FF] bg-clip-text text-transparent">
              category leaders.
            </span>
          </h2>

          <p className="text-base text-[#001A3F]/75 leading-relaxed font-medium">
            From Day 0 architecture to post-launch hyperscale, we deploy dedicated cross-functional engineering teams equipped with production-proven playbooks.
          </p>
        </div>

        {/* Interactive Capability Navigation Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-[#001A3F] text-white shadow-lg shadow-blue-950/20 border border-[#001A3F]"
                    : "bg-[#F5F9FF] text-[#001A3F]/70 hover:bg-white hover:text-[#001A3F] border border-blue-100/80"
                }`}
              >
                <Icon size={15} className={isActive ? "text-[#00D2FF]" : "text-[#0072F5]"} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Deep-Dive Bento Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Column: In-depth Service Card (7 Cols) */}
          <div className="lg:col-span-7">
            <TiltCard3D
              maxTilt={5}
              scale={1.01}
              glare={true}
              className="h-full rounded-[32px] bg-gradient-to-br from-white to-[#F5F9FF] border border-blue-100 shadow-xl shadow-blue-950/5 p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[11px] font-bold text-[#0072F5] uppercase tracking-wider border border-blue-100">
                    <Activity size={12} className="text-[#00D2FF]" />
                    {activeService.category}
                  </span>
                  
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-[#001A3F] tracking-tight">
                      {activeService.metrics.value}
                    </div>
                    <div className="text-[11px] font-medium text-[#001A3F]/60">
                      {activeService.metrics.label}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-2">
                  {activeService.title}
                </h3>
                
                <p className="text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-4">
                  {activeService.tagline}
                </p>

                <p className="text-sm text-[#001A3F]/80 leading-relaxed mb-8">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#001A3F]/60 mb-3">
                  Core Architectural Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#001A3F]/85 font-medium leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#00D2FF]/20 text-[#0072F5] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Badges & Action */}
              <div className="pt-6 border-t border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white border border-blue-100 text-[11px] font-semibold text-[#001A3F]/75 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#001A3F] hover:bg-[#0072F5] text-white text-xs font-bold transition-all shadow-md hover:shadow-cyan-500/20 active:scale-95 cursor-pointer whitespace-nowrap self-start sm:self-auto"
                >
                  <span>Request Scope</span>
                  <ArrowRight size={14} className="text-[#00D2FF]" />
                </button>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: Interactive Terminal & All Services Overview (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Real-time Code Execution Simulation Card */}
            <div className="rounded-[30px] bg-[#001A3F] text-white p-7 border border-blue-900/60 shadow-xl shadow-blue-950/20 font-mono text-xs relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/50">
                  <Terminal size={14} className="text-[#00D2FF]" />
                  <span>venizor-core-cli v3.4</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-white/60">
                  <span className="text-[#00D2FF] font-bold">$ </span>
                  {activeService.terminalSnippet.command}
                </div>
                <div className="text-emerald-400 font-semibold bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 leading-relaxed">
                  {activeService.terminalSnippet.output}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#00D2FF]" /> Zero Technical Debt Guarantee
                </span>
                <span className="text-[#00D2FF]">100% CI/CD Verified</span>
              </div>
            </div>

            {/* Quick Grid of Other Services */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {SERVICES_DATA.filter((s) => s.id !== activeServiceId).slice(0, 4).map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className="p-5 rounded-2xl bg-white border border-blue-100 hover:border-[#00D2FF] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#F5F9FF] text-[#0072F5] group-hover:bg-[#001A3F] group-hover:text-[#00D2FF] flex items-center justify-center mb-3 transition-colors">
                        <Icon size={18} />
                      </div>
                      <h5 className="text-sm font-bold text-[#001A3F] tracking-tight leading-snug mb-1 group-hover:text-[#0072F5] transition-colors">
                        {service.title}
                      </h5>
                      <p className="text-[11px] text-[#001A3F]/60 line-clamp-2">
                        {service.tagline}
                      </p>
                    </div>

                    <span className="mt-3 text-[11px] font-bold text-[#0072F5] flex items-center gap-1">
                      Explore pillar <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
