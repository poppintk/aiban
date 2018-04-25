module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\Ryou\\Desktop\\ssr\\components\\layout.js",
    _this = this;





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-297528551",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "title",
        {
          className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        "\u6E56\u5357\u7231\u90A6\u6B63\u660E\u73AF\u4FDD\u5DE5\u7A0B\u516C\u53F8"
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "description",
        content: "\u6E56\u5357\u7231\u90A6\u6B63\u660E,\u7231\u90A6,\u6B63\u660E,\u957F\u6C99\u7231\u90A6\u6B63\u660E",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "keywords", content: "\u6E56\u5357\u7231\u90A6\u6B63\u660E,\u7231\u90A6,\u6B63\u660E,\u957F\u6C99\u7231\u90A6\u6B63\u660E", className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "author", content: "\u6E56\u5357\u7231\u90A6\u6B63\u660E,\u7231\u90A6,\u6B63\u660E,\u957F\u6C99\u7231\u90A6\u6B63\u660E", className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "297528551",
      css: "a.jsx-297528551{color:black;}.navbar-toggler-icon.jsx-297528551{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2tCLEFBR3VCLEFBR0EsWUFGZCxBQUdBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SeW91L0Rlc2t0b3Avc3NyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPua5luWNl+eIsemCpuato+aYjueOr+S/neW3peeoi+WFrOWPuDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIua5luWNl+eIsemCpuato+aYjizniLHpgqYs5q2j5piOLOmVv+aymeeIsemCpuato+aYjlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwi5rmW5Y2X54ix6YKm5q2j5piOLOeIsemCpizmraPmmI4s6ZW/5rKZ54ix6YKm5q2j5piOXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIua5luWNl+eIsemCpuato+aYjizniLHpgqYs5q2j5piOLOmVv+aymeeIsemCpuato+aYjlwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjIuMC9hbnRkLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMi4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1LSjNvMkRLdElrdllJSzNVRU56bU03S0NrUnIvckU5L1FwZzZhQVpHSndGRE1WTkEvR3BHRkY5M2hYcEc1S2tOXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjEyLjkvdW1kL3BvcHBlci5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUFwTmJnaDlCK1kxUUt0djNSbjdXM21nUHhoVTlLL1NjUXNBUDdoVWliWDM5ajdmYWtGUHNrdlh1c3ZmYTBiNFFcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSlpSNlNwZWpoNFUwMmQ4ak90NnZMRUhmZS9KUUdpUlJTUVF4U2ZGV3BpMU1xdVZkQXlqVWFyNSs3NlBWQ21ZbFwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPG5hdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodCBmaXhlZC10b3BcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWliYW4ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzUwcHgnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPueIsemCpuato+aYjlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyQ29sbGFwc2VcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhckNvbGxhcHNlXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJDb2xsYXBzZVwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAg6aaW6aG1IDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIOWFs+S6juaIkeS7rFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL25ld3NcIj5cclxuICAgICAgICAgICAgICAgIOaWsOmXu+S4reW/g1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgIOS4mue7qeWxleekulxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3RlY2hcIj5cclxuICAgICAgICAgICAgICAgIOaKgOacr+eglOWPkVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Nvb3BcIj5cclxuICAgICAgICAgICAgICAgIOS6pOa1geWQiOS9nFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3RlYW1cIj5cclxuICAgICAgICAgICAgICAgIOmihuWGm+S6uuaJjVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIOiBlOezu+aIkeWAkVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBtdC0yIG10LW1kLTBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaQnOe0olwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBteS0yIG15LXNtLTBcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPGZvb3RlciBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnIH19PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+6L+U5Zue6aCC6YOoPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGhlaWdodDogJzM1cHgnIH19PlxyXG4gICAgICAgICAgICDniYjmnYPmiYDmnInvvJrmuZbljZfniLHpgqbmraPmmI7njq/kv53lt6XnqIvlhazlj7hcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTEycHgnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOjEzMTc0MjYxODBAcXEuY29tXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg5LyB5Lia6YKu566xXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+572R56uZ5Zyw5Zu+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT7lj4vmg4Xpk77mjqXvvJo8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuWbvemZheeOr+S/neWfjlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuaWVwei5jYy9cIj7lm73pmYXnjq/kv53ln448L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaHR0cDovL2dyZWVuLnNpbmEuY29tLmNuL1wiPuaWsOa1queOr+S/nTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LmRvd2F0ZXIuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAg5Lit5Zu95rGh5rC05aSE55CG5bel56iL572RXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuY2VuZXdzLmNvbS5jbi9cIj7kuK3lm73njq/looPnvZE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaHR0cDovL3d3dy5jaGluYWVudmlyb25tZW50LmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIOS4reWbveeOr+S/nee9kVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LnpoYi5nb3YuY24vXCI+5Lit5Zu9546v5L+d6YOoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuZXBkYXkuY29tL1wiPuS4reWbveeOr+Wig+S/neaKpOe9kTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LmNhZXBpLm9yZy5jbi9cIj5cclxuICAgICAgICAgICAgICAgIOS4reWbveeOr+S/neS/neaKpOS6p+S4muWNj+S8mlxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=components\\layout.js */"
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "nav",
      {
        style: {
          position: 'relative',
          backgroundColor: '#e3f2fd'
        },
        className: "jsx-297528551" + " " + "navbar navbar-expand-md navbar-light fixed-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        { href: "/", className: "jsx-297528551" + " " + "navbar-brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "https://aiban.oss-cn-beijing.aliyuncs.com/logo.png",
          style: {
            width: '50px'
          },
          className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }),
        "\u7231\u90A6\u6B63\u660E"
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "button",
        {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarCollapse",
          "aria-controls": "navbarCollapse",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          className: "jsx-297528551" + " " + "navbar-toggler",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "jsx-297528551" + " " + "navbar-toggler-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { id: "navbarCollapse", className: "jsx-297528551" + " " + "collapse navbar-collapse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "ul",
          {
            className: "jsx-297528551" + " " + "navbar-nav mr-auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              "\u9996\u9875 ",
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "span",
                {
                  className: "jsx-297528551" + " " + "sr-only",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                "(current)"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/about", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              "\u5173\u4E8E\u6211\u4EEC"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/news", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              "\u65B0\u95FB\u4E2D\u5FC3"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/service", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              "\u4E1A\u7EE9\u5C55\u793A"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/tech", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                }
              },
              "\u6280\u672F\u7814\u53D1"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/coop", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              "\u4EA4\u6D41\u5408\u4F5C"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/team", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              "\u9886\u519B\u4EBA\u624D"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/contact", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              "\u8054\u7CFB\u6211\u5011"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "form",
          {
            className: "jsx-297528551" + " " + "form-inline mt-2 mt-md-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
            type: "text",
            placeholder: "\u641C\u7D22",
            "aria-label": "Search",
            className: "jsx-297528551" + " " + "form-control mr-sm-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "button",
            {
              type: "submit",
              className: "jsx-297528551" + " " + "btn btn-outline-success my-2 my-sm-0",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              }
            },
            "\u641C\u7D22"
          )
        )
      )
    ),
    props.children,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "footer",
      { "class": "container-fluid", style: { backgroundColor: '#e3f2fd' }, className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "p",
        { "class": "float-right", className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "#", className: "jsx-297528551",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          },
          "\u8FD4\u56DE\u9802\u90E8"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { clear: 'both' }, className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { style: { textAlign: 'center', height: '35px' }, className: "jsx-297528551",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          },
          "\u7248\u6743\u6240\u6709\uFF1A\u6E56\u5357\u7231\u90A6\u6B63\u660E\u73AF\u4FDD\u5DE5\u7A0B\u516C\u53F8"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            style: {
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-12px',
              height: '40px'
            },
            className: "jsx-297528551",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: '10px' }, className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              {
                href: "mailto:1317426180@qq.com",
                style: { color: 'black', textDecoration: 'none' },
                className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                }
              },
              "\u4F01\u4E1A\u90AE\u7BB1"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: '10px' }, className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              }
            },
            "\u7F51\u7AD9\u5730\u56FE "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: '10px' }, className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            },
            "\u53CB\u60C5\u94FE\u63A5\uFF1A"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "select",
            {
              defaultValue: "\u56FD\u9645\u73AF\u4FDD\u57CE",
              style: { width: 120 },
              onChange: _this.onChangeHandler,
              size: 'small',
              className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.iepz.cc/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                }
              },
              "\u56FD\u9645\u73AF\u4FDD\u57CE"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://green.sina.com.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 171
                }
              },
              "\u65B0\u6D6A\u73AF\u4FDD"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.dowater.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 172
                }
              },
              "\u4E2D\u56FD\u6C61\u6C34\u5904\u7406\u5DE5\u7A0B\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.cenews.com.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 175
                }
              },
              "\u4E2D\u56FD\u73AF\u5883\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.chinaenvironment.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 176
                }
              },
              "\u4E2D\u56FD\u73AF\u4FDD\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.zhb.gov.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 179
                }
              },
              "\u4E2D\u56FD\u73AF\u4FDD\u90E8"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.epday.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              },
              "\u4E2D\u56FD\u73AF\u5883\u4FDD\u62A4\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.caepi.org.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
                }
              },
              "\u4E2D\u56FD\u73AF\u4FDD\u4FDD\u62A4\u4EA7\u4E1A\u534F\u4F1A"
            )
          )
        )
      )
    )
  );
});

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = 'C:\\Users\\Ryou\\Desktop\\ssr\\pages\\about.js';



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            textIndent: '20px',
            textAlign: 'left',
            lineHeight: '35px',
            margin: 30
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://aiban.oss-cn-beijing.aliyuncs.com/aboutus1.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { fontWeight: 'bold', textAlign: 'center' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          '\u7231\u90A6\u5174\u56FD \u535A\u7231\u660E\u6167 \u7231\u90A6\u6B63\u660E \u73AF\u4FDD\u5148\u950B \u8BA9\u6574\u4E2A\u5730\u7403\u5171\u4EAB\u4E00\u7247\u84DD\u5929'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          '\u6E56\u5357\u7231\u90A6\u6B63\u660E\u73AF\u4FDD\u5DE5\u7A0B\u6709\u9650\u516C\u53F8\u662F\u4E00\u5BB6\u56FD\u9645\u5927\u6C14\u6C61\u67D3\u9632\u6CBB\u5148\u8FDB\u6280\u672F\u4E2D\u5916\u5408\u4F5C\u5178\u8303\uFF0C\u662F\u4E00\u5BB6\u4E13\u4E1A\u4ECE\u4E8B\u73AF\u4FDD\u6280\u672F\u88C5\u5907\u7814\u5236\u3001\u5DE5\u7A0B\u8BBE\u8BA1\u3001\u73AF\u4FDD\u670D\u52A1\u3001\u9879\u76EE\u603B\u627F\u5305\u4E1A\u52A1\u7684\u56FD\u9645\u91CD\u70B9\u9AD8\u65B0\u6280\u672F\u4F01\u4E1A\u3002\u516C\u53F8\u8463\u4E8B\u957F\u9ECE\u52C3\u5148\u751F2003\u5E74\u83B7\u7F8E\u56FD\u8036\u9C81\u5927\u5B66\u73AF\u5883\u5DE5\u7A0B\u535A\u58EB\u5B66\u4F4D\uFF0C\u66FE\u4EFB\u7F8E\u56FD\u603B\u7EDF\u514B\u6797\u987F\u73AF\u4FDD\u987E\u95EE\u3002\u4ECE\u4E8B\u5927\u6C14\u6C61\u67D3\u6CBB\u7406\u4E8C\u5341\u591A\u5E74\uFF0C\u5F15\u9886\u548C\u53C2\u4E0E\u5341\u591A\u9879\u4E13\u5229\u6280\u672F\u7684\u7814\u5236\u548C\u5F00\u53D1\uFF0C\u4E0E\u56FD\u9645\u4E0A\u9876\u5C16\u7684\u73AF\u4FDD\u516C\u53F8\u7F8E\u56FD\u7231\u90A6\uFF08Airbone\uFF09\u516C\u53F8\u6709\u957F\u8FDC\u7684\u6218\u7565\u5408\u4F5C\u4F19\u4F34\u5173\u7CFB\uFF0C2010\u5E74\u7F8E\u56FD\u7231\u90A6\u83B7\u7F8E\u56FD\u603B\u7EDF\u514B\u6797\u987F\u4E09\u5343\u4E07\u7F8E\u5143\u79D1\u7814\u652F\u6301\uFF0C\u516C\u53F8\u6709\u56FD\u9645\u4E0A\u9876\u5C16\u5B66\u5E9C\u7F8E\u56FD\u8036\u9C81\u5927\u5B66\u4F5C\u4E3A\u79D1\u7814\u57FA\u5730\uFF0C\u5F15\u9886\u56FD\u9645\u73AF\u4FDD\u9AD8\u65B0\u79D1\u6280\u3002'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          '\u516C\u53F8\u6CE8\u518C\u8D44\u91D18000\u4E07\u5143\uFF0C\u516C\u53F8\u5728\u7F8E\u4E3D\u7684\u5386\u53F2\u6587\u5316\u540D\u57CE\u2014\u2014\u957F\u6C99\u5EFA\u6709\u751F\u4EA7\u57FA\u5730\uFF0C\u5728\u5317\u4EAC\u6709\u7231\u90A6\u6B63\u660E\u7684\u5E02\u573A\u53D1\u5C55\u90E8\uFF0C\u5728\u5317\u7F8E\u4E2D\u5FC3\u57CE\u5E02\u591A\u4F26\u591A\u6709\u6211\u4EEC\u7684\u6280\u672F\u7814\u7A76\u9662\u3002\u516C\u53F8\u901A\u8FC7\u4E86ISO9001\u8D28\u91CF\u7BA1\u7406\u4F53\u7CFB\u8BA4\u8BC1\uFF0C\u5728\u7F8E\u56FD\u8036\u9C81\u5927\u5B66\u68EE\u6797\u73AF\u5883\u5B66\u9662\uFF0C\u52A0\u62FF\u5927\u591A\u4F26\u591A\u5927\u5B66\u5730\u7406\u73AF\u5883\u5B66\u9662\uFF0C\u4E2D\u56FD\u5357\u4EAC\u4FE1\u606F\u5DE5\u7A0B\u5927\u5B66\u6C14\u8C61\u73AF\u5883\u5B66\u9662\u8BBE\u6709\u8036\u9C81\u5927\u6C14\u5B9E\u9A8C\u5BA4\uFF0C\u7531\u56FD\u9645\u4E0A\u73AF\u4FDD\u5DE5\u7A0B\u9886\u519B\u4EBA\u7269\u7EC4\u6210\u6211\u4EEC\u7684\u79D1\u7814\u56E2\u961F\u3002\u516C\u53F8\u8463\u4E8B\u957F\u9ECE\u52C3\u535A\u58EB\u3001\u6559\u6388\uFF0C\u52A0\u62FF\u5927\u7535\u8111\u5B66\u9662\u540D\u8A89\u9662\u957F\uFF0C\u66FE\u4EFB\u6E56\u5357\u6811\u5C71\u3001\u6E56\u5357\u6B63\u660E\u73AF\u4FDD\u516C\u53F8\u603B\u7ECF\u7406\u3002\u516C\u53F8\u5E02\u573A\u603B\u88C1Marray Mortson\uFF0C\u4EFB\u7F8E\u56FD\u7231\u90A6Airbone\u73AF\u4FDD\u516C\u53F8\u603B\u88C1\u3002\u516C\u53F8\u6280\u672F\u603B\u88C1\u6C64\u53CB\u5FD7\u535A\u58EB\uFF0C\u4EFB\u4E2D\u52A0\u73AF\u5883\u534F\u4F1A\u4F1A\u957F\uFF0C\u52A0\u62FF\u5927\u7231\u90A6\u6E05\u6D01\u80FD\u6E90\u6709\u9650\u516C\u53F8\u8463\u4E8B\u957F\u3002\u516C\u53F8\u7814\u7A76\u9662\u5916\u65B9\u9662\u957F\u674E\u65ED\u8F89\u535A\u58EB\uFF0C\u4EFB\u7F8E\u56FD\u8036\u9C81\u5927\u5B66\u68EE\u6797\u73AF\u5883\u5B66\u9662\u7EC8\u8EAB\u6559\u6388'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          '\u516C\u53F8\u62E5\u6709\u6570\u5341\u9879\u6838\u5FC3\u6280\u672F\u548C\u591A\u9879\u4E13\u5229\uFF0C\u5176\u4E13\u5229\u6280\u672F\u5E94\u7528\u5728\u904D\u53CA17\u7701\u5E02\u7528\u6237\u7684\u8131\u786B\uFF0C\u8131\u9500\u548C\u9664\u5C18\u5DE5\u7A0B\u4E2D\uFF0C\u5DE5\u7A0B\u5408\u683C\u7387\u8FBE100%\uFF0C\u8FBE\u6807\u6392\u653E\u7387100%\u3002'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          '\u516C\u53F8\u59CB\u7EC8\u575A\u6301\u4EE5\u6280\u672F\u4E3A\u5148\u5BFC\uFF0C\u4EE5\u4EBA\u4E3A\u672C\uFF0C\u6D77\u7EB3\u767E\u5DDD\uFF0C\u5171\u8D62\u53D1\u5C55\u3002\u516C\u53F8\u5C06\u4EE5\u5148\u8FDB\u7684\u6280\u672F\u670D\u52A1\u4E8E\u7528\u6237\uFF0C\u59CB\u7EC8\u8D2F\u5F7B\u516C\u53F8\u4E00\u8D2F\u7684\u5B97\u65E8\uFF1A\u201C\u8BA9\u6574\u4E2A\u5730\u7403\u6751\u5171\u4EAB\u4E00\u7247\u84DD\u5929\u201D\uFF0C\u4E3A\u4E2D\u56FD\u7684\u84DD\u5929\u76EE\u6807\u575A\u6301\u52AA\u529B\uFF01'
        )
      )
    )
  );
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map