// ReactDOM.render(
// <h1>
// <Logo /> アプリケーションにようこそ！
// </h1>,
// document.getElementById("app")
// );

"use strict"; //必ず指定するようにする

import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo";

ReactDOM.render(
  <h1>
    <Logo /> アプリケーションにようこそ！
  </h1>,
  document.getElementById("app")
);
