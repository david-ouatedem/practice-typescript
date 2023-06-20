type calculate = {
  x: number
  y: number
  z: number
}
// const calculate = (x: number, y: number, z: number) => {
//   return (x * y) + z
// }

const calculate = ({x, y, z}: calculate): number => {
  return (x * y) + z
}

const result: number = calculate({x:5, y:8 , z:9})

console.log(result);

function concatWithDefault(a: string, b: string = "default") {
  console.log(a + b);
  }

  // function callbacks 
  const headerText = (text: string) => {
    console.log(text);
    
  }

  // function myCallback(text:string):void{}

  const messageText = (message: string, callbackFn = (text:string):void =>{}) => {
      console.log(message);
      callbackFn('some dummy text')
  }