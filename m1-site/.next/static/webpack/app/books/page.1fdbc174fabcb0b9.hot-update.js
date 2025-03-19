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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction BookList() {\n    var _this = this;\n    _s();\n    // Books repository\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchQuery = _useState1[0], setSearchQuery = _useState1[1];\n    // Populates the book variable with data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadBooks();\n    }, []);\n    // API call to get the books from the database\n    var loadBooks = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/books\").then(function(data1) {\n            setBooks(data1.data);\n            console.log(data1.data);\n        })[\"catch\"](function(err) {\n            console.error(err);\n        });\n    };\n    var handleSelect = function() {\n        console.log(\"test\");\n    };\n    var handleSearch = function(event) {\n        setSearchQuery(event.target.value);\n    };\n    var filteredData = data.filter(function(item1) {\n        return item1.proper;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"List of Books\"\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filtrar libros...\",\n                        value: searchQuery,\n                        onChange: handleSearch\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Book's Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Author's Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Published Year\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: books === null || books === void 0 ? void 0 : books.map(function(book) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        onClick: function() {\n                                            return handleSelect(item);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.publishedYear\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: book.price\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: function(e) {\n                                                        e.stopPropagation();\n                                                        functionName();\n                                                    },\n                                                    children: \"Accion\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, book.id, true, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(BookList, \"1ELOqdUQQVG6x39hCAfQoLjNp7A=\");\n_c = BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBRW1CO0FBQ2xCO0FBR1gsU0FBU0k7OztJQUVwQixtQkFBbUI7SUFDbkIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFDMUIsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF4Q00sY0FBK0JOLGVBQWxCTyxpQkFBa0JQO0lBRXRDLHdDQUF3QztJQUN4Q0MsZ0RBQVNBLENBQUM7UUFDTk87SUFFSixHQUFHLEVBQUU7SUFFTCw4Q0FBOEM7SUFDOUMsSUFBTUEsWUFBWTtRQUNkTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLG1DQUNUQyxJQUFJLENBQUMsU0FBQ0M7WUFDTE4sU0FBU00sTUFBS0EsSUFBSTtZQUNsQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFLQSxJQUFJO1FBQ3ZCLEVBQ0NHLENBQUFBLFFBQUssQ0FBQyxTQUFDQztZQUNOSCxRQUFRSSxLQUFLLENBQUNEO1FBQ2hCO0lBQ0Y7SUFFQSxJQUFNRSxlQUFlO1FBQ25CTCxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVGLElBQU1LLGVBQWUsU0FBQ0M7UUFDcEJaLGVBQWVZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLElBQU1DLGVBQWVYLEtBQUtZLE1BQU0sQ0FBQ0MsU0FBQUE7ZUFDL0JBLE1BQUtDLE1BQU07O0lBR2YscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7O2tDQUNELDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBb0JULE9BQU9mO3dCQUFheUIsVUFBVWI7Ozs7OztrQ0FDakYsOERBQUNjOzswQ0FDQyw4REFBQ0M7MENBQ0MsNEVBQUNDOztzREFDQyw4REFBQ0M7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDQzswQ0FDRWhDLGtCQUFBQSw0QkFBQUEsTUFBT2lDLEdBQUcsQ0FBQyxTQUFDQzt5REFDWCw4REFBQ0o7d0NBQWlCSyxTQUFTO21EQUFNdEIsYUFBYU87OzswREFDNUMsOERBQUNnQjswREFBSUYsS0FBS0csS0FBSzs7Ozs7OzBEQUNmLDhEQUFDRDswREFBSUYsS0FBS0ksYUFBYTs7Ozs7OzBEQUN2Qiw4REFBQ0Y7MERBQUlGLEtBQUtLLEtBQUs7Ozs7OzswREFDZiw4REFBQ0g7MERBQ0QsNEVBQUNJO29EQUFPTCxTQUFTLFNBQUNNO3dEQUFPQSxFQUFFQyxlQUFlO3dEQUFJQztvREFBZTs4REFBRzs7Ozs7Ozs7Ozs7O3VDQUx6RFQsS0FBS1UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlCO0dBbkV3QjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9va3MvcGFnZS50c3g/Mjk2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL0Jvb2tNb2RlbCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tMaXN0KCkge1xuXG4gICAgLy8gQm9va3MgcmVwb3NpdG9yeVxuICAgIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGU8Qm9va01vZGVsW10+KFtdKTtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgLy8gUG9wdWxhdGVzIHRoZSBib29rIHZhcmlhYmxlIHdpdGggZGF0YVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRCb29rcygpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gQVBJIGNhbGwgdG8gZ2V0IHRoZSBib29rcyBmcm9tIHRoZSBkYXRhYmFzZVxuICAgIGNvbnN0IGxvYWRCb29rcyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRCb29rcyhkYXRhLmRhdGEpXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gXG4gICAgICBpdGVtLnByb3BlclxuICAgIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxwPkxpc3Qgb2YgQm9va3M8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdGaWx0cmFyIGxpYnJvcy4uLicgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17aGFuZGxlU2VhcmNofT48L2lucHV0PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+Qm9vaydzIFRpdGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPkF1dGhvcidzIE5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+UHVibGlzaGVkIFllYXI8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib29rcz8ubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2Jvb2suaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChpdGVtKX0+XG4gICAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntib29rLnB1Ymxpc2hlZFllYXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Jvb2sucHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge2Uuc3RvcFByb3BhZ2F0aW9uKCk7IGZ1bmN0aW9uTmFtZSgpO319PlxuICAgICAgICAgICAgICAgICAgQWNjaW9uXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQm9va0xpc3QiLCJib29rcyIsInNldEJvb2tzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRCb29rcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiaXRlbSIsInByb3BlciIsImRpdiIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImJvb2siLCJvbkNsaWNrIiwidGQiLCJ0aXRsZSIsInB1Ymxpc2hlZFllYXIiLCJwcmljZSIsImJ1dHRvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJmdW5jdGlvbk5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/page.tsx\n"));

/***/ })

});