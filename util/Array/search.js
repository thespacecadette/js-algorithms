// Search Algorithm (k, LA)

// Priori analysis
// 1. Start
// 2. Set i = 0
// 3. Repeat steps 4 and 5 while i < n
// 4. If LA[i] == k, STEP 6
// 5. i++
// 6. Print index, k
// 7. Stop

function search(k, LA) {
    var i = 0;
    var n = LA.length;

    while (i < n) {
        if(LA[i] == k) {
            break;
        }
        i++;
    }

    console.log("The array element was found at index: ", i, " -- ", LA[i]);
}

search('blerg', ['test', 'blerg', 'wabadabawugbug']);