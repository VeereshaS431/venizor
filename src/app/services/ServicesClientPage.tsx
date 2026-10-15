"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Code, 
  Cpu, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Activity,
  Zap,
  Terminal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import TiltCard3D from "@/components/TiltCard3D";
import SectionReveal3D from "@/components/SectionReveal3D";
import { SERVICE_PILLARS, ServicePillar, SubService } from "@/data/offerings";

export default function ServicesClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activePillarId, setActivePillarId] = useState<string>("software-development");
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);

  const activePillar =
    SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Code":
        return Code;
      case "Cpu":
        return Cpu;
      case "Palette":
        return Palette;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Layers;
    }
  };

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#001A3F] via-[#002255] to-[#001A3F] text-white relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Enterprise Solutions{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Engineered for Scale
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              From Phase 0 architecture to post-launch hyperscale, we deliver custom software, enterprise AI swarms, and high-conversion digital experiences that create lasting competitive moats.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-900/30 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Request Project Scope</span>
                <ArrowRight size={15} />
              </button>

              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold transition-all border border-white/20 active:scale-95 inline-flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / SLA strip */}
      <section className="bg-white border-y border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#001A3F]">200+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Platforms Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0072F5]">99.4%</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">On-Time Delivery SLA</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#00D2FF]">35+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Industries Supported</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#001A3F]">50+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Senior Architects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Pillars Navigation & Detailed Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        {/* Pillar Switcher Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-[#001A3F] text-white shadow-xl shadow-blue-950/20 border border-[#001A3F]"
                    : "bg-white text-[#001A3F]/70 hover:bg-slate-50 hover:text-[#001A3F] border border-blue-100"
                }`}
              >
                <Icon size={16} className={isActive ? "text-[#00D2FF]" : "text-[#0072F5]"} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Overview Banner */}
        <div className="rounded-[32px] bg-white border border-blue-100 p-8 md:p-10 mb-12 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest uppercase text-[#0072F5] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
              Core Practice Area
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-2">
              {activePillar.title}
            </h2>
            <p className="text-xs md:text-sm font-bold text-[#0072F5] uppercase tracking-wider mb-3">
              {activePillar.tagline}
            </p>
            <p className="text-sm text-[#001A3F]/75 leading-relaxed">
              {activePillar.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <div className="bg-[#F5F9FF] p-4 rounded-2xl border border-blue-100 text-center min-w-[140px]">
              <div className="text-2xl font-black text-[#001A3F]">{activePillar.metrics.value}</div>
              <div className="text-[11px] font-semibold text-[#001A3F]/60 uppercase">{activePillar.metrics.label}</div>
            </div>

            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-3 rounded-full bg-[#001A3F] hover:bg-[#0072F5] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Consult This Practice
            </button>
          </div>
        </div>

        {/* Sub-Services Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activePillar.subServices.map((sub) => (
            <TiltCard3D
              key={sub.id}
              maxTilt={6}
              scale={1.02}
              glare={true}
              onClick={() => setSelectedSubService(sub)}
              className="rounded-[28px] bg-white border border-blue-100 p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#001A3F] tracking-tight group-hover:text-[#0072F5] transition-colors">
                    {sub.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0072F5] flex items-center justify-center shrink-0 group-hover:bg-[#001A3F] group-hover:text-[#00D2FF] transition-colors">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-xs text-[#001A3F]/70 leading-relaxed mb-6">
                  {sub.description}
                </p>

                {/* Deliverables Checklist Preview */}
                <div className="space-y-2 mb-6">
                  {sub.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-[#001A3F]/85 font-medium">
                      <Check size={12} className="text-[#00D2FF] shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {sub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F5F9FF] text-[#001A3F]/75 border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Technology Ecosystem Badges */}
        <div className="rounded-[28px] bg-[#F5F9FF] border border-blue-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-extrabold text-[#001A3F] tracking-tight">
              Primary Technologies in This Practice Area
            </h4>
            <p className="text-xs text-[#001A3F]/65 mt-1">
              Production-tested open source frameworks, serverless runtimes, and enterprise cloud tooling.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {activePillar.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-200 text-xs font-bold text-[#001A3F] shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link to Industries */}
      <section className="py-20 bg-gradient-to-r from-[#001A3F] to-[#002B66] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-2 block">
              Industry Domain Knowledge
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Looking for industry-specific compliance & architecture?
            </h3>
            <p className="text-xs md:text-sm text-white/70 mt-2 max-w-xl">
              Explore how we tailor our software and AI systems across Healthcare, FinTech, Logistics, EdTech, Real Estate, and Retail.
            </p>
          </div>

          <Link
            href="/industries"
            className="px-8 py-3.5 rounded-full bg-white text-[#001A3F] hover:bg-[#00D2FF] text-xs md:text-sm font-bold transition-all shadow-md active:scale-95 shrink-0 inline-flex items-center gap-2"
          >
            <span>Explore Industries</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Sub-Service Detail Modal */}
      {selectedSubService && (
        <div
          className="fixed inset-0 z-50 bg-[#001A3F]/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedSubService(null)}
        >
          <div
            className="bg-white rounded-[32px] p-8 md:p-10 max-w-xl w-full shadow-2xl border border-blue-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0072F5] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                Service Specification
              </span>
              <button
                onClick={() => setSelectedSubService(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-black flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-extrabold text-[#001A3F] tracking-tight mb-3">
              {selectedSubService.title}
            </h3>

            <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6">
              {selectedSubService.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#001A3F]/60 mb-3">
              Standard Deliverables
            </h4>
            <div className="space-y-2.5 mb-6">
              {selectedSubService.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#001A3F]/85 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#00D2FF]/20 text-[#0072F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {selectedSubService.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-[#001A3F]/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedSubService(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedSubService(null);
                  setIsContactOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-[#001A3F] hover:bg-[#0072F5] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Request Proposal for This Service
              </button>
            </div>
          </div>
        </div>
      )}

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
