//1
//When provided with a letter, return its position in the alphabet.
//Input :: "a"
//Ouput :: "Position of alphabet: 1"

function position(letter) {
    return "Position of alphabet: " + ((letter.charCodeAt(0) - 97) + 1)
}

function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
console.log(position('a')) //"Position of alphabet: 1"