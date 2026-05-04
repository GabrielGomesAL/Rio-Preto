import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#071512",
        "graphite-2": "#0b1c18",
        mineral: "#123e34",
        "mineral-2": "#1f5f50",
        copper: "#c7974a",
        "copper-2": "#e1b76d",
        ice: "#f3f7f4",
        rock: "#87938e",
        petroleum: "#2b6f7a",
      },
      boxShadow: {
        mineral: "0 24px 80px rgba(0, 0, 0, 0.32)",
        copper: "0 18px 60px rgba(199, 151, 74, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
