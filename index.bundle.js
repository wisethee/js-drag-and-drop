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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/trees.jpg */ "./src/assets/trees.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Quicksand&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n:root {\n  --column-1: #a2622d;\n  --column-2: #1b6161;\n  --column-3: #248224;\n  --column-4: #a22d22;\n}\n\nbody {\n  margin: 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: 50% 60%;\n  background-attachment: fixed;\n  color: white;\n  font-family: Quicksand, sans-serif;\n  overflow-y: hidden;\n}\n\nh1 {\n  letter-spacing: 2px;\n  text-shadow: 2px 2px 5px black;\n}\n\n.main-title {\n  text-align: center;\n  font-size: 3rem;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.drag-container {\n  margin: 20px;\n}\n\n.drag-list {\n  display: flex;\n  align-items: flex-start;\n}\n\n/* Columns */\n.drag-column {\n  flex: 1;\n  margin: 0 10px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  overflow-x: hidden;\n}\n\n.backlog-column .header,\n.backlog-column .solid,\n.backlog-column .solid:hover,\n.backlog-column .over {\n  background-color: var(--column-1);\n}\n\n.progress-column .header,\n.progress-column .solid,\n.progress-column .solid:hover,\n.progress-column .over {\n  background-color: var(--column-2);\n}\n\n.complete-column .header,\n.complete-column .solid,\n.complete-column .solid:hover,\n.complete-column .over {\n  background-color: var(--column-3);\n}\n\n.on-hold-column .header,\n.on-hold-column .solid,\n.on-hold-column .solid:hover,\n.on-hold-column .over {\n  background-color: var(--column-4);\n}\n\n/* Custom Scrollbar */\n.custom-scroll {\n  overflow-y: auto;\n  max-height: 52vh;\n}\n\n.custom-scroll::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.3);\n  margin-right: 5px;\n}\n\n.custom-scroll::-webkit-scrollbar {\n  width: 10px;\n}\n\n.custom-scroll::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  margin: 10px;\n}\n\n.header h1 {\n  font-size: 1.25rem;\n}\n\n/* Drag and Drop */\n.over {\n  padding: 50px 10px;\n}\n\n.drag-item-list {\n  min-height: 50px;\n}\n\n.drag-item {\n  margin: 10px;\n  padding: 10px;\n  height: fit-content;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.drag-item:focus {\n  outline: none;\n  background-color: white;\n  color: black;\n}\n\n/* Add Button Group */\n.add-btn-group {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-btn {\n  margin: 10px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n  border-radius: 5px;\n  transition: all 0.3s ease-in;\n  user-select: none;\n}\n\n.add-btn:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: black;\n}\n\n.add-btn:active {\n  transform: scale(0.97);\n}\n\n.solid {\n  display: none;\n}\n\n.solid:hover {\n  transition: unset;\n  filter: brightness(95%);\n  color: white;\n}\n\n.plus-sign {\n  font-size: 1.5rem;\n  margin-right: 5px;\n  position: relative;\n  top: -3px;\n}\n\n.add-container {\n  margin: 10px;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.9);\n  min-height: 100px;\n  display: none;\n}\n\n.add-item {\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background-color: white;\n  border-radius: 10px;\n  margin: 5px auto;\n  resize: none;\n  color: black;\n  padding: 10px;\n}\n\n.add-item:focus {\n  outline: none;\n}\n\n/* Media Query: Laptop */\n@media screen and (max-width: 1800px) {\n  .main-title {\n    font-size: 2rem;\n  }\n}\n/* Media Query: Large Smartphone (Vertical) */\n@media screen and (max-width: 600px) {\n  body {\n    overflow-y: auto;\n  }\n  .drag-container {\n    margin: 0;\n  }\n  .drag-list {\n    display: block;\n  }\n  .drag-column {\n    margin: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,0EAAA;AAIA;;;;;;;;;;;;;;;;;;;;;;;EAuBE,SAAA;EACA,UAAA;AADF;;AAGA;;;;;;EAME,eAAA;EACA,mBAAA;AAAF;;AAEA;EACE,gBAAA;AACF;;AACA;;;EAGE,SAAA;AAEF;;AAAA;EACE,sBAAA;AAGF;;AADA;;;EAGE,mBAAA;AAIF;;AAFA;;EAEE,YAAA;EACA,eAAA;AAKF;;AAHA;EACE,SAAA;AAMF;;AAJA;EACE,yBAAA;EACA,iBAAA;AAOF;;AALA;;EAEE,UAAA;AAQF;;AAJA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAOF;;AAJA;EACE,SAAA;EACA,mDAAA;EACA,sBAAA;EACA,4BAAA;EACA,4BAAA;EACA,YAAA;EACA,kCAAA;EACA,kBAAA;AAOF;;AAJA;EACE,mBAAA;EACA,8BAAA;AAOF;;AAJA;EACE,kBAAA;EACA,eAAA;AAOF;;AAJA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;AAOF;;AAJA;EACE,YAAA;AAOF;;AAJA;EACE,aAAA;EACA,uBAAA;AAOF;;AAJA,YAAA;AACA;EACE,OAAA;EACA,cAAA;EACA,kBAAA;EACA,oCAAA;EACA,mBAAA;EACA,kBAAA;AAOF;;AAJA;;;;EAIE,iCAAA;AAOF;;AAJA;;;;EAIE,iCAAA;AAOF;;AAJA;;;;EAIE,iCAAA;AAOF;;AAJA;;;;EAIE,iCAAA;AAOF;;AAJA,qBAAA;AACA;EACE,gBAAA;EACA,gBAAA;AAOF;;AAJA;EACE,4CAAA;EACA,mBAAA;EACA,0CAAA;EACA,iBAAA;AAOF;;AAJA;EACE,WAAA;AAOF;;AAJA;EACE,mBAAA;EACA,4CAAA;EACA,oCAAA;AAOF;;AAJA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAOF;;AAJA;EACE,kBAAA;AAOF;;AAJA,kBAAA;AACA;EACE,kBAAA;AAOF;;AAJA;EACE,gBAAA;AAOF;;AAJA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,oCAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;AAOF;;AAJA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AAOF;;AAJA,qBAAA;AACA;EACE,aAAA;EACA,8BAAA;AAOF;;AAJA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,4BAAA;EACA,iBAAA;AAOF;;AAJA;EACE,0CAAA;EACA,YAAA;AAOF;;AAJA;EACE,sBAAA;AAOF;;AAJA;EACE,aAAA;AAOF;;AAJA;EACE,iBAAA;EACA,uBAAA;EACA,YAAA;AAOF;;AAJA;EACE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,SAAA;AAOF;;AAJA;EACE,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,0CAAA;EACA,iBAAA;EACA,aAAA;AAOF;;AAJA;EACE,WAAA;EACA,iBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;AAOF;;AAJA;EACE,aAAA;AAOF;;AAJA,wBAAA;AACA;EACE;IACE,eAAA;EAOF;AACF;AAJA,6CAAA;AACA;EACE;IACE,gBAAA;EAMF;EAHA;IACE,SAAA;EAKF;EAFA;IACE,cAAA;EAIF;EADA;IACE,YAAA;EAGF;AACF","sourcesContent":["/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand&display=swap\");\n\n// Global\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect {\n  margin: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n\n// Components\n:root {\n  --column-1: #a2622d;\n  --column-2: #1b6161;\n  --column-3: #248224;\n  --column-4: #a22d22;\n}\n\nbody {\n  margin: 0;\n  background: url(\"/src/assets/trees.jpg\");\n  background-size: cover;\n  background-position: 50% 60%;\n  background-attachment: fixed;\n  color: white;\n  font-family: Quicksand, sans-serif;\n  overflow-y: hidden;\n}\n\nh1 {\n  letter-spacing: 2px;\n  text-shadow: 2px 2px 5px black;\n}\n\n.main-title {\n  text-align: center;\n  font-size: 3rem;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.drag-container {\n  margin: 20px;\n}\n\n.drag-list {\n  display: flex;\n  align-items: flex-start;\n}\n\n/* Columns */\n.drag-column {\n  flex: 1;\n  margin: 0 10px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  overflow-x: hidden;\n}\n\n.backlog-column .header,\n.backlog-column .solid,\n.backlog-column .solid:hover,\n.backlog-column .over {\n  background-color: var(--column-1);\n}\n\n.progress-column .header,\n.progress-column .solid,\n.progress-column .solid:hover,\n.progress-column .over {\n  background-color: var(--column-2);\n}\n\n.complete-column .header,\n.complete-column .solid,\n.complete-column .solid:hover,\n.complete-column .over {\n  background-color: var(--column-3);\n}\n\n.on-hold-column .header,\n.on-hold-column .solid,\n.on-hold-column .solid:hover,\n.on-hold-column .over {\n  background-color: var(--column-4);\n}\n\n/* Custom Scrollbar */\n.custom-scroll {\n  overflow-y: auto;\n  max-height: 52vh;\n}\n\n.custom-scroll::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.3);\n  margin-right: 5px;\n}\n\n.custom-scroll::-webkit-scrollbar {\n  width: 10px;\n}\n\n.custom-scroll::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  margin: 10px;\n}\n\n.header h1 {\n  font-size: 1.25rem;\n}\n\n/* Drag and Drop */\n.over {\n  padding: 50px 10px;\n}\n\n.drag-item-list {\n  min-height: 50px;\n}\n\n.drag-item {\n  margin: 10px;\n  padding: 10px;\n  height: fit-content;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.drag-item:focus {\n  outline: none;\n  background-color: white;\n  color: black;\n}\n\n/* Add Button Group */\n.add-btn-group {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-btn {\n  margin: 10px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: fit-content;\n  border-radius: 5px;\n  transition: all 0.3s ease-in;\n  user-select: none;\n}\n\n.add-btn:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: black;\n}\n\n.add-btn:active {\n  transform: scale(0.97);\n}\n\n.solid {\n  display: none;\n}\n\n.solid:hover {\n  transition: unset;\n  filter: brightness(95%);\n  color: white;\n}\n\n.plus-sign {\n  font-size: 1.5rem;\n  margin-right: 5px;\n  position: relative;\n  top: -3px;\n}\n\n.add-container {\n  margin: 10px;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.9);\n  min-height: 100px;\n  display: none;\n}\n\n.add-item {\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background-color: white;\n  border-radius: 10px;\n  margin: 5px auto;\n  resize: none;\n  color: black;\n  padding: 10px;\n}\n\n.add-item:focus {\n  outline: none;\n}\n\n/* Media Query: Laptop */\n@media screen and (max-width: 1800px) {\n  .main-title {\n    font-size: 2rem;\n  }\n}\n\n/* Media Query: Large Smartphone (Vertical) */\n@media screen and (max-width: 600px) {\n  body {\n    overflow-y: auto;\n  }\n\n  .drag-container {\n    margin: 0;\n  }\n\n  .drag-list {\n    display: block;\n  }\n\n  .drag-column {\n    margin: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
        this.addBtns = document.querySelectorAll('.add-btn:not(.solid)');
        this.saveItemBtns = document.querySelectorAll('.solid');
        this.addItemContainers = document.querySelectorAll('.add-container');
        this.addItems = document.querySelectorAll('.add-item');
        // Item List
        this.itemLists = document.querySelectorAll('.drag-item-list');
        this.backlogList = document.getElementById('backlog-list');
        this.progressList = document.getElementById('progress-list');
        this.completeList = document.getElementById('complete-list');
        this.onHoldList = document.getElementById('on-hold-list');
        // Items
        this.updatedOnLoad = false;
        // Initialize Arrays
        this.backlogListArray = [];
        this.progressListArray = [];
        this.completeListArray = [];
        this.onHoldListArray = [];
        this.listArrays = [];
        this.dragging = false;
        this.handleDragAndDropEvents();
        this.handleButtonEvents();
    }
    // Get arrays from localStorage if available
    App.prototype.getSavedColumns = function () {
        if (localStorage.getItem('backlogItems')) {
            this.backlogListArray = JSON.parse(localStorage.backlogItems);
            this.progressListArray = JSON.parse(localStorage.progressItems);
            this.completeListArray = JSON.parse(localStorage.completeItems);
            this.onHoldListArray = JSON.parse(localStorage.onHoldItems);
        }
        else {
            this.backlogListArray = ['Release the course', 'Sit back and relax'];
            this.progressListArray = ['Work on projects', 'Listen to music'];
            this.completeListArray = ['Being cool', 'Getting stuff done'];
            this.onHoldListArray = ['Being uncool'];
        }
    };
    // Update columns in DOM, reset HTML, filter array, update localStorage
    App.prototype.updateDOM = function () {
        var _this = this;
        // Check localStorage
        if (!this.updatedOnLoad) {
            this.getSavedColumns();
        }
        // Backlog Column
        this.backlogList.textContent = '';
        this.backlogListArray.forEach(function (backlogItem, index) {
            _this.createItemEl(_this.backlogList, 0, backlogItem, index);
        });
        this.backlogListArray = this.filterArray(this.backlogListArray);
        // Progress Column
        this.progressList.textContent = '';
        this.progressListArray.forEach(function (progressItem, index) {
            _this.createItemEl(_this.progressList, 1, progressItem, index);
        });
        this.progressListArray = this.filterArray(this.progressListArray);
        // Complete Column
        this.completeList.textContent = '';
        this.completeListArray.forEach(function (completeItem, index) {
            _this.createItemEl(_this.completeList, 2, completeItem, index);
        });
        this.completeListArray = this.filterArray(this.completeListArray);
        // On Hold Column
        this.onHoldList.textContent = '';
        this.onHoldListArray.forEach(function (onHoldItem, index) {
            _this.createItemEl(_this.onHoldList, 3, onHoldItem, index);
        });
        this.onHoldListArray = this.filterArray(this.onHoldListArray);
        this.updatedOnLoad = true;
        this.updateSavedColumns();
    };
    // Set localStorage array
    App.prototype.updateSavedColumns = function () {
        var _this = this;
        this.listArrays = [
            this.backlogListArray,
            this.progressListArray,
            this.completeListArray,
            this.onHoldListArray
        ];
        var arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
        arrayNames.forEach(function (arrayName, index) {
            localStorage.setItem("".concat(arrayName, "Items"), JSON.stringify(_this.listArrays[index]));
        });
    };
    // Create DOM ELements for each list item
    App.prototype.createItemEl = function (columnEl, column, item, index) {
        // List Item
        var listEl = document.createElement('li');
        listEl.classList.add('drag-item');
        listEl.textContent = item;
        listEl.draggable = true;
        this.dragItem(listEl);
        columnEl.appendChild(listEl);
        // listEl.setAttribute('contentEditable', 'true');
        listEl.id = index;
    };
    App.prototype.handleDragAndDropEvents = function () {
        this.allowDrop();
        this.dropItem();
        this.dragEnter();
        this.makeItemEditable();
    };
    App.prototype.handleButtonEvents = function () {
        this.showInputBox();
        this.hideInputBox();
        this.updateItem();
    };
    App.prototype.dragItem = function (element) {
        var _this = this;
        element.addEventListener('dragstart', function (event) {
            _this.draggedItem = event.target;
            _this.dragging = true;
        });
    };
    App.prototype.allowDrop = function () {
        this.itemLists.forEach(function (itemList) {
            itemList.addEventListener('dragover', function (event) {
                event.preventDefault();
            });
        });
    };
    App.prototype.dropItem = function () {
        var _this = this;
        this.itemLists.forEach(function (itemList) {
            itemList.addEventListener('drop', function (event) {
                event.preventDefault();
                _this.itemLists.forEach(function (itemList) {
                    itemList.classList.remove('over');
                });
                var parrentEl = _this.itemLists[_this.currentColumn];
                parrentEl.appendChild(_this.draggedItem);
                _this.dragging = false;
                _this.rebuildArrays();
            });
        });
    };
    App.prototype.dragEnter = function () {
        var _this = this;
        this.itemLists.forEach(function (itemList, index) {
            itemList.addEventListener('dragenter', function () {
                itemList.classList.add('over');
                _this.currentColumn = index;
            });
        });
    };
    // Allow arrays to reflect drag and drop items
    App.prototype.rebuildArrays = function () {
        this.backlogListArray = [];
        this.completeListArray = [];
        this.progressListArray = [];
        this.onHoldListArray = [];
        this.backlogListArray = Array.from(this.backlogList.children).map(function (item) { return item.textContent; });
        this.progressListArray = Array.from(this.progressList.children).map(function (item) { return item.textContent; });
        this.completeListArray = Array.from(this.completeList.children).map(function (item) { return item.textContent; });
        this.onHoldListArray = Array.from(this.onHoldList.children).map(function (item) { return item.textContent; });
        this.updateDOM();
    };
    // Show add item input box
    App.prototype.showInputBox = function () {
        var _this = this;
        this.addBtns.forEach(function (addBtn, index) {
            addBtn.addEventListener('click', function (event) {
                addBtn.style.visibility = 'hidden';
                _this.saveItemBtns[index].style.display = 'flex';
                _this.addItemContainers[index].style.display = 'flex';
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
        var selectedArray = this.listArrays[index];
        if (itemText) {
            selectedArray.push(itemText);
            this.updateDOM();
        }
        this.addItems[index].textContent = '';
    };
    // update item or delete
    App.prototype.updateItem = function () {
        var _this = this;
        this.itemLists.forEach(function (itemList, index) {
            itemList.addEventListener('focusout', function (event) {
                var id = event.target.id;
                var selectedArray = _this.listArrays[index];
                var selectedColumnEl = _this.itemLists[index].children;
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
    // Filter arrays to remove empty items
    App.prototype.filterArray = function (array) {
        return array.filter(function (item) { return item !== null; });
    };
    App.prototype.makeItemEditable = function () {
        var _this = this;
        this.itemLists.forEach(function (itemList, index) {
            if (!_this.dragging) {
                itemList.addEventListener('click', function (event) {
                    event.target.setAttribute('contentEditable', 'true');
                });
            }
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
app.updateDOM();


/***/ }),

/***/ "./src/assets/trees.jpg":
/*!******************************!*\
  !*** ./src/assets/trees.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b45a8e13f0bf292dd02.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxRQUFRLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxzTEFBc0wscUtBQXFLLGNBQWMsZUFBZSxHQUFHLCtCQUErQixvQkFB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Q0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFVO29CQUM1QyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6UTJCO0FBQ0k7QUFFaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSx5Q0FBRyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtZHJhZy1hbmQtZHJvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWRyYWctYW5kLWRyb3AvLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9qcy1kcmFnLWFuZC1kcm9wLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL3RyZWVzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBtaW5pcmVzZXQuY3NzIHYwLjAuNiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL1xcbmh0bWwsXFxuYm9keSxcXG5wLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmRsLFxcbmR0LFxcbmRkLFxcbmJsb2NrcXVvdGUsXFxuZmlndXJlLFxcbmZpZWxkc2V0LFxcbmxlZ2VuZCxcXG50ZXh0YXJlYSxcXG5wcmUsXFxuaWZyYW1lLFxcbmhyLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlmcmFtZSB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2x1bW4tMTogI2EyNjIyZDtcXG4gIC0tY29sdW1uLTI6ICMxYjYxNjE7XFxuICAtLWNvbHVtbi0zOiAjMjQ4MjI0O1xcbiAgLS1jb2x1bW4tNDogI2EyMmQyMjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA2MCU7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuaDEge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZHJhZy1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZHJhZy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLyogQ29sdW1ucyAqL1xcbi5kcmFnLWNvbHVtbiB7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uYmFja2xvZy1jb2x1bW4gLmhlYWRlcixcXG4uYmFja2xvZy1jb2x1bW4gLnNvbGlkLFxcbi5iYWNrbG9nLWNvbHVtbiAuc29saWQ6aG92ZXIsXFxuLmJhY2tsb2ctY29sdW1uIC5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbHVtbi0xKTtcXG59XFxuXFxuLnByb2dyZXNzLWNvbHVtbiAuaGVhZGVyLFxcbi5wcm9ncmVzcy1jb2x1bW4gLnNvbGlkLFxcbi5wcm9ncmVzcy1jb2x1bW4gLnNvbGlkOmhvdmVyLFxcbi5wcm9ncmVzcy1jb2x1bW4gLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sdW1uLTIpO1xcbn1cXG5cXG4uY29tcGxldGUtY29sdW1uIC5oZWFkZXIsXFxuLmNvbXBsZXRlLWNvbHVtbiAuc29saWQsXFxuLmNvbXBsZXRlLWNvbHVtbiAuc29saWQ6aG92ZXIsXFxuLmNvbXBsZXRlLWNvbHVtbiAub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2x1bW4tMyk7XFxufVxcblxcbi5vbi1ob2xkLWNvbHVtbiAuaGVhZGVyLFxcbi5vbi1ob2xkLWNvbHVtbiAuc29saWQsXFxuLm9uLWhvbGQtY29sdW1uIC5zb2xpZDpob3ZlcixcXG4ub24taG9sZC1jb2x1bW4gLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sdW1uLTQpO1xcbn1cXG5cXG4vKiBDdXN0b20gU2Nyb2xsYmFyICovXFxuLmN1c3RvbS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDUydmg7XFxufVxcblxcbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4vKiBEcmFnIGFuZCBEcm9wICovXFxuLm92ZXIge1xcbiAgcGFkZGluZzogNTBweCAxMHB4O1xcbn1cXG5cXG4uZHJhZy1pdGVtLWxpc3Qge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmRyYWctaXRlbSB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyYWctaXRlbTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFkZCBCdXR0b24gR3JvdXAgKi9cXG4uYWRkLWJ0bi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hZGQtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xcbn1cXG5cXG4uc29saWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNvbGlkOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IHVuc2V0O1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbHVzLXNpZ24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTNweDtcXG59XFxuXFxuLmFkZC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICByZXNpemU6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWl0ZW06Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogTWVkaWEgUXVlcnk6IExhcHRvcCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xcbiAgLm1haW4tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi8qIE1lZGlhIFF1ZXJ5OiBMYXJnZSBTbWFydHBob25lIChWZXJ0aWNhbCkgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxuICAuZHJhZy1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuZHJhZy1saXN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuZHJhZy1jb2x1bW4ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBFQUFBO0FBSUE7Ozs7Ozs7Ozs7Ozs7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TUY7RUFIQTtJQUNFLFNBQUE7RUFLRjtFQUZBO0lBQ0UsY0FBQTtFQUlGO0VBREE7SUFDRSxZQUFBO0VBR0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbWluaXJlc2V0LmNzcyB2MC4wLjYgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vamd0aG1zL21pbmlyZXNldC5jc3MgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vLyBHbG9iYWxcXG5odG1sLFxcbmJvZHksXFxucCxcXG5vbCxcXG51bCxcXG5saSxcXG5kbCxcXG5kdCxcXG5kZCxcXG5ibG9ja3F1b3RlLFxcbmZpZ3VyZSxcXG5maWVsZHNldCxcXG5sZWdlbmQsXFxudGV4dGFyZWEsXFxucHJlLFxcbmlmcmFtZSxcXG5ocixcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5pbWcsXFxudmlkZW8ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pZnJhbWUge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8vIENvbXBvbmVudHNcXG46cm9vdCB7XFxuICAtLWNvbHVtbi0xOiAjYTI2MjJkO1xcbiAgLS1jb2x1bW4tMjogIzFiNjE2MTtcXG4gIC0tY29sdW1uLTM6ICMyNDgyMjQ7XFxuICAtLWNvbHVtbi00OiAjYTIyZDIyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9hc3NldHMvdHJlZXMuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDYwJTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogUXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5oMSB7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kcmFnLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5kcmFnLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBDb2x1bW5zICovXFxuLmRyYWctY29sdW1uIHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5iYWNrbG9nLWNvbHVtbiAuaGVhZGVyLFxcbi5iYWNrbG9nLWNvbHVtbiAuc29saWQsXFxuLmJhY2tsb2ctY29sdW1uIC5zb2xpZDpob3ZlcixcXG4uYmFja2xvZy1jb2x1bW4gLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sdW1uLTEpO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtY29sdW1uIC5oZWFkZXIsXFxuLnByb2dyZXNzLWNvbHVtbiAuc29saWQsXFxuLnByb2dyZXNzLWNvbHVtbiAuc29saWQ6aG92ZXIsXFxuLnByb2dyZXNzLWNvbHVtbiAub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2x1bW4tMik7XFxufVxcblxcbi5jb21wbGV0ZS1jb2x1bW4gLmhlYWRlcixcXG4uY29tcGxldGUtY29sdW1uIC5zb2xpZCxcXG4uY29tcGxldGUtY29sdW1uIC5zb2xpZDpob3ZlcixcXG4uY29tcGxldGUtY29sdW1uIC5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbHVtbi0zKTtcXG59XFxuXFxuLm9uLWhvbGQtY29sdW1uIC5oZWFkZXIsXFxuLm9uLWhvbGQtY29sdW1uIC5zb2xpZCxcXG4ub24taG9sZC1jb2x1bW4gLnNvbGlkOmhvdmVyLFxcbi5vbi1ob2xkLWNvbHVtbiAub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2x1bW4tNCk7XFxufVxcblxcbi8qIEN1c3RvbSBTY3JvbGxiYXIgKi9cXG4uY3VzdG9tLXNjcm9sbCB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNTJ2aDtcXG59XFxuXFxuLmN1c3RvbS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi8qIERyYWcgYW5kIERyb3AgKi9cXG4ub3ZlciB7XFxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxufVxcblxcbi5kcmFnLWl0ZW0tbGlzdCB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZHJhZy1pdGVtIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJhZy1pdGVtOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQWRkIEJ1dHRvbiBHcm91cCAqL1xcbi5hZGQtYnRuLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFkZC1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XFxufVxcblxcbi5zb2xpZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc29saWQ6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogdW5zZXQ7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsdXMtc2lnbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtM3B4O1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtaXRlbTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyeTogTGFwdG9wICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XFxuICAubWFpbi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuXFxuLyogTWVkaWEgUXVlcnk6IExhcmdlIFNtYXJ0cGhvbmUgKFZlcnRpY2FsKSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG5cXG4gIC5kcmFnLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5kcmFnLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5kcmFnLWNvbHVtbiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlRHJhZ0FuZERyb3BFdmVudHMoKTtcbiAgICB0aGlzLmhhbmRsZUJ1dHRvbkV2ZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRCdG5zOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLWJ0bjpub3QoLnNvbGlkKScpO1xuICBwcml2YXRlIHNhdmVJdGVtQnRuczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvbGlkJyk7XG4gIHByaXZhdGUgYWRkSXRlbUNvbnRhaW5lcnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtY29udGFpbmVyJyk7XG4gIHByaXZhdGUgYWRkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLWl0ZW0nKTtcblxuICAvLyBJdGVtIExpc3RcbiAgcHJpdmF0ZSBpdGVtTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZy1pdGVtLWxpc3QnKTtcbiAgcHJpdmF0ZSBiYWNrbG9nTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrbG9nLWxpc3QnKTtcbiAgcHJpdmF0ZSBwcm9ncmVzc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtbGlzdCcpO1xuICBwcml2YXRlIGNvbXBsZXRlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZS1saXN0Jyk7XG4gIHByaXZhdGUgb25Ib2xkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbi1ob2xkLWxpc3QnKTtcblxuICAvLyBJdGVtc1xuICBwcml2YXRlIHVwZGF0ZWRPbkxvYWQgPSBmYWxzZTtcblxuICAvLyBJbml0aWFsaXplIEFycmF5c1xuICBwcml2YXRlIGJhY2tsb2dMaXN0QXJyYXk6IGFueSA9IFtdO1xuICBwcml2YXRlIHByb2dyZXNzTGlzdEFycmF5OiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBjb21wbGV0ZUxpc3RBcnJheTogYW55ID0gW107XG4gIHByaXZhdGUgb25Ib2xkTGlzdEFycmF5OiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBsaXN0QXJyYXlzOiBhbnkgPSBbXTtcblxuICAvLyBEcmFnXG4gIHByaXZhdGUgZHJhZ2dlZEl0ZW06IGFueTtcbiAgcHJpdmF0ZSBjdXJyZW50Q29sdW1uOiBhbnk7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAvLyBHZXQgYXJyYXlzIGZyb20gbG9jYWxTdG9yYWdlIGlmIGF2YWlsYWJsZVxuICBwcml2YXRlIGdldFNhdmVkQ29sdW1ucygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JhY2tsb2dJdGVtcycpKSB7XG4gICAgICB0aGlzLmJhY2tsb2dMaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5iYWNrbG9nSXRlbXMpO1xuICAgICAgdGhpcy5wcm9ncmVzc0xpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2dyZXNzSXRlbXMpO1xuICAgICAgdGhpcy5jb21wbGV0ZUxpc3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNvbXBsZXRlSXRlbXMpO1xuICAgICAgdGhpcy5vbkhvbGRMaXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5vbkhvbGRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFja2xvZ0xpc3RBcnJheSA9IFsnUmVsZWFzZSB0aGUgY291cnNlJywgJ1NpdCBiYWNrIGFuZCByZWxheCddO1xuICAgICAgdGhpcy5wcm9ncmVzc0xpc3RBcnJheSA9IFsnV29yayBvbiBwcm9qZWN0cycsICdMaXN0ZW4gdG8gbXVzaWMnXTtcbiAgICAgIHRoaXMuY29tcGxldGVMaXN0QXJyYXkgPSBbJ0JlaW5nIGNvb2wnLCAnR2V0dGluZyBzdHVmZiBkb25lJ107XG4gICAgICB0aGlzLm9uSG9sZExpc3RBcnJheSA9IFsnQmVpbmcgdW5jb29sJ107XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGNvbHVtbnMgaW4gRE9NLCByZXNldCBIVE1MLCBmaWx0ZXIgYXJyYXksIHVwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgdXBkYXRlRE9NKCkge1xuICAgIC8vIENoZWNrIGxvY2FsU3RvcmFnZVxuICAgIGlmICghdGhpcy51cGRhdGVkT25Mb2FkKSB7XG4gICAgICB0aGlzLmdldFNhdmVkQ29sdW1ucygpO1xuICAgIH1cblxuICAgIC8vIEJhY2tsb2cgQ29sdW1uXG4gICAgdGhpcy5iYWNrbG9nTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMuYmFja2xvZ0xpc3RBcnJheS5mb3JFYWNoKChiYWNrbG9nSXRlbTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUl0ZW1FbCh0aGlzLmJhY2tsb2dMaXN0LCAwLCBiYWNrbG9nSXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMuYmFja2xvZ0xpc3RBcnJheSA9IHRoaXMuZmlsdGVyQXJyYXkodGhpcy5iYWNrbG9nTGlzdEFycmF5KTtcblxuICAgIC8vIFByb2dyZXNzIENvbHVtblxuICAgIHRoaXMucHJvZ3Jlc3NMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGhpcy5wcm9ncmVzc0xpc3RBcnJheS5mb3JFYWNoKChwcm9ncmVzc0l0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVJdGVtRWwodGhpcy5wcm9ncmVzc0xpc3QsIDEsIHByb2dyZXNzSXRlbSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkgPSB0aGlzLmZpbHRlckFycmF5KHRoaXMucHJvZ3Jlc3NMaXN0QXJyYXkpO1xuXG4gICAgLy8gQ29tcGxldGUgQ29sdW1uXG4gICAgdGhpcy5jb21wbGV0ZUxpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICB0aGlzLmNvbXBsZXRlTGlzdEFycmF5LmZvckVhY2goKGNvbXBsZXRlSXRlbTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUl0ZW1FbCh0aGlzLmNvbXBsZXRlTGlzdCwgMiwgY29tcGxldGVJdGVtLCBpbmRleCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21wbGV0ZUxpc3RBcnJheSA9IHRoaXMuZmlsdGVyQXJyYXkodGhpcy5jb21wbGV0ZUxpc3RBcnJheSk7XG5cbiAgICAvLyBPbiBIb2xkIENvbHVtblxuICAgIHRoaXMub25Ib2xkTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMub25Ib2xkTGlzdEFycmF5LmZvckVhY2goKG9uSG9sZEl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVJdGVtRWwodGhpcy5vbkhvbGRMaXN0LCAzLCBvbkhvbGRJdGVtLCBpbmRleCk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkhvbGRMaXN0QXJyYXkgPSB0aGlzLmZpbHRlckFycmF5KHRoaXMub25Ib2xkTGlzdEFycmF5KTtcblxuICAgIHRoaXMudXBkYXRlZE9uTG9hZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVTYXZlZENvbHVtbnMoKTtcbiAgfVxuXG4gIC8vIFNldCBsb2NhbFN0b3JhZ2UgYXJyYXlcbiAgcHJpdmF0ZSB1cGRhdGVTYXZlZENvbHVtbnMoKSB7XG4gICAgdGhpcy5saXN0QXJyYXlzID0gW1xuICAgICAgdGhpcy5iYWNrbG9nTGlzdEFycmF5LFxuICAgICAgdGhpcy5wcm9ncmVzc0xpc3RBcnJheSxcbiAgICAgIHRoaXMuY29tcGxldGVMaXN0QXJyYXksXG4gICAgICB0aGlzLm9uSG9sZExpc3RBcnJheVxuICAgIF07XG4gICAgY29uc3QgYXJyYXlOYW1lcyA9IFsnYmFja2xvZycsICdwcm9ncmVzcycsICdjb21wbGV0ZScsICdvbkhvbGQnXTtcbiAgICBhcnJheU5hbWVzLmZvckVhY2goKGFycmF5TmFtZSwgaW5kZXgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgJHthcnJheU5hbWV9SXRlbXNgLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3RBcnJheXNbaW5kZXhdKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBET00gRUxlbWVudHMgZm9yIGVhY2ggbGlzdCBpdGVtXG4gIHByaXZhdGUgY3JlYXRlSXRlbUVsKFxuICAgIGNvbHVtbkVsOiBIVE1MRWxlbWVudCxcbiAgICBjb2x1bW46IGFueSxcbiAgICBpdGVtOiBhbnksXG4gICAgaW5kZXg6IGFueVxuICApIHtcbiAgICAvLyBMaXN0IEl0ZW1cbiAgICBjb25zdCBsaXN0RWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJhZy1pdGVtJyk7XG4gICAgbGlzdEVsLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBsaXN0RWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmRyYWdJdGVtKGxpc3RFbCk7XG4gICAgY29sdW1uRWwuYXBwZW5kQ2hpbGQobGlzdEVsKTtcbiAgICAvLyBsaXN0RWwuc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCAndHJ1ZScpO1xuICAgIGxpc3RFbC5pZCA9IGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcmFnQW5kRHJvcEV2ZW50cygpIHtcbiAgICB0aGlzLmFsbG93RHJvcCgpO1xuICAgIHRoaXMuZHJvcEl0ZW0oKTtcbiAgICB0aGlzLmRyYWdFbnRlcigpO1xuICAgIHRoaXMubWFrZUl0ZW1FZGl0YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVCdXR0b25FdmVudHMoKSB7XG4gICAgdGhpcy5zaG93SW5wdXRCb3goKTtcbiAgICB0aGlzLmhpZGVJbnB1dEJveCgpO1xuICAgIHRoaXMudXBkYXRlSXRlbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmFnSXRlbShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYWdnZWRJdGVtID0gZXZlbnQudGFyZ2V0O1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFsbG93RHJvcCgpIHtcbiAgICB0aGlzLml0ZW1MaXN0cy5mb3JFYWNoKChpdGVtTGlzdDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGl0ZW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyb3BJdGVtKCkge1xuICAgIHRoaXMuaXRlbUxpc3RzLmZvckVhY2goKGl0ZW1MaXN0OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgaXRlbUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5pdGVtTGlzdHMuZm9yRWFjaCgoaXRlbUxpc3Q6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaXRlbUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFycmVudEVsID0gdGhpcy5pdGVtTGlzdHNbdGhpcy5jdXJyZW50Q29sdW1uXTtcbiAgICAgICAgcGFycmVudEVsLmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dlZEl0ZW0pO1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVidWlsZEFycmF5cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYWdFbnRlcigpIHtcbiAgICB0aGlzLml0ZW1MaXN0cy5mb3JFYWNoKChpdGVtTGlzdDogSFRNTEVsZW1lbnQsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgIGl0ZW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsICgpID0+IHtcbiAgICAgICAgaXRlbUxpc3QuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb2x1bW4gPSBpbmRleDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIEFsbG93IGFycmF5cyB0byByZWZsZWN0IGRyYWcgYW5kIGRyb3AgaXRlbXNcbiAgcHJpdmF0ZSByZWJ1aWxkQXJyYXlzKCkge1xuICAgIHRoaXMuYmFja2xvZ0xpc3RBcnJheSA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVMaXN0QXJyYXkgPSBbXTtcbiAgICB0aGlzLnByb2dyZXNzTGlzdEFycmF5ID0gW107XG4gICAgdGhpcy5vbkhvbGRMaXN0QXJyYXkgPSBbXTtcblxuICAgIHRoaXMuYmFja2xvZ0xpc3RBcnJheSA9IEFycmF5LmZyb20odGhpcy5iYWNrbG9nTGlzdC5jaGlsZHJlbikubWFwKFxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICB0aGlzLnByb2dyZXNzTGlzdEFycmF5ID0gQXJyYXkuZnJvbSh0aGlzLnByb2dyZXNzTGlzdC5jaGlsZHJlbikubWFwKFxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICB0aGlzLmNvbXBsZXRlTGlzdEFycmF5ID0gQXJyYXkuZnJvbSh0aGlzLmNvbXBsZXRlTGlzdC5jaGlsZHJlbikubWFwKFxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICB0aGlzLm9uSG9sZExpc3RBcnJheSA9IEFycmF5LmZyb20odGhpcy5vbkhvbGRMaXN0LmNoaWxkcmVuKS5tYXAoXG4gICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnRleHRDb250ZW50XG4gICAgKTtcblxuICAgIHRoaXMudXBkYXRlRE9NKCk7XG4gIH1cblxuICAvLyBTaG93IGFkZCBpdGVtIGlucHV0IGJveFxuICBwcml2YXRlIHNob3dJbnB1dEJveCgpIHtcbiAgICB0aGlzLmFkZEJ0bnMuZm9yRWFjaCgoYWRkQnRuOiBIVE1MRWxlbWVudCwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgYWRkQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5zYXZlSXRlbUJ0bnNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMuYWRkSXRlbUNvbnRhaW5lcnNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNhdmUgYW5kIGhpZGUgaXRlbSBpbnB1dCBib3hcbiAgcHJpdmF0ZSBoaWRlSW5wdXRCb3goKSB7XG4gICAgdGhpcy5zYXZlSXRlbUJ0bnMuZm9yRWFjaCgoc2F2ZUl0ZW1CdG46IEhUTUxFbGVtZW50LCBpbmRleDogYW55KSA9PiB7XG4gICAgICBzYXZlSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgIHNhdmVJdGVtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuYWRkQnRuc1tpbmRleF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgdGhpcy5hZGRJdGVtQ29udGFpbmVyc1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5hZGRUb0NvbHVtbihpbmRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFkZCB0ZXh0IHRvIGxvY2FsU3RvcmFnZVxuICBwcml2YXRlIGFkZFRvQ29sdW1uKGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBpdGVtVGV4dCA9IHRoaXMuYWRkSXRlbXNbaW5kZXhdLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHNlbGVjdGVkQXJyYXkgPSB0aGlzLmxpc3RBcnJheXNbaW5kZXhdO1xuICAgIGlmIChpdGVtVGV4dCkge1xuICAgICAgc2VsZWN0ZWRBcnJheS5wdXNoKGl0ZW1UZXh0KTtcbiAgICAgIHRoaXMudXBkYXRlRE9NKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkSXRlbXNbaW5kZXhdLnRleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICAvLyB1cGRhdGUgaXRlbSBvciBkZWxldGVcbiAgcHJpdmF0ZSB1cGRhdGVJdGVtKCkge1xuICAgIHRoaXMuaXRlbUxpc3RzLmZvckVhY2goKGl0ZW1MaXN0OiBIVE1MRWxlbWVudCwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgaXRlbUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRBcnJheSA9IHRoaXMubGlzdEFycmF5c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uRWwgPSB0aGlzLml0ZW1MaXN0c1tpbmRleF0uY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZENvbHVtbkVsW2lkXS50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxlY3RlZEFycmF5W2lkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZEFycmF5W2lkXSA9IHNlbGVjdGVkQ29sdW1uRWxbaWRdLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRE9NKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpbHRlciBhcnJheXMgdG8gcmVtb3ZlIGVtcHR5IGl0ZW1zXG4gIHByaXZhdGUgZmlsdGVyQXJyYXkoYXJyYXk6IGFueSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSAhPT0gbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VJdGVtRWRpdGFibGUoKSB7XG4gICAgdGhpcy5pdGVtTGlzdHMuZm9yRWFjaCgoaXRlbUxpc3Q6IEhUTUxFbGVtZW50LCBpbmRleDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgaXRlbUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScsICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmFwcC51cGRhdGVET00oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==