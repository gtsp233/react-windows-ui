"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const RadioButton=a=>/*#__PURE__*/_react.default.createElement("label",{className:"app-radio-button",title:a.tooltip},/*#__PURE__*/_react.default.createElement("input",{type:"radio",className:"app-radio",name:a.name,value:a.value,disabled:a.disabled,onChange:a.onChange,defaultChecked:a.defaultChecked}),/*#__PURE__*/_react.default.createElement("span",null," "+a.label));var _default=RadioButton;exports.default=_default;