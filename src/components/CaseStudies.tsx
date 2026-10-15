"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Layers, ExternalLink } from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

export interface CaseStudyItem {
  id: string;
  year: string;
  client: string;
  category: string;
  title: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  liveUrl?: string;
  clientDomain?: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "ssfce",
    year: "2025",
    client: "SS FIBER COMPOSITES & ENGINEERING",
    category: "Manufacturing & Industrial",
    title: "Industrial Composites Catalog & Automated B2B RFQ Pipeline",
    tags: ["Manufacturing", "Next.js", "Technical SEO", "Product Catalog", "RFQ Engine"],
    metrics: [
      { value: "+180%", label: "Inbound RFQ Surge" },
      { value: "sub-800ms", label: "Factory Network Load Speed" },
    ],
    image: "/images/ssfce-mockup.jpg",
    imageAlt: "SSFCE Industrial FRP Composites Digital Platform and Product Catalog",
    summary:
      "Engineered a high-performance digital product catalog, technical specification engine, and automated quotation pipeline for Hyderabad's premier FRP manufacturing leader.",
    challenge:
      "Infrastructure contractors and industrial buyers previously relied on cumbersome offline PDF brochures for complex FRP pipe, chemical tank, and manhole chamber specifications, leading to slow sales cycles and zero search presence.",
    solution:
      "Venizor architected an ultra-fast Next.js manufacturing portal with interactive product specs, durability tables, instant RFQ configuration forms routed directly to sales engineering, and Schema.org LocalBusiness structured data.",
    impact:
      "Delivered a +180% increase in qualified inbound B2B RFQs within 90 days, reduced quote cycle turnaround by 65%, and achieved top Google rankings for regional and national FRP manufacturing queries.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Lucide Icons", "Schema.org LD+JSON", "Edge CDN", "Vercel"],
    liveUrl: "https://www.ssfce.in/",
    clientDomain: "ssfce.in",
  },
  {
    id: "travel-buddy-uk",
    year: "2025",
    client: "TRAVEL BUDDY UK",
    category: "Travel & E-Commerce",
    title: "High-Converting Group Tour Platform & Real-Time Seat Reservation Engine",
    tags: ["Travel & Leisure", "Mobile-First", "Booking Engine", "Next.js", "Video Integration"],
    metrics: [
      { value: "+240%", label: "Mobile Booking Conversion" },
      { value: "0", label: "Drop-Offs on Tour Drops" },
    ],
    image: "/images/travelbuddy-mockup.jpg",
    imageAlt: "Travel Buddy UK Weekend Getaway & Tour Reservation Platform",
    summary:
      "Delivered an intuitive, mobile-optimized adventure tour booking portal with dynamic trip schedules, interactive visual galleries, and instant seat reservation for UK travelers.",
    challenge:
      "Travel Buddy UK experienced severe booking bottlenecks during weekend trip releases: prospective travelers faced slow page loads, disjointed itinerary navigation, and dropped connections when trying to reserve seats for high-demand getaways.",
    solution:
      "Venizor created a responsive, vibrant web application with streamlined trip exploration, automated seat availability updates, interactive media galleries featuring traveler video reels, customer review carousels, and an ultra-low-friction checkout flow.",
    impact:
      "Drove a +240% increase in mobile booking conversions, zero checkout abandonments during flash tour drops, and supported over 1,000+ satisfied weekend travelers across England, Scotland, and Wales.",
    technologies: ["Next.js", "React 19", "TailwindCSS", "HTML5 Video Streaming", "Lucide", "Web Vitals Optimization", "Edge Routing"],
    liveUrl: "https://www.travelbuddytrips.co.uk/",
    clientDomain: "travelbuddytrips.co.uk",
  },
  {
    id: "lc-tech-academy",
    year: "2025",
    client: "LC TECH ACADEMY",
    category: "EdTech & AI Academy",
    title: "Executive Tech & AI Academy Platform with Lead Conversion Funnels",
    tags: ["EdTech", "Generative AI", "Curriculum Architecture", "Lead Gen", "Course Schema"],
    metrics: [
      { value: "4.8x", label: "Executive Admissions Surge" },
      { value: "72%", label: "Lead-to-Counseling Rate" },
    ],
    image: "/images/lctech-mockup.jpg",
    imageAlt: "LC Tech Academy Executive Technology & AI Training Portal",
    summary:
      "Architected a high-converting executive tech education portal featuring 12-week curriculum blueprints, interactive cohort schedules, automated WhatsApp admissions integration, and rich Google Course snippet SEO.",
    challenge:
      "Senior software engineers and tech leads found generic course portals unconvincing. LC Tech Academy required a sophisticated, developer-focused brand presentation that clearly demonstrated enterprise rigor in GenAI, Spring Boot Microservices, and Cloud Architecture.",
    solution:
      "Venizor engineered a modern dark/gold executive design with expandable syllabus trees, interactive batch selectors (weekend vs. evening), WhatsApp API direct connection, and deep Schema.org Course and ItemList structured data to win primary search real estate.",
    impact:
      "Achieved a 4.8x expansion in qualified executive student enrollments, a 72% counseling conversion rate from organic discovery, and prominent Google rich snippets for technical certification searches across Hyderabad and Bangalore.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Schema.org Course JSON-LD", "WhatsApp Cloud Integration", "Vercel Edge"],
    liveUrl: "https://www.lctechacademy.com/",
    clientDomain: "lctechacademy.com",
  },
];

