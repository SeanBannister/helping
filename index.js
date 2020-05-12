/**
 * Check if a variable|array|object|etc is empty|null|undefined|etc. 
 * A full list of what this function considers to be null can be seen in the tests of the Helping project.
 * 
 * @param {*} value
 * @return {boolean} A boolean that states if the parsed in value is considered empty.
 */
export function empty(value) {
  // If any of these return true this function returns true.
  return (
    // Null or undefined.
    value == null ||
    // Length is zero && it's not a function.
    (value.length === 0 && typeof value !== "function") ||
    // Is an Object && is empty. Just detects: {}
    (value.constructor === Object && Object.keys(value).length === 0) ||
    // Check if a Set() or Map() is empty
    value.size === 0 ||
    // Check if NaN - The only JavaScript value that is unequal to itself.
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
export function each(obj, callback) {
  var length, i = 0;
  
  // If obj is an array
  // Note: The function from the jquery library originally had their own isArrayLike function here, I couldn't
  //       get the extracted version working as expected so I'm using .isArray as I believe it will meet our needs.
  if (Array.isArray(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  }
  // If obj is a javascript object
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