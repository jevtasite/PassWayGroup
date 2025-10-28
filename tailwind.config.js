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
