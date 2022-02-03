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

function sumRec(arr) {
    let sum = 0;
    if (arr.length === 1) {
        return arr[0];
    }
    sum += sumRec(arr.slice(1)) + arr[0];
    return sum;
}

console.log(sumRec([1, 2, 3, 4]));