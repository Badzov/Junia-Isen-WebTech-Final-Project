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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthorDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useAuthors */ \"(app-pages-browser)/./src/hooks/useAuthors.ts\");\n/* harmony import */ var _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useBooks */ \"(app-pages-browser)/./src/hooks/useBooks.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/DeleteAuthorModal */ \"(app-pages-browser)/./src/components/modals/DeleteAuthorModal.tsx\");\n/* harmony import */ var _components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AuthorBooksList */ \"(app-pages-browser)/./src/components/AuthorBooksList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction AuthorDetails() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { author, loading: authorLoading, error: authorError, fetchAuthorById, deleteAuthor, authors } = (0,_hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors)();\n    const { books, fetchBooksByAuthorId, deleteBook, createBook } = (0,_hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks)(); // Destructure createBook\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthorDetails.useEffect\": ()=>{\n            if (id) {\n                fetchAuthorById(id);\n                fetchBooksByAuthorId(id);\n            }\n        }\n    }[\"AuthorDetails.useEffect\"], [\n        id,\n        fetchAuthorById,\n        fetchBooksByAuthorId\n    ]);\n    // Handle deleting the author\n    const handleDeleteAuthor = ()=>{\n        if (id) {\n            deleteAuthor(id).then(()=>{\n                setIsDeleteModalOpen(false);\n            });\n        }\n    };\n    // Handle deleting a book\n    const handleDeleteBook = (bookId)=>{\n        deleteBook(bookId).then(()=>{\n            fetchBooksByAuthorId(id);\n        });\n    };\n    // Handle creating a new book\n    const handleCreateBook = (book)=>{\n        createBook(book).then(()=>{\n            fetchBooksByAuthorId(id);\n        });\n    };\n    if (authorLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-gray-600\",\n            children: \"Loading author details...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this);\n    }\n    if (authorError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-red-600\",\n            children: [\n                \"Error: \",\n                authorError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle, {\n                title: author?.name || \"Author Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl shadow-lg p-8 space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Biography:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.biography || \"No biography available.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Number of books written:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.numberOfBooksWritten || \"0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Average Rating:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.averageRating === 0 ? \"NaN\" : `${author?.averageRating}/5`\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: author?.photoURL || \"/placeholder-author.jpg\",\n                                    alt: author?.name,\n                                    className: \"w-48 h-48 object-cover rounded-full shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__.AuthorBooksList, {\n                        books: books,\n                        onDeleteBook: handleDeleteBook,\n                        onCreateBook: handleCreateBook,\n                        authors: authors\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/authors\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDeleteModalOpen(true),\n                                className: \"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105\",\n                                children: \"Delete Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: handleDeleteAuthor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"mW3+AzbCf1tpERxKnbvVars/A1o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors,\n        _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDVztBQUNKO0FBQ3RCO0FBQzZCO0FBQ21CO0FBQ1A7QUFHdkQsU0FBU1M7O0lBQ3RCLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdSLDBEQUFTQTtJQUV4QixNQUFNLEVBQ0pTLE1BQU0sRUFDTkMsU0FBU0MsYUFBYSxFQUN0QkMsT0FBT0MsV0FBVyxFQUNsQkMsZUFBZSxFQUNmQyxZQUFZLEVBQ1pDLE9BQU8sRUFDUixHQUFHZiw2REFBVUE7SUFFZCxNQUFNLEVBQUVnQixLQUFLLEVBQUVDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRSxHQUFHbEIseURBQVFBLElBQUkseUJBQXlCO0lBQ3JHLE1BQU0sQ0FBQ21CLG1CQUFtQkMscUJBQXFCLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzREQsZ0RBQVNBO21DQUFDO1lBQ1IsSUFBSVUsSUFBSTtnQkFDTk0sZ0JBQWdCTjtnQkFDaEJVLHFCQUFxQlY7WUFDdkI7UUFDRjtrQ0FBRztRQUFDQTtRQUFJTTtRQUFpQkk7S0FBcUI7SUFFOUMsNkJBQTZCO0lBQzdCLE1BQU1LLHFCQUFxQjtRQUN6QixJQUFJZixJQUFJO1lBQ05PLGFBQWFQLElBQUlnQixJQUFJLENBQUM7Z0JBQ3BCRixxQkFBcUI7WUFDdkI7UUFDRjtJQUNGO0lBRUEseUJBQXlCO0lBQ3pCLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QlAsV0FBV08sUUFBUUYsSUFBSSxDQUFDO1lBQ3RCTixxQkFBcUJWO1FBQ3ZCO0lBQ0Y7SUFFQSw2QkFBNkI7SUFDN0IsTUFBTW1CLG1CQUFtQixDQUFDQztRQUN4QlIsV0FBV1EsTUFBTUosSUFBSSxDQUFDO1lBQ3BCTixxQkFBcUJWO1FBQ3ZCO0lBQ0Y7SUFFQSxJQUFJRyxlQUFlO1FBQ2pCLHFCQUNFLDhEQUFDa0I7WUFBRUMsV0FBVTtzQkFBNEI7Ozs7OztJQUU3QztJQUVBLElBQUlqQixhQUFhO1FBQ2YscUJBQU8sOERBQUNnQjtZQUFFQyxXQUFVOztnQkFBMkI7Z0JBQVFqQjs7Ozs7OztJQUN6RDtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUMxQiw0REFBU0E7Z0JBQUM0QixPQUFPdkIsUUFBUXdCLFFBQVE7Ozs7OzswQkFDbEMsOERBQUNGO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFFQyxXQUFVOzswREFDWCw4REFBQ0k7MERBQU87Ozs7Ozs0Q0FBb0I7NENBQzNCekIsUUFBUTBCLGFBQWE7Ozs7Ozs7a0RBRXhCLDhEQUFDTjt3Q0FBRUMsV0FBVTs7MERBQ1gsOERBQUNJOzBEQUFPOzs7Ozs7NENBQWtDOzRDQUN6Q3pCLFFBQVEyQix3QkFBd0I7Ozs7Ozs7a0RBRW5DLDhEQUFDUDt3Q0FBRUMsV0FBVTs7MERBQ1gsOERBQUNJOzBEQUFPOzs7Ozs7NENBQXlCOzRDQUNoQ3pCLFFBQVE0QixrQkFBa0IsSUFDdkIsUUFDQSxHQUFHNUIsUUFBUTRCLGNBQWMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OzBDQUdwQyw4REFBQ047Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNRO29DQUNDQyxLQUFLOUIsUUFBUStCLFlBQVk7b0NBQ3pCQyxLQUFLaEMsUUFBUXdCO29DQUNiSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLaEIsOERBQUN4Qix3RUFBZUE7d0JBQ2RXLE9BQU9BO3dCQUNQeUIsY0FBY2pCO3dCQUNka0IsY0FBY2hCO3dCQUNkWCxTQUFTQTs7Ozs7O2tDQUVYLDhEQUFDZTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDM0Isa0RBQUlBO29DQUFDeUMsTUFBSzs4Q0FDVCw0RUFBQ0M7d0NBQU9mLFdBQVU7a0RBQTRKOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU1sTCw4REFBQ2U7Z0NBQ0NDLFNBQVMsSUFBTXhCLHFCQUFxQjtnQ0FDcENRLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPTCw4REFBQ3pCLDRFQUFpQkE7Z0JBQ2hCMEMsUUFBUTFCO2dCQUNSMkIsU0FBUyxJQUFNMUIscUJBQXFCO2dCQUNwQzJCLFVBQVUxQjs7Ozs7Ozs7Ozs7O0FBSWxCO0dBckh3QmhCOztRQUNQUCxzREFBU0E7UUFTcEJDLHlEQUFVQTtRQUVrREMscURBQVFBOzs7S0FabERLIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEp1bmlhIENvdXJzZXNcXFdlYiBUZWNobm9sb2dpZXNcXEZpbmFsIFByb2plY3RcXHdlYi1kZXZlbG9wbWVudC1qdW5pYVxcbTEtc2l0ZVxcc3JjXFxhcHBcXGF1dGhvcnNcXFtpZF1cXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlQXV0aG9ycyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRob3JzXCI7XHJcbmltcG9ydCB7IHVzZUJvb2tzIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUJvb2tzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI7XHJcbmltcG9ydCBEZWxldGVBdXRob3JNb2RhbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvRGVsZXRlQXV0aG9yTW9kYWxcIjtcclxuaW1wb3J0IHsgQXV0aG9yQm9va3NMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yQm9va3NMaXN0XCI7XHJcbmltcG9ydCB7IENyZWF0ZUJvb2tNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvQm9va01vZGVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JEZXRhaWxzKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgYXV0aG9yLFxyXG4gICAgbG9hZGluZzogYXV0aG9yTG9hZGluZyxcclxuICAgIGVycm9yOiBhdXRob3JFcnJvcixcclxuICAgIGZldGNoQXV0aG9yQnlJZCxcclxuICAgIGRlbGV0ZUF1dGhvcixcclxuICAgIGF1dGhvcnMsXHJcbiAgfSA9IHVzZUF1dGhvcnMoKTtcclxuXHJcbiAgY29uc3QgeyBib29rcywgZmV0Y2hCb29rc0J5QXV0aG9ySWQsIGRlbGV0ZUJvb2ssIGNyZWF0ZUJvb2sgfSA9IHVzZUJvb2tzKCk7IC8vIERlc3RydWN0dXJlIGNyZWF0ZUJvb2tcclxuICBjb25zdCBbaXNEZWxldGVNb2RhbE9wZW4sIHNldElzRGVsZXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBmZXRjaEF1dGhvckJ5SWQoaWQpO1xyXG4gICAgICBmZXRjaEJvb2tzQnlBdXRob3JJZChpZCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkLCBmZXRjaEF1dGhvckJ5SWQsIGZldGNoQm9va3NCeUF1dGhvcklkXSk7XHJcblxyXG4gIC8vIEhhbmRsZSBkZWxldGluZyB0aGUgYXV0aG9yXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQXV0aG9yID0gKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGRlbGV0ZUF1dGhvcihpZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGVNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgZGVsZXRpbmcgYSBib29rXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQm9vayA9IChib29rSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgZGVsZXRlQm9vayhib29rSWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBmZXRjaEJvb2tzQnlBdXRob3JJZChpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgY3JlYXRpbmcgYSBuZXcgYm9va1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUJvb2sgPSAoYm9vazogQ3JlYXRlQm9va01vZGVsKSA9PiB7XHJcbiAgICBjcmVhdGVCb29rKGJvb2spLnRoZW4oKCkgPT4ge1xyXG4gICAgICBmZXRjaEJvb2tzQnlBdXRob3JJZChpZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoYXV0aG9yTG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPkxvYWRpbmcgYXV0aG9yIGRldGFpbHMuLi48L3A+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF1dGhvckVycm9yKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNjAwXCI+RXJyb3I6IHthdXRob3JFcnJvcn08L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcC02XCI+XHJcbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e2F1dGhvcj8ubmFtZSB8fCBcIkF1dGhvciBEZXRhaWxzXCJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbGcgcC04IHNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+QmlvZ3JhcGh5Ojwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICB7YXV0aG9yPy5iaW9ncmFwaHkgfHwgXCJObyBiaW9ncmFwaHkgYXZhaWxhYmxlLlwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPk51bWJlciBvZiBib29rcyB3cml0dGVuOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICB7YXV0aG9yPy5udW1iZXJPZkJvb2tzV3JpdHRlbiB8fCBcIjBcIn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5BdmVyYWdlIFJhdGluZzo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2F1dGhvcj8uYXZlcmFnZVJhdGluZyA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBcIk5hTlwiXHJcbiAgICAgICAgICAgICAgICA6IGAke2F1dGhvcj8uYXZlcmFnZVJhdGluZ30vNWB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2F1dGhvcj8ucGhvdG9VUkwgfHwgXCIvcGxhY2Vob2xkZXItYXV0aG9yLmpwZ1wifVxyXG4gICAgICAgICAgICAgIGFsdD17YXV0aG9yPy5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDggaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogTGlzdCBvZiBib29rcyB3cml0dGVuIGJ5IHRoZSBhdXRob3IgKi99XHJcbiAgICAgICAgPEF1dGhvckJvb2tzTGlzdFxyXG4gICAgICAgICAgYm9va3M9e2Jvb2tzfVxyXG4gICAgICAgICAgb25EZWxldGVCb29rPXtoYW5kbGVEZWxldGVCb29rfVxyXG4gICAgICAgICAgb25DcmVhdGVCb29rPXtoYW5kbGVDcmVhdGVCb29rfVxyXG4gICAgICAgICAgYXV0aG9ycz17YXV0aG9yc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aG9yc1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTUwMCB0by1ncmF5LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6ZnJvbS1ncmF5LTYwMCBob3Zlcjp0by1ncmF5LTcwMCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIERlbGV0ZSBidXR0b24gb24gdGhlIGZhciByaWdodCAqL31cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEZWxldGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTUwMCB0by1yZWQtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLXJlZC02MDAgaG92ZXI6dG8tcmVkLTcwMCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIEF1dGhvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIERlbGV0ZSBBdXRob3IgTW9kYWwgKi99XHJcbiAgICAgIDxEZWxldGVBdXRob3JNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17aXNEZWxldGVNb2RhbE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNEZWxldGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVBdXRob3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZUF1dGhvcnMiLCJ1c2VCb29rcyIsIkxpbmsiLCJQYWdlVGl0bGUiLCJEZWxldGVBdXRob3JNb2RhbCIsIkF1dGhvckJvb2tzTGlzdCIsIkF1dGhvckRldGFpbHMiLCJpZCIsImF1dGhvciIsImxvYWRpbmciLCJhdXRob3JMb2FkaW5nIiwiZXJyb3IiLCJhdXRob3JFcnJvciIsImZldGNoQXV0aG9yQnlJZCIsImRlbGV0ZUF1dGhvciIsImF1dGhvcnMiLCJib29rcyIsImZldGNoQm9va3NCeUF1dGhvcklkIiwiZGVsZXRlQm9vayIsImNyZWF0ZUJvb2siLCJpc0RlbGV0ZU1vZGFsT3BlbiIsInNldElzRGVsZXRlTW9kYWxPcGVuIiwiaGFuZGxlRGVsZXRlQXV0aG9yIiwidGhlbiIsImhhbmRsZURlbGV0ZUJvb2siLCJib29rSWQiLCJoYW5kbGVDcmVhdGVCb29rIiwiYm9vayIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJ0aXRsZSIsIm5hbWUiLCJzdHJvbmciLCJiaW9ncmFwaHkiLCJudW1iZXJPZkJvb2tzV3JpdHRlbiIsImF2ZXJhZ2VSYXRpbmciLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImFsdCIsIm9uRGVsZXRlQm9vayIsIm9uQ3JlYXRlQm9vayIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uRGVsZXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});