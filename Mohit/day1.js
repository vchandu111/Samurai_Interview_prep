/* Question 1 : Difference between Primitive vs Non Primitive data types with examples ?

Answer 1 : Primitive data types are basic and building blocks of data structures and all primitive data types are immutable for eg Number, String, Boolean etc whereas Non primitive data types are made up of primitive ones for eg Object, array and functions.
In javascript there are 6 primitive data types 
    - String
    - Number
    - Boolean
    - Undefined
    - Symbol
    - Null

    3 non primitive data types
        - Object
        - Array
        - Function


Question 2 : Write short notes on mutability with examples ?

Answer 2 : Mutability is the ability to change the value of variable.
for eg -    var str = "Masai"
            str[0] = "z"
            console.log(str) // output - Masai // as string is a primitve data type which is non mutable.

            var arr = [1,2,3,4]
            arr[0] = 0
            console.log(arr) // output - [0,2,3,4] // as array is a non primitive data type which is mutable.



Question 3 : Array methods - slice , splice , concat , findIndex , sort , reverse , split , join. Explain.

Answer 3 : Slice is used to create a copy of particular portion of the array without affecting the original array.
for eg : 
    var arr = [1,2,3,4,5]
    var slicedPart = arr.slice(0,3) //0 is start and 3 is end(end not included)
    console.log(arr,slicedPart) // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]


    Splice is used to delete a particular portion of the array and shift the elements to occupy the deleted spaces. It can also be used to create a copy of the array but it will affect the original array.
    for eg : 
        var arr = [1,2,3,4,5]
        var splicedPart = arr.splice(0,3,9,10) // 0 is start, 3 is end(not incl), 9 and 10 are elements added in place of the deleted ones.
        console.log(arr,splicedPart) // [ 9, 10, 4, 5 ] [ 1, 2, 3 ]


    Reverse is used to reverse a array.
    for eg : 
        var arr = [1,2,3,4,5]
        arr.reverse()
        console.log(arr) // [ 5, 4, 3, 2, 1 ]


    Split is used to convert a string into array.
    for eg : 
    var str = "Mohit,Vishal,Kapil"
    var arr = str.split(",",2) // 2 is end(not incl)
    console.log(arr) // [ 'Mohit', 'Vishal' ]


    Join is opposite of split and it is used to convert array into string.
    for eg : 
    var str = ["Mohit","Kapil","Vishal"]
    var arr = str.join(",")
    console.log(arr) // Mohit,Kapil,Vishal

 */

//  var arr = ["a",2,3,4,5,6]
//  var index = arr.find(item => item==1)
//  console.log(index)


 var str = ["Mohit","Kapil","Vishal"]
 var arr = str.join(",")
 console.log(arr)