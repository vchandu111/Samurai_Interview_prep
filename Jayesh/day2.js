// What is JSON and its common operations
// What is Hoisting , explaining about var hoisting with examples
// What is the main difference between localStorage and sessionStorage
// What is the difference between null and undefined
// What is the difference between an attribute and a property ? give examples
// What are events and its types
// How do you combine two or more arrays
// What happens if we add two arrays? show with examples
// Difference between alert and prompt ?



// Question-1
// What is JSON and its common operations


//   JSON-json means javscript object noatation it is data used network request.It is esasy to write
//        It is also write key/value pair like
//         Most of the progaraming langauge used json data.syntak of these json data is,

var object={
    "name":"jayesh",
     "age":"21",
}

//  There are basic two operation on json 
// 1st is parse it and 2nd stringfy it .
// parse-it converted json data into the object

var object={
    "name":"jayesh",
     "age":"21",
}

var c=JSON.parse(object)
console.log(c)
// output is
// var object={
// name:"jayesh",
//  age:"21",
// }


// stringfy-it converted object data into JSON data
var d=JSON.stringify(object)



//Question-2 
// // What is Hoisting , explaining about var hoisting with examples

// Hoisting-hoisting means to function declaration at the top .
//          It doesn't care about variable values

// simple form

function square(length){

    var area=4*length;
    console.log(area)
}
square(10)

// hoisted form
var area;
function square(length){

     area=4*length;
    console.log(area)
}
square(10)


// Question-3
// 
// What is the main difference between localStorage and sessionStorage
// --->when data is stored in localstorage itis save until never to remove it
//     but data is stored in sessionstorage it is use only upto user place on browser
//      when brower is close data is automaticallay remove from session storage.this is main
//      differnce between localstorage and sessionstorage.




// Question-4
// // What is the difference between null and undefined
// -------->  null means it is value of the varible itself
//             undefined means decleard the variable but not assigned the value 

// e.g

var a=null;
console.log(a)  
// output is null

var a;
console.log(a)
// output is undefined

// Question-5
// What is the difference between an attribute and a property ? give examples
// ---> Atrribute is defined by HTML .it acesss the propety of html.
//       there are two type of attribute type and its value
//       Example


    <input>
