//1Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.

var summation = function(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum
}
console.log(summation(1)) //1
console.log(summation(8)) //36

// function summation(num) {
//     return num * (num + 1) / 2
// }

//2Complete the solution so that it reverses the string passed into it.
function solution(str) {
    return str.split('').reverse().join('')
}
console.log(solution('world')) //'dlrow

//3Given a non-empty array of integers, 
//return the result of multiplying the values together in order.
function grow(x) {
    return x.reduce((x, y) => x * y)
}
console.log(grow([1, 2, 3])) //, 6);
console.log(grow([4, 1, 1, 1, 4])) //, 16);

//4Given an array of integers, return a new array with each value doubled.
function maps(x) {
    return x.map(el => el * 2)
}
console.log(maps([1, 2, 3])) //[2,4,6]