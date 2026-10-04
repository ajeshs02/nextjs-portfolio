const IMMUTABLE = "public, max-age=31536000, immutable";
const LONG = "public, max-age=2592000, stale-while-revalidate=86400";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  experimental: {
    // Import only the icons/components that are actually used
    optimizePackageImports: ["react-icons/fa", "react-icons/fa6", "react-icons/lu", "react-icons/io5"],
  },
  // Redirect at the HTTP level so the app-wide loading boundary never renders for "/"
  async redirects() {
    return [{ source: "/", destination: "/portfolio", permanent: false }];
  },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
      { key: "Strict-Transport-Security", value: "max-age=31536000" },
    ];
    return [
      { source: "/:path*", headers: security },
      // Static files in /public are not fingerprinted, so cache them for a month and revalidate in the background
      {
        source: "/:file(.+\\.(?:svg|webp|png|jpg|jpeg|avif|gif|ico|woff2))",
        headers: [{ key: "Cache-Control", value: LONG }],
      },
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: LONG }] },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
    ];
  },
};
export default nextConfig;
