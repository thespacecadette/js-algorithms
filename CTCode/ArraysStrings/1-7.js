function setMatrix(input) {
    var length = input.length;

    var matrix = input;
    var colsRows = [];

    for (var i = 0; i < length; i++) {
        for (var d = 0; d < input[i].length; d++) {
            if (matrix[i][d] === 0) {
                colsRows.push(i, d);
            }
        }
    }

    // Clear columns
    for (var i = 0; i < ((colsRows.length - 1) / 2); i++) {
        var newSet = '0 '.repeat(matrix[colsRows[i]].length - 1) + '0';
        matrix[colsRows[i]] = new String(newSet).split(' ');

        // Clear rows
        for (var d = 0; d < ((colsRows.length - 1) / 2); d++) {
            matrix[i][colsRows[d+1]] = 0;
        }
    }


    console.log('All cols and rows to be deleted', colsRows);

    return matrix;
}

var data = [[1, 2, 3], [0, 2, 5, 5]];

var answer = setMatrix(data);

console.log('setMatrix ---> ', answer);