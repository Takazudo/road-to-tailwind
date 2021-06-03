module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "1.8"],
        base: ["18px", "1.8"],
        lg: ["22px", "1.8"],
      },
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      spacing: {
        xs: "3px",
        sm: "5px",
        md: "10px",
        lg: "20px",
        xl: "40px",
        "2xl": "60px",
      },
    },
  },
};
