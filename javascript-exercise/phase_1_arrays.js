// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.

// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array
// ([1,2,2,3,3,3].uniq() => [1,2,3])

// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

Array.prototype.uniq = function() {
    let arr = [];
    this.forEach( (n)=> {
        if (!arr.includes(n)) {
            arr.push(n);
        }
    });
    return arr;
};


Array.prototype.twoSums = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[i] + this[j] === 0 && j > i) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    console.log(arr);
};

[1, -7, 2, 7, -2].twoSums();