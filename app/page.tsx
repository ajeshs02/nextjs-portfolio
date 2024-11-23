import dynamic from "next/dynamic";
import Wrapper from "@/components/Wrapper";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { Suspense } from "react";
import LazyLoader from "@/components/LazyLoader";

// Dynamic imports
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <Wrapper>
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Suspense fallback={<LazyLoader />}>
          <RecentProjects />
        </Suspense>
        <Suspense fallback={<LazyLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LazyLoader />}>
          <Approach />
        </Suspense>
        <Suspense fallback={<LazyLoader />}>
          <Footer />
        </Suspense>
      </div>
    </Wrapper>
  );
}
