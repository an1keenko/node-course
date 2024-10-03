let characters = [
    { name: 'Frodo', hasRing: false },
    { name: 'Bibo', hasRing: false }
];

function stealRing(characters, owner) {
    return characters.map(character => {
        if (character.name === owner) {
            character.hasRing = true;
        } else {
            character.hasRing = false;
        }
    });
}

module.exports = { characters, stealRing };