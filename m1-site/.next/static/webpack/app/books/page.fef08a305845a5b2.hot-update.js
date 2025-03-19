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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction BookList() {\n    var _this = this;\n    _s();\n    // Books repository\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    // Populates the book variable with data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // API call to get the books from the database\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/books\").then(function(data) {\n            setBooks(data.data);\n            console.log(data.data);\n        })[\"catch\"](function(err) {\n            console.error(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"List of Books\"\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Books\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    books === null || books === void 0 ? void 0 : books.map(function(book) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: book.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"The price is $\",\n                                        book.price,\n                                        \" USD\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Rating: \",\n                                        book.averageRating\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Published Year: \",\n                                        book.publishedYear\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, book.id, true, {\n                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBRW1CO0FBQ2xCO0FBRVgsU0FBU0k7OztJQUVwQixtQkFBbUI7SUFDbkIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFFMUIsd0NBQXdDO0lBQ3hDQyxnREFBU0EsQ0FBQztRQUNOSztJQUVKLEdBQUcsRUFBRTtJQUVMLDhDQUE4QztJQUM5QyxJQUFNQSxZQUFZO1FBQ2RKLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsbUNBQ1RDLElBQUksQ0FBQyxTQUFDQztZQUNMSixTQUFTSSxLQUFLQSxJQUFJO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtBLElBQUk7UUFDdkIsRUFDQ0csQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1lBQ05ILFFBQVFJLEtBQUssQ0FBQ0Q7UUFDaEI7SUFDRjtJQUVKLHFCQUNFLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNEOztrQ0FDRCw4REFBQ0U7a0NBQ0MsNEVBQUNDO3NDQUNDLDRFQUFDQzs7a0RBQ0MsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSU5oQixrQkFBQUEsNEJBQUFBLE1BQU9pQixHQUFHLENBQUMsU0FBQ0M7NkNBQ1QsOERBQUNQOzs4Q0FDQyw4REFBQ0M7OENBQUdNLEtBQUtDLEtBQUs7Ozs7Ozs4Q0FDZCw4REFBQ1A7O3dDQUFFO3dDQUFlTSxLQUFLRSxLQUFLO3dDQUFDOzs7Ozs7OzhDQUM3Qiw4REFBQ1I7O3dDQUFFO3dDQUFTTSxLQUFLRyxhQUFhOzs7Ozs7OzhDQUM5Qiw4REFBQ1Q7O3dDQUFFO3dDQUFpQk0sS0FBS0ksYUFBYTs7Ozs7Ozs7MkJBSjlCSixLQUFLSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0I7R0E5Q3dCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ib29rcy9wYWdlLnRzeD8yOTY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvQm9va01vZGVsJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rTGlzdCgpIHtcblxuICAgIC8vIEJvb2tzIHJlcG9zaXRvcnlcbiAgICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tNb2RlbFtdPihbXSk7XG5cbiAgICAvLyBQb3B1bGF0ZXMgdGhlIGJvb2sgdmFyaWFibGUgd2l0aCBkYXRhXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZEJvb2tzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBBUEkgY2FsbCB0byBnZXQgdGhlIGJvb2tzIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgY29uc3QgbG9hZEJvb2tzID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MnKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldEJvb2tzKGRhdGEuZGF0YSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5MaXN0IG9mIEJvb2tzPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+Qm9va3M8L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge2Jvb2tzPy5tYXAoKGJvb2spID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtib29rLmlkfT5cbiAgICAgICAgICAgICAgPHA+e2Jvb2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cD5UaGUgcHJpY2UgaXMgJHtib29rLnByaWNlfSBVU0Q8L3A+XG4gICAgICAgICAgICAgIDxwPlJhdGluZzoge2Jvb2suYXZlcmFnZVJhdGluZ308L3A+XG4gICAgICAgICAgICAgIDxwPlB1Ymxpc2hlZCBZZWFyOiB7Ym9vay5wdWJsaXNoZWRZZWFyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkJvb2tMaXN0IiwiYm9va3MiLCJzZXRCb29rcyIsImxvYWRCb29rcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkaXYiLCJwIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJtYXAiLCJib29rIiwidGl0bGUiLCJwcmljZSIsImF2ZXJhZ2VSYXRpbmciLCJwdWJsaXNoZWRZZWFyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});