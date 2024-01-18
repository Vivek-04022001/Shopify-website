/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#379cf6",
        secondary: "#090238",
        accent: "#1b2352",
        neutral: "#3d4451",

        testimonials: "#1a0f4f",
        smallText: "rgba(255, 255, 255, 0.774)",
        icon: "#151e4f",
        backgroundColor: "#00000d",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      
    },
  },
  plugins: [require("daisyui")],
}

