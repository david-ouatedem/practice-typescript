enum logState {
  logedIn,
  logedOut
}
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

const checkLogedState = (state: logState) => {
  switch(state){
    case logState.logedIn: console.log("is loged in");
    break
    case logState.logedOut: console.log("is loged out");
    break
  } 
}
checkLogedState(logState.logedIn)
checkLogedState(logState.logedOut)