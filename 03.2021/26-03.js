//1
//find the mistake

function correctTail(body, tail){
    let sub = body.substr(body.length-(tail.length))
          
        if (sub == tail){
            return true
          }else {
            return false
    } 
}
  
function correctTail(bod, tail) {
    return bod[bod.length-1] === tail
  }
        
function correctTail(body, tail){
    let sub = body.substr(body.length-(tail.length))    
return sub==tail ? true : false
}       
console.log(correctTail("Fox", "x"))//, true);
console.log(correctTail("Rhino", "o"))//, true);
console.log(correctTail("Meerkat", "t"))//, true);



//2
// 
function problem(x){
    return typeof(x)=="number" ? (x * 50 + 6) : "Error" 
  }
  console.log(problem("hello"))//error
  console.log(problem(1))//56

  //3
  //Create a function which translates a given DNA string into RNA.
  function DNAtoRNA(dna) {
    return dna.replace(/T/gi, "U")
  }
console.log(DNAtoRNA("TTTT"))//, "UUUU")
console.log(DNAtoRNA("GCAT"))//, "GCAU"
