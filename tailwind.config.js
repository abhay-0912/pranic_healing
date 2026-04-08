/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0c10",
          900: "#141820",
          800: "#1a2030",
          700: "#2a3142",
          500: "#7a8090",
          300: "#d8cfc4"
        },
        gold: {
          50: "#f8f2e6",
          100: "#efe0bf",
          200: "#e8d4a8",
          300: "#c9a96e",
          500: "#7a6340"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201, 169, 110, 0.35), 0 24px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at center, rgba(201, 169, 110, 0.2), transparent 72%)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -14px, 0) scale(1.03)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.18, transform: "scale(1)" },
          "50%": { opacity: 0.32, transform: "scale(1.08)" }
        }
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        pulseSoft: "pulseSoft 9s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
