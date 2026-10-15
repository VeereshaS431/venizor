import type { Metadata } from "next";
import CaseStudiesClientPage from "./CaseStudiesClientPage";

export const metadata: Metadata = {
  title: "Case Studies & Production Impact Portfolio | Venizor",
  description:
    "Explore how Venizor engineers market-defining software and AI systems. Real client case studies, verified production metrics, and architecture deep dives across global enterprises.",
  keywords:
    "software development case studies, live client websites, ssfce.in, travelbuddytrips.co.uk, lctechacademy.com, enterprise software portfolio, manufacturing ERP, travel booking engine, AI edtech platform",
  alternates: {
    canonical: "https://venizor.com/case-studies",
  },
  openGraph: {
    title: "Case Studies & Production Impact Portfolio | Venizor",
    description:
      "Explore real-world software, AI, and cloud architectures built for category leaders with verified business ROI.",
    url: "https://venizor.com/case-studies",
    type: "website",
    images: [
      {
        url: "/images/ssfce-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Software Case Studies Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Production Impact | Venizor",
    description: "Verified results: +180% B2B quote surge for SSFCE, +240% booking conversion for Travel Buddy UK, 4.8x admissions growth for LC Tech Academy.",
    images: ["/images/ssfce-mockup.jpg"],
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Venizor Software Engineering Case Studies",
    description: "Live client websites and production software engineering case studies delivered by Venizor.",
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "SS Fiber Composites & Engineering (SSFCE)",
        creator: "Venizor",
        url: "https://www.ssfce.in/",
        description: "Next-gen industrial composites catalog and automated B2B RFQ engine with +180% inbound quote surge.",
      },
      {
        "@type": "CreativeWork",
        name: "Travel Buddy UK",
        creator: "Venizor",
        url: "https://www.travelbuddytrips.co.uk/",
        description: "High-converting group adventure tour platform and seat reservation engine with +240% mobile conversion lift.",
      },
      {
        "@type": "CreativeWork",
        name: "LC Tech Academy",
        creator: "Venizor",
        url: "https://www.lctechacademy.com/",
        description: "Executive tech education and AI training portal with automated counseling funnels and 4.8x enrollment growth.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudiesClientPage />
    </>
  );
}
