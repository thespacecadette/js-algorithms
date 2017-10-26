// Binary search(LA, x)

function binarySearch(LA, x) {
    // Set u to upper bound, l to lower bound
    var u = LA.length;
    var l = 1;

    var j;

    // While X not found
    while(!j) {
        // if u < l, x does not exist
        if(u < l) {
            j = 0;
        }

        // Set midpoint = low + (high - low) / 2
        var midpoint = parseInt(l + (u - l) / 2);

        // if A[midpoint] < x, set lowerBound = midPoint + 1
        if(LA[midpoint] < x) {
            l = midpoint + 1;
            midpoint = parseInt(l + (u - l) / 2)
        }

        // if A[midpoint] > x, set upperBound = midPoint - 1
        if(LA[midpoint] > x) {
            l = midpoint - 1;
            midpoint = parseInt(l + (u - l) / 2)
        }

        // if A[midpoint] = x, exit
        if(LA[midpoint] = x) {
            j = midpoint;
        }
    // End while
    }

   console.log("The element was found at index: ", j);
}

binarySearch([2, 4, 6, 12, 17, 22, 25, 31], 25);