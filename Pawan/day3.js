


// Question1: What are the different ways to access object properties
   
// A property of an object is some piece of named data it contains. These are accessed with dot operator applied to an object aalternative to dot operator is array []
// operator.

// example 
var Student = {
  Name:'pawan',
  "my name": "monu",
  Surname:'patidar',
  age:20
}

Student["Name"] = "pawan"
console.log(Student["Name"])
console.log(Student.Name)
console.log(Student["my name"])
// console.log(Student.my name)  cant do by that way


// Question 2 What is Hoisting

// hoisting in javascript is a mechanism where variable and functions decleration are moved to the top of their scope before 
// the code execution

// Without hoisting
console.log(myName)
var myName;
myName = 'pawan'
// // terminal -- undefined

// // hoisting
var myName;
console.log(myName)
myName ='pawan'


// Question 3 What is scope in javascript

// Scope in javascript refers to the current context of ConvolverNode, which determines the accessibility of variable to javascript.Thetwo type of scope are local and global . 

// Local scope :- Local variables are those declared inside of a block.

// global :- Global variables are those declared outside of a block. 

// example :-

let a= "hello guys"  // global scope
const first = () =>{
  let b= "How are you?"  //local scope
  const second =()=>{
    let c = "hi, I am fine" //local scope
    console.log(a + b + c)
  }
  second()
  console.log(a+ b+ c) // we cant access "C" due to local scope
}

first()



// Question 4 What is the purpose of the let keyword

// Let allows you to declare variables that are limited to scope of block statement, or expression on which it it is used, unlike the var keyword, which declares a varibale glovbally, or locally to an entire function regardless of block Scope . The other difference betwwen var and let is that the latter is initialise to a value only when a parser evalate it .

// Just like Const the let  does not create properties of the window object when declared globally 


// Question-5 What's the output?

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();

// Ans = D:-undefined and ReferenceError    var give undefined and let not allow access of variable before initialised

// Question :- 7
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// Ans:- c:- True False False  (there is concept of strict comparission in first "a" and "b"
 //are not strict compare so true and in second and third strict compare ) 

//  Question:- 8

 function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// Ans :- A TypeError // we access method outside we need prototype then we asscess all data of member object
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

// Ans:- Lydia hallie













// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();
  
//   let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.Person.getFullName());
