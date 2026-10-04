"use client";

import { useEffect, useState } from "react";

// [muted first line, bright second line]
const ENTRIES: [string, string][] = [
  ["Turn visitors", "into customers."],
  ["Design that", "drives growth."],
  ["Digital experiences,", "made better."],
];

const TYPE_MS = 48;
const HOLD_MS = 3400;
const FADE_OUT_MS = 650;

const MUTED = "color-mix(in srgb, var(--color-bg) 55%, transparent)";

const total = (i: number) => ENTRIES[i][0].length + ENTRIES[i][1].length;

// Each letter fades and un-blurs in as it appears; letters keep their key so only new ones animate.
const Chars = ({ text }: { text: string }) => (
  <>
    {text.split("").map((c, i) =>
      c === " " ? " " : (
        <span key={i} className="type-char">
          {c}
        </span>
      )
    )}
  </>
);

function Lines({ entry, n, caret }: { entry: [string, string]; n: number; caret?: boolean }) {
  const first = entry[0].slice(0, n);
  const second = entry[1].slice(0, Math.max(0, n - entry[0].length));
  const onSecond = n > entry[0].length;
  const cursor = caret ? <span className="type-caret" aria-hidden /> : null;
  return (
    <>
      <span style={{ color: MUTED }}><Chars text={first} /></span>
      {!onSecond && cursor}
      {onSecond && (
        <>
          <br />
          <span><Chars text={second} /></span>
          {cursor}
        </>
      )}
    </>
  );
}

/**
 * Rotating headline with a typewriter effect. The first entry is rendered in full for SSR and
 * reduced-motion users; afterwards entries are deleted and typed in random order.
 * Every entry is also rendered invisibly in the same grid cell so the height never jumps.
 */
export default function TypedHeadline() {
  const [idx, setIdx] = useState(0);
  const [n, setN] = useState(total(0));
  const [phase, setPhase] = useState<"hold" | "leaving" | "typing">("hold");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!animate) return;
    let t: number;
    if (phase === "hold") {
      t = window.setTimeout(() => setPhase("leaving"), HOLD_MS);
    } else if (phase === "leaving") {
      // Fade the whole headline out, then start typing a different random entry
      t = window.setTimeout(() => {
        const others = ENTRIES.map((_, i) => i).filter((i) => i !== idx);
        setIdx(others[Math.floor(Math.random() * others.length)]);
        setN(0);
        setPhase("typing");
      }, FADE_OUT_MS);
    } else if (n < total(idx)) {
      t = window.setTimeout(() => setN(n + 1), TYPE_MS);
    } else {
      setPhase("hold");
    }
    return () => window.clearTimeout(t);
  }, [animate, phase, n, idx]);

  const label = ENTRIES[idx].join(" ");
  return (
    <span style={{ display: "grid" }}>
      <span className="sr-only">{label}</span>
      {ENTRIES.map((e, i) => (
        <span key={i} aria-hidden style={{ gridArea: "1 / 1", visibility: "hidden" }}>
          <span>{e[0]}</span>
          <br />
          <span>{e[1]}</span>
        </span>
      ))}
      <span aria-hidden className="type-visible" data-leaving={phase === "leaving"} style={{ gridArea: "1 / 1" }}>
        <Lines key={idx} entry={ENTRIES[idx]} n={n} caret={animate} />
      </span>
    </span>
  );
}
