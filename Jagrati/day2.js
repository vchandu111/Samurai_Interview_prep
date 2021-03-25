/*
question 4:-- what is json and its common operations
json is a java script object notation.
it is just a simple text format or just a format of data in text and it is string.
whenever we want send or recieve our data from the web server then we convert our data in json format so that this data can be used by all programming language because,
when we conerted it in json it is only in text formate not in any programming language format.
json data is in string,and it is in java script object format in the strings,its key pairs and key values both are in "",which is string.
single quotes are not valid for json data,only double quotes is used for it

Serialisation and deseriallisation:-
when we convert js object into json then it is called serialisation,
and when we convert json data into js object,it is called deseriallisation.
we can not use method inside json data.

we can use two operations on json data:-
json.parse and json.stringify

to convert js object into json format we use json.stringify,
and to convert json into js object we use json.parse.
*/

var obj = {
    name: "masai school",
    batch: "samurai"
}

var jsonData = JSON.stringify(obj);
console.log(jsonData) // {"name":"masai school","batch":"samurai"}

var jsObj = JSON.parse(jsonData);

console.log(jsObj)// { name: 'masai school', batch: 'samurai' }

/*

question 5. :---- what is hoisting,explaining about var hoisting with examples.

hoisting:--
hoisting means to move at the top,in java script it moves all declarations and function declaration to the top due to default behaviour of java script.

hoisting will apply only on var and function.it will not work upon const.
examples:--
*/

var a;
a = 12
console.log(a) // 12


showName("masai")
function showName(n) { //function declaration

    console.log(n) // masai
}

 let b;
b = 4;
console.log(b) //4

const c;
c = "constant";
console.log(c) // missing initializer in const declaration


/*question 6:--What is the main difference between localStorage and sessionStorage.

in the html web storage,it provides two objects for storing the data:-
1.local storage
2.session storage

1.Local Storage:- we can store data here with no validity unless we delete the data from the local storage.
means data in the local storage will remain as it is always,whether if we close the browser or close the tab,it will remain always in the local storage permanently.
if we want to delet the data from local storage then we can do this, we can set the data in local storage with key values name whatever we want.

2.Session Storage:- in the session storage,the data will remain only for certain time of period or for one session,when the session has expired,the data will also get deleted from the session storage.
means if we close the browser tab or browser the session will get expired and also the data will also get cleared or deleted from session storage.



question 7:- What is the difference between null and undefined

null means empty or zero or nothing.
1.null is a value but undefined is not a value;
2.null is done by developers but undefined is done by java script.
3.null is assigned and declared but undefined is declared only not assigned.

var name = "jagrati";
name = null;
console.log(name) // null,because we have assigned value as null means empty

var z;

if(z) {
    console.log(z)

} //undefined because here we have only  declared the var z and it has not any value because we have not assigned it.

question 8:- What is the difference between an attribute and a property ? give examples

attributes are used for setting the particular properties to the html elements.if we want to set any property on the html elements then we can set them by using attributes.
we can change the attribute through property.
we can change the value of property but we can not chnage the value of attribute.
attributes are defined by html and properties are from dom
like:type,display,background,class,id,value,checked,color,href,src etc

question 9:- What are events and its types

we can perform something or actions on html using events or we can apply java script using event on html.when we add event in html then when that particular event gets fired or happened the java script associated with start working on html part.
there are 8 types of events:-
1.user interface events.
2.focus and blur events.
3.mouse events.
4.keyboards events.
5.form events.
6.mutation events and observers.
7.htmls events.
8.css events
examples:- load,unload,click,dblclick,submit,input,change etc.


question 10 :- How do you combine two or more arrays

by usingng concat method we can combine two or more arrays:-
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
var arr = [a,b,c,d,e,f];
arr1.concat(arr2,arr) // [1,2,3,4,5,6,7,8,a,b,c,d,e,f]

var arr3 = [f,g,h,j];
var arr4 = [m,n,b,v,c,x];
arr3.concat(arr4) // [f,g,h,j,m,n,b,v,c,x]

question 11 :- What happens if we add two arrays? show with examples
 it will return the all elemnts of all the arrays by adding last element of first array and first element of next array.


*/

var arr = [1,2,3];
var arr1 = [4,5,6];
var arr2 = [7,8];
console.log(arr + arr1) // 1,2,34,5,6

console.log(arr + arr1 + arr2) // 1,2,34,5,67,8

var arr3 = ["a","b","c"];
var arr4 = [1,2,3];
console.log(arr3 + arr4) // a,b,c1,2,3

/* 

question 12:- Difference between alert and prompt ?

1.alert is a dialog box and prompt is a method in java script.
2.alert is like an pop up with no input fields while prompt pops up with input fields so that user can type there.
3.alert is an dialog box where something warning or message are displayed to the user but in prompt it gives pop up with input fields so that user can type anything in it as a message or anything we wants from user and then after we can also store it in variables to use this data anywhere we want.
4.alert has one option to proceed further "OK" but prompt has two click options "ok" or "cancel".

alert("i am alert") // i am alert with pop up box and ok as an option so that we click on it and proceed further.
prompt("type your name here") // input box with "ok" and "cancel" click options
*/