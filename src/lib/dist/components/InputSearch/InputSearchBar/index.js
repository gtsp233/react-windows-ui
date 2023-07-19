"use strict";var _react=_interopRequireWildcard(require("react"));const _excluded=["width","tooltip","onSubmit"];require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.weak-map.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}const InputSearchBar=/*#__PURE__*/(0,_react.forwardRef)((a,b)=>{const{width:c,tooltip:d,onSubmit:e}=a,f=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/_react.default.createElement("div",{className:"app-input-search-bar",title:d},/*#__PURE__*/_react.default.createElement("input",_extends({className:"app-input-text"},f,{ref:b,type:"search",name:a.name,value:a.value,onClick:a.onClick,disabled:a.disabled,onChange:a.onChange,style:{width:c},placeholder:a.placeholder})),/*#__PURE__*/_react.default.createElement("div",{className:"app-input-end-content"},/*#__PURE__*/_react.default.createElement("button",{type:"submit",onClick:()=>e(a.value)})))});InputSearchBar.defaultProps={onSubmit:()=>{},placeholder:"Search here.."};var _default=InputSearchBar;exports.default=_default;