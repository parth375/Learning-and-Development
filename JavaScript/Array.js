// Array are global object in JS
let arr=[1,2,3]
console.log(typeof (arr)) // this will give type as object

let obj={
    "name":"Parth",
    "age":23
}
console.log(typeof (obj)) // this will also give type as object

// To differentiate between them you should use a function called isArray

console.log(Array.isArray(arr)) // it will return true 
console.log(Array.isArray(obj)) // it will return false

let arr2=['A','B','C','D']
let arr3=arr2
arr2.push('E')
console.log(arr3)

// for of loop -> print elements of array

for( let it of arr3){
    console.log(it)
}

// for in loop -> print index of array
 
for( let it in arr3){
    console.log(it)
}

// The above are written to understand a that array in JS are reference type means if you try copy array like the above and 
// if you do any changes in the orginal array it will be reflected in the duplicate array also.

// one solution for this to use the slice function :

arr3=arr2.slice(0) 

// another solution is spread operator

arr3=[...arr2]

// array Destructing

// This was introduced to improve readibility and improve efficency and to make access in an array fast

let arr4=[1,2,3,4,5]
// If you have to perform a task like storing an element of array in variable then you have to 
let one= arr4[1]
let two=arr4[2]

// But with Array Destrcuting you can put this in one line

let [on,tw,three,four]=arr4 // array destructure
let [t1,,,t4]=arr4 // to skip elements
let [vr1,vr2,...arr5]=arr4 //-> Here we are storing the first two elements in vr1 and vr2 and for the rest we are creating a new array

console.log(arr5)

