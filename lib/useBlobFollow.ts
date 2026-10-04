import { useEffect, type RefObject } from "react";

// Eases a fixed, decorative blob toward the pointer. Movement uses the individual `translate`
// property (compositor friendly, no layout), runs one rAF loop only while the blob is still
// travelling, and is skipped for touch input and reduced motion.
export function useBlobFollow(ref: RefObject<HTMLElement>, anchorY = 0.4) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(pointer: fine)").matches) return;

    let tx = innerWidth / 2;
    let ty = innerHeight * anchorY;
    let x = tx;
    let y = ty;
    let last = 0;
    let raf = 0;

    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16.7;
      last = now;
      // Frame-rate independent exponential ease (slow, floaty follow)
      const k = 1 - Math.pow(1 - 0.03, dt / 16.7);
      x += (tx - x) * k;
      y += (ty - y) * k;
      el.style.translate = `calc(${x.toFixed(1)}px - 50%) calc(${y.toFixed(1)}px - 50%)`;
      if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
        last = 0;
      }
    };

    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [ref, anchorY]);
}
