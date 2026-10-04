"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import {
  Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useBlobFollow } from "@/lib/useBlobFollow";
import TypedHeadline from "./TypedHeadline";
import { FAQS, SERVICES } from "./content";

const LINE = "color-mix(in srgb, var(--color-bg) 18%, transparent)";
const dim = (n: number) => `color-mix(in srgb, var(--color-bg) ${n}%, transparent)`;
const GRAD = "var(--me-grad)";

const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "FAQ", link: "#faq" },
];

const EMAIL = "ajeshs.dev@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ajesh02/";
const GITHUB = "https://github.com/ajeshs02";
const WHATSAPP_NUMBER = "919895765329";
const WHATSAPP_LABEL = "+91 98957 65329";

const CONTACT_LINKS = [
  { label: "Email", text: EMAIL, href: `mailto:${EMAIL}`, Icon: LuMail },
  { label: "WhatsApp", text: WHATSAPP_LABEL, href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: FaWhatsapp },
  { label: "LinkedIn", text: "in/ajesh02", href: LINKEDIN, Icon: FaLinkedinIn },
  { label: "GitHub", text: "ajeshs02", href: GITHUB, Icon: FaGithub },
];



const PROJECTS = [
  { ph: "Ride.Rent screenshot", tag: "Web platform", tech: "Next.js", name: "Ride.Rent", href: "#", desc: "A high-performance vehicle rental platform built around discoverability, speed and a smooth booking experience, with 95+ Lighthouse scores and sub-second loads." },
  { ph: "Team Sync screenshot", tag: "SaaS", tech: "Web app", name: "Team Sync", href: "#", desc: "A multi-tenant project management platform for team collaboration, with workspaces, roles and permissions, Google sign-in and task workflows." },
  { ph: "All Things People screenshot", tag: "Enterprise", tech: "Analytics", name: "All Things People", href: "#", desc: "An enterprise employee-engagement platform with complex reporting, filtering and data workflows, used by 50k+ people across 30+ companies." },
];


