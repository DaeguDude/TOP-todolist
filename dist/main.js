/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/categorySelectionModal.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/categorySelectionModal.css ***!
  \**********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* categorySelectionModal */\n\n.categorySelection-modal {\n  min-height: 350px;\n  min-width: 300px;\n\n  max-width: 300px;\n  max-height: 350px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.categorySelection-modal-header {\n  height: 55px;\n  min-height: 55px;\n  /* Give padding to the just side */\n  padding: 0 var(--gutter);\n  background-color: var(--card-above-bg-color);\n  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n  color: var(--card-above-font-color);\n\n  display: flex;\n  align-items: center;\n}\n\n.categorySelection-modal-title {\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.categorySelection-modal-main {\n  flex: 1 0 0;\n  background-color: var(--card-item-bg-color);\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.categorySelection-modal-items {\n  min-height: 44px;\n  padding: 0 var(--gutter);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  align-items: stretch;\n}\n\n.categorySelection-modal-items:hover,\n.categorySelection-modal-items:active {\n  background-color: var(--card-item-bg-highlighted-color);\n}\n\n.categorySelection-modal-items-title {\n  flex: 1 0 0;\n  color: var(--card-item-font-color);\n  font-size: var(--card-item-font-size);\n  border-bottom: 1px solid var(--border-bottom-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.categorySelection-modal .fa-check-circle {\n  border: none;\n  outline: none;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--confirm-color); \n  font-size: 1.3em;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://src/css/categorySelectionModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,2BAA2B;;AAE3B;EACE,iBAAiB;EACjB,gBAAgB;;EAEhB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kCAAkC;EAClC,wBAAwB;EACxB,4CAA4C;EAC5C,wEAAwE;EACxE,mCAAmC;;EAEnC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,2CAA2C;EAC3C,wEAAwE;;EAExE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,2CAA2C;;EAE3C,aAAa;EACb,oBAAoB;AACtB;;AAEA;;EAEE,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,kCAAkC;EAClC,qCAAqC;EACrC,mDAAmD;EACnD,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,sCAAsC;EACtC,gBAAgB;AAClB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* categorySelectionModal */\n\n.categorySelection-modal {\n  min-height: 350px;\n  min-width: 300px;\n\n  max-width: 300px;\n  max-height: 350px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.categorySelection-modal-header {\n  height: 55px;\n  min-height: 55px;\n  /* Give padding to the just side */\n  padding: 0 var(--gutter);\n  background-color: var(--card-above-bg-color);\n  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;\n  color: var(--card-above-font-color);\n\n  display: flex;\n  align-items: center;\n}\n\n.categorySelection-modal-title {\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.categorySelection-modal-main {\n  flex: 1 0 0;\n  background-color: var(--card-item-bg-color);\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.categorySelection-modal-items {\n  min-height: 44px;\n  padding: 0 var(--gutter);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  align-items: stretch;\n}\n\n.categorySelection-modal-items:hover,\n.categorySelection-modal-items:active {\n  background-color: var(--card-item-bg-highlighted-color);\n}\n\n.categorySelection-modal-items-title {\n  flex: 1 0 0;\n  color: var(--card-item-font-color);\n  font-size: var(--card-item-font-size);\n  border-bottom: 1px solid var(--border-bottom-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.categorySelection-modal .fa-check-circle {\n  border: none;\n  outline: none;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--confirm-color); \n  font-size: 1.3em;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/createListModal.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/createListModal.css ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/*  */\n\n.createList-modal {\n  width: 400px;\n  height: 165px;\n  \n  /* TO BE REMOVED */\n  background-color: var(--card-item-bg-color);\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-content-container {\n  height: 112px;\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-LabelText-container {\n  height: 20px;\n}\n\n.createList-modal-textField-container {\n  \n}\n\n.createList-modal-button-container {\n  display: flex;\n  flex: 1 0 0 ;\n}\n\n.createList-buttons {\n  flex: 1 0 0;\n  background-color: var(--card-above-bg-color);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--default-font-size);\n  color: var(--card-above-font-color);\n  border: none;\n  border-radius: 0;\n\n  /* To center things */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.createList-buttons:hover, \n.createList-buttons:focus {\n  background-color: var(--card-above-bg-color-highlighted);\n}\n\nbutton[data-btn=\"cancel\"] {\n  border-radius: 0 0 0 var(--modal-border-radius);\n  border-right: 0.5px solid var(--button-separation-border-color);\n}\n\nbutton[data-btn=\"create\"] {\n  border-radius: 0 0 var(--modal-border-radius) 0; \n  color: var(--action-color);\n}", "",{"version":3,"sources":["webpack://src/css/createListModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,KAAK;;AAEL;EACE,YAAY;EACZ,aAAa;;EAEb,kBAAkB;EAClB,2CAA2C;EAC3C,uBAAuB;EACvB,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;;AAEA;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,4CAA4C;EAC5C,sCAAsC;EACtC,mCAAmC;EACnC,mCAAmC;EACnC,YAAY;EACZ,gBAAgB;;EAEhB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,wDAAwD;AAC1D;;AAEA;EACE,+CAA+C;EAC/C,+DAA+D;AACjE;;AAEA;EACE,+CAA+C;EAC/C,0BAA0B;AAC5B","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/*  */\n\n.createList-modal {\n  width: 400px;\n  height: 165px;\n  \n  /* TO BE REMOVED */\n  background-color: var(--card-item-bg-color);\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-content-container {\n  height: 112px;\n  padding: 16px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createList-modal-LabelText-container {\n  height: 20px;\n}\n\n.createList-modal-textField-container {\n  \n}\n\n.createList-modal-button-container {\n  display: flex;\n  flex: 1 0 0 ;\n}\n\n.createList-buttons {\n  flex: 1 0 0;\n  background-color: var(--card-above-bg-color);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--default-font-size);\n  color: var(--card-above-font-color);\n  border: none;\n  border-radius: 0;\n\n  /* To center things */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.createList-buttons:hover, \n.createList-buttons:focus {\n  background-color: var(--card-above-bg-color-highlighted);\n}\n\nbutton[data-btn=\"cancel\"] {\n  border-radius: 0 0 0 var(--modal-border-radius);\n  border-right: 0.5px solid var(--button-separation-border-color);\n}\n\nbutton[data-btn=\"create\"] {\n  border-radius: 0 0 var(--modal-border-radius) 0; \n  color: var(--action-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/createTodoModal.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/createTodoModal.css ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createListModal */\n  --gutter: 16px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n/* The Modal (background) */\n.modal {\n  position: absolute;\n  z-index: 1; /* Sit on top */\n\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  \n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  position: relative;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n.createTodo-modal {\n  height: 450px;\n  width: 450px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createTodo-modal-todoinfo-container {\n  flex: 1 0 0;\n  padding: var(--gutter);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-title {\n  flex: 1 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-description {\n  flex: 4 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-category {\n  flex: 1 0 0;\n}\n\n.todoinfo-category-selectBtn {\n  background-color: inherit;\n  color: var(--action-color);\n  padding: 0;\n}\n\n.createTodo-modal-addTodoBtn-container {\n  flex: 0 0 54px;\n\n  display: flex;\n}\n\n.createTodo-buttons {\n  flex: 1 0 0;\n\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius); \n  background-color: var(--card-above-bg-color);\n  /* color: var(--color-text-3); */\n  color: var(--action-color);\n}\n\n.createTodo-buttons:hover,\n.createTodo-buttons:active {\n  background-color: var(--card-above-bg-color-highlighted);\n}", "",{"version":3,"sources":["webpack://src/css/createTodoModal.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;AAChB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB,2BAA2B;AAC3B;EACE,kBAAkB;EAClB,UAAU,EAAE,eAAe;;EAE3B,YAAY,EAAE,eAAe;EAC7B,aAAa,EAAE,gBAAgB;;EAE/B,iCAAiC,EAAE,qBAAqB;AAC1D;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;;EAElB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;;AAGA;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,yCAAyC;EACzC,2CAA2C;;EAE3C,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;;EAEtB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,cAAc;;EAEd,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,wEAAwE;EACxE,4CAA4C;EAC5C,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA;;EAEE,wDAAwD;AAC1D","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #ffffff;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createListModal */\n  --gutter: 16px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n/* The Modal (background) */\n.modal {\n  position: absolute;\n  z-index: 1; /* Sit on top */\n\n  width: 100vw; /* Full width */\n  height: 100vh; /* Full height */\n  \n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  position: relative;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n.createTodo-modal {\n  height: 450px;\n  width: 450px;\n  border: 1px solid black;\n  border-radius: var(--modal-border-radius);\n  background-color: var(--card-item-bg-color);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.createTodo-modal-todoinfo-container {\n  flex: 1 0 0;\n  padding: var(--gutter);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-title {\n  flex: 1 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-description {\n  flex: 4 0 0;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.todoinfo-container-category {\n  flex: 1 0 0;\n}\n\n.todoinfo-category-selectBtn {\n  background-color: inherit;\n  color: var(--action-color);\n  padding: 0;\n}\n\n.createTodo-modal-addTodoBtn-container {\n  flex: 0 0 54px;\n\n  display: flex;\n}\n\n.createTodo-buttons {\n  flex: 1 0 0;\n\n  border-radius: 0 0 var(--modal-border-radius) var(--modal-border-radius); \n  background-color: var(--card-above-bg-color);\n  /* color: var(--color-text-3); */\n  color: var(--action-color);\n}\n\n.createTodo-buttons:hover,\n.createTodo-buttons:active {\n  background-color: var(--card-above-bg-color-highlighted);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/landingPage.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/landingPage.css ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n  \n}\n\n#fold-category-btn {\n  display: none;\n}\n\n#add-category-btn {\n  display: none;\n  background: none;\n  color: var(--color-text-1);\n}\n\n#add-category-btn:active {\n  transform: scale(0.95);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n", "",{"version":3,"sources":["webpack://src/css/landingPage.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n  \n}\n\n#fold-category-btn {\n  display: none;\n}\n\n#add-category-btn {\n  display: none;\n  background: none;\n  color: var(--color-text-1);\n}\n\n#add-category-btn:active {\n  transform: scale(0.95);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/todoDetailsCardView.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/todoDetailsCardView.css ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoDetails-CardView */\n\n.TodoDetails-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  color: var(--color-text-1);\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  border: 1px solid black;\n}\n\n.TodoEdit-Pane {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-header {\n  min-height: 54px;\n  \n  background-color: var(--card-above-bg-color);\n\n  display: flex;\n  align-items: center;\n  padding-left: var(--CardPadder-left);\n  padding-right: var(--CardPadder-right);\n  font-size: var(--label-font-size);\n  color: var(--todo-edit-header-text-color);\n}\n\n.TodoEdit-main {\n  flex: 1 0 0;\n  /* overflow-y: scroll; */\n  display: flex;\n  flex-direction: column;\n\n  padding-top: var(--CardPadder-top);\n  padding-bottom: var(--CardPadder-bottom);\n  padding-right: var(--CardPadder-right);\n  padding-left: var(--CardPadder-left);\n}\n\n.TodoEdit-padder {\n  padding-top: var(--CardPadder-top);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-main-titleRow {\n\n}\n\n.TodoEdit-Tags {\n  display: flex;\n}\n\n.priority-tag {\n  border-radius: 12px;\n  height: 20px;\n  width: 60px;\n  margin-right: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: var(--extra-small-font-size);\n}\n\n.priority-tag:active {\n  transform: scale(0.95)\n}\n\n/* #priority-important-btn {\n  background-color: #EA3232;\n}\n\n#priority-high-btn {\n  background-color: #FCBA3A;\n}\n\n#priority-middle-btn {\n  background-color: #50b767;\n}\n\n#priority-low-btn {\n  background-color: #a6a6a6;\n} */\n\n.priority-btns-not-selected {\n  background-color: #4b4b4b;\n}\n\n.TodoEdit-title-textfield {\n  font-size: var(--todo-edit-textfield-title-font-size);\n}\n\n.TodoEdit-main-tagRow {\n  padding-top: var(--CardPadder-top);\n}\n\n.TodoEdit-CreatedDate {\n  font-size: var(--font-size-base);\n}\n\n", "",{"version":3,"sources":["webpack://src/css/todoDetailsCardView.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,qDAAqD;EACrD,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;;EAExB,sBAAsB;EACtB,6BAA6B;EAC7B,yCAAyC;EACzC,uCAAuC;EACvC,sCAAsC;EACtC,kCAAkC;EAClC,0BAA0B;;EAE1B,yBAAyB;EACzB,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,wBAAwB;EACxB,sCAAsC;EACtC,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,yBAAyB;;AAEzB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,wCAAwC;EACxC,yCAAyC;;EAEzC,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;;EAEhB,4CAA4C;;EAE5C,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,sCAAsC;EACtC,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,wBAAwB;EACxB,aAAa;EACb,sBAAsB;;EAEtB,kCAAkC;EAClC,wCAAwC;EACxC,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;;EAElC,aAAa;EACb,sBAAsB;AACxB;;AAEA;;AAEA;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,uCAAuC;AACzC;;AAEA;EACE;AACF;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;EACE,yBAAyB;AAC3B;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoDetails-CardView */\n\n.TodoDetails-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  color: var(--color-text-1);\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  border: 1px solid black;\n}\n\n.TodoEdit-Pane {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-header {\n  min-height: 54px;\n  \n  background-color: var(--card-above-bg-color);\n\n  display: flex;\n  align-items: center;\n  padding-left: var(--CardPadder-left);\n  padding-right: var(--CardPadder-right);\n  font-size: var(--label-font-size);\n  color: var(--todo-edit-header-text-color);\n}\n\n.TodoEdit-main {\n  flex: 1 0 0;\n  /* overflow-y: scroll; */\n  display: flex;\n  flex-direction: column;\n\n  padding-top: var(--CardPadder-top);\n  padding-bottom: var(--CardPadder-bottom);\n  padding-right: var(--CardPadder-right);\n  padding-left: var(--CardPadder-left);\n}\n\n.TodoEdit-padder {\n  padding-top: var(--CardPadder-top);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoEdit-main-titleRow {\n\n}\n\n.TodoEdit-Tags {\n  display: flex;\n}\n\n.priority-tag {\n  border-radius: 12px;\n  height: 20px;\n  width: 60px;\n  margin-right: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: var(--extra-small-font-size);\n}\n\n.priority-tag:active {\n  transform: scale(0.95)\n}\n\n/* #priority-important-btn {\n  background-color: #EA3232;\n}\n\n#priority-high-btn {\n  background-color: #FCBA3A;\n}\n\n#priority-middle-btn {\n  background-color: #50b767;\n}\n\n#priority-low-btn {\n  background-color: #a6a6a6;\n} */\n\n.priority-btns-not-selected {\n  background-color: #4b4b4b;\n}\n\n.TodoEdit-title-textfield {\n  font-size: var(--todo-edit-textfield-title-font-size);\n}\n\n.TodoEdit-main-tagRow {\n  padding-top: var(--CardPadder-top);\n}\n\n.TodoEdit-CreatedDate {\n  font-size: var(--font-size-base);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/todoListCardView.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/todoListCardView.css ***!
  \****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoList-CardView */\n\n.TodoList-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoList-CardView-header {\n  min-height: 63px;\n  padding-left: 5%;\n  color: var(--todo-item-header-text-color);\n  font-size: var(--todo-item-header-font-size);\n  display: flex;\n  align-items: center;\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.TodoList-CardView-main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n\n  overflow-y: scroll;  \n}\n\n.TodoList-main-rows {\n  min-height: 63px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.TodoItem {\n  width: 90%;\n  height: 48px;\n  color: var(--color-text-1);\n  background-color: var(--todo-item-bg-color);\n  border-radius: var(--todo-item-border-radius);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.TodoItem:hover,\n.TodoItem:focus {\n  border: 1px solid var(--action-color);\n}\n\n.TodoItem:focus {\n  background-color: var(--todo-item-bg-highlighted-color);\n  outline: none;\n}\n\n.TodoItem-checked {\n  color: var(--todo-item-text-checked-color);\n}\n\n.TodoItem-checkBox {\n  min-width: 48px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\n.TodoItem-title {\n  flex: 1 0 0;\n\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.TodoItem-title-checked {\n  text-decoration: line-through;\n}\n\n.TodoItem-delete-btn {\n  margin-right: 20px;\n}", "",{"version":3,"sources":["webpack://src/css/todoListCardView.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,0BAA0B;EAC1B,qDAAqD;EACrD,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;EAC5B,uBAAuB;EACvB,uBAAuB;EACvB,8CAA8C;EAC9C,2BAA2B;EAC3B,2BAA2B;EAC3B,yBAAyB;EACzB,6BAA6B;EAC7B,yCAAyC;EACzC,gCAAgC;EAChC,8BAA8B;EAC9B,0CAA0C;EAC1C,yCAAyC;EACzC,iCAAiC;EACjC,uCAAuC;EACvC,uBAAuB;EACvB,gCAAgC;EAChC,oBAAoB;EACpB,cAAc;;EAEd,2BAA2B;EAC3B,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;EAC3B,wBAAwB;;EAExB,sBAAsB;EACtB,6BAA6B;EAC7B,yCAAyC;EACzC,uCAAuC;EACvC,sCAAsC;EACtC,kCAAkC;EAClC,0BAA0B;;AAE5B;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,oBAAoB;;AAEpB;EACE,iCAAiC;EACjC,qCAAqC;EACrC,8BAA8B;EAC9B,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA,sBAAsB;;AAEtB;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,wCAAwC;EACxC,yCAAyC;;EAEzC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;EACzC,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,0BAA0B;EAC1B,2CAA2C;EAC3C,6CAA6C;EAC7C,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,uDAAuD;EACvD,aAAa;AACf;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --action-color: #0080ff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* TodoList-CardView */\n\n.TodoList-CardView {\n  width: 350px;\n  height: 450px;\n  min-width: 350px;\n  min-height: 450px;\n  background-color: var(--card-bg-1-color);\n  border-radius: var(--modal-border-radius);\n\n  display: flex;\n  flex-direction: column;\n}\n\n.TodoList-CardView-header {\n  min-height: 63px;\n  padding-left: 5%;\n  color: var(--todo-item-header-text-color);\n  font-size: var(--todo-item-header-font-size);\n  display: flex;\n  align-items: center;\n  font-weight: var(--font-weight-semi-bold);\n}\n\n.TodoList-CardView-main {\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n\n  overflow-y: scroll;  \n}\n\n.TodoList-main-rows {\n  min-height: 63px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.TodoItem {\n  width: 90%;\n  height: 48px;\n  color: var(--color-text-1);\n  background-color: var(--todo-item-bg-color);\n  border-radius: var(--todo-item-border-radius);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.TodoItem:hover,\n.TodoItem:focus {\n  border: 1px solid var(--action-color);\n}\n\n.TodoItem:focus {\n  background-color: var(--todo-item-bg-highlighted-color);\n  outline: none;\n}\n\n.TodoItem-checked {\n  color: var(--todo-item-text-checked-color);\n}\n\n.TodoItem-checkBox {\n  min-width: 48px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n}\n\n.TodoItem-title {\n  flex: 1 0 0;\n\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.TodoItem-title-checked {\n  text-decoration: line-through;\n}\n\n.TodoItem-delete-btn {\n  margin-right: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/css/categorySelectionModal.css":
/*!********************************************!*\
  !*** ./src/css/categorySelectionModal.css ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./categorySelectionModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/categorySelectionModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/createListModal.css":
/*!*************************************!*\
  !*** ./src/css/createListModal.css ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./createListModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/createListModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createListModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/createTodoModal.css":
/*!*************************************!*\
  !*** ./src/css/createTodoModal.css ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./createTodoModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/createTodoModal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createTodoModal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/landingPage.css":
/*!*********************************!*\
  !*** ./src/css/landingPage.css ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_landingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./landingPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/landingPage.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_landingPage_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_landingPage_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/todoDetailsCardView.css":
/*!*****************************************!*\
  !*** ./src/css/todoDetailsCardView.css ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todoDetailsCardView.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/todoDetailsCardView.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/todoListCardView.css":
/*!**************************************!*\
  !*** ./src/css/todoListCardView.css ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todoListCardView.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/todoListCardView.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todoListCardView_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Display/display.js":
/*!********************************!*\
  !*** ./src/Display/display.js ***!
  \********************************/
/*! namespace exports */
/*! export Display [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => /* binding */ Display
/* harmony export */ });
/* harmony import */ var _moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleLoaders/loadModules.js */ "./src/Display/moduleLoaders/loadModules.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "./src/Display/icon.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ "./src/Display/get.js");
/* harmony import */ var _TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TodoList/TodoList.js */ "./src/TodoList/TodoList.js");
/* harmony import */ var _Todo_Todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Todo/Todo.js */ "./src/Todo/Todo.js");








// // FUNCTIONALITIES
// import { markCompleted } from './functionalities/markComplete';

const icon = (0,_icon_js__WEBPACK_IMPORTED_MODULE_1__.Icon)();
const todoList = (0,_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_3__.TodoList)();
const get = (0,_get_js__WEBPACK_IMPORTED_MODULE_2__.Get)().publicAPI;





const Display = () => {

  const closeModal = (modal) => {
    modal.parentNode.remove();
  }

  const attachModalCloser = (modal) => {
    window.addEventListener('click', function closeThisModal(e) {
      if (e.target === modal.parentNode) {
        closeModal(modal);
        window.removeEventListener('click', closeThisModal);
      }
    })
  }

  const activateMarker = (marker) => {
    const markerId = marker.getAttribute('id');
    marker.addEventListener('click', () => {
      if (markerId === 'notCompletedMarker') {
        const todoNumValue = get.getTodoNumValue(marker);
        const todoMainrow = get.getOneTodoListMainRow(todoNumValue);
        markCompleted(todoMainrow, todoList);
      } else {
        // Set Todo in Display Not completed
        console.log('what');
        // Set Todo in todolist Not completed
      }
    })
  }


  const markCompleted = (todoMainRow) => {
    // TODOLIST
    const category = get.getCurrentTodoListCategory();
    const todoNumValue = todoMainRow.getAttribute('data-todo');
    const todo = todoList.getTodos(category)[todoNumValue];
    todo.markCompleted();

    // DISPLAY
    const todoItem = todoMainRow.children[0];
    todoItem.classList.add('TodoItem-checked');
    const marker = todoItem.children[0].children[0];
    marker.setAttribute('class', 'fas fa-check-circle');
    marker.setAttribute('id', 'completedMarker');
    const todoItemTitle = todoItem.children[1];
    todoItemTitle.classList.add('TodoItem-title-checked');
    
    const deleteBtn = icon.loadTodoItemDeleteBtn();
    
    todoItem.appendChild(deleteBtn);


  }

  const markUncompleted = (todoMainRow) => {

  }

  const addTodo = (todo, index) => {
    const title = todo.getTitle();
    const completed = todo.isCompleted();
    const todoListCardViewMain = get.getTodoListCardViewMain();
    const todoItem = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoItem)(title, index, completed);
    const marker = todoItem.children[0].children[0].children[0];
    activateMarker(marker);
    
    todoListCardViewMain.appendChild(todoItem);
  }

  const showTodoDetailsCardView = () => {
    const cardViewContainer = get.getCardViewContainer();
    cardViewContainer.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoDetailsCardView)());
  }

  const openCreateTodoModal = () => {
    const container = get.getContainer();
    const categories = todoList.getAllCategories();
    
    // To just load the first category
    const createTodoModalContent = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCreateTodoModal)(categories[0]);
    container.appendChild(createTodoModalContent);
  }

  const openCreateListModal = () => {
    const container = get.getContainer();
    const createListModalContent = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCreateListModal)();
    container.appendChild(createListModalContent);
  }

  const removeCheckMarker = () => {
    const checkMarker = get.getCheckMarker();
    checkMarker.remove();
  }

  const changeCategoryInCreateTodoModal = (category) => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.innerText = category;
  }

  const placeMarker = (elem) => {
    const marker = icon.loadCheckMarker();
    const categoryTitle = elem.childNodes[0];
    const hasMarker = !(categoryTitle.children.length === 0);
    if (!hasMarker) {
      const category = categoryTitle.textContent;
      
      removeCheckMarker();
      categoryTitle.appendChild(marker);
      changeCategoryInCreateTodoModal(category);
    } 
  }

  const openCategorySelectionModal = (categories) => {
    const container = get.getContainer();
    const categorySelectionModalContent = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCategorySelectionModal)(categories);
    container.appendChild(categorySelectionModalContent);

    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    const selectedCategory = categorySelectBtn.textContent;

    const itemsTitle = get.getCategorySelectionModalItemsTitle();
    itemsTitle.forEach(item => {
      const categoryTitle = item.textContent;
      if (categoryTitle === selectedCategory) {
        item.appendChild(icon.loadCheckMarker());
      }   
    })
  }

  const activateAddTodoBtn = () => {
    const addTodoBtn = get.getAddTodoBtn();
    addTodoBtn.addEventListener('click', (event) => {
      const title = get.getTitle();
      if (title.length > 0) {
        const description = get.getDescription();
        const category = get.getCategory();
        console.log(category);
        // ALL WORKING. But I do need to add it to the 'todolist'
        todoList.addTodo((0,_Todo_Todo_js__WEBPACK_IMPORTED_MODULE_4__.Todo)(title, description, category));


        closeModal(get.getCreateTodoModal());
        loadTodoListCardView(category);
      }
    });
  }

  const activateCreateTodoBtn = () => {
    const createTodoBtn = get.getCreateTodoBtn();
    createTodoBtn.addEventListener('click', (event) => {
      openCreateTodoModal();
      attachModalCloser(get.getCreateTodoModal());
      activateCategorySelectBtn();
      activateAddTodoBtn();
      
    })
  }

  const activateSelectingCategory = () => {
    const categories = document.querySelectorAll('.categorySelection-modal-items');
    categories.forEach(category => {
      category.addEventListener('click', () => {
        placeMarker(category);
        closeModal(get.getCategorySelectionModal());
      });
    })
  }

  const activateCategorySelectBtn = () => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.addEventListener('click', (event) => {
      const categories = todoList.getAllCategories();
      openCategorySelectionModal(categories);
      activateSelectingCategory();
      attachModalCloser(get.getCategorySelectionModal());
    })
  }

  const activateUnfoldCategoryBtn = () => {
    const unfoldCategoryBtn = get.getUnfoldCategoryBtn();
    unfoldCategoryBtn.addEventListener('click', () => {
      // Read from todolist what categories exist
      const categories = todoList.getAllCategories();
      // Make each cataegory item and append it to the display
      const categoryListUl = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCategories)(categories);
      const navBarCategory = get.getNavBarCategory();
      navBarCategory.appendChild(categoryListUl);
      // Change 'v' to '^'
      showFoldBtn();
      showAddCategoryBtn();
      activateFoldCategoryBtn();
      activateCategoryListItems();

      // Add '+' createList button
    })
  }

  const activateFoldCategoryBtn = () => {
    const foldCategoryBtn = get.getFoldCategoryBtn();
    foldCategoryBtn.addEventListener('click', function changeToUnfold() {
      showUnfoldBtn();
      hideAddCategoryBtn();
      removeCategoryList();
      foldCategoryBtn.removeEventListener('click', changeToUnfold);
    })
  }

  const activateAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.addEventListener('click', () => {
      openCreateListModal();
      attachModalCloser(get.getCreateListModal());
      activateCreateListCancelBtn();
      activateCreateListCreateBtn();
    });
  }


  const activateCreateListCancelBtn = () => {
    const cancelBtn = get.getCreateListCancelBtn();
    cancelBtn.addEventListener('click', () => {
      closeModal(get.getCreateListModal());
    });
  }

  const activateCreateListCreateBtn = () => {
    const createBtn = get.getCreateListCreateBtn();
    createBtn.addEventListener('click', () => {
      const title = get.getCreateListTitle();
      if (title.length > 0) {
        todoList.addNewCategory(title);
        removeCategoryList();
        const categoryListUl = (0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCategories)(todoList.getAllCategories());
        const navBarCategory = get.getNavBarCategory();
        navBarCategory.appendChild(categoryListUl);
        activateCategoryListItems();
        
        closeModal(get.getCreateListModal());
      }
    })
  }

  const activateCategoryListItems = () => {
    const categoryLis = get.getCategoryItems();
    categoryLis.forEach(li => {
      li.addEventListener('click', () => {
        // If clicked, 
        const category = li.innerText;
        loadTodoListCardView(category);
      })
    })
  }



  const changeTodoListCardViewTitle = (title) => {
    const todoListHeader = get.getTodoListCardViewHeader();
    todoListHeader.innerText = title;
  }

  const loadTodoListCardView = (category) => {
    // Get header and change the name.
    changeTodoListCardViewTitle(category);
    // Remove Todo List
    removeTodoList();
    renderTodoList(category);
  }

  const renderTodoList = (category) => {
    const todos = todoList.getTodos(category);
    todos.forEach((todo, index) => {
      addTodo(todo, index);
    })
    
    
  }

  const removeTodoList = () => {
    const todos = get.getTodoListMainRows()
    todos.forEach(todo => {
      todo.remove();
    })
  }

  const showFoldBtn = () => {    
    const unfoldBtn = get.getUnfoldCategoryBtn();
    unfoldBtn.style.display = "none";
    const foldBtn = get.getFoldCategoryBtn();
    foldBtn.style.display = "inline-block";
  }

  const showUnfoldBtn = () => {
    const foldBtn = get.getFoldCategoryBtn();
    foldBtn.style.display = "none";
    const unfoldBtn = get.getUnfoldCategoryBtn();
    unfoldBtn.style.display = "inline-block";
  }

  const showAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.style.display = "inline-block";
  }

  const hideAddCategoryBtn = () => {
    const addCategoryBtn = get.getAddCategoryBtn();
    addCategoryBtn.style.display = "none";
  }

  const removeCategoryList = () => {
    const categoryList = get.getNavBarCategoryList();
    categoryList.remove();
  }

  const changeToUncompleteMarker = () => {
    const checkCompleteMarker = get.getCheckCompleteBtn();
    checkCompleteMarker.remove();
    const uncompleteMarker = icon.loadUncompleteMarker();
  }

  return {
    closeModal,
    attachModalCloser,
    addTodo,
    showTodoDetailsCardView,
    activateCreateTodoBtn,
    activateUnfoldCategoryBtn,
    activateAddCategoryBtn,
  }
}








