"use strict";
// generic syntax
function printGeneric(value) {
    console.log(value);
    console.log(typeof value);
}
// printGeneric(1)
// printGeneric('test')
// printGeneric(true)
// printGeneric({id: 1})
// printGeneric(() => {})
// printGeneric<string>('test')
// multiple generic types
function multipleGenerics(first, second) {
    console.log(`${first}, ${second}`);
}
// multipleGenerics('hello', 12)
// multipleGenerics(true, () => {})
// multipleGenerics('okay', {name: 'dave'})
// constraining the type of T
class concatenator {
    concatenateArray(items) {
        let returingString = "";
        for (let i = 0; i < items.length; i++) {
            returingString += i > 0 ? "," : "";
            returingString += items[i].toString();
        }
        return returingString;
    }
}
let concator = new concatenator();
let concateResult = concator.concatenateArray(['first', 'second', 'third']);
console.log(concateResult);
concateResult = concator.concatenateArray([1, 2, 3]);
console.log(concateResult);
//# sourceMappingURL=generics.js.map