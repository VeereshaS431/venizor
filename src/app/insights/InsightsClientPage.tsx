"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Sparkles, Mail, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import ArticleModal from "@/components/ArticleModal";
import TiltCard3D from "@/components/TiltCard3D";
import { ARTICLES, ArticleItem } from "@/components/ServicesInsights";

export default function InsightsClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#001A3F] via-[#002255] to-[#001A3F] text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#00D2FF]" />
            <span className="text-white font-medium">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-4">
              <Sparkles size={13} />
              <span>Thought Leadership & Architecture</span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.1] mb-6">
              Engineering Insights &{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#50E6FF] to-[#0072F5] bg-clip-text text-transparent">
                Architecture Blueprints
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
              Practical teardowns, distributed systems patterns, and team scaling frameworks written directly by our senior practitioners and architects.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ARTICLES.map((article) => (
            <TiltCard3D
              key={article.id}
              maxTilt={6}
              scale={1.02}
              glare={true}
              onClick={() => setSelectedArticle(article)}
              className="rounded-[30px] bg-white border border-blue-100 p-7 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:border-blue-200 transition-all shadow-sm"
            >
              <div>
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-blue-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#001A3F]/85 backdrop-blur-md text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#001A3F]/50 font-medium mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#00D2FF]" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#001A3F] tracking-tight mb-3 group-hover:text-[#0072F5] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#001A3F]/75 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#001A3F]">{article.author}</div>
                  <div className="text-[11px] text-[#001A3F]/50">{article.authorRole}</div>
                </div>

                <span className="text-xs font-bold text-[#0072F5] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read paper <ArrowRight size={13} className="text-[#00D2FF]" />
                </span>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Newsletter Box */}
        <div className="rounded-[32px] bg-[#001A3F] text-white p-8 md:p-12 border border-blue-900/60 shadow-xl shadow-blue-950/20 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
            <Mail size={15} />
            <span>The Venizor Engineering Dispatch</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
            Monthly architecture teardowns delivered to your inbox.
          </h3>
          <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-xl">
            Join 15,000+ engineering leaders receiving our practical analyses of high-concurrency systems, vector search pipelines, and cloud migrations.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>You are subscribed to the Venizor Engineering Dispatch!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="architect@enterprise.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00D2FF]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Join Dispatch
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer & CTA */}
      <FooterCta
        onOpenQuote={() => setIsContactOpen(true)}
        onNavigateSection={() => {}}
      />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenContact={() => {
          setSelectedArticle(null);
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={() => {}}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}
