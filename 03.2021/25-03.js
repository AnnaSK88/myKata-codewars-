//1
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//If they are, change the array value to a string of that vowel.
//Return the resulting array.

function isVow(a){
return a.map(el=> el== 117 ? "u" : el==97 ? "a" : el== 101 ? "e": el==105 ? "i" : el==111 ? "o": el)
}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))//,[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))//,["e",121,110,113,113,103,121,121,"e",107,103]);

//2
//find mistakes
function howManyDalmations(number) {
  return (number <= 10) ? "Hardly any" : (number <= 50) ? "101 dogs!" : (number = 101) ? "Woah that's a lot of dogs!" : "Woah that's a lot of dogs!"
}
    console.log(howManyDalmations(8))//
    console.log(howManyDalmations(42))
    console.log(howManyDalmations(88))


//3
//find the mistake
    function findLongest(str) {
       let arr = str.split(" ").map(el=> el=el.length)
          return Math.max(...arr)
    }
console.log(findLongest("The quick white fox jumped around the massive dog"))//, 7);
console.log(findLongest("Take me to tinseltown with you"))//, 10); 

 //4
 //You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.

   function check(a, x) {
    let result=false
    for(let i=0; i< a.length; i++){
       if(a[i] === x ){
           result=true
       }
     }
    return result
   }

// function check(a,x){
//     return a.includes(x);
// };

console.log(check([66, 101], 66))//, true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45))//, true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))//, false);


//5
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.
function sumMix(x){
return x.map(Number).reduce((c,d)=> c+d)
}
console.log(sumMix([9, 3, '7', '3']))//, 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))//, 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))//, 41);

//6
//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
   let arr =['I love you', 'a little', 'a lot','passionately','madly','not at all']
  
return  arr[nbPetals-1] ? arr[nbPetals-1] : arr[nbPetals-arr.length-1]
}
console.log(howMuchILoveYou(7))//,"I love you")
console.log(howMuchILoveYou(3))//,"a lot")
console.log(howMuchILoveYou(6))//,"not at all")


