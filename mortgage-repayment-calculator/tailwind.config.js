/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans"],
        PlusJakartaSansItalic: ["Plus Jakarta Sans Italic"],
      },
    },
  },
  plugins: [],
};
