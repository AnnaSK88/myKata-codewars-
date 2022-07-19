//1
//I created this function to add five to any number that was passed in to it and return the new value.
// It doesn't throw any errors but it returns the wrong number.
//Can you help me fix the function?
// function addFive(num) {
//   var total = num + 5
//   return num
// }

function addFive(num) {
    var total = num + 5
    return total
}

function addFive(num) {
    return num + 5
}

console.log(addFive(5)) //10

//2
//Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
        .map((v, i, arr) => (arr[i - 1]) - v || 0).reduce((a, b) => a + b)
}
console.log(sumOfDifferences([2, 1, 10])) //9

//3
//Create a function that converts US dollars (USD) 
//to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    return (usd * 6.75).toFixed(2) + " Chinese Yuan"
}
console.log(usdcny(15)) // => '101.25 Chinese Yuan'
console.log(usdcny(465)) // => '3138.75 Chinese Yuan'
console.log(usdcny(12)) //81.00

//4
//Create a function that takes 2 positive integers in form 
//of a string as an input, and outputs the sum (also as a string):

function sumStr(a, b) {
    return (Number(a) + Number(b)).toString()
}
console.log(sumStr("4", "5")) // should output "9"
console.log(sumStr("34", "5")) //'39"