"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Send,
  Building
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import MenuDrawer from "@/components/MenuDrawer";
import { GLOBAL_OFFICES } from "@/data/offerings";

export default function ContactUsClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "application",
    budget: "₹5L-₹15L",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => {}}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-[#001A3F] via-[#002255] to-[#001A3F] text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Let&apos;s Build Together</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Start Your Project With{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
              Tell us about your product goals, architectural challenges, or scaling requirements. Our Principal Architects will prepare a tailored discovery plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Global Hubs Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 Cols): High-Conversion Project Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-blue-100 p-8 md:p-12 shadow-xl shadow-blue-950/5">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-extrabold text-[#001A3F] tracking-tight">
                  Request a Free Proposal
                </h2>
                <p className="text-xs text-[#001A3F]/60 mt-1">
                  Guaranteed confidential consultation protected by mutual NDA.
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                <Clock size={13} className="text-emerald-600" />
                <span>Response in &lt; 4 Hours</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-emerald-950">
                  Proposal Request Received!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || "there"}</strong>. One of our Principal Architects has received your brief and will contact you at <strong>{formData.email}</strong> within 4 working hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#001A3F] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                    Full Name <span className="text-[#0072F5]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] placeholder-[#001A3F]/40 focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                      Work Email <span className="text-[#0072F5]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] placeholder-[#001A3F]/40 focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                      Phone Number <span className="text-[#0072F5]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] placeholder-[#001A3F]/40 focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Purpose Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                      Project Nature <span className="text-[#0072F5]">*</span>
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all"
                    >
                      <option value="application">Web & Mobile Application</option>
                      <option value="ai-ml">Enterprise AI & Autonomous Agents</option>
                      <option value="cloud">Cloud Migration & Microservices</option>
                      <option value="dedicated-team">Dedicated Engineering Squad</option>
                      <option value="design-system">UI/UX & Design Systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                      Estimated Budget <span className="text-[#0072F5]">*</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all"
                    >
                      <option value="<₹2L">&lt; ₹2 Lakhs</option>
                      <option value="₹2L-₹5L">₹2 Lakhs – ₹5 Lakhs</option>
                      <option value="₹5L-₹15L">₹5 Lakhs – ₹15 Lakhs</option>
                      <option value="₹15L-₹50L">₹15 Lakhs – ₹50 Lakhs</option>
                      <option value="₹50L+">₹50 Lakhs+ (Enterprise Scope)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#001A3F] mb-2 block">
                    Project Overview & Timeline <span className="text-[#0072F5]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the problem you are solving, target launch date, and key requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-blue-100 text-sm text-[#001A3F] placeholder-[#001A3F]/40 focus:outline-none focus:border-[#0072F5] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#001A3F]/60">
                    <ShieldCheck size={16} className="text-[#00D2FF]" />
                    <span>Non-Disclosure Agreement automatically applied.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#001A3F] hover:bg-[#0072F5] text-white text-xs md:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Scope</span>
                    <Send size={14} className="text-[#00D2FF]" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (5 Cols): Direct Contacts & Global Offices */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="rounded-[32px] bg-[#001A3F] text-white p-8 md:p-10 shadow-xl border border-blue-900/60">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-2 block">
                Direct Inquiries
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight mb-4">
                Prefer direct communication?
              </h3>
              <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed">
                Reach out to our leadership directly. We are happy to hop on a preliminary technical discovery call.
              </p>

              <div className="space-y-4 text-xs md:text-sm">
                <a
                  href="mailto:connect@venizor.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Mail size={18} className="text-[#00D2FF]" />
                  <span>connect@venizor.com</span>
                </a>

                <a
                  href="tel:+917382373824"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Phone size={18} className="text-[#00D2FF]" />
                  <span>+91 738 237 3824</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin size={18} className="text-[#00D2FF]" />
                  <span>Headquarters & Only Branch: Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Corporate Headquarters Card */}
            <div className="rounded-[30px] bg-white border border-blue-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-extrabold text-[#001A3F] tracking-tight flex items-center gap-2">
                  <Building size={18} className="text-[#0072F5]" />
                  <span>Corporate Headquarters</span>
                </h4>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                  Only Branch (Hyderabad)
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-[#001A3F]/80">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#001A3F]/50 mb-1">
                    Registered Office &amp; Engineering Center
                  </div>
                  <p className="font-semibold text-[#001A3F] leading-snug">
                    1009, 10th Floor, Vasavi Sky City, Gachibowli, Hyderabad, Telangana 500032, India
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Business Hotline:</span>
                    <a href="tel:+917382373824" className="font-bold text-[#0072F5] hover:underline">
                      +91 738 237 3824
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Careers &amp; Talent:</span>
                    <a href="tel:+918179260294" className="font-semibold text-slate-700 hover:underline">
                      +91 817 926 0294
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Official Email:</span>
                    <a href="mailto:connect@venizor.com" className="font-semibold text-[#0072F5] hover:underline">
                      connect@venizor.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Visiting Hours:</span>
                    <span className="font-medium text-slate-700">Mon - Fri, 9:00 AM - 7:00 PM IST</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Vasavi+Sky+City+Gachibowli+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#001A3F] bg-blue-50 border border-blue-200 hover:bg-blue-100 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & CTA */}
      <FooterCta
        onOpenQuote={() => {}}
        onNavigateSection={() => {}}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={() => {}}
        onOpenContact={() => {}}
      />
    </main>
  );
}
