/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        arkbg: '#0f172a',       // slate-900
        arkpanel: '#1e293b',    // slate-800
        arkaccent: '#3b82f6',   // blue-500
        arkblue: '#60a5fa',     // blue-400
        arkglow: '#06b6d4',     // cyan-500
        arkgreen: '#10b981',    // emerald-500
        arkred: '#ef4444',      // red-500
        arkamber: '#f59e0b',    // amber-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        ark: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 12px 2px rgba(59, 130, 246, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'ark-texture': 'linear-gradient(135deg, #0f172a 60%, #0b1120 100%)',
      },
    },
  },
  plugins: [],
}

