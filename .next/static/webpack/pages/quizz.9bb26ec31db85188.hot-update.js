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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/answer.module.css */ \"./styles/answer.module.css\");\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Answer(props) {\n    console.log(props);\n    var handleClick = function() {\n        if (props.answer === props.correct) {\n            props.scoreUp();\n            props.setAnswerStatus(true);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        } else {\n            for(var i = 0; i < 4; i++){\n                if (props.answer === props.correct) {\n                    className = (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct);\n                }\n            }\n            props.setAnswerStatus(false);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        onClick: function() {\n            return handleClick();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base), \" \").concat(props.answerStatus === true ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct) : \"\", \" \").concat(props.answerStatus === false ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrong) : \"\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontStyle),\n                children: props.answer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFFakQsU0FBU0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFFckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUVqQixJQUFNRyxXQUFXLEdBQUcsV0FBTTtRQUN4QixJQUFJSCxLQUFLLENBQUNJLE1BQU0sS0FBS0osS0FBSyxDQUFDSyxPQUFPLEVBQUU7WUFDbENMLEtBQUssQ0FBQ00sT0FBTyxFQUFFLENBQUM7WUFDaEJOLEtBQUssQ0FBQ08sZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCQyxVQUFVLENBQUMsV0FBTTtnQkFDZlIsS0FBSyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCUCxLQUFLLENBQUNTLFlBQVksRUFBRSxDQUFDO2FBQ3RCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVixNQUFNO1lBQ0wsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsQ0FBRTtnQkFDMUIsSUFBSVYsS0FBSyxDQUFDSSxNQUFNLEtBQUtKLEtBQUssQ0FBQ0ssT0FBTyxFQUFFO29CQUNsQ00sU0FBUyxHQUFHYiwwRUFBYyxDQUFDO2lCQUM1QjthQUNGO1lBQ0RFLEtBQUssQ0FBQ08sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCQyxVQUFVLENBQUMsV0FBTTtnQkFDYlIsS0FBSyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCUCxLQUFLLENBQUNTLFlBQVksRUFBRSxDQUFDO2FBQ3BCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDZDtLQUNGO0lBRUgscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0QsU0FBUyxFQUFFYiwwRUFBYztRQUFFZ0IsT0FBTyxFQUFFO21CQUFNWCxXQUFXLEVBQUU7U0FBQTtrQkFDeEQsNEVBQUNTLEtBQUc7WUFBRUQsU0FBUyxFQUFFLEVBQUMsQ0FBaUJYLE1BQWlELENBQWhFRix1RUFBVyxFQUFDLEdBQUMsQ0FBb0QsQ0FBR0UsTUFBaUQsQ0FBdEdBLEtBQUssQ0FBQ2dCLFlBQVksS0FBSyxJQUFJLEdBQUdsQiwwRUFBYyxHQUFHLEVBQUUsRUFBQyxHQUFDLENBQW9ELFFBQWxERSxLQUFLLENBQUNnQixZQUFZLEtBQUssS0FBSyxHQUFHbEIsd0VBQVksR0FBSSxFQUFFLENBQUU7c0JBQ3ZJLDRFQUFDb0IsTUFBSTtnQkFBQ1AsU0FBUyxFQUFFYiw0RUFBZ0I7MEJBQUdFLEtBQUssQ0FBQ0ksTUFBTTs7Ozs7b0JBQVE7Ozs7O2dCQUN0RDs7Ozs7WUFDSixDQUVOO0NBRUg7QUFuQ1FMLEtBQUFBLE1BQU07QUFxQ2YsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fuc3dlci5qcz8xYTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Fuc3dlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBBbnN3ZXIocHJvcHMpIHtcclxuXHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAocHJvcHMuYW5zd2VyID09PSBwcm9wcy5jb3JyZWN0KSB7XHJcbiAgICAgICAgcHJvcHMuc2NvcmVVcCgpO1xyXG4gICAgICAgIHByb3BzLnNldEFuc3dlclN0YXR1cyh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHByb3BzLnNldEFuc3dlclN0YXR1cyhudWxsKTtcclxuICAgICAgICAgIHByb3BzLnJlc2V0QW5zd2VycygpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAocHJvcHMuYW5zd2VyID09PSBwcm9wcy5jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHN0eWxlcy5jb3JyZWN0O1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKGZhbHNlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKG51bGwpO1xyXG4gICAgICAgICAgICBwcm9wcy5yZXNldEFuc3dlcnMoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhc2V9ICR7cHJvcHMuYW5zd2VyU3RhdHVzID09PSB0cnVlID8gc3R5bGVzLmNvcnJlY3QgOiAnJ30gJHtwcm9wcy5hbnN3ZXJTdGF0dXMgPT09IGZhbHNlID8gc3R5bGVzLndyb25nICA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRTdHlsZX0+e3Byb3BzLmFuc3dlcn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJBbnN3ZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImFuc3dlciIsImNvcnJlY3QiLCJzY29yZVVwIiwic2V0QW5zd2VyU3RhdHVzIiwic2V0VGltZW91dCIsInJlc2V0QW5zd2VycyIsImkiLCJjbGFzc05hbWUiLCJkaXYiLCJjb250ZW50Iiwib25DbGljayIsImJhc2UiLCJhbnN3ZXJTdGF0dXMiLCJ3cm9uZyIsInNwYW4iLCJmb250U3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});