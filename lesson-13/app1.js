const { stealRing, characters } = require('./characters.js');

let myChars = characters

myChars = stealRing(myChars, 'Frodo');

for(const character of characters) {
    console.log(character);
}