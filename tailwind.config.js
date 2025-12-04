/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bytebase styling colors (approximate based on general brand knowledge)
        primary: '#5c4ced', // A nice purple/indigo often used in tech tools
      }
    },
  },
  plugins: [],
}

