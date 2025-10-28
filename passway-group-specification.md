# PassWay Group - Boutique Football Agency - Complete Specification

## Project Overview

Build a sophisticated, minimal website for **PassWay Group** with the **Agent Black** design system. The entire site should embody stealth sophistication and confident minimalism—like a high-powered talent agent's secret weapon. The website showcases elite football talent representation with power, discretion, and professionalism.

**Client Brand:** #D4A510 (Gold), #000000 (Black), and #FFFFFF (White) from existing brand

**Tagline:** "The boutique agency for Elite talents!"

---

## Technology Stack

### Core Framework

- **React 18.3+** with Hooks and TypeScript
- **TypeScript 5.3+** (strict mode enabled)
- **Vite 5+** (build tool and dev server)
- **React Router DOM 6+** (for navigation)

### Styling & Animation

- **Tailwind CSS 3.4+** (utility-first styling)
- **Framer Motion 11+** (luxury animations with expo-out easing)
- Custom CSS for specific Agent Black signature elements

### State Management

- **Zustand 4+** (lightweight state management for UI states)
- **React Context** (for theme and navigation state)

### Type Safety

- **TypeScript** with strict configuration
- **Zod** (runtime type validation for forms)

### Form Handling

- **React Hook Form 7+** (performant form management)
- **Formspree** or **EmailJS** (contact form backend)

### Fonts

- **Space Grotesk** (Bold 700, Medium 500 - Display and Headers)
- **IBM Plex Sans** (Regular 400, Light 300 - Body text)
- **JetBrains Mono** (Medium 500 - Numerical data and stats)

### Additional Libraries

- **lucide-react** (minimal icons for navigation)
- **react-intersection-observer** (scroll-triggered fade animations)
- **clsx** (conditional class names)
- **framer-motion** (smooth luxury animations)

### Development Tools

- **ESLint** (code quality)
- **Prettier** (code formatting)
- **TypeScript ESLint** (TypeScript-specific linting)

### Deployment

- **Vercel** (primary recommendation - automatic deployments)
- Alternative: **Netlify**

---

## Design System - Agent Black

### Core Philosophy

"Stealth sophistication. Like a high-powered talent agent's secret weapon—minimal, powerful, gets deals done."

### Color Palette

```css
/* Primary Brand Colors */
--accent-gold: #D4A510;         /* Used sparingly for power moments */
--void-black: #000000;          /* 90% of interface, confident minimalism */
--pure-white: #FFFFFF;          /* Stark contrast, transparency */

/* Elevation & Depth */
--charcoal: #0D0D0D;            /* Subtle card elevation */
--smoke: #1F1F1F;               /* Hover states, layering */
--ghost-white: #F8F8F8;         /* Text on black, accessibility */

/* Utility Colors */
--success: #D4A510;             /* Success states, achievements */
--error: #DC3545;               /* Error states (sparingly used) */
--focus: #D4A510;               /* Focus indicators */
```

**Psychological Reasoning:**
- Near-monochrome creates focus and removes distraction
- Gold becomes incredibly powerful when used sparingly—every instance demands attention
- Black dominant palette signals confidence and discretion
- High contrast ensures accessibility and professional appearance
- Minimal color variation reduces cognitive load, allowing content to lead

### Typography

#### Font Families

**Display Font:** Space Grotesk (Bold 700, Medium 500)
- Used for headlines, navigation, CTAs
- Geometric sans-serif with contemporary feel
- Available via Google Fonts

**Body Font:** IBM Plex Sans (Regular 400, Light 300)
- Used for body text, descriptions, UI elements
- Excellent readability, professional appearance
- Available via Google Fonts

**Accent Font:** JetBrains Mono (Medium 500)
- Used exclusively for numerical data, statistics
- Monospace provides precision and data integrity feel
- Available via Google Fonts

#### Type Scale

```css
/* Headers */
--h1: 64px;          /* Hero headlines */
--h2: 48px;          /* Section titles */
--h3: 32px;          /* Subsections */
--h4: 24px;          /* Card titles */
--h5: 20px;          /* Small headers */

/* Body */
--body-large: 18px;  /* Intro paragraphs */
--body: 16px;        /* Standard text */
--body-small: 14px;  /* Secondary text */
--caption: 13px;     /* Metadata */
--tiny: 11px;        /* Fine print */

/* Line Heights */
--lh-display: 1.1;   /* Tight for headers */
--lh-body: 1.75;     /* Comfortable reading */
--lh-compact: 1.4;   /* Dense information */

/* Letter Spacing */
--ls-tight: -0.02em; /* Headers */
--ls-normal: 0;      /* Body */
--ls-wide: 0.05em;   /* Small caps, labels */
```

#### Font Loading Strategy

