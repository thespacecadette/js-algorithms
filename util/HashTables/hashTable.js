var data = require('./data.js');

function HashTable(max) {
    this.storage = new Map();
    this.max = max;
};

// 
HashTable.prototype.createHash = function(key) {
    var hash = 0;

    // create hash
    for(var i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash = hash >>> 0; // convert to 32bit unsigned integer
    }

    return Math.abs(hash % this.max);
};

HashTable.prototype.insert = function(key, value) {
    if(!key || !value || key.length === 0 || value.length === 0) {
        throw ('Insertion of undefined key/value');
    }

    var hashIndex = this.createHash(key);

    this.storage.set(hashIndex, value);

    return this;
}

HashTable.prototype.search = function(key) {
    var hashIndex = this.createHash(key);

    return key + ': ' + this.storage.get(hashIndex);
}

var dict = new HashTable(100);

// Insert data from data.js into HashTable
for(var key in data) {
    dict.insert(key, data[key]);
}

// Loop up definitions
for(var key in data) {
    console.log(dict.search(key));
}



