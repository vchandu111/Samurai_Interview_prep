// Q4.What is JSON and its common operations.

/*
==>  (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.
==>  language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.


Generally JSON has two common operation json.stringify and json.parse.
to convert js data into json format we use json.stringify,
and to convert json into js data we use json.parse.
*/

// example for object
var obj = {
  name: "Mangesh",
  batch: "Ch-13",
  location: "Bidar",
};

var jsonData = JSON.stringify(obj);
console.log(jsonData); // {"name":"Mangesh","batch":"ch-13", "location":"Bidar"}

var jsObj = JSON.parse(jsonData);

console.log(jsObj); // { name: "Mangesh", batch: "ch-13", location:"Bidar" }

var arr = [1, 2, 3, "one", "two", "three", true, false, null];

var arr_json = JSON.stringify(arr);
console.log(arr_json); //[1,2,3,"one","two","three",true,false,null]

console.log(JSON.parse(arr_json)); //[1, 2, 3, "one", "two", "three", true, false, null];

//------------------------------------------------------------------------------------------------------

// Q5.What is Hoisting , explaining about var hoisting with examples
/*
hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

==> only declarations are hoisted.
==> JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. 
*/
/*
//For example:
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage

var num; // Declaration
num = 6; // Initialization

//The example below only has initialization. No hoisting happens so trying to read the variable results in ReferenceError exception.

console.log(num); // Throws ReferenceError exception
num = 6; // Initialization

var a;
console.log(a);
a = 10; // undefined;

//==> Initializations using let and const are also not hoisted.

// Example with let:
a = 1; // initialization.
let a; // Throws ReferenceError: Cannot access 'a' before initialization

let b;
b = 1;
console.log(b); // 1

// Example with const:
a1 = 1; // initialization.
const a1; // Throws SyntaxError: Missing initializer in const declaration

const b1;
b1 = 90;
console.log(b1); //Missing initializer in const declaration
*/

function catName(name) {
  console.log("My cat's name is " + name);
}

catName("ABD");
//The result of the code above is: "My cat's name is ABD"

myName("Mangesh");

function myName(n) {
  console.log("my name is " + n);
}
//The result of the code above is: "My name is Mangesh"

//------------------------------------------------------------------------------------------------------

// Q6.What is the main difference between localStorage and sessionStorage

/*
some times some websites stores the data client side, because of this they increase the speed(due to data is not sending to servers so, its save time) and there are three types of storage localStorage, sessionStorage and cookies.

LocalStorage
==> Data can be deleted by user, it will not delete automatically.
==> Data from inconito/privet tab deletes automatically after closing tab.
==> Storage capacity is almost 10MB.

sessionStorage
==> Data can be deleted by user, also it auto delete after closing tab/browser.
==> from here data can not be share with server.
==> Storage capacity is almost 5MB.

SessionStorage
==>Stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
==>Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
==>Size must be less than 4KB.
==>Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie
*/

//------------------------------------------------------------------------------------------------------

// Q7.What is the difference between null and undefined

/*
==> null: after defining data type and value we can hide it by using null.

var

==> undefined: when value is not defined for variable than it shows undefined.

var a = 100;

console.log(a); // 100

var b = null;

console.log(b); // null

var c;
console.log(c); // undefined
*/

//------------------------------------------------------------------------------------------------------

// Q8.What is the difference between an attribute and a property ? give examples
/*
==> attributes are defined by html and properties are accessed from DOM.

==> While writing HTML code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.

==> A few HTML attributes have 1:1 mapping to properties; for example, id.

==> Some HTML attributes don’t have corresponding properties; for example, aria-*.

==> Some DOM properties don’t have corresponding attributes; for example, textContent.

==> attributes are used for setting the particular properties to the html elements.if we want to set any property on the html elements then we can set them by using attributes.
==> we can change the attribute through property.
==> we can change the value of property but we can not chnage the value of attribute.

like:type,display,background,class,id,value,checked,color,href,src etc
*/
/*
 example:

<input type="text" value="Name:">
There are 2 attributes, type and value.Also it has 2 properties,type and value.

Let’s take another example:
<input id="inputId" type="text" value="Name:">
The id property is a reflected property for the id attribute.Getting the property reads the attribute value, and setting the property writes the attribute value.

Let’s talk about the type property.
The type property is a reflected property for the type attribute.

Let’s take about how to get values of an attribute and a property:
<input id="inputId" type="number" value="Name:">
var element = document.getElementById(“inputId”);

element.getAttribute(“type”) will give “number” and element.type will give “text” because the initial value we have provided is a text.
Same is the case with value property. Imagine that an user has given input text as “hello”, then,
element.getAttribute(“value”) will give “Name:”,since we have provided “Name:” as initial attribute value and element.value will give “hello”.
So, the value property reflects the current text-content inside the input box, whereas the value attribute contains the initial text-content of the value attribute from the HTML source code.
*/

//------------------------------------------------------------------------------------------------------

// Q9.What are events and its types
/*
==> there are many types of events:-
1.user interface events.
2.focus and blur events.
3.mouse events.
4.keyboards events.
5.form events.
6.mutation events and observers.
7.htmls events.
8.css events
examples:- load,unload,click,dblclick,submit,input,change etc.
*/

//------------------------------------------------------------------------------------------------------

// Q10.How do you combine two or more arrays
var arr5 = [1, 2, 3, 4, 5, 6];
var arr6 = [3, 4, 5, 6, 7, 8];
var arr7 = [5, 6, 7, 8, 9, 10];

console.log(arr5.concat(arr6, arr7)); // 1, 2, 3,  4, 5, 6, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 10

//------------------------------------------------------------------------------------------------------

// Q11.What happens if we add two arrays? show with examples

// ==> indexes of both are showing on line but the 0th index of second array is merging with the last index of first array

var arr1 = ["one", "two", "three"];
var arr2 = ["four", "five", "six"];

console.log(arr1 + arr2); // one,two,threefour,five,six

var arr3 = [1, 2, 3, 4, 5];
var arr4 = [6, 7, 8, 9, 10];

console.log([arr3] + [arr4]); // 1,2,3,4,56,7,8,9,10
console.log(arr3 + arr4); // 1,2,3,4,56,7,8,9,10

console.log(arr3 ** 2); // Nan

console.log(arr3 - arr3); // Nan

//------------------------------------------------------------------------------------------------------

// Q12.Difference between alert and prompt ?
/*
==> alert: An alert box is one type of popup boxes in JavaScript which is often used to make sure that information have come through the user. So, the user will have to click “OK” to proceed when an alert box pops up on the window.

ex: alert("test successful")

==> prompt: It is also one of the type of popup boxes in JavaScript which is often to take input a value before entering a page from the user. To proceed after entering an input value in the prompt, the user will have to click either “OK” or “Cancel”.

ex: prompt("enter your name")
*/
