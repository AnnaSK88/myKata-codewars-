// function aaa(string){
// return string.slice(0,1).toUpperCase() + string.slice(1, 5)
// }

// console.log(aaa("hello"))

//string
// let str = "Hello\nWorld"
// // console.log(str[1000])//undef
// // console.log(typeof (str.charAt(100)))// empty string ""

// for (let char of str)
// console.log(char)

// let a = 2  ; b = 4;
// console.log(`Six is ${a+b} and not ${a*b}`)

function convert(input, source, target) {
    let s=0;  let str='';
    for (let i=0; i<input.length; i++) {
      s=s*source.length+source.indexOf(input[i]);
    }
    while (s>0) {
      str=target[s%target.length]+str;
      s=Math.floor(s/target.length);
    }  
    return str ? str : target[0];
  }

