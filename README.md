# Samurai_Interview_prep

## Key Points :
- Explore the topic with examples and write as many examples  you want to make that concept clear
- Don't copy paste the same code snippets , run in your terminal and play with it .
- Be consistent in interview preparation
- Don't think as additional burden , it is just because of your improvement in interviews.
- All the best
# Day 1
1) Difference between Primitive vs Non Primitive data types with examples
2) Write short notes on mutability with examples
3) Array methods - slice , splice , concat , findIndex , sort , reverse , split , join   
 - follow this link for all these methods with examples
 https://javascript.info/array-methods


# Day 2

4) What is JSON and its common operations 
5) What is Hoisting , explaining about var hoisting with examples
6) What is the main difference between localStorage and sessionStorage
7) What is the difference between null and undefined
8) What is the difference between an attribute and a property ? give examples
9) What are events and its types
10) How do you combine two or more arrays
11) What happens if we add two arrays? show with examples
12) Difference between alert and prompt ? 


# Day 3
1) What are the different ways to access object properties
2) What is Hoisting
3) What is scope in javascript
4) What is the purpose of the let keyword
5)  What's the output?
```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}
*
sayHi();

A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError
```
7) What's the output?
```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

A: true false true
B: false false true
C: true false false
D: false true true
```
8) What's the output?
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined

# Day 4

1) What is the difference between Call, Apply and Bind with examples
2) What is JSON and its common operations 
3) What are the methods available on session storage
4) What is the difference between == and === operators
5) What is a promise , Why do you need a promise , What are the three states of promise
6) What is promise chaining
```
# Day 4

1) What is the difference between Call, Apply and Bind with examples
2) What is JSON and its common operations 
3) What are the methods available on session storage
4) What is the difference between == and === operators
5) What is a promise , Why do you need a promise , What are the three states of promise
6) What is promise chaining

# Day 5
1) What's the output?
```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63
```
2) what is the Output?
```javascript
+true;
!'Lydia';
A: 1 and false
B: false and NaN
C: false and false
```
3) what is the output ?
```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));
A: orange
B: purple
C: green
D: TypeError
```
4) what is the output ?
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
```
5) what is the output?
```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);
A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} and {}
D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError


