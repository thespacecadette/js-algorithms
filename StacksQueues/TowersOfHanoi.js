function TowersOfHanoi() {
    // Stacks
    this.left = [];
    this.middle = [];
    this.right = [];
    this.logger = 0;
};

// (A) Only one disk can be moved at a time.
// (B) A disk is slid off the top of one rod onto the next rod.
// (C) A disk can only be placed on top of a larger disk.

TowersOfHanoi.prototype.start = function(disks) {
    console.log('beginning game ...');
    this.left = disks;

    // 1 move for every 2n disks
    // while(this.left.length > 0) {
        // console.log(this.left);
        this.shiftDiscFromLeftToMiddle(this.left.shift());
        this.shiftDiscFromLeftToRight(this.left.shift());
        this.shiftDiscFromLeftToMiddle(this.left.shift());        
        this.shiftDiscFromMiddleToLeft(this.middle.shift());        
        this.shiftDiscFromRightToMiddle(this.right.shift());        
        this.shiftDiscFromLeftToMiddle(this.left.shift());
    // }

    this.display();
};

TowersOfHanoi.prototype.shiftDiscFromLeftToRight = function(disk) {    
    this.right.push(disk);
    this.logger++;
    console.log('NEXT MOVE: ', this.left, this.middle, this.right);
};

TowersOfHanoi.prototype.shiftDiscFromLeftToMiddle = function(disk) {
    this.middle.push(disk);
    this.logger++;
    console.log('NEXT MOVE: ', this.left, this.middle, this.right);    
};

TowersOfHanoi.prototype.shiftDiscFromMiddleToLeft = function(disk) {
    this.left.push(disk);
    this.logger++;
    console.log('NEXT MOVE: ', this.left, this.middle, this.right);    
};

TowersOfHanoi.prototype.shiftDiscFromRightToMiddle = function(disk) {
    this.middle.push(disk);
    this.logger++;
    console.log('NEXT MOVE: ', this.left, this.middle, this.right);    
};

TowersOfHanoi.prototype.display = function() {
    console.log('__________________________________');
    console.log('__________________________________');
    console.log('       ', this.left, this.middle, this.right);
    console.log('__________________________________');    
    console.log('__________________________________');
    console.log('Number of moves ', this.logger);        
}

// Lets gooo
var game = new TowersOfHanoi();
game.start([1, 2, 3]);
