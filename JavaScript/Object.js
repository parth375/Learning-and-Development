// to insert a key with a value in a object
const obj={
    "name":"Paarth",
    "age":23,
    "numebr":344345665654,
    "gender":"m"

}
const k="email"  // key stored in a variable
obj[k]="parthchauhan.375@gamil.com" // puuting value of the key
console.log(obj)

// dot vs bracket notation
 
console.log(obj.name)
console.log(obj['name'])

// both will print the same results the difference will come when you use a key like:

const obj2={
    "addhar card":56575489939
}
// here we cannot use a dot notation as it will give error so:

console.log(obj2["addhar card"])

console.log(Object.keys(obj)) // this will give array with Object keys

const key1="value1"
console.log(["key1"])

const obj3={
    "key1":1,
     "key2":2,
     "key1":3
}
// here if you print key1 that it will be overwrited and key1 value will be 3

// spread operator
 
 // it will help to copy or duplicate another object
 // also helps to convert any other datatype to object
 
const newObj={...'abdshb'} 
const newObj2={...obj2}
console.log(newObj)

// object destrucuting

let{one,two,...three}=obj
console.log(three)