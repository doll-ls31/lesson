// ReactDOM.render(
// <h1>
// <Logo /> アプリケーションにようこそ！
// </h1>,
// document.getElementById("app")
// );

'use strict'; //必ず指定するようにする

// ５章 開発環境セットアップ
// import React from "react";
// import ReactDOM from "react-dom";
// import Logo from "./components/Logo";

// ReactDOM.render(
//   <h1>
//     <Logo /> アプリケーションにようこそ！
//   </h1>,
//   document.getElementById("app")
// );

// ６章 Whinepad v0.0.1
import Excel from './components/Excel';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
  headers = ['Title', 'Year', 'Rating', 'Comments'];
  data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
  <div>
    <h1>
      <Logo /> Whinepadにようこそ!
    </h1>
    <Excel headers={headers} initialData={data}/>
  </div>,
  document.getElementById('pad')
);
