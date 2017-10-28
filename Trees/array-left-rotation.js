function leftArrayRotation(input, array) {
    // Set startIndex at indexOf(array)
    var startIndex = array.indexOf(input.start_point);
    // Set SET as array
    var SET = array;
    console.log('Original    ', array);
    
    // Set iterations = 0
    var iterations = 1;
    // While iterations < rotations
    while(iterations <= input.rotations) {
        // set push value
        var push = SET[startIndex];
        // pop SET
        SET.pop();
        // push to SET
        SET.unshift(push);
        console.log('rotation: ', iterations, SET);
        
        // iterate i
        iterations++;
    // End while
    }
    
    // return SET
    console.log('RESULT    = ', array);
};

leftArrayRotation({ start_point: 5, rotations: 4}, [1, 2, 3, 4, 5]);