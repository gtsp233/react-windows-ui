"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const SelectNative=a=>/*#__PURE__*/_react.default.createElement("div",{className:"app-select-menu"},/*#__PURE__*/_react.default.createElement("select",{name:a.name,disabled:a.disabled},a.data.map(a=>/*#__PURE__*/_react.default.createElement("option",{value:a.value,key:a.value},a.label))));SelectNative.defaultProps={data:[]};var _default=SelectNative;exports.default=_default;