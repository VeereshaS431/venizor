import type { Metadata } from "next";
import InsightsClientPage from "./InsightsClientPage";

export const metadata: Metadata = {
  title: "Engineering Insights & Architecture Blueprints | Venizor",
  description:
    "Actionable architectural breakdowns, distributed system patterns, AI agent engineering, and engineering team scaling frameworks authored by Venizor's senior leaders.",
  keywords:
    "software engineering insights, distributed systems architecture, enterprise AI engineering, Next.js architecture, remote engineering team leadership, Venizor insights",
  alternates: {
    canonical: "https://venizor.com/insights",
  },
  openGraph: {
    title: "Engineering Insights & Architecture Blueprints | Venizor",
    description:
      "Actionable engineering deep dives on distributed systems, AI architectures, and modern product engineering.",
    url: "https://venizor.com/insights",
    type: "website",
    images: [
      {
        url: "/images/tech-trends.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Engineering Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights & Architecture Blueprints | Venizor",
    description: "Deep dives on distributed systems, AI swarms, and team scaling.",
    images: ["/images/tech-trends.jpg"],
  },
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Venizor Engineering Insights",
    url: "https://venizor.com/insights",
    description: "Thought leadership and technical blueprints from Venizor's engineering leadership.",
    publisher: {
      "@type": "Organization",
      name: "Venizor",
      logo: "https://venizor.com/images/venizor-logo-horizontal.png",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsClientPage />
    </>
  );
}
