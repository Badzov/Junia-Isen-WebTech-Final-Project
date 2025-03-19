"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/[id]/page",{

/***/ "(app-pages-browser)/./src/app/books/[id]/page.tsx":
/*!*************************************!*\
  !*** ./src/app/books/[id]/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BookDetails() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), book = _useState[0], setBook = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), authors = _useState1[0], setAuthors = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), author = _useState2[0], setAuthor = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadAuthors();\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/books/\".concat(id)).then(function(response) {\n                setBook(response.data);\n            })[\"catch\"](function(error) {\n                console.log(error);\n            });\n        } else if (id) {\n            var _authors_find;\n            setAuthor(((_authors_find = authors.find(function(author) {\n                return author.id === book.authorId;\n            })) === null || _authors_find === void 0 ? void 0 : _authors_find.name) || \"Unknown\");\n        }\n    }, [\n        id,\n        authors\n    ]);\n    var loadAuthors = function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors\").then(function(response) {\n            setAuthors(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    if (!book) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading book details...\"\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: book.title\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Author:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Published Year:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.publishedYear\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Price:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 10\n                            }, this),\n                            \" $\",\n                            book.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/books\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetails, \"/DnDYZJzleSXMoV4yd4/KaYE8aQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNBO0FBQ2xCO0FBQ0c7QUFFZCxTQUFTSzs7SUFDdEIsSUFBTSxLQUFTSCwwREFBU0EsR0FBaEJJO0lBQ1IsSUFBd0JMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxXQUExQk0sT0FBaUJOLGNBQVhPLFVBQVdQO0lBQ3hCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBaENRLFVBQXVCUixlQUFkUyxhQUFjVDtJQUM5QixJQUE0QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFdBQTlCVSxTQUFxQlYsZUFBYlcsWUFBYVg7SUFFNUJELGdEQUFTQSxDQUFDO1FBQ1JhO1FBQ0EsSUFBSVAsSUFBSTtZQUNOSCw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLG1DQUFzQyxPQUFIUixLQUMxQ1MsSUFBSSxDQUFDQyxTQUFBQTtnQkFDSlIsUUFBUVEsU0FBU0MsSUFBSTtZQUN2QixFQUNDQyxDQUFBQSxRQUFLLENBQUNDLFNBQUFBO2dCQUNIQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2hCO1FBQ0osT0FBTyxJQUFJYixJQUFJO2dCQUNERztZQUFWRyxVQUFVSCxFQUFBQSxnQkFBQUEsUUFBUWEsSUFBSSxDQUFDWCxTQUFBQTt1QkFBVUEsT0FBT0wsRUFBRSxLQUFLQyxLQUFLZ0IsUUFBUTs0QkFBbERkLG9DQUFBQSxjQUFxRGUsSUFBSSxLQUFJO1FBQzNFO0lBQ0YsR0FBRztRQUFDbEI7UUFBSUc7S0FBUTtJQUVoQixJQUFNSSxjQUFjO1FBQ2xCViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLHFDQUNUQyxJQUFJLENBQUMsU0FBQ0M7WUFDSE4sV0FBV00sU0FBU0MsSUFBSTtRQUM1QixFQUNDQyxDQUFBQSxRQUFLLENBQUMsU0FBQ0M7WUFDSkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNsQjtJQUNGO0lBRUEsSUFBSSxDQUFDWixNQUFNLHFCQUFPLDhEQUFDa0I7a0JBQUU7Ozs7OztJQUVyQixxQkFDRTs7MEJBQ0EsOERBQUNDO2dCQUFJQyxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOztrQ0FDNUIsOERBQUNDO2tDQUFJdEIsS0FBS3VCLEtBQUs7Ozs7OztrQ0FDZiw4REFBQ0w7OzBDQUFFLDhEQUFDTTswQ0FBTzs7Ozs7OzRCQUFnQjs0QkFBRXhCLEtBQUtJLE1BQU07Ozs7Ozs7a0NBQ3hDLDhEQUFDYzs7MENBQUUsOERBQUNNOzBDQUFPOzs7Ozs7NEJBQXdCOzRCQUFFeEIsS0FBS3lCLGFBQWE7Ozs7Ozs7a0NBQ3ZELDhEQUFDUDs7MENBQUUsOERBQUNNOzBDQUFPOzs7Ozs7NEJBQWU7NEJBQUd4QixLQUFLMEIsS0FBSzs7Ozs7Ozs7Ozs7OzswQkFFekMsOERBQUNQOzBCQUNHLDRFQUFDdEIsaURBQUlBO29CQUFDOEIsTUFBSzs4QkFDWCw0RUFBQ0M7a0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQWhEd0I5Qjs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ib29rcy9baWRdL3BhZ2UudHN4P2I3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzKCkge1xuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTsgXG4gIGNvbnN0IFtib29rLCBzZXRCb29rXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXV0aG9ycywgc2V0QXV0aG9yc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2F1dGhvciwgc2V0QXV0aG9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEF1dGhvcnMoKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcy8ke2lkfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBzZXRCb29rKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlkKSB7XG4gICAgICAgIHNldEF1dGhvcihhdXRob3JzLmZpbmQoYXV0aG9yID0+IGF1dGhvci5pZCA9PT0gYm9vay5hdXRob3JJZCk/Lm5hbWUgfHwgXCJVbmtub3duXCIpXG4gICAgfVxuICB9LCBbaWQsIGF1dGhvcnNdKTtcblxuICBjb25zdCBsb2FkQXV0aG9ycyA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYXV0aG9ycycpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEF1dGhvcnMocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIGlmICghYm9vaykgcmV0dXJuIDxwPkxvYWRpbmcgYm9vayBkZXRhaWxzLi4uPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgIDxoMT57Ym9vay50aXRsZX08L2gxPlxuICAgICAgPHA+PHN0cm9uZz5BdXRob3I6PC9zdHJvbmc+IHtib29rLmF1dGhvcn08L3A+XG4gICAgICA8cD48c3Ryb25nPlB1Ymxpc2hlZCBZZWFyOjwvc3Ryb25nPiB7Ym9vay5wdWJsaXNoZWRZZWFyfTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+UHJpY2U6PC9zdHJvbmc+ICR7Ym9vay5wcmljZX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rc1wiPlxuICAgICAgICA8YnV0dG9uPkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImF4aW9zIiwiTGluayIsIkJvb2tEZXRhaWxzIiwiaWQiLCJib29rIiwic2V0Qm9vayIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiYXV0aG9yIiwic2V0QXV0aG9yIiwibG9hZEF1dGhvcnMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwiYXV0aG9ySWQiLCJuYW1lIiwicCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImgxIiwidGl0bGUiLCJzdHJvbmciLCJwdWJsaXNoZWRZZWFyIiwicHJpY2UiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/[id]/page.tsx\n"));

/***/ })

});