const sectionHead: React.CSSProperties = {
  display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24,
  flexWrap: "wrap", paddingBottom: 20, borderBottom: `2px solid ${LINE}`,
};
const h2Style: React.CSSProperties = { fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", margin: 0 };
const kicker: React.CSSProperties = { fontSize: 14, color: dim(60) };
const section: React.CSSProperties = { padding: "120px 0 0", scrollMarginTop: 80 };

export default function MeClient() {
  const [open, setOpen] = useState(0);
  const blobRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [msgLen, setMsgLen] = useState(0);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // In-page "#section" scrolling is handled globally (components/SmoothScroll.tsx); this only closes the menu.
  const go = () => setMenuOpen(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setMsgLen(0);
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  // One-time scroll reveal: elements marked data-rv fade and rise into place when they enter the
  // viewport. Siblings stagger by their index, so card grids render one by one.
  useEffect(() => {
    const els = Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-rv]") ?? []);
    const settle = (el: HTMLElement) => {
      el.removeAttribute("data-rv");
      el.removeAttribute("data-in");
      el.style.removeProperty("--d");
    };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(settle);
      return;
    }
    const groups = new Map<Element | null, number>();
    els.forEach((el) => {
      const i = groups.get(el.parentElement) ?? 0;
      groups.set(el.parentElement, i + 1);
      el.style.setProperty("--d", String(Math.min(i, 5)));
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.setAttribute("data-in", "");
          window.setTimeout(() => settle(el), 2000);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -18% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useBlobFollow(blobRef);

  // Pause the hero's infinite background animations once it scrolls out of view
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => {
      hero.dataset.paused = String(!entry.isIntersecting);
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="me-root">
      <noscript>
        <style>{`.me-root [data-rv]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <div ref={blobRef} aria-hidden style={{ position: "fixed", left: 0, top: 0, translate: "calc(50vw - 50%) calc(40vh - 50%)", width: 560, height: 560, zIndex: 0, pointerEvents: "none", opacity: 0.38, filter: "blur(90px)", willChange: "translate" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "conic-gradient(from 0deg, oklch(0.74 0.13 250), var(--color-neutral-100), oklch(0.76 0.15 62), oklch(0.45 0.1 40), oklch(0.74 0.13 250))", animation: "blobSpin 18s linear infinite" }} />
      </div>

      <Navbar className="!fixed !top-4 px-4">
        <NavBody
          className="!min-w-[760px] max-w-[1120px] !rounded-none border-2 border-[color:var(--me-line)] !bg-[color-mix(in_srgb,var(--color-text)_100%,transparent)] py-2.5 pl-5 pr-2.5"
        >
          <a href="#top" onClick={go} className="relative z-20 flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight !text-[var(--color-bg)] no-underline">
            <span style={{ width: 14, height: 14, background: GRAD }} />Ajesh S
          </a>
          <NavItems
            items={NAV_ITEMS}
            onItemClick={() => {}}
            className="[&_a]:!rounded-none [&_a]:!text-[var(--color-bg)] [&_a]:no-underline [&_.nav-pill]:!rounded-none [&_.nav-pill]:!bg-[color-mix(in_srgb,var(--color-bg)_10%,transparent)]"
          />
          <NavbarButton href="#contact" onClick={go} className="relative z-20 ml-6 !rounded-none !bg-[var(--color-bg)] !text-[var(--color-text)] !shadow-none">Let&apos;s talk →</NavbarButton>
        </NavBody>

        <MobileNav className="border-2 border-[color:var(--me-line)] !rounded-none !bg-[color-mix(in_srgb,var(--color-text)_100%,transparent)] px-4 py-3">
          <MobileNavHeader>
            <a href="#top" onClick={go} className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-tight !text-[var(--color-bg)] no-underline">
              <span style={{ width: 14, height: 14, background: GRAD }} />Ajesh S
            </a>
            <MobileNavToggle isOpen={menuOpen} controls="mobile-menu" onClick={() => setMenuOpen((o) => !o)} />
          </MobileNavHeader>
          <MobileNavMenu id="mobile-menu" isOpen={menuOpen} onClose={closeMenu} className="!rounded-none border-2 border-[color:var(--me-line)] !bg-[var(--color-text)] !shadow-none">
            {NAV_ITEMS.map((item) => (
              <a key={item.link} href={item.link} onClick={go} className="w-full py-1 text-base font-semibold !text-[var(--color-bg)] no-underline">{item.name}</a>
            ))}
            <NavbarButton href="#contact" onClick={go} className="w-full !rounded-none !bg-[var(--color-bg)] !text-[var(--color-text)] !shadow-none">Let&apos;s talk →</NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <header id="top" ref={heroRef} style={{ position: "relative", zIndex: 1, overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", borderBottom: `2px solid ${LINE}` }}>
        <div aria-hidden style={{ position: "absolute", left: "-12%", top: "-18%", width: "min(620px, 70vw)", aspectRatio: "1", pointerEvents: "none", opacity: 0.28, filter: "blur(90px)" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "conic-gradient(from 0deg, oklch(0.74 0.13 250), var(--color-neutral-100), oklch(0.76 0.15 62), oklch(0.45 0.1 40), oklch(0.74 0.13 250))", animation: "blobSpin 22s linear infinite" }} />
        </div>
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.75 }}>
          <div style={{ position: "absolute", right: "-6%", top: "-10%", width: "46%", height: "120%", filter: "blur(48px)", background: "linear-gradient(90deg, transparent 8%, oklch(0.74 0.13 250) 34%, var(--color-neutral-100) 50%, oklch(0.76 0.15 62) 64%, oklch(0.35 0.08 50) 80%, transparent 96%)", animation: "auroraA 16s ease-in-out infinite" }} />
          <div style={{ position: "absolute", right: "6%", top: "-10%", width: "30%", height: "100%", filter: "blur(60px)", background: "radial-gradient(30% 55% at 50% 50%, var(--color-neutral-100) 0%, transparent 70%)", opacity: 0.6, animation: "auroraB 20s ease-in-out infinite" }} />
        </div>
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${dim(5)} 1px, transparent 1px), linear-gradient(90deg, ${dim(5)} 1px, transparent 1px)`, backgroundSize: "calc(100% / 12) 100%, calc(100% / 12) 100%", maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 1120, margin: "0 auto", padding: "128px 24px 72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px", border: `2px solid ${dim(22)}`, fontSize: 13, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, background: GRAD }} />Available for new projects
          </div>
          <h1 style={{ fontSize: "clamp(44px, 8.2vw, 112px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "0 0 32px", maxWidth: "none", animation: "wordIn .9s cubic-bezier(.2,.7,.2,1) .15s both" }}>
            <TypedHeadline />
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 32, alignItems: "end", borderTop: `2px solid ${LINE}`, paddingTop: 28 }}>
            <p style={{ fontSize: 19, lineHeight: 1.5, margin: 0, maxWidth: "46ch", color: dim(78), textWrap: "pretty" }}>I&apos;m Ajesh S. I design and build fast, high-converting websites that turn attention into leads, sales, and business growth.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact" onClick={go} className="btn btn-primary" style={{ minWidth: 220, padding: "14px 18px", fontSize: 15 }}>Let&apos;s work together →</a>
              <a href="#work" onClick={go} className="btn btn-secondary" style={{ minWidth: 180, padding: "14px 18px", fontSize: 15 }}>View my work →</a>
            </div>
          </div>
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <section id="about" style={section}>
          <div data-rv style={sectionHead}>
            <h2 style={h2Style}>A little about Ajesh.</h2>
            <span style={kicker}>01 / Who I am</span>
          </div>
          <div className="about-grid" style={{ borderBottom: `2px solid ${LINE}` }}>
            <div data-rv className="about-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-neutral-400)", marginBottom: 10 }}>Software Engineer</div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em" }}>Ajesh S</div>
                <div style={{ fontSize: 14, color: dim(60) }}>Based in India</div>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: dim(82), textWrap: "pretty" }}>I&apos;m Ajesh, an independent developer who helps turn ideas and business requirements into polished digital experiences. I combine thoughtful design, strong engineering, and performance-focused development to build websites and products that are made for real users.</p>
            </div>
            <div className="about-stats" style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
              <div data-rv className="about-stat" style={{ borderBottom: `2px solid ${LINE}` }}>
                <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>3+</div>
                <div style={{ fontSize: 14, marginTop: 8, color: dim(65) }}>Years of professional experience</div>
              </div>
              <div data-rv className="about-stat" style={{ borderBottom: `2px solid ${LINE}` }}>
                <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.15 }}>End-to-end</div>
                <div style={{ fontSize: 14, marginTop: 8, color: dim(65) }}>From idea to launch</div>
              </div>
              <div data-rv className="about-stat">
                <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.15 }}>Performance-first</div>
                <div style={{ fontSize: 14, marginTop: 8, color: dim(65) }}>Fast, search-friendly websites</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" style={section}>
          <div data-rv style={sectionHead}>
            <div>
              <h2 style={{ ...h2Style, marginBottom: 12 }}>What I can help with</h2>
              <p style={{ margin: 0, fontSize: 17, maxWidth: "56ch", color: dim(70) }}>From getting discovered to delivering a great experience, I help bring your digital presence together.</p>
            </div>
            <span style={kicker}>02 / Services</span>
          </div>
          <div className="svc-grid" style={{ borderBottom: `2px solid ${LINE}` }}>
            {SERVICES.map((s) => (
              <div
                key={s.num}
                data-rv
                className="svc-card"
                style={{ position: "relative", display: "flex", flexDirection: "column", gap: 20, padding: "32px 28px 36px", minHeight: 360 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "var(--color-neutral-400)", fontWeight: 600 }}>{s.num}</span>
                  <span style={{ width: 10, height: 10, background: GRAD }} />
                </div>
                <h3 style={{ fontSize: 32, letterSpacing: "-0.02em", margin: "24px 0 0" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: dim(75), textWrap: "pretty" }}>{s.body}</p>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", borderTop: `2px solid ${dim(14)}` }}>
                  {s.points.map((p) => (
                    <div key={p} style={{ padding: "10px 0", fontSize: 14, borderBottom: `1px solid ${dim(12)}`, color: dim(82) }}>{p}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" style={section}>
          <div data-rv style={sectionHead}>
            <div>
              <h2 style={{ ...h2Style, marginBottom: 12 }}>Selected work</h2>
              <p style={{ margin: 0, fontSize: 17, color: dim(70) }}>A few things I&apos;ve built and helped bring to life.</p>
            </div>
            <a href="#contact" onClick={go} className="btn btn-secondary">Start a project →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 2, background: LINE, borderBottom: `2px solid ${LINE}` }}>
            {PROJECTS.map((p) => (
              <a key={p.name} data-rv href={p.href} className="project" style={{ display: "flex", flexDirection: "column", background: "color-mix(in srgb, var(--color-text) 82%, transparent)", color: "var(--color-bg)", textDecoration: "none" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", borderBottom: `2px solid ${LINE}` }}>
                  <div className="placeholder">{p.ph}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "24px 24px 28px", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-neutral-400)", fontWeight: 600 }}>{p.tag}</span>
                    <span style={{ fontSize: 12, color: dim(55) }}>{p.tech}</span>
                  </div>
                  <h3 style={{ fontSize: 28, letterSpacing: "-0.02em", margin: 0 }}>{p.name}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: dim(72), textWrap: "pretty", flex: 1 }}>{p.desc}</p>
                  <span style={{ fontSize: 14, fontWeight: 800, marginTop: 8 }}>View project →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="faq" style={{ ...section, paddingBottom: 120 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 48 }}>
            <div data-rv>
              <h2 style={{ ...h2Style, marginBottom: 16 }}>Questions, answered</h2>
              <p style={{ margin: "0 0 28px", fontSize: 17, maxWidth: "36ch", color: dim(70) }}>Everything you might want to know before we start. Don&apos;t see yours? Just ask.</p>
              <a href="#contact" onClick={go} className="btn btn-ghost">Ask a question →</a>
            </div>
            <div style={{ borderTop: `2px solid ${LINE}` }}>
              {FAQS.map(([q, a], i) => {
                const isOpen = open === i;
                return (
                  <div key={q} data-rv style={{ borderBottom: `2px solid ${LINE}` }}>
                    <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, padding: "22px 0", background: "none", border: 0, color: "inherit", font: "inherit", fontSize: 17, fontWeight: 600, textAlign: "left", cursor: "pointer" }}>
                      <span>{q}</span>
                      <span style={{ fontSize: 24, fontWeight: 400, lineHeight: 1, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform .3s cubic-bezier(.2,.7,.2,1)" }}>+</span>
                    </button>
                    <div id={`faq-${i}`} role="region" className="faq-panel" data-open={isOpen}>
                      <div style={{ overflow: "hidden" }}>
                        <p style={{ margin: 0, padding: "0 48px 24px 0", fontSize: 15, lineHeight: 1.65, color: dim(72), textWrap: "pretty" }}>{a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <section id="contact" style={{ position: "relative", zIndex: 1, overflow: "hidden", background: "color-mix(in srgb, var(--color-text) 55%, transparent)", borderTop: `2px solid ${LINE}` }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(90deg, transparent 55%, color-mix(in srgb, oklch(0.74 0.13 250) 45%, transparent) 72%, color-mix(in srgb, var(--color-bg) 70%, transparent) 80%, color-mix(in srgb, oklch(0.76 0.15 62) 45%, transparent) 88%, transparent 100%)", filter: "blur(50px)", opacity: 0.55 }} />
        <div style={{ position: "relative", maxWidth: 1120, margin: "0 auto", padding: "120px 24px 48px" }}>
          <h2 data-rv style={{ fontSize: "clamp(44px, 8vw, 112px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: "0 0 56px", maxWidth: "14ch" }}>Have an idea? Let&apos;s make it real.</h2>
          <div className="contact-box">
            <div data-rv style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "40ch", margin: 0, color: dim(78) }}>Tell me what you&apos;re planning, and let&apos;s see how we can bring it to life. I&apos;ll get back to you within 1 to 2 business days, usually sooner.</p>
              <div style={{ display: "flex", flexDirection: "column", borderTop: `2px solid ${dim(25)}` }}>
                {CONTACT_LINKS.map(({ label, text, href, Icon }) => (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mail" style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 0", borderBottom: `2px solid ${dim(30)}`, color: "var(--color-bg)", textDecoration: "none", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: dim(65) }}><Icon size={18} aria-hidden style={{ color: "var(--color-bg)", flex: "none" }} />{label}</span>
                    <span style={{ fontSize: 18, fontWeight: 800, overflowWrap: "anywhere" }}>{text}</span>
                  </a>
                ))}
              </div>
              <div className="map-wrap" aria-label="Based in Kerala, India" role="img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/map-dots.svg" alt="" aria-hidden="true" width={500} height={280} loading="lazy" decoding="async" className="map-img" />
                <span className="map-pin" style={{ left: "43.2%", top: "68%" }}>
                  <span className="map-label">Based in Kerala, India</span>
                  <span className="map-stem" />
                  <span className="map-dot" />
                </span>
              </div>
            </div>
            <form data-rv onSubmit={submit} className="contact-form">
              {status === "sent" ? (
                <div role="status" aria-live="polite" style={{ display: "flex", flexDirection: "column", gap: 16, minHeight: 360, justifyContent: "center" }}>
                  <span style={{ width: 44, height: 44, background: GRAD, display: "grid", placeItems: "center", color: "var(--color-text)", fontSize: 22, fontWeight: 800 }}>✓</span>
                  <h3 style={{ fontSize: 32, letterSpacing: "-0.02em", margin: 0 }}>Message sent</h3>
                  <p style={{ margin: 0, color: dim(75), maxWidth: "34ch" }}>Thanks for reaching out. I&apos;ll read it and reply to your email soon.</p>
                  <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")} style={{ alignSelf: "flex-start" }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 style={{ fontSize: 26, letterSpacing: "-0.02em", margin: "0 0 4px" }}>Send me a message</h3>
                    <p style={{ margin: 0, fontSize: 14, color: dim(60) }}>All fields are required.</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 20 }}>
                    <label className="field"><span>Full name</span><input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Your name" /></label>
                    <label className="field"><span>Email address</span><input name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@example.com" /></label>
                  </div>
                  <label className="field">
                    <span style={{ display: "flex", justifyContent: "space-between" }}>Message<em>{msgLen}/5000</em></span>
                    <textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Tell me a little about your idea, what you&apos;re looking to achieve, and any timeline you have in mind." onChange={(e) => setMsgLen(e.target.value.length)} />
                  </label>
                  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                  <button type="submit" disabled={status === "sending"} className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "12px 20px", fontSize: 15 }}>
                    {status === "sending" ? "Sending..." : "Send project inquiry →"}
                  </button>
                  <div role="status" aria-live="polite" style={{ fontSize: 14, minHeight: 20 }}>
                    {status === "error" && <span style={{ color: "oklch(0.78 0.14 25)" }}>{errorMsg}</span>}
                  </div>
                </>
              )}
            </form>
          </div>
          <footer style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 72, paddingTop: 20, borderTop: `2px solid ${dim(50)}`, fontSize: 13 }}>
            <span suppressHydrationWarning>© {new Date().getFullYear()} Ajesh S</span>
            <a href="#top" onClick={go} style={{ color: "var(--color-bg)" }}>Back to top ↑</a>
          </footer>
        </div>
      </section>
    </div>
  );
}
