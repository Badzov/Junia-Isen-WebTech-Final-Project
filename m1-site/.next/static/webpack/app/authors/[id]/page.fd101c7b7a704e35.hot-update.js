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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthorDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useAuthors */ \"(app-pages-browser)/./src/hooks/useAuthors.ts\");\n/* harmony import */ var _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useBooks */ \"(app-pages-browser)/./src/hooks/useBooks.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/DeleteAuthorModal */ \"(app-pages-browser)/./src/components/modals/DeleteAuthorModal.tsx\");\n/* harmony import */ var _components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AuthorBooksList */ \"(app-pages-browser)/./src/components/AuthorBooksList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction AuthorDetails() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { author, loading: authorLoading, error: authorError, fetchAuthorById, deleteAuthor, authors } = (0,_hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors)();\n    const { books, fetchBooksByAuthorId, deleteBook, createBook } = (0,_hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks)();\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthorDetails.useEffect\": ()=>{\n            if (id) {\n                fetchAuthorById(id);\n                fetchBooksByAuthorId(id);\n                document.title = author?.name || \"Author Details\";\n            }\n        }\n    }[\"AuthorDetails.useEffect\"], [\n        id,\n        fetchAuthorById,\n        fetchBooksByAuthorId\n    ]);\n    // Handle deleting the author\n    const handleDeleteAuthor = ()=>{\n        if (id) {\n            deleteAuthor(id).then(()=>{\n                setIsDeleteModalOpen(false);\n            });\n        }\n    };\n    // Handle deleting a book\n    const handleDeleteBook = (bookId)=>{\n        deleteBook(bookId).then(()=>{\n            fetchBooksByAuthorId(id);\n        });\n    };\n    // Handle creating a new book\n    const handleCreateBook = (book)=>{\n        createBook(book).then(()=>{\n            fetchBooksByAuthorId(id);\n        });\n    };\n    if (authorLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-gray-600\",\n            children: \"Loading author details...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this);\n    }\n    if (authorError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-red-600\",\n            children: [\n                \"Error: \",\n                authorError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle, {\n                title: author?.name || \"Author Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl shadow-lg p-8 space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Biography:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.biography || \"No biography available.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Number of books written:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.numberOfBooksWritten || \"0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Average Rating:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.averageRating === 0 ? \"NaN\" : `${author?.averageRating}/5`\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: author?.photoURL || \"/placeholder-author.jpg\",\n                                    alt: author?.name,\n                                    className: \"w-48 h-48 object-cover rounded-full shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__.AuthorBooksList, {\n                        books: books,\n                        onDeleteBook: handleDeleteBook,\n                        onCreateBook: handleCreateBook,\n                        authors: authors,\n                        currentAuthorId: id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/authors\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDeleteModalOpen(true),\n                                className: \"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105\",\n                                children: \"Delete Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: handleDeleteAuthor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"mW3+AzbCf1tpERxKnbvVars/A1o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors,\n        _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDVztBQUNKO0FBQ3RCO0FBQzZCO0FBQ21CO0FBQ1A7QUFHdkQsU0FBU1M7O0lBQ3RCLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdSLDBEQUFTQTtJQUV4QixNQUFNLEVBQ0pTLE1BQU0sRUFDTkMsU0FBU0MsYUFBYSxFQUN0QkMsT0FBT0MsV0FBVyxFQUNsQkMsZUFBZSxFQUNmQyxZQUFZLEVBQ1pDLE9BQU8sRUFDUixHQUFHZiw2REFBVUE7SUFFZCxNQUFNLEVBQUVnQixLQUFLLEVBQUVDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRSxHQUFHbEIseURBQVFBO0lBQ3hFLE1BQU0sQ0FBQ21CLG1CQUFtQkMscUJBQXFCLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzREQsZ0RBQVNBO21DQUFDO1lBQ1IsSUFBSVUsSUFBSTtnQkFDTk0sZ0JBQWdCTjtnQkFDaEJVLHFCQUFxQlY7Z0JBQ3JCZSxTQUFTQyxLQUFLLEdBQUdmLFFBQVFnQixRQUFRO1lBQ25DO1FBQ0Y7a0NBQUc7UUFBQ2pCO1FBQUlNO1FBQWlCSTtLQUFxQjtJQUU5Qyw2QkFBNkI7SUFDN0IsTUFBTVEscUJBQXFCO1FBQ3pCLElBQUlsQixJQUFJO1lBQ05PLGFBQWFQLElBQUltQixJQUFJLENBQUM7Z0JBQ3BCTCxxQkFBcUI7WUFDdkI7UUFDRjtJQUNGO0lBRUEseUJBQXlCO0lBQ3pCLE1BQU1NLG1CQUFtQixDQUFDQztRQUN4QlYsV0FBV1UsUUFBUUYsSUFBSSxDQUFDO1lBQ3RCVCxxQkFBcUJWO1FBQ3ZCO0lBQ0Y7SUFFQSw2QkFBNkI7SUFDN0IsTUFBTXNCLG1CQUFtQixDQUFDQztRQUN4QlgsV0FBV1csTUFBTUosSUFBSSxDQUFDO1lBQ3BCVCxxQkFBcUJWO1FBQ3ZCO0lBQ0Y7SUFFQSxJQUFJRyxlQUFlO1FBQ2pCLHFCQUNFLDhEQUFDcUI7WUFBRUMsV0FBVTtzQkFBNEI7Ozs7OztJQUU3QztJQUVBLElBQUlwQixhQUFhO1FBQ2YscUJBQU8sOERBQUNtQjtZQUFFQyxXQUFVOztnQkFBMkI7Z0JBQVFwQjs7Ozs7OztJQUN6RDtJQUVBLHFCQUNFLDhEQUFDcUI7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUM3Qiw0REFBU0E7Z0JBQUNvQixPQUFPZixRQUFRZ0IsUUFBUTs7Ozs7OzBCQUNsQyw4REFBQ1M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUVDLFdBQVU7OzBEQUNYLDhEQUFDRTswREFBTzs7Ozs7OzRDQUFvQjs0Q0FDM0IxQixRQUFRMkIsYUFBYTs7Ozs7OztrREFFeEIsOERBQUNKO3dDQUFFQyxXQUFVOzswREFDWCw4REFBQ0U7MERBQU87Ozs7Ozs0Q0FBa0M7NENBQ3pDMUIsUUFBUTRCLHdCQUF3Qjs7Ozs7OztrREFFbkMsOERBQUNMO3dDQUFFQyxXQUFVOzswREFDWCw4REFBQ0U7MERBQU87Ozs7Ozs0Q0FBeUI7NENBQ2hDMUIsUUFBUTZCLGtCQUFrQixJQUN2QixRQUNBLEdBQUc3QixRQUFRNkIsY0FBYyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7MENBR3BDLDhEQUFDSjtnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ007b0NBQ0NDLEtBQUsvQixRQUFRZ0MsWUFBWTtvQ0FDekJDLEtBQUtqQyxRQUFRZ0I7b0NBQ2JRLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtoQiw4REFBQzNCLHdFQUFlQTt3QkFDZFcsT0FBT0E7d0JBQ1AwQixjQUFjZjt3QkFDZGdCLGNBQWNkO3dCQUNkZCxTQUFTQTt3QkFDVDZCLGlCQUFpQnJDOzs7Ozs7a0NBRW5CLDhEQUFDMEI7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQzlCLGtEQUFJQTtvQ0FBQzJDLE1BQUs7OENBQ1QsNEVBQUNDO3dDQUFPZCxXQUFVO2tEQUE0Sjs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNbEwsOERBQUNjO2dDQUNDQyxTQUFTLElBQU0xQixxQkFBcUI7Z0NBQ3BDVyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT0wsOERBQUM1Qiw0RUFBaUJBO2dCQUNoQjRDLFFBQVE1QjtnQkFDUjZCLFNBQVMsSUFBTTVCLHFCQUFxQjtnQkFDcEM2QixVQUFVekI7Ozs7Ozs7Ozs7OztBQUlsQjtHQXZId0JuQjs7UUFDUFAsc0RBQVNBO1FBU3BCQyx5REFBVUE7UUFFa0RDLHFEQUFRQTs7O0tBWmxESyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxKdW5pYSBDb3Vyc2VzXFxXZWIgVGVjaG5vbG9naWVzXFxGaW5hbCBQcm9qZWN0XFx3ZWItZGV2ZWxvcG1lbnQtanVuaWFcXG0xLXNpdGVcXHNyY1xcYXBwXFxhdXRob3JzXFxbaWRdXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhvcnMgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlQXV0aG9yc1wiO1xyXG5pbXBvcnQgeyB1c2VCb29rcyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VCb29rc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFBhZ2VUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1BhZ2VUaXRsZVwiO1xyXG5pbXBvcnQgRGVsZXRlQXV0aG9yTW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0RlbGV0ZUF1dGhvck1vZGFsXCI7XHJcbmltcG9ydCB7IEF1dGhvckJvb2tzTGlzdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0F1dGhvckJvb2tzTGlzdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCb29rTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL0Jvb2tNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yRGV0YWlscygpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8eyBpZDogc3RyaW5nIH0+KCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGF1dGhvcixcclxuICAgIGxvYWRpbmc6IGF1dGhvckxvYWRpbmcsXHJcbiAgICBlcnJvcjogYXV0aG9yRXJyb3IsXHJcbiAgICBmZXRjaEF1dGhvckJ5SWQsXHJcbiAgICBkZWxldGVBdXRob3IsXHJcbiAgICBhdXRob3JzLFxyXG4gIH0gPSB1c2VBdXRob3JzKCk7XHJcblxyXG4gIGNvbnN0IHsgYm9va3MsIGZldGNoQm9va3NCeUF1dGhvcklkLCBkZWxldGVCb29rLCBjcmVhdGVCb29rIH0gPSB1c2VCb29rcygpO1xyXG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGZldGNoQXV0aG9yQnlJZChpZCk7XHJcbiAgICAgIGZldGNoQm9va3NCeUF1dGhvcklkKGlkKTtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBhdXRob3I/Lm5hbWUgfHwgXCJBdXRob3IgRGV0YWlsc1wiO1xyXG4gICAgfVxyXG4gIH0sIFtpZCwgZmV0Y2hBdXRob3JCeUlkLCBmZXRjaEJvb2tzQnlBdXRob3JJZF0pO1xyXG5cclxuICAvLyBIYW5kbGUgZGVsZXRpbmcgdGhlIGF1dGhvclxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUF1dGhvciA9ICgpID0+IHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBkZWxldGVBdXRob3IoaWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldElzRGVsZXRlTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIGRlbGV0aW5nIGEgYm9va1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJvb2sgPSAoYm9va0lkOiBzdHJpbmcpID0+IHtcclxuICAgIGRlbGV0ZUJvb2soYm9va0lkKS50aGVuKCgpID0+IHtcclxuICAgICAgZmV0Y2hCb29rc0J5QXV0aG9ySWQoaWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIGNyZWF0aW5nIGEgbmV3IGJvb2tcclxuICBjb25zdCBoYW5kbGVDcmVhdGVCb29rID0gKGJvb2s6IENyZWF0ZUJvb2tNb2RlbCkgPT4ge1xyXG4gICAgY3JlYXRlQm9vayhib29rKS50aGVuKCgpID0+IHtcclxuICAgICAgZmV0Y2hCb29rc0J5QXV0aG9ySWQoaWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGF1dGhvckxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj5Mb2FkaW5nIGF1dGhvciBkZXRhaWxzLi4uPC9wPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChhdXRob3JFcnJvcikge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTYwMFwiPkVycm9yOiB7YXV0aG9yRXJyb3J9PC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHAtNlwiPlxyXG4gICAgICA8UGFnZVRpdGxlIHRpdGxlPXthdXRob3I/Lm5hbWUgfHwgXCJBdXRob3IgRGV0YWlsc1wifSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtOCBzcGFjZS15LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkJpb2dyYXBoeTo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2F1dGhvcj8uYmlvZ3JhcGh5IHx8IFwiTm8gYmlvZ3JhcGh5IGF2YWlsYWJsZS5cIn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5OdW1iZXIgb2YgYm9va3Mgd3JpdHRlbjo8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2F1dGhvcj8ubnVtYmVyT2ZCb29rc1dyaXR0ZW4gfHwgXCIwXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+QXZlcmFnZSBSYXRpbmc6PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHthdXRob3I/LmF2ZXJhZ2VSYXRpbmcgPT09IDBcclxuICAgICAgICAgICAgICAgID8gXCJOYU5cIlxyXG4gICAgICAgICAgICAgICAgOiBgJHthdXRob3I/LmF2ZXJhZ2VSYXRpbmd9LzVgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXthdXRob3I/LnBob3RvVVJMIHx8IFwiL3BsYWNlaG9sZGVyLWF1dGhvci5qcGdcIn1cclxuICAgICAgICAgICAgICBhbHQ9e2F1dGhvcj8ubmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIExpc3Qgb2YgYm9va3Mgd3JpdHRlbiBieSB0aGUgYXV0aG9yICovfVxyXG4gICAgICAgIDxBdXRob3JCb29rc0xpc3RcclxuICAgICAgICAgIGJvb2tzPXtib29rc31cclxuICAgICAgICAgIG9uRGVsZXRlQm9vaz17aGFuZGxlRGVsZXRlQm9va31cclxuICAgICAgICAgIG9uQ3JlYXRlQm9vaz17aGFuZGxlQ3JlYXRlQm9va31cclxuICAgICAgICAgIGF1dGhvcnM9e2F1dGhvcnN9XHJcbiAgICAgICAgICBjdXJyZW50QXV0aG9ySWQ9e2lkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRob3JzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYXktNTAwIHRvLWdyYXktNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLWdyYXktNjAwIGhvdmVyOnRvLWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIj5cclxuICAgICAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRGVsZXRlIGJ1dHRvbiBvbiB0aGUgZmFyIHJpZ2h0ICovfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXJlZC02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOmZyb20tcmVkLTYwMCBob3Zlcjp0by1yZWQtNzAwIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgQXV0aG9yXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRGVsZXRlIEF1dGhvciBNb2RhbCAqL31cclxuICAgICAgPERlbGV0ZUF1dGhvck1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtpc0RlbGV0ZU1vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZUF1dGhvcn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwidXNlQXV0aG9ycyIsInVzZUJvb2tzIiwiTGluayIsIlBhZ2VUaXRsZSIsIkRlbGV0ZUF1dGhvck1vZGFsIiwiQXV0aG9yQm9va3NMaXN0IiwiQXV0aG9yRGV0YWlscyIsImlkIiwiYXV0aG9yIiwibG9hZGluZyIsImF1dGhvckxvYWRpbmciLCJlcnJvciIsImF1dGhvckVycm9yIiwiZmV0Y2hBdXRob3JCeUlkIiwiZGVsZXRlQXV0aG9yIiwiYXV0aG9ycyIsImJvb2tzIiwiZmV0Y2hCb29rc0J5QXV0aG9ySWQiLCJkZWxldGVCb29rIiwiY3JlYXRlQm9vayIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0SXNEZWxldGVNb2RhbE9wZW4iLCJkb2N1bWVudCIsInRpdGxlIiwibmFtZSIsImhhbmRsZURlbGV0ZUF1dGhvciIsInRoZW4iLCJoYW5kbGVEZWxldGVCb29rIiwiYm9va0lkIiwiaGFuZGxlQ3JlYXRlQm9vayIsImJvb2siLCJwIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3Ryb25nIiwiYmlvZ3JhcGh5IiwibnVtYmVyT2ZCb29rc1dyaXR0ZW4iLCJhdmVyYWdlUmF0aW5nIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiLCJhbHQiLCJvbkRlbGV0ZUJvb2siLCJvbkNyZWF0ZUJvb2siLCJjdXJyZW50QXV0aG9ySWQiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});