"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, ExternalLink, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import CaseStudyModal from "@/components/CaseStudyModal";
import TiltCard3D from "@/components/TiltCard3D";
import { CASE_STUDIES, CaseStudyItem } from "@/components/CaseStudies";

const CATEGORIES = ["All", "Manufacturing & Industrial", "Travel & E-Commerce", "EdTech & AI Academy"];

export default function CaseStudiesClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === activeFilter);

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#001A3F] via-[#002255] to-[#001A3F] text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">Case Studies</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Production Proof</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Selected Works &{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Measurable Impact
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              Partnering with global brands to craft mission-critical digital systems that eliminate bottlenecks, automate pipelines, and drive verified business growth.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                    activeFilter === cat
                      ? "bg-[#00D2FF] text-[#001A3F] shadow-md shadow-cyan-500/20 font-extrabold"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Bento Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {filteredStudies.map((study, idx) => {
            const isLarge = idx === 0;
            return (
              <div
                key={study.id}
                className={isLarge ? "lg:col-span-12" : "lg:col-span-6"}
              >
                <TiltCard3D
                  maxTilt={5}
                  scale={1.01}
                  glare={true}
                  onClick={() => setSelectedCase(study)}
                  className="h-full rounded-[32px] bg-white border border-blue-100 shadow-sm p-8 md:p-10 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:border-blue-200 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-black tracking-widest uppercase text-[#0072F5] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                          {study.client}
                        </span>
                        <span className="text-xs font-semibold text-[#001A3F]/50">
                          {study.category}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[#001A3F]/40">
                        {study.year}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-3 group-hover:text-[#0072F5] transition-colors leading-snug">
                      {study.title}
                    </h2>

                    <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6 max-w-3xl">
                      {study.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#F5F9FF] text-[#001A3F] border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image & Metrics Container */}
                  <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-blue-100 bg-slate-900 group-hover:border-blue-200 transition-all">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Metrics Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-[#001A3F]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white flex items-center gap-6 shadow-xl">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-2xl font-black text-[#00D2FF] tracking-tight leading-none">
                            {m.value}
                          </span>
                          <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mt-1">
                            {m.label}
                          </span>
                        </div>
                      ))}
                      <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-white/90 ml-auto border-l border-white/20 pl-4">
                        <span>Inspect Story</span>
                        <ArrowRight size={13} className="text-[#00D2FF]" />
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </div>
            );
          })}
        </div>

        {/* Global Impact Summary Bar */}
        <div className="rounded-[30px] bg-[#001A3F] text-white p-8 md:p-12 border border-blue-900/60 shadow-xl shadow-blue-950/20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-2 block">
                Cumulative Records
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to achieve measurable software ROI for your business?
              </h3>
              <p className="text-xs md:text-sm text-white/70 mt-2">
                Our squads take full ownership from day one. Over ₹1,200 Cr+ in transaction volume secured across manufacturing, e-commerce, EdTech, and enterprise operations.
              </p>
            </div>

            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#00D2FF] text-[#001A3F] font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer & CTA */}
      <FooterCta
        onOpenQuote={() => setIsContactOpen(true)}
        onNavigateSection={() => {}}
      />

      {/* Modals */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenContact={() => {
          setSelectedCase(null);
          setIsContactOpen(true);
        }}
      />

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
