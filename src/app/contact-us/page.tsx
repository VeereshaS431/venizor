import type { Metadata } from "next";
import ContactUsClientPage from "./ContactUsClientPage";

export const metadata: Metadata = {
  title: "Contact Us | Free Project Consultation & Proposal | Venizor",
  description:
    "Connect directly with Venizor's technical leadership. Request a custom software scope, AI architecture review, or project estimate. We respond within 4 working hours.",
  keywords:
    "contact Venizor, software development quote, hire dedicated software engineers, AI project estimate, custom software consultation, software development company contact",
  alternates: {
    canonical: "https://venizor.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Free Project Consultation & Proposal | Venizor",
    description:
      "Discuss your software requirements with our senior engineers. Guaranteed response within 4 working hours.",
    url: "https://venizor.com/contact-us",
    type: "website",
    images: [
      {
        url: "/images/ai-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Venizor Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Venizor",
    description: "Get in touch with Venizor for custom software, AI systems, and cloud architecture.",
    images: ["/images/ai-delivery.jpg"],
  },
};

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Venizor",
    url: "https://venizor.com/contact-us",
    description: "Contact Venizor's engineering headquarters in Hyderabad, Telangana, India for software development and AI consultations.",
    mainEntity: {
      "@type": "Organization",
      name: "Venizor",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "connect@venizor.com",
          telephone: "+91 738 237 3824",
          areaServed: ["IN", "US", "GB", "CA", "AE"],
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "1009, 10th Floor, Vasavi Sky City, Gachibowli",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500032",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUsClientPage />
    </>
  );
}
