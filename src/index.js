import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import AppRouter from "./Routes/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
