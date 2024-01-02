
// optional chaning

// if you want access an element froma an object that is null or is undefined and you don't want your browser to throw error you use 
// optional chaining

// it's useful because if an error will occur than it will affect the whole program so it's better to use optional chaining .

let obj={
    "name":"Parth",
    //"age":{"whole":"23-3"}
}
console.log(obj.age.whole) //this will throw an error

console.log(obj?.age?.whole) // this will not throw an error