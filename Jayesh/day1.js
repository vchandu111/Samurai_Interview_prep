// question 1
// Difference between Primitive vs Non Primitive data types with examples


// primitive data type= primitive data types are the data type which stored the actual value of the varible . 
//                      It is by value and primitive data type value cannot be change.
//                      Number,string,boolen,undefined,null all are primitive data type 

// example of primitive data type
var a="jayesh"
var age=20;
var number="60";


// Non-primitive data type= non-primitive data types are the data type which stored the adress of the varible . 
//                          It is by refrance and  non-primitive data type value can be change.
//                          Array,Object,function all are non-primitive data type 

var array=[10,20,22,3,0,32,1,11,121,21];

var person={
    name:"jayesh",
    age:32,
    discription:"learn the coding"
}




// question 2
//  Write short notes on mutability with examples

// mutability=mutability means the ability to change something.Non-primitive data is also called mutable data.
//             It change the value if reassigned the value

  var user_name=["jayesh","sushil","linta","ram"];

//   if we change the 1st value or any value  of user_name the change this array

 user_name[1]="kiran";

//   output is given  [" jayesh","kiran","linta","ram"]



// Question 3

//  Array methods - slice , splice , concat , findIndex , sort , reverse , split , join   

// slice=It copy the array still 2nd index where 1st parameter show index of starting point and 2nd parameter show the  end point of index 

var a=[10,20,30,40,50]
  
var slice=a.slice(0,4)
console.log(slice)

// output given -[10,20,30,40]

// splice-It use to remove the element in an array

var splice=a.splice(0,2)
console.log(splice)
// output is given [10,20]

// concat=it is use create the new array in this new array old array value still remaing

var concat=a.concat([60,70,80])
console.log(concat)


// sort-it is use to write all element in alphabetical order or for sorting parpose

var name=["jayesh","sushil","linta"]

var sor=name.sort()
console.log(sor)
// output-["jayesh","linta","sushil"]


// reverse-it is used to revarese the array 

var rev=name.reverse()
console.log(rev)
// output-[ 'sushil', 'linta', 'jayesh' ]


// split-it is use to split by spaces or split by \n or split empty space any thing similar type this

var a="jayesh ravindra kale";
 var b=a.split(" ")
console.log(b)
// output is given jayesh seprate ravindra seprate and kale seprate


// join-it is use to join the any thing in between teo element

var fruits = ["Banana", "Orange", "Apple", "Mango"];

  var k=fruits.join("  and  ")
 console.log(k)

//  output given-Banana  and  Orange  and  Apple  and  Mango