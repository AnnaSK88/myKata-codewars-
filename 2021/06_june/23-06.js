//1
//Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    return str.split(' ').reverse().join(" "); // reverse those words
  }

console.log(reverseWords("hello world!"))//, "world! hello")
console.log(reverseWords("yoda doesn't speak like this" ))//,  "this like speak doesn't yoda")
console.log(reverseWords("foobar")) //,  "foobar")
 
//2
//You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. 

function overTheRoad(address, n){
    var i= (address-1)/2
    var max= 2*n
    return max + i*(-2)
  }
  console.log(overTheRoad(7,11))//16
  console.log(overTheRoad(3,5))//8

  //3
 //Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
 const findSquares = num => {
     var a = (num+1)/2
     var max = Math.pow(a,2);
     var min = Math.pow((a-1),2) 

     return `${max}-${min}`;
    };
 console.log(findSquares(81))//'1681-1600';
 console.log(findSquares(9))//'25-16 ';