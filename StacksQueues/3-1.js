// 3.1 Describe how you could use a single array to implement three stacks.

function StackManager() {
    this.stack = [
    ]
}

// 1. Array of objects 

var stack = [
    {
        name: 'stack 1',
        stack: [1, 2, 3, 4, 5]
    },
    {
        name: 'stack 1',
        stack: [3, 4, 2]
    },
    {
        name: 'stack 1',
        stack: [4, 4, 6]
    },
]

StackManager.prototype.addStack = function (name, stack) {
    this.stack.push({
        name: stack
    });
};

StackManager.prototype.get = function (name) {
    var result;
    
    for (var i = 0; i < this.stack.length; i++) {
        var test = this.stack[i].name.toString();
        console.log('DA FUCK', this.stack)
        if (this.stack[i].name.toString() == name) {
            result = this.stack[i].name;
        }
    }


    return result
};

var sm = new StackManager();

sm.addStack('test', [2, 4, 5]);
// sm.addStack('smack', [2, 4, 5]);
// sm.addStack('trash', [2, 4, 5]);

console.log(sm.get('test'));