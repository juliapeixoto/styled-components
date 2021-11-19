import {
  darkBackground,
  darkContent,
  darkText,
  lightBackground,
  lightContent,
  lightText,
} from "./variables";

export const lightTheme = {
  body: lightBackground,
  inside: lightContent,
  text: lightText,
  filter: "",
};

export const darkTheme = {
  body: darkBackground,
  inside: darkContent,
  text: darkText,
  filter: "invert(100%)",
};
