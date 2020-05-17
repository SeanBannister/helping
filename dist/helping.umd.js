(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.helping = {}));
}(this, (function (exports) {
  function empty(value) {
    return value == null || value.length === 0 && typeof value !== "function" || value.constructor === Object && Object.keys(value).length === 0 || value.size === 0 || value !== value;
  }
  function each(obj, callback) {
    var length,
        i = 0;

    if (Array.isArray(obj)) {
      length = obj.length;

      for (; i < length; i++) {
        if (callback.call(obj[i], i, obj[i]) === false) {
          break;
        }
      }
    } else {
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

  exports.each = each;
  exports.empty = empty;

})));
//# sourceMappingURL=helping.umd.js.map
