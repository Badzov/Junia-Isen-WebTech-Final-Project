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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction BookList() {\n    var _this = this;\n    _s();\n    // Books repository\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchQuery = _useState1[0], setSearchQuery = _useState1[1];\n    // Populates the book variable with data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // API call to get the books from the database\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/books\").then(function(data1) {\n            setBooks(data1.data);\n            console.log(data1.data);\n        })[\"catch\"](function(err) {\n            console.error(err);\n        });\n    };\n    var handleSelect = function() {\n        console.log(\"test\");\n    };\n    var handleSearch = function(event) {\n        setSearchQuery(event.target.value);\n    };\n    var filteredData = data.filter(function(item1) {\n        return item1.name.toLow;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"List of Books\"\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filtrar libros...\",\n                        value: searchQuery,\n                        onChange: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Book's Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Author's Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Published Year\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: books === null || books === void 0 ? void 0 : books.map(function(book) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        onClick: function() {\n                                            return handleSelect(item);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.publishedYear\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.price\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: function(e) {\n                                                        e.stopPropagation();\n                                                        functionName();\n                                                    },\n                                                    children: \"Accion\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, book.id, true, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"1ELOqdUQQVG6x39hCAfQoLjNp7A=\");\n_c = BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBRW1CO0FBQ2xCO0FBR1gsU0FBU0k7OztJQUVwQixtQkFBbUI7SUFDbkIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFDMUIsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF4Q00sY0FBK0JOLGVBQWxCTyxpQkFBa0JQO0lBRXRDLHdDQUF3QztJQUN4Q0MsZ0RBQVNBLENBQUM7UUFDTk87SUFFSixHQUFHLEVBQUU7SUFFTCw4Q0FBOEM7SUFDOUMsSUFBTUEsWUFBWTtRQUNkTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLG1DQUNUQyxJQUFJLENBQUMsU0FBQ0M7WUFDTE4sU0FBU00sTUFBS0EsSUFBSTtZQUNsQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFLQSxJQUFJO1FBQ3ZCLEVBQ0NHLENBQUFBLFFBQUssQ0FBQyxTQUFDQztZQUNOSCxRQUFRSSxLQUFLLENBQUNEO1FBQ2hCO0lBQ0Y7SUFFQSxJQUFNRSxlQUFlO1FBQ25CTCxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVGLElBQU1LLGVBQWUsU0FBQ0M7UUFDcEJaLGVBQWVZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLElBQU1DLGVBQWVYLEtBQUtZLE1BQU0sQ0FBQ0MsU0FBQUE7ZUFDL0JBLE1BQUtDLElBQUksQ0FBQ0MsS0FBSzs7SUFHbkIscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7O2tDQUNELDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JWLE9BQU9mO3dCQUFhMEIsVUFBVWQ7Ozs7OztrQ0FDakYsOERBQUNlOzswQ0FDQyw4REFBQ0M7MENBQ0MsNEVBQUNDOztzREFDQyw4REFBQ0M7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDQzswQ0FDRWpDLGtCQUFBQSw0QkFBQUEsTUFBT2tDLEdBQUcsQ0FBQyxTQUFDQzt5REFDWCw4REFBQ0o7d0NBQWlCSyxTQUFTO21EQUFNdkIsYUFBYU87OzswREFDNUMsOERBQUNpQjswREFBSUYsS0FBS0csS0FBSzs7Ozs7OzBEQUNmLDhEQUFDRDswREFBSUYsS0FBS0ksYUFBYTs7Ozs7OzBEQUN2Qiw4REFBQ0Y7MERBQUlGLEtBQUtLLEtBQUs7Ozs7OzswREFDZiw4REFBQ0g7MERBQ0QsNEVBQUNJO29EQUFPTCxTQUFTLFNBQUNNO3dEQUFPQSxFQUFFQyxlQUFlO3dEQUFJQztvREFBZTs4REFBRzs7Ozs7Ozs7Ozs7O3VDQUx6RFQsS0FBS1UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlCO0dBbkV3QjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3g/Mjk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL0Jvb2tNb2RlbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tMaXN0KCkge1xuXG4gICAgLy8gQm9va3MgcmVwb3NpdG9yeVxuICAgIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGU8Qm9va01vZGVsW10+KFtdKTtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gUG9wdWxhdGVzIHRoZSBib29rIHZhcmlhYmxlIHdpdGggZGF0YVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRCb29rcygpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gQVBJIGNhbGwgdG8gZ2V0IHRoZSBib29rcyBmcm9tIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IGxvYWRCb29rcyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRCb29rcyhkYXRhLmRhdGEpXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gXG4gICAgICBpdGVtLm5hbWUudG9Mb3dcbiAgICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5MaXN0IG9mIEJvb2tzPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRmlsdHJhciBsaWJyb3MuLi4nIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0+PC9pbnB1dD5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPkJvb2sncyBUaXRsZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BdXRob3IncyBOYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlB1Ymxpc2hlZCBZZWFyPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9va3M/Lm1hcCgoYm9vaykgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtib29rLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoaXRlbSl9PlxuICAgICAgICAgICAgICAgIDx0ZD57Ym9vay50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5wdWJsaXNoZWRZZWFyfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntib29rLnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpOyBmdW5jdGlvbk5hbWUoKTt9fT5cbiAgICAgICAgICAgICAgICAgIEFjY2lvblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkJvb2tMaXN0IiwiYm9va3MiLCJzZXRCb29rcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJsb2FkQm9va3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiaGFuZGxlU2VsZWN0IiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3ciLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJib29rIiwib25DbGljayIsInRkIiwidGl0bGUiLCJwdWJsaXNoZWRZZWFyIiwicHJpY2UiLCJidXR0b24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZnVuY3Rpb25OYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});