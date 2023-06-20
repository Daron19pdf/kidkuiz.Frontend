"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizz",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/answer.module.css */ \"./styles/answer.module.css\");\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Answer(props) {\n    var handleClick = function() {\n        if (props.answer === props.correct) {\n            props.scoreUp();\n            props.setAnswerStatus(true);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        } else {\n            props.setAnswerStatus(false);\n            var test = document.getElementsByName(\"correct\");\n            test.className = (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        onClick: function() {\n            return handleClick();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base), \" \").concat(props.answerStatus === true ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct) : \"\", \" \").concat(props.answerStatus === false ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrong) : \"\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontStyle),\n                children: props.answer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFFakQsU0FBU0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFFbkIsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBSUQsS0FBSyxDQUFDRSxNQUFNLEtBQUtGLEtBQUssQ0FBQ0csT0FBTyxFQUFFO1lBQ2xDSCxLQUFLLENBQUNJLE9BQU8sRUFBRSxDQUFDO1lBQ2hCSixLQUFLLENBQUNLLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QkMsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZOLEtBQUssQ0FBQ0ssZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QkwsS0FBSyxDQUFDTyxZQUFZLEVBQUUsQ0FBQzthQUN0QixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1YsTUFBTTtZQUNMUCxLQUFLLENBQUNLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ2hERixJQUFJLENBQUNHLFNBQVMsR0FBR2IsMEVBQWMsQ0FBQztZQUNoQ1EsVUFBVSxDQUFDLFdBQU07Z0JBQ2JOLEtBQUssQ0FBQ0ssZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QkwsS0FBSyxDQUFDTyxZQUFZLEVBQUUsQ0FBQzthQUNwQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2Q7S0FDRjtJQUVILHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNELFNBQVMsRUFBRWIsMEVBQWM7UUFBRWdCLE9BQU8sRUFBRTttQkFBTWIsV0FBVyxFQUFFO1NBQUE7a0JBQ3hELDRFQUFDVyxLQUFHO1lBQUVELFNBQVMsRUFBRSxFQUFDLENBQWlCWCxNQUFpRCxDQUFoRUYsdUVBQVcsRUFBQyxHQUFDLENBQW9ELENBQUdFLE1BQWlELENBQXRHQSxLQUFLLENBQUNnQixZQUFZLEtBQUssSUFBSSxHQUFHbEIsMEVBQWMsR0FBRyxFQUFFLEVBQUMsR0FBQyxDQUFvRCxRQUFsREUsS0FBSyxDQUFDZ0IsWUFBWSxLQUFLLEtBQUssR0FBR2xCLHdFQUFZLEdBQUksRUFBRSxDQUFFO3NCQUN2SSw0RUFBQ29CLE1BQUk7Z0JBQUNQLFNBQVMsRUFBRWIsNEVBQWdCOzBCQUFHRSxLQUFLLENBQUNFLE1BQU07Ozs7O29CQUFROzs7OztnQkFDdEQ7Ozs7O1lBQ0osQ0FFTjtDQUVIO0FBOUJRSCxLQUFBQSxNQUFNO0FBZ0NmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanM/MWE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hbnN3ZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQW5zd2VyKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwcm9wcy5hbnN3ZXIgPT09IHByb3BzLmNvcnJlY3QpIHtcclxuICAgICAgICBwcm9wcy5zY29yZVVwKCk7XHJcbiAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKG51bGwpO1xyXG4gICAgICAgICAgcHJvcHMucmVzZXRBbnN3ZXJzKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICBsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiY29ycmVjdFwiKTtcclxuICAgICAgICB0ZXN0LmNsYXNzTmFtZSA9IHN0eWxlcy5jb3JyZWN0O1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRBbnN3ZXJTdGF0dXMobnVsbCk7XHJcbiAgICAgICAgICAgIHByb3BzLnJlc2V0QW5zd2VycygpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFzZX0gJHtwcm9wcy5hbnN3ZXJTdGF0dXMgPT09IHRydWUgPyBzdHlsZXMuY29ycmVjdCA6ICcnfSAke3Byb3BzLmFuc3dlclN0YXR1cyA9PT0gZmFsc2UgPyBzdHlsZXMud3JvbmcgIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9udFN0eWxlfT57cHJvcHMuYW5zd2VyfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbnN3ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkFuc3dlciIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJhbnN3ZXIiLCJjb3JyZWN0Iiwic2NvcmVVcCIsInNldEFuc3dlclN0YXR1cyIsInNldFRpbWVvdXQiLCJyZXNldEFuc3dlcnMiLCJ0ZXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImNsYXNzTmFtZSIsImRpdiIsImNvbnRlbnQiLCJvbkNsaWNrIiwiYmFzZSIsImFuc3dlclN0YXR1cyIsIndyb25nIiwic3BhbiIsImZvbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});