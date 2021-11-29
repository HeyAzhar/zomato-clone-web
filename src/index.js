import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { initialState, reducer } from "./Config/reducer";
import { StateProvider } from "./Config/StateProvider";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
