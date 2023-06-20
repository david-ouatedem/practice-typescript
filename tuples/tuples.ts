let myTuple:readonly[string, Boolean, Number]

myTuple = ['text', false, 5]

// tuple destructuring

let [tupleString, tupleBool, tupleNumber] = myTuple

console.log(tupleString, tupleBool, tupleString);
