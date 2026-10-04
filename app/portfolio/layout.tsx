import { Inter } from "next/font/google";

// Font is scoped to this route so /me never downloads it.
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <div className={inter.className}>{children}</div>;
}
