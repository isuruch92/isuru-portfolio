/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsx1: { min: "400px" },
        smx1: { min: "700px" },
        smx2: { min: "700px", max: "800px" },
        smx3: { min: "800px", max: "850px" },
        smx4: { max: "850px" },
        mdx1: { min: "850px" },
        mdx2: { min: "850px", max: "930px" },
        mdx3: { min: "930px", max: "1024px" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
