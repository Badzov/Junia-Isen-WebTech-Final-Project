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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BookDetails() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Unknown\"), 2), author = _useState[0], setAuthor = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors/\".concat(id)).then(function(response) {\n                setAuthor(response.data);\n            })[\"catch\"](function(error) {\n                console.log(error);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (!author) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading book details...\"\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 23\n    }, this);\n    //     id: string;\n    name: string;\n    biography: string;\n    numberOfBooksWritten: number;\n    averageRating: number;\n    photoURL: string; //\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: author.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Biography:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Published Year:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.publishedYear\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Price:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 10\n                            }, this),\n                            \" $\",\n                            book.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.averageRating,\n                            \"/5\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/books\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/[id]/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetails, \"RVsoUQUwij05Bwf08Uldany+SRY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDbEI7QUFDRztBQUVkLFNBQVNLOztJQUN0QixJQUFNLEtBQVNILDBEQUFTQSxHQUFoQkk7SUFDUixJQUE0QkwsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLGdCQUE5Qk0sU0FBcUJOLGNBQWJPLFlBQWFQO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLElBQUk7WUFDTkgsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQyxxQ0FBd0MsT0FBSEgsS0FDNUNJLElBQUksQ0FBQ0MsU0FBQUE7Z0JBQ0pILFVBQVVHLFNBQVNDLElBQUk7WUFDekIsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQTtnQkFDSEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQjtRQUNKO0lBQ0YsR0FBRztRQUFDUjtLQUFHO0lBR1AsSUFBSSxDQUFDQyxRQUFRLHFCQUFPLDhEQUFDVTtrQkFBRTs7Ozs7O0lBQ3pCLGtCQUFrQjtJQUNsQkMsTUFBTUM7SUFDTkMsV0FBV0Q7SUFDWEUsc0JBQXNCQztJQUN0QkMsZUFBZUQ7SUFDZkUsVUFBVUwsUUFBTyxFQUFFO0lBQ2pCLHFCQUNFOzswQkFDQSw4REFBQ007Z0JBQUlDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU87O2tDQUM1Qiw4REFBQ0M7a0NBQUlyQixPQUFPVyxJQUFJOzs7Ozs7a0NBQ2hCLDhEQUFDRDs7MENBQUUsOERBQUNZOzBDQUFPOzs7Ozs7NEJBQW1COzRCQUFFdEI7Ozs7Ozs7a0NBQ2hDLDhEQUFDVTs7MENBQUUsOERBQUNZOzBDQUFPOzs7Ozs7NEJBQXdCOzRCQUFFQyxLQUFLQyxhQUFhOzs7Ozs7O2tDQUN2RCw4REFBQ2Q7OzBDQUFFLDhEQUFDWTswQ0FBTzs7Ozs7OzRCQUFlOzRCQUFHQyxLQUFLRSxLQUFLOzs7Ozs7O2tDQUN2Qyw4REFBQ2Y7OzBDQUFFLDhEQUFDWTswQ0FBTzs7Ozs7OzRCQUFnQjs0QkFBRUMsS0FBS1AsYUFBYTs0QkFBQzs7Ozs7Ozs7Ozs7OzswQkFFbEQsOERBQUNFOzBCQUNHLDRFQUFDckIsaURBQUlBO29CQUFDNkIsTUFBSzs4QkFDWCw0RUFBQ0M7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQXhDd0I3Qjs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL1tpZF0vcGFnZS50c3g/NGY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0RldGFpbHMoKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpOyBcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKFwiVW5rbm93blwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2F1dGhvcnMvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgc2V0QXV0aG9yKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9IFxuICB9LCBbaWRdKTtcblxuXG4gIGlmICghYXV0aG9yKSByZXR1cm4gPHA+TG9hZGluZyBib29rIGRldGFpbHMuLi48L3A+O1xuLy8gICAgIGlkOiBzdHJpbmc7XG5uYW1lOiBzdHJpbmc7XG5iaW9ncmFwaHk6IHN0cmluZztcbm51bWJlck9mQm9va3NXcml0dGVuOiBudW1iZXI7XG5hdmVyYWdlUmF0aW5nOiBudW1iZXI7XG5waG90b1VSTDogc3RyaW5nOy8vXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgPGgxPnthdXRob3IubmFtZX08L2gxPlxuICAgICAgPHA+PHN0cm9uZz5CaW9ncmFwaHk6PC9zdHJvbmc+IHthdXRob3J9PC9wPlxuICAgICAgPHA+PHN0cm9uZz5QdWJsaXNoZWQgWWVhcjo8L3N0cm9uZz4ge2Jvb2sucHVibGlzaGVkWWVhcn08L3A+XG4gICAgICA8cD48c3Ryb25nPlByaWNlOjwvc3Ryb25nPiAke2Jvb2sucHJpY2V9PC9wPlxuICAgICAgPHA+PHN0cm9uZz5SYXRpbmc6PC9zdHJvbmc+IHtib29rLmF2ZXJhZ2VSYXRpbmd9LzU8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rc1wiPlxuICAgICAgICA8YnV0dG9uPkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImF4aW9zIiwiTGluayIsIkJvb2tEZXRhaWxzIiwiaWQiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwIiwibmFtZSIsInN0cmluZyIsImJpb2dyYXBoeSIsIm51bWJlck9mQm9va3NXcml0dGVuIiwibnVtYmVyIiwiYXZlcmFnZVJhdGluZyIsInBob3RvVVJMIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDEiLCJzdHJvbmciLCJib29rIiwicHVibGlzaGVkWWVhciIsInByaWNlIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});