"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 1461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "oi": () => (/* binding */ addCheckToStore)
/* harmony export */ });
/* unused harmony export checkSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const checkSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "checkQuiz",
    initialState: {
        value: {
            checks: []
        }
    },
    reducers: {
        addCheckToStore: (state, action)=>{
            const { index , checked  } = action.payload;
            if (index === undefined) {
                state.value.checks;
            } else {
                state.value.checks.push({
                    index,
                    checked
                });
            }
        }
    }
});
const { addCheckToStore  } = checkSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkSlice.reducer);


/***/ }),

/***/ 7668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fs": () => (/* binding */ addQuizzToStore)
/* harmony export */ });
/* unused harmony export questionsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const questionsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "theQuestions",
    initialState: {
        value: {
            questions: [],
            score: 0,
            number: 0,
            checks: []
        }
    },
    reducers: {
        addQuizzToStore: (state, action)=>{
            state.value.number = action.payload;
        }
    }
});
const { addQuizzToStore  } = questionsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questionsSlice.reducer);


/***/ })

};
;