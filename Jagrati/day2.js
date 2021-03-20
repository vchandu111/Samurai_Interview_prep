/*
question 4:-- what is json and its common operations
json is a java script object notation.
it is just a simple text format or just a format of data in text and it is string.
whenever we want send or recieve our data from the web server then we convert our data in json format so that this data can be used by all programming language because,
when we conerted it in json it is only in text formate not in any programming language format.
json data is in string,and it is in java script object format in the strings,its key pairs and key values both are in "",which is string.
single quotes are not valid for json data,only double quotes is used for it

Serialisation and deseriallisation:-
when we convert js object into json then it is called serialisation,
and when we convert json data into js object,it is called deseriallisation.
we can not use method inside json data.

we can use two operations on json data:-
json.parse and json.stringify

to convert js object into json format we use json.stringify,
and to convert json into js object we use json.parse.
*/

var obj = {
    name: "masai school",
    batch: "samurai"
}

var jsonData = JSON.stringify(obj);
console.log(jsonData) // {"name":"masai school","batch":"samurai"}

var jsObj = JSON.parse(jsonData);

console.log(jsObj)// { name: 'masai school', batch: 'samurai' }

/*

question 5. :---- what is hoisting,explaining about var hoisting with examples.

hoisting:--
hoisting means to move at the top,in java script it moves all declarations and function declaration to the top due to default behaviour of java script.

hoisting will apply only on var and function.it will not work upon const.
examples:--
*/

var a;
a = 12
console.log(a) // 12


showName("masai")
function showName(n) { //function declaration

    console.log(n) // masai
}

 let b;
b = 4;
console.log(b) //4

const c;
c = "constant";
console.log(c) // missing initializer in const declaration


