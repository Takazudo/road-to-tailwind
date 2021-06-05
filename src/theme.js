const normalize = (remValue) => {
  return remValue.toFixed(4).replace(/\.?0+$/, "");
};
const toRem = (value) => {
  const px = parseInt(value);
  const rem = px / 16;
  return `${normalize(rem)}rem`;
};

export const theme = {
  screen: {
    lg: `@media (min-width: 768px)`,
  },
  fontSize: {
    sm: `
      font-size: ${toRem("14px")};
      line-height: 1.8;
    `,
    base: `
      font-size: ${toRem("18px")};
      line-height: 1.8;
    `,
    lg: `
      font-size: ${toRem("22px")};
      line-height: 1.8;
    `,
    xl: `
      font-size: ${toRem("30px")};
      line-height: 1.8;
    `,
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
};
