// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"js\\highlightError.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
exports.highlightError = function () {
    var targetInp = document.activeElement;
    var targetElName = document.activeElement.name;
    var ErrorMsgDiv = document.getElementById(targetElName);
    targetInp.classList.add("error");
    ErrorMsgDiv.style.visibility = "visible";
    targetInp.blur();
};
},{}],"js\\checkInputs.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var highlightError_1 = require("./highlightError");
//проверка инпутов (имя, фамилия, пароль)
exports.checkInputs = function (inputToCheck, regex) {
    var checkRes = regex.test(inputToCheck.value);
    if (!checkRes) {
        inputToCheck.focus();
        highlightError_1.highlightError();
        return checkRes;
    }
    return checkRes;
};
},{"./highlightError":"js\\highlightError.js"}],"js\\removeHighlightedError.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
exports.removeHighlightedError = function () {
    var targetInp = document.activeElement;
    var targetElName = document.activeElement.name;
    var ErrorMsgDiv = document.getElementById(targetElName);
    targetInp.classList.remove("error");
    ErrorMsgDiv.style.visibility = "hidden";
};
},{}],"js\\validPass.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var highlightError_1 = require("./highlightError");
//проверка поля с подтверждением пароля на соответствие паролю
exports.validPass = function (passField, valPassField) {
    var val_passCheckRes = valPassField.value === passField.value;
    if (!val_passCheckRes) {
        valPassField.focus();
        highlightError_1.highlightError();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};
},{"./highlightError":"js\\highlightError.js"}],"js\\togglePass.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//открывает и закрывает пароль
exports.togglePass = function (passwordInput) {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
};
},{}],"js\\removeForm.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//удаление формы
exports.removeForm = function () {
    var wrapper = document.getElementById("wrapper");
    wrapper.remove();
};
},{}],"js\\createReg.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//создает приветствие в случае успешной регистрации
exports.createReg = function () {
    var registered = document.createElement("div");
    var regText = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};
},{}],"js\\clearForm.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
//очистка формы
exports.clearForm = function () {
    var form = document.forms[0];
    var inputs = document.querySelectorAll("input.input, input.error");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    var hiddenDivs = document.getElementsByClassName("er_group");
    for (var k = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};
},{}],"js\\regexps.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var nameRegexp = /^[^\s]+$/;
exports.nameRegexp = nameRegexp;
var emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
exports.emailRegexp = emailRegexp;
var passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
exports.passRegexp = passRegexp;
},{}],"js\\main.js":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var checkInputs_1 = require("./checkInputs");
var removeHighlightedError_1 = require("./removeHighlightedError");
var validPass_1 = require("./validPass");
var togglePass_1 = require("./togglePass");
var removeForm_1 = require("./removeForm");
var createReg_1 = require("./createReg");
var clearForm_1 = require("./clearForm");
var regexps_1 = require("./regexps");
var regexps_2 = require("./regexps");
var regexps_3 = require("./regexps");
//валидация формы
var validateForm = function validateForm(evt) {
    evt.preventDefault();
    var fName = checkInputs_1.checkInputs(document.getElementById('f_name'), regexps_1.nameRegexp),
        sName = checkInputs_1.checkInputs(document.getElementById('s_name'), regexps_1.nameRegexp),
        mail = checkInputs_1.checkInputs(document.getElementById('mail'), regexps_2.emailRegexp),
        pass = checkInputs_1.checkInputs(document.getElementById('psw'), regexps_3.passRegexp),
        v_pass = validPass_1.validPass(document.getElementById('psw'), document.getElementById('valpsw'));
    if (fName && sName && mail && pass && v_pass) {
        removeForm_1.removeForm();
        createReg_1.createReg();
    }
};
var submitForm = document.getElementById('sbm');
submitForm.addEventListener('click', validateForm);
var resetForm = document.getElementById('rst');
resetForm.addEventListener('click', clearForm_1.clearForm);
var showPass = document.getElementById('check1');
showPass.addEventListener('click', function () {
    return togglePass_1.togglePass(document.getElementById('psw'));
});
var showValPass = document.getElementById('check2');
showValPass.addEventListener('click', function () {
    return togglePass_1.togglePass(document.getElementById('valpsw'));
});
var form = document.forms[0];
form.addEventListener('keypress', removeHighlightedError_1.removeHighlightedError);
},{"./checkInputs":"js\\checkInputs.js","./removeHighlightedError":"js\\removeHighlightedError.js","./validPass":"js\\validPass.js","./togglePass":"js\\togglePass.js","./removeForm":"js\\removeForm.js","./createReg":"js\\createReg.js","./clearForm":"js\\clearForm.js","./regexps":"js\\regexps.js"}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52919' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","js\\main.js"], null)
//# sourceMappingURL=/main.f1ab8913.map