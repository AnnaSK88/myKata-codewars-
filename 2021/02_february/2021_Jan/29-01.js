// 1 
// найти метод который возвращает число полученое делением первого на второго и округленный до десятых
const solve = (x, y) => {
    return (x / y).toFixed(1);
}
console.log(solve(5, 3))

const solve1 = (x, y) => x / y

// 2 
//Завершите метод, который принимает логическое значение и возвращает "Yes"строку для trueили "No"строку для false.
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
    if (bool === true) {
        return "YES";
    }
    if (bool === false) {
        return "NO"
    }
    return bool

}
//return bool ? 'Yes' : 'No';

console.log(boolToWord(true))
console.log(boolToWord(false))


// 3
//func будет принимать два списка целых чисел aи b. 
// Каждый список будет состоять из 3 пол-х целых чисел выше 0, представляющих размеры кубоидов aи b.
// Вы должны найти разницу объемов кубоидов независимо от того, какой из них больше.


function findDifference(a, b) {

    let c = a.reduce((x, y) => x * y)
    let d = b.reduce((x, y) => x * y)

    return (c > d) ? (c - d) : (d - c)
}

console.log(findDifference([2, 2, 3], [5, 4, 1]))