/***/ }),

/***/ "./src/Display/get.js":
/*!****************************!*\
  !*** ./src/Display/get.js ***!
  \****************************/
/*! namespace exports */
/*! export Get [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Get": () => /* binding */ Get
/* harmony export */ });
const Get = () => {
  const getTodoInfoCategorySelectBtn = () => {
    return document.querySelector('.todoinfo-category-selectBtn');
  }

  const getNavBarCategory = () => {
    const navBarCategory = document.querySelector('.navbar-category');
    return navBarCategory;
  }

  const getTodoListCardViewMain = () => {
    const todoListCardViewMain = document.querySelector('.TodoList-CardView-main');
    return todoListCardViewMain;
  }

  const getTodoListCardViewHeader = () => {
    const todoListCardViewHeader = document.querySelector('.TodoList-CardView-header');
    return todoListCardViewHeader;
  }

  const getCardViewContainer = () => {
    const cardViewContainer = document.querySelector('.CardView-Container');
    return cardViewContainer;
  }
  
  const getAddTodoBtn = () => {
    return document.querySelector('.createTodo-buttons');
  }

  const getContainer = () => {
    return document.querySelector('.container');
  }

  const getCreateTodoBtn = () => {
    return document.querySelector('#createTodoBtn');
  }

  const getCategorySelectionModal = () => {
    return document.querySelector('.categorySelection-modal');
  }

  const getCreateTodoModal = () => {
    return document.querySelector('.createTodo-modal');
  }

  const getCreateListModal = () => {
    return document.querySelector('.createList-modal');
  }

  const getTitle = () => {
    const titleTextarea = document.querySelector('.todoinfo-title textarea');
    return titleTextarea.value;
  }

  const getDescription = () => {
    const descriptionTextarea = document.querySelector('.todoinfo-description textarea');
    return descriptionTextarea.value;
  }

  const getCategory = () => {
    const categoryBtn = document.querySelector('.todoinfo-category button');
    return categoryBtn.textContent;
  }

  const getTodoBasicDetail = () => {
    const title = getTitle();
    const description =  getDescription();
    const category = getCategory();
    
    return { title, description, category };
  }

  const getCheckMarker = () => {
    const checkMarker = document.querySelector('.fa-check-circle');
    return checkMarker;
  }

  const getCategorySelectionModalItemsTitle = () => {
    return document.querySelectorAll('.categorySelection-modal-items-title');
  }

  const getUnfoldCategoryBtn = () => {
    return document.querySelector('#unfold-category-btn');
  }

  const getFoldCategoryBtn = () => {
    return document.querySelector('#fold-category-btn');
  }

  const getNavBarCategoryHeader = () => {
    return document.querySelector('.navbar-category-header');
  }

  const getAddCategoryBtn = () => {
    return document.querySelector('#add-category-btn');
  }

  const getNavBarCategoryList = () => {
    return document.querySelector('.navbar-category-list');
  }

  const getCreateListCreateBtn = () => {
    return document.querySelectorAll('.createList-buttons')[1];
  }

  const getCreateListCancelBtn = () => {
    return document.querySelectorAll('.createList-buttons')[0];
  }

  const getCreateListTitle = () => {
    return document.querySelector('.textField-title').value;
  }

  const getCategoryItems = () => {
    return document.querySelectorAll('.category-items');
  }

  const getTodoListMainRows = () => {
    return document.querySelectorAll('.TodoList-main-rows');
  }

  const getCheckCompleteMarker = () => {
    return document.querySelector('.TodoItem-checkBox').children[0];
  }

  const getTodoListMainRowsOfCheckMarker = (marker) => {
    const todoItemCheckBox = marker.parentNode;
    const todoItem = todoItemCheckBox.parentNode;
    const todoListMainRows = todoItem.parentNode;

    return todoListMainRows;
  }

  const getTodoNumValue = (marker) => {
    const todoMainRow = getTodoListMainRowsOfCheckMarker(marker);
    return todoMainRow.getAttribute('data-todo');
  }



  const getTodoItemCompleteMarkers = () => {
    return document.querySelectorAll('.TodoItem-checkBox .fa-circle')
  }

  const getOneTodoListMainRow = (index) => {
    return document.querySelector(`div[data-todo='${index}'`);
  }

  const getCurrentTodoListCategory = () => {
    return getTodoListCardViewHeader().innerText;
  }



  

  const publicAPI = {
    getCurrentTodoListCategory,
    getOneTodoListMainRow,
    getTodoNumValue,
    getTodoItemCompleteMarkers,
    getCheckCompleteMarker,
    getTodoListMainRows,
    getCategoryItems,
    getCreateListTitle,
    getTodoInfoCategorySelectBtn,
    getNavBarCategory,
    getNavBarCategoryHeader,
    getNavBarCategoryList,
    getTodoListCardViewMain,
    getTodoListCardViewHeader,
    getCreateListCancelBtn,
    getCreateListCreateBtn,
    getCardViewContainer,
    getAddTodoBtn,
    getContainer,
    getCreateTodoBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    getCreateListModal,
    getTitle,
    getDescription,
    getCategory,
    getTodoBasicDetail,
    getCheckMarker,
    getCategorySelectionModalItemsTitle,
    getUnfoldCategoryBtn,
    getFoldCategoryBtn,
    getAddCategoryBtn
  }

  return {
    publicAPI
  }
}




