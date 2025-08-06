/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#f0f8ff',
        'gradient-end': '#ffffff',
      },
      animation: {
        'scroll-fast': 'scroll-fast 20s linear infinite',
      },
      keyframes: {
        'scroll-fast': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    },
  },
  plugins: [],
};