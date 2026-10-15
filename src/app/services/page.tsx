import type { Metadata } from "next";
import ServicesClientPage from "./ServicesClientPage";

export const metadata: Metadata = {
  title: "Enterprise Software Development, AI & Digital Services | Venizor",
  description:
    "Venizor provides full-cycle custom software development, AI/ML autonomous systems, cloud architecture, UI/UX design, and digital growth services engineered for global scale.",
  keywords:
    "enterprise software development, custom software development company, AI solutions for business, digital transformation services, machine learning development, web application development, mobile app development, UI UX design services, cloud architecture, Venizor",
  alternates: {
    canonical: "https://venizor.com/services",
  },
  openGraph: {
    title: "Software Development, AI & Digital Services | Venizor",
    description:
      "Full-cycle engineering, AI systems, cloud microservices, and design solutions built for category leaders.",
    url: "https://venizor.com/services",
    type: "website",
    images: [
      {
        url: "/images/ai-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Software Development & AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Development & AI Solutions | Venizor",
    description: "Production-grade custom software, AI systems, and cloud architecture engineered for scale.",
    images: ["/images/ai-delivery.jpg"],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Venizor",
      url: "https://venizor.com",
      logo: "https://venizor.com/images/venizor-logo-horizontal.png",
    },
    serviceType: "Enterprise Software Development & AI Solutions",
    description:
      "Full-cycle engineering for web, mobile, AI systems, and enterprise cloud microservices.",
    areaServed: ["Global", "US", "UK", "EU", "IN"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Venizor Capabilities",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Machine Learning Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Product Design & Design Systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO & Digital Growth Strategy",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClientPage />
    </>
  );
}