/***/ }),

/***/ "./src/Display/icon.js":
/*!*****************************!*\
  !*** ./src/Display/icon.js ***!
  \*****************************/
/*! namespace exports */
/*! export Icon [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => /* binding */ Icon
/* harmony export */ });

const Icon = () => {
 
  const loadCheckMarker = () => {
    const checkMarker = document.createElement('i');
    checkMarker.classList.add('far', 'fa-check-circle');
  
    return checkMarker;
  }

  const loadUncompleteMarker = () => {
    const UncompleteMarker = document.createElement('i');
    UncompleteMarker.classList.add('fas', 'fa-check-circle');

    return UncompleteMarker;
  }

  const loadCompleteMarker = () => {
    const completeMarker = document.createElement('i');
    completeMarker.classList.add('far', 'fa-circle');

    return completeMarker;
  }


  const loadTodoItemDeleteBtn = () => {
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');

    return deleteBtn;
  }



  

  return {
    loadCheckMarker,
    loadUncompleteMarker,
    loadCompleteMarker,
    loadTodoItemDeleteBtn,
  }
}





/***/ }),

/***/ "./src/Display/moduleLoaders/loadCategories.js":
/*!*****************************************************!*\
  !*** ./src/Display/moduleLoaders/loadCategories.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export loadCategories [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCategories": () => /* binding */ loadCategories
/* harmony export */ });
const loadCategories = (categories) => {
  const navBarCategoryList = document.createElement('ul');
  navBarCategoryList.classList.add('navbar-category-list');

  categories.forEach(category => {
    const li = document.createElement('li');
    li.classList.add('category-items');
    li.innerText = category;

    navBarCategoryList.appendChild(li);
  })

  return navBarCategoryList;
}



/***/ }),

/***/ "./src/Display/moduleLoaders/loadCategorySelectionModal.js":
/*!*****************************************************************!*\
  !*** ./src/Display/moduleLoaders/loadCategorySelectionModal.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export loadCategorySelectionModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCategorySelectionModal": () => /* binding */ loadCategorySelectionModal
/* harmony export */ });
/* harmony import */ var _css_categorySelectionModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/categorySelectionModal.css */ "./src/css/categorySelectionModal.css");

const createCategorySelectionModalItems = (title) => {
  const categorySelectionModalItems = document.createElement('button');
  categorySelectionModalItems.classList.add('categorySelection-modal-items');

  const categorySelectionModalItemsTitle = document.createElement('div');
  categorySelectionModalItemsTitle.classList.add('categorySelection-modal-items-title');
  categorySelectionModalItemsTitle.innerText = title;

  categorySelectionModalItems.appendChild(categorySelectionModalItemsTitle);

  return categorySelectionModalItems;
}

const loadCategorySelectionModal = (categories) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const categorySelectionModal = document.createElement('div');
  categorySelectionModal.classList.add('categorySelection-modal');
  categorySelectionModal.classList.add('modal-content');

  const categorySelectionModalHeader = document.createElement('div');
  categorySelectionModalHeader.classList.add('categorySelection-modal-header');
  
  const categorySelectionModalTitle = document.createElement('div');
  categorySelectionModalTitle.classList.add('categorySelection-modal-title');
  categorySelectionModalTitle.innerText = 'Move to...';
  
  const categorySelectionModalMain = document.createElement('div');
  categorySelectionModalMain.classList.add('categorySelection-modal-main')

  categorySelectionModal.appendChild(categorySelectionModalHeader);
  categorySelectionModalHeader.appendChild(categorySelectionModalTitle);

  categorySelectionModal.appendChild(categorySelectionModalMain);
 
  categories.forEach(category => {
    const categoryItem = createCategorySelectionModalItems(category);


    categorySelectionModalMain.appendChild(categoryItem);
  });
  // const top = createCategorySelectionModalItems('The Odin Project');
  // const gym = createCategorySelectionModalItems('gym');
  // const work = createCategorySelectionModalItems('work');
  // const school = createCategorySelectionModalItems('school');
  // const life = createCategorySelectionModalItems('life');
  // const jiujitsu = createCategorySelectionModalItems('jiujitsu');
  
  // categorySelectionModalMain.appendChild(top);
  // categorySelectionModalMain.appendChild(gym);
  // categorySelectionModalMain.appendChild(work);
  // categorySelectionModalMain.appendChild(school);
  // categorySelectionModalMain.appendChild(life);
  // categorySelectionModalMain.appendChild(jiujitsu);

  modal.appendChild(categorySelectionModal);
  
  return modal;
}



// const body = document.querySelector('body');
// const categorySelectionModal = getCategorySelectionModal();
// body.appendChild(categorySelectionModal);










/***/ }),

/***/ "./src/Display/moduleLoaders/loadCreateListModal.js":
/*!**********************************************************!*\
  !*** ./src/Display/moduleLoaders/loadCreateListModal.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export loadCreateListModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCreateListModal": () => /* binding */ loadCreateListModal
/* harmony export */ });
/* harmony import */ var _css_createListModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/createListModal.css */ "./src/css/createListModal.css");


const loadCreateListModal = () => {
  const modal = document.createElement('div')
  modal.classList.add('modal');

  const createListModal = document.createElement('div');
  createListModal.classList.add('createList-modal');
  createListModal.classList.add('modal-content');

  // createList-modal-content-container
  const createListModalContentContainer = document.createElement('div');
  createListModalContentContainer.classList.add('createList-modal-content-container');

  const createListModalLabelTextContainer = document.createElement('div');
  createListModalLabelTextContainer.classList.add('createList-modal-LabelText-container');
  
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'NAME THIS LIST';

  const createListModalTextFieldContainer = document.createElement('div');
  createListModalTextFieldContainer.classList.add('createList-modal-textField-container');

  const createListModalTextField = document.createElement('textarea');
  createListModalTextField.classList.add('textField', 'textField-title');
  createListModalTextField.setAttribute('rows', '1');

  // createList-modal-button-container
  const createListModalButtonContainer = document.createElement('div');
  createListModalButtonContainer.classList.add('createList-modal-button-container');

  const cancel = document.createElement('button');
  cancel.classList.add('createList-buttons');
  cancel.setAttribute('data-btn', 'cancel');
  cancel.innerText = 'Cancel';

  const create = document.createElement('button');
  create.classList.add('createList-buttons');
  create.setAttribute('data-btn', 'create');
  create.innerText = 'Create';

  // Structuring
  modal.appendChild(createListModal);

  createListModal.appendChild(createListModalContentContainer);
  createListModal.appendChild(createListModalButtonContainer);

  // CreateListModalContentContainer
  createListModalContentContainer.appendChild(createListModalLabelTextContainer);
  createListModalContentContainer.appendChild(createListModalTextFieldContainer);
  
  createListModalLabelTextContainer.appendChild(labelText);
  createListModalTextFieldContainer.appendChild(createListModalTextField);

  // createListModalButtonContainer
  createListModalButtonContainer.appendChild(cancel);
  createListModalButtonContainer.appendChild(create);

  return modal;
}



// const body = document.querySelector('body');
// const createListModal = getCreateListModal();
// body.appendChild(createListModal);


/***/ }),

/***/ "./src/Display/moduleLoaders/loadCreateTodoModal.js":
/*!**********************************************************!*\
  !*** ./src/Display/moduleLoaders/loadCreateTodoModal.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export loadCreateTodoModal [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCreateTodoModal": () => /* binding */ loadCreateTodoModal
/* harmony export */ });
/* harmony import */ var _css_createTodoModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/createTodoModal.css */ "./src/css/createTodoModal.css");


const loadTodoinfoContainerTitle = () => {
  const todoinfoContainerTitle = document.createElement('div');
  todoinfoContainerTitle.classList.add('todoinfo-container-title');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'TITLE';

  const todoinfoTitle = document.createElement('div');
  todoinfoTitle.classList.add('todoinfo-title');

  const titleTextarea = document.createElement('textarea');
  titleTextarea.classList.add('textField', 'textField-title')
  titleTextarea.setAttribute('rows', '1');
  titleTextarea.setAttribute('placeholder', 'I want to...');

  todoinfoContainerTitle.appendChild(labelText);
  todoinfoContainerTitle.appendChild(todoinfoTitle);
  todoinfoTitle.appendChild(titleTextarea);

  return todoinfoContainerTitle;
}

const loadTodoinfoContainerDescription = () => {
  const todoinfoContainerDescription = document.createElement('div');
  todoinfoContainerDescription.classList.add('todoinfo-container-description');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'DESCRIPTION';

  const todoinfoDescription = document.createElement('div');
  todoinfoDescription.classList.add('todoinfo-description');

  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.classList.add('textField', 'textField-description');
  descriptionTextarea.setAttribute('rows', '10');
  descriptionTextarea.setAttribute('placeholder', 'Insert your notes here');

  todoinfoContainerDescription.appendChild(labelText);
  todoinfoContainerDescription.appendChild(todoinfoDescription);
  todoinfoDescription.appendChild(descriptionTextarea);

  return todoinfoContainerDescription;
}

const loadTodoinfoContainerCategory = (category) => {
  const todoinfoContainerCategory = document.createElement('div');
  todoinfoContainerCategory.classList.add('todoinfo-container-category');

  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = 'CATEGORY';

  const todoinfoCategory = document.createElement('div');
  todoinfoCategory.classList.add('todoinfo-category');

  const categorySelectionBtn = document.createElement('button');
  categorySelectionBtn.classList.add('todoinfo-category-selectBtn');
  // This needs to be changed sometimes
  categorySelectionBtn.innerText = category;

  todoinfoContainerCategory.appendChild(labelText);
  todoinfoContainerCategory.appendChild(todoinfoCategory);
  todoinfoCategory.appendChild(categorySelectionBtn);

  return todoinfoContainerCategory;
}

const loadTodoInfoContainer = (category) => {
  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.classList.add('createTodo-modal-todoinfo-container');

  const todoinfoContainerTitle = loadTodoinfoContainerTitle();
  const todoinfoContainerDescription = loadTodoinfoContainerDescription();
  const todoinfoContainerCategory = loadTodoinfoContainerCategory(category);

  todoInfoContainer.appendChild(todoinfoContainerTitle);
  todoInfoContainer.appendChild(todoinfoContainerDescription);
  todoInfoContainer.appendChild(todoinfoContainerCategory);

  return todoInfoContainer;
}

const loadAddTodoBtnContainer = () => {
  const addTodoBtnContainer = document.createElement('div');
  addTodoBtnContainer.classList.add('createTodo-modal-addTodoBtn-container');

  const createTodoBtns = document.createElement('button');
  createTodoBtns.classList.add('createTodo-buttons');
  createTodoBtns.innerText = "Add Todo";

  addTodoBtnContainer.appendChild(createTodoBtns);

  return addTodoBtnContainer;
}

// Return createTodoModal Contents
const loadCreateTodoModal = (category) => {
  const modal = document.createElement('div')
  modal.classList.add('modal');

  const createTodoModal = document.createElement('div');
  createTodoModal.classList.add('createTodo-modal');
  createTodoModal.classList.add('modal-content');

  const todoInfoContainer = loadTodoInfoContainer(category);
  const addTodoBtnContainer = loadAddTodoBtnContainer();
  
  createTodoModal.appendChild(todoInfoContainer);
  createTodoModal.appendChild(addTodoBtnContainer);

  modal.appendChild(createTodoModal);

  return modal;
}






/***/ }),

/***/ "./src/Display/moduleLoaders/loadModules.js":
/*!**************************************************!*\
  !*** ./src/Display/moduleLoaders/loadModules.js ***!
  \**************************************************/
/*! namespace exports */
/*! export loadCategories [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadCategories.js .loadCategories */
/*! export loadCategorySelectionModal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadCategorySelectionModal.js .loadCategorySelectionModal */
/*! export loadCreateListModal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadCreateListModal.js .loadCreateListModal */
/*! export loadCreateTodoModal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadCreateTodoModal.js .loadCreateTodoModal */
/*! export loadTodoDetailsCardView [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadTodoDetailsCardView.js .loadTodoDetailsCardView */
/*! export loadTodoItem [provided] [no usage info] [missing usage info prevents renaming] -> ./src/Display/moduleLoaders/loadTodoItem.js .loadTodoItem */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodoItem": () => /* reexport safe */ _loadTodoItem_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoItem,
/* harmony export */   "loadCategorySelectionModal": () => /* reexport safe */ _loadCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_1__.loadCategorySelectionModal,
/* harmony export */   "loadCreateListModal": () => /* reexport safe */ _loadCreateListModal_js__WEBPACK_IMPORTED_MODULE_2__.loadCreateListModal,
/* harmony export */   "loadCreateTodoModal": () => /* reexport safe */ _loadCreateTodoModal_js__WEBPACK_IMPORTED_MODULE_3__.loadCreateTodoModal,
/* harmony export */   "loadTodoDetailsCardView": () => /* reexport safe */ _loadTodoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_4__.loadTodoDetailsCardView,
/* harmony export */   "loadCategories": () => /* reexport safe */ _loadCategories_js__WEBPACK_IMPORTED_MODULE_5__.loadCategories
/* harmony export */ });
/* harmony import */ var _loadTodoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTodoItem.js */ "./src/Display/moduleLoaders/loadTodoItem.js");
/* harmony import */ var _loadCategorySelectionModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadCategorySelectionModal.js */ "./src/Display/moduleLoaders/loadCategorySelectionModal.js");
/* harmony import */ var _loadCreateListModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadCreateListModal.js */ "./src/Display/moduleLoaders/loadCreateListModal.js");
/* harmony import */ var _loadCreateTodoModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadCreateTodoModal.js */ "./src/Display/moduleLoaders/loadCreateTodoModal.js");
/* harmony import */ var _loadTodoDetailsCardView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadTodoDetailsCardView.js */ "./src/Display/moduleLoaders/loadTodoDetailsCardView.js");
/* harmony import */ var _loadCategories_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadCategories.js */ "./src/Display/moduleLoaders/loadCategories.js");











/***/ }),

/***/ "./src/Display/moduleLoaders/loadTodoDetailsCardView.js":
/*!**************************************************************!*\
  !*** ./src/Display/moduleLoaders/loadTodoDetailsCardView.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export loadTodoDetailsCardView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodoDetailsCardView": () => /* binding */ loadTodoDetailsCardView
/* harmony export */ });
/* harmony import */ var _css_todoDetailsCardView_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/todoDetailsCardView.css */ "./src/css/todoDetailsCardView.css");


// Universal Functions
const loadLabelText = (label) => {
  const labelText = document.createElement('div');
  labelText.classList.add('Label__Text');
  labelText.innerText = label;

  return labelText;
}

const capitalizeFirstLetter = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalized;
}

const loadPriorityBtn = (importance) => {
  const priorityBtn = document.createElement('button');
  const id = `priority-${importance}-btn`;
  priorityBtn.setAttribute('id', id);
  // innertext of btn has 'Importance', not 'impmortance'
  priorityBtn.innerText = capitalizeFirstLetter(importance);

  priorityBtn.classList.add('priority-tag', 'priority-btns-not-selected');

  return priorityBtn;
}

const loadTitleRow = () => {
  const titleRow = document.createElement('div');
  titleRow.classList.add('TodoEdit-main-titleRow', 'TodoEdit-padder');
  
  const labelText = loadLabelText('TITLE');
  
  const titleTextArea = document.createElement('textarea');
  titleTextArea.classList.add('textField', 'TodoEdit-title-textfield');
  titleTextArea.setAttribute('rows', '1');


  titleRow.appendChild(labelText);
  titleRow.appendChild(titleTextArea);

  return titleRow;
}

