let letters = [ ["D", "E", "Y", "H", "A", "D"],
["C", "B", "Z", "Y", "J", "K"],
["D", "B", "C", "A", "M", "N"],
["F", "G", "G", "R", "S", "R"],
["V", "X", "H", "A", "S", "S"]], 
letter = "D",
count = 0;

function letterCounter(lettersArray, letter) {
    for (let i = 0; i < lettersArray.length; i++) {
        for (let char of lettersArray[i]) {
            if (char === letter) {
                count++;
            }
        }
    }
    return count;
}

console.log(letterCounter(letters, letter));