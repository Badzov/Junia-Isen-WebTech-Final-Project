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

/***/ "(app-pages-browser)/./src/app/authors/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/authors/[id]/page.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthorDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useAuthors */ \"(app-pages-browser)/./src/hooks/useAuthors.ts\");\n/* harmony import */ var _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useBooks */ \"(app-pages-browser)/./src/hooks/useBooks.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/DeleteAuthorModal */ \"(app-pages-browser)/./src/components/modals/DeleteAuthorModal.tsx\");\n/* harmony import */ var _components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AuthorBooksList */ \"(app-pages-browser)/./src/components/AuthorBooksList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import useBooks\n\n\n\n // Import AuthorBooksList\nfunction AuthorDetails() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { author, loading: authorLoading, error: authorError, fetchAuthorById, deleteAuthor } = (0,_hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors)();\n    const { books, fetchBooksByAuthorId } = (0,_hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks)();\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthorDetails.useEffect\": ()=>{\n            if (id) {\n                fetchAuthorById(id);\n                fetchBooksByAuthorId(id);\n            }\n        }\n    }[\"AuthorDetails.useEffect\"], [\n        id,\n        fetchAuthorById,\n        fetchBooksByAuthorId\n    ]);\n    // Handle deleting the author\n    const handleDelete = ()=>{\n        if (id) {\n            deleteAuthor(id).then(()=>{\n                setIsDeleteModalOpen(false); // Close the modal after deletion\n            });\n        }\n    };\n    if (authorLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-gray-600\",\n            children: \"Loading author details...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this);\n    }\n    if (authorError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-red-600\",\n            children: [\n                \"Error: \",\n                authorError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle, {\n                title: author?.name || \"Author Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl shadow-lg p-8 space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Biography:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.biography || \"No biography available.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Number of books written:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.numberOfBooksWritten || \"0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Average rating:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.averageRating === 0 ? \"NaN\" : `${author?.averageRating}/5`\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: author?.photoURL || \"/placeholder-author.jpg\",\n                                    alt: author?.name,\n                                    className: \"w-48 h-48 object-cover rounded-full shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__.AuthorBooksList, {\n                        books: books\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/authors\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDeleteModalOpen(true),\n                                className: \"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105\",\n                                children: \"Delete Autho\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"cOFXsNYy2aPjgy8/4p9uIyGVtAc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors,\n        _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDVztBQUNKLENBQUMsa0JBQWtCO0FBQ3pDO0FBQzZCO0FBQ21CO0FBQ1AsQ0FBQyx5QkFBeUI7QUFFakYsU0FBU1M7O0lBQ3RCLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdSLDBEQUFTQTtJQUV4QixNQUFNLEVBQ0pTLE1BQU0sRUFDTkMsU0FBU0MsYUFBYSxFQUN0QkMsT0FBT0MsV0FBVyxFQUNsQkMsZUFBZSxFQUNmQyxZQUFZLEVBQ2IsR0FBR2QsNkRBQVVBO0lBRWQsTUFBTSxFQUFFZSxLQUFLLEVBQUVDLG9CQUFvQixFQUFFLEdBQUdmLHlEQUFRQTtJQUNoRCxNQUFNLENBQUNnQixtQkFBbUJDLHFCQUFxQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFM0RELGdEQUFTQTttQ0FBQztZQUNSLElBQUlVLElBQUk7Z0JBQ05NLGdCQUFnQk47Z0JBQ2hCUyxxQkFBcUJUO1lBQ3ZCO1FBQ0Y7a0NBQUc7UUFBQ0E7UUFBSU07UUFBaUJHO0tBQXFCO0lBRTlDLDZCQUE2QjtJQUM3QixNQUFNRyxlQUFlO1FBQ25CLElBQUlaLElBQUk7WUFDTk8sYUFBYVAsSUFBSWEsSUFBSSxDQUFDO2dCQUNwQkYscUJBQXFCLFFBQVEsaUNBQWlDO1lBQ2hFO1FBQ0Y7SUFDRjtJQUVBLElBQUlSLGVBQWU7UUFDakIscUJBQ0UsOERBQUNXO1lBQUVDLFdBQVU7c0JBQTRCOzs7Ozs7SUFFN0M7SUFFQSxJQUFJVixhQUFhO1FBQ2YscUJBQU8sOERBQUNTO1lBQUVDLFdBQVU7O2dCQUEyQjtnQkFBUVY7Ozs7Ozs7SUFDekQ7SUFFQSxxQkFDRSw4REFBQ1c7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUNuQiw0REFBU0E7Z0JBQUNxQixPQUFPaEIsUUFBUWlCLFFBQVE7Ozs7OzswQkFDbEMsOERBQUNGO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFFQyxXQUFVOzswREFDWCw4REFBQ0k7MERBQU87Ozs7Ozs0Q0FBb0I7NENBQzNCbEIsUUFBUW1CLGFBQWE7Ozs7Ozs7a0RBRXhCLDhEQUFDTjt3Q0FBRUMsV0FBVTs7MERBQ1gsOERBQUNJOzBEQUFPOzs7Ozs7NENBQWtDOzRDQUN6Q2xCLFFBQVFvQix3QkFBd0I7Ozs7Ozs7a0RBRW5DLDhEQUFDUDt3Q0FBRUMsV0FBVTs7MERBQ1gsOERBQUNJOzBEQUFPOzs7Ozs7NENBQXlCOzRDQUNoQ2xCLFFBQVFxQixrQkFBa0IsSUFDdkIsUUFDQSxHQUFHckIsUUFBUXFCLGNBQWMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUdwQyw4REFBQ047Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNRO29DQUNDQyxLQUFLdkIsUUFBUXdCLFlBQVk7b0NBQ3pCQyxLQUFLekIsUUFBUWlCO29DQUNiSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEIsOERBQUNqQix3RUFBZUE7d0JBQUNVLE9BQU9BOzs7Ozs7a0NBQ3hCLDhEQUFDUTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDcEIsa0RBQUlBO29DQUFDZ0MsTUFBSzs4Q0FDVCw0RUFBQ0M7d0NBQU9iLFdBQVU7a0RBQTRKOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU1sTCw4REFBQ2E7Z0NBQ0NDLFNBQVMsSUFBTWxCLHFCQUFxQjtnQ0FDcENJLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPTCw4REFBQ2xCLDRFQUFpQkE7Z0JBQ2hCaUMsUUFBUXBCO2dCQUNScUIsU0FBUyxJQUFNcEIscUJBQXFCO2dCQUNwQ3FCLFVBQVVwQjs7Ozs7Ozs7Ozs7O0FBSWxCO0dBakd3QmI7O1FBQ1BQLHNEQUFTQTtRQVFwQkMseURBQVVBO1FBRTBCQyxxREFBUUE7OztLQVgxQksiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcSnVuaWEgQ291cnNlc1xcV2ViIFRlY2hub2xvZ2llc1xcRmluYWwgUHJvamVjdFxcd2ViLWRldmVsb3BtZW50LWp1bmlhXFxtMS1zaXRlXFxzcmNcXGFwcFxcYXV0aG9yc1xcW2lkXVxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VBdXRob3JzIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhvcnNcIjtcclxuaW1wb3J0IHsgdXNlQm9va3MgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQm9va3NcIjsgLy8gSW1wb3J0IHVzZUJvb2tzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI7XHJcbmltcG9ydCBEZWxldGVBdXRob3JNb2RhbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvRGVsZXRlQXV0aG9yTW9kYWxcIjtcclxuaW1wb3J0IHsgQXV0aG9yQm9va3NMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yQm9va3NMaXN0XCI7IC8vIEltcG9ydCBBdXRob3JCb29rc0xpc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvckRldGFpbHMoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHsgaWQ6IHN0cmluZyB9PigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBhdXRob3IsXHJcbiAgICBsb2FkaW5nOiBhdXRob3JMb2FkaW5nLFxyXG4gICAgZXJyb3I6IGF1dGhvckVycm9yLFxyXG4gICAgZmV0Y2hBdXRob3JCeUlkLFxyXG4gICAgZGVsZXRlQXV0aG9yLFxyXG4gIH0gPSB1c2VBdXRob3JzKCk7XHJcblxyXG4gIGNvbnN0IHsgYm9va3MsIGZldGNoQm9va3NCeUF1dGhvcklkIH0gPSB1c2VCb29rcygpO1xyXG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGZldGNoQXV0aG9yQnlJZChpZCk7XHJcbiAgICAgIGZldGNoQm9va3NCeUF1dGhvcklkKGlkKTtcclxuICAgIH1cclxuICB9LCBbaWQsIGZldGNoQXV0aG9yQnlJZCwgZmV0Y2hCb29rc0J5QXV0aG9ySWRdKTtcclxuXHJcbiAgLy8gSGFuZGxlIGRlbGV0aW5nIHRoZSBhdXRob3JcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZGVsZXRlQXV0aG9yKGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7IC8vIENsb3NlIHRoZSBtb2RhbCBhZnRlciBkZWxldGlvblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoYXV0aG9yTG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPkxvYWRpbmcgYXV0aG9yIGRldGFpbHMuLi48L3A+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF1dGhvckVycm9yKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNjAwXCI+RXJyb3I6IHthdXRob3JFcnJvcn08L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcC02XCI+XHJcbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e2F1dGhvcj8ubmFtZSB8fCBcIkF1dGhvciBEZXRhaWxzXCJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgcC04IHNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+QmlvZ3JhcGh5Ojwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICB7YXV0aG9yPy5iaW9ncmFwaHkgfHwgXCJObyBiaW9ncmFwaHkgYXZhaWxhYmxlLlwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPk51bWJlciBvZiBib29rcyB3cml0dGVuOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICB7YXV0aG9yPy5udW1iZXJPZkJvb2tzV3JpdHRlbiB8fCBcIjBcIn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5BdmVyYWdlIHJhdGluZzo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2F1dGhvcj8uYXZlcmFnZVJhdGluZyA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBcIk5hTlwiXHJcbiAgICAgICAgICAgICAgICA6IGAke2F1dGhvcj8uYXZlcmFnZVJhdGluZ30vNWB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2F1dGhvcj8ucGhvdG9VUkwgfHwgXCIvcGxhY2Vob2xkZXItYXV0aG9yLmpwZ1wifVxyXG4gICAgICAgICAgICAgIGFsdD17YXV0aG9yPy5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDggaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogTGlzdCBvZiBib29rcyB3cml0dGVuIGJ5IHRoZSBhdXRob3IgKi99XHJcbiAgICAgICAgPEF1dGhvckJvb2tzTGlzdCBib29rcz17Ym9va3N9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRob3JzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNTAwIHRvLWdyYXktNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLWdyYXktNjAwIGhvdmVyOnRvLWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIj5cclxuICAgICAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRGVsZXRlIGJ1dHRvbiBvbiB0aGUgZmFyIHJpZ2h0ICovfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXJlZC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmZyb20tcmVkLTYwMCBob3Zlcjp0by1yZWQtNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgQXV0aG9cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBEZWxldGUgQXV0aG9yIE1vZGFsICovfVxyXG4gICAgICA8RGVsZXRlQXV0aG9yTW9kYWxcclxuICAgICAgICBpc09wZW49e2lzRGVsZXRlTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRGVsZXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VBdXRob3JzIiwidXNlQm9va3MiLCJMaW5rIiwiUGFnZVRpdGxlIiwiRGVsZXRlQXV0aG9yTW9kYWwiLCJBdXRob3JCb29rc0xpc3QiLCJBdXRob3JEZXRhaWxzIiwiaWQiLCJhdXRob3IiLCJsb2FkaW5nIiwiYXV0aG9yTG9hZGluZyIsImVycm9yIiwiYXV0aG9yRXJyb3IiLCJmZXRjaEF1dGhvckJ5SWQiLCJkZWxldGVBdXRob3IiLCJib29rcyIsImZldGNoQm9va3NCeUF1dGhvcklkIiwiaXNEZWxldGVNb2RhbE9wZW4iLCJzZXRJc0RlbGV0ZU1vZGFsT3BlbiIsImhhbmRsZURlbGV0ZSIsInRoZW4iLCJwIiwiY2xhc3NOYW1lIiwiZGl2IiwidGl0bGUiLCJuYW1lIiwic3Ryb25nIiwiYmlvZ3JhcGh5IiwibnVtYmVyT2ZCb29rc1dyaXR0ZW4iLCJhdmVyYWdlUmF0aW5nIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiLCJhbHQiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});