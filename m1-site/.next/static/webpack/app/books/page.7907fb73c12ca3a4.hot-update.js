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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction BookList() {\n    var _this = this;\n    _s();\n    // Books repository\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    // Populates the book variable with data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // API call to get the books from the database\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/books\").then(function(data) {\n            setBooks(data.data);\n            console.log(data.data);\n        })[\"catch\"](function(err) {\n            console.error(err);\n        });\n    };\n    var handleSelect = function() {\n        console.log(\"test\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"List of Books\"\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filtrar libros...\",\n                        value: searchQuery,\n                        onChange: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Book's Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Author's Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Published Year\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: books === null || books === void 0 ? void 0 : books.map(function(book) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        onClick: function() {\n                                            return handleSelect(item);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.publishedYear\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.price\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: function(e) {\n                                                        e.stopPropagation();\n                                                        functionName();\n                                                    },\n                                                    children: \"Accion\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, book.id, true, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBRW1CO0FBQ2xCO0FBR1gsU0FBU0k7OztJQUVwQixtQkFBbUI7SUFDbkIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFFMUIsd0NBQXdDO0lBQ3hDQyxnREFBU0EsQ0FBQztRQUNOSztJQUVKLEdBQUcsRUFBRTtJQUVMLDhDQUE4QztJQUM5QyxJQUFNQSxZQUFZO1FBQ2RKLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsbUNBQ1RDLElBQUksQ0FBQyxTQUFDQztZQUNMSixTQUFTSSxLQUFLQSxJQUFJO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtBLElBQUk7UUFDdkIsRUFDQ0csQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1lBQ05ILFFBQVFJLEtBQUssQ0FBQ0Q7UUFDaEI7SUFDRjtJQUVBLElBQU1FLGVBQWU7UUFDbkJMLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUoscUJBQ0UsOERBQUNLOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7O2tDQUNELDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JDLE9BQU9DO3dCQUFhQyxVQUFVQzs7Ozs7O2tDQUNqRiw4REFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDQztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNDOzBDQUNFekIsa0JBQUFBLDRCQUFBQSxNQUFPMEIsR0FBRyxDQUFDLFNBQUNDO3lEQUNYLDhEQUFDSjt3Q0FBaUJLLFNBQVM7bURBQU1qQixhQUFha0I7OzswREFDNUMsOERBQUNDOzBEQUFJSCxLQUFLSSxLQUFLOzs7Ozs7MERBQ2YsOERBQUNEOzBEQUFJSCxLQUFLSyxhQUFhOzs7Ozs7MERBQ3ZCLDhEQUFDRjswREFBSUgsS0FBS00sS0FBSzs7Ozs7OzBEQUNmLDhEQUFDSDswREFDRCw0RUFBQ0k7b0RBQU9OLFNBQVMsU0FBQ087d0RBQU9BLEVBQUVDLGVBQWU7d0RBQUlDO29EQUFlOzhEQUFHOzs7Ozs7Ozs7Ozs7dUNBTHpEVixLQUFLVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7R0ExRHdCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ib29rcy9wYWdlLnRzeD8yOTY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvQm9va01vZGVsJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0xpc3QoKSB7XG5cbiAgICAvLyBCb29rcyByZXBvc2l0b3J5XG4gICAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxCb29rTW9kZWxbXT4oW10pO1xuXG4gICAgLy8gUG9wdWxhdGVzIHRoZSBib29rIHZhcmlhYmxlIHdpdGggZGF0YVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRCb29rcygpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gQVBJIGNhbGwgdG8gZ2V0IHRoZSBib29rcyBmcm9tIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IGxvYWRCb29rcyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRCb29rcyhkYXRhLmRhdGEpXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5MaXN0IG9mIEJvb2tzPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRmlsdHJhciBsaWJyb3MuLi4nIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0+PC9pbnB1dD5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkJvb2sncyBUaXRsZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BdXRob3IncyBOYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlB1Ymxpc2hlZCBZZWFyPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9va3M/Lm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtib29rLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoaXRlbSl9PlxuICAgICAgICAgICAgICAgIDx0ZD57Ym9vay50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5wdWJsaXNoZWRZZWFyfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntib29rLnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpOyBmdW5jdGlvbk5hbWUoKTt9fT5cbiAgICAgICAgICAgICAgICAgIEFjY2lvblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkJvb2tMaXN0IiwiYm9va3MiLCJzZXRCb29rcyIsImxvYWRCb29rcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVTZWxlY3QiLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInNlYXJjaFF1ZXJ5Iiwib25DaGFuZ2UiLCJoYW5kbGVTZWFyY2giLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiYm9vayIsIm9uQ2xpY2siLCJpdGVtIiwidGQiLCJ0aXRsZSIsInB1Ymxpc2hlZFllYXIiLCJwcmljZSIsImJ1dHRvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJmdW5jdGlvbk5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});