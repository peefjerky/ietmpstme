import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <App />,
  document.getElementById("root")
  /*  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App></App>}></Route>
      <Route exact path="/hack-n-code" element={<hack_n_code />}></Route>
    </Routes>
  </BrowserRouter> */
);

reportWebVitals();
