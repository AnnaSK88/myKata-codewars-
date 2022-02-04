//1
//The coupon code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return typeof (enteredCode == correctCode) || (currentDate==expirationDate) && (typeof currentDate === typeof expirationDate)
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))//, true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))//, false);