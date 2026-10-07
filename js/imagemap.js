(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      !function() {
        "use strict";
        function r() {
          function e2() {
            var r3 = { width: u.width / u.naturalWidth, height: u.height / u.naturalHeight }, a2 = { width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10), height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10) };
            i.forEach(function(e3, t2) {
              var n2 = 0;
              o[t2].coords = e3.split(",").map(function(e4) {
                var t3 = 1 == (n2 = 1 - n2) ? "width" : "height";
                return a2[t3] + Math.floor(Number(e4) * r3[t3]);
              }).join(",");
            });
          }
          function t(e3) {
            return e3.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
          }
          function n() {
            clearTimeout(d), d = setTimeout(e2, 250);
          }
          function r2(e3) {
            return document.querySelector('img[usemap="' + e3 + '"]');
          }
          var a = this, o = null, i = null, u = null, d = null;
          "function" != typeof a._resize ? (o = a.getElementsByTagName("area"), i = Array.prototype.map.call(o, t), u = r2("#" + a.name) || r2(a.name), a._resize = e2, u.addEventListener("load", e2, false), window.addEventListener("focus", e2, false), window.addEventListener("resize", n, false), window.addEventListener("readystatechange", e2, false), document.addEventListener("fullscreenchange", e2, false), u.width === u.naturalWidth && u.height === u.naturalHeight || e2()) : a._resize();
        }
        function e() {
          function t(e2) {
            e2 && (!function(e3) {
              if (!e3.tagName)
                throw new TypeError("Object is not a valid DOM element");
              if ("MAP" !== e3.tagName.toUpperCase())
                throw new TypeError("Expected <MAP> tag, found <" + e3.tagName + ">.");
            }(e2), r.call(e2), n.push(e2));
          }
          var n;
          return function(e2) {
            switch (n = [], typeof e2) {
              case "undefined":
              case "string":
                Array.prototype.forEach.call(document.querySelectorAll(e2 || "map"), t);
                break;
              case "object":
                t(e2);
                break;
              default:
                throw new TypeError("Unexpected data type (" + typeof e2 + ").");
            }
            return n;
          };
        }
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : window.imageMapResize = e(), "jQuery" in window && (window.jQuery.fn.imageMapResize = function() {
          return this.filter("map").each(r).end();
        });
      }();
    }
  });
  require_stdin();
})();
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */
