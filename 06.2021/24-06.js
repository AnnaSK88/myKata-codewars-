//1
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    // if( month == 1 || month<=3 ){
    //     return 1;
    // } if(month == 4 || month<=6){
    //     return 2;
    // } if(month == 7 || month<=9){
    //     return 3;
    // } else{
    //     return 4;
    // }
    return (month<=3) ? 1 : (month<=6) ? 2 : (month<=9) ? 3 : 4;
}
//   console.log(quarterOf(3))//1
//   console.log(quarterOf(6))//2
//   console.log(quarterOf(11))//4

//2
const flip=(d, a)=>{
  return (d=='R') ? a.sort((c,f) => c-f): a.sort((c,f) => f-c);
  }
  console.log(flip('R', [3, 2, 1, 2]));// [1, 2, 2, 3]
  console.log(flip('L', [1, 4, 5, 3, 5]))//  =>  [5, 5, 4, 3, 1]

//3
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
function updateLight(current) {
  return ( current == "green") ? "yellow" : (current== "yellow") ?  "red" : "green";  
  
  }
console.log(updateLight("green"))//, "yellow");
console.log(updateLight("yellow"))//, "red");
console.log(updateLight("red"))//, "green");

//4
//I have a cat and a dog.
//I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears]
var humanYearsCatYearsDogYears = function(humanYears) {
    var cat = 24+ (humanYears -2)*4;
    var dog =  24+ (humanYears -2)*5;
      if (humanYears === 1){
          return [1,15,15];
       } if (humanYears===2){
           return [2, 24, 24];
       } else {
           return [humanYears, cat, dog]
       }
  }


console.log(humanYearsCatYearsDogYears(10))//[10,56,64]
console.log(humanYearsCatYearsDogYears(1))//[1,15,15]

//4
//Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
//t has to return a string with the type of triangle.
var typeOfTriangle = function (sideA, sideB, sideC) {
    if (sideA===sideB && sideB===sideC && sideA===sideC) {
                     return "Equilateral";
    }  else if (sideA===sideB || sideB===sideC || sideA===sideC) {
                    return "Isosceles";
    } else if (typeof(sideA)===typeof(sideB)) {
                      return "Scalene";
                  } else  {

                      return "Not a valid triangle";
        } 
  }

  console.log(typeOfTriangle(2,2,8))
  console.log(typeOfTriangle(2,2,2))
  console.log(typeOfTriangle(3,5,384))
  console.log(typeOfTriangle(" /",2,1))

  //5
  //sgr herona
  function heron(a,b,c) {
    var s = (a+b+c)/2;
    var sqr= (s * (s - a) * (s - b) * (s - c));
    return Math.sqrt(sqr);
  }

  //6
  //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
  function removeChar(str){
//      var arrayA =str.split("")
//      arrayA.pop()
//      arrayA.shift()
//       return arrayA.join("")
   
//    };
   return str.slice(1,-1)
}
   console.log(removeChar('eloquent'))//, 'loquen


   //7
   //If/else syntax debug
//While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
    if ( health <  0 || health==0)  {
      return false
    } else {
      return true
    }
  }

  //8
 // Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
 function greet(name){
     return "Hello," +" " +name+" "+ "how are you doing today?"
  }
  console.log( greet("Anna"))