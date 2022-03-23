module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/layouts/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
      },

      colors: {
        profile: "hsl(246, 80%, 60%)",
        Work: "hsl(15, 100%, 70%)",
        Play: "hsl(195, 74%, 62%)",
        Study: "hsl(348, 100%, 68%)",
        Exercise: "hsl(145, 58%, 55%)",
        Social: "hsl(264, 64%, 52%)",
        Self: "hsl(43, 84%, 65%)",
        body: "hsl(226, 43%, 10%)",
        card: "hsl(235, 46%, 20%)",
        hover: "hsl(235, 45%, 61%)",
        "light-text": "hsl(236, 100%, 87%)",
      },

      screens: {
        laptop: "1040px",
        // => @media (min-width: 1024px) { ... }
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        autofill: "repeat(auto-fill, minmax(220px, 1fr))",
      },

      width: {
        "90w": "90vw",
      },

      boxShadow: {
        around: "0 0 10px 2px rgb(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
