"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _react=_interopRequireWildcard(require("react")),_hooks=require("../_hooks"),_api=require("../_api");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const Select=a=>{const[b,c]=(0,_react.useState)(!1),[d,e]=(0,_react.useState)("Select"),[f,g]=(0,_react.useState)(""),[h,i]=(0,_react.useState)([]),[j,k]=(0,_react.useState)(0);(0,_react.useEffect)(()=>{//Check if any default value is given
if(a.defaultValue){let b=h.findIndex(b=>b.value===a.defaultValue),c=h.find(b=>b.value===a.defaultValue).label;k(b),e(c)}else e(h[0].label);i(a.data)},[a.data,a.defaultValue,h]),(0,_react.useMemo)(()=>{i(a.data)},[a.data]),(0,_react.useMemo)(()=>{b||_api.ScrollView.enableScroll()},[b]);const l=b=>{//get index of selecting value
let c=h.findIndex(a=>a.value===b);e(b),k(c),m(),a.onChange(b)},m=()=>{c(!b),_api.ScrollView.disableScroll(),(0,_api.getScreenOffset)(n)?g("reverse"):g("")},n=(0,_react.useRef)(null);return(0,_hooks.useOutSideClick)(n,()=>c(!1)),/*#__PURE__*/_react.default.createElement("div",{className:"app-select-menu react",ref:n},/*#__PURE__*/_react.default.createElement("div",{className:"app-select-header",onClick:m},d,/*#__PURE__*/_react.default.createElement("i",{className:"icons10-angle-down"})),/*#__PURE__*/_react.default.createElement("div",{className:"app-select-body ".concat(b&&"show"," ").concat(f)},h.map((a,b)=>/*#__PURE__*/_react.default.createElement("div",{className:"select-item ".concat(b===j&&"selected"),onClick:()=>l(a.value),key:b},a.label))))};Select.defaultProps={onChange:()=>{}};var _default=Select;exports.default=_default;