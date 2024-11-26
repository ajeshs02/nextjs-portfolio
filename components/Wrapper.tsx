"use client";
import { useEffect, useRef } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveBlob = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 2000, fill: "forwards" }
        );
      }
    };

    document.body.addEventListener("mousemove", moveBlob);

    return () => {
      document.body.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  return (
    <main className="flex  h-auto relative flex-col justify-center items-center  px-5 bg-black-100 ms-auto sm:px-10 ">
      <div id="blob" ref={blobRef} />
      <div id="blur" />
      {children}
    </main>
  );
};

export default Wrapper;
