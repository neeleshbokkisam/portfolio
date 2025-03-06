/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'background': '#0A0A0A',
          'background-light': '#151515',
          'neon-cyan': '#0AFFFF',
          'neon-purple': '#BF5AF2',
          'neon-blue': '#0A84FF',
          'neon-pink': '#FF1493',  // New vibrant pink
          'neon-green': '#00FF9F',
          'text-primary': '#E0E0E0',
          'text-secondary': '#A0A0A0',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
          'mono': ['JetBrains Mono', 'monospace'],
          'cool': ['Poppins', 'sans-serif'],
        },
        animation: {
          'text-shimmer': 'text-shimmer 2.5s ease infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 6s ease-in-out infinite',
          'gradient-animation': 'gradient-shift 5s ease infinite',

        },
        keyframes: {
          'text-shimmer': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'gradient-shift': {
            '0%': { 'background-position': '0% 50%' },
            '25%': { 'background-position': '25% 50%' },
            '50%': { 'background-position': '50% 50%' },
            '75%': { 'background-position': '75% 50%' },
            '100%': { 'background-position': '100% 50%' },
          },
          
        },
        boxShadow: {
          'neon-glow': '0 0 5px theme("colors.neon-cyan"), 0 0 20px rgba(10, 255, 255, 0.3)',
          'neon-purple-glow': '0 0 5px theme("colors.neon-purple"), 0 0 20px rgba(191, 90, 242, 0.3)',
          'neon-blue-glow': '0 0 5px theme("colors.neon-blue"), 0 0 20px rgba(10, 132, 255, 0.3)',
        },
      },
    },
    plugins: [],
  };