/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_theQuestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/theQuestions */ \"./reducers/theQuestions.js\");\n/* harmony import */ var _reducers_scoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/scoring */ \"./reducers/scoring.js\");\n/* harmony import */ var _reducers_checkQuiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/checkQuiz */ \"./reducers/checkQuiz.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n    scoring: _reducers_scoring__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    theQuestions: _reducers_theQuestions__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    checkQuiz: _reducers_checkQuiz__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\nconst persistConfig = {\n    key: \"kidikuiz\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default()),\n    blacklist: [\n        \"theQuestions\"\n    ]\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_8__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__.PersistGate, {\n            persistor: persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 33,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUVRO0FBQ1c7QUFDRTtBQUNWO0FBQ0k7QUFHZTtBQUNDO0FBQ2Q7QUFDRztBQUduRCxNQUFNVyxRQUFRLEdBQUdELGlFQUFlLENBQUM7SUFBRU4sT0FBTztJQUFFRCxZQUFZO0lBQUVFLFNBQVM7Q0FBRSxDQUFDO0FBRXRFLE1BQU1PLGFBQWEsR0FBRztJQUFFQyxHQUFHLEVBQUUsVUFBVTtJQUFFSixPQUFPO0lBQUVLLFNBQVMsRUFBRTtRQUFDLGNBQWM7S0FBQztDQUFFO0FBRS9FLE1BQU1DLEtBQUssR0FBR2IsZ0VBQWMsQ0FBQztJQUMzQmMsT0FBTyxFQUFDVCw2REFBYyxDQUFDSyxhQUFhLEVBQUVELFFBQVEsQ0FBQztJQUMvQ00sVUFBVSxFQUFFLENBQUNDLG9CQUFvQixHQUFLQSxvQkFBb0IsQ0FBQztZQUFFQyxpQkFBaUIsRUFBRSxLQUFLO1NBQUUsQ0FBQztDQUN4RixDQUFDO0FBR0YsTUFBTUMsU0FBUyxHQUFHZCwyREFBWSxDQUFDUyxLQUFLLENBQUM7QUFFdEMsU0FBU00sR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDckMscUJBQ0UsOERBQUN0QixpREFBUTtRQUFDYyxLQUFLLEVBQUVBLEtBQUs7a0JBQ2xCLDRFQUFDUCx3RUFBVztZQUFDWSxTQUFTLEVBQUVBLFNBQVM7c0JBQzlCLDRFQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDakI7Ozs7O1lBQ1AsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdGhlUXVlc3Rpb25zIGZyb20gJy4uL3JlZHVjZXJzL3RoZVF1ZXN0aW9ucyc7XG5pbXBvcnQgc2NvcmluZyBmcm9tICcuLi9yZWR1Y2Vycy9zY29yaW5nJztcbmltcG9ydCBjaGVja1F1aXogZnJvbSAnLi4vcmVkdWNlcnMvY2hlY2tRdWl6JztcblxuXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7IHNjb3JpbmcsIHRoZVF1ZXN0aW9ucywgY2hlY2tRdWl6IH0pO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0geyBrZXk6ICdraWRpa3VpeicsIHN0b3JhZ2UsIGJsYWNrbGlzdDogWyd0aGVRdWVzdGlvbnMnXSB9O1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjpwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycyksXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyBzZXJpYWxpemFibGVDaGVjazogZmFsc2UgfSksXG4gfSk7XG4gXG5cbiBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm92aWRlciIsImNvbmZpZ3VyZVN0b3JlIiwidGhlUXVlc3Rpb25zIiwic2NvcmluZyIsImNoZWNrUXVpeiIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiUGVyc2lzdEdhdGUiLCJzdG9yYWdlIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlcnMiLCJwZXJzaXN0Q29uZmlnIiwia2V5IiwiYmxhY2tsaXN0Iiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJwZXJzaXN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/checkQuiz.js":
/*!*******************************!*\
  !*** ./reducers/checkQuiz.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCheckToStore\": () => (/* binding */ addCheckToStore),\n/* harmony export */   \"checkSlice\": () => (/* binding */ checkSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst checkSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"checkQuiz\",\n    initialState: {\n        value: {\n            checks: []\n        }\n    },\n    reducers: {\n        addCheckToStore: (state, action)=>{\n            const { index , checked  } = action.payload;\n            if (index === undefined) {\n                state.value.checks;\n            } else {\n                state.value.checks.push({\n                    index,\n                    checked\n                });\n            }\n        }\n    }\n});\nconst { addCheckToStore  } = checkSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9jaGVja1F1aXouanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFFeEMsTUFBTUMsVUFBVSxHQUFHRCw2REFBVyxDQUFDO0lBQ3BDRSxJQUFJLEVBQUUsV0FBVztJQUVqQkMsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRTtZQUFDQyxNQUFNLEVBQUUsRUFBRTtTQUFDO0tBQ3BCO0lBRURDLFFBQVEsRUFBRTtRQUNSQyxlQUFlLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDbEMsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLE9BQU8sR0FBRSxHQUFHRixNQUFNLENBQUNHLE9BQU87WUFDekMsSUFBSUYsS0FBSyxLQUFLRyxTQUFTLEVBQUc7Z0JBQ3hCTCxLQUFLLENBQUNKLEtBQUssQ0FBQ0MsTUFBTSxDQUFFO2FBQ3JCLE1BQU07Z0JBQ1BHLEtBQUssQ0FBQ0osS0FBSyxDQUFDQyxNQUFNLENBQUNTLElBQUksQ0FBQztvQkFBRUosS0FBSztvQkFBRUMsT0FBTztpQkFBRSxDQUFDLENBQUM7YUFDOUM7U0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFSixlQUFlLEdBQUUsR0FBR04sVUFBVSxDQUFDYyxPQUFPLENBQUM7QUFDdEQsaUVBQWVkLFVBQVUsQ0FBQ2UsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcmVkdWNlcnMvY2hlY2tRdWl6LmpzPzBhOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdjaGVja1F1aXonLFxyXG5cclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHZhbHVlOiB7Y2hlY2tzOiBbXX0gLFxyXG4gIH0sXHJcbiAgXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZENoZWNrVG9TdG9yZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBpbmRleCwgY2hlY2tlZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgIHN0YXRlLnZhbHVlLmNoZWNrcyA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlLnZhbHVlLmNoZWNrcy5wdXNoKHsgaW5kZXgsIGNoZWNrZWQgfSk7XHJcbiAgIH19LCBcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZENoZWNrVG9TdG9yZSB9ID0gY2hlY2tTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBjaGVja1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY2hlY2tTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImNoZWNrcyIsInJlZHVjZXJzIiwiYWRkQ2hlY2tUb1N0b3JlIiwic3RhdGUiLCJhY3Rpb24iLCJpbmRleCIsImNoZWNrZWQiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/checkQuiz.js\n");

