"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Sparkles, BookOpen, User, Mail, CheckCircle2 } from "lucide-react";
import SectionReveal3D from "./SectionReveal3D";
import TiltCard3D from "./TiltCard3D";

export interface ArticleItem {
  id: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  author: string;
  authorRole: string;
  tags: string[];
  content: string[];
}

export const ARTICLES: ArticleItem[] = [
  {
    id: "tech-trends-2026",
    image: "/images/tech-trends.jpg",
    date: "December 08, 2024",
    readTime: "6 min read",
    title: "Top Tech Trends Shaping Software Delivery in 2026",
    summary:
      "Autonomous code review agents, edge compute execution, and serverless vector memory networks redefining enterprise web engineering.",
    author: "Mykhailo Koval",
    authorRole: "Principal Cloud Architect at Venizor",
    tags: ["AI & Cloud", "Next.js", "Edge Compute"],
    content: [
      "As software systems scale in complexity, the developer toolchain is undergoing a historic paradigm shift. In 2026, artificial intelligence is no longer merely a novelty copilot—it is an integral tier of automated continuous integration and autonomous observability.",
      "Furthermore, the convergence of edge computing runtimes and serverless persistence allows enterprise applications to deliver instant sub-50ms roundtrip interactions globally without heavy multi-region infrastructure overhead.",
      "Adopting these emerging primitives enables modern product teams to innovate with unprecedented agility while preserving zero-trust security postures.",
    ],
  },
  {
    id: "remote-team",
    image: "/images/remote-team.jpg",
    date: "December 20, 2024",
    readTime: "5 min read",
    title: "How To Build A High-Performing Remote Development Team",
    summary:
      "Explore the operational rhythms, asynchronous communication habits, and engineering culture required to keep distributed squads aligned and shipping high quality code.",
    author: "Taras Shevchenko",
    authorRole: "VP of Engineering at Venizor",
    tags: ["Remote Work", "Team Leadership", "Agile Culture"],
    content: [
      "In the modern technology landscape, geography is no longer a limiting constraint on engineering talent. However, high-performing distributed engineering teams don't materialize by accident—they are intentionally engineered through rigorous operational rhythms, transparent documentation, and high-trust leadership.",
      "At Venizor, we have scaled distributed squads across Ukraine, the UK, and North America. Over a decade of execution, we've identified three fundamental tenets that separate world-class remote teams from fragmented ones: default asynchronous communication, automated continuous verification pipelines, and outcome-based milestone evaluation.",
      "By replacing lengthy alignment meetings with structured architectural decision records (ADRs) and concise asynchronous pull request walkthroughs, teams unlock deep focused work blocks that drive velocity and engineering satisfaction.",
    ],
  },
  {
    id: "concept-launch",
    image: "/images/ai-delivery.jpg",
    date: "December 18, 2024",
    readTime: "7 min read",
    title: "From Concept To Launch: A Step-By-Step Guide to Product Delivery",
    summary:
      "A systematic roadmap through customer discovery, rapid wireframing, architecture validation, and robust zero-downtime deployment pipelines.",
    author: "Elena Rostova",
    authorRole: "Head of Product Design at Venizor",
    tags: ["Product Strategy", "Architecture", "CI/CD"],
    content: [
      "Transforming an ambitious digital product concept into a market-ready production application demands discipline, architectural foresight, and customer-centric design iteration.",
      "Our end-to-end delivery framework begins with Phase 0 Discovery: pressure-testing user journeys, de-risking key technical hypotheses, and establishing design tokens that scale gracefully.",
      "Next, sprint-based iterative build cycles couple clean TypeScript frontends with resilient cloud-native microservices, validated continuously against automated load tests and security scans before rollout.",
    ],
  },
];

interface ServicesInsightsProps {
  onSelectArticle: (article: ArticleItem) => void;
  onViewAll: () => void;
}

