//1 rana for 8
function mango(quantity, price) {

    let sum = quantity - Math.floor(quantity / 3)
    return sum * price
}
// console.log(mango(3, 3))//6
// console.log(mango(2, 3))//6
// console.log(mango(9, 5))//30


//2 8ka
//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(item => !geese.includes(item));
};
//console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))//["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

//3 7rf
//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

function trim(str, size) {
    if (str.length > size) {
        if (size > 3) {
            str = str.substr(0, size - 3) + '...';
        }
        else {
            str = str.substr(0, size) + '...';
        }
    }
    return str;
}
//   console.log(trim("hey", 3))
//  console.log(trim("Creating kata is fun", 14))//,"Creating ka...");
//  console.log(trim("Creating kata is fun", 94))

//4
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
const isSquare = n => Number.isInteger(Math.sqrt(n));
// console.log(isSquare(25))
// console.log(isSquare(-1))

//25/01/2023


//1
//7KA
//https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript
function numberJoy(n) {
    let sum= String(n).split('').map((i)=> i= Number(i)).reduce((a,b) => a+b)
    let reverse= Number(String(sum).split('').reverse().join(""))
  return  (sum * reverse === n) 
}
// console.log(numberJoy(1997))

//26/01/2023
//https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript
function booleanToString(b){
    return Boolean(b) ? "true" : "false"
  }
//   console.log(booleanToString(true))
//   console.log(booleanToString(false))

//2
//7 