//var LinkedList = require('./Singly.js');
var Node = require('./../util/Node.js');

// Write code to 
// remove duplicates from unsorted linked list
function LinkedList() {
    this.head = null;
}

// TODO: 
// LinkedList.prototype.removeDuplicates = function () {
//     var startPointer = this.head;
//     var node = new Node();

//     while(startPointer && startPointer.next) {
        
//     }

//     console.log('newList', newList);

//     return;
// }

LinkedList.prototype.display = function () {
    return this;
};

var ll = new LinkedList();

ll.insert(1);
ll.insert(1);
// ll.removeDuplicates();

var answer = ll.display();

console.log('RemoveDuplicates ---> ', answer);