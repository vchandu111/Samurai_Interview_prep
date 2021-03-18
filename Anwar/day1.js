

// Primitive=> data types means old type of data or ancient data type 
// like: String, Number, Boolean, null, undefined,
// Primitive data are immutable means we can't mutate the value of a paritcular variable,
//like :-
var a = 'masai'
 a[0] = 'z'
//console.log(a) // output will be masai because primitive data type donot support mutation

// Non-Primitive=> data types means new data type which allow mutation and some examples are
// like : Array,Object,function

var arr = [1,2,5,4,8]
arr[1] = 's'

//console.log(arr)// output will be [1,s,5,4,8]



// Mutability => Mutability Means allows for mutation to particular things in javascript mutation means change the value of the variable assigned
//              Mutation is possible only on Non-primitve data types like Array,Object,function
//              examples:-
             var Arr = ['masai','school','is','the','best','place']
             Arr[3]='a'
             //console.log(Arr) //output will be ['masai','school','is','a','best','place']


             //Array Method

             var name = ['anwar','shad','tausif','moin','rizwan']
             let slice = name.slice(1,3)
             //console.log(slice) // it will return an array of element of index 1 to 2 means element of index 1 and index 2.it does not affect the main array
             
             let splice = name.splice(1,2) // it will remove all  the element except element of index 1 to index 2 and return an array and also affect the new array.
             //console.log(splice)

              let concat = name.concat(1998,1996,1995)
              //console.log(concat) // it add the new items to the array and return the array it does not affect the main array,


              var num = [2,5,4,8,7,9,13]
              let findindex = num.findIndex((el)=>{
                  return el > 7
              })
              //console.log(findindex) // expected output is 3 because it find the first index of the array given upon condition in this case it returns el > 7 i.e 8


              let reverse = num.reverse()
              //console.log(reverse)  // it reverse the array element and return an array ;


              var sentence = 'A transformation in education'
              let split = sentence.split(" ") // it will splits the strings by parameter like space,comma etc and return an array.
              console.log(split)
              let join = split.join("_")  // it is just reverse of split it converst an array into a strings and you can join any thing by it's parameter
              console.log(join)
              
