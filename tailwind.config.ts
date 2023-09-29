import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    /* ----- Screens ----- */
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1220px',
      '2xl': '1440px',
      '3xl': '1700px',
    },

    /* ----- Container ----- */
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },

    /* ----- Extend ----- */
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        banner1: "url('https://i.pinimg.com/originals/4e/de/5a/4ede5a33c5490195b2b17466ad26d124.gif')",
        banner2: "url('https://miro.medium.com/v2/resize:fit:1200/1*QHzHZjzk0ZNgujT6G7oSug.png')",
        banner3: "url('https://wallpapers.com/images/hd4/80s-synthwave-aesthetic-cover-5uac1oe9a997n5g7.jpg')",
        banner4: "url('https://media.tenor.com/i0nzuUl-6wQAAAAC/background.gif')",
        banner5: "url('https://i.gifer.com/origin/19/195c4db0e36f6d3c0e331568b7c292ae_w200.gif')",
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
      colors: {
        primary: "orangered",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
      }
    },
  },
  plugins: [],
}
export default config
