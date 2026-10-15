"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Building,
  ChevronRight,
  Shield,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import TiltCard3D from "@/components/TiltCard3D";
import { GLOBAL_OFFICES } from "@/data/offerings";

export default function AboutUsClientPage() {
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
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Inside Venizor Studio</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Where Craft Meets{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Continuous Delivery
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              We are an elite Indian software design and engineering studio headquartered in Hyderabad, Telangana. With 500+ senior engineers, we engineer high-performance platforms for category leaders worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-900/30 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Book Engineering Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Numbers Perspective Grid */}
      <section className="bg-white border-y border-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100">
              <div className="text-3xl md:text-4xl font-extrabold text-[#001A3F]">500+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Senior Engineers</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0072F5]">200+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Delivered Platforms</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100">
              <div className="text-3xl md:text-4xl font-extrabold text-[#00D2FF]">99.4%</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">On-Time Delivery</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F9FF] border border-blue-100">
              <div className="text-3xl md:text-4xl font-extrabold text-[#001A3F]">10+</div>
              <div className="text-xs text-[#001A3F]/60 uppercase font-semibold mt-1">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Squad Bento Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column (7 Cols): Global Engineering Squad culture card */}
          <div className="lg:col-span-7">
            <TiltCard3D
              maxTilt={4}
              scale={1.01}
              glare={true}
              className="h-full rounded-[32px] bg-white border border-blue-100 shadow-sm p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0072F5] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                    Our Culture & People
                  </span>
                  <span className="text-xs text-[#001A3F]/50 font-medium">
                    Hyderabad, Telangana, India (HQ)
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-3">
                  Autonomous squads focused on high-velocity impact.
                </h2>

                <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6">
                  Every product team is staffed with experienced full-stack engineers, cloud architects, and dedicated designers working in close collaboration. We don&apos;t staff junior benches; your mission is executed by seasoned builders.
                </p>

                <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden mb-6 border border-blue-100">
                  <Image
                    src="/images/team-hands.jpg"
                    alt="Venizor Engineering Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#001A3F]/85 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white flex items-center justify-between text-xs font-bold">
                    <span>100% Code Ownership Guaranteed</span>
                    <span className="text-[#00D2FF]">Zero Technical Debt</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#001A3F]">
                  <CheckCircle2 size={14} className="text-[#00D2FF]" />
                  <span>No Junior Handoffs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#001A3F]">
                  <CheckCircle2 size={14} className="text-[#00D2FF]" />
                  <span>Async Rhythms</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#001A3F]">
                  <CheckCircle2 size={14} className="text-[#00D2FF]" />
                  <span>Daily CI/CD Deploys</span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column (5 Cols): Direct Technical Leadership Discovery */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#001A3F] via-[#002B66] to-[#001026] text-white p-8 md:p-10 shadow-xl border border-blue-900/60">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#00D2FF] flex items-center justify-center">
                  <Code2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] block">
                    Direct Technical Access
                  </span>
                  <span className="text-xs text-white/70">
                    Hyderabad Engineering Center
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                Talk directly with our technical leadership.
              </h3>
              <p className="text-xs md:text-sm text-white/75 mb-6 leading-relaxed">
                Skip sales reps and account managers. Get immediate architectural feasibility analysis and fixed-milestone execution plans directly from our Principal Cloud Architects.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#00D2FF] shrink-0" />
                  <span>100% Source Code &amp; IP Ownership Transferred</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#00D2FF] shrink-0" />
                  <span>Fixed Milestone Deliveries with Transparent INR Pricing</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#00D2FF] shrink-0" />
                  <span>Zero Technical Debt with Rigorous Peer Code Reviews</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                  <CheckCircle2 size={16} className="text-[#00D2FF] shrink-0" />
                  <span>Dedicated Asynchronous Slack / WhatsApp Squad Channels</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-3.5 rounded-full bg-[#00D2FF] hover:bg-white text-[#001A3F] font-bold text-xs md:text-sm transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Schedule Technical Discovery</span>
                <ArrowUpRight size={16} />
              </button>
              <p className="text-[11px] text-center text-white/50 mt-3">
                1009, 10th Floor, Vasavi Sky City, Gachibowli, Hyderabad
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Headquarters & Hyderabad Engineering Hub */}
        <div className="pt-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072F5] mb-2 block">
              Corporate Headquarters
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight">
              Our Hyderabad Engineering Hub
            </h3>
            <p className="text-xs md:text-sm text-[#001A3F]/65 mt-1">
              Registered Indian software company with our single centralized engineering center in Hyderabad, Telangana.
            </p>
          </div>

          <div className="rounded-[32px] bg-white border border-blue-100 shadow-xl shadow-blue-950/5 p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0072F5] border border-blue-100">
                    Registered Headquarters &amp; Only Branch
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Operational &amp; Accepting Client Visits
                  </span>
                </div>

                <h4 className="text-2xl font-extrabold text-[#001A3F] tracking-tight">
                  Hyderabad Tech Corridor (Financial District / Gachibowli)
                </h4>

                <div className="flex flex-col gap-3 text-sm text-[#001A3F]/75">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-[#0072F5] shrink-0 mt-0.5" />
                    <span>
                      <strong>Address:</strong> 1009, 10th Floor, Vasavi Sky City, Gachibowli, Hyderabad, Telangana 500032, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#0072F5] shrink-0" />
                    <span><strong>Phone:</strong> <a href="tel:+917382373824" className="hover:text-[#0072F5] font-semibold text-[#001A3F]">+91 738 237 3824</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#0072F5] shrink-0" />
                    <span><strong>Email:</strong> <a href="mailto:connect@venizor.com" className="hover:underline font-semibold text-[#0072F5]">connect@venizor.com</a></span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://maps.google.com/?q=Vasavi+Sky+City+Gachibowli+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-bold text-[#001A3F] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Schedule Headquarters Visit</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F5F9FF] border border-blue-100 rounded-2xl p-6 flex flex-col gap-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#001A3F]/70">
                  Engineering Facility Capabilities
                </div>
                <div className="space-y-3 text-xs text-[#001A3F]/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>500+ Senior Full-Stack, AI &amp; Cloud Engineers on site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Dedicated Client War Rooms &amp; Sprint Review Theaters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Dedicated high-performance development &amp; testing labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Fast IST &amp; overlapping global time-zone sprint coverage</span>
                  </div>
                </div>
              </div>
            </div>
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
