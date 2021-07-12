//1
//Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
function sumCubes(n){
    var bb=[]
    for(var i = 1;i <= n;i++) {
        bb.push(i**3);
      }
  return bb.reduce((el,i)=> el+i)
  }
  console.log(sumCubes(2))//9=8+1
  console.log(sumCubes(3))//36=1+8+27

