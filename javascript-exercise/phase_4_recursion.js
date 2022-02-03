/* 

Write the following functions:

range(start, end) - receives a start and end value, returns an array from start up to end

sumRec(arr) - receives an array of numbers and recursively sums them

exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent (base ^ exp)

*/

function range(start, end) {
    
    if (start === end) {
        return [start];
    } 
    let arr = range(start, end - 1);
    arr.push(end);
    return arr;
    
    
}

console.log(range(1, 4));