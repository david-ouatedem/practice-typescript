interface constructorInterface {
  name: string
  id: number
}

class myConstructor implements constructorInterface {
  name: string;
  id: number;

  constructor(name:string, id: number) {
    this.id = id
    this.name = name
  }
}
let myConstructor2 = new myConstructor('dave', 122)
console.log(myConstructor2);
