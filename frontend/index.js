// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./state/reducer";
import "./styles/reset.css";
import "./styles/styles.css";

const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
