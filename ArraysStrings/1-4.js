function isAnagram(word, word2) {
    // was thinking of using sort(), but dont wanna cut corners 
    // Solved by intersecting word 2 at word 1 (Set Theory)

    var isAnagram = [];
    var setA = word.split('');
    var setB = word2.split('');

    if (setA.length !== setB.length) return false;

    var position = 0;

    while (position < setA.length) {
        for (var i = 0; i < setA.length; i++) {
            if (setB.length && setB[i] && setA[position] === setB[i]) {
                // I'm intersecting SetB at SetA[position]
                setB.splice(i, 1);
            }
        }

        position++;
    }

    return setB.length === 0;
}

var answer = isAnagram('wubbadubbalublub', 'blubdubbaluwubba');

console.log('Answer', answer);