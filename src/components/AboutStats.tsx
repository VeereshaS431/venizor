"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Star, 
  ArrowUpRight, 
  Globe2, 
  Code2, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

interface AboutStatsProps {
  onOpenContact?: () => void;
}

export default function AboutStats({ onOpenContact }: AboutStatsProps) {
  const [counts, setCounts] = useState({ projects: 0, years: 0, markets: 0, csat: 0 });

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        projects: Math.floor(ease * 200),
        years: Math.floor(ease * 10),
        markets: Math.floor(ease * 6),
        csat: Number((ease * 99.4).toFixed(1)),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <SectionReveal3D
      id="about-section"
      className="py-24 md:py-32 bg-[#F5F9FF] border-t border-blue-100/70 relative overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#0072F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-4">
              <Sparkles size={13} className="text-[#00D2FF]" />
              <span>About Venizor Studio</span>
            </div>
            
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold tracking-tight text-[#001A3F] leading-[1.12]">
              Architecting bespoke digital products with{" "}
              <span className="bg-gradient-to-r from-[#0052FF] via-[#00A3FF] to-[#00D2FF] bg-clip-text text-transparent">
                uncompromising precision
              </span>{" "}
              and speed.
            </h2>
          </div>

          <p className="text-base text-[#001A3F]/75 leading-relaxed max-w-md font-medium">
            We are an elite software design & engineering studio. Combining category-defining UI/UX with resilient cloud microservices to propel ambitious enterprises forward.
          </p>
        </div>

        {/* 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Tile 1: Main Team & Culture Showcase (7 Cols) */}
          <div className="md:col-span-7">
            <TiltCard3D
              maxTilt={6}
              scale={1.01}
              glare={true}
              className="h-full rounded-[30px] overflow-hidden bg-white border border-blue-100/90 shadow-xl shadow-blue-950/5 flex flex-col justify-between p-7 md:p-9 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#001A3F]/60 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Indian Engineering Studio</span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0072F5] border border-blue-100/60">
                    Hyderabad, India (HQ)
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-4">
                  Where Craft Meets Continuous Delivery
                </h3>
                
                <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6 max-w-xl">
                  Every product squad is built with senior domain specialists—combining full-stack TypeScript engineers, cloud architects, and dedicated product designers working in seamless synchronization.
                </p>
              </div>

              {/* Photo with 3D Depth Layer */}
              <div className="relative w-full h-[240px] md:h-[260px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 depth-layer-2">
                <Image
                  src="/images/team-hands.jpg"
                  alt="Venizor Engineering Squad Unity"
                  fill
                  sizes="(max-width: 768px) 100vw, 650px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A3F]/85 via-transparent to-transparent" />
                
                {/* Floating Glass Pill Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold backdrop-blur-md bg-white/15 p-3 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <Users size={15} className="text-[#00D2FF]" />
                    <span>50+ Senior Builders & Architects</span>
                  </div>
                  <span className="text-[#00D2FF] font-bold">100% Code Ownership</span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Tile 2: Live Metrics Stats Card (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <TiltCard3D
              maxTilt={6}
              scale={1.01}
              glare={false}
              className="rounded-[30px] bg-white border border-blue-100/90 shadow-xl shadow-blue-950/5 p-7 md:p-8 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#001A3F]/50 mb-6 flex items-center gap-2">
                  <Globe2 size={14} className="text-[#00D2FF]" />
                  <span>Venizor In Real Numbers</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Metric 1 */}
                  <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100/60">
                    <div className="text-4xl font-extrabold text-[#001A3F] tracking-tight leading-none mb-1">
                      {counts.projects}
                      <span className="text-[#00D2FF]">+</span>
                    </div>
                    <div className="text-xs font-bold text-[#001A3F]">Products Delivered</div>
                    <div className="text-[11px] text-[#001A3F]/60 mt-0.5">FinTech, SaaS & Health</div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100/60">
                    <div className="text-4xl font-extrabold text-[#001A3F] tracking-tight leading-none mb-1">
                      {counts.years}
                      <span className="text-[#00D2FF]">+</span>
                    </div>
                    <div className="text-xs font-bold text-[#001A3F]">Years Innovation</div>
                    <div className="text-[11px] text-[#001A3F]/60 mt-0.5">Enterprise engineering</div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100/60">
                    <div className="text-4xl font-extrabold text-[#001A3F] tracking-tight leading-none mb-1">
                      {counts.markets}
                      <span className="text-[#00D2FF]">+</span>
                    </div>
                    <div className="text-xs font-bold text-[#001A3F]">Global Markets</div>
                    <div className="text-[11px] text-[#001A3F]/60 mt-0.5">UK, US, EU, Canada</div>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100/60">
                    <div className="text-4xl font-extrabold text-[#001A3F] tracking-tight leading-none mb-1">
                      {counts.csat}
                      <span className="text-[#00D2FF]">%</span>
                    </div>
                    <div className="text-xs font-bold text-[#001A3F]">On-Time Delivery</div>
                    <div className="text-[11px] text-[#001A3F]/60 mt-0.5">Agile sprint precision</div>
                  </div>
                </div>
              </div>

              {/* Client Verification Footer */}
              <div className="mt-6 pt-5 border-t border-blue-100/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#00D2FF] text-[#00D2FF]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#001A3F]">4.9 / 5.0 Rating</span>
                </div>
                <span className="text-xs font-semibold text-[#0072F5]">Verified Delivery</span>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Tile 3: Core Architecture & AI Accelerator (4 Cols) */}
          <div className="md:col-span-4">
            <TiltCard3D
              maxTilt={8}
              scale={1.02}
              glare={true}
              className="h-full rounded-[30px] bg-white border border-blue-100/90 shadow-xl shadow-blue-950/5 p-7 flex flex-col justify-between group hover:border-[#00D2FF]/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#001A3F] to-[#0052FF] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-900/15">
                  <Zap size={22} className="text-[#00D2FF]" />
                </div>
                <h4 className="text-xl font-extrabold text-[#001A3F] tracking-tight mb-2">
                  AI-Accelerated Sprints
                </h4>
                <p className="text-xs text-[#001A3F]/75 leading-relaxed">
                  We integrate modern generative AI developer tooling and automated test synthesis into our CI/CD pipelines to deliver features 3x faster without architectural compromises.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100/60 flex items-center gap-2 text-xs font-bold text-[#0072F5]">
                <CheckCircle2 size={14} className="text-[#00D2FF]" />
                <span>Zero Technical Debt Guarantees</span>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Tile 4: Production Code Quality & Architecture (4 Cols) */}
          <div className="md:col-span-4">
            <TiltCard3D
              maxTilt={8}
              scale={1.02}
              glare={true}
              className="h-full rounded-[30px] bg-white border border-blue-100/90 shadow-xl shadow-blue-950/5 p-7 flex flex-col justify-between group hover:border-[#00D2FF]/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#001A3F] to-[#0052FF] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-900/15">
                  <Code2 size={22} className="text-[#00D2FF]" />
                </div>
                <h4 className="text-xl font-extrabold text-[#001A3F] tracking-tight mb-2">
                  Production Code Quality
                </h4>
                <p className="text-xs text-[#001A3F]/75 leading-relaxed">
                  Clean architecture, rigorous peer code reviews, automated linting &amp; integration test suites, and end-to-end encrypted cloud data pipelines.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100/60 flex items-center gap-2 text-xs font-bold text-[#0072F5]">
                <CheckCircle2 size={14} className="text-[#00D2FF]" />
                <span>100% Source Code Ownership</span>
              </div>
            </TiltCard3D>
          </div>

          {/* Bento Tile 5: Direct Technical Leadership Consultation (4 Cols) */}
          <div className="md:col-span-4">
            <TiltCard3D
              maxTilt={8}
              scale={1.02}
              glare={true}
              className="h-full rounded-[30px] bg-gradient-to-br from-[#001A3F] via-[#002B66] to-[#001433] text-white shadow-xl shadow-blue-950/20 p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#00D2FF] flex items-center justify-center mb-5">
                  <Code2 size={22} />
                </div>
                <h4 className="text-xl font-extrabold text-white tracking-tight mb-2">
                  Have a Complex Challenge?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Book a direct 30-minute technical roadmap discovery session with our Lead Solutions Architect.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 px-4 rounded-full bg-white text-[#001A3F] font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-[#00D2FF] hover:text-[#001A3F] hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </TiltCard3D>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
