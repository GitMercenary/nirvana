import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        slab: ['Zilla Slab', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        cn: {
          black: '#0a0a0a',
          dark: '#0e0e0e',
          cream: '#f2f2f3',
          'warm-white': '#f0ece6',
          red: '#da2233',
          'red-accent': '#b82026',
          gray: '#a4a2a2',
        },
      },
    },
  },
  plugins: [],
}

export default config
