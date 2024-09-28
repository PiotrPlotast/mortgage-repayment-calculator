/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans"],
        PlusJakartaSansItalic: ["Plus Jakarta Sans Italic"],
      },
      colors: {
        Lime: "hsl(61, 70%, 52%)",
        "Lime-hover": "hsla(61, 70%, 52%, 0.2)",
        Red: "hsl(4, 69%, 50%)",
        White: "hsl(0, 0%, 100%)",
        "Slate-100": "hsl(202, 86%, 94%)",
        "Slate-300": "hsl(203, 41%, 72%)",
        "Slate-500": "hsl(200, 26%, 54%)",
        "Slate-700": "hsl(200, 24%, 40%)",
        "Slate-900": "hsl(202, 55%, 16%)",
        "Slate-950": "hsl(202, 55%, 11%)",
      },
      fontSize: {
        p: "1rem",
      },
    },
  },
  plugins: [],
};
