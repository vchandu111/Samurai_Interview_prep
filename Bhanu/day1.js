// question 1
// Difference between Primitive vs Non Primitive data types with examples
// Write short notes on mutability with examples
// Array methods - slice , splice , concat , findIndex , sort , reverse , split , join
// follow this link for all these methods with examples https://javascript.info/array-methods

//Primitive vs Non-Primitive Data types

// 5 primitive data types and 3 non primitive data types
// P DT - Number , String, Boolean, Undefined , Null
// NP Dt - Function, Array, Object 
//Prim- Immutable, Non-P Mutable
// P- can't change value  by ref N-P can change value by ref

var arr=[0,1,2,3,3,"qwerty",2,5,6,7,"123",1,"123"];   
var c=arr.findIndex((t,i)=>{ 
    if(t=="123"){   //if item not present returns -1
        //console.log(i); // sol: 1  4  -1
        return i; // returns first occurance and doesn't return item from 0th index instead gives -1
        
    }
});
console.log(c);
var arr=[0,1,"2",7,3,3,"qwerty",2,5,6,"123",1,"123"];   

//console.log(arr.sort())
console.log(arr.slice(1,4))// slices from start index - 1 to up till 4 but not 4 - end index
arr.splice(1,2,...["abc",2,3,90])//removes from index 1 to 2 and adds elements
//console.log(arr)
var arr2= ["rat","cat"]

console.log(arr2.concat(arr)) // returns concatenated arr which is arr added into arr2
console.log(arr2,arr,arr.concat(arr2))