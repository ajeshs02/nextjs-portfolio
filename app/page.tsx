import Wrapper from "@/components/Wrapper";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { Suspense } from "react";
import LazyLoader from "@/components/LazyLoader";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Wrapper>
      <div className="w-full max-w-7xl relative h-auto ">
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
