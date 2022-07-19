//1
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function hL(str) {
    let arr = str
        .split(' ')
        .map(i => +i)
    return Math.max(...arr) + ' ' + Math.min(...arr)
}

console.log(hL('3 5 55'))




const MaxMin = (str) => [...str.split(' ').map(i => +i).reduce((res, item) => {
    res.max = res.max < item ? res.max : item;
    res.min = res.min > item ? res.min : item;
    return res;
}, { max: 0, min: 0 })].join(' ');
}



// 2
//нахождение максимума
// function arrayMax(array) {
//     return array.reduce(function(p, v) {
//         return (p > v ? p : v); //eсли P больше V, то выводит Р иначе V
//     });
// }

// function arrayMin(array) { //функция нахождения минимума
//     return array.reduce(function(p, v) {
//         return (p < v ? p : v); //eсли P меньше V, то выводит Р иначе V
//     });
// }

//3
////удаляем все гласные из предложения при помощи ф-ции

function disemvowel(str) {
    str = str.replace(/[AEOUIaeoui]/g, '')
    return str;
}

console.log(disemvowel("This website is for losers LOL!"))

//4
// находим чет нечет, выводим в консоль все числа на которые лно делится
function divisors(integer) {
    let divs = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }
    // main number is number that has 0 divisors
    return divs.length > 0 ? divs : integer + ' is main';
}
console.log(divisors(7))

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


//5
////возводим в квадрат каждое целое число и обьединяем


function squareDigits(num) {
    let mas = [];
    while (num > 0) {
        let ost = num % 10;
        mas.push(Math.pow(ost, 2));
        num = Math.trunc(num / 10);
    }
    return +mas.join('');
}
console.log(squareDigits(9119)); //811181



function squareD(num) {
    return Number(num.toString().split('').map(i => i * i).join(""));
}
console.log(squareD(9119)) //811181

//6
//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//дан массив, который состоит из строк
// дано к- число, которое показывает количество последовательно обьединненных строк
// найти самую длинную последовательстьи вывести ее как строку

//разобрать код



function longestConsec(strarr, k) {

    let concarr = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
        concarr.push('');
        for (let j = i; j < i + k; j++) {
            concarr[i] += strarr[j];
        }
    }
    // 
    let max = concarr[0];

    for (let i = 1; i < concarr.length; i++) {
        if (concarr[i].length > max.length) {
            max = concarr[i];
        }
    }
    return maxmax ? max : ''
}
console.log(longestConsec(['one', 'two', 'three', 'four'], 2))