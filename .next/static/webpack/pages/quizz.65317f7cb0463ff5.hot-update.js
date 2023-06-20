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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/answer.module.css */ \"./styles/answer.module.css\");\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Answer(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), inputClass = ref[0], setInputClass = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInputClass(\"\"); // Réinitialise la classe lorsque la question change\n    }, [\n        props.correct\n    ]);\n    var handleClick = function() {\n        if (props.answer === props.correct) {\n            props.scoreUp();\n            props.setAnswerStatus(true);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        } else {\n            props.setAnswerStatus(false);\n            setInputClass((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrong));\n            var correctAnswer = document.querySelector(\".\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct)));\n            correctAnswer.classList.add((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().showCorrect)); // Ajoute la classe pour afficher la réponse correcte\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n                correctAnswer.classList.remove((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().showCorrect)); // Supprime la classe pour masquer la réponse correcte\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base), \" \").concat(props.answerStatus === true ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct) : \"\", \" \").concat(inputClass),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontStyle),\n                    children: props.answer\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            props.answerStatus === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base), \" \").concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontStyle),\n                    children: props.correct\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Answer, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBbUQ7QUFDRjs7QUFFakQsU0FBU0ksTUFBTSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3JCLElBQW9DSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBSmxELFVBSW1CLEdBQW1CQSxHQUFZLEdBQS9CLEVBSm5CLGFBSWtDLEdBQUlBLEdBQVksR0FBaEI7SUFFaENDLGdEQUFTLENBQUMsV0FBTTtRQUNkSyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuQixFQUFDO1FBQUNGLEtBQUssQ0FBQ0csT0FBTztLQUFDLENBQUMsQ0FBQztJQUVwQixJQUFNQyxXQUFXLEdBQUcsV0FBTTtRQUN4QixJQUFJSixLQUFLLENBQUNLLE1BQU0sS0FBS0wsS0FBSyxDQUFDRyxPQUFPLEVBQUU7WUFDbENILEtBQUssQ0FBQ00sT0FBTyxFQUFFLENBQUM7WUFDaEJOLEtBQUssQ0FBQ08sZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCQyxVQUFVLENBQUMsV0FBTTtnQkFDZlIsS0FBSyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCUCxLQUFLLENBQUNTLFlBQVksRUFBRSxDQUFDO2FBQ3RCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0xULEtBQUssQ0FBQ08sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCTCxhQUFhLENBQUNKLHdFQUFZLENBQUMsQ0FBQztZQUM1QixJQUFJYSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUUsQ0FBaUIsT0FBZmYsMEVBQWMsQ0FBRSxDQUFDO1lBQ2hFYSxhQUFhLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDakIsOEVBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2hEVSxVQUFTLENBQUMsV0FBTTtnQkFDZlIsS0FBSyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCUCxLQUFLLENBQUNTLFlBQVksRUFBRSxDQUFDO2dCQUNyQkUsYUFBYSxDQUFDRyxTQUFTLENBQUNHLE1BQU0sQ0FBQ25CLDhFQUFrQixDQUFDLENBQUMsQ0FBQzthQUNyRCxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7S0FDRjtJQUVELHFCQUNFLDhEQUFDb0IsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwwRUFBYztRQUFFdUIsT0FBTyxFQUFFakIsV0FBVzs7MEJBQ2xELDhEQUFDYyxLQUFHO2dCQUNGQyxTQUFTLEVBQUUsRUFBQyxDQUFpQm5CLE1BQWlELENBQWhFRix1RUFBVyxFQUFDLEdBQUMsQ0FBb0QsQ0FBR0csTUFBVSxDQUEvREQsS0FBSyxDQUFDdUIsWUFBWSxLQUFLLElBQUksR0FBR3pCLDBFQUFjLEdBQUcsRUFBRSxFQUFDLEdBQUMsQ0FBYSxRQUFYRyxVQUFVLENBQUU7MEJBRTlGLDRFQUFDdUIsTUFBSTtvQkFBQ0wsU0FBUyxFQUFFckIsNEVBQWdCOzhCQUFHRSxLQUFLLENBQUNLLE1BQU07Ozs7O3dCQUFROzs7OztvQkFDcEQ7WUFDTEwsS0FBSyxDQUFDdUIsWUFBWSxLQUFLLEtBQUssa0JBQzNCLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFpQnJCLE1BQWMsQ0FBN0JBLHVFQUFXLEVBQUMsR0FBQyxDQUFpQixRQUFmQSwwRUFBYyxDQUFFOzBCQUNoRCw0RUFBQzBCLE1BQUk7b0JBQUNMLFNBQVMsRUFBRXJCLDRFQUFnQjs4QkFBR0UsS0FBSyxDQUFDRyxPQUFPOzs7Ozt3QkFBUTs7Ozs7b0JBQ3JEOzs7Ozs7WUFFSixDQUNOO0NBQ0g7R0ExQ1FKLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQTRDZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQW5zd2VyLmpzPzFhNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBBbnN3ZXIocHJvcHMpIHtcclxuICBjb25zdCBbaW5wdXRDbGFzcywgc2V0SW5wdXRDbGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElucHV0Q2xhc3MoXCJcIik7IC8vIFLDqWluaXRpYWxpc2UgbGEgY2xhc3NlIGxvcnNxdWUgbGEgcXVlc3Rpb24gY2hhbmdlXHJcbiAgfSwgW3Byb3BzLmNvcnJlY3RdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuYW5zd2VyID09PSBwcm9wcy5jb3JyZWN0KSB7XHJcbiAgICAgIHByb3BzLnNjb3JlVXAoKTtcclxuICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRBbnN3ZXJTdGF0dXMobnVsbCk7XHJcbiAgICAgICAgcHJvcHMucmVzZXRBbnN3ZXJzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKGZhbHNlKTtcclxuICAgICAgc2V0SW5wdXRDbGFzcyhzdHlsZXMud3JvbmcpO1xyXG4gICAgICBsZXQgY29ycmVjdEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3N0eWxlcy5jb3JyZWN0fWApO1xyXG4gICAgICBjb3JyZWN0QW5zd2VyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNob3dDb3JyZWN0KTsgLy8gQWpvdXRlIGxhIGNsYXNzZSBwb3VyIGFmZmljaGVyIGxhIHLDqXBvbnNlIGNvcnJlY3RlXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnNldEFuc3dlclN0YXR1cyhudWxsKTtcclxuICAgICAgICBwcm9wcy5yZXNldEFuc3dlcnMoKTtcclxuICAgICAgICBjb3JyZWN0QW5zd2VyLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLnNob3dDb3JyZWN0KTsgLy8gU3VwcHJpbWUgbGEgY2xhc3NlIHBvdXIgbWFzcXVlciBsYSByw6lwb25zZSBjb3JyZWN0ZVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXNlfSAke3Byb3BzLmFuc3dlclN0YXR1cyA9PT0gdHJ1ZSA/IHN0eWxlcy5jb3JyZWN0IDogXCJcIn0gJHtpbnB1dENsYXNzfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb250U3R5bGV9Pntwcm9wcy5hbnN3ZXJ9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Byb3BzLmFuc3dlclN0YXR1cyA9PT0gZmFsc2UgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFzZX0gJHtzdHlsZXMuY29ycmVjdH1gfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRTdHlsZX0+e3Byb3BzLmNvcnJlY3R9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkFuc3dlciIsInByb3BzIiwiaW5wdXRDbGFzcyIsInNldElucHV0Q2xhc3MiLCJjb3JyZWN0IiwiaGFuZGxlQ2xpY2siLCJhbnN3ZXIiLCJzY29yZVVwIiwic2V0QW5zd2VyU3RhdHVzIiwic2V0VGltZW91dCIsInJlc2V0QW5zd2VycyIsIndyb25nIiwiY29ycmVjdEFuc3dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInNob3dDb3JyZWN0IiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudCIsIm9uQ2xpY2siLCJiYXNlIiwiYW5zd2VyU3RhdHVzIiwic3BhbiIsImZvbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});