/***/ }),

/***/ "./reducers/scoring.js":
/*!*****************************!*\
  !*** ./reducers/scoring.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"scoreSlice\": () => (/* binding */ scoreSlice),\n/* harmony export */   \"scoreToStore\": () => (/* binding */ scoreToStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scoreSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"scoring\",\n    initialState: {\n        value: 0\n    },\n    reducers: {\n        scoreToStore: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\nconst { scoreToStore  } = scoreSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9zY29yaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytDO0FBRXhDLE1BQU1DLFVBQVUsR0FBR0QsNkRBQVcsQ0FBQztJQUNyQ0UsSUFBSSxFQUFFLFNBQVM7SUFFZEMsWUFBWSxFQUFHO1FBQ2RDLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFDRkMsUUFBUSxFQUFFO1FBQ1BDLFlBQVksRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUNoQ0QsS0FBSyxDQUFDSCxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQzlCO0tBQ0Q7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVILFlBQVksR0FBRSxHQUFHTCxVQUFVLENBQUNTLE9BQU8sQ0FBQztBQUNuRCxpRUFBZVQsVUFBVSxDQUFDVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9yZWR1Y2Vycy9zY29yaW5nLmpzPzUwNzciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NvcmVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuIG5hbWU6ICdzY29yaW5nJyxcclxuXHJcbiAgaW5pdGlhbFN0YXRlIDoge1xyXG4gICB2YWx1ZTogMCxcclxuICB9LFxyXG4gcmVkdWNlcnM6IHtcclxuICAgIHNjb3JlVG9TdG9yZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICBzdGF0ZS52YWx1ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2NvcmVUb1N0b3JlIH0gPSBzY29yZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHNjb3JlU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzY29yZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJzY29yZVRvU3RvcmUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/scoring.js\n");

/***/ }),

/***/ "./reducers/theQuestions.js":
/*!**********************************!*\
  !*** ./reducers/theQuestions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addQuizzToStore\": () => (/* binding */ addQuizzToStore),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"questionsSlice\": () => (/* binding */ questionsSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst questionsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"theQuestions\",\n    initialState: {\n        value: {\n            questions: [],\n            score: 0,\n            number: 0,\n            checks: []\n        }\n    },\n    reducers: {\n        addQuizzToStore: (state, action)=>{\n            state.value.number = action.payload;\n        }\n    }\n});\nconst { addQuizzToStore  } = questionsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy90aGVRdWVzdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFFeEMsTUFBTUMsY0FBYyxHQUFHRCw2REFBVyxDQUFDO0lBQ3hDRSxJQUFJLEVBQUUsY0FBYztJQUVwQkMsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRTtZQUFFQyxTQUFTLEVBQUUsRUFBRTtZQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUFFQyxNQUFNLEVBQUUsRUFBRTtTQUFFO0tBQzFEO0lBRURDLFFBQVEsRUFBRTtRQUNSQyxlQUFlLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDbENELEtBQUssQ0FBQ1AsS0FBSyxDQUFDRyxNQUFNLEdBQUdLLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3JDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSSxNQUFNLEVBQUVILGVBQWUsR0FBQyxHQUFHVCxjQUFjLENBQUNhLE9BQU8sQ0FBQztBQUN6RCxpRUFBZWIsY0FBYyxDQUFDYyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9yZWR1Y2Vycy90aGVRdWVzdGlvbnMuanM/OThkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd0aGVRdWVzdGlvbnMnLFxyXG5cclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHZhbHVlOiB7IHF1ZXN0aW9uczogW10sIHNjb3JlOiAwLCBudW1iZXI6IDAsIGNoZWNrczogW10gfSxcclxuICB9LFxyXG4gIFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRRdWl6elRvU3RvcmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlLm51bWJlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFF1aXp6VG9TdG9yZX0gPSBxdWVzdGlvbnNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbnNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInF1ZXN0aW9uc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicXVlc3Rpb25zIiwic2NvcmUiLCJudW1iZXIiLCJjaGVja3MiLCJyZWR1Y2VycyIsImFkZFF1aXp6VG9TdG9yZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/theQuestions.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();