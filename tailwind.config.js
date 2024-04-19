/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{ts,tsx}',
    './components/**/*.{js,jsx}',
    './sections/**/*.{ts,tsx}',
    './sections/**/*.{js,jsx}',
    './app/**/*.{ts,tsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E4E7EC",
        text: "#1D2433",
        primary: {
          DEFAULT: "#0D6EFD",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#D75271",
          two: "#EE66DD5b",
          foreground: "#fff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F0F2F5",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#E45826",
          foreground: "hsl(var(--accent-foreground))",
        },
        input: {
          DEFAULT: "#F0F2F5",
          foreground: "#647995",
        },

      },
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}