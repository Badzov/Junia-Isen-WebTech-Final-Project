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

/***/ "(app-pages-browser)/./src/app/hooks/useBooks.ts":
/*!***********************************!*\
  !*** ./src/app/hooks/useBooks.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useBooks: function() { return /* binding */ useBooks; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\n\n\n\n\nvar useBooks = function() {\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), books = _useState[0], setBooks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), book = _useState1[0], setBook = _useState1[1]; // State for a single book\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), loading = _useState2[0], setLoading = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), error = _useState3[0], setError = _useState3[1];\n    // Fetch all books\n    var fetchBooks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    setLoading(true);\n                    setError(null);\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        4,\n                        5\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/api/books\")\n                    ];\n                case 2:\n                    response = _state.sent();\n                    setBooks(response.data);\n                    return [\n                        3,\n                        5\n                    ];\n                case 3:\n                    error = _state.sent();\n                    setError(\"Failed to fetch books.\");\n                    console.error(error);\n                    return [\n                        3,\n                        5\n                    ];\n                case 4:\n                    setLoading(false);\n                    return [\n                        7\n                    ];\n                case 5:\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    // Fetch a single book by ID\n    var fetchBookById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(id) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/api/books/\".concat(id))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        setBook(response.data); // Set the single book state\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to fetch book details.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(id) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    // Create a new book\n    var createBook = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(newBook) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/books\", newBook)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        setBooks(function(prevBooks) {\n                            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(prevBooks).concat([\n                                response.data\n                            ]);\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to create book.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createBook(newBook) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Delete a book\n    var deleteBook = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(id) {\n            var error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:3001/api/books/\".concat(id))\n                        ];\n                    case 2:\n                        _state.sent();\n                        setBooks(function(prevBooks) {\n                            return prevBooks.filter(function(book) {\n                                return book.id !== id;\n                            });\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to delete book.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function deleteBook(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        books: books,\n        book: book,\n        loading: loading,\n        error: error,\n        fetchBooks: fetchBooks,\n        fetchBookById: fetchBookById,\n        createBook: createBook,\n        deleteBook: deleteBook\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlQm9va3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ3BCO0FBR25CLElBQU1HLFdBQVc7SUFDdEIsSUFBMEJILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYyxFQUFFLE9BQTNDSSxRQUFtQkosY0FBWkssV0FBWUw7SUFDMUIsSUFBd0JBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBbUIsV0FBNUNNLE9BQWlCTixlQUFYTyxVQUFXUCxlQUFrQywwQkFBMEI7SUFDcEYsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFoQ1EsVUFBdUJSLGVBQWRTLGFBQWNUO0lBQzlCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQTNDVSxRQUFtQlYsZUFBWlcsV0FBWVg7SUFFMUIsa0JBQWtCO0lBQ2xCLElBQU1ZLGFBQWFYLGtEQUFXQSxlQUFDO1lBSXJCWSxVQUVDSDs7OztvQkFMVEQsV0FBVztvQkFDWEUsU0FBUzs7Ozs7Ozs7O29CQUVVOzt3QkFBTVQsNkNBQUtBLENBQUNZLEdBQUcsQ0FBYzs7O29CQUF4Q0QsV0FBVztvQkFDakJSLFNBQVNRLFNBQVNFLElBQUk7Ozs7OztvQkFDZkw7b0JBQ1BDLFNBQVM7b0JBQ1RLLFFBQVFOLEtBQUssQ0FBQ0E7Ozs7OztvQkFFZEQsV0FBVzs7Ozs7Ozs7OztJQUVmLElBQUcsRUFBRTtJQUVMLDRCQUE0QjtJQUM1QixJQUFNUSxnQkFBZ0JoQixrREFBV0E7bUJBQUMsNEVBQU9pQjtnQkFJL0JMLFVBRUNIOzs7O3dCQUxURCxXQUFXO3dCQUNYRSxTQUFTOzs7Ozs7Ozs7d0JBRVU7OzRCQUFNVCw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFZLG1DQUFzQyxPQUFISTs7O3dCQUF6RUwsV0FBVzt3QkFDakJOLFFBQVFNLFNBQVNFLElBQUksR0FBRyw0QkFBNEI7Ozs7Ozt3QkFDN0NMO3dCQUNQQyxTQUFTO3dCQUNUSyxRQUFRTixLQUFLLENBQUNBOzs7Ozs7d0JBRWRELFdBQVc7Ozs7Ozs7Ozs7UUFFZjt3QkFaeUNTOzs7U0FZdEMsRUFBRTtJQUVMLG9CQUFvQjtJQUNwQixJQUFNQzttQkFBYSw0RUFBT0M7Z0JBSWhCUCxVQUVDSDs7Ozt3QkFMVEQsV0FBVzt3QkFDWEUsU0FBUzs7Ozs7Ozs7O3dCQUVVOzs0QkFBTVQsNkNBQUtBLENBQUNtQixJQUFJLENBQVksbUNBQW1DRDs7O3dCQUExRVAsV0FBVzt3QkFDakJSLFNBQVMsU0FBQ2lCO21DQUFjLG9FQUFJQSxrQkFBSjtnQ0FBZVQsU0FBU0UsSUFBSTs2QkFBQzs7Ozs7Ozt3QkFDOUNMO3dCQUNQQyxTQUFTO3dCQUNUSyxRQUFRTixLQUFLLENBQUNBOzs7Ozs7d0JBRWRELFdBQVc7Ozs7Ozs7Ozs7UUFFZjt3QkFaTVUsV0FBb0JDOzs7O0lBYzFCLGdCQUFnQjtJQUNoQixJQUFNRzttQkFBYSw0RUFBT0w7Z0JBTWZSOzs7O3dCQUxURCxXQUFXO3dCQUNYRSxTQUFTOzs7Ozs7Ozs7d0JBRVA7OzRCQUFNVCw2Q0FBTXNCLENBQUFBLFNBQU0sQ0FBQyxtQ0FBc0MsT0FBSE47Ozt3QkFBdEQ7d0JBQ0FiLFNBQVMsU0FBQ2lCO21DQUFjQSxVQUFVRyxNQUFNLENBQUMsU0FBQ25CO3VDQUFTQSxLQUFLWSxFQUFFLEtBQUtBOzs7Ozs7Ozt3QkFDeERSO3dCQUNQQyxTQUFTO3dCQUNUSyxRQUFRTixLQUFLLENBQUNBOzs7Ozs7d0JBRWRELFdBQVc7Ozs7Ozs7Ozs7UUFFZjt3QkFaTWMsV0FBb0JMOzs7O0lBYzFCLE9BQU87UUFBRWQsT0FBQUE7UUFBT0UsTUFBQUE7UUFBTUUsU0FBQUE7UUFBU0UsT0FBQUE7UUFBT0UsWUFBQUE7UUFBWUssZUFBQUE7UUFBZUUsWUFBQUE7UUFBWUksWUFBQUE7SUFBVztBQUMxRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaG9va3MvdXNlQm9va3MudHM/YmQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCb29rTW9kZWwsIENyZWF0ZUJvb2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvQm9va01vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQm9va3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Jvb2tzLCBzZXRCb29rc10gPSB1c2VTdGF0ZTxCb29rTW9kZWxbXT4oW10pO1xyXG4gIGNvbnN0IFtib29rLCBzZXRCb29rXSA9IHVzZVN0YXRlPEJvb2tNb2RlbCB8IG51bGw+KG51bGwpOyAvLyBTdGF0ZSBmb3IgYSBzaW5nbGUgYm9va1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBGZXRjaCBhbGwgYm9va3NcclxuICBjb25zdCBmZXRjaEJvb2tzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8Qm9va01vZGVsW10+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rc1wiKTtcclxuICAgICAgc2V0Qm9va3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBib29rcy5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBGZXRjaCBhIHNpbmdsZSBib29rIGJ5IElEXHJcbiAgY29uc3QgZmV0Y2hCb29rQnlJZCA9IHVzZUNhbGxiYWNrKGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxCb29rTW9kZWw+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzLyR7aWR9YCk7XHJcbiAgICAgIHNldEJvb2socmVzcG9uc2UuZGF0YSk7IC8vIFNldCB0aGUgc2luZ2xlIGJvb2sgc3RhdGVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGJvb2sgZGV0YWlscy5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgYm9va1xyXG4gIGNvbnN0IGNyZWF0ZUJvb2sgPSBhc3luYyAobmV3Qm9vazogQ3JlYXRlQm9va01vZGVsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3Q8Qm9va01vZGVsPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3NcIiwgbmV3Qm9vayk7XHJcbiAgICAgIHNldEJvb2tzKChwcmV2Qm9va3MpID0+IFsuLi5wcmV2Qm9va3MsIHJlc3BvbnNlLmRhdGFdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBib29rLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBEZWxldGUgYSBib29rXHJcbiAgY29uc3QgZGVsZXRlQm9vayA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MvJHtpZH1gKTtcclxuICAgICAgc2V0Qm9va3MoKHByZXZCb29rcykgPT4gcHJldkJvb2tzLmZpbHRlcigoYm9vaykgPT4gYm9vay5pZCAhPT0gaWQpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBib29rLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBib29rcywgYm9vaywgbG9hZGluZywgZXJyb3IsIGZldGNoQm9va3MsIGZldGNoQm9va0J5SWQsIGNyZWF0ZUJvb2ssIGRlbGV0ZUJvb2sgfTtcclxufTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidXNlQm9va3MiLCJib29rcyIsInNldEJvb2tzIiwiYm9vayIsInNldEJvb2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEJvb2tzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImZldGNoQm9va0J5SWQiLCJpZCIsImNyZWF0ZUJvb2siLCJuZXdCb29rIiwicG9zdCIsInByZXZCb29rcyIsImRlbGV0ZUJvb2siLCJkZWxldGUiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useBooks.ts\n"));

/***/ })

});