```html
<!-- Google Fonts with display=swap -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@300;400&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

#### Typography Hierarchy Rules

1. **Single font family** (Space Grotesk) for brand consistency in headers
2. **Monospace only** for numerical data and statistics
3. **Weight variations** create hierarchy, not dramatic size jumps
4. **All caps avoided** except for small labels and navigation
5. **Color for hierarchy** - white primary, ghost-white secondary, gold for emphasis

### Spacing System

- **Base Unit:** 16px (generous breathing room)
- **Scale:** 16, 32, 64, 128px (exponential, bold gaps)
- **Grid:** Asymmetric 3-column layout (1:2:1 ratio)
  - Gutters: 32px
  - Max-width: 1280px
  - Breakpoints: 375px, 768px, 1024px, 1280px, 1920px
- **Section Padding:** 
  - Desktop: 128px vertical
  - Tablet: 96px vertical
  - Mobile: 64px vertical
- **Component Padding:**
  - Standard: 32px
  - Compact: 16px (on cards - content floats)
  - Generous: 64px (feature sections)

### Motion Principles

**Core Philosophy:** Smooth luxury with minimal motion. Fade and translate-y only. Everything feels deliberate and sophisticated.

#### Timing Functions

```css
/* Primary Easing - Expo Out for smooth luxury */
--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Specific Animations */
--timing-instant: 150ms;  /* Button presses, immediate feedback */
--timing-quick: 350ms;    /* Hover states, micro-interactions */
--timing-normal: 500ms;   /* Content reveals, scrolls */
--timing-slow: 800ms;     /* Page transitions, large elements */
```

#### Animation Types

**1. Card Hover Effect**
```css
transform: translateY(-12px);
border: 1px solid rgba(255, 255, 255, 0.1);
transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
            border 350ms cubic-bezier(0.16, 1, 0.3, 1);
```

**2. Gold Selector Line**
- 4px thick, 40px wide gold line
- Appears to left of active/hovered items
- Slides in from left (200ms, ease-out)
```css
transform: translateX(-48px);
opacity: 0;
/* Active state */
transform: translateX(0);
opacity: 1;
transition: all 200ms ease-out;
```

**3. Page Transitions**
- Current content fades to black (400ms)
- New content fades in from black (400ms)
- Total transition: 800ms
- No sliding or complex transforms

**4. Scroll Animations**
- Fade-in only (no slide, no scale)
- Elements transition from opacity 0 to 1
- Duration: 500ms
- Stagger delay: 100ms between elements
- IntersectionObserver threshold: 0.2

**5. Gold Underline CTA Effect**
```css
/* Signature move: underline grows from center outward */
.cta-button::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #D4A510;
  transform: translateX(-50%);
  transition: width 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-button:hover::after {
  width: 100%;
}
```

**6. Loading States**
- Minimal spinner: rotating gold ring
- 8px diameter, 2px stroke
- Rotation: 1s linear infinite
- No complex animations

---

## Signature Visual Elements

### 1. Gold Selector Line

**Concept:** A 4px thick, 40px wide gold line that appears to the left of active/hovered navigation items and list elements.

**Implementation:**
```tsx
// GoldSelector.tsx
interface GoldSelectorProps {
  isActive: boolean;
}

const GoldSelector: React.FC<GoldSelectorProps> = ({ isActive }) => {
  return (
    <motion.div
      className="absolute left-0 top-1/2 h-1 w-10 bg-accent-gold"
      initial={{ x: -48, opacity: 0 }}
      animate={{
        x: isActive ? 0 : -48,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ transform: 'translateY(-50%)' }}
    />
  );
};
```

### 2. Floating Card Effect

**Concept:** Thin white outlines (1px) on black cards create a floating effect against the black background.

**Implementation:**
```css
.floating-card {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 16px;
  transition: border 350ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.floating-card:hover {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(-12px);
}
```

### 3. Gold Dot Accent

**Concept:** Single gold dot (8px diameter) used as bullet point and visual accent.

**Implementation:**
```tsx
const GoldDot: React.FC = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-accent-gold mr-3" />
);
```

### 4. Minimal Focus Indicators

**Concept:** Gold outline on focus for accessibility, minimal but clear.

```css
*:focus-visible {
  outline: 2px solid #D4A510;
  outline-offset: 4px;
}
```

---

## Site Structure & Content

### Navigation

**Type:** Fixed header, always visible

**Structure:**
- Logo: PassWay Group (left side)
- Menu Items: Home, Players, About, Contact (right side)
- Mobile: Hamburger menu (simple overlay, no fancy animations)

**Styling:**
```css
/* Desktop Navigation */
background: rgba(0, 0, 0, 0.95);
backdrop-filter: blur(10px);
border-bottom: 1px solid rgba(255, 255, 255, 0.05);
padding: 24px 48px;

/* Navigation Links */
font-family: Space Grotesk;
font-size: 14px;
font-weight: 500;
letter-spacing: 0.05em;
color: #F8F8F8;

