"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/page",{

/***/ "(app-pages-browser)/./src/app/hooks/useAuthors.ts":
/*!*************************************!*\
  !*** ./src/app/hooks/useAuthors.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuthors: function() { return /* binding */ useAuthors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// src/hooks/useAuthors.ts\n\n\n\n\n\n\nvar useAuthors = function() {\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2), authors = _useState[0], setAuthors = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), author = _useState1[0], setAuthor = _useState1[1]; // State for a single author\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2), loading = _useState2[0], setLoading = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_1__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), error = _useState3[0], setError = _useState3[1];\n    // Fetch all authors with optional query parameters\n    var fetchAuthors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(search) {\n            var sortBy, sortOrder, params, response, error;\n            var _arguments = arguments;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        sortBy = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : \"name\", sortOrder = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : \"ASC\";\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        params = {\n                            search: search,\n                            sortBy: sortBy,\n                            sortOrder: sortOrder\n                        };\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/api/authors\", {\n                                params: params\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        setAuthors(response.data);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to fetch authors.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(search) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    // Fetch a single author by ID\n    var fetchAuthorById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(id) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/api/authors/\".concat(id))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        setAuthor(response.data); // Set the single author state\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to fetch author details.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(id) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    // Create a new author\n    var createAuthor = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(newAuthor) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/authors\", newAuthor)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        setAuthors(function(prevAuthors) {\n                            return (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(prevAuthors).concat([\n                                response.data\n                            ]);\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to create author.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createAuthor(newAuthor) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Delete an author\n    var deleteAuthor = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(id) {\n            var error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        setError(null);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:3001/api/authors/\".concat(id))\n                        ];\n                    case 2:\n                        _state.sent();\n                        setAuthors(function(prevAuthors) {\n                            return prevAuthors.filter(function(author) {\n                                return author.id !== id;\n                            });\n                        });\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        setError(\"Failed to delete author.\");\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setLoading(false);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function deleteAuthor(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Return all necessary values and functions\n    return {\n        authors: authors,\n        author: author,\n        loading: loading,\n        error: error,\n        fetchAuthors: fetchAuthors,\n        fetchAuthorById: fetchAuthorById,\n        createAuthor: createAuthor,\n        deleteAuthor: deleteAuthor\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlQXV0aG9ycy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7Ozs7QUFDb0I7QUFDcEI7QUFHbkIsSUFBTUcsYUFBYTtJQUN4QixJQUE4QkYsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixFQUFFLE9BQWpERyxVQUF1QkgsY0FBZEksYUFBY0o7SUFDOUIsSUFBNEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBcUIsV0FBbERLLFNBQXFCTCxlQUFiTSxZQUFhTixlQUFvQyw0QkFBNEI7SUFDNUYsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFoQ08sVUFBdUJQLGVBQWRRLGFBQWNSO0lBQzlCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQTNDUyxRQUFtQlQsZUFBWlUsV0FBWVY7SUFFMUIsbURBQW1EO0lBQ25ELElBQU1XLGVBQWVaLGtEQUFXQTttQkFBQyw0RUFBT2E7Z0JBQWlCQyxRQUF5QkMsV0FJeEVDLFFBQ0FDLFVBRUNQOzs7Ozt3QkFQOENJLDZFQUFpQixRQUFRQyxnRkFBNEI7d0JBQzVHTixXQUFXO3dCQUNYRSxTQUFTOzs7Ozs7Ozs7d0JBRURLLFNBQVM7NEJBQUVILFFBQUFBOzRCQUFRQyxRQUFBQTs0QkFBUUMsV0FBQUE7d0JBQVU7d0JBQzFCOzs0QkFBTWIsNkNBQUtBLENBQUNnQixHQUFHLENBQUMscUNBQXFDO2dDQUFFRixRQUFBQTs0QkFBTzs7O3dCQUF6RUMsV0FBVzt3QkFDakJaLFdBQVdZLFNBQVNFLElBQUk7Ozs7Ozt3QkFDakJUO3dCQUNQQyxTQUFTO3dCQUNUUyxRQUFRVixLQUFLLENBQUNBOzs7Ozs7d0JBRWRELFdBQVc7Ozs7Ozs7Ozs7UUFFZjt3QkFid0NJOzs7U0FhckMsRUFBRTtJQUVMLDhCQUE4QjtJQUM5QixJQUFNUSxrQkFBa0JyQixrREFBV0E7bUJBQUMsNEVBQU9zQjtnQkFJakNMLFVBRUNQOzs7O3dCQUxURCxXQUFXO3dCQUNYRSxTQUFTOzs7Ozs7Ozs7d0JBRVU7OzRCQUFNVCw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxxQ0FBd0MsT0FBSEk7Ozt3QkFBaEVMLFdBQVc7d0JBQ2pCVixVQUFVVSxTQUFTRSxJQUFJLEdBQUcsOEJBQThCOzs7Ozs7d0JBQ2pEVDt3QkFDUEMsU0FBUzt3QkFDVFMsUUFBUVYsS0FBSyxDQUFDQTs7Ozs7O3dCQUVkRCxXQUFXOzs7Ozs7Ozs7O1FBRWY7d0JBWjJDYTs7O1NBWXhDLEVBQUU7SUFFTCxzQkFBc0I7SUFDdEIsSUFBTUM7bUJBQWUsNEVBQU9DO2dCQUlsQlAsVUFFQ1A7Ozs7d0JBTFRELFdBQVc7d0JBQ1hFLFNBQVM7Ozs7Ozs7Ozt3QkFFVTs7NEJBQU1ULDZDQUFLQSxDQUFDdUIsSUFBSSxDQUFDLHFDQUFxQ0Q7Ozt3QkFBakVQLFdBQVc7d0JBQ2pCWixXQUFXLFNBQUNxQjttQ0FBZ0Isb0VBQUlBLG9CQUFKO2dDQUFpQlQsU0FBU0UsSUFBSTs2QkFBQzs7Ozs7Ozt3QkFDcERUO3dCQUNQQyxTQUFTO3dCQUNUUyxRQUFRVixLQUFLLENBQUNBOzs7Ozs7d0JBRWRELFdBQVc7Ozs7Ozs7Ozs7UUFFZjt3QkFaTWMsYUFBc0JDOzs7O0lBYzVCLG1CQUFtQjtJQUNuQixJQUFNRzttQkFBZSw0RUFBT0w7Z0JBTWpCWjs7Ozt3QkFMVEQsV0FBVzt3QkFDWEUsU0FBUzs7Ozs7Ozs7O3dCQUVQOzs0QkFBTVQsNkNBQU0wQixDQUFBQSxTQUFNLENBQUMscUNBQXdDLE9BQUhOOzs7d0JBQXhEO3dCQUNBakIsV0FBVyxTQUFDcUI7bUNBQWdCQSxZQUFZRyxNQUFNLENBQUMsU0FBQ3ZCO3VDQUFXQSxPQUFPZ0IsRUFBRSxLQUFLQTs7Ozs7Ozs7d0JBQ2xFWjt3QkFDUEMsU0FBUzt3QkFDVFMsUUFBUVYsS0FBSyxDQUFDQTs7Ozs7O3dCQUVkRCxXQUFXOzs7Ozs7Ozs7O1FBRWY7d0JBWk1rQixhQUFzQkw7Ozs7SUFjNUIsNENBQTRDO0lBQzVDLE9BQU87UUFDTGxCLFNBQUFBO1FBQ0FFLFFBQUFBO1FBQ0FFLFNBQUFBO1FBQ0FFLE9BQUFBO1FBQ0FFLGNBQUFBO1FBQ0FTLGlCQUFBQTtRQUNBRSxjQUFBQTtRQUNBSSxjQUFBQTtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvb2tzL3VzZUF1dGhvcnMudHM/YTY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaG9va3MvdXNlQXV0aG9ycy50c1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBdXRob3JNb2RlbCwgQ3JlYXRlQXV0aG9yTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL0F1dGhvck1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aG9ycyA9ICgpID0+IHtcclxuICBjb25zdCBbYXV0aG9ycywgc2V0QXV0aG9yc10gPSB1c2VTdGF0ZTxBdXRob3JNb2RlbFtdPihbXSk7XHJcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlPEF1dGhvck1vZGVsIHwgbnVsbD4obnVsbCk7IC8vIFN0YXRlIGZvciBhIHNpbmdsZSBhdXRob3JcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLy8gRmV0Y2ggYWxsIGF1dGhvcnMgd2l0aCBvcHRpb25hbCBxdWVyeSBwYXJhbWV0ZXJzXHJcbiAgY29uc3QgZmV0Y2hBdXRob3JzID0gdXNlQ2FsbGJhY2soYXN5bmMgKHNlYXJjaD86IHN0cmluZywgc29ydEJ5OiBzdHJpbmcgPSBcIm5hbWVcIiwgc29ydE9yZGVyOiBcIkFTQ1wiIHwgXCJERVNDXCIgPSBcIkFTQ1wiKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7IHNlYXJjaCwgc29ydEJ5LCBzb3J0T3JkZXIgfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2F1dGhvcnNcIiwgeyBwYXJhbXMgfSk7XHJcbiAgICAgIHNldEF1dGhvcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdXRob3JzLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEZldGNoIGEgc2luZ2xlIGF1dGhvciBieSBJRFxyXG4gIGNvbnN0IGZldGNoQXV0aG9yQnlJZCA9IHVzZUNhbGxiYWNrKGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hdXRob3JzLyR7aWR9YCk7XHJcbiAgICAgIHNldEF1dGhvcihyZXNwb25zZS5kYXRhKTsgLy8gU2V0IHRoZSBzaW5nbGUgYXV0aG9yIHN0YXRlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdXRob3IgZGV0YWlscy5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgYXV0aG9yXHJcbiAgY29uc3QgY3JlYXRlQXV0aG9yID0gYXN5bmMgKG5ld0F1dGhvcjogQ3JlYXRlQXV0aG9yTW9kZWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXV0aG9yc1wiLCBuZXdBdXRob3IpO1xyXG4gICAgICBzZXRBdXRob3JzKChwcmV2QXV0aG9ycykgPT4gWy4uLnByZXZBdXRob3JzLCByZXNwb25zZS5kYXRhXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgYXV0aG9yLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBEZWxldGUgYW4gYXV0aG9yXHJcbiAgY29uc3QgZGVsZXRlQXV0aG9yID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hdXRob3JzLyR7aWR9YCk7XHJcbiAgICAgIHNldEF1dGhvcnMoKHByZXZBdXRob3JzKSA9PiBwcmV2QXV0aG9ycy5maWx0ZXIoKGF1dGhvcikgPT4gYXV0aG9yLmlkICE9PSBpZCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIGF1dGhvci5cIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUmV0dXJuIGFsbCBuZWNlc3NhcnkgdmFsdWVzIGFuZCBmdW5jdGlvbnNcclxuICByZXR1cm4ge1xyXG4gICAgYXV0aG9ycyxcclxuICAgIGF1dGhvciwgXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgICBmZXRjaEF1dGhvcnMsXHJcbiAgICBmZXRjaEF1dGhvckJ5SWQsIFxyXG4gICAgY3JlYXRlQXV0aG9yLFxyXG4gICAgZGVsZXRlQXV0aG9yLFxyXG4gIH07XHJcbn07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJheGlvcyIsInVzZUF1dGhvcnMiLCJhdXRob3JzIiwic2V0QXV0aG9ycyIsImF1dGhvciIsInNldEF1dGhvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQXV0aG9ycyIsInNlYXJjaCIsInNvcnRCeSIsInNvcnRPcmRlciIsInBhcmFtcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJmZXRjaEF1dGhvckJ5SWQiLCJpZCIsImNyZWF0ZUF1dGhvciIsIm5ld0F1dGhvciIsInBvc3QiLCJwcmV2QXV0aG9ycyIsImRlbGV0ZUF1dGhvciIsImRlbGV0ZSIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useAuthors.ts\n"));

/***/ })

});