// Question-1 What is the difference between Call, Apply and Bind with examples

// The call() method is a predefined javascript method 
// It can be used to invoke (call) a method with an owner object as an argument(parameter)

// Example:-

var Person = {
    FullName:function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(Person)
var person1 = {
    firstname:'Pawan',
    lastname:'Patidar'

}

var person2 = {
    firstname:'Pooja',
    lastname:'Patidar'

}

Person.FullName.call(person2)   //in this case by call method we find each in person fullname  very easy way by lesscode

// apply method


var Person = {
    FullName:function(city,country){
        return this.firstname + " " + this.lastname +" " +city +" " + country;
    }
}

var person1 = {
    firstname:'Pawan',
    lastname:'Patidar'

}

Person.FullName.apply(person1,['Neemuch','India'])  //call and apply both are same in case of apply we use array for argument and parameter by that we use for loop that is easy for as


// Bind Method()


function Student1(name,surname){
  this.name = name,
  this.surname = surname
}

function Person (name,surname,city){
   var x= Student1.call(this,name,surname)
   x()
    this.city = city
}

var person1 = new Student1('pawan','patidar','neemuch')  //bind method
console.log(person1)


// Question 2 What is JSON and its common operations

// Javascript Object Notation (JSON) is a standard text-based format for represneting 
// structured data based on javascript object syntax . it is commonly used for tranmitting data in web application (eg. sending some data from the server to the clientInformation, so it can be displayed on a web page or viceversa) 

// From object to JSON  

// var obj = {}
// JSON.stringify(obj)

// if convert to JSON to object 
// JSON.parse(Jsondata)
// it is very useful to Api case also



// Question 3 What are the methods available on session storage

// Sessionstorage properties allow to save key/value pairs in aweb browser . The sessionstorage object stores 
// data for only one session (the data is deleted when the browser tab is closed )

// Tip also look at the localstorage property which stores data with no expiration Date.

sessionStorage.setItem("lastname", "patidar");
sessionStorage.getItem("lastname");



// Question 4 What is the difference between == and === operators

// Difference b/w == and  === is loose and strict comaprison 

example
 console.log(1 == true) // output: true (losso comparison)
console.log(1 === true) // output: false(more strict comparison))


// Question 5 What is a promise , Why do you need a promise , What are the three states of promise

// A promise is a result which have some stage 

// A javascript promise object contains both the producing code and calls to the consuming code

// stage:-

// Pending
// Fulfilled
// Rejected


// While a Promise object is "pending" (working), the result is undefined

// When a Promise object is "fulfilled", the result is a value

// When a Promise object is "rejected", the result is an error object


let myPromise = new Promise(function(Resolve, Reject) {
    // "Producing Code" (May take some time)
    
      Resolve("Hello i will come"); // when successful
      myReject("Getting last");  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) {
          console.log(value)
           /* code if successful */ },
      function(error) { 
          console.log(error)
          /* code if some error */ }
    );

    // that also do by async await method consumed by try and catch method


// Question 5 What is promise chaining

// The instance method of the promise object such as then(), catch(),
// of finally() return a seperate promise object. Therefore you can call 
// the promise's instance method on the return Promise. The Successively calling method in this way is refferd to as the promise chaining


// new Promise() 

// .then() resolve(10)

// .then() resolve 10*2

// .then() resolve 20*3

// .then() resolve 60*4