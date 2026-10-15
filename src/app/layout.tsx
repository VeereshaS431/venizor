import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venizor — Innovate with Confidence | Enterprise Software & AI Studio",
  description:
    "Venizor builds enterprise platforms, AI/ML autonomous systems, cloud architectures, and scalable software that power operations at scale. 10+ years, 35+ industries. Get a free consultation.",
  keywords:
    "enterprise software development, custom software development company, AI solutions for business, digital transformation services, machine learning development, enterprise platforms, scalable software solutions, IT consulting services, custom app development, Venizor",
  authors: [{ name: "Venizor" }],
  creator: "Venizor",
  metadataBase: new URL("https://venizor.com"),
  alternates: {
    canonical: "https://venizor.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Venizor | Enterprise Software Development, AI & Digital Transformation",
    description:
      "Venizor builds enterprise platforms, AI/ML systems & scalable software that power operations and automation at scale. 10+ years | 35+ industries.",
    url: "https://venizor.com",
    siteName: "Venizor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/venizor-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Venizor — Enterprise Software Development & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venizor | Enterprise Software Development, AI & Digital Transformation",
    description:
      "Venizor builds enterprise platforms, AI/ML systems & scalable software that power operations and automation at scale.",
    images: ["/images/venizor-logo-horizontal.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venizor",
    url: "https://venizor.com",
    logo: "https://venizor.com/images/venizor-logo-horizontal.png",
    description:
      "Venizor builds enterprise platforms, AI/ML systems & scalable software solutions that power operations and automation at scale.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1009, 10th Floor, Vasavi Sky City, Gachibowli",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
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
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/venizor-logo-square.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
