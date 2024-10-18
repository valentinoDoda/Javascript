"use strict";
const person = {
  firstName: "Name",
  lastName: "Lastname",
  age: 10,
  print: function () {
    console.log(
      `${this.firstName} , ${this.lastName}, is ${this.age} years old`
    );
  },
};
const valentin = Object.assign({}, person);
[valentin.firstName, valentin.lastName, valentin.age] = [
  "Valentin",
  "Doda",
  21,
];
person.print();
valentin.print();
