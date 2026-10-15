import type { Metadata } from "next";
import IndustriesClientPage from "./IndustriesClientPage";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise Sector Solutions | Venizor",
  description:
    "Venizor delivers specialized software, AI systems, and cloud architectures for Healthcare, FinTech, Education, Real Estate, Retail, Supply Chain Logistics, and IT.",
  keywords:
    "industries Venizor serves, healthcare software development, fintech software development, education technology solutions, real estate software, retail technology solutions, logistics software development, enterprise software",
  alternates: {
    canonical: "https://venizor.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | Enterprise Sector Solutions | Venizor",
    description:
      "Deep domain expertise, rigorous regulatory compliance, and battle-tested architectures across 8 core verticals.",
    url: "https://venizor.com/industries",
    type: "website",
    images: [
      {
        url: "/images/ai-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Enterprise Industries We Serve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Venizor",
    description: "Specialized software and AI solutions tailored for category leaders across 8 key sectors.",
    images: ["/images/ai-delivery.jpg"],
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Served by Venizor",
    description: "Industry-specific enterprise software, AI systems, and cloud solutions.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Healthcare & HealthTech",
        description: "HIPAA-compliant telemedicine, EHR integrations, and patient portals.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FinTech & Banking",
        description: "PCI-DSS compliant payment gateways, treasury engines, and open banking.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Education & EdTech",
        description: "FERPA-compliant learning management systems and real-time proctoring.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Real Estate & PropTech",
        description: "MLS/IDX property platforms, digital leasing, and 3D virtual tours.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Retail & E-Commerce",
        description: "Headless omnichannel commerce, inventory orchestration, and AI search.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Supply Chain & Logistics",
        description: "Fleet route optimization, live IoT telemetry, and digital dispatch.",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Enterprise Information Technology",
        description: "Multi-cloud Kubernetes migration, infrastructure as code, and zero-trust security.",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Food & Hospitality",
        description: "White-label ordering portals, kitchen display systems, and guest loyalty.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesClientPage />
    </>
  );
}
