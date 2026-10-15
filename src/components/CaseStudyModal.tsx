"use client";

import React from "react";
import Image from "next/image";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import { CaseStudyItem } from "./CaseStudies";

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CaseStudyModal({
  caseStudy,
  onClose,
  onOpenContact,
}: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-3xl p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-950 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-7">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {caseStudy.client}
              </span>
              <span className="text-xs text-slate-400">
                Case Study • {caseStudy.year}
              </span>
            </div>
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0072F5] bg-blue-50 border border-blue-200 hover:bg-[#0072F5] hover:text-white transition-all shadow-xs"
              >
                <span>Visit Live Site</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#001A3F] mb-3 leading-snug">
            {caseStudy.title}
          </h2>

          <p className="text-sm text-[#001A3F]/70 leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Hero Mockup Image */}
        <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            fill
            sizes="780px"
            className="object-cover"
          />
        </div>

        {/* Highlights / Metrics Grid */}
        <div className="grid grid-cols-2 gap-5 bg-[#F5F9FF] rounded-2xl p-6 mb-8 border border-blue-100">
          {caseStudy.metrics.map((m, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-extrabold text-[#001A3F] tracking-tight leading-none mb-1">
                {m.value}
              </div>
              <div className="text-xs font-medium text-[#001A3F]/60">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative: Challenge, Solution, Impact */}
        <div className="flex flex-col gap-6 mb-8 text-sm leading-relaxed">
          <div>
            <h4 className="text-sm font-bold text-[#001A3F] mb-1.5">
              The Challenge
            </h4>
            <p className="text-[#001A3F]/75">{caseStudy.challenge}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#001A3F] mb-1.5">
              The Solution & Architecture
            </h4>
            <p className="text-[#001A3F]/75">{caseStudy.solution}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#001A3F] mb-1.5">
              Business Impact
            </h4>
            <p className="text-[#001A3F]/75">{caseStudy.impact}</p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#001A3F]/50 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#001A3F] border border-blue-100/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <div className="text-xs text-[#001A3F]/60">
            Looking for similar engineering results for your business?
          </div>
          <div className="flex items-center gap-3">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold text-[#001A3F] bg-slate-100 hover:bg-slate-200 transition-all inline-flex items-center gap-1.5"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all flex items-center gap-2 active:scale-95 cursor-pointer shadow-md"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={14} className="text-[#00D2FF]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