const loadTagRow = () => {
  const tagRow = document.createElement('div');
  tagRow.classList.add('TodoEdit-main-tagRow', 'TodoEdit-padder');

  const labelText = loadLabelText('TAGS');
  const tags = document.createElement('div');
  tags.classList.add('TodoEdit-Tags');
  
  tagRow.appendChild(labelText);
  tagRow.appendChild(tags);

  tags.appendChild(loadPriorityBtn('important'));
  tags.appendChild(loadPriorityBtn('high'));
  tags.appendChild(loadPriorityBtn('middle'));
  tags.appendChild(loadPriorityBtn('low'));

  return tagRow;
}

const loadDueDateRow = () => {
  const dueDateRow = document.createElement('div');
  dueDateRow.classList.add('TodoEdit-main-DueDateRow', 'TodoEdit-padder');

  const labelText = loadLabelText('DUE DATE');

  const dueDateInputBox = document.createElement('div');
  dueDateInputBox.classList.add('TodoEdit-DueDateBox');

  // Should be its own module later
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'TodoEdit-DueDate');
  dateInput.setAttribute('name', 'DueDate');
  dateInput.setAttribute('value', '2020-11-03');
  dateInput.setAttribute('min', '2020-11-03');

  // Appending Child
  dueDateRow.appendChild(labelText);
  dueDateRow.appendChild(dueDateInputBox);
  
  dueDateInputBox.appendChild(dateInput);

  return dueDateRow;
}

const loadDescriptionRow = () => {
  const descriptionRow = document.createElement('div');
  descriptionRow.classList.add('TodoEdit-main-DescriptionRow', 'TodoEdit-padder');

  const labelText = loadLabelText('DESCRIPTION');

  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('textField', 'textField-description');
  descriptionTextArea.setAttribute('rows', '7');

  descriptionRow.appendChild(labelText);
  descriptionRow.appendChild(descriptionTextArea);

  return descriptionRow;
}

const loadCreatedDateRow = (date) => {
  // Maybe I can import some library to get today's date

  const createdDateRow = document.createElement('div');
  createdDateRow.classList.add('TodoEdit-main-CreatedDateRow', 'TodoEdit-padder');

  const labelText = loadLabelText('CREATED DATE');

  const createdDate = document.createElement('div');
  createdDate.classList.add('TodoEdit-CreatedDate');
  // DYNAMIC DATE NEEDED
  createdDate.innerText = '2020.11.03';

  createdDateRow.appendChild(labelText);
  createdDateRow.appendChild(createdDate);

  return createdDateRow;
}

const loadTodoEditHeader = () => {
  const todoEditHeader = document.createElement('div');
  todoEditHeader.classList.add('TodoEdit-header');
  todoEditHeader.innerText = "TODO DETAILS";

  return todoEditHeader;
}

const loadTodoEditMain = () => {
  const todoEditMain = document.createElement('div');
  todoEditMain.classList.add('TodoEdit-main');

  todoEditMain.appendChild(loadTitleRow());
  todoEditMain.appendChild(loadTagRow());
  todoEditMain.appendChild(loadDueDateRow());
  todoEditMain.appendChild(loadDescriptionRow());
  todoEditMain.appendChild(loadCreatedDateRow());

  return todoEditMain;
}

const loadTodoEditPane = () => {
  const todoEditPane = document.createElement('div');
  todoEditPane.classList.add('TodoEdit-Pane');

  todoEditPane.appendChild(loadTodoEditHeader());
  todoEditPane.appendChild(loadTodoEditMain());

  return todoEditPane;
}

// Should export only one big function
const loadTodoDetailsCardView = () => {
  const todoDetailsCardView = document.createElement('div');
  todoDetailsCardView.classList.add('TodoDetails-CardView');

  const todoEditPane = loadTodoEditPane();
  todoDetailsCardView.appendChild(todoEditPane);

  return todoDetailsCardView;
}








/***/ }),

/***/ "./src/Display/moduleLoaders/loadTodoItem.js":
/*!***************************************************!*\
  !*** ./src/Display/moduleLoaders/loadTodoItem.js ***!
  \***************************************************/
/*! namespace exports */
/*! export loadTodoItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodoItem": () => /* binding */ loadTodoItem
/* harmony export */ });
/* harmony import */ var _css_todoListCardView_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/todoListCardView.css */ "./src/css/todoListCardView.css");



const getTodoItem = (completed) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  if (completed === true) {
    todoItem.classList.add('TodoItem-checked');
  }

  return todoItem;
}

const getTodoItemCheckBox = (completed) => {
  const todoItemCheckBox = document.createElement('div');
  todoItemCheckBox.classList.add('TodoItem-checkBox');
  let marker;

  if (completed === true) {
    marker = getCheckedMarker();
    
  } else {
    marker = getEmptyCheckMarker();
  }

  todoItemCheckBox.appendChild(marker);

  return todoItemCheckBox;
}

const getEmptyCheckMarker = () => {
  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle');
  emptyCheckMark.setAttribute('id', 'notCompletedMarker');

  return emptyCheckMark;
}

const getCheckedMarker = () => {
  const checkedMarker = document.createElement('i');
  checkedMarker.classList.add('far', 'fa-check-circle');
  checkedMarker.setAttribute('id', 'completedMarker');

  return checkedMarker;
}

const getDeleteBtn = () => {
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');
  
  return deleteBtn;
}

const getTodoItemTitle = (title, completed) => {
  const todoItemTitle = document.createElement('div');
  todoItemTitle.classList.add('TodoItem-title');
  todoItemTitle.innerText = title;

  if (completed) {
    todoItemTitle.classList.add('TodoItem-title-checked');
  }

  return todoItemTitle;
}


const loadTodoItem = (title, index, completed) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows');
  todoListMainRows.setAttribute('data-todo', index);

  const todoItem = getTodoItem(completed);
  const todoItemCheckBox = getTodoItemCheckBox(completed);
  const todoItemTitle = getTodoItemTitle(title, completed);
  const deleteBtn = getDeleteBtn();


  todoListMainRows.appendChild(todoItem);
  todoItem.appendChild(todoItemCheckBox);
  todoItem.appendChild(todoItemTitle);

  if (completed === true) {
    todoItem.appendChild(deleteBtn);
  }

  return todoListMainRows;
}









/***/ }),

/***/ "./src/Todo/Todo.js":
/*!**************************!*\
  !*** ./src/Todo/Todo.js ***!
  \**************************/
/*! namespace exports */
/*! export Todo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => /* binding */ Todo
/* harmony export */ });
const Todo = (title, description, category) => {
  let _title = title;
  let _description = description;
  let _category = category;
  let _dueDate = '';
  let _createdDate = '';
  let _priority = '';
  let _completed = false;

  // ------------------------------------------
  // SET
  // ------------------------------------------
  const setTitle = (title) => {
    _title = title;
  }

  const setDescription = (description) => {
    _description = description
  }
  
  const setCategory = (category) => {
    _category = category;
  }

  const setDueDate = (dueDate) => {
    _dueDate = dueDate;
  }

  const setCreatedDate = (createdDate) => {
    _createdDate = createdDate;
  }

  const setPriority = (priority) => {
    _priority = priority;
  }


  // ------------------------------------------
  // GET
  // ------------------------------------------
  const getTitle = () => {
    return _title;
  }

  const getDescription = () => {
    return _description;
  }
  
  const getCategory = () => {
    return _category;
  }

  const getDueDate = () => {
    return _dueDate;
  }

  const getCreatedDate = () => {
    return _createdDate;
  }

  const getPriority = () => {
    return _priority;
  }

  // ------------------------------------------
  // is(boolean)
  // ------------------------------------------
  const isCompleted = () => {
    return _completed;
  }

  // ------------------------------------------
  // Completed
  // ------------------------------------------
  const markCompleted = () => {
    _completed = true;
  }

  const undoCompleted = () => {
    _completed = false;
  } 

  
  return {
    setTitle, setDescription, setCategory, setDueDate, setCreatedDate, setPriority,
    getTitle, getDescription, getCategory, getCreatedDate, getPriority, getDueDate,
    isCompleted, markCompleted, undoCompleted
  }
}

 





/***/ }),

/***/ "./src/TodoList/TodoList.js":
/*!**********************************!*\
  !*** ./src/TodoList/TodoList.js ***!
  \**********************************/
/*! namespace exports */
/*! export TodoList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoList": () => /* binding */ TodoList
/* harmony export */ });
const TodoList = () => {

  const _todos = {
    default: [],
  };

  // Add Todo
  const addTodo = (todo) => {
    let category = todo.getCategory();
    
    // // if category doesn't exist, add one
    // if (!(category in _todos)) {
    //   addNewCategory(category);
    // } 
    
    _todos[category].push(todo);
  }

  const addNewCategory = (category) => {
    _todos[category] = [];
  }

  const deleteTodo = (todoToFind) => {
    // Iterate every todos in _todos, if found, remove it.
    for (const [category, todos] of Object.entries(_todos)) {
      const todosLength = todos.length;
      for (let i = 0; i < todos.length; i++) {
        const currentTodo = todos[i];
        const sameObjects = Object.is(todoToFind, currentTodo);
        if (sameObjects) {
          todos.splice(i, 1);;
          return;
        } 
      }  
    }
  }

  const deleteCategory = (category) => {
    return delete _todos[category];
  }

  const getAllTodos = () => {
    const allTodos = [];
    for (const [category, todos] of Object.entries(_todos)) {
      todos.forEach(todo => {
        allTodos.push(todo);
      })
    }

    return allTodos;
  }

  const getTodos = (category) => {
    return _todos[category];
  }

  const getAllCategories = () => {
    const categories = Object.keys(_todos);
    return categories;
  }

  const sortTodosDueDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneDueDate = todoOne.getDueDate();
      const todoTwoDueDate = todoTwo.getDueDate();
      
      return Number(todoOneDueDate) - Number(todoTwoDueDate);
    });
  }

  /**
   * ------------------------------------------------------------------
   * THIS NEEDS TO BE FIXED. 
   * IT'S WORKING. BUT VERY INEFFICIENT CODE
   * ------------------------------------------------------------------
   */
  const sortTodosPriority = (todos) => {
    
    const IMPORTANT = 1;
    const HIGH = 2;
    const MIDDLE = 3;
    const LOW = 4;

    todos.sort((todoOne, todoTwo) => {
      let todoOnePriority = todoOne.getPriority();
      let todoTwoPriority = todoTwo.getPriority();
      
      switch (todoOnePriority) {
        case "important":
          todoOnePriority = IMPORTANT;
          break;
        case "high":
          todoOnePriority = HIGH;
          break;
        case "middle":
          todoOnePriority = MIDDLE;
          break;
        case "low":
          todoOnePriority = LOW;
          break;
      }

      switch (todoTwoPriority) {
        case "important":
          todoTwoPriority = IMPORTANT;
          break;
        case "high":
          todoTwoPriority = HIGH;
          break;
        case "middle":
          todoTwoPriority = MIDDLE;
          break;
        case "low":
          todoTwoPriority = LOW;
          break;
      }
        
      return todoOnePriority - todoTwoPriority;
    });
  }

  const sortTodosCreatedDate = (todos) => {
    todos.sort((todoOne, todoTwo) => {
      const todoOneCreatedDate = todoOne.getCreatedDate();
      const todoTwoCreatedDate = todoTwo.getCreatedDate();
      
      return Number(todoOneCreatedDate) - Number(todoTwoCreatedDate);
    });
  }


  return {
    _todos,
    addTodo, addNewCategory, deleteTodo, deleteCategory,
    getTodos, getAllTodos, getAllCategories,
    sortTodosDueDate, sortTodosCreatedDate, sortTodosPriority
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_landingPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/landingPage.css */ "./src/css/landingPage.css");
/* harmony import */ var _Todo_Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo/Todo.js */ "./src/Todo/Todo.js");
/* harmony import */ var _TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList/TodoList.js */ "./src/TodoList/TodoList.js");
/* harmony import */ var _Display_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Display/display.js */ "./src/Display/display.js");
/* harmony import */ var _Display_moduleLoaders_loadCategories_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Display/moduleLoaders/loadCategories.js */ "./src/Display/moduleLoaders/loadCategories.js");
/* harmony import */ var _localStorage_storageAvailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage/storageAvailable */ "./src/localStorage/storageAvailable.js");








const display = (0,_Display_display_js__WEBPACK_IMPORTED_MODULE_3__.Display)();
const todoList = (0,_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_2__.TodoList)();


// todoList.addNewCategory('The Odin Project');
// todoList.addNewCategory('Work');
// todoList.addNewCategory('Life');
// todoList.addNewCategory('School');
// todoList.addNewCategory('Gym');

// console.log(todoList.getAllCategories());


display.activateCreateTodoBtn();
display.activateUnfoldCategoryBtn();
display.activateAddCategoryBtn();
display.showTodoDetailsCardView();










// display.startListeningClickEvent


  








/***/ }),

/***/ "./src/localStorage/storageAvailable.js":
/*!**********************************************!*\
  !*** ./src/localStorage/storageAvailable.js ***!
  \**********************************************/
