//13/02/2023
//1
//Sum of Minimums! https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
    return arr.map((i, index, ar) => i = Math.min(...ar[index])).reduce((a, b) => a + b)


}

//console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

//2
//Simple string characters 
//https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
function solve(s) {
    let upper = s.match(/[A-Z]/g)
    let low = s.match(/[a-z]/g)
    let num = s.match(/[0-9]/g)
    let other = s.match(/[\-\(\)\.\^\+<>]/g)


    return (s == "") ? [0, 0, 0, 0] : [upper.length, low.length, num.length, other.length]
}

// console.log(solve(""))//,[0,0,0,0]);)
// console.log(solve("bgA5<1d-tOwUZTS8yQ"))//,[7,6,3,2]

//15.02.20223
//1
//Find Nearest square number
function nearestSq(n) {
    return Math.pow((Math.round(Math.sqrt(n))), 2);
}
//console.log(nearestSq(111))

//2
//Square(n) Sum
function squareSum(numbers) {
    return (numbers.length === 0) ? 0 : numbers.map((i) => i *= i).reduce((a, b) => a + b);
}
// console.log(squareSum([1,2]))
// console.log(squareSum([]))

//3
//https://www.codewars.com/kata/567610d21541a88876000024/train/javascript
function thetaFormula(radius, arc, angle) {
  let r = Number.isInteger(arc/angle)
    if ((typeof radius === "string") && (typeof arc === "string") && (typeof angle === "string")) return null
    if (radius == "?") return (arc/angle);
    if (arc == "?") return (radius * angle);
    if (angle == "?") return Number((arc / radius).toFixed(3));
    if ((typeof radius === "number") && (typeof arc === "number") && (typeof angle === "number")) return ((arc / radius) == angle)
   
    return null;
   
}

// console.log(thetaFormula(3, 1))//, null)
// console.log(thetaFormula("?", "?", "?"))//, null)
// console.log(thetaFormula(92, 6, "?"))//, 0.065)
// console.log(thetaFormula(26, "?", 4))//, 104)
// console.log(thetaFormula("?", 40, 10))//, 4)
// console.log(thetaFormula(8, "?", 7))//, 56)
// // console.log(thetaFormula(-4, 4, -4))//, false)
// // console.log(thetaFormula(1, 10, 10))//, true))
// console.log(Number.isInteger(2/4))

//20/02/2023
//1
//https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript

function noIfsNoButs(a, b) {
    return 'a is greater than b';
  }

  console.log( doTest(45, 51))//, "45 is smaller than 51");
  console.log(doTest(1, 2))//, "1 is smaller than 2");
  console.log(doTest(1, 1))//, "1 is equal to 1");
  console.log(doTest(100, 80))//, "100 is greater than 80");
