"use client";
import { useRef } from "react";
import { useBlobFollow } from "@/lib/useBlobFollow";
import ScrollReveal from "./ScrollReveal";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const blobRef = useRef<HTMLDivElement | null>(null);
  useBlobFollow(blobRef);

  return (
    <div className="pf-root flex h-auto relative flex-col justify-center items-center px-5 bg-black-100 ms-auto sm:px-10">
      <div id="blob" ref={blobRef} aria-hidden="true" />
      <ScrollReveal />
      {children}
    </div>
  );
};

export default Wrapper;
