import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "constants/theme";
import GlobalStyle from "constants/globalStyle";

const Container = styled.div`
  height: 500px;
  width: 500px;
  background: ${theme.color.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = styled.div`
  height: 300px;
  width: 300px;
  background: ${theme.color.lightBlue};
`;

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Test />
        </Container>
        {/* <Route exact path="/" />
        <Route exact path="/about" /> */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
