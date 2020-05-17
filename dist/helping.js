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

export { each, empty };
//# sourceMappingURL=helping.js.map
