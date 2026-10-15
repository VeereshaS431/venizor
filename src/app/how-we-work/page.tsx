import type { Metadata } from "next";
import HowWeWorkClientPage from "./HowWeWorkClientPage";

export const metadata: Metadata = {
  title: "How We Work | Proven Engineering Delivery Framework | Venizor",
  description:
    "Explore Venizor's battle-tested 5-phase software delivery framework: Phase 0 Discovery, Architecture & Threat Modeling, Agile Sprint Execution, Automated CI/CD & Testing, and Zero-Downtime Hyperscale Rollout.",
  keywords:
    "how we work, software development methodology, agile engineering process, software delivery framework, DevOps CI/CD pipeline, enterprise software lifecycle",
  alternates: {
    canonical: "https://venizor.com/how-we-work",
  },
  openGraph: {
    title: "How We Work | Proven Engineering Delivery Framework | Venizor",
    description: "From thoughts to implementation. Our structured process guarantees zero technical debt.",
    url: "https://venizor.com/how-we-work",
    type: "website",
    images: [
      {
        url: "/images/ai-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "Venizor Delivery Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Venizor",
    description: "Phase 0 Discovery to Hyperscale Production Rollout.",
    images: ["/images/ai-delivery.jpg"],
  },
};

export default function HowWeWorkPage() {
  return <HowWeWorkClientPage />;
}
