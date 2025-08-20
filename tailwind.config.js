module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        primaryLight: '#A5B4FC',
        secondary: '#F472B6',
        secondaryLight: '#FBCFE8',
        interactive: '#10B981',
        bg: '#F8FAFC',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
