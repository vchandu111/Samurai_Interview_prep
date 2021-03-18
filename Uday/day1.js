// question 1 -- Difference between Primitive vs Non Primitive data types with examples 

/* 
1.
Primitive data types are :- number, string, boolean, undefined and null

Non-primitive data types are :- object, array, function.

2.
primitive data is immutable i.e
*/
var name = 'uday'
name = 'rahul'

name[0] = 's'
console.log(name) //output will be rahul if we re-assign the value , here we are re-assigning the value of the declared variable

// if we write the code of line 15 i.e we want to change the value of the declared variable value so here JS will not allow to change the name[0] value because it is immutable
// so its value cannot be changed once the value is created.
// Primitive data type is compared by its value. ex:- 2 values are equal if they both have the same value.
//for example

var num1 = 5;
var num2 = 5;
console.log(num1 === num2);

// output will be true


var str1 = 'uday';
var str2 = 'uday';
console.log(str1 === str2);

// output will be true







//2. Non-primitive data type

// Non-primitive data types are mutable that means its value can be changed after it is created

var arr = ['ram', 'shyam', 'mohan', 'sohan', 'shiv'];
arr[1] = 'kumar';
console.log(arr)

// output will be :- ['ram', 'kumar', 'mohan', 'sohan', 'shiv']; in the above declared array value we can chnage the

// Objects and arrays are not compared by their value. i.e even if two objects and arrays have the same keys and values, they are not equal.

//example of objects:-

var person1 = {
    name: 'uday',
    age: 23
}
var person2 = {
    name: 'uday',
    age: 23
}

var arr1 = [1, 2, 3, 4, 5, 6, 7]
var arr2 = [1, 2, 3, 4, 5, 6, 7]

console.log(person1 === person2) // output will be false

console.log(arr1 === arr2) // output will be false

// in the above two console.log when we compare two object or two two array and the output is false because
// non-primitive data is not compared by the values because it saves the object or array in memory by the address or the referances
//

var obj1 = { name: 'uday', age: 23 }
var obj2 = obj1;
console.log(obj1 === obj2);

// output will be true because as we know object is saved by address so here we are providing the address of ob1 to the obj2





// question-2 -- Write short notes on mutability with examples


// Mutablility means whose value can be changed after the value is created. In this case only Object, Array and functions are
// mutable

// for example:- 

var name = 'ram'
name[0] = 's'
console.log(name) //here there will be no chnage in the name value it will print ram because it is immutable(primitive data type)

var user = {
    name: 'ram',
    age: 23,
    city: 'pune'
}

user.name = 'shyam'
console.log(user)

var arry = [1, 2, 3, 4, 5]
arry[2] = 17;
console.log(arry)
    // here the output will be  user = { name: 'shyam', age: 23, city: 'pune'}
    // because we have changed the value of the name

// in the example of array we have chnaged the value of arry[2] to 17 and it will chnage and 
//output will be [1, 2, 17, 4, 5]






// question-3 -- Array methods - slice , splice , concat , findIndex , sort , reverse , split , join

// method is a function which define the property of an object

//1. Array.slice()
var arr = [1, 2, 3, 4, 'uday', 8, 'rahul']
console.log(arr)
console.log(arr.slice(1, 4))

// here we have used arr.slice() method in this method 
// slice return a new array by copying all the element of an array from start to end (in this case end point is not included)
// in this case start is from 1 and end is 4 (provided argument), so in this case a new array
// will return by copying the element of array from index 1 to 3

// so the output will be [ 2, 3, 4 ]

//2. Array.splice()

// this method is used of remove an element from an array and occupy the free space by the rest of the element
// this is done because if we use delete method in an array so it will is it will delete the particular element 
// but their space will be remain same
// for example:
var num = [1, 2, 3, 4, 5]
var x = delete num[1]
console.log(num.length) // here output will be [ 1, <1 empty item>, 3, 4, 5 ] the spcae of num[1 ] is still there and num.length will be 5

// but when we use array.splice method it will remove that element and occupy that spcae by other element
// array.splice method:- when we use this method it takes two argument one is start and anotherone is how many element we want to delete from an array
// first it modify the array from the start and remove the element via second argument provided and it will return the array of removed element
// here in this method we ca pass the 3rd argument that is for if we want to replace that element from any other element so we can pass that argument
// in this we can also insert an element without removing any element


var arr = [1, 2, 3, 4, 'uday', 8, 'rahul']
console.log(arr.splice(2, 0, 55, 66)) //output:- [ 1, 2, 55, 66, 3, 4, 'uday', 8, 'rahul' ]
console.log(arr.splice(0, 3, 'ram', 'shyam'))
    //output :- [
    //     'ram', 'shyam',
    //     66,    3,
    //     4,     'uday',
    //     8,     'rahul'
    //   ]

console.log(arr)


// 3. arry.concat

var x = [1, 2, 3]
var y = [40, 30]
console.log(x.concat('uday', 'rahul', y))


// so from above example we can say that array.concat() creates a new array
// in that new array we can pass the argument or we can insert another array

//4. array.findIndex()

//The findIndex() method is used to find the index of the first element in an array for which we have given a condition to it
// suppose we have an array of length 6 and we put a condition that if the element is greater than 15 then print that
// if it find the element at index of 3 so it will not check with other element present in the array
// if the conditon is not fullfilled then it will return -1
// for example

var nums = [10, 51, 70, 80, 10, 70];
var k = nums.findIndex(function(test) {
    return test == 70
});
console.log(k);

//output will be 2



//5. sort 
// in this method of array.sort() we can sort our array in a particular manner
// for example we have an array with the elemnent of strings and when we use
// array.sort() will re-arrange the array alphabatically

// if we have an array consist of an element with numeric value then
// it will sort that array in assending order


// if we have an array mix with the number and string then sort method will
// re-arrange the array first it will do numerically and then alphabatically

var array1 = [5, 6, 7, 3, 8, 1]
console.log(array1.sort())

var array2 = ['uday', 'rahul', 'bharat', 'aman']
console.log(array2.sort())


var array3 = [5, 6, 7, 'aman', 'rahul']
console.log(array3.sort())




//6. reverse

// this array.reverse() method is used to reverse the whole array

var array4 = ['uday', 'kumar', 'rahul', 'aman']
console.log(array4.reverse())
    //output will be [ 'aman', 'rahul', 'kumar', 'uday' ]


//7. split
// split is used to form a new array from a given specific argument
//like in the given example we have a string called names and when we use the split method
// and pass the argument that we want to split it between space so it will split that string into array

let names = 'uday kumar singh';

console.log(names.split(' '))

//output [ 'uday', 'kumar', 'singh' ]


//8. join

// this method is used to convert an array into string
//for example:-

var array5 = ['uday', 'rahul', 'aman']
console.log(array5.join(', '))

// output will be uday, rahul, aman
