// what is Json
// What is JSON and its common operations
JSON stands for JavaScript Object Notation
Json is used for storing or transporting data
JSON is often used when data is sent from a server to a web page.
json is plain text. its form of obj and array

Data is in name/value pairs
Square brackets hold arrays

"firstName":"John"
{"firstName":"John", "lastName":"Doe"}
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]

Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
var obj = JSON.parse(text);


The JSON.stringify() method converts a JavaScript object or value to a JSON string,


What is the difference between null and undefined

null is an assigned value. It means nothing. undefined means a variable has been declared but not defined yet.


What is JSON and its common operations

Q..=What is Hoisting , explaining about var hoisting with examples ?

Ans..== Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
JavaScript only hoists declarations, not the initialisations.
e.g----
console.log(num);  //undefined
var num;    //declared
num = 6;    //intialize
console.log(num) //6


What is the main difference between localStorage and sessionStorage
localStorage is stored data into your local machine. when database is not exist that time  mostly work on localStorage.
sessionStorage is limited time after completing time. all data deleted. and session will empty.


What is the difference between an attribute and a property ? give examples

What are events and its types
events are some listener. its define user interactions such as click, remove, moving ...
each event are referenced by object that is based on the event Interface.
some events are .
 addEventListener("click") , mouse , event.target, submit.. etc

How do you combine two or more arrays
What happens if we add two arrays? show with examples
Difference between alert and prompt ?
An alert is a popup that has a notice within it.

A prompt has an input field and expects the user to interact with it by entering some data.
prompt("some thing")
Alert Box 
alert box has give you pop up messages

Confirmation Box
Confirmation Box give you two options  yes or not

Prompt Box
prompt give input. and that input are target some place.