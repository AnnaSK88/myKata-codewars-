//1
//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs(dadYearsOld-sonYearsOld*2)
  }
console.log(twiceAsOld(22,2))//18

//2
  //Write a function called repeat_string which repeats the given string str exactly count times.

function repeatStr (n, s) {
    return `${s}`.repeat(n)
  }
console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello" 


//3
//Write a function that replaces 'two', 'too' and 'to' with the number '2'.
// Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.
function textin(str){

  return str.replace(/t[wo]?o/gi, 2)
  //str.replace(/(too|two|to)/ig, 2);
}
console.log(textin('I love to text two or TWO'))//,'I love 2 text 2 or 2',)
console.log(textin('see you toomorrow'))//,'see you 2morrow',)

//4
//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
    let newArr= arr1.concat(arr2).sort((a,b)=>a-b)
  //return newArr.filter((cur,index)=>newArr.indexOf(cur)===index)
  return [...new Set(newArr)]
}
console.log(mergeArrays([1,2,4],[2,3,8,9]))//[1,2,3,4,8,9]
