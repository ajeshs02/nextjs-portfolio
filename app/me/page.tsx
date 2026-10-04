import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PERSON_ID, SITE_NAME, SITE_URL, WEBSITE_ID } from "@/lib/site";
import MeClient from "./MeClient";
import { FAQS, SERVICES } from "./content";
import "./me.css";

// Variable font: one file covers every weight used on this page.
const archivo = Archivo({ subsets: ["latin"], display: "swap" });

const URL = `${SITE_URL}/me`;
const TITLE = "Ajesh S | Independent Web Developer & Product Designer";
const DESCRIPTION =
  "Independent developer designing and building fast, high-converting websites and web apps with strong SEO and Core Web Vitals. Based in Kerala, India.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "freelance web developer",
    "independent developer",
    "website development",
    "web application development",
    "Next.js developer",
    "React developer",
    "technical SEO",
    "Core Web Vitals",
    "product design",
    "hire web developer",
    "Kerala",
    "India",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
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
      jobTitle: "Independent Developer",
      email: `mailto:${EMAIL}`,
      address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
      sameAs: [LINKEDIN_URL, GITHUB_URL],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${URL}#service`,
      name: `${SITE_NAME}, Independent Web Developer`,
      url: URL,
      description: DESCRIPTION,
      provider: { "@id": PERSON_ID },
      founder: { "@id": PERSON_ID },
      email: `mailto:${EMAIL}`,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.body },
        })),
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function MePage() {
  return (
    <div className={archivo.className}>
      <JsonLd data={jsonLd} />
      <MeClient />
    </div>
  );
}
