// question
// 1. Difference between Primitive vs Non Primitive data types with examples
// 2. Write short notes on mutability with examples
// 3. Array methods - slice , splice , concat , findIndex , sort , reverse , split , join

//1. in javaScript there are 2 Data tpyes 
//  I. Primitive - primitive data types is by value not by reference we cannot change single value of primitive data types it is also immutable
var name = 'Raushan'
console.log(name)
name[0] = 'K' // here i change value of the index 0 but it not changing
console.log(name)

//  II. Non-Primitive - non-primitive data types is by reference we can change single value of non-primitive data types it is also mutable
var array = [1, 2, 3, 4, 5, 6]
console.log(array)
array[0] = 'Raushan' //here i change the value of the index 0  and its changed 
console.log(array)

//2. Mutability - it means we can change the reference of single element of variable which is assgin like:
var Name = ['raushan', 'ranu', 'prakash', 'uday']
console.log(Name);
Name[2] = 'chandan' //here i change the value of the index 2  and its changed 
console.log(Name)

var obj = {
    name: 'Raushan',
    age: 23,
    city: 'Indore'
}
console.log(obj)
obj.age = 24;
console.log(obj)

//3. Array methods - slice , splice , concat , findIndex , sort , reverse , split , join
// array.slice
var array = [1, 2, 3, 4, 5, 6]
console.log(array.slice(2, 4)) // slice take value from index 2 to less than index 4 that is 3,4. 
console.log(array.length)     //  it means it slice the array from first parameter to less that second parameter 

// array.splice
var array = [1, 2, 3, 4, 5, 6]
console.log(array.splice(2, 4)) // splice remove the element from array from from first para to no pass in second para 
console.log(array.length)

// array.concat
var array = [1, 2, 3, 4, 5, 6]
console.log(array.concat(7, 8)) // concat is use for adding element in last of array

// array.findindex
// not done yet

// array.sort
var array = [5, 8, 2, 9, 3, 4, 6]
console.log(array.sort()) // sort is use for sorting the element of array in assending element

// array.reverse
var array = [1, 2, 3, 4, 5, 6]
console.log(array.reverse()) // reverse is use for revese the element

// array.split
var array = "1 2 3 4 5 6 7"
console.log(array.split(" ")) // split is use for split string in array

// Join
let word = ["one", "two", "three","four"];
console.log(word.join(",")); // it is use for joing the array 