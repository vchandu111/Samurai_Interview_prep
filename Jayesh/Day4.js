  /* # Day 4

1) What is the difference between Call, Apply and Bind with examples
2) What is JSON and its common operations 
3) What are the methods available on session storage
4) What is the difference between == and === operators
5) What is a promise , Why do you need a promise , What are the three states of promise
6) What is promise chaining

*/

/* Question-1
1) What is the difference between Call, Apply and Bind with examples?
--->Call and Applay are exact same purpose.
     The only differnce is Call() expecte all  parameters to be passed in individually,
      whereas apply() expects an array of all of our parameters.
    and in bind during function exacution it stored into one variable and then exicuate 

*/
//  example of call()


var person=function(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city

}
var teacher=function(sub,name,age,city){
    person.call(this,name,age,city)
    this.sub=sub;
}

var teacher1=new teacher("english","ram",35,"Ahmednagar")
console.log(teacher1)



// Example of apply


var person=function(name,age,city){
  this.name=name;
  this.age=age;
  this.city=city

}
var teacher=function(sub,[name,age,city]){
  person.apply(this,[name,age,city])
  this.sub=sub;
}

var teacher2=new teacher("english",["ram",35,"Ahmednagar"])
console.log(teacher2)


// example of bind

var person=function(name,age,city){
  this.name=name;
  this.age=age;
  this.city=city

}
var teacher=function(sub,name,age,city){
  var x= person.bind(this,name,age,city)
  x()
  this.sub=sub;
}

var teacher2=new teacher("english","ram",35,"Ahmednagar")
console.log(teacher2)


// Quiestion 2
/*
2) What is JSON and its common operations 
-->JSON is Javascript object notation it is standerd data-interchange format.
    most of the langaugge it is used 

    operation on json 
    basically two oertaion on json parse it and strinfy it 


  parse the data-parsing the data means convert the Json data into Object data
  stringfythe data-strinfy the data means converted the data in object format json.

*/    //example

var user={
  name:"jayesh",
  age:32,
}
var user1=JSON.stringify(user) // converted into Json
var  user2=JSON.parse(user1)   //converted into object


/* Question 3
3) What are the methods available on session storage
--->
*/


/*Question-4
4)What is the difference between == and === operators
-->  == used to comaring the two variable it not check the datatype of variable.
-->  === used to comapring two variable but this opertaor check data type comapre two value also
  */  //example
  var a=10;
  var b=(a==10);
  var c=(a==="10")
  console.log(b)  // output:true
   console.log(c)  //output:false


   /*
5) What is a promise , Why do you need a promise , What are the three states of promise
--> promise are used to handle the asynchromous opertaion in javascript.
    for loading purpose promises is very important
    //  3 state of promises are
    1) promise fulfilled
    2) promise pending
    3) promise rejected
 */


/*    6) What is promise chaining
---->
*/

 
