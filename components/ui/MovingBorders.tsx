"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx={0.3} ry={0.3}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#f0a548_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-white/10 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

const STEPS = 240;

// Points along a rounded rectangle (corner radii rx*w, ry*h), resampled to equal arc length so
// the glow travels at constant speed. Computed once per size, never per frame.
function buildPath(w: number, h: number, rxf: number, ryf: number) {
  const rx = Math.min(rxf * w, w / 2);
  const ry = Math.min(ryf * h, h / 2);
  const raw: [number, number][] = [];
  const arc = (cx: number, cy: number, from: number) => {
    for (let i = 0; i <= 24; i++) {
      const a = from + (i / 24) * (Math.PI / 2);
      raw.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]);
    }
  };
  raw.push([rx, 0]);
  raw.push([w - rx, 0]);
  arc(w - rx, ry, -Math.PI / 2);
  raw.push([w, h - ry]);
  arc(w - rx, h - ry, 0);
  raw.push([rx, h]);
  arc(rx, h - ry, Math.PI / 2);
  raw.push([0, ry]);
  arc(rx, ry, Math.PI);
  raw.push(raw[0]);

  const cum = [0];
  for (let i = 1; i < raw.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]));
  }
  const total = cum[cum.length - 1];
  const out = new Float32Array(STEPS * 2);
  let j = 1;
  for (let s = 0; s < STEPS; s++) {
    const d = (s / STEPS) * total;
    while (j < cum.length - 1 && cum[j] < d) j++;
    const seg = cum[j] - cum[j - 1] || 1;
    const t = (d - cum[j - 1]) / seg;
    out[s * 2] = raw[j - 1][0] + (raw[j][0] - raw[j - 1][0]) * t;
    out[s * 2 + 1] = raw[j - 1][1] + (raw[j][1] - raw[j - 1][1]) * t;
  }
  return { pts: out, length: total };
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = 0.3,
  ry = 0.3,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const dot = dotRef.current;
    if (!box || !dot) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let path = buildPath(box.clientWidth, box.clientHeight, rx, ry);
    let raf = 0;
    let visible = false;
    // Desynchronise cards that share a duration
    const offset = Math.random();

    const frame = (now: number) => {
      const f = ((now / duration + offset) % 1) * STEPS;
      const i = Math.floor(f) % STEPS;
      const n = (i + 1) % STEPS;
      const t = f - Math.floor(f);
      const x = path.pts[i * 2] + (path.pts[n * 2] - path.pts[i * 2]) * t;
      const y = path.pts[i * 2 + 1] + (path.pts[n * 2 + 1] - path.pts[i * 2 + 1]) * t;
      dot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const ro = new ResizeObserver(() => {
      path = buildPath(box.clientWidth, box.clientHeight, rx, ry);
    });
    ro.observe(box);
    // Only animate while the card is on screen
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(box);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
    };
  }, [duration, rx, ry]);

  return (
    <>
      <div ref={boxRef} className="absolute h-full w-full" />
      <div ref={dotRef} style={{ position: "absolute", top: 0, left: 0, display: "inline-block", willChange: "transform" }}>
        {children}
      </div>
    </>
  );
};
