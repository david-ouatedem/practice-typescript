"use strict";
var logState;
(function (logState) {
    logState[logState["logedIn"] = 0] = "logedIn";
    logState[logState["logedOut"] = 1] = "logedOut";
})(logState || (logState = {}));
// const enum logState {
//   logedIn,
//   logedOut
// }
// enum logState {
//   logedIn = 0,
//   logedOut = 1
// }
// enum logState {
//   logedIn =  'loged-in',
//   logedOut = 'loged-out'
// }
const checkLogedState = (state) => {
    switch (state) {
        case logState.logedIn:
            console.log("is loged in");
            break;
        case logState.logedOut:
            console.log("is loged out");
            break;
    }
};
checkLogedState(logState.logedIn);
checkLogedState(logState.logedOut);
//# sourceMappingURL=enums.js.map