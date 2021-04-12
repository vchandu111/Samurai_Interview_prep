// Question 1

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,  // this is not work in arrow function so we can"t use arrow function
      //In this case ans => B: 20 and NaN
 perimeter: function()  {return 2 * Math.PI * this.radius},
 //In this case ans => A: 20 and 62.83185307179586
};

console.log(shape.diameter());
console.log(shape.perimeter());


// Question 2

console.log(+true)  // + give number +true is give 1 and +False give 0 that is use in toggle
console.log(!'Lydia')// so its give boolen value "not equal to that value"
// ans =>  A: 1 and false

// Question 3

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));
// A: orange
// B: purple
// C: green
// D: TypeErro


// Question 4

 function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

//console.log(member.getFullName());

// Ans :- A TypeError // we access method outside we need prototype then we asscess all data of member object
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// Ans:- Lydia hallie


// Question 5 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah =  Person('Sarah', 'Smith');
// there is no "new key word so we can't make a new object and its give undefined
console.log(lydia);
console.log(sarah);

//Ans:=>  A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined

