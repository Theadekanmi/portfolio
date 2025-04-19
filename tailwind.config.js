/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // 'media' for system preference, 'class' for manual toggle
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // You can add custom dark theme colors or modify existing ones
        colors: {
          darkBackground: '#1A1A1A', // Custom dark background color
          darkText: '#D1D5DB', // Custom dark text color
        },
      },
    },
    plugins: [],
  }
  
  