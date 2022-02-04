//1
//Завершите функцию, которая принимает нечетное целое число ( 0 < n < 1000000), которое представляет собой разницу между двумя последовательными точными квадратами, и верните эти квадраты в виде строки в формате"bigger-smaller"

const findSquares = num =>{
    let min = (num -1)/2
    let max = min+1
    return `${Math.pow(max, 2)} - ${Math.pow(min, 2)}`
}
console.log(findSquares(9))//"25-16"
console.log(findSquares(81))

//2
//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
//Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
function sumTriangularNumbers(n) {
    let arr=[]
    for (let i=1; i<=n; i++){
        arr.push((i*(i+1)/2));     
    }
    
   return (n<=0) ? 0 : arr.reduce((a,b)=>a+b)
  }
  console.log(sumTriangularNumbers(6))//56
  console.log(sumTriangularNumbers(-9))//56

  //3
  //Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer. Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

  var maxRedigit = function(nums) {
      if (nums>999 || nums <100){
          return null;
      } else {
          return Number(nums.toString().split("").sort((c,d)=>d-c).join(""))
      }
  };

console.log(maxRedigit(123)); // returns 321
console.log(maxRedigit(99))//null

//4
//Ваша задача - написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.

function maskify(cc) {
    let arrNew = cc.split('')
    let removed=arrNew.splice(arrNew.length - 4, 4).join("")
    let final = arrNew.map(el=>el="#").join("")
    if (arrNew===[]){ 
        return cc;
    } else if (cc.length < 4) {
        return cc;
    } else {
        return (final + removed);
    }
}
function maskify(cc) {
    return cc.replace(/(?=.{5})./g, '#')
  }
console.log(maskify('11111'))//1
console.log(maskify('455636460793561 6'))//, '############5616')))
console.log(maskify("mlj"))
console.log(maskify(""))//""

//5 
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 

function DNAStrand(dna){
    return dna.split('').map(el=>  (el==="A") ? "T" : (el==="T")? "A" : (el==="C")? "G" : "C").join("")
  }
  console.log(DNAStrand("AAA"))//TTT
  console.log(DNAStrand("ATTGC"))//,"TAACG"
  console.log(DNAStrand("GTAT"))//,"CATA"))

  //6
  //The four operators are "add", "subtract", "divide", "multiply".
  function arithmetic(a, b, operator){
   
    return (operator==="add") ? a+b : (operator==="subtract" ) ? a-b : (operator==="multiply") ? a*b : a/b;
  }

console.log(arithmetic(5, 2, "add"))//     => returns 7
console.log(arithmetic(5, 2, "subtract"))// => returns 3
console.log(arithmetic(5, 2, "multiply"))// => returns 10
console.log(arithmetic(5, 2, "divide"))//  => returns 2

//7
//It expects Calculator.average(3,4,5) to return 4.


var Calculator = {
  average: function() {
    var num = 0,length=arguments.length;
    for (var i = 0; i < length; i++) 
    num = num + arguments[i];
    var divide = num/length;
    return (!length) ? 0 : divide;
 }
};


console.log(Calculator.average(-3,4,5))//4
console.log(Calculator.average(2, 5, 7, 12, 150, 3000, 9))//1
console.log(Calculator.average())//0
console.log(Calculator.average(-1,1))//1
//8
//buy bicycle

  function whoseBicycle(a, b, c) {
    [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
    let n = Math.max(a, b, c);
    return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
  }
