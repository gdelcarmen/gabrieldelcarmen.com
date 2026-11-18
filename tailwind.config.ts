import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        crimson: '#A31621',
        body: '#333333',
        muted: '#444444',
        rule: '#D0D0D0',
        tint: '#F7F2F2',
      },
      fontFamily: {
        serif: ['"Newsreader Variable"', 'Newsreader', '"Times New Roman"', 'serif'],
        sans: ['"Libre Franklin Variable"', '"Libre Franklin"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
