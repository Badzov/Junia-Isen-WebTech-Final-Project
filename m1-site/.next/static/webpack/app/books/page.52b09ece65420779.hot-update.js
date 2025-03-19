"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/page",{

/***/ "(app-pages-browser)/./src/app/books/page.tsx":
/*!********************************!*\
  !*** ./src/app/books/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\nfunction BookList() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    var loadBooks = function() {\n        axios.get(\"http://localhost:3001/api/books\").then(function(data) {\n            setBooks(data.data);\n            console.log(data.data);\n        })[\"catch\"](function(err) {\n            console.error(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"List of Books\"\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: books === null || books === void 0 ? void 0 : books.map(function(book) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-b border-gray-300 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: book.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-green-600\",\n                                children: [\n                                    \"The price is $\",\n                                    book.price,\n                                    \" USD\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Rating: \",\n                                    book.averageRating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Published Year: \",\n                                    book.publishedYear\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, book.id, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUI7QUFFbUI7QUFFN0IsU0FBU0c7OztJQUVwQixJQUEwQkYsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFjLEVBQUUsT0FBM0NHLFFBQW1CSCxjQUFaSSxXQUFZSjtJQUUxQkMsZ0RBQVNBLENBQUM7UUFDTkk7SUFFSixHQUFHLEVBQUU7SUFHTCxJQUFNQSxZQUFZO1FBQ2RDLE1BQU1DLEdBQUcsQ0FBQyxtQ0FDVEMsSUFBSSxDQUFDLFNBQUNDO1lBQ0xMLFNBQVNLLEtBQUtBLElBQUk7WUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0EsSUFBSTtRQUN2QixFQUNDRyxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7WUFDTkgsUUFBUUksS0FBSyxDQUFDRDtRQUNoQjtJQUNGO0lBRUoscUJBQ0UsOERBQUNFOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7MEJBQ0FaLGtCQUFBQSw0QkFBQUEsTUFBT2MsR0FBRyxDQUFDLFNBQUNDO3lDQUNULDhEQUFDSDt3QkFBa0JJLFdBQVU7OzBDQUMzQiw4REFBQ0g7Z0NBQUVHLFdBQVU7MENBQWlCRCxLQUFLRSxLQUFLOzs7Ozs7MENBQ3hDLDhEQUFDSjtnQ0FBRUcsV0FBVTs7b0NBQWlCO29DQUFlRCxLQUFLRyxLQUFLO29DQUFDOzs7Ozs7OzBDQUN4RCw4REFBQ0w7O29DQUFFO29DQUFTRSxLQUFLSSxhQUFhOzs7Ozs7OzBDQUM5Qiw4REFBQ047O29DQUFFO29DQUFpQkUsS0FBS0ssYUFBYTs7Ozs7Ozs7dUJBSjlCTCxLQUFLTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVU3QjtHQXBDd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jvb2tzL3BhZ2UudHN4PzI5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uL21vZGVscy9Cb29rTW9kZWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0xpc3QoKSB7XG5cbiAgICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tNb2RlbFtdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2FkQm9va3MoKTtcblxuICAgIH0sIFtdKTtcblxuXG4gICAgY29uc3QgbG9hZEJvb2tzID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MnKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEJvb2tzKGRhdGEuZGF0YSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5MaXN0IG9mIEJvb2tzPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICB7Ym9va3M/Lm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suaWR9IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBweS0yXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Ym9vay50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+VGhlIHByaWNlIGlzICR7Ym9vay5wcmljZX0gVVNEPC9wPlxuICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtib29rLmF2ZXJhZ2VSYXRpbmd9PC9wPlxuICAgICAgICAgICAgICA8cD5QdWJsaXNoZWQgWWVhcjoge2Jvb2sucHVibGlzaGVkWWVhcn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm9va0xpc3QiLCJib29rcyIsInNldEJvb2tzIiwibG9hZEJvb2tzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGl2IiwicCIsIm1hcCIsImJvb2siLCJjbGFzc05hbWUiLCJ0aXRsZSIsInByaWNlIiwiYXZlcmFnZVJhdGluZyIsInB1Ymxpc2hlZFllYXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});