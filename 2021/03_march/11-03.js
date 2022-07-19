//1
//Write a small function that returns the values of an array that are not odd.
//All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
    return values.filter(item => item % 2 == 0);
}
console.log(noOdds([0, 1, 2, 3, 4, 5, 6, 7])) //[ 0, 2, 4, 6 ]

//2
//simply tranform an array into a string
function transform(array) {
    return array.map(el => `${el}`).join('')
}

console.log(transform([4, -56, true, "box"])) // "4-56truebox'
console.log(transform([0, null, null])) //'0nullnull'

