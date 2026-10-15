import type { Metadata } from "next";
import AboutUsClientPage from "./AboutUsClientPage";

export const metadata: Metadata = {
  title: "About Us | Inside Venizor | Global Engineering Studio",
  description:
    "Discover Venizor's engineering culture, 500+ senior developers, corporate headquarters in Hyderabad, Telangana, India, and our rigorous production-grade engineering standards.",
  keywords:
    "about Venizor, Indian software engineering company, software company in Hyderabad, senior software developers, enterprise IT partner, full-stack software engineers, Hyderabad, Telangana, India",
  alternates: {
    canonical: "https://venizor.com/about-us",
  },
  openGraph: {
    title: "About Us | Inside Venizor | Global Engineering Studio",
    description:
      "Where craft meets continuous delivery. Over a decade of building mission-critical software for global enterprises.",
    url: "https://venizor.com/about-us",
    type: "website",
    images: [
      {
        url: "/images/team-hands.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Global Engineering Squad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Venizor",
    description: "500+ senior engineers delivering custom software and AI systems across 35+ industries.",
    images: ["/images/team-hands.jpg"],
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Venizor",
    description: "Venizor is an elite digital product and software engineering studio.",
    mainEntity: {
      "@type": "Organization",
      name: "Venizor",
      url: "https://venizor.com",
      foundingDate: "2014",
      numberOfEmployees: "500+",
      areaServed: ["Global", "US", "UK", "EU", "IN"],
      knowsAbout: [
        "Enterprise Software Development",
        "Artificial Intelligence & Machine Learning",
        "Cloud Infrastructure",
        "UI/UX Design Systems",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUsClientPage />
    </>
  );
}
