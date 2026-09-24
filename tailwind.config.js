/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          light: '#FFB000',
        },
        dark: {
          bg: '#080808',
          card: '#111111',
          border: 'rgba(255,255,255,0.1)',
        },
        neutral: {
          offwhite: '#F5F5F5',
          muted: '#A1A1AA',
          slate: '#111827',
          slatemuted: '#4B5563',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scrollDown: 'scrollDown 2s infinite ease-in-out',
        pulse: 'pulse 1.5s infinite ease-in-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(350%)' },
        },
      },
    },
  },
  plugins: [],
};
