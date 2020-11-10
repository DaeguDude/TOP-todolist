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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n", "",{"version":3,"sources":["webpack://src/css/landingPage.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n}\n\n:root {\n  --action-color: #0080ff;\n  --action-button-text-color: #fff;\n  --color-text-1: #e4e4e4;\n  --color-text-2: #d8d8d8;\n  --color-text-3: #888888;\n  --modal-border-radius: 8px;\n  --todo-item-border-radius: var(--modal-border-radius);\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semi-bold: 600;\n  --font-weight-bold: 700;\n  --label-font-size: 12px;\n  --label-font-weight: var(--font-weight-medium);\n  --label-font-color: #828292;\n  --label-bottom-padding: 4px;\n  --default-font-size: 16px;\n  --extra-small-font-size: 10px;\n  --card-bg-1-color: #161616;\n  --card-item-bg-color: #161616;\n  --card-item-bg-highlighted-color: #252525;\n  --card-above-font-color: #d8d8d8;\n  --card-above-bg-color: #252525;\n  --card-above-bg-color-highlighted: #424242;\n  --button-separation-border-color: #7f7f7f;\n  --textField-title-font-size: 28px;\n  --textField-description-font-size: 15px;\n  --textField-border: 8px;\n  --textField-bg-focus-color: #000;\n  /* createTodoModal */\n  --gutter: 16px;\n\n  /* categorySelectionModal */\n  --border-bottom-color: #cccccc;\n  --card-item-font-color: #d8d8d8;\n  --card-item-font-size: 14px;\n  --confirm-color: #23ce88;\n\n  /* TodoList-CardView */\n  --todo-item-bg-color: #252525;\n  --todo-item-bg-highlighted-color: #424242;\n  --todo-item-text-checked-color: #8e8e92;\n  --todo-item-header-text-color: #e4e4e4;\n  --todo-item-header-font-size: 20px;\n  --card-bg-1-color: #161616;\n\n  /* TodoDetails-CardView */\n  --CardPadder-right: 24px;\n  --CardPadder-left: 24px;\n  --CardPadder-top: 8px;\n  --CardPadder-bottom: 8px;\n  --todo-edit-header-text-color: #e4e4e4;\n  --todo-edit-textfield-title-font-size: 24px;\n  --font-size-base: 15px;\n\n  /* Landing Page */\n  --navbar-category-text-color: #8e8e92;\n  --category-item-bg-highlighted-color: #252525;\n  --navbar-left-right-padding: 20px;\n}\n\n/* UTILITY TAGS */\n\nbutton {\n  cursor: pointer;\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: none;\n  border: none;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  color: inherit; \n  text-decoration: none;\n}\n\n/* UTILITY CLASSES */\n\n.Label__Text {\n  font-size: var(--label-font-size);\n  font-weight: var(--label-font-weight);\n  color: var(--label-font-color);\n  padding-bottom: var(--label-bottom-padding);\n}\n\n.textField {\n  background-color: transparent;\n  width: 90%;\n  color: var(--color-text-1);\n  border-radius: var(--textField-border);\n}\n\n.textField:focus,\n.textField:hover {\n  outline: none;\n  border-color: var(--textField-bg-focus-color);\n  background-color: var(--textField-bg-focus-color);\n  caret-color: var(--action-color);\n}\n\n.textField-title {\n  font-size: var(--textField-title-font-size);\n}\n\n.textField-description {\n  font-size: var(--textField-description-font-size);\n}\n\n/* LANDING PAGE */\n\n.container {\n  height: 100vh;\n  display: flex;\n}\n\n.navbar {\n  \n  background-color: var(--card-bg-1-color);\n  width: 280px;\n  display: flex;\n  flex-direction: column;  \n}\n\n.navbar-header {\n  height: 150px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: var(--navbar-left-right-padding);\n  padding-bottom: 0;\n}\n\n.personal-detail-container {\n  display: flex;\n  flex-direction: column;\n  color: var(--color-text-1);\n  height: 40px;\n}\n\n.personal-detail-name {\n  display: flex;\n  align-items: center;\n\n  font-size: var(--default-font-size);\n  font-weight: var(--font-weight-bold);\n}\n\n.personal-social-medias {\n  display: flex;\n}\n\n.social-media-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.social-media-icon:hover {\n  color: var(--action-color);\n}\n\n.createTodoBtn-container {\n  height: 96px;\n\n  display: flex;\n  align-items: center;\n}\n\n#createTodoBtn {\n  height: 40px;\n  width: 224px;\n  border-radius: 50px;\n  background-color: var(--action-color);\n  color: var(--action-button-text-color);\n  \n}\n\n#createTodoBtn:active {\n  transform: scale(0.95);\n}\n\n/* NAVBAR MAIN */\n.navbar-main {\n}\n.navbar-category {\n  display: flex;\n  flex-direction: column;\n}\n\n.navbar-category-header {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  color: var(--color-text-1);\n  font-weight: var(--font-weight-bold);\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.navbar-category-header span {\n  margin-right: 10px;\n}\n\n\n.navbar-category-list {\n  color: var(--navbar-category-text-color);\n  /* Random Height */\n  max-height: 500px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n\n}\n\n.category-items {\n  min-height: 44px;\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--navbar-left-right-padding);\n}\n\n.category-items:hover {\n  background-color: var(--category-item-bg-highlighted-color);\n}\n\n/* MAIN START */\n\n.main {\n  flex: 1 0 0;\n  /* background: url('../src/img/background.jpg'); */\n  background-size: 100% 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-blend-mode: overlay;\n\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container {\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n}\n\n.CardView-Container .TodoDetails-CardView {\n  margin-left: 20px;\n} \n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoList/TodoList.js */ "./src/TodoList/TodoList.js");






const todoList = (0,_TodoList_TodoList_js__WEBPACK_IMPORTED_MODULE_1__.TodoList)();



const Display = () => {
  const getTodoInfoCategorySelectBtn = () => {
    return document.querySelector('.todoinfo-category-selectBtn');
  }

  const isEmpty = (str) => {
    if (str.length === 0) {
      return true;
    }
    
    return false;
  }
  const getTodoTitle = () => {
    const titleTextarea = document.querySelector('.todoinfo-title textarea');
    return titleTextarea.value;
  }

  const getNavBarCategory = () => {
    const navBarCategory = document.querySelector('.navbar-category');
    return navBarCategory;
  }

  const getTodoDescription = () => {
    const descriptionTextarea = document.querySelector('.todoinfo-description textarea');
    return descriptionTextarea.value;
  }

  const getTodoCategory = () => {
    const categorySelectBtn = document.querySelector('.todoinfo-category-selectBtn');
    return categorySelectBtn.textContent;
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

  const openModal = (e) => {
    const container = getContainer();

    const targetId = e.target.id;
    let targetClass = e.target.className;
    if (targetClass === undefined) {
      targetClass = '';
    }

    if ( targetId.includes('createTodo') || targetClass.includes('createTodo') ) {
      container.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCreateTodoModal)());
      const createTodoModal = getCreateTodoModal();
      attachModalCloser(createTodoModal);
      const addTodoBtn = getAddTodoBtn();
      addTodoBtn.addEventListener('click', () => {
        const title = getTodoTitle();
        if (!isEmpty(title)) {
          console.log(`ADD ${title} to the display`);
          console.log(`Add ${title} to the todolist`)
          closeModal(createTodoModal.parentNode);
        }
      })

      const categorySelectBtn = getTodoInfoCategorySelectBtn();
      startListeningClickEvent(categorySelectBtn)
    }

    if ( targetId.includes('category-select') || targetClass.includes('category-select') ) {
      container.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCategorySelectionModal)());
      const categorySelectionModal = getCategorySelectionModal();
      attachModalCloser(categorySelectionModal);
    }

    if ( targetId.includes('createList') || targetClass.includes('createList') ) {
      container.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadCreateListModal)());
      // NEEDS TO BE IMPLEMENTED
    }
  }

  const closeModal = (modal) => {
    modal.remove();
  }

  const attachModalCloser = (modalContent) => {
    window.addEventListener('click', function closeThisModal(e) {
      const modal = modalContent.parentNode;
      if (e.target === modal) {
        closeModal(modal);
        window.removeEventListener('click', closeThisModal);
      }
    })
  }

  const startListeningClickEvent = (elem) => {
    elem.addEventListener('click', openModal);
  }

  const startUnfoldCategoryBtn = () => {
    const unfoldCategoryBtn = document.querySelector('#unfold-category-btn');
    unfoldCategoryBtn.addEventListener('click', () => {
      const categories = todoList.getAllCategories();
      
      const navBarCategory = getNavBarCategory();
      // const categoryList = loadCategories();
      // navBarCategory.appendChild(categoryList);
    });
  }

  const addTodo = (title) => {
    const todoListCardViewMain = getTodoListCardViewMain();
    todoListCardViewMain.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoItem)(title));
  }

  const showTodoDetailsCardView = () => {
    const cardViewContainer = getCardViewContainer();
    cardViewContainer.appendChild((0,_moduleLoaders_loadModules_js__WEBPACK_IMPORTED_MODULE_0__.loadTodoDetailsCardView)());
  }

  return {
    getContainer,
    getCreateTodoBtn,
    getTodoInfoCategorySelectBtn,
    getCategorySelectionModal,
    getCreateTodoModal,
    openModal,
    closeModal,
    attachModalCloser,
    startListeningClickEvent,
    startUnfoldCategoryBtn,
    addTodo,
    showTodoDetailsCardView
  }
}





// <i class="fas fa-chevron-down"></i>
// <i class="fas fa-chevron-up"></i>

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

const loadCheckMarker = () => {
  const checkMarker = document.createElement('i');
  checkMarker.classList.add('far', 'fa-check-circle');

  return checkMarker;
}

