// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'azo-sans': ['azo-sans-web', 'sans-serif'],  // General family for Azo Sans
        'azo-sans-uber': ['azo-sans-uber', 'sans-serif'] // General family for Azo Sans Uber
      },
      fontWeight: {
        'normal': 400, // Regular weight
        'bold': 700 // Bold weight
      },
      fontStyle: {
        italic: 'italic',
        normal: 'normal'
      },
      colors: {
        'AFE-RED': '#EB1F26', // Custom color added here
        'AFE-BLUE': '#008080',
        'AFE-YELLOW': '#FFFACD',
      }
    },
  },
  plugins: [],
}
