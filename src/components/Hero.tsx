"use client";

import React from "react";
import HeroTilesGrid from "./HeroTilesGrid";
import TiltCard3D from "./TiltCard3D";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20 preserve-3d"
      id="hero-section"
    >
      {/* 3D Animated Neumorphic Tiles Canvas Background */}
      <HeroTilesGrid />

      {/* Main Content Container Over Tiles */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 gap-12 items-end">
          {/* Main Headline with 3D Depth Layer */}
          <div className="max-w-[840px] preserve-3d">
            <h1 className="hero-headline text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[1.08] tracking-tight text-[#001A3F]">
              We <span className="text-[#001A3F]">Design</span>,{" "}
              <span className="bg-gradient-to-r from-[#0052FF] via-[#00A3FF] to-[#00D2FF] bg-clip-text text-transparent drop-shadow-sm font-extrabold">
                build
              </span>{" "}
              <span className="bg-gradient-to-r from-[#0072F5] via-[#00A3FF] to-[#00D2FF] bg-clip-text text-transparent drop-shadow-sm font-extrabold">
                & launch
              </span>{" "}
              your digital product.
            </h1>
          </div>

          {/* Subtext and Floating CTA with 3D Tilt & Specular Glare */}
          <div className="flex justify-end pointer-events-auto">
            <TiltCard3D
              maxTilt={12}
              scale={1.03}
              glare={true}
              className="max-w-[390px] w-full"
            >
              <div className="p-6 md:p-7 rounded-[26px] flex flex-col gap-5 bg-white/95 backdrop-blur-xl border border-white/90 shadow-xl shadow-blue-950/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00D2FF]/20">
                <p className="text-sm leading-relaxed text-[#001A3F]/80 font-medium tracking-tight">
                  Cost-effective, full-cycle custom software development, AI solutions,
                  and modern product engineering delivered by dedicated squads at Venizor.
                </p>

                <div>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#001A3F] border border-[#001A3F] bg-transparent transition-all duration-300 hover:bg-[#001A3F] hover:border-[#001A3F] hover:text-[#00D2FF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
                    id="hero-get-in-touch"
                  >
                    <span>Get in touch</span>
                    <ArrowUpRight size={14} className="text-[#00D2FF]" />
                  </button>
                </div>
              </div>
            </TiltCard3D>
          </div>
        </div>
      </div>
    </section>
  );
}
