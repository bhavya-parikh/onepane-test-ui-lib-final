"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button2Module = require("./Button2.module.css");

var _Button2Module2 = _interopRequireDefault(_Button2Module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button2(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? "small" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? "alert" : _ref$color,
      _ref$content = _ref.content,
      content = _ref$content === undefined ? "Button" : _ref$content,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["size", "color", "content", "className"]);

  var buttonClasses = _Button2Module2.default.button + " " + _Button2Module2.default[size] + " " + _Button2Module2.default[color] + " " + className;
  return _react2.default.createElement(
    "button",
    _extends({ className: buttonClasses }, props),
    content
  );
}

exports.default = Button2;