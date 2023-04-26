import { extendTheme } from "native-base";

const colorTheme = {
  brand: {
    // Put IFC branded colors here!
  },
  primary: {
    "50": "#a9eeff",
    "100": "#82e6ff",
    "200": "#5adeff",
    "300": "#32d6ff",
    "400": "#0aceff",
    "500": "#07bdea",
    "600": "#0da7cd",
    "700": "#1291b1",
    "800": "#157d97",
    "900": "#16697d",
  },
};

export const theme = extendTheme({
  colors: colorTheme,
  config: {
    initialColorMode: "dark",
  },
});
