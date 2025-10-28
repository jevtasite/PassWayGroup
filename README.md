# PassWay Group - Boutique Football Agency

A sophisticated, minimal website for PassWay Group built with the Agent Black design system.

## Features

- **Agent Black Design System** - Stealth sophistication with minimal, powerful design
- **Modern Tech Stack** - React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Smooth Animations** - Luxury animations with Framer Motion
- **Form Validation** - React Hook Form with Zod validation
- **Accessibility** - WCAG AA compliant with proper ARIA labels

## Tech Stack

- **React 18.3+** with Hooks and TypeScript
- **TypeScript 5.3+** (strict mode)
- **Vite 5+** (build tool)
- **Tailwind CSS 3.4+** (styling)
- **Framer Motion 11+** (animations)
- **React Hook Form 7+** (form handling)
- **Zod** (validation)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd PassWayGroup
```

2. Install dependencies
```bash
npm install
```

3. Create environment file (optional)
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run type-check` - Check TypeScript types

## Project Structure

```
PassWayGroup/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── data/           # Static data files
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Design System

### Colors

- **Accent Gold**: #D4A510 - Used sparingly for power moments
- **Void Black**: #000000 - Primary background
- **Pure White**: #FFFFFF - High contrast text
- **Charcoal**: #0D0D0D - Card backgrounds
- **Ghost White**: #F8F8F8 - Body text

### Typography

- **Display**: Space Grotesk (headers, navigation)
- **Body**: IBM Plex Sans (body text, UI)
- **Mono**: JetBrains Mono (numbers, stats)

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## Form Configuration

To enable the contact form:

1. Sign up for [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
2. Get your form endpoint URL
3. Add to `.env`:
```
VITE_FORMSPREE_URL=https://formspree.io/f/your-form-id
```
4. Update `ContactForm.tsx` to use the environment variable

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android)

## License

© 2024 PassWay Group. All rights reserved.
