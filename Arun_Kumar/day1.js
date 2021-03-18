// question 1 Difference between Primitive vs Non Primitive data types with examples


/* primitive data types store the actual value of the variable 
eg.- string,number,boolean,null,undefined,etc..
non-primitive data types are the data type which stored the adress of the varible . 
eg.-function,array,objects*/

// primitive data types
var name = "arun" 
var age = 20
var flag = true
var a; //undefined
var b = null// assigning null value to a var.

// non-primitive data types

var array = ["a",1,"b",2,true,null]
var obj = {
    name:"arun",
    age:20
}
var fn = function(){
    console.log(obj.name) // prints arun
}
fn()


//2.Write short notes on mutability with examples

//mutability means ability to change . primitive data types are immutable in nature and non-primittives are mutable

var city = "ramgarh"
city[0] = "raj"
console.log(city)//ramgarh . it shows immutable nature


var array = [1,2,3,4,5]
array[0]= "arun"
console.log(array) // [arun,2,3,4,5]. it shows mutable nature


// 3) Array methods - slice , splice , concat , findIndex , sort , reverse , split , join  

//  slice
var num = [1,2,3,4,5]

var slice = num.slice(0,3)
console.log(slice)

//splice
var num = [1,2,3,4,5]
num.splice(3,0,6,7,8);
console.log(num)

//concat 
var a = ["arun","mohit"];
var b = [1,2];
var c = a.concat(b)
console.log(c)

//findIndex
var newArr = [10,20,30,40,50]
var index = newArr.findIndex(function(el){
    return el > 30;
});
console.log(index)


//sort

var arr = [4,6,8,2,0,1];

arr.sort();
console.log(arr)  // sort in increasing order


//reverse

var arr1 = [4,6,8,2,0,1];
arr1.reverse()
console.log(arr1);//reverse the array from last to first

//split

var arr2 = "1,2,3,4,5"

var arr2 = arr2.split(",")
console.log(arr2);// return a new array with splitting the element with ,


//join

var nums = [1, 2, 3, 4, 5];

console.log(nums.join(' '))//convert array to string with " "(space)