/*! namespace exports */
/*! export storageAvailable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => /* binding */ storageAvailable
/* harmony export */ });
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9sYW5kaW5nUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcz82MTEyIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcz8wNjk4Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlVG9kb01vZGFsLmNzcz82MWEwIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvbGFuZGluZ1BhZ2UuY3NzPzY4MjkiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcz8xYjdkIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvdG9kb0xpc3RDYXJkVmlldy5jc3M/MjJjMSIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9nZXQuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvaWNvbi5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkQ3JlYXRlTGlzdE1vZGFsLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENyZWF0ZVRvZG9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRNb2R1bGVzLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL1RvZG8vVG9kby5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvVG9kb0xpc3QvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2Uvc3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDZDQUE2QywyQkFBMkIsR0FBRyxXQUFXLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLDRCQUE0QiwrQkFBK0IsOEJBQThCLDhCQUE4QixpQ0FBaUMsNEJBQTRCLDRCQUE0QixtREFBbUQsZ0NBQWdDLGdDQUFnQyw4QkFBOEIsa0NBQWtDLDhDQUE4QyxxQ0FBcUMsbUNBQW1DLCtDQUErQyw4Q0FBOEMsc0NBQXNDLDRDQUE0Qyw0QkFBNEIscUNBQXFDLDRDQUE0QyxxRUFBcUUsb0NBQW9DLGdDQUFnQyw2QkFBNkIsR0FBRyxrQ0FBa0Msb0JBQW9CLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLGlCQUFpQixpQkFBaUIsR0FBRywyQ0FBMkMsc0NBQXNDLDBDQUEwQyxtQ0FBbUMsZ0RBQWdELEdBQUcsZ0JBQWdCLGtDQUFrQyxlQUFlLCtCQUErQiwyQ0FBMkMsR0FBRyx5Q0FBeUMsa0JBQWtCLGtEQUFrRCxzREFBc0QscUNB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QWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFdB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFduQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1mOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFc0M7O0FBRXRDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFdUM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIa0I7QUFDNEI7QUFDZDtBQUNBO0FBQ1E7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFY7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktLOzs7QUFHeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxROztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBLE87QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lXO0FBQ087QUFDWTtBQUNKO0FBQzZCO0FBQ1I7OztBQUduRSxnQkFBZ0IsNERBQU87QUFDdkIsaUJBQWlCLCtEQUFROzs7QUFHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCB7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIC8qIEdpdmUgcGFkZGluZyB0byB0aGUganVzdCBzaWRlICovXFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcyB7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmhvdmVyLFxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtaXRlbS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1pdGVtLWZvbnQtc2l6ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIC5mYS1jaGVjay1jaXJjbGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybS1jb2xvcik7IFxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlDQUF5Qzs7RUFFekMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw0Q0FBNEM7RUFDNUMsd0VBQXdFO0VBQ3hFLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msd0VBQXdFOztFQUV4RSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwge1xcbiAgbWluLWhlaWdodDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcblxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaGVhZGVyIHtcXG4gIGhlaWdodDogNTVweDtcXG4gIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICAvKiBHaXZlIHBhZGRpbmcgdG8gdGhlIGp1c3Qgc2lkZSAqL1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZCk7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMge1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczpob3ZlcixcXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcy10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IHZhcigtLWNhcmQtaXRlbS1mb250LXNpemUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ib3R0b20tY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCAuZmEtY2hlY2stY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0tY29sb3IpOyBcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qICAqL1xcblxcbi5jcmVhdGVMaXN0LW1vZGFsIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTY1cHg7XFxuICBcXG4gIC8qIFRPIEJFIFJFTU9WRUQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTEycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLUxhYmVsVGV4dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC10ZXh0RmllbGQtY29udGFpbmVyIHtcXG4gIFxcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMCA7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnMge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuXFxuICAvKiBUbyBjZW50ZXIgdGhpbmdzICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zOmhvdmVyLCBcXG4uY3JlYXRlTGlzdC1idXR0b25zOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNhbmNlbFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCB2YXIoLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNyZWF0ZVxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwOyBcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9jcmVhdGVMaXN0TW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsS0FBSzs7QUFFTDtFQUNFLFlBQVk7RUFDWixhQUFhOztFQUViLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLHlDQUF5Qzs7RUFFekMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZ0JBQWdCOztFQUVoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLCtDQUErQztFQUMvQywwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogICovXFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNjVweDtcXG4gIFxcbiAgLyogVE8gQkUgUkVNT1ZFRCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtY29udGVudC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtTGFiZWxUZXh0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLXRleHRGaWVsZC1jb250YWluZXIge1xcbiAgXFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAwIDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG5cXG4gIC8qIFRvIGNlbnRlciB0aGluZ3MgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6aG92ZXIsIFxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY2FuY2VsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY3JlYXRlXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDA7IFxcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVMaXN0TW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG5cXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtdG9kb2luZm8tY29udGFpbmVyIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItZGVzY3JpcHRpb24ge1xcbiAgZmxleDogNCAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1jYXRlZ29yeSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XFxuXFxuLnRvZG9pbmZvLWNhdGVnb3J5LXNlbGVjdEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC1hZGRUb2RvQnRuLWNvbnRhaW5lciB7XFxuICBmbGV4OiAwIDAgNTRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnMge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICAvKiBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0zKTsgKi9cXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zOmhvdmVyLFxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9jcmVhdGVUb2RvTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEIsMkJBQTJCO0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBRSxlQUFlOztFQUUzQixZQUFZLEVBQUUsZUFBZTtFQUM3QixhQUFhLEVBQUUsZ0JBQWdCOztFQUUvQixpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCOztFQUVsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7O0FBR0E7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpREFBaUQ7RUFDakQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLDJDQUEyQzs7RUFFM0MsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7O0VBRXRCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCx3RUFBd0U7RUFDeEUsNENBQTRDO0VBQzVDLGdDQUFnQztFQUNoQywwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsd0RBQXdEO0FBQzFEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVMaXN0TW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG5cXG4gIHdpZHRoOiAxMDB2dzsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtdG9kb2luZm8tY29udGFpbmVyIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItZGVzY3JpcHRpb24ge1xcbiAgZmxleDogNCAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1jYXRlZ29yeSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XFxuXFxuLnRvZG9pbmZvLWNhdGVnb3J5LXNlbGVjdEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC1hZGRUb2RvQnRuLWNvbnRhaW5lciB7XFxuICBmbGV4OiAwIDAgNTRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnMge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICAvKiBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0zKTsgKi9cXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zOmhvdmVyLFxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tYWN0aW9uLWJ1dHRvbi10ZXh0LWNvbG9yOiAjZmZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNlNGU0ZTQ7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tZXh0cmEtc21hbGwtZm9udC1zaXplOiAxMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcblxcbiAgLyogTGFuZGluZyBQYWdlICovXFxuICAtLW5hdmJhci1jYXRlZ29yeS10ZXh0LWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS1jYXRlZ29yeS1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBMQU5ESU5HIFBBR0UgKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXFxufVxcblxcbi5uYXZiYXItaGVhZGVyIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmcpO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5wZXJzb25hbC1kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5wZXJzb25hbC1kZXRhaWwtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbn1cXG5cXG4ucGVyc29uYWwtc29jaWFsLW1lZGlhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY3JlYXRlVG9kb0J0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tYnV0dG9uLXRleHQtY29sb3IpO1xcbiAgXFxufVxcblxcbiNjcmVhdGVUb2RvQnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4vKiBOQVZCQVIgTUFJTiAqL1xcbi5uYXZiYXItbWFpbiB7XFxufVxcbi5uYXZiYXItY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXZiYXItY2F0ZWdvcnktaGVhZGVyIHtcXG4gIGhlaWdodDogNDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmcpO1xcbn1cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWhlYWRlciBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLm5hdmJhci1jYXRlZ29yeS1saXN0IHtcXG4gIGNvbG9yOiB2YXIoLS1uYXZiYXItY2F0ZWdvcnktdGV4dC1jb2xvcik7XFxuICAvKiBSYW5kb20gSGVpZ2h0ICovXFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbXMge1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdGVnb3J5LWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgXFxufVxcblxcbiNmb2xkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcblxcbi5tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIC5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59IFxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2xhbmRpbmdQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJB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QTBCO0FBQzVCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxXQUFXO0VBQ1gsa0RBQWtEO0VBQ2xELDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsOEJBQThCOztFQUU5QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tYWN0aW9uLWJ1dHRvbi10ZXh0LWNvbG9yOiAjZmZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNlNGU0ZTQ7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tZXh0cmEtc21hbGwtZm9udC1zaXplOiAxMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcblxcbiAgLyogTGFuZGluZyBQYWdlICovXFxuICAtLW5hdmJhci1jYXRlZ29yeS10ZXh0LWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS1jYXRlZ29yeS1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBMQU5ESU5HIFBBR0UgKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIHdpZHRoOiAyODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXFxufVxcblxcbi5uYXZiYXItaGVhZGVyIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmcpO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi5wZXJzb25hbC1kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5wZXJzb25hbC1kZXRhaWwtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbn1cXG5cXG4ucGVyc29uYWwtc29jaWFsLW1lZGlhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY3JlYXRlVG9kb0J0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tYnV0dG9uLXRleHQtY29sb3IpO1xcbiAgXFxufVxcblxcbiNjcmVhdGVUb2RvQnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4vKiBOQVZCQVIgTUFJTiAqL1xcbi5uYXZiYXItbWFpbiB7XFxufVxcbi5uYXZiYXItY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXZiYXItY2F0ZWdvcnktaGVhZGVyIHtcXG4gIGhlaWdodDogNDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmcpO1xcbn1cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWhlYWRlciBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLm5hdmJhci1jYXRlZ29yeS1saXN0IHtcXG4gIGNvbG9yOiB2YXIoLS1uYXZiYXItY2F0ZWdvcnktdGV4dC1jb2xvcik7XFxuICAvKiBSYW5kb20gSGVpZ2h0ICovXFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbXMge1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdGVnb3J5LWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgXFxufVxcblxcbiNmb2xkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcblxcbi5tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIC5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59IFxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcblxcbi5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlRvZG9FZGl0LVBhbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9FZGl0LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1DYXJkUGFkZGVyLWxlZnQpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tQ2FyZFBhZGRlci1ib3R0b20pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxufVxcblxcbi5Ub2RvRWRpdC1wYWRkZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB7XFxuXFxufVxcblxcbi5Ub2RvRWRpdC1UYWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS10YWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZXh0cmEtc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuLnByaW9yaXR5LXRhZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KVxcbn1cXG5cXG4vKiAjcHJpb3JpdHktaW1wb3J0YW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEzMjMyO1xcbn1cXG5cXG4jcHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQkEzQTtcXG59XFxuXFxuI3ByaW9yaXR5LW1pZGRsZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjc2NztcXG59XFxuXFxuI3ByaW9yaXR5LWxvdy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59ICovXFxuXFxuLnByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcblxcbi5Ub2RvRWRpdC10aXRsZS10ZXh0ZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRhZ1JvdyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcbn1cXG5cXG4uVG9kb0VkaXQtQ3JlYXRlZERhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL3RvZG9EZXRhaWxzQ2FyZFZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxREFBcUQ7RUFDckQseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCOztFQUV4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywwQkFBMEI7O0VBRTFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMseUNBQXlDOztFQUV6Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQiw0Q0FBNEM7O0VBRTVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7O0VBRWxDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcblxcbi5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlRvZG9FZGl0LVBhbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9FZGl0LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1DYXJkUGFkZGVyLWxlZnQpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tQ2FyZFBhZGRlci1ib3R0b20pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxufVxcblxcbi5Ub2RvRWRpdC1wYWRkZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB7XFxuXFxufVxcblxcbi5Ub2RvRWRpdC1UYWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS10YWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZXh0cmEtc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuLnByaW9yaXR5LXRhZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KVxcbn1cXG5cXG4vKiAjcHJpb3JpdHktaW1wb3J0YW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEzMjMyO1xcbn1cXG5cXG4jcHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQkEzQTtcXG59XFxuXFxuI3ByaW9yaXR5LW1pZGRsZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjc2NztcXG59XFxuXFxuI3ByaW9yaXR5LWxvdy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59ICovXFxuXFxuLnByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcblxcbi5Ub2RvRWRpdC10aXRsZS10ZXh0ZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRhZ1JvdyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcbn1cXG5cXG4uVG9kb0VkaXQtQ3JlYXRlZERhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcblxcbi5Ub2RvTGlzdC1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXIge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxcbn1cXG5cXG4uVG9kb0xpc3QtbWFpbi1yb3dzIHtcXG4gIG1pbi1oZWlnaHQ6IDYzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW06aG92ZXIsXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tCb3gge1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLlRvZG9JdGVtLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtLWRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy90b2RvTGlzdENhcmRWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCOztFQUV4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywwQkFBMEI7O0FBRTVCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcblxcbi5Ub2RvTGlzdC1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXIge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxcbn1cXG5cXG4uVG9kb0xpc3QtbWFpbi1yb3dzIHtcXG4gIG1pbi1oZWlnaHQ6IDYzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW06aG92ZXIsXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tCb3gge1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLlRvZG9JdGVtLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtLWRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZWF0ZUxpc3RNb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZWF0ZVRvZG9Nb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xhbmRpbmdQYWdlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0RldGFpbHNDYXJkVmlldy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9MaXN0Q2FyZFZpZXcuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBcbiAgbG9hZFRvZG9JdGVtLFxuICBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCxcbiAgbG9hZENyZWF0ZUxpc3RNb2RhbCxcbiAgbG9hZENyZWF0ZVRvZG9Nb2RhbCxcbiAgbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcsXG4gIGxvYWRDYXRlZ29yaWVzXG59IGZyb20gJy4vbW9kdWxlTG9hZGVycy9sb2FkTW9kdWxlcy5qcyc7XG5cbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24uanMnO1xuXG5pbXBvcnQgeyBHZXQgfSBmcm9tICcuL2dldC5qcyc7XG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4uL1RvZG9MaXN0L1RvZG9MaXN0LmpzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9Ub2RvL1RvZG8uanMnO1xuXG4vLyAvLyBGVU5DVElPTkFMSVRJRVNcbi8vIGltcG9ydCB7IG1hcmtDb21wbGV0ZWQgfSBmcm9tICcuL2Z1bmN0aW9uYWxpdGllcy9tYXJrQ29tcGxldGUnO1xuXG5jb25zdCBpY29uID0gSWNvbigpO1xuY29uc3QgdG9kb0xpc3QgPSBUb2RvTGlzdCgpO1xuY29uc3QgZ2V0ID0gR2V0KCkucHVibGljQVBJO1xuXG5cblxuXG5cbmNvbnN0IERpc3BsYXkgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgIG1vZGFsLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBhdHRhY2hNb2RhbENsb3NlciA9IChtb2RhbCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlVGhpc01vZGFsKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwucGFyZW50Tm9kZSkge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUaGlzTW9kYWwpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZU1hcmtlciA9IChtYXJrZXIpID0+IHtcbiAgICBjb25zdCBtYXJrZXJJZCA9IG1hcmtlci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgbWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKG1hcmtlcklkID09PSAnbm90Q29tcGxldGVkTWFya2VyJykge1xuICAgICAgICBjb25zdCB0b2RvTnVtVmFsdWUgPSBnZXQuZ2V0VG9kb051bVZhbHVlKG1hcmtlcik7XG4gICAgICAgIGNvbnN0IHRvZG9NYWlucm93ID0gZ2V0LmdldE9uZVRvZG9MaXN0TWFpblJvdyh0b2RvTnVtVmFsdWUpO1xuICAgICAgICBtYXJrQ29tcGxldGVkKHRvZG9NYWlucm93LCB0b2RvTGlzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgVG9kbyBpbiBEaXNwbGF5IE5vdCBjb21wbGV0ZWRcbiAgICAgICAgY29uc29sZS5sb2coJ3doYXQnKTtcbiAgICAgICAgLy8gU2V0IFRvZG8gaW4gdG9kb2xpc3QgTm90IGNvbXBsZXRlZFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGNvbnN0IG1hcmtDb21wbGV0ZWQgPSAodG9kb01haW5Sb3cpID0+IHtcbiAgICAvLyBUT0RPTElTVFxuICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0LmdldEN1cnJlbnRUb2RvTGlzdENhdGVnb3J5KCk7XG4gICAgY29uc3QgdG9kb051bVZhbHVlID0gdG9kb01haW5Sb3cuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcbiAgICBjb25zdCB0b2RvID0gdG9kb0xpc3QuZ2V0VG9kb3MoY2F0ZWdvcnkpW3RvZG9OdW1WYWx1ZV07XG4gICAgdG9kby5tYXJrQ29tcGxldGVkKCk7XG5cbiAgICAvLyBESVNQTEFZXG4gICAgY29uc3QgdG9kb0l0ZW0gPSB0b2RvTWFpblJvdy5jaGlsZHJlblswXTtcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS1jaGVja2VkJyk7XG4gICAgY29uc3QgbWFya2VyID0gdG9kb0l0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgbWFya2VyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLWNoZWNrLWNpcmNsZScpO1xuICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZE1hcmtlcicpO1xuICAgIGNvbnN0IHRvZG9JdGVtVGl0bGUgPSB0b2RvSXRlbS5jaGlsZHJlblsxXTtcbiAgICB0b2RvSXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLXRpdGxlLWNoZWNrZWQnKTtcbiAgICBcbiAgICBjb25zdCBkZWxldGVCdG4gPSBpY29uLmxvYWRUb2RvSXRlbURlbGV0ZUJ0bigpO1xuICAgIFxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cblxuICB9XG5cbiAgY29uc3QgbWFya1VuY29tcGxldGVkID0gKHRvZG9NYWluUm93KSA9PiB7XG5cbiAgfVxuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSB0b2RvLmlzQ29tcGxldGVkKCk7XG4gICAgY29uc3QgdG9kb0xpc3RDYXJkVmlld01haW4gPSBnZXQuZ2V0VG9kb0xpc3RDYXJkVmlld01haW4oKTtcbiAgICBjb25zdCB0b2RvSXRlbSA9IGxvYWRUb2RvSXRlbSh0aXRsZSwgaW5kZXgsIGNvbXBsZXRlZCk7XG4gICAgY29uc3QgbWFya2VyID0gdG9kb0l0ZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XG4gICAgYWN0aXZhdGVNYXJrZXIobWFya2VyKTtcbiAgICBcbiAgICB0b2RvTGlzdENhcmRWaWV3TWFpbi5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gIH1cblxuICBjb25zdCBzaG93VG9kb0RldGFpbHNDYXJkVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVmlld0NvbnRhaW5lciA9IGdldC5nZXRDYXJkVmlld0NvbnRhaW5lcigpO1xuICAgIGNhcmRWaWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRUb2RvRGV0YWlsc0NhcmRWaWV3KCkpO1xuICB9XG5cbiAgY29uc3Qgb3BlbkNyZWF0ZVRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQuZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcbiAgICBcbiAgICAvLyBUbyBqdXN0IGxvYWQgdGhlIGZpcnN0IGNhdGVnb3J5XG4gICAgY29uc3QgY3JlYXRlVG9kb01vZGFsQ29udGVudCA9IGxvYWRDcmVhdGVUb2RvTW9kYWwoY2F0ZWdvcmllc1swXSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Nb2RhbENvbnRlbnQpO1xuICB9XG5cbiAgY29uc3Qgb3BlbkNyZWF0ZUxpc3RNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQuZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY3JlYXRlTGlzdE1vZGFsQ29udGVudCA9IGxvYWRDcmVhdGVMaXN0TW9kYWwoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsQ29udGVudCk7XG4gIH1cblxuICBjb25zdCByZW1vdmVDaGVja01hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja01hcmtlciA9IGdldC5nZXRDaGVja01hcmtlcigpO1xuICAgIGNoZWNrTWFya2VyLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnlJbkNyZWF0ZVRvZG9Nb2RhbCA9IChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0QnRuID0gZ2V0LmdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4oKTtcbiAgICBjYXRlZ29yeVNlbGVjdEJ0bi5pbm5lclRleHQgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGNvbnN0IHBsYWNlTWFya2VyID0gKGVsZW0pID0+IHtcbiAgICBjb25zdCBtYXJrZXIgPSBpY29uLmxvYWRDaGVja01hcmtlcigpO1xuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBlbGVtLmNoaWxkTm9kZXNbMF07XG4gICAgY29uc3QgaGFzTWFya2VyID0gIShjYXRlZ29yeVRpdGxlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCk7XG4gICAgaWYgKCFoYXNNYXJrZXIpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgIFxuICAgICAgcmVtb3ZlQ2hlY2tNYXJrZXIoKTtcbiAgICAgIGNhdGVnb3J5VGl0bGUuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgICAgIGNoYW5nZUNhdGVnb3J5SW5DcmVhdGVUb2RvTW9kYWwoY2F0ZWdvcnkpO1xuICAgIH0gXG4gIH1cblxuICBjb25zdCBvcGVuQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IChjYXRlZ29yaWVzKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZ2V0LmdldENvbnRhaW5lcigpO1xuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxDb250ZW50ID0gbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoY2F0ZWdvcmllcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxDb250ZW50KTtcblxuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0QnRuID0gZ2V0LmdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4oKTtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnlTZWxlY3RCdG4udGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBpdGVtc1RpdGxlID0gZ2V0LmdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlKCk7XG4gICAgaXRlbXNUaXRsZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICBpZiAoY2F0ZWdvcnlUaXRsZSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGljb24ubG9hZENoZWNrTWFya2VyKCkpO1xuICAgICAgfSAgIFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZUFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGdldC5nZXRBZGRUb2RvQnRuKCk7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBnZXQuZ2V0VGl0bGUoKTtcbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0LmdldENhdGVnb3J5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcbiAgICAgICAgLy8gQUxMIFdPUktJTkcuIEJ1dCBJIGRvIG5lZWQgdG8gYWRkIGl0IHRvIHRoZSAndG9kb2xpc3QnXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG8oVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSk7XG5cblxuICAgICAgICBjbG9zZU1vZGFsKGdldC5nZXRDcmVhdGVUb2RvTW9kYWwoKSk7XG4gICAgICAgIGxvYWRUb2RvTGlzdENhcmRWaWV3KGNhdGVnb3J5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2YXRlQ3JlYXRlVG9kb0J0biA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUb2RvQnRuID0gZ2V0LmdldENyZWF0ZVRvZG9CdG4oKTtcbiAgICBjcmVhdGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBvcGVuQ3JlYXRlVG9kb01vZGFsKCk7XG4gICAgICBhdHRhY2hNb2RhbENsb3NlcihnZXQuZ2V0Q3JlYXRlVG9kb01vZGFsKCkpO1xuICAgICAgYWN0aXZhdGVDYXRlZ29yeVNlbGVjdEJ0bigpO1xuICAgICAgYWN0aXZhdGVBZGRUb2RvQnRuKCk7XG4gICAgICBcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVTZWxlY3RpbmdDYXRlZ29yeSA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zJyk7XG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIGNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwbGFjZU1hcmtlcihjYXRlZ29yeSk7XG4gICAgICAgIGNsb3NlTW9kYWwoZ2V0LmdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVDYXRlZ29yeVNlbGVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdEJ0biA9IGdldC5nZXRUb2RvSW5mb0NhdGVnb3J5U2VsZWN0QnRuKCk7XG4gICAgY2F0ZWdvcnlTZWxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgICBvcGVuQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbChjYXRlZ29yaWVzKTtcbiAgICAgIGFjdGl2YXRlU2VsZWN0aW5nQ2F0ZWdvcnkoKTtcbiAgICAgIGF0dGFjaE1vZGFsQ2xvc2VyKGdldC5nZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsKCkpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZVVuZm9sZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuZm9sZENhdGVnb3J5QnRuID0gZ2V0LmdldFVuZm9sZENhdGVnb3J5QnRuKCk7XG4gICAgdW5mb2xkQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBSZWFkIGZyb20gdG9kb2xpc3Qgd2hhdCBjYXRlZ29yaWVzIGV4aXN0XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gdG9kb0xpc3QuZ2V0QWxsQ2F0ZWdvcmllcygpO1xuICAgICAgLy8gTWFrZSBlYWNoIGNhdGFlZ29yeSBpdGVtIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGRpc3BsYXlcbiAgICAgIGNvbnN0IGNhdGVnb3J5TGlzdFVsID0gbG9hZENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgICBjb25zdCBuYXZCYXJDYXRlZ29yeSA9IGdldC5nZXROYXZCYXJDYXRlZ29yeSgpO1xuICAgICAgbmF2QmFyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMaXN0VWwpO1xuICAgICAgLy8gQ2hhbmdlICd2JyB0byAnXidcbiAgICAgIHNob3dGb2xkQnRuKCk7XG4gICAgICBzaG93QWRkQ2F0ZWdvcnlCdG4oKTtcbiAgICAgIGFjdGl2YXRlRm9sZENhdGVnb3J5QnRuKCk7XG4gICAgICBhY3RpdmF0ZUNhdGVnb3J5TGlzdEl0ZW1zKCk7XG5cbiAgICAgIC8vIEFkZCAnKycgY3JlYXRlTGlzdCBidXR0b25cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVGb2xkQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZENhdGVnb3J5QnRuID0gZ2V0LmdldEZvbGRDYXRlZ29yeUJ0bigpO1xuICAgIGZvbGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNoYW5nZVRvVW5mb2xkKCkge1xuICAgICAgc2hvd1VuZm9sZEJ0bigpO1xuICAgICAgaGlkZUFkZENhdGVnb3J5QnRuKCk7XG4gICAgICByZW1vdmVDYXRlZ29yeUxpc3QoKTtcbiAgICAgIGZvbGRDYXRlZ29yeUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvVW5mb2xkKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVBZGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRDYXRlZ29yeUJ0biA9IGdldC5nZXRBZGRDYXRlZ29yeUJ0bigpO1xuICAgIGFkZENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3BlbkNyZWF0ZUxpc3RNb2RhbCgpO1xuICAgICAgYXR0YWNoTW9kYWxDbG9zZXIoZ2V0LmdldENyZWF0ZUxpc3RNb2RhbCgpKTtcbiAgICAgIGFjdGl2YXRlQ3JlYXRlTGlzdENhbmNlbEJ0bigpO1xuICAgICAgYWN0aXZhdGVDcmVhdGVMaXN0Q3JlYXRlQnRuKCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGNvbnN0IGFjdGl2YXRlQ3JlYXRlTGlzdENhbmNlbEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBnZXQuZ2V0Q3JlYXRlTGlzdENhbmNlbEJ0bigpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNsb3NlTW9kYWwoZ2V0LmdldENyZWF0ZUxpc3RNb2RhbCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFjdGl2YXRlQ3JlYXRlTGlzdENyZWF0ZUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVCdG4gPSBnZXQuZ2V0Q3JlYXRlTGlzdENyZWF0ZUJ0bigpO1xuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gZ2V0LmdldENyZWF0ZUxpc3RUaXRsZSgpO1xuICAgICAgaWYgKHRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkodGl0bGUpO1xuICAgICAgICByZW1vdmVDYXRlZ29yeUxpc3QoKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlMaXN0VWwgPSBsb2FkQ2F0ZWdvcmllcyh0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCkpO1xuICAgICAgICBjb25zdCBuYXZCYXJDYXRlZ29yeSA9IGdldC5nZXROYXZCYXJDYXRlZ29yeSgpO1xuICAgICAgICBuYXZCYXJDYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3RVbCk7XG4gICAgICAgIGFjdGl2YXRlQ2F0ZWdvcnlMaXN0SXRlbXMoKTtcbiAgICAgICAgXG4gICAgICAgIGNsb3NlTW9kYWwoZ2V0LmdldENyZWF0ZUxpc3RNb2RhbCgpKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVDYXRlZ29yeUxpc3RJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUxpcyA9IGdldC5nZXRDYXRlZ29yeUl0ZW1zKCk7XG4gICAgY2F0ZWdvcnlMaXMuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gSWYgY2xpY2tlZCwgXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gbGkuaW5uZXJUZXh0O1xuICAgICAgICBsb2FkVG9kb0xpc3RDYXJkVmlldyhjYXRlZ29yeSk7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuXG5cbiAgY29uc3QgY2hhbmdlVG9kb0xpc3RDYXJkVmlld1RpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3RIZWFkZXIgPSBnZXQuZ2V0VG9kb0xpc3RDYXJkVmlld0hlYWRlcigpO1xuICAgIHRvZG9MaXN0SGVhZGVyLmlubmVyVGV4dCA9IHRpdGxlO1xuICB9XG5cbiAgY29uc3QgbG9hZFRvZG9MaXN0Q2FyZFZpZXcgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAvLyBHZXQgaGVhZGVyIGFuZCBjaGFuZ2UgdGhlIG5hbWUuXG4gICAgY2hhbmdlVG9kb0xpc3RDYXJkVmlld1RpdGxlKGNhdGVnb3J5KTtcbiAgICAvLyBSZW1vdmUgVG9kbyBMaXN0XG4gICAgcmVtb3ZlVG9kb0xpc3QoKTtcbiAgICByZW5kZXJUb2RvTGlzdChjYXRlZ29yeSk7XG4gIH1cblxuICBjb25zdCByZW5kZXJUb2RvTGlzdCA9IChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gdG9kb0xpc3QuZ2V0VG9kb3MoY2F0ZWdvcnkpO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICBhZGRUb2RvKHRvZG8sIGluZGV4KTtcbiAgICB9KVxuICAgIFxuICAgIFxuICB9XG5cbiAgY29uc3QgcmVtb3ZlVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBnZXQuZ2V0VG9kb0xpc3RNYWluUm93cygpXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIHRvZG8ucmVtb3ZlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNob3dGb2xkQnRuID0gKCkgPT4geyAgICBcbiAgICBjb25zdCB1bmZvbGRCdG4gPSBnZXQuZ2V0VW5mb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgICB1bmZvbGRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGZvbGRCdG4gPSBnZXQuZ2V0Rm9sZENhdGVnb3J5QnRuKCk7XG4gICAgZm9sZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgfVxuXG4gIGNvbnN0IHNob3dVbmZvbGRCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZEJ0biA9IGdldC5nZXRGb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgICBmb2xkQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCB1bmZvbGRCdG4gPSBnZXQuZ2V0VW5mb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgICB1bmZvbGRCdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gIH1cblxuICBjb25zdCBzaG93QWRkQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkQ2F0ZWdvcnlCdG4gPSBnZXQuZ2V0QWRkQ2F0ZWdvcnlCdG4oKTtcbiAgICBhZGRDYXRlZ29yeUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgfVxuXG4gIGNvbnN0IGhpZGVBZGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRDYXRlZ29yeUJ0biA9IGdldC5nZXRBZGRDYXRlZ29yeUJ0bigpO1xuICAgIGFkZENhdGVnb3J5QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUNhdGVnb3J5TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBnZXQuZ2V0TmF2QmFyQ2F0ZWdvcnlMaXN0KCk7XG4gICAgY2F0ZWdvcnlMaXN0LnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlVG9VbmNvbXBsZXRlTWFya2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrQ29tcGxldGVNYXJrZXIgPSBnZXQuZ2V0Q2hlY2tDb21wbGV0ZUJ0bigpO1xuICAgIGNoZWNrQ29tcGxldGVNYXJrZXIucmVtb3ZlKCk7XG4gICAgY29uc3QgdW5jb21wbGV0ZU1hcmtlciA9IGljb24ubG9hZFVuY29tcGxldGVNYXJrZXIoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvc2VNb2RhbCxcbiAgICBhdHRhY2hNb2RhbENsb3NlcixcbiAgICBhZGRUb2RvLFxuICAgIHNob3dUb2RvRGV0YWlsc0NhcmRWaWV3LFxuICAgIGFjdGl2YXRlQ3JlYXRlVG9kb0J0bixcbiAgICBhY3RpdmF0ZVVuZm9sZENhdGVnb3J5QnRuLFxuICAgIGFjdGl2YXRlQWRkQ2F0ZWdvcnlCdG4sXG4gIH1cbn1cblxuXG5cblxuXG5leHBvcnQgeyBEaXNwbGF5IH07XG4iLCJjb25zdCBHZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldE5hdkJhckNhdGVnb3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkJhckNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jYXRlZ29yeScpO1xuICAgIHJldHVybiBuYXZCYXJDYXRlZ29yeTtcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9MaXN0Q2FyZFZpZXdNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXdNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4nKTtcbiAgICByZXR1cm4gdG9kb0xpc3RDYXJkVmlld01haW47XG4gIH1cblxuICBjb25zdCBnZXRUb2RvTGlzdENhcmRWaWV3SGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXdIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0xpc3QtQ2FyZFZpZXctaGVhZGVyJyk7XG4gICAgcmV0dXJuIHRvZG9MaXN0Q2FyZFZpZXdIZWFkZXI7XG4gIH1cblxuICBjb25zdCBnZXRDYXJkVmlld0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DYXJkVmlldy1Db250YWluZXInKTtcbiAgICByZXR1cm4gY2FyZFZpZXdDb250YWluZXI7XG4gIH1cbiAgXG4gIGNvbnN0IGdldEFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvLWJ1dHRvbnMnKTtcbiAgfVxuXG4gIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlVG9kb0J0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvZG9CdG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlVG9kb01vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kby1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlTGlzdE1vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTGlzdC1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby10aXRsZSB0ZXh0YXJlYScpO1xuICAgIHJldHVybiB0aXRsZVRleHRhcmVhLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1kZXNjcmlwdGlvbiB0ZXh0YXJlYScpO1xuICAgIHJldHVybiBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tY2F0ZWdvcnkgYnV0dG9uJyk7XG4gICAgcmV0dXJuIGNhdGVnb3J5QnRuLnRleHRDb250ZW50O1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb0Jhc2ljRGV0YWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICBnZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoKTtcbiAgICBcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IH07XG4gIH1cblxuICBjb25zdCBnZXRDaGVja01hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja01hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGVjay1jaXJjbGUnKTtcbiAgICByZXR1cm4gY2hlY2tNYXJrZXI7XG4gIH1cblxuICBjb25zdCBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXNUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlJyk7XG4gIH1cblxuICBjb25zdCBnZXRVbmZvbGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZm9sZC1jYXRlZ29yeS1idG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldEZvbGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbGQtY2F0ZWdvcnktYnRuJyk7XG4gIH1cblxuICBjb25zdCBnZXROYXZCYXJDYXRlZ29yeUhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jYXRlZ29yeS1oZWFkZXInKTtcbiAgfVxuXG4gIGNvbnN0IGdldEFkZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhdGVnb3J5LWJ0bicpO1xuICB9XG5cbiAgY29uc3QgZ2V0TmF2QmFyQ2F0ZWdvcnlMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWNhdGVnb3J5LWxpc3QnKTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RDcmVhdGVCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVMaXN0LWJ1dHRvbnMnKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RDYW5jZWxCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVMaXN0LWJ1dHRvbnMnKVswXTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRGaWVsZC10aXRsZScpLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnlJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWl0ZW1zJyk7XG4gIH1cblxuICBjb25zdCBnZXRUb2RvTGlzdE1haW5Sb3dzID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVG9kb0xpc3QtbWFpbi1yb3dzJyk7XG4gIH1cblxuICBjb25zdCBnZXRDaGVja0NvbXBsZXRlTWFya2VyID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0l0ZW0tY2hlY2tCb3gnKS5jaGlsZHJlblswXTtcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9MaXN0TWFpblJvd3NPZkNoZWNrTWFya2VyID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtQ2hlY2tCb3ggPSBtYXJrZXIucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0b2RvSXRlbSA9IHRvZG9JdGVtQ2hlY2tCb3gucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0b2RvTGlzdE1haW5Sb3dzID0gdG9kb0l0ZW0ucGFyZW50Tm9kZTtcblxuICAgIHJldHVybiB0b2RvTGlzdE1haW5Sb3dzO1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb051bVZhbHVlID0gKG1hcmtlcikgPT4ge1xuICAgIGNvbnN0IHRvZG9NYWluUm93ID0gZ2V0VG9kb0xpc3RNYWluUm93c09mQ2hlY2tNYXJrZXIobWFya2VyKTtcbiAgICByZXR1cm4gdG9kb01haW5Sb3cuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8nKTtcbiAgfVxuXG5cblxuICBjb25zdCBnZXRUb2RvSXRlbUNvbXBsZXRlTWFya2VycyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlRvZG9JdGVtLWNoZWNrQm94IC5mYS1jaXJjbGUnKVxuICB9XG5cbiAgY29uc3QgZ2V0T25lVG9kb0xpc3RNYWluUm93ID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXRvZG89JyR7aW5kZXh9J2ApO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3VycmVudFRvZG9MaXN0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFRvZG9MaXN0Q2FyZFZpZXdIZWFkZXIoKS5pbm5lclRleHQ7XG4gIH1cblxuXG5cbiAgXG5cbiAgY29uc3QgcHVibGljQVBJID0ge1xuICAgIGdldEN1cnJlbnRUb2RvTGlzdENhdGVnb3J5LFxuICAgIGdldE9uZVRvZG9MaXN0TWFpblJvdyxcbiAgICBnZXRUb2RvTnVtVmFsdWUsXG4gICAgZ2V0VG9kb0l0ZW1Db21wbGV0ZU1hcmtlcnMsXG4gICAgZ2V0Q2hlY2tDb21wbGV0ZU1hcmtlcixcbiAgICBnZXRUb2RvTGlzdE1haW5Sb3dzLFxuICAgIGdldENhdGVnb3J5SXRlbXMsXG4gICAgZ2V0Q3JlYXRlTGlzdFRpdGxlLFxuICAgIGdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4sXG4gICAgZ2V0TmF2QmFyQ2F0ZWdvcnksXG4gICAgZ2V0TmF2QmFyQ2F0ZWdvcnlIZWFkZXIsXG4gICAgZ2V0TmF2QmFyQ2F0ZWdvcnlMaXN0LFxuICAgIGdldFRvZG9MaXN0Q2FyZFZpZXdNYWluLFxuICAgIGdldFRvZG9MaXN0Q2FyZFZpZXdIZWFkZXIsXG4gICAgZ2V0Q3JlYXRlTGlzdENhbmNlbEJ0bixcbiAgICBnZXRDcmVhdGVMaXN0Q3JlYXRlQnRuLFxuICAgIGdldENhcmRWaWV3Q29udGFpbmVyLFxuICAgIGdldEFkZFRvZG9CdG4sXG4gICAgZ2V0Q29udGFpbmVyLFxuICAgIGdldENyZWF0ZVRvZG9CdG4sXG4gICAgZ2V0Q2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCxcbiAgICBnZXRDcmVhdGVUb2RvTW9kYWwsXG4gICAgZ2V0Q3JlYXRlTGlzdE1vZGFsLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldENhdGVnb3J5LFxuICAgIGdldFRvZG9CYXNpY0RldGFpbCxcbiAgICBnZXRDaGVja01hcmtlcixcbiAgICBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXNUaXRsZSxcbiAgICBnZXRVbmZvbGRDYXRlZ29yeUJ0bixcbiAgICBnZXRGb2xkQ2F0ZWdvcnlCdG4sXG4gICAgZ2V0QWRkQ2F0ZWdvcnlCdG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHVibGljQVBJXG4gIH1cbn1cblxuZXhwb3J0IHsgR2V0IH07XG4iLCJcbmNvbnN0IEljb24gPSAoKSA9PiB7XG4gXG4gIGNvbnN0IGxvYWRDaGVja01hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja01hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjaGVja01hcmtlci5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2hlY2stY2lyY2xlJyk7XG4gIFxuICAgIHJldHVybiBjaGVja01hcmtlcjtcbiAgfVxuXG4gIGNvbnN0IGxvYWRVbmNvbXBsZXRlTWFya2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFVuY29tcGxldGVNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgVW5jb21wbGV0ZU1hcmtlci5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtY2hlY2stY2lyY2xlJyk7XG5cbiAgICByZXR1cm4gVW5jb21wbGV0ZU1hcmtlcjtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb21wbGV0ZU1hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZU1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb21wbGV0ZU1hcmtlci5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2lyY2xlJyk7XG5cbiAgICByZXR1cm4gY29tcGxldGVNYXJrZXI7XG4gIH1cblxuXG4gIGNvbnN0IGxvYWRUb2RvSXRlbURlbGV0ZUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYWNrc3BhY2UnLCAnVG9kb0l0ZW0tZGVsZXRlLWJ0bicpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbiAgfVxuXG5cblxuICBcblxuICByZXR1cm4ge1xuICAgIGxvYWRDaGVja01hcmtlcixcbiAgICBsb2FkVW5jb21wbGV0ZU1hcmtlcixcbiAgICBsb2FkQ29tcGxldGVNYXJrZXIsXG4gICAgbG9hZFRvZG9JdGVtRGVsZXRlQnRuLFxuICB9XG59XG5cbmV4cG9ydCB7IEljb24gfTtcblxuIiwiY29uc3QgbG9hZENhdGVnb3JpZXMgPSAoY2F0ZWdvcmllcykgPT4ge1xuICBjb25zdCBuYXZCYXJDYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZCYXJDYXRlZ29yeUxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWNhdGVnb3J5LWxpc3QnKTtcblxuICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1pdGVtcycpO1xuICAgIGxpLmlubmVyVGV4dCA9IGNhdGVnb3J5O1xuXG4gICAgbmF2QmFyQ2F0ZWdvcnlMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSlcblxuICByZXR1cm4gbmF2QmFyQ2F0ZWdvcnlMaXN0O1xufVxuXG5leHBvcnQgeyBsb2FkQ2F0ZWdvcmllcyB9OyIsImltcG9ydCAnLi4vLi4vY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzJztcbmNvbnN0IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcyA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zJyk7XG5cbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlKTtcblxuICByZXR1cm4gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zO1xufVxuXG5jb25zdCBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IChjYXRlZ29yaWVzKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXInKTtcbiAgXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtdGl0bGUnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlLmlubmVyVGV4dCA9ICdNb3ZlIHRvLi4uJztcbiAgXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4nKVxuXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlcik7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlKTtcblxuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluKTtcbiBcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUl0ZW0gPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoY2F0ZWdvcnkpO1xuXG5cbiAgICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChjYXRlZ29yeUl0ZW0pO1xuICB9KTtcbiAgLy8gY29uc3QgdG9wID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKCdUaGUgT2RpbiBQcm9qZWN0Jyk7XG4gIC8vIGNvbnN0IGd5bSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnZ3ltJyk7XG4gIC8vIGNvbnN0IHdvcmsgPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoJ3dvcmsnKTtcbiAgLy8gY29uc3Qgc2Nob29sID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKCdzY2hvb2wnKTtcbiAgLy8gY29uc3QgbGlmZSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnbGlmZScpO1xuICAvLyBjb25zdCBqaXVqaXRzdSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnaml1aml0c3UnKTtcbiAgXG4gIC8vIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKHRvcCk7XG4gIC8vIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKGd5bSk7XG4gIC8vIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKHdvcmspO1xuICAvLyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChzY2hvb2wpO1xuICAvLyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChsaWZlKTtcbiAgLy8gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQoaml1aml0c3UpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuICBcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9O1xuXG4vLyBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuLy8gY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKTtcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCk7XG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyc7XG5cbmNvbnN0IGxvYWRDcmVhdGVMaXN0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTGlzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwnKTtcbiAgY3JlYXRlTGlzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICAvLyBjcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsTGFiZWxUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbExhYmVsVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLUxhYmVsVGV4dC1jb250YWluZXInKTtcbiAgXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9ICdOQU1FIFRISVMgTElTVCc7XG5cbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLXRleHRGaWVsZC1jb250YWluZXInKTtcblxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGQuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC10aXRsZScpO1xuICBjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcblxuICAvLyBjcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXJcbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXInKTtcblxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtYnV0dG9ucycpO1xuICBjYW5jZWwuc2V0QXR0cmlidXRlKCdkYXRhLWJ0bicsICdjYW5jZWwnKTtcbiAgY2FuY2VsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGUuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1idXR0b25zJyk7XG4gIGNyZWF0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuJywgJ2NyZWF0ZScpO1xuICBjcmVhdGUuaW5uZXJUZXh0ID0gJ0NyZWF0ZSc7XG5cbiAgLy8gU3RydWN0dXJpbmdcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsKTtcblxuICBjcmVhdGVMaXN0TW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lcik7XG4gIGNyZWF0ZUxpc3RNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIpO1xuXG4gIC8vIENyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXJcbiAgY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIpO1xuICBjcmVhdGVMaXN0TW9kYWxDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZENvbnRhaW5lcik7XG4gIFxuICBjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZCk7XG5cbiAgLy8gY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyXG4gIGNyZWF0ZUxpc3RNb2RhbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICBjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCB7IGxvYWRDcmVhdGVMaXN0TW9kYWwgfTtcblxuLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbCA9IGdldENyZWF0ZUxpc3RNb2RhbCgpO1xuLy8gYm9keS5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWwpO1xuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY3JlYXRlVG9kb01vZGFsLmNzcyc7XG5cbmNvbnN0IGxvYWRUb2RvaW5mb0NvbnRhaW5lclRpdGxlID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLXRpdGxlJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gJ1RJVExFJztcblxuICBjb25zdCB0b2RvaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tdGl0bGUnKTtcblxuICBjb25zdCB0aXRsZVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGl0bGVUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLXRpdGxlJylcbiAgdGl0bGVUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICB0aXRsZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnSSB3YW50IHRvLi4uJyk7XG5cbiAgdG9kb2luZm9Db250YWluZXJUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0b2RvaW5mb0NvbnRhaW5lclRpdGxlLmFwcGVuZENoaWxkKHRvZG9pbmZvVGl0bGUpO1xuICB0b2RvaW5mb1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dGFyZWEpO1xuXG4gIHJldHVybiB0b2RvaW5mb0NvbnRhaW5lclRpdGxlO1xufVxuXG5jb25zdCBsb2FkVG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9ICdERVNDUklQVElPTic7XG5cbiAgY29uc3QgdG9kb2luZm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnSW5zZXJ0IHlvdXIgbm90ZXMgaGVyZScpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0b2RvaW5mb0Rlc2NyaXB0aW9uKTtcbiAgdG9kb2luZm9EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbjtcbn1cblxuY29uc3QgbG9hZFRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci1jYXRlZ29yeScpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9ICdDQVRFR09SWSc7XG5cbiAgY29uc3QgdG9kb2luZm9DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNhdGVnb3J5Jyk7XG5cbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25CdG4uY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY2F0ZWdvcnktc2VsZWN0QnRuJyk7XG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCBzb21ldGltZXNcbiAgY2F0ZWdvcnlTZWxlY3Rpb25CdG4uaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG5cbiAgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeS5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG9pbmZvQ2F0ZWdvcnkpO1xuICB0b2RvaW5mb0NhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uQnRuKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJDYXRlZ29yeTtcbn1cblxuY29uc3QgbG9hZFRvZG9JbmZvQ29udGFpbmVyID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHRvZG9JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwtdG9kb2luZm8tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJUaXRsZSA9IGxvYWRUb2RvaW5mb0NvbnRhaW5lclRpdGxlKCk7XG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24gPSBsb2FkVG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbigpO1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gbG9hZFRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuXG4gIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9pbmZvQ29udGFpbmVyVGl0bGUpO1xuICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uKTtcbiAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2luZm9Db250YWluZXJDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIHRvZG9JbmZvQ29udGFpbmVyO1xufVxuXG5jb25zdCBsb2FkQWRkVG9kb0J0bkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUb2RvQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXInKTtcblxuICBjb25zdCBjcmVhdGVUb2RvQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVUb2RvQnRucy5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLWJ1dHRvbnMnKTtcbiAgY3JlYXRlVG9kb0J0bnMuaW5uZXJUZXh0ID0gXCJBZGQgVG9kb1wiO1xuXG4gIGFkZFRvZG9CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnMpO1xuXG4gIHJldHVybiBhZGRUb2RvQnRuQ29udGFpbmVyO1xufVxuXG4vLyBSZXR1cm4gY3JlYXRlVG9kb01vZGFsIENvbnRlbnRzXG5jb25zdCBsb2FkQ3JlYXRlVG9kb01vZGFsID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCBjcmVhdGVUb2RvTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlVG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwnKTtcbiAgY3JlYXRlVG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjb25zdCB0b2RvSW5mb0NvbnRhaW5lciA9IGxvYWRUb2RvSW5mb0NvbnRhaW5lcihjYXRlZ29yeSk7XG4gIGNvbnN0IGFkZFRvZG9CdG5Db250YWluZXIgPSBsb2FkQWRkVG9kb0J0bkNvbnRhaW5lcigpO1xuICBcbiAgY3JlYXRlVG9kb01vZGFsLmFwcGVuZENoaWxkKHRvZG9JbmZvQ29udGFpbmVyKTtcbiAgY3JlYXRlVG9kb01vZGFsLmFwcGVuZENoaWxkKGFkZFRvZG9CdG5Db250YWluZXIpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Nb2RhbCk7XG5cbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBsb2FkQ3JlYXRlVG9kb01vZGFsIH07XG5cblxuIiwiZXhwb3J0IHsgbG9hZFRvZG9JdGVtIH0gZnJvbSAnLi9sb2FkVG9kb0l0ZW0uanMnO1xuZXhwb3J0IHsgbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwgfSBmcm9tICcuL2xvYWRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmpzJztcbmV4cG9ydCB7IGxvYWRDcmVhdGVMaXN0TW9kYWwgfSBmcm9tICcuL2xvYWRDcmVhdGVMaXN0TW9kYWwuanMnO1xuZXhwb3J0IHsgbG9hZENyZWF0ZVRvZG9Nb2RhbCB9IGZyb20gJy4vbG9hZENyZWF0ZVRvZG9Nb2RhbC5qcyc7XG5leHBvcnQgeyBsb2FkVG9kb0RldGFpbHNDYXJkVmlldyB9IGZyb20gJy4vbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcuanMnO1xuZXhwb3J0IHsgbG9hZENhdGVnb3JpZXMgfSBmcm9tICcuL2xvYWRDYXRlZ29yaWVzLmpzJztcblxuXG5cbiIsImltcG9ydCAnLi4vLi4vY3NzL3RvZG9EZXRhaWxzQ2FyZFZpZXcuY3NzJztcblxuLy8gVW5pdmVyc2FsIEZ1bmN0aW9uc1xuY29uc3QgbG9hZExhYmVsVGV4dCA9IChsYWJlbCkgPT4ge1xuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSBsYWJlbDtcblxuICByZXR1cm4gbGFiZWxUZXh0O1xufVxuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGNhcGl0YWxpemVkID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4gIHJldHVybiBjYXBpdGFsaXplZDtcbn1cblxuY29uc3QgbG9hZFByaW9yaXR5QnRuID0gKGltcG9ydGFuY2UpID0+IHtcbiAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaWQgPSBgcHJpb3JpdHktJHtpbXBvcnRhbmNlfS1idG5gO1xuICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAvLyBpbm5lcnRleHQgb2YgYnRuIGhhcyAnSW1wb3J0YW5jZScsIG5vdCAnaW1wbW9ydGFuY2UnXG4gIHByaW9yaXR5QnRuLmlubmVyVGV4dCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihpbXBvcnRhbmNlKTtcblxuICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS10YWcnLCAncHJpb3JpdHktYnRucy1ub3Qtc2VsZWN0ZWQnKTtcblxuICByZXR1cm4gcHJpb3JpdHlCdG47XG59XG5cbmNvbnN0IGxvYWRUaXRsZVJvdyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi10aXRsZVJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcbiAgXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxvYWRMYWJlbFRleHQoJ1RJVExFJyk7XG4gIFxuICBjb25zdCB0aXRsZVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGl0bGVUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAnVG9kb0VkaXQtdGl0bGUtdGV4dGZpZWxkJyk7XG4gIHRpdGxlVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcblxuXG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlVGV4dEFyZWEpO1xuXG4gIHJldHVybiB0aXRsZVJvdztcbn1cblxuY29uc3QgbG9hZFRhZ1JvdyA9ICgpID0+IHtcbiAgY29uc3QgdGFnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhZ1Jvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRhZ1JvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBsb2FkTGFiZWxUZXh0KCdUQUdTJyk7XG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFncy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1UYWdzJyk7XG4gIFxuICB0YWdSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGFnUm93LmFwcGVuZENoaWxkKHRhZ3MpO1xuXG4gIHRhZ3MuYXBwZW5kQ2hpbGQobG9hZFByaW9yaXR5QnRuKCdpbXBvcnRhbnQnKSk7XG4gIHRhZ3MuYXBwZW5kQ2hpbGQobG9hZFByaW9yaXR5QnRuKCdoaWdoJykpO1xuICB0YWdzLmFwcGVuZENoaWxkKGxvYWRQcmlvcml0eUJ0bignbWlkZGxlJykpO1xuICB0YWdzLmFwcGVuZENoaWxkKGxvYWRQcmlvcml0eUJ0bignbG93JykpO1xuXG4gIHJldHVybiB0YWdSb3c7XG59XG5cbmNvbnN0IGxvYWREdWVEYXRlUm93ID0gKCkgPT4ge1xuICBjb25zdCBkdWVEYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1EdWVEYXRlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxvYWRMYWJlbFRleHQoJ0RVRSBEQVRFJyk7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVJbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1EdWVEYXRlQm94Jyk7XG5cbiAgLy8gU2hvdWxkIGJlIGl0cyBvd24gbW9kdWxlIGxhdGVyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdUb2RvRWRpdC1EdWVEYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnRHVlRGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcyMDIwLTExLTAzJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcyMDIwLTExLTAzJyk7XG5cbiAgLy8gQXBwZW5kaW5nIENoaWxkXG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRCb3gpO1xuICBcbiAgZHVlRGF0ZUlucHV0Qm94LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgcmV0dXJuIGR1ZURhdGVSb3c7XG59XG5cbmNvbnN0IGxvYWREZXNjcmlwdGlvblJvdyA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Sb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1EZXNjcmlwdGlvblJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBsb2FkTGFiZWxUZXh0KCdERVNDUklQVElPTicpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICd0ZXh0RmllbGQtZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNycpO1xuXG4gIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGRlc2NyaXB0aW9uUm93LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvblJvdztcbn1cblxuY29uc3QgbG9hZENyZWF0ZWREYXRlUm93ID0gKGRhdGUpID0+IHtcbiAgLy8gTWF5YmUgSSBjYW4gaW1wb3J0IHNvbWUgbGlicmFyeSB0byBnZXQgdG9kYXkncyBkYXRlXG5cbiAgY29uc3QgY3JlYXRlZERhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlZERhdGVSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi1DcmVhdGVkRGF0ZVJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBsb2FkTGFiZWxUZXh0KCdDUkVBVEVEIERBVEUnKTtcblxuICBjb25zdCBjcmVhdGVkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVkRGF0ZS5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1DcmVhdGVkRGF0ZScpO1xuICAvLyBEWU5BTUlDIERBVEUgTkVFREVEXG4gIGNyZWF0ZWREYXRlLmlubmVyVGV4dCA9ICcyMDIwLjExLjAzJztcblxuICBjcmVhdGVkRGF0ZVJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBjcmVhdGVkRGF0ZVJvdy5hcHBlbmRDaGlsZChjcmVhdGVkRGF0ZSk7XG5cbiAgcmV0dXJuIGNyZWF0ZWREYXRlUm93O1xufVxuXG5jb25zdCBsb2FkVG9kb0VkaXRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9FZGl0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FZGl0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LWhlYWRlcicpO1xuICB0b2RvRWRpdEhlYWRlci5pbm5lclRleHQgPSBcIlRPRE8gREVUQUlMU1wiO1xuXG4gIHJldHVybiB0b2RvRWRpdEhlYWRlcjtcbn1cblxuY29uc3QgbG9hZFRvZG9FZGl0TWFpbiA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0VkaXRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FZGl0TWFpbi5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluJyk7XG5cbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKGxvYWRUaXRsZVJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKGxvYWRUYWdSb3coKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChsb2FkRHVlRGF0ZVJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKGxvYWREZXNjcmlwdGlvblJvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKGxvYWRDcmVhdGVkRGF0ZVJvdygpKTtcblxuICByZXR1cm4gdG9kb0VkaXRNYWluO1xufVxuXG5jb25zdCBsb2FkVG9kb0VkaXRQYW5lID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRWRpdFBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0VkaXRQYW5lLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LVBhbmUnKTtcblxuICB0b2RvRWRpdFBhbmUuYXBwZW5kQ2hpbGQobG9hZFRvZG9FZGl0SGVhZGVyKCkpO1xuICB0b2RvRWRpdFBhbmUuYXBwZW5kQ2hpbGQobG9hZFRvZG9FZGl0TWFpbigpKTtcblxuICByZXR1cm4gdG9kb0VkaXRQYW5lO1xufVxuXG4vLyBTaG91bGQgZXhwb3J0IG9ubHkgb25lIGJpZyBmdW5jdGlvblxuY29uc3QgbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9EZXRhaWxzQ2FyZFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0RldGFpbHNDYXJkVmlldy5jbGFzc0xpc3QuYWRkKCdUb2RvRGV0YWlscy1DYXJkVmlldycpO1xuXG4gIGNvbnN0IHRvZG9FZGl0UGFuZSA9IGxvYWRUb2RvRWRpdFBhbmUoKTtcbiAgdG9kb0RldGFpbHNDYXJkVmlldy5hcHBlbmRDaGlsZCh0b2RvRWRpdFBhbmUpO1xuXG4gIHJldHVybiB0b2RvRGV0YWlsc0NhcmRWaWV3O1xufVxuXG5leHBvcnQgeyBsb2FkVG9kb0RldGFpbHNDYXJkVmlldyB9O1xuXG5cblxuXG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy90b2RvTGlzdENhcmRWaWV3LmNzcyc7XG5cblxuY29uc3QgZ2V0VG9kb0l0ZW0gPSAoY29tcGxldGVkKSA9PiB7XG4gIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtJyk7XG5cbiAgaWYgKGNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLWNoZWNrZWQnKTtcbiAgfVxuXG4gIHJldHVybiB0b2RvSXRlbTtcbn1cblxuY29uc3QgZ2V0VG9kb0l0ZW1DaGVja0JveCA9IChjb21wbGV0ZWQpID0+IHtcbiAgY29uc3QgdG9kb0l0ZW1DaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbUNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLWNoZWNrQm94Jyk7XG4gIGxldCBtYXJrZXI7XG5cbiAgaWYgKGNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIG1hcmtlciA9IGdldENoZWNrZWRNYXJrZXIoKTtcbiAgICBcbiAgfSBlbHNlIHtcbiAgICBtYXJrZXIgPSBnZXRFbXB0eUNoZWNrTWFya2VyKCk7XG4gIH1cblxuICB0b2RvSXRlbUNoZWNrQm94LmFwcGVuZENoaWxkKG1hcmtlcik7XG5cbiAgcmV0dXJuIHRvZG9JdGVtQ2hlY2tCb3g7XG59XG5cbmNvbnN0IGdldEVtcHR5Q2hlY2tNYXJrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVtcHR5Q2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBlbXB0eUNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2lyY2xlJyk7XG4gIGVtcHR5Q2hlY2tNYXJrLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90Q29tcGxldGVkTWFya2VyJyk7XG5cbiAgcmV0dXJuIGVtcHR5Q2hlY2tNYXJrO1xufVxuXG5jb25zdCBnZXRDaGVja2VkTWFya2VyID0gKCkgPT4ge1xuICBjb25zdCBjaGVja2VkTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjaGVja2VkTWFya2VyLmNsYXNzTGlzdC5hZGQoJ2ZhcicsICdmYS1jaGVjay1jaXJjbGUnKTtcbiAgY2hlY2tlZE1hcmtlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZE1hcmtlcicpO1xuXG4gIHJldHVybiBjaGVja2VkTWFya2VyO1xufVxuXG5jb25zdCBnZXREZWxldGVCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYWNrc3BhY2UnLCAnVG9kb0l0ZW0tZGVsZXRlLWJ0bicpO1xuICBcbiAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cblxuY29uc3QgZ2V0VG9kb0l0ZW1UaXRsZSA9ICh0aXRsZSwgY29tcGxldGVkKSA9PiB7XG4gIGNvbnN0IHRvZG9JdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS10aXRsZScpO1xuICB0b2RvSXRlbVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICB0b2RvSXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLXRpdGxlLWNoZWNrZWQnKTtcbiAgfVxuXG4gIHJldHVybiB0b2RvSXRlbVRpdGxlO1xufVxuXG5cbmNvbnN0IGxvYWRUb2RvSXRlbSA9ICh0aXRsZSwgaW5kZXgsIGNvbXBsZXRlZCkgPT4ge1xuICAvLyBXZSBuZWVkIHRvIGluc2VydCB0aGUgcm93LCB0b2RvaXRlbSBpcyBpbiB0aGUgcm93XG4gIGNvbnN0IHRvZG9MaXN0TWFpblJvd3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0xpc3RNYWluUm93cy5jbGFzc0xpc3QuYWRkKCdUb2RvTGlzdC1tYWluLXJvd3MnKTtcbiAgdG9kb0xpc3RNYWluUm93cy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kbycsIGluZGV4KTtcblxuICBjb25zdCB0b2RvSXRlbSA9IGdldFRvZG9JdGVtKGNvbXBsZXRlZCk7XG4gIGNvbnN0IHRvZG9JdGVtQ2hlY2tCb3ggPSBnZXRUb2RvSXRlbUNoZWNrQm94KGNvbXBsZXRlZCk7XG4gIGNvbnN0IHRvZG9JdGVtVGl0bGUgPSBnZXRUb2RvSXRlbVRpdGxlKHRpdGxlLCBjb21wbGV0ZWQpO1xuICBjb25zdCBkZWxldGVCdG4gPSBnZXREZWxldGVCdG4oKTtcblxuXG4gIHRvZG9MaXN0TWFpblJvd3MuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbUNoZWNrQm94KTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW1UaXRsZSk7XG5cbiAgaWYgKGNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIH1cblxuICByZXR1cm4gdG9kb0xpc3RNYWluUm93cztcbn1cblxuZXhwb3J0IHsgbG9hZFRvZG9JdGVtIH07XG5cblxuXG5cblxuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSA9PiB7XG4gIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX2NhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIGxldCBfZHVlRGF0ZSA9ICcnO1xuICBsZXQgX2NyZWF0ZWREYXRlID0gJyc7XG4gIGxldCBfcHJpb3JpdHkgPSAnJztcbiAgbGV0IF9jb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VUXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBzZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgIF90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB9XG4gIFxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIF9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkdWVEYXRlKSA9PiB7XG4gICAgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgY29uc3Qgc2V0Q3JlYXRlZERhdGUgPSAoY3JlYXRlZERhdGUpID0+IHtcbiAgICBfY3JlYXRlZERhdGUgPSBjcmVhdGVkRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHRVRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiBfdGl0bGU7XG4gIH1cblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xuICB9XG4gIFxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NhdGVnb3J5O1xuICB9XG5cbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2R1ZURhdGU7XG4gIH1cblxuICBjb25zdCBnZXRDcmVhdGVkRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NyZWF0ZWREYXRlO1xuICB9XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBpcyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9jb21wbGV0ZWQ7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ29tcGxldGVkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBtYXJrQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIF9jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgdW5kb0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBfY29tcGxldGVkID0gZmFsc2U7XG4gIH0gXG5cbiAgXG4gIHJldHVybiB7XG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXRDYXRlZ29yeSwgc2V0RHVlRGF0ZSwgc2V0Q3JlYXRlZERhdGUsIHNldFByaW9yaXR5LFxuICAgIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2F0ZWdvcnksIGdldENyZWF0ZWREYXRlLCBnZXRQcmlvcml0eSwgZ2V0RHVlRGF0ZSxcbiAgICBpc0NvbXBsZXRlZCwgbWFya0NvbXBsZXRlZCwgdW5kb0NvbXBsZXRlZFxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG8gfTsgXG5cblxuXG4iLCJjb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBfdG9kb3MgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gIH07XG5cbiAgLy8gQWRkIFRvZG9cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5ID0gdG9kby5nZXRDYXRlZ29yeSgpO1xuICAgIFxuICAgIC8vIC8vIGlmIGNhdGVnb3J5IGRvZXNuJ3QgZXhpc3QsIGFkZCBvbmVcbiAgICAvLyBpZiAoIShjYXRlZ29yeSBpbiBfdG9kb3MpKSB7XG4gICAgLy8gICBhZGROZXdDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgLy8gfSBcbiAgICBcbiAgICBfdG9kb3NbY2F0ZWdvcnldLnB1c2godG9kbyk7XG4gIH1cblxuICBjb25zdCBhZGROZXdDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIF90b2Rvc1tjYXRlZ29yeV0gPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kb1RvRmluZCkgPT4ge1xuICAgIC8vIEl0ZXJhdGUgZXZlcnkgdG9kb3MgaW4gX3RvZG9zLCBpZiBmb3VuZCwgcmVtb3ZlIGl0LlxuICAgIGZvciAoY29uc3QgW2NhdGVnb3J5LCB0b2Rvc10gb2YgT2JqZWN0LmVudHJpZXMoX3RvZG9zKSkge1xuICAgICAgY29uc3QgdG9kb3NMZW5ndGggPSB0b2Rvcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdG9kb3NbaV07XG4gICAgICAgIGNvbnN0IHNhbWVPYmplY3RzID0gT2JqZWN0LmlzKHRvZG9Ub0ZpbmQsIGN1cnJlbnRUb2RvKTtcbiAgICAgICAgaWYgKHNhbWVPYmplY3RzKSB7XG4gICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpOztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICB9ICBcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJldHVybiBkZWxldGUgX3RvZG9zW2NhdGVnb3J5XTtcbiAgfVxuXG4gIGNvbnN0IGdldEFsbFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRvZG9zID0gW107XG4gICAgZm9yIChjb25zdCBbY2F0ZWdvcnksIHRvZG9zXSBvZiBPYmplY3QuZW50cmllcyhfdG9kb3MpKSB7XG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBhbGxUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVG9kb3M7XG4gIH1cblxuICBjb25zdCBnZXRUb2RvcyA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJldHVybiBfdG9kb3NbY2F0ZWdvcnldO1xuICB9XG5cbiAgY29uc3QgZ2V0QWxsQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoX3RvZG9zKTtcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfVxuXG4gIGNvbnN0IHNvcnRUb2Rvc0R1ZURhdGUgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KCh0b2RvT25lLCB0b2RvVHdvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvT25lRHVlRGF0ZSA9IHRvZG9PbmUuZ2V0RHVlRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kb1R3b0R1ZURhdGUgPSB0b2RvVHdvLmdldER1ZURhdGUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIE51bWJlcih0b2RvT25lRHVlRGF0ZSkgLSBOdW1iZXIodG9kb1R3b0R1ZURhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBUSElTIE5FRURTIFRPIEJFIEZJWEVELiBcbiAgICogSVQnUyBXT1JLSU5HLiBCVVQgVkVSWSBJTkVGRklDSUVOVCBDT0RFXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3Qgc29ydFRvZG9zUHJpb3JpdHkgPSAodG9kb3MpID0+IHtcbiAgICBcbiAgICBjb25zdCBJTVBPUlRBTlQgPSAxO1xuICAgIGNvbnN0IEhJR0ggPSAyO1xuICAgIGNvbnN0IE1JRERMRSA9IDM7XG4gICAgY29uc3QgTE9XID0gNDtcblxuICAgIHRvZG9zLnNvcnQoKHRvZG9PbmUsIHRvZG9Ud28pID0+IHtcbiAgICAgIGxldCB0b2RvT25lUHJpb3JpdHkgPSB0b2RvT25lLmdldFByaW9yaXR5KCk7XG4gICAgICBsZXQgdG9kb1R3b1ByaW9yaXR5ID0gdG9kb1R3by5nZXRQcmlvcml0eSgpO1xuICAgICAgXG4gICAgICBzd2l0Y2ggKHRvZG9PbmVQcmlvcml0eSkge1xuICAgICAgICBjYXNlIFwiaW1wb3J0YW50XCI6XG4gICAgICAgICAgdG9kb09uZVByaW9yaXR5ID0gSU1QT1JUQU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIHRvZG9PbmVQcmlvcml0eSA9IEhJR0g7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaWRkbGVcIjpcbiAgICAgICAgICB0b2RvT25lUHJpb3JpdHkgPSBNSURETEU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICB0b2RvT25lUHJpb3JpdHkgPSBMT1c7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodG9kb1R3b1ByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcbiAgICAgICAgICB0b2RvVHdvUHJpb3JpdHkgPSBJTVBPUlRBTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgdG9kb1R3b1ByaW9yaXR5ID0gSElHSDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAgIHRvZG9Ud29Qcmlvcml0eSA9IE1JRERMRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgIHRvZG9Ud29Qcmlvcml0eSA9IExPVztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICByZXR1cm4gdG9kb09uZVByaW9yaXR5IC0gdG9kb1R3b1ByaW9yaXR5O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zQ3JlYXRlZERhdGUgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KCh0b2RvT25lLCB0b2RvVHdvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvT25lQ3JlYXRlZERhdGUgPSB0b2RvT25lLmdldENyZWF0ZWREYXRlKCk7XG4gICAgICBjb25zdCB0b2RvVHdvQ3JlYXRlZERhdGUgPSB0b2RvVHdvLmdldENyZWF0ZWREYXRlKCk7XG4gICAgICBcbiAgICAgIHJldHVybiBOdW1iZXIodG9kb09uZUNyZWF0ZWREYXRlKSAtIE51bWJlcih0b2RvVHdvQ3JlYXRlZERhdGUpO1xuICAgIH0pO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIF90b2RvcyxcbiAgICBhZGRUb2RvLCBhZGROZXdDYXRlZ29yeSwgZGVsZXRlVG9kbywgZGVsZXRlQ2F0ZWdvcnksXG4gICAgZ2V0VG9kb3MsIGdldEFsbFRvZG9zLCBnZXRBbGxDYXRlZ29yaWVzLFxuICAgIHNvcnRUb2Rvc0R1ZURhdGUsIHNvcnRUb2Rvc0NyZWF0ZWREYXRlLCBzb3J0VG9kb3NQcmlvcml0eVxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9MaXN0IH07XG4iLCJpbXBvcnQgJy4vY3NzL2xhbmRpbmdQYWdlLmNzcyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvL1RvZG8uanMnO1xuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuL1RvZG9MaXN0L1RvZG9MaXN0LmpzJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXkvZGlzcGxheS5qcydcbmltcG9ydCB7IGxvYWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlL3N0b3JhZ2VBdmFpbGFibGUnO1xuXG5cbmNvbnN0IGRpc3BsYXkgPSBEaXNwbGF5KCk7XG5jb25zdCB0b2RvTGlzdCA9IFRvZG9MaXN0KCk7XG5cblxuLy8gdG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkoJ1RoZSBPZGluIFByb2plY3QnKTtcbi8vIHRvZG9MaXN0LmFkZE5ld0NhdGVnb3J5KCdXb3JrJyk7XG4vLyB0b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnTGlmZScpO1xuLy8gdG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkoJ1NjaG9vbCcpO1xuLy8gdG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkoJ0d5bScpO1xuXG4vLyBjb25zb2xlLmxvZyh0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCkpO1xuXG5cbmRpc3BsYXkuYWN0aXZhdGVDcmVhdGVUb2RvQnRuKCk7XG5kaXNwbGF5LmFjdGl2YXRlVW5mb2xkQ2F0ZWdvcnlCdG4oKTtcbmRpc3BsYXkuYWN0aXZhdGVBZGRDYXRlZ29yeUJ0bigpO1xuZGlzcGxheS5zaG93VG9kb0RldGFpbHNDYXJkVmlldygpO1xuXG5cblxuXG5cblxuXG5cblxuXG4vLyBkaXNwbGF5LnN0YXJ0TGlzdGVuaW5nQ2xpY2tFdmVudFxuXG5cbiAgXG5cblxuXG5cblxuXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9