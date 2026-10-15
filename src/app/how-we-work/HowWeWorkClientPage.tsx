"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Cpu, 
  Rocket, 
  Search, 
  FileCode2 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import TiltCard3D from "@/components/TiltCard3D";

const PHASES = [
  {
    step: "01",
    title: "Phase 0: Technical Discovery & Architecture Feasibility",
    duration: "Week 1–2",
    description:
      "We pressure-test your product hypotheses, de-risk key architectural unknowns, evaluate third-party dependencies, and document Architectural Decision Records (ADRs).",
    icon: Search,
    deliverables: [
      "Architectural Decision Records (ADRs)",
      "High-Fidelity User Journey Wireframes",
      "API & Database Schema Specifications",
      "Fixed Milestone Cost & Delivery Scope",
    ],
  },
  {
    step: "02",
    title: "Phase 1: Zero-Trust Security & Architecture Hardening",
    duration: "Week 2–3",
    description:
      "Data security and privacy are integrated into the architecture from sprint zero—not bolted on post-launch. Threat modeling reviews align your platform with enterprise-grade data protection best practices.",
    icon: ShieldCheck,
    deliverables: [
      "Threat Model & Access Boundary Blueprint",
      "Data Encryption at Rest & In-Transit Policies",
      "Role-Based Access Control (RBAC) Matrices",
      "Automated Secrets Vault Architecture",
    ],
  },
  {
    step: "03",
    title: "Phase 2: Sprint-Based Agile Engineering",
    duration: "Sprint Cycles (2 Weeks)",
    description:
      "Full-stack senior engineers write clean, typed TypeScript code coupled with resilient microservices. You receive working production builds at the end of every two-week sprint.",
    icon: FileCode2,
    deliverables: [
      "Bi-Weekly Interactive Demo Deployments",
      "100% Code Ownership in Client Repositories",
      "Clean TypeScript & Next.js App Router Codebases",
      "Comprehensive Unit & Integration Test Coverage",
    ],
  },
  {
    step: "04",
    title: "Phase 3: Automated Testing & Load Stress Benchmarking",
    duration: "Continuous",
    description:
      "Every pull request is automatically verified against automated Playwright end-to-end regression suites and stressed under synthetic load to verify sub-100ms response times.",
    icon: Terminal,
    deliverables: [
      "End-to-End Automated Regression Pipeline",
      "Simulated High-Concurrency Load Tests (k6)",
      "Vulnerability Scans & Dependency Audits",
      "95+ Lighthouse / Core Web Vitals Score",
    ],
  },
  {
    step: "05",
    title: "Phase 4: Zero-Downtime Deployment & Hyperscale Ops",
    duration: "Launch & Scale",
    description:
      "We orchestrate multi-region blue/green deployments on Kubernetes and AWS Serverless. Post-launch telemetry and continuous observability guarantee 99.99% availability.",
    icon: Rocket,
    deliverables: [
      "Blue/Green Zero-Downtime Release Pipeline",
      "Multi-Region CDN Caching & DDoS Mitigation",
      "Real-Time Telemetry & Error Alerting",
      "24/7 Tier-3 Engineering Escalation SLA",
    ],
  },
];

export default function HowWeWorkClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#001A3F] via-[#002255] to-[#001A3F] text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">How We Work</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Proven Methodology</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              From Thoughts to Implementation:{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Our Engineering Process
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              We eliminate guesswork with a battle-tested 5-phase delivery framework. No scope creep, zero technical debt, and transparent velocity metrics.
            </p>

            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-900/30 active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Process Discovery</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 5-Phase Process Timeline Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-8 mb-16">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="rounded-[32px] bg-white border border-blue-100 p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-start justify-between gap-8 hover:shadow-xl hover:border-blue-200 transition-all"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-black text-[#0072F5] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                      {phase.step}
                    </span>
                    <span className="text-xs font-bold text-[#001A3F]/50 uppercase tracking-wider">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {phase.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-semibold text-[#001A3F]/85">
                        <Check size={13} className="text-[#00D2FF] shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#001A3F] text-[#00D2FF] flex items-center justify-center shrink-0 shadow-lg shadow-blue-950/15">
                  <Icon size={30} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="rounded-[30px] bg-gradient-to-br from-[#001A3F] to-[#002255] text-white p-8 md:p-12 border border-blue-900/60 shadow-xl shadow-blue-950/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-2 block">
              100% Delivery SLA
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ready to see this delivery engine in action?
            </h3>
            <p className="text-xs md:text-sm text-white/70 mt-2 max-w-xl">
              Book a 30-minute architectural consultation. We will analyze your system requirements and walk you through our sprint milestones.
            </p>
          </div>

          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#00D2FF] text-[#001A3F] font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Start Discovery
          </button>
        </div>
      </section>

      {/* Footer & CTA */}
      <FooterCta
        onOpenQuote={() => setIsContactOpen(true)}
        onNavigateSection={() => {}}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={() => {}}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}
