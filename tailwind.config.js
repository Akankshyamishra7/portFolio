/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-serif)', 'Playfair Display', 'Libre Baskerville', 'Georgia', 'serif'],
        'mono': ['var(--font-mono)', 'Space Mono', 'Fira Code', 'Courier New', 'monospace'],
        'sans': ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}