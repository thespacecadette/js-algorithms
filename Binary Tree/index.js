// BINARY TREE

// Operations - insert, search, update

function Node(value) {
    this.leftChild = null;
    this.rightChild = null;
    this.value = value;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function (value) {
    var node = new Node(value);

    // if no root node, create
    if (!this.root) {
        this.root = node;
        return;
    }

    // else 
    var currentNode = this.root;

    while (currentNode) {
        // if value < currentNode
        if (value < currentNode.value) {
            if (!currentNode.leftChild) {
                // if no left node exists, create left node
                currentNode.leftChild = node;
                break;
            } else {
                // else push to left node child
                currentNode = currentNode.leftChild;
            }
        } else {
            // else // right node
            if (!currentNode.rightChild) {
                // if no right node, create right node
                currentNode.rightChild = node;
                break;
            } else {
                // else push to right node
                currentNode = currentNode.rightChild;
            }
        }
    }
}

BinaryTree.prototype.search = function(value) {
    var current = this.root;

    if(!current) {
        return;
    }

    // While (current)
    while(current) {
        if(value < leftChild.value) {
            // traverse down left tree
            current = current.leftChild;
        } else if(value > rightChild.value){
            // traverse down right tree
            current = current.rightChild;
        } else {
            return true;
        }
    }
}

BinaryTree.prototype.display = function() {
    return this;
}

var tree = new BinaryTree();

tree.insert(2); // Root node
tree.insert(3); // Right node

console.log(tree.display());

