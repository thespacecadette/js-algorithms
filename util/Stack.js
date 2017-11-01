var Node = require('./Node.js');

function Stack() {
    this.top = null;
}

Stack.prototype.push = function(item) {
    // Last in
    var node = new Node();

    node.next = this.top;
    this.top = node;
}

Stack.prototype.pop = function() {
    // First out
    var popped = this.top;

    while(this.top) {
        this.top = this.top.next;
    }

    return popped.value;
}

Stack.prototype.peek = function() {
    return this.top ? this.top.value : null;
}

Stack.prototype.isEmpty = function() {
    return this.top === null;
}

return module.exports  = Stack;