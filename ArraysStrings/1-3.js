function removeDuplicateChars(string) {
    if(!string || string === '' || typeof string !== 'string') {
        return ''
    }
    // Test
    console.time('TIME: ');
    
    var set = string.split('');
    var iterator = 0;

    var logger = 0;

    if(set.length === 1) {
        return string;
    }

    while(iterator < set.length) {
        for(var i = iterator + 1; i < set.length; i++) {
            if(set[iterator] === set[i]) {
                set[i] = '';
            }
            logger++;
        }

        iterator++;
    }

    console.timeEnd('TIME: ');
    console.log('O(n LOG', Math.log(set.length, logger), ') ');

    return set.join('');
}

var test1 = removeDuplicateChars('wwwwolfw');

console.log('removeDuplicateChars() ---> ', test1);

// TEST CASES 
// undefined/empty/not a string
// var t1 = removeDuplicateChars();

// // string has 1 character
// var t2 = removeDuplicateChars('a');

// // string has the same characters
// var t3 = removeDuplicateChars('aaaaaaa');

// // string has unique characters
// var t4 = removeDuplicateChars('super');

// console.log('_______________________________________');
// console.log('                TESTS');
// console.log('_______________________________________');
// console.log('undefined/empty/not a string ---> ', t1);
// console.log('_______________________________________');
// console.log('string has 1 character ---> ', t2);
// console.log('_______________________________________');
// console.log('string has the same characters ---> ', t3);
// console.log('_______________________________________');
// console.log('string has unique characters ---> ', t4);
// console.log('_______________________________________');