// Linked List

function LinkedList() {
    this.head = null;
    this._length = 0;
}

// Operations - insert, delete, search

LinkedList.prototype.insert = function(value) {
    var node = {
        value: value,
        next: null,
    };

    var currentNode = this.head;

    // Use case: empty list
    if(!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // Non empty list
    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
}

// Note: We are replacing deleted item with a null value
LinkedList.prototype.delete = function(value) {
    var currentNode = this.head;
    var deletedNode = null;
    var count = 0;

    // Use case: first item (assign null)
    if(currentNode.value === value) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // Use case: other than first item
    while(currentNode.next) {
        // If next value is value, 
        // Update next link
        // Empty next value
        if(currentNode.next.value === value) {
            deletedNode = currentNode.next;
            currentNode.next.value = null;
            currentNode.next = currentNode.next.next;
            this._length--;

            return deletedNode;
        }
    }

    return deletedNode;
}

LinkedList.prototype.find = function(value) {
    var currentNode = this.head;
    
    while(currentNode.next) {
        if(currentNode.value === value) {
            return currentNode;
        }

        currentNode = currentNode.next;
    }

    return currentNode.value === value;

}

LinkedList.prototype.display = function() {
    return this;
}

// var ll = new LinkedList();

// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.delete(2);

// var test = ll.display();

// console.log('Linked List --> 1, 2, 3 ---> -2', test);
// console.log('find node 1', ll.find(1));

return module.exports = LinkedList;