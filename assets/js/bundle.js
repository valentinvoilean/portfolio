webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createSelectorsFromClasses__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createSelectorsFromClasses__["a"]; });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  xsMin: 0,
  xsMax: 767,
  smMin: 768,
  smMax: 1023,
  mdMin: 1024,
  mdMax: 1439,
  lgMin: 1440,
  lgMax: 1879,
  xlMin: 1880
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(4);


window.info = window.info || {};
window.info.instances = [];

$(document).ready(function () {
  __WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */].documentReady.forEach(function (Component) {
    window.info.instances.push(new Component());
  });
});

$(window).on('load', function () {
  __WEBPACK_IMPORTED_MODULE_0__components__["a" /* default */].windowLoad.forEach(function (Component) {
    window.info.instances.push(new Component());
  });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainMenu__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MediaQueries__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["a"] = ({
  documentReady: [__WEBPACK_IMPORTED_MODULE_2__MediaQueries__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Logo__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__MainMenu__["a" /* default */]],
  windowLoad: []
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Logo = function () {
  function Logo() {
    _classCallCheck(this, Logo);

    this.$logo = $(__WEBPACK_IMPORTED_MODULE_0__config__["b" /* selectors */].logo);

    if (this.$logo) {
      this.init();
    }
  }

  _createClass(Logo, [{
    key: 'init',
    value: function () {
      function init() {
        this._addEventListeners();
      }

      return init;
    }()
  }, {
    key: 'destroy',
    value: function () {
      function destroy() {
        if (this.$logo) {
          var enter = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].enter,
              leave = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].leave;


          this._removeEventListeners();

          this.$logo.removeClass(leave).removeClass(enter);
        }
      }

      return destroy;
    }()
  }, {
    key: '_addEventListeners',
    value: function () {
      function _addEventListeners() {
        var enter = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].enter,
            leave = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].leave;


        this.$logo.on({
          mouseenter: function () {
            function mouseenter() {
              $(this).addClass(enter).removeClass(leave);
            }

            return mouseenter;
          }(),
          mouseleave: function () {
            function mouseleave() {
              var _this = this;

              $(this).addClass(leave).removeClass(enter);

              setTimeout(function () {
                $(_this).removeClass(leave);
              }, 600);
            }

            return mouseleave;
          }()
        });
      }

      return _addEventListeners;
    }()
  }, {
    key: '_removeEventListeners',
    value: function () {
      function _removeEventListeners() {
        this.$logo.off('mouseenter mouseleave');
      }

      return _removeEventListeners;
    }()
  }]);

  return Logo;
}();

/* harmony default export */ __webpack_exports__["a"] = (Logo);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_utils__ = __webpack_require__(1);


var classNames = {
  logo: 'logo',
  enter: 'enter',
  leave: 'leave'
};