interface CaseStudiesProps {
  onSelectCase: (study: CaseStudyItem) => void;
  onOpenAllCases: () => void;
}

const CATEGORIES = ["All", "Manufacturing & Industrial", "Travel & E-Commerce", "EdTech & AI Academy"];

export default function CaseStudies({ onSelectCase, onOpenAllCases }: CaseStudiesProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === activeFilter);

  const featured = filteredStudies[0] || CASE_STUDIES[0];
  const secondary = filteredStudies.length > 1 ? filteredStudies[1] : CASE_STUDIES[1];
  const tertiary = filteredStudies.length > 2 ? filteredStudies[2] : CASE_STUDIES[2];

  return (
    <SectionReveal3D
      id="case-studies-section"
      className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#0072F5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-3">
              <Sparkles size={13} className="text-[#00D2FF]" />
              <span>Proven Production Impact</span>
            </div>
            <h2 className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-extrabold tracking-tight text-[#001A3F] leading-tight">
              Featured Case Studies
            </h2>
            <p className="text-sm md:text-base text-[#001A3F]/70 mt-2 max-w-xl">
              Real systems engineered for global enterprises, funded scaleups, and market disruptors.
            </p>
          </div>

          {/* Category Filter Pills & View All */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  activeFilter === cat
                    ? "bg-[#001A3F] text-white shadow-md border border-[#001A3F]"
                    : "bg-white text-[#001A3F]/70 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={onOpenAllCases}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#0072F5] bg-blue-50/80 hover:bg-blue-100 border border-blue-200 transition-all cursor-pointer active:scale-95 inline-flex items-center gap-1.5 ml-2"
            >
              <span>Explore All</span>
              <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* 3D Bento-Grid Case Studies Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Bento Card 1: Main Flagship Hero Card (8 Cols) */}
          <div className="lg:col-span-8">
            <TiltCard3D
              maxTilt={6}
              scale={1.01}
              glare={true}
              onClick={() => onSelectCase(featured)}
              className="h-full rounded-[30px] bg-white border border-blue-100 shadow-xl shadow-blue-950/5 p-8 md:p-10 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D2FF]/20"
            >
              <div>
                {/* Client / Badge / Year */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-black tracking-widest uppercase text-[#0072F5] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                      {featured.client}
                    </span>
                    <span className="text-xs font-semibold text-[#001A3F]/50">
                      {featured.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{featured.clientDomain}</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                    <span className="text-xs font-medium text-[#001A3F]/40">
                      {featured.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-4 group-hover:text-[#0072F5] transition-colors leading-snug">
                  {featured.title}
                </h3>

                <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6 max-w-2xl">
                  {featured.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100/80 text-[#001A3F] border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Showcase: Mockup + Live Floating Metrics Banner */}
              <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden border border-blue-100/80 bg-slate-900 group-hover:border-blue-200 transition-all depth-layer-2">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Glass Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-[#001A3F]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white flex items-center gap-6 shadow-xl">
                  {featured.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl font-black text-[#00D2FF] tracking-tight leading-none">
                        {metric.value}
                      </span>
                      <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-white/90 ml-auto border-l border-white/20 pl-4">
                    <span>Inspect Solution</span>
                    <ArrowRight size={13} className="text-[#00D2FF]" />
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Card 2: Secondary High-Impact Card (4 Cols) */}
          <div className="lg:col-span-4">
            <TiltCard3D
              maxTilt={7}
              scale={1.02}
              glare={true}
              onClick={() => onSelectCase(secondary)}
              className="h-full rounded-[30px] bg-white border border-blue-100 shadow-xl shadow-blue-950/5 p-7 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:shadow-[#0072F5]/15 transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-[#0072F5] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    {secondary.client}
                  </span>
                  <div className="flex items-center gap-2">
                    {secondary.liveUrl && (
                      <a
                        href={secondary.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{secondary.clientDomain}</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                    <span className="text-xs font-medium text-[#001A3F]/40">
                      {secondary.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#001A3F] tracking-tight mb-3 group-hover:text-[#0072F5] transition-colors leading-snug">
                  {secondary.title}
                </h3>

                <p className="text-xs text-[#001A3F]/70 leading-relaxed mb-6">
                  {secondary.summary}
                </p>

                {/* Metrics Highlight Card */}
                <div className="bg-[#F5F9FF] p-4 rounded-2xl border border-blue-100/80 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    {secondary.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-xl font-black text-[#001A3F]">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-semibold text-[#001A3F]/60">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact Visual Preview */}
              <div className="relative w-full h-[160px] rounded-2xl overflow-hidden border border-blue-100 mb-4 depth-layer-2">
                <Image
                  src={secondary.image}
                  alt={secondary.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-[#001A3F] group-hover:text-[#0072F5] flex items-center gap-1.5 transition-colors">
                  Case Architecture
                  <ArrowRight size={13} className="text-[#00D2FF]" />
                </span>
                <span className="text-[11px] text-[#001A3F]/50">Deep dive</span>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Card 3: Tertiary FinTech / Cloud Engine (6 Cols) */}
          <div className="lg:col-span-6">
            <TiltCard3D
              maxTilt={6}
              scale={1.01}
              glare={true}
              onClick={() => onSelectCase(tertiary)}
              className="h-full rounded-[30px] bg-white border border-blue-100 shadow-xl shadow-blue-950/5 p-8 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:shadow-[#00D2FF]/15 transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-[#0072F5] px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                    {tertiary.client}
                  </span>
                  <div className="flex items-center gap-2">
                    {tertiary.liveUrl && (
                      <a
                        href={tertiary.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{tertiary.clientDomain}</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                    <span className="text-xs font-medium text-[#001A3F]/40">
                      {tertiary.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-[#001A3F] tracking-tight mb-3 group-hover:text-[#0072F5] transition-colors leading-snug">
                  {tertiary.title}
                </h3>

                <p className="text-xs md:text-sm text-[#001A3F]/75 leading-relaxed mb-6">
                  {tertiary.summary}
                </p>

                {/* Metrics badges */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {tertiary.metrics.map((m, i) => (
                    <div key={i} className="px-4 py-2 rounded-xl bg-blue-50/70 border border-blue-100">
                      <div className="text-lg font-black text-[#001A3F]">{m.value}</div>
                      <div className="text-[10px] font-semibold text-[#001A3F]/60 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-[#001A3F] group-hover:text-[#0072F5] flex items-center gap-1.5 transition-colors">
                  Explore High-Concurrency Spec
                  <ArrowRight size={13} className="text-[#00D2FF]" />
                </span>
                <span className="text-xs font-mono text-[#0072F5]">sub-second settlement</span>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Card 4: Venizor Impact Benchmark Summary (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-[30px] bg-gradient-to-br from-[#001A3F] via-[#002255] to-[#001A3F] text-white p-8 md:p-10 border border-blue-900/60 shadow-xl shadow-blue-950/20 flex flex-col justify-between relative overflow-hidden">
              {/* Cyan decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#00D2FF] uppercase tracking-wider mb-4 border border-white/10">
                  <TrendingUp size={13} />
                  <span>Cumulative Delivery Records</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4">
                  Transforming mission-critical systems into competitive advantages.
                </h3>

                <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-6">
                  Our engineering squads take full ownership from day one. Zero handoff friction, guaranteed code delivery, and verifiable business ROI.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-[#00D2FF]">₹1,200 Cr+</div>
                    <div className="text-[10px] text-white/60 uppercase">Client Volume Secured</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-white">3.2x</div>
                    <div className="text-[10px] text-white/60 uppercase">Average 90-Day ROI</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-xl font-black text-emerald-400">99.4%</div>
                    <div className="text-[10px] text-white/60 uppercase">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/60 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#00D2FF]" /> Verified Production Software Deliveries
                </span>
                <button
                  onClick={onOpenAllCases}
                  className="px-5 py-2 rounded-full bg-white text-[#001A3F] hover:bg-[#00D2FF] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  View All Cases
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
