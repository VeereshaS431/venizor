"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

interface FooterCtaProps {
  onOpenQuote: () => void;
  onNavigateSection?: (id: string) => void;
}

export default function FooterCta({ onOpenQuote }: FooterCtaProps) {
  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About Us", href: "/about-us" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const companyLinks = [
    { label: "About Venizor", href: "/about-us" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Engineering Standards", href: "/services" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <SectionReveal3D
      id="contact-footer"
      className="relative bg-gradient-to-br from-[#001A3F] via-[#002B66] to-[#001026] text-white pt-24 pb-10 overflow-hidden"
    >
      {/* Background 3D Radial Glow */}
      <div className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D2FF]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Top CTA Row with 3D Tilt Card */}
        <div className="max-w-2xl mb-20 preserve-3d">
          <TiltCard3D
            maxTilt={6}
            scale={1.01}
            glare={true}
            className="p-8 md:p-10 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-white depth-layer-2">
                Build Something Great Together
              </h2>

              <p className="text-base text-white/85 leading-relaxed tracking-tight depth-layer-1">
                Innovate with confidence. We&apos;re here to turn your most complex ideas into market-defining digital products.
              </p>

              <div className="depth-layer-2 flex items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-[#001A3F] bg-white border border-white/40 shadow-lg shadow-blue-950/20 transition-all duration-300 hover:bg-[#00D2FF] hover:text-[#001A3F] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  id="footer-quote-button"
                >
                  <span>Free quote</span>
                  <ArrowUpRight size={15} />
                </Link>

                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/90 bg-white/10 border border-white/20 hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Quick Message</span>
                </button>
              </div>
            </div>
          </TiltCard3D>
        </div>

        {/* Navigation & Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-20 border-b border-white/10">
          {/* Column 1: Page Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-5">
              Explore Pages
            </h4>
            <ul className="flex flex-col gap-2.5">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-[#00D2FF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-5">
              Company & Standards
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-[#00D2FF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Global Hubs */}
          <div className="max-w-[280px]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-5">
              Corporate Headquarters
            </h4>
            <div className="flex flex-col gap-3.5 text-xs text-white/80 leading-relaxed">
              <p className="flex gap-2 items-start">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#00D2FF]" />
                <span>1009, 10th Floor, Vasavi Sky City, Gachibowli, Hyderabad, Telangana 500032, India</span>
              </p>

              <a
                href="mailto:connect@venizor.com"
                className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
              >
                <Mail size={16} className="text-[#00D2FF]" />
                <span>connect@venizor.com</span>
              </a>

              <a
                href="tel:+917382373824"
                className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
              >
                <Phone size={16} className="text-[#00D2FF]" />
                <span>+91 738 237 3824</span>
              </a>
            </div>
          </div>
        </div>

        {/* Massive Branded Bottom Typography with 3D Depth */}
        <div className="pt-14 pb-2 text-center select-none preserve-3d">
          <div className="text-[clamp(3.5rem,13vw,11rem)] font-extrabold tracking-tight leading-none text-white/10 whitespace-nowrap overflow-hidden transition-all duration-700 hover:text-white/20 hover:tracking-wide cursor-default font-sans uppercase">
            VENIZOR
          </div>
          <div className="text-[clamp(0.65rem,1.2vw,0.85rem)] font-semibold uppercase tracking-[0.35em] text-[#00D2FF]/60 mt-1">
            Innovate with Confidence
          </div>
          <div className="mt-8 text-xs text-white/50 flex justify-between items-center flex-wrap gap-3">
            <span>© 2026 Venizor. All rights reserved.</span>
            <span>Enterprise Software Development &amp; AI Solutions</span>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
