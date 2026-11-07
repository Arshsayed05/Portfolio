/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F1E8',
        surface: '#E5E5DF',
        'surface-subtle': '#EBE9DE',
        ink: '#111111',
        'ink-muted': '#777777',
        'ink-faint': '#AAAAAA',
        'acid-lime': '#D6FF00',
        'border-strong': '#111111',
        'border-hairline': 'rgba(17, 17, 17, 0.15)',
        'border-medium': 'rgba(17, 17, 17, 0.4)',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.07em',
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        brutalist: '4px 4px 0px #111111',
        'brutalist-lg': '8px 8px 0px #111111',
        'brutalist-lime': '4px 4px 0px #D6FF00',
        'brutalist-lime-lg': '8px 8px 0px #D6FF00',
      },
    },
  },
  plugins: [],
}