var selectors = Object(__WEBPACK_IMPORTED_MODULE_0_es6_utils__["a" /* createSelectorsFromClasses */])(classNames);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSelectorsFromClasses;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function createSelectorsFromClasses(classesConfig) {
  var selectorsConfig = {};

  Object.entries(classesConfig).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    selectorsConfig[key] = "." + String(value);
  });

  return selectorsConfig;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainMenu_mobile__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MainMenu_desktop__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CurrenciesComponent = function () {
  function CurrenciesComponent() {
    _classCallCheck(this, CurrenciesComponent);

    this._addMediaQueryCallbacks();
    this._checkCurrentBreakpoint();
  }

  _createClass(CurrenciesComponent, [{
    key: 'destroy',
    value: function () {
      function destroy() {
        this._removeMediaQueryCallbacks();
        if (this.instance) {
          this.instance.destroy();
        }
        this.instance = null;
      }

      return destroy;
    }()
  }, {
    key: '_addMediaQueryCallbacks',
    value: function () {
      function _addMediaQueryCallbacks() {
        $(window).on('smMax', $.proxy(this._onChangedToMobile, this));
        $(window).on('mdMin', $.proxy(this._onChangedToDesktop, this));
      }

      return _addMediaQueryCallbacks;
    }()
  }, {
    key: '_removeMediaQueryCallbacks',
    value: function () {
      function _removeMediaQueryCallbacks() {
        $(window).off('smMax', $.proxy(this._onChangedToMobile.bind(this)));
        $(window).off('mdMin', $.proxy(this._onChangedToDesktop.bind(this)));
      }

      return _removeMediaQueryCallbacks;
    }()
  }, {
    key: '_checkCurrentBreakpoint',
    value: function () {
      function _checkCurrentBreakpoint() {
        if (window.info && window.info.matchedMediaQueries && window.info.matchedMediaQueries.indexOf('smMax') > -1) {
          this._onChangedToMobile();
        } else {
          this._onChangedToDesktop();
        }
      }

      return _checkCurrentBreakpoint;
    }()
  }, {
    key: '_onChangedToDesktop',
    value: function () {
      function _onChangedToDesktop() {
        if (this.instance) {
          this.instance.destroy();
        }
        this.instance = new __WEBPACK_IMPORTED_MODULE_1__MainMenu_desktop__["a" /* default */]();
      }

      return _onChangedToDesktop;
    }()
  }, {
    key: '_onChangedToMobile',
    value: function () {
      function _onChangedToMobile() {
        if (this.instance) {
          this.instance.destroy();
        }
        this.instance = new __WEBPACK_IMPORTED_MODULE_0__MainMenu_mobile__["a" /* default */]();
      }

      return _onChangedToMobile;
    }()
  }]);

  return CurrenciesComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (CurrenciesComponent);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var MainMenu = function () {
  function MainMenu() {
    _classCallCheck(this, MainMenu);

    var hamburger = __WEBPACK_IMPORTED_MODULE_0__config__["b" /* selectors */].hamburger,
        navigation = __WEBPACK_IMPORTED_MODULE_0__config__["b" /* selectors */].navigation;

    this.$hamburger = $(hamburger);
    this.$navigation = $(navigation);

    this._handleHamburgerIconCLick = this._handleHamburgerIconCLick.bind(this);
    this._hideMenu = this._hideMenu.bind(this);

    this.init();
  }

  _createClass(MainMenu, [{
    key: 'init',
    value: function () {
      function init() {
        if (this.$hamburger) {
          this._addEventListeners();
        }
      }

      return init;
    }()
  }, {
    key: 'destroy',
    value: function () {
      function destroy() {
        if (this.$hamburger) {
          var isActive = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].isActive;


          this._removeEventListeners();
          this.$hamburger.removeClass(isActive);
        }
      }

      return destroy;
    }()
  }, {
    key: '_addEventListeners',
    value: function () {
      function _addEventListeners() {
        this.$hamburger.on('click', this._handleHamburgerIconCLick);
        $(window).on('click', this._hideMenu);
        this.$navigation.on('click', function (e) {
          return e.stopPropagation();
        });
      }

      return _addEventListeners;
    }()
  }, {
    key: '_removeEventListeners',
    value: function () {
      function _removeEventListeners() {
        this.$hamburger.add($(window)).off('click', this._handleHamburgerIconCLick);
        $(window).off('click', this._hideMenu);
      }

      return _removeEventListeners;
    }()
  }, {
    key: '_handleHamburgerIconCLick',
    value: function () {
      function _handleHamburgerIconCLick(e) {
        e.stopPropagation();

        this.$hamburger.toggleClass(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].isActive);
      }

      return _handleHamburgerIconCLick;
    }()
  }, {
    key: '_hideMenu',
    value: function () {
      function _hideMenu() {
        this.$hamburger.removeClass(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* classNames */].isActive);
      }

      return _hideMenu;
    }()
  }]);

  return MainMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (MainMenu);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_utils__ = __webpack_require__(1);


var classNames = {
  navigation: 'mainmenu-nav',
  hamburger: 'mainmenu-hamburger',
  isActive: 'is-active',
  noScroll: 'no-scroll'
};

