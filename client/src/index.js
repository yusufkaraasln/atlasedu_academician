import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles/ScreenError.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const screenX = window.screen.width;
const screenY = window.screen.height;
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
