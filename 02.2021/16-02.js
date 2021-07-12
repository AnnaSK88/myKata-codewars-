// Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number.
// Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

var maxRedigit = function(num) {
    if (num <= 99 || num >= 1000) {
        return null
    } else {
        return Number(num.toString().split('').map(Number).sort((a, b) => b - a).join(''))
    }
}

console.log(maxRedigit(12)) //null
console.log(maxRedigit(123)) //321
console.log(maxRedigit(-123)) // null
console.log(maxRedigit(1237)) //null