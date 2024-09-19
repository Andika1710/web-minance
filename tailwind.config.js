/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bghero': "url('/HeroBg.jpg')",
        'bgHero2': "url('/bg_1.png')",
        'bgHero3': "url('/BgFlag.jpg')",
        'bgHero4': "url('/BgFlag1.jpg')",
        'bgHero5': "url('/BgBlack1.png')",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }

    },
    screens: {
      'sm': '375px',    // Extra small devices (phones)
      'md': '768px',    // Medium devices (tablet)
      'lg': '1024px',   // Large devices (small desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1440px',  // 2x Extra large devices (larger screens)
    },
    container: {
      center: true,  // Center container by default
      padding: {
        DEFAULT: '1rem', // Padding default
        sm: '1.5rem',  // Padding for small screens
        md: '2rem',    // Padding for medium screens
        lg: '2.5rem',  // Padding for large screens
        xl: '3rem',    // Padding for extra large screens
      },
    },
    
  },
  plugins: [],
}

