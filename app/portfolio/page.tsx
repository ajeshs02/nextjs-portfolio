import type { Metadata } from "next";
import Wrapper from "@/components/Wrapper";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PERSON_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from "@/lib/site";

const URL = `${SITE_URL}/portfolio`;
const TITLE = "Ajesh S | Software Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Portfolio of Ajesh S, a software engineer building reliable, scalable web products with React, Next.js, Node.js and TypeScript. See projects and experience.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Ajesh S",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "TypeScript",
    "MERN stack",
    "web developer portfolio",
    "Kerala",
    "India",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Ajesh",
    lastName: "S",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: URL,
      jobTitle: "Software Engineer",
      description: DESCRIPTION,
      email: `mailto:${EMAIL}`,
      worksFor: { "@type": "Organization", name: "TechPearl" },
      address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
      knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Express", "Web performance", "Technical SEO"],
      sameAs: [LINKEDIN_URL, GITHUB_URL],
    },
    {
      "@type": "ProfilePage",
      "@id": `${URL}#profilepage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <Wrapper>
      <JsonLd data={jsonLd} />
      <div className="w-full max-w-7xl relative h-auto">
        <FloatingNav navItems={navItems} />
        <main>
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Approach />
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}
