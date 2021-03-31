// question 1
/*
---Difference between Primitive vs Non Primitive data types with examples
---Write short notes on mutability with examples
---Array methods - slice , splice , concat , findIndex , sort , reverse , split , join
*/

/*
primitive data types....
primitve data ype
primitive data types are immutable types
7 primitive data types
String, number, boolean, undefined, null

eg...
*/
var string = 'This is a string.';
string[1] = 'H'
console.log(string) // 'This is a string.'

/*
non - primitive types

Non-primitive values are mutable data types.
*/
var arr = [1,3,4,5,6];
arr[1] = "hello"
console.log(arr);

var obj = {
    name:"milind"
}
var obj2 = {
    name:"milind"
}
console.log(obj === obj2)

// slice => slice is return copy of array from particular range like start to end
    const city = ["bombay","karnataka","Bengal","jammu","Assam","Madhya","Tamilnadu"];

    sort => arr.sort()
    const sorting = [1,4,34,5];
    sorting.sort();
// split => is using for space is happen within inside array then its ignore those spaces and print numbers
    split() => input.split(" ")
    var arr = 1 3 45 5
    var arr2 = 1 3 54 6
    arr.split(" ") => 1 3 54 6

    var arr = [1, 3, 4, 5];
    var input = arr.reverse().join("");
    console.log(input)

    var arr = ["gekk", "ca", "ma", "aa"];
    var input = arr.reverse().join(" ");
    console.log(input)

    var arr = [5, "ca", "ma", "aa"];
    var input = arr.reverse().join(" ");
      console.log(input)
    
