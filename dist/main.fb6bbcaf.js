// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"D:\\WEB\\FREELANCE PROJECT\\sn-euro\\img\\banner\\banner-3.jpg":[["banner-3.ad8146f3.jpg","img/banner/banner-3.jpg"],"img/banner/banner-3.jpg"],"D:\\WEB\\FREELANCE PROJECT\\sn-euro\\img\\banner\\banner-2.jpg":[["banner-2.0208122a.jpg","img/banner/banner-2.jpg"],"img/banner/banner-2.jpg"],"D:\\WEB\\FREELANCE PROJECT\\sn-euro\\img\\banner\\banner-4.jpg":[["banner-4.02e08529.jpg","img/banner/banner-4.jpg"],"img/banner/banner-4.jpg"],"D:\\WEB\\FREELANCE PROJECT\\sn-euro\\img\\bg-web-service.jpg":[["bg-web-service.7beb5666.jpg","img/bg-web-service.jpg"],"img/bg-web-service.jpg"],"_css_loader":"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./../scss/main.scss");

/*------------------------------------------------------------------
	BANNER: Image slider
-------------------------------------------------------------------*/
function slideControl1() {
  var slider = document.querySelector("#slider");
  slider.style.marginLeft = "-100%";

  function slideControl2() {
    var slider = document.querySelector("#slider");
    slider.style.marginLeft = "-200%";

    function slideControl0() {
      var slider = document.querySelector("#slider");
      slider.style.marginLeft = "0";
      setTimeout(slideControl1, 5000);
    }

    setTimeout(slideControl0, 5000);
  }

  setTimeout(slideControl2, 5000);
}

setTimeout(slideControl1, 5000);
/*------------------------------------------------------------------
	ABOUT US: Control toggle box
-------------------------------------------------------------------*/

function toggleAboutTxtBox() {
  var abtTextBox = document.querySelectorAll('.abt-box');

  var _loop = function _loop(i) {
    abtTextBox[i].addEventListener('click', function () {
      var expandAbtBox = document.querySelectorAll('.active-abt-box');

      if (expandAbtBox.length > 0) {
        expandAbtBox[0].className = expandAbtBox[0].className.replace("active-abt-box", "");
      }

      abtTextBox[i].classList.add('active-abt-box');
    });
  };

  for (var i = 0; i < abtTextBox.length; i++) {
    _loop(i);
  }
}

toggleAboutTxtBox();
/*------------------------------------------------------------------
	ANIMATION ON SCROLL 
-------------------------------------------------------------------*/
// Browser support for to requestAnimationFrame method

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.emRequestAnimationFrame || // for IE support
function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var showOnScroll = document.querySelectorAll('.visible-on-scroll');

function loopOnScroll() {
  // showOnScroll.forEach(e => {
  //   (isElementViewPort(e)) ? e.classList.add('visible'): e.classList.remove('visible');
  // })
  for (var i = 0; i < showOnScroll.length; i++) {
    isElementViewPort(showOnScroll[i]) ? showOnScroll[i].classList.add('visible') : showOnScroll[i].classList.remove('visible');
  }

  requestAnimationFrame(loopOnScroll);
}

loopOnScroll();

function isElementViewPort(e) {
  //Get the size (height, and width (x)) of an element and its position relative to the viewport :Y
  var rec = e.getBoundingClientRect();
  return rec.top <= 0 && rec.bottom >= 0 || rec.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rec.top <= (window.innerHeight || document.documentElement.clientHeight) || rec.top >= 0 && rec.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

;
/*------------------------------------------------------------------
	PARALLALX EFFECTS
-------------------------------------------------------------------*/

var navBar = document.getElementById('nav-bar');
var header = document.getElementById('header');
var webServices = document.getElementById("web-service");
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
window.addEventListener("scroll", function () {
  var yOffset = window.pageYOffset;
  var xOffset = window.pageXOffset; //section:: header

  yOffset <= 300 ? navBar.className = navBar.className.replace("scroll-fixed", "") : yOffset >= 300 ? navBar.classList.add("scroll-fixed") : "";
  yOffset <= 300 ? header.className = header.className.replace("header-display-non", "") : yOffset >= 300 ? header.classList.add("header-display-non") : ""; // section :: web-services
  //webServices.style.backgroundPositionY = `${yOffset * 0.2}px`;
});
/*------------------------------------------------------------------
	SMOOTH NAVIGATION
-------------------------------------------------------------------*/

var navLinks = document.querySelectorAll(".nav a");

var _loop2 = function _loop2(i) {
  navLinks[i].addEventListener("click", function (e) {
    // active navigation link
    var getActiveNavLink = document.querySelectorAll(".active-nav");
    getActiveNavLink.length > 0 ? getActiveNavLink[0].className = getActiveNavLink[0].className.replace("active-nav", "") : "";
    navLinks[i].classList.add("active-nav"); //Call smoothScroll function

    smoothScroll(e);
  });
};

for (var i = 0; i < navLinks.length; i++) {
  _loop2(i);
}

var goToNextPage = document.querySelectorAll(".go-to");

for (var _i = 0; _i < goToNextPage.length; _i++) {
  goToNextPage[_i].addEventListener("click", function (e) {
    smoothScroll(e);
  });
}

function smoothScroll(e) {
  e.preventDefault();
  var currentId = e.currentTarget.getAttribute("href") == "#" ? "header" : e.currentTarget.getAttribute("href"); //return distance of current element relative to the top of the offsetParent node

  var targetPosition = document.querySelector(currentId).offsetTop; // return the number of the pixels the document is currently scrolled along the vertical ais with a value of 0.0.

  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var durationTime = 1000;
  var start = null;
  requestAnimationFrame(step); //console.log(requestAnimationFrame(step))

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start; //window.scrollTo(0, distance * (progress / durationTime) + startPosition);

    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, durationTime));
    if (progress < durationTime) window.requestAnimationFrame(step);
  }
} // easing function

/** cubic easing in/out - acceleration until halfway, then deceleration
Source::http: //gizma.com/easing/  ***/


function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

;
/*------------------------------------------------------------------
	RESPONSIVE HEADER NAVIGATION
-------------------------------------------------------------------*/

var getNavigation = document.querySelector('.nav');
var getResponsiveNavTriggerBtn = document.getElementById('responsive-nav-trigger-btn');
getResponsiveNavTriggerBtn.addEventListener('click', function () {
  getResponsiveNavTriggerBtn.classList.toggle('active-trigger-btn');
  getNavigation.classList.toggle('show-nav');
  setTimeout(function () {
    var getNavLink = document.querySelectorAll('.show-nav a');

    for (var _i2 = 0; _i2 < getNavLink.length; _i2++) {
      getNavLink[_i2].addEventListener('click', function () {
        getNavigation.className = getNavigation.className.replace('show-nav', "");
        getResponsiveNavTriggerBtn.className = getResponsiveNavTriggerBtn.className.replace('active-trigger-btn', "");
      });
    }
  }, 1000);
});
},{"./../scss/main.scss":"scss/main.scss"}],"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59824" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map