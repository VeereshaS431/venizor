"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import ServicesMatrix from "@/components/ServicesMatrix";
import CaseStudies, { CaseStudyItem, CASE_STUDIES } from "@/components/CaseStudies";
import Partnerships from "@/components/Partnerships";
import ServicesInsights, { ArticleItem } from "@/components/ServicesInsights";
import FooterCta from "@/components/FooterCta";
import ContactModal from "@/components/ContactModal";
import MenuDrawer from "@/components/MenuDrawer";
import CaseStudyModal from "@/components/CaseStudyModal";
import ArticleModal from "@/components/ArticleModal";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen relative bg-[#F5F9FF] selection:bg-[#00D2FF] selection:text-[#001A3F]">
      {/* Top Floating Navigation */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Hero Section with 3D Animated Neumorphic Tiles */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* About Venizor & Numbers - 3D Bento-Grid Showcase */}
      <AboutStats onOpenContact={() => setIsContactOpen(true)} />

      {/* Full-Cycle Core Engineering Capabilities Matrix */}
      <ServicesMatrix onOpenContact={() => setIsContactOpen(true)} />

      {/* High-Impact 3D Bento-Grid Case Studies Showcase */}
      <CaseStudies
        onSelectCase={(study) => setSelectedCase(study)}
        onOpenAllCases={() => setSelectedCase(CASE_STUDIES[0])}
      />

      {/* Categorized Tech Ecosystem & Certified Partnerships */}
      <Partnerships />

      {/* Engineering Insights & Architecture Blueprints */}
      <ServicesInsights
        onSelectArticle={(article) => setSelectedArticle(article)}
        onViewAll={() => setIsContactOpen(true)}
      />

      {/* Footer & Deep Blue Call to Action */}
      <FooterCta
        onOpenQuote={() => setIsContactOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals and Drawers */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigateSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenContact={() => {
          setSelectedCase(null);
          setIsContactOpen(true);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenContact={() => {
          setSelectedArticle(null);
          setIsContactOpen(true);
        }}
      />
    </main>
  );
}
