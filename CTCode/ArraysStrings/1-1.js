var allUniqueChars = function (set) {
    // set length
    var length = set.length;

    // var comparator index
    var cIndex = 0;

    var iterations = 0;

    while(cIndex < length) {        
        // comparision sort
        for(var i = cIndex + 1; i < length; i++) {
            iterations++;
            if(set[cIndex] === set[i]) {
                // if YES, return false
                return false;
            }
        }

        // if NO for cIndex, move to next item
        cIndex++;
    }
    
    console.log('O(n log', Math.pow(length, iterations), ')');

    return true; // if no match, return true
};


var data = [2, 3, 4, 20, 40];

var answer = allUniqueChars(data);

console.log(answer);