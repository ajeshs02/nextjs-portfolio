import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Ajesh S, independent web developer and product designer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Independent Developer",
    title: "Turn visitors into customers.",
    subtitle: "Fast, high-converting websites built for leads, sales and growth.",
  });
}
