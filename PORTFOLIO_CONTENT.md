# Portfolio Content – Ajesh S

Single-page portfolio built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, Lenis (smooth scroll) and next-themes (dark by default).

- **Page title:** Ajesh's Portfolio
- **Meta description:** Modern & Minimalist Portfolio by Ajesh S
- **Content source:** all copy lives in [data/index.ts](data/index.ts) plus inline text in the section components.
- **Section order (top → bottom):** Floating Nav → Hero → About (bento grid) → Projects → Experience → Approach → Contact/Footer

---

## 0. Global / Page-level

| Item | Detail |
|---|---|
| Font | Inter (Google Fonts) |
| Theme | Dark by default, system theme enabled |
| Scrolling | Smooth scrolling via Lenis |
| Cursor effect | A blurred "blob" follows the mouse (Wrapper) |
| Loading state | Three bouncing dots screen (`loading.tsx`) |

### Floating Navigation
A floating nav bar with anchor links:

| Label | Target |
|---|---|
| About | `#about` |
| Projects | `#projects` |
| Experience | `#experience` |
| Contact | `#contact` |

---

## 1. Hero

- **Eyebrow:** DYNAMIC WEB MAGIC
- **Headline (animated text-generate effect):** Transforming Concepts into Seamless User Experiences
- **Intro:** Hi, I'm Ajesh S - a Next.js / MERN developer from India, building scalable applications and exploring Go for backend performance.
- **CTA button:** "Show my work" (arrow icon) → scrolls to `#about`
- **Visuals:** white and blue spotlight effects (hidden on mobile), faint grid background.

---

## 2. About – Bento Grid (`#about`)

Six cards, no section heading:

| # | Title | Subtext | Visual / extras |
|---|---|---|---|
| 1 | I prioritize client collaboration, fostering open communication | – | Large card, coding photo (`coding.webp`) with dark overlay |
| 2 | I'm very flexible with time zone communications | – | Grid pattern background |
| 3 | My tech stack | I constantly try to improve | Two columns of chips: **ReactJS, NextJS, Typescript** and **Express, NodeJS, MongoDB** |
| 4 | Engineering with a performance-first and scalability mindset | – | Grid pattern background |
| 5 | Currently exploring Go and high-concurrency backend architectures | The Inside Scoop | Illustration (`b5.svg`) |
| 6 | Do you want to start a project together? | – | Animated gradient background and a **"Copy my email address"** button (copies `ajeshs.dev@gmail.com`; label changes to "Email is Copied!") |

---

## 3. Projects (`#projects`)

- **Heading:** A Small Selection of Recent Projects
- Each project is a 3D-pin hover card with a screenshot, title, 2-line description, tech icons and a link label ("Check Live Site" for live sites, "Github" for repos).

### 3.1 Ride.Rent – Vehicle Rental Platform (released)
- **Description:** Comprehensive vehicle rental platform with Next.js, focused on SEO optimization and high performance.
- **Tech:** Next.js, Tailwind CSS, TypeScript, Docker, Framer Motion
- **Link:** https://ride.rent/ae/dubai/cars (live site)
- **Image:** `assets/ride-rent.webp`

### 3.2 Team Sync – Jira inspired project management tool
- **Description:** A modern project management tool inspired by Jira, built with React/NodeJs/Express/Mongodb/GCP with Google Auth. Features include task management, team collaboration, and project tracking.
- **Tech:** React, Node.js, Express, MongoDB, Docker
- **Link:** https://team-sync-lyart.vercel.app/ (live site)
- **Image:** `assets/teamsync.webp`

### 3.3 Gravity – An E-Commerce platform
- **Description:** Built on MERN stack, this is a modern e-commerce platform, with payment integration and file uploads.
- **Tech:** JavaScript, React, Tailwind CSS, Node.js, MongoDB
- **Link:** https://github.com/ajeshs02/Gravity (GitHub)
- **Image:** `assets/gravity.webp`

### 3.4 Evently – An Event Management platform
- **Description:** A modern event management platform with stripe payment integration and clerk authentication.
- **Tech:** React, Tailwind CSS, TypeScript, C (icon `c.svg`; likely meant to be Clerk), MongoDB
- **Link:** https://github.com/ajeshs02/event_platform (GitHub)
- **Image:** `assets/evently.webp`

---

## 4. Work Experience (`#experience`)

- **Heading:** My Work Experience
- Four cards with moving-border animation; the first carries a "Current" badge.

### 4.1 Software Engineer – TechPearl *(Current)*
Developing scalable, production-grade applications with a focus on system reliability, clean architecture, and performance optimization. Collaborating across teams to design maintainable APIs, improve deployment workflows, and deliver robust end-to-end solutions.

### 4.2 Full Stack Developer / Lead Frontend Developer
Led frontend architecture and contributed across the MERN stack for Ride Rent, a high-performance and SEO-critical platform built with Next.js. Designed scalable components, optimized Core Web Vitals, implemented SSR/ISR strategies, and ensured seamless API integration for improved performance and discoverability.

### 4.3 Collaborative Development
Partnered with cross-functional teams including backend engineers, designers, and product stakeholders to translate business requirements into performant UI solutions. Improved frontend architecture for modularity, reusability, and cross-device compatibility while maintaining high code quality standards.

### 4.4 Mentor, Web Development Projects
Mentored college students on end-to-end web development projects, guiding them through requirement analysis, architecture design, code reviews, and deployment best practices. Emphasized clean coding principles, scalability considerations, and industry-standard workflows.

> Note: no dates or company names are shown for entries 4.2–4.4.

---

## 5. My Approach

- **Heading:** My Approach
- Three hover-reveal cards. By default each shows only a "Phase N" badge; on hover the title and description appear.

| Phase | Title | Description |
|---|---|---|
| Phase 1 | Planning & Strategy | We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements. |
| Phase 2 | Development & Progress Update | Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way. |
| Phase 3 | Development & Launch | This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up. |

---

## 6. Contact / Footer (`#contact`)

- **Heading:** Ready to take **your** digital presence to the next level? ("your" highlighted in green)
- **Subtext:** Reach out to me today and let's discuss how I can help you achieve your goals.
- **CTA button:** "Let's get in touch" → `mailto:ajeshs.dev@gmail.com`
- **Copyright:** Copyright © {current year} Ajesh S
- **Social links (open in new tab):**
  - GitHub – https://github.com/ajeshs02
  - LinkedIn – https://www.linkedin.com/in/ajesh02/

---

## Observations

- The Phase 2 and Phase 3 titles both start with "Development", so they read as overlapping; Phase 3's description also overlaps with Phase 2.
- The Hero's "Show my work" button links to `#about`, not `#projects`.
- The "Evently" card's fourth icon is `c.svg`, which looks like a placeholder for Clerk.
- Experience entries lack dates and company names, except TechPearl.
- Unused assets in `public/`: `three.svg`, `globe.png`, `cloudName.svg`, `dockerName.svg`, `bg.png`.
- The root `README.md` is not summarised here.
