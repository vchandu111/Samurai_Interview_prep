// question 1:Difference between Primitive vs Non Primitive data types with examples

//Primitive data types: 1.Number 2.String 3.Boolean 4.Null 5.Undefined - also called as immutable data types
// we can reassing values
var num = 10;
console.log(num); // 10

num = 20;
console.log(num); // 20

let str = "Savan";
console.log(str); // Savan
str[0] = "R";
console.log(str); // Savan
str = "Ravan";
console.log(str); // Ravan

var str1 = "masai school";
var str2 = "masai school";

console.log(str1 === str2); // true

// 2. Non-Primitive data type;

// a. Objects b. Functions c. Array;
// reasign is not possible
// we copy the whole array or object can change the required value by defining index and key values.
var arr = [1, 2, 3, 4];
var arr1 = [1, 2, 3, 4];

console.log(arr === arr1); // false because these storing valur by keys, index so that we gettting false

var obj = {
  name: "Mangesh",
  age: 24,
};

var obj1 = {
  name: "Mangesh",
  age: 24,
};

obj1 = {
  name: "Shiv",
  age: 24,
};
console.log(obj1);
console.log(obj === obj1); // false

// ----------------------------------------------------------------------------

// question 2:Write short notes on mutability with examples
// Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values. (You can make a variable name point to a new value, but the previous value is still held in memory. ... A mutable object is an object whose state can be modified after it is created.

var school = {
  masai: true,
  Newton: true,
  AltCamp: true,
};

console.log(school); // { masai: true, Newton: true, AltCamp: true }

school["masai"] = "yes";
console.log(school); // { masai: 'yes', Newton: true, AltCamp: true }

// ----------------------------------------------------------------------------

// question 3:Array methods - slice , splice , concat , findIndex , sort , reverse , split , join

//a. slice: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

var arr1 = [1, 2, 3, 4, 8, 6, 7];

console.log(arr1.slice(2, 5)); // [3, 4, 8]

console.log(arr1.slice(1)); // [2, 3, 4, 8, 6, 7]

console.log(arr1.slice(0, 7)); // [1, 2, 3, 4, 8, 6, 7]

console.log(arr1.slice(7)); // []

//b. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

var arr2 = [1, 2, 3, 4, 8, 6, 7];

// from index 3 remove 2 elements
console.log(arr2.splice(3, 2)); // [4, 8]

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// from index 2 remove 2 elements
let removed = myFish.splice(2, 2); // [ 'mandarin', 'sturgeon' ]
["mandarin", "sturgeon"];

console.log(removed);

let remo1 = arr2.splice(0, 3, 10);
console.log(remo1);

//c. concat:The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let con1 = [1, 2, 3];
let con2 = [5, 6, 9];

console.log(con1.concat(con2)); //[1, 2, 3, 5, 6, 9]

let con3 = [1, 2, 3];
let con4 = ["one", "two", "three"];
let con5 = [true, false, null];

console.log(con3.concat(con4, con5)); // [1, 2, 3, "one", "two", "three", true, false, null]

//d.findIndex:The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

let arr4 = [100, 150, 90, 120, 15, 25];

let res = (el) => el > 125;

console.log(arr4.findIndex(res)); // 0-99 = 0, 100-149 = 1 150 and above = -1

//e. sort : sort methods is mainly used for sorting an elements in an array it is maingly in the form of alphabetical order and sequence of fist number

let arrsort = ["one", "two", "three", "four"];

console.log(arrsort.sort()); //[ 'four', 'one', 'three', 'two' ] sorting by alphabetic

let arrsort1 = [5, 50, 90, 45, 1, 99, 150, 752, 9, 50]; // [1, 150, 45, 5, 50, 50, 752, 9, 90, 99] sorting by first number

console.log(arrsort1.sort());

//f. reverse : The reverse() methode creates the completly reverse array of given array.
let arrrev = [1, 2, 3, 4, 5, 6, 7];

console.log(arrrev.reverse()); // [7,6,5,4,3,2,1]

//g. split : Tis method splits the string into array with the given delimiter(as given)
let arrsplit = "1, 2, 3, 4, 5, 6, 7";
let ressplit = arrsplit.split(", ");
console.log(ressplit); // [1, 2, 3, 4, 5, 6, 7]

//h. join :The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

let arrjoin = ["one", "two", "three"];
console.log(arrjoin.join()); //one,two,three,four
/*
arrjoin.join(); // 'one,two,three'
arrjoin.join(", "); // 'one, two, three'
arrjoin.join(" + "); // 'one + two + three'
arrjoin.join(""); // 'onetwothree'
*/
