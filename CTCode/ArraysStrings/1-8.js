// Assume you have a method isSubstring which checks 
// if one word is a substring of another
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
// only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”)

function isSubstring(string, string2) {
    if(string.length !== string2.length) return false;

    var a = string.split('');
    var b = string2.split('');

    var compareIndex = 0;

    while(compareIndex < a.length) {
        for(var i=0; i < a.length; i++) {
            if(a[compareIndex].indexOf(b[i]) !== -1) {
                b.splice(i, 1);
            } 
        }

        compareIndex++;
    }

    return b.length === 0;
}


var string = 'atxxest';
var test2 = 'testaxx';

var answer = isSubstring(string, test2);

// Tests
console.log('Not the same length', isSubstring('test', 'set'));
console.log('Is the same length', isSubstring('test', 'setx'));
console.log('Is the same word ordered', isSubstring('test', 'test'));
console.log('Is the same word unordered', isSubstring('test', 'stte'));
