//1
//Given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and the negatives become positives.
function invert(array) {
    return array.map(el => el === 0 ? -el : el)
}
// console.log(invert([1, 2, -3, -4])) //[-1,-2,3,4]
// console.log(invert([])) //[]
// console.log(invert([0])) //[0]

//2
//In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function makeNegative(num) {

    return num > 0 ? -num : num
}

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)) // return -5
console.log(makeNegative(0)) // return 0


//3
//Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
    let a = Math.ceil(weight / (height * height))
    if (a <= 18.5) {
        return "Underweight"
    }
    if (a <= 25.0) {
        return "Normal"
    }
    if (a <= 30.0) {
        return "Overweight"
    }
    if (a > 30) {
        return "Obese"
    }
}

// function bmi(weight, height) {
//     let a = Math.ceil(weight / (height * height))
//     return (a <= 18.5) ? "Underweight" : (a <= 25.0) ? "Normal" :
//         (a <= 30.0) ? "Overweight" : (a > 30.0) ? "Obese" : a
// }

console.log(bmi(80, 1.80))
console.log(bmi(160, 1.80))


//4
//Your task is to calculate how many blank pages do you need. 
//If n < 0 or m < 0 return 0.

function paperwork(n, m) {

    return (n < 0 || m < 0) ? 0 : (n * m)
}
console.log(paperwork(5, 5)) //25
console.log(paperwork(-5, 5)) //0
console.log(paperwork(-5, -5)) //0

//5
//1
//Make a function that returns the value multiplied by 50 and increased by 6. 
//If the value entered is a string it should return "Error".
function problem(x) {
    return x = String() ? x = 'Error' : (x * 50 + 6)
}

console.log(problem(1)) //56
console.log(problem('hei')) // nan