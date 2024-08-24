import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#333333',
          dark: '#f0f0f0',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config