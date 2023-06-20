"use strict";
// const calculate = (x: number, y: number, z: number) => {
//   return (x * y) + z
// }
const calculate = ({ x, y, z }) => {
    return (x * y) + z;
};
const result = calculate({ x: 5, y: 8, z: 9 });
console.log(result);
function concatWithDefault(a, b = "default") {
    console.log(a + b);
}
// function callbacks 
const headerText = (text) => {
    console.log(text);
};
// function myCallback(text:string):void{}
const messageText = (message, callbackFn = (text) => { }) => {
    console.log(message);
    callbackFn('some dummy text');
};
//# sourceMappingURL=functions.js.map