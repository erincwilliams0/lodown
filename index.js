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