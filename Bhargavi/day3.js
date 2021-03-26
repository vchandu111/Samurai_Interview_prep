/*    Question-1
 1)   What are the different ways to access object properties   
       We can access  the object properties in 3 ways
       1) Dot property - object.property
       2) Object destructring - const {property} = object
       3) Sqaure property - object["property"]
*/  
// Object person 
var person={
    name:"Bhargavi",
    age:22,
    city:"Mangalore",
}
// //Dot value
console.log(person.name)  //Bhargavi
console.log(person.age)  //22

// //Object destructring
var { name,age,city}=person;
console.log(city)   // Mangalore

// //Sqaure property

console.log(person["name"])//Bhargavi
console.log(person["age"])//22
console.log(person["city"])// Mangalore

/*  Question 2
 2) What is Hoisting?
moving all declration to top called hoisting 
first it wil decalre the varibale and next it will assign value to the variable
*/
var x=100;
console.log(x)  // x = 100

/* The default hoisting look like this
for above example
var x; --- here it is delaring  variable
x =100; --- here it is assigning the value

*/ 
/*   Question-4
 4) What is the purpose of the let keyword
  Let allows us to declare a variables that are limited to a block
   It is used in security  purpose for eg: password 
 */

// let a = 10;
function square(){
    let a = 10;
  var sqaure = a**2  
   console.log(sqaure)
}
square()
const dobuble = a*a
console.log(dobuble)
/* for the function we will get the output as 100 
when we do dobule of the variable we will get reference error because it is defined inside the function block
If we difine a in global scope then we will get the output*/
/*    Question-3
3) What is scope in javascript?
 Scope is a current contect of execution.
There are two type of scopes
    1) Global scope : varible decleared outside the block called global scope.
                     
    2) Local scope : varible decleared inside the block called local scope.
 */
var side = 10; // This is globally declared
function area(){
    let b; // this is limited to area function 
    b = side * side 
    console.log(b)
}
area()

//  What is output
//   Question 5
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
/*
A: Lydia and undefined
B: Lydia and ReferenceError
C: ReferenceError and 21
D: undefined and ReferenceError

OUTPUT = D:undefined and ReferenceError
the varible name is hoisted and initialized to undefined
the varible age is only initialized
*/
// Question 7
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/* A: true false true
B: false false true
C: true false false
D: false true true

OUTPUT - C: true false false
First condition it will just check the values 
In Second and third condtion it will check value and data type of the varible
*/

// Question 8
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());
  /*
  A: TypeError
  B: SyntaxError
  C: Lydia Hallie
  D: undefined undefined
  OUTPUT -   A: TypeError
  here member getfulname is not a function
  */