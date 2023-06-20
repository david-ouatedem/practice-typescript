"use strict";
class myClass {
    id;
    print() {
        console.log('print funtion initialized');
        console.log(this.id);
    }
}
let classVariable = new myClass();
classVariable.id = 2023;
classVariable.print();
class point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        // this.y = y
    }
}
//# sourceMappingURL=classes.js.map