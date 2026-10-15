"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  id?: string;
}

export default function TiltCard3D({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  style = {},
  onClick,
  id,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width - 0.5) * 2; // -1 to 1
      const normY = (y / rect.height - 0.5) * 2; // -1 to 1

      const rotX = -normY * maxTilt;
      const rotY = normX * maxTilt;

      setTransform(
        `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        setGlareStyle({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: 0.25,
        });
      }
    },
    [maxTilt, scale, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    if (glare) {
      setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [glare]);

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-300 ease-out preserve-3d opacity-100 ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transitionProperty: "transform, opacity, box-shadow",
        transitionDuration: "0.4s",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}

      {/* Dynamic 3D Glare / Specular highlight layer */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)`,
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
}
