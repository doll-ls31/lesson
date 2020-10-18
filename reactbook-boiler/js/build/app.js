// ReactDOM.render(
// <h1>
// <Logo /> アプリケーションにようこそ！
// </h1>,
// document.getElementById("app")
// );

"use strict"; //必ず指定するようにする

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  "h1",
  null,
  _react2.default.createElement(_Logo2.default, null),
  " \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3046\u3053\u305D\uFF01"
), document.getElementById("app"));