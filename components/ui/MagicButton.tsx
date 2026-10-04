import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  /** Renders a real link instead of a button (no interactive element nested in another). */
  href?: string;
  download?: boolean;
  external?: boolean;
};

const BASE =
  "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow no-underline";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
  download,
  external,
}: Props) => {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f0a548_0%,#78a9ee_50%,#f0a548_100%)]"
      />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-[#1a1918] px-7 text-sm text-white font-semibold backdrop-blur-3xl gap-2 ${otherClasses ?? ""}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={BASE}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={BASE} onClick={handleClick}>
      {inner}
    </button>
  );
};

export default MagicButton;
