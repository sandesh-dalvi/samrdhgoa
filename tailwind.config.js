/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
colors = { ...colors, ...{ transparent: "transparent" } };
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#02bd18",
        secondary: "#00df1a",
        "accent-400": "hsl(56, 100%, 46%)",
        "accent-100": "hsl(48, 100%, 38%)",
      },
      fontFamily: {
        kumbh: "Kumbh Sans",
        caveat: "'Caveat', cursive",
      },
      gridTemplateColumns: {
        works: "repeat(auto-fit, minmax(200px, 1fr))",
        workss: "repeat(auto-fit, minmax(90px, 1fr))",
        blogcard: "repeat(auto-fit, minmax(250px, 300px))",
        services: "repeat(auto-fit, minmax(100px, 200px))",
      },
      width: {
        blogcard: "auto",
        fullscreenimage: "calc(100% - 40px)",
      },
      height: {
        fullscreenimage: "calc(100% - 40px)",
      },
      gap: {
        footergap: "clamp(0.5rem, 20vw, 2rem)",
      },
    },
  },
  plugins: [],
};
