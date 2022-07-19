//1
//The coupon code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return typeof (enteredCode == correctCode) || (currentDate==expirationDate) && (typeof currentDate === typeof expirationDate)
}
// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))//, true);
// console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))//, false);


//2



// function count (string) {  
//   let obj ={}
//   let arr= string.split('').map(el => obj[el]= obj[el]+1 || 1)

 
//    return obj
// }
// console.log(count("aba"))//, { a: 2, b: 1 }); 


//3
function isPrime(num) {
 if (num<2) return false

 for(let i =2; i<num; i++)
{
  if( num%i ==0){
    return false
  }
} return true

  }

  
  console.log(isPrime(0))//f
  console.log(isPrime(1))//f
  console.log(isPrime(2))//t
  console.log(isPrime(73))//t
  console.log(isPrime(75))//f
  console.log(isPrime(-10))//f