/* Hover State */
color: #D4A510;
transition: color 350ms cubic-bezier(0.16, 1, 0.3, 1);
```

**Mobile Navigation:**
- Hamburger icon (top-right)
- Full-screen overlay (background: #000000)
- Menu items: large text, centered, stacked
- Fade-in transition (350ms)

**Scroll Behavior:**
- Always has same appearance (no changes on scroll)
- Logo remains 40px height (no scaling)

---

### 1. Hero Section

**Content:**
- **Main Headline:** "Elite Talent.\nElite Representation." (Space Grotesk Bold, 64px, line-height 1.1)
- **Tagline:** "The boutique agency for Elite talents!" (IBM Plex Sans Regular, 18px, ghost-white)
- **Description:** Brief 2-3 sentence description of PassWay Group's approach (IBM Plex Sans Light, 16px)
- **CTA Button:** "Discover Our Players" (Primary gold button)
- **Secondary CTA:** "Partner With Us" (Outline button)

**Design:**
- Height: 100vh (full viewport)
- Background: Void black (#000000)
- Layout: Centered content, asymmetric
- Gold accent line: 4px vertical line, 128px tall, positioned left of headline
- Minimal decoration: single gold dot above headline

**Typography Specifics:**
```css
.hero-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.hero-tagline {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.75;
  color: #F8F8F8;
  margin-top: 24px;
}
```

**Interactions:**
- Fade-in animation on page load (500ms delay)
- No parallax (too complex for Agent Black philosophy)
- CTAs have gold underline grow effect on hover
- Minimal mouse interactions

**Responsive:**
- Mobile: Headline 48px, centered
- Tablet: Headline 56px
- Desktop: Headline 64px

---

### 2. Who We Are Section

**Content:**
- **Heading:** "Who We Are" (Space Grotesk Bold, 48px)
- **Body:** 3-4 paragraphs about PassWay Group's philosophy, approach, and values (IBM Plex Sans Regular, 16px)
- **Key Stats:** (JetBrains Mono Medium, 48px for numbers)
  - Years of Experience
  - Elite Players Represented
  - Successful Transfers
  - Partner Clubs

**Design:**
- Background: Void black (#000000)
- Layout: Two-column on desktop (text left, stats right)
- Gold selector line appears next to heading
- Stats displayed in minimalist cards (charcoal background)

**Stats Card Structure:**
```tsx
interface Stat {
  number: string;
  label: string;
}

