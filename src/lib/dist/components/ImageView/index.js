"use strict";require("core-js/modules/es.weak-map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _react=_interopRequireWildcard(require("react")),_LoaderBusyWrapper=_interopRequireDefault(require("../_common/LoaderBusyWrapper"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const ImageView=a=>{const[b,c]=(0,_react.useState)(!1),d=()=>/*#__PURE__*/_react.default.createElement("div",{className:"app-img-view-loader"},/*#__PURE__*/_react.default.createElement("div",{className:"app-loader-busy light animate"},/*#__PURE__*/_react.default.createElement(_LoaderBusyWrapper.default,null))),e=()=>{c(!0)};return/*#__PURE__*/_react.default.createElement("div",{className:"app-img-view-container",title:a.tooltip,style:{width:a.width,height:a.height,margin:a.margin,padding:a.padding,borderRadius:a.borderRadius}},/*#__PURE__*/_react.default.createElement("img",{className:"app-img-view",src:a.src,alt:a.alt,style:{objectFit:a.objectFit}// onLoad={() => setLoad(true)}
,onLoad:()=>{e(),a.onLoad()},onError:()=>{e(),a.onError()}}),/*#__PURE__*/_react.default.createElement("div",{className:"app-img-words"},/*#__PURE__*/_react.default.createElement("h1",null,a.title),/*#__PURE__*/_react.default.createElement("span",null,a.subtitle)),a.insetShadow?(()=>/*#__PURE__*/_react.default.createElement("div",{className:"shadow"}))():"",a.isLoading?d():"",b?"":d())};ImageView.defaultProps={width:124,height:124,alt:"image",isLoading:!1,objectFit:"cover",onLoad:()=>{},onError:()=>{}};var _default=ImageView;exports.default=_default;