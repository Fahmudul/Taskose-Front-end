/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fed700",
        secondary: "#333e48",
        // tertiary: "#9ca3af",
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light"] },
};
