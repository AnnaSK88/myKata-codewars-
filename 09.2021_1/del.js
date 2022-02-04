// function aaa(string){
// return string.slice(0,1).toUpperCase() + string.slice(1, 5)
// }

// console.log(aaa("hello"))

//string
let str = "Hello\nWorld"
// console.log(str[1000])//undef
// console.log(typeof (str.charAt(100)))// empty string ""

for (let char of str)
console.log(char)

let a = 2  ; b = 4;
console.log(`Six is ${a+b} and not ${a*b}`)