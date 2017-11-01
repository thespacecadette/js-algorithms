// Doubly Linked List

function DoublyLinkedList() {
    this.head = null;
    this._length = 0;
}

var Node = require('./Doubly-Node.js');

// Operations - insert, delete, search

DoublyLinkedList.prototype.insert = function(value) {    
    var startPointer = this.head;
    var node = new Node();

    if(this._length === 0) {
        this.head = new Node(value);
    }else {
        while(startPointer && startPointer.next) {
            startPointer = startPointer.next;
        }

        startPointer.next = {
            value: value,
            previous: startPointer,
            next: null
        };
    }
    this._length++;

    return;
    
}

// Note: We are replacing deleted item with a null value
DoublyLinkedList.prototype.delete = function(position) {
    var node = new Node();
    
    if(position === 0) {
        // if first position
        // if length = 1, destroy
        // else: REMOVE first item, set null pointer to next item in sequence
        if(this._length === 1) {
            this.head = node;
        } else {
            this.head.next.previous = null;
            this.head = this.head.next;
        }
        this._length--;
        
        return;        
    } 
    // else
    else {
        var startPointer = this.head;
        var count = 0;

        while(count < this._length) {
            startPointer = startPointer.next; // shifting through
            // loop through loop until position found
            if(count === position) {
                // REMOVE item, update previous item link to NEXT item link,
                startPointer.previous.next = startPointer.next.previous;
                startPointer = node;
                // update NEXT item previous to PREVIOUS item
                this._length--;

                return;
            }
        }
    }
    // BOOYAKASHAH
    
}

DoublyLinkedList.prototype.find = function(value) {
    var currentNode = this.head;
    
    while(currentNode.next) {
        if(currentNode.value === value) {
            return currentNode;
        }

        currentNode = currentNode.next;
    }

    return currentNode.value === value;

}

DoublyLinkedList.prototype.display = function() {
    return this;
}

var ll = new DoublyLinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.delete(0);
// ll.delete(0);

var test = ll.display();

console.log(test);
console.log('find node 1', ll.find(2));

return module.exports = DoublyLinkedList;