const loadCategorySelectionModal = () => {
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
  
  const top = createCategorySelectionModalItems('The Odin Project');
  const gym = createCategorySelectionModalItems('gym');
  const work = createCategorySelectionModalItems('work');
  const school = createCategorySelectionModalItems('school');
  const life = createCategorySelectionModalItems('life');
  const jiujitsu = createCategorySelectionModalItems('jiujitsu');
  
  categorySelectionModalMain.appendChild(top);
  categorySelectionModalMain.appendChild(gym);
  categorySelectionModalMain.appendChild(work);
  categorySelectionModalMain.appendChild(school);
  categorySelectionModalMain.appendChild(life);
  categorySelectionModalMain.appendChild(jiujitsu);

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
  const createListModal = document.createElement('div');
  createListModal.classList.add('createList-modal');

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

  return createListModal;
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

const loadTodoinfoContainerCategory = () => {
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
  categorySelectionBtn.innerText = "The Odin Project"

  todoinfoContainerCategory.appendChild(labelText);
  todoinfoContainerCategory.appendChild(todoinfoCategory);
  todoinfoCategory.appendChild(categorySelectionBtn);

  return todoinfoContainerCategory;
}

const loadTodoInfoContainer = () => {
  const todoInfoContainer = document.createElement('div');
  todoInfoContainer.classList.add('createTodo-modal-todoinfo-container');

  const todoinfoContainerTitle = loadTodoinfoContainerTitle();
  const todoinfoContainerDescription = loadTodoinfoContainerDescription();
  const todoinfoContainerCategory = loadTodoinfoContainerCategory();

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
const loadCreateTodoModal = () => {
  const modal = document.createElement('div')
  modal.classList.add('modal');

  const createTodoModal = document.createElement('div');
  createTodoModal.classList.add('createTodo-modal');
  createTodoModal.classList.add('modal-content');

  const todoInfoContainer = loadTodoInfoContainer();
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
    
    // if category doesn't exist, add one
    if (!(category in _todos)) {
      addNewCategory(category);
    } 
    
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

todoList.addNewCategory('The Odin Project');
todoList.addNewCategory('Work');
todoList.addNewCategory('Life');
todoList.addNewCategory('School');
todoList.addNewCategory('Gym');

console.log(todoList.getAllCategories());

const createTodoBtn = display.getCreateTodoBtn();
display.startListeningClickEvent(createTodoBtn);


display.startUnfoldCategoryBtn();

display.addTodo('The Odin Project');
display.addTodo('TodoList');
display.addTodo('isHard....');
display.addTodo('But consistency over efficiency');
display.addTodo('Makes all difference so I shall proceed');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9sYW5kaW5nUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy9jYXRlZ29yeVNlbGVjdGlvbk1vZGFsLmNzcz82MTEyIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcz8wNjk4Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvY3JlYXRlVG9kb01vZGFsLmNzcz82MWEwIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvbGFuZGluZ1BhZ2UuY3NzPzY4MjkiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2Nzcy90b2RvRGV0YWlsc0NhcmRWaWV3LmNzcz8xYjdkIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9jc3MvdG9kb0xpc3RDYXJkVmlldy5jc3M/MjJjMSIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkQ3JlYXRlTGlzdE1vZGFsLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENyZWF0ZVRvZG9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvRGlzcGxheS9tb2R1bGVMb2FkZXJzL2xvYWRNb2R1bGVzLmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL0Rpc3BsYXkvbW9kdWxlTG9hZGVycy9sb2FkVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL1RvZG8vVG9kby5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3QvLi9zcmMvVG9kb0xpc3QvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1RPUC10b2RvbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2Uvc3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly9UT1AtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RPUC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9QLXRvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDZDQUE2QywyQkFBMkIsR0FBRyxXQUFXLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLDRCQUE0QiwrQkFBK0IsOEJBQThCLDhCQUE4QixpQ0FBaUMsNEJBQTRCLDRCQUE0QixtREFBbUQsZ0NBQWdDLGdDQUFnQyw4QkFBOEIsa0NBQWtDLDhDQUE4QyxxQ0FBcUMsbUNBQW1DLCtDQUErQyw4Q0FBOEMsc0NBQXNDLDRDQUE0Qyw0QkFBNEIscUNBQXFDLDRDQUE0QyxxRUFBcUUsb0NBQW9DLGdDQUFnQyw2QkFBNkIsR0FBRyxrQ0FBa0Msb0JBQW9CLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLGlCQUFpQixpQkFBaUIsR0FBRywyQ0FBMkMsc0NBQXNDLDBDQUEwQyxtQ0FBbUMsZ0RBQWdELEdBQUcsZ0JBQWdCLGtDQUFrQyxlQUFlLCtCQUErQiwyQ0FBMkMsR0FBRyx5Q0FBeUMsa0JBQWtCLGtEQUFrRCxzREFBc0QscUNBQXFDLEdBQUcsc0JBQXNCLGdEQUFnRCxHQUFHLDRCQUE0QixzREFBc0QsR0FBRyw4REFBOEQsc0JBQXNCLHFCQUFxQix1QkFBdUIsc0JBQXNCLDRCQUE0Qiw4Q0FB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Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4Qzs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXNDOztBQUV0QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXVDOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUR1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIa0I7QUFDNEI7QUFDZDtBQUNBO0FBQ1E7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFY7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktLOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQSxPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJVztBQUNPO0FBQ1k7QUFDSjtBQUM2QjtBQUNSOztBQUVuRSxnQkFBZ0IsNERBQU87QUFDdkIsaUJBQWlCLCtEQUFROztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFjdGlvbi1jb2xvcjogIzAwODBmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZmZmZmZmO1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwge1xcbiAgbWluLWhlaWdodDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcblxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaGVhZGVyIHtcXG4gIGhlaWdodDogNTVweDtcXG4gIG1pbi1oZWlnaHQ6IDU1cHg7XFxuICAvKiBHaXZlIHBhZGRpbmcgdG8gdGhlIGp1c3Qgc2lkZSAqL1xcbiAgcGFkZGluZzogMCB2YXIoLS1ndXR0ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZCk7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMge1xcbiAgbWluLWhlaWdodDogNDRweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtczpob3ZlcixcXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcik7XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcy10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IHZhcigtLWNhcmQtaXRlbS1mb250LXNpemUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ib3R0b20tY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jYXRlZ29yeVNlbGVjdGlvbi1tb2RhbCAuZmEtY2hlY2stY2lyY2xlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0tY29sb3IpOyBcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2NhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGNBQWM7O0VBRWQsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpREFBaUQ7RUFDakQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBLDJCQUEyQjs7QUFFM0I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCOztFQUVoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5Q0FBeUM7O0VBRXpDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsNENBQTRDO0VBQzVDLHdFQUF3RTtFQUN4RSxtQ0FBbUM7O0VBRW5DLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLHdFQUF3RTs7RUFFeEUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDJDQUEyQzs7RUFFM0MsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLHFDQUFxQztFQUNyQyxtREFBbUQ7RUFDbkQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1iZy1jb2xvci1oaWdobGlnaHRlZDogIzQyNDI0MjtcXG4gIC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yOiAjN2Y3ZjdmO1xcbiAgLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplOiAyOHB4O1xcbiAgLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplOiAxNXB4O1xcbiAgLS10ZXh0RmllbGQtYm9yZGVyOiA4cHg7XFxuICAtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcjogIzAwMDtcXG4gIC8qIGNyZWF0ZVRvZG9Nb2RhbCAqL1xcbiAgLS1ndXR0ZXI6IDE2cHg7XFxuXFxuICAvKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuICAtLWJvcmRlci1ib3R0b20tY29sb3I6ICNjY2NjY2M7XFxuICAtLWNhcmQtaXRlbS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1zaXplOiAxNHB4O1xcbiAgLS1jb25maXJtLWNvbG9yOiAjMjNjZTg4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsICovXFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsIHtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG5cXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlciB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBtaW4taGVpZ2h0OiA1NXB4O1xcbiAgLyogR2l2ZSBwYWRkaW5nIHRvIHRoZSBqdXN0IHNpZGUgKi9cXG4gIHBhZGRpbmc6IDAgdmFyKC0tZ3V0dGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pLWJvbGQpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbiB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLWd1dHRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXM6aG92ZXIsXFxuLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtaXRlbXMtdGl0bGUge1xcbiAgZmxleDogMSAwIDA7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1pdGVtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWl0ZW0tZm9udC1zaXplKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwgLmZhLWNoZWNrLWNpcmNsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtLWNvbG9yKTsgXFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiAgKi9cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDE2NXB4O1xcbiAgXFxuICAvKiBUTyBCRSBSRU1PVkVEICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1jb250ZW50LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDExMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1MYWJlbFRleHQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lciB7XFxuICBcXG59XFxuXFxuLmNyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDAgO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250LXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtZm9udC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcblxcbiAgLyogVG8gY2VudGVyIHRoaW5ncyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpob3ZlciwgXFxuLmNyZWF0ZUxpc3QtYnV0dG9uczpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjYW5jZWxcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgdmFyKC0tYnV0dG9uLXNlcGFyYXRpb24tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uW2RhdGEtYnRuPVxcXCJjcmVhdGVcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cykgMDsgXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZDQUE2QztFQUM3QyxpREFBaUQ7RUFDakQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBLEtBQUs7O0FBRUw7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2Qix5Q0FBeUM7O0VBRXpDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGdCQUFnQjs7RUFFaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLCtDQUErQztFQUMvQywrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNzAwO1xcbiAgLS1sYWJlbC1mb250LXNpemU6IDEycHg7XFxuICAtLWxhYmVsLWZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgLS1sYWJlbC1mb250LWNvbG9yOiAjODI4MjkyO1xcbiAgLS1sYWJlbC1ib3R0b20tcGFkZGluZzogNHB4O1xcbiAgLS1kZWZhdWx0LWZvbnQtc2l6ZTogMTZweDtcXG4gIC0tY2FyZC1pdGVtLWJnLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxufVxcblxcbi8qIFVUSUxJVFkgVEFHUyAqL1xcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qIFVUSUxJVFkgQ0xBU1NFUyAqL1xcblxcbi5MYWJlbF9fVGV4dCB7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tbGFiZWwtZm9udC13ZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWxhYmVsLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWxhYmVsLWJvdHRvbS1wYWRkaW5nKTtcXG59XFxuXFxuLnRleHRGaWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRleHRGaWVsZC1ib3JkZXIpO1xcbn1cXG5cXG4udGV4dEZpZWxkOmZvY3VzLFxcbi50ZXh0RmllbGQ6aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBjYXJldC1jb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLnRleHRGaWVsZC10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4udGV4dEZpZWxkLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qICAqL1xcblxcbi5jcmVhdGVMaXN0LW1vZGFsIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTY1cHg7XFxuICBcXG4gIC8qIFRPIEJFIFJFTU9WRUQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbS1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTEycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVMaXN0LW1vZGFsLUxhYmVsVGV4dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC10ZXh0RmllbGQtY29udGFpbmVyIHtcXG4gIFxcbn1cXG5cXG4uY3JlYXRlTGlzdC1tb2RhbC1idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMCA7XFxufVxcblxcbi5jcmVhdGVMaXN0LWJ1dHRvbnMge1xcbiAgZmxleDogMSAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tY2FyZC1hYm92ZS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuXFxuICAvKiBUbyBjZW50ZXIgdGhpbmdzICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRlTGlzdC1idXR0b25zOmhvdmVyLCBcXG4uY3JlYXRlTGlzdC1idXR0b25zOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNhbmNlbFxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCB2YXIoLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b25bZGF0YS1idG49XFxcImNyZWF0ZVxcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKSAwOyBcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlTGlzdE1vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDQgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItY2F0ZWdvcnkge1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXIge1xcbiAgZmxleDogMCAwIDU0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMyk7ICovXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczpob3ZlcixcXG4uY3JlYXRlVG9kby1idXR0b25zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvY3JlYXRlVG9kb01vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsMENBQTBDO0VBQzFDLHlDQUF5QztFQUN6QyxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUUsZUFBZTs7RUFFM0IsWUFBWSxFQUFFLGVBQWU7RUFDN0IsYUFBYSxFQUFFLGdCQUFnQjs7RUFFL0IsaUNBQWlDLEVBQUUscUJBQXFCO0FBQzFEOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjs7RUFFbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7OztBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QywyQ0FBMkM7O0VBRTNDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCOztFQUV0QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjOztFQUVkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsd0VBQXdFO0VBQ3hFLDRDQUE0QztFQUM1QyxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLHdEQUF3RDtBQUMxRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWN0aW9uLWNvbG9yOiAjMDA4MGZmO1xcbiAgLS1jb2xvci10ZXh0LTE6ICNmZmZmZmY7XFxuICAtLWNvbG9yLXRleHQtMjogI2Q4ZDhkODtcXG4gIC0tY29sb3ItdGV4dC0zOiAjODg4ODg4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlTGlzdE1vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFxuICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0tYmctY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jcmVhdGVUb2RvLW1vZGFsLXRvZG9pbmZvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxIDAgMDtcXG4gIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG9pbmZvLWNvbnRhaW5lci10aXRsZSB7XFxuICBmbGV4OiAxIDAgMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kb2luZm8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDQgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvaW5mby1jb250YWluZXItY2F0ZWdvcnkge1xcbiAgZmxleDogMSAwIDA7XFxufVxcblxcbi50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXIge1xcbiAgZmxleDogMCAwIDU0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3JlYXRlVG9kby1idXR0b25zIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpIHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYWJvdmUtYmctY29sb3IpO1xcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMyk7ICovXFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWNvbG9yKTtcXG59XFxuXFxuLmNyZWF0ZVRvZG8tYnV0dG9uczpob3ZlcixcXG4uY3JlYXRlVG9kby1idXR0b25zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWFjdGlvbi1idXR0b24tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbiAgLyogVG9kb0RldGFpbHMtQ2FyZFZpZXcgKi9cXG4gIC0tQ2FyZFBhZGRlci1yaWdodDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci1sZWZ0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLXRvcDogOHB4O1xcbiAgLS1DYXJkUGFkZGVyLWJvdHRvbTogOHB4O1xcbiAgLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplOiAyNHB4O1xcbiAgLS1mb250LXNpemUtYmFzZTogMTVweDtcXG5cXG4gIC8qIExhbmRpbmcgUGFnZSAqL1xcbiAgLS1uYXZiYXItY2F0ZWdvcnktdGV4dC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tY2F0ZWdvcnktaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogTEFORElORyBQQUdFICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICB3aWR0aDogMjgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxcbn1cXG5cXG4ubmF2YmFyLWhlYWRlciB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLnBlcnNvbmFsLXNvY2lhbC1tZWRpYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvQnRuLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDk2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NyZWF0ZVRvZG9CdG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWJ1dHRvbi10ZXh0LWNvbG9yKTtcXG4gIFxcbn1cXG5cXG4jY3JlYXRlVG9kb0J0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTkFWQkFSIE1BSU4gKi9cXG4ubmF2YmFyLW1haW4ge1xcbn1cXG4ubmF2YmFyLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWhlYWRlciB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG59XFxuXFxuLm5hdmJhci1jYXRlZ29yeS1oZWFkZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5uYXZiYXItY2F0ZWdvcnktbGlzdCB7XFxuICBjb2xvcjogdmFyKC0tbmF2YmFyLWNhdGVnb3J5LXRleHQtY29sb3IpO1xcbiAgLyogUmFuZG9tIEhlaWdodCAqL1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZyk7XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcblxcbi5tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIC5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59IFxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL2xhbmRpbmdQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhDQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7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QTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWFjdGlvbi1idXR0b24tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0tY29sb3ItdGV4dC0xOiAjZTRlNGU0O1xcbiAgLS1jb2xvci10ZXh0LTI6ICNkOGQ4ZDg7XFxuICAtLWNvbG9yLXRleHQtMzogIzg4ODg4ODtcXG4gIC0tbW9kYWwtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10b2RvLWl0ZW0tYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcXG4gIC0tbGFiZWwtZm9udC1zaXplOiAxMnB4O1xcbiAgLS1sYWJlbC1mb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIC0tbGFiZWwtZm9udC1jb2xvcjogIzgyODI5MjtcXG4gIC0tbGFiZWwtYm90dG9tLXBhZGRpbmc6IDRweDtcXG4gIC0tZGVmYXVsdC1mb250LXNpemU6IDE2cHg7XFxuICAtLWV4dHJhLXNtYWxsLWZvbnQtc2l6ZTogMTBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbiAgLyogVG9kb0RldGFpbHMtQ2FyZFZpZXcgKi9cXG4gIC0tQ2FyZFBhZGRlci1yaWdodDogMjRweDtcXG4gIC0tQ2FyZFBhZGRlci1sZWZ0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLXRvcDogOHB4O1xcbiAgLS1DYXJkUGFkZGVyLWJvdHRvbTogOHB4O1xcbiAgLS10b2RvLWVkaXQtaGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8tZWRpdC10ZXh0ZmllbGQtdGl0bGUtZm9udC1zaXplOiAyNHB4O1xcbiAgLS1mb250LXNpemUtYmFzZTogMTVweDtcXG5cXG4gIC8qIExhbmRpbmcgUGFnZSAqL1xcbiAgLS1uYXZiYXItY2F0ZWdvcnktdGV4dC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tY2F0ZWdvcnktaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogVVRJTElUWSBUQUdTICovXFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0OyBcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogVVRJTElUWSBDTEFTU0VTICovXFxuXFxuLkxhYmVsX19UZXh0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbGFiZWwtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1sYWJlbC1mb250LXdlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tbGFiZWwtZm9udC1jb2xvcik7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbGFiZWwtYm90dG9tLXBhZGRpbmcpO1xcbn1cXG5cXG4udGV4dEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdGV4dEZpZWxkLWJvcmRlcik7XFxufVxcblxcbi50ZXh0RmllbGQ6Zm9jdXMsXFxuLnRleHRGaWVsZDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yKTtcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1hY3Rpb24tY29sb3IpO1xcbn1cXG5cXG4udGV4dEZpZWxkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi50ZXh0RmllbGQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXG59XFxuXFxuLyogTEFORElORyBQQUdFICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmctMS1jb2xvcik7XFxuICB3aWR0aDogMjgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxcbn1cXG5cXG4ubmF2YmFyLWhlYWRlciB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ucGVyc29uYWwtZGV0YWlsLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLnBlcnNvbmFsLXNvY2lhbC1tZWRpYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5jcmVhdGVUb2RvQnRuLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDk2cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NyZWF0ZVRvZG9CdG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWN0aW9uLWJ1dHRvbi10ZXh0LWNvbG9yKTtcXG4gIFxcbn1cXG5cXG4jY3JlYXRlVG9kb0J0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuXFxuLyogTkFWQkFSIE1BSU4gKi9cXG4ubmF2YmFyLW1haW4ge1xcbn1cXG4ubmF2YmFyLWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2YmFyLWNhdGVnb3J5LWhlYWRlciB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1uYXZiYXItbGVmdC1yaWdodC1wYWRkaW5nKTtcXG59XFxuXFxuLm5hdmJhci1jYXRlZ29yeS1oZWFkZXIgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi5uYXZiYXItY2F0ZWdvcnktbGlzdCB7XFxuICBjb2xvcjogdmFyKC0tbmF2YmFyLWNhdGVnb3J5LXRleHQtY29sb3IpO1xcbiAgLyogUmFuZG9tIEhlaWdodCAqL1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zIHtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tbmF2YmFyLWxlZnQtcmlnaHQtcGFkZGluZyk7XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yKTtcXG59XFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcblxcbi5tYWluIHtcXG4gIGZsZXg6IDEgMCAwO1xcbiAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2JhY2tncm91bmQuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uQ2FyZFZpZXctQ29udGFpbmVyIC5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59IFxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcblxcbi5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlRvZG9FZGl0LVBhbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9FZGl0LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1DYXJkUGFkZGVyLWxlZnQpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tQ2FyZFBhZGRlci1ib3R0b20pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxufVxcblxcbi5Ub2RvRWRpdC1wYWRkZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB7XFxuXFxufVxcblxcbi5Ub2RvRWRpdC1UYWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS10YWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZXh0cmEtc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuLnByaW9yaXR5LXRhZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KVxcbn1cXG5cXG4vKiAjcHJpb3JpdHktaW1wb3J0YW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEzMjMyO1xcbn1cXG5cXG4jcHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQkEzQTtcXG59XFxuXFxuI3ByaW9yaXR5LW1pZGRsZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjc2NztcXG59XFxuXFxuI3ByaW9yaXR5LWxvdy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59ICovXFxuXFxuLnByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcblxcbi5Ub2RvRWRpdC10aXRsZS10ZXh0ZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRhZ1JvdyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcbn1cXG5cXG4uVG9kb0VkaXQtQ3JlYXRlZERhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL3RvZG9EZXRhaWxzQ2FyZFZpZXcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixxREFBcUQ7RUFDckQseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCOztFQUV4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywwQkFBMEI7O0VBRTFCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsc0NBQXNDO0VBQ3RDLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFDeEMseUNBQXlDOztFQUV6Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQiw0Q0FBNEM7O0VBRTVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7O0VBRWxDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1leHRyYS1zbWFsbC1mb250LXNpemU6IDEwcHg7XFxuICAtLWNhcmQtaXRlbS1iZy1jb2xvcjogIzE2MTYxNjtcXG4gIC0tY2FyZC1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLWNhcmQtYWJvdmUtYmctY29sb3ItaGlnaGxpZ2h0ZWQ6ICM0MjQyNDI7XFxuICAtLWJ1dHRvbi1zZXBhcmF0aW9uLWJvcmRlci1jb2xvcjogIzdmN2Y3ZjtcXG4gIC0tdGV4dEZpZWxkLXRpdGxlLWZvbnQtc2l6ZTogMjhweDtcXG4gIC0tdGV4dEZpZWxkLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogMTVweDtcXG4gIC0tdGV4dEZpZWxkLWJvcmRlcjogOHB4O1xcbiAgLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3I6ICMwMDA7XFxuICAvKiBjcmVhdGVUb2RvTW9kYWwgKi9cXG4gIC0tZ3V0dGVyOiAxNnB4O1xcblxcbiAgLyogY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCAqL1xcbiAgLS1ib3JkZXItYm90dG9tLWNvbG9yOiAjY2NjY2NjO1xcbiAgLS1jYXJkLWl0ZW0tZm9udC1jb2xvcjogI2Q4ZDhkODtcXG4gIC0tY2FyZC1pdGVtLWZvbnQtc2l6ZTogMTRweDtcXG4gIC0tY29uZmlybS1jb2xvcjogIzIzY2U4ODtcXG5cXG4gIC8qIFRvZG9MaXN0LUNhcmRWaWV3ICovXFxuICAtLXRvZG8taXRlbS1iZy1jb2xvcjogIzI1MjUyNTtcXG4gIC0tdG9kby1pdGVtLWJnLWhpZ2hsaWdodGVkLWNvbG9yOiAjNDI0MjQyO1xcbiAgLS10b2RvLWl0ZW0tdGV4dC1jaGVja2VkLWNvbG9yOiAjOGU4ZTkyO1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLXRleHQtY29sb3I6ICNlNGU0ZTQ7XFxuICAtLXRvZG8taXRlbS1oZWFkZXItZm9udC1zaXplOiAyMHB4O1xcbiAgLS1jYXJkLWJnLTEtY29sb3I6ICMxNjE2MTY7XFxuXFxuICAvKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcbiAgLS1DYXJkUGFkZGVyLXJpZ2h0OiAyNHB4O1xcbiAgLS1DYXJkUGFkZGVyLWxlZnQ6IDI0cHg7XFxuICAtLUNhcmRQYWRkZXItdG9wOiA4cHg7XFxuICAtLUNhcmRQYWRkZXItYm90dG9tOiA4cHg7XFxuICAtLXRvZG8tZWRpdC1oZWFkZXItdGV4dC1jb2xvcjogI2U0ZTRlNDtcXG4gIC0tdG9kby1lZGl0LXRleHRmaWVsZC10aXRsZS1mb250LXNpemU6IDI0cHg7XFxuICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvRGV0YWlscy1DYXJkVmlldyAqL1xcblxcbi5Ub2RvRGV0YWlscy1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnLTEtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLlRvZG9FZGl0LVBhbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlRvZG9FZGl0LWhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA1NHB4O1xcbiAgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWFib3ZlLWJnLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1DYXJkUGFkZGVyLWxlZnQpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWxhYmVsLWZvbnQtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0tdG9kby1lZGl0LWhlYWRlci10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLlRvZG9FZGl0LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1DYXJkUGFkZGVyLXRvcCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tQ2FyZFBhZGRlci1ib3R0b20pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tQ2FyZFBhZGRlci1yaWdodCk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLUNhcmRQYWRkZXItbGVmdCk7XFxufVxcblxcbi5Ub2RvRWRpdC1wYWRkZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLUNhcmRQYWRkZXItdG9wKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uVG9kb0VkaXQtbWFpbi10aXRsZVJvdyB7XFxuXFxufVxcblxcbi5Ub2RvRWRpdC1UYWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS10YWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZXh0cmEtc21hbGwtZm9udC1zaXplKTtcXG59XFxuXFxuLnByaW9yaXR5LXRhZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KVxcbn1cXG5cXG4vKiAjcHJpb3JpdHktaW1wb3J0YW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEzMjMyO1xcbn1cXG5cXG4jcHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDQkEzQTtcXG59XFxuXFxuI3ByaW9yaXR5LW1pZGRsZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwYjc2NztcXG59XFxuXFxuI3ByaW9yaXR5LWxvdy1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXG59ICovXFxuXFxuLnByaW9yaXR5LWJ0bnMtbm90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGI7XFxufVxcblxcbi5Ub2RvRWRpdC10aXRsZS10ZXh0ZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS10b2RvLWVkaXQtdGV4dGZpZWxkLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5Ub2RvRWRpdC1tYWluLXRhZ1JvdyB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tQ2FyZFBhZGRlci10b3ApO1xcbn1cXG5cXG4uVG9kb0VkaXQtQ3JlYXRlZERhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcblxcbi5Ub2RvTGlzdC1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXIge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxcbn1cXG5cXG4uVG9kb0xpc3QtbWFpbi1yb3dzIHtcXG4gIG1pbi1oZWlnaHQ6IDYzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW06aG92ZXIsXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tCb3gge1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLlRvZG9JdGVtLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtLWRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy90b2RvTGlzdENhcmRWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMseUNBQXlDO0VBQ3pDLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsY0FBYzs7RUFFZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0Isd0JBQXdCOztFQUV4QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywwQkFBMEI7O0FBRTVCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMseUNBQXlDOztFQUV6QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hY3Rpb24tY29sb3I6ICMwMDgwZmY7XFxuICAtLWNvbG9yLXRleHQtMTogI2U0ZTRlNDtcXG4gIC0tY29sb3ItdGV4dC0yOiAjZDhkOGQ4O1xcbiAgLS1jb2xvci10ZXh0LTM6ICM4ODg4ODg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdG9kby1pdGVtLWJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xcbiAgLS1mb250LXdlaWdodC1ib2xkOiA3MDA7XFxuICAtLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcXG4gIC0tbGFiZWwtZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAtLWxhYmVsLWZvbnQtY29sb3I6ICM4MjgyOTI7XFxuICAtLWxhYmVsLWJvdHRvbS1wYWRkaW5nOiA0cHg7XFxuICAtLWRlZmF1bHQtZm9udC1zaXplOiAxNnB4O1xcbiAgLS1jYXJkLWl0ZW0tYmctY29sb3I6ICMxNjE2MTY7XFxuICAtLWNhcmQtaXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzI1MjUyNTtcXG4gIC0tY2FyZC1hYm92ZS1mb250LWNvbG9yOiAjZDhkOGQ4O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yOiAjMjUyNTI1O1xcbiAgLS1jYXJkLWFib3ZlLWJnLWNvbG9yLWhpZ2hsaWdodGVkOiAjNDI0MjQyO1xcbiAgLS1idXR0b24tc2VwYXJhdGlvbi1ib3JkZXItY29sb3I6ICM3ZjdmN2Y7XFxuICAtLXRleHRGaWVsZC10aXRsZS1mb250LXNpemU6IDI4cHg7XFxuICAtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemU6IDE1cHg7XFxuICAtLXRleHRGaWVsZC1ib3JkZXI6IDhweDtcXG4gIC0tdGV4dEZpZWxkLWJnLWZvY3VzLWNvbG9yOiAjMDAwO1xcbiAgLyogY3JlYXRlVG9kb01vZGFsICovXFxuICAtLWd1dHRlcjogMTZweDtcXG5cXG4gIC8qIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwgKi9cXG4gIC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjY2NjYztcXG4gIC0tY2FyZC1pdGVtLWZvbnQtY29sb3I6ICNkOGQ4ZDg7XFxuICAtLWNhcmQtaXRlbS1mb250LXNpemU6IDE0cHg7XFxuICAtLWNvbmZpcm0tY29sb3I6ICMyM2NlODg7XFxuXFxuICAvKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcbiAgLS10b2RvLWl0ZW0tYmctY29sb3I6ICMyNTI1MjU7XFxuICAtLXRvZG8taXRlbS1iZy1oaWdobGlnaHRlZC1jb2xvcjogIzQyNDI0MjtcXG4gIC0tdG9kby1pdGVtLXRleHQtY2hlY2tlZC1jb2xvcjogIzhlOGU5MjtcXG4gIC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yOiAjZTRlNGU0O1xcbiAgLS10b2RvLWl0ZW0taGVhZGVyLWZvbnQtc2l6ZTogMjBweDtcXG4gIC0tY2FyZC1iZy0xLWNvbG9yOiAjMTYxNjE2O1xcblxcbn1cXG5cXG4vKiBVVElMSVRZIFRBR1MgKi9cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBVVElMSVRZIENMQVNTRVMgKi9cXG5cXG4uTGFiZWxfX1RleHQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1sYWJlbC1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWxhYmVsLWZvbnQtd2VpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1sYWJlbC1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1sYWJlbC1ib3R0b20tcGFkZGluZyk7XFxufVxcblxcbi50ZXh0RmllbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogOTAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS10ZXh0RmllbGQtYm9yZGVyKTtcXG59XFxuXFxuLnRleHRGaWVsZDpmb2N1cyxcXG4udGV4dEZpZWxkOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHRGaWVsZC1iZy1mb2N1cy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0RmllbGQtYmctZm9jdXMtY29sb3IpO1xcbiAgY2FyZXQtY29sb3I6IHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi50ZXh0RmllbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0RmllbGQtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnRleHRGaWVsZC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLXRleHRGaWVsZC1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBUb2RvTGlzdC1DYXJkVmlldyAqL1xcblxcbi5Ub2RvTGlzdC1DYXJkVmlldyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iZy0xLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5Ub2RvTGlzdC1DYXJkVmlldy1oZWFkZXIge1xcbiAgbWluLWhlaWdodDogNjNweDtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBjb2xvcjogdmFyKC0tdG9kby1pdGVtLWhlYWRlci10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdG9kby1pdGVtLWhlYWRlci1mb250LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaS1ib2xkKTtcXG59XFxuXFxuLlRvZG9MaXN0LUNhcmRWaWV3LW1haW4ge1xcbiAgZmxleDogMSAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgIFxcbn1cXG5cXG4uVG9kb0xpc3QtbWFpbi1yb3dzIHtcXG4gIG1pbi1oZWlnaHQ6IDYzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1pdGVtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRvZG8taXRlbS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW06aG92ZXIsXFxuLlRvZG9JdGVtOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjdGlvbi1jb2xvcik7XFxufVxcblxcbi5Ub2RvSXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWl0ZW0tYmctaGlnaGxpZ2h0ZWQtY29sb3IpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtLWNoZWNrZWQge1xcbiAgY29sb3I6IHZhcigtLXRvZG8taXRlbS10ZXh0LWNoZWNrZWQtY29sb3IpO1xcbn1cXG5cXG4uVG9kb0l0ZW0tY2hlY2tCb3gge1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLlRvZG9JdGVtLXRpdGxlIHtcXG4gIGZsZXg6IDEgMCAwO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uVG9kb0l0ZW0tdGl0bGUtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtLWRlbGV0ZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZWF0ZUxpc3RNb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZWF0ZVRvZG9Nb2RhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xhbmRpbmdQYWdlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0RldGFpbHNDYXJkVmlldy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9MaXN0Q2FyZFZpZXcuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBcbiAgbG9hZFRvZG9JdGVtLFxuICBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCxcbiAgbG9hZENyZWF0ZUxpc3RNb2RhbCxcbiAgbG9hZENyZWF0ZVRvZG9Nb2RhbCxcbiAgbG9hZFRvZG9EZXRhaWxzQ2FyZFZpZXcsXG4gIGxvYWRDYXRlZ29yaWVzXG59IGZyb20gJy4vbW9kdWxlTG9hZGVycy9sb2FkTW9kdWxlcy5qcyc7XG5cblxuXG5pbXBvcnQgeyBUb2RvTGlzdCB9IGZyb20gJy4uL1RvZG9MaXN0L1RvZG9MaXN0LmpzJztcblxuY29uc3QgdG9kb0xpc3QgPSBUb2RvTGlzdCgpO1xuXG5cblxuY29uc3QgRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0VG9kb0luZm9DYXRlZ29yeVNlbGVjdEJ0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pbmZvLWNhdGVnb3J5LXNlbGVjdEJ0bicpO1xuICB9XG5cbiAgY29uc3QgaXNFbXB0eSA9IChzdHIpID0+IHtcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBnZXRUb2RvVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby10aXRsZSB0ZXh0YXJlYScpO1xuICAgIHJldHVybiB0aXRsZVRleHRhcmVhLnZhbHVlO1xuICB9XG5cbiAgY29uc3QgZ2V0TmF2QmFyQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWNhdGVnb3J5Jyk7XG4gICAgcmV0dXJuIG5hdkJhckNhdGVnb3J5O1xuICB9XG5cbiAgY29uc3QgZ2V0VG9kb0Rlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2luZm8tZGVzY3JpcHRpb24gdGV4dGFyZWEnKTtcbiAgICByZXR1cm4gZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGdldFRvZG9DYXRlZ29yeSA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgICByZXR1cm4gY2F0ZWdvcnlTZWxlY3RCdG4udGV4dENvbnRlbnQ7XG4gIH1cblxuICBjb25zdCBnZXRUb2RvTGlzdENhcmRWaWV3TWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdENhcmRWaWV3TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Ub2RvTGlzdC1DYXJkVmlldy1tYWluJyk7XG4gICAgcmV0dXJuIHRvZG9MaXN0Q2FyZFZpZXdNYWluO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2FyZFZpZXdDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZFZpZXdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ2FyZFZpZXctQ29udGFpbmVyJyk7XG4gICAgcmV0dXJuIGNhcmRWaWV3Q29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgZ2V0QWRkVG9kb0J0biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8tYnV0dG9ucycpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIH1cblxuICBjb25zdCBnZXRDcmVhdGVUb2RvQnRuID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9kb0J0bicpO1xuICB9XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5U2VsZWN0aW9uLW1vZGFsJyk7XG4gIH1cblxuICBjb25zdCBnZXRDcmVhdGVUb2RvTW9kYWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvLW1vZGFsJyk7XG4gIH1cblxuICBjb25zdCBvcGVuTW9kYWwgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgdGFyZ2V0Q2xhc3MgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgaWYgKHRhcmdldENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldENsYXNzID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXRJZC5pbmNsdWRlcygnY3JlYXRlVG9kbycpIHx8IHRhcmdldENsYXNzLmluY2x1ZGVzKCdjcmVhdGVUb2RvJykgKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZENyZWF0ZVRvZG9Nb2RhbCgpKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVRvZG9Nb2RhbCA9IGdldENyZWF0ZVRvZG9Nb2RhbCgpO1xuICAgICAgYXR0YWNoTW9kYWxDbG9zZXIoY3JlYXRlVG9kb01vZGFsKTtcbiAgICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBnZXRBZGRUb2RvQnRuKCk7XG4gICAgICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGdldFRvZG9UaXRsZSgpO1xuICAgICAgICBpZiAoIWlzRW1wdHkodGl0bGUpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYEFERCAke3RpdGxlfSB0byB0aGUgZGlzcGxheWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBBZGQgJHt0aXRsZX0gdG8gdGhlIHRvZG9saXN0YClcbiAgICAgICAgICBjbG9zZU1vZGFsKGNyZWF0ZVRvZG9Nb2RhbC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RCdG4gPSBnZXRUb2RvSW5mb0NhdGVnb3J5U2VsZWN0QnRuKCk7XG4gICAgICBzdGFydExpc3RlbmluZ0NsaWNrRXZlbnQoY2F0ZWdvcnlTZWxlY3RCdG4pXG4gICAgfVxuXG4gICAgaWYgKCB0YXJnZXRJZC5pbmNsdWRlcygnY2F0ZWdvcnktc2VsZWN0JykgfHwgdGFyZ2V0Q2xhc3MuaW5jbHVkZXMoJ2NhdGVnb3J5LXNlbGVjdCcpICkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsKCkpO1xuICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKTtcbiAgICAgIGF0dGFjaE1vZGFsQ2xvc2VyKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuICAgIH1cblxuICAgIGlmICggdGFyZ2V0SWQuaW5jbHVkZXMoJ2NyZWF0ZUxpc3QnKSB8fCB0YXJnZXRDbGFzcy5pbmNsdWRlcygnY3JlYXRlTGlzdCcpICkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDcmVhdGVMaXN0TW9kYWwoKSk7XG4gICAgICAvLyBORUVEUyBUTyBCRSBJTVBMRU1FTlRFRFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICBtb2RhbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IGF0dGFjaE1vZGFsQ2xvc2VyID0gKG1vZGFsQ29udGVudCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsb3NlVGhpc01vZGFsKGUpIHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxDb250ZW50LnBhcmVudE5vZGU7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRoaXNNb2RhbCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0TGlzdGVuaW5nQ2xpY2tFdmVudCA9IChlbGVtKSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG4gIH1cblxuICBjb25zdCBzdGFydFVuZm9sZENhdGVnb3J5QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuZm9sZENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZm9sZC1jYXRlZ29yeS1idG4nKTtcbiAgICB1bmZvbGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0b2RvTGlzdC5nZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IG5hdkJhckNhdGVnb3J5ID0gZ2V0TmF2QmFyQ2F0ZWdvcnkoKTtcbiAgICAgIC8vIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGxvYWRDYXRlZ29yaWVzKCk7XG4gICAgICAvLyBuYXZCYXJDYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0Q2FyZFZpZXdNYWluID0gZ2V0VG9kb0xpc3RDYXJkVmlld01haW4oKTtcbiAgICB0b2RvTGlzdENhcmRWaWV3TWFpbi5hcHBlbmRDaGlsZChsb2FkVG9kb0l0ZW0odGl0bGUpKTtcbiAgfVxuXG4gIGNvbnN0IHNob3dUb2RvRGV0YWlsc0NhcmRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRWaWV3Q29udGFpbmVyID0gZ2V0Q2FyZFZpZXdDb250YWluZXIoKTtcbiAgICBjYXJkVmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkVG9kb0RldGFpbHNDYXJkVmlldygpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Q29udGFpbmVyLFxuICAgIGdldENyZWF0ZVRvZG9CdG4sXG4gICAgZ2V0VG9kb0luZm9DYXRlZ29yeVNlbGVjdEJ0bixcbiAgICBnZXRDYXRlZ29yeVNlbGVjdGlvbk1vZGFsLFxuICAgIGdldENyZWF0ZVRvZG9Nb2RhbCxcbiAgICBvcGVuTW9kYWwsXG4gICAgY2xvc2VNb2RhbCxcbiAgICBhdHRhY2hNb2RhbENsb3NlcixcbiAgICBzdGFydExpc3RlbmluZ0NsaWNrRXZlbnQsXG4gICAgc3RhcnRVbmZvbGRDYXRlZ29yeUJ0bixcbiAgICBhZGRUb2RvLFxuICAgIHNob3dUb2RvRGV0YWlsc0NhcmRWaWV3XG4gIH1cbn1cblxuXG5cbmV4cG9ydCB7IERpc3BsYXkgfTtcblxuLy8gPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuLy8gPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi11cFwiPjwvaT4iLCJjb25zdCBsb2FkQ2F0ZWdvcmllcyA9IChjYXRlZ29yaWVzKSA9PiB7XG4gIGNvbnN0IG5hdkJhckNhdGVnb3J5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdkJhckNhdGVnb3J5TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItY2F0ZWdvcnktbGlzdCcpO1xuXG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWl0ZW1zJyk7XG4gICAgbGkuaW5uZXJUZXh0ID0gY2F0ZWdvcnk7XG5cbiAgICBuYXZCYXJDYXRlZ29yeUxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KVxuXG4gIHJldHVybiBuYXZCYXJDYXRlZ29yeUxpc3Q7XG59XG5cbmV4cG9ydCB7IGxvYWRDYXRlZ29yaWVzIH07IiwiaW1wb3J0ICcuLi8uLi9jc3MvY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jc3MnO1xuXG5jb25zdCBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC1pdGVtcycpO1xuXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWl0ZW1zLXRpdGxlJyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtc1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcy5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXNUaXRsZSk7XG5cblxuICByZXR1cm4gY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zO1xufVxuXG5jb25zdCBsb2FkQ2hlY2tNYXJrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjaGVja01hcmtlci5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtY2hlY2stY2lyY2xlJyk7XG5cbiAgcmV0dXJuIGNoZWNrTWFya2VyO1xufVxuXG5jb25zdCBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5U2VsZWN0aW9uLW1vZGFsLWhlYWRlcicpO1xuICBcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVNlbGVjdGlvbi1tb2RhbC10aXRsZScpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUuaW5uZXJUZXh0ID0gJ01vdmUgdG8uLi4nO1xuICBcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlTZWxlY3Rpb24tbW9kYWwtbWFpbicpXG5cbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsSGVhZGVyKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbk1vZGFsVGl0bGUpO1xuXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4pO1xuICBcbiAgY29uc3QgdG9wID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKCdUaGUgT2RpbiBQcm9qZWN0Jyk7XG4gIGNvbnN0IGd5bSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnZ3ltJyk7XG4gIGNvbnN0IHdvcmsgPSBjcmVhdGVDYXRlZ29yeVNlbGVjdGlvbk1vZGFsSXRlbXMoJ3dvcmsnKTtcbiAgY29uc3Qgc2Nob29sID0gY3JlYXRlQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbEl0ZW1zKCdzY2hvb2wnKTtcbiAgY29uc3QgbGlmZSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnbGlmZScpO1xuICBjb25zdCBqaXVqaXRzdSA9IGNyZWF0ZUNhdGVnb3J5U2VsZWN0aW9uTW9kYWxJdGVtcygnaml1aml0c3UnKTtcbiAgXG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKHRvcCk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKGd5bSk7XG4gIGNhdGVnb3J5U2VsZWN0aW9uTW9kYWxNYWluLmFwcGVuZENoaWxkKHdvcmspO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChzY2hvb2wpO1xuICBjYXRlZ29yeVNlbGVjdGlvbk1vZGFsTWFpbi5hcHBlbmRDaGlsZChsaWZlKTtcbiAgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbE1haW4uYXBwZW5kQ2hpbGQoaml1aml0c3UpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0aW9uTW9kYWwpO1xuICBcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5leHBvcnQgeyBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9O1xuXG4vLyBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuLy8gY29uc3QgY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCA9IGdldENhdGVnb3J5U2VsZWN0aW9uTW9kYWwoKTtcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCk7XG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY3JlYXRlTGlzdE1vZGFsLmNzcyc7XG5cbmNvbnN0IGxvYWRDcmVhdGVMaXN0TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1tb2RhbCcpO1xuXG4gIC8vIGNyZWF0ZUxpc3QtbW9kYWwtY29udGVudC1jb250YWluZXJcbiAgY29uc3QgY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVMaXN0TW9kYWxDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtY29udGVudC1jb250YWluZXInKTtcblxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTGlzdE1vZGFsTGFiZWxUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtTGFiZWxUZXh0LWNvbnRhaW5lcicpO1xuICBcbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gJ05BTUUgVEhJUyBMSVNUJztcblxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWxUZXh0RmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtdGV4dEZpZWxkLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZC5jbGFzc0xpc3QuYWRkKCd0ZXh0RmllbGQnLCAndGV4dEZpZWxkLXRpdGxlJyk7XG4gIGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuXG4gIC8vIGNyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lclxuICBjb25zdCBjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZUxpc3QtbW9kYWwtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY3JlYXRlTGlzdC1idXR0b25zJyk7XG4gIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuJywgJ2NhbmNlbCcpO1xuICBjYW5jZWwuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKCdjcmVhdGVMaXN0LWJ1dHRvbnMnKTtcbiAgY3JlYXRlLnNldEF0dHJpYnV0ZSgnZGF0YS1idG4nLCAnY3JlYXRlJyk7XG4gIGNyZWF0ZS5pbm5lclRleHQgPSAnQ3JlYXRlJztcblxuICAvLyBTdHJ1Y3R1cmluZ1xuICBjcmVhdGVMaXN0TW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lcik7XG4gIGNyZWF0ZUxpc3RNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIpO1xuXG4gIC8vIENyZWF0ZUxpc3RNb2RhbENvbnRlbnRDb250YWluZXJcbiAgY3JlYXRlTGlzdE1vZGFsQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIpO1xuICBjcmVhdGVMaXN0TW9kYWxDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZENvbnRhaW5lcik7XG4gIFxuICBjcmVhdGVMaXN0TW9kYWxMYWJlbFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgY3JlYXRlTGlzdE1vZGFsVGV4dEZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RNb2RhbFRleHRGaWVsZCk7XG5cbiAgLy8gY3JlYXRlTGlzdE1vZGFsQnV0dG9uQ29udGFpbmVyXG4gIGNyZWF0ZUxpc3RNb2RhbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuICBjcmVhdGVMaXN0TW9kYWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlKTtcblxuICByZXR1cm4gY3JlYXRlTGlzdE1vZGFsO1xufVxuXG5leHBvcnQgeyBsb2FkQ3JlYXRlTGlzdE1vZGFsIH07XG5cbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4vLyBjb25zdCBjcmVhdGVMaXN0TW9kYWwgPSBnZXRDcmVhdGVMaXN0TW9kYWwoKTtcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdE1vZGFsKTtcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NyZWF0ZVRvZG9Nb2RhbC5jc3MnO1xuXG5jb25zdCBsb2FkVG9kb2luZm9Db250YWluZXJUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb0NvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLWNvbnRhaW5lci10aXRsZScpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9ICdUSVRMRSc7XG5cbiAgY29uc3QgdG9kb2luZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG9pbmZvLXRpdGxlJyk7XG5cbiAgY29uc3QgdGl0bGVUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRpdGxlVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC10aXRsZScpXG4gIHRpdGxlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgdGl0bGVUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0kgd2FudCB0by4uLicpO1xuXG4gIHRvZG9pbmZvQ29udGFpbmVyVGl0bGUuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJUaXRsZS5hcHBlbmRDaGlsZCh0b2RvaW5mb1RpdGxlKTtcbiAgdG9kb2luZm9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHRhcmVhKTtcblxuICByZXR1cm4gdG9kb2luZm9Db250YWluZXJUaXRsZTtcbn1cblxuY29uc3QgbG9hZFRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jb250YWluZXItZGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxUZXh0LmNsYXNzTGlzdC5hZGQoJ0xhYmVsX19UZXh0Jyk7XG4gIGxhYmVsVGV4dC5pbm5lclRleHQgPSAnREVTQ1JJUFRJT04nO1xuXG4gIGNvbnN0IHRvZG9pbmZvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb2luZm9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvblRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICd0ZXh0RmllbGQtZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0luc2VydCB5b3VyIG5vdGVzIGhlcmUnKTtcblxuICB0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodG9kb2luZm9EZXNjcmlwdGlvbik7XG4gIHRvZG9pbmZvRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XG5cbiAgcmV0dXJuIHRvZG9pbmZvQ29udGFpbmVyRGVzY3JpcHRpb247XG59XG5cbmNvbnN0IGxvYWRUb2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lckNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY29udGFpbmVyLWNhdGVnb3J5Jyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsVGV4dC5jbGFzc0xpc3QuYWRkKCdMYWJlbF9fVGV4dCcpO1xuICBsYWJlbFRleHQuaW5uZXJUZXh0ID0gJ0NBVEVHT1JZJztcblxuICBjb25zdCB0b2RvaW5mb0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9pbmZvQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgndG9kb2luZm8tY2F0ZWdvcnknKTtcblxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYXRlZ29yeVNlbGVjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvaW5mby1jYXRlZ29yeS1zZWxlY3RCdG4nKTtcbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHNvbWV0aW1lc1xuICBjYXRlZ29yeVNlbGVjdGlvbkJ0bi5pbm5lclRleHQgPSBcIlRoZSBPZGluIFByb2plY3RcIlxuXG4gIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdG9kb2luZm9Db250YWluZXJDYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvaW5mb0NhdGVnb3J5KTtcbiAgdG9kb2luZm9DYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdGlvbkJ0bik7XG5cbiAgcmV0dXJuIHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnk7XG59XG5cbmNvbnN0IGxvYWRUb2RvSW5mb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0luZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVG9kby1tb2RhbC10b2RvaW5mby1jb250YWluZXInKTtcblxuICBjb25zdCB0b2RvaW5mb0NvbnRhaW5lclRpdGxlID0gbG9hZFRvZG9pbmZvQ29udGFpbmVyVGl0bGUoKTtcbiAgY29uc3QgdG9kb2luZm9Db250YWluZXJEZXNjcmlwdGlvbiA9IGxvYWRUb2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uKCk7XG4gIGNvbnN0IHRvZG9pbmZvQ29udGFpbmVyQ2F0ZWdvcnkgPSBsb2FkVG9kb2luZm9Db250YWluZXJDYXRlZ29yeSgpO1xuXG4gIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9pbmZvQ29udGFpbmVyVGl0bGUpO1xuICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvaW5mb0NvbnRhaW5lckRlc2NyaXB0aW9uKTtcbiAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb2luZm9Db250YWluZXJDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIHRvZG9JbmZvQ29udGFpbmVyO1xufVxuXG5jb25zdCBsb2FkQWRkVG9kb0J0bkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgYWRkVG9kb0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUb2RvQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8tbW9kYWwtYWRkVG9kb0J0bi1jb250YWluZXInKTtcblxuICBjb25zdCBjcmVhdGVUb2RvQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVUb2RvQnRucy5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLWJ1dHRvbnMnKTtcbiAgY3JlYXRlVG9kb0J0bnMuaW5uZXJUZXh0ID0gXCJBZGQgVG9kb1wiO1xuXG4gIGFkZFRvZG9CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnMpO1xuXG4gIHJldHVybiBhZGRUb2RvQnRuQ29udGFpbmVyO1xufVxuXG4vLyBSZXR1cm4gY3JlYXRlVG9kb01vZGFsIENvbnRlbnRzXG5jb25zdCBsb2FkQ3JlYXRlVG9kb01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgY29uc3QgY3JlYXRlVG9kb01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvLW1vZGFsJyk7XG4gIGNyZWF0ZVRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgY29uc3QgdG9kb0luZm9Db250YWluZXIgPSBsb2FkVG9kb0luZm9Db250YWluZXIoKTtcbiAgY29uc3QgYWRkVG9kb0J0bkNvbnRhaW5lciA9IGxvYWRBZGRUb2RvQnRuQ29udGFpbmVyKCk7XG4gIFxuICBjcmVhdGVUb2RvTW9kYWwuYXBwZW5kQ2hpbGQodG9kb0luZm9Db250YWluZXIpO1xuICBjcmVhdGVUb2RvTW9kYWwuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bkNvbnRhaW5lcik7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb01vZGFsKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmV4cG9ydCB7IGxvYWRDcmVhdGVUb2RvTW9kYWwgfTtcblxuXG4iLCJleHBvcnQgeyBsb2FkVG9kb0l0ZW0gfSBmcm9tICcuL2xvYWRUb2RvSXRlbS5qcyc7XG5leHBvcnQgeyBsb2FkQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RhbCB9IGZyb20gJy4vbG9hZENhdGVnb3J5U2VsZWN0aW9uTW9kYWwuanMnO1xuZXhwb3J0IHsgbG9hZENyZWF0ZUxpc3RNb2RhbCB9IGZyb20gJy4vbG9hZENyZWF0ZUxpc3RNb2RhbC5qcyc7XG5leHBvcnQgeyBsb2FkQ3JlYXRlVG9kb01vZGFsIH0gZnJvbSAnLi9sb2FkQ3JlYXRlVG9kb01vZGFsLmpzJztcbmV4cG9ydCB7IGxvYWRUb2RvRGV0YWlsc0NhcmRWaWV3IH0gZnJvbSAnLi9sb2FkVG9kb0RldGFpbHNDYXJkVmlldy5qcyc7XG5leHBvcnQgeyBsb2FkQ2F0ZWdvcmllcyB9IGZyb20gJy4vbG9hZENhdGVnb3JpZXMuanMnO1xuXG5cblxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvdG9kb0RldGFpbHNDYXJkVmlldy5jc3MnO1xuXG4vLyBVbml2ZXJzYWwgRnVuY3Rpb25zXG5jb25zdCBsb2FkTGFiZWxUZXh0ID0gKGxhYmVsKSA9PiB7XG4gIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbFRleHQuY2xhc3NMaXN0LmFkZCgnTGFiZWxfX1RleHQnKTtcbiAgbGFiZWxUZXh0LmlubmVyVGV4dCA9IGxhYmVsO1xuXG4gIHJldHVybiBsYWJlbFRleHQ7XG59XG5cbmNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHIpID0+IHtcbiAgY29uc3QgY2FwaXRhbGl6ZWQgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiAgcmV0dXJuIGNhcGl0YWxpemVkO1xufVxuXG5jb25zdCBsb2FkUHJpb3JpdHlCdG4gPSAoaW1wb3J0YW5jZSkgPT4ge1xuICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBpZCA9IGBwcmlvcml0eS0ke2ltcG9ydGFuY2V9LWJ0bmA7XG4gIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIC8vIGlubmVydGV4dCBvZiBidG4gaGFzICdJbXBvcnRhbmNlJywgbm90ICdpbXBtb3J0YW5jZSdcbiAgcHJpb3JpdHlCdG4uaW5uZXJUZXh0ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGltcG9ydGFuY2UpO1xuXG4gIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXRhZycsICdwcmlvcml0eS1idG5zLW5vdC1zZWxlY3RlZCcpO1xuXG4gIHJldHVybiBwcmlvcml0eUJ0bjtcbn1cblxuY29uc3QgbG9hZFRpdGxlUm93ID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLXRpdGxlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuICBcbiAgY29uc3QgbGFiZWxUZXh0ID0gbG9hZExhYmVsVGV4dCgnVElUTEUnKTtcbiAgXG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0aXRsZVRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRGaWVsZCcsICdUb2RvRWRpdC10aXRsZS10ZXh0ZmllbGQnKTtcbiAgdGl0bGVUZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuXG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVUZXh0QXJlYSk7XG5cbiAgcmV0dXJuIHRpdGxlUm93O1xufVxuXG5jb25zdCBsb2FkVGFnUm93ID0gKCkgPT4ge1xuICBjb25zdCB0YWdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFnUm93LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4tdGFnUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxvYWRMYWJlbFRleHQoJ1RBR1MnKTtcbiAgY29uc3QgdGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWdzLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LVRhZ3MnKTtcbiAgXG4gIHRhZ1Jvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB0YWdSb3cuYXBwZW5kQ2hpbGQodGFncyk7XG5cbiAgdGFncy5hcHBlbmRDaGlsZChsb2FkUHJpb3JpdHlCdG4oJ2ltcG9ydGFudCcpKTtcbiAgdGFncy5hcHBlbmRDaGlsZChsb2FkUHJpb3JpdHlCdG4oJ2hpZ2gnKSk7XG4gIHRhZ3MuYXBwZW5kQ2hpbGQobG9hZFByaW9yaXR5QnRuKCdtaWRkbGUnKSk7XG4gIHRhZ3MuYXBwZW5kQ2hpbGQobG9hZFByaW9yaXR5QnRuKCdsb3cnKSk7XG5cbiAgcmV0dXJuIHRhZ1Jvdztcbn1cblxuY29uc3QgbG9hZER1ZURhdGVSb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGR1ZURhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLUR1ZURhdGVSb3cnLCAnVG9kb0VkaXQtcGFkZGVyJyk7XG5cbiAgY29uc3QgbGFiZWxUZXh0ID0gbG9hZExhYmVsVGV4dCgnRFVFIERBVEUnKTtcblxuICBjb25zdCBkdWVEYXRlSW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZUlucHV0Qm94LmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LUR1ZURhdGVCb3gnKTtcblxuICAvLyBTaG91bGQgYmUgaXRzIG93biBtb2R1bGUgbGF0ZXJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1RvZG9FZGl0LUR1ZURhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdEdWVEYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzIwMjAtMTEtMDMnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgJzIwMjAtMTEtMDMnKTtcblxuICAvLyBBcHBlbmRpbmcgQ2hpbGRcbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dEJveCk7XG4gIFxuICBkdWVEYXRlSW5wdXRCb3guYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICByZXR1cm4gZHVlRGF0ZVJvdztcbn1cblxuY29uc3QgbG9hZERlc2NyaXB0aW9uUm93ID0gKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvblJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLURlc2NyaXB0aW9uUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxvYWRMYWJlbFRleHQoJ0RFU0NSSVBUSU9OJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dEZpZWxkJywgJ3RleHRGaWVsZC1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICc3Jyk7XG5cbiAgZGVzY3JpcHRpb25Sb3cuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgZGVzY3JpcHRpb25Sb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XG5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uUm93O1xufVxuXG5jb25zdCBsb2FkQ3JlYXRlZERhdGVSb3cgPSAoZGF0ZSkgPT4ge1xuICAvLyBNYXliZSBJIGNhbiBpbXBvcnQgc29tZSBsaWJyYXJ5IHRvIGdldCB0b2RheSdzIGRhdGVcblxuICBjb25zdCBjcmVhdGVkRGF0ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVkRGF0ZVJvdy5jbGFzc0xpc3QuYWRkKCdUb2RvRWRpdC1tYWluLUNyZWF0ZWREYXRlUm93JywgJ1RvZG9FZGl0LXBhZGRlcicpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxvYWRMYWJlbFRleHQoJ0NSRUFURUQgREFURScpO1xuXG4gIGNvbnN0IGNyZWF0ZWREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZWREYXRlLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LUNyZWF0ZWREYXRlJyk7XG4gIC8vIERZTkFNSUMgREFURSBORUVERURcbiAgY3JlYXRlZERhdGUuaW5uZXJUZXh0ID0gJzIwMjAuMTEuMDMnO1xuXG4gIGNyZWF0ZWREYXRlUm93LmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIGNyZWF0ZWREYXRlUm93LmFwcGVuZENoaWxkKGNyZWF0ZWREYXRlKTtcblxuICByZXR1cm4gY3JlYXRlZERhdGVSb3c7XG59XG5cbmNvbnN0IGxvYWRUb2RvRWRpdEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0VkaXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0VkaXRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtaGVhZGVyJyk7XG4gIHRvZG9FZGl0SGVhZGVyLmlubmVyVGV4dCA9IFwiVE9ETyBERVRBSUxTXCI7XG5cbiAgcmV0dXJuIHRvZG9FZGl0SGVhZGVyO1xufVxuXG5jb25zdCBsb2FkVG9kb0VkaXRNYWluID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRWRpdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0VkaXRNYWluLmNsYXNzTGlzdC5hZGQoJ1RvZG9FZGl0LW1haW4nKTtcblxuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobG9hZFRpdGxlUm93KCkpO1xuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobG9hZFRhZ1JvdygpKTtcbiAgdG9kb0VkaXRNYWluLmFwcGVuZENoaWxkKGxvYWREdWVEYXRlUm93KCkpO1xuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobG9hZERlc2NyaXB0aW9uUm93KCkpO1xuICB0b2RvRWRpdE1haW4uYXBwZW5kQ2hpbGQobG9hZENyZWF0ZWREYXRlUm93KCkpO1xuXG4gIHJldHVybiB0b2RvRWRpdE1haW47XG59XG5cbmNvbnN0IGxvYWRUb2RvRWRpdFBhbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9FZGl0UGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRWRpdFBhbmUuY2xhc3NMaXN0LmFkZCgnVG9kb0VkaXQtUGFuZScpO1xuXG4gIHRvZG9FZGl0UGFuZS5hcHBlbmRDaGlsZChsb2FkVG9kb0VkaXRIZWFkZXIoKSk7XG4gIHRvZG9FZGl0UGFuZS5hcHBlbmRDaGlsZChsb2FkVG9kb0VkaXRNYWluKCkpO1xuXG4gIHJldHVybiB0b2RvRWRpdFBhbmU7XG59XG5cbi8vIFNob3VsZCBleHBvcnQgb25seSBvbmUgYmlnIGZ1bmN0aW9uXG5jb25zdCBsb2FkVG9kb0RldGFpbHNDYXJkVmlldyA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0RldGFpbHNDYXJkVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGV0YWlsc0NhcmRWaWV3LmNsYXNzTGlzdC5hZGQoJ1RvZG9EZXRhaWxzLUNhcmRWaWV3Jyk7XG5cbiAgY29uc3QgdG9kb0VkaXRQYW5lID0gbG9hZFRvZG9FZGl0UGFuZSgpO1xuICB0b2RvRGV0YWlsc0NhcmRWaWV3LmFwcGVuZENoaWxkKHRvZG9FZGl0UGFuZSk7XG5cbiAgcmV0dXJuIHRvZG9EZXRhaWxzQ2FyZFZpZXc7XG59XG5cbmV4cG9ydCB7IGxvYWRUb2RvRGV0YWlsc0NhcmRWaWV3IH07XG5cblxuXG5cbiIsImltcG9ydCAnLi4vLi4vY3NzL3RvZG9MaXN0Q2FyZFZpZXcuY3NzJztcblxuY29uc3QgbG9hZFRvZG9JdGVtID0gKHRpdGxlKSA9PiB7XG4gIC8vIFdlIG5lZWQgdG8gaW5zZXJ0IHRoZSByb3csIHRvZG9pdGVtIGlzIGluIHRoZSByb3dcbiAgY29uc3QgdG9kb0xpc3RNYWluUm93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvTGlzdE1haW5Sb3dzLmNsYXNzTGlzdC5hZGQoJ1RvZG9MaXN0LW1haW4tcm93cycpXG5cbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgnVG9kb0l0ZW0nKTtcblxuICBjb25zdCB0b2RvSXRlbUNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JdGVtQ2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnVG9kb0l0ZW0tY2hlY2tCb3gnKTtcblxuICBjb25zdCBlbXB0eUNoZWNrTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZW1wdHlDaGVja01hcmsuY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLWNpcmNsZScpO1xuXG4gIC8vIGNvbnN0IGNoZWNrZWRNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAvLyBjaGVja2VkTWFyay5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtY2hlY2stY2lyY2xlJyk7XG5cbiAgY29uc3QgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ1RvZG9JdGVtLXRpdGxlJyk7XG4gIHRvZG9JdGVtVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG5cbiAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAvLyBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWJhY2tzcGFjZScsICdUb2RvSXRlbS1kZWxldGUtYnRuJyk7XG5cbiAgdG9kb0xpc3RNYWluUm93cy5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9JdGVtQ2hlY2tCb3gpO1xuICB0b2RvSXRlbUNoZWNrQm94LmFwcGVuZENoaWxkKGVtcHR5Q2hlY2tNYXJrKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0l0ZW1UaXRsZSk7XG5cbiAgcmV0dXJuIHRvZG9MaXN0TWFpblJvd3M7XG59XG5cbmV4cG9ydCB7IGxvYWRUb2RvSXRlbSB9O1xuXG4vLyBjb25zdCBjYXJkVmlld01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVG9kb0xpc3QtQ2FyZFZpZXctbWFpbicpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuLy8gY2FyZFZpZXdNYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9JdGVtKCd3b3Jrb3V0JykpO1xuXG5cblxuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSA9PiB7XG4gIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX2NhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIGxldCBfZHVlRGF0ZSA9ICcnO1xuICBsZXQgX2NyZWF0ZWREYXRlID0gJyc7XG4gIGxldCBfcHJpb3JpdHkgPSAnJztcbiAgbGV0IF9jb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU0VUXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBzZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgIF90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICB9XG4gIFxuICBjb25zdCBzZXRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIF9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkdWVEYXRlKSA9PiB7XG4gICAgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgY29uc3Qgc2V0Q3JlYXRlZERhdGUgPSAoY3JlYXRlZERhdGUpID0+IHtcbiAgICBfY3JlYXRlZERhdGUgPSBjcmVhdGVkRGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHRVRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiBfdGl0bGU7XG4gIH1cblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xuICB9XG4gIFxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NhdGVnb3J5O1xuICB9XG5cbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2R1ZURhdGU7XG4gIH1cblxuICBjb25zdCBnZXRDcmVhdGVkRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gX2NyZWF0ZWREYXRlO1xuICB9XG5cbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9wcmlvcml0eTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBpcyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9jb21wbGV0ZWQ7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ29tcGxldGVkXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBtYXJrQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIF9jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgdW5kb0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBfY29tcGxldGVkID0gZmFsc2U7XG4gIH0gXG5cbiAgXG4gIHJldHVybiB7XG4gICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXRDYXRlZ29yeSwgc2V0RHVlRGF0ZSwgc2V0Q3JlYXRlZERhdGUsIHNldFByaW9yaXR5LFxuICAgIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0Q2F0ZWdvcnksIGdldENyZWF0ZWREYXRlLCBnZXRQcmlvcml0eSwgZ2V0RHVlRGF0ZSxcbiAgICBpc0NvbXBsZXRlZCwgbWFya0NvbXBsZXRlZCwgdW5kb0NvbXBsZXRlZFxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG8gfTsgXG5cblxuXG4iLCJjb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcblxuICBjb25zdCBfdG9kb3MgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gIH07XG5cbiAgLy8gQWRkIFRvZG9cbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5ID0gdG9kby5nZXRDYXRlZ29yeSgpO1xuICAgIFxuICAgIC8vIGlmIGNhdGVnb3J5IGRvZXNuJ3QgZXhpc3QsIGFkZCBvbmVcbiAgICBpZiAoIShjYXRlZ29yeSBpbiBfdG9kb3MpKSB7XG4gICAgICBhZGROZXdDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfSBcbiAgICBcbiAgICBfdG9kb3NbY2F0ZWdvcnldLnB1c2godG9kbyk7XG4gIH1cblxuICBjb25zdCBhZGROZXdDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIF90b2Rvc1tjYXRlZ29yeV0gPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kb1RvRmluZCkgPT4ge1xuICAgIC8vIEl0ZXJhdGUgZXZlcnkgdG9kb3MgaW4gX3RvZG9zLCBpZiBmb3VuZCwgcmVtb3ZlIGl0LlxuICAgIGZvciAoY29uc3QgW2NhdGVnb3J5LCB0b2Rvc10gb2YgT2JqZWN0LmVudHJpZXMoX3RvZG9zKSkge1xuICAgICAgY29uc3QgdG9kb3NMZW5ndGggPSB0b2Rvcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gdG9kb3NbaV07XG4gICAgICAgIGNvbnN0IHNhbWVPYmplY3RzID0gT2JqZWN0LmlzKHRvZG9Ub0ZpbmQsIGN1cnJlbnRUb2RvKTtcbiAgICAgICAgaWYgKHNhbWVPYmplY3RzKSB7XG4gICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpOztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICB9ICBcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJldHVybiBkZWxldGUgX3RvZG9zW2NhdGVnb3J5XTtcbiAgfVxuXG4gIGNvbnN0IGdldEFsbFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFRvZG9zID0gW107XG4gICAgZm9yIChjb25zdCBbY2F0ZWdvcnksIHRvZG9zXSBvZiBPYmplY3QuZW50cmllcyhfdG9kb3MpKSB7XG4gICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBhbGxUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVG9kb3M7XG4gIH1cblxuICBjb25zdCBnZXRUb2RvcyA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJldHVybiBfdG9kb3NbY2F0ZWdvcnldO1xuICB9XG5cbiAgY29uc3QgZ2V0QWxsQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoX3RvZG9zKTtcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfVxuXG4gIGNvbnN0IHNvcnRUb2Rvc0R1ZURhdGUgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KCh0b2RvT25lLCB0b2RvVHdvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvT25lRHVlRGF0ZSA9IHRvZG9PbmUuZ2V0RHVlRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kb1R3b0R1ZURhdGUgPSB0b2RvVHdvLmdldER1ZURhdGUoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIE51bWJlcih0b2RvT25lRHVlRGF0ZSkgLSBOdW1iZXIodG9kb1R3b0R1ZURhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBUSElTIE5FRURTIFRPIEJFIEZJWEVELiBcbiAgICogSVQnUyBXT1JLSU5HLiBCVVQgVkVSWSBJTkVGRklDSUVOVCBDT0RFXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgY29uc3Qgc29ydFRvZG9zUHJpb3JpdHkgPSAodG9kb3MpID0+IHtcbiAgICBcbiAgICBjb25zdCBJTVBPUlRBTlQgPSAxO1xuICAgIGNvbnN0IEhJR0ggPSAyO1xuICAgIGNvbnN0IE1JRERMRSA9IDM7XG4gICAgY29uc3QgTE9XID0gNDtcblxuICAgIHRvZG9zLnNvcnQoKHRvZG9PbmUsIHRvZG9Ud28pID0+IHtcbiAgICAgIGxldCB0b2RvT25lUHJpb3JpdHkgPSB0b2RvT25lLmdldFByaW9yaXR5KCk7XG4gICAgICBsZXQgdG9kb1R3b1ByaW9yaXR5ID0gdG9kb1R3by5nZXRQcmlvcml0eSgpO1xuICAgICAgXG4gICAgICBzd2l0Y2ggKHRvZG9PbmVQcmlvcml0eSkge1xuICAgICAgICBjYXNlIFwiaW1wb3J0YW50XCI6XG4gICAgICAgICAgdG9kb09uZVByaW9yaXR5ID0gSU1QT1JUQU5UO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIHRvZG9PbmVQcmlvcml0eSA9IEhJR0g7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaWRkbGVcIjpcbiAgICAgICAgICB0b2RvT25lUHJpb3JpdHkgPSBNSURETEU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICB0b2RvT25lUHJpb3JpdHkgPSBMT1c7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodG9kb1R3b1ByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgXCJpbXBvcnRhbnRcIjpcbiAgICAgICAgICB0b2RvVHdvUHJpb3JpdHkgPSBJTVBPUlRBTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgdG9kb1R3b1ByaW9yaXR5ID0gSElHSDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAgIHRvZG9Ud29Qcmlvcml0eSA9IE1JRERMRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgIHRvZG9Ud29Qcmlvcml0eSA9IExPVztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICByZXR1cm4gdG9kb09uZVByaW9yaXR5IC0gdG9kb1R3b1ByaW9yaXR5O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc29ydFRvZG9zQ3JlYXRlZERhdGUgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5zb3J0KCh0b2RvT25lLCB0b2RvVHdvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvT25lQ3JlYXRlZERhdGUgPSB0b2RvT25lLmdldENyZWF0ZWREYXRlKCk7XG4gICAgICBjb25zdCB0b2RvVHdvQ3JlYXRlZERhdGUgPSB0b2RvVHdvLmdldENyZWF0ZWREYXRlKCk7XG4gICAgICBcbiAgICAgIHJldHVybiBOdW1iZXIodG9kb09uZUNyZWF0ZWREYXRlKSAtIE51bWJlcih0b2RvVHdvQ3JlYXRlZERhdGUpO1xuICAgIH0pO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIF90b2RvcyxcbiAgICBhZGRUb2RvLCBhZGROZXdDYXRlZ29yeSwgZGVsZXRlVG9kbywgZGVsZXRlQ2F0ZWdvcnksXG4gICAgZ2V0VG9kb3MsIGdldEFsbFRvZG9zLCBnZXRBbGxDYXRlZ29yaWVzLFxuICAgIHNvcnRUb2Rvc0R1ZURhdGUsIHNvcnRUb2Rvc0NyZWF0ZWREYXRlLCBzb3J0VG9kb3NQcmlvcml0eVxuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9MaXN0IH07XG4iLCJpbXBvcnQgJy4vY3NzL2xhbmRpbmdQYWdlLmNzcyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9Ub2RvL1RvZG8uanMnO1xuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuL1RvZG9MaXN0L1RvZG9MaXN0LmpzJztcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuL0Rpc3BsYXkvZGlzcGxheS5qcydcbmltcG9ydCB7IGxvYWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9EaXNwbGF5L21vZHVsZUxvYWRlcnMvbG9hZENhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlL3N0b3JhZ2VBdmFpbGFibGUnO1xuXG5jb25zdCBkaXNwbGF5ID0gRGlzcGxheSgpO1xuY29uc3QgdG9kb0xpc3QgPSBUb2RvTGlzdCgpO1xuXG50b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnVGhlIE9kaW4gUHJvamVjdCcpO1xudG9kb0xpc3QuYWRkTmV3Q2F0ZWdvcnkoJ1dvcmsnKTtcbnRvZG9MaXN0LmFkZE5ld0NhdGVnb3J5KCdMaWZlJyk7XG50b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnU2Nob29sJyk7XG50b2RvTGlzdC5hZGROZXdDYXRlZ29yeSgnR3ltJyk7XG5cbmNvbnNvbGUubG9nKHRvZG9MaXN0LmdldEFsbENhdGVnb3JpZXMoKSk7XG5cbmNvbnN0IGNyZWF0ZVRvZG9CdG4gPSBkaXNwbGF5LmdldENyZWF0ZVRvZG9CdG4oKTtcbmRpc3BsYXkuc3RhcnRMaXN0ZW5pbmdDbGlja0V2ZW50KGNyZWF0ZVRvZG9CdG4pO1xuXG5cbmRpc3BsYXkuc3RhcnRVbmZvbGRDYXRlZ29yeUJ0bigpO1xuXG5kaXNwbGF5LmFkZFRvZG8oJ1RoZSBPZGluIFByb2plY3QnKTtcbmRpc3BsYXkuYWRkVG9kbygnVG9kb0xpc3QnKTtcbmRpc3BsYXkuYWRkVG9kbygnaXNIYXJkLi4uLicpO1xuZGlzcGxheS5hZGRUb2RvKCdCdXQgY29uc2lzdGVuY3kgb3ZlciBlZmZpY2llbmN5Jyk7XG5kaXNwbGF5LmFkZFRvZG8oJ01ha2VzIGFsbCBkaWZmZXJlbmNlIHNvIEkgc2hhbGwgcHJvY2VlZCcpO1xuXG5kaXNwbGF5LnNob3dUb2RvRGV0YWlsc0NhcmRWaWV3KCk7XG5cblxuXG5cblxuLy8gZGlzcGxheS5zdGFydExpc3RlbmluZ0NsaWNrRXZlbnRcblxuXG4gIFxuXG5cblxuXG5cblxuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIHZhciBzdG9yYWdlO1xuICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdG9yYWdlQXZhaWxhYmxlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==