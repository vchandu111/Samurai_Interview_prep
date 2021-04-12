//1st  by dot value

var person = {
  name: "Harshit",
  age: 24,
  city: "Mumbai",
  discription: "Learn in masai school",
};

console.log(person.name); //output -Harshit
console.log(person.city); //output-Mumbai

//2nd by object destructring

var person = {
  name: "Harshit",
  age: 24,
  city: "Mumbai",
  discription: "Learn in masai school",
};

var { name, age, city, discription } = person;
console.log(name); // output -Harshit
console.log(city); // output-Mumbai

// 3rd by object["property name"]

var person = {
  name: "Harshit",
  age: 24,
  city: "Mumbai",
  discription: "Learn in masai school",
};

console.log(person["name"]); //output-Harshit
console.log(person["city"]); // output-Mumbai

/*  Question 2
      What is Hoisting?
----> moving the variable at the top called hoisting
*/
//In genral way writing varible is

var a = 10;
console.log(a); // output-10

// in hoisting this also write
var a;
console.log(a); //undefined

a = 5; //reasssignable
console.log(a); //output-5

/*    Question-3
       3) What is scope in javascript?
   ---> Scope determines the visibility of variables.it also shows the current index of the code
        There are two type of scopes-
        1) Global scope-
                      varible decleared outside the function called global scope.
        2) Local scope 
                     varible decleared inside the function called local scope.
 */
var a = "Harshit"; // global scope it is used anywhere in file

function perimeter(l) {
  let peri = 4 * l; //   local scope it is used only in this block of scope outside of this function this peri not assess the value.
  console.log(peri);
}

/*   Question-4
       4) What is the purpose of the let keyword
---->   let keyword used in block of scope then this acesss value only in block of scope outside the scope it cannot be used
         it is used for security  purpose like form ,payment option etc
 */

let a = 10;
console.log(a); //it access the value here and value is 10

//but
function area(l, b) {
  let area = l * b;
  console.log(area);
  //it access the value only from here menas in bloack of scope here output is given an 6
}
area(2, 3);
//  it not access value outside the blick of scope here output is given an error

// javascript output

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi(); //output is    D: undefined and ReferenceError
/* 
  A: Lydia and undefined
  B: Lydia and ReferenceError
  C: ReferenceError and 21
  D: undefined and ReferenceError
  ```
*/ // 7) What's the output?
// ```javascript

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/*
A: true false true
B: false false true
C: true false false
D: false true true
*/
//output C: true false false

//8) What's the output?
//```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

/*
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
*/

//output is- A: TypeError
