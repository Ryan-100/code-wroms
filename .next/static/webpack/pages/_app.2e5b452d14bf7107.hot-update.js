"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/components/Layout/Footer.jsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Layout/Header.jsx\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Layout = (param)=>{\n    let { title =\"Code Worms\" , description =\"This is movie streaming website\" , children  } = param;\n    _s();\n    const [fixedFooter, setFixedFooter] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(router);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (router.pathname === \"/\" || router.pathname === \"/watch\" || router.pathname.split(\"/\")[0] === \"/watch\") {\n            setFixedFooter(true);\n        } else {\n            setFixedFooter(false);\n        }\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"w-full flex-1 overflow-hidden\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        fixed: fixedFooter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\My stuff\\\\WebDev\\\\CodeWorm\\\\src\\\\components\\\\Layout\\\\index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"9KbvPBE4E0AT8FajwGu+8U1l/14=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\nLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),\n    title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n    description: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNDO0FBQ0E7QUFDSztBQUNLO0FBQ0k7QUFFNUMsTUFBTU8sU0FBUyxTQUlUO1FBSlUsRUFDZEMsT0FBUSxhQUFZLEVBQ3BCQyxhQUFjLGtDQUFpQyxFQUMvQ0MsU0FBUSxFQUNUOztJQUNDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU1PLFNBQVNULHNEQUFTQTtJQUN4QlUsUUFBUUMsR0FBRyxDQUFDRjtJQUNaUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFDRVEsT0FBT0csUUFBUSxLQUFLLE9BQ3BCSCxPQUFPRyxRQUFRLEtBQUssWUFDcEJILE9BQU9HLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssVUFDbEM7WUFDQUwsZUFBZSxJQUFJO1FBQ3JCLE9BQU87WUFDTEEsZUFBZSxLQUFLO1FBQ3RCLENBQUM7SUFDSCxHQUFHO1FBQUNDLE9BQU9HLFFBQVE7S0FBQztJQUNwQixxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDbEIsa0RBQUlBOztrQ0FDSCw4REFBQ1E7a0NBQU9BOzs7Ozs7a0NBQ1IsOERBQUNXO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFTWjs7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ1M7Z0JBQUlJLFdBQVk7O2tDQUNmLDhEQUFDcEIsK0NBQU1BOzs7OztrQ0FDUCw4REFBQ3FCO3dCQUFLRCxXQUFVO2tDQUFpQ1o7Ozs7OztrQ0FDakQsOERBQUNULCtDQUFNQTt3QkFBQ3VCLE9BQU9iOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FoQ01KOztRQU1XSCxrREFBU0E7OztLQU5wQkc7QUFrQ05BLE9BQU9rQixTQUFTLEdBQUc7SUFDakJmLFVBQVVQLG1FQUF5QjtJQUNuQ0ssT0FBT0wsMERBQWdCO0lBQ3ZCTSxhQUFhTiwwREFBZ0I7QUFDL0I7QUFFQSwrREFBZUksTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanN4P2RiMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe1xyXG4gIHRpdGxlID0gXCJDb2RlIFdvcm1zXCIsXHJcbiAgZGVzY3JpcHRpb24gPSBcIlRoaXMgaXMgbW92aWUgc3RyZWFtaW5nIHdlYnNpdGVcIixcclxuICBjaGlsZHJlbixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtmaXhlZEZvb3Rlciwgc2V0Rml4ZWRGb290ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiB8fFxyXG4gICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3dhdGNoXCIgfHxcclxuICAgICAgcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVswXSA9PT0gXCIvd2F0Y2hcIlxyXG4gICAgKSB7XHJcbiAgICAgIHNldEZpeGVkRm9vdGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Rml4ZWRGb290ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBgfT5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgtMSBvdmVyZmxvdy1oaWRkZW5cIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDxGb290ZXIgZml4ZWQ9e2ZpeGVkRm9vdGVyfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkZvb3RlciIsIkhlYWRlciIsIlByb3BUeXBlcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiZml4ZWRGb290ZXIiLCJzZXRGaXhlZEZvb3RlciIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInNwbGl0IiwiZGl2IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwibWFpbiIsImZpeGVkIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/index.jsx\n"));

/***/ })

});