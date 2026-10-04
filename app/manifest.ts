import type { MetadataRoute } from "next";
import { THEME_COLOR } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ajesh S",
    short_name: "Ajesh S",
    description: "Portfolio of Ajesh S, software engineer and independent developer.",
    start_url: "/portfolio",
    display: "browser",
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
