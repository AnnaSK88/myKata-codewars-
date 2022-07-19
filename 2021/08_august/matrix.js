//matrix

// function getMatrix(number) {
   
//     return [...Array(number)].map((e, i, a) => a.map(e => +!i--));
// }
// function getMatrix(number) {
//     const matrix = [];
//     for (let i = 0; i < number; i++) {
//       matrix[i] = Array(number).fill(0)
//       matrix[i][i] = 1;
//     }
//     return matrix;
//   } 


// console.log(getMatrix(1))//, [[1]]);
// console.log(getMatrix(2))// [[1, 0], [0, 1]]);
// console.log(getMatrix(5))//,// [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);


//2
// matrix return 90deg left

// var rotateMatrix = arr => {
//  return arr[0].map((val, index) => arr.map(row => row[index])).reverse()
// }

// console.log(rotateMatrix([[-1,4,5], [2,3,4]])) //[[5,4],[4,3],[-1,2]];


//3
//Convert a hash into an array.
// function convertHashToArray(hash){
//     // var array = [];
//     // for(el in hash) 
//     // array.push((el), hash[el]);

//    let newArr=Object.entries(hash);
//    let first= newArr.slice(0,2).reverse()
//    let last = newArr.slice(-1)
  
//    return (newArr.length > 2) ?  [...first, ...last] : first;

   
// }

 //console.log(convertHashToArray({name: "Jeremy"}))//[["name", "Jeremy"]]))
// console.log(convertHashToArray({name: "Jeremy", age: 24}))//,[["age", 24], ["name", "Jeremy"]]);
// console.log(convertHashToArray({name: "Jeremy",
//                                age: 24, 
//                                role: "Software Engineer"}))
                               //,[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
// console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}))//,[["powerLevelOver", 9000], ["product", "CodeWars"]]);
// console.log(convertHashToArray({}))//,[]);


//4
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// function arrayDif(a,b){
  
//   return a.filter(n => b.indexOf(n) === -1);
// }

// console.log(arrayDif([],[4,5]))//[]
// console.log(arrayDif([3, 4], [3]))//[4]
// console.log(arrayDif([1, 8, 2], []))//[1,8,2]

//5
//Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// function indexEqualsValue(a) {


//   return 
// }
// for (let i = 0; i < a.length; i++){
//     if ( a[i] === i) {
//       return a[i];
//     }
//   } 
//   return -1;
  


  //return array.find((el,index)=> (el == index))
// console.log(indexEqualsValue([-8,0,2,5]))//, 2 );)
// console.log(indexEqualsValue([-1,0,3,6]))//-1



