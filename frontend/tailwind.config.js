/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#07080a',
        bgSurface: '#0e1015',
        bgElevated: '#151821',
        accentBlue: '#0066ff',
        textPrimary: '#f4f5f8',
        textSecondary: '#9aa1b0',
        textMuted: '#5e6575',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        editorial: '0.14em',
      },
    },
  },
  plugins: [],
}
