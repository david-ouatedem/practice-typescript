// simple class definition
class someClass {
  id: string | undefined;
  print(): void {
    console.log("simple class initialization");
  }
}
let someNewClass = new someClass();
someNewClass.print();

// the this keyword
class simpleClass {
  id: number | undefined;
  print(): void {
    console.log(this.id);
  }
}
let mySimpleClass = new simpleClass();
mySimpleClass.id = 2023;
mySimpleClass.print();

//NB: to access the properties of a class within the class we use the this keyword and to access the properties of a class outside the class we have to create a new instance of the class using the new keyword

// implementing interface
interface iPrint {
  print(): void;
}
function printClass(a: iPrint) {
  a.print();
}
class classA implements iPrint {
  print(): void {
    console.log("class A called");
  }
}
class classB implements iPrint {
  print(): void {
    console.log("class B called");
  }
}
let ClassA = new classA();
let ClassB = new classB();
printClass(ClassA);
printClass(ClassB);

// the interface is used to define the structure of properties and function that classA and classB are going to take. make sure the classes implements the interface. the function takes in an object of type of the interface iPrint thus it can be used to call new instances of the classes since classes are somehow objects and implements the type iPrint as well as the the function parameter.

class classC {
  id: string | undefined;
  print(): void {
    console.log("class C called");
  }
  a(): void {
    console.log(this.id);
  }
}
let ClassC = new classC();
printClass(ClassC);

// note that TS duck typing rules will ensure that the instance of the class passed in the printClass function has thesame shape as the interface which is used to attribute type to the function parameter. even tho we added an id and log it, it will still work because it still uses the print function to log the id, it works to if we add another function but will not log to the console what the a function returns since the printClass function can only access the function present in the interface. it stops working if the print function is not present

// class constructors
class ClassWithConstructor {
  id: number;

  constructor(_id: number) {
    this.id = _id;
  }
}
let classWithConstructor = new ClassWithConstructor(12);
console.log(classWithConstructor);

// class modifiers
class ClassWithPublicProperty {
  public id: number;
  constructor(id: number) {
    this.id = id;
  }
}
let classWithPublicProperty = new ClassWithPublicProperty(10);

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}
let classWithPrivateProperty = new ClassWithPrivateProperty(10);

// privite doesn't allow the properties of the class to be accessed from outside the class or subclasses while public does, there is also the protected property which allows the class properties to be accessed only within the class and sub classes. You can also make the properties of a constructor private, public or protected. you can also add properties like readonly

// Getters and Setters
class ClassWithAccessors {
  private _id: number = 0;

  get id(): number {
    console.log("get id property");
    return this._id;
  }
  set id(value: number) {
    console.log("set id property");
    this._id = value;
  }
}
let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 78;
console.log(classWithAccessors);

// static properties
class StaticProperty {
  static count: number = 0;

  updatecount() {
    StaticProperty.count++;
  }
}
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updatecount();
console.log(StaticProperty.count);
secondInstance.updatecount();
console.log(StaticProperty.count);
firstInstance.updatecount();
console.log(StaticProperty.count);

// namespaces
namespace FirstNameSpace {
  export class NameSpaceClass {}
  class NotExported {}
}
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();

// the class NotExported cannot be accessed outside the namespace because it doesn't have the axport keyword

class User {
  private _courseCount = 0
  private readonly city: string = "Yaounde";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  get courseCount(){
    return this._courseCount
  }
  set courseCount(courseNum){
    if(courseNum < 1){
      throw new Error("buy a course")
    }
    this._courseCount = courseNum
  }

}

const newUser = new User("dav@.com", "david");
