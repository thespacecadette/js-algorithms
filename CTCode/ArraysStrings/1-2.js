function reverseString(string) {
    // Test
    console.time(string);
    var logger = 0;
    
    var set = string.split('');

    var new_set = [];

    var iterator = set.length - 1;

    while(iterator >= 0) {
        new_set.push(set[iterator]);
        logger++;

        iterator--;
    }

    console.timeEnd(string);
    console.log('O(n) ', logger);
    
    return new_set.join('');
}

var test1 = reverseString('wolf');
// var test2 = reverseString('wolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolfwolf');

