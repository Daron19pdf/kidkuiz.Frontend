/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizz",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/answer.module.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/answer.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".answer_content___WJnm{\\r\\n    overflow: hidden;\\r\\n    margin: 15px;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /* padding: 20px 5px 10px 5px;  */\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 5px;\\r\\n    background-color: #f5f5f5;\\r\\n    box-shadow: 0 2px 3px #ccc;\\r\\n    width: 40%;\\r\\n    height: 80px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.answer_fontStyle__Nj_pu{\\r\\n    font-size: 20px;\\r\\n    color: #000;\\r\\n}\\r\\n\\r\\n.answer_content___WJnm:hover{\\r\\n    background-color: #e6e6e6;\\r\\n}\\r\\n\\r\\n.answer_base__Px8FA{\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.answer_correct__wC8hg{\\r\\n   background-color: #13cd13;\\r\\n   animation: answer_flash__bR5ZB 1s infinite;\\r\\n}\\r\\n\\r\\n@keyframes answer_flash__bR5ZB {\\r\\n    0% {background-color: #00ff00;}\\r\\n    50% {background-color: #e6e6e6;}\\r\\n    100% {background-color: #00ff00;}   \\r\\n}\\r\\n\\r\\n.answer_wrong__Gv7dC{\\r\\n    background-color: #ff0000;\\r\\n    animation: answer_flash2__q4Cmu 1s infinite;\\r\\n}\\r\\n\\r\\n@keyframes answer_flash2__q4Cmu {\\r\\n    0% {background-color: #ff0000;}\\r\\n    50% {background-color: #e6e6e6;}\\r\\n    100% {background-color: #ff0000;}   \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/answer.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;IACjC,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;IACzB,0BAA0B;IAC1B,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;GACG,yBAAyB;GACzB,0CAA4B;AAC/B;;AAEA;IACI,IAAI,yBAAyB,CAAC;IAC9B,KAAK,yBAAyB,CAAC;IAC/B,MAAM,yBAAyB,CAAC;AACpC;;AAEA;IACI,yBAAyB;IACzB,2CAA6B;AACjC;;AAEA;IACI,IAAI,yBAAyB,CAAC;IAC9B,KAAK,yBAAyB,CAAC;IAC/B,MAAM,yBAAyB,CAAC;AACpC\",\"sourcesContent\":[\".content{\\r\\n    overflow: hidden;\\r\\n    margin: 15px;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /* padding: 20px 5px 10px 5px;  */\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 5px;\\r\\n    background-color: #f5f5f5;\\r\\n    box-shadow: 0 2px 3px #ccc;\\r\\n    width: 40%;\\r\\n    height: 80px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.fontStyle{\\r\\n    font-size: 20px;\\r\\n    color: #000;\\r\\n}\\r\\n\\r\\n.content:hover{\\r\\n    background-color: #e6e6e6;\\r\\n}\\r\\n\\r\\n.base{\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.correct{\\r\\n   background-color: #13cd13;\\r\\n   animation: flash 1s infinite;\\r\\n}\\r\\n\\r\\n@keyframes flash {\\r\\n    0% {background-color: #00ff00;}\\r\\n    50% {background-color: #e6e6e6;}\\r\\n    100% {background-color: #00ff00;}   \\r\\n}\\r\\n\\r\\n.wrong{\\r\\n    background-color: #ff0000;\\r\\n    animation: flash2 1s infinite;\\r\\n}\\r\\n\\r\\n@keyframes flash2 {\\r\\n    0% {background-color: #ff0000;}\\r\\n    50% {background-color: #e6e6e6;}\\r\\n    100% {background-color: #ff0000;}   \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"content\": \"answer_content___WJnm\",\n\t\"fontStyle\": \"answer_fontStyle__Nj_pu\",\n\t\"base\": \"answer_base__Px8FA\",\n\t\"correct\": \"answer_correct__wC8hg\",\n\t\"flash\": \"answer_flash__bR5ZB\",\n\t\"wrong\": \"answer_wrong__Gv7dC\",\n\t\"flash2\": \"answer_flash2__q4Cmu\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL2Fuc3dlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpRUFBaUUseUJBQXlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLHdDQUF3QyxpQ0FBaUMsMkJBQTJCLGtDQUFrQyxtQ0FBbUMsbUJBQW1CLHFCQUFxQiwyQkFBMkIsS0FBSyxpQ0FBaUMsd0JBQXdCLG9CQUFvQixLQUFLLHFDQUFxQyxrQ0FBa0MsS0FBSyw0QkFBNEIsb0JBQW9CLHFCQUFxQixzQkFBc0IsNEJBQTRCLGdDQUFnQyxLQUFLLCtCQUErQixpQ0FBaUMsa0RBQWtELEtBQUssd0NBQXdDLFlBQVksMkJBQTJCLGFBQWEsMkJBQTJCLGNBQWMsOEJBQThCLEtBQUssNkJBQTZCLGtDQUFrQyxvREFBb0QsS0FBSyx5Q0FBeUMsWUFBWSwyQkFBMkIsYUFBYSwyQkFBMkIsY0FBYyw4QkFBOEIsS0FBSyx1QkFBdUIseUZBQXlGLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixtQ0FBbUMseUJBQXlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLHdDQUF3QyxpQ0FBaUMsMkJBQTJCLGtDQUFrQyxtQ0FBbUMsbUJBQW1CLHFCQUFxQiwyQkFBMkIsS0FBSyxtQkFBbUIsd0JBQXdCLG9CQUFvQixLQUFLLHVCQUF1QixrQ0FBa0MsS0FBSyxjQUFjLG9CQUFvQixxQkFBcUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsS0FBSyxpQkFBaUIsaUNBQWlDLG9DQUFvQyxLQUFLLDBCQUEwQixZQUFZLDJCQUEyQixhQUFhLDJCQUEyQixjQUFjLDhCQUE4QixLQUFLLGVBQWUsa0NBQWtDLHNDQUFzQyxLQUFLLDJCQUEyQixZQUFZLDJCQUEyQixhQUFhLDJCQUEyQixjQUFjLDhCQUE4QixLQUFLLG1DQUFtQztBQUN6aEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvYW5zd2VyLm1vZHVsZS5jc3M/Mjg2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFuc3dlcl9jb250ZW50X19fV0pubXtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogcGFkZGluZzogMjBweCA1cHggMTBweCA1cHg7ICAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAjY2NjO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcl9mb250U3R5bGVfX05qX3B1e1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyX2NvbnRlbnRfX19XSm5tOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5zd2VyX2Jhc2VfX1B4OEZBe1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcl9jb3JyZWN0X193QzhoZ3tcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNjZDEzO1xcclxcbiAgIGFuaW1hdGlvbjogYW5zd2VyX2ZsYXNoX19iUjVaQiAxcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbnN3ZXJfZmxhc2hfX2JSNVpCIHtcXHJcXG4gICAgMCUge2JhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7fVxcclxcbiAgICA1MCUge2JhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7fVxcclxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO30gICBcXHJcXG59XFxyXFxuXFxyXFxuLmFuc3dlcl93cm9uZ19fR3Y3ZEN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxuICAgIGFuaW1hdGlvbjogYW5zd2VyX2ZsYXNoMl9fcTRDbXUgMXMgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYW5zd2VyX2ZsYXNoMl9fcTRDbXUge1xcclxcbiAgICAwJSB7YmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDt9XFxyXFxuICAgIDUwJSB7YmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjt9XFxyXFxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7fSAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fuc3dlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtHQUNHLHlCQUF5QjtHQUN6QiwwQ0FBNEI7QUFDL0I7O0FBRUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0lBQzlCLEtBQUsseUJBQXlCLENBQUM7SUFDL0IsTUFBTSx5QkFBeUIsQ0FBQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQ0FBNkI7QUFDakM7O0FBRUE7SUFDSSxJQUFJLHlCQUF5QixDQUFDO0lBQzlCLEtBQUsseUJBQXlCLENBQUM7SUFDL0IsTUFBTSx5QkFBeUIsQ0FBQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogcGFkZGluZzogMjBweCA1cHggMTBweCA1cHg7ICAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAjY2NjO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnRTdHlsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxufVxcclxcblxcclxcbi5iYXNle1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3R7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzEzY2QxMztcXHJcXG4gICBhbmltYXRpb246IGZsYXNoIDFzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXHJcXG4gICAgMCUge2JhY2tncm91bmQtY29sb3I6ICMwMGZmMDA7fVxcclxcbiAgICA1MCUge2JhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7fVxcclxcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO30gICBcXHJcXG59XFxyXFxuXFxyXFxuLndyb25ne1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcclxcbiAgICBhbmltYXRpb246IGZsYXNoMiAxcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbGFzaDIge1xcclxcbiAgICAwJSB7YmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDt9XFxyXFxuICAgIDUwJSB7YmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjt9XFxyXFxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7fSAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiYW5zd2VyX2NvbnRlbnRfX19XSm5tXCIsXG5cdFwiZm9udFN0eWxlXCI6IFwiYW5zd2VyX2ZvbnRTdHlsZV9fTmpfcHVcIixcblx0XCJiYXNlXCI6IFwiYW5zd2VyX2Jhc2VfX1B4OEZBXCIsXG5cdFwiY29ycmVjdFwiOiBcImFuc3dlcl9jb3JyZWN0X193QzhoZ1wiLFxuXHRcImZsYXNoXCI6IFwiYW5zd2VyX2ZsYXNoX19iUjVaQlwiLFxuXHRcIndyb25nXCI6IFwiYW5zd2VyX3dyb25nX19HdjdkQ1wiLFxuXHRcImZsYXNoMlwiOiBcImFuc3dlcl9mbGFzaDJfX3E0Q211XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/answer.module.css\n");

/***/ })

});