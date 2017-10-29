// Simple algorithm that retrieves
// total characters to delete from
// longest anagram of string A and string B

function getAnagramCharsToDelete(a, b) {
    // Set B length,
    var bSet = b.split('');
    // Set A length
    var aSet = a.split('');
    // Set anagram_set
    var anagram_set = [];

    // Set count
    var count = 0;
    console.log('INITIAL SET: ', aSet.concat(bSet));
    
    // Set total
    var total = bSet.length + aSet.length;
    
    // while count <= a.length
    while(count <= a.length) {
        var letter = aSet.indexOf(bSet[count]);
        
        if(letter !== -1) {
            anagram_set.push(bSet[count]);
        }
        
        count++; // next letter
    }

    // Get total (totalLength - anagram_set)
    
    var totalToDelete = (total - (anagram_set.length * 2));
    console.log('ANAGRAM: ', anagram_set);
    
    // return total
    return totalToDelete;
}

var answer = getAnagramCharsToDelete('wolfsx', 'flows');

console.log('TOTAL CHARACTERS TO DELETE: ', answer);
