//1 Ваша задача - найти первый не последовательный элемент массива.
//Под непоследовательными мы подразумеваем не на 1 больше, чем предыдущий элемент массива.
//Например , если у нас есть массив [1,2,3,4,6,7,8]то выведет 6
//Если весь массив последовательный, верните null.


const fin = (arr) => {
    let i = 0;
    while (i < arr.length - 1 && arr[i] === arr[i + 1] - 1) i++;
    return arr[i + 1] || null;
}

const fin1 = (arr) => arr.slice(1).find((a, b) => a - 1 !== arr[b]) || null;
console.log(fin1([1, 2, 3, 8, 6])) //8
console.log(fin1([1, 2, 3, 4, 5, 6])) //null должно быть а появляется undefined
console.log(fin1([-3, -1, 0])) //-1

//2 Найти среднее число в массиве и округлить до целого
// The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => (a + b)) / marks.length)
}
console.log(getAverage([2, 2, 2, 2])) //2
console.log(getAverage([1, 2, 3, 4, 5])) // 3

//Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
//Math.Floor() раундов к отрицательной бесконечности
//Math.Truncate округляется вверх или вниз к нулю.
// Math.Floor(-3.4) = -4
// Math.Truncate(-3.4) = -3
// Math.Floor(3.4) = 3
// Math.Truncate(3.4) = 3



//3 если четное количество пуль то жив, иначе нет

function hero(bullets, dragons) {
    return (bullets >= 2 * dragons) ? true : false
}

console.log(hero(10, 5)) //, true);
console.log(hero(7, 4)) //, false);
console.log(hero(4, 5)) //, false);
console.log(hero(100, 40)) //, true);