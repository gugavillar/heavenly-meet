import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('tailwind-scrollbar')],

  theme: {
    extend: {
      backgroundColor: {
        'rgb-230-34-34': 'rgb(230, 34, 34)',
      },
      colors: {
        brand: {
          '500': '#9E6EFE',
        },
        dark: {
          '900': '#2D3748',
          '800': '#718096',
          '300': '#F9F9F9',
        },
        page: {
          '500': '#F3F4F8',
        },
      },
    },
  },
}
export default config