export default function ServicesInsights({
  onSelectArticle,
  onViewAll,
}: ServicesInsightsProps) {
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

  const featuredArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <SectionReveal3D
      id="insights-section"
      className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0072F5] mb-3">
              <Sparkles size={13} className="text-[#00D2FF]" />
              <span>Thought Leadership & Architecture</span>
            </div>
            <h2 className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-extrabold tracking-tight text-[#001A3F] leading-tight">
              Engineering Insights & Blueprints
            </h2>
            <p className="text-sm md:text-base text-[#001A3F]/70 mt-2 max-w-2xl">
              Actionable architectural breakdowns, distributed system patterns, and team building frameworks authored by our senior leaders.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-[#001A3F] bg-white border border-slate-200 shadow-sm transition-all hover:bg-slate-100 hover:border-blue-300 hover:text-[#0072F5] hover:-translate-y-0.5 active:scale-95 cursor-pointer self-start md:self-auto"
          >
            Browse All Articles
          </button>
        </div>

        {/* 3D Bento Layout: 1 Hero Featured Article (7 cols) + 2 Secondary Articles & Digest (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Article (7 Cols) */}
          <div className="lg:col-span-7">
            <TiltCard3D
              maxTilt={5}
              scale={1.01}
              glare={true}
              onClick={() => onSelectArticle(featuredArticle)}
              className="h-full rounded-[30px] bg-white border border-blue-100 shadow-xl shadow-blue-950/5 p-8 md:p-10 flex flex-col justify-between cursor-pointer group hover:shadow-2xl hover:shadow-[#00D2FF]/20 transition-all"
            >
              <div>
                <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden mb-7 border border-blue-100/80 depth-layer-1">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#001A3F]/85 backdrop-blur-md text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#001A3F]/50 font-medium mb-3">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#00D2FF]" /> {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#001A3F] tracking-tight mb-4 group-hover:text-[#0072F5] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm text-[#001A3F]/75 leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>
              </div>

              {/* Author & Read More trigger */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#001A3F] text-[#00D2FF] flex items-center justify-center font-bold text-sm">
                    {featuredArticle.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#001A3F]">
                      {featuredArticle.author}
                    </div>
                    <div className="text-[11px] text-[#001A3F]/50 font-medium">
                      {featuredArticle.authorRole}
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0072F5] group-hover:translate-x-1 transition-transform">
                  <span>Read Paper</span>
                  <ArrowRight size={13} className="text-[#00D2FF]" />
                </span>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: 2 Secondary Articles + Newsletter Subscription (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryArticles.map((article) => (
              <TiltCard3D
                key={article.id}
                maxTilt={6}
                scale={1.02}
                glare={true}
                onClick={() => onSelectArticle(article)}
                className="rounded-[26px] bg-white border border-blue-100 shadow-md shadow-blue-950/5 p-6 flex flex-col justify-between cursor-pointer group hover:shadow-xl hover:shadow-[#0072F5]/15 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#001A3F]/50 font-medium mb-2.5">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0072F5] border border-blue-100 uppercase">
                      {article.tags[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-[#00D2FF]" /> {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-base md:text-lg font-bold text-[#001A3F] tracking-tight mb-2 group-hover:text-[#0072F5] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[#001A3F]/70 leading-relaxed line-clamp-2 mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="text-[#001A3F]/60 font-medium">
                    By {article.author}
                  </span>
                  <span className="font-bold text-[#0072F5] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read article <ArrowRight size={12} className="text-[#00D2FF]" />
                  </span>
                </div>
              </TiltCard3D>
            ))}

            {/* Architectural Digest Newsletter Box */}
            <div className="rounded-[26px] bg-[#001A3F] text-white p-7 border border-blue-900/60 shadow-xl shadow-blue-950/20 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
                  <Mail size={14} />
                  <span>The Venizor Engineering Dispatch</span>
                </div>
                <h4 className="text-lg font-extrabold tracking-tight mb-2">
                  Architecture deep dives directly to your inbox.
                </h4>
                <p className="text-xs text-white/70 mb-4 leading-relaxed">
                  Join 15,000+ CTOs and senior architects receiving our monthly teardowns of real-world scaleups.
                </p>

                {isSubscribed ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
                    <CheckCircle2 size={16} />
                    <span>You are subscribed! Welcome to the engineering dispatch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="engineer@company.com"
                      className="flex-1 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#00D2FF]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#0072F5] hover:bg-[#00D2FF] hover:text-[#001A3F] text-white text-xs font-bold transition-all shrink-0 cursor-pointer active:scale-95"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal3D>
  );
}
