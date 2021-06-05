const normalize = (remValue) => {
  return remValue.toFixed(4).replace(/\.?0+$/, "");
};
const toRem = (value) => {
  const px = parseInt(value);
  const rem = px / 16;
  return `${normalize(rem)}rem`;
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        lg: "768px",
      },
      fontSize: {
        sm: [toRem("14px"), "1.8"],
        base: [toRem("18px"), "1.8"],
        lg: [toRem("22px"), "1.8"],
        xl: [toRem("30px"), "1.8"],
      },
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      spacing: {
        xs: toRem("3px"),
        sm: toRem("5px"),
        md: toRem("10px"),
        lg: toRem("20px"),
        xl: toRem("40px"),
        "2xl": toRem("60px"),
      },
    },
  },
};
