import React from "react";
import { createGlobalStyle } from "styled-components";
import GamePage from "./pages/GamePage";
import MarioKart from "./assets/fonts/MarioKart.ttf";
import Open24 from "./assets/fonts/Open24.ttf";
import ka1 from "./assets/fonts/ka1.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
  html {
    margin: 0px;
    padding: 0px;
  }
  *{
    @font-face {
    font-family: Mario Kart;
    font-style: normal;
    src: url(${MarioKart})format('truetype');
  }
  @font-face {
    font-family: Open24;
    font-style: normal;
    src: url(${Open24})format('truetype');
  }
  @font-face {
    font-family: ka1;
    font-style: normal;
    src: url(${ka1})format('truetype');
  }
  }
`;

const App: React.FC = () => (
  <div className="App">
    <GlobalStyle />
    <GamePage />
  </div>
);

export default App;
