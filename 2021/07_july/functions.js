// //1
// //find odd()
// function odds(values){
//     return values.filter( v => v%2 );
//   }

//  //2
//  // Write a function that adds from two invocations.

//  const add = a => b => a+b;
//  console.log(add(2)(5))

//  //3
//4
//factorial
// function factorial(n) {
//     return n>=0 ? n ? n*factorial(n-1) : 1 : null;
  

//5
// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
      
// function solve (a,b) {
   
// return (a==0 || b == 0) ?  [a,b] : 
//     (a >= 2*b) ? (solve((a = a - 2* b), b)) :
//     (b >= 2*a) ? (solve(a, (b= b -2*a))) : [a,b];
// }
// console.log(solve(0,7))//[0,7]
// console.log(solve(6,19))//,[6,7]);
// console.log(solve(2,1))//,[0,1]);
// console.log(solve(22,5))//,[0,1]);
// console.log(solve(2,10))//,[2,2]);


//6
//Преобразуйте десятичные числа в двоичные. Наслаждаться! Без обмана. Нет toString

function decToBin(d) {
    function decToBin(d) {
        let binary = [];
        if ( d === 0) return '0'
            while (d > 0) {
                if (d % 2 === 1) {
                    binary.splice(0,0,1);
                    d = (d - 1) / 2;
                } else {
                    binary.splice(0,0,0);
                    d /= 2;
                }
            }
        
            return  binary.join('');
          
        }
 
  
}
  

  console.log(decToBin(6))
  console.log(decToBin(1), '1');
  console.log(decToBin(2), '10');
  console.log(decToBin(3), '11');
  console.log(decToBin(21), '10101');
  console.log(decToBin(31), '11111');

//7
// function runYourString (arg, obj) {
//       let f = new Function(obj.param, obj.func);
//       return f(arg);

//   console.log(runYourString(true, {param: 'val', func: 'return val'}))