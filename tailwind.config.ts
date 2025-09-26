import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { orange: '#F47A2D', blue: '#1B3A57', DEFAULT: '#F47A2D' },
        secondary: { beige: '#F4EADB', DEFAULT: '#F4EADB' },
        accent: { charcoal: '#212822', green: '#27AE60', DEFAULT: '#27AE60' },
        trust: { blue: '#1B3A57', DEFAULT: '#1B3A57' },
        success: { green: '#27AE60', DEFAULT: '#27AE60' },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
   fontSize: {
  heading1: ['2.3rem', { lineHeight: '3.5rem', fontWeight: '700' }], // Hero title — larger
  heading2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }], // Secondary headings
  heading3: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
  body: ['1rem', { lineHeight: '1.6rem', fontWeight: '400' }],
  subtext: ['1rem', { lineHeight: '1.25rem', fontWeight: '400' }], // smaller subtext
  small: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
},

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        marquee: 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 15s linear infinite',
        shine: "shine 1.5s infinite",
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        shine: {
         "0%": { transform: "translateX(-100%)"  },
       "100%": { transform: "translateX(100%)" },
         },
        slideUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        bounceGentle: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-reverse': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0%)' } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
