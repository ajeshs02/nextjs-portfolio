import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Ajesh S, Software Engineer and Full-Stack Developer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Software Engineer",
    title: "Engineering products that move businesses forward.",
    subtitle: "React, Next.js, Node.js and TypeScript. Reliable, scalable web products.",
  });
}
