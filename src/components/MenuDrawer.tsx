"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

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
  if (!isOpen) return null;

  const links = [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "Services & Capabilities", href: "/services" },
    { num: "03", label: "Industries We Serve", href: "/industries" },
    { num: "04", label: "Case Studies Portfolio", href: "/case-studies" },
    { num: "05", label: "About Venizor Studio", href: "/about-us" },
    { num: "06", label: "How We Work", href: "/how-we-work" },
    { num: "07", label: "Engineering Insights", href: "/insights" },
    { num: "08", label: "Contact & Consultation", href: "/contact-us" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#001A3F]/75 backdrop-blur-md flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-white flex flex-col justify-between p-8 md:p-10 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between mb-8">
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
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group w-full flex items-center justify-between py-2 text-lg md:text-xl font-bold tracking-tight text-[#001A3F] transition-all duration-200 hover:text-[#0072F5] hover:translate-x-1"
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
            <Link
              href="/contact-us"
              onClick={onClose}
              className="flex-1 py-3 rounded-full text-xs font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer text-center"
            >
              <span>Request Consultation</span>
              <ArrowRight size={14} className="text-[#00D2FF]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
