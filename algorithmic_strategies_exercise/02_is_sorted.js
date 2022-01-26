/* Write a method, is_sorted(arr), that accepts an array of numbers as an arg.
  The method should return true if the elements are in increasing order, false otherwise. */

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if ( array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 4, 10, 13, 15]));     // => true
console.log(isSorted([1, 4, 10, 10, 13, 15]));   // => true
console.log(isSorted([1, 2, 5, 3, 4 ]));        // => false
