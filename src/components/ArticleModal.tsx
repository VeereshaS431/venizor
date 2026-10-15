"use client";

import React from "react";
import Image from "next/image";
import { X, Clock, Calendar, ArrowRight } from "lucide-react";
import { ArticleItem } from "./ServicesInsights";

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ArticleModal({
  article,
  onClose,
  onOpenContact,
}: ArticleModalProps) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content max-w-2xl p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-950 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close article"
        >
          <X size={18} />
        </button>

        {/* Metadata */}
        <div className="mb-6">
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={13} /> {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {article.readTime}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-[#001A3F] mb-4">
            {article.title}
          </h2>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0072F5] flex items-center justify-center font-bold text-xs border border-blue-100">
              {article.author[0]}
            </div>
            <div>
              <div className="text-xs font-bold text-[#001A3F]">
                {article.author}
              </div>
              <div className="text-[11px] text-[#001A3F]/60">
                {article.authorRole}
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-6 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="720px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#001A3F]/80 mb-8">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-slate-100">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-[#001A3F] border border-blue-100/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Modal CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          <span className="text-xs text-[#001A3F]/60">
            Want dedicated engineering squad advice?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#001A3F] hover:bg-[#0072F5] transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>Talk to Venizor Engineers</span>
            <ArrowRight size={14} className="text-[#00D2FF]" />
          </button>
        </div>
      </div>
    </div>
  );
}
