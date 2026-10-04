"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;
let rafId = 0;
let cancelTween: (() => void) | null = null;

// Ease in, ease out (cubic) for in-page navigation
const easeInOutCubic = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const setScroll = (y: number) => {
  // Going through Lenis (when running) keeps its internal position in sync
  if (instance) instance.scrollTo(y, { immediate: true, force: true });
  else window.scrollTo(0, y);
};

/**
 * Eased scroll to a "#section" element. Owns its own requestAnimationFrame tween, so it works
 * whether or not Lenis has started yet. The element's CSS scroll-margin-top is the offset.
 */
export function scrollToTarget(target: string, extraOffset = 0) {
  const el = document.querySelector<HTMLElement>(target);
  if (!el) return;
  cancelTween?.();

  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const from = window.scrollY;
  const to = Math.max(0, Math.min(max, el.getBoundingClientRect().top + from - margin + extraOffset));
  const dist = Math.abs(to - from);
  if (dist < 2) return;

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setScroll(to);
    return;
  }

  const duration = Math.min(1800, Math.max(900, dist * 0.6));
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    setScroll(from + (to - from) * easeInOutCubic(t));
    rafId = t < 1 ? requestAnimationFrame(tick) : 0;
    if (t >= 1) cancelTween = null;
  };
  // Any manual scroll input takes over immediately
  const stop = () => {
    cancelAnimationFrame(rafId);
    rafId = 0;
    cancelTween = null;
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };
  cancelTween = stop;
  window.addEventListener("wheel", stop, { passive: true, once: true });
  window.addEventListener("touchstart", stop, { passive: true, once: true });
  window.addEventListener("keydown", stop, { once: true });
  rafId = requestAnimationFrame(tick);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Capture phase, so this runs before any component handler or Next's <Link>. Every in-page
    // "#section" link on every page eases to its target through scrollToTarget.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (!a || !href || href.length < 2 || a.target === "_blank") return;
      let found: Element | null = null;
      try {
        found = document.querySelector(href);
      } catch {
        return;
      }
      if (!found) return;
      e.preventDefault();
      scrollToTarget(href);
      history.replaceState(history.state, "", href);
    };
    document.addEventListener("click", onClick, true);

    // People who ask for reduced motion keep the browser's native wheel scrolling
    let timer = 0;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Smooth wheel scrolling starts after first paint so it never competes with hydration
      timer = window.setTimeout(() => {
        instance = new Lenis({ duration: 1.15, wheelMultiplier: 0.95, autoRaf: true });
      }, 300);
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(timer);
      cancelTween?.();
      instance?.destroy();
      instance = null;
    };
  }, []);

  return <>{children}</>;
}
