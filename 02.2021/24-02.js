//1 Create a function that gives a personalized greeting. 
//This function takes two parameters: name and owner.
function greet(name, owner) {

    return (name === owner) ? 'Hello boss' : 'Hello guest'
}
console.log(greet('Daniel', 'Daniel')) // 'Hello boss'
console.log(greet('Greg', 'Daniel')) // 'Hello guest'

//2
// Write here your multiply-function
function multiply(a, b) {
    return a * b;
}

// 3
//Write a function,/ GooseFilter, that takes an array of strings as an argument 
//and returns a filtered array containing the same elements but with the 'geese' removed.

//  24



//4
//Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
//var a == "dev' var b == "Lab" var name == a + b
var a = "dev"
var b = "Lab"

var names = a + b
console.log(names) //'devLab'

//5
//Given a string of digits, 
//you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
    return x.split('').map(el => el < 5 ? 0 : 1).join('')
}
console.log(fakeBin('45385593107843568')) //, '01011110001100111'))

//6
//#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
//Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
function pipeFix(numbers) {
    let numB = []
    for (let i = numbers[0]; i < (numbers[numbers.length - 1] + 1); i++) {
        numB.push(i)
    }
    return numB;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])) //,[1,2,3,4,5,6,7,8,9]);))
console.log(pipeFix([6, 9])) //,[6,7,8,9])

//7
//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS,

function bonusTime(salary, bonus) {
    return (bonus == true) ? ("\u00A3" + salary * 10) : ("\u00A3" + salary)
}
console.log(bonusTime(10000, true)) //, '£100000');
console.log(bonusTime(78, false)) //'£78'

//8
//удаляем первое непоследовательное число в массиве
function firstNonConsecutive(arr) {
    return arr.slice(1).find((a, b) => a - 1 !== arr[b]) || null;
}
console.log(firstNonConsecutive([1, 2, 3, 6])) //6