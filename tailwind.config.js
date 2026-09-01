/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#03040F',
        panel: '#0A1440',
        panel2: '#0E1B52',
        brand: {
          DEFAULT: '#1339E0',
          light: '#3D6BFF',
          glow: '#7FA8FF',
          deep: '#081B8C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(127,168,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,168,255,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle, rgba(61,107,255,0.35) 0%, rgba(61,107,255,0) 70%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'counter-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'counter-spin-reverse': {
          '0%': { transform: 'rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-drift': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translate(var(--drift-x, 20px), -120px)', opacity: '0' },
        },
      },
      animation: {
        orbit: 'orbit 18s linear infinite',
        'orbit-slow': 'orbit 26s linear infinite',
        'orbit-reverse': 'orbit-reverse 22s linear infinite',
        'counter-spin': 'counter-spin 18s linear infinite',
        'counter-spin-slow': 'counter-spin 26s linear infinite',
        'counter-spin-reverse': 'counter-spin-reverse 22s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        particle: 'particle-drift linear infinite',
      },
    },
  },
  plugins: [],
}
