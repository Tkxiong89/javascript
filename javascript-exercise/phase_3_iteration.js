/* 
Write the following functions:

Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm

String#substrings - receives a string, returns an array of all substrings  */

Array.prototype.bubbleSort = function() {
    let sort = false;
    let array = this;
    while (!sort) {
      
        sort = true;

        for(let i = 0; i < array.length-1; i++) {
           
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = false;
            }
        }
    }
    return array;
}

String.prototype.substrings = function() {

    let arr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (!arr.includes(this[i] + this[j])) {
                arr.push(this[i] + this[j]);
            }
        }
    }
    return arr;
}

console.log("hello".substrings());

