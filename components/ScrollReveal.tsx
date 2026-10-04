"use client";
import { useEffect } from "react";

// One-time scroll reveal for [data-rv] elements inside .pf-root, plus the
// cursor-follow glow position for .pf-glow cards.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector(".pf-root");
    if (!root) return;

    let cleanupIO: (() => void) | undefined;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-rv]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.setAttribute("data-in", ""));
    } else {
      // Stagger siblings that reveal together, unless a delay is already set.
      const seen = new Map<Element, number>();
      items.forEach((el) => {
        if (el.style.getPropertyValue("--d")) return;
        const parent = el.parentElement!;
        const i = seen.get(parent) ?? 0;
        seen.set(parent, i + 1);
        el.style.setProperty("--d", `${Math.min(i, 5) * 110}ms`);
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            io.unobserve(el);
            el.setAttribute("data-in", "");
            // Release the element once settled so hover transforms work normally.
            const delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
            window.setTimeout(() => el.removeAttribute("data-rv"), delay + 1300);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -14% 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanupIO = () => io.disconnect();
    }

    // Cursor-follow glow: read the card rect and write the CSS vars once per frame.
    let raf = 0;
    let ev: PointerEvent | null = null;
    const apply = () => {
      raf = 0;
      if (!ev) return;
      const card = (ev.target as HTMLElement | null)?.closest<HTMLElement>(".pf-glow");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      ev = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    root.addEventListener("pointermove", onMove as EventListener, { passive: true });

    return () => {
      cleanupIO?.();
      cancelAnimationFrame(raf);
      root.removeEventListener("pointermove", onMove as EventListener);
    };
  }, []);

  return (
    <noscript>
      <style>{`.pf-root [data-rv]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
    </noscript>
  );
}
