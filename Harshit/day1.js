// question 1 :: Difference between Primitive vs Non Primitive data types with examples
//Primitive Data types: primitive data types is immutable means you cannot change data.
var name = "Harshit";
console.log(name); //output :: Harshit
name[1] = "r";
console.log(name); //output :: Harshit
console.log("");

//Non-Primitive Data types: Non-primitie data types is immutable means you can change elements.
var array1 = [1, 2, 3, 4, 5];
console.log(array1); //output::[1,2,3,4,5]
array1[1] = 23;
console.log(array1); //output::[1,23,3,4,5]
console.log("");

var object = {
  name: "masai",
  year: 2019,
};
console.log(object); //output::{ name: 'masai', year: 2019 }
object.name = "school";
console.log(object); //output::{ name: 'school', year: 2019 }
console.log("");

// question 2 :: Write short notes on mutability with examples
// Mutability is a type of variable that can be changed. We can change the element in the array, object and function
var arr = [2, 3, 4, 5, [4, 5, 6, 7]];
console.log(arr); //[2,3,4,5,[4,5,6,7]]
// arr[4] = 77;
// console.log(arr); // [2,3,4,5,77]
arr[5] = 88;
console.log(arr);
console.log("");
// question 3 :: Array methods - slice , splice , concat , findIndex , sort , reverse , split , join
// array.slice() :: slice showing the elements from the starting index to less than the ending index
var array2 = [2, 3, 4, 5, 6, "harshit", "sanas"];
console.log(array2.slice(2, 5)); // output :: [4,5,6]

//array.splice() ::

//array.concat() :: concat is used for adding an elements from other array.
var array3 = [1, 2, 3];
console.log(array3.concat([4, 5, 6])); //output :: [1,2,3,4,5,6]

var obj1 = {
  name: "Hari",
  lname: "sanas",
};
console.log(array3.concat(obj1)); //output :: [ 1, 2, 3, { name: 'Hari', lname: 'sanas' } ]

//array.findIndex() :: it is showing the index of the elements in array

//array.sort() :: sort methods is mainly used for sorting an elements in an array it is maingly in the form of alphabetical order and ascending orders
var arr = [23, 11, 87, 56, 34, 45];
console.log(arr.sort()); //[ 11, 23, 34, 45, 56, 87 ]
//in descending order
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
); //[ 87, 56, 45, 34, 23, 11 ]

var cars = ["fortuner", "Jeep", "Swift", "Alto", "Ferrari"];
console.log(cars.sort()); //[ 'Alto', 'Ferrari', 'Jeep', 'Swift', 'fortuner' ]

//array.reverse() :: it reverse the elements of an array
var array4 = [2, 3, 4, 5, 6];
console.log(array4.reverse()); //output :: [6,5,4,3,2]

var string_arr = ["harshit", "Dattaram", "sanas"];
console.log(string_arr.reverse()); // output=[ 'sanas', 'Dattaram', 'harshit' ]
//array.split() :: split is used to convert a string into an array of a letters
var name = "Harshit";
console.log(name.split("")); //['H', 'a', 'r','s', 'h', 'i','t']

//array.join():: join is main used to join the two different string
var array5 = [34, 45, 56];
console.log(array5.join("")); //344556;

var string1 = ["ram", "shyam", "shaktiman"];
console.log(string1.join(";")); //ram;shyam;shaktiman

// question 4 :: follow this link for all these methods with examples https://javascript.info/array-methods
//doubt in nested array
