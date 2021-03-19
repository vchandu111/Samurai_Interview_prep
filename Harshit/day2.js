// What is JSON and its common operations

// What is Hoisting , explaining about var hoisting with examples

// What is the main difference between localStorage and sessionStorage
//localstorage :: it allows to save key/value pairs in web browser. objets stores data with no expiration means tha data will not be deleted when the browser is closed and will be available in the wbe browser

//sessionstorage :: it allows to save key/value pairs in web browser. objets stores data only for one session means the data is deleted when the browser tab is closed.

// What is the difference between null and undefined
//null:type of this data type is object and its value is empty.It is assigned but its value value remains empty always or zero.
var num = null;
console.log(num, typeof num); //null,object

var name = "Hari";
name = null;
console.log(name, typeof name); //null,object
//undefined:type of this data is undefined and it has not value.It is just declared but does not hold any value.
var str;
console.log(str, typeof str); //undefined undefined

// What is the difference between an attribute and a property ? give examples

// What are events and its types
// 1. onClick :: The user has to click the button and function will execture
// 2. onchange :: it changes while function get executed
// 3. onmouseout :: users moves the mouse away from an elements
// 4. onmouseover :: users moves the mouse over an HTML elements
// 5. onload :: brower has finished loading the page.

// How do you combine two or more arrays
//we can combine two or more arrays by using concat() it will combine arrays in a single array.
var str = ["Harshit", "Ram", "MASAI", "SCHOOL"];
var str1 = ["Rahul", 44, 55, 66];
var output = str.concat(str1);
console.log(output); //output :: ['Harshit', 'Ram','MASAI',   'SCHOOL',  'Rahul',   44,  55, 66]

// What happens if we add two arrays? show with examples
// while adding the two arrays it will add both the elements of arrays.
var array1 = [1, 2, 3, 4, 5];
var array2 = ["Harshit", 4, 5, 6];
var add = array1 + array2;
console.log(add); //output :: 1,2,3,4,5Harshit,4,5,6

// Difference between alert and prompt ?
//alert():alert() shows the pop-up msg on the webpages with OK button on it.
//prompt(): prompt() method shows the pop-up tha user will have to click either "OK" or "Cancel" to process after entering an input value
