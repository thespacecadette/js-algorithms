// Update Algorithm (LA, k, ITEM)

// Priori analysis
// 1. Start
// 2. Set LA[k] = ITEM
// 3. Print index, k
// 4. Stop

function update(LA, k, ITEM) {
    var j = k -1;
    
    LA[j] = ITEM; 

    console.log("The array element was updated at index: ", j, " -- ", LA[j]);
}

update(['I', 'am', 'exhausted'], 3, 'excited');