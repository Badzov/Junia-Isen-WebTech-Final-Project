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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BookDetails() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), book = _useState[0], setBook = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), authors = _useState1[0], setAuthors = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Unknown\"), 2), author = _useState2[0], setAuthor = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadAuthors();\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors/\".concat(id)).then(function(response) {\n                setBook(response.data);\n            })[\"catch\"](function(error) {\n                console.log(error);\n            });\n        }\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (book && authors.length > 0) {\n            var _authors_find;\n            var foundAuthor = ((_authors_find = authors.find(function(author) {\n                return author.id === book.authorId;\n            })) === null || _authors_find === void 0 ? void 0 : _authors_find.name) || \"Unknown\";\n            setAuthor(foundAuthor);\n        }\n    }, [\n        book,\n        authors\n    ]);\n    var loadAuthors = function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors\").then(function(response) {\n            setAuthors(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    if (!book) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading book details...\"\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: book.title\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/authors/\".concat(author.id),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Author:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 48\n                                    }, this),\n                                    \" \",\n                                    author\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 45\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Published Year:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.publishedYear\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Price:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 10\n                            }, this),\n                            \" $\",\n                            book.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Rating:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.averageRating,\n                            \"/5\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/books\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetails, \"Ymclt7k/dvwH9t507d7MP/KmqTc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNBO0FBQ2xCO0FBQ0c7QUFFZCxTQUFTSzs7SUFDdEIsSUFBTSxLQUFTSCwwREFBU0EsR0FBaEJJO0lBQ1IsSUFBd0JMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxXQUExQk0sT0FBaUJOLGNBQVhPLFVBQVdQO0lBQ3hCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBaENRLFVBQXVCUixlQUFkUyxhQUFjVDtJQUM5QixJQUE0QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLGdCQUE5QlUsU0FBcUJWLGVBQWJXLFlBQWFYO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNSYTtRQUNBLElBQUlQLElBQUk7WUFDTkgsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxxQ0FBd0MsT0FBSFIsS0FDNUNTLElBQUksQ0FBQ0MsU0FBQUE7Z0JBQ0pSLFFBQVFRLFNBQVNDLElBQUk7WUFDdkIsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQTtnQkFDSEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNoQjtRQUNKO0lBQ0YsR0FBRztRQUFDYjtLQUFHO0lBRVBOLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sUUFBUUUsUUFBUWEsTUFBTSxHQUFHLEdBQUc7Z0JBQ1ZiO1lBQXBCLElBQU1jLGNBQWNkLEVBQUFBLGdCQUFBQSxRQUFRZSxJQUFJLENBQUNiLFNBQUFBO3VCQUFVQSxPQUFPTCxFQUFFLEtBQUtDLEtBQUtrQixRQUFROzRCQUFsRGhCLG9DQUFBQSxjQUFxRGlCLElBQUksS0FBSTtZQUNqRmQsVUFBVVc7UUFDWjtJQUNGLEdBQUc7UUFBQ2hCO1FBQU1FO0tBQVE7SUFFbEIsSUFBTUksY0FBYztRQUNsQlYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxxQ0FDUEMsSUFBSSxDQUFDQyxTQUFBQTtZQUNKTixXQUFXTSxTQUFTQyxJQUFJO1FBQzFCLEVBQ0NDLENBQUFBLFFBQUssQ0FBQ0MsU0FBQUE7WUFDTEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNKO0lBR0EsSUFBSSxDQUFDWixNQUFNLHFCQUFPLDhEQUFDb0I7a0JBQUU7Ozs7OztJQUVyQixxQkFDRTs7MEJBQ0EsOERBQUNDO2dCQUFJQyxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOztrQ0FDNUIsOERBQUNDO2tDQUFJeEIsS0FBS3lCLEtBQUs7Ozs7OztrQ0FDZiw4REFBQzVCLGlEQUFJQTt3QkFBQzZCLE1BQU0sWUFBc0IsT0FBVnRCLE9BQU9MLEVBQUU7OzRCQUFJOzBDQUFDLDhEQUFDcUI7O2tEQUFFLDhEQUFDTztrREFBTzs7Ozs7O29DQUFnQjtvQ0FBRXZCOzs7Ozs7Ozs7Ozs7O2tDQUNuRSw4REFBQ2dCOzswQ0FBRSw4REFBQ087MENBQU87Ozs7Ozs0QkFBd0I7NEJBQUUzQixLQUFLNEIsYUFBYTs7Ozs7OztrQ0FDdkQsOERBQUNSOzswQ0FBRSw4REFBQ087MENBQU87Ozs7Ozs0QkFBZTs0QkFBRzNCLEtBQUs2QixLQUFLOzs7Ozs7O2tDQUN2Qyw4REFBQ1Q7OzBDQUFFLDhEQUFDTzswQ0FBTzs7Ozs7OzRCQUFnQjs0QkFBRTNCLEtBQUs4QixhQUFhOzRCQUFDOzs7Ozs7Ozs7Ozs7OzBCQUVsRCw4REFBQ1Q7MEJBQ0csNEVBQUN4QixpREFBSUE7b0JBQUM2QixNQUFLOzhCQUNYLDRFQUFDSztrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBdkR3QmpDOztRQUNQSCxzREFBU0E7OztLQURGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jvb2tzL1tpZF0vcGFnZS50c3g/YjdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0RldGFpbHMoKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpOyBcbiAgY29uc3QgW2Jvb2ssIHNldEJvb2tdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJVbmtub3duXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEF1dGhvcnMoKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hdXRob3JzLyR7aWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHNldEJvb2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gXG4gIH0sIFtpZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJvb2sgJiYgYXV0aG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmb3VuZEF1dGhvciA9IGF1dGhvcnMuZmluZChhdXRob3IgPT4gYXV0aG9yLmlkID09PSBib29rLmF1dGhvcklkKT8ubmFtZSB8fCBcIlVua25vd25cIjtcbiAgICAgIHNldEF1dGhvcihmb3VuZEF1dGhvcik7XG4gICAgfVxuICB9LCBbYm9vaywgYXV0aG9yc10pO1xuXG4gIGNvbnN0IGxvYWRBdXRob3JzID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hdXRob3JzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0QXV0aG9ycyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cbiAgaWYgKCFib29rKSByZXR1cm4gPHA+TG9hZGluZyBib29rIGRldGFpbHMuLi48L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgPGgxPntib29rLnRpdGxlfTwvaDE+XG4gICAgICA8TGluayBocmVmPXtgL2F1dGhvcnMvJHthdXRob3IuaWR9YH0+IDxwPjxzdHJvbmc+QXV0aG9yOjwvc3Ryb25nPiB7YXV0aG9yfTwvcD48L0xpbms+XG4gICAgICA8cD48c3Ryb25nPlB1Ymxpc2hlZCBZZWFyOjwvc3Ryb25nPiB7Ym9vay5wdWJsaXNoZWRZZWFyfTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+UHJpY2U6PC9zdHJvbmc+ICR7Ym9vay5wcmljZX08L3A+XG4gICAgICA8cD48c3Ryb25nPlJhdGluZzo8L3N0cm9uZz4ge2Jvb2suYXZlcmFnZVJhdGluZ30vNTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tzXCI+XG4gICAgICAgIDxidXR0b24+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiYXhpb3MiLCJMaW5rIiwiQm9va0RldGFpbHMiLCJpZCIsImJvb2siLCJzZXRCb29rIiwiYXV0aG9ycyIsInNldEF1dGhvcnMiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJsb2FkQXV0aG9ycyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImZvdW5kQXV0aG9yIiwiZmluZCIsImF1dGhvcklkIiwibmFtZSIsInAiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJoMSIsInRpdGxlIiwiaHJlZiIsInN0cm9uZyIsInB1Ymxpc2hlZFllYXIiLCJwcmljZSIsImF2ZXJhZ2VSYXRpbmciLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/[id]/page.tsx\n"));

/***/ })

});