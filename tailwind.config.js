const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'md2':'992px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
      },
      fontFamily: {
        sans: ['Lora', 'system-ui', 'sans-serif'], // Set Lora as default
        kaushan:['Kaushan Script'],
        lora:['Lora']
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tw-elements-react/dist/plugin.cjs")
  ],
}
