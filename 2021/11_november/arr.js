//1
//Head, Tail, Init and Last
function head(a){
    return a[0]
  }
  function tail(b){
    return b.slice(1)
  }
  function init(c){
    return c.slice(0, -1)
  }
  function last(d){
    return d[d.length-1]
  }

  //2
  //Array Deep Count

  function deepCount(a){
      

   return a.flat
  }
// console.log(deepCount([1, 2, 3]))//, 3, "Expected 3")
// console.log(deepCount(["x", "y", ["z"]]))//, 4, "Expected 4")
// console.log(deepCount([1, 2, [3, 4, [5]]]))//, 7, "Expected 7")
// console.log(deepCount([[[[[[[[[]]]]]]]]]))//, 8)//, "Expected 8"))

//3
//Valid string
var validWord = function(dictionary, word) {
  let newWords = dictionary.include(word)
  return newWords//=== word ? true : false;
  
};

console.log(validWord(['code', 'wars'], 'codewars'))//,true]);
