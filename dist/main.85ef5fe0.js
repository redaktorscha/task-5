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
})({"src\\refresh.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//при нажатии на клавишу, когда поле формы заполняется, подсветка и надпись пропадают
var refresh = exports.refresh = function refresh() {
    var targetInp = document.activeElement;
    var targetEl = document.activeElement.name;
    var hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.remove("error");
    hiddenDiv.style.visibility = "hidden";
};
},{}],"src\\error.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//подсвечивает неправильно заполненное поле формы, показывает скрытую надпись слева
var error = exports.error = function error() {
    var targetInp = document.activeElement;
    var targetEl = document.activeElement.name;
    var hiddenDiv = document.getElementById(targetEl);
    targetInp.classList.add("error");
    hiddenDiv.style.visibility = "visible";
    targetInp.blur();
};
},{}],"src\\name.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkName = undefined;

var _error = require("./error");

//проверка поля с именем
var checkName = exports.checkName = function checkName() {
    var form = document.forms[0];
    var firstName = form.elements[0];
    var firstNameRegexp = /^[^\s]+$/;
    var firstNameCheckRes = firstNameRegexp.test(firstName.value);
    if (!firstNameCheckRes) {
        firstName.focus();
        (0, _error.error)();
        return firstNameCheckRes;
    }
    return firstNameCheckRes;
};
},{"./error":"src\\error.ts"}],"src\\surname.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkSurname = undefined;

var _error = require("./error");

//проверка поля с фамилией
var checkSurname = exports.checkSurname = function checkSurname() {
    var form = document.forms[0];
    var surname = form.elements[1];
    var surnameRegexp = /^[^\s]+$/;
    var surnameCheckRes = surnameRegexp.test(surname.value);
    if (!surnameCheckRes) {
        surname.focus();
        (0, _error.error)();
        return surnameCheckRes;
    }
    return surnameCheckRes;
};
},{"./error":"src\\error.ts"}],"src\\mail.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkMail = undefined;

var _error = require("./error");

//проверка поля с имейлом
var checkMail = exports.checkMail = function checkMail() {
    var form = document.forms[0];
    var email = form.elements[2];
    var emailRegexp = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$/;
    var mailCheckRes = emailRegexp.test(email.value);
    if (!mailCheckRes) {
        email.focus();
        (0, _error.error)();
        return mailCheckRes;
    }
    return mailCheckRes;
};
},{"./error":"src\\error.ts"}],"src\\pass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkPass = undefined;

var _error = require("./error");

//проверка поля с паролем
var checkPass = exports.checkPass = function checkPass() {
    var form = document.forms[0];
    var password = form.elements[3];
    var passRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]{8,}$/;
    var passCheckRes = passRegexp.test(password.value);
    if (!passCheckRes) {
        password.focus();
        (0, _error.error)();
        return passCheckRes;
    }
    return passCheckRes;
};
},{"./error":"src\\error.ts"}],"src\\v_pass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validPass = undefined;

var _error = require("./error");

//проверка поля с подтверждением пароля
var validPass = exports.validPass = function validPass() {
    var form = document.forms[0];
    var password = form.elements[3];
    var val_pass = form.elements[5];
    var val_passCheckRes = val_pass.value === password.value;
    if (!val_passCheckRes) {
        val_pass.focus();
        (0, _error.error)();
        return val_passCheckRes;
    }
    return val_passCheckRes;
};
},{"./error":"src\\error.ts"}],"src\\toggle_pass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//открывает и закрывает пароль
var togglePass = exports.togglePass = function togglePass() {
    var form = document.forms[0];
    var password = form.elements[3];
    password.type === "password" ? password.type = "text" : password.type = "password";
};
},{}],"src\\toggle_v_pass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//открывает и закрывает подтверждение пароля
var toggleValPass = exports.toggleValPass = function toggleValPass() {
    var form = document.forms[0];
    var val_pass = form.elements[5];
    val_pass.type === "password" ? val_pass.type = "text" : val_pass.type = "password";
};
},{}],"src\\remove.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//удаление формы
var removeForm = exports.removeForm = function removeForm() {
    var wrapper = document.getElementById("wrapper");
    wrapper.remove();
};
},{}],"src\\create.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//создает приветствие в случае успешной регистрации
var createReg = exports.createReg = function createReg() {
    var registered = document.createElement("div");
    var regText = document.createTextNode("Спасибо за регистрацию :-)");
    registered.classList.add("wrapper-reg");
    registered.appendChild(regText);
    document.body.appendChild(registered);
};
},{}],"src\\clear.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//очистка формы
var clearForm = exports.clearForm = function clearForm() {
    var form = document.forms[0];
    var inputs = document.querySelectorAll("input.input, input.error");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("error");
    }
    var hiddenDivs = document.querySelectorAll("er_group");
    for (var k = 0; k < hiddenDivs.length; k++) {
        hiddenDivs[k].style.visibility = "hidden";
    }
};
},{}],"src\\main.ts":[function(require,module,exports) {
'use strict';

var _refresh = require('./refresh');

var _name = require('./name');

var _surname = require('./surname');

var _mail = require('./mail');

var _pass = require('./pass');

var _v_pass = require('./v_pass');

var _toggle_pass = require('./toggle_pass');

var _toggle_v_pass = require('./toggle_v_pass');

var _remove = require('./remove');

var _create = require('./create');

var _clear = require('./clear');

//проверка полей формы
var checkInputs = function checkInputs(evt) {
    evt.preventDefault();
    var name = (0, _name.checkName)(),
        surname = (0, _surname.checkSurname)(),
        email = (0, _mail.checkMail)(),
        pass = (0, _pass.checkPass)(),
        v_pass = (0, _v_pass.validPass)();
    if (name && surname && email && pass && v_pass) {
        (0, _remove.removeForm)();
        (0, _create.createReg)();
    }
};
var submit = document.getElementById("submit");
submit.addEventListener("click", checkInputs);
var reset = document.getElementById("reset");
reset.addEventListener("click", _clear.clearForm);
var showPass = document.getElementById("check1");
showPass.addEventListener("click", _toggle_pass.togglePass);
var showValPass = document.getElementById("check2");
showValPass.addEventListener("click", _toggle_v_pass.toggleValPass);
var form = document.forms[0];
form.addEventListener("keypress", _refresh.refresh);
},{"./refresh":"src\\refresh.ts","./name":"src\\name.ts","./surname":"src\\surname.ts","./mail":"src\\mail.ts","./pass":"src\\pass.ts","./v_pass":"src\\v_pass.ts","./toggle_pass":"src\\toggle_pass.ts","./toggle_v_pass":"src\\toggle_v_pass.ts","./remove":"src\\remove.ts","./create":"src\\create.ts","./clear":"src\\clear.ts"}],"..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49242' + '/');
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
},{}]},{},["..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","src\\main.ts"], null)
//# sourceMappingURL=/main.85ef5fe0.map