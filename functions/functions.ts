function addTwo(num: number): number{
  return num + 2
}
addTwo(8)

function getUpper(val: string): string{
  return val.toLocaleUpperCase()
}
getUpper('hello')

function signUpUser(name: string, email: string, isPaid: boolean){
  // return what you need
}
signUpUser('dave', 'dav@dev.com', false)

// to assign types to a function you have to asign the type of what the function takes in if any and assign the type of what it returns
