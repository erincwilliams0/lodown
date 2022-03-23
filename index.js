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
 * unique: Takes in an array and returns the array with all duplicate values removed.
 * 
 * @param {Array} arr: An array to loop through checking for duplicate values.
 * 
 * @return {Array}: Returns an array with all duplicate values removed.
 */
 function unique(arr){
    // create variable to hold output
    var output = [];
    // loop through arr, test if output includes arr[i], if not push array value to output
    for(let i = 0; i < arr.length; i++) {
        if(!output.includes(arr[i])) {
            output.push(arr[i])
        }
    }
    return output;
}
module.exports.unique = unique;

/**
 * filter: Takes in an Array and a test function to call on each value in the
 * Array. The test function returns a Boolean value, either true or false. The value's that pass the
 * function test are passed in to a new array to be returned.
 * 
 * @param {Array} arr: The array to filter through.
 * @param {function} action: The test to determine what values get filtered.
 * 
 * @return {Array}: Returns an array of all the values that passed the test function.
 */
 function filter(arr, action){
    // create output array
    var output = [];
    // loop through arr, test calling action on arr passing parameters arr[i], i, arr,
    for(let i = 0; i < arr.length; i++) { 
    //if true push to output arr
     if(action(arr[i], i, arr)) {
         output.push(arr[i])
     }
    }
    //return output
    return output;
 }
 module.exports.filter = filter;

 /**
  * reject: Takes in an array and a test function. The test function is called on each value in the
  * array and returns a boolean value, either true or false. The values that do not pass the test 
  * are passed into a new array to be returned.
  * 
  * @param {Array} arr: An array of values to filter through.
  * @param {function} action: A test function to call on the array's values and return a boolean.
  * 
  * @return {Array}: Returns all the values that did not pass the test function. This function
  * works as an inverse to filter.
  */
  function reject(arr, action){
    // copy exact same code for filter but add a bang operator in the conditional statement
     // create output array
   var output = [];
   // loop through arr, test calling action on arr passing parameters arr[i], i, arr,
   for(let i = 0; i < arr.length; i++) { 
   //if true push to output arr
    if(!action(arr[i], i, arr)) {
        output.push(arr[i])
    }
   }
   //return output
   return output;
}
module.exports.reject = reject;

/**
 * partition: Takes in an array and a test function. The test function is called on each value in the
 * array and returns a boolean. Each value is passed into one of two nested arrays inside an array. 
 * The values that return true are passed into the zero index array, and the values that returned false
 * are passed into the one index array.
 * 
 * @param {Array} arr: A collection of values.
 * @param {function} action: A test function that returns a boolean when called on each value in the
 * array.
 * 
 * @return {Array}: returns an array with two nested arrays inside. Each value that evaluates to true
 * is pushed into the first nested array, those that evaluate to false are pushed into the second nested array.
 */
function partition(arr, action){
    // create an output array with two nested arrays inside
    var output = [[],[]]
    // loop through array, test arr by calling action(arr[i], i, arr)
    for(let i = 0; i < arr.length; i++) {
    //if true push arr[i] into output[0]
    //if not push arr[i] into output[1]
        if(action(arr[i], i, arr)) {
            output[0].push(arr[i])
        } else {
            output[1].push(arr[i])
        }
    }
    // return output;
    return output;
}
module.exports.partition = partition;

/**
 * map: Takes in an Object or Array and a function. The function is called on each element in the
 * collection. Then a new collection is created with the values returned from the function.
 * 
 * @param {Array or Object} collection: The array or object containging values to pass to the function.
 * @param {function} action: A function that performs an operation on a value then returns the new value.
 * 
 * @return {Array or Object}: An array or Object containing the new values returned from the function.
 */
 function map(collect, action){
    // output array
    var output = [];
    // test collection for array or object
    if(Array.isArray(collect)) {
    // push the result of calling action on collection to output
        for(let i = 0; i < collect.length; i++) {
            output.push(action(collect[i], i, collect))
        }
    } else if(collect instanceof Object) {
        for(var key in collect) {
            output.push(action(collect[key], key, collect))
        }
    }
    // return output
    return output;
}
module.exports.map = map;

/**
 * pluck: Takes in an array of nested objects and a property representing a key. Searches through each 
 * object for the propety, if found the property value is passed into an array.
 * 
 * @param {Array} arr: An array of objects.
 * @param {String} prop: a string representing a key.
 * 
 * @return {Array}: Returns an array of values that were assigned to the input key contained in every
 * object in the array.
 */
