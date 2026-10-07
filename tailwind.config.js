/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0D0C',
          warm: '#14130F',
          surface: '#1A1915',
          elevated: '#22201B',
        },
        paper: {
          DEFAULT: '#E9DFCC',
          cream: '#F4EBDD',
          muted: '#D5CABB',
        },
        botanical: {
          muted: '#6F8067',
          deep: '#33483A',
          leaf: '#4A5B45',
        },
        water: {
          DEFAULT: '#7D9EA1',
          deep: '#1E2F32',
          surface: '#A2C2C5',
        },
        moon: {
          DEFAULT: '#D8D2BF',
          glow: '#F0EAD6',
        },
        accent: {
          DEFAULT: '#B89B72',
          warm: '#C9AD86',
          soft: '#8F7553',
        },
        flower: {
          shapla: '#FAF8F5',
          shaplaPink: '#F2DFE2',
          padma: '#E8A2A8',
          padmaDeep: '#C77382',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        handwriting: ['"Caveat"', '"Homemade Apple"', 'cursive'],
      },
      boxShadow: {
        'lamp': '0 0 35px 8px rgba(184, 155, 114, 0.15), 0 0 70px 20px rgba(184, 155, 114, 0.08)',
        'moon': '0 0 40px 10px rgba(216, 210, 191, 0.12)',
        'candle': '0 0 20px 4px rgba(229, 195, 132, 0.35)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
