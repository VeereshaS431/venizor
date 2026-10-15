"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutGrid,
  Sparkles,
  ChevronDown,
  Code2,
  Brain,
  Palette,
  LineChart,
  Activity,
  Landmark,
  GraduationCap,
  Building2,
  ShoppingBag,
  Truck,
  Cpu,
  UtensilsCrossed,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

const SERVICE_ITEMS = [
  {
    id: "software-development",
    title: "Software Development",
    tagline: "Custom web, mobile & cloud platforms",
    description: "Production-grade engineering from Next.js to high-concurrency microservices and APIs.",
    icon: Code2,
    badge: "Core Engineering",
    tags: ["Next.js & React", "Mobile Apps", "Microservices", "Cloud APIs"],
    href: "/services#software-development",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Autonomous swarms, RAG & LLMs",
    description: "Multi-agent autonomous systems, private enterprise RAG pipelines & custom fine-tuning.",
    icon: Brain,
    badge: "Next-Gen AI",
    tags: ["Agent Swarms", "Hybrid RAG", "Fine-Tuning", "Predictive ML"],
    href: "/services#ai-ml",
  },
  {
    id: "design-digital",
    title: "UI/UX & Product Design",
    tagline: "Design systems & 3D experiences",
    description: "High-conversion UX architectures, tokenized design systems and immersive 3D WebGL.",
    icon: Palette,
    badge: "Experience Design",
    tags: ["Figma Systems", "3D Interactive", "CX / DX Audits", "Prototypes"],
    href: "/services#design-digital",
  },
  {
    id: "digital-branding",
    title: "Technical SEO & Growth",
    tagline: "Search dominance & conversion funnels",
    description: "Programmatic SEO, Core Web Vitals 95+ optimization, JSON-LD schemas and high-ROI PPC.",
    icon: LineChart,
    badge: "Growth Engine",
    tags: ["Programmatic SEO", "Core Web Vitals", "CRO Sprints", "Paid Media"],
    href: "/services#digital-branding",
  },
];

const INDUSTRY_ITEMS = [
  {
    id: "healthcare",
    name: "Healthcare & HealthTech",
    tagline: "Telemedicine, EHR & patient portals",
    badge: "HIPAA",
    icon: Activity,
    href: "/industries#healthcare",
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "Payment gateways & treasury engines",
    badge: "PCI-DSS",
    icon: Landmark,
    href: "/industries#fintech",
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Scalable LMS & adaptive learning",
    badge: "FERPA",
    icon: GraduationCap,
    href: "/industries#education",
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "MLS/RETS sync & 3D virtual tours",
    badge: "RESO",
    icon: Building2,
    href: "/industries#real-estate",
  },
  {
    id: "ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Headless commerce & live inventory",
    badge: "Omnichannel",
    icon: ShoppingBag,
    href: "/industries#ecommerce",
  },
  {
    id: "logistics",
    name: "Supply Chain & Logistics",
    tagline: "Fleet telematics & IoT dispatch",
    badge: "IoT Fleet",
    icon: Truck,
    href: "/industries#logistics",
  },
  {
    id: "it-cloud",
    name: "Enterprise IT & Cloud",
    tagline: "Kubernetes, CI/CD & Zero-Trust",
    badge: "DevOps",
    icon: Cpu,
    href: "/industries#it-cloud",
  },
  {
    id: "hospitality",
    name: "Food & Hospitality",
    tagline: "POS, Kitchen displays & loyalty engines",
    badge: "KDS & POS",
    icon: UtensilsCrossed,
    href: "/industries#hospitality",
  },
];

