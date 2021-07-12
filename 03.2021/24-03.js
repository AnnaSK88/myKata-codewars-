//1
//*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//The returned value must be a string, and have "***" between each of its letters.
//You should not remove or add elements from/to the array.*/
// function twoSort(s) {

//      let str= s.sort().shift().split('').map(el=> el+"***").join('')
     
//      return str.substring(0,str.length - 3)
// }
function twoSort(s) {
     s.sort();
     return s[0].split('').join('***');
   }
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))//, 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))// 'a***r***e'


//2
//  Double it and return it.
function doubleInteger(i) {
     return i * 2
}
console.log(doubleInteger(2))//4

//3
//Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
//X will be either a number or a string. Both are valid.
function apple(x){
return Number(x*x) >1000 ? "It's hotter than the sun!!" :'Help yourself to a honeycomb Yorkie for the glovebox.'
}

console.log(apple('50'))//, 'It\'s hotter than the sun!!'); 
console.log(apple(4))//, 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

//4
//When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.
//You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

function cake(x, y){
     let b=y.split('').map(el=> el.charCodeAt()).reduce((a,c)=> a+c)
return b > x ? 'Fire!': 'That was close!'
}
console.log(cake(900, 'abcdef'))//, 'That was close!');
console.log(cake(56, 'ifkhchlhfd'))//, 'Fire!'); 
console.log(cake(256, 'aaaaaddddr'))//, 'Fire!');
console.log(cake(813, 'beeecmzvkk'))//

//5
//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder{
     findSmallestInt(args) {
    return args.sort((a,b)=> a-b).shift()
   // return Math.min(...args)
  }
}

