'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. 
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Returns a value
 * 
 * @param {Value} value: The value that is returned by the function.
 * @return {Value}: the given value that the function returns.
 */
 _.identity = function(value) {
    return value;
}
module.exports.identity = identity; 

/**
 * typeOf: takes in a value and returns a string indicating the values type.
 * 
 * @param {Value} value: any primitive value type, object, or function.
 * 
 * @return {String}: returns a string of the give value's data type
 */
 function typeOf(value){
    if(typeof value === 'string') {
        return "string";
    } else if(typeof value === 'boolean') {
        return "boolean"
    } else if(Array.isArray(value)) {
        return "array"
    } else if(typeof value === 'number') {
        return "number";
    } else if(value === null) {
        return "null";
    } else if(value instanceof Date) {
        return "date"
    } else if(typeof value === 'function') {
        return "function"
    } else if(value === undefined) {
        return "undefined"
    } else {
        return "object"
    }
}
module.exports.typeOf = typeOf;

/**
 * first: takes an array and a number as arguments, then returns the number of elements in array
 * starting from the beginning of the array.
 * 
 * @param {Array} arr: the array from which a certain number of elements starting from the zero index
 * to return. If no array is passed then an empty array is returned.
 * @param {Number} num: A number indicating how many elements to return from our array. If no number
 * is passed in then only the zero index is returned. If the number exceeds the
 * length of the array then the entire array is returned. Lastly if the number is a negative integer
 * then an empty array is returned.
 * 
 * @return {Value or Array}: The number of first elements are returned either as a single value or an 
 * array. If no number or array are passed in then an empty array is returned.
 */
 function first(arr, num) {
    var output = [];
     // using if statements test arr parameter to see if its an array, if not return an empty array
     //next test num parameter, if num is nan or undefined return zero index of array, if num is a negative number return empty array, if number is greater than array length return arr
     if(!Array.isArray(arr) || num < 0) {
         return [];
     } else if(num === undefined || num === NaN) {
         return arr[0];
     } else if(num > arr.length) {
         return arr;
     } else {
         for(let i = 0; i < arr.length; i++) {
             if(num > 0) {
                 output.push(arr[i]);
                 num--;
             }
         }
     }
     return output;
 }
 module.exports.first = first;

 /**
  * last: Takes in an array and a number of elements to be returned starting from the end of our array.
  * Does not return the array elements in reverse order of input array.
  * 
  * @param {Array} arr: An array of elements to be returned, starting from the end of the array. If no
  * array is given than an empty array is returned.
  * @param {Number} num: A number indicating how many elements to be returned. If no number is given 
  * then only the last element will be returned. If the number is negative an empty array will be 
  * returned and if the number exceeds the array length then the entire array will be returned
  * 
  * @return {Value or Array}: the last element of the input array is returned. If number parameter is 
  * greater than one then that amount will be returned from the array starting at the end of the array. 
  * While this function starts its return from the last values of the array it does not return these 
  * elements in a different order. Lastly If no array is passed in or the number is a negative integer
  * then an empty array will be returned.
  */
  function last(arr, num){
    // create output array
    var output = [];
    //test arr and num parameters, if arr is not an array or num is a negative number return [], if num is undefined or nan return last index of arr, if num > arr.length return arr
    if(!Array.isArray(arr) || num < 0) {
        return [];
    } else if(num === undefined || num === NaN) {
        return arr[arr.length - 1];
    } else {
    // otherwise loop through arr backwards then using unshift input each index while num > 0
    for(let i = arr.length - 1; i >= 0; i--) {
        if(num > 0) {
            output.unshift(arr[i]);
            num--;
        }

    }
    }
    return output;
}
module.exports.last = last;

/**
 * indexOf: Takes in an array and a value and returns the index where value first Occurs in the array. 
 * 
 * @param {Array} arr: The array in which we look for the given value. If the array does not contain
 * the input value than negative one is returned.
 * @param {Value} value: The value searched for in the array.
 * 
 * @return {Number}: The index where the value was located inside the array. If the value is not 
 * contained inside the array than negative one will be returned instead.
 */
 function indexOf(arr, value){
    //for loop through arr, test each index === value, return value when found,  return -1 outside loop if value is not found
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
};
module.exports.indexOf = indexOf;

/**
 * contains: Takes an array and a value and returns true if the array contains value, returns false
 * otherwise.
 * 
 * @param {Array} arr: The array tested to determine whether it contains a value.
 * @param {Value} value: The value searched for in the array. If no value is given then a false
 * boolean is returned
 * 
 * @return {Boolean}: If the array is determined to contain the value then the function returns true. 
 * Returns false if the value is not contained in the array, or if no value is given.
 */
 function contains(arr, value){
    // using ternary operator test if arr includes value, return true or false
    if(value === undefined) {
        return false;
    }
    return arr.includes(value) ? true : false;   
}
module.exports.contains = contains;

/**
 * 
 * 
 * 
 */