// Given an image represented by an NxN matrix, 
// where each pixel in the image is 4 bytes
// write a method to rotate the image by 90 degrees. 
// Can you do this in place?

function rotateMatrix(input) {
    // Basically, R = row, C = column so Rn x Rc
    // Rotate starting from R(1) --> C(n length)... R(n) --> C(1)
    var n = input.length;
    var nIndex = input.length - 1;

    var startRow = 0;

    var matrix = new Array(n);

    // create columns
    for (var i=0; i < n; i++) {
        // create row
        if (!matrix[i]) {
            matrix[i] = new Array(n);
        }

        for (var dimension = 0; dimension < n; dimension++) {
            // apply new values
            matrix[i][dimension] = input[nIndex - dimension][i];
        }
        
        startRow++;
    }

    console.log('matrix', matrix);

    // Print result
    return matrix;
}

// For simplicitys sakes, using multidimensional array
var testMatrix = [
    [1, 2, 1, 3],
    [3, 5, 4, 2],
    [6, 3, 2, 8],
    [2, 4, 7, 9]
];

var answer = rotateMatrix(testMatrix);

console.log('rotate Matrix', answer);