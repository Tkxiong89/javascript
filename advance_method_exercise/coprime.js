/** # Write a method, coprime(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime(25, 12) is true because
# 1 is the only number that divides both 25 and 12. **/

function coPrime(num_1, num_2) {
    // loops through highest number in argument
    let max = num_1 > num_2 ? num_1 : num_2;
    for (let i = 2; i < max; i++) {
        if ( num_1 % i === 0 && num_2 % i === 0) {
            return false;
        }
    }
    return true;
}



console.log(coPrime(25, 12));    // => true
console.log(coPrime(7, 11));     // => true
console.log(coPrime(30, 9));     // => false
console.log(coPrime(6, 24));     // => false
