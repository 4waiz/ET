/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        lg: '2.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'Sora', 'ui-sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        ink: {
          950: '#05080f',
          900: '#0a0f1c',
        },
      },
      backgroundImage: {
        'mesh-radial':
          'radial-gradient(1200px circle at 20% 10%, rgba(34, 211, 238, 0.18), transparent 45%), radial-gradient(1000px circle at 80% 20%, rgba(168, 85, 247, 0.22), transparent 50%), radial-gradient(900px circle at 40% 80%, rgba(14, 116, 144, 0.22), transparent 55%)',
        'grid-lines':
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

