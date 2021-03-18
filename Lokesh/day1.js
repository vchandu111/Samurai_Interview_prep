// question 1


// question 1

//------------------Difference between Primitive vs Non Primitive data types with examples

// Primitive is immutable
// primitive data type are String, Number, Boolean, undefind and Null

// undefined means - not assigned the value to the variable(var a;)
// Null means - Null is a value like var a = null;

var a;
var b = null;
console.log(a+" "+b);
function funStr()
{

    // We will try to change the string - if index in even then change to 'e' else 'o'
    var str = "Lokesh Singh";

    for(var i = 0; i < str.length; i++)
    {
        if(i%2 == 0) 
        {
            str[i] = "e" 
        }
        else{
            str[i] = "o";
        }
    }
    console.log(str);
}
funStr();// string is same becouse string is primitive data type


// Non Primitive data types - Array, Object, function
// Non Primitive data types means changable or mutable

function arrfun()
{
    var arr = [1,2,3,4,5,6];
    console.log(arr);
    arr[2] = 9;
    console.log(arr);
}

arrfun()




//----------------------Write short notes on mutability with examples
// ----------Mutability means changable

function objfun()
{
    var obj = {
        name:"lokesh"
    }
    obj.name = "aaa";

    console.log(obj);
}

objfun();

//------------Array methods - slice , splice , concat , findIndex , sort , reverse , split , join

function arrMathods()
{
    var arr = [1,2,3,4,5,6,7,8,9];

    console.log(arr.slice(2,5));// it will make a new arr from the index 2 to 4
    arr.splice(2, 3);//delete from index 2 to next 2 index
    console.log(arr);
    arr.splice(2, 3, 10,11);//delete from index 2 to next 3 index and add 10 and 11
    console.log(arr);

    var temp = ['a','b','c'];

    var newArr = temp.concat(arr);
    console.log(newArr);
    var item = 5;
    var index = newArr.findIndex(function(el){
        return el > item;
    });
    console.log(index);
    var arr1 = [9,5,6,3,7,1,4,2,8]
    arr1.sort();
    console.log(arr1);
    console.log(arr);
    arr.reverse();
    console.log(arr);
    var str = "this is a string"
    var arr2 = str.split(" ")
    console.log(arr2);
    var arr3 = arr.join(",");
    console.log(arr3);
}
arrMathods();
