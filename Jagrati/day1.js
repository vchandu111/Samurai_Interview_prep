/* question 1--> Difference between primitive and non premitive data types with examples
PRIMITIVE data types:---
primitive data type are the basic data,it is already created by java script,it is like foundation of data types.
primitive data types are immutable,means we cannot change their value,we can reassign their value but we can not manipulate their values.
primitive data types are stored by VALUE.
their are following 5 types of premitive data types:-
1.Number
2.boolean
3.string
4.null
5.undefined

1.NUMBER:- these are the mathematical numbers.
example:-
let num = 34;
console.log(typeof num) //number

2.BOOLEAN:- it has only two value --> true and false.
example:-
let bool = 3;
console.log(3 < 2) // false
console.log(3 > 2) // true

3.STRING: it is just sequence of caharacter and it can write in "" , '' , ``
example:-
let day = "sunday";
console.log(`Today is holiday as today is ${day}`) // template literals // today is holiday as today is sunday.

let num1 = "23";
let num2 = "24";
console.log(typeof num1, typeof num2) ==> string

console.log(num1 + num2) // 2324;

let str1 = masa12;
let str2 = school55;

console.log(str1+str2) // masai2school55

var s = "34";
var ss = "10"
console.log(s - ss) // 24
console.log(typeof s, typeof ss)

let num3 = "10";
let num4 = '12';
console.log(num3 * num4) //120
console.log(typeof num3, typeof num4)

let str3 = "masai";
let str4 = "sch";
console.log(str3 - str4)//NaN

let str5 = "masai";
 let str6 = "23";
 console.log(str5 - str6)//NaN


 4.NULL :- type of this data type is object and its value is empty.It is assigned but its value value remains empty always or zero.
null is done by developer.
 let box = null;
console.log(box) // null
console.log(typeof box) // object

let name = "jagrati";
name = null;
console.log(name,typeof name)//null, object
 
means box has value but it is null means nothing it has and typeof box is object

5.UNDEFINED:- type of this data is undefined and it has not value.It is just declared but does not hold any value.
it is done by java script.
example:-
let box1;
console.log(box1, typeof box1)//undefined,undefined

NON-PREMITIVE data types:-
non premitive data types are stored in memory of java script by reference or address not by values.
they are mutable means we can change their values,we can reassign them,can manipulate them.

non-premitive data types are of following three types:-
1.array
2.object
3.function

1.array: it stores multiple values in it.it can store all premitive data like boolean,string,number etc.
example:- var arr = ["masai", 23, true, false, null, 0, "school"]
console.log(arr, typeof arr)// ["masai", 23, true, false, null, 0, "school"], object

2.object: it has key value pairs and we can write method in it also to run any function,it can store multiple information about something,can store multiple data and we reassign,change the values of key pairs.
var book = {
    name: "masai school",
    color: "black",
    price: 350,
    showDetail: function () {
        console.log(`Name of this book is ${this.name} and its colour is ${this.color} and its Price is ${this.price}`)
    }
}


book.name = "programming"//change the value of name key as programming
this.name = "programming"//does not change the value as programming
book.showDetail()
book.showDetail()//Name of this book is masai school and its colour is black and its Price is 350

3.function:- function are non-premitive data type.
function performs an perticular task within in it whatever we write in the function.
function allows parameter and we can write any particular task within the function in the {} braces,it allows parameters in () brackets.
we can write function inside function e.g. nested function.
function can access only those variables which are declared or assigned inside it in the curly braces {}.
it can access only those variables outside it which are globally defined.
we have to call the function to perform it in any way.

examples:
var Name = "jagrati"
function showdata (params) {
    console.log(`my name is ${params}`)
}

showdata(Name)//my name is jagrati

var Name = "jagrati"
function showdata (params) {
    let agee = 23;
    console.log(`my name is ${params} and my age is ${agee}`)
}
showdata(Name)//my name is jagrati and my age is 23

QUestion2:-------
write short note on mutability with examples----->


Mutability:----
mutability means we can change the values of data types we can reassign them,manipulate them and mutability will happens only in non-premitive data types.

in primitve data types we can not change the values of data but in non-premitive data type we can change the values of data type.

 let arr = ["masai", 23, true, false, null, 0, "school"];
 arr[0] = "school"
 console.log(arr)//masai will replaced by school

 let str = "masai";
 str[0] = "k";
 console.log(str)//masai

 str = "masaischool"
 console.log(str)//masaischool

 let obj1 = {
     name: "masai"
 }
obj1.name = "masaischool"

console.log(obj1.name)//masaischool
 
means we can reassign the values in premitive data types but we can not change the value of variable but it is possible in non-premitive variables.

Question3.  Array methods - slice,splice,concat,findindex,sort,reverse,split,join.

1.SLICE:-its task is to copy the any given array from any start index to end index..whatever index we define in it parameter.

syntax:- arrayName.slice((startIndex, endIndex))
let arr1 = ["a","b",1,2,3]
console.log(arr1.slice(0,4))//a,b,1,2

let arr1 = ["a","b",1,2,3]
console.log(arr1.slice(0,5)) // a,b,1,2,3

console.log(arr1.slice(-3)) // 1,2,3

2.SPLICE:- by using splice we can delete any element from array,can add any element to the arrya and it allows negative values inside it which means that perform the task from the end.

let arr2 = [1,2,3,4,5]
arr2.splice(1,2)
console.log(arr2) //1,4,5

let arr2 = [1,2,3,4,5]
arr2.splice(1,2,"two","three")
console.log(arr2) //[ 1, 'two', 'three', 4, 5 ]

arr2.splice(-3,1,"three")

console.log(arr2)//[ 1, 2, 'three', 4, 5 ]

arr2.splice(-3,0,"three")
console.log(arr2) // [ 1, 2, 'three', 3, 4, 5 ]

3.CONCAT: it just create an array and add it to the given array on which we are going to perforn concat.

let arr = [1,2,3,4]

console.log(arr.concat([5],[6,7]))

4.findindex:- 
 */
let arr = [1,2,3,4]

console.log(arr.concat([5],[6,7]))