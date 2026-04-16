module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPurple: "#7B2FF7",
        brandPink: "#F107A3",
        brandBlue: "#1E3CFF",
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7B2FF7, #F107A3, #1E3CFF)',
      },
    },
  },
  plugins: [],
};