export default function Navbar({ onOpenMenu, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menu: "services" | "industries") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          isScrolled || activeDropdown
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm shadow-blue-900/5"
            : "py-4 bg-white/80 backdrop-blur-sm border-b border-blue-50/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative">
          {/* Venizor Brand Logo */}
          <Link
            href="/"
            onClick={closeDropdown}
            className="group flex items-center text-decoration-none transition-transform duration-200 hover:scale-[1.02] shrink-0"
          >
            <div className="relative h-9 w-[165px] md:w-[190px] flex items-center">
              <Image
                src="/images/venizor-logo-horizontal.png"
                alt="Venizor — Innovate with Confidence"
                width={190}
                height={50}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold text-[#001A3F]">
            <Link
              href="/"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1"
            >
              Home
            </Link>

            {/* Services Trigger with Dropdown and Icon */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                onClick={closeDropdown}
                className={`hover:text-[#0072F5] transition-colors py-1 flex items-center gap-1 group cursor-pointer ${
                  activeDropdown === "services" ? "text-[#0072F5]" : ""
                }`}
                aria-expanded={activeDropdown === "services"}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "services"
                      ? "rotate-180 text-[#0072F5]"
                      : "text-[#00D2FF] group-hover:rotate-180"
                  }`}
                />
              </Link>
            </div>

            {/* Industries Trigger with Dropdown and Icon */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/industries"
                onClick={closeDropdown}
                className={`hover:text-[#0072F5] transition-colors py-1 flex items-center gap-1 group cursor-pointer ${
                  activeDropdown === "industries" ? "text-[#0072F5]" : ""
                }`}
                aria-expanded={activeDropdown === "industries"}
                aria-haspopup="true"
              >
                <span>Industries</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "industries"
                      ? "rotate-180 text-[#0072F5]"
                      : "text-[#00D2FF] group-hover:rotate-180"
                  }`}
                />
              </Link>
            </div>

            <Link
              href="/case-studies"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1"
            >
              Case Studies
            </Link>

            <Link
              href="/about-us"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1"
            >
              About Us
            </Link>

            <Link
              href="/how-we-work"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1 hidden xl:inline"
            >
              How We Work
            </Link>

            <Link
              href="/insights"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1"
            >
              Insights
            </Link>

            <Link
              href="/contact-us"
              onClick={closeDropdown}
              className="hover:text-[#0072F5] transition-colors py-1"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick contact button with Venizor blue/cyan styling */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenContact();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#001A3F] bg-white border border-blue-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#001A3F] hover:border-[#001A3F] hover:text-[#00D2FF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
              id="nav-quick-contact"
            >
              <Sparkles size={13} className="text-[#00D2FF]" />
              <span>Get in touch</span>
            </button>

            {/* Menu button */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenMenu();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[#001A3F] bg-white border border-slate-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-50 hover:border-blue-300 hover:text-[#0072F5] hover:-translate-y-0.5 hover:shadow-md active:scale-95 cursor-pointer"
              id="nav-menu-button"
              aria-label="Toggle navigation menu"
            >
              <span>Menu</span>
              <LayoutGrid size={15} className="text-[#00D2FF]" />
            </button>
          </div>
        </div>

        {/* Mega Dropdown Menus */}
        {activeDropdown && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 pt-2 z-50 pointer-events-auto"
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* SERVICES MEGA DROPDOWN */}
              {activeDropdown === "services" && (
                <div className="bg-white/98 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-950/15 rounded-3xl p-6 md:p-8 animate-fadeIn">
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#0072F5]">
                        Full-Lifecycle Engineering & AI Capabilities
                      </span>
                    </div>
                    <Link
                      href="/services"
                      onClick={closeDropdown}
                      className="text-xs font-bold text-[#0072F5] hover:text-[#001A3F] transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Explore All 4 Practice Pillars</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* 4 Pillars Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {SERVICE_ITEMS.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.id}
                          href={service.href}
                          onClick={closeDropdown}
                          className="group p-4 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-[#F5F9FF] transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0072F5] group-hover:bg-[#001A3F] group-hover:text-[#00D2FF] flex items-center justify-center transition-colors shadow-sm">
                                  <Icon size={19} />
                                </div>
                                <div>
                                  <h3 className="text-sm font-bold text-[#001A3F] group-hover:text-[#0072F5] transition-colors flex items-center gap-1.5">
                                    <span>{service.title}</span>
                                  </h3>
                                  <p className="text-[11px] font-semibold text-slate-500">
                                    {service.tagline}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10px] font-bold text-[#0072F5] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/60">
                                {service.badge}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                              {service.description}
                            </p>
                          </div>

                          {/* Quick capability tags */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100/80">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] bg-white text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60 font-medium group-hover:border-blue-200 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="mt-5 pt-4 border-t border-blue-50 flex items-center justify-between bg-slate-50/70 -mx-6 -mb-6 md:-mx-8 md:-mb-8 px-6 md:px-8 py-4 rounded-b-3xl">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span className="flex items-center gap-1.5 font-semibold text-[#001A3F]">
                        <CheckCircle2 size={14} className="text-[#00D2FF]" />
                        Single branch in Hyderabad
                      </span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="hidden sm:inline">200+ Platforms Delivered</span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="hidden sm:inline">99.4% On-Time SLA</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          closeDropdown();
                          onOpenContact();
                        }}
                        className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#0072F5] hover:bg-[#001A3F] transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
                      >
                        <Sparkles size={12} className="text-[#00D2FF]" />
                        <span>Request Scope</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* INDUSTRIES MEGA DROPDOWN */}
              {activeDropdown === "industries" && (
                <div className="bg-white/98 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-950/15 rounded-3xl p-6 md:p-8 animate-fadeIn">
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#0072F5]">
                        Specialized Sector Solutions & Regulatory Compliance
                      </span>
                    </div>
                    <Link
                      href="/industries"
                      onClick={closeDropdown}
                      className="text-xs font-bold text-[#0072F5] hover:text-[#001A3F] transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Explore All 8 Verticals</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* 8 Industries (4x2 Grid) */}
                  <div className="grid grid-cols-4 gap-3.5">
                    {INDUSTRY_ITEMS.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <Link
                          key={industry.id}
                          href={industry.href}
                          onClick={closeDropdown}
                          className="group p-3.5 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-[#F5F9FF] transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0072F5] group-hover:bg-[#001A3F] group-hover:text-[#00D2FF] flex items-center justify-center transition-colors shadow-sm">
                                <Icon size={17} />
                              </div>
                              <span className="text-[9px] font-bold text-slate-500 bg-white border border-slate-200/80 px-1.5 py-0.5 rounded">
                                {industry.badge}
                              </span>
                            </div>

                            <h3 className="text-xs font-bold text-[#001A3F] group-hover:text-[#0072F5] transition-colors leading-snug mb-1">
                              {industry.name}
                            </h3>

                            <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                              {industry.tagline}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-[#0072F5] opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>View Architecture</span>
                            <ArrowRight size={10} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="mt-5 pt-4 border-t border-blue-50 flex items-center justify-between bg-slate-50/70 -mx-6 -mb-6 md:-mx-8 md:-mb-8 px-6 md:px-8 py-4 rounded-b-3xl">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <ShieldCheck size={14} className="text-[#00D2FF]" />
                      <span>
                        Strict regulatory architectures: HIPAA, PCI-DSS, FERPA, RESO & Zero-Trust compliant.
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          closeDropdown();
                          onOpenContact();
                        }}
                        className="px-4 py-2 rounded-full text-xs font-bold text-[#001A3F] bg-white border border-slate-200 hover:border-[#0072F5] hover:text-[#0072F5] transition-colors shadow-sm cursor-pointer"
                      >
                        Consult an Industry Architect
                      </button>
                      <Link
                        href="/industries"
                        onClick={closeDropdown}
                        className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#0072F5] hover:bg-[#001A3F] transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
                      >
                        <span>All Case Studies</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Subtle Backdrop when Dropdown is open */}
      {activeDropdown && (
        <div
          className="hidden lg:block fixed inset-0 top-[65px] bg-[#001A3F]/15 backdrop-blur-[2px] z-40 animate-fadeIn"
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}
    </>
  );
}
