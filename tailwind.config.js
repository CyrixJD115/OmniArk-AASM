/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // ---- OmniArk emblem palette (extracted from logo, Aug 2026) ----
        // deep navy base (logo's darkest stone): #0A1C30 -> #0E3357
        deep: {
          950: '#08182B', // app background (near-black navy)
          900: '#0A1C30', // sidebar / recesses
          800: '#0E3357', // card / panel surface
          700: '#1B619B', // hover surface
          600: '#294E6B', // borders
          500: '#3D5F7E', // faint borders
        },
        // Background scale — alias kept for legacy ark* classes
        arkbg: '#0A1C30',        // deep navy — app background
        arkdarker: '#08182B',    // darker navy — sidebar / recesses
        arkpanel: '#0E3357',     // rune blue — hover surfaces
        // Foreground text scale — stone highlight tones
        arktext: '#9DB1B8',      // light steel — primary text
        arklight: '#E8F0F3',     // near-white steel
        arkmuted: '#7C93A3',     // steel blue — secondary text
        arksecondary: '#5A7A94', // slate blue
        // Borders — weathered stone
        arkborder: '#294E6B',    // stone seam
        arkborderdark: '#1B4771',// deeper seam
        // Brand — glowing rune blue (logo claw/rune tones)
        arkaccent: '#43A5D5',    // bright sky blue — primary action / rune glow
        arkblue: '#0A69C5',      // deep power blue — focus
        arkfocus: '#43A5D5',
        arkglow: '#43A5D5',      // cyan-sky glow
        // Semantic — nuclear accents on the navy
        arkgreen: '#2DD4BF',     // teal — success (matches logo cyan family)
        arksuccess: '#2DD4BF',
        arkred: '#F87171',       // ember red — danger
        arkdanger: '#F87171',
        arkamber: '#FBBF24',     // amber — warning
        arkwarning: '#FBBF24',
        arkinfo: '#43A5D5',      // sky blue — info
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        ark: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // Blocky, angular — stone slab vibe (was 12px glass)
        'ark': '6px',
      },
      boxShadow: {
        glow: '0 0 12px 2px rgba(67, 165, 213, 0.35)',
        'glow-cyan': '0 0 12px 2px rgba(67, 165, 213, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.55)',
        'block': '3px 3px 0px 0px rgba(0, 0, 0, 0.6)',
        'block-lg': '5px 5px 0px 0px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'ark-texture': 'linear-gradient(135deg, #0A1C30 60%, #08182B 100%)',
      },
      transitionDuration: {
        'ark': '150ms',
      },
    },
  },
  plugins: [],
}