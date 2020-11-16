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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n}\n\n#fold-category-btn {\n  display: none;\n}\n\n#add-category-btn {\n  display: none;\n  background: none;\n  color: var(--color-text-1);\n}\n\n#add-category-btn:active {\n  transform: scale(0.95);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n", "",{"version":3,"sources":["webpack://src/css/landingPage.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n}\n\n#fold-category-btn {\n  display: none;\n}\n\n#add-category-btn {\n  display: none;\n  background: none;\n  color: var(--color-text-1);\n}\n\n#add-category-btn:active {\n  transform: scale(0.95);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./src/Display/get.js");
/* harmony import */ var _TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TodoList/TodoList.js */ "./src/TodoList/TodoList.js");
/* harmony import */ var _Todo_Todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Todo/Todo.js */ "./src/Todo/Todo.js");






const todoList = (0,_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_2__.TodoList)();
const get = (0,_get_js__WEBPACK_IMPORTED_MODULE_1__.Get)().publicAPI;



const Display = () => {

  const isEmpty = (str) => {
    if (str.length === 0) {
      return true;
    }
    
    return false;
  }

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

  const startListeningClickEvent = (elem) => {
    elem.addEventListener('click', openModal);
  }

  const addTodo = (title) => {
    const todoListCardViewMain = get.getTodoListCardViewMain();
    todoListCardViewMain.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoItem)(title));
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
  
  const loadCheckMarker = () => {
    const checkMarker = document.createElement('i');
    checkMarker.classList.add('far', 'fa-check-circle');
  
    return checkMarker;
  }


  const changeCategoryInCreateTodoModal = (category) => {
    const categorySelectBtn = get.getTodoInfoCategorySelectBtn();
    categorySelectBtn.innerText = category;
  }

  const placeMarker = (elem) => {
    const marker = loadCheckMarker();
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
        item.appendChild(loadCheckMarker());
      }   
    })
  }

  const createTodo = () => {

  }

  const activateAddTodoBtn = () => {
    const addTodoBtn = get.getAddTodoBtn();
    addTodoBtn.addEventListener('click', (event) => {
      const title = get.getTitle();
      if (title.length > 0) {
        const description = get.getDescription();
        const category = get.getCategory();
        // ALL WORKING. But I do need to add it to the 'todolist'
        todoList.addTodo((0,_Todo_Todo_js__WEBPACK_IMPORTED_MODULE_3__.Todo)(title, description, category));


        closeModal(get.getCreateTodoModal());
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
        
        closeModal(get.getCreateListModal());
      }
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

  

  return {
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    addTodo,
    showTodoDetailsCardView,
    activateCreateTodoBtn,
    activateUnfoldCategoryBtn,
    activateAddCategoryBtn,
  }
}







// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>

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

  

  const publicAPI = {
    getCreateListTitle,
    getTodoInfoCategorySelectBtn,
    getNavBarCategory,
    getNavBarCategoryHeader,
    getNavBarCategoryList,
    getTodoListCardViewMain,
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


const loadTodoItem = (title) => {
  // We need to insert the row, todoitem is in the row
  const todoListMainRows = document.createElement('div');
  todoListMainRows.classList.add('TodoList-main-rows')

  const todoItem = document.createElement('div');
  todoItem.classList.add('TodoItem');

  const todoItemCheckBox = document.createElement('div');
  todoItemCheckBox.classList.add('TodoItem-checkBox');

  const emptyCheckMark = document.createElement('i');
  emptyCheckMark.classList.add('far', 'fa-circle');

  // const checkedMark = document.createElement('i');
  // checkedMark.classList.add('fas', 'fa-check-circle');

  const todoItemTitle = document.createElement('div');
  todoItemTitle.classList.add('TodoItem-title');
  todoItemTitle.innerText = title;

  // const deleteBtn = document.createElement('i');
  // deleteBtn.classList.add('fas', 'fa-backspace', 'TodoItem-delete-btn');

  todoListMainRows.appendChild(todoItem);
  todoItem.appendChild(todoItemCheckBox);
  todoItemCheckBox.appendChild(emptyCheckMark);
  todoItem.appendChild(todoItemTitle);

  return todoListMainRows;
}



// const cardViewMain = document.querySelector('.TodoList-CardView-main');
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));
// cardViewMain.appendChild(createTodoItem('workout'));





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


display.addTodo('The Odin Project');
display.addTodo('TodoList');
display.addTodo('isHard....');
display.addTodo('But consistency over efficiency');
display.addTodo('Makes all difference so I shall proceed');








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9sYW5kaW5nUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcz82MTEyIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcz8wNjk4Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlVG9kb01vZGFsLmNzcz82MWEwIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvbGFuZGluZ1BhZ2UuY3NzPzY4MjkiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcz8xYjdkIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvdG9kb0xpc3RDYXJkVmlldy5jc3M/MjJjMSIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9nZXQuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENyZWF0ZUxpc3RNb2RhbC5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRDcmVhdGVUb2RvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkTW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRUb2RvRGV0YWlsc0NhcmRWaWV3LmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZFRvZG9JdGVtLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9Ub2RvL1RvZG8uanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL1RvZG9MaXN0L1RvZG9MaXN0LmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvbG9jYWxTdG9yYWdlL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLEdBQUcsV0FBVyw0QkFBNEIsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsK0JBQStCLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLDRCQUE0Qiw0QkFBNEIsbURBQW1ELGdDQUFnQyxnQ0FBZ0MsOEJBQThCLGtDQUFrQyw4Q0FBOEMscUNBQXFDLG1DQUFtQywrQ0FBK0MsOENBQThDLHNDQUFzQyw0Q0FBNEMsNEJBQTRCLHFDQUFxQyw0Q0FBNEMscUVBQXFFLG9DQUFvQyxnQ0FBZ0MsNkJBQTZCLEdBQUcsa0NBQWtDLG9CQUFvQixrQkFBa0IsaUJBQWlCLEdBQUcsY0FBYyxpQkFBaUIsaUJBQWlCLEdBQUcsMkNBQTJDLHNDQUFzQywwQ0FBMEMsbUNBQW1DLGdEQUFnRCxHQUFHLGdCQUFnQixrQ0FBa0MsZUFBZSwrQkFBK0IsMkNBQTJDLEdBQUcseUNBQXlDLGtCQUFrQixrREFBa0Qsc0RBQXNELHFDQUFxQyxHQUFHLHNCQUFzQixnREFBZ0QsR0FBRyw0QkFBNEIsc0RBQXNELEdBQUcs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QUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSw2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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFc0M7O0FBRXRDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFdUM7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIa0I7QUFDNEI7QUFDZDtBQUNBO0FBQ1E7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFY7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktLOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQSxPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJVztBQUNPO0FBQ1k7QUFDSjtBQUM2QjtBQUNSOzs7QUFHbkUsZ0JBQWdCLDREQUFPO0FBQ3ZCLGlCQUFpQiwrREFBUTs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIHtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG5cXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgLyogR2l2ZSBwYWRkaW5nIHRvIHRoZSBqdXN0IHNpZGUgKi9cXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6aG92ZXIsXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1pdGVtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1zaXplKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwgLmZhLWNoZWNrLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtLWNvbG9yKTsgXFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjOztFQUVkLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCLDRDQUE0QztFQUM1Qyx3RUFBd0U7RUFDeEUsbUNBQW1DOztFQUVuQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztFQUMzQyx3RUFBd0U7O0VBRXhFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsbURBQW1EO0VBQ25ELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCB7XFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgbWF4LWhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1oZWFkZXIge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWluLWhlaWdodDogNTVweDtcXG4gIC8qIEdpdmUgcGFkZGluZyB0byB0aGUganVzdCBzaWRlICovXFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcyB7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmhvdmVyLFxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtaXRlbS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1pdGVtLWZvbnQtc2l6ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIC5mYS1jaGVjay1jaXJjbGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybS1jb2xvcik7IFxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogICovXFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNjVweDtcXG4gIFxcbiAgLyogVE8gQkUgUkVNT1ZFRCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtY29udGVudC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtTGFiZWxUZXh0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLXRleHRGaWVsZC1jb250YWluZXIge1xcbiAgXFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAwIDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG5cXG4gIC8qIFRvIGNlbnRlciB0aGluZ3MgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6aG92ZXIsIFxcbi5jcmVhdGVMaXN0LWJ1dHRvbnM6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY2FuY2VsXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbltkYXRhLWJ0bj1cXFwiY3JlYXRlXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIDA7IFxcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSxLQUFLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLGFBQWE7O0VBRWIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDE2NXB4O1xcbiAgXFxuICAvKiBUTyBCRSBSRU1PVkVEICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDExMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lciB7XFxuICBcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDAgO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcblxcbiAgLyogVG8gY2VudGVyIHRoaW5ncyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpob3ZlciwgXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjYW5jZWxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgdmFyKC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjcmVhdGVcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMDsgXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZUxpc3RNb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcblxcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC10b2RvaW5mby1jb250YWluZXIge1xcbiAgZmxleDogMSAwIDA7XFxuICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiA0IDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5IHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cXG5cXG4udG9kb2luZm8tY2F0ZWdvcnktc2VsZWN0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLWFkZFRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGZsZXg6IDAgMCA1NHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIC8qIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTMpOyAqL1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6aG92ZXIsXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQiwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFFLGVBQWU7O0VBRTNCLFlBQVksRUFBRSxlQUFlO0VBQzdCLGFBQWEsRUFBRSxnQkFBZ0I7O0VBRS9CLGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7O0VBRWxCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOzs7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5Q0FBeUM7RUFDekMsMkNBQTJDOztFQUUzQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjs7RUFFdEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXOztFQUVYLHdFQUF3RTtFQUN4RSw0Q0FBNEM7RUFDNUMsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSx3REFBd0Q7QUFDMURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZUxpc3RNb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcblxcbiAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlVG9kby1tb2RhbC10b2RvaW5mby1jb250YWluZXIge1xcbiAgZmxleDogMSAwIDA7XFxuICBwYWRkaW5nOiB2YXIoLS1ndXR0ZXIpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBmbGV4OiA0IDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5IHtcXG4gIGZsZXg6IDEgMCAwO1xcbn1cXG5cXG4udG9kb2luZm8tY2F0ZWdvcnktc2VsZWN0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLWFkZFRvZG9CdG4tY29udGFpbmVyIHtcXG4gIGZsZXg6IDAgMCA1NHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9ucyB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIC8qIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTMpOyAqL1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvLWJ1dHRvbnM6aG92ZXIsXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1hY3Rpb24tYnV0dG9uLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtYmctMS1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcblxcbiAgLyogVG9kb0xpc3QtQ2FyZFZpZXcgKi9cXG4gIC0tdG9kby1pdGVtLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICM0MjQyNDI7XFxuICAtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3I6ICM4ZThlOTI7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemU6IDIwcHg7XFxuICAtLWNhcmQtYmctMS1jb2xvcjogIzE2MTYxNjtcXG5cXG4gIC8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuICAtLUNhcmRQYWRkZXItcmlnaHQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItbGVmdDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci10b3A6IDhweDtcXG4gIC0tQ2FyZFBhZGRlci1ib3R0b206IDhweDtcXG4gIC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcXG4gIC0tZm9udC1zaXplLWJhc2U6IDE1cHg7XFxuXFxuICAvKiBMYW5kaW5nIFBhZ2UgKi9cXG4gIC0tbmF2YmFyLWNhdGVnb3J5LXRleHQtY29sb3I6ICM4ZThlOTI7XFxuICAtLWNhdGVnb3J5LWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDsgXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIExBTkRJTkcgUEFHRSAqL1xcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICBcXG59XFxuXFxuLm5hdmJhci1oZWFkZXIge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZyk7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLnBlcnNvbmFsLWRldGFpbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnBlcnNvbmFsLWRldGFpbC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxufVxcblxcbi5wZXJzb25hbC1zb2NpYWwtbWVkaWFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtaWNvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4uY3JlYXRlVG9kb0J0bi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5NnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjcmVhdGVUb2RvQnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1idXR0b24tdGV4dC1jb2xvcik7XFxuICBcXG59XFxuXFxuI2NyZWF0ZVRvZG9CdG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi8qIE5BVkJBUiBNQUlOICovXFxuLm5hdmJhci1tYWluIHtcXG59XFxuLm5hdmJhci1jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdmJhci1jYXRlZ29yeS1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZyk7XFxufVxcblxcbi5uYXZiYXItY2F0ZWdvcnktaGVhZGVyIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWxpc3Qge1xcbiAgY29sb3I6IHZhcigtLW5hdmJhci1jYXRlZ29yeS10ZXh0LWNvbG9yKTtcXG4gIC8qIFJhbmRvbSBIZWlnaHQgKi9cXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxufVxcblxcbi5jYXRlZ29yeS1pdGVtcyB7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIHZhcigtLW5hdmJhci1sZWZ0LXJpZ2h0LXBhZGRpbmcpO1xcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbXM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2F0ZWdvcnktaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxufVxcblxcbiNmb2xkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5LWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcblxcbi5tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIC5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59IFxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2xhbmRpbmdQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFD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VixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWFjdGlvbi1idXR0b24tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbiAgLyogVG9kb0RldGFpbHMtQ2FyZFZpZXcgKi9cXG4gIC0tQ2FyZFBhZGRlci1yaWdodDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci1sZWZ0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLXRvcDogOHB4O1xcbiAgLS1DYXJkUGFkZGVyLWJvdHRvbTogOHB4O1xcbiAgLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplOiAyNHB4O1xcbiAgLS1mb250LXNpemUtYmFzZTogMTVweDtcXG5cXG4gIC8qIExhbmRpbmcgUGFnZSAqL1xcbiAgLS1uYXZiYXItY2F0ZWdvcnktdGV4dC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tY2F0ZWdvcnktaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogTEFORElORyBQQUdFICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICB3aWR0aDogMjgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxcbn1cXG5cXG4ubmF2YmFyLWhlYWRlciB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLnBlcnNvbmFsLXNvY2lhbC1tZWRpYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvQnRuLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDk2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NyZWF0ZVRvZG9CdG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWJ1dHRvbi10ZXh0LWNvbG9yKTtcXG4gIFxcbn1cXG5cXG4jY3JlYXRlVG9kb0J0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTkFWQkFSIE1BSU4gKi9cXG4ubmF2YmFyLW1haW4ge1xcbn1cXG4ubmF2YmFyLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWhlYWRlciB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG59XFxuXFxuLm5hdmJhci1jYXRlZ29yeS1oZWFkZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5uYXZiYXItY2F0ZWdvcnktbGlzdCB7XFxuICBjb2xvcjogdmFyKC0tbmF2YmFyLWNhdGVnb3J5LXRleHQtY29sb3IpO1xcbiAgLyogUmFuZG9tIEhlaWdodCAqL1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZyk7XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuI2ZvbGQtY2F0ZWdvcnktYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtY2F0ZWdvcnktYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxufVxcblxcbiNhZGQtY2F0ZWdvcnktYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuXFxuLm1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9pbWcvYmFja2dyb3VuZC5qcGcnKTsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5DYXJkVmlldy1Db250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5DYXJkVmlldy1Db250YWluZXIgLlRvZG9EZXRhaWxzLUNhcmRWaWV3IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn0gXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcblxcbiAgLyogVG9kb0xpc3QtQ2FyZFZpZXcgKi9cXG4gIC0tdG9kby1pdGVtLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICM0MjQyNDI7XFxuICAtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3I6ICM4ZThlOTI7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemU6IDIwcHg7XFxuICAtLWNhcmQtYmctMS1jb2xvcjogIzE2MTYxNjtcXG5cXG4gIC8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuICAtLUNhcmRQYWRkZXItcmlnaHQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItbGVmdDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci10b3A6IDhweDtcXG4gIC0tQ2FyZFBhZGRlci1ib3R0b206IDhweDtcXG4gIC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcXG4gIC0tZm9udC1zaXplLWJhc2U6IDE1cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuXFxuLlRvZG9EZXRhaWxzLUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uVG9kb0VkaXQtUGFuZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDU0cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1DYXJkUGFkZGVyLWJvdHRvbSk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tQ2FyZFBhZGRlci1sZWZ0KTtcXG59XFxuXFxuLlRvZG9FZGl0LXBhZGRlciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRpdGxlUm93IHtcXG5cXG59XFxuXFxuLlRvZG9FZGl0LVRhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByaW9yaXR5LXRhZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1leHRyYS1zbWFsbC1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJpb3JpdHktdGFnOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpXFxufVxcblxcbi8qICNwcmlvcml0eS1pbXBvcnRhbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTMyMzI7XFxufVxcblxcbiNwcmlvcml0eS1oaWdoLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNCQTNBO1xcbn1cXG5cXG4jcHJpb3JpdHktbWlkZGxlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBiNzY3O1xcbn1cXG5cXG4jcHJpb3JpdHktbG93LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xcbn0gKi9cXG5cXG4ucHJpb3JpdHktYnRucy1ub3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuXFxuLlRvZG9FZGl0LXRpdGxlLXRleHRmaWVsZCB7XFxuICBmb250LXNpemU6IHZhcigtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4tdGFnUm93IHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxufVxcblxcbi5Ub2RvRWRpdC1DcmVhdGVkRGF0ZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvdG9kb0RldGFpbHNDYXJkVmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjOztFQUVkLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix3QkFBd0I7O0VBRXhCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLDBCQUEwQjs7RUFFMUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixzQ0FBc0M7RUFDdEMsMkNBQTJDO0VBQzNDLHNCQUFzQjtBQUN4Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpREFBaUQ7RUFDakQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4Qyx5Q0FBeUM7O0VBRXpDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLDRDQUE0Qzs7RUFFNUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGtDQUFrQztFQUNsQyx3Q0FBd0M7RUFDeEMsc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtDQUFrQzs7RUFFbEMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7QUFFQTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcblxcbiAgLyogVG9kb0xpc3QtQ2FyZFZpZXcgKi9cXG4gIC0tdG9kby1pdGVtLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICM0MjQyNDI7XFxuICAtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3I6ICM4ZThlOTI7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemU6IDIwcHg7XFxuICAtLWNhcmQtYmctMS1jb2xvcjogIzE2MTYxNjtcXG5cXG4gIC8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuICAtLUNhcmRQYWRkZXItcmlnaHQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItbGVmdDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci10b3A6IDhweDtcXG4gIC0tQ2FyZFBhZGRlci1ib3R0b206IDhweDtcXG4gIC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjRweDtcXG4gIC0tZm9udC1zaXplLWJhc2U6IDE1cHg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9EZXRhaWxzLUNhcmRWaWV3ICovXFxuXFxuLlRvZG9EZXRhaWxzLUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uVG9kb0VkaXQtUGFuZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtaGVhZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDU0cHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1DYXJkUGFkZGVyLWJvdHRvbSk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1DYXJkUGFkZGVyLXJpZ2h0KTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tQ2FyZFBhZGRlci1sZWZ0KTtcXG59XFxuXFxuLlRvZG9FZGl0LXBhZGRlciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRpdGxlUm93IHtcXG5cXG59XFxuXFxuLlRvZG9FZGl0LVRhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByaW9yaXR5LXRhZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1leHRyYS1zbWFsbC1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJpb3JpdHktdGFnOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpXFxufVxcblxcbi8qICNwcmlvcml0eS1pbXBvcnRhbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTMyMzI7XFxufVxcblxcbiNwcmlvcml0eS1oaWdoLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNCQTNBO1xcbn1cXG5cXG4jcHJpb3JpdHktbWlkZGxlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBiNzY3O1xcbn1cXG5cXG4jcHJpb3JpdHktbG93LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNmE2O1xcbn0gKi9cXG5cXG4ucHJpb3JpdHktYnRucy1ub3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjtcXG59XFxuXFxuLlRvZG9FZGl0LXRpdGxlLXRleHRmaWVsZCB7XFxuICBmb250LXNpemU6IHZhcigtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4tdGFnUm93IHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxufVxcblxcbi5Ub2RvRWRpdC1DcmVhdGVkRGF0ZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA2M3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uVG9kb0xpc3QtQ2FyZFZpZXctbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgXFxufVxcblxcbi5Ub2RvTGlzdC1tYWluLXJvd3Mge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbTpob3ZlcixcXG4uVG9kb0l0ZW06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbS1jaGVja0JveCB7XFxuICBtaW4td2lkdGg6IDQ4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5Ub2RvSXRlbS10aXRsZS1jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW0tZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxREFBcUQ7RUFDckQseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2Qyx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixjQUFjOztFQUVkLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix3QkFBd0I7O0VBRXhCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLDBCQUEwQjs7QUFFNUI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4Qyx5Q0FBeUM7O0VBRXpDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6Qyw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3IHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgbWluLWhlaWdodDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA2M3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIGNvbG9yOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uVG9kb0xpc3QtQ2FyZFZpZXctbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgXFxufVxcblxcbi5Ub2RvTGlzdC1tYWluLXJvd3Mge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbTpob3ZlcixcXG4uVG9kb0l0ZW06Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tlZCB7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbS1jaGVja0JveCB7XFxuICBtaW4td2lkdGg6IDQ4cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5Ub2RvSXRlbS10aXRsZS1jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW0tZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3JlYXRlTGlzdE1vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3JlYXRlVG9kb01vZGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGFuZGluZ1BhZ2UuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvRGV0YWlsc0NhcmRWaWV3LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0xpc3RDYXJkVmlldy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFxuICBsb2FkVG9kb0l0ZW0sXG4gIGxvYWRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLFxuICBsb2FkQ3JlYXRlTGlzdE1vZGFsLFxuICBsb2FkQ3JlYXRlVG9kb01vZGFsLFxuICBsb2FkVG9kb0RldGFpbHNDYXJkVmlldyxcbiAgbG9hZENhdGVnb3JpZXNcbn0gZnJvbSAnLi9tb2R1bGVMb2FkZXJzL2xvYWRNb2R1bGVzLmpzJztcblxuaW1wb3J0IHsgR2V0IH0gZnJvbSAnLi9nZXQuanMnO1xuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuLi9Ub2RvTGlzdC9Ub2RvTGlzdC5qcyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vVG9kby9Ub2RvLmpzJztcblxuY29uc3QgdG9kb0xpc3QgPSBUb2RvTGlzdCgpO1xuY29uc3QgZ2V0ID0gR2V0KCkucHVibGljQVBJO1xuXG5cblxuY29uc3QgRGlzcGxheSA9ICgpID0+IHtcblxuICBjb25zdCBpc0VtcHR5ID0gKHN0cikgPT4ge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IChtb2RhbCkgPT4ge1xuICAgIG1vZGFsLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBhdHRhY2hNb2RhbENsb3NlciA9IChtb2RhbCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlVGhpc01vZGFsKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwucGFyZW50Tm9kZSkge1xuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUaGlzTW9kYWwpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBzdGFydExpc3RlbmluZ0NsaWNrRXZlbnQgPSAoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuICB9XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXdNYWluID0gZ2V0LmdldFRvZG9MaXN0Q2FyZFZpZXdNYWluKCk7XG4gICAgdG9kb0xpc3RDYXJkVmlld01haW4uYXBwZW5kQ2hpbGQobG9hZFRvZG9JdGVtKHRpdGxlKSk7XG4gIH1cblxuICBjb25zdCBzaG93VG9kb0RldGFpbHNDYXJkVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVmlld0NvbnRhaW5lciA9IGdldC5nZXRDYXJkVmlld0NvbnRhaW5lcigpO1xuICAgIGNhcmRWaWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRUb2RvRGV0YWlsc0NhcmRWaWV3KCkpO1xuICB9XG5cbiAgXG5cbiAgY29uc3Qgb3BlbkNyZWF0ZVRvZG9Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQuZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcbiAgICBcbiAgICAvLyBUbyBqdXN0IGxvYWQgdGhlIGZpcnN0IGNhdGVnb3J5XG4gICAgY29uc3QgY3JlYXRlVG9kb01vZGFsQ29udGVudCA9IGxvYWRDcmVhdGVUb2RvTW9kYWwoY2F0ZWdvcmllc1swXSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Nb2RhbENvbnRlbnQpO1xuICB9XG5cbiAgY29uc3Qgb3BlbkNyZWF0ZUxpc3RNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQuZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY3JlYXRlTGlzdE1vZGFsQ29udGVudCA9IGxvYWRDcmVhdGVMaXN0TW9kYWwoKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsQ29udGVudCk7XG4gIH1cblxuICBjb25zdCByZW1vdmVDaGVja01hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja01hcmtlciA9IGdldC5nZXRDaGVja01hcmtlcigpO1xuICAgIGNoZWNrTWFya2VyLnJlbW92ZSgpO1xuICB9XG4gIFxuICBjb25zdCBsb2FkQ2hlY2tNYXJrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY2hlY2tNYXJrZXIuY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLWNoZWNrLWNpcmNsZScpO1xuICBcbiAgICByZXR1cm4gY2hlY2tNYXJrZXI7XG4gIH1cblxuXG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5SW5DcmVhdGVUb2RvTW9kYWwgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdEJ0biA9IGdldC5nZXRUb2RvSW5mb0NhdGVnb3J5U2VsZWN0QnRuKCk7XG4gICAgY2F0ZWdvcnlTZWxlY3RCdG4uaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBjb25zdCBwbGFjZU1hcmtlciA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgbWFya2VyID0gbG9hZENoZWNrTWFya2VyKCk7XG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGVsZW0uY2hpbGROb2Rlc1swXTtcbiAgICBjb25zdCBoYXNNYXJrZXIgPSAhKGNhdGVnb3J5VGl0bGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKTtcbiAgICBpZiAoIWhhc01hcmtlcikge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50O1xuICAgICAgXG4gICAgICByZW1vdmVDaGVja01hcmtlcigpO1xuICAgICAgY2F0ZWdvcnlUaXRsZS5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICAgICAgY2hhbmdlQ2F0ZWdvcnlJbkNyZWF0ZVRvZG9Nb2RhbChjYXRlZ29yeSk7XG4gICAgfSBcbiAgfVxuXG4gIGNvbnN0IG9wZW5DYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gKGNhdGVnb3JpZXMpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBnZXQuZ2V0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbENvbnRlbnQgPSBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbChjYXRlZ29yaWVzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbENvbnRlbnQpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RCdG4gPSBnZXQuZ2V0VG9kb0luZm9DYXRlZ29yeVNlbGVjdEJ0bigpO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeVNlbGVjdEJ0bi50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IGl0ZW1zVGl0bGUgPSBnZXQuZ2V0Q2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zVGl0bGUoKTtcbiAgICBpdGVtc1RpdGxlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICAgIGlmIChjYXRlZ29yeVRpdGxlID09PSBzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZENoZWNrTWFya2VyKCkpO1xuICAgICAgfSAgIFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjcmVhdGVUb2RvID0gKCkgPT4ge1xuXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZUFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGdldC5nZXRBZGRUb2RvQnRuKCk7XG4gICAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBnZXQuZ2V0VGl0bGUoKTtcbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0LmdldENhdGVnb3J5KCk7XG4gICAgICAgIC8vIEFMTCBXT1JLSU5HLiBCdXQgSSBkbyBuZWVkIHRvIGFkZCBpdCB0byB0aGUgJ3RvZG9saXN0J1xuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvKFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSkpO1xuXG5cbiAgICAgICAgY2xvc2VNb2RhbChnZXQuZ2V0Q3JlYXRlVG9kb01vZGFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVDcmVhdGVUb2RvQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBnZXQuZ2V0Q3JlYXRlVG9kb0J0bigpO1xuICAgIGNyZWF0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIG9wZW5DcmVhdGVUb2RvTW9kYWwoKTtcbiAgICAgIGF0dGFjaE1vZGFsQ2xvc2VyKGdldC5nZXRDcmVhdGVUb2RvTW9kYWwoKSk7XG4gICAgICBhY3RpdmF0ZUNhdGVnb3J5U2VsZWN0QnRuKCk7XG4gICAgICBhY3RpdmF0ZUFkZFRvZG9CdG4oKTtcbiAgICAgIFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZVNlbGVjdGluZ0NhdGVnb3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMnKTtcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBsYWNlTWFya2VyKGNhdGVnb3J5KTtcbiAgICAgICAgY2xvc2VNb2RhbChnZXQuZ2V0Q2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCgpKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZUNhdGVnb3J5U2VsZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0QnRuID0gZ2V0LmdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4oKTtcbiAgICBjYXRlZ29yeVNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKTtcbiAgICAgIG9wZW5DYXRlZ29yeVNlbGVjdGlvbk1vZGFsKGNhdGVnb3JpZXMpO1xuICAgICAgYWN0aXZhdGVTZWxlY3RpbmdDYXRlZ29yeSgpO1xuICAgICAgYXR0YWNoTW9kYWxDbG9zZXIoZ2V0LmdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFjdGl2YXRlVW5mb2xkQ2F0ZWdvcnlCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgdW5mb2xkQ2F0ZWdvcnlCdG4gPSBnZXQuZ2V0VW5mb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgICB1bmZvbGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIFJlYWQgZnJvbSB0b2RvbGlzdCB3aGF0IGNhdGVnb3JpZXMgZXhpc3RcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgICAvLyBNYWtlIGVhY2ggY2F0YWVnb3J5IGl0ZW0gYW5kIGFwcGVuZCBpdCB0byB0aGUgZGlzcGxheVxuICAgICAgY29uc3QgY2F0ZWdvcnlMaXN0VWwgPSBsb2FkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcbiAgICAgIGNvbnN0IG5hdkJhckNhdGVnb3J5ID0gZ2V0LmdldE5hdkJhckNhdGVnb3J5KCk7XG4gICAgICBuYXZCYXJDYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3RVbCk7XG4gICAgICAvLyBDaGFuZ2UgJ3YnIHRvICdeJ1xuICAgICAgc2hvd0ZvbGRCdG4oKTtcbiAgICAgIHNob3dBZGRDYXRlZ29yeUJ0bigpO1xuICAgICAgYWN0aXZhdGVGb2xkQ2F0ZWdvcnlCdG4oKTtcblxuICAgICAgLy8gQWRkICcrJyBjcmVhdGVMaXN0IGJ1dHRvblxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZUZvbGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkQ2F0ZWdvcnlCdG4gPSBnZXQuZ2V0Rm9sZENhdGVnb3J5QnRuKCk7XG4gICAgZm9sZENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2hhbmdlVG9VbmZvbGQoKSB7XG4gICAgICBzaG93VW5mb2xkQnRuKCk7XG4gICAgICBoaWRlQWRkQ2F0ZWdvcnlCdG4oKTtcbiAgICAgIHJlbW92ZUNhdGVnb3J5TGlzdCgpO1xuICAgICAgZm9sZENhdGVnb3J5QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9VbmZvbGQpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBhY3RpdmF0ZUFkZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZENhdGVnb3J5QnRuID0gZ2V0LmdldEFkZENhdGVnb3J5QnRuKCk7XG4gICAgYWRkQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvcGVuQ3JlYXRlTGlzdE1vZGFsKCk7XG4gICAgICBhdHRhY2hNb2RhbENsb3NlcihnZXQuZ2V0Q3JlYXRlTGlzdE1vZGFsKCkpO1xuICAgICAgYWN0aXZhdGVDcmVhdGVMaXN0Q2FuY2VsQnRuKCk7XG4gICAgICBhY3RpdmF0ZUNyZWF0ZUxpc3RDcmVhdGVCdG4oKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgY29uc3QgYWN0aXZhdGVDcmVhdGVMaXN0Q2FuY2VsQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGdldC5nZXRDcmVhdGVMaXN0Q2FuY2VsQnRuKCk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2xvc2VNb2RhbChnZXQuZ2V0Q3JlYXRlTGlzdE1vZGFsKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYWN0aXZhdGVDcmVhdGVMaXN0Q3JlYXRlQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGdldC5nZXRDcmVhdGVMaXN0Q3JlYXRlQnRuKCk7XG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSBnZXQuZ2V0Q3JlYXRlTGlzdFRpdGxlKCk7XG4gICAgICBpZiAodGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2RvTGlzdC5hZGROZXdDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIHJlbW92ZUNhdGVnb3J5TGlzdCgpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUxpc3RVbCA9IGxvYWRDYXRlZ29yaWVzKHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKSk7XG4gICAgICAgIGNvbnN0IG5hdkJhckNhdGVnb3J5ID0gZ2V0LmdldE5hdkJhckNhdGVnb3J5KCk7XG4gICAgICAgIG5hdkJhckNhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5TGlzdFVsKTtcbiAgICAgICAgXG4gICAgICAgIGNsb3NlTW9kYWwoZ2V0LmdldENyZWF0ZUxpc3RNb2RhbCgpKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2hvd0ZvbGRCdG4gPSAoKSA9PiB7ICAgIFxuICAgIGNvbnN0IHVuZm9sZEJ0biA9IGdldC5nZXRVbmZvbGRDYXRlZ29yeUJ0bigpO1xuICAgIHVuZm9sZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgZm9sZEJ0biA9IGdldC5nZXRGb2xkQ2F0ZWdvcnlCdG4oKTtcbiAgICBmb2xkQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICB9XG5cbiAgY29uc3Qgc2hvd1VuZm9sZEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkQnRuID0gZ2V0LmdldEZvbGRDYXRlZ29yeUJ0bigpO1xuICAgIGZvbGRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IHVuZm9sZEJ0biA9IGdldC5nZXRVbmZvbGRDYXRlZ29yeUJ0bigpO1xuICAgIHVuZm9sZEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgfVxuXG4gIGNvbnN0IHNob3dBZGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRDYXRlZ29yeUJ0biA9IGdldC5nZXRBZGRDYXRlZ29yeUJ0bigpO1xuICAgIGFkZENhdGVnb3J5QnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICB9XG5cbiAgY29uc3QgaGlkZUFkZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZENhdGVnb3J5QnRuID0gZ2V0LmdldEFkZENhdGVnb3J5QnRuKCk7XG4gICAgYWRkQ2F0ZWdvcnlCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnlMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdldC5nZXROYXZCYXJDYXRlZ29yeUxpc3QoKTtcbiAgICBjYXRlZ29yeUxpc3QucmVtb3ZlKCk7XG4gIH1cblxuICBcblxuICByZXR1cm4ge1xuICAgIGNsb3NlTW9kYWwsXG4gICAgYXR0YWNoTW9kYWxDbG9zZXIsXG4gICAgc3RhcnRMaXN0ZW5pbmdDbGlja0V2ZW50LFxuICAgIGFkZFRvZG8sXG4gICAgc2hvd1RvZG9EZXRhaWxzQ2FyZFZpZXcsXG4gICAgYWN0aXZhdGVDcmVhdGVUb2RvQnRuLFxuICAgIGFjdGl2YXRlVW5mb2xkQ2F0ZWdvcnlCdG4sXG4gICAgYWN0aXZhdGVBZGRDYXRlZ29yeUJ0bixcbiAgfVxufVxuXG5cblxuXG5cbmV4cG9ydCB7IERpc3BsYXkgfTtcblxuLy8gPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuLy8gPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi11cFwiPjwvaT4iLCJjb25zdCBHZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFRvZG9JbmZvQ2F0ZWdvcnlTZWxlY3RCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldE5hdkJhckNhdGVnb3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdkJhckNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jYXRlZ29yeScpO1xuICAgIHJldHVybiBuYXZCYXJDYXRlZ29yeTtcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9MaXN0Q2FyZFZpZXdNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXdNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4nKTtcbiAgICByZXR1cm4gdG9kb0xpc3RDYXJkVmlld01haW47XG4gIH1cblxuICBjb25zdCBnZXRDYXJkVmlld0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkVmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DYXJkVmlldy1Db250YWluZXInKTtcbiAgICByZXR1cm4gY2FyZFZpZXdDb250YWluZXI7XG4gIH1cbiAgXG4gIGNvbnN0IGdldEFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvLWJ1dHRvbnMnKTtcbiAgfVxuXG4gIGNvbnN0IGdldENvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlVG9kb0J0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvZG9CdG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlVG9kb01vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kby1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q3JlYXRlTGlzdE1vZGFsID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlTGlzdC1tb2RhbCcpO1xuICB9XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby10aXRsZSB0ZXh0YXJlYScpO1xuICAgIHJldHVybiB0aXRsZVRleHRhcmVhLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1kZXNjcmlwdGlvbiB0ZXh0YXJlYScpO1xuICAgIHJldHVybiBkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tY2F0ZWdvcnkgYnV0dG9uJyk7XG4gICAgcmV0dXJuIGNhdGVnb3J5QnRuLnRleHRDb250ZW50O1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb0Jhc2ljRGV0YWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICBnZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoKTtcbiAgICBcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IH07XG4gIH1cblxuICBjb25zdCBnZXRDaGVja01hcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja01hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGVjay1jaXJjbGUnKTtcbiAgICByZXR1cm4gY2hlY2tNYXJrZXI7XG4gIH1cblxuICBjb25zdCBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXNUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlJyk7XG4gIH1cblxuICBjb25zdCBnZXRVbmZvbGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZm9sZC1jYXRlZ29yeS1idG4nKTtcbiAgfVxuXG4gIGNvbnN0IGdldEZvbGRDYXRlZ29yeUJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbGQtY2F0ZWdvcnktYnRuJyk7XG4gIH1cblxuICBjb25zdCBnZXROYXZCYXJDYXRlZ29yeUhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jYXRlZ29yeS1oZWFkZXInKTtcbiAgfVxuXG4gIGNvbnN0IGdldEFkZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhdGVnb3J5LWJ0bicpO1xuICB9XG5cbiAgY29uc3QgZ2V0TmF2QmFyQ2F0ZWdvcnlMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWNhdGVnb3J5LWxpc3QnKTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RDcmVhdGVCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVMaXN0LWJ1dHRvbnMnKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RDYW5jZWxCdG4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVMaXN0LWJ1dHRvbnMnKVswXTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZUxpc3RUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRGaWVsZC10aXRsZScpLnZhbHVlO1xuICB9XG5cbiAgXG5cbiAgY29uc3QgcHVibGljQVBJID0ge1xuICAgIGdldENyZWF0ZUxpc3RUaXRsZSxcbiAgICBnZXRUb2RvSW5mb0NhdGVnb3J5U2VsZWN0QnRuLFxuICAgIGdldE5hdkJhckNhdGVnb3J5LFxuICAgIGdldE5hdkJhckNhdGVnb3J5SGVhZGVyLFxuICAgIGdldE5hdkJhckNhdGVnb3J5TGlzdCxcbiAgICBnZXRUb2RvTGlzdENhcmRWaWV3TWFpbixcbiAgICBnZXRDcmVhdGVMaXN0Q2FuY2VsQnRuLFxuICAgIGdldENyZWF0ZUxpc3RDcmVhdGVCdG4sXG4gICAgZ2V0Q2FyZFZpZXdDb250YWluZXIsXG4gICAgZ2V0QWRkVG9kb0J0bixcbiAgICBnZXRDb250YWluZXIsXG4gICAgZ2V0Q3JlYXRlVG9kb0J0bixcbiAgICBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLFxuICAgIGdldENyZWF0ZVRvZG9Nb2RhbCxcbiAgICBnZXRDcmVhdGVMaXN0TW9kYWwsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0Q2F0ZWdvcnksXG4gICAgZ2V0VG9kb0Jhc2ljRGV0YWlsLFxuICAgIGdldENoZWNrTWFya2VyLFxuICAgIGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlLFxuICAgIGdldFVuZm9sZENhdGVnb3J5QnRuLFxuICAgIGdldEZvbGRDYXRlZ29yeUJ0bixcbiAgICBnZXRBZGRDYXRlZ29yeUJ0blxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwdWJsaWNBUElcbiAgfVxufVxuXG5leHBvcnQgeyBHZXQgfTtcbiIsImNvbnN0IGxvYWRDYXRlZ29yaWVzID0gKGNhdGVnb3JpZXMpID0+IHtcbiAgY29uc3QgbmF2QmFyQ2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2QmFyQ2F0ZWdvcnlMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci1jYXRlZ29yeS1saXN0Jyk7XG5cbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaXRlbXMnKTtcbiAgICBsaS5pbm5lclRleHQgPSBjYXRlZ29yeTtcblxuICAgIG5hdkJhckNhdGVnb3J5TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG5cbiAgcmV0dXJuIG5hdkJhckNhdGVnb3J5TGlzdDtcbn1cblxuZXhwb3J0IHsgbG9hZENhdGVnb3JpZXMgfTsiLCJpbXBvcnQgJy4uLy4uL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcyc7XG5jb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcycpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcy5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXNUaXRsZSk7XG5cbiAgcmV0dXJuIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcztcbn1cblxuY29uc3QgbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSAoY2F0ZWdvcmllcykgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCcpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRlbnQnKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaGVhZGVyJyk7XG4gIFxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZS5pbm5lclRleHQgPSAnTW92ZSB0by4uLic7XG4gIFxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluJylcblxuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxIZWFkZXIpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZSk7XG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbik7XG4gXG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlJdGVtID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKGNhdGVnb3J5KTtcblxuXG4gICAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJdGVtKTtcbiAgfSk7XG4gIC8vIGNvbnN0IHRvcCA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnVGhlIE9kaW4gUHJvamVjdCcpO1xuICAvLyBjb25zdCBneW0gPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoJ2d5bScpO1xuICAvLyBjb25zdCB3b3JrID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKCd3b3JrJyk7XG4gIC8vIGNvbnN0IHNjaG9vbCA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnc2Nob29sJyk7XG4gIC8vIGNvbnN0IGxpZmUgPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoJ2xpZmUnKTtcbiAgLy8gY29uc3Qgaml1aml0c3UgPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoJ2ppdWppdHN1Jyk7XG4gIFxuICAvLyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZCh0b3ApO1xuICAvLyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChneW0pO1xuICAvLyBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZCh3b3JrKTtcbiAgLy8gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQoc2Nob29sKTtcbiAgLy8gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQobGlmZSk7XG4gIC8vIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKGppdWppdHN1KTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsKTtcbiAgXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHsgbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwgfTtcblxuLy8gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgPSBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsKCk7XG4vLyBib2R5LmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NyZWF0ZUxpc3RNb2RhbC5jc3MnO1xuXG5jb25zdCBsb2FkQ3JlYXRlTGlzdE1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LW1vZGFsJyk7XG4gIGNyZWF0ZUxpc3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgLy8gY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lclxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWxDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbExhYmVsVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyJyk7XG4gIFxuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSAnTkFNRSBUSElTIExJU1QnO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC10ZXh0RmllbGQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICd0ZXh0RmllbGQtdGl0bGUnKTtcbiAgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG5cbiAgLy8gY3JlYXRlTGlzdC1tb2RhbC1idXR0b24tY29udGFpbmVyXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LWJ1dHRvbnMnKTtcbiAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4nLCAnY2FuY2VsJyk7XG4gIGNhbmNlbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtYnV0dG9ucycpO1xuICBjcmVhdGUuc2V0QXR0cmlidXRlKCdkYXRhLWJ0bicsICdjcmVhdGUnKTtcbiAgY3JlYXRlLmlubmVyVGV4dCA9ICdDcmVhdGUnO1xuXG4gIC8vIFN0cnVjdHVyaW5nXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbCk7XG5cbiAgY3JlYXRlTGlzdE1vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXIpO1xuICBjcmVhdGVMaXN0TW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyKTtcblxuICAvLyBDcmVhdGVMaXN0TW9kYWxDb250ZW50Q29udGFpbmVyXG4gIGNyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsTGFiZWxUZXh0Q29udGFpbmVyKTtcbiAgY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGRDb250YWluZXIpO1xuICBcbiAgY3JlYXRlTGlzdE1vZGFsTGFiZWxUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGQpO1xuXG4gIC8vIGNyZWF0ZUxpc3RNb2RhbEJ1dHRvbkNvbnRhaW5lclxuICBjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZSk7XG5cbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBsb2FkQ3JlYXRlTGlzdE1vZGFsIH07XG5cbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4vLyBjb25zdCBjcmVhdGVMaXN0TW9kYWwgPSBnZXRDcmVhdGVMaXN0TW9kYWwoKTtcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsKTtcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3MnO1xuXG5jb25zdCBsb2FkVG9kb2luZm9Db250YWluZXJUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9ICdUSVRMRSc7XG5cbiAgY29uc3QgdG9kb2luZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLXRpdGxlJyk7XG5cbiAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRpdGxlVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC10aXRsZScpXG4gIHRpdGxlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgdGl0bGVUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0kgd2FudCB0by4uLicpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyVGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJUaXRsZS5hcHBlbmRDaGlsZCh0b2RvaW5mb1RpdGxlKTtcbiAgdG9kb2luZm9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHRhcmVhKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJUaXRsZTtcbn1cblxuY29uc3QgbG9hZFRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jb250YWluZXItZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSAnREVTQ1JJUFRJT04nO1xuXG4gIGNvbnN0IHRvZG9pbmZvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICd0ZXh0RmllbGQtZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0luc2VydCB5b3VyIG5vdGVzIGhlcmUnKTtcblxuICB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodG9kb2luZm9EZXNjcmlwdGlvbik7XG4gIHRvZG9pbmZvRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG5cbiAgcmV0dXJuIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb247XG59XG5cbmNvbnN0IGxvYWRUb2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jb250YWluZXItY2F0ZWdvcnknKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSAnQ0FURUdPUlknO1xuXG4gIGNvbnN0IHRvZG9pbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9DYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jYXRlZ29yeScpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNhdGVnb3J5LXNlbGVjdEJ0bicpO1xuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgc29tZXRpbWVzXG4gIGNhdGVnb3J5U2VsZWN0aW9uQnRuLmlubmVyVGV4dCA9IGNhdGVnb3J5O1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvaW5mb0NhdGVnb3J5KTtcbiAgdG9kb2luZm9DYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbkJ0bik7XG5cbiAgcmV0dXJuIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnk7XG59XG5cbmNvbnN0IGxvYWRUb2RvSW5mb0NvbnRhaW5lciA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCB0b2RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyVGl0bGUgPSBsb2FkVG9kb2luZm9Db250YWluZXJUaXRsZSgpO1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uID0gbG9hZFRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24oKTtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeSA9IGxvYWRUb2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5KGNhdGVnb3J5KTtcblxuICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvaW5mb0NvbnRhaW5lclRpdGxlKTtcbiAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbik7XG4gIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkpO1xuXG4gIHJldHVybiB0b2RvSW5mb0NvbnRhaW5lcjtcbn1cblxuY29uc3QgbG9hZEFkZFRvZG9CdG5Db250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9CdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVG9kb0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsLWFkZFRvZG9CdG4tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgY3JlYXRlVG9kb0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY3JlYXRlVG9kb0J0bnMuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVG9kby1idXR0b25zJyk7XG4gIGNyZWF0ZVRvZG9CdG5zLmlubmVyVGV4dCA9IFwiQWRkIFRvZG9cIjtcblxuICBhZGRUb2RvQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG5zKTtcblxuICByZXR1cm4gYWRkVG9kb0J0bkNvbnRhaW5lcjtcbn1cblxuLy8gUmV0dXJuIGNyZWF0ZVRvZG9Nb2RhbCBDb250ZW50c1xuY29uc3QgbG9hZENyZWF0ZVRvZG9Nb2RhbCA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgY3JlYXRlVG9kb01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsJyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgdG9kb0luZm9Db250YWluZXIgPSBsb2FkVG9kb0luZm9Db250YWluZXIoY2F0ZWdvcnkpO1xuICBjb25zdCBhZGRUb2RvQnRuQ29udGFpbmVyID0gbG9hZEFkZFRvZG9CdG5Db250YWluZXIoKTtcbiAgXG4gIGNyZWF0ZVRvZG9Nb2RhbC5hcHBlbmRDaGlsZCh0b2RvSW5mb0NvbnRhaW5lcik7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5hcHBlbmRDaGlsZChhZGRUb2RvQnRuQ29udGFpbmVyKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVUb2RvTW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHsgbG9hZENyZWF0ZVRvZG9Nb2RhbCB9O1xuXG5cbiIsImV4cG9ydCB7IGxvYWRUb2RvSXRlbSB9IGZyb20gJy4vbG9hZFRvZG9JdGVtLmpzJztcbmV4cG9ydCB7IGxvYWRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsIH0gZnJvbSAnLi9sb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5qcyc7XG5leHBvcnQgeyBsb2FkQ3JlYXRlTGlzdE1vZGFsIH0gZnJvbSAnLi9sb2FkQ3JlYXRlTGlzdE1vZGFsLmpzJztcbmV4cG9ydCB7IGxvYWRDcmVhdGVUb2RvTW9kYWwgfSBmcm9tICcuL2xvYWRDcmVhdGVUb2RvTW9kYWwuanMnO1xuZXhwb3J0IHsgbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcgfSBmcm9tICcuL2xvYWRUb2RvRGV0YWlsc0NhcmRWaWV3LmpzJztcbmV4cG9ydCB7IGxvYWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9sb2FkQ2F0ZWdvcmllcy5qcyc7XG5cblxuXG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcyc7XG5cbi8vIFVuaXZlcnNhbCBGdW5jdGlvbnNcbmNvbnN0IGxvYWRMYWJlbFRleHQgPSAobGFiZWwpID0+IHtcbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gbGFiZWw7XG5cbiAgcmV0dXJuIGxhYmVsVGV4dDtcbn1cblxuY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cikgPT4ge1xuICBjb25zdCBjYXBpdGFsaXplZCA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuICByZXR1cm4gY2FwaXRhbGl6ZWQ7XG59XG5cbmNvbnN0IGxvYWRQcmlvcml0eUJ0biA9IChpbXBvcnRhbmNlKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGlkID0gYHByaW9yaXR5LSR7aW1wb3J0YW5jZX0tYnRuYDtcbiAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgLy8gaW5uZXJ0ZXh0IG9mIGJ0biBoYXMgJ0ltcG9ydGFuY2UnLCBub3QgJ2ltcG1vcnRhbmNlJ1xuICBwcmlvcml0eUJ0bi5pbm5lclRleHQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoaW1wb3J0YW5jZSk7XG5cbiAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktdGFnJywgJ3ByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkJyk7XG5cbiAgcmV0dXJuIHByaW9yaXR5QnRuO1xufVxuXG5jb25zdCBsb2FkVGl0bGVSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlUm93LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4tdGl0bGVSb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG4gIFxuICBjb25zdCBsYWJlbFRleHQgPSBsb2FkTGFiZWxUZXh0KCdUSVRMRScpO1xuICBcbiAgY29uc3QgdGl0bGVUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRpdGxlVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ1RvZG9FZGl0LXRpdGxlLXRleHRmaWVsZCcpO1xuICB0aXRsZVRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG5cblxuICB0aXRsZVJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0aXRsZVJvdy5hcHBlbmRDaGlsZCh0aXRsZVRleHRBcmVhKTtcblxuICByZXR1cm4gdGl0bGVSb3c7XG59XG5cbmNvbnN0IGxvYWRUYWdSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IHRhZ1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWdSb3cuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbi10YWdSb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbG9hZExhYmVsVGV4dCgnVEFHUycpO1xuICBjb25zdCB0YWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhZ3MuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtVGFncycpO1xuICBcbiAgdGFnUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHRhZ1Jvdy5hcHBlbmRDaGlsZCh0YWdzKTtcblxuICB0YWdzLmFwcGVuZENoaWxkKGxvYWRQcmlvcml0eUJ0bignaW1wb3J0YW50JykpO1xuICB0YWdzLmFwcGVuZENoaWxkKGxvYWRQcmlvcml0eUJ0bignaGlnaCcpKTtcbiAgdGFncy5hcHBlbmRDaGlsZChsb2FkUHJpb3JpdHlCdG4oJ21pZGRsZScpKTtcbiAgdGFncy5hcHBlbmRDaGlsZChsb2FkUHJpb3JpdHlCdG4oJ2xvdycpKTtcblxuICByZXR1cm4gdGFnUm93O1xufVxuXG5jb25zdCBsb2FkRHVlRGF0ZVJvdyA9ICgpID0+IHtcbiAgY29uc3QgZHVlRGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlUm93LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4tRHVlRGF0ZVJvdycsICdUb2RvRWRpdC1wYWRkZXInKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBsb2FkTGFiZWxUZXh0KCdEVUUgREFURScpO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlSW5wdXRCb3guY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtRHVlRGF0ZUJveCcpO1xuXG4gIC8vIFNob3VsZCBiZSBpdHMgb3duIG1vZHVsZSBsYXRlclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnVG9kb0VkaXQtRHVlRGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ0R1ZURhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMjAyMC0xMS0wMycpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMjAyMC0xMS0wMycpO1xuXG4gIC8vIEFwcGVuZGluZyBDaGlsZFxuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0Qm94KTtcbiAgXG4gIGR1ZURhdGVJbnB1dEJveC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gIHJldHVybiBkdWVEYXRlUm93O1xufVxuXG5jb25zdCBsb2FkRGVzY3JpcHRpb25Sb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uUm93LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4tRGVzY3JpcHRpb25Sb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbG9hZExhYmVsVGV4dCgnREVTQ1JJUFRJT04nKTtcblxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzcnKTtcblxuICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBkZXNjcmlwdGlvblJvdy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhKTtcblxuICByZXR1cm4gZGVzY3JpcHRpb25Sb3c7XG59XG5cbmNvbnN0IGxvYWRDcmVhdGVkRGF0ZVJvdyA9IChkYXRlKSA9PiB7XG4gIC8vIE1heWJlIEkgY2FuIGltcG9ydCBzb21lIGxpYnJhcnkgdG8gZ2V0IHRvZGF5J3MgZGF0ZVxuXG4gIGNvbnN0IGNyZWF0ZWREYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZWREYXRlUm93LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4tQ3JlYXRlZERhdGVSb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbG9hZExhYmVsVGV4dCgnQ1JFQVRFRCBEQVRFJyk7XG5cbiAgY29uc3QgY3JlYXRlZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlZERhdGUuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtQ3JlYXRlZERhdGUnKTtcbiAgLy8gRFlOQU1JQyBEQVRFIE5FRURFRFxuICBjcmVhdGVkRGF0ZS5pbm5lclRleHQgPSAnMjAyMC4xMS4wMyc7XG5cbiAgY3JlYXRlZERhdGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgY3JlYXRlZERhdGVSb3cuYXBwZW5kQ2hpbGQoY3JlYXRlZERhdGUpO1xuXG4gIHJldHVybiBjcmVhdGVkRGF0ZVJvdztcbn1cblxuY29uc3QgbG9hZFRvZG9FZGl0SGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRWRpdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRWRpdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1oZWFkZXInKTtcbiAgdG9kb0VkaXRIZWFkZXIuaW5uZXJUZXh0ID0gXCJUT0RPIERFVEFJTFNcIjtcblxuICByZXR1cm4gdG9kb0VkaXRIZWFkZXI7XG59XG5cbmNvbnN0IGxvYWRUb2RvRWRpdE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9FZGl0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRWRpdE1haW4uY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtbWFpbicpO1xuXG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChsb2FkVGl0bGVSb3coKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChsb2FkVGFnUm93KCkpO1xuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobG9hZER1ZURhdGVSb3coKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChsb2FkRGVzY3JpcHRpb25Sb3coKSk7XG4gIHRvZG9FZGl0TWFpbi5hcHBlbmRDaGlsZChsb2FkQ3JlYXRlZERhdGVSb3coKSk7XG5cbiAgcmV0dXJuIHRvZG9FZGl0TWFpbjtcbn1cblxuY29uc3QgbG9hZFRvZG9FZGl0UGFuZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0VkaXRQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9FZGl0UGFuZS5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1QYW5lJyk7XG5cbiAgdG9kb0VkaXRQYW5lLmFwcGVuZENoaWxkKGxvYWRUb2RvRWRpdEhlYWRlcigpKTtcbiAgdG9kb0VkaXRQYW5lLmFwcGVuZENoaWxkKGxvYWRUb2RvRWRpdE1haW4oKSk7XG5cbiAgcmV0dXJuIHRvZG9FZGl0UGFuZTtcbn1cblxuLy8gU2hvdWxkIGV4cG9ydCBvbmx5IG9uZSBiaWcgZnVuY3Rpb25cbmNvbnN0IGxvYWRUb2RvRGV0YWlsc0NhcmRWaWV3ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRGV0YWlsc0NhcmRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EZXRhaWxzQ2FyZFZpZXcuY2xhc3NMaXN0LmFkZCgnVG9kb0RldGFpbHMtQ2FyZFZpZXcnKTtcblxuICBjb25zdCB0b2RvRWRpdFBhbmUgPSBsb2FkVG9kb0VkaXRQYW5lKCk7XG4gIHRvZG9EZXRhaWxzQ2FyZFZpZXcuYXBwZW5kQ2hpbGQodG9kb0VkaXRQYW5lKTtcblxuICByZXR1cm4gdG9kb0RldGFpbHNDYXJkVmlldztcbn1cblxuZXhwb3J0IHsgbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcgfTtcblxuXG5cblxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvdG9kb0xpc3RDYXJkVmlldy5jc3MnO1xuXG5jb25zdCBsb2FkVG9kb0l0ZW0gPSAodGl0bGUpID0+IHtcbiAgLy8gV2UgbmVlZCB0byBpbnNlcnQgdGhlIHJvdywgdG9kb2l0ZW0gaXMgaW4gdGhlIHJvd1xuICBjb25zdCB0b2RvTGlzdE1haW5Sb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9MaXN0TWFpblJvd3MuY2xhc3NMaXN0LmFkZCgnVG9kb0xpc3QtbWFpbi1yb3dzJylcblxuICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbScpO1xuXG4gIGNvbnN0IHRvZG9JdGVtQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW1DaGVja0JveC5jbGFzc0xpc3QuYWRkKCdUb2RvSXRlbS1jaGVja0JveCcpO1xuXG4gIGNvbnN0IGVtcHR5Q2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBlbXB0eUNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2lyY2xlJyk7XG5cbiAgLy8gY29uc3QgY2hlY2tlZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vIGNoZWNrZWRNYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1jaGVjay1jaXJjbGUnKTtcblxuICBjb25zdCB0b2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnVG9kb0l0ZW0tdGl0bGUnKTtcbiAgdG9kb0l0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcblxuICAvLyBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtYmFja3NwYWNlJywgJ1RvZG9JdGVtLWRlbGV0ZS1idG4nKTtcblxuICB0b2RvTGlzdE1haW5Sb3dzLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW1DaGVja0JveCk7XG4gIHRvZG9JdGVtQ2hlY2tCb3guYXBwZW5kQ2hpbGQoZW1wdHlDaGVja01hcmspO1xuICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvSXRlbVRpdGxlKTtcblxuICByZXR1cm4gdG9kb0xpc3RNYWluUm93cztcbn1cblxuZXhwb3J0IHsgbG9hZFRvZG9JdGVtIH07XG5cbi8vIGNvbnN0IGNhcmRWaWV3TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvTGlzdC1DYXJkVmlldy1tYWluJyk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG4vLyBjYXJkVmlld01haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW0oJ3dvcmtvdXQnKSk7XG5cblxuXG4iLCJjb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgbGV0IF9kdWVEYXRlID0gJyc7XG4gIGxldCBfY3JlYXRlZERhdGUgPSAnJztcbiAgbGV0IF9wcmlvcml0eSA9ICcnO1xuICBsZXQgX2NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBTRVRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IHNldFRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gIH1cbiAgXG4gIGNvbnN0IHNldENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgX2NhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBjb25zdCBzZXREdWVEYXRlID0gKGR1ZURhdGUpID0+IHtcbiAgICBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBjb25zdCBzZXRDcmVhdGVkRGF0ZSA9IChjcmVhdGVkRGF0ZSkgPT4ge1xuICAgIF9jcmVhdGVkRGF0ZSA9IGNyZWF0ZWREYXRlO1xuICB9XG5cbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEdFVFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF90aXRsZTtcbiAgfVxuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gIH1cbiAgXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBfY2F0ZWdvcnk7XG4gIH1cblxuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBfZHVlRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldENyZWF0ZWREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBfY3JlYXRlZERhdGU7XG4gIH1cblxuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gX3ByaW9yaXR5O1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGlzKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBpc0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NvbXBsZXRlZDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb21wbGV0ZWRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IG1hcmtDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgX2NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCB1bmRvQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIF9jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfSBcblxuICBcbiAgcmV0dXJuIHtcbiAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldENhdGVnb3J5LCBzZXREdWVEYXRlLCBzZXRDcmVhdGVkRGF0ZSwgc2V0UHJpb3JpdHksXG4gICAgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgZ2V0Q3JlYXRlZERhdGUsIGdldFByaW9yaXR5LCBnZXREdWVEYXRlLFxuICAgIGlzQ29tcGxldGVkLCBtYXJrQ29tcGxldGVkLCB1bmRvQ29tcGxldGVkXG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kbyB9OyBcblxuXG5cbiIsImNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IF90b2RvcyA9IHtcbiAgICBkZWZhdWx0OiBbXSxcbiAgfTtcblxuICAvLyBBZGQgVG9kb1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBsZXQgY2F0ZWdvcnkgPSB0b2RvLmdldENhdGVnb3J5KCk7XG4gICAgXG4gICAgLy8gLy8gaWYgY2F0ZWdvcnkgZG9lc24ndCBleGlzdCwgYWRkIG9uZVxuICAgIC8vIGlmICghKGNhdGVnb3J5IGluIF90b2RvcykpIHtcbiAgICAvLyAgIGFkZE5ld0NhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAvLyB9IFxuICAgIFxuICAgIF90b2Rvc1tjYXRlZ29yeV0ucHVzaCh0b2RvKTtcbiAgfVxuXG4gIGNvbnN0IGFkZE5ld0NhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgX3RvZG9zW2NhdGVnb3J5XSA9IFtdO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvVG9GaW5kKSA9PiB7XG4gICAgLy8gSXRlcmF0ZSBldmVyeSB0b2RvcyBpbiBfdG9kb3MsIGlmIGZvdW5kLCByZW1vdmUgaXQuXG4gICAgZm9yIChjb25zdCBbY2F0ZWdvcnksIHRvZG9zXSBvZiBPYmplY3QuZW50cmllcyhfdG9kb3MpKSB7XG4gICAgICBjb25zdCB0b2Rvc0xlbmd0aCA9IHRvZG9zLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRvZG8gPSB0b2Rvc1tpXTtcbiAgICAgICAgY29uc3Qgc2FtZU9iamVjdHMgPSBPYmplY3QuaXModG9kb1RvRmluZCwgY3VycmVudFRvZG8pO1xuICAgICAgICBpZiAoc2FtZU9iamVjdHMpIHtcbiAgICAgICAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICAgIH0gIFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIGRlbGV0ZSBfdG9kb3NbY2F0ZWdvcnldO1xuICB9XG5cbiAgY29uc3QgZ2V0QWxsVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVG9kb3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtjYXRlZ29yeSwgdG9kb3NdIG9mIE9iamVjdC5lbnRyaWVzKF90b2RvcykpIHtcbiAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGFsbFRvZG9zLnB1c2godG9kbyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBhbGxUb2RvcztcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9zID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgcmV0dXJuIF90b2Rvc1tjYXRlZ29yeV07XG4gIH1cblxuICBjb25zdCBnZXRBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhfdG9kb3MpO1xuICAgIHJldHVybiBjYXRlZ29yaWVzO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zRHVlRGF0ZSA9ICh0b2RvcykgPT4ge1xuICAgIHRvZG9zLnNvcnQoKHRvZG9PbmUsIHRvZG9Ud28pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9PbmVEdWVEYXRlID0gdG9kb09uZS5nZXREdWVEYXRlKCk7XG4gICAgICBjb25zdCB0b2RvVHdvRHVlRGF0ZSA9IHRvZG9Ud28uZ2V0RHVlRGF0ZSgpO1xuICAgICAgXG4gICAgICByZXR1cm4gTnVtYmVyKHRvZG9PbmVEdWVEYXRlKSAtIE51bWJlcih0b2RvVHdvRHVlRGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFRISVMgTkVFRFMgVE8gQkUgRklYRUQuIFxuICAgKiBJVCdTIFdPUktJTkcuIEJVVCBWRVJZIElORUZGSUNJRU5UIENPREVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICBjb25zdCBzb3J0VG9kb3NQcmlvcml0eSA9ICh0b2RvcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IElNUE9SVEFOVCA9IDE7XG4gICAgY29uc3QgSElHSCA9IDI7XG4gICAgY29uc3QgTUlERExFID0gMztcbiAgICBjb25zdCBMT1cgPSA0O1xuXG4gICAgdG9kb3Muc29ydCgodG9kb09uZSwgdG9kb1R3bykgPT4ge1xuICAgICAgbGV0IHRvZG9PbmVQcmlvcml0eSA9IHRvZG9PbmUuZ2V0UHJpb3JpdHkoKTtcbiAgICAgIGxldCB0b2RvVHdvUHJpb3JpdHkgPSB0b2RvVHdvLmdldFByaW9yaXR5KCk7XG4gICAgICBcbiAgICAgIHN3aXRjaCAodG9kb09uZVByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcbiAgICAgICAgICB0b2RvT25lUHJpb3JpdHkgPSBJTVBPUlRBTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgdG9kb09uZVByaW9yaXR5ID0gSElHSDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAgIHRvZG9PbmVQcmlvcml0eSA9IE1JRERMRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgIHRvZG9PbmVQcmlvcml0eSA9IExPVztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0b2RvVHdvUHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSBcImltcG9ydGFudFwiOlxuICAgICAgICAgIHRvZG9Ud29Qcmlvcml0eSA9IElNUE9SVEFOVDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICB0b2RvVHdvUHJpb3JpdHkgPSBISUdIO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICAgICAgdG9kb1R3b1ByaW9yaXR5ID0gTUlERExFO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgdG9kb1R3b1ByaW9yaXR5ID0gTE9XO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgICBcbiAgICAgIHJldHVybiB0b2RvT25lUHJpb3JpdHkgLSB0b2RvVHdvUHJpb3JpdHk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzb3J0VG9kb3NDcmVhdGVkRGF0ZSA9ICh0b2RvcykgPT4ge1xuICAgIHRvZG9zLnNvcnQoKHRvZG9PbmUsIHRvZG9Ud28pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9PbmVDcmVhdGVkRGF0ZSA9IHRvZG9PbmUuZ2V0Q3JlYXRlZERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZG9Ud29DcmVhdGVkRGF0ZSA9IHRvZG9Ud28uZ2V0Q3JlYXRlZERhdGUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIE51bWJlcih0b2RvT25lQ3JlYXRlZERhdGUpIC0gTnVtYmVyKHRvZG9Ud29DcmVhdGVkRGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgX3RvZG9zLFxuICAgIGFkZFRvZG8sIGFkZE5ld0NhdGVnb3J5LCBkZWxldGVUb2RvLCBkZWxldGVDYXRlZ29yeSxcbiAgICBnZXRUb2RvcywgZ2V0QWxsVG9kb3MsIGdldEFsbENhdGVnb3JpZXMsXG4gICAgc29ydFRvZG9zRHVlRGF0ZSwgc29ydFRvZG9zQ3JlYXRlZERhdGUsIHNvcnRUb2Rvc1ByaW9yaXR5XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kb0xpc3QgfTtcbiIsImltcG9ydCAnLi9jc3MvbGFuZGluZ1BhZ2UuY3NzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8vVG9kby5qcyc7XG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4vVG9kb0xpc3QvVG9kb0xpc3QuanMnO1xuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheS9kaXNwbGF5LmpzJ1xuaW1wb3J0IHsgbG9hZENhdGVnb3JpZXMgfSBmcm9tICcuL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkQ2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2Uvc3RvcmFnZUF2YWlsYWJsZSc7XG5cblxuY29uc3QgZGlzcGxheSA9IERpc3BsYXkoKTtcbmNvbnN0IHRvZG9MaXN0ID0gVG9kb0xpc3QoKTtcblxuXG4vLyB0b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnVGhlIE9kaW4gUHJvamVjdCcpO1xuLy8gdG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkoJ1dvcmsnKTtcbi8vIHRvZG9MaXN0LmFkZE5ld0NhdGVnb3J5KCdMaWZlJyk7XG4vLyB0b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnU2Nob29sJyk7XG4vLyB0b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnR3ltJyk7XG5cbi8vIGNvbnNvbGUubG9nKHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKSk7XG5cblxuZGlzcGxheS5hY3RpdmF0ZUNyZWF0ZVRvZG9CdG4oKTtcbmRpc3BsYXkuYWN0aXZhdGVVbmZvbGRDYXRlZ29yeUJ0bigpO1xuZGlzcGxheS5hY3RpdmF0ZUFkZENhdGVnb3J5QnRuKCk7XG5kaXNwbGF5LnNob3dUb2RvRGV0YWlsc0NhcmRWaWV3KCk7XG5cblxuZGlzcGxheS5hZGRUb2RvKCdUaGUgT2RpbiBQcm9qZWN0Jyk7XG5kaXNwbGF5LmFkZFRvZG8oJ1RvZG9MaXN0Jyk7XG5kaXNwbGF5LmFkZFRvZG8oJ2lzSGFyZC4uLi4nKTtcbmRpc3BsYXkuYWRkVG9kbygnQnV0IGNvbnNpc3RlbmN5IG92ZXIgZWZmaWNpZW5jeScpO1xuZGlzcGxheS5hZGRUb2RvKCdNYWtlcyBhbGwgZGlmZmVyZW5jZSBzbyBJIHNoYWxsIHByb2NlZWQnKTtcblxuXG5cblxuXG5cblxuXG4vLyBkaXNwbGF5LnN0YXJ0TGlzdGVuaW5nQ2xpY2tFdmVudFxuXG5cbiAgXG5cblxuXG5cblxuXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9