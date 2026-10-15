"use client";

import React, { useState } from "react";
import { Check, Sparkles, Shield, Cpu, Cloud, Globe, ExternalLink } from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

interface PartnerItem {
  name: string;
  category: "Cloud & DevOps" | "Enterprise & CRM" | "AI & Data" | "Digital Experience";
  badge: string;
  tier: string;
  accent: string;
  highlight: string;
  svgIcon: React.ReactNode;
}

export const PARTNERS: PartnerItem[] = [
  {
    name: "AWS",
    category: "Cloud & DevOps",
    badge: "aws",
    tier: "Advanced Tier Partner",
    accent: "#FF9900",
    highlight: "Serverless & Multi-Region EKS",
    svgIcon: (
      <svg viewBox="0 0 100 60" width="60" height="36" fill="currentColor">
        <text x="50%" y="38" textAnchor="middle" fontSize="30" fontWeight="800" fontFamily="sans-serif">
          aws
        </text>
        <path d="M 24 45 Q 50 56 76 45 Q 80 43 78 47 Q 50 60 22 47 Z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    category: "Enterprise & CRM",
    badge: "salesforce",
    tier: "Crest (Gold) Consulting Partner",
    accent: "#00A1E0",
    highlight: "Custom Apex & Lightning UI",
    svgIcon: (
      <svg viewBox="0 0 100 60" width="70" height="36" fill="currentColor">
        <path d="M 30 38 Q 22 28 34 18 Q 44 10 54 18 Q 62 10 72 16 Q 82 22 78 34 Q 84 40 76 46 Q 30 48 30 38 Z" fill="#00A1E0" opacity="0.9" />
        <text x="52%" y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FFFFFF" fontFamily="sans-serif">
          salesforce
        </text>
      </svg>
    ),
  },
  {
    name: "Databricks",
    category: "AI & Data",
    badge: "databricks",
    tier: "Premier System Integrator",
    accent: "#FF3621",
    highlight: "Lakehouse & Real-Time ML",
    svgIcon: (
      <svg viewBox="0 0 120 60" width="85" height="36" fill="currentColor">
        <polygon points="20,25 35,15 50,25 35,35" fill="#FF3621" />
        <polygon points="20,38 35,28 50,38 35,48" fill="#FF3621" />
        <text x="75" y="38" textAnchor="middle" fontSize="16" fontWeight="700" fontFamily="sans-serif">
          databricks
        </text>
      </svg>
    ),
  },
  {
    name: "Azure",
    category: "Cloud & DevOps",
    badge: "Azure",
    tier: "Microsoft Solutions Partner",
    accent: "#0078D4",
    highlight: "Hybrid Cloud & Enterprise Entra",
    svgIcon: (
      <svg viewBox="0 0 100 60" width="65" height="36" fill="currentColor">
        <polygon points="25,48 45,14 62,40 40,48" fill="#0078D4" />
        <polygon points="50,14 68,14 80,48 58,48" fill="#50E6FF" opacity="0.85" />
        <text x="55" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="sans-serif">
          Azure
        </text>
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Cloud & DevOps",
    badge: "Google Cloud",
    tier: "Premier Partner",
    accent: "#4285F4",
    highlight: "Kubernetes GKE & BigQuery AI",
    svgIcon: (
      <svg viewBox="0 0 120 60" width="90" height="36" fill="currentColor">
        <circle cx="28" cy="30" r="12" fill="#4285F4" />
        <circle cx="28" cy="30" r="6" fill="#FFFFFF" />
        <text x="75" y="34" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="sans-serif">
          Google Cloud
        </text>
      </svg>
    ),
  },
  {
    name: "Appian",
    category: "AI & Data",
    badge: "appian",
    tier: "Certified Solutions Partner",
    accent: "#192F60",
    highlight: "Low-Code Enterprise Orchestration",
    svgIcon: (
      <svg viewBox="0 0 100 60" width="65" height="36" fill="currentColor">
        <text x="50%" y="38" textAnchor="middle" fontSize="22" fontWeight="700" letterSpacing="-1" fontFamily="sans-serif">
          appian
        </text>
      </svg>
    ),
  },
  {
    name: "ServiceNow",
    category: "Enterprise & CRM",
    badge: "servicenow",
    tier: "Elite Specialist Partner",
    accent: "#81B5A1",
    highlight: "ITSM & Digital Automated Workflows",
    svgIcon: (
      <svg viewBox="0 0 110 60" width="80" height="36" fill="currentColor">
        <text x="50%" y="38" textAnchor="middle" fontSize="18" fontWeight="700" letterSpacing="-0.5" fontFamily="sans-serif">
          servicenow
        </text>
      </svg>
    ),
  },
  {
    name: "Microsoft Dynamics",
    category: "Enterprise & CRM",
    badge: "Microsoft Dynamics",
    tier: "Gold Certified Partner",
    accent: "#002050",
    highlight: "Finance & Operations ERP",
    svgIcon: (
      <svg viewBox="0 0 120 60" width="85" height="36" fill="currentColor">
        <rect x="20" y="20" width="8" height="8" fill="#F25022" />
        <rect x="30" y="20" width="8" height="8" fill="#7FBA00" />
        <rect x="20" y="30" width="8" height="8" fill="#00A4EF" />
        <rect x="30" y="30" width="8" height="8" fill="#FFB900" />
        <text x="78" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif">
          Microsoft
        </text>
        <text x="78" y="38" textAnchor="middle" fontSize="9" fontWeight="500" fontFamily="sans-serif">
          Dynamics
        </text>
      </svg>
    ),
  },
  {
    name: "Sitecore",
    category: "Digital Experience",
    badge: "SITECORE",
    tier: "Certified Solutions Partner",
    accent: "#EB1F28",
    highlight: "Composable DXP & Headless XM",
    svgIcon: (
      <svg viewBox="0 0 110 60" width="75" height="36" fill="currentColor">
        <circle cx="28" cy="30" r="8" stroke="#EB1F28" strokeWidth="4" fill="none" />
        <text x="68" y="34" textAnchor="middle" fontSize="13" fontWeight="800" fontFamily="sans-serif">
          SITECORE
        </text>
      </svg>
    ),
  },
  {
    name: "SharePoint",
    category: "Digital Experience",
    badge: "SharePoint",
    tier: "Microsoft Cloud Partner",
    accent: "#008272",
    highlight: "Enterprise Modern Knowledge Intranets",
    svgIcon: (
      <svg viewBox="0 0 110 60" width="75" height="36" fill="currentColor">
        <circle cx="28" cy="27" r="8" fill="#008272" />
        <circle cx="34" cy="33" r="6" fill="#038387" opacity="0.8" />
        <text x="70" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="sans-serif">
          SharePoint
        </text>
      </svg>
    ),
  },
  {
    name: "Symbox",
    category: "Digital Experience",
    badge: "symbox",
    tier: "Technology Alliance",
    accent: "#E11D48",
    highlight: "Telecom Billing & Real-Time IoT",
    svgIcon: (
      <svg viewBox="0 0 100 60" width="65" height="36" fill="currentColor">
        <text x="50%" y="38" textAnchor="middle" fontSize="21" fontWeight="700" letterSpacing="-0.5" fontFamily="sans-serif">
          symbox
        </text>
      </svg>
    ),
  },
  {
    name: "Micro Focus",
    category: "Cloud & DevOps",
    badge: "MICRO FOCUS",
    tier: "Enterprise Technology Partner",
    accent: "#00739D",
    highlight: "Legacy Mainframe Modernization",
    svgIcon: (
      <svg viewBox="0 0 110 60" width="75" height="36" fill="currentColor">
        <circle cx="30" cy="30" r="10" stroke="#00739D" strokeWidth="3" fill="none" />
        <text x="72" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="sans-serif">
          MICRO FOCUS
        </text>
      </svg>
    ),
  },
];

const CATEGORIES = ["All Platforms", "Cloud & DevOps", "Enterprise & CRM", "AI & Data", "Digital Experience"] as const;

export default function Partnerships() {
  const [activeCategory, setActiveCategory] = useState<string>("All Platforms");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredPartners =
    activeCategory === "All Platforms"
      ? PARTNERS
      : PARTNERS.filter((p) => p.category === activeCategory);

  return (
    <SectionReveal3D
      id="partnerships-section"
      className="py-24 md:py-32 bg-white border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Decorative gradient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header & Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FF] border border-blue-100 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-3">
              <Sparkles size={13} className="text-[#00D2FF]" />
              <span>Certified Partner Ecosystem</span>
            </div>
            <h2 className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-extrabold tracking-tight text-[#001A3F] leading-tight mb-3">
              Partnerships Across Leading Technology Platforms
            </h2>
            <p className="text-sm md:text-base text-[#001A3F]/75 leading-relaxed">
              We leverage certified enterprise integrations, hyperscale cloud alliances, and vetted partner networks to ensure your architecture is future-proof.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  activeCategory === cat
                    ? "bg-[#001A3F] text-white shadow-md border border-[#001A3F]"
                    : "bg-[#F5F9FF] text-[#001A3F]/70 hover:bg-white hover:text-[#001A3F] border border-blue-100/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Card Dynamic 3D Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {filteredPartners.map((partner, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <TiltCard3D
                key={partner.name}
                maxTilt={10}
                scale={1.03}
                glare={true}
                className="h-[150px] rounded-[24px]"
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`h-full w-full bg-white rounded-[24px] border p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isHovered
                      ? "shadow-xl border-blue-200"
                      : "shadow-sm border-blue-100/80 hover:border-blue-200"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 16px 32px -8px ${partner.accent}25, 0 4px 12px -2px rgba(0,0,0,0.04)`
                      : "0 2px 8px rgba(0,26,63,0.03)",
                  }}
                >
                  {/* Top Bar: Category badge & verified indicator */}
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-[#001A3F]/50 uppercase tracking-wider">
                      {partner.category}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-extrabold flex items-center gap-1 transition-colors"
                      style={{
                        backgroundColor: `${partner.accent}15`,
                        color: partner.accent,
                      }}
                    >
                      <Check size={10} strokeWidth={3} /> Verified
                    </span>
                  </div>

                  {/* Center: Brand SVG Logo representation */}
                  <div className="flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                    <div
                      className={`transition-colors duration-200 ${
                        isHovered ? "text-[#001A3F]" : "text-[#001A3F]/75"
                      }`}
                    >
                      {partner.svgIcon}
                    </div>
                  </div>

                  {/* Bottom: Tier & Highlight Capability */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-[#001A3F]/80 truncate">
                      {isHovered ? partner.highlight : partner.tier}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: partner.accent }}
                    />
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Enterprise Integration Quality Guarantee Banner */}
        <div className="rounded-[24px] bg-[#F5F9FF] border border-blue-100/90 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#001A3F] text-[#00D2FF] flex items-center justify-center shrink-0 shadow-md">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#001A3F] tracking-tight">
                Enterprise Compliance & Direct Vendor Certification
              </h4>
              <p className="text-xs md:text-sm text-[#001A3F]/70 mt-0.5">
                All engineers assigned to partner projects hold verified professional certifications (AWS Pro, Azure Expert, Salesforce CTA).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center px-4 py-2 rounded-xl bg-white border border-blue-100 shadow-xs">
              <div className="text-lg font-black text-[#0072F5]">50+</div>
              <div className="text-[10px] font-semibold text-[#001A3F]/60 uppercase">Certified Architects</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-white border border-blue-100 shadow-xs">
              <div className="text-lg font-black text-[#00D2FF]">100%</div>
              <div className="text-[10px] font-semibold text-[#001A3F]/60 uppercase">Vendor Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
