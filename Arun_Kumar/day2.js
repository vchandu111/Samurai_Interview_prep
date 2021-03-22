// What is JSON and its common operations
// What is Hoisting , explaining about var hoisting with examples
// What is the main difference between localStorage and sessionStorage
// What is the difference between null and undefined
// What is the difference between an attribute and a property ? give examples
// What are events and its types
// How do you combine two or more arrays
// What happens if we add two arrays? show with examples
// Difference between alert and prompt ?

// problem 1
 
// JSON-   JavaScript Object Notation (JSON) is a standard text-based format
//        for representing structured data based on JavaScript object syntax.
//         It is commonly used for transmitting data in web applications.

/* Generally JSON has two common operation json.stringify and json.parse.
to convert js object into json format we use json.stringify,
and to convert json into js object we use json.parse.
*/

var obj = {
    name: "ARUN",
    batch: "samurai2"
}

var jsonData = JSON.stringify(obj);
console.log(jsonData) // {"name":"ARUN","batch":"samurai2"}

var jsObj = JSON.parse(jsonData);

console.log(jsObj)// { name: 'ARUN', batch: 'samurai2' }

// problem 2

/* Hoisting:-  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
              this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local */

            // NORMAL Form  
   var myname = "Arun"
   function showname(){
       console.log(myname)
   }
   showname()


   // in hoisting
   var myname //first variable declaration 
   myname = "Arun" // then assignment


   showname() // then fn execution
   function showname(){ // first fn declaration
    console.log(myname)
    }



  // problem 3  

// main difference between localStorage and sessionStorage is
//  the data stored in localStorage persists until we are not deleted that data. Changes made are saved and available for all current and future visits to the site.

// and for sessionStorage, data are only available per tab. data are available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.




 // problem 4
 /* diffrence between null and undefined */