var selectors = Object(__WEBPACK_IMPORTED_MODULE_0_es6_utils__["a" /* createSelectorsFromClasses */])(classNames);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainMenu = function () {
  function MainMenu() {
    _classCallCheck(this, MainMenu);

    this.init();
  }

  _createClass(MainMenu, [{
    key: 'init',
    value: function () {
      function init() {
        console.log('main menu desktop');
      }

      return init;
    }()
  }, {
    key: 'destroy',
    value: function () {
      function destroy() {}

      return destroy;
    }()
  }]);

  return MainMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (MainMenu);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_constants__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * MediaQuery module
 * Used to detect current media query
 *
 * Usage:
 * $(window).on(MEDIA_QUERY, callback );
 *
 * Where:
 *    MEDIA_QUERY can be : 'xs', 'sm', 'md', 'lg', xl
 *                         'xsMin', 'smMin', 'mdMin','lgMin', xlMin
 *                         'xsMax', 'smMax', 'mdMax', 'lgMax'
 *    Callback: function name or anonymous function
 *
 *    e.g. :
 *
 *    function sayGoodbye = { alert('goodbye') }
 *    $(window).on('smMin', sayGoodbye })
 *
 *    or
 *
 *    $(window).on('smMin', function() { alert('hello'); })
 *
 *
 * @type {{new()=>{_handleMQChange: ((mql, index?)), destroy: (())}}}
 */

var MediaQueriesComponent = function () {
  function MediaQueriesComponent() {
    var _this = this;

    _classCallCheck(this, MediaQueriesComponent);

    window.info = window.info || {};
    window.info.matchedMediaQueries = window.info.matchedMediaQueries || [];

    $.each(__WEBPACK_IMPORTED_MODULE_0_es6_constants__["a" /* MEDIA_QUERIES */], function (index, value) {
      var mql = window.matchMedia(value);

      // the default matchmedia's addListener method doesn't support extra parameters,
      // therefore we need another extra function that can pass the current breakpoint name
      mql.addListener(_this.addMQListener = function (newMql) {
        _this._handleMQChange(newMql, index);
      });

      _this._handleMQChange(mql, index);
    });
  }

  _createClass(MediaQueriesComponent, [{
    key: 'destroy',
    value: function () {
      function destroy() {
        var _this2 = this;

        $.each(__WEBPACK_IMPORTED_MODULE_0_es6_constants__["a" /* MEDIA_QUERIES */], function (index, value) {
          window.matchMedia(value).removeListener(_this2.addMQListener);
        });
      }

      return destroy;
    }()

    /**
     * Method to handle the media query change
     * @param mql - current media query
     * @param breakpointName - current breakpoint
       * @private
       */

  }, {
    key: '_handleMQChange',
    value: function () {
      function _handleMQChange(mql, breakpointName) {
        if (mql.matches) {
          $(window).triggerHandler(breakpointName);

          if (breakpointName.indexOf('Min') === -1 && breakpointName.indexOf('Max') === -1) {
            $(window).triggerHandler('mediaQueryChange', breakpointName);
          }

          $.each(window.info.matchedMediaQueries, function (index, value) {
            if (!window.matchMedia(__WEBPACK_IMPORTED_MODULE_0_es6_constants__["a" /* MEDIA_QUERIES */][value]).matches) {
              window.info.matchedMediaQueries.splice(index, 1);
            }
          });

          window.info.matchedMediaQueries.push(breakpointName);
        }
      }

      return _handleMQChange;
    }()
  }]);

  return MediaQueriesComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MediaQueriesComponent);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breakpoints__ = __webpack_require__(2);
/* unused harmony reexport BREAKPOINTS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classNames__ = __webpack_require__(14);
/* unused harmony reexport CLASS_NAMES */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediaQueries__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__mediaQueries__["a"]; });




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  active: 'is-active',
  expanded: 'is-expanded',
  animate: 'is-animated',
  visible: 'is-visible',
  collapsed: 'is-collapsed',
  outsideViewport: 'is-outside-viewport'
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breakpoints__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
  xsMin: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].xsMin) + 'px)',
  xs: 'screen and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].xsMax) + 'px)',
  xsMax: 'screen and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].xsMax) + 'px)',
  smMin: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].smMin) + 'px)',
  sm: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].smMin) + 'px) and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].smMax) + 'px)',
  smMax: 'screen and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].smMax) + 'px)',
  mdMin: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].mdMin) + 'px)',
  md: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].mdMin) + 'px) and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].mdMax) + 'px)',
  mdMax: 'screen and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].mdMax) + 'px)',
  lgMin: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].lgMin) + 'px)',
  lg: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].lgMin) + 'px) and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].lgMax) + 'px)',
  lgMax: 'screen and (max-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].lgMax) + 'px)',
  xl: 'screen and (min-width: ' + String(__WEBPACK_IMPORTED_MODULE_0__breakpoints__["a" /* default */].xlMin) + 'px)'
});

/***/ })
],[3]);
//# sourceMappingURL=bundle.js.map