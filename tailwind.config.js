/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: '#FF5A00',
        obsidian: '#080809',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.07em',
      },
    },
  },
  plugins: [],
}