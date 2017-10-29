// Simple algorithm that retrieves
// total characters to delete from
// longest anagram of string A and string B
// a U b <-- 1 <= a | b <= 10000

function getAnagramCharsToDelete(a, b) {
    if(!a || !b || typeof a !== 'string' || typeof b !== 'string') {
        return 0;
    }

    if(a.length > 10000) return 0;
    if(b.length > 10000) return 0;

    // Set B length,
    var bSet = b.split('');
    // Set A length
    var aSet = a.split('');

    // Set anagram_set
    var anagram_set = [];

    // Set total
    var total = bSet.length + aSet.length;
    
    // while count <= a.length
    for(var i=0; i < aSet.length; i++) {
        var letter = bSet.indexOf(aSet[i]);
        
        if(letter !== -1) {
            bSet.splice(letter, 1);
            anagram_set.push(aSet[i]);
        }

    }

    // Get total (totalLength - anagram_set)
    
    var totalToDelete = (total - (anagram_set.length * 2));
    console.log('ANAGRAM: ', anagram_set);
    
    // return total
    return totalToDelete;
}
var atest = 'flowsiuoiausodiuoiuoiausdoiausodiusodiuasodiuaosid';
var btest = 'wolfs';
var answer = getAnagramCharsToDelete(atest, btest);

console.log('TOTAL CHARACTERS TO DELETE: ', answer);
