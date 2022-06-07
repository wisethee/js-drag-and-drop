"use strict";
(self["webpackChunkjs_drag_and_drop"] = self["webpackChunkjs_drag_and_drop"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n:root {\n  --background: #f7f8fa;\n  --text: #6a7998;\n  --column-1: #8833ff;\n  --column-2: #33bfff;\n  --column-3: #ffcb33;\n  --column-4: #29cc39;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--background);\n  color: var(--text);\n  font-family: \"Inter\", sans-serif;\n}\n\nh1.main-title {\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 58px;\n}\n\n.container {\n  margin: 0 auto;\n  display: flex;\n  place-content: center space-between;\n  gap: 32px;\n  max-width: 1040px;\n}\n.container-title {\n  padding: 96px 0;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 25%;\n}\n\n.column-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 24px;\n  isolation: isolate;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0px 0px 12px rgba(106, 121, 152, 0.12);\n  border-radius: 6px;\n  margin-bottom: 32px;\n}\n.column-header-description {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 1.2px;\n}\n.column-header-count {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 12px;\n  gap: 10px;\n  width: 32px;\n  height: 31px;\n  background: #ffffff;\n  border: 1px solid rgba(106, 121, 152, 0.12);\n  box-shadow: 0px 0px 6px rgba(106, 121, 152, 0.06);\n  border-radius: 16px;\n  /* Inside auto layout */\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n}\n.column-header-element {\n  position: absolute;\n  width: 3px;\n  height: 30px;\n  left: 0px;\n  top: 15px;\n  border-radius: 2px;\n  flex: none;\n  order: 2;\n  flex-grow: 0;\n  z-index: 2;\n}\n.column-header-element.column-1 {\n  background: var(--column-1);\n}\n.column-header-element.column-2 {\n  background: var(--column-2);\n}\n.column-header-element.column-3 {\n  background: var(--column-3);\n}\n.column-header-element.column-4 {\n  background: var(--column-4);\n}\n\n.item-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 20px;\n}\n\n.item {\n  height: fit-content;\n  padding: 0px 24px;\n  background: #ffffff;\n  box-shadow: 0px 0px 12px rgba(106, 121, 152, 0.12);\n  border-radius: 6px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 48px;\n  letter-spacing: 0.3px;\n}\n\n.column-button-group {\n  display: flex;\n  place-content: space-between;\n  margin-top: 32px;\n}\n\n.button {\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  margin: 0;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 24px;\n  border-radius: 6px;\n  overflow: visible;\n  font-weight: 700;\n  font-size: 12px;\n  color: var(--text);\n  background-color: transparent;\n}\n.button:hover {\n  background-color: rgba(106, 121, 152, 0.09);\n}\n.button:active {\n  background-color: rgba(106, 121, 152, 0.15);\n}\n\n.button.button-save {\n  display: none;\n}\n\n.column-add-container {\n  margin-top: 8px;\n  padding: 8px 24px;\n  border-radius: 6px;\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 242px;\n  display: none;\n}\n\n.add-item {\n  outline: 0;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.3px;\n}\n\n@media screen and (max-width: 1167px) {\n  .container {\n    padding: 32px;\n    max-width: 600px;\n    flex-wrap: wrap;\n    gap: 96px;\n  }\n  .container-title {\n    padding-top: 64px;\n    place-content: center;\n  }\n  h1.main-title {\n    text-align: center;\n  }\n  .column {\n    flex: 0 1 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,0EAAA;AAIA;;;;;;;;;;;;;;;;;;;;;;;EAuBE,SAAA;EACA,UAAA;AADF;;AAGA;;;;;;EAME,eAAA;EACA,mBAAA;AAAF;;AAEA;EACE,gBAAA;AACF;;AACA;;;EAGE,SAAA;AAEF;;AAAA;EACE,sBAAA;AAGF;;AADA;;;EAGE,mBAAA;AAIF;;AAFA;;EAEE,YAAA;EACA,eAAA;AAKF;;AAHA;EACE,SAAA;AAMF;;AAJA;EACE,yBAAA;EACA,iBAAA;AAOF;;AALA;;EAEE,UAAA;AAQF;;AAJA;EACE,qBAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAOF;;AAJA;EACE,SAAA;EACA,mCAAA;EACA,kBAAA;EACA,gCAAA;AAOF;;AAHA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAMF;;AAHA;EACE,cAAA;EACA,aAAA;EAGA,mCAAA;EACA,SAAA;EACA,iBAAA;AAIF;AAHE;EACE,eAAA;AAKJ;;AADA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AAIF;;AADA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,kDAAA;EACA,kBAAA;EACA,mBAAA;AAIF;AAHE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;AAKJ;AAHE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,2CAAA;EACA,iDAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAKJ;AAHE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,UAAA;AAKJ;AAHE;EACE,2BAAA;AAKJ;AAHE;EACE,2BAAA;AAKJ;AAHE;EACE,2BAAA;AAKJ;AAHE;EACE,2BAAA;AAKJ;;AADA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AAIF;;AADA;EACE,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kDAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;AAIF;;AADA;EACE,aAAA;EACA,4BAAA;EACA,gBAAA;AAIF;;AADA;EACE,kBAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,6CAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,6BAAA;AAIF;AAFE;EACE,2CAAA;AAIJ;AAFE;EACE,2CAAA;AAIJ;;AAAA;EACE,aAAA;AAGF;;AAAA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,YAAA;EACA,aAAA;AAGF;;AAAA;EACE,UAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;AAGF;;AAAA;EACE;IACE,aAAA;IACA,gBAAA;IACA,eAAA;IACA,SAAA;EAGF;EAFE;IACE,iBAAA;IACA,qBAAA;EAIJ;EAAA;IACE,kBAAA;EAEF;EACA;IACE,cAAA;EACF;AACF","sourcesContent":["/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap\");\n\n// Global\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect {\n  margin: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n\n// Components\n:root {\n  --background: #f7f8fa;\n  --text: #6a7998;\n  --column-1: #8833ff;\n  --column-2: #33bfff;\n  --column-3: #ffcb33;\n  --column-4: #29cc39;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--background);\n  color: var(--text);\n  font-family: \"Inter\", sans-serif;\n  // overflow-y: hidden;\n}\n\nh1.main-title {\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 58px;\n}\n\n.container {\n  margin: 0 auto;\n  display: flex;\n  // flex-wrap: wrap;\n  // align-items: center;\n  place-content: center space-between;\n  gap: 32px;\n  max-width: 1040px;\n  &-title {\n    padding: 96px 0;\n  }\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n  flex: 0 1 25%;\n}\n\n.column-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 24px;\n  isolation: isolate;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0px 0px 12px rgba(106, 121, 152, 0.12);\n  border-radius: 6px;\n  margin-bottom: 32px;\n  &-description {\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 15px;\n    letter-spacing: 1.2px;\n  }\n  &-count {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 8px 12px;\n    gap: 10px;\n    width: 32px;\n    height: 31px;\n    background: #ffffff;\n    border: 1px solid rgba(106, 121, 152, 0.12);\n    box-shadow: 0px 0px 6px rgba(106, 121, 152, 0.06);\n    border-radius: 16px;\n    /* Inside auto layout */\n    flex: none;\n    order: 1;\n    flex-grow: 0;\n    z-index: 1;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 15px;\n  }\n  &-element {\n    position: absolute;\n    width: 3px;\n    height: 30px;\n    left: 0px;\n    top: 15px;\n    border-radius: 2px;\n    flex: none;\n    order: 2;\n    flex-grow: 0;\n    z-index: 2;\n  }\n  &-element.column-1 {\n    background: var(--column-1);\n  }\n  &-element.column-2 {\n    background: var(--column-2);\n  }\n  &-element.column-3 {\n    background: var(--column-3);\n  }\n  &-element.column-4 {\n    background: var(--column-4);\n  }\n}\n\n.item-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 20px;\n}\n\n.item {\n  height: fit-content;\n  padding: 0px 24px;\n  background: #ffffff;\n  box-shadow: 0px 0px 12px rgba(106, 121, 152, 0.12);\n  border-radius: 6px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 48px;\n  letter-spacing: 0.3px;\n}\n\n.column-button-group {\n  display: flex;\n  place-content: space-between;\n  margin-top: 32px;\n}\n\n.button {\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  display: inline-block;\n  white-space: nowrap;\n  text-decoration: none;\n  vertical-align: baseline;\n  text-align: center;\n  margin: 0;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 24px;\n  border-radius: 6px;\n  overflow: visible;\n  font-weight: 700;\n  font-size: 12px;\n  color: var(--text);\n  background-color: transparent;\n  // transition: all 0.2s ease-in;\n  &:hover {\n    background-color: rgba(#6a7998, 0.09);\n  }\n  &:active {\n    background-color: rgba(#6a7998, 0.15);\n  }\n}\n\n.button.button-save {\n  display: none;\n}\n\n.column-add-container {\n  margin-top: 8px;\n  padding: 8px 24px;\n  border-radius: 6px;\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 242px;\n  display: none;\n}\n\n.add-item {\n  outline: 0;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.3px;\n}\n\n@media screen and (max-width: 1167px) {\n  .container {\n    padding: 32px;\n    max-width: 600px;\n    flex-wrap: wrap;\n    gap: 96px;\n    &-title {\n      padding-top: 64px;\n      place-content: center;\n    }\n  }\n\n  h1.main-title {\n    text-align: center;\n  }\n\n  .column {\n    flex: 0 1 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
var App = /** @class */ (function () {
    function App() {
        // HTML Elements
        this.itemList = document.querySelectorAll('.item-list');
        this.toDoList = document.getElementById('to-do-list');
        this.progressList = document.getElementById('progress-list');
        this.reviewList = document.getElementById('review-list');
        this.completedList = document.getElementById('completed-list');
        this.addBtns = document.querySelectorAll('.button-add');
        this.saveItemBtns = document.querySelectorAll('.button-save');
        this.addItemContainers = document.querySelectorAll('.column-add-container');
        this.addItems = document.querySelectorAll('.add-item');
        this.itemsCount = document.querySelectorAll('.column-header-count');
        // List Array
        this.itemListArray = [];
        this.toDoListArray = [];
        this.progressListArray = [];
        this.reviewListArray = [];
        this.completedListArray = [];
        this.updatedOnLoad = false;
        this.dragging = false;
        this.updateDOM();
        this.handleEvents();
    }
    App.prototype.updateDOM = function () {
        var _this = this;
        // Check localStorage
        if (!this.updatedOnLoad) {
            this.getSavedColumns();
        }
        // Backlog Column
        this.toDoList.textContent = '';
        this.toDoListArray.forEach(function (backlogItem, index) {
            _this.createItem(_this.toDoList, 0, backlogItem, index);
        });
        this.toDoListArray = this.filterArray(this.toDoListArray);
        // Progress Column
        this.progressList.textContent = '';
        this.progressListArray.forEach(function (progressItem, index) {
            _this.createItem(_this.progressList, 1, progressItem, index);
        });
        this.progressListArray = this.filterArray(this.progressListArray);
        // Complete Column
        this.reviewList.textContent = '';
        this.reviewListArray.forEach(function (completeItem, index) {
            _this.createItem(_this.reviewList, 2, completeItem, index);
        });
        this.reviewListArray = this.filterArray(this.reviewListArray);
        // On Hold Column
        this.completedList.textContent = '';
        this.completedListArray.forEach(function (onHoldItem, index) {
            _this.createItem(_this.completedList, 3, onHoldItem, index);
        });
        this.completedListArray = this.filterArray(this.completedListArray);
        this.updatedOnLoad = true;
        this.updateSavedColumns();
        this.updateCount();
    };
    App.prototype.handleEvents = function () {
        this.allowDrop();
        this.dropItem();
        this.dragEnter();
        this.makeItemEditable();
        this.showInputBox();
        this.hideInputBox();
        this.updateItem();
    };
    // Get Arrays from localStorage if available, set default values if not
    App.prototype.getSavedColumns = function () {
        if (localStorage.length > 0) {
            this.toDoListArray = JSON.parse(localStorage.toDoItems);
            this.progressListArray = JSON.parse(localStorage.progressItems);
            this.reviewListArray = JSON.parse(localStorage.reviewItems);
            this.completedListArray = JSON.parse(localStorage.completedItems);
        }
        else {
            this.toDoListArray = ['Release the course', 'Sit back and relax'];
            this.progressListArray = ['Work on projects', 'Listen to music'];
            this.reviewListArray = ['Being cool', 'Getting stuff done'];
            this.completedListArray = ['Being uncool'];
        }
    };
    // Set localStorage Arrays
    App.prototype.updateSavedColumns = function () {
        var _this = this;
        this.itemListArray = [
            this.toDoListArray,
            this.progressListArray,
            this.reviewListArray,
            this.completedListArray
        ];
        var arrayNames = ['toDo', 'progress', 'review', 'completed'];
        arrayNames.forEach(function (arrayName, index) {
            localStorage.setItem("".concat(arrayName, "Items"), JSON.stringify(_this.itemListArray[index]));
        });
    };
    App.prototype.filterArray = function (array) {
        var filteredArray = array.filter(function (item) { return item !== null; });
        return filteredArray;
    };
    // Create DOM Elements for each list item
    App.prototype.createItem = function (columnEl, column, item, index) {
        var listEl = document.createElement('span');
        listEl.textContent = item;
        listEl.id = index;
        listEl.classList.add('item');
        listEl.draggable = true;
        this.dragItem(listEl);
        columnEl.appendChild(listEl);
        listEl.id = index;
    };
    App.prototype.dragItem = function (element) {
        var _this = this;
        element.addEventListener('dragstart', function (event) {
            _this.draggedItem = event.target;
            _this.dragging = true;
        });
    };
    App.prototype.allowDrop = function () {
        this.itemList.forEach(function (item) {
            item.addEventListener('dragover', function (event) {
                event.preventDefault();
            });
        });
    };
    App.prototype.dropItem = function () {
        var _this = this;
        this.itemList.forEach(function (item) {
            item.addEventListener('drop', function (event) {
                event.preventDefault();
                _this.itemList.forEach(function (itemList) {
                    // itemList.classList.remove('over');
                });
                var parrentEl = _this.itemList[_this.currentColumn];
                parrentEl.appendChild(_this.draggedItem);
                _this.dragging = false;
                _this.rebuildArrays();
            });
        });
    };
    App.prototype.dragEnter = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            item.addEventListener('dragenter', function () {
                // item.classList.add('over');
                _this.currentColumn = index;
            });
        });
    };
    // Allow arrays to reflect drag and drop items
    App.prototype.rebuildArrays = function () {
        this.toDoListArray = [];
        this.progressListArray = [];
        this.reviewListArray = [];
        this.completedListArray = [];
        // console.log('before: ', this.toDoListArray);
        this.toDoListArray = Array.from(this.toDoList.children).map(function (item) { return item.textContent; });
        // console.log('after: ', this.toDoListArray);
        this.progressListArray = Array.from(this.progressList.children).map(function (item) { return item.textContent; });
        this.reviewListArray = Array.from(this.reviewList.children).map(function (item) { return item.textContent; });
        this.completedListArray = Array.from(this.completedList.children).map(function (item) { return item.textContent; });
        this.updateDOM();
    };
    // Show add item input box
    App.prototype.showInputBox = function () {
        var _this = this;
        this.addBtns.forEach(function (addBtn, index) {
            addBtn.addEventListener('click', function (event) {
                addBtn.style.visibility = 'hidden';
                _this.saveItemBtns[index].style.display = 'flex';
                _this.addItemContainers[index].style.display = 'block';
            });
        });
    };
    // Save and hide item input box
    App.prototype.hideInputBox = function () {
        var _this = this;
        this.saveItemBtns.forEach(function (saveItemBtn, index) {
            saveItemBtn.addEventListener('click', function (event) {
                saveItemBtn.style.display = 'none';
                _this.addBtns[index].style.visibility = 'visible';
                _this.addItemContainers[index].style.display = 'none';
                _this.addToColumn(index);
            });
        });
    };
    // Add text to localStorage
    App.prototype.addToColumn = function (index) {
        var itemText = this.addItems[index].textContent;
        var selectedArray = this.itemListArray[index];
        if (itemText) {
            selectedArray.push(itemText);
            this.updateDOM();
        }
        this.addItems[index].textContent = '';
    };
    // update item or delete
    App.prototype.updateItem = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            item.addEventListener('focusout', function (event) {
                var id = event.target.id;
                var selectedArray = _this.itemListArray[index];
                var selectedColumnEl = _this.itemList[index].children;
                if (!selectedColumnEl[id].textContent) {
                    delete selectedArray[id];
                }
                else {
                    selectedArray[id] = selectedColumnEl[id].textContent;
                }
                _this.updateDOM();
            });
        });
    };
    App.prototype.makeItemEditable = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            if (!_this.dragging) {
                item.addEventListener('click', function (event) {
                    event.target.setAttribute('contentEditable', 'true');
                });
            }
        });
    };
    App.prototype.updateCount = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            var itemEl = item.children.length;
            _this.itemsCount[index].textContent = itemEl;
        });
    };
    return App;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");


