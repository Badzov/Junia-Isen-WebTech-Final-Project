"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/[id]/page",{

/***/ "(app-pages-browser)/./src/app/authors/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/authors/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BookDetails() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Unknown\"), 2), author = _useState[0], setAuthor = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors/\".concat(id)).then(function(response) {\n                setAuthor(response.data);\n            })[\"catch\"](function(error) {\n                console.log(error);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (!author) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading author details...\"\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: author.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Biography:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            author.biography\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Books Written:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            author.numberOfBooksWritten\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 10\n                            }, this),\n                            \" $\",\n                            author.averageRating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: author.photoURL,\n                        alt: author.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/books\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetails, \"RVsoUQUwij05Bwf08Uldany+SRY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDbEI7QUFDRztBQUVkLFNBQVNLOztJQUN0QixJQUFNLEtBQVNILDBEQUFTQSxHQUFoQkk7SUFDUixJQUE0QkwsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLGdCQUE5Qk0sU0FBcUJOLGNBQWJPLFlBQWFQO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLElBQUk7WUFDTkgsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQyxxQ0FBd0MsT0FBSEgsS0FDNUNJLElBQUksQ0FBQ0MsU0FBQUE7Z0JBQ0pILFVBQVVHLFNBQVNDLElBQUk7WUFDekIsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQTtnQkFDSEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQjtRQUNKO0lBQ0YsR0FBRztRQUFDUjtLQUFHO0lBR1AsSUFBSSxDQUFDQyxRQUFRLHFCQUFPLDhEQUFDVTtrQkFBRTs7Ozs7O0lBRXZCLHFCQUNFOzswQkFDQSw4REFBQ0M7Z0JBQUlDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU87O2tDQUM1Qiw4REFBQ0M7a0NBQUlkLE9BQU9lLElBQUk7Ozs7OztrQ0FDaEIsOERBQUNMOzswQ0FBRSw4REFBQ007MENBQU87Ozs7Ozs0QkFBbUI7NEJBQUVoQixPQUFPaUIsU0FBUzs7Ozs7OztrQ0FDaEQsOERBQUNQOzswQ0FBRSw4REFBQ007MENBQU87Ozs7Ozs0QkFBdUI7NEJBQUVoQixPQUFPa0Isb0JBQW9COzs7Ozs7O2tDQUMvRCw4REFBQ1I7OzBDQUFFLDhEQUFDTTswQ0FBTzs7Ozs7OzRCQUFnQjs0QkFBR2hCLE9BQU9tQixhQUFhOzs7Ozs7O2tDQUNsRCw4REFBQ0M7d0JBQUlDLEtBQUtyQixPQUFPc0IsUUFBUTt3QkFBRUMsS0FBS3ZCLE9BQU9lLElBQUk7Ozs7Ozs7Ozs7OzswQkFFN0MsOERBQUNKOzBCQUNHLDRFQUFDZCxpREFBSUE7b0JBQUMyQixNQUFLOzhCQUNYLDRFQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkN3QjNCOztRQUNQSCxzREFBU0E7OztLQURGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2F1dGhvcnMvW2lkXS9wYWdlLnRzeD80ZjY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rRGV0YWlscygpIHtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7IFxuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJVbmtub3duXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXV0aG9ycy8ke2lkfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBzZXRBdXRob3IocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gXG4gIH0sIFtpZF0pO1xuXG5cbiAgaWYgKCFhdXRob3IpIHJldHVybiA8cD5Mb2FkaW5nIGF1dGhvciBkZXRhaWxzLi4uPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgIDxoMT57YXV0aG9yLm5hbWV9PC9oMT5cbiAgICAgIDxwPjxzdHJvbmc+QmlvZ3JhcGh5Ojwvc3Ryb25nPiB7YXV0aG9yLmJpb2dyYXBoeX08L3A+XG4gICAgICA8cD48c3Ryb25nPkJvb2tzIFdyaXR0ZW46PC9zdHJvbmc+IHthdXRob3IubnVtYmVyT2ZCb29rc1dyaXR0ZW59PC9wPlxuICAgICAgPHA+PHN0cm9uZz5SYXRpbmc6PC9zdHJvbmc+ICR7YXV0aG9yLmF2ZXJhZ2VSYXRpbmd9PC9wPlxuICAgICAgPGltZyBzcmM9e2F1dGhvci5waG90b1VSTH0gYWx0PXthdXRob3IubmFtZX0vPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va3NcIj5cbiAgICAgICAgPGJ1dHRvbj5HbyBiYWNrPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJheGlvcyIsIkxpbmsiLCJCb29rRGV0YWlscyIsImlkIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImgxIiwibmFtZSIsInN0cm9uZyIsImJpb2dyYXBoeSIsIm51bWJlck9mQm9va3NXcml0dGVuIiwiYXZlcmFnZVJhdGluZyIsImltZyIsInNyYyIsInBob3RvVVJMIiwiYWx0IiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});