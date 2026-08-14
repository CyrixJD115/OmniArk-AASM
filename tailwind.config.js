/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Background scale — deep slate with blue undertone (OmniArk identity)
        arkbg: '#0f172a',        // slate-900  — app background
        arkdarker: '#0b1120',    // darker slate — sidebar / recesses
        arkpanel: '#1e293b',     // slate-800  — hover surfaces
        // Foreground text scale
        arktext: '#e2e8f0',      // slate-200  — primary text
        arklight: '#f1f5f9',     // slate-100
        arkmuted: '#94a3b8',     // slate-400  — secondary text
        arksecondary: '#64748b', // slate-500
        // Borders
        arkborder: '#334155',    // slate-700
        arkborderdark: '#1e293b',// slate-800
        // Brand / semantic — kept identical to OmniArk theme
        arkaccent: '#3b82f6',    // blue-500  — primary action
        arkblue: '#60a5fa',      // blue-400  — focus
        arkfocus: '#60a5fa',
        arkglow: '#06b6d4',      // cyan-500  — accent glow
        arkgreen: '#10b981',     // emerald-500 — success
        arksuccess: '#10b981',
        arkred: '#ef4444',       // red-500   — danger
        arkdanger: '#ef4444',
        arkamber: '#f59e0b',     // amber-500 — warning
        arkwarning: '#f59e0b',
        arkinfo: '#06b6d4',      // cyan-500  — info
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        ark: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // OmniArk keeps rounded glass identity (not squared like reference)
        'ark': '12px',
      },
      boxShadow: {
        glow: '0 0 12px 2px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 12px 2px rgba(6, 182, 212, 0.25)',
        card: '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'ark-texture': 'linear-gradient(135deg, #0f172a 60%, #0b1120 100%)',
      },
      transitionDuration: {
        'ark': '200ms',
      },
    },
  },
  plugins: [],
}
