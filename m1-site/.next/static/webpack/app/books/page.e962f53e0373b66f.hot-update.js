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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar CreateBookModal = function(param) {\n    var onClose = param.onClose, onSave = param.onSave;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getAuthors();\n    }, []);\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        publishedYear: 0,\n        price: 0,\n        averageRating: 0,\n        authorId: \"\"\n    }), 2), book = _useState[0], setBook = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        biography: \"\",\n        numberOfBooksWritten: 0,\n        averageRating: 0,\n        photoURL: \"\"\n    }), 2), authors = _useState1[0], setAuthors = _useState1[1];\n    var getAuthors = function() {\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/api/authors\").then(function(response) {\n            setAuthors(response.data);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    var addBook = function() {\n        if (!book.title || !book.publishedYear || !book.price || !book.averageRating) {\n            alert(\"Please fill in all fields before saving.\");\n            return;\n        } else if (book.price < 0 || book.publishedYear > 2025 || book.averageRating < 0 || book.averageRating > 5) {\n            alert(\"Please insert valid valus, prices above 0, published year below the actual year, and the rating in between 0 and 10\");\n            return;\n        }\n        var formattedBook = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, book), {\n            publishedYear: parseInt(book.publishedYear, 10) || 0,\n            price: parseFloat(book.price) || 0,\n            averageRating: parseFloat(book.averageRating) || 0\n        });\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/api/books\", formattedBook).then(function(response) {\n            onSave(response.data);\n            onClose();\n            console.log(\"Data:\", response);\n        })[\"catch\"](function(error) {\n            console.error(error);\n        });\n    };\n    var handleChange = function(event) {\n        setBook((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, book), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__._)({}, event.target.name, event.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                open: true,\n                onClose: onClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\",\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            backgroundColor: \"#ffffff\",\n                            padding: \"20px\",\n                            borderRadius: \"8px\",\n                            boxShadow: \"0px 4px 10px rgba(0, 0, 0, 0.1)\",\n                            textAlign: \"center\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Add a new book\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Book Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Title\",\n                                    name: \"title\",\n                                    required: true,\n                                    value: book.title,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Published Year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Published Year\",\n                                    name: \"publishedYear\",\n                                    required: true,\n                                    value: book.publishedYear,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Book Price\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Price\",\n                                    name: \"price\",\n                                    required: true,\n                                    value: book.price,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Rating\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 20\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Rating\",\n                                    name: \"averageRating\",\n                                    required: true,\n                                    value: book.averageRating,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginTop: \"10px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: onClose,\n                                            style: {\n                                                marginRight: \"10px\"\n                                            },\n                                            children: \"Close\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: addBook,\n                                            children: \"Save\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/pedraza/Desktop/web-development/m1-site/src/app/components/CreateBookModal.tsx\",\n            lineNumber: 78,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_s(CreateBookModal, \"oy7RoLcEP2g5r8cYudGabSRxUow=\");\n_c = CreateBookModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBookModal);\nvar _c;\n$RefreshReg$(_c, \"CreateBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCb29rTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUViO0FBQ2lCO0FBRVQ7QUFFbEMsSUFBTU0sa0JBQWtCO1FBQUdDLGdCQUFBQSxTQUFTQyxlQUFBQTs7SUFFaENILGdEQUFTQSxDQUFDO1FBQ05JO0lBQ0osR0FBRyxFQUFFO0lBRUwsSUFBd0JSLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBa0I7UUFDOUNTLE9BQU87UUFDUEMsZUFBZTtRQUNmQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsVUFBVTtJQUNkLFFBTk9DLE9BQWlCZCxjQUFYZSxVQUFXZjtJQVF4QixJQUErQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFjO1FBQ2pEZ0IsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFdBQVc7UUFDWEMsc0JBQXNCO1FBQ3RCUCxlQUFlO1FBQ2ZRLFVBQVU7SUFDZCxRQVBPQyxVQUF3QnJCLGVBQWZzQixhQUFldEI7SUFTL0IsSUFBTVEsYUFBYTtRQUNmUCw2Q0FBS0EsQ0FBQ3NCLEdBQUcsQ0FBQyxxQ0FDVEMsSUFBSSxDQUFDLFNBQUNDO1lBQ0hILFdBQVdHLFNBQVNDLElBQUk7UUFDNUIsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDLFNBQUNDO1lBQ0pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDSjtJQUdBLElBQU1FLFVBQVU7UUFFWixJQUFJLENBQUNoQixLQUFLTCxLQUFLLElBQUksQ0FBQ0ssS0FBS0osYUFBYSxJQUFJLENBQUNJLEtBQUtILEtBQUssSUFBSSxDQUFDRyxLQUFLRixhQUFhLEVBQUU7WUFDMUVtQixNQUFNO1lBQ047UUFDSixPQUFPLElBQUlqQixLQUFLSCxLQUFLLEdBQUcsS0FBS0csS0FBS0osYUFBYSxHQUFHLFFBQVFJLEtBQUtGLGFBQWEsR0FBRyxLQUFLRSxLQUFLRixhQUFhLEdBQUcsR0FBRztZQUN4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IjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJvb2tNb2RhbC50c3g/YWYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENyZWF0ZUJvb2tNb2RlbCB9IGZyb20gJy4uL21vZGVscy9Cb29rTW9kZWwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IE1vZGFsLCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IEF1dGhvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL0F1dGhvck1vZGVsJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3JlYXRlQm9va01vZGFsID0gKHsgb25DbG9zZSwgb25TYXZlIH0pID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEF1dGhvcnMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBbYm9vaywgc2V0Qm9va10gPSB1c2VTdGF0ZTxDcmVhdGVCb29rTW9kZWw+KHtcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHB1Ymxpc2hlZFllYXI6IDAsXG4gICAgICAgIHByaWNlOiAwLFxuICAgICAgICBhdmVyYWdlUmF0aW5nOiAwLFxuICAgICAgICBhdXRob3JJZDogXCJcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnMgXSA9IHVzZVN0YXRlPEF1dGhvck1vZGVsPih7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBiaW9ncmFwaHk6IFwiXCIsXG4gICAgICAgIG51bWJlck9mQm9va3NXcml0dGVuOiAwLFxuICAgICAgICBhdmVyYWdlUmF0aW5nOiAwLFxuICAgICAgICBwaG90b1VSTDogXCJcIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0QXV0aG9ycyA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2F1dGhvcnMnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhvcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY29uc3QgYWRkQm9vayA9ICgpID0+IHtcblxuICAgICAgICBpZiAoIWJvb2sudGl0bGUgfHwgIWJvb2sucHVibGlzaGVkWWVhciB8fCAhYm9vay5wcmljZSB8fCAhYm9vay5hdmVyYWdlUmF0aW5nKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMgYmVmb3JlIHNhdmluZy5cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChib29rLnByaWNlIDwgMCB8fCBib29rLnB1Ymxpc2hlZFllYXIgPiAyMDI1IHx8IGJvb2suYXZlcmFnZVJhdGluZyA8IDAgfHwgYm9vay5hdmVyYWdlUmF0aW5nID4gNSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zZXJ0IHZhbGlkIHZhbHVzLCBwcmljZXMgYWJvdmUgMCwgcHVibGlzaGVkIHllYXIgYmVsb3cgdGhlIGFjdHVhbCB5ZWFyLCBhbmQgdGhlIHJhdGluZyBpbiBiZXR3ZWVuIDAgYW5kIDEwXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRCb29rID0ge1xuICAgICAgICAgICAgLi4uYm9vayxcbiAgICAgICAgICAgIHB1Ymxpc2hlZFllYXI6IHBhcnNlSW50KGJvb2sucHVibGlzaGVkWWVhciwgMTApIHx8IDAsXG4gICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChib29rLnByaWNlKSB8fCAwLFxuICAgICAgICAgICAgYXZlcmFnZVJhdGluZzogcGFyc2VGbG9hdChib29rLmF2ZXJhZ2VSYXRpbmcpIHx8IDBcbiAgICAgICAgfTtcblxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJywgZm9ybWF0dGVkQm9vaylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBvblNhdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGE6XCIsIHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldEJvb2soe1xuICAgICAgICAgICAgLi4uYm9vaywgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgIDxCb3ggc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5BZGQgYSBuZXcgYm9vazwvYj48L2xhYmVsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5Cb29rIFRpdGxlPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1RpdGxlJyBuYW1lPSd0aXRsZScgcmVxdWlyZWQgdmFsdWU9e2Jvb2sudGl0bGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGxhYmVsPjxiPlB1Ymxpc2hlZCBZZWFyPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1B1Ymxpc2hlZCBZZWFyJyBuYW1lPSdwdWJsaXNoZWRZZWFyJyByZXF1aXJlZCB2YWx1ZT17Ym9vay5wdWJsaXNoZWRZZWFyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxsYWJlbD48Yj5Cb29rIFByaWNlPC9iPjwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J1ByaWNlJyBuYW1lPSdwcmljZScgcmVxdWlyZWQgdmFsdWU9e2Jvb2sucHJpY2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGxhYmVsPjxiPlJhdGluZzwvYj48L2xhYmVsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdSYXRpbmcnIG5hbWU9J2F2ZXJhZ2VSYXRpbmcnIHJlcXVpcmVkIHZhbHVlPXtib29rLmF2ZXJhZ2VSYXRpbmd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRCb29rfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm94PlxuICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9va01vZGFsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk1vZGFsIiwiQm94IiwidXNlRWZmZWN0IiwiQ3JlYXRlQm9va01vZGFsIiwib25DbG9zZSIsIm9uU2F2ZSIsImdldEF1dGhvcnMiLCJ0aXRsZSIsInB1Ymxpc2hlZFllYXIiLCJwcmljZSIsImF2ZXJhZ2VSYXRpbmciLCJhdXRob3JJZCIsImJvb2siLCJzZXRCb29rIiwiaWQiLCJuYW1lIiwiYmlvZ3JhcGh5IiwibnVtYmVyT2ZCb29rc1dyaXR0ZW4iLCJwaG90b1VSTCIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkQm9vayIsImFsZXJ0IiwiZm9ybWF0dGVkQm9vayIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsInBvc3QiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2Iiwib3BlbiIsInN4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYiIsImJyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwibWFyZ2luVG9wIiwiYnV0dG9uIiwib25DbGljayIsIm1hcmdpblJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreateBookModal.tsx\n"));

/***/ })

});