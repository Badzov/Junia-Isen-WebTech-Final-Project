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

/***/ "(app-pages-browser)/./src/app/authors/page.tsx":
/*!**********************************!*\
  !*** ./src/app/authors/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListAuthos; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\nfunction ListAuthos() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), authors = _useState[0], setAuthors = _useState[1];\n    useEffect(function() {\n        getAuthors();\n    });\n    var getAuthors = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/authors\").then(function(data) {\n            setAuthors(data.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: authors === null || authors === void 0 ? void 0 : authors.map(function(author) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: author.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/authors/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(ListAuthos, \"RnpXyQPbvznNLdmfeG521obsnXU=\");\n_c = ListAuthos;\nvar _c;\n$RefreshReg$(_c, \"ListAuthos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEI7QUFDQTtBQUVPO0FBRWxCLFNBQVNHOzs7SUFFcEIsSUFBOEJELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBZ0IsRUFBRSxPQUFqREUsVUFBdUJGLGNBQWRHLGFBQWNIO0lBRTlCSSxVQUFVO1FBQ05DO0lBQ0o7SUFFQSxJQUFNQSxhQUFhO1FBQ2ZOLDZDQUFLQSxDQUFDTyxHQUFHLENBQUMscUNBQ1RDLElBQUksQ0FBQyxTQUFDQztZQUNITCxXQUFXSyxLQUFLQSxJQUFJO1FBQ3hCLEVBQ0NDLENBQUFBLFFBQUssQ0FBQyxTQUFDQztZQUNKQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0U7a0JBQ0csNEVBQUNDO3NCQUFHWCxvQkFBQUEsOEJBQUFBLFFBQVNZLEdBQUcsQ0FBQyxTQUFDQztxQ0FDbEIsOERBQUNIOzhCQUNHLDRFQUFDQztrQ0FBR0UsT0FBT0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQjtHQTNCd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aG9ycy9wYWdlLnRzeD9jZmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEF1dGhvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL0F1dGhvck1vZGVsJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0QXV0aG9zKCkge1xuXG4gICAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGU8QXV0aG9yTW9kZWxbXT4oW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRBdXRob3JzKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGdldEF1dGhvcnMgPSAoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hdXRob3JzJylcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhvcnMoZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnthdXRob3JzPy5tYXAoKGF1dGhvcikgPT4gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnthdXRob3IubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkxpc3RBdXRob3MiLCJhdXRob3JzIiwic2V0QXV0aG9ycyIsInVzZUVmZmVjdCIsImdldEF1dGhvcnMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwicCIsIm1hcCIsImF1dGhvciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/page.tsx\n"));

/***/ })

});