/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#05070e',
        bgSurface: '#0b101d',
        bgElevated: '#111827',
        accentBlue: '#3b82f6',
        accentCyan: '#38bdf8',
        accentIndigo: '#6366f1',
        accentViolet: '#8b5cf6',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
        textMuted: '#64748b',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        editorial: '0.14em',
      },
      boxShadow: {
        'glass': '0 16px 40px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 20px 50px -8px rgba(59, 130, 246, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
        'glass-nav': '0 10px 35px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.35)',
        'glow-indigo': '0 0 25px rgba(99, 102, 241, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

