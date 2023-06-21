"use strict";
// interface inheritance 
class IdNameClass {
    name = 'william';
    id = 0;
}
// class inheritance 
class Person {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    describe() {
        return `this is ${this.firstname} ${this.lastname}`;
    }
}
class Employee extends Person {
    jobTitle;
    constructor(firstname, lastname, jobTitle) {
        super(firstname, lastname);
        this.jobTitle = jobTitle;
    }
    describe() {
        return super.describe() + ` I am ${this.jobTitle}`;
    }
}
let employee = new Employee('dave', 'ouatedem', 'front-end developer');
console.log(employee.describe());
// abstract classes
class EmployeeAbstractClass {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    statement(greeting) {
        return `${greeting} ${this.getFullName()} your salary is ${this.getSalary()}`;
    }
}
class fullTimeEmployee extends EmployeeAbstractClass {
    salary;
    constructor(firstname, lastname, salary) {
        super(firstname, lastname);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    statement() {
        return `${this.getFullName()} ${super.statement('hello')}`;
    }
}
let john = new fullTimeEmployee('john', 'doe', 500000);
console.log(john.statement());
//# sourceMappingURL=inheritance.js.map