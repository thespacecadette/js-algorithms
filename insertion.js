// Insertion Algorithm (LA, k, ITEM)

// Priori analysis
// 1. Start
// 2. Set j = k-1
// 2. Insert ITEM after LA[k-1]
// 4. Stop

function insertion(LA, k, item) {
    var j = k - 1;

    LA.splice(k, 0, item);
    console.log("The array element was inserted at index: ", k, " -- ", LA);
}

insertion(['I', 'am'], 2, 'wabadaba lub dub');