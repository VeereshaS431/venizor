"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, Sparkles, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenMenu, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm shadow-blue-900/5"
          : "py-4 bg-white/80 backdrop-blur-sm border-b border-blue-50/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Venizor Brand Logo */}
        <Link
          href="/"
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
            className="hover:text-[#0072F5] transition-colors py-1"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="hover:text-[#0072F5] transition-colors py-1 flex items-center gap-1 group"
          >
            <span>Services</span>
            <ChevronDown size={11} className="text-[#00D2FF] group-hover:rotate-180 transition-transform" />
          </Link>

          <Link
            href="/industries"
            className="hover:text-[#0072F5] transition-colors py-1 flex items-center gap-1 group"
          >
            <span>Industries</span>
            <ChevronDown size={11} className="text-[#00D2FF] group-hover:rotate-180 transition-transform" />
          </Link>

          <Link
            href="/case-studies"
            className="hover:text-[#0072F5] transition-colors py-1"
          >
            Case Studies
          </Link>

          <Link
            href="/about-us"
            className="hover:text-[#0072F5] transition-colors py-1"
          >
            About Us
          </Link>

          <Link
            href="/how-we-work"
            className="hover:text-[#0072F5] transition-colors py-1 hidden xl:inline"
          >
            How We Work
          </Link>

          <Link
            href="/insights"
            className="hover:text-[#0072F5] transition-colors py-1"
          >
            Insights
          </Link>

          <Link
            href="/contact-us"
            className="hover:text-[#0072F5] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick contact button with Venizor blue/cyan styling */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#001A3F] bg-white border border-blue-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#001A3F] hover:border-[#001A3F] hover:text-[#00D2FF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
            id="nav-quick-contact"
          >
            <Sparkles size={13} className="text-[#00D2FF]" />
            <span>Get in touch</span>
          </button>

          {/* Menu button */}
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[#001A3F] bg-white border border-slate-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-50 hover:border-blue-300 hover:text-[#0072F5] hover:-translate-y-0.5 hover:shadow-md active:scale-95 cursor-pointer"
            id="nav-menu-button"
            aria-label="Toggle navigation menu"
          >
            <span>Menu</span>
            <LayoutGrid size={15} className="text-[#00D2FF]" />
          </button>
        </div>
      </div>
    </header>
  );
}
