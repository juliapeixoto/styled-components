import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { darkTheme, lightTheme } from "./Components/UI/theme";
import { BtnTheme } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </BtnTheme>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
