define(["angular","jquery","lodash"], function(__WEBPACK_EXTERNAL_MODULE_angular__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./panels/grafana-piechart-panel/module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./panels/grafana-piechart-panel/module.js":
/*!*************************************************!*\
  !*** ./panels/grafana-piechart-panel/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see module.js.LICENSE.txt */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! lodash */ "lodash"), !(function webpackMissingModule() { var e = new Error("Cannot find module 'app/plugins/sdk'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'app/core/utils/kbn'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'app/core/time_series'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(/*! angular */ "angular")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (e, t, n, i, r, o) {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) {
        n.d(i, r, function (t) {
          return e[t];
        }.bind(null, r));
      }
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/", n(n.s = 11);
  }([function (t, n) {
    t.exports = e;
  }, function (e, n) {
    e.exports = t;
  }, function (e, t) {
    e.exports = n;
  }, function (e, t) {
    e.exports = i;
  }, function (e, t) {
    e.exports = r;
  }, function (e, t) {
    e.exports = o;
  }, function (e, t, n) {
    var i, r;

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    !function (l, a) {
      "object" == o(t) && void 0 !== e ? e.exports = a() : void 0 === (r = "function" == typeof (i = a) ? i.call(t, n, t, e) : i) || (e.exports = r);
    }(0, function () {
      "use strict";

      function e(e) {
        return getComputedStyle(e);
      }

      function t(e, t) {
        for (var n in t) {
          var i = t[n];
          "number" == typeof i && (i += "px"), e.style[n] = i;
        }

        return e;
      }

      function n(e) {
        var t = document.createElement("div");
        return t.className = e, t;
      }

      function i(e, t) {
        if (!f) throw new Error("No element matching method supported");
        return f.call(e, t);
      }

      function r(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
      }

      function o(e, t) {
        return Array.prototype.filter.call(e.children, function (e) {
          return i(e, t);
        });
      }

      function l(e, t) {
        var n = e.element.classList,
            i = v.state.scrolling(t);
        n.contains(i) ? clearTimeout(b[t]) : n.add(i);
      }

      function a(e, t) {
        b[t] = setTimeout(function () {
          return e.isAlive && e.element.classList.remove(v.state.scrolling(t));
        }, e.settings.scrollingThreshold);
      }

      function s(e, t) {
        l(e, t), a(e, t);
      }

      function c(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t;
      }

      function h(e) {
        return parseInt(e, 10) || 0;
      }

      function d(e) {
        return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]");
      }

      function u(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t;
      }

      function p(e, n) {
        var i = {
          width: n.railXWidth
        };
        n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - e.scrollTop : i.top = n.scrollbarXTop + e.scrollTop, t(n.scrollbarXRail, i);
        var r = {
          top: e.scrollTop,
          height: n.railYHeight
        };
        n.isScrollbarYUsingRight ? n.isRtl ? r.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : r.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : r.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, r), t(n.scrollbarX, {
          left: n.scrollbarXLeft,
          width: n.scrollbarXWidth - n.railBorderXWidth
        }), t(n.scrollbarY, {
          top: n.scrollbarYTop,
          height: n.scrollbarYHeight - n.railBorderYWidth
        });
      }

      function g(e, t) {
        function n(t) {
          g[u] = f + b * (t[s] - v), l(e, p), k(e), t.stopPropagation(), t.preventDefault();
        }

        function i() {
          a(e, p), e.event.unbind(e.ownerDocument, "mousemove", n);
        }

        var r = t[0],
            o = t[1],
            s = t[2],
            c = t[3],
            h = t[4],
            d = t[5],
            u = t[6],
            p = t[7],
            g = e.element,
            f = null,
            v = null,
            b = null;
        e.event.bind(e[h], "mousedown", function (t) {
          f = g[u], v = t[s], b = (e[o] - e[r]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), t.stopPropagation(), t.preventDefault();
        });
      }

      var f = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector,
          v = {
        main: "ps",
        element: {
          thumb: function thumb(e) {
            return "ps__thumb-" + e;
          },
          rail: function rail(e) {
            return "ps__rail-" + e;
          },
          consuming: "ps__child--consume"
        },
        state: {
          focus: "ps--focus",
          active: function active(e) {
            return "ps--active-" + e;
          },
          scrolling: function scrolling(e) {
            return "ps--scrolling-" + e;
          }
        }
      },
          b = {
        x: null,
        y: null
      },
          m = function m(e) {
        this.element = e, this.handlers = {};
      },
          y = {
        isEmpty: {
          configurable: !0
        }
      };

      m.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
      }, m.prototype.unbind = function (e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function (i) {
          return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1);
        });
      }, m.prototype.unbindAll = function () {
        for (var e in this.handlers) {
          this.unbind(e);
        }
      }, y.isEmpty.get = function () {
        var e = this;
        return Object.keys(this.handlers).every(function (t) {
          return 0 === e.handlers[t].length;
        });
      }, Object.defineProperties(m.prototype, y);

      var w = function w() {
        this.eventElements = [];
      };

      w.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
          return t.element === e;
        })[0];
        return t || (t = new m(e), this.eventElements.push(t)), t;
      }, w.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n);
      }, w.prototype.unbind = function (e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
      }, w.prototype.unbindAll = function () {
        this.eventElements.forEach(function (e) {
          return e.unbindAll();
        }), this.eventElements = [];
      }, w.prototype.once = function (e, t, n) {
        var i = this.eventElement(e);
        i.bind(t, function e(r) {
          i.unbind(t, e), n(r);
        });
      };

      var S = function S(e, t, n, i, r) {
        var o;
        if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
          if ("left" !== t) throw new Error("A proper axis should be provided");
          o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
        }
        !function (e, t, n, i, r) {
          var o = n[0],
              l = n[1],
              a = n[2],
              h = n[3],
              d = n[4],
              u = n[5];
          void 0 === i && (i = !0), void 0 === r && (r = !1);
          var p = e.element;
          e.reach[h] = null, p[a] < 1 && (e.reach[h] = "start"), p[a] > e[o] - e[l] - 1 && (e.reach[h] = "end"), t && (p.dispatchEvent(c("ps-scroll-" + h)), t < 0 ? p.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && p.dispatchEvent(c("ps-scroll-" + u)), i && s(e, h)), e.reach[h] && (t || r) && p.dispatchEvent(c("ps-" + h + "-reach-" + e.reach[h]));
        }(e, n, o, i, r);
      },
          M = document && "WebkitAppearance" in document.documentElement.style,
          Y = window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
          T = navigator && navigator.msMaxTouchPoints,
          k = function k(e) {
        var t = e.element;
        e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, v.element.rail("x")).forEach(function (e) {
          return r(e);
        }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, v.element.rail("y")).forEach(function (e) {
          return r(e);
        }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = u(e, h(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = h((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = u(e, h(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = h(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), p(t, e), e.scrollbarXActive ? t.classList.add(v.state.active("x")) : (t.classList.remove(v.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(v.state.active("y")) : (t.classList.remove(v.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0);
      },
          X = {
        "click-rail": function clickRail(e) {
          e.event.bind(e.scrollbarY, "mousedown", function (e) {
            return e.stopPropagation();
          }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
            var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
            e.element.scrollTop += n * e.containerHeight, k(e), t.stopPropagation();
          }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
            return e.stopPropagation();
          }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
            var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
            e.element.scrollLeft += n * e.containerWidth, k(e), t.stopPropagation();
          });
        },
        "drag-thumb": function dragThumb(e) {
          g(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x"]), g(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y"]);
        },
        keyboard: function keyboard(e) {
          var t = e.element,
              n = function n() {
            return i(t, ":hover");
          },
              r = function r() {
            return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus");
          };

          e.event.bind(e.ownerDocument, "keydown", function (i) {
            if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || r())) {
              var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;

              if (o) {
                if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
                  o = o.shadowRoot.activeElement;
                }
                if (d(o)) return;
              }

              var l = 0,
                  a = 0;

              switch (i.which) {
                case 37:
                  l = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                  break;

                case 38:
                  a = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                  break;

                case 39:
                  l = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                  break;

                case 40:
                  a = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                  break;

                case 32:
                  a = i.shiftKey ? e.containerHeight : -e.containerHeight;
                  break;

                case 33:
                  a = e.containerHeight;
                  break;

                case 34:
                  a = -e.containerHeight;
                  break;

                case 36:
                  a = e.contentHeight;
                  break;

                case 35:
                  a = -e.contentHeight;
                  break;

                default:
                  return;
              }

              e.settings.suppressScrollX && 0 !== l || e.settings.suppressScrollY && 0 !== a || (t.scrollTop -= a, t.scrollLeft += l, k(e), function (n, i) {
                var r = t.scrollTop;

                if (0 === n) {
                  if (!e.scrollbarYActive) return !1;
                  if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation;
                }

                var o = t.scrollLeft;

                if (0 === i) {
                  if (!e.scrollbarXActive) return !1;
                  if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
                }

                return !0;
              }(l, a) && i.preventDefault());
            }
          });
        },
        wheel: function wheel(t) {
          function n(t, n, i) {
            if (!M && r.querySelector("select:focus")) return !0;
            if (!r.contains(t)) return !1;

            for (var o = t; o && o !== r;) {
              if (o.classList.contains(v.element.consuming)) return !0;
              var l = e(o);

              if ([l.overflow, l.overflowX, l.overflowY].join("").match(/(scroll|auto)/)) {
                var a = o.scrollHeight - o.clientHeight;
                if (a > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === a && i < 0)) return !0;
                var s = o.scrollLeft - o.clientWidth;
                if (s > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === s && n > 0)) return !0;
              }

              o = o.parentNode;
            }

            return !1;
          }

          function i(e) {
            var i = function (e) {
              var t = e.deltaX,
                  n = -1 * e.deltaY;
              return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n];
            }(e),
                o = i[0],
                l = i[1];

            if (!n(e.target, o, l)) {
              var a = !1;
              t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (l ? r.scrollTop -= l * t.settings.wheelSpeed : r.scrollTop += o * t.settings.wheelSpeed, a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? r.scrollLeft += o * t.settings.wheelSpeed : r.scrollLeft -= l * t.settings.wheelSpeed, a = !0) : (r.scrollTop -= l * t.settings.wheelSpeed, r.scrollLeft += o * t.settings.wheelSpeed), k(t), (a = a || function (e, n) {
                var i = r.scrollTop;

                if (0 === e) {
                  if (!t.scrollbarYActive) return !1;
                  if (0 === i && n > 0 || i >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation;
                }

                var o = r.scrollLeft;

                if (0 === n) {
                  if (!t.scrollbarXActive) return !1;
                  if (0 === o && e < 0 || o >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
                }

                return !0;
              }(o, l)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
            }
          }

          var r = t.element;
          void 0 !== window.onwheel ? t.event.bind(r, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(r, "mousewheel", i);
        },
        touch: function touch(e) {
          function t(t, n) {
            var i = h.scrollTop,
                r = h.scrollLeft,
                o = Math.abs(t),
                l = Math.abs(n);

            if (l > o) {
              if (n < 0 && i === e.contentHeight - e.containerHeight || n > 0 && 0 === i) return {
                stop: !e.settings.swipePropagation,
                prevent: 0 === window.scrollY
              };
            } else if (o > l && (t < 0 && r === e.contentWidth - e.containerWidth || t > 0 && 0 === r)) return {
              stop: !e.settings.swipePropagation,
              prevent: !0
            };

            return {
              stop: !0,
              prevent: !0
            };
          }

          function n(t, n) {
            h.scrollTop -= n, h.scrollLeft -= t, k(e);
          }

          function i() {
            f = !0;
          }

          function r() {
            f = !1;
          }

          function o(e) {
            return e.targetTouches ? e.targetTouches[0] : e;
          }

          function l(e) {
            return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE));
          }

          function a(e) {
            if (l(e)) {
              v = !0;
              var t = o(e);
              d.pageX = t.pageX, d.pageY = t.pageY, u = new Date().getTime(), null !== g && clearInterval(g), e.stopPropagation();
            }
          }

          function s(i) {
            if (!v && e.settings.swipePropagation && a(i), !f && v && l(i)) {
              var r = o(i),
                  s = {
                pageX: r.pageX,
                pageY: r.pageY
              },
                  c = s.pageX - d.pageX,
                  h = s.pageY - d.pageY;
              n(c, h), d = s;
              var g = new Date().getTime(),
                  b = g - u;
              b > 0 && (p.x = c / b, p.y = h / b, u = g);
              var m = t(c, h),
                  y = m.stop,
                  w = m.prevent;
              y && i.stopPropagation(), w && i.preventDefault();
            }
          }

          function c() {
            !f && v && (v = !1, e.settings.swipeEasing && (clearInterval(g), g = setInterval(function () {
              e.isInitialized ? clearInterval(g) : p.x || p.y ? Math.abs(p.x) < .01 && Math.abs(p.y) < .01 ? clearInterval(g) : (n(30 * p.x, 30 * p.y), p.x *= .8, p.y *= .8) : clearInterval(g);
            }, 10)));
          }

          if (Y || T) {
            var h = e.element,
                d = {},
                u = 0,
                p = {},
                g = null,
                f = !1,
                v = !1;
            Y ? (e.event.bind(window, "touchstart", i), e.event.bind(window, "touchend", r), e.event.bind(h, "touchstart", a), e.event.bind(h, "touchmove", s), e.event.bind(h, "touchend", c)) : T && (window.PointerEvent ? (e.event.bind(window, "pointerdown", i), e.event.bind(window, "pointerup", r), e.event.bind(h, "pointerdown", a), e.event.bind(h, "pointermove", s), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", i), e.event.bind(window, "MSPointerUp", r), e.event.bind(h, "MSPointerDown", a), e.event.bind(h, "MSPointerMove", s), e.event.bind(h, "MSPointerUp", c)));
          }
        }
      },
          W = function W(i, r) {
        var o = this;
        if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");

        for (var l in this.element = i, i.classList.add(v.main), this.settings = {
          handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1e3,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          swipeEasing: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !1,
          wheelSpeed: 1
        }, r) {
          o.settings[l] = r[l];
        }

        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

        var a = function a() {
          return i.classList.add(v.state.focus);
        },
            s = function s() {
          return i.classList.remove(v.state.focus);
        };

        this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function () {
          var e,
              t = i.scrollLeft;
          return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e;
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new w(), this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(v.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(v.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", a), this.event.bind(this.scrollbarX, "blur", s), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var c = e(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = h(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = h(c.borderLeftWidth) + h(c.borderRightWidth), t(this.scrollbarXRail, {
          display: "block"
        }), this.railXMarginWidth = h(c.marginLeft) + h(c.marginRight), t(this.scrollbarXRail, {
          display: ""
        }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(v.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(v.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", a), this.event.bind(this.scrollbarY, "blur", s), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var d = e(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = h(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
          var n = e(t);
          return h(n.width) + h(n.paddingLeft) + h(n.paddingRight) + h(n.borderLeftWidth) + h(n.borderRightWidth);
        }(this.scrollbarY) : null, this.railBorderYWidth = h(d.borderTopWidth) + h(d.borderBottomWidth), t(this.scrollbarYRail, {
          display: "block"
        }), this.railYMarginHeight = h(d.marginTop) + h(d.marginBottom), t(this.scrollbarYRail, {
          display: ""
        }), this.railYHeight = null, this.railYRatio = null, this.reach = {
          x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
          y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
          return X[e](o);
        }), this.lastScrollTop = i.scrollTop, this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
          return o.onScroll(e);
        }), k(this);
      };

      return W.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
          display: "block"
        }), t(this.scrollbarYRail, {
          display: "block"
        }), this.railXMarginWidth = h(e(this.scrollbarXRail).marginLeft) + h(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = h(e(this.scrollbarYRail).marginTop) + h(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
          display: "none"
        }), t(this.scrollbarYRail, {
          display: "none"
        }), k(this), S(this, "top", 0, !1, !0), S(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
          display: ""
        }), t(this.scrollbarYRail, {
          display: ""
        }));
      }, W.prototype.onScroll = function (e) {
        this.isAlive && (k(this), S(this, "top", this.element.scrollTop - this.lastScrollTop), S(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = this.element.scrollTop, this.lastScrollLeft = this.element.scrollLeft);
      }, W.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
      }, W.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter(function (e) {
          return !e.match(/^ps([-_].+|)$/);
        }).join(" ");
      }, W;
    });
  }, function (e, t) {
    var n, i;
    n = jQuery, i = {
      series: {
        pie: {
          show: !1,
          radius: "auto",
          innerRadius: 0,
          startAngle: 1.5,
          tilt: 1,
          shadow: {
            left: 5,
            top: 15,
            alpha: .02
          },
          offset: {
            top: 0,
            left: "auto"
          },
          stroke: {
            color: "#fff",
            width: 1
          },
          label: {
            show: "auto",
            formatter: function formatter(e, t) {
              return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + t.color + ";'>" + e + "<br/>" + Math.round(t.percent) + "%</div>";
            },
            radius: 1,
            background: {
              color: null,
              opacity: 0
            },
            threshold: 0
          },
          combine: {
            threshold: -1,
            color: null,
            label: "Other"
          },
          highlight: {
            opacity: .5
          }
        }
      }
    }, n.plot.plugins.push({
      init: function init(e) {
        var t = null,
            i = null,
            r = null,
            o = null,
            l = null,
            a = null,
            s = !1,
            c = null,
            h = [];

        function d(e, o, l) {
          s || (s = !0, t = e.getCanvas(), i = n(t).parent(), r = e.getOptions(), e.setData(function (e) {
            for (var t = 0, i = 0, o = 0, l = r.series.pie.combine.color, a = [], s = 0; s < e.length; ++s) {
              var c = e[s].data;
              n.isArray(c) && 1 == c.length && (c = c[0]), n.isArray(c) ? !isNaN(parseFloat(c[1])) && isFinite(c[1]) ? c[1] = +c[1] : c[1] = 0 : c = !isNaN(parseFloat(c)) && isFinite(c) ? [1, +c] : [1, 0], e[s].data = [c];
            }

            for (s = 0; s < e.length; ++s) {
              t += e[s].data[0][1];
            }

            for (s = 0; s < e.length; ++s) {
              (c = e[s].data[0][1]) / t <= r.series.pie.combine.threshold && (i += c, o++, l || (l = e[s].color));
            }

            for (s = 0; s < e.length; ++s) {
              c = e[s].data[0][1], (o < 2 || c / t > r.series.pie.combine.threshold) && a.push(n.extend(e[s], {
                data: [[1, c]],
                color: e[s].color,
                label: e[s].label,
                angle: c * Math.PI * 2 / t,
                percent: c / (t / 100)
              }));
            }

            return o > 1 && a.push({
              data: [[1, i]],
              color: l,
              label: r.series.pie.combine.label,
              angle: i * Math.PI * 2 / t,
              percent: i / (t / 100)
            }), a;
          }(e.getData())));
        }

        function u(e, t) {
          if (i) {
            var h = e.getPlaceholder().width(),
                d = e.getPlaceholder().height(),
                u = i.children().filter(".legend").children().width() || 0;
            c = t, s = !1, o = Math.min(h, d / r.series.pie.tilt) / 2, a = d / 2 + r.series.pie.offset.top, l = h / 2, "auto" == r.series.pie.offset.left ? (r.legend.position.match("w") ? l += u / 2 : l -= u / 2, l < o ? l = o : l > h - o && (l = h - o)) : l += r.series.pie.offset.left;
            var g = e.getData(),
                f = 0;

            do {
              f > 0 && (o *= .95), f += 1, v(), r.series.pie.tilt <= .8 && b();
            } while (!m() && f < 10);

            f >= 10 && (v(), i.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), e.setSeries && e.insertLegend && (e.setSeries(g), e.insertLegend());
          }

          function v() {
            c.clearRect(0, 0, h, d), i.children().filter(".pieLabel, .pieLabelBackground").remove();
          }

          function b() {
            var e = r.series.pie.shadow.left,
                t = r.series.pie.shadow.top,
                n = r.series.pie.shadow.alpha,
                i = r.series.pie.radius > 1 ? r.series.pie.radius : o * r.series.pie.radius;

            if (!(i >= h / 2 - e || i * r.series.pie.tilt >= d / 2 - t || i <= 10)) {
              c.save(), c.translate(e, t), c.globalAlpha = n, c.fillStyle = "#000", c.translate(l, a), c.scale(1, r.series.pie.tilt);

              for (var s = 1; s <= 10; s++) {
                c.beginPath(), c.arc(0, 0, i, 0, 2 * Math.PI, !1), c.fill(), i -= s;
              }

              c.restore();
            }
          }

          function m() {
            var e = Math.PI * r.series.pie.startAngle,
                t = r.series.pie.radius > 1 ? r.series.pie.radius : o * r.series.pie.radius;
            c.save(), c.translate(l, a), c.scale(1, r.series.pie.tilt), c.save();

            for (var s = e, u = 0; u < g.length; ++u) {
              g[u].startAngle = s, f(g[u].angle, g[u].color, !0);
            }

            if (c.restore(), r.series.pie.stroke.width > 0) {
              for (c.save(), c.lineWidth = r.series.pie.stroke.width, s = e, u = 0; u < g.length; ++u) {
                f(g[u].angle, r.series.pie.stroke.color, !1);
              }

              c.restore();
            }

            return p(c), c.restore(), !r.series.pie.label.show || function () {
              for (var t = e, s = r.series.pie.label.radius > 1 ? r.series.pie.label.radius : o * r.series.pie.label.radius, c = 0; c < g.length; ++c) {
                if (g[c].percent >= 100 * r.series.pie.label.threshold && !u(g[c], t, c)) return !1;
                t += g[c].angle;
              }

              return !0;

              function u(e, t, o) {
                if (0 == e.data[0][1]) return !0;
                var c,
                    u = r.legend.labelFormatter,
                    p = r.series.pie.label.formatter;
                c = u ? u(e.label, e) : e.label, p && (c = p(c, e));
                var g = (t + e.angle + t) / 2,
                    f = l + Math.round(Math.cos(g) * s),
                    v = a + Math.round(Math.sin(g) * s) * r.series.pie.tilt,
                    b = "<span class='pieLabel' id='pieLabel" + o + "' style='position:absolute;top:" + v + "px;left:" + f + "px;'>" + c + "</span>";
                i.append(b);
                var m = i.children("#pieLabel" + o),
                    y = v - m.height() / 2,
                    w = f - m.width() / 2;
                if (m.css("top", y), m.css("left", w), 0 - y > 0 || 0 - w > 0 || d - (y + m.height()) < 0 || h - (w + m.width()) < 0) return !1;

                if (0 != r.series.pie.label.background.opacity) {
                  var S = r.series.pie.label.background.color;
                  null == S && (S = e.color);
                  var M = "top:" + y + "px;left:" + w + "px;";
                  n("<div class='pieLabelBackground' style='position:absolute;width:" + m.width() + "px;height:" + m.height() + "px;" + M + "background-color:" + S + ";'></div>").css("opacity", r.series.pie.label.background.opacity).insertBefore(m);
                }

                return !0;
              }
            }();

            function f(e, n, i) {
              e <= 0 || isNaN(e) || (i ? c.fillStyle = n : (c.strokeStyle = n, c.lineJoin = "round"), c.beginPath(), Math.abs(e - 2 * Math.PI) > 1e-9 && c.moveTo(0, 0), c.arc(0, 0, t, s, s + e / 2, !1), c.arc(0, 0, t, s + e / 2, s + e, !1), c.closePath(), s += e, i ? c.fill() : c.stroke());
            }
          }
        }

        function p(e) {
          if (r.series.pie.innerRadius > 0) {
            e.save();
            var t = r.series.pie.innerRadius > 1 ? r.series.pie.innerRadius : o * r.series.pie.innerRadius;
            e.globalCompositeOperation = "destination-out", e.beginPath(), e.fillStyle = r.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.fill(), e.closePath(), e.restore(), e.save(), e.beginPath(), e.strokeStyle = r.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.stroke(), e.closePath(), e.restore();
          }
        }

        function g(e, t) {
          for (var n = !1, i = -1, r = e.length, o = r - 1; ++i < r; o = i) {
            (e[i][1] <= t[1] && t[1] < e[o][1] || e[o][1] <= t[1] && t[1] < e[i][1]) && t[0] < (e[o][0] - e[i][0]) * (t[1] - e[i][1]) / (e[o][1] - e[i][1]) + e[i][0] && (n = !n);
          }

          return n;
        }

        function f(e) {
          b("plothover", e);
        }

        function v(e) {
          b("plotclick", e);
        }

        function b(t, n) {
          var s = e.offset(),
              d = function (t, n) {
            for (var i, r, s = e.getData(), h = e.getOptions(), d = h.series.pie.radius > 1 ? h.series.pie.radius : o * h.series.pie.radius, u = 0; u < s.length; ++u) {
              var p = s[u];

              if (p.pie.show) {
                if (c.save(), c.beginPath(), c.moveTo(0, 0), c.arc(0, 0, d, p.startAngle, p.startAngle + p.angle / 2, !1), c.arc(0, 0, d, p.startAngle + p.angle / 2, p.startAngle + p.angle, !1), c.closePath(), i = t - l, r = n - a, c.isPointInPath) {
                  if (c.isPointInPath(t - l, n - a)) return c.restore(), {
                    datapoint: [p.percent, p.data],
                    dataIndex: 0,
                    series: p,
                    seriesIndex: u
                  };
                } else if (g([[0, 0], [d * Math.cos(p.startAngle), d * Math.sin(p.startAngle)], [d * Math.cos(p.startAngle + p.angle / 4), d * Math.sin(p.startAngle + p.angle / 4)], [d * Math.cos(p.startAngle + p.angle / 2), d * Math.sin(p.startAngle + p.angle / 2)], [d * Math.cos(p.startAngle + p.angle / 1.5), d * Math.sin(p.startAngle + p.angle / 1.5)], [d * Math.cos(p.startAngle + p.angle), d * Math.sin(p.startAngle + p.angle)]], [i, r])) return c.restore(), {
                  datapoint: [p.percent, p.data],
                  dataIndex: 0,
                  series: p,
                  seriesIndex: u
                };

                c.restore();
              }
            }

            return null;
          }(parseInt(n.pageX - s.left), parseInt(n.pageY - s.top));

          if (r.grid.autoHighlight) for (var u = 0; u < h.length; ++u) {
            var p = h[u];
            p.auto != t || d && p.series == d.series || m(p.series);
          }
          d && function (t, n) {
            var i = y(t);
            -1 == i ? (h.push({
              series: t,
              auto: n
            }), e.triggerRedrawOverlay()) : n || (h[i].auto = !1);
          }(d.series, t);
          var f = {
            pageX: n.pageX,
            pageY: n.pageY
          };
          i.trigger(t, [f, d]);
        }

        function m(t) {
          null == t && (h = [], e.triggerRedrawOverlay());
          var n = y(t);
          -1 != n && (h.splice(n, 1), e.triggerRedrawOverlay());
        }

        function y(e) {
          for (var t = 0; t < h.length; ++t) {
            if (h[t].series == e) return t;
          }

          return -1;
        }

        e.hooks.processOptions.push(function (e, t) {
          t.series.pie.show && (t.grid.show = !1, "auto" == t.series.pie.label.show && (t.legend.show ? t.series.pie.label.show = !1 : t.series.pie.label.show = !0), "auto" == t.series.pie.radius && (t.series.pie.label.show ? t.series.pie.radius = 3 / 4 : t.series.pie.radius = 1), t.series.pie.tilt > 1 ? t.series.pie.tilt = 1 : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0));
        }), e.hooks.bindEvents.push(function (e, t) {
          var n = e.getOptions();
          n.series.pie.show && (n.grid.hoverable && t.unbind("mousemove").mousemove(f), n.grid.clickable && t.unbind("click").click(v));
        }), e.hooks.processDatapoints.push(function (e, t, n, i) {
          e.getOptions().series.pie.show && d(e);
        }), e.hooks.drawOverlay.push(function (e, t) {
          e.getOptions().series.pie.show && function (e, t) {
            var n,
                i = e.getOptions(),
                r = i.series.pie.radius > 1 ? i.series.pie.radius : o * i.series.pie.radius;
            t.save(), t.translate(l, a), t.scale(1, i.series.pie.tilt);

            for (var s = 0; s < h.length; ++s) {
              (n = h[s].series).angle <= 0 || isNaN(n.angle) || (t.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight.opacity + ")", t.beginPath(), Math.abs(n.angle - 2 * Math.PI) > 1e-9 && t.moveTo(0, 0), t.arc(0, 0, r, n.startAngle, n.startAngle + n.angle / 2, !1), t.arc(0, 0, r, n.startAngle + n.angle / 2, n.startAngle + n.angle, !1), t.closePath(), t.fill());
            }

            p(t), t.restore();
          }(e, t);
        }), e.hooks.draw.push(function (e, t) {
          e.getOptions().series.pie.show && u(e, t);
        });
      },
      options: i,
      name: "pie",
      version: "1.1"
    });
  }, function (e, t) {
    !function (e) {
      function t(e, t) {
        return t * Math.floor(e / t);
      }

      function n(e, t, n, i) {
        if ("function" == typeof e.strftime) return e.strftime(t);

        var r,
            o = function o(e, t) {
          return t = "" + (null == t ? "0" : t), 1 == (e = "" + e).length ? t + e : e;
        },
            l = [],
            a = !1,
            s = e.getHours(),
            c = s < 12;

        null == n && (n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == i && (i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), r = s > 12 ? s - 12 : 0 == s ? 12 : s;

        for (var h = 0; h < t.length; ++h) {
          var d = t.charAt(h);

          if (a) {
            switch (d) {
              case "a":
                d = "" + i[e.getDay()];
                break;

              case "b":
                d = "" + n[e.getMonth()];
                break;

              case "d":
                d = o(e.getDate());
                break;

              case "e":
                d = o(e.getDate(), " ");
                break;

              case "h":
              case "H":
                d = o(s);
                break;

              case "I":
                d = o(r);
                break;

              case "l":
                d = o(r, " ");
                break;

              case "m":
                d = o(e.getMonth() + 1);
                break;

              case "M":
                d = o(e.getMinutes());
                break;

              case "q":
                d = "" + (Math.floor(e.getMonth() / 3) + 1);
                break;

              case "S":
                d = o(e.getSeconds());
                break;

              case "y":
                d = o(e.getFullYear() % 100);
                break;

              case "Y":
                d = "" + e.getFullYear();
                break;

              case "p":
                d = c ? "am" : "pm";
                break;

              case "P":
                d = c ? "AM" : "PM";
                break;

              case "w":
                d = "" + e.getDay();
            }

            l.push(d), a = !1;
          } else "%" == d ? a = !0 : l.push(d);
        }

        return l.join("");
      }

      function i(e) {
        function t(e, t, n, i) {
          e[t] = function () {
            return n[i].apply(n, arguments);
          };
        }

        var n = {
          date: e
        };
        null != e.strftime && t(n, "strftime", e, "strftime"), t(n, "getTime", e, "getTime"), t(n, "setTime", e, "setTime");

        for (var i = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], r = 0; r < i.length; r++) {
          t(n, "get" + i[r], e, "getUTC" + i[r]), t(n, "set" + i[r], e, "setUTC" + i[r]);
        }

        return n;
      }

      function r(e, t) {
        if ("browser" == t.timezone) return new Date(e);

        if (t.timezone && "utc" != t.timezone) {
          if ("undefined" != typeof timezoneJS && void 0 !== timezoneJS.Date) {
            var n = new timezoneJS.Date();
            return n.setTimezone(t.timezone), n.setTime(e), n;
          }

          return i(new Date(e));
        }

        return i(new Date(e));
      }

      var o = {
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        month: 2592e6,
        quarter: 7776e6,
        year: 525949.2 * 60 * 1e3
      },
          l = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]],
          a = l.concat([[3, "month"], [6, "month"], [1, "year"]]),
          s = l.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
      e.plot.plugins.push({
        init: function init(i) {
          i.hooks.processOptions.push(function (i, l) {
            e.each(i.getAxes(), function (e, i) {
              var l = i.options;
              "time" == l.mode && (i.tickGenerator = function (e) {
                var n = [],
                    i = r(e.min, l),
                    c = 0,
                    h = l.tickSize && "quarter" === l.tickSize[1] || l.minTickSize && "quarter" === l.minTickSize[1] ? s : a;
                null != l.minTickSize && (c = "number" == typeof l.tickSize ? l.tickSize : l.minTickSize[0] * o[l.minTickSize[1]]);

                for (var d = 0; d < h.length - 1 && !(e.delta < (h[d][0] * o[h[d][1]] + h[d + 1][0] * o[h[d + 1][1]]) / 2 && h[d][0] * o[h[d][1]] >= c); ++d) {
                  ;
                }

                var u = h[d][0],
                    p = h[d][1];

                if ("year" == p) {
                  if (null != l.minTickSize && "year" == l.minTickSize[1]) u = Math.floor(l.minTickSize[0]);else {
                    var g = Math.pow(10, Math.floor(Math.log(e.delta / o.year) / Math.LN10)),
                        f = e.delta / o.year / g;
                    u = f < 1.5 ? 1 : f < 3 ? 2 : f < 7.5 ? 5 : 10, u *= g;
                  }
                  u < 1 && (u = 1);
                }

                e.tickSize = l.tickSize || [u, p];
                var v = e.tickSize[0];
                p = e.tickSize[1];
                var b = v * o[p];
                "second" == p ? i.setSeconds(t(i.getSeconds(), v)) : "minute" == p ? i.setMinutes(t(i.getMinutes(), v)) : "hour" == p ? i.setHours(t(i.getHours(), v)) : "month" == p ? i.setMonth(t(i.getMonth(), v)) : "quarter" == p ? i.setMonth(3 * t(i.getMonth() / 3, v)) : "year" == p && i.setFullYear(t(i.getFullYear(), v)), i.setMilliseconds(0), b >= o.minute && i.setSeconds(0), b >= o.hour && i.setMinutes(0), b >= o.day && i.setHours(0), b >= 4 * o.day && i.setDate(1), b >= 2 * o.month && i.setMonth(t(i.getMonth(), 3)), b >= 2 * o.quarter && i.setMonth(t(i.getMonth(), 6)), b >= o.year && i.setMonth(0);
                var m,
                    y = 0,
                    w = Number.NaN;

                do {
                  if (m = w, w = i.getTime(), n.push(w), "month" == p || "quarter" == p) {
                    if (v < 1) {
                      i.setDate(1);
                      var S = i.getTime();
                      i.setMonth(i.getMonth() + ("quarter" == p ? 3 : 1));
                      var M = i.getTime();
                      i.setTime(w + y * o.hour + (M - S) * v), y = i.getHours(), i.setHours(0);
                    } else i.setMonth(i.getMonth() + v * ("quarter" == p ? 3 : 1));
                  } else "year" == p ? i.setFullYear(i.getFullYear() + v) : i.setTime(w + b);
                } while (w < e.max && w != m);

                return n;
              }, i.tickFormatter = function (e, t) {
                var i = r(e, t.options);
                if (null != l.timeformat) return n(i, l.timeformat, l.monthNames, l.dayNames);
                var a = t.options.tickSize && "quarter" == t.options.tickSize[1] || t.options.minTickSize && "quarter" == t.options.minTickSize[1],
                    s = t.tickSize[0] * o[t.tickSize[1]],
                    c = t.max - t.min,
                    h = l.twelveHourClock ? " %p" : "",
                    d = l.twelveHourClock ? "%I" : "%H";
                return n(i, s < o.minute ? d + ":%M:%S" + h : s < o.day ? c < 2 * o.day ? d + ":%M" + h : "%b %d " + d + ":%M" + h : s < o.month ? "%b %d" : a && s < o.quarter || !a && s < o.year ? c < o.year ? "%b" : "%b %Y" : a && s < o.year ? c < o.year ? "Q%q" : "Q%q %Y" : "%Y", l.monthNames, l.dayNames);
              });
            });
          });
        },
        options: {
          xaxis: {
            timezone: null,
            timeformat: null,
            twelveHourClock: !1,
            monthNames: null
          }
        },
        name: "time",
        version: "1.0"
      }), e.plot.formatDate = n, e.plot.dateGenerator = r;
    }(jQuery);
  },,, function (e, t, n) {
    "use strict";

    n.r(t);

    var _i = function i(e, t) {
      return (_i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (e, t) {
        e.__proto__ = t;
      } || function (e, t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
      })(e, t);
    };

    var r = n(2),
        o = n(1),
        l = n.n(o),
        a = n(3),
        s = n.n(a),
        c = n(4),
        h = n.n(c),
        d = (n(7), n(0)),
        u = n.n(d);

    function p(e, t, n, i) {
      var r,
          o = i.panel;
      t = t.find(".piechart-panel__chart");
      var a = u()('<div id="tooltip">');

      function s(e, t) {
        var n = t.data[0][t.data[0].length - 1],
            r = 2,
            o = '<div style="font-size:' + i.panel.fontSize + ';text-align:center;padding:2px;">' + e + "<br/>";
        return i.panel.legend.percentageDecimals && (r = i.panel.legend.percentageDecimals), i.panel.legend.values && i.panel.legend.percentage ? o + i.formatValue(n) + "<br/>" + t.percent.toFixed(r) + "%</div>" : i.panel.legend.values ? o + i.formatValue(n) + "</div>" : i.panel.legend.percentage ? o + t.percent.toFixed(r) + "%</div>" : o + "</div>";
      }

      function c() {
        var e = t.width(),
            n = i.height - function (e) {
          if (!i.panel.legend.show || "Right side" === i.panel.legendType || "On graph" === i.panel.legendType) return 20;

          if ("Under graph" === i.panel.legendType && i.panel.legend.percentage || i.panel.legend.values) {
            var t = parseInt(i.panel.breakPoint, 10) / 100,
                n = 23 + 20 * r.length;
            return Math.min(n, Math.floor(e * t));
          }

          return 0;
        }(i.height),
            c = Math.min(e, n),
            h = u()("<div></div>"),
            d = {
          margin: "auto",
          position: "relative",
          paddingBottom: "20px",
          height: c + "px"
        };

        h.css(d);
        var p = {
          legend: {
            show: !1
          },
          series: {
            pie: {
              radius: 1,
              innerRadius: 0,
              show: !0,
              stroke: {
                color: u()("body").css("background-color"),
                width: parseFloat(i.panel.strokeWidth).toFixed(1)
              },
              label: {
                show: i.panel.legend.show && "On graph" === i.panel.legendType,
                formatter: s
              },
              highlight: {
                opacity: 0
              },
              combine: {
                threshold: i.panel.combine.threshold,
                label: i.panel.combine.label
              }
            }
          },
          grid: {
            hoverable: !0,
            clickable: !1
          }
        };
        "donut" === o.pieType && (p.series.pie.innerRadius = .5), r = i.data;

        for (var g = 0; g < r.length; g++) {
          var f = r[g];
          i.hiddenSeries[f.label] && (f.data = {});
        }

        o.legend.sort && (i.panel.valueName !== o.legend.sort && (o.legend.sort = i.panel.valueName), !0 === o.legend.sortDesc ? r.sort(function (e, t) {
          return t.legendData - e.legendData;
        }) : r.sort(function (e, t) {
          return e.legendData - t.legendData;
        })), t.html(h), u.a.plot(h, r, p), h.bind("plothover", function (e, t, n) {
          if (n) {
            var r,
                o = parseFloat(n.series.percent).toFixed(2),
                s = i.formatValue(n.series.data[0][1]);
            r = '<div class="piechart-tooltip-small"><div class="piechart-tooltip-time">', r += '<div class="piechart-tooltip-value">' + l.a.escape(n.series.label) + ": " + s, r += " (" + o + "%)</div>", r += "</div></div>", a.html(r).place_tt(t.pageX + 20, t.pageY);
          } else a.detach();
        });
      }

      function h(e) {
        i.data && (r = i.data, 0 === i.data.length ? t.html('<div class="datapoints-warning"><span class="small">No data points</span></div>') : c(), e && i.renderingCompleted());
      }

      i.events.on("render", function () {
        "Right side" === o.legendType ? (h(!1), setTimeout(function () {
          h(!0);
        }, 50)) : h(!0);
      });
    }

    var g = n(5),
        f = n.n(g),
        v = (n(8), n(6)),
        b = n.n(v);
    f.a.module("grafana.directives").directive("piechartLegend", ["popoverSrv", "$timeout", function (e, t) {
      return {
        link: function link(n, i) {
          var r,
              o,
              a,
              s,
              c,
              h = u()('<div class="piechart-legend__container"></div>'),
              d = !0,
              p = n.ctrl,
              g = p.panel;

          function f(e) {
            return e.parents("[data-series-index]").data("series-index");
          }

          function v(e) {
            var t = u()(e.currentTarget);

            if (t && t.text() !== g.combine.label) {
              var n = f(t),
                  i = a[n],
                  r = u()(h.children("tbody")).scrollTop();
              p.toggleSeries(i), void 0 !== r && u()(h.children("tbody")).scrollTop(r);
            }
          }

          function m(e) {
            var t = u()(e.currentTarget).data("stat");
            if (t !== g.legend.sort && (g.legend.sortDesc = null), !1 === g.legend.sortDesc) return g.legend.sort = null, g.legend.sortDesc = null, void p.render();
            g.legend.sortDesc = !g.legend.sortDesc, g.legend.sort = t, p.render();
          }

          function y(n) {
            if (!u()(n.target).parents(".popover").length) {
              var i = u()(n.currentTarget).find(".fa-minus"),
                  r = f(i),
                  l = o[r];
              t(function () {
                e.show({
                  element: i[0],
                  position: "right center",
                  template: '<series-color-picker-popover color="series.color" onToggleAxis="toggleAxis" onColorChange="colorSelected"></series-color-picker-popover>',
                  openOn: "hover",
                  classNames: "drop-popover drop-popover--transparent",
                  model: {
                    autoClose: !0,
                    series: l,
                    toggleAxis: function toggleAxis() {},
                    colorSelected: function colorSelected(e) {
                      p.changeSeriesColor(l, e);
                    }
                  }
                });
              });
            }
          }

          function w(e, t, n, i, r) {
            var o = '<div class="piechart-legend-series';
            p.hiddenSeries[e.label] && (o += " piechart-legend-series-hidden"), o += '" data-series-index="' + t + '">', o += '<span class="piechart-legend-icon" style="float:none;">', o += '<i class="fa fa-minus pointer" style="color:' + e.color + '"></i>', o += "</span>", o += '<a class="piechart-legend-alias" style="float:none;">' + l.a.escape(e.label) + "</a>";
            var a = 0;

            if (p.panel.legend.percentageDecimals && (a = p.panel.legend.percentageDecimals), i && r) {
              var s = e.legendData;
              if (g.legend.values && (o += '<div class="piechart-legend-value">' + p.formatValue(s) + "</div>"), n) o += '<div class="piechart-legend-value">' + ((s / n * 100).toFixed(a) + "%") + "</div>";
            }

            return o += "</div>";
          }

          n.$on("$destroy", function () {
            c && c.destroy();
          }), p.events.on("render", function () {
            if (r = p.series) {
              for (var e in r) {
                r[e].color = p.data[e].color;
              }

              !function () {
                if ("On graph" === g.legendType || !g.legend.show) return h.empty(), void i.find(".piechart-legend").css("padding-top", 0);
                i.find(".piechart-legend").css("padding-top", 6);
                d && (i.append(h), h.on("click", ".piechart-legend-icon", y), h.on("click", ".piechart-legend-alias", v), h.on("click", "th", m), d = !1);
                o = r, a = p.data, h.empty();
                var e = "Right side" === g.legendType && g.legend.sideWidth ? g.legend.sideWidth + "px" : "",
                    t = "Right side" === g.legendType && g.legend.sideWidth ? g.legend.sideWidth - 1 + "px" : "";
                i.css("min-width", e), i.css("width", t);
                var n,
                    f = g.legend.values || g.legend.percentage,
                    S = ("Under graph" === g.legendType || "Right side" === g.legendType) && f;

                if (h.toggleClass("piechart-legend-table", S), S) {
                  var M = '<tr><th colspan="2" style="text-align:left"></th>';
                  g.legend.values && (M += function (e) {
                    var t = e;
                    g.legend.header && (t = g.legend.header);
                    var n = '<th class="pointer" data-stat="' + l.a.escape(e) + '">' + l.a.escape(t);

                    if (g.legend.sort === e) {
                      var i = g.legend.sortDesc ? "fa fa-caret-down" : "fa fa-caret-up";
                      n += ' <span class="' + i + '"></span>';
                    }

                    return n + "</th>";
                  }(p.panel.valueName)), g.legend.percentage && (M += function (e) {
                    var t = '<th class="pointer" data-stat="' + e + '">percentage';

                    if (g.legend.sort === e) {
                      var n = g.legend.sortDesc ? "fa fa-caret-down" : "fa fa-caret-up";
                      t += ' <span class="' + n + '"></span>';
                    }

                    return t + "</th>";
                  }(p.panel.valueName)), M += "</tr>", n = u()(M);
                }

                var Y = 0;
                if (g.legend.percentage) for (s = 0; s < o.length; s++) {
                  p.hiddenSeries[o[s].label] || (Y += o[s].stats[p.panel.valueName]);
                }
                var T = 0,
                    k = {
                  label: g.combine.label,
                  color: "",
                  legendData: 0
                },
                    X = [];

                for (s = 0; s < o.length; s++) {
                  var W = o[s],
                      L = a[s];
                  if (L.data / Y < g.combine.threshold) p.hiddenSeries[L.label] || (T++, k.legendData += L.data);else {
                    if (g.legend.hideEmpty && W.allIsNull) continue;
                    if (!W.legend) continue;
                    X.push(u()(w(L, s, Y, f, S)));
                  }
                }

                if (T > 0) {
                  if (void 0 === g.legend.sortDesc || null === g.legend.sortDesc || g.legend.sortDesc) {
                    if (Object.keys(p.hiddenSeries).length > 0) {
                      var R = void 0,
                          x = void 0,
                          D = function D(e) {
                        R = a.find(function (t) {
                          return t.label === e;
                        }), (void 0 === x || R.legendData > x) && (x = R.legendData, k.color = R.color);
                      };

                      for (var P in p.hiddenSeries) {
                        D(P);
                      }
                    } else k.color = o[o.length - T].color;
                  } else k.color = o[0].color;
                  X.push(u()(w(k, a.length - T, Y, f, S)));
                }

                if (S) {
                  var H = u()("<tbody></tbody>");
                  void 0 !== n && H.append(n), H.append(X), h.append(H);
                } else h.append(X);

                "Under graph" === g.legendType ? c ? c.update() : c = new b.a(i[0], {
                  scrollYMarginOffset: 2,
                  suppressScrollX: !0
                }) : c && (c.destroy(), c = null);
              }();
            }
          });
        }
      };
    }]);

    var m = function (e) {
      function t(t, n, i) {
        var r = e.call(this, t, n) || this;
        r.$rootScope = i, r.hiddenSeries = {};
        var o = {
          pieType: "pie",
          legend: {
            show: !0,
            values: !0
          },
          links: [],
          datasource: null,
          interval: null,
          targets: [{}],
          cacheTimeout: null,
          nullPointMode: "connected",
          legendType: "Under graph",
          breakPoint: "50%",
          aliasColors: {},
          format: "short",
          valueName: "current",
          strokeWidth: 1,
          fontSize: "80%",
          combine: {
            threshold: 0,
            label: "Others"
          }
        };
        return l.a.defaults(r.panel, o), l.a.defaults(r.panel.legend, o.legend), r.events.on("render", r.onRender.bind(r)), r.events.on("data-received", r.onDataReceived.bind(r)), r.events.on("data-error", r.onDataError.bind(r)), r.events.on("data-snapshot-load", r.onDataReceived.bind(r)), r.events.on("init-edit-mode", r.onInitEditMode.bind(r)), r.setLegendWidthForLegacyBrowser(), r;
      }

      return t.$inject = ["$scope", "$injector", "$rootScope"], function (e, t) {
        function n() {
          this.constructor = e;
        }

        _i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
      }(t, e), t.prototype.onInitEditMode = function () {
        this.addEditorTab("Options", "public/plugins/grafana-piechart-panel/editor.html", 2), this.unitFormats = s.a.getUnitFormats();
      }, t.prototype.setUnitFormat = function (e) {
        this.panel.format = e.value, this.render();
      }, t.prototype.onDataError = function () {
        this.series = [], this.render();
      }, t.prototype.changeSeriesColor = function (e, t) {
        e.color = t, this.panel.aliasColors[e.alias] = e.color, this.render();
      }, t.prototype.onRender = function () {
        this.data = this.parseSeries(this.series);
      }, t.prototype.parseSeries = function (e) {
        var t = this;
        return l.a.map(this.series, function (e, n) {
          return {
            label: e.alias,
            data: e.stats[t.panel.valueName],
            color: t.panel.aliasColors[e.alias] || t.$rootScope.colors[n],
            legendData: e.stats[t.panel.valueName]
          };
        });
      }, t.prototype.onDataReceived = function (e) {
        this.series = e.map(this.seriesHandler.bind(this)), this.data = this.parseSeries(this.series), this.render(this.data);
      }, t.prototype.seriesHandler = function (e) {
        var t = new h.a({
          datapoints: e.datapoints,
          alias: e.target
        });
        return t.flotpairs = t.getFlotPairs(this.panel.nullPointMode), t;
      }, t.prototype.getDecimalsForValue = function (e) {
        if (l.a.isNumber(this.panel.decimals)) return {
          decimals: this.panel.decimals,
          scaledDecimals: null
        };
        var t,
            n = e / 2,
            i = -Math.floor(Math.log(n) / Math.LN10),
            r = Math.pow(10, -i),
            o = n / r;
        o < 1.5 ? t = 1 : o < 3 ? (t = 2, o > 2.25 && (t = 2.5, ++i)) : t = o < 7.5 ? 5 : 10, t *= r, Math.floor(e) === e && (i = 0);
        var a = {
          decimals: 0,
          scaledDecimals: 0
        };
        return a.decimals = Math.max(0, i), a.scaledDecimals = a.decimals - Math.floor(Math.log(t) / Math.LN10) + 2, a;
      }, t.prototype.formatValue = function (e) {
        var t = this.getDecimalsForValue(e),
            n = s.a.valueFormats[this.panel.format];
        return n ? n(e, t.decimals, t.scaledDecimals) : e;
      }, t.prototype.link = function (e, t, n, i) {
        p(0, t, 0, i);
      }, t.prototype.toggleSeries = function (e) {
        this.hiddenSeries[e.label] ? delete this.hiddenSeries[e.label] : this.hiddenSeries[e.label] = !0, this.render();
      }, t.prototype.onLegendTypeChanged = function () {
        this.setLegendWidthForLegacyBrowser(), this.render();
      }, t.prototype.setLegendWidthForLegacyBrowser = function () {
        !!window.MSInputMethodContext && !!document.documentMode && "Right side" === this.panel.legendType && !this.panel.legend.sideWidth && (this.panel.legend.sideWidth = 150);
      }, t.templateUrl = "module.html", t;
    }(r.MetricsPanelCtrl);

    n.d(t, "PanelCtrl", function () {
      return m;
    }), Object(r.loadPluginCss)({
      dark: "plugins/grafana-piechart-panel/styles/dark.css",
      light: "plugins/grafana-piechart-panel/styles/light.css"
    });
  }]);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map