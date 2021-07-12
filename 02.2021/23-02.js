//1 Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let sum = 40 * d
    if (d >= 7) { return (sum - 50) }
    if (d >= 3) { return (sum - 20) } else { return (sum) }
    return sum
}

function rentalCarCost(d) {
    let sum = 40 * d
    return (d >= 7) ? (sum - 50) : (d >= 3) ? (sum - 20) : (sum)
}

console.log(rentalCarCost(8))
console.log(rentalCarCost(3))
console.log(rentalCarCost(2))

//2 The first century spans from the year 1 up to and including the year 100, 
//The second - from the year 101 up to and including the year 200, etc.

function century(year) {

    return Math.ceil(year / 100);
}
console.log(century(2020)) //21
console.log(century(1854)) //19
console.log(century(89)) //1

//3 This is the first step to understanding FizzBuzz.
//Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
//Your expected output is an array of positive integers from 1 to n (inclusive).
//Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr
}
console.log(preFizz(1)) //[1]
console.log(preFizz(3)) //[1,2,3]
console.log(preFizz(11)) //[1,2,3,4,5,6,7,8...11]