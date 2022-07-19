//1
//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
//If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
//If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
//If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    let oddSumm =0;
    let evenSumm =0;

    str.split('').map(Number).forEach(element => {
        if (element%2!==0){
            oddSumm+=element
        } else {
            evenSumm+=element;
        }
    });
       
    return  (oddSumm<evenSumm) ? 'Even is greater than Odd' : oddSumm>evenSumm? 'Odd is greater than Even' : 'Even and Odd are the same' ;
}

console.log(evenOrOdd('12'))//, 'Even is greater than Odd');
console.log(evenOrOdd('123'))//, 'Odd is greater than Even');
console.log(evenOrOdd('112'))//, 'Even and Odd are the same');


//2 ката 7
//Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
//Vowels are (in this kata): a, e, i, o, u
function moveVowel(input) {
 let ms = input.match(/'a'\w)  

 return ms
}
console.log(moveVowel('day'))//dya
console.log(moveVowel('applea'))//pplaea