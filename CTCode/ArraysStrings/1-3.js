function removeDuplicateChars(string) {
    // Test
    console.time('TIME: ');
    
    var set = string.split('');
    var iterator = 0;

    var logger = 0;

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
// var test2 = removeDuplicateChars('wolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolf');

console.log('removeDuplicateChars() ---> ', test1);
// console.log(test2, 'O(n) - time is constant');
