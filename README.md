# Shubham. — Developer Portfolio

> A fully custom, interactive portfolio built to showcase real projects, real skills, and real problem-solving — not a template.

**Live Demo:** [add your deployed URL here]
**Resume:** [add link once uploaded]

---

## Overview

This is a personal developer portfolio for **Shubham Raj**, a Computer Science student and Android developer. Rather than shipping a generic template, every section was custom-built from scratch — from an animated fluid gradient background to a 3D-flipping certificate showcase to live-fetched coding statistics pulled directly from GitHub and LeetCode.

The goal was simple: give a recruiter everything they need to evaluate a candidate in under 60 seconds, without sacrificing depth for anyone who wants to dig in further.

---

## ✨ Key Features

- **Fluid animated background** — a continuously morphing, glass-like color field (teal → purple → pink) built with layered CSS gradients and GPU-accelerated transforms. No two moments look identical, and it never visibly loops.
- **Day/Night theme system** — a fully tuned light/dark mode with independent color, glass, and contrast profiles — not just a filter flip.
- **Scroll-aware navigation** — an active-section indicator that smoothly glides between nav items as you scroll, powered by `IntersectionObserver` + Framer Motion shared layout animations.
- **Interactive Skills explorer** — searchable, filterable, keyboard-shortcut-enabled (`/` to search), with in-grid expanding cards (no modals) showing proficiency, related knowledge, and linked projects.
- **Alternating Education timeline** — a true left/right timeline with interactive glowing nodes, expandable milestone cards, and a live CGPA progression chart.
- **Case-study style Projects** — each project is a mini case study with an image slideshow (+ lightbox), tabbed Overview/Architecture/Metrics content, tech stack badges, and a metadata strip — all fully data-driven from a single source of truth.
- **Certifications & Achievements Explorer** — a two-panel system with a scrollable library and a genuine 3D card-flip reveal for certificates and achievement proofs.
- **Live Coding Profile** — real, live-fetched statistics from GitHub (via public REST API) and LeetCode (via a secure serverless proxy to avoid exposing any credentials), including an actual GitHub-style contribution heatmap that never fabricates future-dated activity.
- **Working contact form** — connected to Formspree with real client-side validation, loading/success/error states, and honeypot spam protection.
- **Fully responsive** — rebuilt from the ground up for mobile (320px+), tablet, and desktop, including a proper slide-in mobile navigation drawer and touch-friendly interactions throughout.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React, React Icons |
| Forms | Formspree |
| Data | GitHub REST API, LeetCode (via serverless proxy) |
| Deployment | Vercel (serverless functions for API routes) |

---

## 📂 Project Structure

```
src/
├── components/       # All UI sections (Hero, Skills, Projects, etc.)
├── data/             # Data-driven content — edit here, not in JSX
│   ├── skillsData.js
│   ├── projectsData.js
│   ├── educationData.js
│   ├── certificatesData.js
│   ├── codingProfileData.js
│   └── contactData.js
├── context/          # Theme (day/night) context
├── hooks/            # Custom hooks (typewriter effect, etc.)
└── index.css         # Design tokens, theme variables, animations
api/
└── leetcode.js       # Serverless function — keeps API calls credential-free
```

Every major section pulls its content from a dedicated file in `src/data/` — adding a new project, skill, certificate, or education milestone means editing a plain JS object, never touching component code.

---

## 📊 Highlights for Recruiters

- **150+** LeetCode problems solved (live-verified)
- **B.Tech, Computer Science (AI)** — GEC Lakhisarai, 2023–2027
- Hands-on experience across **Android development, DSA, and full-stack fundamentals**
- Built and shipped real Android applications (NodeBook, CookBook) using Kotlin, Jetpack Compose, MVVM, and Room

---

## 📬 Contact

- **Email:** ershubhcsofficial@gmail.com
- **GitHub:** [github.com/shubhamraj1811](https://github.com/shubhamraj1811)
- **LeetCode:** [leetcode.com/u/shubhcoded](https://leetcode.com/u/shubhcoded/)

---

<p align="center">Built with React, Tailwind, and a lot of iteration. ☕</p>