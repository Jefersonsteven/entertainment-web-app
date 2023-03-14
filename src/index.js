import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)