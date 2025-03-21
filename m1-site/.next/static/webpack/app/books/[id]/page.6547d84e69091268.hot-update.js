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

/***/ "(app-pages-browser)/./src/components/RatingsDrawer.tsx":
/*!******************************************!*\
  !*** ./src/components/RatingsDrawer.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RatingsDrawer: () => (/* binding */ RatingsDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Drawer,IconButton,List,ListItem,ListItemText,Rating,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Rating/Rating.js\");\n/* harmony import */ var _barrel_optimize_names_Delete_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Delete!=!@mui/icons-material */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Delete.js\");\n\n\n\n\nconst RatingsDrawer = ({ ratings, isOpen, onClose, sortOrder, onSortOrderChange, onDeleteRating })=>{\n    const sortedRatings = [\n        ...ratings\n    ].sort((a, b)=>{\n        const dateA = new Date(a.createdAt).getTime();\n        const dateB = new Date(b.createdAt).getTime();\n        return sortOrder === \"asc\" ? dateA - dateB : dateB - dateA;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        anchor: \"right\",\n        open: isOpen,\n        onClose: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                width: 400,\n                p: 2\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"h6\",\n                    className: \"text-gray-800 mb-4\",\n                    children: \"Ratings\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClick: ()=>onSortOrderChange(sortOrder === \"asc\" ? \"desc\" : \"asc\"),\n                    className: \"mb-4\",\n                    children: [\n                        \"Sort by Date (\",\n                        sortOrder === \"asc\" ? \"Oldest First\" : \"Newest First\",\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: sortedRatings.map((rating)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"border-b border-gray-200\",\n                            secondaryAction: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                edge: \"end\",\n                                \"aria-label\": \"delete\",\n                                onClick: ()=>onDeleteRating(rating.bookId, rating.id),\n                                sx: {\n                                    color: \"rgba(0, 0, 0, 0.26)\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Delete_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        fontSize: \"small\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                primary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    value: rating.stars,\n                                    readOnly: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 26\n                                }, void 0),\n                                secondary: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            variant: \"body2\",\n                                            className: \"text-gray-700\",\n                                            children: rating.comment\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Drawer_IconButton_List_ListItem_ListItemText_Rating_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            variant: \"caption\",\n                                            className: \"text-gray-500\",\n                                            children: new Date(rating.createdAt).toLocaleDateString()\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, void 0)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined)\n                        }, rating.id, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Junia Courses\\\\Web Technologies\\\\Final Project\\\\web-development-junia\\\\m1-site\\\\src\\\\components\\\\RatingsDrawer.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RatingsDrawer;\nvar _c;\n$RefreshReg$(_c, \"RatingsDrawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JhdGluZ3NEcmF3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQVdIO0FBQ3NCO0FBWXRDLE1BQU1ZLGdCQUE4QyxDQUFDLEVBQzFEQyxPQUFPLEVBQ1BDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLGlCQUFpQixFQUNqQkMsY0FBYyxFQUNmO0lBQ0MsTUFBTUMsZ0JBQWdCO1dBQUlOO0tBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUNDLEdBQUdDO1FBQzFDLE1BQU1DLFFBQVEsSUFBSUMsS0FBS0gsRUFBRUksU0FBUyxFQUFFQyxPQUFPO1FBQzNDLE1BQU1DLFFBQVEsSUFBSUgsS0FBS0YsRUFBRUcsU0FBUyxFQUFFQyxPQUFPO1FBQzNDLE9BQU9WLGNBQWMsUUFBUU8sUUFBUUksUUFBUUEsUUFBUUo7SUFDdkQ7SUFFQSxxQkFDRSw4REFBQ3RCLHFKQUFNQTtRQUFDMkIsUUFBTztRQUFRQyxNQUFNZjtRQUFRQyxTQUFTQTtrQkFDNUMsNEVBQUNSLHFKQUFHQTtZQUFDdUIsSUFBSTtnQkFBRUMsT0FBTztnQkFBS0MsR0FBRztZQUFFOzs4QkFDMUIsOERBQUMzQixxSkFBVUE7b0JBQUM0QixTQUFRO29CQUFLQyxXQUFVOzhCQUFxQjs7Ozs7OzhCQUd4RCw4REFBQzVCLHFKQUFNQTtvQkFDTDZCLFNBQVMsSUFDUGxCLGtCQUFrQkQsY0FBYyxRQUFRLFNBQVM7b0JBRW5Ea0IsV0FBVTs7d0JBQ1g7d0JBQ2dCbEIsY0FBYyxRQUFRLGlCQUFpQjt3QkFBZTs7Ozs7Ozs4QkFFdkUsOERBQUNkLHFKQUFJQTs4QkFDRmlCLGNBQWNpQixHQUFHLENBQUMsQ0FBQ0MsdUJBQ2xCLDhEQUFDbEMscUpBQVFBOzRCQUVQK0IsV0FBVTs0QkFDVkksK0JBQ0UsOERBQUM1QixxSkFBVUE7Z0NBQ1Q2QixNQUFLO2dDQUNMQyxjQUFXO2dDQUNYTCxTQUFTLElBQU1qQixlQUFlbUIsT0FBT0ksTUFBTSxFQUFFSixPQUFPSyxFQUFFO2dDQUN0RFosSUFBSTtvQ0FBRWEsT0FBTztnQ0FBc0I7O2tEQUVuQyw4REFBQ2hDLHdGQUFNQTt3Q0FBQ2lDLFVBQVM7Ozs7OztvQ0FBVTs7Ozs7OztzQ0FJL0IsNEVBQUN4QyxzSkFBWUE7Z0NBQ1h5Qyx1QkFBUyw4REFBQ3BDLHNKQUFVQTtvQ0FBQ3FDLE9BQU9ULE9BQU9VLEtBQUs7b0NBQUVDLFFBQVE7Ozs7OztnQ0FDbERDLHlCQUNFOztzREFDRSw4REFBQzVDLHFKQUFVQTs0Q0FBQzRCLFNBQVE7NENBQVFDLFdBQVU7c0RBQ25DRyxPQUFPYSxPQUFPOzs7Ozs7c0RBRWpCLDhEQUFDN0MscUpBQVVBOzRDQUFDNEIsU0FBUTs0Q0FBVUMsV0FBVTtzREFDckMsSUFBSVYsS0FBS2EsT0FBT1osU0FBUyxFQUFFMEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OzJCQXJCakRkLE9BQU9LLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDNUIsRUFBRTtLQS9EVzlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXEp1bmlhIENvdXJzZXNcXFdlYiBUZWNobm9sb2dpZXNcXEZpbmFsIFByb2plY3RcXHdlYi1kZXZlbG9wbWVudC1qdW5pYVxcbTEtc2l0ZVxcc3JjXFxjb21wb25lbnRzXFxSYXRpbmdzRHJhd2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRHJhd2VyLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQnV0dG9uLFxyXG4gIEJveCxcclxuICBSYXRpbmcgYXMgUmF0aW5nSWNvbixcclxuICBJY29uQnV0dG9uLFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERlbGV0ZSB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFJhdGluZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9SYXRpbmdNb2RlbFwiO1xyXG5cclxuaW50ZXJmYWNlIFJhdGluZ3NEcmF3ZXJQcm9wcyB7XHJcbiAgcmF0aW5nczogUmF0aW5nTW9kZWxbXTtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICBzb3J0T3JkZXI6IFwiYXNjXCIgfCBcImRlc2NcIjtcclxuICBvblNvcnRPcmRlckNoYW5nZTogKG9yZGVyOiBcImFzY1wiIHwgXCJkZXNjXCIpID0+IHZvaWQ7XHJcbiAgb25EZWxldGVSYXRpbmc6IChib29rSWQ6IHN0cmluZywgcmF0aW5nSWQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJhdGluZ3NEcmF3ZXI6IFJlYWN0LkZDPFJhdGluZ3NEcmF3ZXJQcm9wcz4gPSAoe1xyXG4gIHJhdGluZ3MsXHJcbiAgaXNPcGVuLFxyXG4gIG9uQ2xvc2UsXHJcbiAgc29ydE9yZGVyLFxyXG4gIG9uU29ydE9yZGVyQ2hhbmdlLFxyXG4gIG9uRGVsZXRlUmF0aW5nLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc29ydGVkUmF0aW5ncyA9IFsuLi5yYXRpbmdzXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZEF0KS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBkYXRlQiA9IG5ldyBEYXRlKGIuY3JlYXRlZEF0KS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gc29ydE9yZGVyID09PSBcImFzY1wiID8gZGF0ZUEgLSBkYXRlQiA6IGRhdGVCIC0gZGF0ZUE7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyIGFuY2hvcj1cInJpZ2h0XCIgb3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgPEJveCBzeD17eyB3aWR0aDogNDAwLCBwOiAyIH19PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgbWItNFwiPlxyXG4gICAgICAgICAgUmF0aW5nc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBvblNvcnRPcmRlckNoYW5nZShzb3J0T3JkZXIgPT09IFwiYXNjXCIgPyBcImRlc2NcIiA6IFwiYXNjXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTb3J0IGJ5IERhdGUgKHtzb3J0T3JkZXIgPT09IFwiYXNjXCIgPyBcIk9sZGVzdCBGaXJzdFwiIDogXCJOZXdlc3QgRmlyc3RcIn0pXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7c29ydGVkUmF0aW5ncy5tYXAoKHJhdGluZykgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e3JhdGluZy5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUmF0aW5nKHJhdGluZy5ib29rSWQsIHJhdGluZy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC4yNilcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGZvbnRTaXplPVwic21hbGxcIiAvPiB7LyogVXNlIGEgc21hbGwgZGVsZXRlIGljb24gKi99XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17PFJhdGluZ0ljb24gdmFsdWU9e3JhdGluZy5zdGFyc30gcmVhZE9ubHkgLz59XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtyYXRpbmcuY29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocmF0aW5nLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJCb3giLCJSYXRpbmciLCJSYXRpbmdJY29uIiwiSWNvbkJ1dHRvbiIsIkRlbGV0ZSIsIlJhdGluZ3NEcmF3ZXIiLCJyYXRpbmdzIiwiaXNPcGVuIiwib25DbG9zZSIsInNvcnRPcmRlciIsIm9uU29ydE9yZGVyQ2hhbmdlIiwib25EZWxldGVSYXRpbmciLCJzb3J0ZWRSYXRpbmdzIiwic29ydCIsImEiLCJiIiwiZGF0ZUEiLCJEYXRlIiwiY3JlYXRlZEF0IiwiZ2V0VGltZSIsImRhdGVCIiwiYW5jaG9yIiwib3BlbiIsInN4Iiwid2lkdGgiLCJwIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXAiLCJyYXRpbmciLCJzZWNvbmRhcnlBY3Rpb24iLCJlZGdlIiwiYXJpYS1sYWJlbCIsImJvb2tJZCIsImlkIiwiY29sb3IiLCJmb250U2l6ZSIsInByaW1hcnkiLCJ2YWx1ZSIsInN0YXJzIiwicmVhZE9ubHkiLCJzZWNvbmRhcnkiLCJjb21tZW50IiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RatingsDrawer.tsx\n"));

/***/ })

});