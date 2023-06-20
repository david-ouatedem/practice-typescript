class myClass {
  id: number | undefined
  print():void{
    console.log('print funtion initialized');
    console.log(this.id); 
  }
}
let classVariable = new myClass()
classVariable.id = 2023 
classVariable.print();

class point {
  x: string
  y!: string

  constructor(x: string, y: string) {
    this.x = x
    // this.y = y
  }
}