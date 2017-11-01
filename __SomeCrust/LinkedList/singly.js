// Singly linked list
function sll(){  
    this.head = null;
    this._length = 0;
}

// Operations
// Insertion, Delete, Search

// Insertion - Add element to beginning of list
sll.prototype.insert = function(value) {
    var node = {
        data: value,
        next: null
    };
    var currentNode = this.head;
    
    // Use case: empty list
    if(!currentNode) {        
        this.head = node;
        this._length++;

        return node;
    }
    
    // Use case: non-empty list
    while(currentNode.next) {
        // Assign next links to all nodes
        currentNode = currentNode.next;        
    }

    // // Assign last node with next null link
    currentNode.next = node;

    this._length++;

    console.log('Inserted node at ', this._length);
    
    return node;
}

// Deletion - Deletes element from list with given position
sll.prototype.delete = function(position) {
    var currentNode = this.head;
    var deletedNode, nodeToDelete, nodeBeforeDeleted = null;
    var count = 0;
    
    // Invalid position
    if(position < 0 || position > this._length) {
        console.error('There is no node at that position in the linked list.');
    }

    // Position at first node
    if(position === 0) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // Position any other node
    while(count < position) {
        // Loop through nodes until position matches count
        nodeBeforeDeleted = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    deletedNode = nodeToDelete;
    nodeToDelete = null; // clear deleted node

    this._length--;
    console.log('Found and deleted ', deletedNode);
        
    return deletedNode;
}


// Search - Searches an element from list with given position
sll.prototype.search = function(position) {
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


var SinglyLinkedList = new sll();

// SinglyLinkedList.insert(2);
// SinglyLinkedList.insert(3);
// SinglyLinkedList.delete(3);
// SinglyLinkedList.search(1);
