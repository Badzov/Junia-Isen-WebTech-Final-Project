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

/***/ "(app-pages-browser)/./src/hooks/useBooks.ts":
/*!*******************************!*\
  !*** ./src/hooks/useBooks.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useBooks: () => (/* binding */ useBooks)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst useBooks = ()=>{\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [book, setBook] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    // Fetch all books\n    const fetchBooks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({\n        \"useBooks.useCallback[fetchBooks]\": async (search, sortBy = \"title\", sortOrder = \"ASC\")=>{\n            setLoading(true);\n            setError(null);\n            try {\n                const params = {\n                    search,\n                    sortBy,\n                    sortOrder\n                };\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3001/api/books\", {\n                    params\n                });\n                setBooks(response.data);\n            } catch (error) {\n                setError(\"Failed to fetch books.\");\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    }[\"useBooks.useCallback[fetchBooks]\"], []);\n    // Fetch a single book by ID\n    const fetchBookById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({\n        \"useBooks.useCallback[fetchBookById]\": async (id)=>{\n            setLoading(true);\n            setError(null);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`http://localhost:3001/api/books/${id}`);\n                setBook(response.data);\n                return response.data;\n            } catch (error) {\n                setError(\"Failed to fetch book details.\");\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    }[\"useBooks.useCallback[fetchBookById]\"], []);\n    // Fetch books by author ID\n    const fetchBooksByAuthorId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)({\n        \"useBooks.useCallback[fetchBooksByAuthorId]\": async (authorId)=>{\n            setLoading(true);\n            setError(null);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`http://localhost:3001/api/books?authorId=${authorId}`);\n                setBooks(response.data);\n            } catch (error) {\n                setError(\"Failed to fetch books by author.\");\n            } finally{\n                setLoading(false);\n            }\n        }\n    }[\"useBooks.useCallback[fetchBooksByAuthorId]\"], []);\n    const fetchRatings = async (bookId)=>{\n        setLoading(true);\n        try {\n            const response = await fetch(`/api/books/${bookId}/ratings`);\n            const data = await response.json();\n            setRatings(data);\n        } catch (err) {\n            setError(\"Failed to fetch ratings\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    // Create a new book\n    const createBook = async (newBook)=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3001/api/books\", newBook);\n            setBooks((prevBooks)=>[\n                    ...prevBooks,\n                    response.data\n                ]);\n        } catch (error) {\n            setError(\"Failed to create book.\");\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    // Delete a book\n    const deleteBook = async (id)=>{\n        setLoading(true);\n        setError(null);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(`http://localhost:3001/api/books/${id}`);\n            setBooks((prevBooks)=>prevBooks.filter((book)=>book.id !== id));\n        } catch (error) {\n            setError(\"Failed to delete book.\");\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return {\n        books,\n        book,\n        loading,\n        error,\n        fetchBooks,\n        fetchBookById,\n        fetchBooksByAuthorId,\n        createBook,\n        deleteBook\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VCb29rcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ3BCO0FBR25CLE1BQU1HLFdBQVc7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFjLEVBQUU7SUFDbEQsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFtQjtJQUNuRCxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUVsRCxrQkFBa0I7SUFDbEIsTUFBTVksYUFBYVgsa0RBQVdBOzRDQUFDLE9BQU9ZLFFBQWlCQyxTQUFpQixPQUFPLEVBQUVDLFlBQTRCLEtBQUs7WUFDaEhOLFdBQVc7WUFDWEUsU0FBUztZQUNULElBQUk7Z0JBQ0YsTUFBTUssU0FBUztvQkFBRUg7b0JBQVFDO29CQUFRQztnQkFBVTtnQkFDM0MsTUFBTUUsV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBYyxtQ0FBbUM7b0JBQUVGO2dCQUFPO2dCQUMxRlgsU0FBU1ksU0FBU0UsSUFBSTtZQUN4QixFQUFFLE9BQU9ULE9BQU87Z0JBQ2RDLFNBQVM7Z0JBQ1RTLFFBQVFWLEtBQUssQ0FBQ0E7WUFDaEIsU0FBVTtnQkFDUkQsV0FBVztZQUNiO1FBQ0Y7MkNBQUcsRUFBRTtJQUVMLDRCQUE0QjtJQUM1QixNQUFNWSxnQkFBZ0JwQixrREFBV0E7K0NBQUMsT0FBT3FCO1lBQ3ZDYixXQUFXO1lBQ1hFLFNBQVM7WUFDVCxJQUFJO2dCQUNGLE1BQU1NLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixHQUFHLENBQVksQ0FBQyxnQ0FBZ0MsRUFBRUksSUFBSTtnQkFDbkZmLFFBQVFVLFNBQVNFLElBQUk7Z0JBQ3JCLE9BQU9GLFNBQVNFLElBQUk7WUFDdEIsRUFBRSxPQUFPVCxPQUFPO2dCQUNkQyxTQUFTO2dCQUNUUyxRQUFRVixLQUFLLENBQUNBO1lBQ2hCLFNBQVU7Z0JBQ1JELFdBQVc7WUFDYjtRQUNGOzhDQUFHLEVBQUU7SUFFTCwyQkFBMkI7SUFDM0IsTUFBTWMsdUJBQXVCdEIsa0RBQVdBO3NEQUFDLE9BQU91QjtZQUM5Q2YsV0FBVztZQUNYRSxTQUFTO1lBQ1QsSUFBSTtnQkFDRixNQUFNTSxXQUFXLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFjLENBQUMseUNBQXlDLEVBQUVNLFVBQVU7Z0JBQ3BHbkIsU0FBU1ksU0FBU0UsSUFBSTtZQUN4QixFQUFFLE9BQU9ULE9BQU87Z0JBQ2RDLFNBQVM7WUFDWCxTQUFVO2dCQUNSRixXQUFXO1lBQ2I7UUFDRjtxREFBRyxFQUFFO0lBRUwsTUFBTWdCLGVBQWUsT0FBT0M7UUFDMUJqQixXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1RLFdBQVcsTUFBTVUsTUFBTSxDQUFDLFdBQVcsRUFBRUQsT0FBTyxRQUFRLENBQUM7WUFDM0QsTUFBTVAsT0FBTyxNQUFNRixTQUFTVyxJQUFJO1lBQ2hDQyxXQUFXVjtRQUNiLEVBQUUsT0FBT1csS0FBSztZQUNabkIsU0FBUztRQUNYLFNBQVU7WUFDUkYsV0FBVztRQUNiO0lBQ0Y7SUFFQSxvQkFBb0I7SUFDcEIsTUFBTXNCLGFBQWEsT0FBT0M7UUFDeEJ2QixXQUFXO1FBQ1hFLFNBQVM7UUFDVCxJQUFJO1lBQ0YsTUFBTU0sV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQytCLElBQUksQ0FBWSxtQ0FBbUNEO1lBQ2hGM0IsU0FBUyxDQUFDNkIsWUFBYzt1QkFBSUE7b0JBQVdqQixTQUFTRSxJQUFJO2lCQUFDO1FBQ3ZELEVBQUUsT0FBT1QsT0FBTztZQUNkQyxTQUFTO1lBQ1RTLFFBQVFWLEtBQUssQ0FBQ0E7UUFDaEIsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixNQUFNMEIsYUFBYSxPQUFPYjtRQUN4QmIsV0FBVztRQUNYRSxTQUFTO1FBQ1QsSUFBSTtZQUNGLE1BQU1ULDZDQUFLQSxDQUFDa0MsTUFBTSxDQUFDLENBQUMsZ0NBQWdDLEVBQUVkLElBQUk7WUFDMURqQixTQUFTLENBQUM2QixZQUFjQSxVQUFVRyxNQUFNLENBQUMsQ0FBQy9CLE9BQVNBLEtBQUtnQixFQUFFLEtBQUtBO1FBQ2pFLEVBQUUsT0FBT1osT0FBTztZQUNkQyxTQUFTO1lBQ1RTLFFBQVFWLEtBQUssQ0FBQ0E7UUFDaEIsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLE9BQU87UUFBRUw7UUFBT0U7UUFBTUU7UUFBU0U7UUFBT0U7UUFBWVM7UUFBZUU7UUFBc0JRO1FBQVlJO0lBQVc7QUFDaEgsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxKdW5pYSBDb3Vyc2VzXFxXZWIgVGVjaG5vbG9naWVzXFxGaW5hbCBQcm9qZWN0XFx3ZWItZGV2ZWxvcG1lbnQtanVuaWFcXG0xLXNpdGVcXHNyY1xcaG9va3NcXHVzZUJvb2tzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEJvb2tNb2RlbCwgQ3JlYXRlQm9va01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Cb29rTW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VCb29rcyA9ICgpID0+IHtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tNb2RlbFtdPihbXSk7XHJcbiAgY29uc3QgW2Jvb2ssIHNldEJvb2tdID0gdXNlU3RhdGU8Qm9va01vZGVsIHwgbnVsbD4obnVsbCk7IFxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBGZXRjaCBhbGwgYm9va3NcclxuICBjb25zdCBmZXRjaEJvb2tzID0gdXNlQ2FsbGJhY2soYXN5bmMgKHNlYXJjaD86IHN0cmluZywgc29ydEJ5OiBzdHJpbmcgPSBcInRpdGxlXCIsIHNvcnRPcmRlcjogXCJBU0NcIiB8IFwiREVTQ1wiID0gXCJBU0NcIikgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGFyYW1zID0geyBzZWFyY2gsIHNvcnRCeSwgc29ydE9yZGVyIH07XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PEJvb2tNb2RlbFtdPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3NcIiwgeyBwYXJhbXMgfSk7XHJcbiAgICAgIHNldEJvb2tzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYm9va3MuXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRmV0Y2ggYSBzaW5nbGUgYm9vayBieSBJRFxyXG4gIGNvbnN0IGZldGNoQm9va0J5SWQgPSB1c2VDYWxsYmFjayhhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8Qm9va01vZGVsPihgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcy8ke2lkfWApO1xyXG4gICAgICBzZXRCb29rKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTsgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBib29rIGRldGFpbHMuXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRmV0Y2ggYm9va3MgYnkgYXV0aG9yIElEXHJcbiAgY29uc3QgZmV0Y2hCb29rc0J5QXV0aG9ySWQgPSB1c2VDYWxsYmFjayhhc3luYyAoYXV0aG9ySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8Qm9va01vZGVsW10+KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzP2F1dGhvcklkPSR7YXV0aG9ySWR9YCk7XHJcbiAgICAgIHNldEJvb2tzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggYm9va3MgYnkgYXV0aG9yLlwiKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hSYXRpbmdzID0gYXN5bmMgKGJvb2tJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9ib29rcy8ke2Jvb2tJZH0vcmF0aW5nc2ApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRSYXRpbmdzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHJhdGluZ3NcIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgYm9va1xyXG4gIGNvbnN0IGNyZWF0ZUJvb2sgPSBhc3luYyAobmV3Qm9vazogQ3JlYXRlQm9va01vZGVsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3Q8Qm9va01vZGVsPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3NcIiwgbmV3Qm9vayk7XHJcbiAgICAgIHNldEJvb2tzKChwcmV2Qm9va3MpID0+IFsuLi5wcmV2Qm9va3MsIHJlc3BvbnNlLmRhdGFdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBib29rLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBEZWxldGUgYSBib29rXHJcbiAgY29uc3QgZGVsZXRlQm9vayA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MvJHtpZH1gKTtcclxuICAgICAgc2V0Qm9va3MoKHByZXZCb29rcykgPT4gcHJldkJvb2tzLmZpbHRlcigoYm9vaykgPT4gYm9vay5pZCAhPT0gaWQpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBib29rLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBib29rcywgYm9vaywgbG9hZGluZywgZXJyb3IsIGZldGNoQm9va3MsIGZldGNoQm9va0J5SWQsIGZldGNoQm9va3NCeUF1dGhvcklkLCBjcmVhdGVCb29rLCBkZWxldGVCb29rIH07XHJcbn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsInVzZUJvb2tzIiwiYm9va3MiLCJzZXRCb29rcyIsImJvb2siLCJzZXRCb29rIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hCb29rcyIsInNlYXJjaCIsInNvcnRCeSIsInNvcnRPcmRlciIsInBhcmFtcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJmZXRjaEJvb2tCeUlkIiwiaWQiLCJmZXRjaEJvb2tzQnlBdXRob3JJZCIsImF1dGhvcklkIiwiZmV0Y2hSYXRpbmdzIiwiYm9va0lkIiwiZmV0Y2giLCJqc29uIiwic2V0UmF0aW5ncyIsImVyciIsImNyZWF0ZUJvb2siLCJuZXdCb29rIiwicG9zdCIsInByZXZCb29rcyIsImRlbGV0ZUJvb2siLCJkZWxldGUiLCJmaWx0ZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useBooks.ts\n"));

/***/ })

});