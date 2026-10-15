"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Activity, 
  ShieldCheck, 
  BookOpen, 
  Building, 
  ShoppingCart, 
  Truck, 
  Cloud, 
  Utensils,
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Shield, 
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import TiltCard3D from "@/components/TiltCard3D";
import { INDUSTRY_VERTICALS, IndustryVertical } from "@/data/offerings";

export default function IndustriesClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeIndustryId, setActiveIndustryId] = useState<string>("healthcare");

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && INDUSTRY_VERTICALS.some((i) => i.id === hash)) {
        setActiveIndustryId(hash);
        const el = document.getElementById("industry-section");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const activeIndustry =
    INDUSTRY_VERTICALS.find((i) => i.id === activeIndustryId) || INDUSTRY_VERTICALS[0];

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Activity":
        return Activity;
      case "ShieldCheck":
        return ShieldCheck;
      case "BookOpen":
        return BookOpen;
      case "Building":
        return Building;
      case "ShoppingCart":
        return ShoppingCart;
      case "Truck":
        return Truck;
      case "Cloud":
        return Cloud;
      case "Utensils":
        return Utensils;
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
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#0072F5]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">Industries</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Deep Domain Mastery</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Solving Complex Challenges{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Across Key Sectors
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              We bring rigorous regulatory compliance, specialized domain logic, and high-concurrency cloud architectures to every industry vertical we engineer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-900/30 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Discuss Your Industry Requirements</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sector Switcher Tabs */}
      <section className="py-12 bg-white border-b border-blue-100" id="industry-section">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {INDUSTRY_VERTICALS.map((ind) => {
              const Icon = getIndustryIcon(ind.iconName);
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-[#001A3F] text-white shadow-md border border-[#001A3F]"
                      : "bg-[#F5F9FF] text-[#001A3F]/70 hover:bg-white hover:text-[#001A3F] border border-blue-100"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-[#00D2FF]" : "text-[#0072F5]"} />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Deep-Dive Bento for Active Industry */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column (5 Cols): Visual & Compliance Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[32px] bg-white border border-blue-100 p-8 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#0072F5] uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                  Sector Focus
                </span>
                <span className="text-2xl font-black text-[#001A3F]">
                  {activeIndustry.metrics.value}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-2">
                {activeIndustry.name}
              </h2>

              <p className="text-xs font-bold text-[#0072F5] uppercase tracking-wider mb-4">
                {activeIndustry.tagline}
              </p>

              <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6">
                {activeIndustry.description}
              </p>

              {/* Visual preview */}
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-6 border border-blue-100">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A3F]/80 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Shield size={14} className="text-[#00D2FF]" /> Built for zero audit friction
                  </span>
                </div>
              </div>

              {/* Compliance Badges */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#001A3F]/60 mb-2.5">
                Verified Compliance & Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.compliance.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1"
                  >
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-3.5 rounded-full bg-[#001A3F] hover:bg-[#0072F5] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request {activeIndustry.name} Architecture Review</span>
                <ArrowRight size={14} className="text-[#00D2FF]" />
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Challenges vs Solutions Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Challenges Card */}
            <div className="rounded-[30px] bg-white border border-rose-100 p-8 shadow-xs">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-4">
                <AlertCircle size={15} />
                <span>Critical Sector Bottlenecks & Exposure</span>
              </div>
              <div className="space-y-3">
                {activeIndustry.challenges.map((ch, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#001A3F]/85 font-medium leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {i + 1}
                    </div>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Venizor Engineered Solutions Card */}
            <div className="rounded-[30px] bg-white border border-blue-100 p-8 shadow-sm">
              <div className="flex items-center gap-2 text-[#0072F5] font-bold text-xs uppercase tracking-wider mb-4">
                <CheckCircle2 size={15} className="text-[#00D2FF]" />
                <span>Venizor Engineered Solutions & Architecture</span>
              </div>
              <div className="space-y-3">
                {activeIndustry.solutions.map((sol, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#001A3F]/85 font-medium leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#00D2FF]/20 text-[#0072F5] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles size={12} />
                    </div>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities Pills */}
            <div className="rounded-[26px] bg-[#F5F9FF] border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-[#001A3F]/70 uppercase tracking-wider">
                Specialized Modules:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeIndustry.keyCapabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1 rounded-md bg-white border border-blue-100 text-xs font-semibold text-[#001A3F] shadow-xs"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All 8 Industries Quick Directory Grid */}
        <div className="pt-8">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#001A3F] tracking-tight">
              Explore All 8 Industry Practices
            </h3>
            <p className="text-xs md:text-sm text-[#001A3F]/65 mt-1">
              Click any industry vertical to review compliance standards, architectures, and case metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRY_VERTICALS.map((ind) => {
              const Icon = getIndustryIcon(ind.iconName);
              const isSelected = ind.id === activeIndustryId;
              return (
                <div
                  key={ind.id}
                  onClick={() => {
                    setActiveIndustryId(ind.id);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className={`p-6 rounded-[24px] border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#001A3F] text-white border-[#001A3F] shadow-lg shadow-blue-950/20"
                      : "bg-white text-[#001A3F] border-blue-100 hover:border-[#00D2FF] hover:shadow-md"
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        isSelected ? "bg-white/10 text-[#00D2FF]" : "bg-blue-50 text-[#0072F5]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h4 className="text-base font-bold tracking-tight mb-1.5">
                      {ind.name}
                    </h4>

                    <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? "text-white/70" : "text-[#001A3F]/60"}`}>
                      {ind.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100/20 flex items-center justify-between text-xs font-bold">
                    <span className={isSelected ? "text-[#00D2FF]" : "text-[#0072F5]"}>
                      {ind.metrics.value}
                    </span>
                    <span className="flex items-center gap-1">
                      Inspect <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
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
