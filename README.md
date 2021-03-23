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
