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
})({"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.each = each;

/**
 * Check if a variable|array|object|etc is empty|null|undefined|etc. 
 * A full list of what this function considers to be null can be seen in the tests of the Helping project.
 * 
 * @param {(*)} value
 * @return {boolean} A boolean that states if the parsed in value is considered empty.
 */
function empty(value) {
  // If any of these return true this function returns true.
  return (// Null or undefined.
    value == null || // Length is zero && it's not a function.
    value.length === 0 && typeof value !== "function" || // Is an Object && is empty. Just detects: {}
    value.constructor === Object && Object.keys(value).length === 0 || // Check if a Set() or Map() is empty
    value.size === 0 || // Check if NaN - The only JavaScript value that is unequal to itself.
    value !== value
  );
}
/**
 * Iterate over an Object|Array and return the key and value of each property. 
 * - Doesn't iterate over prototypes.
 * - Loops can be broken with "return false".
 * 
 * This was developed to overcome some of the shortcomings of other methods: https://codepen.io/SeanBannister/pen/qOoLrm
 * 
 * This code is a modified version of jQuery 3.5.0's $.each
 * 
 * @license MIT Copyright JS Foundation and other contributors, https://js.foundation/
 *
 * @param {(Object|Array)} obj An object we'll iterate over.
 * @param {function(number|string, *)} callback Returns a key (index) and a value.
 */


function each(obj, callback) {
  var length,
      i = 0; // If obj is an array
  // Note: The function from the jquery library originally had their own isArrayLike function here, I couldn't
  //       get the extracted version working as expected so I'm using .isArray as I believe it will meet our needs.

  if (Array.isArray(obj)) {
    length = obj.length;

    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  } // If obj is a javascript object
  else {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
    }

  return obj;
}
},{}]},{},["Focm"], null)
//# sourceMappingURL=/helping.js.map