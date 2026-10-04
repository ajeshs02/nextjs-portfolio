"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Floating pill nav: always visible near the top, hides while scrolling down, returns on scroll up.
// Plain passive scroll listener + CSS transition (compositor only), no animation library.
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    /** Render as a highlighted button */
    cta?: boolean;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? y / max : 0;
      const delta = y - lastY.current;
      lastY.current = y;
      if (progress < 0.05 || delta < 0) setVisible(true);
      else if (delta > 0) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "pf-nav flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-3xl border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
        className
      )}
      data-hidden={!visible}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(32, 30, 29, 0.72)",
        border: "1px solid rgba(243, 242, 242, 0.14)",
      }}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative items-center flex space-x-1 transition-colors duration-300",
            navItem.cta
              ? "gradient rounded-full px-4 py-1.5 font-semibold !text-slate-900 hover:brightness-110 transition-[filter]"
              : "dark:text-neutral-50 text-neutral-600 dark:hover:text-yellow hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="text-sm !cursor-pointer">{navItem.name}</span>
        </Link>
      ))}
    </nav>
  );
};
