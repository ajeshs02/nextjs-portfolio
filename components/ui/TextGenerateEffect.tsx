import { cn } from "@/lib/utils";

// Word-by-word headline entrance. Pure CSS (see .pf-word), so the text is painted and animated
// from the first frame without waiting for JavaScript. Renders the page's <h1>.
export const TextGenerateEffect = ({
  words,
  className,
  gradientFrom = 4,
}: {
  words: string;
  className?: string;
  /** Words from this index on use the gradient colour. */
  gradientFrom?: number;
}) => {
  return (
    <h1 className={cn("font-bold my-4 leading-snug tracking-wide text-white", className)}>
      {words.split(" ").map((word, idx) => (
        <span
          key={word + idx}
          className={cn("pf-word", idx >= gradientFrom && "gradient-text drop-shadow-lg")}
          style={{ "--i": idx } as React.CSSProperties}
        >
          {word}{" "}
        </span>
      ))}
    </h1>
  );
};
