// //1
// //Complete the method which accepts such an array, and returns that single different number.
// // function stray(numbers) {
// //   function stray(numbers) {
// //     let strayChar = numbers[0];
    
// //      for(let i = 1; i < numbers.length; i++){
// //       if(strayChar !== numbers[i]){
// //          return strayChar = numbers[i];
// //        }
// //      }
// //            return 0;
// // //      } 
// // function stray(numbers){
  
// //    if (numbers.length %2 == 0 || numbers.length< 3 ){
// //      return NaN;
// //    } else if (numbers[0]!== numbers[1] && numbers[0]!== numbers[2]) {
// //       return numbers[0];
// //    } else if (numbers[1]!== numbers[2] && numbers[1]!== numbers[0]) {
// //      return numbers[1];
// //    } else if (numbers[2]!== numbers[0] && numbers[2]!== numbers[1]) {
// //      return numbers[2];
// //     } else {
// //       return  Number(numbers.filter(el=> el!== numbers[0]));
// //     }

// // }
// // //const stray = nums => nums.reduce((a, b) => a ^ b);
// //   // console.log(stray([2,1]))//NaN
// //   // console.log(stray([1,3,1,1]))//nan
// //   // console.log(stray([2,1,1,1,1]))//2
// //   // console.log(stray([1,1,1,1,1,5,1]))//5
// //   // console.log(stray([17, 17, 3, 17, 17, 17, 17]))//3
  
// // // https://www.codewars.com/kata/euclidean-distance-in-n-dimensions
// // function euclideanDistance(point1, point2){
// //   let array=[]
// //   let sum=0;
// //   for(let i=0; i<point2.length; i++){
// //       array.push(point1[i]-point2[i])
// // //       sum+=i
// // //   }
// // //   return Math.sqrt(array.map(el=> el= Math.pow(el,2)).reduce((a,b)=> a+b)).toFixed(2)
// // // }

// // // console.log(euclideanDistance([-1,2,5],[2,4,9]))// 5.39

// // //3
// // // // create a Phone number

// // // function createPhoneNumber(numbers){
// // //   let firstPart= numbers.slice(0,3).join("");
// // //   let secondPart=numbers.slice(3,6).join("") + "-" + numbers.slice(6,10).join("")
// // //   return "(" + firstPart + ") " + secondPart;
// // // }
// // // function createPhoneNumber(numbers){
// // //   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
// // // }
// // // console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))//, "(111) 111-1111"
// // // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//, "(123) 456-7890")))

// // //4
// // // //buubble sort
// function bubblesortOnce(a) { 
//   const b =[...a]
  
//   for(let i=0; i< b.length; i++){
//      if (b[i] > b[i+1])
//      [b[i], b[i+1]] = [b[i+1], b[i]]
    
    
//   }
  
//    return b
//  }


// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4]))//[7,5,3,1,2,4,9]
// console.log(bubblesortOnce([6, 5, 3, 7, 1 ]))//5 3 6 1 7


// //5
// //Sort and Order people 
// // var OrderPeople = function(people){
// //   return people.sort((a, b) => a.age > b.age ? 1 : -1);
// //   //people.sort( ()=> ); 
// // }

// // console.log(OrderPeople([ { age: 83, name: 'joel' },
// //                           { age: 46, name: 'roger' },
// //                           { age: 99, name: 'vinny' },
// //                           { age: 26, name: 'don' },
// //                          { age: 74, name: 'brendan' } ]))
// //, [{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')

// //6
// //Who is online

const whosOnline = (friends) => {
  
}
// }
let status = {
  online: [],
  offline: [],
  away: []
};

for (let key in status) {
  if (status[key].length == 0) delete status[key];
  }

//   console.log(whosOnline([{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]))
//   // {online: ['David'],
//   // offline: ['Lucy'],
//   // away: ['Bob']}

//   console.log(whosOnline([{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]
// ))
// {offline: ['Lucy'],
// away: ['Bob']}


//7
function filterHomogenous(arrays) {
  let newArr=[]
 for (let i=0; i<= arrays.length; i++){
  for(let j=0; j<= arrays[i].length; j++){
    if (typeof arrays[i][0] == typeof arrays[i][j]){
    

    }
  }
 } 
 return newArr
    }

  

 console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))//, [[1, 5, 4], ['b']]);
 console.log(filterHomogenous([[23, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]))//, [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);
 
