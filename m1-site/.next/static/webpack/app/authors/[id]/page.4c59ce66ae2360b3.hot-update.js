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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthorDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useAuthors */ \"(app-pages-browser)/./src/hooks/useAuthors.ts\");\n/* harmony import */ var _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useBooks */ \"(app-pages-browser)/./src/hooks/useBooks.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/PageTitle */ \"(app-pages-browser)/./src/components/PageTitle.tsx\");\n/* harmony import */ var _components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/DeleteAuthorModal */ \"(app-pages-browser)/./src/components/modals/DeleteAuthorModal.tsx\");\n/* harmony import */ var _components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AuthorBooksList */ \"(app-pages-browser)/./src/components/AuthorBooksList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import useBooks\n\n\n\n // Import AuthorBooksList\nfunction AuthorDetails() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const { author, loading: authorLoading, error: authorError, fetchAuthorById, deleteAuthor } = (0,_hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors)();\n    const { books, fetchBooksByAuthorId, deleteBook } = (0,_hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks)(); // Destructure deleteBook\n    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthorDetails.useEffect\": ()=>{\n            if (id) {\n                fetchAuthorById(id);\n                fetchBooksByAuthorId(id);\n            }\n        }\n    }[\"AuthorDetails.useEffect\"], [\n        id,\n        fetchAuthorById,\n        fetchBooksByAuthorId\n    ]);\n    // Handle deleting the author\n    const handleDeleteAuthor = ()=>{\n        if (id) {\n            deleteAuthor(id).then(()=>{\n                setIsDeleteModalOpen(false); // Close the modal after deletion\n            });\n        }\n    };\n    // Handle deleting a book\n    const handleDeleteBook = (bookId)=>{\n        deleteBook(bookId).then(()=>{\n            fetchBooksByAuthorId(id); // Refresh the list of books after deletion\n        });\n    };\n    if (authorLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-gray-600\",\n            children: \"Loading author details...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this);\n    }\n    if (authorError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-center text-red-600\",\n            children: [\n                \"Error: \",\n                authorError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 55,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-6xl mx-auto p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle, {\n                title: author?.name || \"Author Details\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-xl shadow-lg p-8 space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Biography:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.biography || \"No biography available.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Number of books written:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.numberOfBooksWritten || \"0\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Average Rating:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, this),\n                                            \" \",\n                                            author?.averageRating === 0 ? \"NaN\" : `${author?.averageRating}/5`\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: author?.photoURL || \"/placeholder-author.jpg\",\n                                    alt: author?.name,\n                                    className: \"w-48 h-48 object-cover rounded-full shadow-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthorBooksList__WEBPACK_IMPORTED_MODULE_8__.AuthorBooksList, {\n                        books: books,\n                        onDeleteBook: handleDeleteBook\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/authors\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsDeleteModalOpen(true),\n                                className: \"px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105\",\n                                children: \"Delete Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DeleteAuthorModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: ()=>setIsDeleteModalOpen(false),\n                onDelete: handleDeleteAuthor\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"zgjP2Za+LVxH8czCg7dlPbIIasI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_useAuthors__WEBPACK_IMPORTED_MODULE_3__.useAuthors,\n        _hooks_useBooks__WEBPACK_IMPORTED_MODULE_4__.useBooks\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDVztBQUNKLENBQUMsa0JBQWtCO0FBQ3pDO0FBQzZCO0FBQ21CO0FBQ1AsQ0FBQyx5QkFBeUI7QUFFakYsU0FBU1M7O0lBQ3RCLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdSLDBEQUFTQTtJQUV4QixNQUFNLEVBQ0pTLE1BQU0sRUFDTkMsU0FBU0MsYUFBYSxFQUN0QkMsT0FBT0MsV0FBVyxFQUNsQkMsZUFBZSxFQUNmQyxZQUFZLEVBQ2IsR0FBR2QsNkRBQVVBO0lBRWQsTUFBTSxFQUFFZSxLQUFLLEVBQUVDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUUsR0FBR2hCLHlEQUFRQSxJQUFJLHlCQUF5QjtJQUN6RixNQUFNLENBQUNpQixtQkFBbUJDLHFCQUFxQixHQUFHckIsK0NBQVFBLENBQUM7SUFFM0RELGdEQUFTQTttQ0FBQztZQUNSLElBQUlVLElBQUk7Z0JBQ05NLGdCQUFnQk47Z0JBQ2hCUyxxQkFBcUJUO1lBQ3ZCO1FBQ0Y7a0NBQUc7UUFBQ0E7UUFBSU07UUFBaUJHO0tBQXFCO0lBRTlDLDZCQUE2QjtJQUM3QixNQUFNSSxxQkFBcUI7UUFDekIsSUFBSWIsSUFBSTtZQUNOTyxhQUFhUCxJQUFJYyxJQUFJLENBQUM7Z0JBQ3BCRixxQkFBcUIsUUFBUSxpQ0FBaUM7WUFDaEU7UUFDRjtJQUNGO0lBRUEseUJBQXlCO0lBQ3pCLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4Qk4sV0FBV00sUUFBUUYsSUFBSSxDQUFDO1lBQ3RCTCxxQkFBcUJULEtBQUssMkNBQTJDO1FBQ3ZFO0lBQ0Y7SUFFQSxJQUFJRyxlQUFlO1FBQ2pCLHFCQUNFLDhEQUFDYztZQUFFQyxXQUFVO3NCQUE0Qjs7Ozs7O0lBRTdDO0lBRUEsSUFBSWIsYUFBYTtRQUNmLHFCQUFPLDhEQUFDWTtZQUFFQyxXQUFVOztnQkFBMkI7Z0JBQVFiOzs7Ozs7O0lBQ3pEO0lBRUEscUJBQ0UsOERBQUNjO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDdEIsNERBQVNBO2dCQUFDd0IsT0FBT25CLFFBQVFvQixRQUFROzs7Ozs7MEJBQ2xDLDhEQUFDRjtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBRUMsV0FBVTs7MERBQ1gsOERBQUNJOzBEQUFPOzs7Ozs7NENBQW9COzRDQUMzQnJCLFFBQVFzQixhQUFhOzs7Ozs7O2tEQUV4Qiw4REFBQ047d0NBQUVDLFdBQVU7OzBEQUNYLDhEQUFDSTswREFBTzs7Ozs7OzRDQUFrQzs0Q0FDekNyQixRQUFRdUIsd0JBQXdCOzs7Ozs7O2tEQUVuQyw4REFBQ1A7d0NBQUVDLFdBQVU7OzBEQUNYLDhEQUFDSTswREFBTzs7Ozs7OzRDQUF5Qjs0Q0FDaENyQixRQUFRd0Isa0JBQWtCLElBQ3ZCLFFBQ0EsR0FBR3hCLFFBQVF3QixjQUFjLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OzswQ0FHcEMsOERBQUNOO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDUTtvQ0FDQ0MsS0FBSzFCLFFBQVEyQixZQUFZO29DQUN6QkMsS0FBSzVCLFFBQVFvQjtvQ0FDYkgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2hCLDhEQUFDcEIsd0VBQWVBO3dCQUFDVSxPQUFPQTt3QkFBT3NCLGNBQWNmOzs7Ozs7b0JBQXFCO2tDQUVsRSw4REFBQ0k7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ3ZCLGtEQUFJQTtvQ0FBQ29DLE1BQUs7OENBQ1QsNEVBQUNDO3dDQUFPZCxXQUFVO2tEQUE0Sjs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNbEwsOERBQUNjO2dDQUNDQyxTQUFTLElBQU1yQixxQkFBcUI7Z0NBQ3BDTSxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT0wsOERBQUNyQiw0RUFBaUJBO2dCQUNoQnFDLFFBQVF2QjtnQkFDUndCLFNBQVMsSUFBTXZCLHFCQUFxQjtnQkFDcEN3QixVQUFVdkI7Ozs7Ozs7Ozs7OztBQUlsQjtHQXpHd0JkOztRQUNQUCxzREFBU0E7UUFRcEJDLHlEQUFVQTtRQUVzQ0MscURBQVFBOzs7S0FYdENLIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEp1bmlhIENvdXJzZXNcXFdlYiBUZWNobm9sb2dpZXNcXEZpbmFsIFByb2plY3RcXHdlYi1kZXZlbG9wbWVudC1qdW5pYVxcbTEtc2l0ZVxcc3JjXFxhcHBcXGF1dGhvcnNcXFtpZF1cXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlQXV0aG9ycyB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VBdXRob3JzXCI7XHJcbmltcG9ydCB7IHVzZUJvb2tzIH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUJvb2tzXCI7IC8vIEltcG9ydCB1c2VCb29rc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFBhZ2VUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1BhZ2VUaXRsZVwiO1xyXG5pbXBvcnQgRGVsZXRlQXV0aG9yTW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0RlbGV0ZUF1dGhvck1vZGFsXCI7XHJcbmltcG9ydCB7IEF1dGhvckJvb2tzTGlzdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0F1dGhvckJvb2tzTGlzdFwiOyAvLyBJbXBvcnQgQXV0aG9yQm9va3NMaXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JEZXRhaWxzKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7IGlkOiBzdHJpbmcgfT4oKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgYXV0aG9yLFxyXG4gICAgbG9hZGluZzogYXV0aG9yTG9hZGluZyxcclxuICAgIGVycm9yOiBhdXRob3JFcnJvcixcclxuICAgIGZldGNoQXV0aG9yQnlJZCxcclxuICAgIGRlbGV0ZUF1dGhvcixcclxuICB9ID0gdXNlQXV0aG9ycygpO1xyXG5cclxuICBjb25zdCB7IGJvb2tzLCBmZXRjaEJvb2tzQnlBdXRob3JJZCwgZGVsZXRlQm9vayB9ID0gdXNlQm9va3MoKTsgLy8gRGVzdHJ1Y3R1cmUgZGVsZXRlQm9va1xyXG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGZldGNoQXV0aG9yQnlJZChpZCk7XHJcbiAgICAgIGZldGNoQm9va3NCeUF1dGhvcklkKGlkKTtcclxuICAgIH1cclxuICB9LCBbaWQsIGZldGNoQXV0aG9yQnlJZCwgZmV0Y2hCb29rc0J5QXV0aG9ySWRdKTtcclxuXHJcbiAgLy8gSGFuZGxlIGRlbGV0aW5nIHRoZSBhdXRob3JcclxuICBjb25zdCBoYW5kbGVEZWxldGVBdXRob3IgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZGVsZXRlQXV0aG9yKGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7IC8vIENsb3NlIHRoZSBtb2RhbCBhZnRlciBkZWxldGlvblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgZGVsZXRpbmcgYSBib29rXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQm9vayA9IChib29rSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgZGVsZXRlQm9vayhib29rSWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBmZXRjaEJvb2tzQnlBdXRob3JJZChpZCk7IC8vIFJlZnJlc2ggdGhlIGxpc3Qgb2YgYm9va3MgYWZ0ZXIgZGVsZXRpb25cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChhdXRob3JMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+TG9hZGluZyBhdXRob3IgZGV0YWlscy4uLjwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoYXV0aG9yRXJyb3IpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC02MDBcIj5FcnJvcjoge2F1dGhvckVycm9yfTwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBwLTZcIj5cclxuICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17YXV0aG9yPy5uYW1lIHx8IFwiQXV0aG9yIERldGFpbHNcIn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1sZyBwLTggc3BhY2UteS04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5CaW9ncmFwaHk6PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHthdXRob3I/LmJpb2dyYXBoeSB8fCBcIk5vIGJpb2dyYXBoeSBhdmFpbGFibGUuXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+TnVtYmVyIG9mIGJvb2tzIHdyaXR0ZW46PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHthdXRob3I/Lm51bWJlck9mQm9va3NXcml0dGVuIHx8IFwiMFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPkF2ZXJhZ2UgUmF0aW5nOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICB7YXV0aG9yPy5hdmVyYWdlUmF0aW5nID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IFwiTmFOXCJcclxuICAgICAgICAgICAgICAgIDogYCR7YXV0aG9yPy5hdmVyYWdlUmF0aW5nfS81YH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17YXV0aG9yPy5waG90b1VSTCB8fCBcIi9wbGFjZWhvbGRlci1hdXRob3IuanBnXCJ9XHJcbiAgICAgICAgICAgICAgYWx0PXthdXRob3I/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00OCBoLTQ4IG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBMaXN0IG9mIGJvb2tzIHdyaXR0ZW4gYnkgdGhlIGF1dGhvciAqL31cclxuICAgICAgICA8QXV0aG9yQm9va3NMaXN0IGJvb2tzPXtib29rc30gb25EZWxldGVCb29rPXtoYW5kbGVEZWxldGVCb29rfSAvPntcIiBcIn1cclxuICAgICAgICB7LyogUGFzcyB0aGUgZGVsZXRlIGZ1bmN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aG9yc1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTUwMCB0by1ncmF5LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6ZnJvbS1ncmF5LTYwMCBob3Zlcjp0by1ncmF5LTcwMCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCI+XHJcbiAgICAgICAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIERlbGV0ZSBidXR0b24gb24gdGhlIGZhciByaWdodCAqL31cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEZWxldGVNb2RhbE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTUwMCB0by1yZWQtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3Zlcjpmcm9tLXJlZC02MDAgaG92ZXI6dG8tcmVkLTcwMCB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIEF1dGhvclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIERlbGV0ZSBBdXRob3IgTW9kYWwgKi99XHJcbiAgICAgIDxEZWxldGVBdXRob3JNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17aXNEZWxldGVNb2RhbE9wZW59XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNEZWxldGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVBdXRob3J9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZUF1dGhvcnMiLCJ1c2VCb29rcyIsIkxpbmsiLCJQYWdlVGl0bGUiLCJEZWxldGVBdXRob3JNb2RhbCIsIkF1dGhvckJvb2tzTGlzdCIsIkF1dGhvckRldGFpbHMiLCJpZCIsImF1dGhvciIsImxvYWRpbmciLCJhdXRob3JMb2FkaW5nIiwiZXJyb3IiLCJhdXRob3JFcnJvciIsImZldGNoQXV0aG9yQnlJZCIsImRlbGV0ZUF1dGhvciIsImJvb2tzIiwiZmV0Y2hCb29rc0J5QXV0aG9ySWQiLCJkZWxldGVCb29rIiwiaXNEZWxldGVNb2RhbE9wZW4iLCJzZXRJc0RlbGV0ZU1vZGFsT3BlbiIsImhhbmRsZURlbGV0ZUF1dGhvciIsInRoZW4iLCJoYW5kbGVEZWxldGVCb29rIiwiYm9va0lkIiwicCIsImNsYXNzTmFtZSIsImRpdiIsInRpdGxlIiwibmFtZSIsInN0cm9uZyIsImJpb2dyYXBoeSIsIm51bWJlck9mQm9va3NXcml0dGVuIiwiYXZlcmFnZVJhdGluZyIsImltZyIsInNyYyIsInBob3RvVVJMIiwiYWx0Iiwib25EZWxldGVCb29rIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW4iLCJvbkNsb3NlIiwib25EZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});