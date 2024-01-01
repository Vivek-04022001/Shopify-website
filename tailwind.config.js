/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#379cf6", // dodger blue
        "btn-secondary-bg": "#090238", // dark Blue
        'btn-primary-bg': '#379cf6',   
        "team-card-bg": "#1b2352", //Navy Blue
        "link-active": "#379cf6", //Blue
        "body-bg": "#00000d", // midnight blue
        "testimonial-bg": "#1a0f4f",
        "small-text-color": "rgba(255, 255, 255, 0.774)",
        "icon-bg": "#151e4f",
        "counter-color":
          "linear-gradient(90deg," +
          "#02bba6 30%," +
          "rgba(29, 129, 176, 1) 55%," +
          "rgba(35, 93, 173, 1) 75%" +
          ")",
          'heading-color': '#0c123d',
      },
    },
  },
  plugins: [require("daisyui")],
};
