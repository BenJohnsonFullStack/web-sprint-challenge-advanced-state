// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { applyMiddleware, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./state/reducer";
import thunk from "redux-thunk";
import "./styles/reset.css";
import "./styles/styles.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