function pluck(arr, prop){
    //output array
    var output = [];
    //loop through arr, push the value of prop to output for each iteration through array
    for(let i = 0; i < arr.length; i++) {
        output.push(arr[i][prop])
    } 
    return output;
}
module.exports.pluck = pluck;

/**
 * every: Takes in an array or object and a test function that returns a boolean. The test function
 * is called on every element but only returns true if all values pass the test, if any values do not
 * pass then a false boolean is returned.
 * 
 * @param {Array or Object} collect: The Array or Object containing values to be passed to a function.
 * @param {function} action: A test function that returns the boolean false if any values do not pass.
 * 
 * @return {Boolean}: If any values passed into the test function do not pass than the function returns 
 * false. If all values pass the function then the function returns true.
 */
function every(collect, action){
    //create variable to hold true output
    var output = true;
    // determine if collect is an array or object, loop through collect testing action on collect, if test results in false return false, else return output
    // determine if action is not a function, if not then determine each iteration if collect is truthy/falsy
    if(Array.isArray(collect)) {
        for(let i = 0; i < collect.length; i++) {
        if(!action){
            if(!collect[i]){
                return false;
            }
        } else if(!action(collect[i], i, collect)){
            return false;
        }
    }
    } else if(collect instanceof Object) {
     for(let key in collect){
        if(!action){
           if(!collect[key]){
            return false;
           }
       } else if(!action(collect[key], key, collect)){
        return false;
       }
    }
}
    return output;
}
module.exports.every = every;

/**
 * some: Takes in an array or object and a function test. The function is called on each value,
 * the first value that equates to true returns true. Only when each value passed to the test function 
 * equates to false, then false will be returned.
 *  
 * @param {Array or Object} collect: Stores values to be passed to the test function.
 * @param {function} action: A test function that will return true on the first occurance of a value 
 * equating to true.
 * 
 * @return {Boolean}: The test function will exit the entire function and return true on the first passed
 * occurance
 */
function some(collect, action){
    //determine if collect is an array or object, loop through collect calling action to test each iteration, 1st true result return true; else return false outside loops
    if(Array.isArray(collect)) {
        for(let i = 0; i < collect.length; i++){
            if(!action){
                if(collect[i]){
                    return true;
                }
            } else if(action(collect[i], i, collect)){
                return true;
            }
        }
    } else if(collect instanceof Object){
        for(let key in collect){
        if(!action){
            if(collect[key]){
                return true;
            }
        } else if(action(collect[key], key, collect)){
                return true;
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Takes in an Array, a function, and a seed. The function is called on each element in the 
 * array, then returns a value that is passed to the function when called on the following element.
 * The first time the function is called there is no returned value from the previous element, if a seed
 * is passed then that's the value that will be used. If no seed value is passed in then the zero index of
 * the array is used as the seed value and the function is called on the value in the first index.
 * 
 * @param {Array} arr: An array of values to be reduced.
 * @param {function} action: a function that returns a value to be passed in on the subsequent function
 * call.
 * @param {seed} seed: a value to be passed in to the function when calling on the zero index of the
 * array. 
 * 
 * @return {value}: Returns the reduced value which can be of a primitive or a complex data type.
 */
 function reduce(arr, action, seed){
    //console.log(seed);
    //console.log(action)
   if(seed === undefined) {
       seed = arr[0];
       for(let i = 1; i < arr.length; i++){
           seed = action(seed, arr[i], i);
       }
   } else {
       for(let i = 0; i < arr.length; i++){
           seed = action(seed, arr[i], i)
       }
   }
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Takes in multiple objects and passes all the key value pairs into a single object.
 * If a property already exist it is reassigned to last key/value pair passed in.
 * 
 * @param {Objects} ...inputs: Any number of objects.
 * 
 * @return {Object}: a single object containing properties from each object passed into the function.
 */
function extend(...inputs){
    var output = inputs[0]
    // loop through inputs, then for in loop through current index in inputs, assign for each key in index assign property to output object; return object
    for(let i = 0; i < inputs.length; i++){
        for(let key in inputs[i]){
            output[key] = inputs[i][key]
        }
        
    } 
    return output;
}
module.exports.extend = extend;