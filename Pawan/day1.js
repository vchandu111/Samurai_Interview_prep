// question 1 Difference between Primitive vs Non Primitive data types with examples

// Primitive -> primitive is basic building  block of language (foundation) and predefined
//       example->    In javascript --  string, boolen, Number, Undefined, null
var nam = 'pawan'
console.log(nam) //string

var num1 = 5
var num2 = 6
var num =  num1+num2;
console.log(num) //Number

console.log(num1>num2)  //boolen

var hello;
console.log(hello) //undefined

var value = null;
console.log(value) // null

// Non primitive -> Non primitive is not not defined in language. It is develop by programmer  
// example->    In javascript --  Array, function, object

var array = [1, 2, 3, 4, 5]
console.log(array)  //array


function sum(a,b){
return a+b
}
console.log(sum(3,5)) //function


var Object1 = {
 name:'pawan',
 age: 24
}
console.log(Object1) //object


// question 2 Write short notes on mutability with examples

//  mutability simple meaning is change, Modified after creating, non primitive are mutable

var array = [20, 30, 50]
array[0] = 'pawan'
console.log(array)  //mutable

var surname = 'patidar';
surname[0] = 'P';
console.log(surname) //immutable

// question 3 Array methods - slice , splice , concat , findIndex , sort , reverse , split , join

//   method>1 slice
var val = ['pawan','pooja','rahul','anand']

var get = val.slice(1,3)
console.log(get)

//splice
var value = ['pawan','pooja','rahul','anand'];
value.splice(3,0,"Deepmala","Kushal","Samrath");
console.log(value)

//concat 
var array1 = ['pawan','pooja','deepmala'];
var array2 = ['rahul','kushal'];
var array3 = array1.concat(array2)
console.log(array3)

//findIndex

var arrayval =[8, 9, 11, 10, 12];
var arrayval2 =arrayval.findIndex(checkarrayval)
function checkarrayval(arrayval){
return arrayval>=10
}
console.log(arrayval2)


//sort

var Namearray = ['pawan','rahul','chandra','nihal','abhishek'];

Namearray.sort();
console.log(Namearray)  // sort alphabetically


//reverse

var Namearray1 = ['pawan','rahul','chandra','nihal','abhishek'];

Namearray1.reverse()
console.log(Namearray1);

//split

var string = 'pawan.patidar'

var string1 = string.split(".")
console.log(string1);


//join

var array = [1, 2, 3, 4, 5];

console.log(array.join(' '))