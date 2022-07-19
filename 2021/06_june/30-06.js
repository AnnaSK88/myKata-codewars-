//1
 //Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
    var sum=0
    for(let i=0; i< array.length; i++){
        sum+= array[i]
    }
  return (sum % 2==0)  ? 'even' : 'odd';
}
     
//    console.log(oddOrEven([0]))//, 'even')
//    console.log(oddOrEven([1,7]))//, 'even')
//    console.log(oddOrEven([]))//, 'even'
//    console.log(oddOrEven([0, 1, 5]))// 'even'))   
//    console.log(oddOrEven([1]))//, 'odd'

   //2
   //In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.
//So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:
//1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.
//Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics.
//For example, if n = 11 and k = 2, the function should return 4 as the answer.
//Input: 1 <= n <= 100 000 , 1 <= k <= n.
//Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.

function strangeMath(n, k){
    var arr=[]
    for(let i=0; i<= n; i++){
        arr.push(i)
    }
return arr.sort().indexOf(k)
}
// console.log(strangeMath(11,2))//4
// console.log(strangeMath(15,5))//11
// console.log(strangeMath(15,15))//7


//3
//It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...
//our task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end); Second, sort all sub sequence according to their sum value(ascending order too).


function sortSequence(sequence){
   var d=[]
   size=4
   for(let i=0; i< sequence.length; i++) {
     d.push(sequence.splice(0,size).slice(0,4).sort());
   }
  
    return d.concat()
  }
  
  console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]))//[1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0])