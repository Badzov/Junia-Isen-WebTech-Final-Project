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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useBooks */ \"(app-pages-browser)/./src/hooks/useBooks.ts\");\n/* harmony import */ var _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useAuthors */ \"(app-pages-browser)/./src/hooks/useAuthors.ts\");\n/* harmony import */ var _hooks_useRatings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useRatings */ \"(app-pages-browser)/./src/hooks/useRatings.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _components_modals_DeleteBookModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modals/DeleteBookModal */ \"(app-pages-browser)/./src/components/modals/DeleteBookModal.tsx\");\n/* harmony import */ var _components_RatingInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/RatingInput */ \"(app-pages-browser)/./src/components/RatingInput.tsx\");\n/* harmony import */ var _components_RatingsDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/RatingsDrawer */ \"(app-pages-browser)/./src/components/RatingsDrawer.tsx\");\n/* harmony import */ var _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction BookDetails() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { book, loading, error, fetchBookById, deleteBook } = (0,_hooks_useBooks__WEBPACK_IMPORTED_MODULE_3__.useBooks)();\n    const { author, fetchAuthorById } = (0,_hooks_useAuthors__WEBPACK_IMPORTED_MODULE_4__.useAuthors)();\n    const { ratings, loading: ratingsLoading, error: ratingsError, fetchRatings, addRating } = (0,_hooks_useRatings__WEBPACK_IMPORTED_MODULE_5__.useRatings)();\n    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"desc\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BookDetails.useEffect\": ()=>{\n            if (id) {\n                fetchBookById(id).then({\n                    \"BookDetails.useEffect\": (fetchedBook)=>{\n                        if (fetchedBook?.authorId) {\n                            fetchAuthorById(fetchedBook.authorId);\n                        }\n                    }\n                }[\"BookDetails.useEffect\"]);\n                fetchRatings(id);\n            }\n        }\n    }[\"BookDetails.useEffect\"], [\n        id,\n        fetchBookById,\n        fetchAuthorById,\n        fetchRatings\n    ]);\n    const handleAddRating = async (stars, comment)=>{\n        await addRating(id, {\n            stars,\n            comment,\n            bookId: id\n        });\n        fetchRatings(id); // Refresh ratings after adding a new one\n    };\n    const handleDelete = ()=>{\n        if (id) {\n            deleteBook(id).then(()=>{\n                setIsDeleteModalOpen(false);\n            });\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-gray-600\",\n            children: \"Loading book details...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-red-600\",\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n            lineNumber: 58,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_7__.PageTitle, {\n                title: book?.title || \"Book Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl shadow-lg p-8 space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Author:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    author ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: `/authors/${author.id}`,\n                                        className: \"text-blue-600 hover:text-blue-800 transition-colors\",\n                                        children: author.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this) : \"Unknown\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Published Year:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    book?.publishedYear || \"N/A\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Price:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" $\",\n                                    book?.price || \"N/A\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Rating:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" \",\n                                    book?.averageRating === 0 ? \"NaN\" : `${book?.averageRating}/5`\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                variant: \"h6\",\n                                className: \"text-gray-800\",\n                                children: \"Rate this book\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RatingInput__WEBPACK_IMPORTED_MODULE_9__.RatingInput, {\n                                onSubmit: handleAddRating\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>setIsDrawerOpen(true),\n                                        className: \"px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105\",\n                                        children: \"View Ratings\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/books\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105\",\n                                            children: \"Go back\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDeleteModalOpen(true),\n                                className: \"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105\",\n                                children: \"Delete Book\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RatingsDrawer__WEBPACK_IMPORTED_MODULE_10__.RatingsDrawer, {\n                ratings: ratings,\n                isOpen: isDrawerOpen,\n                onClose: ()=>setIsDrawerOpen(false),\n                sortOrder: sortOrder,\n                onSortOrderChange: setSortOrder\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DeleteBookModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\books\\\\[id]\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(BookDetails, \"/EDeaHDE2o/fMSEeLgQPE9/HCMs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_useBooks__WEBPACK_IMPORTED_MODULE_3__.useBooks,\n        _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_4__.useAuthors,\n        _hooks_useRatings__WEBPACK_IMPORTED_MODULE_5__.useRatings\n    ];\n});\n_c = BookDetails;\nvar _c;\n$RefreshReg$(_c, \"BookDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9va3MvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNBO0FBQ087QUFDSTtBQUNBO0FBQzFCO0FBQzZCO0FBQ2U7QUFDWDtBQUNJO0FBQ3ZCO0FBRTVCLFNBQVNZOztJQUN0QixNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHWCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHZix5REFBUUE7SUFDcEUsTUFBTSxFQUFFZ0IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR2hCLDZEQUFVQTtJQUM5QyxNQUFNLEVBQ0ppQixPQUFPLEVBQ1BOLFNBQVNPLGNBQWMsRUFDdkJOLE9BQU9PLFlBQVksRUFDbkJDLFlBQVksRUFDWkMsU0FBUyxFQUNWLEdBQUdwQiw2REFBVUE7SUFDZCxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQzJCLG1CQUFtQkMscUJBQXFCLEdBQUc1QiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUM2QixXQUFXQyxhQUFhLEdBQUc5QiwrQ0FBUUEsQ0FBaUI7SUFFM0RELGdEQUFTQTtpQ0FBQztZQUNSLElBQUlhLElBQUk7Z0JBQ05JLGNBQWNKLElBQUltQixJQUFJOzZDQUFDLENBQUNDO3dCQUN0QixJQUFJQSxhQUFhQyxVQUFVOzRCQUN6QmQsZ0JBQWdCYSxZQUFZQyxRQUFRO3dCQUN0QztvQkFDRjs7Z0JBQ0FWLGFBQWFYO1lBQ2Y7UUFDRjtnQ0FBRztRQUFDQTtRQUFJSTtRQUFlRztRQUFpQkk7S0FBYTtJQUVyRCxNQUFNVyxrQkFBa0IsT0FBT0MsT0FBZUM7UUFDNUMsTUFBTVosVUFBVVosSUFBSTtZQUFFdUI7WUFBT0M7WUFBU0MsUUFBUXpCO1FBQUc7UUFDakRXLGFBQWFYLEtBQUsseUNBQXlDO0lBQzdEO0lBRUEsTUFBTTBCLGVBQWU7UUFDbkIsSUFBSTFCLElBQUk7WUFDTkssV0FBV0wsSUFBSW1CLElBQUksQ0FBQztnQkFDbEJILHFCQUFxQjtZQUN2QjtRQUNGO0lBQ0Y7SUFFQSxJQUFJZCxTQUFTO1FBQ1gscUJBQU8sOERBQUN5QjtZQUFFQyxXQUFVO3NCQUE0Qjs7Ozs7O0lBQ2xEO0lBRUEsSUFBSXpCLE9BQU87UUFDVCxxQkFBTyw4REFBQ3dCO1lBQUVDLFdBQVU7c0JBQTRCekI7Ozs7OztJQUNsRDtJQUVBLHFCQUNFLDhEQUFDMEI7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUNsQyw0REFBU0E7Z0JBQUNvQyxPQUFPN0IsTUFBTTZCLFNBQVM7Ozs7OzswQkFDakMsOERBQUNEO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBRUMsV0FBVTs7a0RBQ1gsOERBQUNHO2tEQUFPOzs7Ozs7b0NBQWlCO29DQUN4QnpCLHVCQUNDLDhEQUFDYixrREFBSUE7d0NBQ0h1QyxNQUFNLENBQUMsU0FBUyxFQUFFMUIsT0FBT04sRUFBRSxFQUFFO3dDQUM3QjRCLFdBQVU7a0RBRVR0QixPQUFPMkIsSUFBSTs7Ozs7K0NBR2Q7Ozs7Ozs7MENBR0osOERBQUNOO2dDQUFFQyxXQUFVOztrREFDWCw4REFBQ0c7a0RBQU87Ozs7OztvQ0FBd0I7b0NBQUU5QixNQUFNaUMsaUJBQWlCOzs7Ozs7OzBDQUUzRCw4REFBQ1A7Z0NBQUVDLFdBQVU7O2tEQUNYLDhEQUFDRztrREFBTzs7Ozs7O29DQUFlO29DQUFHOUIsTUFBTWtDLFNBQVM7Ozs7Ozs7MENBRTNDLDhEQUFDUjtnQ0FBRUMsV0FBVTs7a0RBQ1gsOERBQUNHO2tEQUFPOzs7Ozs7b0NBQWlCO29DQUN4QjlCLE1BQU1tQyxrQkFBa0IsSUFBSSxRQUFRLEdBQUduQyxNQUFNbUMsY0FBYyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7a0NBS25FLDhEQUFDUDt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUM5Qix1RkFBVUE7Z0NBQUN1QyxTQUFRO2dDQUFLVCxXQUFVOzBDQUFnQjs7Ozs7OzBDQUduRCw4REFBQ2hDLGdFQUFXQTtnQ0FBQzBDLFVBQVVoQjs7Ozs7Ozs7Ozs7O2tDQUd6Qiw4REFBQ087d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNXO3dDQUNDQyxTQUFTLElBQU0xQixnQkFBZ0I7d0NBQy9CYyxXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNuQyxrREFBSUE7d0NBQUN1QyxNQUFLO2tEQUNULDRFQUFDTzs0Q0FBT1gsV0FBVTtzREFBNEo7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtsTCw4REFBQ1c7Z0NBQ0NDLFNBQVMsSUFBTXhCLHFCQUFxQjtnQ0FDcENZLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPTCw4REFBQy9CLHFFQUFhQTtnQkFDWlcsU0FBU0E7Z0JBQ1RpQyxRQUFRNUI7Z0JBQ1I2QixTQUFTLElBQU01QixnQkFBZ0I7Z0JBQy9CRyxXQUFXQTtnQkFDWDBCLG1CQUFtQnpCOzs7Ozs7MEJBSXJCLDhEQUFDdkIsMEVBQWVBO2dCQUNkOEMsUUFBUTFCO2dCQUNSMkIsU0FBUyxJQUFNMUIscUJBQXFCO2dCQUNwQzRCLFVBQVVsQjs7Ozs7Ozs7Ozs7O0FBSWxCO0dBN0h3QjNCOztRQUNQVixzREFBU0E7UUFDb0NDLHFEQUFRQTtRQUNoQ0MseURBQVVBO1FBTzFDQyx5REFBVUE7OztLQVZRTyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxKdW5pYSBDb3Vyc2VzXFxXZWIgVGVjaG5vbG9naWVzXFxGaW5hbCBQcm9qZWN0XFx3ZWItZGV2ZWxvcG1lbnQtanVuaWFcXG0xLXNpdGVcXHNyY1xcYXBwXFxib29rc1xcW2lkXVxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VCb29rcyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VCb29rc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRob3JzIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUF1dGhvcnNcIjtcclxuaW1wb3J0IHsgdXNlUmF0aW5ncyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VSYXRpbmdzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI7XHJcbmltcG9ydCBEZWxldGVCb29rTW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0RlbGV0ZUJvb2tNb2RhbFwiO1xyXG5pbXBvcnQgeyBSYXRpbmdJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1JhdGluZ0lucHV0XCI7XHJcbmltcG9ydCB7IFJhdGluZ3NEcmF3ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SYXRpbmdzRHJhd2VyXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va0RldGFpbHMoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHsgaWQ6IHN0cmluZyB9PigpO1xyXG4gIGNvbnN0IHsgYm9vaywgbG9hZGluZywgZXJyb3IsIGZldGNoQm9va0J5SWQsIGRlbGV0ZUJvb2sgfSA9IHVzZUJvb2tzKCk7XHJcbiAgY29uc3QgeyBhdXRob3IsIGZldGNoQXV0aG9yQnlJZCB9ID0gdXNlQXV0aG9ycygpO1xyXG4gIGNvbnN0IHtcclxuICAgIHJhdGluZ3MsXHJcbiAgICBsb2FkaW5nOiByYXRpbmdzTG9hZGluZyxcclxuICAgIGVycm9yOiByYXRpbmdzRXJyb3IsXHJcbiAgICBmZXRjaFJhdGluZ3MsXHJcbiAgICBhZGRSYXRpbmcsXHJcbiAgfSA9IHVzZVJhdGluZ3MoKTtcclxuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZTxcImFzY1wiIHwgXCJkZXNjXCI+KFwiZGVzY1wiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBmZXRjaEJvb2tCeUlkKGlkKS50aGVuKChmZXRjaGVkQm9vaykgPT4ge1xyXG4gICAgICAgIGlmIChmZXRjaGVkQm9vaz8uYXV0aG9ySWQpIHtcclxuICAgICAgICAgIGZldGNoQXV0aG9yQnlJZChmZXRjaGVkQm9vay5hdXRob3JJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZmV0Y2hSYXRpbmdzKGlkKTtcclxuICAgIH1cclxuICB9LCBbaWQsIGZldGNoQm9va0J5SWQsIGZldGNoQXV0aG9yQnlJZCwgZmV0Y2hSYXRpbmdzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFJhdGluZyA9IGFzeW5jIChzdGFyczogbnVtYmVyLCBjb21tZW50Pzogc3RyaW5nKSA9PiB7XHJcbiAgICBhd2FpdCBhZGRSYXRpbmcoaWQsIHsgc3RhcnMsIGNvbW1lbnQsIGJvb2tJZDogaWQgfSk7XHJcbiAgICBmZXRjaFJhdGluZ3MoaWQpOyAvLyBSZWZyZXNoIHJhdGluZ3MgYWZ0ZXIgYWRkaW5nIGEgbmV3IG9uZVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBkZWxldGVCb29rKGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPkxvYWRpbmcgYm9vayBkZXRhaWxzLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTYwMFwiPntlcnJvcn08L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcC02XCI+XHJcbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e2Jvb2s/LnRpdGxlIHx8IFwiQm9vayBEZXRhaWxzXCJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgcC04IHNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+QXV0aG9yOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAge2F1dGhvciA/IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9hdXRob3JzLyR7YXV0aG9yLmlkfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJVbmtub3duXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5QdWJsaXNoZWQgWWVhcjo8L3N0cm9uZz4ge2Jvb2s/LnB1Ymxpc2hlZFllYXIgfHwgXCJOL0FcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz5QcmljZTo8L3N0cm9uZz4gJHtib29rPy5wcmljZSB8fCBcIk4vQVwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPlJhdGluZzo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgIHtib29rPy5hdmVyYWdlUmF0aW5nID09PSAwID8gXCJOYU5cIiA6IGAke2Jvb2s/LmF2ZXJhZ2VSYXRpbmd9LzVgfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUmF0aW5nIElucHV0ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIFJhdGUgdGhpcyBib29rXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8UmF0aW5nSW5wdXQgb25TdWJtaXQ9e2hhbmRsZUFkZFJhdGluZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRHJhd2VyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLWJsdWUtNjAwIGhvdmVyOnRvLWJsdWUtNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVmlldyBSYXRpbmdzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jvb2tzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNTAwIHRvLWdyYXktNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLWdyYXktNjAwIGhvdmVyOnRvLWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIj5cclxuICAgICAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRGVsZXRlTW9kYWxPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC01MDAgdG8tcmVkLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6ZnJvbS1yZWQtNjAwIGhvdmVyOnRvLXJlZC03MDAgdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSBCb29rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUmF0aW5ncyBEcmF3ZXIgKi99XHJcbiAgICAgIDxSYXRpbmdzRHJhd2VyXHJcbiAgICAgICAgcmF0aW5ncz17cmF0aW5nc31cclxuICAgICAgICBpc09wZW49e2lzRHJhd2VyT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIHNvcnRPcmRlcj17c29ydE9yZGVyfVxyXG4gICAgICAgIG9uU29ydE9yZGVyQ2hhbmdlPXtzZXRTb3J0T3JkZXJ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7LyogRGVsZXRlIEJvb2sgTW9kYWwgKi99XHJcbiAgICAgIDxEZWxldGVCb29rTW9kYWxcclxuICAgICAgICBpc09wZW49e2lzRGVsZXRlTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRGVsZXRlTW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VCb29rcyIsInVzZUF1dGhvcnMiLCJ1c2VSYXRpbmdzIiwiTGluayIsIlBhZ2VUaXRsZSIsIkRlbGV0ZUJvb2tNb2RhbCIsIlJhdGluZ0lucHV0IiwiUmF0aW5nc0RyYXdlciIsIlR5cG9ncmFwaHkiLCJCb29rRGV0YWlscyIsImlkIiwiYm9vayIsImxvYWRpbmciLCJlcnJvciIsImZldGNoQm9va0J5SWQiLCJkZWxldGVCb29rIiwiYXV0aG9yIiwiZmV0Y2hBdXRob3JCeUlkIiwicmF0aW5ncyIsInJhdGluZ3NMb2FkaW5nIiwicmF0aW5nc0Vycm9yIiwiZmV0Y2hSYXRpbmdzIiwiYWRkUmF0aW5nIiwiaXNEcmF3ZXJPcGVuIiwic2V0SXNEcmF3ZXJPcGVuIiwiaXNEZWxldGVNb2RhbE9wZW4iLCJzZXRJc0RlbGV0ZU1vZGFsT3BlbiIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsInRoZW4iLCJmZXRjaGVkQm9vayIsImF1dGhvcklkIiwiaGFuZGxlQWRkUmF0aW5nIiwic3RhcnMiLCJjb21tZW50IiwiYm9va0lkIiwiaGFuZGxlRGVsZXRlIiwicCIsImNsYXNzTmFtZSIsImRpdiIsInRpdGxlIiwic3Ryb25nIiwiaHJlZiIsIm5hbWUiLCJwdWJsaXNoZWRZZWFyIiwicHJpY2UiLCJhdmVyYWdlUmF0aW5nIiwidmFyaWFudCIsIm9uU3VibWl0IiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblNvcnRPcmRlckNoYW5nZSIsIm9uRGVsZXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/books/[id]/page.tsx\n"));

/***/ })

});