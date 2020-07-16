import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./config/ReactotronConfig";
import GlobalStyle from "./styles/global.js";
import Routes from "./routes";
import Header from "./components/Header/index";
import { Provider } from "react-redux";
import store from "./store/";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