const StatCard: React.FC<Stat> = ({ number, label }) => (
  <div className="floating-card">
    <div className="font-mono text-5xl text-white mb-2">{number}</div>
    <div className="text-sm text-ghost-white uppercase tracking-wide">{label}</div>
    <GoldDot />
  </div>
);
```

**Responsive:**
- Mobile: Single column, stats stacked
- Tablet: Single column, stats grid 2x2
- Desktop: Two-column layout

---

### 3. Elite Players Section

**Content:**
- **Heading:** "Elite Players" (Space Grotesk Bold, 48px)
- **Subheading:** "Representing the finest football talent" (IBM Plex Sans Regular, 18px, ghost-white)
- **Player Cards:** Showcase of represented players

**Player Card Design:**

Each card displays:
- Player photo (grayscale with subtle gold tint overlay on hover)
- Player name (Space Grotesk Medium, 24px)
- Position (IBM Plex Sans Light, 14px, uppercase)
- Current club (IBM Plex Sans Light, 14px)
- Gold dot accent

**Card Styling:**
```css
.player-card {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0;
  overflow: hidden;
  transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.player-card:hover {
  transform: translateY(-12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.player-card img {
  filter: grayscale(100%);
  transition: filter 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.player-card:hover img {
  filter: grayscale(0%) sepia(20%) hue-rotate(30deg) saturate(1.2);
}
```

**Layout:**
- Desktop: 3-column grid, 32px gap
- Tablet: 2-column grid
- Mobile: Single column

**Content Padding:**
- Photo: No padding (full-bleed)
- Text content: 24px padding

---

### 4. Our Services Section

**Content:**
- **Heading:** "Our Services" (Space Grotesk Bold, 48px)
- **Service Items:** (3-4 key services)

Each service includes:
- Gold dot bullet
- Service title (Space Grotesk Medium, 20px)
- Description (IBM Plex Sans Regular, 16px)

**Services List:**
1. **Career Management**
   - Strategic career planning and guidance for elite athletes
   
2. **Transfer Negotiations**
   - Expert negotiation with clubs worldwide
   
3. **Brand Development**
   - Building and protecting player brands
   
4. **Legal & Contract Services**
   - Comprehensive legal support and contract review

**Design:**
- Background: Charcoal (#0D0D0D)
- Layout: Single column, left-aligned
- Gold selector line appears next to active/hovered service
- Generous spacing: 64px between services

**Interaction:**
- Gold selector line slides in on hover
- Service title turns gold on hover
- Minimal, professional animations

---

### 5. Why Choose PassWay Section

**Content:**
- **Heading:** "Why Choose PassWay" (Space Grotesk Bold, 48px)
- **Value Propositions:** (3 key differentiators)

Each proposition:
- Large number (01, 02, 03) in gold (JetBrains Mono, 72px, 20% opacity)
- Title (Space Grotesk Medium, 24px)
- Description (IBM Plex Sans Regular, 16px)

**Three Value Props:**
1. **Boutique Focus**
   - Limited roster ensures personalized attention to each player
   
2. **Elite Network**
   - Direct relationships with top clubs and decision-makers
   
3. **Proven Track Record**
   - History of successful transfers and career growth

**Design:**
- Background: Void black (#000000)
- Layout: Three columns on desktop, stacked on mobile
- Numbers positioned as background elements
- Floating cards with minimal borders

---

### 6. Testimonials Section (Optional)

**Content:**
- **Heading:** "What They Say" (Space Grotesk Bold, 48px)
- **Testimonial Cards:** 2-3 testimonials from players or clubs

**Testimonial Card:**
```tsx
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  club?: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role, club }) => (
  <div className="floating-card">
    <GoldDot />
    <blockquote className="text-lg text-white italic mb-6">
      "{quote}"
    </blockquote>
    <div className="text-sm text-ghost-white">
      <div className="font-medium">{author}</div>
      <div className="text-xs mt-1">{role}{club && ` · ${club}`}</div>
    </div>
  </div>
);
```

**Design:**
- Background: Charcoal (#0D0D0D)
- Layout: Horizontal scroll on mobile, grid on desktop
- Minimal quote styling (no large quotation marks)
- Gold dot accent at top of each card

---

### 7. Contact Section

**Content:**
- **Heading:** "Let's Talk" (Space Grotesk Bold, 48px)
- **Subheading:** "Get in touch to discuss representation" (IBM Plex Sans Regular, 18px)
- **Contact Form:**
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Message (required)
  - Submit button: "Send Message"
- **Contact Information:**
  - Email address
  - Phone number
  - Office location (if applicable)
  - Social media links (LinkedIn, Instagram if relevant)

**Form Design:**

```css
/* Input Fields */
.form-input {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  padding: 16px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  transition: border 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.form-input:focus {
  outline: none;
  border: 1px solid #D4A510;
}

.form-input::placeholder {
  color: rgba(248, 248, 248, 0.3);
}

/* Submit Button */
.submit-button {
  background: #D4A510;
  color: #000000;
  padding: 16px 48px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.submit-button:hover {
  background: #F5E6C3;
  transform: translateY(-2px);
}
```

**Layout:**
- Desktop: Two-column (form left, info right)
- Mobile: Single column, stacked

**Form Validation:**
- Real-time validation with error messages
- Error states: red border (subtle)
- Success state: gold border
- Clear, helpful error messages (IBM Plex Sans Light, 13px)

**Interaction:**
- Gold underline effect on focused inputs
- Submit button has hover lift effect
- Success message displays after submission
- Loading state: minimal spinner on button

---

### 8. Footer

**Content:**
- **Logo:** PassWay Group
- **Quick Links:** Home, Players, About, Contact
- **Social Media:** LinkedIn, Instagram icons (if applicable)
- **Legal:** Privacy Policy, Terms of Service
- **Copyright:** © 2024 PassWay Group. All rights reserved.

**Design:**
```css
.footer {
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 64px 48px 32px;
}
```

**Layout:**
- Desktop: Three columns (logo/tagline | links | social/legal)
- Mobile: Single column, stacked

**Styling:**
- All text: IBM Plex Sans Light, 14px, ghost-white
- Links have gold hover state
- Minimal, clean, professional

---

## Component Architecture

### Core Components

```typescript
// src/components/

// Layout
├── Navigation/
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   └── NavLink.tsx
├── Footer/
│   └── Footer.tsx

// UI Elements
├── Button/
│   ├── PrimaryButton.tsx
│   └── OutlineButton.tsx
├── Card/
│   ├── FloatingCard.tsx
│   ├── PlayerCard.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── GoldSelector/
│   └── GoldSelector.tsx
├── GoldDot/
│   └── GoldDot.tsx

// Sections
├── Hero/
│   └── Hero.tsx
├── WhoWeAre/
│   ├── WhoWeAre.tsx
│   └── StatCard.tsx
├── ElitePlayers/
│   └── ElitePlayers.tsx
├── Services/
│   └── Services.tsx
├── WhyChoose/
│   └── WhyChoose.tsx
├── Testimonials/
│   └── Testimonials.tsx
├── Contact/
│   ├── Contact.tsx
│   └── ContactForm.tsx

// Utilities
├── ScrollReveal/
│   └── ScrollReveal.tsx
├── PageTransition/
│   └── PageTransition.tsx
```

### TypeScript Interfaces

```typescript
// src/types/index.ts

export interface Player {
  id: string;
  name: string;
  position: string;
  club: string;
  nationality: string;
  imageUrl: string;
  profileUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  club?: string;
}

export interface ValueProposition {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
```

---

## Tailwind Configuration

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-gold': '#D4A510',
        'void-black': '#000000',
        'pure-white': '#FFFFFF',
        'charcoal': '#0D0D0D',
        'smoke': '#1F1F1F',
        'ghost-white': '#F8F8F8',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['IBM Plex Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': '64px',
        'h2': '48px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'body-large': '18px',
        'body': '16px',
        'body-small': '14px',
        'caption': '13px',
        'tiny': '11px',
      },
      spacing: {
        '128': '128px',
        '96': '96px',
        '64': '64px',
        '48': '48px',
        '32': '32px',
        '24': '24px',
        '16': '16px',
        '8': '8px',
      },
      maxWidth: {
        'site': '1280px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'instant': '150ms',
        'quick': '350ms',
        'normal': '500ms',
        'slow': '800ms',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.05em',
      },
      lineHeight: {
        'display': '1.1',
        'body': '1.75',
        'compact': '1.4',
      },
    },
  },
  plugins: [],
}
```

---

## Framer Motion Variants

```typescript
// src/utils/animations.ts

import { Variants } from 'framer-motion';

// Fade in animation for scroll reveals
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // expo-out
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card hover animation
export const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -12,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Gold selector slide-in
export const goldSelector: Variants = {
  hidden: { x: -48, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

---

## File Structure

```
passway-group/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── players/
│   │   └── og-image.jpg
│   └── fonts/
│       └── (self-hosted fonts if needed)
├── src/
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Footer/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── GoldSelector/
│   │   ├── GoldDot/
│   │   ├── Hero/
│   │   ├── WhoWeAre/
│   │   ├── ElitePlayers/
│   │   ├── Services/
│   │   ├── WhyChoose/
│   │   ├── Testimonials/
│   │   ├── Contact/
│   │   ├── ScrollReveal/
│   │   └── PageTransition/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Players.tsx (optional)
│   │   ├── About.tsx (optional)
│   │   └── Contact.tsx (optional)
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── animations.ts
│   │   └── constants.ts
│   ├── data/
│   │   ├── players.ts
│   │   ├── services.ts
│   │   ├── stats.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useFormValidation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── postcss.config.js
└── README.md
```

---

## Data Structure Examples

### Players Data

```typescript
// src/data/players.ts

export const players: Player[] = [
  {
    id: '1',
    name: 'Player Name',
    position: 'Forward',
    club: 'FC Example',
    nationality: 'Country',
    imageUrl: '/images/players/player-1.jpg',
    profileUrl: '/players/player-name',
  },
  // Add more players...
];
```

### Services Data

```typescript
// src/data/services.ts

export const services: Service[] = [
  {
    id: '1',
    title: 'Career Management',
    description: 'Strategic career planning and guidance for elite athletes',
  },
  {
    id: '2',
    title: 'Transfer Negotiations',
    description: 'Expert negotiation with clubs worldwide',
  },
  {
    id: '3',
    title: 'Brand Development',
    description: 'Building and protecting player brands',
  },
  {
    id: '4',
    title: 'Legal & Contract Services',
    description: 'Comprehensive legal support and contract review',
  },
];
```

### Stats Data

```typescript
// src/data/stats.ts

export const stats: Stat[] = [
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Elite Players' },
  { number: '200+', label: 'Successful Transfers' },
  { number: '30+', label: 'Partner Clubs' },
];
```

### Value Propositions Data

```typescript
// src/data/valueProps.ts

export const valuePropositions: ValueProposition[] = [
  {
    id: '1',
    number: '01',
    title: 'Boutique Focus',
    description: 'Limited roster ensures personalized attention to each player',
  },
  {
    id: '2',
    number: '02',
    title: 'Elite Network',
    description: 'Direct relationships with top clubs and decision-makers',
  },
  {
    id: '3',
    number: '03',
    title: 'Proven Track Record',
    description: 'History of successful transfers and career growth',
  },
];
```

---

## Key Component Examples

### PrimaryButton Component

```typescript
// src/components/Button/PrimaryButton.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`
        relative px-12 py-4 bg-accent-gold text-void-black 
        font-display font-medium text-body overflow-hidden
        transition-all duration-quick ease-expo-out
        hover:bg-opacity-90 hover:-translate-y-0.5
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-1/2 h-0.5 bg-void-black"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: 'translateX(-50%)' }}
      />
    </motion.button>
  );
};
```

### FloatingCard Component

```typescript
// src/components/Card/FloatingCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../../utils/animations';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'compact' | 'standard';
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  padding = 'compact',
}) => {
  const paddingClasses = {
    none: '',
    compact: 'p-4',
    standard: 'p-8',
  };

  return (
    <motion.div
      className={`
        bg-charcoal border border-white/5
        transition-all duration-quick ease-expo-out
        hover:border-white/10
        ${paddingClasses[padding]}
        ${className}
      `}
      variants={cardHover}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
};
```

### GoldSelector Component

```typescript
// src/components/GoldSelector/GoldSelector.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface GoldSelectorProps {
  isActive: boolean;
}

export const GoldSelector: React.FC<GoldSelectorProps> = ({ isActive }) => {
  return (
    <motion.div
      className="absolute left-0 top-1/2 h-1 w-10 bg-accent-gold"
      initial={{ x: -48, opacity: 0 }}
      animate={{
        x: isActive ? 0 : -48,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ transform: 'translateY(-50%)' }}
    />
  );
};
```

### ScrollReveal Component

```typescript
// src/components/ScrollReveal/ScrollReveal.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../../utils/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
```

### PlayerCard Component

```typescript
// src/components/Card/PlayerCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../../types';
import { GoldDot } from '../GoldDot/GoldDot';
import { cardHover } from '../../utils/animations';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <motion.div
      className="bg-charcoal border border-white/5 overflow-hidden
                 transition-all duration-quick ease-expo-out
                 hover:border-white/10 cursor-pointer"
      variants={cardHover}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={player.imageUrl}
          alt={player.name}
          className="w-full h-80 object-cover grayscale transition-all duration-quick"
          whileHover={{
            filter: 'grayscale(0%) sepia(20%) hue-rotate(30deg) saturate(1.2)',
          }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <GoldDot />
          <span className="text-caption text-ghost-white uppercase tracking-wide">
            {player.position}
          </span>
        </div>
        
        <h3 className="font-display font-medium text-h4 text-white mb-2">
          {player.name}
        </h3>
        
        <p className="font-body text-body-small text-ghost-white">
          {player.club}
        </p>
      </div>
    </motion.div>
  );
};
```

---

## Responsive Design

### Breakpoint Strategy

```typescript
// src/utils/constants.ts

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1920,
};
```

### Responsive Typography

```css
/* Mobile First Approach */

