/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        ku: "#901a1e",
        group: "#d6eff3"
      },
      spacing:{
        text: "clamp(45ch,50%,75ch)"
      }
    },
  },
  plugins: [],
}

