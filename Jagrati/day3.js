//   Question 1. What are the different ways to access object properties 
// 1.using dot
// anyObjectName.propertyName
// myObject.name

var myObject = {
    name: "masai school",
    batch: "samurai",
    office:" bangalore"
}
console.log(myObject.name) // masai school
console.log(myObject.batch) //samurai

// 2. destructuring:-

// var {name,batch,office} = myObject // masai school samurai bangalore

// 3. by writing object's key value name in the []

// myObject[name] // masai school
// myObject[office] // samurai

// 4. we can change key value name of any object:-
// var {batch: bacthName} = myObject // samurai

// 5. using this:--

// var myObject = {
//     name: "masai school",
//     batch: "samurai",
//     office:" bangalore",
//     showName: function() {
//         console.log(this.batch,this.name)
//     }
// }
//6. directly we can get key and values of object:-

//Object.keys[myObject] // ["name","batch","office","showName"]
//Object.values[myObject] // ["masai school","samurai","bangalore","function() {console.log(this.batch,this.name)}"]

//question 2: what is hoisting?

//hoisting means to move something upwards or to take something above.In java script all variable declaration and function declaration will get set up at the top before code execution and then after hoisting java script start executing the code

// var name = "masai"
// console.log(name)

// after hoisting

// var name;
// name  = "masai"

// console.log(name)

// function myName(input) {

//   var name = "masai"
//   var batch = "samurai"
//   console.log(input + name + batch)
// }

// after hoisting

// function myName(input) {

//     var namr;
//     var batch;
//     name = "masai"
//     batch = "samurai"

//     console.log(input + name + batch)
// }

//  num = 15;
//  console.log(num)
// var num; // 15

// --> let and const will not get hoisted,they gives reference erro in output;

// num = 15;
// console.log(num)
// let num;
// //reference error

// question 3. what is scope in java script?
// scope are  function in java script and scope defines the accessibility of the variables,function,objects.
// scopes are of two types:- global scope and local scope.
// global scope which are declared outside the block of code and are accessible everywhere but local scope are accessible only in particular block of code and they are not allow to access outside the blocks
// var is function scope and let and const is block scope.

// var name = "masai" // global scope

// function myname() {

//     var name = "masai" // local scope
// }

// question 4.
// what is the purpose of let keyword?

// let is defined locally unlike var is defined globally and locally both
// let can not be accessible as global scope and when we define it globally and want to access it using this keyword it will give undefined as a output

// var num = 12;
// console.log(this.num) // 12

// let num = 12;
// console.log(this.num) // undefined


// question 5. 

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi();
  
// //   A: Lydia and undefined
// //   B: Lydia and ReferenceError
// //   C: ReferenceError and 21
// //   D: undefined and ReferenceError
// ans:- undefined because code will execute line by line and it found the var name declaration and after it will console it,since before console var is not assigned.
// let age will give reference error because let are not allow to get hoisted.


// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); // true
// console.log(a === b); //false
// console.log(b === c);//false

// A: true false true
// B: false false true
// C: true false false
// D: false true true

// console.log(typeof(a),typeof(b),typeof(c))
// number,object,number

// because == check for only variables not for data types
// var a and var b are equal because both have same values.
// but a , b and c have different data types and === strictly check for data type
// because a and c are number and b is an object


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());
  
// //   A: TypeError
// //   B: SyntaxError
// //   C: Lydia Hallie
// //   D: undefined undefined

// ans:- TypeError,because const works only in local scopes and this is not accessible with const as this refers to the global object or owner of the object.
// if we use var instead of const then it will give c option as var is global.
