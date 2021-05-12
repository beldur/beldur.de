self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_active_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/active-link */ "./components/active-link.js");
/* harmony import */ var _components_social_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/social-media */ "./components/social-media.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/c/projects/js/beldur.de/components/layout.js",
    _this = undefined;






var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Home' : _ref$title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "wrapper",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      id: "footer",
      className: "wrapper style1-alt",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "inner",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "menu",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "\xA9 Alexander L\xFCcking. All rights reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_social_media__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 50
  }, _this);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSx3QkFBYUMsS0FBYjtBQUFBLE1BQWFBLEtBQWIsMkJBQXFCLE1BQXJCO0FBQUEsc0JBQWtDO0FBQUEsNEJBaUQvQztBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQUEsZ0JBQW1CRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakQrQyxlQW1EL0M7QUFBUSxRQUFFLEVBQUMsUUFBWDtBQUFvQixlQUFTLEVBQUMsb0JBQTlCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxtQ0FDRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5EK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWxDO0FBQUEsQ0FBZjs7S0FBTUQsTTtBQStETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NGZmODZiZGI0MTZmZDBhMTU0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9hY3RpdmUtbGluaydcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tICcuLi9jb21wb25lbnRzL3NvY2lhbC1tZWRpYSdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ0hvbWUnIH0pID0+IDxkaXY+XG4gIHsvKiA8SGVhZD5cbiAgICA8dGl0bGU+e3RpdGxlfSAtIFdlbGNvbWUgdG8gYmVsZHVyLmRlPC90aXRsZT5cbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInN0YXRpYy9jc3MvbWFpbi5jc3NcIiAvPlxuICAgIDxsaW5rXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNy4yL2Nzcy9hbGwuY3NzXCJcbiAgICAgIGludGVncml0eT1cInNoYTM4NC1mbm1PQ3FiVGxXSWxqOEx5VGpvN21PVVN0anNLQzRwT3BRYnF5aTdScmhON3VkaTlSd2hLa01IcHZMYkhHOVNyXCJcbiAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAvPlxuICA8L0hlYWQ+XG5cbiAgPHNlY3Rpb24gaWQ9XCJzaWRlYmFyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2V4cGVydGlzZVwiPlxuICAgICAgICAgICAgICA8YT5FeHBlcnRpc2U8L2E+XG4gICAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2Jvb2tzXCI+XG4gICAgICAgICAgICAgIDxhPk15IEJvb2sgTGlzdDwvYT5cbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2dvXCI+XG4gICAgICAgICAgICAgIDxhPkdPICjlm7Tmo4spPC9hPlxuICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jaGluYVwiPlxuICAgICAgICAgICAgICA8YT5DaGluYSAo5Lit5Zu9KTwvYT5cbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICA8L2xpPi99XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxTb2NpYWxNZWRpYSAvPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+ICovfVxuXG4gIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+e2NoaWxkcmVufTwvZGl2PlxuXG4gIDxmb290ZXIgaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9XCJ3cmFwcGVyIHN0eWxlMS1hbHRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8bGk+JmNvcHk7IEFsZXhhbmRlciBMJnV1bWw7Y2tpbmcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxTb2NpYWxNZWRpYSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=