var app = new _app_app__WEBPACK_IMPORTED_MODULE_1__.App();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyw0S0FBNEssb0JBQW9CLHFLQUFxSyxjQUFj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QUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUJBQVcsR0FBbkI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBaUIsRUFBRSxLQUFVO1lBQ2xELElBQU0sTUFBTSxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM1EyQjtBQUNJO0FBRWhDLElBQU0sR0FBRyxHQUFHLElBQUkseUNBQUcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG1pbmlyZXNldC5jc3MgdjAuMC42IHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9taW5pcmVzZXQuY3NzICovXFxuaHRtbCxcXG5ib2R5LFxcbnAsXFxub2wsXFxudWwsXFxubGksXFxuZGwsXFxuZHQsXFxuZGQsXFxuYmxvY2txdW90ZSxcXG5maWd1cmUsXFxuZmllbGRzZXQsXFxubGVnZW5kLFxcbnRleHRhcmVhLFxcbnByZSxcXG5pZnJhbWUsXFxuaHIsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaWZyYW1lIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XFxuICAtLXRleHQ6ICM2YTc5OTg7XFxuICAtLWNvbHVtbi0xOiAjODgzM2ZmO1xcbiAgLS1jb2x1bW4tMjogIzMzYmZmZjtcXG4gIC0tY29sdW1uLTM6ICNmZmNiMzM7XFxuICAtLWNvbHVtbi00OiAjMjljYzM5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLm1haW4tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzMnB4O1xcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XFxufVxcbi5jb250YWluZXItdGl0bGUge1xcbiAgcGFkZGluZzogOTZweCAwO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAxIDI1JTtcXG59XFxuXFxuLmNvbHVtbi1oZWFkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDI0cHg7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG4uY29sdW1uLWhlYWRlci1kZXNjcmlwdGlvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxufVxcbi5jb2x1bW4taGVhZGVyLWNvdW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwNiwgMTIxLCAxNTIsIDAuMTIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgxMDYsIDEyMSwgMTUyLCAwLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAvKiBJbnNpZGUgYXV0byBsYXlvdXQgKi9cXG4gIGZsZXg6IG5vbmU7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxufVxcbi5jb2x1bW4taGVhZGVyLWVsZW1lbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsZXg6IG5vbmU7XFxuICBvcmRlcjogMjtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi5jb2x1bW4taGVhZGVyLWVsZW1lbnQuY29sdW1uLTEge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sdW1uLTEpO1xcbn1cXG4uY29sdW1uLWhlYWRlci1lbGVtZW50LmNvbHVtbi0yIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbHVtbi0yKTtcXG59XFxuLmNvbHVtbi1oZWFkZXItZWxlbWVudC5jb2x1bW4tMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2x1bW4tMyk7XFxufVxcbi5jb2x1bW4taGVhZGVyLWVsZW1lbnQuY29sdW1uLTQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sdW1uLTQpO1xcbn1cXG5cXG4uaXRlbS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgbWluLWhlaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDBweCAyNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDEwNiwgMTIxLCAxNTIsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xcbn1cXG5cXG4uY29sdW1uLWJ1dHRvbi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtaW4td2lkdGg6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4wOSk7XFxufVxcbi5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4xNSk7XFxufVxcblxcbi5idXR0b24uYnV0dG9uLXNhdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbHVtbi1hZGQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgd2lkdGg6IDI0MnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNjdweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA5NnB4O1xcbiAgfVxcbiAgLmNvbnRhaW5lci10aXRsZSB7XFxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBoMS5tYWluLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmNvbHVtbiB7XFxuICAgIGZsZXg6IDAgMSAxMDAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwRUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUdBOzs7Ozs7RUFNRSxlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7OztFQUdFLFNBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBREE7OztFQUdFLG1CQUFBO0FBSUY7O0FBRkE7O0VBRUUsWUFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLFNBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFMQTs7RUFFRSxVQUFBO0FBUUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUpBO0VBQ0UsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQU9GOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBR0EsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQUhFO0VBQ0UsZUFBQTtBQUtKOztBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlGO0FBSEU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBS0o7QUFIRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBS0o7QUFIRTtFQUNFLDJCQUFBO0FBS0o7QUFIRTtFQUNFLDJCQUFBO0FBS0o7QUFIRTtFQUNFLDJCQUFBO0FBS0o7QUFIRTtFQUNFLDJCQUFBO0FBS0o7O0FBREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUlGO0FBRkU7RUFDRSwyQ0FBQTtBQUlKO0FBRkU7RUFDRSwyQ0FBQTtBQUlKOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtFQUdGO0VBRkU7SUFDRSxpQkFBQTtJQUNBLHFCQUFBO0VBSUo7RUFBQTtJQUNFLGtCQUFBO0VBRUY7RUFDQTtJQUNFLGNBQUE7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBtaW5pcmVzZXQuY3NzIHYwLjAuNiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBHbG9iYWxcXG5odG1sLFxcbmJvZHksXFxucCxcXG5vbCxcXG51bCxcXG5saSxcXG5kbCxcXG5kdCxcXG5kZCxcXG5ibG9ja3F1b3RlLFxcbmZpZ3VyZSxcXG5maWVsZHNldCxcXG5sZWdlbmQsXFxudGV4dGFyZWEsXFxucHJlLFxcbmlmcmFtZSxcXG5ocixcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5pbWcsXFxudmlkZW8ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pZnJhbWUge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8vIENvbXBvbmVudHNcXG46cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XFxuICAtLXRleHQ6ICM2YTc5OTg7XFxuICAtLWNvbHVtbi0xOiAjODgzM2ZmO1xcbiAgLS1jb2x1bW4tMjogIzMzYmZmZjtcXG4gIC0tY29sdW1uLTM6ICNmZmNiMzM7XFxuICAtLWNvbHVtbi00OiAjMjljYzM5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxuICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbmgxLm1haW4tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzJweDtcXG4gIG1heC13aWR0aDogMTA0MHB4O1xcbiAgJi10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDk2cHggMDtcXG4gIH1cXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDAgMSAyNSU7XFxufVxcblxcbi5jb2x1bW4taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAyNHB4O1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDEwNiwgMTIxLCAxNTIsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gICYtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxuICB9XFxuICAmLWNvdW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4xMik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4wNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIC8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBvcmRlcjogMTtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgJi1lbGVtZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIG9yZGVyOiAyO1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuICAmLWVsZW1lbnQuY29sdW1uLTEge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2x1bW4tMSk7XFxuICB9XFxuICAmLWVsZW1lbnQuY29sdW1uLTIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2x1bW4tMik7XFxuICB9XFxuICAmLWVsZW1lbnQuY29sdW1uLTMge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2x1bW4tMyk7XFxuICB9XFxuICAmLWVsZW1lbnQuY29sdW1uLTQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2x1bW4tNCk7XFxuICB9XFxufVxcblxcbi5pdGVtLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBtaW4taGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMHB4IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMTA2LCAxMjEsIDE1MiwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxufVxcblxcbi5jb2x1bW4tYnV0dG9uLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi13aWR0aDogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzZhNzk5OCwgMC4wOSk7XFxuICB9XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzZhNzk5OCwgMC4xNSk7XFxuICB9XFxufVxcblxcbi5idXR0b24uYnV0dG9uLXNhdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbHVtbi1hZGQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgd2lkdGg6IDI0MnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNjdweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA5NnB4O1xcbiAgICAmLXRpdGxlIHtcXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcXG4gICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGgxLm1haW4tdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY29sdW1uIHtcXG4gICAgZmxleDogMCAxIDEwMCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cGRhdGVET00oKTtcbiAgICB0aGlzLmhhbmRsZUV2ZW50cygpO1xuICB9XG5cbiAgLy8gSFRNTCBFbGVtZW50c1xuICBwcml2YXRlIGl0ZW1MaXN0OiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWxpc3QnKTtcbiAgcHJpdmF0ZSB0b0RvTGlzdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8tbGlzdCcpO1xuICBwcml2YXRlIHByb2dyZXNzTGlzdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtbGlzdCcpO1xuICBwcml2YXRlIHJldmlld0xpc3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jldmlldy1saXN0Jyk7XG4gIHByaXZhdGUgY29tcGxldGVkTGlzdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkLWxpc3QnKTtcblxuICBwcml2YXRlIGFkZEJ0bnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tYWRkJyk7XG4gIHByaXZhdGUgc2F2ZUl0ZW1CdG5zOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLXNhdmUnKTtcbiAgcHJpdmF0ZSBhZGRJdGVtQ29udGFpbmVyczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbi1hZGQtY29udGFpbmVyJyk7XG4gIHByaXZhdGUgYWRkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLWl0ZW0nKTtcblxuICBwcml2YXRlIGl0ZW1zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uLWhlYWRlci1jb3VudCcpO1xuXG4gIC8vIExpc3QgQXJyYXlcbiAgcHJpdmF0ZSBpdGVtTGlzdEFycmF5OiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSB0b0RvTGlzdEFycmF5OiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBwcm9ncmVzc0xpc3RBcnJheTogYW55ID0gW107XG4gIHByaXZhdGUgcmV2aWV3TGlzdEFycmF5OiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBjb21wbGV0ZWRMaXN0QXJyYXk6IGFueSA9IFtdO1xuXG4gIHByaXZhdGUgdXBkYXRlZE9uTG9hZCA9IGZhbHNlO1xuXG4gIC8vIERyYWdcbiAgcHJpdmF0ZSBkcmFnZ2VkSXRlbTogYW55O1xuICBwcml2YXRlIGN1cnJlbnRDb2x1bW46IGFueTtcbiAgcHJpdmF0ZSBkcmFnZ2luZyA9IGZhbHNlO1xuXG4gIHVwZGF0ZURPTSgpIHtcbiAgICAvLyBDaGVjayBsb2NhbFN0b3JhZ2VcbiAgICBpZiAoIXRoaXMudXBkYXRlZE9uTG9hZCkge1xuICAgICAgdGhpcy5nZXRTYXZlZENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICAvLyBCYWNrbG9nIENvbHVtblxuICAgIHRoaXMudG9Eb0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aGlzLnRvRG9MaXN0QXJyYXkuZm9yRWFjaCgoYmFja2xvZ0l0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVJdGVtKHRoaXMudG9Eb0xpc3QsIDAsIGJhY2tsb2dJdGVtLCBpbmRleCk7XG4gICAgfSk7XG4gICAgdGhpcy50b0RvTGlzdEFycmF5ID0gdGhpcy5maWx0ZXJBcnJheSh0aGlzLnRvRG9MaXN0QXJyYXkpO1xuXG4gICAgLy8gUHJvZ3Jlc3MgQ29sdW1uXG4gICAgdGhpcy5wcm9ncmVzc0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aGlzLnByb2dyZXNzTGlzdEFycmF5LmZvckVhY2goKHByb2dyZXNzSXRlbTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUl0ZW0odGhpcy5wcm9ncmVzc0xpc3QsIDEsIHByb2dyZXNzSXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkgPSB0aGlzLmZpbHRlckFycmF5KHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkpO1xuXG4gICAgLy8gQ29tcGxldGUgQ29sdW1uXG4gICAgdGhpcy5yZXZpZXdMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGhpcy5yZXZpZXdMaXN0QXJyYXkuZm9yRWFjaCgoY29tcGxldGVJdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlSXRlbSh0aGlzLnJldmlld0xpc3QsIDIsIGNvbXBsZXRlSXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMucmV2aWV3TGlzdEFycmF5ID0gdGhpcy5maWx0ZXJBcnJheSh0aGlzLnJldmlld0xpc3RBcnJheSk7XG5cbiAgICAvLyBPbiBIb2xkIENvbHVtblxuICAgIHRoaXMuY29tcGxldGVkTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5LmZvckVhY2goKG9uSG9sZEl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVJdGVtKHRoaXMuY29tcGxldGVkTGlzdCwgMywgb25Ib2xkSXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5ID0gdGhpcy5maWx0ZXJBcnJheSh0aGlzLmNvbXBsZXRlZExpc3RBcnJheSk7XG5cbiAgICB0aGlzLnVwZGF0ZWRPbkxvYWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlU2F2ZWRDb2x1bW5zKCk7XG4gICAgdGhpcy51cGRhdGVDb3VudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudHMoKSB7XG4gICAgdGhpcy5hbGxvd0Ryb3AoKTtcbiAgICB0aGlzLmRyb3BJdGVtKCk7XG4gICAgdGhpcy5kcmFnRW50ZXIoKTtcbiAgICB0aGlzLm1ha2VJdGVtRWRpdGFibGUoKTtcbiAgICB0aGlzLnNob3dJbnB1dEJveCgpO1xuICAgIHRoaXMuaGlkZUlucHV0Qm94KCk7XG4gICAgdGhpcy51cGRhdGVJdGVtKCk7XG4gIH1cblxuICAvLyBHZXQgQXJyYXlzIGZyb20gbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZSwgc2V0IGRlZmF1bHQgdmFsdWVzIGlmIG5vdFxuICBwcml2YXRlIGdldFNhdmVkQ29sdW1ucygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG9Eb0xpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvRG9JdGVtcyk7XG4gICAgICB0aGlzLnByb2dyZXNzTGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvZ3Jlc3NJdGVtcyk7XG4gICAgICB0aGlzLnJldmlld0xpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnJldmlld0l0ZW1zKTtcbiAgICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY29tcGxldGVkSXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvRG9MaXN0QXJyYXkgPSBbJ1JlbGVhc2UgdGhlIGNvdXJzZScsICdTaXQgYmFjayBhbmQgcmVsYXgnXTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkgPSBbJ1dvcmsgb24gcHJvamVjdHMnLCAnTGlzdGVuIHRvIG11c2ljJ107XG4gICAgICB0aGlzLnJldmlld0xpc3RBcnJheSA9IFsnQmVpbmcgY29vbCcsICdHZXR0aW5nIHN0dWZmIGRvbmUnXTtcbiAgICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5ID0gWydCZWluZyB1bmNvb2wnXTtcbiAgICB9XG4gIH1cbiAgLy8gU2V0IGxvY2FsU3RvcmFnZSBBcnJheXNcbiAgcHJpdmF0ZSB1cGRhdGVTYXZlZENvbHVtbnMoKSB7XG4gICAgdGhpcy5pdGVtTGlzdEFycmF5ID0gW1xuICAgICAgdGhpcy50b0RvTGlzdEFycmF5LFxuICAgICAgdGhpcy5wcm9ncmVzc0xpc3RBcnJheSxcbiAgICAgIHRoaXMucmV2aWV3TGlzdEFycmF5LFxuICAgICAgdGhpcy5jb21wbGV0ZWRMaXN0QXJyYXlcbiAgICBdO1xuICAgIGNvbnN0IGFycmF5TmFtZXMgPSBbJ3RvRG8nLCAncHJvZ3Jlc3MnLCAncmV2aWV3JywgJ2NvbXBsZXRlZCddO1xuICAgIGFycmF5TmFtZXMuZm9yRWFjaCgoYXJyYXlOYW1lLCBpbmRleCkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGAke2FycmF5TmFtZX1JdGVtc2AsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbUxpc3RBcnJheVtpbmRleF0pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJBcnJheShhcnJheTogYW55KSB7XG4gICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGFycmF5LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtICE9PSBudWxsKTtcbiAgICByZXR1cm4gZmlsdGVyZWRBcnJheTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBET00gRWxlbWVudHMgZm9yIGVhY2ggbGlzdCBpdGVtXG4gIHByaXZhdGUgY3JlYXRlSXRlbShjb2x1bW5FbDogYW55LCBjb2x1bW46IGFueSwgaXRlbTogYW55LCBpbmRleDogYW55KSB7XG4gICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxpc3RFbC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbGlzdEVsLmlkID0gaW5kZXg7XG4gICAgbGlzdEVsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBsaXN0RWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmRyYWdJdGVtKGxpc3RFbCk7XG4gICAgY29sdW1uRWwuYXBwZW5kQ2hpbGQobGlzdEVsKTtcbiAgICBsaXN0RWwuaWQgPSBpbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgZHJhZ0l0ZW0oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmFnZ2VkSXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhbGxvd0Ryb3AoKSB7XG4gICAgdGhpcy5pdGVtTGlzdC5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wSXRlbSgpIHtcbiAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaXRlbUxpc3QuZm9yRWFjaCgoaXRlbUxpc3Q6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgLy8gaXRlbUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFycmVudEVsID0gdGhpcy5pdGVtTGlzdFt0aGlzLmN1cnJlbnRDb2x1bW5dO1xuICAgICAgICBwYXJyZW50RWwuYXBwZW5kQ2hpbGQodGhpcy5kcmFnZ2VkSXRlbSk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWJ1aWxkQXJyYXlzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhZ0VudGVyKCkge1xuICAgIHRoaXMuaXRlbUxpc3QuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyBpdGVtLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sdW1uID0gaW5kZXg7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFsbG93IGFycmF5cyB0byByZWZsZWN0IGRyYWcgYW5kIGRyb3AgaXRlbXNcbiAgcHJpdmF0ZSByZWJ1aWxkQXJyYXlzKCkge1xuICAgIHRoaXMudG9Eb0xpc3RBcnJheSA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkgPSBbXTtcbiAgICB0aGlzLnJldmlld0xpc3RBcnJheSA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5ID0gW107XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlOiAnLCB0aGlzLnRvRG9MaXN0QXJyYXkpO1xuXG4gICAgdGhpcy50b0RvTGlzdEFycmF5ID0gQXJyYXkuZnJvbSh0aGlzLnRvRG9MaXN0LmNoaWxkcmVuKS5tYXAoXG4gICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnRleHRDb250ZW50XG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXI6ICcsIHRoaXMudG9Eb0xpc3RBcnJheSk7XG5cbiAgICB0aGlzLnByb2dyZXNzTGlzdEFycmF5ID0gQXJyYXkuZnJvbSh0aGlzLnByb2dyZXNzTGlzdC5jaGlsZHJlbikubWFwKFxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICB0aGlzLnJldmlld0xpc3RBcnJheSA9IEFycmF5LmZyb20odGhpcy5yZXZpZXdMaXN0LmNoaWxkcmVuKS5tYXAoXG4gICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnRleHRDb250ZW50XG4gICAgKTtcblxuICAgIHRoaXMuY29tcGxldGVkTGlzdEFycmF5ID0gQXJyYXkuZnJvbSh0aGlzLmNvbXBsZXRlZExpc3QuY2hpbGRyZW4pLm1hcChcbiAgICAgIChpdGVtOiBhbnkpID0+IGl0ZW0udGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgdGhpcy51cGRhdGVET00oKTtcbiAgfVxuXG4gIC8vIFNob3cgYWRkIGl0ZW0gaW5wdXQgYm94XG4gIHByaXZhdGUgc2hvd0lucHV0Qm94KCkge1xuICAgIHRoaXMuYWRkQnRucy5mb3JFYWNoKChhZGRCdG46IEhUTUxFbGVtZW50LCBpbmRleDogYW55KSA9PiB7XG4gICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBhZGRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLnNhdmVJdGVtQnRuc1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdGhpcy5hZGRJdGVtQ29udGFpbmVyc1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNhdmUgYW5kIGhpZGUgaXRlbSBpbnB1dCBib3hcbiAgcHJpdmF0ZSBoaWRlSW5wdXRCb3goKSB7XG4gICAgdGhpcy5zYXZlSXRlbUJ0bnMuZm9yRWFjaCgoc2F2ZUl0ZW1CdG46IEhUTUxFbGVtZW50LCBpbmRleDogYW55KSA9PiB7XG4gICAgICBzYXZlSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNhdmVJdGVtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuYWRkQnRuc1tpbmRleF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgdGhpcy5hZGRJdGVtQ29udGFpbmVyc1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5hZGRUb0NvbHVtbihpbmRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFkZCB0ZXh0IHRvIGxvY2FsU3RvcmFnZVxuICBwcml2YXRlIGFkZFRvQ29sdW1uKGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBpdGVtVGV4dCA9IHRoaXMuYWRkSXRlbXNbaW5kZXhdLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHNlbGVjdGVkQXJyYXkgPSB0aGlzLml0ZW1MaXN0QXJyYXlbaW5kZXhdO1xuICAgIGlmIChpdGVtVGV4dCkge1xuICAgICAgc2VsZWN0ZWRBcnJheS5wdXNoKGl0ZW1UZXh0KTtcbiAgICAgIHRoaXMudXBkYXRlRE9NKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkSXRlbXNbaW5kZXhdLnRleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICAvLyB1cGRhdGUgaXRlbSBvciBkZWxldGVcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtKCkge1xuICAgIHRoaXMuaXRlbUxpc3QuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRBcnJheSA9IHRoaXMuaXRlbUxpc3RBcnJheVtpbmRleF07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uRWwgPSB0aGlzLml0ZW1MaXN0W2luZGV4XS5jaGlsZHJlbjtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkQ29sdW1uRWxbaWRdLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGVjdGVkQXJyYXlbaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkQXJyYXlbaWRdID0gc2VsZWN0ZWRDb2x1bW5FbFtpZF0udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVET00oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlSXRlbUVkaXRhYmxlKCkge1xuICAgIHRoaXMuaXRlbUxpc3QuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ291bnQoKSB7XG4gICAgdGhpcy5pdGVtTGlzdC5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUVsOiBhbnkgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIHRoaXMuaXRlbXNDb3VudFtpbmRleF0udGV4dENvbnRlbnQgPSBpdGVtRWw7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==