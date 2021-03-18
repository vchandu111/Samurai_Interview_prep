// Question 1 
//Difference between Primitive vs Non Primitive data types with example
//Primitive data type - primitive data types are pre-defined. primitive are immutable data type because we can't change the value once it is created   
//Primitive data type- String,Number,Boolean,Null,Undefined
//STRING
var nam = "Bhargavi"
console.log(nam) //string - output is Bhargavi 
var name1 = "Bhargavi"
name1[0] = 9;
console.log(name1) // Output is Bhargavi because String is immutable we are trying to change the value itself
//NUMBER
var num1 = 5
var num2 = 6
var total = num1 + num2;
console.log(total) //Number - output is 11

console.log(total < num2)  //Boolen - output is True

var name;
console.log(name) //Undefined - output is undefined

var value = null;
console.log(value) // Null- output is null

//Non-primitive data type -Non-primitive data types are not defined by programming languagebut are created by programmer. Non-primitive are mutable data type because we can change once it is created   
//Non-primitive data type- Object,Array,Function
var array = [1, 2, 3, 4]
console.log(array)  //array  - output is [1,2,3,4]
array[0] = "Bax"
console.log(array) // Output is ['Bax',2,3,4] Array is mutable here we can the value

function sum(a, b) {
    return a + b
}
console.log(sum(3, 5)) //function - output is 8


var Object1 = {
    name: 'Bhargavi',
    age: 22
}
console.log(Object1) //object - output is { name: 'Bhargavi', age: 22 }
console.log("---------------------------Question2 ----------------------------------")
//Question2 
//Write short notes on mutability with examples
//Mutability - mutability means we can modify primitive are immutable , non-primitive are mutable
//Mutable - It is a type of variable that can be changed. Object,arrays,functions are mutable
var array = ["Bhargavi", "sathya", "Anu"]
console.log(array) // Output is ["Bhargavi","sathya","Anu"]
array[0] = "Bax"
console.log(array)// Output is ["Bax","sathya","Anu"]  Mutable
//Immutable - It is a type of variable that can not be changed.Numbers,Strings are Immutable
var city = "Mangalore"
console.log(city) // Output is Managlore 
city[0] = "B"
console.log(city) // Output is Managlore   Immutable

console.log("---------------------------Question3----------------------------------")
//Question3
//Array methods - slice , splice , concat , findIndex , sort , reverse , split , join
//slice
var data1 = ["bax", "rax", "anu", "sathya"]
var new_data1 = data1.slice(2, 4)
console.log(new_data1)

//splice

var data2 = ["bax", "rax", "anu", "sathya"]
data2.splice(2, 0, "fax", "max")
console.log(data2)

//concat

var str1 = "Hello Bhargavi "
var str2 = "Shetty"
var new_strr = str1.concat(str2)
console.log(new_strr)

//findIndex

var arr3 = [8, 9, 11, 10, 12];
var new_arr3 = arr3.findIndex(check)
function check(arr3) {
    return arr3 > 11
}
console.log(new_arr3)

//sort

var data3 = ["Mangalore", "Bangalore", "Mysore", "Udupi"]
var new_data3 = data3.sort()
console.log(new_data3)

//reverse

var data4 = ["madikeri", "Udupi", "Kasargod", "Mangalore"]
var new_data4 = data4.reverse()
console.log(new_data4)

//split

var str = "hello everyone how are you"
var new_str = str.split(" ")
console.log(new_str)

//join

var arr1 = [1, 2, 3, 4]
var new_arr1 = arr1.join("*")
console.log(new_arr1)