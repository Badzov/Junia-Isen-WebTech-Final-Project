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

/***/ "(app-pages-browser)/./src/app/components/CreateBookModal.tsx":
/*!************************************************!*\
  !*** ./src/app/components/CreateBookModal.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar CreateBookModal = function(param) {\n    var onClose = param.onClose, onSave = param.onSave;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        publishedYear: 0,\n        price: 0,\n        averageRating: 0\n    }), 2), book = _useState[0], setBook = _useState[1];\n    var addBook = function() {\n        if (!book.title || !book.publishedYear || !book.price || !book.averageRating) {\n            alert(\"Please fill in all fields before saving.\");\n            return;\n        } else if (book.price < 0 || book.publishedYear > 2025 || book.averageRating < 0 || book.averageRating > 10) {\n            alert(\"Please insert valid valus, prices above 0, published year below the actual year, and the rating in between 0 and 10\");\n            return;\n        }\n        var formattedBook = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, book), {\n            publishedYear: parseInt(book.publishedYear, 10) || 0,\n            price: parseFloat(book.price) || 0,\n            averageRating: parseFloat(book.averageRating) || 0\n        });\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/api/books\", formattedBook).then(function(response) {\n            onSave(response.data);\n            onClose();\n            console.log(\"Data:\", response);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    var handleChange = function(event) {\n        setBook((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, book), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__._)({}, event.target.name, event.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                open: true,\n                onClose: onClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"#ffffff\",\n                            padding: \"20px\",\n                            borderRadius: \"8px\",\n                            boxShadow: \"0px 4px 10px rgba(0, 0, 0, 0.1)\",\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Add a new book\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Book Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Title\",\n                                    name: \"title\",\n                                    required: true,\n                                    value: book.title,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Published Year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Published Year\",\n                                    name: \"publishedYear\",\n                                    required: true,\n                                    value: book.publishedYear,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Book Price\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Price\",\n                                    name: \"price\",\n                                    required: true,\n                                    value: book.price,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Rating\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Rating\",\n                                    name: \"averageRating\",\n                                    required: true,\n                                    value: book.averageRating,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: onClose,\n                                    style: {\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addBook,\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(CreateBookModal, \"btzEYBvfbGInQNzNHUi9RO/sz4A=\");\n_c = CreateBookModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBookModal);\nvar _c;\n$RefreshReg$(_c, \"CreateBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb29rTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUViO0FBQ2lCO0FBRTNDLElBQU1LLGtCQUFrQjtRQUFHQyxnQkFBQUEsU0FBU0MsZUFBQUE7O0lBRWhDLElBQXdCTixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWtCO1FBQzlDTyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsT0FBTztRQUNQQyxlQUFlO0lBQ25CLFFBTE9DLE9BQWlCWCxjQUFYWSxVQUFXWjtJQVF4QixJQUFNYSxVQUFVO1FBRVosSUFBSSxDQUFDRixLQUFLSixLQUFLLElBQUksQ0FBQ0ksS0FBS0gsYUFBYSxJQUFJLENBQUNHLEtBQUtGLEtBQUssSUFBSSxDQUFDRSxLQUFLRCxhQUFhLEVBQUU7WUFDMUVJLE1BQU07WUFDTjtRQUNKLE9BQU8sSUFBSUgsS0FBS0YsS0FBSyxHQUFHLEtBQUtFLEtBQUtILGFBQWEsR0FBRyxRQUFRRyxLQUFLRCxhQUFhLEdBQUcsS0FBS0MsS0FBS0QsYUFBYSxHQUFHLElBQUk7WUFDekdJLE1BQU07WUFDTjtRQUNKO1FBRUEsSUFBTUMsZ0JBQWdCLHNJQUNmSjtZQUNISCxlQUFlUSxTQUFTTCxLQUFLSCxhQUFhLEVBQUUsT0FBTztZQUNuREMsT0FBT1EsV0FBV04sS0FBS0YsS0FBSyxLQUFLO1lBQ2pDQyxlQUFlTyxXQUFXTixLQUFLRCxhQUFhLEtBQUs7O1FBR3JEVCw2Q0FBS0EsQ0FBQ2lCLElBQUksQ0FBQyxtQ0FBbUNILGVBQzdDSSxJQUFJLENBQUMsU0FBQ0M7WUFDSGQsT0FBT2MsU0FBU0MsSUFBSTtZQUNwQmhCO1lBQ0FpQixRQUFRQyxHQUFHLENBQUMsU0FBU0g7UUFDekIsRUFDQ0ksQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1lBQ0pILFFBQVFHLEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUVBLElBQU1DLGVBQWUsU0FBQ0M7UUFDbEJmLFFBQVEsc0lBQ0RELE9BQU0sb0VBQUNnQixNQUFNQyxNQUFNLENBQUNDLElBQUksRUFBR0YsTUFBTUMsTUFBTSxDQUFDRSxLQUFLO0lBRXhEO0lBRUYscUJBQ0U7a0JBQ0EsNEVBQUNDO3NCQUNELDRFQUFDN0IscUZBQUtBO2dCQUFDOEIsTUFBTTtnQkFBTTNCLFNBQVNBOzBCQUN4Qiw0RUFBQ0YscUZBQUdBO29CQUFDOEIsSUFBSTt3QkFDSEMsU0FBUzt3QkFDVEMsZ0JBQWdCO3dCQUNoQkMsWUFBWTt3QkFDWkMsUUFBUTtvQkFDVjs4QkFDRSw0RUFBQ047d0JBQUlPLE9BQU87NEJBQ1ZDLGlCQUFpQjs0QkFDakJDLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLFdBQVc7NEJBQ1hDLFdBQVc7d0JBQ2I7a0NBQ0YsNEVBQUNaOzRCQUFJYSxXQUFVOzs4Q0FDZiw4REFBQ0M7OENBQU0sNEVBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs4Q0FDViw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDRjs4Q0FBTSw0RUFBQ0M7a0RBQUU7Ozs7Ozs7Ozs7OzhDQUNWLDhEQUFDQzs7Ozs7OENBQ0QsOERBQUNDO29DQUFNQyxNQUFLO29DQUFPQyxhQUFZO29DQUFRckIsTUFBSztvQ0FBUXNCLFFBQVE7b0NBQUNyQixPQUFPbkIsS0FBS0osS0FBSztvQ0FBRTZDLFVBQVUxQjs7Ozs7OzhDQUMxRiw4REFBQ3FCOzs7Ozs4Q0FDRCw4REFBQ0Y7OENBQU0sNEVBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs4Q0FDViw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDQztvQ0FBTUMsTUFBSztvQ0FBT0MsYUFBWTtvQ0FBaUJyQixNQUFLO29DQUFnQnNCLFFBQVE7b0NBQUNyQixPQUFPbkIsS0FBS0gsYUFBYTtvQ0FBRTRDLFVBQVUxQjs7Ozs7OzhDQUNuSCw4REFBQ3FCOzs7Ozs4Q0FDRCw4REFBQ0Y7OENBQU0sNEVBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs4Q0FDViw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDQztvQ0FBTUMsTUFBSztvQ0FBT0MsYUFBWTtvQ0FBUXJCLE1BQUs7b0NBQVFzQixRQUFRO29DQUFDckIsT0FBT25CLEtBQUtGLEtBQUs7b0NBQUUyQyxVQUFVMUI7Ozs7Ozs4Q0FDMUYsOERBQUNxQjs7Ozs7OENBQ0QsOERBQUNGOzhDQUFNLDRFQUFDQztrREFBRTs7Ozs7Ozs7Ozs7OENBQ1YsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ0M7b0NBQU1DLE1BQUs7b0NBQU9DLGFBQVk7b0NBQVNyQixNQUFLO29DQUFnQnNCLFFBQVE7b0NBQUNyQixPQUFPbkIsS0FBS0QsYUFBYTtvQ0FBRTBDLFVBQVUxQjs7Ozs7OzhDQUMzRyw4REFBQ3FCOzs7Ozs4Q0FDRCw4REFBQ007b0NBQU9DLFNBQVNqRDtvQ0FBU2lDLE9BQU87d0NBQUNpQixZQUFZO29DQUFNOzhDQUFHOzs7Ozs7OENBQ3ZELDhEQUFDRjtvQ0FBT0MsU0FBU3pDOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEM7R0F6Rk1UO0tBQUFBO0FBMkZOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb29rTW9kYWwudHN4P2FmMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDcmVhdGVCb29rTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvQm9va01vZGVsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBNb2RhbCwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmNvbnN0IENyZWF0ZUJvb2tNb2RhbCA9ICh7IG9uQ2xvc2UsIG9uU2F2ZSB9KSA9PiB7XG5cbiAgICBjb25zdCBbYm9vaywgc2V0Qm9va10gPSB1c2VTdGF0ZTxDcmVhdGVCb29rTW9kZWw+KHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHB1Ymxpc2hlZFllYXI6IDAsXG4gICAgICAgIHByaWNlOiAwLFxuICAgICAgICBhdmVyYWdlUmF0aW5nOiAwLFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhZGRCb29rID0gKCkgPT4ge1xuXG4gICAgICAgIGlmICghYm9vay50aXRsZSB8fCAhYm9vay5wdWJsaXNoZWRZZWFyIHx8ICFib29rLnByaWNlIHx8ICFib29rLmF2ZXJhZ2VSYXRpbmcpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcyBiZWZvcmUgc2F2aW5nLlwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGJvb2sucHJpY2UgPCAwIHx8IGJvb2sucHVibGlzaGVkWWVhciA+IDIwMjUgfHwgYm9vay5hdmVyYWdlUmF0aW5nIDwgMCB8fCBib29rLmF2ZXJhZ2VSYXRpbmcgPiAxMCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zZXJ0IHZhbGlkIHZhbHVzLCBwcmljZXMgYWJvdmUgMCwgcHVibGlzaGVkIHllYXIgYmVsb3cgdGhlIGFjdHVhbCB5ZWFyLCBhbmQgdGhlIHJhdGluZyBpbiBiZXR3ZWVuIDAgYW5kIDEwXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRCb29rID0ge1xuICAgICAgICAgICAgLi4uYm9vayxcbiAgICAgICAgICAgIHB1Ymxpc2hlZFllYXI6IHBhcnNlSW50KGJvb2sucHVibGlzaGVkWWVhciwgMTApIHx8IDAsXG4gICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChib29rLnByaWNlKSB8fCAwLFxuICAgICAgICAgICAgYXZlcmFnZVJhdGluZzogcGFyc2VGbG9hdChib29rLmF2ZXJhZ2VSYXRpbmcpIHx8IDBcbiAgICAgICAgfTtcblxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJywgZm9ybWF0dGVkQm9vaylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBvblNhdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6XCIsIHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldEJvb2soe1xuICAgICAgICAgICAgLi4uYm9vaywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5BZGQgYSBuZXcgYm9vazwvYj48L2xhYmVsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5Cb29rIFRpdGxlPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1RpdGxlJyBuYW1lPSd0aXRsZScgcmVxdWlyZWQgdmFsdWU9e2Jvb2sudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGxhYmVsPjxiPlB1Ymxpc2hlZCBZZWFyPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1B1Ymxpc2hlZCBZZWFyJyBuYW1lPSdwdWJsaXNoZWRZZWFyJyByZXF1aXJlZCB2YWx1ZT17Ym9vay5wdWJsaXNoZWRZZWFyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5Cb29rIFByaWNlPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1ByaWNlJyBuYW1lPSdwcmljZScgcmVxdWlyZWQgdmFsdWU9e2Jvb2sucHJpY2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGxhYmVsPjxiPlJhdGluZzwvYj48L2xhYmVsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdSYXRpbmcnIG5hbWU9J2F2ZXJhZ2VSYXRpbmcnIHJlcXVpcmVkIHZhbHVlPXtib29rLmF2ZXJhZ2VSYXRpbmd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTBweFwifX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQm9va30+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVCb29rTW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTW9kYWwiLCJCb3giLCJDcmVhdGVCb29rTW9kYWwiLCJvbkNsb3NlIiwib25TYXZlIiwidGl0bGUiLCJwdWJsaXNoZWRZZWFyIiwicHJpY2UiLCJhdmVyYWdlUmF0aW5nIiwiYm9vayIsInNldEJvb2siLCJhZGRCb29rIiwiYWxlcnQiLCJmb3JtYXR0ZWRCb29rIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZGl2Iiwib3BlbiIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYiIsImJyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBookModal.tsx\n"));

/***/ })

});