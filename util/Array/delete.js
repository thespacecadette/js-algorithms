// Delete Algorithm (LA, ITEM)

// Priori analysis
// 1. Start
// 2. Set i = 0
// 3. Repeat steps 4 and 5 while i < n
// 4. If LA[i] == ITEM, go to Step 6
// 5. i++
// 6. Delete LA[k]
// 7. Print updated array
// 8. Stop

function deleteAlgorithm(LA, ITEM) {
    var i = 0;
    var n = LA.length;
    
    while(i < n) {
        if(LA[i] == ITEM) {
            LA.splice(i, 1);
        }
        i++;
    }

    console.log("The array element was deleted ", LA);
}

deleteAlgorithm(['I', 'am', 'exhausted'], 'exhausted');