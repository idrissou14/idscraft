# IdsCraft Agency Website - Project Context

## 1. Project Overview
**Name**: IdsCraft Agency
**Type**: Premium Digital Agency Website
**Goal**: Convert visitors into leads requiring high-end digital services (Web, Mobile, Automation, AI).
**Vibe**: Modern, Warm, Premium, Animations, "Global Mindset" (No specific geo-location).

## 2. Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix Primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: `next-themes` (Dark/Light mode support)

## 3. Design System
- **Colors**:
  - `Primary`: Deep Blue (Sky-500/600 variations via CSS variables)
  - `Background`: Clean White / High-end Dark Grey (#111)
  - `Secondary`: Subtle gradients for warmth.
- **Typography**: Inter (via `next/font/google`).
- **Visuals**:
  - Glassmorphism (backdrop-blur).
  - Subtle background gradients (blobs) to add life.
  - Staggered entrance animations.

## 4. Architecture & Structure

### Core Layout
- **`app/layout.tsx`**: Root layout with `ThemeProvider` and global font.
- **`components/layout/navbar.tsx`**: Sticky, glassmorphic header.
  - Contains `Logo` component (custom SVG).
  - Navigation: Services, Portfolio, À propos.
  - CTA: "Réserver un call" (Glowing decoration).
  - Mobile Menu (Animated).
- **`components/layout/footer.tsx`**: Extensive footer.
  - Columns: Brand (with Logo), Agency (Nav), Expertises (Services), Connect (Socials).
  - Matches the "warm" aesthetic with background blobs.

### Key Pages
1.  **Home (`/`)**:
    - **Hero**: Value prop ("Modern Fullstack"), Tech Stack badges (Next.js, Laravel, Python...), 3D abstract visual.
    - **Services Preview**: 3 highlight cards.
    - **Process**: Timeline of engagement.
    - **Testimonials**: Social proof.
    - **CTA**: Final push to booking.

2.  **Services (`/app/services/page.tsx`)**:
    - **6 Distinct Offerings**:
        1.  Développement Web (SaaS, Dashboards)
        2.  Développement Mobile (iOS, Android, React Native)
        3.  Automatisation (n8n, Make)
        4.  Intelligence Artificielle (Agents, RAG)
        5.  DevOps & Cloud (Docker, CI/CD)
        6.  Formation & Coaching (Mentoring)
    - **Design**: Staggered grid animations, hover effects on cards.

3.  **Portfolio (`/app/portfolio/page.tsx`)**:
    - **Features**: Filterable Grid (Web App, Automation, AI).
    - **Animation**: `AnimatePresence` for smooth filtering transitions.
    - **Cards**: `ProjectCard` with hover overlay and "View Project" CTA.

4.  **À Propos (`/app/a-propos/page.tsx`)**:
    - **Concept**: Storytelling focused. "Global Partner" positioning (no geo restrictions).
    - **Values**: Grid of 6 core values (Passion, Reactivity, Vision...) with custom icons.
    - **Content**: Warm, engaging copy about building bridges to the future.

5.  **Booking (`/app/book/page.tsx`)**:
    - Simple wrapper for Calendly/Appointment booking.

## 5. Key Components (Reusables)
- **`components/ui/logo.tsx`**: The robust SVG component used in Navbar and Footer to avoid loader issues.
- **`components/ui/button.tsx`**: Shadcn button with variants.
- **`components/ui/card.tsx`**: Versatile container used in Services, Portfolio, Values.
- **`components/ui/badge.tsx`**: Used for Tech Stack and Tags.

## 6. Current Status
- **Ready**: Design overhaul complete (Warmth, Animations, Branding Consistency).
- **Next Steps**:
  - Real content integration (replace placeholders).
  - SEO Fine-tuning (Metadata).
  - Deployment.
