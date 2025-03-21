"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/[id]/page",{

/***/ "(app-pages-browser)/./src/components/modals/CreateBookModal.tsx":
/*!***************************************************!*\
  !*** ./src/components/modals/CreateBookModal.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Modal!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CreateBookModal = ({ isOpen, onClose, onSave, authors, defaultAuthorId })=>{\n    _s();\n    const [book, setBook] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        publishedYear: 0,\n        price: 0,\n        authorId: defaultAuthorId || \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setBook((prevBook)=>({\n                ...prevBook,\n                [name]: value\n            }));\n    };\n    const handleSave = ()=>{\n        if (!book.title || !book.publishedYear || !book.price || !book.authorId) {\n            setError(\"Please fill in all required fields.\");\n            return;\n        }\n        const publishedYear = Number(book.publishedYear);\n        const price = Number(book.price);\n        if (isNaN(publishedYear)) {\n            setError(\"Published Year must be a valid number.\");\n            return;\n        }\n        if (isNaN(price)) {\n            setError(\"Price must be a valid number.\");\n            return;\n        }\n        const payload = {\n            ...book,\n            publishedYear,\n            price\n        };\n        setError(\"\");\n        onSave(payload); // Pass the corrected payload to onSave\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        open: isOpen,\n        onClose: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Modal_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-6 rounded-lg shadow-lg w-96 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: \"Add a New Book\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 mb-4\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Book Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Title\",\n                                name: \"title\",\n                                required: true,\n                                value: book.title,\n                                onChange: handleChange,\n                                className: \"w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Published Year\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Published Year\",\n                                name: \"publishedYear\",\n                                required: true,\n                                value: book.publishedYear,\n                                onChange: handleChange,\n                                className: \"w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Price\",\n                                name: \"price\",\n                                required: true,\n                                value: book.price,\n                                onChange: handleChange,\n                                className: \"w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined),\n                    !defaultAuthorId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"authorId\",\n                                value: book.authorId,\n                                onChange: handleChange,\n                                className: \"w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select an author\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    authors.map((author)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: author.id,\n                                            children: author.name\n                                        }, author.id, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 19\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: onClose,\n                                className: \"px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSave,\n                                className: \"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600\",\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\modals\\\\CreateBookModal.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateBookModal, \"wJTt99QVRWzrOxuP66cypqOzqUw=\");\n_c = CreateBookModal;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateBookModal);\nvar _c;\n$RefreshReg$(_c, \"CreateBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFscy9DcmVhdGVCb29rTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0c7QUFZM0MsTUFBTUksa0JBQWtELENBQUMsRUFDdkRDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsZUFBZSxFQUNoQjs7SUFDQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQWtCO1FBQ2hEVyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsT0FBTztRQUNQQyxVQUFVTixtQkFBbUI7SUFDL0I7SUFFQSxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1pQixlQUFlLENBQ25CQztRQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQ1gsUUFBUSxDQUFDWSxXQUFjO2dCQUNyQixHQUFHQSxRQUFRO2dCQUNYLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUEsTUFBTUcsYUFBYTtRQUNqQixJQUFJLENBQUNkLEtBQUtFLEtBQUssSUFBSSxDQUFDRixLQUFLRyxhQUFhLElBQUksQ0FBQ0gsS0FBS0ksS0FBSyxJQUFJLENBQUNKLEtBQUtLLFFBQVEsRUFBRTtZQUN2RUUsU0FBUztZQUNUO1FBQ0Y7UUFDQSxNQUFNSixnQkFBZ0JZLE9BQU9mLEtBQUtHLGFBQWE7UUFDL0MsTUFBTUMsUUFBUVcsT0FBT2YsS0FBS0ksS0FBSztRQUUvQixJQUFJWSxNQUFNYixnQkFBZ0I7WUFDeEJJLFNBQVM7WUFDVDtRQUNGO1FBQ0EsSUFBSVMsTUFBTVosUUFBUTtZQUNoQkcsU0FBUztZQUNUO1FBQ0Y7UUFDQSxNQUFNVSxVQUFVO1lBQ2QsR0FBR2pCLElBQUk7WUFDUEc7WUFDQUM7UUFDRjtRQUNBRyxTQUFTO1FBQ1RWLE9BQU9vQixVQUFVLHVDQUF1QztJQUMxRDtJQUVBLHFCQUNFLDhEQUFDekIscUZBQUtBO1FBQUMwQixNQUFNdkI7UUFBUUMsU0FBU0E7a0JBQzVCLDRFQUFDSCxxRkFBR0E7WUFBQzBCLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQTBCOzs7Ozs7b0JBQ3ZDYix1QkFBUyw4REFBQ2dCO3dCQUFFSCxXQUFVO2tDQUFxQmI7Ozs7OztrQ0FDNUMsOERBQUNjO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1KLFdBQVU7MENBQTBDOzs7Ozs7MENBRzNELDhEQUFDSztnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWmhCLE1BQUs7Z0NBQ0xpQixRQUFRO2dDQUNSaEIsT0FBT1gsS0FBS0UsS0FBSztnQ0FDakIwQixVQUFVcEI7Z0NBQ1ZXLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBTUosV0FBVTswQ0FBMEM7Ozs7OzswQ0FHM0QsOERBQUNLO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaaEIsTUFBSztnQ0FDTGlCLFFBQVE7Z0NBQ1JoQixPQUFPWCxLQUFLRyxhQUFhO2dDQUN6QnlCLFVBQVVwQjtnQ0FDVlcsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNSixXQUFVOzBDQUEwQzs7Ozs7OzBDQUczRCw4REFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1poQixNQUFLO2dDQUNMaUIsUUFBUTtnQ0FDUmhCLE9BQU9YLEtBQUtJLEtBQUs7Z0NBQ2pCd0IsVUFBVXBCO2dDQUNWVyxXQUFVOzs7Ozs7Ozs7Ozs7b0JBSWIsQ0FBQ3BCLGlDQUNBLDhEQUFDcUI7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBTUosV0FBVTswQ0FBMEM7Ozs7OzswQ0FHM0QsOERBQUNVO2dDQUNDbkIsTUFBSztnQ0FDTEMsT0FBT1gsS0FBS0ssUUFBUTtnQ0FDcEJ1QixVQUFVcEI7Z0NBQ1ZXLFdBQVU7O2tEQUVWLDhEQUFDVzt3Q0FBT25CLE9BQU07a0RBQUc7Ozs7OztvQ0FDaEJiLFFBQVFpQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNGOzRDQUF1Qm5CLE9BQU9xQixPQUFPQyxFQUFFO3NEQUNyQ0QsT0FBT3RCLElBQUk7MkNBRERzQixPQUFPQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPOUIsOERBQUNiO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ2U7Z0NBQ0NDLFNBQVN2QztnQ0FDVHVCLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2U7Z0NBQ0NDLFNBQVNyQjtnQ0FDVEssV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBMUlNekI7S0FBQUE7QUE0SU4saUVBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcSnVuaWEgQ291cnNlc1xcV2ViIFRlY2hub2xvZ2llc1xcRmluYWwgUHJvamVjdFxcd2ViLWRldmVsb3BtZW50LWp1bmlhXFxtMS1zaXRlXFxzcmNcXGNvbXBvbmVudHNcXG1vZGFsc1xcQ3JlYXRlQm9va01vZGFsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IENyZWF0ZUJvb2tNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvQm9va01vZGVsXCI7XHJcbmltcG9ydCB7IEF1dGhvck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9BdXRob3JNb2RlbFwiO1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZUJvb2tNb2RhbFByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICBvblNhdmU6IChib29rOiBDcmVhdGVCb29rTW9kZWwpID0+IHZvaWQ7XHJcbiAgYXV0aG9yczogQXV0aG9yTW9kZWxbXTtcclxuICBkZWZhdWx0QXV0aG9ySWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENyZWF0ZUJvb2tNb2RhbDogUmVhY3QuRkM8Q3JlYXRlQm9va01vZGFsUHJvcHM+ID0gKHtcclxuICBpc09wZW4sXHJcbiAgb25DbG9zZSxcclxuICBvblNhdmUsXHJcbiAgYXV0aG9ycyxcclxuICBkZWZhdWx0QXV0aG9ySWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbYm9vaywgc2V0Qm9va10gPSB1c2VTdGF0ZTxDcmVhdGVCb29rTW9kZWw+KHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgcHVibGlzaGVkWWVhcjogMCxcclxuICAgIHByaWNlOiAwLFxyXG4gICAgYXV0aG9ySWQ6IGRlZmF1bHRBdXRob3JJZCB8fCBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PlxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0Qm9vaygocHJldkJvb2spID0+ICh7XHJcbiAgICAgIC4uLnByZXZCb29rLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWJvb2sudGl0bGUgfHwgIWJvb2sucHVibGlzaGVkWWVhciB8fCAhYm9vay5wcmljZSB8fCAhYm9vay5hdXRob3JJZCkge1xyXG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBmaWxsIGluIGFsbCByZXF1aXJlZCBmaWVsZHMuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwdWJsaXNoZWRZZWFyID0gTnVtYmVyKGJvb2sucHVibGlzaGVkWWVhcik7XHJcbiAgICBjb25zdCBwcmljZSA9IE51bWJlcihib29rLnByaWNlKTtcclxuXHJcbiAgICBpZiAoaXNOYU4ocHVibGlzaGVkWWVhcikpIHtcclxuICAgICAgc2V0RXJyb3IoXCJQdWJsaXNoZWQgWWVhciBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTmFOKHByaWNlKSkge1xyXG4gICAgICBzZXRFcnJvcihcIlByaWNlIG11c3QgYmUgYSB2YWxpZCBudW1iZXIuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAuLi5ib29rLFxyXG4gICAgICBwdWJsaXNoZWRZZWFyLFxyXG4gICAgICBwcmljZSxcclxuICAgIH07XHJcbiAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIG9uU2F2ZShwYXlsb2FkKTsgLy8gUGFzcyB0aGUgY29ycmVjdGVkIHBheWxvYWQgdG8gb25TYXZlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy05NiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+QWRkIGEgTmV3IEJvb2s8L2gyPlxyXG4gICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtYi00XCI+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIEJvb2sgVGl0bGVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Ym9vay50aXRsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXQtMSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBQdWJsaXNoZWQgWWVhclxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1Ymxpc2hlZCBZZWFyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHVibGlzaGVkWWVhclwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Ym9vay5wdWJsaXNoZWRZZWFyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBtdC0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICB2YWx1ZT17Ym9vay5wcmljZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXQtMSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIENvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSBhdXRob3IgZHJvcGRvd24gb25seSBpZiBkZWZhdWx0QXV0aG9ySWQgaXMgbm90IHByb3ZpZGVkICovfVxyXG4gICAgICAgICAgeyFkZWZhdWx0QXV0aG9ySWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICBBdXRob3JcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JJZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Ym9vay5hdXRob3JJZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIG10LTEgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhbiBhdXRob3I8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHthdXRob3JzLm1hcCgoYXV0aG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthdXRob3IuaWR9IHZhbHVlPXthdXRob3IuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDAgbXItMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9va01vZGFsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiQm94IiwiQ3JlYXRlQm9va01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uU2F2ZSIsImF1dGhvcnMiLCJkZWZhdWx0QXV0aG9ySWQiLCJib29rIiwic2V0Qm9vayIsInRpdGxlIiwicHVibGlzaGVkWWVhciIsInByaWNlIiwiYXV0aG9ySWQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Qm9vayIsImhhbmRsZVNhdmUiLCJOdW1iZXIiLCJpc05hTiIsInBheWxvYWQiLCJvcGVuIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJvcHRpb24iLCJtYXAiLCJhdXRob3IiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modals/CreateBookModal.tsx\n"));

/***/ })

});