/* Base (Mobile) */
.hero-headline { font-size: 48px; }
.section-title { font-size: 32px; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .hero-headline { font-size: 56px; }
  .section-title { font-size: 40px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .hero-headline { font-size: 64px; }
  .section-title { font-size: 48px; }
}
```

### Responsive Grid Layouts

```typescript
// Tailwind responsive classes

// Players Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Player cards */}
</div>

// Services List
<div className="flex flex-col space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
  {/* Service items */}
</div>

// Stats Grid
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {/* Stat cards */}
</div>
```

### Mobile Navigation

```typescript
// src/components/Navigation/MobileMenu.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-void-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>
          
          <nav className="flex flex-col items-center space-y-8">
            {['Home', 'Players', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display text-h3 text-white hover:text-accent-gold
                           transition-colors duration-quick"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={onClose}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

---

## Form Handling

### Contact Form with Validation

```typescript
// src/components/Contact/ContactForm.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PrimaryButton } from '../Button/PrimaryButton';
import { ContactFormData } from '../../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send form data to backend (Formspree, EmailJS, etc.)
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <input
          {...register('name')}
          type="text"
          placeholder="Your Name"
          className={`
            w-full px-4 py-4 bg-charcoal border text-white
            font-body text-body placeholder:text-ghost-white/30
            transition-all duration-quick focus:outline-none
            ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-accent-gold'}
          `}
        />
        {errors.name && (
          <p className="mt-2 text-caption text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Your Email"
          className={`
            w-full px-4 py-4 bg-charcoal border text-white
            font-body text-body placeholder:text-ghost-white/30
            transition-all duration-quick focus:outline-none
            ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-accent-gold'}
          `}
        />
        {errors.email && (
          <p className="mt-2 text-caption text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Your Phone (Optional)"
          className="w-full px-4 py-4 bg-charcoal border border-white/10 text-white
                     font-body text-body placeholder:text-ghost-white/30
                     transition-all duration-quick focus:outline-none focus:border-accent-gold"
        />
      </div>

      {/* Message Field */}
      <div>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="Your Message"
          className={`
            w-full px-4 py-4 bg-charcoal border text-white
            font-body text-body placeholder:text-ghost-white/30
            transition-all duration-quick focus:outline-none resize-none
            ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-accent-gold'}
          `}
        />
        {errors.message && (
          <p className="mt-2 text-caption text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <PrimaryButton type="submit" className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </PrimaryButton>
    </form>
  );
};
```

---

## SEO & Meta Tags

### HTML Head Configuration

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>PassWay Group - Boutique Football Agency</title>
    <meta name="title" content="PassWay Group - Boutique Football Agency" />
    <meta name="description" content="The boutique agency for Elite talents! Representing the finest football players with personalized career management and expert transfer negotiations." />
    <meta name="keywords" content="football agency, soccer agent, player representation, transfer negotiations, sports management, elite football players" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://passwaygroup.com/" />
    <meta property="og:title" content="PassWay Group - Boutique Football Agency" />
    <meta property="og:description" content="The boutique agency for Elite talents! Representing the finest football players with personalized career management." />
    <meta property="og:image" content="https://passwaygroup.com/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://passwaygroup.com/" />
    <meta property="twitter:title" content="PassWay Group - Boutique Football Agency" />
    <meta property="twitter:description" content="The boutique agency for Elite talents!" />
    <meta property="twitter:image" content="https://passwaygroup.com/og-image.jpg" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@300;400&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Performance Optimization

### Image Optimization

```typescript
// Use WebP format with fallbacks
<picture>
  <source srcSet="/images/player.webp" type="image/webp" />
  <img src="/images/player.jpg" alt="Player Name" />
</picture>

// Lazy loading for images below fold
<img
  src="/images/player.jpg"
  alt="Player Name"
  loading="lazy"
  decoding="async"
/>
```

### Code Splitting

```typescript
// src/App.tsx

import { lazy, Suspense } from 'react';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Players = lazy(() => import('./pages/Players'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback
const Loading = () => (
  <div className="min-h-screen bg-void-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Routes */}
    </Suspense>
  );
}
```

### Font Loading Strategy

```css
/* src/index.css */

/* Font loading optimization */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500 700;
  font-display: swap;
  src: url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
}

/* Prevent FOUT (Flash of Unstyled Text) */
.font-loaded {
  font-family: 'Space Grotesk', sans-serif;
}
```

---

## Accessibility

### Keyboard Navigation

```typescript
// Ensure all interactive elements are keyboard accessible

<button
  className="..."
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click Me
</button>
```

### Focus Indicators

```css
/* Global focus styles */
*:focus-visible {
  outline: 2px solid #D4A510;
  outline-offset: 4px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #D4A510;
  color: #000000;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### ARIA Labels

```typescript
// Navigation with ARIA
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="#home" aria-label="Navigate to home section">Home</a>
    </li>
  </ul>
</nav>

// Form fields with labels
<label htmlFor="name" className="sr-only">
  Your Name
</label>
<input
  id="name"
  type="text"
  placeholder="Your Name"
  aria-required="true"
  aria-invalid={errors.name ? 'true' : 'false'}
/>
```

### Screen Reader Text

```css
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Testing Checklist

### Functionality Testing

- [ ] All navigation links work correctly
- [ ] Form validation works properly
- [ ] Form submission successful
- [ ] Mobile menu opens/closes correctly
- [ ] All animations perform smoothly
- [ ] Images load correctly
- [ ] External links open in new tabs

### Responsive Testing

- [ ] Test on mobile devices (375px - 767px)
- [ ] Test on tablets (768px - 1023px)
- [ ] Test on laptops (1024px - 1279px)
- [ ] Test on desktops (1280px+)
- [ ] Test on ultra-wide screens (1920px+)
- [ ] Portrait and landscape orientations

### Performance Testing

- [ ] Lighthouse score > 90 for Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.0s
- [ ] Total page size < 3MB
- [ ] Images optimized (WebP with fallbacks)
- [ ] Fonts load efficiently

### Accessibility Testing

- [ ] Screen reader compatibility (NVDA/JAWS)
- [ ] Keyboard navigation works completely
- [ ] Color contrast ratio meets WCAG AA standards
- [ ] Focus indicators visible on all interactive elements
- [ ] All images have appropriate alt text
- [ ] Forms have proper labels and error messages
- [ ] ARIA attributes used correctly

### Browser Testing

- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS 12+)
- [ ] Chrome Mobile (Android)

### SEO Testing

- [ ] Meta tags present and accurate
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Structured data (JSON-LD) added

---

## Deployment

### Build Process

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type checking
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

```bash
# .env.example

# Formspree or EmailJS
VITE_FORMSPREE_URL=https://formspree.io/f/your-form-id
# OR
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site URL
VITE_SITE_URL=https://passwaygroup.com
```

### Vercel Deployment

```json
// vercel.json

{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Package.json Scripts

```json
{
  "name": "passway-group",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.4",
    "zustand": "^4.5.0",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "react-intersection-observer": "^9.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.6"
  }
}
```

---

## TypeScript Configuration

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## Maintenance & Updates

### Regular Tasks

**Weekly:**
- Monitor form submissions
- Check for broken links
- Review site performance (Lighthouse)
- Monitor error logs

**Monthly:**
- Update npm dependencies
- Review analytics data
- Add new players/content
- Update testimonials if available
- Review and optimize images

**Quarterly:**
- Full accessibility audit
- Security audit
- Backup entire codebase
- Review color contrast
- Update meta descriptions if needed

### Update Process

```bash
# Check for outdated packages
npm outdated

# Update all dependencies to latest compatible versions
npm update

# Or update specific package
npm install package-name@latest

# After updates, always test thoroughly
npm run type-check
npm run lint
npm run build
npm run preview
```

---

## Content Management

### Static Content Structure

```typescript
// src/data/content.ts

export const content = {
  hero: {
    headline: 'Elite Talent.\nElite Representation.',
    tagline: 'The boutique agency for Elite talents!',
    description: 'PassWay Group represents the finest football talent with personalized attention and expert negotiation.',
  },
  about: {
    heading: 'Who We Are',
    paragraphs: [
      'PassWay Group is a boutique football agency dedicated to...',
      'Our approach combines...',
      'With a proven track record...',
    ],
  },
  services: {
    heading: 'Our Services',
    items: [
      // Service items
    ],
  },
  // ... more content
};
```

### Adding New Players

```typescript
// To add a new player:

// 1. Add player image to public/images/players/
// 2. Update src/data/players.ts

export const players: Player[] = [
  // ... existing players
  {
    id: 'new-player-id',
    name: 'New Player Name',
    position: 'Midfielder',
    club: 'FC Club Name',
    nationality: 'Country',
    imageUrl: '/images/players/new-player.jpg',
  },
];
```

---

## Known Limitations

1. **Animation Performance on Low-End Devices**
   - Fallback: Disable complex animations on mobile
   - Implementation: Use `prefers-reduced-motion` media query

2. **Font Loading Flash**
   - Mitigation: Use `font-display: swap` and preload key fonts
   - Consider system font fallback stack

3. **Gold Color Accessibility**
   - Gold (#D4A510) on black backgrounds meets WCAG AA
   - Avoid using gold on white backgrounds
   - Always test contrast ratios

---

## Support & Documentation

### Browser Support

- **Chrome:** Last 2 versions
- **Firefox:** Last 2 versions
- **Safari:** Last 2 versions (including iOS Safari 12+)
- **Edge:** Last 2 versions
- **Mobile browsers:** iOS Safari 12+, Chrome Android 90+

### Getting Help

- **Technical Issues:** Create issue on GitHub repository
- **Design Questions:** Contact design team
- **Content Updates:** Contact content manager
- **Urgent Bugs:** Use priority support channel

---

## Design Inspiration Sources

### Websites
- Balenciaga.com (minimalist luxury)
- Vercel.com (developer elegance)
- Apple Pro product pages (restrained power)
- Stripe.com (professional refinement)

### Design Systems
- Vercel Design System (minimal sophistication)
- Linear Design System (refined interactions)
- Stripe Design System (professional clarity)

---

## Credits & Licenses

### Open Source Libraries
- React (MIT License)
- Framer Motion (MIT License)
- Tailwind CSS (MIT License)
- Lucide Icons (ISC License)
- React Hook Form (MIT License)
- Zod (MIT License)
- See complete list in package.json

### Fonts
- Space Grotesk (Open Font License)
- IBM Plex Sans (Open Font License)
- JetBrains Mono (Apache License 2.0)

---

## Appendix

### Color Usage Guide

| Color | Primary Use | Secondary Use | Don't Use For |
|-------|-------------|---------------|---------------|
| Accent Gold (#D4A510) | CTAs, Accents, Focus states | Hover effects, Active states | Body text, Large backgrounds |
| Void Black (#000000) | Backgrounds, Primary canvas | N/A | Body text (use ghost-white) |
| Pure White (#FFFFFF) | Headings, High contrast text | Borders (low opacity) | Large text blocks |
| Ghost White (#F8F8F8) | Body text on black | Secondary text | Headings |
| Charcoal (#0D0D0D) | Card backgrounds, Elevation | Hover states | Primary backgrounds |

### Typography Usage Guide

| Font | Primary Use | Size Range | Weight |
|------|-------------|------------|--------|
| Space Grotesk | Headlines, Navigation, CTAs | 20px - 64px | 500, 700 |
| IBM Plex Sans | Body text, UI elements | 13px - 18px | 300, 400 |
| JetBrains Mono | Numbers, Statistics, Data | 14px - 72px | 500 |

### Animation Duration Guide

| Element Type | Duration | Easing |
|--------------|----------|--------|
| Button hover | 350ms | expo-out |
| Card hover | 350ms | expo-out |
| Page transition | 800ms | expo-out |
| Scroll reveal | 500ms | expo-out |
| Gold selector | 200ms | ease-out |
| Form focus | 350ms | expo-out |

### Spacing Guidelines

| Element | Vertical | Horizontal |
|---------|----------|------------|
| Sections | 128px (desktop), 96px (tablet), 64px (mobile) | 48px |
| Cards | 32px internal padding | 32px gap between |
| Paragraphs | 24px margin-bottom | N/A |
| Headers | 16px margin-bottom | N/A |
| Buttons | 16px padding | 48px padding |

---

## Final Implementation Notes

### Critical Success Factors

1. **Minimalism is Key** - Every element must earn its place
2. **Gold Sparingly** - Let gold have maximum impact by using it minimally
3. **Performance First** - Site must be fast, animations smooth
4. **Accessibility Always** - WCAG AA compliance minimum
5. **TypeScript Strict** - No compromises on type safety
6. **Mobile Experience** - Mobile must be equally sophisticated

### Launch Readiness Checklist

**Before Launch:**
- [ ] All content finalized and proofread
- [ ] Player photos optimized and uploaded
- [ ] Contact form tested and working
- [ ] All navigation links verified
- [ ] SEO meta tags complete
- [ ] Analytics tracking configured
- [ ] Forms connected to backend
- [ ] Performance score > 90
- [ ] Accessibility audit passed
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
- [ ] SSL certificate installed
- [ ] Domain configured correctly
- [ ] 404 page designed
- [ ] Favicon and touch icons added

### Post-Launch Tasks

**Immediate (Week 1):**
- Monitor form submissions
- Check analytics setup
- Review error logs
- Test all user flows
- Gather initial feedback

**Short-term (Month 1):**
- Analyze user behavior
- Identify improvement areas
- Plan content updates
- Schedule first maintenance cycle

---

## Version History

**Version:** 1.0  
**Created:** [Current Date]  
**Last Updated:** [Current Date]  
**Design System:** Agent Black  
**Client:** PassWay Group  
**Document Author:** Senior UI/UX Design Director

---

*This comprehensive specification document serves as the complete technical and design guide for building the PassWay Group website using the Agent Black design system. All implementation should strictly follow these guidelines to maintain design integrity and brand consistency.*

---

## Quick Reference

### Key Brand Elements
- **Colors:** #D4A510 (Gold), #000000 (Black), #FFFFFF (White)
- **Fonts:** Space Grotesk, IBM Plex Sans, JetBrains Mono
- **Philosophy:** Minimal, powerful, sophisticated
- **Signature:** Gold selector lines, floating cards, monochromatic base

### Essential Commands
```bash
npm install                 # Install dependencies
npm run dev                 # Development server
npm run build              # Production build
npm run preview            # Preview build
npm run type-check         # TypeScript check
npm run lint               # Code linting
```

### Key Files
- `/src/App.tsx` - Main app component
- `/src/index.css` - Global styles
- `/tailwind.config.js` - Tailwind configuration
- `/src/utils/animations.ts` - Framer Motion variants
- `/src/data/` - All content data

---

**END OF SPECIFICATION DOCUMENT**
