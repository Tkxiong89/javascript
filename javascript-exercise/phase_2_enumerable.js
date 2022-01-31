/** Again, monkey-patch the following methods to the Array class using swell new language we've been learning.

Array#myEach(callback) - receives a callback function and executes the callback for each element in the array

Note that JavaScript's forEach function has no return value (returns undefined)

Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
should use myEach and a closure

Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

initialValue is optional and should default to the first element of the array if not provided */

Array.prototype.myEach = function(callBackfn) {

    for (let i = 0; i < this.length; i++ ) {
        callBackfn(this[i]);
    }
};

Array.prototype.myMap = function(callBackfn) {
    // initialize arr
    let arr = [];

    // this = array of preceding function [1, 2, 3, 4, 5, 6].myMap
    
    this.myEach((el)=> {        // use myEach on 'this'(array) accepting an arrow function as a callback, passing another callback fn from myMap parameter into arr.push
        arr.push(callBackfn(el))
    });

    return arr;
};

let a = [1, 2, 3, 4, 5, 6].myMap( function(el) {
    return el *= 2;
});

