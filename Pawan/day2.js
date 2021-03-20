// Question-4   What is JSON and its common operations

// full form of JSON is "javascript object notation"
//   it is primirily used to transmit data between a server and web applications,
//   Web services and APIs use JSON format to provide public data.it can be used in modern programming 
//   language
//   common operation

// if we want data at localstorage so first we need to data in JSON form and then store it 
 
// console.log(JSON.stringify({ x: 5, y: 6 }));
// output - {"x":5,"y":6}

// if want AbstractRangdata again in Object form so we will use
// console.log(JSON.parse(data))


// Question-5 What is Hoisting , explaining about var hoisting with examples

// hoisting in javascript is a mechanism where variable and functions decleration are moved to the top of their scope before 
// the code execution

// Without hoisting
console.log(myName)
var myName;
myName = 'pawan'
// terminal -- undefined

// hoisting
var myName;
console.log(myName)
myName ='pawan'

// Question-6 What is the main difference between localStorage and sessionStorage

// sessionStorage is similar to localStorage, the difference is that while data in localstorage does Not 
// expire data in sessionstorage is cleared when the page session ends.  

// localstorage and sessionStorage are perfect for persisiting non-sensitive data needed within client 
// scripts btween pages Example-score in games,small api data


// Question-7 What is the difference between null and undefined

// Null is assign value. it mean nothing undefined mean a variable has been but not defined yet

var value = null;
console.log(value)

var value1;
console.log(value1)



// Question-8 What is the difference between an attribute and a property ? give example

//  Attributes are defined by HTMLAllCollection. Properties are accesed from DOM(document Object Model)
// node

{/* <input type="text" value="Name:"> */}
// type and value are attribute and class
// reflect value is type and value,className in DOM model (they are inherite) refer HTMLinputclass
//property are define in side dom object(object.prototype.toString.call())


// Question-9 What are events and its types

// Events are fired to notify code of 'interestingchanges' that may affect code execution.These canarise 
// from user interactions such as using amouse or resizing awindow,changein state of the underlying environment.

// example- The user selects a certain element or hovers the cursor over acertain element. 
//          The user choose akey on the Keyboard.   
//          A web page loading. 
//          A form is submitted. 
//          A video is played, paused, or finishes. 
//          An error occurs. 

        //  ('click','onchage','submit','mouseover','mousein','mouseout','onselect')


    //   Question-10  How do you combine two or more arrays
    //  Question-11  What happens if we add two arrays? show with examples
    // There are several way of combine array 
    // by the help of 'spread' operator, several array  method
    // example
    // Concat is used to join two or more arrays into one.
    // for eg :
    // var arr1 = [1,2,3,4]
    // var arr2 = [5,6,7,8]
    // var concatArr =  arr1.concat(arr2,[9,10])
    // console.log(concatArr) // [1,2,3,4,5,6,7,8,9,10]

    // example-2 with help of for and splice method me join the array




 // Question-12 Difference between alert and prompt ?

   // Alert-- Alert simply show the alert message on webpage
   //example - alert("hello pawan")

   //prompt - prompt also show a alert message with input box and that input value we will use on any where
   //like on in alert,on webpage 
   // simply say that propmt is more useful as compare to alert
    //    Example- both are include in one example

    
//    var percent = prompt("Enter your Percentage: ");

//    if(percent >= 80 && percent <= 100){
//        alert("you are in Merit.")
//    }else if(percent >=60 && percent <80){
//        alert("You are in Ist Division.")
//    }else if(percent >=40 && percent <60){
//     alert("You are in IIst Division.")
//    }else if(percent >=33 && percent <45){
//     alert("You are in IIIrd Division.")
//    }else if(percent <33){
//     alert("You are Fail.")
//    }else{
//        alert("Please Enter Valid Percentage")
//    }



