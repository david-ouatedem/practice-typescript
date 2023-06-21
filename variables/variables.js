"use strict";
// string
let greetings = "hello dave";
greetings.toLowerCase();
console.log(greetings);
// number
let userId = 556982;
userId.toFixed();
//boolean
let loggedIn = false;
loggedIn.valueOf();
// NB: variables can infer the type of thier values so no need to place the type anotation. using strict type on variables like the ones above is bad practice. 
// any 
let hero;
function getHero() {
    return 'thor';
}
hero = getHero();
//NB: it is bad practice to use any, you should avoid it
//# sourceMappingURL=variables.js.map