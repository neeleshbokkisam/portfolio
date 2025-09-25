/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'background': '#000000',
          'background-light': '#111111',
          'accent': '#FFFFFF',
          'accent-muted': '#CCCCCC',
          'text-primary': '#FFFFFF',
          'text-secondary': '#888888',
          'border': '#333333',
        },
        fontFamily: {
          'sans': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
          'mono': ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
          'display': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
          'body': ['Inter', 'SF Pro Text', 'system-ui', 'sans-serif'],
          'heading': ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        },
        fontWeight: {
          'thin': '100',
          'extralight': '200',
          'light': '300',
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700',
          'extrabold': '800',
          'black': '900',
        },
        letterSpacing: {
          'tight': '-0.025em',
          'normal': '0',
          'wide': '0.025em',
          'wider': '0.05em',
          'widest': '0.1em',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        keyframes: {
          'fadeIn': {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        boxShadow: {
          'subtle': '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    plugins: [],
  };