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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossorigin: "anonymous",
        className: "jsx-297528551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "297528551",
      css: "a.jsx-297528551{color:black;}.navbar-toggler-icon.jsx-297528551{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBR3VCLEFBR0EsWUFGZCxBQUdBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9SeW91L0Rlc2t0b3Avc3NyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPua5luWNl+eIsemCpuato+aYjueOr+S/neW3peeoi+WFrOWPuDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMy4yLjAvYW50ZC5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjIuMS5zbGltLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtS0ozbzJES3RJa3ZZSUszVUVOem1NN0tDa1JyL3JFOS9RcGc2YUFaR0p3RkRNVk5BL0dwR0ZGOTNoWHBHNUtrTlwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xMi45L3VtZC9wb3BwZXIubWluLmpzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1BcE5iZ2g5QitZMVFLdHYzUm43VzNtZ1B4aFU5Sy9TY1FzQVA3aFVpYlgzOWo3ZmFrRlBza3ZYdXN2ZmEwYjRRXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUpaUjZTcGVqaDRVMDJkOGpPdDZ2TEVIZmUvSlFHaVJSU1FReFNmRldwaTFNcXVWZEF5alVhcjUrNzZQVkNtWWxcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxuYXZcclxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQgZml4ZWQtdG9wXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2FpYmFuLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc1MHB4J1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz7niLHpgqbmraPmmI5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhckNvbGxhcHNlXCJcclxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJDb2xsYXBzZVwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyQ29sbGFwc2VcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIOmmlumhtSA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICDlhbPkuo7miJHku6xcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICDmlrDpl7vkuK3lv4NcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9zZXJ2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICDkuJrnu6nlsZXnpLpcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi90ZWNoXCI+XHJcbiAgICAgICAgICAgICAgICDmioDmnK/noJTlj5FcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb29wXCI+XHJcbiAgICAgICAgICAgICAgICDkuqTmtYHlkIjkvZxcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi90ZWFtXCI+XHJcbiAgICAgICAgICAgICAgICDpooblhpvkurrmiY1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICDogZTns7vmiJHlgJFcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXQtMiBtdC1tZC0wXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmkJzntKJcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXktMiBteS1zbS0wXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyB9fT5cclxuICAgICAgICA8cCBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPkJhY2sgdG8gdG9wPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGhlaWdodDogJzM1cHgnIH19PlxyXG4gICAgICAgICAgICDniYjmnYPmiYDmnInvvJrmuZbljZfniLHpgqbmraPmmI7njq/kv53lt6XnqIvlhazlj7hcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTEycHgnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOjEzMTc0MjYxODBAcXEuY29tXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg5LyB5Lia6YKu566xXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+572R56uZ5Zyw5Zu+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT7lj4vmg4Xpk77mjqXvvJo8L2Rpdj5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuWbvemZheeOr+S/neWfjlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuaWVwei5jYy9cIj7lm73pmYXnjq/kv53ln448L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaHR0cDovL2dyZWVuLnNpbmEuY29tLmNuL1wiPuaWsOa1queOr+S/nTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LmRvd2F0ZXIuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAg5Lit5Zu95rGh5rC05aSE55CG5bel56iL572RXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuY2VuZXdzLmNvbS5jbi9cIj7kuK3lm73njq/looPnvZE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaHR0cDovL3d3dy5jaGluYWVudmlyb25tZW50LmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIOS4reWbveeOr+S/nee9kVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LnpoYi5nb3YuY24vXCI+5Lit5Zu9546v5L+d6YOoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImh0dHA6Ly93d3cuZXBkYXkuY29tL1wiPuS4reWbveeOr+Wig+S/neaKpOe9kTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJodHRwOi8vd3d3LmNhZXBpLm9yZy5jbi9cIj5cclxuICAgICAgICAgICAgICAgIOS4reWbveeOr+S/neS/neaKpOS6p+S4muWNj+S8mlxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=components\\layout.js */"
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
          lineNumber: 43
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        { href: "/", className: "jsx-297528551" + " " + "navbar-brand",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
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
            lineNumber: 51
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
            lineNumber: 58
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "jsx-297528551" + " " + "navbar-toggler-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { id: "navbarCollapse", className: "jsx-297528551" + " " + "collapse navbar-collapse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "ul",
          {
            className: "jsx-297528551" + " " + "navbar-nav mr-auto",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "li",
            {
              className: "jsx-297528551" + " " + "nav-item active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              "\u9996\u9875 ",
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "span",
                {
                  className: "jsx-297528551" + " " + "sr-only",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
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
                lineNumber: 76
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/about", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
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
                lineNumber: 81
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/news", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
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
                lineNumber: 86
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/service", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
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
                lineNumber: 91
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/tech", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
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
                lineNumber: 96
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/coop", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
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
                lineNumber: 101
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/team", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
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
                lineNumber: 106
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "/contact", className: "jsx-297528551" + " " + "nav-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
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
              lineNumber: 112
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
            type: "text",
            placeholder: "\u641C\u7D22",
            "aria-label": "Search",
            className: "jsx-297528551" + " " + "form-control mr-sm-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "button",
            {
              type: "submit",
              className: "jsx-297528551" + " " + "btn btn-outline-success my-2 my-sm-0",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
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
          lineNumber: 130
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "p",
        { "class": "float-right", className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "#", className: "jsx-297528551",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          "Back to top"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { style: { clear: 'both' }, className: "jsx-297528551",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          { style: { textAlign: 'center', height: '35px' }, className: "jsx-297528551",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
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
              lineNumber: 138
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: '10px' }, className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
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
                  lineNumber: 149
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
                lineNumber: 156
              }
            },
            "\u7F51\u7AD9\u5730\u56FE "
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            { style: { marginLeft: '10px' }, className: "jsx-297528551",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
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
                lineNumber: 158
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.iepz.cc/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                }
              },
              "\u56FD\u9645\u73AF\u4FDD\u57CE"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://green.sina.com.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                }
              },
              "\u65B0\u6D6A\u73AF\u4FDD"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.dowater.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                }
              },
              "\u4E2D\u56FD\u6C61\u6C34\u5904\u7406\u5DE5\u7A0B\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.cenews.com.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                }
              },
              "\u4E2D\u56FD\u73AF\u5883\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.chinaenvironment.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 170
                }
              },
              "\u4E2D\u56FD\u73AF\u4FDD\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.zhb.gov.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173
                }
              },
              "\u4E2D\u56FD\u73AF\u4FDD\u90E8"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.epday.com/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174
                }
              },
              "\u4E2D\u56FD\u73AF\u5883\u4FDD\u62A4\u7F51"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "option",
              { value: "http://www.caepi.org.cn/", className: "jsx-297528551",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 175
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = "C:\\Users\\Ryou\\Desktop\\ssr\\pages\\index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
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
        "main",
        { role: "main", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { id: "myCarousel", className: "carousel slide", "data-ride": "carousel", __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ol",
            { className: "carousel-indicators", __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "0", className: "", __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
              "data-target": "#myCarousel",
              "data-slide-to": "1",
              className: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "2", className: "", __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "carousel-inner", __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "carousel-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "first-slide",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "First slide",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "carousel-caption text-left", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      }
                    },
                    "Example headline."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      }
                    },
                    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "a",
                      {
                        className: "btn btn-lg btn-primary",
                        href: "#",
                        role: "button",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        }
                      },
                      "Sign up today"
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "carousel-item active", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "second-slide",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "Second slide",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "carousel-caption", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    "Another example headline."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      }
                    },
                    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "a",
                      {
                        className: "btn btn-lg btn-primary",
                        href: "#",
                        role: "button",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        }
                      },
                      "Learn more"
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "carousel-item", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "third-slide",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "Third slide",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "container", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "div",
                  { className: "carousel-caption text-right", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      }
                    },
                    "One more for good measure."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    },
                    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "p",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "a",
                      {
                        className: "btn btn-lg btn-primary",
                        href: "#",
                        role: "button",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        }
                      },
                      "Browse gallery"
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            {
              className: "carousel-control-prev",
              href: "#myCarousel",
              role: "button",
              "data-slide": "prev",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true", __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "sr-only", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                }
              },
              "Previous"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            {
              className: "carousel-control-next",
              href: "#myCarousel",
              role: "button",
              "data-slide": "next",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true", __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "span",
              { className: "sr-only", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              },
              "Next"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container marketing", __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row", __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-lg-4", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "rounded-circle",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "Generic placeholder image",
                width: "140",
                height: "140",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  }
                },
                "Heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                },
                "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: "btn btn-secondary", href: "#", role: "button", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 136
                    }
                  },
                  "View details \xBB"
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-lg-4", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 141
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "rounded-circle",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "Generic placeholder image",
                width: "140",
                height: "140",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 142
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                "Heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: "btn btn-secondary", href: "#", role: "button", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  "View details \xBB"
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-lg-4", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "rounded-circle",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                alt: "Generic placeholder image",
                width: "140",
                height: "140",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  }
                },
                "Heading"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                  }
                },
                "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "a",
                  { className: "btn btn-secondary", href: "#", role: "button", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 178
                    }
                  },
                  "View details \xBB"
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "featurette-divider", __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row featurette", __source: {
                fileName: _jsxFileName,
                lineNumber: 187
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-7", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 188
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                { className: "featurette-heading", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                  }
                },
                "First featurette heading.",
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "text-muted", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 191
                    }
                  },
                  "It'll blow your mind."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "lead", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                  }
                },
                "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-5", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 200
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "featurette-image img-fluid mx-auto",
                "data-src": "holder.js/500x500/auto",
                alt: "500x500",
                style: { width: '500px', height: '500px' },
                src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162fd2091bc%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162fd2091bc%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                "data-holder-rendered": "true",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 201
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row featurette", __source: {
                fileName: _jsxFileName,
                lineNumber: 214
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-7 order-md-2", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 215
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                { className: "featurette-heading", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                  }
                },
                "Oh yeah, it's that good.",
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "text-muted", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 218
                    }
                  },
                  "See for yourself."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "lead", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                  }
                },
                "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-5 order-md-1", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 227
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "featurette-image img-fluid mx-auto",
                "data-src": "holder.js/500x500/auto",
                alt: "500x500",
                src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162fd2091bd%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162fd2091bd%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                "data-holder-rendered": "true",
                style: { width: '500px', height: '500px' },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 228
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "row featurette", __source: {
                fileName: _jsxFileName,
                lineNumber: 241
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-7", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 242
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h2",
                { className: "featurette-heading", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                  }
                },
                "And lastly, this one.",
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "span",
                  { className: "text-muted", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 245
                    }
                  },
                  "Checkmate."
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { className: "lead", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                  }
                },
                "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "col-md-5", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 254
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
                className: "featurette-image img-fluid mx-auto",
                "data-src": "holder.js/500x500/auto",
                alt: "500x500",
                src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162fd2091bd%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162fd2091bd%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                "data-holder-rendered": "true",
                style: { width: '500px', height: '500px' },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 255
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "footer",
          { className: "container", __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            { className: "float-right", __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { href: "#", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 271
                }
              },
              "Back to top"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 273
              }
            },
            "\xA9 2017-2018 Company, Inc. \xB7 ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { href: "#", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 274
                }
              },
              "Privacy"
            ),
            " \xB7",
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { href: "#", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 275
                }
              },
              "Terms"
            )
          )
        )
      )
    )
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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
//# sourceMappingURL=index.js.map