/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "450px",
      md: "760px",
      lg: "1000px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      colors: {
        mainpink: "#b900d7", // Dùng VD: text-mainpink
        skygreen: "#26fffe",
        graytext: "#b8b6cb",
        violetbackground: "#060138",
        blueswitch: "#0000af",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"], // default
      figtree: ["Figtree", "sans-serif"], // Dùng VD font-figtree
    },
  },
  plugins: [],
};
