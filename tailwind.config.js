/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-550": "#ea580c",
        "white-150": "#f3f1ef",
      },
      screens: {
        sm: { max: "576px" },
        lg: { min: "576px" },
      },
    },
  },
  plugins: [],
};
