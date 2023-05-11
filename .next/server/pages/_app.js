"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./reducers/theQuestions.js
var theQuestions = __webpack_require__(7668);
// EXTERNAL MODULE: ./reducers/scoring.js
var scoring = __webpack_require__(2315);
// EXTERNAL MODULE: ./reducers/checkQuiz.js
var checkQuiz = __webpack_require__(1461);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js












const reducers = (0,toolkit_.combineReducers)({
    scoring: scoring/* default */.ZP,
    theQuestions: theQuestions/* default */.ZP,
    checkQuiz: checkQuiz/* default */.ZP
});
const persistConfig = {
    key: "kidikuiz",
    storage: (storage_default()),
    blacklist: [
        "theQuestions"
    ]
};
const store = (0,toolkit_.configureStore)({
    reducer: (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducers),
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PersistGate, {
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 2315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fi": () => (/* binding */ scoreToStore)
/* harmony export */ });
/* unused harmony export scoreSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const scoreSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "scoring",
    initialState: {
        value: 0
    },
    reducers: {
        scoreToStore: (state, action)=>{
            state.value = action.payload;
        }
    }
});
const { scoreToStore  } = scoreSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [321], () => (__webpack_exec__(5635)));
module.exports = __webpack_exports__;

})();