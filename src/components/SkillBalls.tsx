"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const SKILLS = [
  { name: "React", color: "#61DAFB", text: "#0a2a3a" },
  { name: "Next.js", color: "#e2e8f0", text: "#1a202c" },
  { name: "TypeScript", color: "#3178C6", text: "#ffffff" },
  { name: "Node.js", color: "#68A063", text: "#ffffff" },
  { name: "Tailwind", color: "#38BDF8", text: "#0c2a3d" },
  { name: "Python", color: "#FFD43B", text: "#2b2b00" },
  { name: "React Native", color: "#20232a", text: "#61DAFB" },
  { name: "Flutter", color: "#54C5F8", text: "#013654" },
  { name: "Firebase", color: "#FFCA28", text: "#3d2c00" },
  { name: "MongoDB", color: "#47A248", text: "#ffffff" },
  { name: "MySQL", color: "#00758F", text: "#ffffff" },
  { name: "Django", color: "#092E20", text: "#44B78B" },
  { name: "Flask", color: "#e5e7eb", text: "#1a202c" },
  { name: "OpenAI", color: "#10A37F", text: "#ffffff" },
  { name: "Gemini", color: "#4285F4", text: "#ffffff" },
  { name: "Git", color: "#F05032", text: "#ffffff" },
  { name: "Docker", color: "#2496ED", text: "#ffffff" },
  { name: "AWS", color: "#FF9900", text: "#2b1800" },
];

// Deterministic pseudo-random to avoid hydration mismatch
function seededRand(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  skill: (typeof SKILLS)[0];
  rotX: number;
  rotY: number;
  rotVx: number;
  rotVy: number;
}

export default function SkillBalls() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  // Build balls once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { width: w, height: h } = container.getBoundingClientRect();
    sizeRef.current = { w, h };

    ballsRef.current = SKILLS.map((skill, i) => {
      const r = 44 + seededRand(i * 3 + 1) * 22; // 44–66px radius
      return {
        id: i,
        x: r + seededRand(i * 7 + 2) * (w - r * 2),
        y: r + seededRand(i * 13 + 3) * (h - r * 2),
        vx: (seededRand(i * 5 + 4) - 0.5) * 4,
        vy: (seededRand(i * 11 + 5) - 0.5) * 4,
        r,
        skill,
        rotX: seededRand(i * 17) * 30 - 15,
        rotY: seededRand(i * 19) * 30 - 15,
        rotVx: (seededRand(i * 23) - 0.5) * 0.8,
        rotVy: (seededRand(i * 29) - 0.5) * 0.8,
      };
    });
  }, []);

  // Resize handler
  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;
      const { width: w, height: h } = container.getBoundingClientRect();
      sizeRef.current = { w, h };
      canvas.width = w;
      canvas.height = h;
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const REPEL_RADIUS = 130;
    const REPEL_FORCE = 5;

    const render = () => {
      const { w, h } = sizeRef.current;
      const balls = ballsRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Physics update
      for (const b of balls) {
        // Mouse repulsion
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }

        // Ball-ball collision
        for (const other of balls) {
          if (other.id <= b.id) continue;
          const ox = b.x - other.x;
          const oy = b.y - other.y;
          const od = Math.sqrt(ox * ox + oy * oy);
          const minD = b.r + other.r;
          if (od < minD && od > 0) {
            const overlap = (minD - od) / 2;
            const nx = ox / od;
            const ny = oy / od;
            b.x += nx * overlap;
            b.y += ny * overlap;
            other.x -= nx * overlap;
            other.y -= ny * overlap;
            // Elastic bounce
            const relVx = b.vx - other.vx;
            const relVy = b.vy - other.vy;
            const dot = relVx * nx + relVy * ny;
            if (dot < 0) {
              b.vx -= dot * nx * 0.6;
              b.vy -= dot * ny * 0.6;
              other.vx += dot * nx * 0.6;
              other.vy += dot * ny * 0.6;
            }
          }
        }

        // Damping
        b.vx *= 0.99;
        b.vy *= 0.99;

        // Min speed (gentle drift)
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed < 1.0) {
          b.vx += (Math.random() - 0.5) * 0.4;
          b.vy += (Math.random() - 0.5) * 0.4;
        }

        // Max speed cap
        const maxSpeed = 7;
        if (speed > maxSpeed) { b.vx = (b.vx / speed) * maxSpeed; b.vy = (b.vy / speed) * maxSpeed; }

        b.x += b.vx;
        b.y += b.vy;

        // Wall bounce
        if (b.x - b.r < 0) { b.x = b.r; b.vx = Math.abs(b.vx); }
        if (b.x + b.r > w) { b.x = w - b.r; b.vx = -Math.abs(b.vx); }
        if (b.y - b.r < 0) { b.y = b.r; b.vy = Math.abs(b.vy); }
        if (b.y + b.r > h) { b.y = h - b.r; b.vy = -Math.abs(b.vy); }

        // Rotate based on velocity
        b.rotY += b.vx * 0.5;
        b.rotX -= b.vy * 0.5;
      }

      // Draw balls
      for (const b of balls) {
        const { x, y, r, skill } = b;

        // 3D sphere with gradient
        const grd = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.05, x, y, r);
        grd.addColorStop(0, lighten(skill.color, 0.55));
        grd.addColorStop(0.5, skill.color);
        grd.addColorStop(1, darken(skill.color, 0.4));

        // Shadow
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.45)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 10;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();

        // Specular highlight
        const spec = ctx.createRadialGradient(x - r * 0.38, y - r * 0.42, r * 0.01, x - r * 0.25, y - r * 0.28, r * 0.55);
        spec.addColorStop(0, "rgba(255,255,255,0.75)");
        spec.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = spec;
        ctx.fill();

        // Border ring
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.18)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Text
        ctx.save();
        const fontSize = Math.max(10, Math.min(r * 0.34, 15));
        ctx.font = `700 ${fontSize}px Inter, sans-serif`;
        ctx.fillStyle = skill.text;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 4;
        ctx.fillText(skill.name, x, y);
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isLight]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "520px" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}

// Color helpers
function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function lighten(hex: string, amount: number): string {
  if (!hex.startsWith("#")) return hex;
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v: number) => Math.min(255, Math.round(v + (255 - v) * amount));
  return `rgb(${clamp(r)},${clamp(g)},${clamp(b)})`;
}

function darken(hex: string, amount: number): string {
  if (!hex.startsWith("#")) return hex;
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v: number) => Math.max(0, Math.round(v * (1 - amount)));
  return `rgb(${clamp(r)},${clamp(g)},${clamp(b)})`;
}
