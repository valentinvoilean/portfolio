webpackJsonp([0],[,function(n,e,t){"use strict";var r=t(6);t.d(e,"a",function(){return r.a})},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n){var e=t(3),r=[];n(document).ready(function(){e.a.documentReady.forEach(function(n){r.push(new n)})}),n(window).on('load',function(){e.a.windowLoad.forEach(function(n){r.push(new n)})})}.call(e,t(0))},function(n,e,t){"use strict";var r=t(4),i=t(7);e.a={documentReady:[r.a,i.a],windowLoad:[]}},function(n,e,t){"use strict";(function(n){function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var i=t(5),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=function(){function e(){r(this,e),this.$logo=n(i.b.logo),this.$logo&&this.init()}return o(e,[{key:'init',value:function(){function n(){this.addEventListeners()}return n}()},{key:'destroy',value:function(){function n(){if(this.$logo){var n=i.a.enter,e=i.a.leave;this.removeEventListeners(),this.$logo.removeClass(e).removeClass(n)}}return n}()},{key:'addEventListeners',value:function(){function e(){var e=i.a.enter,t=i.a.leave;this.$logo.on({mouseenter:function(){function r(){n(this).addClass(e).removeClass(t)}return r}(),mouseleave:function(){function r(){var r=this;n(this).addClass(t).removeClass(e),setTimeout(function(){n(r).removeClass(t)},600)}return r}()})}return e}()},{key:'removeEventListeners',value:function(){function n(){this.$logo.off('mouseenter mouseleave')}return n}()}]),e}();e.a=a}).call(e,t(0))},function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var r=t(1),i={logo:'logo',enter:'enter',leave:'leave'},o=Object(r.a)(i)},function(n,e,t){"use strict";function r(n){var e={};return Object.entries(n).forEach(function(n){var t=i(n,2),r=t[0],o=t[1];e[r]="."+String(o)}),e}e.a=r;var i=function(){function n(n,e){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){i=!0,o=n}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(n,e,t){"use strict";(function(n){function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var i=t(8),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=function(){function e(){r(this,e);var t=i.b.hamburger,o=i.b.navigation,a=i.b.layer;this.$hamburger=n(t),this.$navigation=n(o),this.$layer=n(a),this.$hamburger&&this.init()}return o(e,[{key:'init',value:function(){function n(){this.addEventListeners()}return n}()},{key:'destroy',value:function(){function e(){if(this.$hamburger){var e=i.a.isActive,t=i.a.noScroll;this.removeEventListeners(),this.$navigation.removeAttr('styles'),this.$hamburger.removeClass(e),n('body').removeClass(t)}}return e}()},{key:'addEventListeners',value:function(){function e(){var e=this,t=i.a.isActive,r=i.a.noScroll;this.$hamburger.add(this.$layer).click(function(i){i.stopPropagation(),e.$layer.toggle(),e.$navigation.toggle(),e.$hamburger.toggleClass(t),n('body').toggleClass(r)})}return e}()},{key:'removeEventListeners',value:function(){function n(){this.$hamburger.add(this.$layer).off('click')}return n}()}]),e}();e.a=a}).call(e,t(0))},function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var r=t(1),i={layer:'mainmenu-invisible-layer',navigation:'mainmenu-nav',hamburger:'mainmenu-hamburger',isActive:'is-active',noScroll:'no-scroll'},o=Object(r.a)(i)}],[2]);
//# sourceMappingURL=bundle.js.map