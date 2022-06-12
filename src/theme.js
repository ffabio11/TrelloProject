import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());
jss.createStyleSheet({ "@global ol,ul": { listStyleType: "none" } }).attach();
export const themeList = {
  lightTheme: {
    spacing: 8,
    colors: {
      primary: "#0279bf",
      secondary: "#ebecf0",
      black: "#000",
      white: "#fff",
      text: "black",
      card: "white",
    },
  },

  darkTheme: {
    spacing: 8,
    colors: {
      primary: "#510776",
      secondary: "#303030",
      white: "#fff",
      black: "#000",
      text: "white",
      card: "black",
    },
  },

  psychedelicTheme: {
    spacing: 8,
    colors: {
      primary: "#d800ff",
      secondary: "#ff0000",
      white: "#f00",
      black: "#000",
      text: "white",
      card: "purple",
    },
  },
};
