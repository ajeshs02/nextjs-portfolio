import "./globals.css";
import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_NAME, SITE_URL, THEME_COLOR } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ajesh S | Software Engineer",
    template: "%s | Ajesh S",
  },
  description:
    "Ajesh S is a software engineer and independent developer building fast, reliable and scalable web products.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: THEME_COLOR,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The site is dark-only, so the class is static (no theme script, no flash, no hydration diff).
  // suppressHydrationWarning: Lenis adds its own classes to <html> after hydration.
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
