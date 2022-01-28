/**  Write a method, adultInGroup(people), that accepts an array containing people.
# The method should return true if there is at least 1 person with an age of 18 or greater.
# The method should return false otherwise. */

const people_1 = [
    {name: "Jack", age: 17},
    {name: "Jill", age: 21},
    {name: "Alice", age: 15},
    {name: "Bob", age: 16}
]

const people_2 = [
    {name: "Jane", age: 12},
    {name: "John", age: 13},
    {name: "Ashley", age: 10},
    {name: "Bill", age: 16}
]

function adultInGroup(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 18 ) {
            return true;
        }
    }
    return false;
}

console.log(adultInGroup(people_2));