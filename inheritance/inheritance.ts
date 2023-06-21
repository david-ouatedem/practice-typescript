// interface inheritance 

interface iBase {
  id: number
}
interface iDerivedFromBase extends iBase {
  name: string
}
class IdNameClass implements iDerivedFromBase{
  name: string = 'william'
  id: number = 0
}

// class inheritance 
class Person {
  constructor(private firstname:string, private lastname: string){
    this.firstname = firstname
    this.lastname = lastname
  }
  getFullName(): string{
    return `${this.firstname} ${this.lastname}`
  }
  describe(): string{
    return `this is ${this.firstname} ${this.lastname}`
  }
}
class Employee extends Person {
  constructor(
    firstname: string,
    lastname: string,
    private jobTitle: string
  ){
    super(firstname, lastname)
  }
  describe(): string {
      return super.describe() + ` I am ${this.jobTitle}`
  }
}
let employee = new Employee('dave', 'ouatedem', 'front-end developer')
console.log(employee.describe());

// abstract classes