/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Coffee Colors - Rich & Warm
        "coffee-dark": "#2d1810",
        "coffee-medium": "#8b6f47",
        "coffee-light": "#d4c4a8",

        // Cream & White Family - Pure & Elegant
        cream: "#fdf8f3",
        milk: "#ffffff",
        cappuccino: "#f7f1e8",
        latte: "#f0e6d8",

        // Accent Colors - Beautiful & Harmonious
        caramel: "#d4a574",
        honey: "#e6b17a",
        mocha: "#a67b5b",
        "rose-gold": "#e8b4b8",
        sage: "#9caf88",
        lavender: "#b8a9c9",

        // Neutral Grays - Sophisticated
        stone: "#f5f5f4",
        slate: "#64748b",
        charcoal: "#374151",

        // Special Colors for Highlights
        gold: "#f59e0b",
        amber: "#f97316",
        emerald: "#10b981",
        rose: "#f43f5e",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
      },
      boxShadow: {
        coffee:
          "0 4px 6px -1px rgba(45, 24, 16, 0.1), 0 2px 4px -1px rgba(45, 24, 16, 0.06)",
        caramel:
          "0 4px 6px -1px rgba(212, 165, 116, 0.1), 0 2px 4px -1px rgba(212, 165, 116, 0.06)",
        "rose-gold":
          "0 4px 6px -1px rgba(232, 180, 184, 0.1), 0 2px 4px -1px rgba(232, 180, 184, 0.06)",
      },
      backgroundImage: {
        "coffee-gradient":
          "linear-gradient(135deg, #2d1810 0%, #8b6f47 50%, #d4a574 100%)",
        "cream-gradient":
          "linear-gradient(135deg, #fdf8f3 0%, #f7f1e8 50%, #f0e6d8 100%)",
        "warm-gradient":
          "linear-gradient(135deg, #fdf8f3 0%, #e6b17a 50%, #d4a574 100%)",
        "pretty-gradient":
          "linear-gradient(135deg, #e8b4b8 0%, #b8a9c9 50%, #9caf88 100%)",
      },
    },
  },
  plugins: [],
};
