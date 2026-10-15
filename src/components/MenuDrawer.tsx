"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
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
} from "lucide-react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (sectionId: string) => void;
  onOpenContact: () => void;
}

export default function MenuDrawer({
  isOpen,
  onClose,
  onOpenContact,
}: MenuDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<"services" | "industries" | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: "services" | "industries") => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const services = [
    { title: "Software Development", href: "/services#software-development", icon: Code2 },
    { title: "AI & Machine Learning", href: "/services#ai-ml", icon: Brain },
    { title: "UI/UX & Product Design", href: "/services#design-digital", icon: Palette },
    { title: "Technical SEO & Growth", href: "/services#digital-branding", icon: LineChart },
  ];

  const industries = [
    { title: "Healthcare & HealthTech", href: "/industries#healthcare", icon: Activity },
    { title: "FinTech & Banking", href: "/industries#fintech", icon: Landmark },
    { title: "Education & EdTech", href: "/industries#education", icon: GraduationCap },
    { title: "Real Estate & PropTech", href: "/industries#real-estate", icon: Building2 },
    { title: "Retail & E-Commerce", href: "/industries#ecommerce", icon: ShoppingBag },
    { title: "Supply Chain & Logistics", href: "/industries#logistics", icon: Truck },
    { title: "Enterprise IT & Cloud", href: "/industries#it-cloud", icon: Cpu },
    { title: "Food & Hospitality", href: "/industries#hospitality", icon: UtensilsCrossed },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#001A3F]/75 backdrop-blur-md flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-white flex flex-col justify-between p-6 sm:p-8 md:p-10 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <Link href="/" onClick={onClose} className="relative h-8 w-[160px] flex items-center">
              <Image
                src="/images/venizor-logo-horizontal.png"
                alt="Venizor"
                width={160}
                height={42}
                className="object-contain"
              />
            </Link>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-[#001A3F] hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col gap-1.5">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="group w-full flex items-center justify-between py-2 text-base font-bold text-[#001A3F] transition-all duration-200 hover:text-[#0072F5] hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#00D2FF]">01</span>
                    <span>Home</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-[#00D2FF] transition-transform" />
                </Link>
              </li>

              {/* Services with Accordion */}
              <li className="border-y border-slate-100/70 py-1">
                <div className="flex items-center justify-between py-1">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="flex items-center gap-3 text-base font-bold text-[#001A3F] hover:text-[#0072F5] transition-colors group"
                  >
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#00D2FF]">02</span>
                    <span>Services</span>
                  </Link>
                  <button
                    onClick={() => toggleSection("services")}
                    className="p-1 text-slate-400 hover:text-[#0072F5] transition-colors cursor-pointer"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        expandedSection === "services" ? "rotate-180 text-[#0072F5]" : ""
                      }`}
                    />
                  </button>
                </div>
                {expandedSection === "services" && (
                  <div className="pl-8 pr-2 py-2 flex flex-col gap-2 animate-fadeIn bg-slate-50/70 rounded-xl my-1">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.title}
                          href={s.href}
                          onClick={onClose}
                          className="flex items-center gap-2.5 py-1.5 text-xs font-semibold text-[#001A3F] hover:text-[#0072F5] transition-colors"
                        >
                          <Icon size={14} className="text-[#0072F5]" />
                          <span>{s.title}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="text-[11px] font-bold text-[#0072F5] pt-1 flex items-center gap-1 hover:underline"
                    >
                      <span>View All Services</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                )}
              </li>

              {/* Industries with Accordion */}
              <li className="border-b border-slate-100/70 py-1">
                <div className="flex items-center justify-between py-1">
                  <Link
                    href="/industries"
                    onClick={onClose}
                    className="flex items-center gap-3 text-base font-bold text-[#001A3F] hover:text-[#0072F5] transition-colors group"
                  >
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#00D2FF]">03</span>
                    <span>Industries</span>
                  </Link>
                  <button
                    onClick={() => toggleSection("industries")}
                    className="p-1 text-slate-400 hover:text-[#0072F5] transition-colors cursor-pointer"
                    aria-label="Toggle Industries submenu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        expandedSection === "industries" ? "rotate-180 text-[#0072F5]" : ""
                      }`}
                    />
                  </button>
                </div>
                {expandedSection === "industries" && (
                  <div className="pl-8 pr-2 py-2 grid grid-cols-1 gap-2 animate-fadeIn bg-slate-50/70 rounded-xl my-1">
                    {industries.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <Link
                          key={ind.title}
                          href={ind.href}
                          onClick={onClose}
                          className="flex items-center gap-2.5 py-1.5 text-xs font-semibold text-[#001A3F] hover:text-[#0072F5] transition-colors"
                        >
                          <Icon size={14} className="text-[#0072F5]" />
                          <span>{ind.title}</span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/industries"
                      onClick={onClose}
                      className="text-[11px] font-bold text-[#0072F5] pt-1 flex items-center gap-1 hover:underline"
                    >
                      <span>View All Industries</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                )}
              </li>

              {/* Remaining Links */}
              {[
                { num: "04", label: "Case Studies Portfolio", href: "/case-studies" },
                { num: "05", label: "About Venizor Studio", href: "/about-us" },
                { num: "06", label: "How We Work", href: "/how-we-work" },
                { num: "07", label: "Engineering Insights", href: "/insights" },
                { num: "08", label: "Contact & Consultation", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group w-full flex items-center justify-between py-2 text-base font-bold text-[#001A3F] transition-all duration-200 hover:text-[#0072F5] hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-[#00D2FF]">
                        {link.num}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-[#00D2FF] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Contact Details */}
        <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#00D2FF] shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#00D2FF] shrink-0" />
              <span>connect@venizor.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#00D2FF] shrink-0" />
              <span>+91 738 237 3824</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 py-3 rounded-full text-xs font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-center"
            >
              <span>Request Consultation</span>
              <ArrowRight size={14} className="text-[#00D2FF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
