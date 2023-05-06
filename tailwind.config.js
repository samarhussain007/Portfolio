/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-button-hover": "rgba(255, 255, 255, 0.2)",
        "gray-100": "#DFCCCC",
        "primary-100": "#FFE1E0",
        "primary-300": "#E38787",
        "primary-500": "#F84F39",
        "secondary-400": "#AEF7F2",
        "secondary-500": "#39F8ED",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "7vw": "7vw",
    },
  },
  plugins: [],
};
