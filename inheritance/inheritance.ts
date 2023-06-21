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

abstract class EmployeeAbstractClass {
  constructor(private firstname: string, private lastname: string){
    
  }
  abstract getSalary(): number
  getFullName(): string{
    return `${this.firstname} ${this.lastname}`
  }
  statement(greeting: string): string{
    return `${greeting} ${this.getFullName()} your salary is ${this.getSalary()}`
  }
}

class fullTimeEmployee extends EmployeeAbstractClass{
  constructor(firstname:string,lastname:string, private salary: number){
    super(firstname, lastname)
  }
  getSalary(): number {
      return this.salary
  }
  statement(): string {
    return `${super.statement('hello')}`
      
  }
}
let john = new fullTimeEmployee('john', 'doe', 500000)
console.log(john.statement());

