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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/answer.module.css */ \"./styles/answer.module.css\");\n/* harmony import */ var _styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Answer(props) {\n    var handleClick = function() {\n        if (props.answer === props.correct) {\n            props.scoreUp();\n            props.setAnswerStatus(true);\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n            }, 1000);\n        } else {\n            props.setAnswerStatus(false);\n            var options = document.getElementsByClassName((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base));\n            for(var i1 = 0; i1 < options.length; i1++){\n                if (options[i1].textContent === props.correct) {\n                    options[i1].classList.add((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct));\n                }\n            }\n            setTimeout(function() {\n                props.setAnswerStatus(null);\n                props.resetAnswers();\n                for(var i = 0; i < options.length; i++){\n                    if (options[i].textContent === props.correct) {\n                        options[i].classList.remove((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct));\n                    }\n                }\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().base), \" \").concat(props.answerStatus === true ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().correct) : \"\", \" \").concat(props.answerStatus === false ? (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrong) : \"\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontStyle),\n                children: props.answer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\daron\\\\kidikuiz\\\\frontend\\\\components\\\\Answer.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = Answer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answer);\nvar _c;\n$RefreshReg$(_c, \"Answer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fuc3dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFFakQsU0FBU0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDckIsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBSUQsS0FBSyxDQUFDRSxNQUFNLEtBQUtGLEtBQUssQ0FBQ0csT0FBTyxFQUFFO1lBQ2xDSCxLQUFLLENBQUNJLE9BQU8sRUFBRSxDQUFDO1lBQ2hCSixLQUFLLENBQUNLLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QkMsVUFBVSxDQUFDLFdBQU07Z0JBQ2ZOLEtBQUssQ0FBQ0ssZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QkwsS0FBSyxDQUFDTyxZQUFZLEVBQUUsQ0FBQzthQUN0QixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1YsTUFBTTtZQUNMUCxLQUFLLENBQUNLLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFNRyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUNaLHVFQUFXLENBQUM7WUFDNUQsSUFBSyxJQUFJYyxFQUFDLEdBQUcsQ0FBQyxFQUFFQSxFQUFDLEdBQUdKLE9BQU8sQ0FBQ0ssTUFBTSxFQUFFRCxFQUFDLEVBQUUsQ0FBRTtnQkFDdkMsSUFBSUosT0FBTyxDQUFDSSxFQUFDLENBQUMsQ0FBQ0UsV0FBVyxLQUFLZCxLQUFLLENBQUNHLE9BQU8sRUFBRTtvQkFDNUNLLE9BQU8sQ0FBQ0ksRUFBQyxDQUFDLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDbEIsMEVBQWMsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1lBQ0RRLFVBQVUsQ0FBQyxXQUFNO2dCQUNmTixLQUFLLENBQUNLLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUJMLEtBQUssQ0FBQ08sWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLElBQUssSUFBSUssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7b0JBQ3ZDLElBQUlKLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDLENBQUNFLFdBQVcsS0FBS2QsS0FBSyxDQUFDRyxPQUFPLEVBQUU7d0JBQzVDSyxPQUFPLENBQUNJLENBQUMsQ0FBQyxDQUFDRyxTQUFTLENBQUNFLE1BQU0sQ0FBQ25CLDBFQUFjLENBQUMsQ0FBQztxQkFDN0M7aUJBQ0Y7YUFDRixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7S0FDRjtJQUVELHFCQUNFLDhEQUFDb0IsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwwRUFBYztRQUFFdUIsT0FBTyxFQUFFcEIsV0FBVztrQkFDbEQsNEVBQUNpQixLQUFHO1lBQ0ZDLFNBQVMsRUFBRSxFQUFDLENBQ1ZuQixNQUFpRCxDQURyQ0YsdUVBQVcsRUFBQyxHQUFDLENBQ3lCLENBQ2hERSxNQUFnRCxDQURsREEsS0FBSyxDQUFDc0IsWUFBWSxLQUFLLElBQUksR0FBR3hCLDBFQUFjLEdBQUcsRUFBRSxFQUNsRCxHQUFDLENBQW1ELFFBQWpERSxLQUFLLENBQUNzQixZQUFZLEtBQUssS0FBSyxHQUFHeEIsd0VBQVksR0FBRyxFQUFFLENBQUU7c0JBRXRELDRFQUFDMEIsTUFBSTtnQkFBQ0wsU0FBUyxFQUFFckIsNEVBQWdCOzBCQUFHRSxLQUFLLENBQUNFLE1BQU07Ozs7O29CQUFROzs7OztnQkFDcEQ7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBeENRSCxLQUFBQSxNQUFNO0FBMENmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanM/MWE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hbnN3ZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gQW5zd2VyKHByb3BzKSB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuYW5zd2VyID09PSBwcm9wcy5jb3JyZWN0KSB7XHJcbiAgICAgIHByb3BzLnNjb3JlVXAoKTtcclxuICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXRBbnN3ZXJTdGF0dXMobnVsbCk7XHJcbiAgICAgICAgcHJvcHMucmVzZXRBbnN3ZXJzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKGZhbHNlKTtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc3R5bGVzLmJhc2UpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAob3B0aW9uc1tpXS50ZXh0Q29udGVudCA9PT0gcHJvcHMuY29ycmVjdCkge1xyXG4gICAgICAgICAgb3B0aW9uc1tpXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5jb3JyZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0QW5zd2VyU3RhdHVzKG51bGwpO1xyXG4gICAgICAgIHByb3BzLnJlc2V0QW5zd2VycygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnNbaV0udGV4dENvbnRlbnQgPT09IHByb3BzLmNvcnJlY3QpIHtcclxuICAgICAgICAgICAgb3B0aW9uc1tpXS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5jb3JyZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhc2V9ICR7XHJcbiAgICAgICAgICBwcm9wcy5hbnN3ZXJTdGF0dXMgPT09IHRydWUgPyBzdHlsZXMuY29ycmVjdCA6IFwiXCJcclxuICAgICAgICB9ICR7cHJvcHMuYW5zd2VyU3RhdHVzID09PSBmYWxzZSA/IHN0eWxlcy53cm9uZyA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRTdHlsZX0+e3Byb3BzLmFuc3dlcn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJBbnN3ZXIiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiYW5zd2VyIiwiY29ycmVjdCIsInNjb3JlVXAiLCJzZXRBbnN3ZXJTdGF0dXMiLCJzZXRUaW1lb3V0IiwicmVzZXRBbnN3ZXJzIiwib3B0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJhc2UiLCJpIiwibGVuZ3RoIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50Iiwib25DbGljayIsImFuc3dlclN0YXR1cyIsIndyb25nIiwic3BhbiIsImZvbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Answer.js\n");

/***/ })

});