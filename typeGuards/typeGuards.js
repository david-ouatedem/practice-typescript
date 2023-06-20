"use strict";
//  without type guard 
// const add = (x: string|number, y: string|number) => {
//   return x + y
// }
// const output: number|string = add(2, 5) 
// console.log(output);
// with type guard
const add2 = (x, y) => {
    if (typeof x === 'string') {
        return x + y;
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return x.toString() + y.toString();
};
const output2 = add2(2, 5);
console.log(output2);
//# sourceMappingURL=typeGuards.js.map