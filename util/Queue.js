var Node = require('./Node.js');


// First in first out
function Queue() {
    this.front = null;
    this.back = null;
}

// Operations - enqueue, dequeue, peek, isEmpty
Queue.prototype.enqueue = function(value) {
    var node = new Node(value);
    
    // empty queue
    if(this.front === null) {
        this.front = node;
        this.back = node;
    }

    var current = this.back;
    // imagine a line of pots on stoves
    // essentially moving pots along stoves
    // last in...
    this.back = node;
    current.next = this.back;
}

Queue.prototype.dequeue = function() {    
    // empty queue
    if(this.front === this.back) {
        this.front = node;
        this.back = node;

        return;
    }

    // First out
    // Replacing pot in front with next pot
    this.front = this.front.next
    return;
}

Queue.prototype.peek = function() {
    return this.front ? this.front.value : null;
}

Queue.prototype.isEmpty = function() {
    return this.front === null;
}

return module.exports = Queue;