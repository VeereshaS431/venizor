"use client";

import React, { useRef } from "react";

interface SectionReveal3DProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionReveal3D({
  children,
  id,
  className = "",
  style = {},
}: SectionReveal3DProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-700 ease-out opacity-100 ${className}`}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        transform: "perspective(1200px) rotateX(0deg) translateY(0px)",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
