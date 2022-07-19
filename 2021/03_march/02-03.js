//1
// Return the odds from a list

function odds(values) {
    return values.filter(val => val % 2)
}

console.log(odds([1, 3, 4, 5, 6, 7, 8])) //[1,3,5,7]
console.log(odds([])) //[]


//2
//Ask a small girl - "How old are you?". 
//For correct answer program should return int from 0 to 9.
//Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. 
//The first char is number only.

function getAge(inputString) {
    return Number(inputString.split('').shift())
}

function getAge(inputString) {
    return parseInt(inputString);
}
console.log(getAge("4 years old")) //4


//3
//Create a function that returns the CSV representation of a two-dimensional numeric array.
function toCsvText(array) {
    return array.reduce(function(a, b) {
        return a.concat(b);
    }, '');

}

console.log(toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]))


//4 
//You are given an array with positive numbers and a non-negative number N.
// You should find the N-th power of the element in the array with the index N. 
//If N is outside of the array, then return -1. 
//Don't forget that the first element has the index 0.

function index(array, n) {
    return array.length > n ? Math.pow(array[+n], n) : -1
}

console.log(index([1, 2, 3, 4], 2)) //9
console.log(index([1, 3, 10, 100], 3)) //1000000
console.log(index([1, 2], 3)) //-1