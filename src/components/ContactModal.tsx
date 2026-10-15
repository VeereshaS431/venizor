"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "₹2 Lakh - ₹5 Lakh",
    timeline: "1-3 months",
    message: "",
    services: ["Custom Software", "UI/UX Product Design"],
  });

  if (!isOpen) return null;

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-950 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-10 px-2">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-[#001A3F] mb-3 tracking-tight">
              Thank You! We Received Your Request.
            </h3>
            <p className="text-sm text-[#001A3F]/70 leading-relaxed max-w-md mx-auto mb-6">
              Our engineering leadership will review your scope and contact you
              at <strong className="text-[#001A3F]">{formData.email}</strong> within
              24 hours with a technical architecture proposal.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all hover:shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-7">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
                <Sparkles size={14} /> Start Your Project
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#001A3F] mb-2">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="text-sm text-[#001A3F]/70">
                Tell us about your digital product goals, tech challenges, or timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Service Selectors */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Services You Require
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Custom Software",
                    "UI/UX Product Design",
                    "AWS / Cloud DevOps",
                    "Mobile App (iOS/Android)",
                    "Web Application",
                    "AI / Data Integration",
                  ].map((srv) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all ${
                          isSelected
                            ? "border-blue-600 bg-blue-50 text-blue-600 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option>&lt; ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000 – ₹15,00,000</option>
                    <option>₹15,00,000 – ₹50,00,000</option>
                    <option>₹50,00,000+ (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option>&lt; 1 month (Rush)</option>
                    <option>1 - 3 months</option>
                    <option>3 - 6 months</option>
                    <option>Ongoing dedicated squad</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the problem, vision, target users, or tech stack requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-y"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-full text-sm font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Send size={15} /> Send Inquiry & Receive Quote
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
