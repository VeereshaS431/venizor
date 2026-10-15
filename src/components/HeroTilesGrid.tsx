"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, Sparkles, Waves, MousePointer } from "lucide-react";

type AnimationMode = "wave" | "cursor" | "pulse";

interface TileData {
  id: number;
  row: number;
  col: number;
  currentZ: number;
  targetZ: number;
  currentRotX: number;
  currentRotY: number;
  isPressed: boolean;
}

const DEFAULT_COLS = 12;
const DEFAULT_ROWS = 7;

function generateInitialTiles(cols: number, rows: number): TileData[] {
  const result: TileData[] = [];
  let id = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result.push({
        id: id++,
        row: r,
        col: c,
        currentZ: 0,
        targetZ: 0,
        currentRotX: 0,
        currentRotY: 0,
        isPressed: false,
      });
    }
  }
  return result;
}

export default function HeroTilesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(DEFAULT_COLS);
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [tiles, setTiles] = useState<TileData[]>(() =>
    generateInitialTiles(DEFAULT_COLS, DEFAULT_ROWS)
  );
  const [mode, setMode] = useState<AnimationMode>("wave");
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePreset, setActivePreset] = useState<"subtle" | "vibrant">("vibrant");
  
  const mousePos = useRef({ x: -1000, y: -1000, isOver: false });
  const animFrameId = useRef<number | null>(null);
  const startTime = useRef<number>(0);
  const tilesRef = useRef<TileData[]>(generateInitialTiles(DEFAULT_COLS, DEFAULT_ROWS));
  const clickRipples = useRef<{ x: number; y: number; time: number; maxRadius: number }[]>([]);

  // Calculate grid size based on viewport
  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth || window.innerWidth;
      const height = containerRef.current.clientHeight || 750;

      const tileW = width < 768 ? 85 : 120;
      const tileH = width < 768 ? 65 : 95;
      const gap = width < 768 ? 10 : 16;

      const calculatedCols = Math.ceil(width / (tileW + gap)) + 2;
      const calculatedRows = Math.ceil(height / (tileH + gap)) + 1;

      setCols(calculatedCols);
      setRows(calculatedRows);

      const newTiles: TileData[] = [];
      let id = 0;
      for (let r = 0; r < calculatedRows; r++) {
        for (let c = 0; c < calculatedCols; c++) {
          newTiles.push({
            id: id++,
            row: r,
            col: c,
            currentZ: 0,
            targetZ: 0,
            currentRotX: 0,
            currentRotY: 0,
            isPressed: false,
          });
        }
      }
      setTiles(newTiles);
      tilesRef.current = newTiles;
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isOver: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePos.current = { x: -1000, y: -1000, isOver: false };
  }, []);

  // Handle tile click to create a shockwave ripple
  const handleTileClick = (e: React.MouseEvent<HTMLDivElement>, tile: TileData) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    clickRipples.current.push({
      x,
      y,
      time: Date.now(),
      maxRadius: 400,
    });

    // Mark current tile pressed
    tile.isPressed = true;
    setTimeout(() => {
      tile.isPressed = false;
    }, 250);
  };

  // Main animation loop
  useEffect(() => {
    if (startTime.current === 0) {
      startTime.current = Date.now();
    }
    let lastTime = performance.now();

    const loop = (time: number) => {
      animFrameId.current = requestAnimationFrame(loop);
      if (!isPlaying || !containerRef.current) return;

      const now = Date.now();
      const elapsed = (now - startTime.current) * 0.0018;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const containerW = containerRef.current.clientWidth;
      const containerH = containerRef.current.clientHeight;
      const tileWidth = containerW / cols;
      const tileHeight = containerH / rows;

      // Clean old ripples
      clickRipples.current = clickRipples.current.filter((r) => now - r.time < 1200);

      const tileElements = containerRef.current.querySelectorAll<HTMLDivElement>(".hero-tile-item");
      if (tileElements.length === 0) return;

      tilesRef.current.forEach((tile, index) => {
        const el = tileElements[index];
        if (!el) return;

        // Calculate tile center position
        const tileCenterX = (tile.col + 0.5) * tileWidth;
        const tileCenterY = (tile.row + 0.5) * tileHeight;

        let z = 0;
        let rotX = 0;
        let rotY = 0;

        // 1. Ambient Wave mode
        if (mode === "wave" || mode === "cursor") {
          const waveFreqX = 0.42;
          const waveFreqY = 0.38;
          const amplitude = activePreset === "vibrant" ? 14 : 7;
          
          // Organic undulating 2D wave equation
          const wave1 = Math.sin(tile.col * waveFreqX + elapsed * 1.6) * Math.cos(tile.row * waveFreqY + elapsed * 1.2);
          const wave2 = Math.sin((tile.col + tile.row) * 0.28 - elapsed * 1.8) * 0.5;
          z += (wave1 + wave2) * amplitude;

          rotX += Math.cos(tile.row * waveFreqY + elapsed * 1.4) * 3;
          rotY += Math.sin(tile.col * waveFreqX + elapsed * 1.4) * 3;
        } else if (mode === "pulse") {
          // Centered radial breathing pulse
          const centerC = cols / 2;
          const centerR = rows / 2;
          const distToCenter = Math.hypot(tile.col - centerC, tile.row - centerR);
          const pulseWave = Math.sin(distToCenter * 0.65 - elapsed * 2.5);
          z += pulseWave * 16;
          rotX += (tile.row - centerR) * 0.8 * pulseWave;
          rotY += (tile.col - centerC) * 0.8 * pulseWave;
        }

        // 2. Mouse Cursor Proximity Ripple
        if (mousePos.current.isOver) {
          const dx = mousePos.current.x - tileCenterX;
          const dy = mousePos.current.y - tileCenterY;
          const dist = Math.hypot(dx, dy);
          const interactionRadius = 260;

          if (dist < interactionRadius) {
            const factor = Math.cos((dist / interactionRadius) * (Math.PI / 2));
            const lift = (activePreset === "vibrant" ? 28 : 16) * Math.pow(factor, 1.5);
            z += lift;

            // Tilt towards/away cursor
            rotX += (-dy / interactionRadius) * 15 * factor;
            rotY += (dx / interactionRadius) * 15 * factor;
          }
        }

        // 3. Click Ripples
        clickRipples.current.forEach((ripple) => {
          const age = (now - ripple.time) * 0.001; // in seconds
          const waveRadius = age * 380; // expands outwards
          const dist = Math.hypot(ripple.x - tileCenterX, ripple.y - tileCenterY);
          const diff = Math.abs(dist - waveRadius);

          if (diff < 70) {
            const intensity = Math.max(0, 1 - age / 1.2) * Math.cos((diff / 70) * (Math.PI / 2));
            z += intensity * 32;
            rotX += Math.sin(age * 10) * 8 * intensity;
            rotY += Math.cos(age * 10) * 8 * intensity;
          }
        });

        // 4. Pressed State
        if (tile.isPressed) {
          z -= 18;
        }

        // Smooth interpolation (lerp)
        const lerpSpeed = 10;
        tile.currentZ += (z - tile.currentZ) * Math.min(1, dt * lerpSpeed);
        tile.currentRotX += (rotX - tile.currentRotX) * Math.min(1, dt * lerpSpeed);
        tile.currentRotY += (rotY - tile.currentRotY) * Math.min(1, dt * lerpSpeed);

        // Apply 3D transform directly to DOM
        const roundedZ = Math.round(tile.currentZ * 10) / 10;
        const roundedRotX = Math.round(tile.currentRotX * 10) / 10;
        const roundedRotY = Math.round(tile.currentRotY * 10) / 10;

        // Dynamic shadow based on elevation
        const shadowOffsetY = Math.max(4, 10 + roundedZ * 0.6);
        const shadowBlur = Math.max(8, 22 + roundedZ * 1.1);
        const shadowAlpha = Math.min(0.18, Math.max(0.04, 0.08 + roundedZ * 0.003));

        el.style.transform = `translate3d(0, 0, ${roundedZ}px) rotateX(${roundedRotX}deg) rotateY(${roundedRotY}deg)`;
        el.style.boxShadow = `0 ${shadowOffsetY}px ${shadowBlur}px -4px rgba(100, 116, 139, ${shadowAlpha}), inset 0 1px 2px rgba(255, 255, 255, 0.95)`;
      });
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isPlaying, mode, activePreset, cols, rows]);

  return (
    <div
      ref={containerRef}
      className="tiles-grid-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: "14px",
        padding: "16px",
        background: "radial-gradient(ellipse at 50% 30%, #F5F9FF 0%, #E8F0FC 100%)",
      }}
    >
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="hero-tile-item tile-element"
          onClick={(e) => handleTileClick(e, tile)}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            borderRadius: "22px",
            background: "linear-gradient(145deg, #FFFFFF 0%, #F0F6FF 100%)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
          }}
        />
      ))}

      {/* Floating Interactive Animation Control Bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-lg shadow-blue-900/5 text-xs font-medium text-slate-800">
        <span className="flex items-center gap-1.5 text-[#0052FF] font-semibold">
          <Sparkles size={13} className="text-[#00D2FF]" /> 3D Tile Animation:
        </span>

        {/* Mode selector buttons */}
        <button
          onClick={() => setMode("wave")}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
            mode === "wave"
              ? "bg-[#030B1C] text-white shadow-sm"
              : "bg-white/80 text-slate-700 hover:bg-white"
          }`}
        >
          <Waves size={12} /> Wave Ripple
        </button>

        <button
          onClick={() => setMode("cursor")}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
            mode === "cursor"
              ? "bg-[#030B1C] text-white shadow-sm"
              : "bg-white/80 text-slate-700 hover:bg-white"
          }`}
        >
          <MousePointer size={12} /> Cursor Proximity
        </button>

        <button
          onClick={() => setMode("pulse")}
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
            mode === "pulse"
              ? "bg-[#030B1C] text-white shadow-sm"
              : "bg-white/80 text-slate-700 hover:bg-white"
          }`}
        >
          Radial Pulse
        </button>

        {/* Preset intensity */}
        <button
          onClick={() => setActivePreset(activePreset === "vibrant" ? "subtle" : "vibrant")}
          className="px-2 py-1 rounded-full text-[11px] bg-blue-50/80 text-slate-600 hover:bg-blue-100/80 transition-colors cursor-pointer"
          title="Toggle wave depth"
        >
          {activePreset === "vibrant" ? "High Depth" : "Soft Depth"}
        </button>

        {/* Play / Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${
            isPlaying ? "bg-[#0052FF] hover:bg-[#0040CC]" : "bg-slate-400 hover:bg-slate-500"
          }`}
          title={isPlaying ? "Pause animation" : "Resume animation"}
        >
          {isPlaying ? <Pause size={11} /> : <Play size={11} />}
        </button>
      </div>
    </div>
  );
}
