import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "constant";
import { Navbar } from "components";
import { HomePage, AboutPage } from "pages";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
