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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BookDetails() {\n    _s();\n    var id = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), book = _useState[0], setBook = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), authors = _useState1[0], setAuthors = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Unkown\"), 2), author = _useState2[0], setAuthor = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        loadAuthors();\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/books/\".concat(id)).then(function(response) {\n                setBook(response.data);\n            })[\"catch\"](function(error) {\n                console.log(error);\n            });\n        }\n    }, [\n        id\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (book && authors.length > 0) {\n            var _authors_find;\n            var foundAuthor = ((_authors_find = authors.find(function(author) {\n                return author.id === book.authorId;\n            })) === null || _authors_find === void 0 ? void 0 : _authors_find.name) || \"Unknown\";\n            setAuthor(foundAuthor);\n        }\n    }, [\n        book,\n        authors\n    ]);\n    var loadAuthors = function() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/authors\").then(function(response) {\n            setAuthors(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    if (!book) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading book details...\"\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: book.title\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Author:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Published Year:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 10\n                            }, this),\n                            \" \",\n                            book.publishedYear\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Price:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 10\n                            }, this),\n                            \" $\",\n                            book.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/books\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/books/[id]/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(BookDetails, \"YMGzIoR+AldjfMchTYXaQn2OAM0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNBO0FBQ2xCO0FBQ0c7QUFFZCxTQUFTSzs7SUFDdEIsSUFBTSxLQUFTSCwwREFBU0EsR0FBaEJJO0lBQ1IsSUFBd0JMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxXQUExQk0sT0FBaUJOLGNBQVhPLFVBQVdQO0lBQ3hCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBaENRLFVBQXVCUixlQUFkUyxhQUFjVDtJQUM5QixJQUE0QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLGVBQTlCVSxTQUFxQlYsZUFBYlcsWUFBYVg7SUFFNUJELGdEQUFTQSxDQUFDO1FBQ1JhO1FBQ0EsSUFBSVAsSUFBSTtZQUNOSCw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLG1DQUFzQyxPQUFIUixLQUMxQ1MsSUFBSSxDQUFDQyxTQUFBQTtnQkFDSlIsUUFBUVEsU0FBU0MsSUFBSTtZQUN2QixFQUNDQyxDQUFBQSxRQUFLLENBQUNDLFNBQUFBO2dCQUNIQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2hCO1FBQ0o7SUFDRixHQUFHO1FBQUNiO0tBQUc7SUFFUE4sZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxRQUFRRSxRQUFRYSxNQUFNLEdBQUcsR0FBRztnQkFDVmI7WUFBcEIsSUFBTWMsY0FBY2QsRUFBQUEsZ0JBQUFBLFFBQVFlLElBQUksQ0FBQ2IsU0FBQUE7dUJBQVVBLE9BQU9MLEVBQUUsS0FBS0MsS0FBS2tCLFFBQVE7NEJBQWxEaEIsb0NBQUFBLGNBQXFEaUIsSUFBSSxLQUFJO1lBQ2pGZCxVQUFVVztRQUNaO0lBQ0YsR0FBRztRQUFDaEI7UUFBTUU7S0FBUTtJQUVsQixJQUFNSSxjQUFjO1FBQ2xCViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLHFDQUNQQyxJQUFJLENBQUNDLFNBQUFBO1lBQ0pOLFdBQVdNLFNBQVNDLElBQUk7UUFDMUIsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDQyxTQUFBQTtZQUNMQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0o7SUFHQSxJQUFJLENBQUNaLE1BQU0scUJBQU8sOERBQUNvQjtrQkFBRTs7Ozs7O0lBRXJCLHFCQUNFOzswQkFDQSw4REFBQ0M7Z0JBQUlDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU87O2tDQUM1Qiw4REFBQ0M7a0NBQUl4QixLQUFLeUIsS0FBSzs7Ozs7O2tDQUNmLDhEQUFDTDs7MENBQUUsOERBQUNNOzBDQUFPOzs7Ozs7NEJBQWdCOzRCQUFFdEI7Ozs7Ozs7a0NBQzdCLDhEQUFDZ0I7OzBDQUFFLDhEQUFDTTswQ0FBTzs7Ozs7OzRCQUF3Qjs0QkFBRTFCLEtBQUsyQixhQUFhOzs7Ozs7O2tDQUN2RCw4REFBQ1A7OzBDQUFFLDhEQUFDTTswQ0FBTzs7Ozs7OzRCQUFlOzRCQUFHMUIsS0FBSzRCLEtBQUs7Ozs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDUDswQkFDRyw0RUFBQ3hCLGlEQUFJQTtvQkFBQ2dDLE1BQUs7OEJBQ1gsNEVBQUNDO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0F0RHdCaEM7O1FBQ1BILHNEQUFTQTs7O0tBREZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeD9iN2E5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rRGV0YWlscygpIHtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7IFxuICBjb25zdCBbYm9vaywgc2V0Qm9va10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZShcIlVua293blwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRBdXRob3JzKCk7XG4gICAgaWYgKGlkKSB7XG4gICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgc2V0Qm9vayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSBcbiAgfSwgW2lkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYm9vayAmJiBhdXRob3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZvdW5kQXV0aG9yID0gYXV0aG9ycy5maW5kKGF1dGhvciA9PiBhdXRob3IuaWQgPT09IGJvb2suYXV0aG9ySWQpPy5uYW1lIHx8IFwiVW5rbm93blwiO1xuICAgICAgc2V0QXV0aG9yKGZvdW5kQXV0aG9yKTtcbiAgICB9XG4gIH0sIFtib29rLCBhdXRob3JzXSk7XG5cbiAgY29uc3QgbG9hZEF1dGhvcnMgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2F1dGhvcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRBdXRob3JzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cblxuICBpZiAoIWJvb2spIHJldHVybiA8cD5Mb2FkaW5nIGJvb2sgZGV0YWlscy4uLjwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+XG4gICAgICA8aDE+e2Jvb2sudGl0bGV9PC9oMT5cbiAgICAgIDxwPjxzdHJvbmc+QXV0aG9yOjwvc3Ryb25nPiB7YXV0aG9yfTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+UHVibGlzaGVkIFllYXI6PC9zdHJvbmc+IHtib29rLnB1Ymxpc2hlZFllYXJ9PC9wPlxuICAgICAgPHA+PHN0cm9uZz5QcmljZTo8L3N0cm9uZz4gJHtib29rLnByaWNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tzXCI+XG4gICAgICAgIDxidXR0b24+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiYXhpb3MiLCJMaW5rIiwiQm9va0RldGFpbHMiLCJpZCIsImJvb2siLCJzZXRCb29rIiwiYXV0aG9ycyIsInNldEF1dGhvcnMiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJsb2FkQXV0aG9ycyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImZvdW5kQXV0aG9yIiwiZmluZCIsImF1dGhvcklkIiwibmFtZSIsInAiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJoMSIsInRpdGxlIiwic3Ryb25nIiwicHVibGlzaGVkWWVhciIsInByaWNlIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/[id]/page.tsx\n"));

/***/ })

});