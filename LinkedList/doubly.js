// Doubly linked list
function dll(){  
    this.head = null;
    this.tail = null;
    this._length = 0;
}

// Operations
// Insertion, Delete, Search

// Insertion - Add node to beginning of list
dll.prototype.insert = function(value) {
    var node = {
        data: value,
        next: null,
        previous: null
    };

    // No data exists    
    if(!this._length) {
        this.head = node;
        this.tail = node;
    }
    // Nodes exist, insert
    else {
        // Close the doubly linked list
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    }

    this._length++;

    console.log('Inserted node at ', this._length);
    
    return node;
}

// Deletion - Deletes node from list with given position
dll.prototype.delete = function(position) {
    var currentNode = this.head;
    var deletedNode, nodeToDelete, nodeBeforeDeleted, nodeAfterDeleted = null;
    var count = 0;
    
    // Invalid position
    if(this._length === 0 || position < 0 || position > this._length) {
        throw new Error('There is no node at that position in the linked list.');
    }

    // Position at first node
    if(position === 0) {
        // Must update the head if first item is deleted 
        if(!currentNode.next) {
            // Assign next link with null previous link of deleted item
            currentNode.previous = null;
        } else {
            // If there are more nodes after first node
            this.tail = null;
        }
    } 
    // Last node is removed
    else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    } 
    // Any other node removed
    else {
        while(count < position) {
            currentNode = currentNode.next;
            count++;
        }

        nodeBeforeDeleted = currentNode.previous;
        nodeToDelete = currentNode;
        nodeAfterDeleted = currentNode.next;

        nodeBeforeDeleted.next = nodeAfterDeleted;
        nodeAfterDeleted.previous = nodeBeforeDeleted;
        
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;


    console.log('Found and deleted ', deletedNode);
        
    return deletedNode;
}


// Search - Searches an node from list with given position
dll.prototype.search = function(position) {
    var currentNode = this.head;
    var count = 0;
    
    // Invalid position
    if(this._length === 0 || position < 1 || position > this._length) {
        throw new Error('There is no node that exists at that position.');
    }

    // Valid position
    while(count < position) {
        // Loop through nodes until position matches count
        currentNode = currentNode.next;

        count++;
    }
    console.log('Searched and found ', currentNode);
    return currentNode;
}


var DoublyLinkedList = new dll();

// DoublyLinkedList.insert(2);
// DoublyLinkedList.insert(3);
// DoublyLinkedList.delete(0);
// DoublyLinkedList.search(1);
